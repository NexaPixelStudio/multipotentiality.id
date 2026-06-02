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
  },
  SUMIF: {
    description: 'Menjumlahkan angka yang memenuhi satu syarat.',
    simpleLogic: 'Tentukan range yang dicek syaratnya, tulis syaratnya, lalu tentukan range angka yang dijumlahkan.',
    useCase: 'Dipakai untuk total penjualan per kategori, kota, toko, channel, atau status.',
    analogy: 'Kayak kasir yang hanya menjumlahkan belanjaan dari jenis tertentu.',
    exampleFormula: '=SUMIF(range_syarat; syarat; range_angka)',
    exampleMeaning: 'Baca begini: cek range_syarat, ambil baris yang sesuai syarat, lalu jumlahkan angka dari range_angka.',
    beginnerTip: 'SUMIF cocok kalau soalnya meminta total dengan satu syarat.'
  },
  COUNTIF: {
    description: 'Menghitung jumlah data yang memenuhi satu syarat.',
    simpleLogic: 'Tentukan range yang dicek, lalu tulis syarat yang mau dihitung.',
    useCase: 'Dipakai untuk jumlah order per kota, kategori, channel, toko, atau status.',
    analogy: 'Kayak menghitung berapa baris yang punya label tertentu.',
    exampleFormula: '=COUNTIF(range_syarat; syarat)',
    exampleMeaning: 'Baca begini: hitung berapa cell di range_syarat yang isinya sesuai syarat.',
    beginnerTip: 'COUNTIF menghitung jumlah data, bukan menjumlahkan nominal.'
  },
  AVERAGEIF: {
    description: 'Menghitung rata-rata angka yang memenuhi satu syarat.',
    simpleLogic: 'Tentukan range yang dicek syaratnya, tulis syaratnya, lalu tentukan range angka yang dirata-ratakan.',
    useCase: 'Dipakai untuk rata-rata penjualan per kategori, kota, toko, channel, atau status.',
    analogy: 'Kayak mencari rata-rata nilai, tapi hanya untuk kelompok tertentu.',
    exampleFormula: '=AVERAGEIF(range_syarat; syarat; range_angka)',
    exampleMeaning: 'Baca begini: cek range_syarat, ambil baris yang sesuai syarat, lalu cari rata-rata dari range_angka.',
    beginnerTip: 'AVERAGEIF cocok kalau soalnya meminta rata-rata dengan satu syarat.'
  },
  SUMIFS: {
    description: 'Menjumlahkan angka yang memenuhi lebih dari satu syarat.',
    simpleLogic: 'Tentukan range angka yang dijumlahkan, lalu tulis pasangan range syarat dan isi syaratnya.',
    useCase: 'Dipakai untuk total penjualan dengan gabungan syarat, misalnya kategori dan kota.',
    analogy: 'Kayak filter bertingkat: data harus lolos semua syarat dulu baru dijumlahkan.',
    exampleFormula: '=SUMIFS(range_angka; range_syarat_1; syarat_1; range_syarat_2; syarat_2)',
    exampleMeaning: 'Baca begini: jumlahkan range_angka hanya untuk baris yang memenuhi semua syarat.',
    beginnerTip: 'Di SUMIFS, range angka ditulis paling depan. Ini beda dengan SUMIF.'
  },
  COUNTIFS: {
    description: 'Menghitung jumlah data yang memenuhi lebih dari satu syarat.',
    simpleLogic: 'Tulis pasangan range syarat dan isi syaratnya. Data dihitung hanya kalau semua syarat terpenuhi.',
    useCase: 'Dipakai untuk jumlah order dengan gabungan syarat, misalnya channel dan status.',
    analogy: 'Kayak menghitung baris yang lolos beberapa filter sekaligus.',
    exampleFormula: '=COUNTIFS(range_syarat_1; syarat_1; range_syarat_2; syarat_2)',
    exampleMeaning: 'Baca begini: hitung baris yang memenuhi syarat_1 dan syarat_2 sekaligus.',
    beginnerTip: 'COUNTIFS tidak butuh range angka karena yang dihitung adalah jumlah baris/data.'
  },
  AVERAGEIFS: {
    description: 'Menghitung rata-rata angka yang memenuhi lebih dari satu syarat.',
    simpleLogic: 'Tentukan range angka yang dirata-ratakan, lalu tulis pasangan range syarat dan isi syaratnya.',
    useCase: 'Dipakai untuk rata-rata penjualan dengan gabungan syarat, misalnya kota dan channel.',
    analogy: 'Kayak mencari rata-rata dari data yang sudah difilter beberapa syarat.',
    exampleFormula: '=AVERAGEIFS(range_angka; range_syarat_1; syarat_1; range_syarat_2; syarat_2)',
    exampleMeaning: 'Baca begini: cari rata-rata dari range_angka hanya untuk baris yang memenuhi semua syarat.',
    beginnerTip: 'Di AVERAGEIFS, range angka ditulis paling depan, lalu pasangan syaratnya.'
  }
};

export function getFormulaLearningContent(formula = {}) {
  if (!formula?.name) return {};
  return formulaLearningContent[formula.name] || buildBeginnerLearningContent(formula);
}
