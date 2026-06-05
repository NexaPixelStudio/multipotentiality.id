// Batch 01: Basic Calculation
// Fokus: rumus hitung dasar yang bisa berdiri sendiri dan mudah dipahami pemula.

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

const formulaPlans = {
  sum: {
    name: 'SUM',
    label: 'Total Penjualan 6 Bulan',
    buildFormula: (range) => `=SUM(${range})`,
    buildQuestion: ({ product, row }) => `Di cell J${row}, hitung total penjualan ${product} dari Januari sampai Juni.`,
    buildLogic: ({ product, row }) => `SUM dipakai karena soal meminta total. Cara bacanya: jumlahkan semua angka penjualan ${product} dari C${row} sampai H${row}.`,
    hints: (range, row) => [`Pilih range angka bulanannya: ${range}.`, 'Karena yang diminta total, gunakan SUM.', 'Jangan ketik angka satu per satu. Ambil dari range tabel.', `Tulis hasilnya di J${row}.`],
    parts: (range) => ['SUM adalah rumus untuk menjumlahkan angka.', `${range} adalah range angka yang dihitung.`, 'Hasilnya adalah total dari semua angka di range.'],
    mistakes: ['Memilih kolom Produk atau Kategori, padahal itu teks.', 'Memilih hanya satu bulan, padahal soal meminta Januari sampai Juni.', 'Mengetik angka manual, bukan memilih range.']
  },
  average: {
    name: 'AVERAGE',
    label: 'Rata-rata Penjualan 6 Bulan',
    buildFormula: (range) => `=AVERAGE(${range})`,
    buildQuestion: ({ product, row }) => `Di cell J${row}, hitung rata-rata penjualan ${product} dari Januari sampai Juni.`,
    buildLogic: ({ product, row }) => `AVERAGE dipakai karena soal meminta rata-rata. Cara bacanya: ambil semua angka ${product} dari C${row} sampai H${row}, lalu cari rata-ratanya.`,
    hints: (range, row) => [`Pilih range angka bulanannya: ${range}.`, 'Karena yang diminta rata-rata, gunakan AVERAGE.', 'Jangan pakai SUM, karena SUM menghasilkan total.', `Tulis hasilnya di J${row}.`],
    parts: (range) => ['AVERAGE adalah rumus untuk mencari rata-rata.', `${range} adalah kumpulan angka yang dirata-ratakan.`, 'Hasilnya adalah total angka dibagi jumlah data.'],
    mistakes: ['Memakai SUM, padahal soal meminta rata-rata.', 'Memilih range yang tidak lengkap.', 'Memasukkan kolom teks ke dalam range.']
  },
  min: {
    name: 'MIN',
    label: 'Penjualan Terendah',
    buildFormula: (range) => `=MIN(${range})`,
    buildQuestion: ({ product, row }) => `Di cell J${row}, cari penjualan terendah ${product} dari Januari sampai Juni.`,
    buildLogic: ({ row }) => `MIN dipakai karena soal meminta angka paling kecil. Cara bacanya: cek C${row} sampai H${row}, lalu ambil penjualan yang paling rendah.`,
    hints: (range, row) => [`Pilih range angka bulanannya: ${range}.`, 'Karena yang dicari angka paling kecil, gunakan MIN.', 'MIN tidak menjumlahkan angka.', `Tulis hasilnya di J${row}.`],
    parts: (range) => ['MIN mencari angka terkecil.', `${range} adalah range yang dicek.`, 'Hasilnya adalah angka paling rendah di range.'],
    mistakes: ['Memakai SUM karena mengira semua rumus angka menjumlahkan.', 'Memakai MAX, padahal soal meminta terendah.', 'Memilih range yang berisi teks.']
  },
  max: {
    name: 'MAX',
    label: 'Penjualan Tertinggi',
    buildFormula: (range) => `=MAX(${range})`,
    buildQuestion: ({ product, row }) => `Di cell J${row}, cari penjualan tertinggi ${product} dari Januari sampai Juni.`,
    buildLogic: ({ row }) => `MAX dipakai karena soal meminta angka paling besar. Cara bacanya: cek C${row} sampai H${row}, lalu ambil penjualan yang paling tinggi.`,
    hints: (range, row) => [`Pilih range angka bulanannya: ${range}.`, 'Karena yang dicari angka paling besar, gunakan MAX.', 'MAX tidak menjumlahkan angka.', `Tulis hasilnya di J${row}.`],
    parts: (range) => ['MAX mencari angka terbesar.', `${range} adalah range yang dicek.`, 'Hasilnya adalah angka paling tinggi di range.'],
    mistakes: ['Memakai MIN, padahal soal meminta tertinggi.', 'Memilih range yang tidak lengkap.', 'Menjumlahkan semua bulan dengan SUM.']
  },
  large: {
    name: 'LARGE',
    label: ({ order }) => `Penjualan Terbesar ke-${order}`,
    buildFormula: (range, order) => `=LARGE(${range},${order})`,
    buildQuestion: ({ product, row, order }) => `Di cell J${row}, cari penjualan terbesar ke-${order} untuk ${product} dari Januari sampai Juni.`,
    buildLogic: ({ row, order }) => `LARGE dipakai karena soal meminta urutan terbesar. Cara bacanya: dari angka C${row} sampai H${row}, ambil angka terbesar urutan ke-${order}.`,
    hints: (range, row, order) => [`Pilih range angka bulanannya: ${range}.`, `Masukkan urutan terbesar yang dicari: ${order}.`, 'LARGE butuh dua bagian: range angka dan urutan terbesar.', `Tulis hasilnya di J${row}.`],
    parts: (range, order) => ['LARGE mencari angka terbesar berdasarkan urutan.', `${range} adalah range angka.`, `${order} artinya ambil angka terbesar urutan ke-${order}.`],
    mistakes: ['Lupa mengisi urutan terbesar.', 'Mengira LARGE sama persis dengan MAX untuk semua kasus.', 'Memilih range yang tidak lengkap.']
  },
  small: {
    name: 'SMALL',
    label: ({ order }) => `Penjualan Terkecil ke-${order}`,
    buildFormula: (range, order) => `=SMALL(${range},${order})`,
    buildQuestion: ({ product, row, order }) => `Di cell J${row}, cari penjualan terkecil ke-${order} untuk ${product} dari Januari sampai Juni.`,
    buildLogic: ({ row, order }) => `SMALL dipakai karena soal meminta urutan terkecil. Cara bacanya: dari angka C${row} sampai H${row}, ambil angka terkecil urutan ke-${order}.`,
    hints: (range, row, order) => [`Pilih range angka bulanannya: ${range}.`, `Masukkan urutan terkecil yang dicari: ${order}.`, 'SMALL butuh dua bagian: range angka dan urutan terkecil.', `Tulis hasilnya di J${row}.`],
    parts: (range, order) => ['SMALL mencari angka terkecil berdasarkan urutan.', `${range} adalah range angka.`, `${order} artinya ambil angka terkecil urutan ke-${order}.`],
    mistakes: ['Lupa mengisi urutan terkecil.', 'Mengira SMALL sama persis dengan MIN untuk semua kasus.', 'Memilih range yang tidak lengkap.']
  },
  count: {
    name: 'COUNT',
    label: 'Jumlah Bulan Berisi Angka',
    buildFormula: (range) => `=COUNT(${range})`,
    buildQuestion: ({ product, row }) => `Di cell J${row}, hitung berapa bulan ${product} yang memiliki angka penjualan.`,
    buildLogic: ({ row }) => `COUNT dipakai untuk menghitung cell berisi angka. Cara bacanya: cek C${row} sampai H${row}, lalu hitung berapa cell yang berisi angka.`,
    hints: (range, row) => [`Pilih range angka bulanannya: ${range}.`, 'COUNT hanya menghitung cell yang berisi angka.', 'Teks dan cell kosong tidak ikut dihitung.', `Tulis hasilnya di J${row}.`],
    parts: (range) => ['COUNT menghitung cell berisi angka.', `${range} adalah range yang dicek.`, 'Hasilnya adalah jumlah cell angka, bukan total nilainya.'],
    mistakes: ['Memakai SUM, padahal yang ditanya jumlah cell.', 'Memilih kolom teks.', 'Mengira COUNT menjumlahkan angka.']
  },
  counta: {
    name: 'COUNTA',
    label: 'Jumlah Cell Terisi',
    range: (row) => `A${row}:I${row}`,
    buildFormula: (range) => `=COUNTA(${range})`,
    buildQuestion: ({ product, row }) => `Di cell J${row}, hitung berapa cell yang sudah terisi pada baris ${product} dari kolom A sampai I.`,
    buildLogic: ({ row }) => `COUNTA dipakai untuk menghitung cell yang terisi. Cara bacanya: cek A${row} sampai I${row}, lalu hitung semua cell yang ada isinya, baik teks maupun angka.`,
    hints: (range, row) => [`Pilih range data barisnya: ${range}.`, 'COUNTA menghitung angka dan teks.', 'Cell kosong tidak dihitung.', `Tulis hasilnya di J${row}.`],
    parts: (range) => ['COUNTA menghitung cell yang tidak kosong.', `${range} adalah range yang dicek.`, 'Hasilnya adalah jumlah cell yang sudah ada isinya.'],
    mistakes: ['Memakai COUNT, padahal COUNT hanya menghitung angka.', 'Memilih range terlalu sempit.', 'Mengira cell kosong ikut dihitung.']
  },
  countblank: {
    name: 'COUNTBLANK',
    label: 'Jumlah Cell Kosong',
    range: (row) => `A${row}:I${row}`,
    buildFormula: (range) => `=COUNTBLANK(${range})`,
    buildQuestion: ({ product, row }) => `Di cell J${row}, hitung berapa cell yang masih kosong pada baris ${product} dari kolom A sampai I.`,
    buildLogic: ({ row }) => `COUNTBLANK dipakai untuk mencari cell kosong. Cara bacanya: cek A${row} sampai I${row}, lalu hitung bagian yang belum terisi.`,
    hints: (range, row) => [`Pilih range data barisnya: ${range}.`, 'COUNTBLANK hanya menghitung cell kosong.', 'Cell yang berisi angka atau teks tidak dihitung.', `Tulis hasilnya di J${row}.`],
    parts: (range) => ['COUNTBLANK menghitung cell kosong.', `${range} adalah range yang dicek.`, 'Hasilnya adalah jumlah cell yang belum diisi.'],
    mistakes: ['Memakai COUNTA, padahal yang ditanya cell kosong.', 'Memilih hanya kolom Catatan padahal soal meminta A sampai I.', 'Mengira angka 0 dihitung sebagai kosong.']
  }
};

const orderByRow = [1, 2, 3, 1, 2, 3];

function idSeparator(formula = '') {
  return formula.replace(/,/g, ';');
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

function buildExercise(formulaId, plan, rowData, rowIndex) {
  const row = rowIndex + 2;
  const product = rowData[0];
  const order = orderByRow[rowIndex];
  const range = plan.range ? plan.range(row) : `C${row}:H${row}`;
  const expectedFormula = plan.buildFormula(range, order);
  const label = typeof plan.label === 'function' ? plan.label({ order }) : plan.label;
  const context = { product, row, order, range };
  const question = plan.buildQuestion(context);
  const logicPrompt = plan.buildLogic(context);
  const criteriaValue = ['LARGE', 'SMALL'].includes(plan.name) ? String(order) : '';
  const title = `Latihan ${rowIndex + 1}: ${label} - ${product}`;

  return {
    id: `${formulaId}__level_${rowIndex + 1}`,
    baseFormulaId: formulaId,
    formulaName: plan.name,
    title,
    levelIndex: rowIndex,
    levelLabel: `${label} - ${product}`,
    tableKey: 'batchBasicSales',
    table: { ...batchBasicSalesTable, questionSheet: buildQuestionSheet({ title, question, activeCell: `J${row}`, formulaName: plan.name, criteriaValue, ranges: [range], logic: logicPrompt }) },
    activeCell: `J${row}`,
    question,
    logicPrompt,
    expectedFormula,
    acceptedFormulas: [idSeparator(expectedFormula)],
    requiredRefs: [range],
    requiredTexts: [],
    criteriaValue,
    argumentCount: ['LARGE', 'SMALL'].includes(plan.name) ? { min: 2, max: 2 } : { min: 1, max: 1 },
    highlightRanges: [range],
    allowedFunctions: [plan.name],
    hints: plan.hints(range, row, order),
    successExplanation: `Tepat. ${plan.name} sudah mengambil data yang benar dari ${range}.`,
    formulaParts: plan.parts(range, order),
    commonMistakes: plan.mistakes,
    nextUseCase: 'Pola ini bisa dipakai lagi untuk laporan penjualan, stok, nilai, atau angka kerja lainnya.',
    audit: {
      batch: 'batch-01-basic-calculation',
      tableKey: 'batchBasicSales',
      expectedFormula,
      refs: [range],
      note: 'Dibuat dari awal agar soal, tabel, clue, dan jawaban saling nyambung.'
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
