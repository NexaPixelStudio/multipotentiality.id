// Batch 02: Conditional Calculation
// Konsep: Sheet1 berisi data mentah. Sheet2 dipakai sebagai area hasil/jawaban, bukan petunjuk.

const sheet1 = {
  id: 'sheet1',
  name: 'Sheet1',
  title: 'Sheet 1 - Data Order',
  description: 'Data mentah order marketplace. Ambil range dari sheet ini untuk menghitung jawaban di Sheet2.',
  columns: ['Order ID', 'Toko', 'Kota', 'Kategori', 'Channel', 'Qty', 'Total', 'Status'],
  rows: [
    ['ORD-001', 'Nexa Mart', 'Jakarta', 'Fashion', 'Shopee', 12, 1800000, 'Selesai'],
    ['ORD-002', 'Pixel Store', 'Bandung', 'Digital', 'Tokopedia', 8, 2400000, 'Selesai'],
    ['ORD-003', 'Nexa Mart', 'Jakarta', 'Stationery', 'Shopee', 15, 750000, 'Pending'],
    ['ORD-004', 'Karya Shop', 'Surabaya', 'Fashion', 'Lazada', 6, 900000, 'Selesai'],
    ['ORD-005', 'Pixel Store', 'Jakarta', 'Digital', 'Shopee', 10, 3000000, 'Selesai'],
    ['ORD-006', 'Nexa Mart', 'Bandung', 'Gift', 'Tokopedia', 5, 500000, 'Pending'],
    ['ORD-007', 'Karya Shop', 'Jakarta', 'Fashion', 'Shopee', 9, 1350000, 'Selesai'],
    ['ORD-008', 'Pixel Store', 'Surabaya', 'Stationery', 'Lazada', 14, 840000, 'Selesai']
  ]
};

const sheet2 = {
  id: 'sheet2',
  name: 'Sheet2',
  title: 'Sheet 2 - Hasil',
  description: 'Tulis rumus di sheet ini. Kriteria bisa diambil dari header atau kategori yang ada di Sheet2, datanya tetap dari Sheet1.',
  columns: ['Kategori', 'Nexa Mart', 'Pixel Store', 'Qty', 'Total', 'Selesai', 'Pending'],
  rows: [
    ['Fashion', '', '', '', '', '', ''],
    ['Digital', '', '', '', '', '', ''],
    ['Stationery', '', '', '', '', '', ''],
    ['Gift', '', '', '', '', '', ''],
    ['Digital', '', '', '', '', '', '']
  ]
};

export const batchConditionalOrderTable = {
  title: 'Data Order Marketplace',
  description: 'Sheet1 adalah data mentah. Sheet2 adalah area hasil rumus.',
  sheetName: 'Sheet1',
  questionSheetName: 'Sheet2',
  activeSheetId: 'sheet2',
  answerSheetId: 'sheet2',
  formulaSheetId: 'sheet2',
  formulaSheetName: 'Sheet2',
  questionSheetSelectable: true,
  columns: sheet1.columns,
  rows: sheet1.rows,
  questionSheet: sheet2,
  sheets: [sheet1, sheet2]
};

const singleCriteriaScenarios = {
  sumif: [
    ['B2', 'Total Fashion', 'Sheet1!D2:D9', 'A2', 'Sheet1!G2:G9', 'hitung total penjualan kategori Fashion'],
    ['B3', 'Total Digital', 'Sheet1!D2:D9', 'A3', 'Sheet1!G2:G9', 'hitung total penjualan kategori Digital'],
    ['C2', 'Total Pixel Store', 'Sheet1!B2:B9', 'C1', 'Sheet1!G2:G9', 'hitung total penjualan toko Pixel Store'],
    ['F2', 'Total Selesai', 'Sheet1!H2:H9', 'F1', 'Sheet1!G2:G9', 'hitung total penjualan order yang statusnya Selesai'],
    ['G2', 'Total Pending', 'Sheet1!H2:H9', 'G1', 'Sheet1!G2:G9', 'hitung total penjualan order yang statusnya Pending'],
    ['B6', 'Total Digital lagi', 'Sheet1!D2:D9', 'A6', 'Sheet1!G2:G9', 'hitung total penjualan kategori Digital dari kriteria di A6']
  ],
  countif: [
    ['D2', 'Jumlah Fashion', 'Sheet1!D2:D9', 'A2', '', 'hitung jumlah order kategori Fashion'],
    ['D3', 'Jumlah Digital', 'Sheet1!D2:D9', 'A3', '', 'hitung jumlah order kategori Digital'],
    ['B2', 'Jumlah Nexa Mart', 'Sheet1!B2:B9', 'B1', '', 'hitung jumlah order toko Nexa Mart'],
    ['C2', 'Jumlah Pixel Store', 'Sheet1!B2:B9', 'C1', '', 'hitung jumlah order toko Pixel Store'],
    ['F2', 'Jumlah Selesai', 'Sheet1!H2:H9', 'F1', '', 'hitung jumlah order yang statusnya Selesai'],
    ['G2', 'Jumlah Pending', 'Sheet1!H2:H9', 'G1', '', 'hitung jumlah order yang statusnya Pending']
  ],
  averageif: [
    ['E2', 'Rata-rata Fashion', 'Sheet1!D2:D9', 'A2', 'Sheet1!G2:G9', 'hitung rata-rata penjualan kategori Fashion'],
    ['E3', 'Rata-rata Digital', 'Sheet1!D2:D9', 'A3', 'Sheet1!G2:G9', 'hitung rata-rata penjualan kategori Digital'],
    ['B2', 'Rata-rata Nexa Mart', 'Sheet1!B2:B9', 'B1', 'Sheet1!G2:G9', 'hitung rata-rata penjualan toko Nexa Mart'],
    ['C2', 'Rata-rata Pixel Store', 'Sheet1!B2:B9', 'C1', 'Sheet1!G2:G9', 'hitung rata-rata penjualan toko Pixel Store'],
    ['F2', 'Rata-rata Selesai', 'Sheet1!H2:H9', 'F1', 'Sheet1!G2:G9', 'hitung rata-rata penjualan order yang statusnya Selesai'],
    ['G2', 'Rata-rata Pending', 'Sheet1!H2:H9', 'G1', 'Sheet1!G2:G9', 'hitung rata-rata penjualan order yang statusnya Pending']
  ]
};

const multiCriteriaScenarios = {
  sumifs: [
    ['B2', 'Fashion Nexa Mart', 'Sheet1!G2:G9', [['Sheet1!D2:D9', 'A2'], ['Sheet1!B2:B9', 'B1']], 'hitung total penjualan kategori Fashion untuk toko Nexa Mart'],
    ['C2', 'Fashion Pixel Store', 'Sheet1!G2:G9', [['Sheet1!D2:D9', 'A2'], ['Sheet1!B2:B9', 'C1']], 'hitung total penjualan kategori Fashion untuk toko Pixel Store'],
    ['F2', 'Fashion Selesai', 'Sheet1!G2:G9', [['Sheet1!D2:D9', 'A2'], ['Sheet1!H2:H9', 'F1']], 'hitung total penjualan kategori Fashion yang statusnya Selesai'],
    ['G2', 'Fashion Pending', 'Sheet1!G2:G9', [['Sheet1!D2:D9', 'A2'], ['Sheet1!H2:H9', 'G1']], 'hitung total penjualan kategori Fashion yang statusnya Pending'],
    ['B3', 'Digital Nexa Mart', 'Sheet1!G2:G9', [['Sheet1!D2:D9', 'A3'], ['Sheet1!B2:B9', 'B1']], 'hitung total penjualan kategori Digital untuk toko Nexa Mart'],
    ['C3', 'Digital Pixel Store', 'Sheet1!G2:G9', [['Sheet1!D2:D9', 'A3'], ['Sheet1!B2:B9', 'C1']], 'hitung total penjualan kategori Digital untuk toko Pixel Store']
  ],
  countifs: [
    ['B2', 'Fashion Nexa Mart', '', [['Sheet1!D2:D9', 'A2'], ['Sheet1!B2:B9', 'B1']], 'hitung jumlah order kategori Fashion untuk toko Nexa Mart'],
    ['C2', 'Fashion Pixel Store', '', [['Sheet1!D2:D9', 'A2'], ['Sheet1!B2:B9', 'C1']], 'hitung jumlah order kategori Fashion untuk toko Pixel Store'],
    ['F2', 'Fashion Selesai', '', [['Sheet1!D2:D9', 'A2'], ['Sheet1!H2:H9', 'F1']], 'hitung jumlah order kategori Fashion yang statusnya Selesai'],
    ['G2', 'Fashion Pending', '', [['Sheet1!D2:D9', 'A2'], ['Sheet1!H2:H9', 'G1']], 'hitung jumlah order kategori Fashion yang statusnya Pending'],
    ['B3', 'Digital Nexa Mart', '', [['Sheet1!D2:D9', 'A3'], ['Sheet1!B2:B9', 'B1']], 'hitung jumlah order kategori Digital untuk toko Nexa Mart'],
    ['C3', 'Digital Pixel Store', '', [['Sheet1!D2:D9', 'A3'], ['Sheet1!B2:B9', 'C1']], 'hitung jumlah order kategori Digital untuk toko Pixel Store']
  ],
  averageifs: [
    ['B2', 'Fashion Nexa Mart', 'Sheet1!G2:G9', [['Sheet1!D2:D9', 'A2'], ['Sheet1!B2:B9', 'B1']], 'hitung rata-rata penjualan kategori Fashion untuk toko Nexa Mart'],
    ['C2', 'Fashion Pixel Store', 'Sheet1!G2:G9', [['Sheet1!D2:D9', 'A2'], ['Sheet1!B2:B9', 'C1']], 'hitung rata-rata penjualan kategori Fashion untuk toko Pixel Store'],
    ['F2', 'Fashion Selesai', 'Sheet1!G2:G9', [['Sheet1!D2:D9', 'A2'], ['Sheet1!H2:H9', 'F1']], 'hitung rata-rata penjualan kategori Fashion yang statusnya Selesai'],
    ['G2', 'Fashion Pending', 'Sheet1!G2:G9', [['Sheet1!D2:D9', 'A2'], ['Sheet1!H2:H9', 'G1']], 'hitung rata-rata penjualan kategori Fashion yang statusnya Pending'],
    ['B3', 'Digital Nexa Mart', 'Sheet1!G2:G9', [['Sheet1!D2:D9', 'A3'], ['Sheet1!B2:B9', 'B1']], 'hitung rata-rata penjualan kategori Digital untuk toko Nexa Mart'],
    ['C3', 'Digital Pixel Store', 'Sheet1!G2:G9', [['Sheet1!D2:D9', 'A3'], ['Sheet1!B2:B9', 'C1']], 'hitung rata-rata penjualan kategori Digital untuk toko Pixel Store']
  ]
};

const formulaMeta = {
  sumif: { name: 'SUMIF', resultWord: 'total', argumentCount: { min: 3, max: 3 } },
  countif: { name: 'COUNTIF', resultWord: 'jumlah data', argumentCount: { min: 2, max: 2 } },
  averageif: { name: 'AVERAGEIF', resultWord: 'rata-rata', argumentCount: { min: 3, max: 3 } },
  sumifs: { name: 'SUMIFS', resultWord: 'total', argumentCount: { min: 5, max: 5 } },
  countifs: { name: 'COUNTIFS', resultWord: 'jumlah data', argumentCount: { min: 4, max: 4 } },
  averageifs: { name: 'AVERAGEIFS', resultWord: 'rata-rata', argumentCount: { min: 5, max: 5 } }
};

const idSeparator = (formula = '') => formula.replace(/,/g, ';');
const isMultiFormula = (formulaId = '') => formulaId.endsWith('s');

function buildExpectedFormula(formulaId, scenario) {
  if (formulaId === 'sumif') return `=SUMIF(${scenario.criteriaRange},${scenario.criteriaRef},${scenario.valueRange})`;
  if (formulaId === 'countif') return `=COUNTIF(${scenario.criteriaRange},${scenario.criteriaRef})`;
  if (formulaId === 'averageif') return `=AVERAGEIF(${scenario.criteriaRange},${scenario.criteriaRef},${scenario.valueRange})`;
  const criteriaParts = scenario.criteriaPairs.flatMap(([range, criteriaRef]) => [range, criteriaRef]).join(',');
  if (formulaId === 'sumifs') return `=SUMIFS(${scenario.valueRange},${criteriaParts})`;
  if (formulaId === 'countifs') return `=COUNTIFS(${criteriaParts})`;
  if (formulaId === 'averageifs') return `=AVERAGEIFS(${scenario.valueRange},${criteriaParts})`;
  return '';
}

function getRanges(scenario) {
  if (Array.isArray(scenario.criteriaPairs)) return [scenario.valueRange, ...scenario.criteriaPairs.flatMap(([range, ref]) => [range, ref])].filter(Boolean);
  return [scenario.criteriaRange, scenario.criteriaRef, scenario.valueRange].filter(Boolean);
}

function getCriteriaValue(scenario) {
  if (Array.isArray(scenario.criteriaPairs)) return scenario.criteriaPairs.map(([, ref]) => ref).join(' + ');
  return scenario.criteriaRef || '';
}

function getHints(formulaId, scenario) {
  if (Array.isArray(scenario.criteriaPairs)) return ['Soal ini punya lebih dari satu syarat yang harus terpenuhi bersamaan.', scenario.valueRange ? `Range angka yang dihitung ada di ${scenario.valueRange}.` : 'Yang dihitung adalah jumlah baris data, jadi tidak perlu range angka.', 'Ambil data mentah dari Sheet1, lalu ambil kriteria dari header/baris di Sheet2.', 'Urutannya: range angka dulu jika ada, lalu pasangan range syarat dan cell kriteria untuk tiap syarat.'];
  return ['Soal ini hanya punya satu syarat yang perlu dicek.', `Range syarat ada di ${scenario.criteriaRange}.`, `Kriteria diambil dari cell ${scenario.criteriaRef} pada Sheet2.`, scenario.valueRange ? `Range angka yang dihitung ada di ${scenario.valueRange}.` : 'Yang dihitung adalah jumlah baris data, jadi tidak perlu range angka.'];
}

function getFormulaParts(formulaId, scenario) {
  const meta = formulaMeta[formulaId];
  if (Array.isArray(scenario.criteriaPairs)) return [`${meta.name} mencari ${meta.resultWord} dengan banyak syarat.`, 'Sheet1 adalah sumber data mentah.', 'Sheet2 adalah tempat kriteria dan jawaban.', 'Setiap syarat ditulis berpasangan: range syarat dari Sheet1, lalu cell kriteria dari Sheet2.'];
  return [`${meta.name} mencari ${meta.resultWord} dengan satu syarat.`, `${scenario.criteriaRange} adalah range yang dicek syaratnya di Sheet1.`, `${scenario.criteriaRef} adalah cell kriteria di Sheet2.`, scenario.valueRange ? `${scenario.valueRange} adalah range angka yang dihitung.` : 'COUNTIF tidak butuh range angka.'];
}

function getCommonMistakes(formulaId) {
  return isMultiFormula(formulaId)
    ? ['Menulis syarat tanpa pasangannya.', 'Menukar urutan range angka dengan range syarat.', 'Mengambil kriteria dari Sheet1, padahal kriteria latihan ada di Sheet2.', 'Memakai versi satu syarat padahal soal punya lebih dari satu syarat.']
    : ['Menukar posisi range syarat dan kriteria.', 'Mengetik kriteria manual, padahal lebih rapi ambil dari cell Sheet2.', 'Memakai rumus biasa padahal soal punya syarat.', 'Memilih range dari sheet yang salah.'];
}

function normalizeSingleScenario(item) { const [activeCell, label, criteriaRange, criteriaRef, valueRange, task] = item; return { activeCell, label, criteriaRange, criteriaRef, valueRange, task }; }
function normalizeMultiScenario(item) { const [activeCell, label, valueRange, criteriaPairs, task] = item; return { activeCell, label, valueRange, criteriaPairs, task }; }

function buildExercise(formulaId, scenario, index) {
  const meta = formulaMeta[formulaId];
  const expectedFormula = buildExpectedFormula(formulaId, scenario);
  const multi = Array.isArray(scenario.criteriaPairs);
  const conditionText = multi ? scenario.criteriaPairs.map(([range, ref]) => `${range} dicek memakai ${ref}`).join(' dan ') : `${scenario.criteriaRange} dicek memakai ${scenario.criteriaRef}`;
  const question = `Di Sheet2 cell ${scenario.activeCell}, ${scenario.task}.`;
  const logicPrompt = `Yang dicari adalah ${meta.resultWord} dari data di Sheet1, tapi harus melewati ${multi ? 'lebih dari satu syarat sekaligus' : 'satu syarat'} dulu. Cara bacanya: ${conditionText}, lalu hasilnya ditulis di Sheet2.`;
  const ranges = getRanges(scenario);
  const criteriaValue = getCriteriaValue(scenario);
  const title = `Latihan ${index + 1}: ${scenario.label}`;

  return {
    id: `${formulaId}__level_${index + 1}`,
    baseFormulaId: formulaId,
    formulaName: meta.name,
    title,
    levelIndex: index,
    levelLabel: scenario.label,
    tableKey: 'batchConditionalOrders',
    table: batchConditionalOrderTable,
    activeCell: scenario.activeCell,
    question,
    logicPrompt,
    expectedFormula,
    acceptedFormulas: [idSeparator(expectedFormula)],
    requiredRefs: ranges,
    requiredTexts: [],
    criteriaValue,
    argumentCount: meta.argumentCount,
    highlightRanges: ranges,
    allowedFunctions: [meta.name],
    hints: getHints(formulaId, scenario),
    successExplanation: `Tepat. ${meta.name} sudah menghitung ${meta.resultWord} dari Sheet1 dan menaruh hasilnya di Sheet2.`,
    formulaParts: getFormulaParts(formulaId, scenario),
    commonMistakes: getCommonMistakes(formulaId),
    nextUseCase: 'Pola Sheet1 data dan Sheet2 jawaban cocok untuk membuat rekap, summary, atau laporan otomatis.',
    audit: { batch: 'batch-02-conditional-calculation', tableKey: 'batchConditionalOrders', expectedFormula, refs: ranges, note: 'Conditional batch memakai Sheet1 untuk data mentah dan Sheet2 untuk jawaban.' }
  };
}

const singleExercises = Object.fromEntries(Object.entries(singleCriteriaScenarios).map(([formulaId, items]) => [
  formulaId,
  items.map((item, index) => buildExercise(formulaId, normalizeSingleScenario(item), index))
]));

const multiExercises = Object.fromEntries(Object.entries(multiCriteriaScenarios).map(([formulaId, items]) => [
  formulaId,
  items.map((item, index) => buildExercise(formulaId, normalizeMultiScenario(item), index))
]));

export const batch02ConditionalCalculationExercises = { ...singleExercises, ...multiExercises };

export const batch02ConditionalCalculationLevels = Object.fromEntries(
  Object.entries(batch02ConditionalCalculationExercises).map(([formulaId, levels]) => [
    formulaId,
    levels.map(({ id, title, levelLabel, question, expectedFormula }) => ({ id, title, levelLabel, question, expectedFormula }))
  ])
);
