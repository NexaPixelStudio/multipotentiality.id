// Fallback practice factory.
// Curated batch exercises live in src/data/quality/*.js.
// This file only keeps App.jsx safe when a formula has no curated exercise yet.

export const genericTheoryTable = {
  title: 'Data Latihan Umum',
  description: 'Tabel fallback untuk rumus yang belum punya latihan khusus.',
  columns: ['Item', 'Nilai', 'Keterangan'],
  rows: [
    ['Data 1', 10, 'Contoh angka'],
    ['Data 2', 20, 'Contoh angka'],
    ['Data 3', 30, 'Contoh angka'],
    ['Data 4', 40, 'Contoh angka']
  ]
};

const getSafeFormulaName = (formula = {}) => formula?.name || 'FORMULA';
const getSafeFormulaId = (formula = {}) => formula?.id || getSafeFormulaName(formula).toLowerCase();
const getFallbackFormula = (formula = {}) => `=${getSafeFormulaName(formula)}(B2:B5)`;

export function createGenericExercise(formula = {}) {
  const name = getSafeFormulaName(formula);
  const id = getSafeFormulaId(formula);
  const syntax = formula?.syntax || `${name}(value)`;

  return {
    id: `${id}__generic`,
    baseFormulaId: id,
    formulaName: name,
    title: `Latihan ${name}`,
    levelIndex: 0,
    levelLabel: 'Generic',
    tableKey: 'genericTheory',
    table: genericTheoryTable,
    activeCell: 'C2',
    question: `Di cell C2, coba susun rumus ${name} berdasarkan data latihan yang tersedia.`,
    logicPrompt: `Ini latihan fallback untuk ${name}. Baca format rumusnya, pilih data yang sesuai, lalu susun argumen mengikuti urutan format.`,
    expectedFormula: getFallbackFormula(formula),
    acceptedFormulas: [],
    requiredRefs: ['B2:B5'],
    requiredTexts: [],
    criteriaValue: '',
    argumentCount: { min: 1, max: null },
    highlightRanges: ['B2:B5'],
    allowedFunctions: [name],
    hints: [
      'Awali rumus dengan tanda =.',
      `Format dasar rumus ini: ${syntax}.`,
      'Pilih cell atau range yang sesuai dengan argumen rumus.',
      'Cek separator dan kurung penutup sebelum submit.'
    ],
    successExplanation: `${name} sudah terbaca dengan struktur yang sesuai.`,
    formulaParts: [
      `${name} adalah rumus yang sedang dilatih.`,
      `Format rumus: ${syntax}.`,
      'Latihan ini fallback. Rumus ini akan dibuatkan soal khusus di batch berikutnya.'
    ],
    commonMistakes: [
      'Lupa tanda = di awal rumus.',
      'Salah memilih range atau cell.',
      'Argumen belum lengkap.',
      'Separator atau kurung penutup belum sesuai.'
    ],
    nextUseCase: 'Gunakan pola ini sebagai latihan awal sebelum rumus ini dibuatkan soal khusus.',
    audit: {
      generated: true,
      status: 'generic-fallback',
      expectedFormula: getFallbackFormula(formula),
      refs: ['B2:B5'],
      note: 'Fallback aman untuk formula tanpa curated exercise.'
    }
  };
}
