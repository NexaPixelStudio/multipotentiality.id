import { buildBeginnerLearningContent } from './formulaAuditRules.js';

export const formulaLearningContent = {
  SUM: {
    description: 'Menjumlahkan seluruh angka dalam satu range atau lebih.',
    simpleLogic: 'Pilih range angka yang ingin dijumlahkan. Jika data sudah tersusun di tabel, ambil langsung dari range-nya, jangan mengetik ulang angkanya satu per satu.',
    useCase: 'Untuk menghitung total penjualan, total qty, total biaya, atau akumulasi angka lain dari sekumpulan data.',
    analogy: 'Bayangkan seorang kasir yang menjumlahkan seluruh belanjaan di keranjang menjadi satu angka total.',
    exampleFormula: '=SUM(range_angka)',
    exampleMeaning: 'Artinya: jumlahkan semua angka yang ada di range_angka menjadi satu hasil.',
    beginnerTip: 'Gunakan SUM ketika soal memakai kata "total", "jumlahkan", atau "keseluruhan".'
  },
  AVERAGE: {
    description: 'Menghitung nilai rata-rata dari sekumpulan angka.',
    simpleLogic: 'Pilih kumpulan angkanya, Excel akan menjumlahkan semuanya lalu membaginya dengan jumlah data yang ada.',
    useCase: 'Untuk mencari rata-rata penjualan, rata-rata nilai ujian, atau performa rata-rata dalam suatu periode.',
    analogy: 'Bayangkan mencari performa harian yang mewakili beberapa hari sekaligus, bukan hasil satu hari saja.',
    exampleFormula: '=AVERAGE(range_angka)',
    exampleMeaning: 'Artinya: cari nilai tengah dari seluruh angka yang ada di range_angka.',
    beginnerTip: 'Gunakan AVERAGE ketika soal secara eksplisit meminta "rata-rata", bukan total.'
  },
  MIN: {
    description: 'Mengambil angka paling kecil dari sekumpulan data.',
    simpleLogic: 'Pilih range angkanya, Excel akan membandingkan semua nilai dan mengambil yang paling rendah.',
    useCase: 'Untuk mencari penjualan terendah, nilai terkecil, atau stok paling sedikit dalam suatu periode.',
    analogy: 'Bayangkan menyisir sebuah laporan untuk menemukan angka paling rendah di dalamnya.',
    exampleFormula: '=MIN(range_angka)',
    exampleMeaning: 'Artinya: cari angka terkecil dari seluruh angka di range_angka.',
    beginnerTip: 'MIN tidak menjumlahkan apa pun — ia hanya membandingkan dan mengambil nilai paling kecil.'
  },
  MAX: {
    description: 'Mengambil angka paling besar dari sekumpulan data.',
    simpleLogic: 'Pilih range angkanya, Excel akan membandingkan semua nilai dan mengambil yang paling tinggi.',
    useCase: 'Untuk mencari penjualan tertinggi, nilai terbesar, atau stok paling banyak dalam suatu periode.',
    analogy: 'Bayangkan mencari rekor tertinggi dari serangkaian angka dalam laporan.',
    exampleFormula: '=MAX(range_angka)',
    exampleMeaning: 'Artinya: cari angka terbesar dari seluruh angka di range_angka.',
    beginnerTip: 'MAX tidak menjumlahkan apa pun — ia hanya membandingkan dan mengambil nilai paling besar.'
  },
  LARGE: {
    description: 'Mengambil angka terbesar berdasarkan urutan tertentu, misalnya terbesar ke-2 atau ke-3.',
    simpleLogic: 'Pilih range angkanya, lalu tentukan urutan keberapa yang ingin diambil dihitung dari yang paling besar.',
    useCase: 'Untuk mencari nilai top-1, top-2, atau top-3 dari sekumpulan data tanpa perlu mengurutkan tabelnya secara manual.',
    analogy: 'Bayangkan membuat papan peringkat: bukan cuma juara satu yang bisa dicari, tapi juga juara dua atau tiga.',
    exampleFormula: '=LARGE(range_angka; urutan_keberapa)',
    exampleMeaning: 'Artinya: ambil angka terbesar sesuai urutan yang diminta dari range_angka.',
    beginnerTip: 'Kalau urutan diisi 1, hasilnya sama dengan MAX. Kalau diisi 2, artinya angka terbesar kedua, dan seterusnya.'
  },
  SMALL: {
    description: 'Mengambil angka terkecil berdasarkan urutan tertentu, misalnya terkecil ke-2 atau ke-3.',
    simpleLogic: 'Pilih range angkanya, lalu tentukan urutan keberapa yang ingin diambil dihitung dari yang paling kecil.',
    useCase: 'Untuk mencari nilai bottom-1, bottom-2, atau angka terendah pada urutan tertentu.',
    analogy: 'Kebalikan dari papan peringkat juara — kali ini mencari posisi paling bawah pada urutan tertentu.',
    exampleFormula: '=SMALL(range_angka; urutan_keberapa)',
    exampleMeaning: 'Artinya: ambil angka terkecil sesuai urutan yang diminta dari range_angka.',
    beginnerTip: 'Kalau urutan diisi 1, hasilnya sama dengan MIN. Kalau diisi 2, artinya angka terkecil kedua, dan seterusnya.'
  },
  COUNT: {
    description: 'Menghitung berapa banyak cell yang berisi angka.',
    simpleLogic: 'Pilih range-nya, Excel akan menghitung cell yang isinya angka saja. Teks dan cell kosong diabaikan.',
    useCase: 'Untuk mengetahui berapa bulan yang sudah punya data penjualan, atau berapa nilai yang sudah terisi angka.',
    analogy: 'Bayangkan menghitung berapa kotak dalam rak yang isinya benar-benar angka, bukan label atau kotak kosong.',
    exampleFormula: '=COUNT(range_data)',
    exampleMeaning: 'Artinya: hitung berapa cell di range_data yang isinya angka.',
    beginnerTip: 'COUNT tidak menghitung teks. Kalau ingin menghitung semua cell yang terisi apa pun, gunakan COUNTA.'
  },
  COUNTA: {
    description: 'Menghitung berapa banyak cell yang sudah terisi, baik berisi angka maupun teks.',
    simpleLogic: 'Pilih range-nya, Excel akan menghitung semua cell yang tidak kosong, apa pun isinya.',
    useCase: 'Untuk mengecek kelengkapan data — berapa baris yang sudah diisi, termasuk nama, kode, atau catatan.',
    analogy: 'Bayangkan menghitung berapa kotak yang sudah diisi apa pun, tanpa peduli isinya angka atau tulisan.',
    exampleFormula: '=COUNTA(range_data)',
    exampleMeaning: 'Artinya: hitung semua cell yang terisi di range_data.',
    beginnerTip: 'COUNTA menghitung angka maupun teks, tapi cell yang benar-benar kosong tidak ikut dihitung.'
  },
  COUNTBLANK: {
    description: 'Menghitung berapa banyak cell yang masih kosong.',
    simpleLogic: 'Pilih range-nya, Excel akan menghitung cell yang belum diisi sama sekali.',
    useCase: 'Untuk audit kelengkapan data — mencari kolom yang belum terisi sebelum laporan dikirim.',
    analogy: 'Bayangkan mengecek rak penyimpanan untuk menemukan berapa kotak yang masih kosong.',
    exampleFormula: '=COUNTBLANK(range_data)',
    exampleMeaning: 'Artinya: hitung berapa cell kosong di range_data.',
    beginnerTip: 'Cell berisi angka nol (0) dianggap terisi, bukan kosong — jadi tidak ikut dihitung COUNTBLANK.'
  },
  SUMIF: {
    description: 'Menjumlahkan angka yang memenuhi satu syarat tertentu.',
    simpleLogic: 'Tentukan range yang dicek syaratnya, tulis syaratnya, lalu tentukan range angka yang dijumlahkan kalau syaratnya terpenuhi.',
    useCase: 'Untuk menghitung total penjualan per kategori, per kota, per toko, atau per status tertentu.',
    analogy: 'Bayangkan seorang kasir yang hanya menjumlahkan belanjaan dari satu jenis produk tertentu saja, mengabaikan produk lain.',
    exampleFormula: '=SUMIF(range_syarat; syarat; range_angka)',
    exampleMeaning: 'Artinya: periksa range_syarat, ambil baris yang cocok dengan syarat, lalu jumlahkan angka pada baris itu dari range_angka.',
    beginnerTip: 'Gunakan SUMIF ketika soal meminta total tapi dengan satu syarat tambahan.'
  },
  COUNTIF: {
    description: 'Menghitung jumlah data yang memenuhi satu syarat tertentu.',
    simpleLogic: 'Tentukan range yang dicek, lalu tulis syarat yang ingin dihitung jumlahnya.',
    useCase: 'Untuk menghitung jumlah order per kota, per kategori, per channel, atau per status.',
    analogy: 'Bayangkan menghitung berapa baris data yang punya label tertentu, seperti menghitung berapa siswa yang masuk kategori "Lulus".',
    exampleFormula: '=COUNTIF(range_syarat; syarat)',
    exampleMeaning: 'Artinya: hitung berapa cell di range_syarat yang isinya sesuai dengan syarat.',
    beginnerTip: 'COUNTIF menghitung jumlah data yang cocok, bukan menjumlahkan nominalnya.'
  },
  AVERAGEIF: {
    description: 'Menghitung rata-rata angka yang memenuhi satu syarat tertentu.',
    simpleLogic: 'Tentukan range yang dicek syaratnya, tulis syaratnya, lalu tentukan range angka yang dirata-ratakan kalau syaratnya terpenuhi.',
    useCase: 'Untuk mencari rata-rata penjualan per kategori, per kota, per toko, atau per status tertentu.',
    analogy: 'Bayangkan mencari nilai rata-rata kelas, tapi hanya untuk satu kelompok siswa tertentu.',
    exampleFormula: '=AVERAGEIF(range_syarat; syarat; range_angka)',
    exampleMeaning: 'Artinya: periksa range_syarat, ambil baris yang cocok dengan syarat, lalu cari rata-rata angkanya dari range_angka.',
    beginnerTip: 'Gunakan AVERAGEIF ketika soal meminta rata-rata tapi dengan satu syarat tambahan.'
  },
  SUMIFS: {
    description: 'Menjumlahkan angka yang memenuhi lebih dari satu syarat sekaligus.',
    simpleLogic: 'Tentukan dulu range angka yang dijumlahkan, lalu tulis pasangan range syarat beserta isi syaratnya untuk tiap kriteria.',
    useCase: 'Untuk menghitung total penjualan dengan gabungan syarat, misalnya kategori tertentu di kota tertentu.',
    analogy: 'Bayangkan menyaring data secara bertingkat — data harus lolos semua saringan dulu sebelum dijumlahkan.',
    exampleFormula: '=SUMIFS(range_angka; range_syarat_1; syarat_1; range_syarat_2; syarat_2)',
    exampleMeaning: 'Artinya: jumlahkan range_angka, tapi hanya untuk baris yang memenuhi semua syarat yang ditentukan.',
    beginnerTip: 'Di SUMIFS, range angka ditulis paling depan — ini berbeda dengan SUMIF yang menulis range angka di bagian akhir.'
  },
  COUNTIFS: {
    description: 'Menghitung jumlah data yang memenuhi lebih dari satu syarat sekaligus.',
    simpleLogic: 'Tulis pasangan range syarat beserta isi syaratnya untuk tiap kriteria. Data baru dihitung kalau semua syarat terpenuhi.',
    useCase: 'Untuk menghitung jumlah order dengan gabungan syarat, misalnya channel tertentu dengan status tertentu.',
    analogy: 'Bayangkan menghitung baris data yang berhasil lolos beberapa saringan syarat sekaligus.',
    exampleFormula: '=COUNTIFS(range_syarat_1; syarat_1; range_syarat_2; syarat_2)',
    exampleMeaning: 'Artinya: hitung baris yang memenuhi syarat_1 dan syarat_2 secara bersamaan.',
    beginnerTip: 'COUNTIFS tidak membutuhkan range angka karena yang dihitung adalah jumlah baris data, bukan nilainya.'
  },
  AVERAGEIFS: {
    description: 'Menghitung rata-rata angka yang memenuhi lebih dari satu syarat sekaligus.',
    simpleLogic: 'Tentukan dulu range angka yang dirata-ratakan, lalu tulis pasangan range syarat beserta isi syaratnya untuk tiap kriteria.',
    useCase: 'Untuk mencari rata-rata penjualan dengan gabungan syarat, misalnya kota tertentu melalui channel tertentu.',
    analogy: 'Bayangkan mencari rata-rata dari data yang sudah disaring lebih dari satu kali.',
    exampleFormula: '=AVERAGEIFS(range_angka; range_syarat_1; syarat_1; range_syarat_2; syarat_2)',
    exampleMeaning: 'Artinya: cari rata-rata dari range_angka, tapi hanya untuk baris yang memenuhi semua syarat.',
    beginnerTip: 'Sama seperti SUMIFS, di AVERAGEIFS range angka juga ditulis paling depan, baru diikuti pasangan syaratnya.'
  },
  IF: {
    description: 'Menghasilkan salah satu dari dua kemungkinan hasil berdasarkan satu syarat.',
    simpleLogic: 'Tulis syarat yang ingin dicek, lalu tentukan hasil kalau syaratnya benar dan hasil kalau syaratnya salah.',
    useCase: 'Untuk membuat status lulus/tidak lulus, layak/tidak layak, atau keputusan sederhana lain yang punya dua kemungkinan.',
    analogy: 'Bayangkan penjaga pintu yang mengecek satu syarat, lalu memutuskan apakah seseorang boleh masuk atau tidak.',
    exampleFormula: '=IF(syarat; hasil_jika_benar; hasil_jika_salah)',
    exampleMeaning: 'Artinya: kalau syarat terpenuhi, tampilkan hasil_jika_benar. Kalau tidak, tampilkan hasil_jika_salah.',
    beginnerTip: 'Rumus ini selalu punya tiga bagian: syarat yang dicek, hasil saat benar, dan hasil saat salah — jangan sampai ada yang terlewat.'
  },
  IFS: {
    description: 'Mengecek beberapa syarat secara berurutan dan mengambil hasil dari syarat pertama yang terpenuhi.',
    simpleLogic: 'Tulis pasangan syarat dan hasil, dari syarat paling ketat ke paling longgar. Excel membaca dari kiri ke kanan sampai menemukan syarat yang benar.',
    useCase: 'Untuk membuat grade nilai, level performa, kategori prioritas, atau tingkatan bertahap lainnya.',
    analogy: 'Bayangkan panitia lomba yang mengecek syarat juara satu dulu, lalu juara dua, dan seterusnya, sampai menemukan kategori yang tepat untuk peserta.',
    exampleFormula: '=IFS(syarat_1; hasil_1; syarat_2; hasil_2; TRUE; hasil_default)',
    exampleMeaning: 'Artinya: cek syarat_1 dulu. Kalau benar, pakai hasil_1. Kalau tidak, lanjut ke syarat_2, dan seterusnya. TRUE di akhir berfungsi sebagai hasil default.',
    beginnerTip: 'Urutan syarat sangat menentukan — selalu mulai dari syarat yang paling ketat, karena syarat pertama yang cocok langsung dipakai.'
  },
  'IF AND': {
    description: 'Menggabungkan pengecekan syarat dengan aturan bahwa semua syarat harus benar sekaligus.',
    simpleLogic: 'Kumpulan syarat dicek bersamaan. Hasilnya baru dianggap benar kalau seluruh syaratnya terpenuhi, lalu hasil TRUE/FALSE itu diubah menjadi jawaban yang mudah dibaca.',
    useCase: 'Untuk status yang membutuhkan lebih dari satu syarat sekaligus, misalnya nilai cukup dan kehadiran cukup secara bersamaan.',
    analogy: 'Bayangkan pintu keamanan yang butuh dua kartu akses sekaligus untuk terbuka — kalau salah satu tidak ada, pintu tetap terkunci.',
    exampleFormula: '=IF(AND(syarat_1; syarat_2); hasil_jika_semua_benar; hasil_jika_ada_yang_salah)',
    exampleMeaning: 'Artinya: cek apakah syarat_1 dan syarat_2 sama-sama benar. Kalau ya, tampilkan hasil_jika_semua_benar. Kalau ada satu saja yang salah, tampilkan hasil_jika_ada_yang_salah.',
    beginnerTip: 'Kalau hanya salah satu syarat yang benar, hasilnya tetap dianggap tidak memenuhi — semua syarat wajib benar.'
  },
  'IF OR': {
    description: 'Menggabungkan pengecekan syarat dengan aturan bahwa cukup salah satu syarat saja yang benar.',
    simpleLogic: 'Kumpulan syarat dicek bersamaan. Hasilnya sudah dianggap benar kalau minimal satu syarat terpenuhi, lalu hasil TRUE/FALSE itu diubah menjadi jawaban yang mudah dibaca.',
    useCase: 'Untuk status dengan syarat alternatif, misalnya lolos kalau nilai sangat tinggi atau kalau memenuhi kategori khusus tertentu.',
    analogy: 'Bayangkan pintu yang bisa dibuka dengan salah satu dari dua kunci berbeda — cukup satu kunci yang cocok, pintu langsung terbuka.',
    exampleFormula: '=IF(OR(syarat_1; syarat_2); hasil_jika_salah_satu_benar; hasil_jika_semua_salah)',
    exampleMeaning: 'Artinya: cek apakah syarat_1 atau syarat_2 ada yang benar. Kalau salah satu saja benar, tampilkan hasil_jika_salah_satu_benar.',
    beginnerTip: 'Hasilnya baru dianggap tidak memenuhi kalau kedua syarat sama-sama salah — cukup satu yang benar sudah cukup.'
  },
  'IF NOT': {
    description: 'Membalik hasil sebuah syarat, lalu mengubahnya menjadi keputusan yang mudah dibaca.',
    simpleLogic: 'Syarat dasarnya dicek dulu, hasilnya dibalik dari benar menjadi salah atau sebaliknya, baru diubah menjadi jawaban akhir.',
    useCase: 'Untuk status yang justru dibuat dari kebalikan sebuah syarat, misalnya menandai data yang belum memenuhi standar.',
    analogy: 'Bayangkan saklar pembalik — kalau kondisi aslinya menyala, hasil setelah dibalik menjadi padam, begitu juga sebaliknya.',
    exampleFormula: '=IF(NOT(syarat); hasil_jika_syarat_tidak_terpenuhi; hasil_jika_syarat_terpenuhi)',
    exampleMeaning: 'Artinya: balik dulu hasil dari syarat. Kalau syarat aslinya tidak terpenuhi, tampilkan hasil_jika_syarat_tidak_terpenuhi.',
    beginnerTip: 'Cara termudah memahami NOT: baca syarat aslinya dulu, baru bayangkan hasilnya dibalik seratus delapan puluh derajat.'
  },
  VLOOKUP: {
    description: 'Mencari sebuah kode di kolom paling kiri tabel referensi, lalu mengambil data dari kolom lain yang sejajar.',
    simpleLogic: 'Tentukan kode yang dicari, tabel referensinya, lalu nomor kolom hasil yang ingin diambil, dihitung dari kolom paling kiri tabel itu.',
    useCase: 'Untuk mengambil nama produk, harga, kategori, atau data master lain berdasarkan sebuah kode acuan.',
    analogy: 'Bayangkan mencari nama kontak dari nomor teleponnya di sebuah daftar — kolom nomor telepon ada di paling kiri, lalu nama kontaknya diambil dari kolom sebelahnya.',
    exampleFormula: '=VLOOKUP(kode_yang_dicari; tabel_referensi; nomor_kolom_hasil; FALSE)',
    exampleMeaning: 'Artinya: cari kode_yang_dicari di kolom pertama tabel_referensi, lalu ambil hasil dari kolom sesuai nomor_kolom_hasil.',
    beginnerTip: 'Kolom yang berisi kode pencarian wajib berada di posisi paling kiri dari tabel referensi, jika tidak, rumus ini tidak akan bekerja.'
  },
  HLOOKUP: {
    description: 'Mencari sebuah kode di baris paling atas tabel referensi, lalu mengambil data dari baris lain yang sejajar.',
    simpleLogic: 'Tentukan kode yang dicari, area tabel referensinya, lalu nomor baris hasil yang ingin diambil, dihitung dari baris paling atas area itu.',
    useCase: 'Untuk membaca tabel yang datanya disusun melebar ke samping, bukan menurun ke bawah.',
    analogy: 'Bayangkan tabel harga mingguan yang tanggalnya disusun berjajar di baris atas, lalu data hariannya dibaca menurun dari tanggal yang cocok.',
    exampleFormula: '=HLOOKUP(kode_yang_dicari; area_tabel; nomor_baris_hasil; FALSE)',
    exampleMeaning: 'Artinya: cari kode_yang_dicari di baris pertama area_tabel, lalu ambil hasil dari baris sesuai nomor_baris_hasil.',
    beginnerTip: 'Baris yang berisi kode pencarian wajib berada di posisi paling atas dari area tabel — kalau datanya justru tersusun menurun, gunakan VLOOKUP.'
  },
  XLOOKUP: {
    description: 'Mencari sebuah nilai pada satu range, lalu mengambil hasil dari range lain yang posisinya sejajar.',
    simpleLogic: 'Tentukan nilai yang dicari, range tempat mencarinya, lalu range hasil yang ingin diambil. Kedua range boleh berada di kolom mana pun, tidak harus bersebelahan.',
    useCase: 'Untuk pencarian data yang lebih fleksibel dibanding pencarian kolom-kiri-saja, termasuk saat kolom kode bukan di posisi paling kiri.',
    analogy: 'Bayangkan mencari nama pemesan dari nomor pesanan, di mana daftar nomor pesanan dan daftar nama pemesan boleh berada di kolom mana saja, tidak harus bersebelahan.',
    exampleFormula: '=XLOOKUP(nilai_yang_dicari; range_pencarian; range_hasil)',
    exampleMeaning: 'Artinya: cari nilai_yang_dicari di range_pencarian, lalu ambil data yang sejajar dari range_hasil.',
    beginnerTip: 'Pastikan range_pencarian dan range_hasil punya jumlah baris yang sama persis, kalau tidak, hasilnya bisa tidak sejajar.'
  },
  INDEX: {
    description: 'Mengambil isi sebuah cell berdasarkan posisi urutannya dalam sebuah range, bukan berdasarkan pencarian kode.',
    simpleLogic: 'Pilih range datanya, lalu tentukan posisi urutan yang ingin diambil, dihitung dari baris pertama range itu.',
    useCase: 'Untuk mengambil data dari posisi tertentu dalam daftar, dan sering digabungkan dengan rumus pencari posisi untuk pencarian yang lebih fleksibel.',
    analogy: 'Bayangkan mengambil buku dari rak berdasarkan nomor urutnya, bukan berdasarkan judul bukunya.',
    exampleFormula: '=INDEX(range_data; nomor_posisi)',
    exampleMeaning: 'Artinya: ambil isi dari range_data pada posisi urutan sesuai nomor_posisi.',
    beginnerTip: 'Rumus ini tidak melakukan pencarian apa pun — ia murni mengambil isi berdasarkan nomor urut yang kamu berikan.'
  },
  MATCH: {
    description: 'Mencari posisi urutan sebuah nilai di dalam sebuah range, hasilnya berupa nomor posisi, bukan isi datanya.',
    simpleLogic: 'Tentukan nilai yang dicari dan range tempat mencarinya. Hasilnya adalah nomor urutan posisi nilai itu ditemukan.',
    useCase: 'Untuk mencari posisi sebuah kode atau nama dalam daftar, biasanya sebagai bahan untuk rumus lain yang mengambil isi berdasarkan posisi.',
    analogy: 'Bayangkan mencari di urutan keberapa nama seseorang berada dalam daftar antrean, bukan mencari data lain tentang orang itu.',
    exampleFormula: '=MATCH(nilai_yang_dicari; range_pencarian; 0)',
    exampleMeaning: 'Artinya: cari posisi urutan nilai_yang_dicari di dalam range_pencarian.',
    beginnerTip: 'Hasil rumus ini adalah angka posisi, bukan isi data — jangan berharap hasilnya berupa nama atau produk.'
  },
  'INDEX MATCH': {
    description: 'Gabungan dua rumus: satu mencari posisi sebuah nilai, satu lagi mengambil isi berdasarkan posisi tersebut.',
    simpleLogic: 'Rumus pencari posisi dijalankan lebih dulu untuk menemukan letak sebuah kode, hasil posisinya kemudian dipakai oleh rumus pengambil-isi untuk mengambil data yang sejajar.',
    useCase: 'Sebagai alternatif pencarian yang lebih fleksibel, terutama saat kolom kode tidak berada di posisi paling kiri tabel.',
    analogy: 'Bayangkan dua orang bekerja sama: satu orang mencari nomor kursi penonton dari daftar tiket, orang kedua langsung mengambil barang yang tersimpan di nomor kursi itu.',
    exampleFormula: '=INDEX(range_hasil; MATCH(nilai_yang_dicari; range_pencarian; 0))',
    exampleMeaning: 'Artinya: cari dulu posisi nilai_yang_dicari di range_pencarian, lalu pakai posisi itu untuk mengambil isi dari range_hasil.',
    beginnerTip: 'Kedua range yang dipakai — range pencarian dan range hasil — harus punya jumlah baris yang sama supaya posisinya benar-benar sejajar.'
  }
};

export function getFormulaLearningContent(formula = {}) {
  if (!formula?.name) return {};
  return formulaLearningContent[formula.name] || buildBeginnerLearningContent(formula);
}
