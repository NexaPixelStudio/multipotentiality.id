// Batch 04: Lookup & Reference
// Fokus: mencari data dari master table memakai kode, posisi baris, atau posisi kolom.

const sheet1 = {
  id: 'sheet1',
  name: 'Sheet1',
  title: 'Sheet 1 - Master Produk',
  description: 'Data master produk. Ambil kode dari Sheet2, lalu cari informasi produk di Sheet1.',
  columns: ['Kode', 'Produk', 'Kategori', 'Harga', 'Stok', 'Supplier'],
  rows: [
    ['P001', 'Kaos Basic', 'Fashion', 85000, 120, 'Nexa Apparel'],
    ['P002', 'Mug Keramik', 'Gift', 45000, 60, 'Karya Gift'],
    ['P003', 'Notebook A5', 'Stationery', 25000, 95, 'Pixel Paper'],
    ['P004', 'Totebag', 'Fashion', 65000, 74, 'Nexa Apparel'],
    ['P005', 'Sticker Pack', 'Stationery', 15000, 180, 'Pixel Paper'],
    ['P006', 'Tumbler', 'Gift', 70000, 70, 'Karya Gift']
  ]
};

const sheet2 = {
  id: 'sheet2',
  name: 'Sheet2',
  title: 'Sheet 2 - Hasil Lookup',
  description: 'Pakai kode produk di kolom A sebagai lookup value. Tulis rumus di kolom hasil yang diminta.',
  columns: ['Kode', 'Produk', 'Kategori', 'Harga', 'Stok', 'Supplier'],
  rows: [
    ['P001', '', '', '', '', ''],
    ['P003', '', '', '', '', ''],
    ['P005', '', '', '', '', ''],
    ['P002', '', '', '', '', ''],
    ['P006', '', '', '', '', ''],
    ['P004', '', '', '', '', '']
  ]
};

export const batchLookupProductTable = {
  title: 'Lookup Master Produk',
  description: 'Sheet1 adalah master data. Sheet2 adalah area pencarian dan hasil.',
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

const idSeparator = (formula = '') => formula.replace(/,/g, ';');

const lookupPlans = {
  vlookup: {
    name: 'VLOOKUP',
    label: 'Cari Nama Produk',
    argumentCount: { min: 4, max: 4 },
    activeCol: 'B',
    resultName: 'nama produk',
    buildFormula: (row) => `=VLOOKUP(A${row},Sheet1!A2:F7,2,FALSE)`,
    buildQuestion: ({ row, code }) => `Di Sheet2 cell B${row}, cari nama produk untuk kode ${code} memakai VLOOKUP.`,
    buildLogic: ({ row }) => `VLOOKUP mencari kode di kolom paling kiri tabel master, lalu mengambil hasil dari kolom yang sejajar. A${row} adalah kode yang dicari, Sheet1!A2:F7 adalah master table, angka 2 artinya ambil kolom Produk, FALSE artinya cari kode yang sama persis.`,
    hints: (row) => [`Lookup value-nya ada di A${row}.`, 'Table array-nya adalah Sheet1!A2:F7.', 'Kolom Produk adalah kolom ke-2 dari table array.', 'Gunakan FALSE agar hasilnya exact match.'],
    parts: (row) => ['VLOOKUP mencari data secara vertikal.', `A${row} adalah kode yang dicari.`, 'Sheet1!A2:F7 adalah area master data.', '2 berarti ambil hasil dari kolom ke-2.', 'FALSE berarti cari kode yang sama persis.'],
    mistakes: ['Mengambil table array tanpa kolom Kode di paling kiri.', 'Salah nomor kolom hasil.', 'Lupa FALSE sehingga hasil bisa tidak tepat.']
  },
  hlookup: {
    name: 'HLOOKUP',
    label: 'Cari Harga dari Tabel Horizontal',
    argumentCount: { min: 4, max: 4 },
    activeCol: 'D',
    resultName: 'harga',
    buildFormula: (row) => `=HLOOKUP(A${row},Sheet1!A1:F7,4,FALSE)`,
    buildQuestion: ({ row, code }) => `Di Sheet2 cell D${row}, cari harga untuk kode ${code} memakai HLOOKUP.`,
    buildLogic: ({ row }) => `HLOOKUP mencari data secara horizontal dari baris pertama area yang dipilih. A${row} adalah kode yang dicari, Sheet1!A1:F7 adalah area data, angka 4 artinya hasil diambil dari baris Harga dalam area tersebut.`,
    hints: (row) => [`Lookup value-nya ada di A${row}.`, 'Pilih area Sheet1!A1:F7.', 'Harga berada pada baris ke-4 dalam area tersebut.', 'Gunakan FALSE agar kode harus sama persis.'],
    parts: (row) => ['HLOOKUP mencari data berdasarkan baris atas.', `A${row} adalah kode yang dicari.`, 'Sheet1!A1:F7 adalah area data.', '4 berarti ambil hasil dari baris ke-4.', 'FALSE berarti exact match.'],
    mistakes: ['Memakai VLOOKUP untuk latihan HLOOKUP.', 'Salah menghitung nomor baris hasil.', 'Lupa FALSE.']
  },
  xlookup: {
    name: 'XLOOKUP',
    label: 'Cari Supplier',
    argumentCount: { min: 3, max: 3 },
    activeCol: 'F',
    resultName: 'supplier',
    buildFormula: (row) => `=XLOOKUP(A${row},Sheet1!A2:A7,Sheet1!F2:F7)`,
    buildQuestion: ({ row, code }) => `Di Sheet2 cell F${row}, cari supplier untuk kode ${code} memakai XLOOKUP.`,
    buildLogic: ({ row }) => `XLOOKUP lebih mudah dibaca karena range pencarian dan range hasil dipisah jelas. A${row} dicari di Sheet1!A2:A7, lalu hasilnya diambil dari Sheet1!F2:F7.`,
    hints: (row) => [`Lookup value-nya ada di A${row}.`, 'Lookup array-nya Sheet1!A2:A7.', 'Return array-nya Sheet1!F2:F7.', 'Pastikan tinggi lookup array dan return array sama.'],
    parts: (row) => ['XLOOKUP mencari nilai di lookup array.', `A${row} adalah kode yang dicari.`, 'Sheet1!A2:A7 adalah tempat mencari kode.', 'Sheet1!F2:F7 adalah tempat mengambil hasil supplier.'],
    mistakes: ['Menukar lookup array dan return array.', 'Memilih return array yang tingginya tidak sama.', 'Mengambil kode dari Sheet1, padahal kode latihan ada di Sheet2.']
  },
  index: {
    name: 'INDEX',
    label: 'Ambil Produk Baris ke-2',
    argumentCount: { min: 2, max: 2 },
    activeCol: 'B',
    resultName: 'nama produk',
    buildFormula: () => '=INDEX(Sheet1!B2:B7,2)',
    buildQuestion: ({ row }) => `Di Sheet2 cell B${row}, ambil nama produk urutan ke-2 dari daftar produk di Sheet1 memakai INDEX.`,
    buildLogic: () => 'INDEX mengambil isi dari posisi tertentu dalam range. Sheet1!B2:B7 adalah daftar produk, angka 2 artinya ambil item urutan kedua dari range itu.',
    hints: () => ['Range hasilnya Sheet1!B2:B7.', 'Angka posisinya adalah 2.', 'INDEX tidak mencari kode, tapi mengambil berdasarkan posisi.', 'Hasilnya ditulis di Sheet2.'],
    parts: () => ['INDEX mengambil data berdasarkan posisi.', 'Sheet1!B2:B7 adalah daftar produk.', '2 berarti ambil data urutan kedua dari range.'],
    mistakes: ['Mengira INDEX mencari kode seperti VLOOKUP.', 'Salah memilih range hasil.', 'Lupa angka posisi.']
  },
  match: {
    name: 'MATCH',
    label: 'Cari Posisi Kode',
    argumentCount: { min: 3, max: 3 },
    activeCol: 'B',
    resultName: 'posisi kode',
    buildFormula: (row) => `=MATCH(A${row},Sheet1!A2:A7,0)`,
    buildQuestion: ({ row, code }) => `Di Sheet2 cell B${row}, cari posisi kode ${code} di daftar kode Sheet1 memakai MATCH.`,
    buildLogic: ({ row }) => `MATCH tidak mengambil nama produk. MATCH memberi tahu posisi data. A${row} dicari di Sheet1!A2:A7, angka 0 artinya harus sama persis.`,
    hints: (row) => [`Lookup value-nya ada di A${row}.`, 'Lookup array-nya Sheet1!A2:A7.', 'Match type 0 berarti exact match.', 'Hasilnya berupa nomor posisi.'],
    parts: (row) => ['MATCH mencari posisi data.', `A${row} adalah kode yang dicari.`, 'Sheet1!A2:A7 adalah daftar kode.', '0 berarti exact match.'],
    mistakes: ['Mengira MATCH mengambil nama produk.', 'Lupa match type 0.', 'Memilih range yang bukan daftar kode.']
  },
  index_match: {
    name: 'INDEX MATCH',
    label: 'Cari Produk dengan INDEX MATCH',
    argumentCount: { min: 2, max: 2 },
    activeCol: 'B',
    resultName: 'nama produk',
    buildFormula: (row) => `=INDEX(Sheet1!B2:B7,MATCH(A${row},Sheet1!A2:A7,0))`,
    buildQuestion: ({ row, code }) => `Di Sheet2 cell B${row}, cari nama produk untuk kode ${code} memakai gabungan INDEX MATCH.`,
    buildLogic: ({ row }) => `MATCH mencari posisi kode A${row} di Sheet1!A2:A7. INDEX memakai posisi itu untuk mengambil nama produk dari Sheet1!B2:B7.`,
    hints: (row) => [`MATCH mencari posisi A${row} di Sheet1!A2:A7.`, 'INDEX mengambil nama produk dari Sheet1!B2:B7.', 'MATCH diletakkan di bagian nomor posisi INDEX.', 'Gunakan 0 pada MATCH agar exact match.'],
    parts: (row) => ['INDEX mengambil hasil.', 'MATCH mencari posisi baris.', `A${row} adalah kode yang dicari.`, 'Gabungan ini lebih fleksibel daripada VLOOKUP.'],
    mistakes: ['Menaruh MATCH di luar INDEX.', 'Menukar range INDEX dan range MATCH.', 'Lupa 0 pada MATCH.']
  }
};

function buildExercise(formulaId, plan, rowData, rowIndex) {
  const row = rowIndex + 2;
  const code = rowData[0];
  const activeCell = `${plan.activeCol}${row}`;
  const expectedFormula = plan.buildFormula(row);
  const title = `Latihan ${rowIndex + 1}: ${plan.label} - ${code}`;
  const question = plan.buildQuestion({ row, code });
  const logicPrompt = plan.buildLogic({ row, code });

  return {
    id: `${formulaId}__level_${rowIndex + 1}`,
    baseFormulaId: formulaId,
    formulaName: plan.name,
    title,
    levelIndex: rowIndex,
    levelLabel: `${plan.label} - ${code}`,
    tableKey: 'batchLookupProducts',
    table: batchLookupProductTable,
    activeCell,
    question,
    logicPrompt,
    expectedFormula,
    acceptedFormulas: [idSeparator(expectedFormula)],
    requiredRefs: [],
    requiredTexts: [],
    criteriaValue: code,
    argumentCount: plan.argumentCount,
    highlightRanges: ['Sheet1!A1:F7', `A${row}`],
    allowedFunctions: plan.name.split(' '),
    hints: plan.hints(row),
    successExplanation: `Tepat. ${plan.name} sudah menemukan ${plan.resultName} untuk kode ${code}.`,
    formulaParts: plan.parts(row),
    commonMistakes: plan.mistakes,
    nextUseCase: 'Pola lookup ini cocok untuk master produk, harga, stok, data customer, atau tabel referensi lain.',
    audit: { batch: 'batch-04-lookup-reference', tableKey: 'batchLookupProducts', expectedFormula, refs: ['Sheet1', `A${row}`], note: 'Lookup batch memakai Sheet1 sebagai master produk dan Sheet2 sebagai area hasil.' }
  };
}

export const batch04LookupReferenceExercises = Object.fromEntries(
  Object.entries(lookupPlans).map(([formulaId, plan]) => [
    formulaId,
    sheet2.rows.map((rowData, rowIndex) => buildExercise(formulaId, plan, rowData, rowIndex))
  ])
);

export const batch04LookupReferenceLevels = Object.fromEntries(
  Object.entries(batch04LookupReferenceExercises).map(([formulaId, levels]) => [
    formulaId,
    levels.map(({ id, title, levelLabel, question, expectedFormula }) => ({ id, title, levelLabel, question, expectedFormula }))
  ])
);
