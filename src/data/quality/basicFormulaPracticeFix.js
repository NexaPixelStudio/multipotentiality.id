// Manual repair layer for beginner formulas.
// Tujuan: setiap rumus dasar punya table, soal, active cell, hint, dan hasil yang saling nyambung.

const calculationTable = {
  title: 'Data Penjualan Bulanan',
  description: 'Pakai kolom angka yang diminta soal. Kolom Hasil adalah tempat jawaban rumus.',
  columns: ['Bulan', 'Penjualan', 'Qty Order', 'Biaya Operasional', 'Rating', 'Catatan', 'Hasil'],
  rows: [
    ['Januari', 12500000, 120, 4200000, 4.2, 'Ok', ''],
    ['Februari', 9800000, 96, 3900000, 4.0, '', ''],
    ['Maret', 14300000, 140, 4600000, 4.5, 'Naik', ''],
    ['April', 11100000, 108, 4100000, 4.1, 'Ok', ''],
    ['Mei', 15700000, 152, 5000000, 4.7, '', ''],
    ['Juni', 13600000, 131, 4700000, 4.3, 'Stabil', ''],
    ['Juli', 16200000, 160, 5200000, 4.8, 'Naik', ''],
    ['Agustus', 11900000, 116, 4300000, 4.0, '', ''],
    ['September', 17400000, 168, 5400000, 4.9, 'Top', ''],
    ['Oktober', 12800000, 123, 4400000, 4.2, 'Ok', ''],
    ['November', 10900000, 102, 4000000, 3.9, '', ''],
    ['Desember', 18800000, 175, 5800000, 5.0, 'Top', '']
  ]
};

const conditionalTable = {
  title: 'Data Penjualan per Order',
  description: 'Pakai kolom Kota, Kategori, Penjualan, Qty, dan Status Bayar sesuai kriteria pada soal. Kolom Hasil adalah tempat jawaban rumus.',
  columns: ['Invoice', 'Kota', 'Kategori', 'Penjualan', 'Qty', 'Status Bayar', 'Hasil'],
  rows: [
    ['INV-001', 'Jakarta', 'Digital', 1200000, 3, 'Lunas', ''],
    ['INV-002', 'Bandung', 'Fashion', 850000, 2, 'Belum', ''],
    ['INV-003', 'Jakarta', 'Digital', 1750000, 4, 'Lunas', ''],
    ['INV-004', 'Surabaya', 'Ebook', 650000, 1, 'Lunas', ''],
    ['INV-005', 'Jakarta', 'Fashion', 940000, 2, 'Belum', ''],
    ['INV-006', 'Bandung', 'Digital', 1300000, 3, 'Lunas', ''],
    ['INV-007', 'Jakarta', 'Ebook', 720000, 2, 'Lunas', ''],
    ['INV-008', 'Surabaya', 'Digital', 990000, 2, 'Belum', '']
  ]
};

const logicalTable = {
  title: 'Data Status Siswa',
  description: 'Pakai Nilai, Kehadiran, dan Pembayaran sebagai kondisi. Kolom Status adalah tempat hasil rumus.',
  columns: ['Nama', 'Nilai', 'Kehadiran', 'Pembayaran', 'Status'],
  rows: [
    ['Agus', 75, 90, 'Lunas', ''],
    ['Sinta', 88, 95, 'Lunas', ''],
    ['Budi', 65, 80, 'Belum', ''],
    ['Nadia', 92, 98, 'Lunas', ''],
    ['Raka', 70, 60, 'Belum', ''],
    ['Maya', 84, 72, 'Lunas', ''],
    ['Doni', 0, 70, 'Belum', '']
  ]
};

const informationTable = {
  title: 'Data Cek Tipe Isi Cell',
  description: 'Pakai kolom Input untuk mengecek apakah isi cell kosong, angka, teks, atau error. Kolom Hasil adalah tempat jawaban rumus.',
  columns: ['Input', 'Jenis Contoh', 'Hasil'],
  rows: [
    ['', 'Kosong', ''],
    [125, 'Angka', ''],
    ['Agus', 'Teks', ''],
    ['#N/A', 'Error #N/A', ''],
    ['#VALUE!', 'Error umum', ''],
    ['=SUM(B2:B4)', 'Teks formula', '']
  ]
};

const dateTable = {
  title: 'Data Tanggal Kegiatan',
  description: 'Pakai kolom tanggal atau komponen Tahun, Bulan, Hari sesuai rumus yang diminta. Kolom Hasil adalah tempat jawaban rumus.',
  columns: ['Kegiatan', 'Tanggal', 'Tahun', 'Bulan', 'Hari', 'Hasil'],
  rows: [
    ['Mulai Kelas', '2026-01-15', 2026, 1, 15, ''],
    ['Webinar', '2026-02-28', 2026, 2, 28, ''],
    ['Mentoring', '2026-03-10', 2026, 3, 10, ''],
    ['Evaluasi', '2026-04-22', 2026, 4, 22, ''],
    ['Closing', '2026-05-31', 2026, 5, 31, '']
  ]
};

const referenceTable = {
  title: 'Data Posisi Tabel Produk',
  description: 'Pakai alamat cell atau range yang disebut pada soal untuk mengambil nomor baris, nomor kolom, jumlah baris, atau jumlah kolom.',
  columns: ['Produk', 'Qty', 'Harga', 'Status', 'Hasil'],
  rows: [
    ['Template Excel', 12, 75000, 'Ready', ''],
    ['Ebook AI', 8, 99000, 'Ready', ''],
    ['Preset Canva', 15, 55000, 'Ready', ''],
    ['Mockup Kaos', 6, 125000, 'Review', ''],
    ['Bundle UMKM', 4, 199000, 'Ready', ''],
    ['Checklist SOP', 10, 45000, 'Ready', '']
  ]
};

const mathTable = {
  title: 'Data Angka untuk Hitung Dasar',
  description: 'Pakai kolom Angka dan Parameter sesuai soal. Kolom Hasil adalah tempat jawaban rumus.',
  columns: ['Item', 'Angka', 'Parameter', 'Hasil'],
  rows: [
    ['Selisih Stok', -15, '', ''],
    ['Nilai Desimal', 12.75, '', ''],
    ['Harga Rata-rata', 12850.678, 2, ''],
    ['Sisa Pembagian', 29, 6, ''],
    ['Akar Target', 144, '', ''],
    ['Angka Tambahan', 88.49, 1, '']
  ]
};

const textTable = {
  title: 'Data Teks Customer',
  description: 'Pakai teks, kode invoice, start, jumlah karakter, atau format yang sesuai dengan soal. Kolom Hasil adalah tempat jawaban rumus.',
  columns: ['Teks Utama', 'Kode Invoice', 'Nilai', 'Start', 'Jumlah', 'Format', 'Hasil'],
  rows: [
    ['  agus saputra  ', 'INV-2026-0001', 1250000, 5, 4, 'Rp #,##0', ''],
    ['  SINTA LESTARI ', 'ORD-JKT-2450', 850000, 5, 3, 'Rp #,##0', ''],
    ['budi santoso', 'TRX-BDG-7781', 1750000, 5, 3, 'Rp #,##0', ''],
    ['  NADIA PUTRI', 'INV-SBY-9910', 650000, 5, 4, 'Rp #,##0', ''],
    ['raka firmansyah  ', 'ORD-DPS-5532', 940000, 5, 3, 'Rp #,##0', '']
  ]
};

function resultText(formulaName, expectedFormula) {
  return `${formulaName} sudah mengambil input yang sesuai. Rumus yang dipakai: ${expectedFormula}.`;
}

function makeExercise({ formulaId, formulaName, index = 0, label, table, activeCell, question, expectedFormula, refs = [], texts = [], logic, hints = [], parts = [], mistakes = [], nextUseCase }) {
  const acceptedFormulas = [expectedFormula, expectedFormula.replace(/,/g, ';')];
  return {
    id: `${formulaId}__basic_fix_${index + 1}`,
    baseFormulaId: formulaId,
    formulaName,
    title: `Latihan ${index + 1}: ${label}`,
    levelIndex: index,
    levelLabel: label,
    tableKey: `basicFix_${formulaId}`,
    table,
    activeCell,
    question,
    expectedFormula,
    acceptedFormulas: Array.from(new Set(acceptedFormulas)),
    requiredRefs: refs,
    requiredTexts: texts,
    highlightRanges: refs,
    allowedFunctions: [formulaName],
    logicPrompt: logic,
    hints: hints.length ? hints : [
      `Tulis rumus di ${activeCell}.`,
      refs.length ? `Pakai range/cell ini: ${refs.join(', ')}.` : `Ikuti format ${formulaName} sesuai soal.`,
      texts.length ? `Value/kriteria yang dipakai: ${texts.join(', ')}.` : 'Pastikan argumen rumus diisi sesuai urutan.',
      'Awali dengan tanda = lalu cek lagi tanda kurung dan separator.'
    ],
    successExplanation: resultText(formulaName, expectedFormula),
    formulaParts: parts.length ? parts : [
      `${formulaName} adalah rumus utama.`,
      refs.length ? `Bagian data yang dipakai: ${refs.join(', ')}.` : 'Rumus ini tidak butuh range besar.',
      texts.length ? `Parameter tambahan: ${texts.join(', ')}.` : 'Hasil mengikuti input pada soal.'
    ],
    commonMistakes: mistakes.length ? mistakes : [
      'Lupa mengetik tanda = di awal rumus.',
      refs.length ? `Salah memilih range/cell. Cek lagi ${refs.join(', ')}.` : 'Argumen rumus tidak sesuai format.',
      texts.length ? `Kriteria/value belum sesuai: ${texts.join(', ')}.` : 'Urutan argumen tertukar.',
      'Kurung tutup atau separator belum benar.'
    ],
    nextUseCase: nextUseCase || `Pakai pola ${formulaName} ini untuk data lain yang konteksnya mirip.`,
    audit: {
      manualBasicFix: true,
      refs,
      texts,
      note: 'Dibuat ulang agar table, soal, clue, active cell, dan expected formula nyambung.'
    }
  };
}

function makeLevels(formulaId, formulaName, scenarios) {
  return scenarios.map((item, index) => makeExercise({ formulaId, formulaName, index, ...item }));
}

const calculationScenarios = {
  sum: makeLevels('sum', 'SUM', [
    { label: 'Total Penjualan', table: calculationTable, activeCell: 'G2', question: 'Di cell G2, berapa total Penjualan dari Januari sampai Desember?', expectedFormula: '=SUM(B2:B13)', refs: ['B2:B13'], logic: 'SUM dipakai untuk menjumlahkan semua angka dalam satu range. Di latihan ini range-nya adalah Penjualan bulanan.' },
    { label: 'Total Qty', table: calculationTable, activeCell: 'G3', question: 'Di cell G3, berapa total Qty Order dari Januari sampai Desember?', expectedFormula: '=SUM(C2:C13)', refs: ['C2:C13'], logic: 'Jumlahkan semua Qty Order pada kolom C.' },
    { label: 'Total Biaya', table: calculationTable, activeCell: 'G4', question: 'Di cell G4, berapa total Biaya Operasional dari Januari sampai Desember?', expectedFormula: '=SUM(D2:D13)', refs: ['D2:D13'], logic: 'SUM menjumlahkan seluruh biaya operasional di kolom D.' },
    { label: 'Januari sampai Juni', table: calculationTable, activeCell: 'G5', question: 'Di cell G5, berapa total Penjualan dari Januari sampai Juni?', expectedFormula: '=SUM(B2:B7)', refs: ['B2:B7'], logic: 'Pilih hanya range Januari sampai Juni, bukan satu tahun penuh.' },
    { label: 'Juli sampai Desember', table: calculationTable, activeCell: 'G6', question: 'Di cell G6, berapa total Penjualan dari Juli sampai Desember?', expectedFormula: '=SUM(B8:B13)', refs: ['B8:B13'], logic: 'Pilih hanya range Juli sampai Desember.' },
    { label: 'Gabungan Dua Range', table: calculationTable, activeCell: 'G7', question: 'Di cell G7, berapa total Penjualan Januari sampai Maret dan Oktober sampai Desember?', expectedFormula: '=SUM(B2:B4,B11:B13)', refs: ['B2:B4', 'B11:B13'], logic: 'SUM bisa memakai lebih dari satu range. Pisahkan range pertama dan range kedua dengan separator.' }
  ]),
  average: makeLevels('average', 'AVERAGE', [
    { label: 'Rata-rata Penjualan', table: calculationTable, activeCell: 'G2', question: 'Di cell G2, berapa rata-rata Penjualan dari Januari sampai Desember?', expectedFormula: '=AVERAGE(B2:B13)', refs: ['B2:B13'], logic: 'AVERAGE menghitung rata-rata angka dalam range Penjualan.' },
    { label: 'Rata-rata Qty', table: calculationTable, activeCell: 'G3', question: 'Di cell G3, berapa rata-rata Qty Order?', expectedFormula: '=AVERAGE(C2:C13)', refs: ['C2:C13'], logic: 'Pakai kolom Qty Order karena yang dicari adalah rata-rata order.' },
    { label: 'Rata-rata Biaya', table: calculationTable, activeCell: 'G4', question: 'Di cell G4, berapa rata-rata Biaya Operasional?', expectedFormula: '=AVERAGE(D2:D13)', refs: ['D2:D13'], logic: 'Pakai kolom Biaya Operasional, bukan Penjualan.' },
    { label: 'Rata-rata Rating', table: calculationTable, activeCell: 'G5', question: 'Di cell G5, berapa rata-rata Rating dari seluruh bulan?', expectedFormula: '=AVERAGE(E2:E13)', refs: ['E2:E13'], logic: 'Pakai range Rating karena yang diminta adalah rata-rata rating.' },
    { label: 'Januari sampai Juni', table: calculationTable, activeCell: 'G6', question: 'Di cell G6, berapa rata-rata Penjualan dari Januari sampai Juni?', expectedFormula: '=AVERAGE(B2:B7)', refs: ['B2:B7'], logic: 'Range hanya dari Januari sampai Juni.' },
    { label: 'Juli sampai Desember', table: calculationTable, activeCell: 'G7', question: 'Di cell G7, berapa rata-rata Penjualan dari Juli sampai Desember?', expectedFormula: '=AVERAGE(B8:B13)', refs: ['B8:B13'], logic: 'Range hanya dari Juli sampai Desember.' }
  ]),
  min: makeLevels('min', 'MIN', [
    { label: 'Penjualan Terkecil', table: calculationTable, activeCell: 'G2', question: 'Di cell G2, berapa Penjualan paling kecil dari seluruh bulan?', expectedFormula: '=MIN(B2:B13)', refs: ['B2:B13'], logic: 'MIN mencari angka terkecil dari range Penjualan.' },
    { label: 'Qty Terkecil', table: calculationTable, activeCell: 'G3', question: 'Di cell G3, berapa Qty Order paling kecil?', expectedFormula: '=MIN(C2:C13)', refs: ['C2:C13'], logic: 'Pakai kolom Qty Order karena yang diminta adalah qty terkecil.' },
    { label: 'Biaya Terkecil', table: calculationTable, activeCell: 'G4', question: 'Di cell G4, berapa Biaya Operasional paling kecil?', expectedFormula: '=MIN(D2:D13)', refs: ['D2:D13'], logic: 'MIN mengambil biaya terendah dari kolom D.' },
    { label: 'Rating Terkecil', table: calculationTable, activeCell: 'G5', question: 'Di cell G5, berapa Rating paling kecil?', expectedFormula: '=MIN(E2:E13)', refs: ['E2:E13'], logic: 'Pakai range Rating di kolom E.' },
    { label: 'Januari sampai Juni', table: calculationTable, activeCell: 'G6', question: 'Di cell G6, berapa Penjualan paling kecil dari Januari sampai Juni?', expectedFormula: '=MIN(B2:B7)', refs: ['B2:B7'], logic: 'Range dibatasi Januari sampai Juni.' },
    { label: 'Juli sampai Desember', table: calculationTable, activeCell: 'G7', question: 'Di cell G7, berapa Penjualan paling kecil dari Juli sampai Desember?', expectedFormula: '=MIN(B8:B13)', refs: ['B8:B13'], logic: 'Range dibatasi Juli sampai Desember.' }
  ]),
  max: makeLevels('max', 'MAX', [
    { label: 'Penjualan Terbesar', table: calculationTable, activeCell: 'G2', question: 'Di cell G2, berapa Penjualan paling besar dari seluruh bulan?', expectedFormula: '=MAX(B2:B13)', refs: ['B2:B13'], logic: 'MAX mencari angka terbesar dari range Penjualan.' },
    { label: 'Qty Terbesar', table: calculationTable, activeCell: 'G3', question: 'Di cell G3, berapa Qty Order paling besar?', expectedFormula: '=MAX(C2:C13)', refs: ['C2:C13'], logic: 'Pakai kolom Qty Order karena yang diminta adalah qty terbesar.' },
    { label: 'Biaya Terbesar', table: calculationTable, activeCell: 'G4', question: 'Di cell G4, berapa Biaya Operasional paling besar?', expectedFormula: '=MAX(D2:D13)', refs: ['D2:D13'], logic: 'MAX mengambil biaya tertinggi dari kolom D.' },
    { label: 'Rating Terbesar', table: calculationTable, activeCell: 'G5', question: 'Di cell G5, berapa Rating paling besar?', expectedFormula: '=MAX(E2:E13)', refs: ['E2:E13'], logic: 'Pakai range Rating di kolom E.' },
    { label: 'Januari sampai Juni', table: calculationTable, activeCell: 'G6', question: 'Di cell G6, berapa Penjualan paling besar dari Januari sampai Juni?', expectedFormula: '=MAX(B2:B7)', refs: ['B2:B7'], logic: 'Range dibatasi Januari sampai Juni.' },
    { label: 'Juli sampai Desember', table: calculationTable, activeCell: 'G7', question: 'Di cell G7, berapa Penjualan paling besar dari Juli sampai Desember?', expectedFormula: '=MAX(B8:B13)', refs: ['B8:B13'], logic: 'Range dibatasi Juli sampai Desember.' }
  ]),
  large: makeLevels('large', 'LARGE', [
    { label: 'Terbesar ke-2', table: calculationTable, activeCell: 'G2', question: 'Di cell G2, berapa Penjualan terbesar ke-2?', expectedFormula: '=LARGE(B2:B13,2)', refs: ['B2:B13'], texts: ['2'], logic: 'LARGE mencari nilai terbesar urutan tertentu. Angka 2 berarti terbesar kedua.' },
    { label: 'Terbesar ke-3', table: calculationTable, activeCell: 'G3', question: 'Di cell G3, berapa Penjualan terbesar ke-3?', expectedFormula: '=LARGE(B2:B13,3)', refs: ['B2:B13'], texts: ['3'], logic: 'Argumen kedua menentukan urutan terbesar yang dicari.' },
    { label: 'Qty Terbesar ke-2', table: calculationTable, activeCell: 'G4', question: 'Di cell G4, berapa Qty Order terbesar ke-2?', expectedFormula: '=LARGE(C2:C13,2)', refs: ['C2:C13'], texts: ['2'], logic: 'Pakai kolom Qty Order dan urutan terbesar kedua.' },
    { label: 'Biaya Terbesar ke-2', table: calculationTable, activeCell: 'G5', question: 'Di cell G5, berapa Biaya Operasional terbesar ke-2?', expectedFormula: '=LARGE(D2:D13,2)', refs: ['D2:D13'], texts: ['2'], logic: 'Pakai kolom Biaya Operasional.' },
    { label: 'Rating Terbesar ke-3', table: calculationTable, activeCell: 'G6', question: 'Di cell G6, berapa Rating terbesar ke-3?', expectedFormula: '=LARGE(E2:E13,3)', refs: ['E2:E13'], texts: ['3'], logic: 'Pakai range Rating dan cari urutan ketiga.' },
    { label: 'Januari sampai Juni', table: calculationTable, activeCell: 'G7', question: 'Di cell G7, berapa Penjualan terbesar ke-2 dari Januari sampai Juni?', expectedFormula: '=LARGE(B2:B7,2)', refs: ['B2:B7'], texts: ['2'], logic: 'Range hanya Januari sampai Juni.' }
  ]),
  small: makeLevels('small', 'SMALL', [
    { label: 'Terkecil ke-2', table: calculationTable, activeCell: 'G2', question: 'Di cell G2, berapa Penjualan terkecil ke-2?', expectedFormula: '=SMALL(B2:B13,2)', refs: ['B2:B13'], texts: ['2'], logic: 'SMALL mencari nilai terkecil urutan tertentu. Angka 2 berarti terkecil kedua.' },
    { label: 'Terkecil ke-3', table: calculationTable, activeCell: 'G3', question: 'Di cell G3, berapa Penjualan terkecil ke-3?', expectedFormula: '=SMALL(B2:B13,3)', refs: ['B2:B13'], texts: ['3'], logic: 'Argumen kedua menentukan urutan terkecil yang dicari.' },
    { label: 'Qty Terkecil ke-2', table: calculationTable, activeCell: 'G4', question: 'Di cell G4, berapa Qty Order terkecil ke-2?', expectedFormula: '=SMALL(C2:C13,2)', refs: ['C2:C13'], texts: ['2'], logic: 'Pakai kolom Qty Order dan urutan terkecil kedua.' },
    { label: 'Biaya Terkecil ke-2', table: calculationTable, activeCell: 'G5', question: 'Di cell G5, berapa Biaya Operasional terkecil ke-2?', expectedFormula: '=SMALL(D2:D13,2)', refs: ['D2:D13'], texts: ['2'], logic: 'Pakai kolom Biaya Operasional.' },
    { label: 'Rating Terkecil ke-3', table: calculationTable, activeCell: 'G6', question: 'Di cell G6, berapa Rating terkecil ke-3?', expectedFormula: '=SMALL(E2:E13,3)', refs: ['E2:E13'], texts: ['3'], logic: 'Pakai range Rating dan cari urutan ketiga.' },
    { label: 'Juli sampai Desember', table: calculationTable, activeCell: 'G7', question: 'Di cell G7, berapa Penjualan terkecil ke-2 dari Juli sampai Desember?', expectedFormula: '=SMALL(B8:B13,2)', refs: ['B8:B13'], texts: ['2'], logic: 'Range hanya Juli sampai Desember.' }
  ]),
  count: makeLevels('count', 'COUNT', [
    { label: 'Hitung Angka Penjualan', table: calculationTable, activeCell: 'G2', question: 'Di cell G2, berapa banyak cell berisi angka pada kolom Penjualan?', expectedFormula: '=COUNT(B2:B13)', refs: ['B2:B13'], logic: 'COUNT hanya menghitung cell yang berisi angka.' },
    { label: 'Hitung Angka Qty', table: calculationTable, activeCell: 'G3', question: 'Di cell G3, berapa banyak cell berisi angka pada kolom Qty Order?', expectedFormula: '=COUNT(C2:C13)', refs: ['C2:C13'], logic: 'Pakai kolom Qty Order.' },
    { label: 'Hitung Angka Biaya', table: calculationTable, activeCell: 'G4', question: 'Di cell G4, berapa banyak cell berisi angka pada kolom Biaya Operasional?', expectedFormula: '=COUNT(D2:D13)', refs: ['D2:D13'], logic: 'Pakai kolom Biaya Operasional.' },
    { label: 'Hitung Angka Rating', table: calculationTable, activeCell: 'G5', question: 'Di cell G5, berapa banyak cell berisi angka pada kolom Rating?', expectedFormula: '=COUNT(E2:E13)', refs: ['E2:E13'], logic: 'Pakai kolom Rating.' },
    { label: 'Januari sampai Juni', table: calculationTable, activeCell: 'G6', question: 'Di cell G6, berapa banyak cell angka pada Penjualan Januari sampai Juni?', expectedFormula: '=COUNT(B2:B7)', refs: ['B2:B7'], logic: 'Range hanya Januari sampai Juni.' },
    { label: 'Juli sampai Desember', table: calculationTable, activeCell: 'G7', question: 'Di cell G7, berapa banyak cell angka pada Penjualan Juli sampai Desember?', expectedFormula: '=COUNT(B8:B13)', refs: ['B8:B13'], logic: 'Range hanya Juli sampai Desember.' }
  ]),
  counta: makeLevels('counta', 'COUNTA', [
    { label: 'Catatan Terisi', table: calculationTable, activeCell: 'G2', question: 'Di cell G2, berapa banyak cell Catatan yang terisi?', expectedFormula: '=COUNTA(F2:F13)', refs: ['F2:F13'], logic: 'COUNTA menghitung cell yang tidak kosong, termasuk teks.' },
    { label: 'Nama Bulan Terisi', table: calculationTable, activeCell: 'G3', question: 'Di cell G3, berapa banyak nama Bulan yang terisi?', expectedFormula: '=COUNTA(A2:A13)', refs: ['A2:A13'], logic: 'Pakai kolom Bulan karena semua baris berisi teks.' },
    { label: 'Gabungan Bulan dan Catatan', table: calculationTable, activeCell: 'G4', question: 'Di cell G4, berapa banyak cell terisi pada Bulan dan Catatan?', expectedFormula: '=COUNTA(A2:A13,F2:F13)', refs: ['A2:A13', 'F2:F13'], logic: 'COUNTA bisa memakai lebih dari satu range.' },
    { label: 'Catatan Januari-Juni', table: calculationTable, activeCell: 'G5', question: 'Di cell G5, berapa banyak Catatan yang terisi dari Januari sampai Juni?', expectedFormula: '=COUNTA(F2:F7)', refs: ['F2:F7'], logic: 'Range Catatan dibatasi Januari sampai Juni.' },
    { label: 'Catatan Juli-Desember', table: calculationTable, activeCell: 'G6', question: 'Di cell G6, berapa banyak Catatan yang terisi dari Juli sampai Desember?', expectedFormula: '=COUNTA(F8:F13)', refs: ['F8:F13'], logic: 'Range Catatan dibatasi Juli sampai Desember.' },
    { label: 'Header Terisi', table: calculationTable, activeCell: 'G7', question: 'Di cell G7, berapa banyak header yang terisi dari A1 sampai G1?', expectedFormula: '=COUNTA(A1:G1)', refs: ['A1:G1'], logic: 'Header juga bisa dihitung karena cell-nya berisi teks.' }
  ]),
  countblank: makeLevels('countblank', 'COUNTBLANK', [
    { label: 'Catatan Kosong', table: calculationTable, activeCell: 'G2', question: 'Di cell G2, berapa banyak cell Catatan yang kosong?', expectedFormula: '=COUNTBLANK(F2:F13)', refs: ['F2:F13'], logic: 'COUNTBLANK menghitung cell kosong dalam range.' },
    { label: 'Hasil Kosong', table: calculationTable, activeCell: 'G3', question: 'Di cell G3, berapa banyak cell kosong pada kolom Hasil?', expectedFormula: '=COUNTBLANK(G2:G13)', refs: ['G2:G13'], logic: 'Kolom Hasil masih kosong sehingga bisa dihitung.' },
    { label: 'Catatan Januari-Juni', table: calculationTable, activeCell: 'G4', question: 'Di cell G4, berapa banyak Catatan kosong dari Januari sampai Juni?', expectedFormula: '=COUNTBLANK(F2:F7)', refs: ['F2:F7'], logic: 'Range Catatan dibatasi Januari sampai Juni.' },
    { label: 'Catatan Juli-Desember', table: calculationTable, activeCell: 'G5', question: 'Di cell G5, berapa banyak Catatan kosong dari Juli sampai Desember?', expectedFormula: '=COUNTBLANK(F8:F13)', refs: ['F8:F13'], logic: 'Range Catatan dibatasi Juli sampai Desember.' },
    { label: 'Gabungan Catatan', table: calculationTable, activeCell: 'G6', question: 'Di cell G6, berapa banyak cell kosong pada Catatan Januari-Maret dan Oktober-Desember?', expectedFormula: '=COUNTBLANK(F2:F4,F11:F13)', refs: ['F2:F4', 'F11:F13'], logic: 'COUNTBLANK bisa memakai lebih dari satu range.' },
    { label: 'Cell Kosong Tunggal', table: calculationTable, activeCell: 'G7', question: 'Di cell G7, apakah F3 dihitung sebagai cell kosong?', expectedFormula: '=COUNTBLANK(F3)', refs: ['F3'], logic: 'COUNTBLANK juga bisa dipakai pada satu cell.' }
  ])
};

const conditionalScenarios = {
  sumif: makeLevels('sumif', 'SUMIF', [
    { label: 'Kategori Digital', table: conditionalTable, activeCell: 'G2', question: 'Di cell G2, berapa total Penjualan untuk kategori Digital?', expectedFormula: '=SUMIF(C2:C9,"Digital",D2:D9)', refs: ['C2:C9', 'D2:D9'], texts: ['Digital'], logic: 'SUMIF menjumlahkan Penjualan hanya untuk baris dengan Kategori Digital.' },
    { label: 'Kota Jakarta', table: conditionalTable, activeCell: 'G3', question: 'Di cell G3, berapa total Penjualan untuk kota Jakarta?', expectedFormula: '=SUMIF(B2:B9,"Jakarta",D2:D9)', refs: ['B2:B9', 'D2:D9'], texts: ['Jakarta'], logic: 'Kriteria ada di kolom Kota, angka yang dijumlahkan ada di kolom Penjualan.' },
    { label: 'Status Lunas', table: conditionalTable, activeCell: 'G4', question: 'Di cell G4, berapa total Penjualan untuk Status Bayar Lunas?', expectedFormula: '=SUMIF(F2:F9,"Lunas",D2:D9)', refs: ['F2:F9', 'D2:D9'], texts: ['Lunas'], logic: 'Kriteria Status Bayar ada di kolom F.' },
    { label: 'Kategori Fashion', table: conditionalTable, activeCell: 'G5', question: 'Di cell G5, berapa total Penjualan untuk kategori Fashion?', expectedFormula: '=SUMIF(C2:C9,"Fashion",D2:D9)', refs: ['C2:C9', 'D2:D9'], texts: ['Fashion'], logic: 'Hanya baris kategori Fashion yang dijumlahkan.' },
    { label: 'Kota Bandung', table: conditionalTable, activeCell: 'G6', question: 'Di cell G6, berapa total Penjualan untuk kota Bandung?', expectedFormula: '=SUMIF(B2:B9,"Bandung",D2:D9)', refs: ['B2:B9', 'D2:D9'], texts: ['Bandung'], logic: 'Filter Kota Bandung, lalu jumlahkan Penjualan.' },
    { label: 'Qty Digital', table: conditionalTable, activeCell: 'G7', question: 'Di cell G7, berapa total Qty untuk kategori Digital?', expectedFormula: '=SUMIF(C2:C9,"Digital",E2:E9)', refs: ['C2:C9', 'E2:E9'], texts: ['Digital'], logic: 'Kriteria tetap kategori Digital, tapi range yang dijumlahkan adalah Qty.' }
  ]),
  countif: makeLevels('countif', 'COUNTIF', [
    { label: 'Jumlah Jakarta', table: conditionalTable, activeCell: 'G2', question: 'Di cell G2, berapa jumlah order dari kota Jakarta?', expectedFormula: '=COUNTIF(B2:B9,"Jakarta")', refs: ['B2:B9'], texts: ['Jakarta'], logic: 'COUNTIF menghitung jumlah baris yang Kotanya Jakarta.' },
    { label: 'Jumlah Digital', table: conditionalTable, activeCell: 'G3', question: 'Di cell G3, berapa jumlah order kategori Digital?', expectedFormula: '=COUNTIF(C2:C9,"Digital")', refs: ['C2:C9'], texts: ['Digital'], logic: 'Pakai kolom Kategori dan kriteria Digital.' },
    { label: 'Jumlah Lunas', table: conditionalTable, activeCell: 'G4', question: 'Di cell G4, berapa jumlah order dengan Status Bayar Lunas?', expectedFormula: '=COUNTIF(F2:F9,"Lunas")', refs: ['F2:F9'], texts: ['Lunas'], logic: 'Pakai kolom Status Bayar.' },
    { label: 'Penjualan di atas 1 juta', table: conditionalTable, activeCell: 'G5', question: 'Di cell G5, berapa order dengan Penjualan lebih dari 1.000.000?', expectedFormula: '=COUNTIF(D2:D9,">1000000")', refs: ['D2:D9'], texts: ['>1000000'], logic: 'Kriteria angka perlu ditulis sebagai teks dengan operator >.' },
    { label: 'Qty Minimal 3', table: conditionalTable, activeCell: 'G6', question: 'Di cell G6, berapa order dengan Qty minimal 3?', expectedFormula: '=COUNTIF(E2:E9,">=3")', refs: ['E2:E9'], texts: ['>=3'], logic: 'Pakai operator >= untuk menghitung Qty minimal 3.' },
    { label: 'Jumlah Bandung', table: conditionalTable, activeCell: 'G7', question: 'Di cell G7, berapa jumlah order dari kota Bandung?', expectedFormula: '=COUNTIF(B2:B9,"Bandung")', refs: ['B2:B9'], texts: ['Bandung'], logic: 'Pakai kolom Kota dan kriteria Bandung.' }
  ]),
  averageif: makeLevels('averageif', 'AVERAGEIF', [
    { label: 'Rata-rata Digital', table: conditionalTable, activeCell: 'G2', question: 'Di cell G2, berapa rata-rata Penjualan untuk kategori Digital?', expectedFormula: '=AVERAGEIF(C2:C9,"Digital",D2:D9)', refs: ['C2:C9', 'D2:D9'], texts: ['Digital'], logic: 'AVERAGEIF mengambil rata-rata Penjualan hanya untuk kategori Digital.' },
    { label: 'Rata-rata Jakarta', table: conditionalTable, activeCell: 'G3', question: 'Di cell G3, berapa rata-rata Penjualan untuk kota Jakarta?', expectedFormula: '=AVERAGEIF(B2:B9,"Jakarta",D2:D9)', refs: ['B2:B9', 'D2:D9'], texts: ['Jakarta'], logic: 'Kriteria di kolom Kota, nilai rata-rata di kolom Penjualan.' },
    { label: 'Rata-rata Lunas', table: conditionalTable, activeCell: 'G4', question: 'Di cell G4, berapa rata-rata Penjualan untuk Status Bayar Lunas?', expectedFormula: '=AVERAGEIF(F2:F9,"Lunas",D2:D9)', refs: ['F2:F9', 'D2:D9'], texts: ['Lunas'], logic: 'Pakai status Lunas sebagai filter.' },
    { label: 'Rata-rata Qty Digital', table: conditionalTable, activeCell: 'G5', question: 'Di cell G5, berapa rata-rata Qty untuk kategori Digital?', expectedFormula: '=AVERAGEIF(C2:C9,"Digital",E2:E9)', refs: ['C2:C9', 'E2:E9'], texts: ['Digital'], logic: 'Kriteria Digital, nilai yang dirata-ratakan Qty.' },
    { label: 'Rata-rata Fashion', table: conditionalTable, activeCell: 'G6', question: 'Di cell G6, berapa rata-rata Penjualan kategori Fashion?', expectedFormula: '=AVERAGEIF(C2:C9,"Fashion",D2:D9)', refs: ['C2:C9', 'D2:D9'], texts: ['Fashion'], logic: 'Pakai kategori Fashion sebagai filter.' },
    { label: 'Rata-rata Bandung', table: conditionalTable, activeCell: 'G7', question: 'Di cell G7, berapa rata-rata Penjualan kota Bandung?', expectedFormula: '=AVERAGEIF(B2:B9,"Bandung",D2:D9)', refs: ['B2:B9', 'D2:D9'], texts: ['Bandung'], logic: 'Pakai kota Bandung sebagai filter.' }
  ]),
  sumifs: makeLevels('sumifs', 'SUMIFS', [
    { label: 'Digital Jakarta', table: conditionalTable, activeCell: 'G2', question: 'Di cell G2, berapa total Penjualan kategori Digital di kota Jakarta?', expectedFormula: '=SUMIFS(D2:D9,C2:C9,"Digital",B2:B9,"Jakarta")', refs: ['D2:D9', 'C2:C9', 'B2:B9'], texts: ['Digital', 'Jakarta'], logic: 'SUMIFS menjumlahkan Penjualan yang memenuhi dua kriteria: Kategori Digital dan Kota Jakarta.' },
    { label: 'Digital Lunas', table: conditionalTable, activeCell: 'G3', question: 'Di cell G3, berapa total Penjualan kategori Digital yang Status Bayarnya Lunas?', expectedFormula: '=SUMIFS(D2:D9,C2:C9,"Digital",F2:F9,"Lunas")', refs: ['D2:D9', 'C2:C9', 'F2:F9'], texts: ['Digital', 'Lunas'], logic: 'Kriteria pertama Digital, kriteria kedua Lunas.' },
    { label: 'Jakarta Lunas', table: conditionalTable, activeCell: 'G4', question: 'Di cell G4, berapa total Penjualan kota Jakarta yang Status Bayarnya Lunas?', expectedFormula: '=SUMIFS(D2:D9,B2:B9,"Jakarta",F2:F9,"Lunas")', refs: ['D2:D9', 'B2:B9', 'F2:F9'], texts: ['Jakarta', 'Lunas'], logic: 'Jumlahkan Penjualan hanya untuk Jakarta dan Lunas.' },
    { label: 'Digital Qty Minimal 3', table: conditionalTable, activeCell: 'G5', question: 'Di cell G5, berapa total Penjualan kategori Digital dengan Qty minimal 3?', expectedFormula: '=SUMIFS(D2:D9,C2:C9,"Digital",E2:E9,">=3")', refs: ['D2:D9', 'C2:C9', 'E2:E9'], texts: ['Digital', '>=3'], logic: 'SUMIFS bisa memakai kriteria teks dan kriteria angka sekaligus.' },
    { label: 'Bandung Digital', table: conditionalTable, activeCell: 'G6', question: 'Di cell G6, berapa total Penjualan kategori Digital di kota Bandung?', expectedFormula: '=SUMIFS(D2:D9,C2:C9,"Digital",B2:B9,"Bandung")', refs: ['D2:D9', 'C2:C9', 'B2:B9'], texts: ['Digital', 'Bandung'], logic: 'Filter Kategori Digital dan Kota Bandung.' },
    { label: 'Surabaya Belum', table: conditionalTable, activeCell: 'G7', question: 'Di cell G7, berapa total Penjualan kota Surabaya yang Status Bayarnya Belum?', expectedFormula: '=SUMIFS(D2:D9,B2:B9,"Surabaya",F2:F9,"Belum")', refs: ['D2:D9', 'B2:B9', 'F2:F9'], texts: ['Surabaya', 'Belum'], logic: 'Filter Kota Surabaya dan Status Belum.' }
  ]),
  countifs: makeLevels('countifs', 'COUNTIFS', [
    { label: 'Digital Jakarta', table: conditionalTable, activeCell: 'G2', question: 'Di cell G2, berapa jumlah order kategori Digital di kota Jakarta?', expectedFormula: '=COUNTIFS(C2:C9,"Digital",B2:B9,"Jakarta")', refs: ['C2:C9', 'B2:B9'], texts: ['Digital', 'Jakarta'], logic: 'COUNTIFS menghitung baris yang memenuhi semua kriteria.' },
    { label: 'Digital Lunas', table: conditionalTable, activeCell: 'G3', question: 'Di cell G3, berapa jumlah order Digital yang Lunas?', expectedFormula: '=COUNTIFS(C2:C9,"Digital",F2:F9,"Lunas")', refs: ['C2:C9', 'F2:F9'], texts: ['Digital', 'Lunas'], logic: 'Kedua kondisi harus terpenuhi.' },
    { label: 'Jakarta Lunas', table: conditionalTable, activeCell: 'G4', question: 'Di cell G4, berapa jumlah order Jakarta yang Lunas?', expectedFormula: '=COUNTIFS(B2:B9,"Jakarta",F2:F9,"Lunas")', refs: ['B2:B9', 'F2:F9'], texts: ['Jakarta', 'Lunas'], logic: 'Hitung baris dengan Kota Jakarta dan Status Lunas.' },
    { label: 'Qty Minimal 3 Digital', table: conditionalTable, activeCell: 'G5', question: 'Di cell G5, berapa jumlah order Digital dengan Qty minimal 3?', expectedFormula: '=COUNTIFS(C2:C9,"Digital",E2:E9,">=3")', refs: ['C2:C9', 'E2:E9'], texts: ['Digital', '>=3'], logic: 'COUNTIFS bisa memakai kriteria angka.' },
    { label: 'Surabaya Belum', table: conditionalTable, activeCell: 'G6', question: 'Di cell G6, berapa jumlah order Surabaya yang Belum?', expectedFormula: '=COUNTIFS(B2:B9,"Surabaya",F2:F9,"Belum")', refs: ['B2:B9', 'F2:F9'], texts: ['Surabaya', 'Belum'], logic: 'Filter dua kolom sekaligus.' },
    { label: 'Fashion Belum', table: conditionalTable, activeCell: 'G7', question: 'Di cell G7, berapa jumlah order Fashion yang Belum?', expectedFormula: '=COUNTIFS(C2:C9,"Fashion",F2:F9,"Belum")', refs: ['C2:C9', 'F2:F9'], texts: ['Fashion', 'Belum'], logic: 'Hitung kategori Fashion dengan status Belum.' }
  ]),
  averageifs: makeLevels('averageifs', 'AVERAGEIFS', [
    { label: 'Digital Jakarta', table: conditionalTable, activeCell: 'G2', question: 'Di cell G2, berapa rata-rata Penjualan kategori Digital di kota Jakarta?', expectedFormula: '=AVERAGEIFS(D2:D9,C2:C9,"Digital",B2:B9,"Jakarta")', refs: ['D2:D9', 'C2:C9', 'B2:B9'], texts: ['Digital', 'Jakarta'], logic: 'AVERAGEIFS mengambil rata-rata dari baris yang memenuhi semua kriteria.' },
    { label: 'Digital Lunas', table: conditionalTable, activeCell: 'G3', question: 'Di cell G3, berapa rata-rata Penjualan Digital yang Lunas?', expectedFormula: '=AVERAGEIFS(D2:D9,C2:C9,"Digital",F2:F9,"Lunas")', refs: ['D2:D9', 'C2:C9', 'F2:F9'], texts: ['Digital', 'Lunas'], logic: 'Kriteria Digital dan Lunas harus sama-sama benar.' },
    { label: 'Jakarta Lunas', table: conditionalTable, activeCell: 'G4', question: 'Di cell G4, berapa rata-rata Penjualan Jakarta yang Lunas?', expectedFormula: '=AVERAGEIFS(D2:D9,B2:B9,"Jakarta",F2:F9,"Lunas")', refs: ['D2:D9', 'B2:B9', 'F2:F9'], texts: ['Jakarta', 'Lunas'], logic: 'Average range ada di depan, lalu pasangan kriteria setelahnya.' },
    { label: 'Digital Qty Minimal 3', table: conditionalTable, activeCell: 'G5', question: 'Di cell G5, berapa rata-rata Penjualan Digital dengan Qty minimal 3?', expectedFormula: '=AVERAGEIFS(D2:D9,C2:C9,"Digital",E2:E9,">=3")', refs: ['D2:D9', 'C2:C9', 'E2:E9'], texts: ['Digital', '>=3'], logic: 'Pakai kriteria teks dan angka.' },
    { label: 'Bandung Digital', table: conditionalTable, activeCell: 'G6', question: 'Di cell G6, berapa rata-rata Penjualan Digital di Bandung?', expectedFormula: '=AVERAGEIFS(D2:D9,C2:C9,"Digital",B2:B9,"Bandung")', refs: ['D2:D9', 'C2:C9', 'B2:B9'], texts: ['Digital', 'Bandung'], logic: 'Filter Kategori Digital dan Kota Bandung.' },
    { label: 'Surabaya Belum', table: conditionalTable, activeCell: 'G7', question: 'Di cell G7, berapa rata-rata Penjualan Surabaya yang Belum?', expectedFormula: '=AVERAGEIFS(D2:D9,B2:B9,"Surabaya",F2:F9,"Belum")', refs: ['D2:D9', 'B2:B9', 'F2:F9'], texts: ['Surabaya', 'Belum'], logic: 'Filter Surabaya dan Belum.' }
  ]),
  maxifs: makeLevels('maxifs', 'MAXIFS', [
    { label: 'Max Digital', table: conditionalTable, activeCell: 'G2', question: 'Di cell G2, berapa Penjualan terbesar untuk kategori Digital?', expectedFormula: '=MAXIFS(D2:D9,C2:C9,"Digital")', refs: ['D2:D9', 'C2:C9'], texts: ['Digital'], logic: 'MAXIFS mencari angka terbesar setelah data difilter dengan kriteria.' },
    { label: 'Max Jakarta', table: conditionalTable, activeCell: 'G3', question: 'Di cell G3, berapa Penjualan terbesar untuk kota Jakarta?', expectedFormula: '=MAXIFS(D2:D9,B2:B9,"Jakarta")', refs: ['D2:D9', 'B2:B9'], texts: ['Jakarta'], logic: 'Cari nilai maksimum dari order Jakarta.' },
    { label: 'Max Lunas', table: conditionalTable, activeCell: 'G4', question: 'Di cell G4, berapa Penjualan terbesar untuk Status Bayar Lunas?', expectedFormula: '=MAXIFS(D2:D9,F2:F9,"Lunas")', refs: ['D2:D9', 'F2:F9'], texts: ['Lunas'], logic: 'Cari nilai maksimum dari baris Lunas.' },
    { label: 'Max Digital Jakarta', table: conditionalTable, activeCell: 'G5', question: 'Di cell G5, berapa Penjualan terbesar untuk Digital di Jakarta?', expectedFormula: '=MAXIFS(D2:D9,C2:C9,"Digital",B2:B9,"Jakarta")', refs: ['D2:D9', 'C2:C9', 'B2:B9'], texts: ['Digital', 'Jakarta'], logic: 'MAXIFS bisa memakai lebih dari satu kriteria.' },
    { label: 'Max Qty Minimal 3', table: conditionalTable, activeCell: 'G6', question: 'Di cell G6, berapa Penjualan terbesar untuk order dengan Qty minimal 3?', expectedFormula: '=MAXIFS(D2:D9,E2:E9,">=3")', refs: ['D2:D9', 'E2:E9'], texts: ['>=3'], logic: 'Kriteria bisa berupa angka dengan operator.' },
    { label: 'Max Bandung', table: conditionalTable, activeCell: 'G7', question: 'Di cell G7, berapa Penjualan terbesar untuk kota Bandung?', expectedFormula: '=MAXIFS(D2:D9,B2:B9,"Bandung")', refs: ['D2:D9', 'B2:B9'], texts: ['Bandung'], logic: 'Filter Kota Bandung, lalu ambil nilai terbesar.' }
  ]),
  minifs: makeLevels('minifs', 'MINIFS', [
    { label: 'Min Digital', table: conditionalTable, activeCell: 'G2', question: 'Di cell G2, berapa Penjualan terkecil untuk kategori Digital?', expectedFormula: '=MINIFS(D2:D9,C2:C9,"Digital")', refs: ['D2:D9', 'C2:C9'], texts: ['Digital'], logic: 'MINIFS mencari angka terkecil setelah data difilter dengan kriteria.' },
    { label: 'Min Jakarta', table: conditionalTable, activeCell: 'G3', question: 'Di cell G3, berapa Penjualan terkecil untuk kota Jakarta?', expectedFormula: '=MINIFS(D2:D9,B2:B9,"Jakarta")', refs: ['D2:D9', 'B2:B9'], texts: ['Jakarta'], logic: 'Cari nilai minimum dari order Jakarta.' },
    { label: 'Min Lunas', table: conditionalTable, activeCell: 'G4', question: 'Di cell G4, berapa Penjualan terkecil untuk Status Bayar Lunas?', expectedFormula: '=MINIFS(D2:D9,F2:F9,"Lunas")', refs: ['D2:D9', 'F2:F9'], texts: ['Lunas'], logic: 'Cari nilai minimum dari baris Lunas.' },
    { label: 'Min Digital Jakarta', table: conditionalTable, activeCell: 'G5', question: 'Di cell G5, berapa Penjualan terkecil untuk Digital di Jakarta?', expectedFormula: '=MINIFS(D2:D9,C2:C9,"Digital",B2:B9,"Jakarta")', refs: ['D2:D9', 'C2:C9', 'B2:B9'], texts: ['Digital', 'Jakarta'], logic: 'MINIFS bisa memakai lebih dari satu kriteria.' },
    { label: 'Min Qty Minimal 2', table: conditionalTable, activeCell: 'G6', question: 'Di cell G6, berapa Penjualan terkecil untuk order dengan Qty minimal 2?', expectedFormula: '=MINIFS(D2:D9,E2:E9,">=2")', refs: ['D2:D9', 'E2:E9'], texts: ['>=2'], logic: 'Kriteria angka ditulis dengan operator.' },
    { label: 'Min Bandung', table: conditionalTable, activeCell: 'G7', question: 'Di cell G7, berapa Penjualan terkecil untuk kota Bandung?', expectedFormula: '=MINIFS(D2:D9,B2:B9,"Bandung")', refs: ['D2:D9', 'B2:B9'], texts: ['Bandung'], logic: 'Filter Kota Bandung, lalu ambil nilai terkecil.' }
  ])
};

const logicalScenarios = {
  if: makeLevels('if', 'IF', [
    { label: 'Status Agus', table: logicalTable, activeCell: 'E2', question: 'Di cell E2, buat Status Agus: jika Nilai di B2 >= 75 maka Lulus, jika tidak maka Tidak Lulus.', expectedFormula: '=IF(B2>=75,"Lulus","Tidak Lulus")', refs: ['B2'], texts: ['Lulus', 'Tidak Lulus'], logic: 'IF membuat keputusan. Kondisinya B2>=75, hasil benar Lulus, hasil salah Tidak Lulus.' },
    { label: 'Status Sinta', table: logicalTable, activeCell: 'E3', question: 'Di cell E3, buat Status Sinta: jika Nilai di B3 >= 90 maka Nilai Tinggi, jika tidak maka Nilai Standar.', expectedFormula: '=IF(B3>=90,"Nilai Tinggi","Nilai Standar")', refs: ['B3'], texts: ['Nilai Tinggi', 'Nilai Standar'], logic: 'Kondisi IF harus lengkap, bukan hanya angka 90.' },
    { label: 'Status Budi', table: logicalTable, activeCell: 'E4', question: 'Di cell E4, buat Status Budi: jika Nilai di B4 >= 75 maka Lulus, jika tidak maka Tidak Lulus.', expectedFormula: '=IF(B4>=75,"Lulus","Tidak Lulus")', refs: ['B4'], texts: ['Lulus', 'Tidak Lulus'], logic: 'Pakai nilai Budi di B4.' },
    { label: 'Status Nadia', table: logicalTable, activeCell: 'E5', question: 'Di cell E5, buat Status Nadia: jika Nilai di B5 >= 90 maka Apresiasi, jika tidak maka Standar.', expectedFormula: '=IF(B5>=90,"Apresiasi","Standar")', refs: ['B5'], texts: ['Apresiasi', 'Standar'], logic: 'IF mengeluarkan teks sesuai kondisi nilai.' },
    { label: 'Remedial Raka', table: logicalTable, activeCell: 'E6', question: 'Di cell E6, buat Status Raka: jika Nilai di B6 < 75 maka Remedial, jika tidak maka Aman.', expectedFormula: '=IF(B6<75,"Remedial","Aman")', refs: ['B6'], texts: ['Remedial', 'Aman'], logic: 'Kondisi memakai tanda lebih kecil dari karena yang dicari remedial.' },
    { label: 'Status Maya', table: logicalTable, activeCell: 'E7', question: 'Di cell E7, buat Status Maya: jika Nilai di B7 >= 75 maka Lulus, jika tidak maka Tidak Lulus.', expectedFormula: '=IF(B7>=75,"Lulus","Tidak Lulus")', refs: ['B7'], texts: ['Lulus', 'Tidak Lulus'], logic: 'Pakai baris Maya, bukan baris Agus.' }
  ]),
  and: makeLevels('and', 'AND', [
    { label: 'Nilai dan Kehadiran Agus', table: logicalTable, activeCell: 'E2', question: 'Di cell E2, cek Agus: apakah Nilai >= 75 dan Kehadiran >= 80?', expectedFormula: '=AND(B2>=75,C2>=80)', refs: ['B2', 'C2'], texts: ['75', '80'], logic: 'AND bernilai TRUE hanya kalau semua kondisi benar.' },
    { label: 'Sinta Lengkap', table: logicalTable, activeCell: 'E3', question: 'Di cell E3, cek Sinta: apakah Nilai >= 75, Kehadiran >= 80, dan Pembayaran Lunas?', expectedFormula: '=AND(B3>=75,C3>=80,D3="Lunas")', refs: ['B3', 'C3', 'D3'], texts: ['75', '80', 'Lunas'], logic: 'Semua kondisi harus benar agar AND menghasilkan TRUE.' },
    { label: 'Budi Lulus Syarat', table: logicalTable, activeCell: 'E4', question: 'Di cell E4, cek Budi: apakah Nilai >= 75 dan Kehadiran >= 80?', expectedFormula: '=AND(B4>=75,C4>=80)', refs: ['B4', 'C4'], texts: ['75', '80'], logic: 'Jika salah satu kondisi gagal, AND menghasilkan FALSE.' },
    { label: 'Nadia Top', table: logicalTable, activeCell: 'E5', question: 'Di cell E5, cek Nadia: apakah Nilai >= 90 dan Pembayaran Lunas?', expectedFormula: '=AND(B5>=90,D5="Lunas")', refs: ['B5', 'D5'], texts: ['90', 'Lunas'], logic: 'AND bisa mengecek angka dan teks sekaligus.' },
    { label: 'Raka Lengkap', table: logicalTable, activeCell: 'E6', question: 'Di cell E6, cek Raka: apakah Nilai >= 75, Kehadiran >= 80, dan Pembayaran Lunas?', expectedFormula: '=AND(B6>=75,C6>=80,D6="Lunas")', refs: ['B6', 'C6', 'D6'], texts: ['75', '80', 'Lunas'], logic: 'Semua syarat harus benar. Kalau ada satu yang gagal, hasilnya FALSE.' },
    { label: 'Maya Aman', table: logicalTable, activeCell: 'E7', question: 'Di cell E7, cek Maya: apakah Nilai >= 75 dan Pembayaran Lunas?', expectedFormula: '=AND(B7>=75,D7="Lunas")', refs: ['B7', 'D7'], texts: ['75', 'Lunas'], logic: 'Pakai baris Maya dan cek dua kondisi.' }
  ]),
  or: makeLevels('or', 'OR', [
    { label: 'Agus Satu Syarat', table: logicalTable, activeCell: 'E2', question: 'Di cell E2, cek Agus: apakah Nilai >= 90 atau Pembayaran Lunas?', expectedFormula: '=OR(B2>=90,D2="Lunas")', refs: ['B2', 'D2'], texts: ['90', 'Lunas'], logic: 'OR bernilai TRUE kalau minimal satu kondisi benar.' },
    { label: 'Sinta Satu Syarat', table: logicalTable, activeCell: 'E3', question: 'Di cell E3, cek Sinta: apakah Nilai >= 90 atau Kehadiran >= 90?', expectedFormula: '=OR(B3>=90,C3>=90)', refs: ['B3', 'C3'], texts: ['90'], logic: 'Cukup salah satu kondisi benar.' },
    { label: 'Budi Follow Up', table: logicalTable, activeCell: 'E4', question: 'Di cell E4, cek Budi: apakah Nilai < 75 atau Pembayaran Belum?', expectedFormula: '=OR(B4<75,D4="Belum")', refs: ['B4', 'D4'], texts: ['75', 'Belum'], logic: 'OR cocok untuk cek apakah perlu follow up karena salah satu masalah muncul.' },
    { label: 'Nadia Sangat Baik', table: logicalTable, activeCell: 'E5', question: 'Di cell E5, cek Nadia: apakah Nilai >= 90 atau Kehadiran >= 95?', expectedFormula: '=OR(B5>=90,C5>=95)', refs: ['B5', 'C5'], texts: ['90', '95'], logic: 'Jika salah satu kondisi benar, hasilnya TRUE.' },
    { label: 'Raka Bermasalah', table: logicalTable, activeCell: 'E6', question: 'Di cell E6, cek Raka: apakah Nilai < 75 atau Kehadiran < 75?', expectedFormula: '=OR(B6<75,C6<75)', refs: ['B6', 'C6'], texts: ['75'], logic: 'OR membaca minimal satu masalah.' },
    { label: 'Maya Aman', table: logicalTable, activeCell: 'E7', question: 'Di cell E7, cek Maya: apakah Nilai >= 80 atau Pembayaran Lunas?', expectedFormula: '=OR(B7>=80,D7="Lunas")', refs: ['B7', 'D7'], texts: ['80', 'Lunas'], logic: 'Pakai baris Maya.' }
  ]),
  not: makeLevels('not', 'NOT', [
    { label: 'Agus Belum Bayar?', table: logicalTable, activeCell: 'E2', question: 'Di cell E2, cek Agus: apakah kebalikan dari Pembayaran Lunas?', expectedFormula: '=NOT(D2="Lunas")', refs: ['D2'], texts: ['Lunas'], logic: 'NOT membalik hasil logika. Kalau D2 = Lunas benar, NOT menghasilkan FALSE.' },
    { label: 'Sinta Tidak Lulus?', table: logicalTable, activeCell: 'E3', question: 'Di cell E3, cek Sinta: apakah kebalikan dari Nilai >= 75?', expectedFormula: '=NOT(B3>=75)', refs: ['B3'], texts: ['75'], logic: 'NOT membalik TRUE menjadi FALSE.' },
    { label: 'Budi Tidak Lunas?', table: logicalTable, activeCell: 'E4', question: 'Di cell E4, cek Budi: apakah kebalikan dari Pembayaran Lunas?', expectedFormula: '=NOT(D4="Lunas")', refs: ['D4'], texts: ['Lunas'], logic: 'Karena Budi belum lunas, D4=Lunas salah, lalu NOT menjadi TRUE.' },
    { label: 'Nadia Tidak Tinggi?', table: logicalTable, activeCell: 'E5', question: 'Di cell E5, cek Nadia: apakah kebalikan dari Nilai >= 90?', expectedFormula: '=NOT(B5>=90)', refs: ['B5'], texts: ['90'], logic: 'NOT membalik hasil kondisi nilai.' },
    { label: 'Raka Tidak Hadir Baik?', table: logicalTable, activeCell: 'E6', question: 'Di cell E6, cek Raka: apakah kebalikan dari Kehadiran >= 80?', expectedFormula: '=NOT(C6>=80)', refs: ['C6'], texts: ['80'], logic: 'Jika kehadiran tidak memenuhi, NOT menghasilkan TRUE.' },
    { label: 'Maya Tidak Lunas?', table: logicalTable, activeCell: 'E7', question: 'Di cell E7, cek Maya: apakah kebalikan dari Pembayaran Lunas?', expectedFormula: '=NOT(D7="Lunas")', refs: ['D7'], texts: ['Lunas'], logic: 'Pakai cell pembayaran Maya.' }
  ]),
  xor: makeLevels('xor', 'XOR', [
    { label: 'Agus Satu Kondisi', table: logicalTable, activeCell: 'E2', question: 'Di cell E2, cek Agus: apakah hanya salah satu dari Nilai >= 75 dan Kehadiran >= 80 yang benar?', expectedFormula: '=XOR(B2>=75,C2>=80)', refs: ['B2', 'C2'], texts: ['75', '80'], logic: 'XOR bernilai TRUE kalau jumlah kondisi benar ganjil. Untuk dua kondisi, artinya hanya satu yang benar.' },
    { label: 'Budi Satu Kondisi', table: logicalTable, activeCell: 'E4', question: 'Di cell E4, cek Budi: apakah hanya salah satu dari Nilai >= 75 dan Kehadiran >= 80 yang benar?', expectedFormula: '=XOR(B4>=75,C4>=80)', refs: ['B4', 'C4'], texts: ['75', '80'], logic: 'Jika satu benar dan satu salah, XOR menghasilkan TRUE.' },
    { label: 'Raka Satu Kondisi', table: logicalTable, activeCell: 'E6', question: 'Di cell E6, cek Raka: apakah hanya salah satu dari Nilai >= 75 dan Kehadiran >= 80 yang benar?', expectedFormula: '=XOR(B6>=75,C6>=80)', refs: ['B6', 'C6'], texts: ['75', '80'], logic: 'Untuk dua kondisi, XOR cocok mengecek “salah satu saja”.' },
    { label: 'Nadia Satu Kondisi', table: logicalTable, activeCell: 'E5', question: 'Di cell E5, cek Nadia: apakah hanya salah satu dari Nilai >= 90 dan Kehadiran >= 95 yang benar?', expectedFormula: '=XOR(B5>=90,C5>=95)', refs: ['B5', 'C5'], texts: ['90', '95'], logic: 'Kalau dua-duanya benar, XOR menghasilkan FALSE.' },
    { label: 'Pembayaran atau Nilai', table: logicalTable, activeCell: 'E3', question: 'Di cell E3, cek Sinta: apakah hanya salah satu dari Nilai >= 90 dan Pembayaran Lunas yang benar?', expectedFormula: '=XOR(B3>=90,D3="Lunas")', refs: ['B3', 'D3'], texts: ['90', 'Lunas'], logic: 'Pakai kombinasi kondisi angka dan teks.' },
    { label: 'Maya Satu Kondisi', table: logicalTable, activeCell: 'E7', question: 'Di cell E7, cek Maya: apakah hanya salah satu dari Nilai >= 90 dan Pembayaran Lunas yang benar?', expectedFormula: '=XOR(B7>=90,D7="Lunas")', refs: ['B7', 'D7'], texts: ['90', 'Lunas'], logic: 'Pakai baris Maya.' }
  ]),
  ifs: makeLevels('ifs', 'IFS', [
    { label: 'Grade Agus', table: logicalTable, activeCell: 'E2', question: 'Di cell E2, buat grade Agus: Nilai >= 90 menjadi A, Nilai >= 75 menjadi B, selain itu C.', expectedFormula: '=IFS(B2>=90,"A",B2>=75,"B",TRUE,"C")', refs: ['B2'], texts: ['A', 'B', 'C'], logic: 'IFS membaca kondisi dari kiri ke kanan. Kondisi pertama yang benar langsung dipakai.' },
    { label: 'Grade Sinta', table: logicalTable, activeCell: 'E3', question: 'Di cell E3, buat grade Sinta: Nilai >= 90 A, Nilai >= 75 B, selain itu C.', expectedFormula: '=IFS(B3>=90,"A",B3>=75,"B",TRUE,"C")', refs: ['B3'], texts: ['A', 'B', 'C'], logic: 'Setiap kondisi harus punya pasangan hasil.' },
    { label: 'Grade Budi', table: logicalTable, activeCell: 'E4', question: 'Di cell E4, buat grade Budi: Nilai >= 90 A, Nilai >= 75 B, selain itu C.', expectedFormula: '=IFS(B4>=90,"A",B4>=75,"B",TRUE,"C")', refs: ['B4'], texts: ['A', 'B', 'C'], logic: 'TRUE di bagian akhir dipakai sebagai default.' },
    { label: 'Kehadiran Nadia', table: logicalTable, activeCell: 'E5', question: 'Di cell E5, buat status Kehadiran Nadia: >=95 Sangat Baik, >=80 Baik, selain itu Kurang.', expectedFormula: '=IFS(C5>=95,"Sangat Baik",C5>=80,"Baik",TRUE,"Kurang")', refs: ['C5'], texts: ['Sangat Baik', 'Baik', 'Kurang'], logic: 'IFS bisa dipakai untuk beberapa level status.' },
    { label: 'Kehadiran Raka', table: logicalTable, activeCell: 'E6', question: 'Di cell E6, buat status Kehadiran Raka: >=95 Sangat Baik, >=80 Baik, selain itu Kurang.', expectedFormula: '=IFS(C6>=95,"Sangat Baik",C6>=80,"Baik",TRUE,"Kurang")', refs: ['C6'], texts: ['Sangat Baik', 'Baik', 'Kurang'], logic: 'Urutan kondisi harus dari batas paling tinggi ke bawah.' },
    { label: 'Grade Maya', table: logicalTable, activeCell: 'E7', question: 'Di cell E7, buat grade Maya: Nilai >= 90 A, Nilai >= 75 B, selain itu C.', expectedFormula: '=IFS(B7>=90,"A",B7>=75,"B",TRUE,"C")', refs: ['B7'], texts: ['A', 'B', 'C'], logic: 'Pakai baris Maya.' }
  ]),
  iferror: makeLevels('iferror', 'IFERROR', [
    { label: 'Bagi Nilai Agus', table: logicalTable, activeCell: 'E2', question: 'Di cell E2, bagi 100 dengan Nilai Agus. Jika error, tampilkan Cek Nilai.', expectedFormula: '=IFERROR(100/B2,"Cek Nilai")', refs: ['B2'], texts: ['Cek Nilai'], logic: 'IFERROR menampilkan hasil normal jika tidak error, dan teks pengganti jika error.' },
    { label: 'Bagi Nilai Doni', table: logicalTable, activeCell: 'E8', question: 'Di cell E8, bagi 100 dengan Nilai Doni. Jika error, tampilkan Cek Nilai.', expectedFormula: '=IFERROR(100/B8,"Cek Nilai")', refs: ['B8'], texts: ['Cek Nilai'], logic: 'Karena B8 bernilai 0, pembagian bisa error dan IFERROR menampilkan teks pengganti.' },
    { label: 'Cari Nama Aman', table: logicalTable, activeCell: 'E3', question: 'Di cell E3, cari posisi nama Sinta di A2:A8. Jika error, tampilkan Tidak Ada.', expectedFormula: '=IFERROR(MATCH("Sinta",A2:A8,0),"Tidak Ada")', refs: ['A2:A8'], texts: ['Sinta', 'Tidak Ada'], logic: 'IFERROR menjaga rumus MATCH agar tidak menampilkan error mentah.' },
    { label: 'Cari Nama Tidak Ada', table: logicalTable, activeCell: 'E4', question: 'Di cell E4, cari posisi nama Zara di A2:A8. Jika error, tampilkan Tidak Ada.', expectedFormula: '=IFERROR(MATCH("Zara",A2:A8,0),"Tidak Ada")', refs: ['A2:A8'], texts: ['Zara', 'Tidak Ada'], logic: 'Jika MATCH tidak menemukan data, IFERROR memberi output pengganti.' },
    { label: 'Bagi Kehadiran', table: logicalTable, activeCell: 'E5', question: 'Di cell E5, bagi Nilai Nadia dengan Kehadiran Nadia. Jika error, tampilkan Cek Data.', expectedFormula: '=IFERROR(B5/C5,"Cek Data")', refs: ['B5', 'C5'], texts: ['Cek Data'], logic: 'Rumus utama tetap dihitung normal selama tidak error.' },
    { label: 'Cari Doni', table: logicalTable, activeCell: 'E6', question: 'Di cell E6, cari posisi nama Doni di A2:A8. Jika error, tampilkan Tidak Ada.', expectedFormula: '=IFERROR(MATCH("Doni",A2:A8,0),"Tidak Ada")', refs: ['A2:A8'], texts: ['Doni', 'Tidak Ada'], logic: 'MATCH ditemukan, jadi hasilnya posisi baris dalam range.' }
  ]),
  ifna: makeLevels('ifna', 'IFNA', [
    { label: 'Cari Sinta', table: logicalTable, activeCell: 'E2', question: 'Di cell E2, cari posisi Sinta di A2:A8. Jika #N/A, tampilkan Tidak Ada.', expectedFormula: '=IFNA(MATCH("Sinta",A2:A8,0),"Tidak Ada")', refs: ['A2:A8'], texts: ['Sinta', 'Tidak Ada'], logic: 'IFNA khusus menangani error #N/A.' },
    { label: 'Cari Zara', table: logicalTable, activeCell: 'E3', question: 'Di cell E3, cari posisi Zara di A2:A8. Jika #N/A, tampilkan Tidak Ada.', expectedFormula: '=IFNA(MATCH("Zara",A2:A8,0),"Tidak Ada")', refs: ['A2:A8'], texts: ['Zara', 'Tidak Ada'], logic: 'Jika data tidak ditemukan, MATCH menghasilkan #N/A lalu IFNA mengganti hasilnya.' },
    { label: 'Cari Agus', table: logicalTable, activeCell: 'E4', question: 'Di cell E4, cari posisi Agus di A2:A8. Jika #N/A, tampilkan Tidak Ada.', expectedFormula: '=IFNA(MATCH("Agus",A2:A8,0),"Tidak Ada")', refs: ['A2:A8'], texts: ['Agus', 'Tidak Ada'], logic: 'Jika data ditemukan, hasil MATCH tetap ditampilkan.' },
    { label: 'Cari Maya', table: logicalTable, activeCell: 'E5', question: 'Di cell E5, cari posisi Maya di A2:A8. Jika #N/A, tampilkan Tidak Ada.', expectedFormula: '=IFNA(MATCH("Maya",A2:A8,0),"Tidak Ada")', refs: ['A2:A8'], texts: ['Maya', 'Tidak Ada'], logic: 'Pakai range nama A2:A8.' },
    { label: 'Cari Rudi', table: logicalTable, activeCell: 'E6', question: 'Di cell E6, cari posisi Rudi di A2:A8. Jika #N/A, tampilkan Tidak Ada.', expectedFormula: '=IFNA(MATCH("Rudi",A2:A8,0),"Tidak Ada")', refs: ['A2:A8'], texts: ['Rudi', 'Tidak Ada'], logic: 'IFNA lebih spesifik daripada IFERROR karena hanya menangani #N/A.' },
    { label: 'Cari Doni', table: logicalTable, activeCell: 'E7', question: 'Di cell E7, cari posisi Doni di A2:A8. Jika #N/A, tampilkan Tidak Ada.', expectedFormula: '=IFNA(MATCH("Doni",A2:A8,0),"Tidak Ada")', refs: ['A2:A8'], texts: ['Doni', 'Tidak Ada'], logic: 'Doni ada di daftar, jadi hasilnya posisi di range.' }
  ]),
  switch: makeLevels('switch', 'SWITCH', [
    { label: 'Status Bayar Agus', table: logicalTable, activeCell: 'E2', question: 'Di cell E2, ubah Pembayaran Agus: Lunas menjadi Aman, Belum menjadi Follow Up.', expectedFormula: '=SWITCH(D2,"Lunas","Aman","Belum","Follow Up","Cek")', refs: ['D2'], texts: ['Lunas', 'Aman', 'Belum', 'Follow Up', 'Cek'], logic: 'SWITCH mencocokkan satu nilai dengan beberapa kemungkinan hasil.' },
    { label: 'Status Bayar Budi', table: logicalTable, activeCell: 'E4', question: 'Di cell E4, ubah Pembayaran Budi: Lunas menjadi Aman, Belum menjadi Follow Up.', expectedFormula: '=SWITCH(D4,"Lunas","Aman","Belum","Follow Up","Cek")', refs: ['D4'], texts: ['Lunas', 'Aman', 'Belum', 'Follow Up', 'Cek'], logic: 'Jika nilai cocok dengan Belum, hasilnya Follow Up.' },
    { label: 'Kehadiran Agus', table: logicalTable, activeCell: 'E2', question: 'Di cell E2, ubah Kehadiran Agus: 90 menjadi Baik, 95 menjadi Sangat Baik, selain itu Cek.', expectedFormula: '=SWITCH(C2,90,"Baik",95,"Sangat Baik","Cek")', refs: ['C2'], texts: ['90', 'Baik', '95', 'Sangat Baik', 'Cek'], logic: 'SWITCH bisa mencocokkan angka juga.' },
    { label: 'Kehadiran Sinta', table: logicalTable, activeCell: 'E3', question: 'Di cell E3, ubah Kehadiran Sinta: 90 menjadi Baik, 95 menjadi Sangat Baik, selain itu Cek.', expectedFormula: '=SWITCH(C3,90,"Baik",95,"Sangat Baik","Cek")', refs: ['C3'], texts: ['90', 'Baik', '95', 'Sangat Baik', 'Cek'], logic: 'Urutan argumen SWITCH adalah nilai, pasangan value-hasil, lalu default.' },
    { label: 'Pembayaran Raka', table: logicalTable, activeCell: 'E6', question: 'Di cell E6, ubah Pembayaran Raka: Lunas menjadi Aman, Belum menjadi Follow Up.', expectedFormula: '=SWITCH(D6,"Lunas","Aman","Belum","Follow Up","Cek")', refs: ['D6'], texts: ['Lunas', 'Aman', 'Belum', 'Follow Up', 'Cek'], logic: 'Pakai cell pembayaran Raka.' },
    { label: 'Pembayaran Maya', table: logicalTable, activeCell: 'E7', question: 'Di cell E7, ubah Pembayaran Maya: Lunas menjadi Aman, Belum menjadi Follow Up.', expectedFormula: '=SWITCH(D7,"Lunas","Aman","Belum","Follow Up","Cek")', refs: ['D7'], texts: ['Lunas', 'Aman', 'Belum', 'Follow Up', 'Cek'], logic: 'Pakai cell pembayaran Maya.' }
  ])
};

export const basicFormulaPracticeLevels = {
  ...calculationScenarios,
  ...conditionalScenarios,
  ...logicalScenarios
};

export const basicFormulaPracticeExercises = Object.fromEntries(
  Object.entries(basicFormulaPracticeLevels).map(([formulaId, levels]) => [formulaId, levels[0]])
);
