import { formulaCatalogFull } from './formulaCatalogFull.js';
import { curatedExercises, sharedExerciseTables } from './curatedExercises.js';

const normalize = (value = '') => String(value || '').toUpperCase();

const validCellRef = /^\$?[A-Z]{1,3}\$?\d+(?::\$?[A-Z]{1,3}\$?\d+)?$/i;
const textLiteral = /^".*"$/;

const strictTableRules = {
  Text: ['textPractice', 'text'],
  'Date and Time': ['datePractice', 'date'],
  Logical: ['logicalPractice', 'students', 'info', 'lookup'],
  'Lookup and Reference': ['lookup', 'lookupHorizontal', 'dynamic', 'info'],
  'Dynamic Array': ['dynamic', 'lookup', 'sales'],
  'Math and Trigonometry': ['mathNumbers', 'sales', 'students', 'dynamic', 'forecast', 'statsSeriesCompact'],
  Statistical: ['statsNegBinom', 'statsBinom', 'statsNormal', 'statsBetaGamma', 'statsFreedom', 'statsActualExpected', 'statsSeriesCompact', 'students', 'forecast', 'informationMixed', 'sales'],
  Compatibility: ['statsNegBinom', 'statsBinom', 'statsNormal', 'statsBetaGamma', 'statsFreedom', 'statsActualExpected', 'statsSeriesCompact', 'financeParameter', 'engineeringParameter', 'students'],
  Financial: ['financeParameter'],
  Information: ['informationMixed', 'info'],
  Engineering: ['engineeringParameter'],
  Database: ['databaseMini'],
  Web: ['webParameter'],
  Cube: ['cubeParameter'],
  'Advanced / Professional': ['dynamic', 'textPractice', 'sales'],
  'Add-in / User Defined': ['addinParameter']
};

const allowedTableFor = (formula, exercise) => {
  const category = formula.category;
  const tableKey = exercise?.tableKey;
  const allowed = strictTableRules[category] || [];
  return allowed.includes(tableKey);
};

const formulaStartsCorrect = (formula, exercise) => {
  const expected = normalize(exercise?.expectedFormula || '');
  return expected.startsWith(`=${normalize(formula.name)}(`) || (normalize(formula.name) === 'INDEX MATCH' && expected.includes('INDEX(') && expected.includes('MATCH('));
};

const requiredRefsLookSafe = (exercise) => {
  const refs = exercise?.requiredRefs || [];
  return refs.every((ref) => validCellRef.test(String(ref)) || String(ref).includes(':'));
};

const valueTokensLookSafe = (exercise) => {
  const tokens = exercise?.requiredTexts || [];
  return tokens.every((value) => String(value || '').trim().length > 0);
};


const hintsLookHelpful = (exercise) => {
  const hints = exercise?.hints || [];
  const joined = hints.join(' ');
  const hasQuestionDirection = /Soalnya adalah|tujuan soalnya|harus menghasilkan/i.test(joined);
  const hasActionClue = /Select|Pilih|Tentukan|Masukkan|Ambil|Cari/i.test(joined);
  const hasDataClue = /range|cell|kriteria|lookup|parameter|table array|return array|row index|column index|tanggal|teks|angka/i.test(joined);
  const tooGeneric = /pahami dulu apa yang diminta soal, jangan langsung ketik rumus final|Argumen berikutnya:|Cocokkan urutan argumen dengan format rumusnya\.?$/i.test(joined);
  return Array.isArray(hints)
    && hints.length >= 5
    && hasQuestionDirection
    && hasActionClue
    && hasDataClue
    && !tooGeneric;
};

const questionLooksLikeQuestion = (exercise) => {
  const q = String(exercise?.question || '').trim();
  return q.length > 12 && /[?？]$/.test(q) && !/^(Basic|Criteria|Multi-condition|Reference|Mixed input|Challenge)\s*:/i.test(q);
};

export function auditFormulaPractice() {
  const issues = [];
  const rows = formulaCatalogFull.map((formula) => {
    const exercise = curatedExercises[formula.id];
    const table = exercise ? sharedExerciseTables[exercise.tableKey] : null;
    const checks = {
      hasExercise: Boolean(exercise),
      hasTable: Boolean(table),
      tableAllowed: Boolean(exercise && allowedTableFor(formula, exercise)),
      expectedFormulaExists: Boolean(exercise?.expectedFormula),
      expectedFormulaMatchesName: Boolean(exercise && formulaStartsCorrect(formula, exercise)),
      questionExists: Boolean(exercise?.question && exercise.question.length > 12),
      questionIsNaturalQuestion: Boolean(exercise && questionLooksLikeQuestion(exercise)),
      hintsExist: Boolean(Array.isArray(exercise?.hints) && exercise.hints.length >= 5),
      hintsHelpful: Boolean(exercise && hintsLookHelpful(exercise)),
      requiredRefsSafe: Boolean(!exercise || requiredRefsLookSafe(exercise)),
      requiredTextsSafe: Boolean(!exercise || valueTokensLookSafe(exercise)),
      tableCompactEnough: Boolean(!table || (table.rows?.length || 0) <= 16 || ['students', 'sales', 'dynamic', 'financeParameter', 'engineeringParameter', 'databaseMini', 'lookup'].includes(exercise.tableKey))
    };

    const failed = Object.entries(checks).filter(([, ok]) => !ok).map(([key]) => key);
    if (failed.length) {
      issues.push({ id: formula.id, name: formula.name, category: formula.category, tableKey: exercise?.tableKey, failed });
    }

    return {
      id: formula.id,
      name: formula.name,
      category: formula.category,
      tableKey: exercise?.tableKey || '',
      expectedFormula: exercise?.expectedFormula || '',
      status: failed.length ? 'needs-review' : 'aligned',
      failed
    };
  });

  return {
    totalFormula: formulaCatalogFull.length,
    totalExercise: rows.filter((row) => row.expectedFormula).length,
    totalAligned: rows.filter((row) => row.status === 'aligned').length,
    totalNeedsReview: issues.length,
    issues,
    rows
  };
}

export const formulaPracticeAuditResult = auditFormulaPractice();
