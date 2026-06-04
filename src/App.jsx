import { useEffect, useMemo, useRef, useState } from 'react';
import Header from './components/Header.jsx';
import ProgressPanel from './components/ProgressPanel.jsx';
import FormulaTheory from './components/FormulaTheory.jsx';
import ExerciseTable from './components/ExerciseTable.jsx';
import FormulaBar from './components/FormulaBar.jsx';
import FeedbackBox from './components/FeedbackBox.jsx';
import HintBox from './components/HintBox.jsx';
import FormulaSidebar from './components/FormulaSidebar.jsx';
import { formulaCatalogFull, importFormulaCatalog } from './data/formulaCatalogFull.js';
import { sharedExerciseTables, getCuratedExercise, getCuratedExercises } from './data/curatedExercises.js';
import { createGenericExercise, genericTheoryTable } from './data/formulaPracticeFactory.js';
import { validateFormula, validateGenericFormula, formulaForSeparator } from './utils/formulaValidator.js';
import { autoCloseFormula, evaluateFormula } from './utils/formulaEngine.js';
import { defaultProgressState, loadProgress, saveProgress, resetProgress, markFormulaOpened, markFormulaAttempt, setPreference } from './utils/progress.js';

const LEARNING_MODES = {
  guided: {
    label: 'Guided',
    title: 'Guided Mode',
    description: 'Bantuan paling lengkap. Cocok untuk rumus baru atau saat user masih belajar alurnya.',
    hintLimit: Infinity,
    showLogicPanel: true,
    showLogicExample: true,
    showValueHelper: true,
    showLiveResult: true,
    showRangeTips: true,
    enableFormulaAssist: true
  },
  practice: {
    label: 'Practice',
    title: 'Practice Mode',
    description: 'Bantuan dikurangi. Cocok untuk latihan setelah paham dasar rumus.',
    hintLimit: 2,
    showLogicPanel: true,
    showLogicExample: false,
    showValueHelper: true,
    showLiveResult: false,
    showRangeTips: true,
    enableFormulaAssist: true
  },
  challenge: {
    label: 'Challenge',
    title: 'Challenge Mode',
    description: 'Minim bantuan. Cocok untuk tes pemahaman mandiri.',
    hintLimit: 1,
    showLogicPanel: false,
    showLogicExample: false,
    showValueHelper: false,
    showLiveResult: false,
    showRangeTips: false,
    enableFormulaAssist: false
  }
};

const getLearningModeConfig = (mode) => LEARNING_MODES[mode] || LEARNING_MODES.guided;

const HELPER_FUNCTION_NAMES = new Set(['VLOOKUP', 'XLOOKUP', 'HLOOKUP', 'LOOKUP', 'MATCH', 'XMATCH', 'INDEX MATCH', 'FILTER', 'SUMIF', 'SUMIFS', 'COUNTIF', 'COUNTIFS', 'AVERAGEIF', 'AVERAGEIFS']);
const HELPER_FUNCTION_IDS = new Set(['vlookup', 'xlookup', 'hlookup', 'lookup', 'match', 'xmatch', 'index-match', 'filter', 'sumif', 'sumifs', 'countif', 'countifs', 'averageif', 'averageifs']);

const getTypedFunctionName = (value = '') => {
  const match = String(value || '').trim().match(/^=\s*([A-Z][A-Z0-9._]*)/i);
  return match ? match[1].toUpperCase() : '';
};

const replaceFirstArgument = (formula = '', nextArgument = '', separatorMode = 'id') => {
  const separator = separatorMode === 'id' ? ';' : ',';
  const current = String(formula || '');
  const openIndex = current.indexOf('(');
  if (openIndex === -1) return current;

  let depth = 0;
  let inQuote = false;
  for (let index = openIndex + 1; index < current.length; index += 1) {
    const char = current[index];
    if (char === '"' && current[index - 1] !== '\\') inQuote = !inQuote;
    if (inQuote) continue;
    if (char === '(') depth += 1;
    if (char === ')') {
      if (depth === 0) {
        return `${current.slice(0, openIndex + 1)}${nextArgument}${current.slice(index)}`;
      }
      depth -= 1;
    }
    if (char === separator && depth === 0) {
      return `${current.slice(0, openIndex + 1)}${nextArgument}${current.slice(index)}`;
    }
  }

  return `${current.slice(0, openIndex + 1)}${nextArgument}${current.slice(openIndex + 1)}`;
};

const parseSheetCell = (cellRef = '') => {
  const match = String(cellRef || '').toUpperCase().match(/^([A-Z]+)(\d+)$/);
  if (!match) return null;
  const col = match[1].split('').reduce((sum, char) => sum * 26 + char.charCodeAt(0) - 64, 0);
  return { col, row: Number(match[2]), colName: match[1] };
};

const getVerticalFillCells = (fromRef = '', toRef = '') => {
  const from = parseSheetCell(fromRef);
  const to = parseSheetCell(toRef);
  if (!from || !to || from.col !== to.col) return [];

  const start = Math.min(from.row, to.row);
  const end = Math.max(from.row, to.row);
  return Array.from({ length: end - start + 1 }, (_, index) => `${from.colName}${start + index}`);
};

const shiftFormulaRows = (formula = '', rowOffset = 0) => {
  if (!rowOffset) return formula;
  return String(formula).replace(/(\$?)([A-Z]+)(\$?)(\d+)/gi, (match, colLock, col, rowLock, row) => {
    if (rowLock) return match;
    const nextRow = Math.max(1, Number(row) + rowOffset);
    return `${colLock}${col}${rowLock}${nextRow}`;
  });
};

const insertHelperValueAtCursor = (formula = '', rawValue = '', cursor = null, separatorMode = 'id') => {
  const value = String(rawValue || '');
  if (!value) return formula;
  const current = String(formula || '');
  const position = Number.isFinite(cursor) ? Math.min(Math.max(cursor, 0), current.length) : current.length;
  const before = current.slice(0, position);
  const after = current.slice(position);
  const lastChar = before.slice(-1);
  const firstAfter = after.charAt(0);
  const separator = separatorMode === 'id' ? ';' : ',';
  const needsSeparatorBefore = before && !/[,(;=\s]$/.test(lastChar) && !before.endsWith(separator);
  const needsSpaceAfter = firstAfter && !/[),;\s]/.test(firstAfter);
  return `${before}${needsSeparatorBefore ? separator : ''}${value}${needsSpaceAfter ? separator : ''}${after}`;
};

const getQuestionHelperValues = (exercise, table) => {
  const items = [];
  const seen = new Set();

  const add = (value, label = value, type = 'value') => {
    const normalized = String(value ?? '').trim();
    if (!normalized || seen.has(`${type}:${normalized}`)) return;
    seen.add(`${type}:${normalized}`);
    items.push({ value: normalized, label: String(label || normalized), insert: normalized, type });
  };

  if (exercise?.criteriaValue) {
    String(exercise.criteriaValue)
      .split(/\s*\+\s*|\s*,\s*/)
      .map((value) => value.trim())
      .filter(Boolean)
      .forEach((value) => add(value, value, 'criteria'));
  }

  (exercise?.requiredTexts || []).forEach((value) => add(value, value, 'criteria'));

  const columns = table?.columns || [];
  const rows = table?.rows || [];
  rows.forEach((row) => {
    row.forEach((cell) => {
      if (typeof cell !== 'string') return;
      const trimmed = cell.trim();
      if (trimmed && trimmed.length <= 40 && !/^[-+]?\d+(\.\d+)?$/.test(trimmed)) add(trimmed, trimmed, 'table');
    });
  });
  columns.forEach((column) => add(column, column, 'header'));

  return items.slice(0, 12);
};

const getFormulaNavigationList = (formulas = []) => {
  const practice = formulas.filter((formula) => formula.hasExercise);
  return practice.length ? practice : formulas;
};

export default function App() {
  const [formulas, setFormulas] = useState(formulaCatalogFull);
  const [progressState, setProgressState] = useState(() => loadProgress());
  const initialSelected = formulaCatalogFull.find((formula) => formula.hasExercise)?.id || formulaCatalogFull[0]?.id || 'sum';
  const [selectedId, setSelectedId] = useState(initialSelected);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
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
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [filledCellValues, setFilledCellValues] = useState({});

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
    const targetCell = activeCell || exercise?.activeCell;
    const nextValues = { ...filledCellValues };

    if (answer.trim() && targetCell && formulaResult) {
      nextValues[String(targetCell).toUpperCase()] = formulaResult.displayValue ?? formulaResult.value ?? '';
    }

    return nextValues;
  }, [activeCell, answer, exercise?.activeCell, filledCellValues, formulaResult]);

  const handleFillDrag = ({ sourceCell, targetCell }) => {
    const baseCell = sourceCell || activeCell || exercise?.activeCell;
    const cells = getVerticalFillCells(baseCell, targetCell);
    const source = parseSheetCell(baseCell);

    if (!source || !answer.trim() || cells.length < 2) return;

    const nextValues = {};

    cells.forEach((cellRef) => {
      const cell = parseSheetCell(cellRef);
      if (!cell) return;
      const shiftedFormula = shiftFormulaRows(answer, cell.row - source.row);
      const shiftedResult = evaluateFormula(shiftedFormula, table, progressState.separatorMode);
      nextValues[cellRef.toUpperCase()] = shiftedResult?.displayValue ?? shiftedResult?.value ?? '';
    });

    setFilledCellValues((current) => ({ ...current, ...nextValues }));
    setSelectedRange(cells.length ? `${cells[0]}:${cells[cells.length - 1]}` : null);
    if (cells.length) setActiveCell(cells[cells.length - 1]);
  };

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
    setFilledCellValues({});
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
    setFilledCellValues({});
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
    setFilledCellValues({});
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
    setFilledCellValues({});
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
    setFilledCellValues({});
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
            activeCell={activeCell || exercise?.activeCell}
            cellValues={liveCellValues}
            selectedRange={selectedRange}
            onCellClick={setActiveCell}
            onRangeSelected={handleRangeSelected}
            onFillDrag={handleFillDrag}
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
