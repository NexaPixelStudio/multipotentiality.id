// Batch 04: Lookup & Reference
// Fokus: mencari data dari master table memakai kode, posisi baris, atau posisi kolom.
// Catatan desain: soal dan logicPrompt sengaja TIDAK menyebut nama rumus, supaya pelajar
// menyimpulkan sendiri rumus mana yang cocok dari cara kerjanya. Nama rumus hanya muncul
// setelah jawaban benar (formulaParts) atau di panel hint paling belakang.

const sheet1 = {
  id: 'sheet1',
  name: 'Sheet1',
  title: 'Sheet 1 - Master Produk',
  description: 'Data master produk, disusun tegak: satu produk satu baris. Ambil kode dari Sheet2, lalu cari informasinya di sini.',
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

// Tabel khusus untuk rumus yang membaca data melebar ke kanan (bukan menurun).
// Baris 1 berisi kode produk, baris di bawahnya berisi atribut per kode.
const sheet1Horizontal = {
  id: 'sheet1',
  name: 'Sheet1',
  title: 'Sheet 1 - Master Produk (Tabel Melebar)',
  description: 'Data master produk yang sama, tapi disusun melebar: kode produk ada di baris paling atas, atributnya menurun ke bawah.',
  columns: ['Atribut', 'P001', 'P002', 'P003', 'P004', 'P005', 'P006'],
  rows: [
    ['Produk', 'Kaos Basic', 'Mug Keramik', 'Notebook A5', 'Totebag', 'Sticker Pack', 'Tumbler'],
    ['Kategori', 'Fashion', 'Gift', 'Stationery', 'Fashion', 'Stationery', 'Gift'],
    ['Harga', 85000, 45000, 25000, 65000, 15000, 70000],
    ['Stok', 120, 60, 95, 74, 180, 70],
    ['Supplier', 'Nexa Apparel', 'Karya Gift', 'Pixel Paper', 'Nexa Apparel', 'Pixel Paper', 'Karya Gift']
  ]
};

const sheet2 = {
  id: 'sheet2',
  name: 'Sheet2',
  title: 'Sheet 2 - Hasil Pencarian',
  description: 'Kolom Kode di sini jadi acuan pencarian. Tulis rumus di kolom hasil yang diminta soal.',
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

const batchLookupProductTableHorizontal = {
  ...batchLookupProductTable,
  sheets: [sheet1Horizontal, sheet2]
};

const idSeparator = (formula = '') => formula.replace(/,/g, ';');

// Kolom target yang diminta bergantian tiap level, supaya 6 latihan benar-benar
// berbeda hasil dan jawabannya, bukan sekadar ganti nama produk.
const targetColumns = [
  { field: 'Produk', col: 'B', hlookupRow: 2 },
  { field: 'Kategori', col: 'C', hlookupRow: 3 },
  { field: 'Harga', col: 'D', hlookupRow: 4 },
  { field: 'Stok', col: 'E', hlookupRow: 5 },
  { field: 'Supplier', col: 'F', hlookupRow: 6 },
  { field: 'Produk', col: 'B', hlookupRow: 2 }
];

const codeOrder = sheet2.rows.map((row) => row[0]); // P001, P003, P005, P002, P006, P004

function buildLookupExercise({ formulaId, formulaName, table, tableKey, rowIndex, buildFormula, buildQuestion, buildLogic, buildHints, buildParts, mistakes, argumentCount, activeCol, refs, resultName }) {
  const row = rowIndex + 2;
  const code = codeOrder[rowIndex];
  const target = targetColumns[rowIndex];
  const activeCell = `${activeCol(target)}${row}`;
  const expectedFormula = buildFormula({ row, code, target });
  const question = buildQuestion({ row, code, target });
  const logicPrompt = buildLogic({ row, code, target });
  const title = `Latihan ${rowIndex + 1}: Ambil ${target.field} dari Kode ${code}`;

  return {
    id: `${formulaId}__level_${rowIndex + 1}`,
    baseFormulaId: formulaId,
    formulaName,
    title,
    levelIndex: rowIndex,
    levelLabel: `${target.field} - ${code}`,
    tableKey,
    table,
    activeCell,
    question,
    logicPrompt,
    expectedFormula,
    acceptedFormulas: [idSeparator(expectedFormula)],
    requiredRefs: refs(target, row),
    requiredTexts: [],
    criteriaValue: code,
    argumentCount,
    highlightRanges: refs(target, row),
    allowedFunctions: formulaName.split(' '),
    hints: buildHints({ row, code, target }),
    successExplanation: `Tepat. Rumus ini berhasil menemukan ${target.field.toLowerCase()} untuk kode ${code} dan menaruh hasilnya di ${activeCell}.`,
    formulaParts: buildParts({ row, code, target }),
    commonMistakes: mistakes,
    nextUseCase: 'Pola pencarian data seperti ini cocok untuk master produk, harga, stok, data customer, atau tabel referensi lain di pekerjaan sehari-hari.',
    audit: { batch: 'batch-04-lookup-reference', tableKey, expectedFormula, refs: refs(target, row), note: 'Lookup batch memakai Sheet1 sebagai master produk dan Sheet2 sebagai area hasil.' }
  };
}

// ---------- VLOOKUP ----------
// Tabel tegak. Tiap level minta kolom hasil berbeda supaya jawabannya berbeda-beda.
const vlookupExercises = codeOrder.map((_, rowIndex) => buildLookupExercise({
  formulaId: 'vlookup',
  formulaName: 'VLOOKUP',
  table: batchLookupProductTable,
  tableKey: 'batchLookupProducts',
  rowIndex,
  activeCol: (target) => target.col,
  buildFormula: ({ row, target }) => `=VLOOKUP(A${row},Sheet1!A2:F7,${'ABCDEF'.indexOf(target.col) + 1},FALSE)`,
  buildQuestion: ({ row, code, target }) => `Di Sheet2 cell ${target.col}${row}, ambil ${target.field.toLowerCase()} dari master produk untuk kode ${code}.`,
  buildLogic: ({ row, target }) => `Kode di A${row} perlu dicocokkan dengan kolom Kode di Sheet1, lalu hasilnya diambil dari kolom ${target.field} yang sejajar. Kolom Kode di Sheet1 ada di paling kiri, jadi pencarian berjalan dari kiri ke kanan sampai ketemu kolom ${target.field}.`,
  buildHints: ({ row, target }) => [
    `Nilai yang dicari ada di A${row}.`,
    'Data master lengkap ada di Sheet1, mulai dari kolom Kode sampai Supplier.',
    `Kolom ${target.field} adalah kolom ke-${'ABCDEF'.indexOf(target.col) + 1} dihitung dari kolom Kode di Sheet1.`,
    'Karena kode harus cocok persis, opsi pencarian di argumen terakhir diisi agar tidak menerima hasil mendekati.'
  ],
  buildParts: ({ row, target }) => ['VLOOKUP mencari data secara tegak, mulai dari kolom paling kiri tabel.', `A${row} adalah kode yang dicari.`, 'Sheet1!A2:F7 adalah area tabel master.', `${'ABCDEF'.indexOf(target.col) + 1} adalah nomor kolom ${target.field}, dihitung dari kolom Kode.`, 'FALSE memastikan kode harus sama persis.'],
  mistakes: ['Menghitung nomor kolom hasil dari kolom sembarang, bukan dari kolom Kode di paling kiri tabel.', 'Memilih tabel master tanpa kolom Kode di posisi pertama.', 'Lupa mengunci pencarian ke kecocokan persis, sehingga hasil bisa meleset kalau kode mirip.'],
  argumentCount: { min: 4, max: 4 },
  refs: (target, row) => ['Sheet1!A2:F7', `A${row}`]
}));

// ---------- HLOOKUP ----------
// Tabel melebar (sheet1Horizontal): kode produk ada di baris atas, atribut menurun.
const hlookupExercises = codeOrder.map((_, rowIndex) => buildLookupExercise({
  formulaId: 'hlookup',
  formulaName: 'HLOOKUP',
  table: batchLookupProductTableHorizontal,
  tableKey: 'batchLookupProductsHorizontal',
  rowIndex,
  activeCol: (target) => target.col,
  buildFormula: ({ row, target }) => `=HLOOKUP(A${row},Sheet1!B1:G6,${target.hlookupRow},FALSE)`,
  buildQuestion: ({ row, code, target }) => `Di Sheet2 cell ${target.col}${row}, ambil ${target.field.toLowerCase()} dari tabel melebar di Sheet1 untuk kode ${code}.`,
  buildLogic: ({ row, target }) => `Sheet1 kali ini disusun melebar: baris paling atas berisi kode produk, baris-baris di bawahnya berisi atribut. Kode di A${row} perlu dicocokkan di baris atas itu, lalu hasilnya diambil dari baris ${target.field} yang sejajar ke bawah.`,
  buildHints: ({ row, target }) => [
    `Nilai yang dicari ada di A${row}.`,
    'Baris kode produk ada di baris paling atas area tabel Sheet1 (B1:G1).',
    `Baris ${target.field} adalah baris ke-${target.hlookupRow}, dihitung dari baris kode paling atas.`,
    'Karena kode harus cocok persis, opsi pencarian di argumen terakhir diisi agar tidak menerima hasil mendekati.'
  ],
  buildParts: ({ row, target }) => ['Rumus ini mencari data secara melebar, mulai dari baris paling atas tabel.', `A${row} adalah kode yang dicari.`, 'Sheet1!B1:G6 adalah area tabel master yang disusun horizontal.', `${target.hlookupRow} adalah nomor baris ${target.field}, dihitung dari baris kode di paling atas.`, 'FALSE memastikan kode harus sama persis.'],
  mistakes: ['Memakai tabel master yang tegak (bukan yang melebar) sehingga baris kode tidak ditemukan.', 'Salah menghitung nomor baris hasil karena baris kode di paling atas ikut dihitung sebagai baris pertama.', 'Lupa mengunci pencarian ke kecocokan persis.'],
  argumentCount: { min: 4, max: 4 },
  refs: (target, row) => ['Sheet1!B1:G6', `A${row}`]
}));

// ---------- XLOOKUP ----------
const xlookupExercises = codeOrder.map((_, rowIndex) => buildLookupExercise({
  formulaId: 'xlookup',
  formulaName: 'XLOOKUP',
  table: batchLookupProductTable,
  tableKey: 'batchLookupProducts',
  rowIndex,
  activeCol: (target) => target.col,
  buildFormula: ({ row, target }) => `=XLOOKUP(A${row},Sheet1!A2:A7,Sheet1!${target.col}2:${target.col}7)`,
  buildQuestion: ({ row, code, target }) => `Di Sheet2 cell ${target.col}${row}, ambil ${target.field.toLowerCase()} untuk kode ${code}. Kali ini area pencarian kode dan area hasil boleh dipisah jadi dua range sendiri-sendiri.`,
  buildLogic: ({ row, target }) => `Kode di A${row} dicari di daftar kode Sheet1!A2:A7. Setelah ketemu posisinya, hasil diambil dari baris yang sejajar di range ${target.field}, yaitu Sheet1!${target.col}2:${target.col}7. Range pencarian dan range hasil boleh berbeda kolom, asal jumlah barisnya sama.`,
  buildHints: ({ row, target }) => [
    `Nilai yang dicari ada di A${row}.`,
    'Daftar tempat mencari kode adalah Sheet1!A2:A7.',
    `Daftar tempat mengambil hasil ${target.field} adalah Sheet1!${target.col}2:${target.col}7.`,
    'Pastikan tinggi kedua range ini sama, sama-sama 6 baris.'
  ],
  buildParts: ({ row, target }) => ['Rumus ini memisahkan area pencarian dan area hasil menjadi dua range sendiri.', `A${row} adalah kode yang dicari.`, 'Sheet1!A2:A7 adalah tempat mencari kode.', `Sheet1!${target.col}2:${target.col}7 adalah tempat mengambil ${target.field.toLowerCase()}.`],
  mistakes: ['Menukar posisi range pencarian dan range hasil.', 'Memilih range hasil dengan jumlah baris berbeda dari range pencarian.', 'Mengambil kode dari Sheet1, padahal kode latihan sudah ada di Sheet2.'],
  argumentCount: { min: 3, max: 3 },
  refs: (target, row) => ['Sheet1!A2:A7', `Sheet1!${target.col}2:${target.col}7`, `A${row}`]
}));

// ---------- INDEX ----------
// Diperbaiki: posisi dan kolom target berubah tiap level, supaya jawabannya benar-benar
// berbeda (versi lama selalu mengambil posisi ke-2 di semua level).
const indexPositions = [3, 5, 1, 6, 2, 4];
const indexExercises = indexPositions.map((position, rowIndex) => {
  const row = rowIndex + 2;
  const target = targetColumns[rowIndex];
  const activeCell = `${target.col}${row}`;
  const expectedFormula = `=INDEX(Sheet1!${target.col}2:${target.col}7,${position})`;
  const question = `Di Sheet2 cell ${activeCell}, ambil ${target.field.toLowerCase()} produk urutan ke-${position} dari daftar di Sheet1 (urutan dihitung dari baris pertama daftar produk, bukan dari nomor baris sheet).`;
  const logicPrompt = `Yang diminta bukan pencarian kode, tapi mengambil isi berdasarkan posisi urutan. Daftar ${target.field.toLowerCase()} ada di Sheet1!${target.col}2:${target.col}7, lalu ambil isi pada urutan ke-${position} dari daftar itu.`;

  return {
    id: `index__level_${rowIndex + 1}`,
    baseFormulaId: 'index',
    formulaName: 'INDEX',
    title: `Latihan ${rowIndex + 1}: Ambil ${target.field} Urutan ke-${position}`,
    levelIndex: rowIndex,
    levelLabel: `${target.field} urutan ke-${position}`,
    tableKey: 'batchLookupProducts',
    table: batchLookupProductTable,
    activeCell,
    question,
    logicPrompt,
    expectedFormula,
    acceptedFormulas: [expectedFormula],
    requiredRefs: [`Sheet1!${target.col}2:${target.col}7`],
    requiredTexts: [],
    criteriaValue: String(position),
    argumentCount: { min: 2, max: 2 },
    highlightRanges: [`Sheet1!${target.col}2:${target.col}7`],
    allowedFunctions: ['INDEX'],
    hints: [
      `Daftar yang dipakai adalah Sheet1!${target.col}2:${target.col}7.`,
      `Urutan yang diambil adalah posisi ke-${position} dalam daftar itu.`,
      'Rumus ini tidak mencari kode apa pun, hanya mengambil isi dari posisi yang ditentukan.',
      `Tulis hasilnya di ${activeCell}.`
    ],
    successExplanation: `Tepat. Posisi ke-${position} dari daftar ${target.field.toLowerCase()} berhasil diambil ke ${activeCell}.`,
    formulaParts: ['INDEX mengambil isi berdasarkan posisi dalam range, bukan berdasarkan pencarian kode.', `Sheet1!${target.col}2:${target.col}7 adalah daftar ${target.field.toLowerCase()}.`, `${position} adalah urutan posisi yang diambil, dihitung dari baris pertama daftar.`],
    commonMistakes: ['Menghitung posisi dari nomor baris sheet, bukan dari urutan dalam daftar (baris pertama daftar = posisi 1).', 'Memilih daftar dari kolom yang salah.', 'Lupa mengisi angka posisi.'],
    nextUseCase: 'Pola ambil-berdasarkan-posisi ini sering dipakai bersama rumus pencari posisi untuk membuat pencarian dua arah yang fleksibel.',
    audit: { batch: 'batch-04-lookup-reference', tableKey: 'batchLookupProducts', expectedFormula, refs: [`Sheet1!${target.col}2:${target.col}7`], note: 'Diperbaiki supaya posisi dan kolom berbeda tiap level, tidak lagi selalu posisi ke-2.' }
  };
});

// ---------- MATCH ----------
// Setiap level mencari kode berbeda dari sheet2 (urutan sudah teracak), sehingga posisi
// hasilnya otomatis berbeda-beda tanpa perlu direkayasa lebih lanjut.
const matchExercises = codeOrder.map((code, rowIndex) => {
  const row = rowIndex + 2;
  const activeCell = `B${row}`;
  const expectedFormula = `=MATCH(A${row},Sheet1!A2:A7,0)`;
  const question = `Di Sheet2 cell ${activeCell}, cari ada di urutan keberapa kode ${code} dalam daftar kode di Sheet1.`;
  const logicPrompt = `Yang diminta bukan nama produk, tapi posisi urutan kode itu di dalam daftar. Kode di A${row} perlu dicocokkan persis dengan daftar kode di Sheet1!A2:A7, lalu hasilnya berupa nomor urutan, bukan isi produknya.`;

  return {
    id: `match__level_${rowIndex + 1}`,
    baseFormulaId: 'match',
    formulaName: 'MATCH',
    title: `Latihan ${rowIndex + 1}: Cari Posisi Kode ${code}`,
    levelIndex: rowIndex,
    levelLabel: `Posisi kode ${code}`,
    tableKey: 'batchLookupProducts',
    table: batchLookupProductTable,
    activeCell,
    question,
    logicPrompt,
    expectedFormula,
    acceptedFormulas: [expectedFormula],
    requiredRefs: ['Sheet1!A2:A7', `A${row}`],
    requiredTexts: [],
    criteriaValue: code,
    argumentCount: { min: 3, max: 3 },
    highlightRanges: ['Sheet1!A2:A7', `A${row}`],
    allowedFunctions: ['MATCH'],
    hints: [
      `Nilai yang dicari ada di A${row}.`,
      'Daftar tempat mencari kode adalah Sheet1!A2:A7.',
      'Hasilnya berupa nomor urutan posisi, bukan nama produk.',
      'Karena kode harus cocok persis, gunakan opsi pencarian yang mewajibkan kecocokan persis.'
    ],
    successExplanation: `Tepat. Kode ${code} berhasil ditemukan posisinya di daftar kode Sheet1.`,
    formulaParts: ['Rumus ini hanya memberi tahu posisi, bukan mengambil isi produk.', `A${row} adalah kode yang dicari.`, 'Sheet1!A2:A7 adalah daftar kode tempat mencari.', '0 di argumen terakhir berarti kode harus sama persis.'],
    commonMistakes: ['Berharap hasilnya berupa nama produk, padahal hasilnya nomor posisi.', 'Lupa argumen kecocokan persis di bagian akhir.', 'Memilih range yang bukan daftar kode.'],
    nextUseCase: 'Nomor posisi dari rumus ini sering dipakai sebagai bahan untuk rumus lain yang mengambil isi berdasarkan posisi.',
    audit: { batch: 'batch-04-lookup-reference', tableKey: 'batchLookupProducts', expectedFormula, refs: ['Sheet1!A2:A7', `A${row}`], note: 'Kode tiap level memakai urutan Sheet2 yang sudah teracak sehingga posisi hasil bervariasi alami.' }
  };
});

// ---------- INDEX MATCH ----------
const indexMatchExercises = codeOrder.map((_, rowIndex) => buildLookupExercise({
  formulaId: 'index_match',
  formulaName: 'INDEX MATCH',
  table: batchLookupProductTable,
  tableKey: 'batchLookupProducts',
  rowIndex,
  activeCol: (target) => target.col,
  buildFormula: ({ row, target }) => `=INDEX(Sheet1!${target.col}2:${target.col}7,MATCH(A${row},Sheet1!A2:A7,0))`,
  buildQuestion: ({ row, code, target }) => `Di Sheet2 cell ${target.col}${row}, ambil ${target.field.toLowerCase()} untuk kode ${code}. Kali ini gabungkan dua langkah: cari dulu posisi kodenya, baru ambil isinya dari posisi tersebut.`,
  buildLogic: ({ row, target }) => `Langkah 1: cari posisi kode A${row} di dalam daftar kode Sheet1!A2:A7. Langkah 2: pakai posisi itu untuk mengambil isi yang sejajar dari daftar ${target.field}, yaitu Sheet1!${target.col}2:${target.col}7. Dua langkah ini digabung jadi satu rumus, hasil langkah 1 dipakai sebagai posisi di langkah 2.`,
  buildHints: ({ row, target }) => [
    `Langkah pertama: cari posisi A${row} di Sheet1!A2:A7.`,
    `Langkah kedua: ambil isi dari Sheet1!${target.col}2:${target.col}7 berdasarkan posisi hasil langkah pertama.`,
    'Hasil langkah pertama diletakkan sebagai bagian "posisi" pada langkah kedua, menggantikan angka manual.',
    'Pastikan kedua daftar (kode dan hasil) punya jumlah baris yang sama.'
  ],
  buildParts: ({ row, target }) => ['Rumus ini gabungan dua langkah: mencari posisi, lalu mengambil isi dari posisi itu.', `A${row} adalah kode yang dicari posisinya.`, 'Sheet1!A2:A7 adalah daftar kode.', `Sheet1!${target.col}2:${target.col}7 adalah daftar ${target.field.toLowerCase()} yang diambil isinya.`, 'Gabungan ini lebih fleksibel karena kolom kode tidak harus di posisi paling kiri.'],
  mistakes: ['Menulis langkah pencarian posisi di luar langkah pengambilan isi, sehingga tidak tergabung jadi satu.', 'Menukar range daftar kode dengan range daftar hasil.', 'Lupa mengunci pencarian posisi ke kecocokan persis.'],
  argumentCount: { min: 2, max: 2 },
  refs: (target, row) => ['Sheet1!A2:A7', `Sheet1!${target.col}2:${target.col}7`, `A${row}`]
}));

export const batch04LookupReferenceExercises = {
  vlookup: vlookupExercises,
  hlookup: hlookupExercises,
  xlookup: xlookupExercises,
  index: indexExercises,
  match: matchExercises,
  index_match: indexMatchExercises
};

export const batch04LookupReferenceLevels = Object.fromEntries(
  Object.entries(batch04LookupReferenceExercises).map(([formulaId, levels]) => [
    formulaId,
    levels.map(({ id, title, levelLabel, question, expectedFormula }) => ({ id, title, levelLabel, question, expectedFormula }))
  ])
);
