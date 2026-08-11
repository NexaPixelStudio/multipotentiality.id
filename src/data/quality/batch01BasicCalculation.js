// Batch 01: Basic Calculation
// Fokus: rumus hitung dasar yang bisa berdiri sendiri dan mudah dipahami pemula.
// Catatan desain: tiap 6 level memakai PERIODE/URUTAN yang berbeda (bukan cuma ganti nama
// produk), supaya jawabannya benar-benar berbeda dan bukan pengulangan kasus yang sama.
// Soal dan logicPrompt sengaja tidak menyebut nama rumus, supaya pelajar menyimpulkan
// sendiri rumus mana yang cocok dari cara kerjanya.

export const batchBasicSalesTable = {
  title: 'Data Penjualan Produk',
  description: 'Data penjualan Januari sampai Juni. Kolom Hasil dipakai untuk menulis jawaban rumus.',
  columns: ['Produk', 'Kategori', 'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Catatan', 'Hasil'],
  rows: [
    ['Kaos Basic', 'Fashion', 120, 135, 140, 155, 160, 170, 'Stabil', ''],
    ['Mug Keramik', 'Gift', 45, 52, 48, 60, 63, 58, '', ''],
    ['Notebook A5', 'Stationery', 80, 75, 90, 85, 95, 100, 'Naik', ''],
    ['Totebag', 'Fashion', 65, 70, 72, 68, 74, 78, '', ''],
    ['Sticker Pack', 'Stationery', 150, 145, 160, 170, 165, 180, 'Best seller', ''],
    ['Tumbler', 'Gift', 55, 60, 58, 62, 67, 70, '', '']
  ]
};

// 6 periode berbeda dipakai bergantian tiap level supaya range dan hasilnya bervariasi nyata.
const periodScopes = [
  { label: 'Januari sampai Juni', build: (row) => `C${row}:H${row}` },
  { label: 'Januari sampai Maret (kuartal 1)', build: (row) => `C${row}:E${row}` },
  { label: 'April sampai Juni (kuartal 2)', build: (row) => `F${row}:H${row}` },
  { label: 'Februari sampai Mei', build: (row) => `D${row}:G${row}` },
  { label: 'Mei sampai Juni', build: (row) => `G${row}:H${row}` },
  { label: 'Maret sampai Juni', build: (row) => `E${row}:H${row}` }
];

const largeSmallOrders = [2, 3, 1, 4, 2, 3];

const formulaPlans = {
  sum: {
    name: 'SUM',
    label: (scope) => `Total Penjualan ${scope.label}`,
    buildFormula: (range) => `=SUM(${range})`,
    buildQuestion: ({ product, row, scope }) => `Di cell J${row}, jumlahkan penjualan ${product} untuk periode ${scope.label}.`,
    buildLogic: ({ range, scope }) => `Bagian yang dihitung adalah angka penjualan pada periode ${scope.label}, yaitu range ${range}. Semua angka di range itu perlu digabung menjadi satu angka total.`,
    hints: (range, row) => [`Range angkanya ada di ${range}.`, 'Semua angka di range itu perlu digabung menjadi satu angka total.', 'Jangan ketik angka manual satu per satu, ambil langsung dari tabel.', `Tulis hasilnya di J${row}.`],
    parts: (range) => ['SUM menjumlahkan semua angka dalam satu range.', `${range} adalah range angka yang dihitung.`, 'Hasilnya adalah total dari semua angka di range itu.'],
    mistakes: ['Memilih kolom Produk atau Kategori, padahal itu teks.', 'Memilih range periode yang tidak sesuai dengan yang diminta soal.', 'Mengetik angka manual, bukan memilih range.']
  },
  average: {
    name: 'AVERAGE',
    label: (scope) => `Rata-rata Penjualan ${scope.label}`,
    buildFormula: (range) => `=AVERAGE(${range})`,
    buildQuestion: ({ product, row, scope }) => `Di cell J${row}, cari rata-rata penjualan ${product} untuk periode ${scope.label}.`,
    buildLogic: ({ range, scope }) => `Bagian yang dihitung adalah angka penjualan pada periode ${scope.label}, yaitu range ${range}. Yang dicari adalah nilai tengah dari kumpulan angka itu, bukan totalnya.`,
    hints: (range, row) => [`Range angkanya ada di ${range}.`, 'Yang dicari adalah nilai tengah dari kumpulan angka itu, bukan totalnya.', 'Excel bisa langsung menghitung nilai tengah tanpa kamu membagi manual.', `Tulis hasilnya di J${row}.`],
    parts: (range) => ['AVERAGE mencari nilai tengah dari sekumpulan angka.', `${range} adalah kumpulan angka yang dihitung.`, 'Hasilnya adalah total angka dibagi jumlah datanya.'],
    mistakes: ['Menjumlahkan angkanya saja tanpa mencari nilai tengah.', 'Memilih range periode yang tidak sesuai dengan yang diminta soal.', 'Memasukkan kolom teks ke dalam range.']
  },
  min: {
    name: 'MIN',
    label: (scope) => `Penjualan Terendah ${scope.label}`,
    buildFormula: (range) => `=MIN(${range})`,
    buildQuestion: ({ product, row, scope }) => `Di cell J${row}, cari angka penjualan paling rendah dari ${product} selama periode ${scope.label}.`,
    buildLogic: ({ range, scope }) => `Bandingkan semua angka penjualan pada periode ${scope.label}, yaitu range ${range}, lalu ambil angka yang paling kecil di antara semuanya.`,
    hints: (range, row) => [`Range angkanya ada di ${range}.`, 'Bandingkan semua angka di range itu, lalu ambil yang paling kecil.', 'Ini bukan soal menjumlahkan angka.', `Tulis hasilnya di J${row}.`],
    parts: (range) => ['MIN mengambil angka terkecil dari sekumpulan angka.', `${range} adalah range yang dibandingkan.`, 'Hasilnya adalah angka paling rendah di range itu.'],
    mistakes: ['Menjumlahkan angka, padahal yang diminta angka terendah.', 'Mengambil angka tertinggi, padahal yang diminta terendah.', 'Memilih range periode yang tidak sesuai dengan yang diminta soal.']
  },
  max: {
    name: 'MAX',
    label: (scope) => `Penjualan Tertinggi ${scope.label}`,
    buildFormula: (range) => `=MAX(${range})`,
    buildQuestion: ({ product, row, scope }) => `Di cell J${row}, cari angka penjualan paling tinggi dari ${product} selama periode ${scope.label}.`,
    buildLogic: ({ range, scope }) => `Bandingkan semua angka penjualan pada periode ${scope.label}, yaitu range ${range}, lalu ambil angka yang paling besar di antara semuanya.`,
    hints: (range, row) => [`Range angkanya ada di ${range}.`, 'Bandingkan semua angka di range itu, lalu ambil yang paling besar.', 'Ini bukan soal menjumlahkan angka.', `Tulis hasilnya di J${row}.`],
    parts: (range) => ['MAX mengambil angka terbesar dari sekumpulan angka.', `${range} adalah range yang dibandingkan.`, 'Hasilnya adalah angka paling tinggi di range itu.'],
    mistakes: ['Mengambil angka terendah, padahal yang diminta tertinggi.', 'Menjumlahkan semua angka di periode itu.', 'Memilih range periode yang tidak sesuai dengan yang diminta soal.']
  },
  large: {
    name: 'LARGE',
    label: ({ order }) => `Penjualan Terbesar ke-${order}`,
    buildFormula: (range, order) => `=LARGE(${range},${order})`,
    buildQuestion: ({ product, row, order }) => `Di cell J${row}, cari angka penjualan terbesar urutan ke-${order} dari ${product} selama Januari sampai Juni.`,
    buildLogic: ({ order }) => `Kalau angka penjualan diurutkan dari yang paling besar, yang diminta adalah angka pada urutan ke-${order}, bukan cuma yang paling besar.`,
    hints: (range, row, order) => [`Range angkanya ada di ${range}.`, `Urutan yang diminta adalah ke-${order} dari yang paling besar.`, 'Rumus ini butuh dua bagian: range angka, dan nomor urutan yang dicari.', `Tulis hasilnya di J${row}.`],
    parts: (range, order) => ['LARGE mengambil angka berdasarkan urutan dari yang terbesar.', `${range} adalah range angka.`, `${order} berarti ambil angka terbesar urutan ke-${order}.`],
    mistakes: ['Lupa mengisi nomor urutan yang diminta.', 'Mengira hasilnya selalu sama dengan angka paling besar, padahal urutannya bukan ke-1.', 'Memilih range yang tidak lengkap.']
  },
  small: {
    name: 'SMALL',
    label: ({ order }) => `Penjualan Terkecil ke-${order}`,
    buildFormula: (range, order) => `=SMALL(${range},${order})`,
    buildQuestion: ({ product, row, order }) => `Di cell J${row}, cari angka penjualan terkecil urutan ke-${order} dari ${product} selama Januari sampai Juni.`,
    buildLogic: ({ order }) => `Kalau angka penjualan diurutkan dari yang paling kecil, yang diminta adalah angka pada urutan ke-${order}, bukan cuma yang paling kecil.`,
    hints: (range, row, order) => [`Range angkanya ada di ${range}.`, `Urutan yang diminta adalah ke-${order} dari yang paling kecil.`, 'Rumus ini butuh dua bagian: range angka, dan nomor urutan yang dicari.', `Tulis hasilnya di J${row}.`],
    parts: (range, order) => ['SMALL mengambil angka berdasarkan urutan dari yang terkecil.', `${range} adalah range angka.`, `${order} berarti ambil angka terkecil urutan ke-${order}.`],
    mistakes: ['Lupa mengisi nomor urutan yang diminta.', 'Mengira hasilnya selalu sama dengan angka paling kecil, padahal urutannya bukan ke-1.', 'Memilih range yang tidak lengkap.']
  },
  count: {
    name: 'COUNT',
    label: (scope) => `Jumlah Bulan Berisi Angka (${scope.label})`,
    buildFormula: (range) => `=COUNT(${range})`,
    buildQuestion: ({ product, row, scope }) => `Di cell J${row}, hitung berapa bulan yang punya angka penjualan untuk ${product} selama periode ${scope.label}.`,
    buildLogic: ({ range, scope }) => `Cek range ${range} yang mewakili periode ${scope.label}, lalu hitung berapa cell di dalamnya yang benar-benar berisi angka.`,
    hints: (range, row) => [`Range angkanya ada di ${range}.`, 'Yang dihitung adalah berapa cell yang isinya angka, bukan menjumlahkan nilainya.', 'Cell kosong atau berisi teks tidak ikut dihitung.', `Tulis hasilnya di J${row}.`],
    parts: (range) => ['COUNT menghitung berapa cell yang berisi angka.', `${range} adalah range yang dicek.`, 'Hasilnya adalah jumlah cell angka, bukan total nilainya.'],
    mistakes: ['Menjumlahkan nilainya, padahal yang ditanya jumlah cell.', 'Memilih kolom teks.', 'Memilih range periode yang tidak sesuai dengan yang diminta soal.']
  },
  counta: {
    name: 'COUNTA',
    label: 'Jumlah Kolom Terisi',
    range: (row) => `A${row}:I${row}`,
    buildFormula: (range) => `=COUNTA(${range})`,
    buildQuestion: ({ product, row }) => `Di cell J${row}, hitung berapa kolom yang sudah terisi datanya untuk baris ${product}, dari kolom Produk sampai Catatan.`,
    buildLogic: ({ range }) => `Cek ${range}, lalu hitung semua cell yang ada isinya, baik itu berupa teks maupun angka.`,
    hints: (range, row) => [`Range datanya ada di ${range}.`, 'Yang dihitung adalah semua cell yang ada isinya, baik angka maupun teks.', 'Cell yang masih kosong tidak ikut dihitung.', `Tulis hasilnya di J${row}.`],
    parts: (range) => ['COUNTA menghitung cell yang tidak kosong.', `${range} adalah range yang dicek.`, 'Hasilnya adalah jumlah cell yang sudah ada isinya.'],
    mistakes: ['Hanya menghitung cell berisi angka, padahal teks juga harus dihitung.', 'Memilih range terlalu sempit.', 'Mengira cell kosong ikut dihitung.']
  },
  countblank: {
    name: 'COUNTBLANK',
    label: 'Jumlah Kolom Kosong',
    range: (row) => `A${row}:I${row}`,
    buildFormula: (range) => `=COUNTBLANK(${range})`,
    buildQuestion: ({ product, row }) => `Di cell J${row}, hitung berapa kolom yang masih kosong untuk baris ${product}, dari kolom Produk sampai Catatan.`,
    buildLogic: ({ range }) => `Cek ${range}, lalu hitung bagian yang belum diisi apa pun.`,
    hints: (range, row) => [`Range datanya ada di ${range}.`, 'Yang dihitung adalah cell yang belum diisi sama sekali.', 'Cell yang berisi angka atau teks tidak termasuk.', `Tulis hasilnya di J${row}.`],
    parts: (range) => ['COUNTBLANK menghitung cell yang masih kosong.', `${range} adalah range yang dicek.`, 'Hasilnya adalah jumlah cell yang belum diisi.'],
    mistakes: ['Menghitung cell yang sudah terisi, padahal yang ditanya cell kosong.', 'Memilih hanya kolom Catatan, padahal soal meminta Produk sampai Catatan.', 'Mengira angka 0 dihitung sebagai kosong.']
  }
};

function idSeparator(formula = '') {
  return formula.replace(/,/g, ';');
}

function buildQuestionSheet({ title, question, activeCell, criteriaValue, ranges, logic }) {
  return {
    title: 'Sheet 2 - Soal',
    description: 'Sheet ini berisi soal latihan. Sheet 1 tetap dipakai sebagai data utama.',
    columns: ['Bagian', 'Isi'],
    rows: [
      ['Judul Latihan', title],
      ['Soal', question],
      ['Cell Jawaban', activeCell],
      ['Value / Kriteria', criteriaValue || 'Tidak ada value khusus.'],
      ['Range yang Dipakai', ranges?.length ? ranges.join(', ') : 'Ikuti soal dan data di Sheet 1.'],
      ['Cara Baca', logic]
    ]
  };
}

function buildExercise(formulaId, plan, rowData, rowIndex) {
  const row = rowIndex + 2;
  const product = rowData[0];
  const isOrderBased = ['LARGE', 'SMALL'].includes(plan.name);
  const scope = periodScopes[rowIndex];
  const order = largeSmallOrders[rowIndex];
  const range = plan.range ? plan.range(row) : scope.build(row);
  const expectedFormula = plan.buildFormula(range, order);
  const label = typeof plan.label === 'function' ? plan.label(isOrderBased ? { order } : scope) : plan.label;
  const context = { product, row, order, range, scope };
  const question = plan.buildQuestion(context);
  const logicPrompt = plan.buildLogic(context);
  const criteriaValue = isOrderBased ? String(order) : '';
  const title = `Latihan ${rowIndex + 1}: ${label} - ${product}`;

  return {
    id: `${formulaId}__level_${rowIndex + 1}`,
    baseFormulaId: formulaId,
    formulaName: plan.name,
    title,
    levelIndex: rowIndex,
    levelLabel: `${label} - ${product}`,
    tableKey: 'batchBasicSales',
    table: { ...batchBasicSalesTable, questionSheet: buildQuestionSheet({ title, question, activeCell: `J${row}`, criteriaValue, ranges: [range], logic: logicPrompt }) },
    activeCell: `J${row}`,
    question,
    logicPrompt,
    expectedFormula,
    acceptedFormulas: [idSeparator(expectedFormula)],
    requiredRefs: [range],
    requiredTexts: [],
    criteriaValue,
    argumentCount: isOrderBased ? { min: 2, max: 2 } : { min: 1, max: 1 },
    highlightRanges: [range],
    allowedFunctions: [plan.name],
    hints: plan.hints(range, row, order),
    successExplanation: `Tepat. Rumus ini sudah mengambil data yang benar dari ${range}.`,
    formulaParts: plan.parts(range, order),
    commonMistakes: plan.mistakes,
    nextUseCase: 'Pola ini bisa dipakai lagi untuk laporan penjualan, stok, nilai, atau angka kerja lainnya.',
    audit: {
      batch: 'batch-01-basic-calculation',
      tableKey: 'batchBasicSales',
      expectedFormula,
      refs: [range],
      note: 'Tiap level memakai periode atau urutan berbeda supaya jawabannya bervariasi, bukan cuma ganti nama produk.'
    }
  };
}

export const batch01BasicCalculationExercises = Object.fromEntries(
  Object.entries(formulaPlans).map(([formulaId, plan]) => [
    formulaId,
    batchBasicSalesTable.rows.map((rowData, rowIndex) => buildExercise(formulaId, plan, rowData, rowIndex))
  ])
);

export const batch01BasicCalculationLevels = Object.fromEntries(
  Object.entries(batch01BasicCalculationExercises).map(([formulaId, levels]) => [
    formulaId,
    levels.map(({ id, title, levelLabel, question, expectedFormula }) => ({ id, title, levelLabel, question, expectedFormula }))
  ])
);
