import { readFileSync, writeFileSync } from 'node:fs';

const appPath = 'src/App.jsx';
let source = readFileSync(appPath, 'utf8');

const replaceOnce = (from, to, label) => {
  if (source.includes(to)) return;
  if (!source.includes(from)) {
    console.warn(`[patch-formula-behavior] Skip ${label}: target not found`);
    return;
  }
  source = source.replace(from, to);
};

replaceOnce(
  "import { useEffect, useMemo, useState } from 'react';",
  "import { useEffect, useMemo, useRef, useState } from 'react';",
  'React useRef import'
);

// Excel fill-down must shift only same-sheet relative refs like A2 -> A3.
// Sheet-qualified refs like Sheet1!D1:D9 must stay on Sheet1 and keep the same raw-data range.
const shiftBlockRegex = /const shiftFormulaRows = \(formula = '', rowOffset = 0\) => \{[\s\S]*?\n\};\n\nexport default function App\(\) \{/;
const safeShiftBlock = `const shiftFormulaRows = (formula = '', rowOffset = 0) => {
  if (!rowOffset) return formula;

  const protectedRefs = [];
  const protectedFormula = String(formula).replace(/(?:'[^']+'|[A-Za-z0-9_ ]+)!\\$?[A-Z]+\\$?\\d+(?::\\$?[A-Z]+\\$?\\d+)?/gi, (match) => {
    const token = \`__PROTECTED_SHEET_REF_\${protectedRefs.length}__\`;
    protectedRefs.push(match);
    return token;
  });

  const shifted = protectedFormula.replace(/(^|[^A-Z0-9_!])(\\$?)([A-Z]{1,3})(\\$?)(\\d+)(?![A-Z0-9_])/gi, (match, prefix, colLock, col, rowLock, row) => {
    if (rowLock) return match;
    return prefix + colLock + col + rowLock + Math.max(1, Number(row) + rowOffset);
  });

  return shifted.replace(/__PROTECTED_SHEET_REF_(\\d+)__/g, (_, index) => protectedRefs[Number(index)] || '');
};

export default function App() {`;

if (!source.includes('PROTECTED_SHEET_REF')) {
  if (shiftBlockRegex.test(source)) {
    source = source.replace(shiftBlockRegex, safeShiftBlock);
  } else {
    console.warn('[patch-formula-behavior] Skip safe shiftFormulaRows: target not found');
  }
}

replaceOnce(
  "  const [cellFormulas, setCellFormulas] = useState({});",
  "  const [cellFormulas, setCellFormulas] = useState({});\n  const [isEditingFormula, setIsEditingFormula] = useState(false);\n  const suppressNextRangeRef = useRef(null);",
  'formula edit state'
);

replaceOnce(
  "  const clearSessionCells = () => {\n    setFilledCellValues({});\n    setCellFormulas({});\n  };",
  "  const clearSessionCells = () => {\n    setFilledCellValues({});\n    setCellFormulas({});\n    setIsEditingFormula(false);\n    suppressNextRangeRef.current = null;\n  };",
  'clear session edit state'
);

replaceOnce(
  "    setFormulaFocusTick((tick) => tick + 1);\n  };\n\n  const selectAnswerCell",
  "    setIsEditingFormula(false);\n    suppressNextRangeRef.current = null;\n    setFormulaFocusTick((tick) => tick + 1);\n  };\n\n  const selectAnswerCell",
  'load cell stops editing'
);

replaceOnce(
  "    setLastRangeInsertion(null);\n    setSelectedRange(null);\n    setFormulaFocusTick((tick) => tick + 1);\n  };",
  "    setLastRangeInsertion(null);\n    setSelectedRange(null);\n    setIsEditingFormula(false);\n    suppressNextRangeRef.current = null;\n    setFormulaFocusTick((tick) => tick + 1);\n  };",
  'move after commit stops editing'
);

replaceOnce(
  "  const handleAnswerChange = (nextValue) => { setAnswer(nextValue); setFeedback(null); setLastRangeInsertion(null); };",
  "  const handleAnswerChange = (nextValue) => { setAnswer(nextValue); setFeedback(null); setLastRangeInsertion(null); setIsEditingFormula(String(nextValue || '').trimStart().startsWith('=')); };",
  'answer change starts editing'
);

replaceOnce(
  "    if (!current.trimStart().startsWith('=')) return;",
  "    if (!isEditingFormula || !current.trimStart().startsWith('=')) return;",
  'range insert only while editing'
);

const fixedSelectionBlock = `  const handleCellClick = (cellRef, meta = {}) => {
    const current = String(answer || '').trimStart();
    const key = String(cellRef || '').toUpperCase();

    if (meta.isAnswerSheet && cellFormulas[key]) {
      suppressNextRangeRef.current = key;
      setIsEditingFormula(false);
      selectAnswerCell(cellRef);
      return;
    }

    if (isEditingFormula && current.startsWith('=')) {
      return;
    }

    if (meta.isAnswerSheet && !cellFormulas[key]) {
      suppressNextRangeRef.current = key;
      setIsEditingFormula(false);
      selectAnswerCell(cellRef);
      return;
    }

    if (!current.startsWith('=')) {
      if (meta.isAnswerSheet !== false) selectAnswerCell(cellRef);
    }
  };

  const handleRangeSelected = (rangeRef, meta = {}) => {
    const key = String(rangeRef || '').toUpperCase();

    if (suppressNextRangeRef.current === key) {
      suppressNextRangeRef.current = null;
      setSelectedRange(rangeRef);
      return;
    }

    setSelectedRange(rangeRef);
    if (isEditingFormula) insertRangeIntoFormula(rangeRef);
  };

`;

const selectionBlockRegex = /  const handleCellClick = \(cellRef, meta = \{\}\) => \{[\s\S]*?  const handleFillDrag = /;
if (!source.includes("if (isEditingFormula && current.startsWith('='))")) {
  if (!selectionBlockRegex.test(source)) {
    console.warn('[patch-formula-behavior] Skip cell selection block: target not found');
  } else {
    source = source.replace(selectionBlockRegex, `${fixedSelectionBlock}  const handleFillDrag = `);
  }
}

replaceOnce(
  "    setSelectedRange(cells.length ? `${cells[0]}:${cells[cells.length - 1]}` : null);\n    if (cells.length) setActiveCell(cells[cells.length - 1]);\n  };",
  "    setSelectedRange(cells.length ? `${cells[0]}:${cells[cells.length - 1]}` : null);\n    setIsEditingFormula(false);\n    suppressNextRangeRef.current = null;\n    if (cells.length) setActiveCell(cells[cells.length - 1]);\n  };",
  'fill drag stops editing'
);

replaceOnce(
  "    const committed = commitFormulaToCell(completedFormula, activeCell);\n    if (committed) moveAfterCommit(committed.target);",
  "    const committed = commitFormulaToCell(completedFormula, activeCell);\n    setIsEditingFormula(false);\n    suppressNextRangeRef.current = null;\n    if (committed) moveAfterCommit(committed.target);",
  'check answer stops editing'
);

replaceOnce(
  "onFocusChange={() => setSelectionTarget('formula')}",
  "onFocusChange={(isActive) => { setSelectionTarget('formula'); if (isActive) setIsEditingFormula(true); }}",
  'formula bar focus starts editing'
);

writeFileSync(appPath, source);
console.log('[patch-formula-behavior] App formula edit behavior patched');
