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
import { getCuratedExercise, sharedExerciseTables } from './data/curatedExercises';
import { createGenericExercise, genericTheoryTable } from './data/exerciseTemplates';
import { formulaForSeparator, validateFormula, validateGenericFormula } from './utils/formulaValidator';
import { autoCloseFormula, evaluateFormula } from './utils/formulaEngine';
import { defaultProgressState, loadProgress, markFormulaAttempt, markFormulaOpened, resetProgress, saveProgress, setPreference } from './utils/localStorage';

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
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const selectedFormula = useMemo(() => {
    return formulas.find((formula) => formula.id === selectedId) || formulas[0];
  }, [formulas, selectedId]);

  const curatedExercise = selectedFormula?.hasExercise ? getCuratedExercise(selectedFormula.id) : null;
  const isGeneric = !curatedExercise;
  const exercise = useMemo(() => {
    if (!selectedFormula) return null;
    return curatedExercise || createGenericExercise(selectedFormula);
  }, [selectedFormula, curatedExercise]);

  const table = isGeneric ? genericTheoryTable : sharedExerciseTables[exercise?.tableKey] || genericTheoryTable;

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
  }, [selectedFormula?.id]);

  const updatePreference = (key, value) => {
    setProgressState((prev) => setPreference(prev, key, value));
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
  };

  const handleNextFormula = () => {
    const index = formulas.findIndex((formula) => formula.id === selectedFormula.id);
    const next = formulas[index + 1] || formulas[0];
    setSelectedId(next.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextHint = () => {
    const limit = progressState.lastMode === 'guided' ? exercise.hints.length : progressState.lastMode === 'practice' ? Math.min(2, exercise.hints.length) : 0;
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

  return (
    <div className="min-h-screen bg-coach-beige text-coach-ink transition dark:bg-coach-ink dark:text-white">
      <Header
        stats={stats}
        onReset={handleResetAll}
        darkMode={progressState.darkMode}
        onToggleDark={() => updatePreference('darkMode', !progressState.darkMode)}
        separatorMode={progressState.separatorMode}
        onSeparatorChange={(value) => updatePreference('separatorMode', value)}
        learningMode={progressState.lastMode}
        onLearningModeChange={(value) => updatePreference('lastMode', value)}
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

          <section className="rounded-[2rem] border border-coach-line bg-white p-5 shadow-soft dark:border-white/10 dark:bg-white/[0.055]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-coach-green dark:text-emerald-300">Soal Latihan</p>
            <h3 className="mt-1 text-2xl font-black text-coach-ink dark:text-white">{exercise.title}</h3>
            <p className="mt-3 text-base leading-7 text-black/70 dark:text-white/68">{exercise.question}</p>
            <div className="mt-4 rounded-2xl bg-coach-beige p-4 text-sm leading-6 text-black/65 dark:bg-black/20 dark:text-white/65">
              <span className="font-black text-coach-green dark:text-emerald-300">Coba pikir dulu logikanya: </span>
              {exercise.logicPrompt}
            </div>
            {finalFormulaPreview && (
              <p className="mt-3 rounded-2xl bg-emerald-50 p-4 text-sm text-coach-green dark:bg-emerald-400/10 dark:text-emerald-200">
                Rumus final baru muncul setelah benar: <span className="font-mono font-black">{finalFormulaPreview}</span>
              </p>
            )}
          </section>

          <ExerciseTable
            table={table}
            highlightRanges={exercise.highlightRanges}
            activeCell={activeCell}
            selectedRange={selectedRange}
            onCellClick={setActiveCell}
            onRangeSelected={handleRangeSelected}
          />

          <FormulaBar
            activeCell={activeCell}
            selectedRange={selectedRange}
            value={answer}
            onChange={handleAnswerChange}
            onSubmit={handleCheckAnswer}
            separatorMode={progressState.separatorMode}
            formulaOptions={formulaOptions}
            onCursorChange={setFormulaCursor}
            onFocusChange={setFormulaInputActive}
            cursorPosition={formulaCursor}
            focusTick={formulaFocusTick}
            formulaResult={formulaResult}
          />

          <div className="flex flex-wrap gap-2">
            <button onClick={handleCheckAnswer} className="rounded-full bg-coach-green px-5 py-3 text-sm font-black text-white transition hover:bg-coach-ink dark:hover:bg-emerald-600">
              Cek Jawaban
            </button>
            <button onClick={handleResetExercise} className="rounded-full border border-coach-line bg-white px-5 py-3 text-sm font-black text-black/60 transition hover:border-coach-green dark:border-white/10 dark:bg-white/5 dark:text-white/65">
              Reset Latihan
            </button>
          </div>

          <HintBox
            hints={exercise.hints}
            mode={progressState.lastMode}
            hintIndex={hintIndex}
            onNextHint={handleNextHint}
            onResetHints={() => setHintIndex(-1)}
          />

          <FeedbackBox feedback={feedback} exercise={exercise} separatorMode={progressState.separatorMode} isCorrect={feedback?.correct} onNext={handleNextFormula} />
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
