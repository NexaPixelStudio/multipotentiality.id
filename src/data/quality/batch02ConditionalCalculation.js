// Batch 02: Conditional Calculation
// Fokus: menghitung data dengan syarat. Setiap latihan dibuat dari pola yang sama agar tidak ada soal, tabel, dan jawaban yang saling tabrakan.

export const batchConditionalOrderTable = {
  title: 'Data Order Marketplace',
  description: 'Data order dari beberapa kota, kategori, channel, dan status. Kolom Hasil dipakai untuk menulis jawaban rumus.',
  columns: ['Order ID', 'Toko', 'Kota', 'Kategori', 'Channel', 'Qty', 'Total', 'Status', 'Hasil'],
  rows: [
    ['ORD-001', 'Nexa Mart', 'Jakarta', 'Fashion', 'Shopee', 12, 1800000, 'Selesai', ''],
    ['ORD-002', 'Pixel Store', 'Bandung', 'Digital', 'Tokopedia', 8, 2400000, 'Selesai', ''],
    ['ORD-003', 'Nexa Mart', 'Jakarta', 'Stationery', 'Shopee', 15, 750000, 'Pending', ''],
    ['ORD-004', 'Karya Shop', 'Surabaya', 'Fashion', 'Lazada', 6, 900000, 'Selesai', ''],
    ['ORD-005', 'Pixel Store', 'Jakarta', 'Digital', 'Shopee', 10, 3000000, 'Selesai', ''],
    ['ORD-006', 'Nexa Mart', 'Bandung', 'Gift', 'Tokopedia', 5, 500000, 'Pending', ''],
    ['ORD-007', 'Karya Shop', 'Jakarta', 'Fashion', 'Shopee', 9, 1350000, 'Selesai', ''],
    ['ORD-008', 'Pixel Store', 'Surabaya', 'Stationery', 'Lazada', 14, 840000, 'Selesai', '']
  ]
};

const singleCriteriaScenarios = {
  sumif: [
    ['I2', 'Total kategori Fashion', 'D2:D9', 'Fashion', 'G2:G9', 'hitung total penjualan untuk kategori Fashion'],
    ['I3', 'Total toko Pixel Store', 'B2:B9', 'Pixel Store', 'G2:G9', 'hitung total penjualan dari toko Pixel Store'],
    ['I4', 'Total kota Jakarta', 'C2:C9', 'Jakarta', 'G2:G9', 'hitung total penjualan dari kota Jakarta'],
    ['I5', 'Total channel Shopee', 'E2:E9', 'Shopee', 'G2:G9', 'hitung total penjualan dari channel Shopee'],
    ['I6', 'Total status Selesai', 'H2:H9', 'Selesai', 'G2:G9', 'hitung total penjualan untuk order yang statusnya Selesai'],
    ['I7', 'Total kategori Digital', 'D2:D9', 'Digital', 'G2:G9', 'hitung total penjualan untuk kategori Digital']
  ],
  countif: [
    ['I2', 'Jumlah order Jakarta', 'C2:C9', 'Jakarta', '', 'hitung jumlah order dari kota Jakarta'],
    ['I3', 'Jumlah kategori Fashion', 'D2:D9', 'Fashion', '', 'hitung jumlah order untuk kategori Fashion'],
    ['I4', 'Jumlah channel Shopee', 'E2:E9', 'Shopee', '', 'hitung jumlah order dari channel Shopee'],
    ['I5', 'Jumlah status Pending', 'H2:H9', 'Pending', '', 'hitung jumlah order yang statusnya Pending'],
    ['I6', 'Jumlah toko Pixel Store', 'B2:B9', 'Pixel Store', '', 'hitung jumlah order dari toko Pixel Store'],
    ['I7', 'Jumlah kategori Gift', 'D2:D9', 'Gift', '', 'hitung jumlah order untuk kategori Gift']
  ],
  averageif: [
    ['I2', 'Rata-rata Fashion', 'D2:D9', 'Fashion', 'G2:G9', 'hitung rata-rata penjualan untuk kategori Fashion'],
    ['I3', 'Rata-rata Jakarta', 'C2:C9', 'Jakarta', 'G2:G9', 'hitung rata-rata penjualan dari kota Jakarta'],
    ['I4', 'Rata-rata Pixel Store', 'B2:B9', 'Pixel Store', 'G2:G9', 'hitung rata-rata penjualan dari toko Pixel Store'],
    ['I5', 'Rata-rata Selesai', 'H2:H9', 'Selesai', 'G2:G9', 'hitung rata-rata penjualan untuk order yang statusnya Selesai'],
    ['I6', 'Rata-rata Lazada', 'E2:E9', 'Lazada', 'G2:G9', 'hitung rata-rata penjualan dari channel Lazada'],
    ['I7', 'Rata-rata Digital', 'D2:D9', 'Digital', 'G2:G9', 'hitung rata-rata penjualan untuk kategori Digital']
  ]
};

const multiCriteriaScenarios = {
  sumifs: [
    ['I2', 'Fashion Jakarta', 'G2:G9', [['D2:D9', 'Fashion'], ['C2:C9', 'Jakarta']], 'hitung total penjualan kategori Fashion dari kota Jakarta'],
    ['I3', 'Shopee Selesai', 'G2:G9', [['E2:E9', 'Shopee'], ['H2:H9', 'Selesai']], 'hitung total penjualan channel Shopee yang statusnya Selesai'],
    ['I4', 'Pixel Store Selesai', 'G2:G9', [['B2:B9', 'Pixel Store'], ['H2:H9', 'Selesai']], 'hitung total penjualan Pixel Store yang statusnya Selesai'],
    ['I5', 'Surabaya Lazada', 'G2:G9', [['C2:C9', 'Surabaya'], ['E2:E9', 'Lazada']], 'hitung total penjualan dari kota Surabaya melalui channel Lazada'],
    ['I6', 'Stationery Selesai', 'G2:G9', [['D2:D9', 'Stationery'], ['H2:H9', 'Selesai']], 'hitung total penjualan kategori Stationery yang statusnya Selesai'],
    ['I7', 'Bandung Pending', 'G2:G9', [['C2:C9', 'Bandung'], ['H2:H9', 'Pending']], 'hitung total penjualan dari Bandung yang statusnya Pending']
  ],
  countifs: [
    ['I2', 'Fashion Jakarta', '', [['D2:D9', 'Fashion'], ['C2:C9', 'Jakarta']], 'hitung jumlah order kategori Fashion dari kota Jakarta'],
    ['I3', 'Shopee Selesai', '', [['E2:E9', 'Shopee'], ['H2:H9', 'Selesai']], 'hitung jumlah order Shopee yang statusnya Selesai'],
    ['I4', 'Pixel Store Selesai', '', [['B2:B9', 'Pixel Store'], ['H2:H9', 'Selesai']], 'hitung jumlah order Pixel Store yang statusnya Selesai'],
    ['I5', 'Surabaya Lazada', '', [['C2:C9', 'Surabaya'], ['E2:E9', 'Lazada']], 'hitung jumlah order dari Surabaya melalui Lazada'],
    ['I6', 'Stationery Selesai', '', [['D2:D9', 'Stationery'], ['H2:H9', 'Selesai']], 'hitung jumlah order Stationery yang statusnya Selesai'],
    ['I7', 'Bandung Pending', '', [['C2:C9', 'Bandung'], ['H2:H9', 'Pending']], 'hitung jumlah order dari Bandung yang statusnya Pending']
  ],
  averageifs: [
    ['I2', 'Fashion Jakarta', 'G2:G9', [['D2:D9', 'Fashion'], ['C2:C9', 'Jakarta']], 'hitung rata-rata penjualan kategori Fashion dari kota Jakarta'],
    ['I3', 'Shopee Selesai', 'G2:G9', [['E2:E9', 'Shopee'], ['H2:H9', 'Selesai']], 'hitung rata-rata penjualan Shopee yang statusnya Selesai'],
    ['I4', 'Pixel Store Selesai', 'G2:G9', [['B2:B9', 'Pixel Store'], ['H2:H9', 'Selesai']], 'hitung rata-rata penjualan Pixel Store yang statusnya Selesai'],
    ['I5', 'Surabaya Lazada', 'G2:G9', [['C2:C9', 'Surabaya'], ['E2:E9', 'Lazada']], 'hitung rata-rata penjualan dari Surabaya melalui Lazada'],
    ['I6', 'Stationery Selesai', 'G2:G9', [['D2:D9', 'Stationery'], ['H2:H9', 'Selesai']], 'hitung rata-rata penjualan Stationery yang statusnya Selesai'],
    ['I7', 'Bandung Pending', 'G2:G9', [['C2:C9', 'Bandung'], ['H2:H9', 'Pending']], 'hitung rata-rata penjualan dari Bandung yang statusnya Pending']
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

const quote = (value = '') => `"${value}"`;
const idSeparator = (formula = '') => formula.replace(/,/g, ';');
const isMultiFormula = (formulaId = '') => formulaId.endsWith('s');

function buildExpectedFormula(formulaId, scenario) {
  if (formulaId === 'sumif') return `=SUMIF(${scenario.criteriaRange},${quote(scenario.criteriaText)},${scenario.valueRange})`;
  if (formulaId === 'countif') return `=COUNTIF(${scenario.criteriaRange},${quote(scenario.criteriaText)})`;
  if (formulaId === 'averageif') return `=AVERAGEIF(${scenario.criteriaRange},${quote(scenario.criteriaText)},${scenario.valueRange})`;

  const criteriaParts = scenario.criteriaPairs.flatMap(([range, criteria]) => [range, quote(criteria)]).join(',');
  if (formulaId === 'sumifs') return `=SUMIFS(${scenario.valueRange},${criteriaParts})`;
  if (formulaId === 'countifs') return `=COUNTIFS(${criteriaParts})`;
  if (formulaId === 'averageifs') return `=AVERAGEIFS(${scenario.valueRange},${criteriaParts})`;
  return '';
}

function getHighlightRanges(scenario) {
  if (Array.isArray(scenario.criteriaPairs)) {
    return [scenario.valueRange, ...scenario.criteriaPairs.map(([range]) => range)].filter(Boolean);
  }
  return [scenario.criteriaRange, scenario.valueRange].filter(Boolean);
}

function getRequiredTexts(scenario) {
  if (Array.isArray(scenario.criteriaPairs)) return scenario.criteriaPairs.map(([, criteria]) => criteria);
  return [scenario.criteriaText].filter(Boolean);
}

function getCriteriaValue(scenario) {
  if (Array.isArray(scenario.criteriaPairs)) return scenario.criteriaPairs.map(([, criteria]) => criteria).join(' + ');
  return scenario.criteriaText || '';
}

function getHints(formulaId, scenario) {
  const meta = formulaMeta[formulaId];
  if (Array.isArray(scenario.criteriaPairs)) {
    const criteriaText = scenario.criteriaPairs.map(([range, criteria]) => `${range} = ${criteria}`).join(' dan ');
    return [
      `${meta.name} dipakai karena soal punya lebih dari satu syarat.`,
      scenario.valueRange ? `Range angka yang dihitung: ${scenario.valueRange}.` : 'Rumus ini menghitung jumlah data, jadi tidak butuh range angka.',
      `Syarat yang dicek: ${criteriaText}.`,
      'Urutannya harus rapi: range angka dulu jika ada, lalu pasangan range syarat dan syarat.'
    ];
  }
  return [
    `${meta.name} dipakai karena soal hanya punya satu syarat.`,
    `Range syarat: ${scenario.criteriaRange}.`,
    `Syarat yang dicari: ${scenario.criteriaText}.`,
    scenario.valueRange ? `Range angka yang dihitung: ${scenario.valueRange}.` : 'COUNTIF tidak butuh range angka, karena yang dihitung jumlah data.'
  ];
}

function getFormulaParts(formulaId, scenario) {
  const meta = formulaMeta[formulaId];
  if (Array.isArray(scenario.criteriaPairs)) {
    return [
      `${meta.name} mencari ${meta.resultWord} dengan banyak syarat.`,
      scenario.valueRange ? `${scenario.valueRange} adalah range angka yang dihitung.` : 'COUNTIFS tidak butuh range angka.',
      'Setiap syarat ditulis berpasangan: range syarat, lalu isi syaratnya.'
    ];
  }
  return [
    `${meta.name} mencari ${meta.resultWord} dengan satu syarat.`,
    `${scenario.criteriaRange} adalah range yang dicek syaratnya.`,
    `${scenario.criteriaText} adalah syarat yang dicari.`,
    scenario.valueRange ? `${scenario.valueRange} adalah range angka yang dihitung.` : 'COUNTIF tidak butuh range angka.'
  ];
}

function buildQuestionSheet({ title, question, activeCell, formulaName, criteriaValue, ranges, logic }) {
  return {
    title: 'Sheet 2 - Soal',
    description: 'Sheet ini berisi soal latihan. Sheet 1 tetap dipakai sebagai data utama.',
    columns: ['Bagian', 'Isi'],
    rows: [
      ['Judul Latihan', title],
      ['Soal', question],
      ['Cell Jawaban', activeCell],
      ['Rumus yang Dipakai', formulaName],
      ['Value / Kriteria', criteriaValue || 'Tidak ada value khusus.'],
      ['Range yang Dipakai', ranges?.length ? ranges.join(', ') : 'Ikuti soal dan data di Sheet 1.'],
      ['Cara Baca', logic]
    ]
  };
}

function getCommonMistakes(formulaId) {
  return isMultiFormula(formulaId)
    ? ['Menulis syarat tanpa pasangannya.', 'Menukar urutan range angka dengan range syarat.', 'Lupa tanda kutip untuk kriteria teks.', 'Memakai versi satu syarat padahal soal punya lebih dari satu syarat.']
    : ['Menukar posisi range syarat dan syarat.', 'Lupa tanda kutip untuk kriteria teks.', 'Memakai rumus biasa padahal soal punya syarat.', 'Memilih range yang tidak sesuai dengan data.'];
}

function normalizeSingleScenario(item) {
  const [activeCell, label, criteriaRange, criteriaText, valueRange, task] = item;
  return { activeCell, label, criteriaRange, criteriaText, valueRange, task };
}

function normalizeMultiScenario(item) {
  const [activeCell, label, valueRange, criteriaPairs, task] = item;
  return { activeCell, label, valueRange, criteriaPairs, task };
}

function buildExercise(formulaId, scenario, index) {
  const meta = formulaMeta[formulaId];
  const expectedFormula = buildExpectedFormula(formulaId, scenario);
  const multi = Array.isArray(scenario.criteriaPairs);
  const conditionText = multi
    ? scenario.criteriaPairs.map(([range, criteria]) => `${range} = ${criteria}`).join(' dan ')
    : `${scenario.criteriaRange} = ${scenario.criteriaText}`;
  const question = `Di cell ${scenario.activeCell}, ${scenario.task}.`;
  const logicPrompt = `${meta.name} dipakai untuk mencari ${meta.resultWord} dengan ${multi ? 'lebih dari satu syarat' : 'satu syarat'}. Cara bacanya: cek ${conditionText}, lalu ${meta.resultWord} diambil dari data yang memenuhi syarat.`;
  const ranges = getHighlightRanges(scenario);
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
    table: { ...batchConditionalOrderTable, questionSheet: buildQuestionSheet({ title, question, activeCell: scenario.activeCell, formulaName: meta.name, criteriaValue, ranges, logic: logicPrompt }) },
    activeCell: scenario.activeCell,
    question,
    logicPrompt,
    expectedFormula,
    acceptedFormulas: [idSeparator(expectedFormula)],
    requiredRefs: ranges,
    requiredTexts: getRequiredTexts(scenario),
    criteriaValue,
    argumentCount: meta.argumentCount,
    highlightRanges: ranges,
    allowedFunctions: [meta.name],
    hints: getHints(formulaId, scenario),
    successExplanation: `Tepat. ${meta.name} sudah menghitung ${meta.resultWord} sesuai syarat pada soal.`,
    formulaParts: getFormulaParts(formulaId, scenario),
    commonMistakes: getCommonMistakes(formulaId),
    nextUseCase: 'Pola ini bisa dipakai untuk laporan penjualan per kategori, kota, channel, status, atau toko.',
    audit: {
      batch: 'batch-02-conditional-calculation',
      tableKey: 'batchConditionalOrders',
      expectedFormula,
      refs: ranges,
      requiredTexts: getRequiredTexts(scenario),
      note: 'Conditional batch dibuat dari awal. Single criteria dan multi criteria dipisah agar tidak crash.'
    }
  };
}

const singleExercises = Object.fromEntries(
  Object.entries(singleCriteriaScenarios).map(([formulaId, items]) => [
    formulaId,
    items.map((item, index) => buildExercise(formulaId, normalizeSingleScenario(item), index))
  ])
);

const multiExercises = Object.fromEntries(
  Object.entries(multiCriteriaScenarios).map(([formulaId, items]) => [
    formulaId,
    items.map((item, index) => buildExercise(formulaId, normalizeMultiScenario(item), index))
  ])
);

export const batch02ConditionalCalculationExercises = {
  ...singleExercises,
  ...multiExercises
};

export const batch02ConditionalCalculationLevels = Object.fromEntries(
  Object.entries(batch02ConditionalCalculationExercises).map(([formulaId, levels]) => [
    formulaId,
    levels.map(({ id, title, levelLabel, question, expectedFormula }) => ({ id, title, levelLabel, question, expectedFormula }))
  ])
);
