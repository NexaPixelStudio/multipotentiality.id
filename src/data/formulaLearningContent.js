import { buildBeginnerLearningContent } from './formulaAuditRules.js';

export const formulaLearningContent = {
  SUM: {
    description: 'Menjumlahkan angka dalam satu range.',
    simpleLogic: 'Pilih range angka yang mau dijumlahkan. Jangan ketik angkanya satu per satu kalau datanya sudah ada di tabel.',
    useCase: 'Dipakai untuk menghitung total penjualan, total qty, total nilai, atau total angka lain.',
    analogy: 'Kayak kasir yang menjumlahkan semua belanjaan.',
    exampleFormula: '=SUM(range_angka)',
    exampleMeaning: 'Baca begini: jumlahkan semua angka yang ada di range_angka.',
    beginnerTip: 'SUM cocok kalau pertanyaannya memakai kata total, jumlahkan, atau keseluruhan.'
  },
  AVERAGE: {
    description: 'Menghitung rata-rata angka dalam satu range.',
    simpleLogic: 'Pilih kumpulan angka, lalu Excel membagi totalnya dengan jumlah angka yang ada.',
    useCase: 'Dipakai untuk mencari rata-rata penjualan, rata-rata nilai, atau performa bulanan.',
    analogy: 'Kayak mencari nilai tengah harian dari beberapa bulan.',
    exampleFormula: '=AVERAGE(range_angka)',
    exampleMeaning: 'Baca begini: cari nilai rata-rata dari semua angka di range_angka.',
    beginnerTip: 'AVERAGE dipakai saat soal memakai kata rata-rata.'
  },
  MIN: {
    description: 'Mencari angka paling kecil dalam satu range.',
    simpleLogic: 'Pilih range angka, lalu Excel mengambil angka yang nilainya paling rendah.',
    useCase: 'Dipakai untuk mencari penjualan terendah, nilai terkecil, atau stok paling sedikit.',
    analogy: 'Kayak mencari angka paling rendah di laporan.',
    exampleFormula: '=MIN(range_angka)',
    exampleMeaning: 'Baca begini: cari angka terkecil dari range_angka.',
    beginnerTip: 'MIN bukan menghitung total. MIN hanya mengambil angka paling kecil.'
  },
  MAX: {
    description: 'Mencari angka paling besar dalam satu range.',
    simpleLogic: 'Pilih range angka, lalu Excel mengambil angka yang nilainya paling tinggi.',
    useCase: 'Dipakai untuk mencari penjualan tertinggi, nilai terbesar, atau stok paling banyak.',
    analogy: 'Kayak mencari angka paling tinggi di laporan.',
    exampleFormula: '=MAX(range_angka)',
    exampleMeaning: 'Baca begini: cari angka terbesar dari range_angka.',
    beginnerTip: 'MAX bukan menjumlahkan angka. MAX hanya mengambil angka paling besar.'
  },
  LARGE: {
    description: 'Mencari angka terbesar ke-1, ke-2, ke-3, dan seterusnya.',
    simpleLogic: 'Pilih range angka, lalu tentukan urutan terbesar yang dicari.',
    useCase: 'Dipakai saat kamu butuh top 1, top 2, atau top 3 dari sebuah data angka.',
    analogy: 'Kayak membuat daftar juara dari angka terbesar.',
    exampleFormula: '=LARGE(range_angka; urutan_terbesar)',
    exampleMeaning: 'Baca begini: ambil angka terbesar sesuai urutan yang diminta.',
    beginnerTip: 'Kalau urutan_terbesar diisi 1, hasilnya sama seperti MAX. Kalau diisi 2, hasilnya angka terbesar kedua.'
  },
  SMALL: {
    description: 'Mencari angka terkecil ke-1, ke-2, ke-3, dan seterusnya.',
    simpleLogic: 'Pilih range angka, lalu tentukan urutan terkecil yang dicari.',
    useCase: 'Dipakai saat kamu butuh bottom 1, bottom 2, atau angka terendah urutan tertentu.',
    analogy: 'Kayak membuat daftar angka terendah dari sebuah data.',
    exampleFormula: '=SMALL(range_angka; urutan_terkecil)',
    exampleMeaning: 'Baca begini: ambil angka terkecil sesuai urutan yang diminta.',
    beginnerTip: 'Kalau urutan_terkecil diisi 1, hasilnya sama seperti MIN. Kalau diisi 2, hasilnya angka terkecil kedua.'
  },
  COUNT: {
    description: 'Menghitung berapa cell yang berisi angka.',
    simpleLogic: 'Pilih range, lalu Excel menghitung cell yang isinya angka saja.',
    useCase: 'Dipakai untuk menghitung berapa bulan yang punya angka penjualan atau berapa nilai yang sudah terisi angka.',
    analogy: 'Kayak menghitung berapa kotak yang isinya angka.',
    exampleFormula: '=COUNT(range_data)',
    exampleMeaning: 'Baca begini: hitung berapa cell di range_data yang berisi angka.',
    beginnerTip: 'COUNT tidak menghitung teks. Kalau mau menghitung semua cell yang terisi, pakai COUNTA.'
  },
  COUNTA: {
    description: 'Menghitung berapa cell yang terisi, baik angka maupun teks.',
    simpleLogic: 'Pilih range, lalu Excel menghitung semua cell yang tidak kosong.',
    useCase: 'Dipakai untuk mengecek berapa data yang sudah diisi, termasuk angka, teks, dan catatan.',
    analogy: 'Kayak menghitung berapa kotak yang sudah diisi apa pun isinya.',
    exampleFormula: '=COUNTA(range_data)',
    exampleMeaning: 'Baca begini: hitung semua cell yang terisi di range_data.',
    beginnerTip: 'COUNTA menghitung angka dan teks. Cell kosong tidak dihitung.'
  },
  COUNTBLANK: {
    description: 'Menghitung berapa cell yang masih kosong.',
    simpleLogic: 'Pilih range, lalu Excel menghitung cell yang belum terisi.',
    useCase: 'Dipakai untuk mencari data yang belum lengkap, catatan yang belum diisi, atau kolom yang masih kosong.',
    analogy: 'Kayak mengecek berapa kotak yang masih kosong.',
    exampleFormula: '=COUNTBLANK(range_data)',
    exampleMeaning: 'Baca begini: hitung berapa cell kosong di range_data.',
    beginnerTip: 'COUNTBLANK cocok untuk audit data kosong.'
  }
};

export function getFormulaLearningContent(formula = {}) {
  if (!formula?.name) return {};
  return formulaLearningContent[formula.name] || buildBeginnerLearningContent(formula);
}
