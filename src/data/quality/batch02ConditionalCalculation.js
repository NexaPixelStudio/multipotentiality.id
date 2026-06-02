// Batch 02: Conditional Calculation
// Fokus: menghitung data dengan syarat. Setiap soal, tabel, active cell, clue, dan jawaban dibuat satu arah.

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

const conditionalScenarios = {
  sumif: [
    { label: 'Total kategori Fashion', activeCell: 'I2', criteriaRange: 'D2:D9', criteria: 'Fashion', valueRange: 'G2:G9', question: 'Di cell I2, hitung total penjualan untuk kategori Fashion.', logic: 'SUMIF dipakai karena soal meminta total dengan satu syarat. Cara bacanya: jumlahkan kolom Total, tapi hanya untuk baris yang kategorinya Fashion.' },
    { label: 'Total toko Pixel Store', activeCell: 'I3', criteriaRange: 'B2:B9', criteria: 'Pixel Store', valueRange: 'G2:G9', question: 'Di cell I3, hitung total penjualan dari toko Pixel Store.', logic: 'SUMIF dipakai karena hanya ada satu syarat, yaitu toko harus Pixel Store. Angka yang dijumlahkan tetap dari kolom Total.' },
    { label: 'Total kota Jakarta', activeCell: 'I4', criteriaRange: 'C2:C9', criteria: 'Jakarta', valueRange: 'G2:G9', question: 'Di cell I4, hitung total penjualan dari kota Jakarta.', logic: 'Cari baris yang kotanya Jakarta, lalu jumlahkan Total dari baris tersebut.' },
    { label: 'Total channel Shopee', activeCell: 'I5', criteriaRange: 'E2:E9', criteria: 'Shopee', valueRange: 'G2:G9', question: 'Di cell I5, hitung total penjualan dari channel Shopee.', logic: 'Syaratnya ada di kolom Channel. Jumlahkan kolom Total hanya untuk baris yang channel-nya Shopee.' },
    { label: 'Total status Selesai', activeCell: 'I6', criteriaRange: 'H2:H9', criteria: 'Selesai', valueRange: 'G2:G9', question: 'Di cell I6, hitung total penjualan untuk order yang statusnya Selesai.', logic: 'Syaratnya status Selesai. Total yang dihitung hanya baris dengan status tersebut.' },
    { label: 'Total kategori Digital', activeCell: 'I7', criteriaRange: 'D2:D9', criteria: 'Digital', valueRange: 'G2:G9', question: 'Di cell I7, hitung total penjualan untuk kategori Digital.', logic: 'SUMIF menjumlahkan kolom Total berdasarkan satu syarat, yaitu kategori Digital.' }
  ],
  countif: [
    { label: 'Jumlah order Jakarta', activeCell: 'I2', criteriaRange: 'C2:C9', criteria: 'Jakarta', question: 'Di cell I2, hitung jumlah order dari kota Jakarta.', logic: 'COUNTIF dipakai karena soal meminta jumlah data dengan satu syarat. Hitung berapa kali Jakarta muncul di kolom Kota.' },
    { label: 'Jumlah kategori Fashion', activeCell: 'I3', criteriaRange: 'D2:D9', criteria: 'Fashion', question: 'Di cell I3, hitung jumlah order untuk kategori Fashion.', logic: 'COUNTIF menghitung jumlah baris yang kategorinya Fashion.' },
    { label: 'Jumlah channel Shopee', activeCell: 'I4', criteriaRange: 'E2:E9', criteria: 'Shopee', question: 'Di cell I4, hitung jumlah order dari channel Shopee.', logic: 'COUNTIF menghitung berapa kali Shopee muncul di kolom Channel.' },
    { label: 'Jumlah status Pending', activeCell: 'I5', criteriaRange: 'H2:H9', criteria: 'Pending', question: 'Di cell I5, hitung jumlah order yang statusnya Pending.', logic: 'COUNTIF dipakai untuk menghitung jumlah status Pending di kolom Status.' },
    { label: 'Jumlah toko Pixel Store', activeCell: 'I6', criteriaRange: 'B2:B9', criteria: 'Pixel Store', question: 'Di cell I6, hitung jumlah order dari toko Pixel Store.', logic: 'COUNTIF menghitung berapa baris yang nama tokonya Pixel Store.' },
    { label: 'Jumlah kategori Gift', activeCell: 'I7', criteriaRange: 'D2:D9', criteria: 'Gift', question: 'Di cell I7, hitung jumlah order untuk kategori Gift.', logic: 'COUNTIF menghitung jumlah data yang memenuhi satu syarat, yaitu kategori Gift.' }
  ],
  averageif: [
    { label: 'Rata-rata Fashion', activeCell: 'I2', criteriaRange: 'D2:D9', criteria: 'Fashion', valueRange: 'G2:G9', question: 'Di cell I2, hitung rata-rata penjualan untuk kategori Fashion.', logic: 'AVERAGEIF dipakai karena soal meminta rata-rata dengan satu syarat. Ambil Total hanya dari baris kategori Fashion, lalu cari rata-ratanya.' },
    { label: 'Rata-rata Jakarta', activeCell: 'I3', criteriaRange: 'C2:C9', criteria: 'Jakarta', valueRange: 'G2:G9', question: 'Di cell I3, hitung rata-rata penjualan dari kota Jakarta.', logic: 'Cari baris kota Jakarta, lalu rata-ratakan nilai Total dari baris tersebut.' },
    { label: 'Rata-rata Pixel Store', activeCell: 'I4', criteriaRange: 'B2:B9', criteria: 'Pixel Store', valueRange: 'G2:G9', question: 'Di cell I4, hitung rata-rata penjualan dari toko Pixel Store.', logic: 'Syaratnya toko Pixel Store. Angka yang dirata-ratakan tetap kolom Total.' },
    { label: 'Rata-rata Selesai', activeCell: 'I5', criteriaRange: 'H2:H9', criteria: 'Selesai', valueRange: 'G2:G9', question: 'Di cell I5, hitung rata-rata penjualan untuk order yang statusnya Selesai.', logic: 'AVERAGEIF mengambil baris berstatus Selesai, lalu mencari rata-rata Total.' },
    { label: 'Rata-rata Lazada', activeCell: 'I6', criteriaRange: 'E2:E9', criteria: 'Lazada', valueRange: 'G2:G9', question: 'Di cell I6, hitung rata-rata penjualan dari channel Lazada.', logic: 'Syaratnya ada di kolom Channel. Rata-rata dihitung dari kolom Total.' },
    { label: 'Rata-rata Digital', activeCell: 'I7', criteriaRange: 'D2:D9', criteria: 'Digital', valueRange: 'G2:G9', question: 'Di cell I7, hitung rata-rata penjualan untuk kategori Digital.', logic: 'AVERAGEIF dipakai untuk rata-rata dengan satu syarat, yaitu kategori Digital.' }
  ],
  sumifs: [
    { label: 'Fashion Jakarta', activeCell: 'I2', valueRange: 'G2:G9', criteria: [['D2:D9', 'Fashion'], ['C2:C9', 'Jakarta']], question: 'Di cell I2, hitung total penjualan kategori Fashion dari kota Jakarta.', logic: 'SUMIFS dipakai karena ada lebih dari satu syarat. Total dijumlahkan jika kategorinya Fashion dan kotanya Jakarta.' },
    { label: 'Shopee Selesai', activeCell: 'I3', valueRange: 'G2:G9', criteria: [['E2:E9', 'Shopee'], ['H2:H9', 'Selesai']], question: 'Di cell I3, hitung total penjualan channel Shopee yang statusnya Selesai.', logic: 'Jumlahkan Total hanya untuk baris yang channel-nya Shopee dan statusnya Selesai.' },
    { label: 'Pixel Store Selesai', activeCell: 'I4', valueRange: 'G2:G9', criteria: [['B2:B9', 'Pixel Store'], ['H2:H9', 'Selesai']], question: 'Di cell I4, hitung total penjualan Pixel Store yang statusnya Selesai.', logic: 'SUMIFS mengecek toko dan status sekaligus, lalu menjumlahkan Total yang lolos dua syarat itu.' },
    { label: 'Surabaya Lazada', activeCell: 'I5', valueRange: 'G2:G9', criteria: [['C2:C9', 'Surabaya'], ['E2:E9', 'Lazada']], question: 'Di cell I5, hitung total penjualan dari kota Surabaya melalui channel Lazada.', logic: 'Total dihitung hanya kalau kota Surabaya dan channel Lazada sama-sama terpenuhi.' },
    { label: 'Stationery Selesai', activeCell: 'I6', valueRange: 'G2:G9', criteria: [['D2:D9', 'Stationery'], ['H2:H9', 'Selesai']], question: 'Di cell I6, hitung total penjualan kategori Stationery yang statusnya Selesai.', logic: 'SUMIFS dipakai untuk total dengan dua syarat: kategori Stationery dan status Selesai.' },
    { label: 'Bandung Pending', activeCell: 'I7', valueRange: 'G2:G9', criteria: [['C2:C9', 'Bandung'], ['H2:H9', 'Pending']], question: 'Di cell I7, hitung total penjualan dari Bandung yang statusnya Pending.', logic: 'Jumlahkan Total hanya untuk order dari Bandung dan statusnya Pending.' }
  ],
  countifs: [
    { label: 'Fashion Jakarta', activeCell: 'I2', criteria: [['D2:D9', 'Fashion'], ['C2:C9', 'Jakarta']], question: 'Di cell I2, hitung jumlah order kategori Fashion dari kota Jakarta.', logic: 'COUNTIFS dipakai karena soal meminta jumlah data dengan lebih dari satu syarat.' },
    { label: 'Shopee Selesai', activeCell: 'I3', criteria: [['E2:E9', 'Shopee'], ['H2:H9', 'Selesai']], question: 'Di cell I3, hitung jumlah order Shopee yang statusnya Selesai.', logic: 'COUNTIFS menghitung baris yang channel-nya Shopee dan statusnya Selesai.' },
    { label: 'Pixel Store Selesai', activeCell: 'I4', criteria: [['B2:B9', 'Pixel Store'], ['H2:H9', 'Selesai']], question: 'Di cell I4, hitung jumlah order Pixel Store yang statusnya Selesai.', logic: 'Hitung order yang memenuhi dua syarat sekaligus: toko Pixel Store dan status Selesai.' },
    { label: 'Surabaya Lazada', activeCell: 'I5', criteria: [['C2:C9', 'Surabaya'], ['E2:E9', 'Lazada']], question: 'Di cell I5, hitung jumlah order dari Surabaya melalui Lazada.', logic: 'COUNTIFS menghitung jumlah baris yang kota dan channel-nya sesuai.' },
    { label: 'Stationery Selesai', activeCell: 'I6', criteria: [['D2:D9', 'Stationery'], ['H2:H9', 'Selesai']], question: 'Di cell I6, hitung jumlah order Stationery yang statusnya Selesai.', logic: 'COUNTIFS dipakai untuk menghitung data dengan dua syarat.' },
    { label: 'Bandung Pending', activeCell: 'I7', criteria: [['C2:C9', 'Bandung'], ['H2:H9', 'Pending']], question: 'Di cell I7, hitung jumlah order dari Bandung yang statusnya Pending.', logic: 'Hitung jumlah baris yang kotanya Bandung dan statusnya Pending.' }
  ],
  averageifs: [
    { label: 'Fashion Jakarta', activeCell: 'I2', valueRange: 'G2:G9', criteria: [['D2:D9', 'Fashion'], ['C2:C9', 'Jakarta']], question: 'Di cell I2, hitung rata-rata penjualan kategori Fashion dari kota Jakarta.', logic: 'AVERAGEIFS dipakai karena rata-rata dihitung hanya untuk data yang memenuhi lebih dari satu syarat.' },
    { label: 'Shopee Selesai', activeCell: 'I3', valueRange: 'G2:G9', criteria: [['E2:E9', 'Shopee'], ['H2:H9', 'Selesai']], question: 'Di cell I3, hitung rata-rata penjualan Shopee yang statusnya Selesai.', logic: 'Cari baris Shopee yang statusnya Selesai, lalu rata-ratakan nilai Total.' },
    { label: 'Pixel Store Selesai', activeCell: 'I4', valueRange: 'G2:G9', criteria: [['B2:B9', 'Pixel Store'], ['H2:H9', 'Selesai']], question: 'Di cell I4, hitung rata-rata penjualan Pixel Store yang statusnya Selesai.', logic: 'AVERAGEIFS mengecek toko dan status, lalu mencari rata-rata Total dari baris yang lolos.' },
    { label: 'Surabaya Lazada', activeCell: 'I5', valueRange: 'G2:G9', criteria: [['C2:C9', 'Surabaya'], ['E2:E9', 'Lazada']], question: 'Di cell I5, hitung rata-rata penjualan dari Surabaya melalui Lazada.', logic: 'Rata-rata dihitung hanya untuk kota Surabaya dan channel Lazada.' },
    { label: 'Stationery Selesai', activeCell: 'I6', valueRange: 'G2:G9', criteria: [['D2:D9', 'Stationery'], ['H2:H9', 'Selesai']], question: 'Di cell I6, hitung rata-rata penjualan Stationery yang statusnya Selesai.', logic: 'AVERAGEIFS dipakai untuk rata-rata dengan dua syarat.' },
    { label: 'Bandung Pending', activeCell: 'I7', valueRange: 'G2:G9', criteria: [['C2:C9', 'Bandung'], ['H2:H9', 'Pending']], question: 'Di cell I7, hitung rata-rata penjualan dari Bandung yang statusnya Pending.', logic: 'Cari baris Bandung dengan status Pending, lalu ambil rata-rata Total.' }
  ]
};

const formulaMeta = {
  sumif: { name: 'SUMIF', kind: 'single-sum', argumentCount: { min: 3, max: 3 }, resultWord: 'total' },
  countif: { name: 'COUNTIF', kind: 'single-count', argumentCount: { min: 2, max: 2 }, resultWord: 'jumlah data' },
  averageif: { name: 'AVERAGEIF', kind: 'single-average', argumentCount: { min: 3, max: 3 }, resultWord: 'rata-rata' },
  sumifs: { name: 'SUMIFS', kind: 'multi-sum', argumentCount: { min: 5, max: 5 }, resultWord: 'total' },
  countifs: { name: 'COUNTIFS', kind: 'multi-count', argumentCount: { min: 4, max: 4 }, resultWord: 'jumlah data' },
  averageifs: { name: 'AVERAGEIFS', kind: 'multi-average', argumentCount: { min: 5, max: 5 }, resultWord: 'rata-rata' }
};

function quote(value = '') {
  return `"${value}"`;
}

function idSeparator(formula = '') {
  return formula.replace(/,/g, ';');
}

function buildExpectedFormula(formulaId, scenario) {
  const meta = formulaMeta[formulaId];
  if (meta.kind === 'single-sum') return `=SUMIF(${scenario.criteriaRange},${quote(scenario.criteria)},${scenario.valueRange})`;
  if (meta.kind === 'single-count') return `=COUNTIF(${scenario.criteriaRange},${quote(scenario.criteria)})`;
  if (meta.kind === 'single-average') return `=AVERAGEIF(${scenario.criteriaRange},${quote(scenario.criteria)},${scenario.valueRange})`;

  const criteriaParts = scenario.criteria.flatMap(([range, criteria]) => [range, quote(criteria)]).join(',');
  if (meta.kind === 'multi-sum') return `=SUMIFS(${scenario.valueRange},${criteriaParts})`;
  if (meta.kind === 'multi-count') return `=COUNTIFS(${criteriaParts})`;
  if (meta.kind === 'multi-average') return `=AVERAGEIFS(${scenario.valueRange},${criteriaParts})`;
  return '';
}

function getHighlightRanges(formulaId, scenario) {
  if (scenario.criteria) return [scenario.valueRange, ...scenario.criteria.map(([range]) => range)].filter(Boolean);
  return [scenario.criteriaRange, scenario.valueRange].filter(Boolean);
}

function getRequiredRefs(formulaId, scenario) {
  return getHighlightRanges(formulaId, scenario);
}

function getRequiredTexts(scenario) {
  if (scenario.criteria) return scenario.criteria.map(([, criteria]) => criteria);
  return [scenario.criteria];
}

function getCriteriaValue(scenario) {
  if (scenario.criteria) return scenario.criteria.map(([, criteria]) => criteria).join(' + ');
  return scenario.criteria;
}

function getHints(formulaId, scenario) {
  const meta = formulaMeta[formulaId];
  if (scenario.criteria) {
    const criteriaText = scenario.criteria.map(([range, criteria]) => `${range} = ${criteria}`).join(' dan ');
    return [
      `${meta.name} dipakai karena soal punya lebih dari satu syarat.`,
      `Range hasil yang dihitung: ${scenario.valueRange || 'tidak ada, karena rumus ini menghitung jumlah data'}.`,
      `Syarat yang dicek: ${criteriaText}.`,
      'Urutan argumen untuk rumus berakhiran S harus rapi: range angka dulu jika ada, lalu pasangan range syarat dan syarat.'
    ];
  }

  return [
    `${meta.name} dipakai karena soal hanya punya satu syarat.`,
    `Range syarat: ${scenario.criteriaRange}.`,
    `Syarat yang dicari: ${scenario.criteria}.`,
    scenario.valueRange ? `Range angka yang dihitung: ${scenario.valueRange}.` : 'Rumus ini menghitung jumlah data, jadi tidak butuh range angka terpisah.'
  ];
}

function getFormulaParts(formulaId, scenario) {
  const meta = formulaMeta[formulaId];
  if (scenario.criteria) {
    return [
      `${meta.name} adalah rumus untuk mencari ${meta.resultWord} dengan banyak syarat.`,
      scenario.valueRange ? `${scenario.valueRange} adalah range angka yang dihitung.` : 'COUNTIFS tidak butuh range angka, karena yang dihitung adalah jumlah baris.',
      'Setiap syarat selalu ditulis berpasangan: range syarat, lalu isi syaratnya.'
    ];
  }

  return [
    `${meta.name} adalah rumus untuk mencari ${meta.resultWord} dengan satu syarat.`,
    `${scenario.criteriaRange} adalah range yang dicek syaratnya.`,
    `${scenario.criteria} adalah syarat yang dicari.`,
    scenario.valueRange ? `${scenario.valueRange} adalah range angka yang dihitung.` : 'COUNTIF tidak butuh range angka, karena yang dihitung adalah jumlah data.'
  ];
}

function getCommonMistakes(formulaId) {
  const meta = formulaMeta[formulaId];
  if (meta.kind.startsWith('single')) {
    return [
      'Menukar posisi range syarat dan syarat.',
      'Lupa memberi tanda kutip untuk kriteria berupa teks.',
      'Memakai rumus biasa seperti SUM atau AVERAGE padahal soal punya syarat.',
      'Memilih range yang panjangnya tidak sesuai dengan data.'
    ];
  }

  return [
    'Menulis syarat tanpa pasangannya.',
    'Menukar urutan range angka dengan range syarat.',
    'Lupa tanda kutip untuk kriteria berupa teks.',
    'Memakai versi satu syarat, padahal soal meminta lebih dari satu syarat.'
  ];
}

function buildExercise(formulaId, scenario, index) {
  const meta = formulaMeta[formulaId];
  const expectedFormula = buildExpectedFormula(formulaId, scenario);
  return {
    id: `${formulaId}__level_${index + 1}`,
    baseFormulaId: formulaId,
    formulaName: meta.name,
    title: `Latihan ${index + 1}: ${scenario.label}`,
    levelIndex: index,
    levelLabel: scenario.label,
    tableKey: 'batchConditionalOrders',
    table: batchConditionalOrderTable,
    activeCell: scenario.activeCell,
    question: scenario.question,
    logicPrompt: scenario.logic,
    expectedFormula,
    acceptedFormulas: [idSeparator(expectedFormula)],
    requiredRefs: getRequiredRefs(formulaId, scenario),
    requiredTexts: getRequiredTexts(scenario),
    criteriaValue: getCriteriaValue(scenario),
    argumentCount: meta.argumentCount,
    highlightRanges: getHighlightRanges(formulaId, scenario),
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
      refs: getRequiredRefs(formulaId, scenario),
      requiredTexts: getRequiredTexts(scenario),
      note: 'Dibuat dari awal agar rumus conditional hanya muncul saat soal memang punya syarat.'
    }
  };
}

export const batch02ConditionalCalculationExercises = Object.fromEntries(
  Object.entries(conditionalScenarios).map(([formulaId, scenarios]) => [
    formulaId,
    scenarios.map((scenario, index) => buildExercise(formulaId, scenario, index))
  ])
);

export const batch02ConditionalCalculationLevels = Object.fromEntries(
  Object.entries(batch02ConditionalCalculationExercises).map(([formulaId, levels]) => [
    formulaId,
    levels.map(({ id, title, levelLabel, question, expectedFormula }) => ({ id, title, levelLabel, question, expectedFormula }))
  ])
);
