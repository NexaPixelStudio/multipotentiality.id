import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import FormulaSidebar from './components/FormulaSidebar';
import ProgressPanel from './components/ProgressPanel';
import FormulaTheory from './components/FormulaTheory';
import ExerciseTable from './components/ExerciseTable';
import FormulaBar from './components/FormulaBar';
import HintBox from './components/HintBox';
import FeedbackBox from './components/FeedbackBox';
import { formulaCatalogFull, importFormulaCatalog } from './data/formulaCatalogFull';
import { getCuratedExercise, getCuratedExercises, sharedExerciseTables } from './data/curatedExercises';
import { createGenericExercise, genericTheoryTable } from './data/exerciseTemplates';
import { formulaForSeparator, validateFormula, validateGenericFormula } from './utils/formulaValidator';
import { autoCloseFormula, evaluateFormula } from './utils/formulaEngine';
import { defaultProgressState, loadProgress, markFormulaAttempt, markFormulaOpened, resetProgress, saveProgress, setPreference } from './utils/localStorage';
import { displayCategories } from './data/formulaCategories';



const LOOKUP_FUNCTION_NAMES = new Set(['VLOOKUP', 'HLOOKUP', 'XLOOKUP', 'LOOKUP', 'MATCH', 'XMATCH']);
const LOOKUP_FUNCTION_IDS = new Set(['vlookup', 'hlookup', 'xlookup', 'lookup', 'match', 'xmatch', 'index-match']);
const CRITERIA_FUNCTION_NAMES = new Set(['SUMIF', 'SUMIFS', 'COUNTIF', 'COUNTIFS', 'AVERAGEIF', 'AVERAGEIFS', 'FILTER']);
const CRITERIA_FUNCTION_IDS = new Set(['sumif', 'sumifs', 'countif', 'countifs', 'averageif', 'averageifs', 'filter']);
const HELPER_FUNCTION_NAMES = new Set([...LOOKUP_FUNCTION_NAMES, ...CRITERIA_FUNCTION_NAMES]);
const HELPER_FUNCTION_IDS = new Set([...LOOKUP_FUNCTION_IDS, ...CRITERIA_FUNCTION_IDS]);

function getTypedFunctionName(formula = '') {
  const clean = String(formula || '').trim();
  const match = clean.match(/^=\s*([A-Za-z.][A-Za-z0-9._]*)\s*\(/);
  return match ? match[1].toUpperCase() : '';
}

function splitTopLevelArgs(text = '') {
  const args = [];
  let current = '';
  let depth = 0;
  let inQuote = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (char === '"' && text[index - 1] !== '\\') inQuote = !inQuote;

    if (!inQuote) {
      if (char === '(') depth += 1;
      if (char === ')') depth = Math.max(0, depth - 1);
      if (char === ',' && depth === 0) {
        args.push(current.trim());
        current = '';
        continue;
      }
    }

    current += char;
  }

  if (current.trim()) args.push(current.trim());
  return args;
}

function parseExpectedCall(formula = '') {
  const clean = String(formula || '').trim().replace(/^=/, '');
  const openIndex = clean.indexOf('(');
  if (openIndex === -1 || !clean.endsWith(')')) return null;

  const name = clean.slice(0, openIndex).trim().toUpperCase();
  const inner = clean.slice(openIndex + 1, -1);
  return { name, args: splitTopLevelArgs(inner) };
}

function stripQuotes(value = '') {
  const text = String(value || '').trim();
  if ((text.startsWith('"') && text.endsWith('"')) || (text.startsWith("'") && text.endsWith("'"))) {
    return text.slice(1, -1);
  }
  return text;
}

function toColName(number = 1) {
  let value = Number(number) || 1;
  let output = '';
  while (value > 0) {
    const remainder = (value - 1) % 26;
    output = String.fromCharCode(65 + remainder) + output;
    value = Math.floor((value - 1) / 26);
  }
  return output || 'A';
}

function getCellValueFromTable(table = {}, ref = '') {
  const match = String(ref || '').toUpperCase().replace(/\$/g, '').match(/^([A-Z]+)(\d+)$/);
  if (!match) return null;

  const [, letters, rowText] = match;
  const colNumber = letters.split('').reduce((sum, char) => sum * 26 + char.charCodeAt(0) - 64, 0);
  const rowNumber = Number(rowText);

  if (rowNumber === 1) return table.columns?.[colNumber - 1] ?? null;
  return table.rows?.[rowNumber - 2]?.[colNumber - 1] ?? null;
}

function makeHelperItem(rawValue = '', role = 'Criteria', table = {}) {
  const raw = String(rawValue || '').trim();
  if (!raw) return null;
  if (/^TRUE$|^FALSE$/i.test(raw)) return { label: raw.toUpperCase(), insert: raw.toUpperCase(), role };

  const isQuoted = /^".*"$/.test(raw) || /^'.*'$/.test(raw);
  const isCell = /^\$?[A-Z]+\$?\d+$/i.test(raw);
  const isRange = /^\$?[A-Z]+\$?\d+:\$?[A-Z]+\$?\d+$/i.test(raw);
  const isNumber = /^-?\d+(\.\d+)?$/.test(raw);

  if (isRange) return null;

  if (isCell) {
    const cleanRef = raw.toUpperCase().replace(/\$/g, '');
    const cellValue = getCellValueFromTable(table, cleanRef);
    return {
      label: cleanRef,
      insert: cleanRef,
      role,
      note: cellValue === null || typeof cellValue === 'undefined' || cellValue === '' ? '' : `isi: ${cellValue}`
    };
  }

  if (isQuoted) {
    const label = stripQuotes(raw);
    return { label, insert: `"${label}"`, role };
  }

  if (isNumber) return { label: raw, insert: raw, role };

  return { label: raw, insert: `"${stripQuotes(raw)}"`, role };
}

function addHelperItem(list, item) {
  if (!item) return;
  const key = `${item.role}|${item.insert}`.toUpperCase();
  if (list.some((existing) => `${existing.role}|${existing.insert}`.toUpperCase() === key)) return;
  list.push(item);
}

function extractComparisonValues(formula = '', table = {}) {
  const values = [];
  const text = String(formula || '');
  const comparisons = text.match(/[A-Z]+\d+\s*(?:>=|<=|<>|=|>|<)\s*("[^"]+"|\d+(?:\.\d+)?|TRUE|FALSE)/gi) || [];
  comparisons.forEach((item) => {
    const match = item.match(/(?:>=|<=|<>|=|>|<)\s*(.+)$/i);
    if (match) addHelperItem(values, makeHelperItem(match[1], 'Nilai kondisi', table));
  });
  return values;
}

function getQuestionHelperValues(exercise, table = {}) {
  const call = parseExpectedCall(exercise?.expectedFormula);
  const helpers = [];

  if (!call) return helpers;

  const { name, args } = call;

  if (LOOKUP_FUNCTION_NAMES.has(name)) {
    addHelperItem(helpers, makeHelperItem(args[0], 'Lookup value', table));
  }

  if (name === 'SUMIF' || name === 'COUNTIF') {
    addHelperItem(helpers, makeHelperItem(args[1], 'Criteria value', table));
  }

  if (name === 'AVERAGEIF') {
    addHelperItem(helpers, makeHelperItem(args[1], 'Criteria value', table));
  }

  if (name === 'SUMIFS' || name === 'COUNTIFS' || name === 'AVERAGEIFS') {
    const firstCriteriaIndex = name === 'COUNTIFS' ? 1 : 2;
    for (let index = firstCriteriaIndex; index < args.length; index += 2) {
      addHelperItem(helpers, makeHelperItem(args[index], 'Criteria value', table));
    }
  }

  if (name === 'FILTER') {
    const quotedValues = String(exercise?.expectedFormula || '').match(/"[^"]+"/g) || [];
    quotedValues.forEach((value) => addHelperItem(helpers, makeHelperItem(value, 'Criteria value', table)));
  }

  extractComparisonValues(exercise?.expectedFormula, table).forEach((value) => addHelperItem(helpers, value));

  return helpers;
}

function getActiveFunctionArgIndex(formula = '', cursor = formula.length) {
  const before = String(formula || '').slice(0, cursor);
  let depth = 0;

  for (let index = before.length - 1; index >= 0; index -= 1) {
    const char = before[index];
    if (char === ')') {
      depth += 1;
      continue;
    }
    if (char !== '(') continue;

    if (depth > 0) {
      depth -= 1;
      continue;
    }

    const prefix = before.slice(0, index);
    const match = prefix.match(/([A-Za-z.][A-Za-z0-9._]*)\s*$/);
    if (!match) return null;

    const argsText = before.slice(index + 1);
    let nested = 0;
    let argIndex = 0;
    let inQuote = false;

    for (let argCursor = 0; argCursor < argsText.length; argCursor += 1) {
      const item = argsText[argCursor];
      if (item === '"' && argsText[argCursor - 1] !== '\\') inQuote = !inQuote;
      if (inQuote) continue;
      if (item === '(') nested += 1;
      if (item === ')') nested = Math.max(0, nested - 1);
      if ((item === ',' || item === ';') && nested === 0) argIndex += 1;
    }

    return { name: match[1].toUpperCase(), argIndex };
  }

  return null;
}

function replaceFirstArgument(formula = '', lookupRef = '', separatorMode = 'id') {
  const ref = String(lookupRef || '').trim();
  if (!ref) return formula;

  const current = String(formula || '');
  const match = current.match(/^(\s*=\s*[A-Za-z.][A-Za-z0-9._]*\s*\()/);
  if (!match) return current;

  const prefix = match[1];
  const openEnd = prefix.length;
  const separator = separatorMode === 'id' ? ';' : ',';
  const rest = current.slice(openEnd);
  let depth = 0;
  let inQuote = false;

  for (let index = 0; index < rest.length; index += 1) {
    const char = rest[index];
    if (char === '"' && rest[index - 1] !== '\\') inQuote = !inQuote;
    if (inQuote) continue;
    if (char === '(') depth += 1;
    if (char === ')') depth = Math.max(0, depth - 1);
    if ((char === ';' || char === ',') && depth === 0) {
      return `${prefix}${ref}${separator}${rest.slice(index + 1)}`;
    }
    if (char === ')' && depth === 0) {
      return `${prefix}${ref}${rest.slice(index)}`;
    }
  }

  return `${prefix}${ref}${separator}`;
}

function insertHelperValueAtCursor(formula = '', helperValue = '', cursor = formula.length, separatorMode = 'id') {
  const insert = String(helperValue || '').trim();
  if (!insert) return formula;

  const current = String(formula || '');
  const activeArg = getActiveFunctionArgIndex(current, cursor);

  if (activeArg && LOOKUP_FUNCTION_NAMES.has(activeArg.name) && activeArg.argIndex === 0) {
    return replaceFirstArgument(current, insert, separatorMode);
  }

  const start = Math.min(cursor ?? current.length, current.length);
  return `${current.slice(0, start)}${insert}${current.slice(start)}`;
}

const navigationFamilyOrder = [
  'SUM Family',
  'COUNT Family',
  'AVERAGE Family',
  'MIN / MAX Family',
  'IF Family',
  'Logical Test Family',
  'LOOKUP Family',
  'INDEX MATCH Family',
  'Reference Family',
  'Text Extract Family',
  'Text Clean Family',
  'Text Join Family',
  'Text Search Family',
  'Date Family',
  'Time Family',
  'Dynamic Filter Family',
  'Dynamic Sort Family',
  'Dynamic Stack Family',
  'Dynamic Transform Family',
  'Round Family',
  'Random Family',
  'Power Family',
  'Subtotal Family',
  'Error Check Family',
  'Cell Info Family',
  'Forecast Family',
  'Rank & Percentile Family'
];

function getNavigationFamily(formula) {
  const name = formula?.name?.toUpperCase?.() || '';
  const category = formula?.category || formula?.displayCategory || '';

  if (/^SUM(IF|IFS|PRODUCT)?$/.test(name) || ['SUBTOTAL', 'AGGREGATE'].includes(name)) return 'SUM Family';
  if (/^COUNT/.test(name)) return 'COUNT Family';
  if (/^AVERAGE/.test(name)) return 'AVERAGE Family';
  if (['MIN', 'MAX', 'LARGE', 'SMALL'].includes(name)) return 'MIN / MAX Family';

  if (['IF', 'IFS', 'IFERROR', 'IFNA', 'SWITCH', 'TRUE', 'FALSE'].includes(name)) return 'IF Family';
  if (['AND', 'OR', 'NOT', 'XOR'].includes(name)) return 'Logical Test Family';

  if (['VLOOKUP', 'HLOOKUP', 'XLOOKUP', 'LOOKUP'].includes(name)) return 'LOOKUP Family';
  if (['INDEX', 'MATCH', 'XMATCH', 'INDEX MATCH'].includes(name)) return 'INDEX MATCH Family';
  if (['ROW', 'ROWS', 'COLUMN', 'COLUMNS', 'ADDRESS', 'INDIRECT', 'OFFSET', 'FORMULATEXT', 'HYPERLINK', 'CHOOSE', 'CHOOSECOLS', 'CHOOSEROWS', 'AREAS'].includes(name)) return 'Reference Family';

  if (['LEFT', 'RIGHT', 'MID', 'TEXTBEFORE', 'TEXTAFTER', 'TEXTSPLIT'].includes(name)) return 'Text Extract Family';
  if (['TRIM', 'CLEAN', 'LOWER', 'UPPER', 'PROPER', 'LEN', 'VALUE', 'NUMBERVALUE', 'TEXT', 'DOLLAR', 'FIXED'].includes(name)) return 'Text Clean Family';
  if (['CONCAT', 'CONCATENATE', 'TEXTJOIN', 'REPT', 'UNICHAR', 'CHAR'].includes(name)) return 'Text Join Family';
  if (['FIND', 'SEARCH', 'SUBSTITUTE', 'REPLACE', 'EXACT'].includes(name)) return 'Text Search Family';

  if (['DATE', 'DAY', 'MONTH', 'YEAR', 'TODAY', 'DATEDIF', 'DAYS', 'NETWORKDAYS', 'NETWORKDAYS.INTL', 'WORKDAY', 'WORKDAY.INTL', 'EDATE', 'EOMONTH', 'WEEKDAY', 'WEEKNUM', 'ISOWEEKNUM', 'YEARFRAC'].includes(name)) return 'Date Family';
  if (['NOW', 'HOUR', 'MINUTE', 'SECOND', 'TIME', 'TIMEVALUE'].includes(name)) return 'Time Family';

  if (['FILTER', 'UNIQUE'].includes(name)) return 'Dynamic Filter Family';
  if (['SORT', 'SORTBY'].includes(name)) return 'Dynamic Sort Family';
  if (['VSTACK', 'HSTACK', 'EXPAND', 'WRAPROWS', 'WRAPCOLS'].includes(name)) return 'Dynamic Stack Family';
  if (['TRANSPOSE', 'TAKE', 'DROP', 'TOCOL', 'TOROW', 'MAKEARRAY', 'MAP', 'REDUCE', 'SCAN', 'BYROW', 'BYCOL'].includes(name)) return 'Dynamic Transform Family';

  if (['ROUND', 'ROUNDUP', 'ROUNDDOWN', 'MROUND', 'INT', 'MOD', 'CEILING', 'CEILING.MATH', 'FLOOR', 'FLOOR.MATH', 'ABS', 'SIGN', 'TRUNC'].includes(name)) return 'Round Family';
  if (['RAND', 'RANDBETWEEN', 'RANDARRAY'].includes(name)) return 'Random Family';
  if (['POWER', 'SQRT', 'SQRTPI', 'EXP', 'LN', 'LOG', 'LOG10'].includes(name)) return 'Power Family';
  if (['SUBTOTAL', 'AGGREGATE', 'SUMPRODUCT'].includes(name)) return 'Subtotal Family';

  if (/^IS/.test(name) || ['TYPE', 'N', 'NA', 'ERROR.TYPE'].includes(name)) return 'Error Check Family';
  if (['CELL', 'INFO', 'SHEET', 'SHEETS'].includes(name)) return 'Cell Info Family';

  if (['FORECAST', 'FORECAST.LINEAR', 'TREND', 'GROWTH', 'LINEST', 'LOGEST'].includes(name)) return 'Forecast Family';
  if (/^(RANK|PERCENTILE|QUARTILE|MEDIAN|MODE|STDEV|VAR)/.test(name)) return 'Rank & Percentile Family';

  if (category === 'Financial') {
    if (/^(PV|FV|PMT|RATE|NPER|IPMT|PPMT)/.test(name)) return 'Loan & Investment Family';
    if (/^(NPV|IRR|MIRR|XIRR|XNPV)/.test(name)) return 'Cashflow Family';
    if (/^(DB|DDB|SLN|SYD|VDB|AMOR)/.test(name)) return 'Depreciation Family';
    return 'Financial Family';
  }

  if (category === 'Engineering') {
    if (/CONVERT/.test(name)) return 'Conversion Family';
    if (/^(BIN|DEC|HEX|OCT)/.test(name)) return 'Number Base Family';
    if (/^IM/.test(name) || name.includes('COMPLEX')) return 'Complex Number Family';
    return 'Engineering Family';
  }

  if (category === 'Database') return 'Database Family';
  if (category === 'Web') return 'Web Family';
  if (category === 'Cube') return 'Cube Family';
  if (category === 'Compatibility') return 'Legacy Compatibility Family';
  if (category === 'Advanced / Professional') return 'Professional Formula Family';
  if (category === 'Rare / Specialized') return 'Specialized Family';

  const baseName = name.split('.')[0].split(/[^A-Z0-9]+/)[0];
  return `${baseName} Family`;
}

function getNavigationFamilyIndex(familyName) {
  const index = navigationFamilyOrder.indexOf(familyName);
  return index === -1 ? 999 : index;
}

function getNavigationCategoryIndex(categoryName) {
  const index = displayCategories.indexOf(categoryName);
  return index === -1 ? 999 : index;
}

function getFormulaNavigationList(formulas = []) {
  const originalIndex = new Map(formulas.map((formula, index) => [formula.id, index]));
  return [...formulas].sort((a, b) => {
    const categoryDiff = getNavigationCategoryIndex(a.displayCategory) - getNavigationCategoryIndex(b.displayCategory);
    if (categoryDiff) return categoryDiff;

    const familyDiff = getNavigationFamilyIndex(getNavigationFamily(a)) - getNavigationFamilyIndex(getNavigationFamily(b));
    if (familyDiff) return familyDiff;

    return (originalIndex.get(a.id) ?? 0) - (originalIndex.get(b.id) ?? 0);
  });
}

function getLearningModeConfig(mode = 'guided') {
  const normalized = ['guided', 'practice', 'challenge'].includes(mode) ? mode : 'guided';

  const config = {
    guided: {
      id: 'guided',
      title: 'Guided Mode',
      description: 'Bantuan paling lengkap. Cocok untuk rumus baru atau saat user masih belajar alurnya.',
      showLogicPanel: true,
      showLogicExample: true,
      showValueHelper: true,
      enableFormulaAssist: true,
      showLiveResult: true,
      showRangeTips: true,
      hintLimit: Infinity
    },
    practice: {
      id: 'practice',
      title: 'Practice Mode',
      description: 'Bantuan lebih sedikit. User tetap dapat arah utama, tapi contoh dan hint dibuat lebih terbatas.',
      showLogicPanel: true,
      showLogicExample: false,
      showValueHelper: true,
      enableFormulaAssist: true,
      showLiveResult: true,
      showRangeTips: true,
      hintLimit: 2
    },
    challenge: {
      id: 'challenge',
      title: 'Challenge Mode',
      description: 'Mode tanpa bantuan utama. User menjawab dari soal dan tabel saja, seperti ujian kecil.',
      showLogicPanel: false,
      showLogicExample: false,
      showValueHelper: false,
      enableFormulaAssist: false,
      showLiveResult: false,
      showRangeTips: false,
      hintLimit: 0
    }
  };

  return config[normalized];
}


export default function App() {
  const [formulas, setFormulas] = useState(formulaCatalogFull);
  const [progressState, setProgressState] = useState(() => loadProgress());
  const [selectedId, setSelectedId] = useState(() => loadProgress().lastFormulaId || 'sum');
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [hintIndex, setHintIndex] = useState(-1);
  const [activeCell, setActiveCell] = useState('G2');
  const [selectedRange, setSelectedRange] = useState(null);
  const [formulaCursor, setFormulaCursor] = useState(0);
  const [formulaInputActive, setFormulaInputActive] = useState(false);
  const [formulaFocusTick, setFormulaFocusTick] = useState(0);
  const [lastRangeInsertion, setLastRangeInsertion] = useState(null);
  const [lookupValue, setLookupValue] = useState('');
  const [selectionTarget, setSelectionTarget] = useState('formula');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [exerciseIndex, setExerciseIndex] = useState(0);

  const selectedFormula = useMemo(() => {
    return formulas.find((formula) => formula.id === selectedId) || formulas[0];
  }, [formulas, selectedId]);

  const curatedExercises = useMemo(() => {
    if (!selectedFormula?.hasExercise) return [];
    return getCuratedExercises(selectedFormula.id);
  }, [selectedFormula?.id, selectedFormula?.hasExercise]);
  const curatedExercise = curatedExercises[exerciseIndex] || curatedExercises[0] || (selectedFormula?.hasExercise ? getCuratedExercise(selectedFormula.id) : null);
  const isGeneric = !curatedExercise;
  const exercise = useMemo(() => {
    if (!selectedFormula) return null;
    return curatedExercise || createGenericExercise(selectedFormula);
  }, [selectedFormula, curatedExercise]);
  const exerciseCount = curatedExercises.length || 1;
  const learningMode = progressState.lastMode || 'guided';
  const modeConfig = useMemo(() => getLearningModeConfig(learningMode), [learningMode]);

  const table = exercise?.table || (isGeneric ? genericTheoryTable : sharedExerciseTables[exercise?.tableKey] || genericTheoryTable);
  const selectedNeedsHelper = useMemo(() => {
    const name = selectedFormula?.name?.toUpperCase() || '';
    const id = selectedFormula?.id || '';
    return HELPER_FUNCTION_NAMES.has(name) || HELPER_FUNCTION_IDS.has(id);
  }, [selectedFormula]);

  const typedFunctionName = useMemo(() => getTypedFunctionName(answer), [answer]);
  const typedNeedsHelper = HELPER_FUNCTION_NAMES.has(typedFunctionName);
  const questionHelperValues = useMemo(() => getQuestionHelperValues(exercise, table), [exercise, table]);
  const showQuestionHelper = modeConfig.showValueHelper && questionHelperValues.length > 0;

  const formulaOptions = useMemo(() => {
    const selected = selectedFormula ? [selectedFormula] : [];
    const selectedName = selectedFormula?.name?.toUpperCase();
    const rest = formulas
      .filter((formula) => formula.name?.toUpperCase() !== selectedName)
      .map((formula) => ({
        name: formula.name,
        syntax: formula.syntax,
        description: formula.description,
        category: formula.category,
        displayCategory: formula.displayCategory,
        hasExercise: formula.hasExercise
      }));

    return [
      ...selected.map((formula) => ({
        name: formula.name,
        syntax: formula.syntax,
        description: formula.description,
        category: formula.category,
        displayCategory: formula.displayCategory,
        hasExercise: formula.hasExercise
      })),
      ...rest
    ];
  }, [formulas, selectedFormula]);

  const stats = useMemo(() => {
    const total = formulas.length;
    const practice = formulas.filter((formula) => formula.hasExercise).length;
    const mastered = formulas.filter((formula) => progressState.formulas?.[formula.id]?.status === 'Benar').length;
    const theory = total - practice;
    const percent = total ? Math.round((mastered / total) * 100) : 0;
    return { total, practice, theory, mastered, percent };
  }, [formulas, progressState.formulas]);

  const formulaResult = useMemo(() => {
    if (!answer.trim()) return null;
    return evaluateFormula(answer, table, progressState.separatorMode);
  }, [answer, progressState.separatorMode, table]);

  const liveCellValues = useMemo(() => {
    const targetCell = exercise?.activeCell || activeCell;
    if (!answer.trim() || !targetCell || !formulaResult) return {};
    return {
      [String(targetCell).toUpperCase()]: formulaResult.displayValue ?? formulaResult.value ?? ''
    };
  }, [activeCell, answer, exercise?.activeCell, formulaResult]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', Boolean(progressState.darkMode));
    saveProgress(progressState);
  }, [progressState]);

  useEffect(() => {
    if (!selectedFormula) return;
    setProgressState((prev) => markFormulaOpened(prev, selectedFormula.id));
    setAnswer('');
    setFeedback(null);
    setHintIndex(-1);
    setActiveCell(exercise?.activeCell || 'G2');
    setSelectedRange(null);
    setFormulaCursor(0);
    setLastRangeInsertion(null);
    setLookupValue('');
    setSelectionTarget('formula');
    setExerciseIndex(0);
  }, [selectedFormula?.id]);

  useEffect(() => {
    if (!showQuestionHelper) {
      setLookupValue('');
      if (selectionTarget === 'helper') setSelectionTarget('formula');
    }
  }, [showQuestionHelper, selectionTarget]);

  useEffect(() => {
    if (!selectedFormula || !exercise) return;
    setAnswer('');
    setFeedback(null);
    setHintIndex(-1);
    setActiveCell(exercise?.activeCell || 'G2');
    setSelectedRange(null);
    setFormulaCursor(0);
    setLastRangeInsertion(null);
    setLookupValue('');
    setSelectionTarget('formula');
  }, [exerciseIndex]);

  const updatePreference = (key, value) => {
    setProgressState((prev) => setPreference(prev, key, value));
  };

  const handleLearningModeChange = (value) => {
    updatePreference('lastMode', value);
    setHintIndex(-1);
    setFeedback(null);
  };

  const handleSelectFormula = (formulaId) => {
    setSelectedId(formulaId);
    setMobileSidebarOpen(false);
  };

  const handleAnswerChange = (nextValue) => {
    setAnswer(nextValue);
    setFeedback(null);
    setLastRangeInsertion(null);
  };

  const handleCheckAnswer = (submittedFormula) => {
    const candidate = typeof submittedFormula === 'string' ? submittedFormula : answer;
    const completedFormula = autoCloseFormula(candidate);

    if (completedFormula !== answer) {
      setAnswer(completedFormula);
      setFormulaCursor(completedFormula.length);
    }

    const result = isGeneric
      ? validateGenericFormula(completedFormula, selectedFormula, progressState.separatorMode, table)
      : validateFormula(completedFormula, exercise, progressState.separatorMode, table);
    setFeedback(result);
    setProgressState((prev) => markFormulaAttempt(prev, selectedFormula.id, result.correct));
  };

  const insertRangeIntoFormula = (rangeRef) => {
    if (showQuestionHelper && selectionTarget === 'helper') {
      const nextAnswer = replaceFirstArgument(answer, rangeRef, progressState.separatorMode);
      setLookupValue(rangeRef);
      if (nextAnswer !== answer) {
        setAnswer(nextAnswer);
        setFormulaCursor(nextAnswer.length);
        setFormulaFocusTick((tick) => tick + 1);
      }
      setFeedback(null);
      return;
    }

    const current = answer || '';
    const trimmed = current.trimStart();

    if (!formulaInputActive || !trimmed.startsWith('=')) {
      return;
    }

    let start = Math.min(formulaCursor ?? current.length, current.length);
    let end = start;

    if (
      lastRangeInsertion &&
      current.slice(lastRangeInsertion.start, lastRangeInsertion.end) === lastRangeInsertion.value
    ) {
      start = lastRangeInsertion.start;
      end = lastRangeInsertion.end;
    }

    const nextValue = `${current.slice(0, start)}${rangeRef}${current.slice(end)}`;
    const nextCursor = start + rangeRef.length;

    setAnswer(nextValue);
    setFeedback(null);
    setFormulaCursor(nextCursor);
    setLastRangeInsertion({ start, end: nextCursor, value: rangeRef });
    setFormulaFocusTick((tick) => tick + 1);
  };

  const handleRangeSelected = (rangeRef) => {
    setSelectedRange(rangeRef);
    insertRangeIntoFormula(rangeRef);
  };

  const handleResetExercise = () => {
    setAnswer('');
    setFeedback(null);
    setHintIndex(-1);
    setActiveCell(exercise?.activeCell || 'G2');
    setSelectedRange(null);
    setFormulaCursor(0);
    setLastRangeInsertion(null);
    setLookupValue('');
    setSelectionTarget('formula');
  };

  const handleResetAll = () => {
    const fresh = { ...defaultProgressState };
    resetProgress();
    setProgressState(fresh);
    setSelectedId('sum');
    setAnswer('');
    setFeedback(null);
    setHintIndex(-1);
    setSelectedRange(null);
    setFormulaCursor(0);
    setLastRangeInsertion(null);
    setLookupValue('');
    setSelectionTarget('formula');
  };

  const handleNextFormula = () => {
    const navigationList = getFormulaNavigationList(formulas);
    const index = navigationList.findIndex((formula) => formula.id === selectedFormula.id);
    const safeIndex = index === -1 ? 0 : index;
    const next = navigationList[safeIndex + 1] || navigationList[0];

    if (!next) return;

    setSelectedId(next.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextExerciseStep = () => {
    if (exerciseIndex < exerciseCount - 1) {
      setExerciseIndex((index) => index + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    handleNextFormula();
  };

  const handleNextHint = () => {
    const rawLimit = modeConfig.hintLimit === Infinity ? exercise.hints.length : modeConfig.hintLimit;
    const limit = Math.min(rawLimit, exercise.hints.length);
    if (limit <= 0) return;
    setHintIndex((prev) => Math.min(prev + 1, limit - 1));
  };

  const handleImportCatalog = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const json = JSON.parse(text);
      const imported = importFormulaCatalog(Array.isArray(json) ? json : json.formulas);
      if (imported.length) {
        setFormulas(imported);
        setSelectedId(imported[0].id);
      }
    } catch (error) {
      alert('File catalog tidak bisa dibaca. Pastikan format JSON valid.');
      console.error(error);
    } finally {
      event.target.value = '';
    }
  };

  if (!selectedFormula || !exercise) return null;

  const formulaProgress = progressState.formulas?.[selectedFormula.id] || {};
  const finalFormulaPreview = feedback?.correct ? formulaForSeparator(exercise.expectedFormula, progressState.separatorMode) : null;
  const nextFeedbackLabel = exerciseIndex < exerciseCount - 1 ? `Lanjut ke Latihan ${exerciseIndex + 2}` : 'Lanjut ke rumus berikutnya';

  return (
    <div className="min-h-screen bg-coach-beige text-coach-ink transition dark:bg-coach-ink dark:text-white">
      <Header
        stats={stats}
        onReset={handleResetAll}
        darkMode={progressState.darkMode}
        onToggleDark={() => updatePreference('darkMode', !progressState.darkMode)}
        separatorMode={progressState.separatorMode}
        onSeparatorChange={(value) => updatePreference('separatorMode', value)}
        learningMode={learningMode}
        onLearningModeChange={handleLearningModeChange}
        onImportCatalog={handleImportCatalog}
      />

      <main className="mx-auto grid max-w-[1500px] gap-5 px-4 py-5 lg:grid-cols-[1fr_420px] lg:px-6">
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-3 lg:hidden">
            <button onClick={() => setMobileSidebarOpen(true)} className="rounded-full bg-coach-green px-4 py-3 text-sm font-black text-white">
              Buka Daftar Rumus
            </button>
            <p className="text-sm font-bold text-black/50 dark:text-white/50">{selectedFormula.name}</p>
          </div>

          <ProgressPanel formula={selectedFormula} formulaProgress={formulaProgress} stats={stats} />
          <FormulaTheory formula={selectedFormula} isGeneric={isGeneric} />

          <section className="rounded-[2rem] border border-coach-line bg-white p-4 shadow-soft dark:border-white/10 dark:bg-white/[0.055]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-coach-green dark:text-emerald-300">Latihan Bertingkat</p>
                <h3 className="mt-1 text-xl font-black">Level {exerciseIndex + 1} dari {exerciseCount}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handleResetExercise}
                  className="rounded-full border border-coach-line bg-white px-4 py-2 text-xs font-black text-black/60 transition hover:border-coach-green hover:text-coach-green dark:border-white/10 dark:bg-white/5 dark:text-white/65 dark:hover:text-emerald-200"
                >
                  Reset Latihan
                </button>
                {Array.from({ length: exerciseCount }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setExerciseIndex(index)}
                    className={`rounded-full px-4 py-2 text-xs font-black transition ${index === exerciseIndex ? 'bg-coach-green text-white shadow-sm' : 'border border-coach-line bg-coach-beige text-black/55 hover:border-coach-green dark:border-white/10 dark:bg-white/5 dark:text-white/60'}`}
                  >
                    Latihan {index + 1}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-3 text-sm font-semibold leading-6 text-black/55 dark:text-white/55">
              Setiap level memakai soal, logika, dan arah penyelesaian yang berbeda. Selesaikan bertahap sebelum lanjut ke rumus berikutnya.
            </p>
            <div className="mt-3 rounded-2xl border border-coach-green/15 bg-coach-greenSoft px-4 py-3 text-sm leading-6 text-black/60 dark:border-emerald-400/10 dark:bg-emerald-400/10 dark:text-white/65">
              <span className="font-black text-coach-green dark:text-emerald-200">{modeConfig.title}: </span>{modeConfig.description}
            </div>
          </section>

          <section className="rounded-[2rem] border border-coach-line bg-white p-5 shadow-soft dark:border-white/10 dark:bg-white/[0.055]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-coach-green dark:text-emerald-300">Soal Latihan</p>
            <h3 className="mt-1 text-2xl font-black text-coach-ink dark:text-white">{exercise.title}</h3>
            {learningMode !== 'challenge' ? (
              <div className="mt-4 rounded-2xl bg-coach-beige p-4 text-sm leading-6 text-black/65 dark:bg-black/20 dark:text-white/65">
                <span className="font-black text-coach-green dark:text-emerald-300">{learningMode === 'guided' ? 'Logika rumusnya: ' : 'Arah singkat: '}</span>
                {learningMode === 'guided' ? exercise.logicPrompt : 'Baca pertanyaannya, cari data yang relevan di tabel, lalu susun rumusnya tanpa melihat contoh rumus.'}
              </div>
            ) : (
              <div className="mt-4 rounded-2xl bg-coach-beige p-4 text-sm leading-6 text-black/55 dark:bg-black/20 dark:text-white/55">
                Challenge Mode aktif. Arah penyelesaian disembunyikan agar kamu benar-benar latihan dari soal dan tabel.
              </div>
            )}
            {finalFormulaPreview && (
              <p className="mt-3 rounded-2xl bg-emerald-50 p-4 text-sm text-coach-green dark:bg-emerald-400/10 dark:text-emerald-200">
                Rumus final baru muncul setelah benar: <span className="font-mono font-black">{finalFormulaPreview}</span>
              </p>
            )}
          </section>

          <ExerciseTable
            table={table}
            highlightRanges={exercise.highlightRanges}
            activeCell={exercise?.activeCell || activeCell}
            cellValues={liveCellValues}
            selectedRange={selectedRange}
            onCellClick={setActiveCell}
            onRangeSelected={handleRangeSelected}
          />

          <FormulaBar
            question={exercise.question}
            selectedRange={selectedRange}
            value={answer}
            onChange={handleAnswerChange}
            onSubmit={handleCheckAnswer}
            separatorMode={progressState.separatorMode}
            formulaOptions={formulaOptions}
            onCursorChange={setFormulaCursor}
            onFocusChange={(isActive) => {
              setFormulaInputActive(isActive);
              if (isActive) setSelectionTarget('formula');
            }}
            cursorPosition={formulaCursor}
            focusTick={formulaFocusTick}
            formulaResult={formulaResult}
            feedback={feedback}
            showQuestionHelper={showQuestionHelper}
            helperValues={questionHelperValues}
            lookupValue={lookupValue}
            onLookupValueChange={setLookupValue}
            onInsertHelperValue={(item) => {
              const nextAnswer = insertHelperValueAtCursor(answer, item?.insert, formulaCursor, progressState.separatorMode);
              setLookupValue(item?.label || item?.insert || '');
              setAnswer(nextAnswer);
              setFeedback(null);
              setFormulaCursor(nextAnswer.length);
              setLastRangeInsertion(null);
              setSelectionTarget('formula');
              setFormulaFocusTick((tick) => tick + 1);
            }}
            selectionTarget={selectionTarget}
            onSelectionTargetChange={setSelectionTarget}
            learningMode={learningMode}
            showLogicPanel={modeConfig.showLogicPanel}
            showLogicExample={modeConfig.showLogicExample}
            showValueHelper={modeConfig.showValueHelper}
            enableFormulaAssist={modeConfig.enableFormulaAssist}
            showLiveResult={modeConfig.showLiveResult}
            showRangeTips={modeConfig.showRangeTips}
          />

          <HintBox
            hints={exercise.hints}
            mode={progressState.lastMode}
            hintIndex={hintIndex}
            onNextHint={handleNextHint}
            onResetHints={() => setHintIndex(-1)}
          />

          <FeedbackBox feedback={feedback} exercise={exercise} separatorMode={progressState.separatorMode} isCorrect={feedback?.correct} onNext={handleNextExerciseStep} nextLabel={nextFeedbackLabel} />
        </div>

        <FormulaSidebar
          formulas={formulas}
          selectedId={selectedFormula.id}
          onSelect={handleSelectFormula}
          progress={progressState.formulas}
          mobileOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />
      </main>
    </div>
  );
}
