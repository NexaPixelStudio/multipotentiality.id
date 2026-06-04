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
  "    setIsEditingFormula(false);\n    setFormulaFocusTick((tick) => tick + 1);\n  };\n\n  const selectAnswerCell",
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

replaceOnce(
  "  const handleCellClick = (cellRef, meta = {}) => {\n    const current = String(answer || '').trimStart();\n    if (!current.startsWith('=')) {\n      if (meta.isAnswerSheet !== false) selectAnswerCell(cellRef);\n    }\n  };\n\n  const handleRangeSelected = (rangeRef) => { setSelectedRange(rangeRef); insertRangeIntoFormula(rangeRef); };",
  "  const handleCellClick = (cellRef, meta = {}) => {\n    const current = String(answer || '').trimStart();\n    const key = String(cellRef || '').toUpperCase();\n\n    if (meta.isAnswerSheet && (!isEditingFormula || cellFormulas[key])) {\n      suppressNextRangeRef.current = key;\n      selectAnswerCell(cellRef);\n      return;\n    }\n\n    if (!current.startsWith('=')) {\n      if (meta.isAnswerSheet !== false) {\n        suppressNextRangeRef.current = key;\n        selectAnswerCell(cellRef);\n      }\n    }\n  };\n\n  const handleRangeSelected = (rangeRef, meta = {}) => {\n    const key = String(rangeRef || '').toUpperCase();\n\n    if (suppressNextRangeRef.current === key) {\n      suppressNextRangeRef.current = null;\n      setSelectedRange(rangeRef);\n      return;\n    }\n\n    setSelectedRange(rangeRef);\n    if (isEditingFormula) insertRangeIntoFormula(rangeRef);\n  };",
  'cell click and range selection edit guard'
);

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
