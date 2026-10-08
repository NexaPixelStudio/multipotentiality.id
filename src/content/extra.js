import { sheet, f, q, D } from './helpers.js';

// Soal tambahan untuk fungsi yang sebelumnya belum punya latihan.
// Setiap daftar ditambahkan di akhir modul yang sesuai (id modul sebagai kunci).

const S = (rows, fmt) => [sheet('Data', rows, fmt)];

export default {
  'fungsi-dasar': [
    f({
      title: 'Berapa sel yang kosong?',
      story: 'Sel nilai yang kosong berarti siswa belum dinilai.',
      task: 'Di sel **B8**, hitung **berapa sel kosong** di B2:B7 memakai fungsi khusus untuk itu.',
      sheets: S([['Siswa', 'Nilai'], ['Ayu', 80], ['Budi', null], ['Citra', 75], ['Dedi', null], ['Eka', 90], ['Fani', 85], ['Belum dinilai', '']]),
      target: 'B8',
      expect: 2,
      solution: '=COUNTBLANK(B2:B7)',
      mustUse: ['COUNTBLANK'],
      hints: ['Kebalikan dari COUNTA, yang menghitung sel terisi.', 'Fungsi namanya gabungan "count" dan "blank".', 'Tulis: =COUNTBLANK(B2:B7)'],
      explain: 'COUNTBLANK menghitung sel kosong. Budi dan Dedi belum punya nilai, jadi hasilnya 2.'
    }),
    f({
      title: 'Jumlah kombinasi paket',
      story: 'Sebuah toko menjual paket dengan 3 pilihan ukuran, 4 warna, dan 2 bahan.',
      task: 'Di sel **B5**, hitung **jumlah seluruh kombinasi** dengan mengalikan semua angka di B2:B4 memakai fungsi **PRODUCT**.',
      sheets: S([['Pilihan', 'Jumlah'], ['Ukuran', 3], ['Warna', 4], ['Bahan', 2], ['Kombinasi', '']]),
      target: 'B5',
      expect: 24,
      solution: '=PRODUCT(B2:B4)',
      mustUse: ['PRODUCT'],
      hints: ['SUM menjumlahkan. Kamu butuh yang mengalikan.', 'PRODUCT(range) mengalikan semua angka di range.', 'Tulis: =PRODUCT(B2:B4)'],
      explain: '3 × 4 × 2 = 24 kombinasi.'
    })
  ],

  operator: [
    f({
      title: 'Bunga majemuk dengan POWER',
      story: 'Modal Rp 1.000.000 bertumbuh 10% per tahun selama 3 tahun.',
      task: 'Di sel **B4**, hitung nilai akhir = modal × (1 + bunga) pangkat tahun, memakai fungsi **POWER**.',
      sheets: S([['Modal', 1000000], ['Bunga per tahun', 0.1], ['Lama (tahun)', 3], ['Nilai akhir', '']], { B: 'int' }),
      target: 'B4',
      resultFmt: 'rp',
      expect: 1331000,
      solution: '=B1*POWER(1+B2,B3)',
      mustUse: ['POWER'],
      hints: ['Faktor pertumbuhan per tahun adalah 1 + bunga.', 'POWER(angka, pangkat) sama dengan operator ^.', 'Tulis: =B1*POWER(1+B2,B3)'],
      explain: '1.000.000 × 1,1³ = 1.331.000. POWER dan operator ^ memberi hasil yang sama.'
    }),
    f({
      title: 'Menyambung dengan CONCATENATE',
      task: 'Di sel **C2**, gabungkan nama depan, satu spasi, dan nama belakang memakai **CONCATENATE**.',
      sheets: S([['Depan', 'Belakang', 'Lengkap'], ['Siti', 'Aminah', '']]),
      target: 'C2',
      expect: 'Siti Aminah',
      solution: '=CONCATENATE(A2," ",B2)',
      mustUse: ['CONCATENATE'],
      hints: ['CONCATENATE menerima banyak teks yang disambung berurutan.', 'Spasi ditulis sebagai teks " ".', 'Tulis: =CONCATENATE(A2," ",B2)'],
      explain: 'Hasilnya sama dengan operator &. CONCATENATE adalah versi lama; versi baru adalah CONCAT atau TEXTJOIN.'
    })
  ],

  pembulatan: [
    f({
      title: 'Sisi dari luas',
      story: 'Sebuah lahan persegi memiliki luas 144 m².',
      task: 'Di sel **B2**, hitung **panjang sisinya** dengan akar kuadrat.',
      sheets: S([['Luas (m²)', 144], ['Sisi (m)', '']]),
      target: 'B2',
      expect: 12,
      solution: '=SQRT(B1)',
      mustUse: ['SQRT'],
      hints: ['Kebalikan dari memangkatkan dua.', 'SQRT = square root.', 'Tulis: =SQRT(B1)'],
      explain: 'Akar kuadrat dari 144 adalah 12. Bilangan negatif menghasilkan #NUM!.'
    }),
    f({
      title: 'Naik, turun, atau tetap?',
      story: 'Kamu ingin menandai perubahan harga: 1 untuk naik, -1 untuk turun, 0 untuk tetap.',
      task: 'Di sel **B2**, ubah selisih harga di A2 menjadi 1, -1, atau 0 dengan **SIGN**. Salin sampai B4.',
      sheets: S([['Selisih', 'Tanda'], [-5, ''], [0, ''], [8, '']]),
      target: 'B2',
      fillTo: 'B4',
      expect: [[-1], [0], [1]],
      solution: '=SIGN(A2)',
      mustUse: ['SIGN'],
      hints: ['Kamu hanya peduli arahnya, bukan besarnya.', 'SIGN mengembalikan 1, 0, atau -1.', 'Tulis: =SIGN(A2)'],
      explain: 'SIGN praktis untuk ikon naik/turun atau pewarnaan bersyarat.'
    }),
    f({
      title: 'Harga ke kelipatan 500 (ke atas)',
      story: 'Harga jual dibulatkan ke atas ke kelipatan Rp 500.',
      task: 'Di sel **B2**, bulatkan harga di A2 **ke atas** ke kelipatan 500 dengan **CEILING**. Salin sampai B4.',
      sheets: S([['Harga hitungan', 'Harga jual'], [12300, ''], [12500, ''], [12501, '']], { A: 'rp', B: 'rp' }),
      target: 'B2',
      fillTo: 'B4',
      resultFmt: 'rp',
      expect: [[12500], [12500], [13000]],
      solution: '=CEILING(A2,500)',
      mustUse: ['CEILING'],
      hints: ['ROUNDUP membulatkan digit. Di sini kamu butuh kelipatan.', 'CEILING(angka, kelipatan).', 'Tulis: =CEILING(A2,500)'],
      explain: 'Angka yang sudah kelipatan 500 tidak berubah (12.500), sedangkan 12.501 naik ke 13.000.'
    }),
    f({
      title: 'Kuota ke kelipatan 12 (ke bawah)',
      story: 'Pengiriman hanya boleh dalam kardus penuh berisi 12.',
      task: 'Di sel **B2**, hitung jumlah barang yang bisa dikirim: bulatkan **ke bawah** ke kelipatan 12 dengan **FLOOR**.',
      sheets: S([['Stok', 100], ['Bisa dikirim', '']]),
      target: 'B2',
      expect: 96,
      solution: '=FLOOR(B1,12)',
      mustUse: ['FLOOR'],
      hints: ['Kebalikan dari CEILING.', 'FLOOR(angka, kelipatan).', 'Tulis: =FLOOR(B1,12)'],
      explain: '100 dibulatkan ke bawah ke kelipatan 12 terdekat menjadi 96 (8 kardus).'
    }),
    f({
      title: 'Kelipatan 250 terdekat',
      task: 'Di sel **B2**, bulatkan harga di A2 ke **kelipatan 250 terdekat** (bisa naik atau turun) dengan **MROUND**. Salin sampai B3.',
      sheets: S([['Harga', 'Bulat'], [1100, ''], [1130, '']]),
      target: 'B2',
      fillTo: 'B3',
      expect: [[1000], [1250]],
      solution: '=MROUND(A2,250)',
      mustUse: ['MROUND'],
      hints: ['CEILING selalu naik dan FLOOR selalu turun. Kamu butuh yang ke terdekat.', 'MROUND(angka, kelipatan).', 'Tulis: =MROUND(A2,250)'],
      explain: '1.100 lebih dekat ke 1.000, sedangkan 1.130 lebih dekat ke 1.250.'
    }),
    f({
      title: 'Minggu penuh',
      task: 'Di sel **B2**, hitung berapa **minggu penuh** dalam 100 hari memakai **QUOTIENT** (hasil bagi tanpa sisa).',
      sheets: S([['Jumlah hari', 100], ['Minggu penuh', '']]),
      target: 'B2',
      expect: 14,
      solution: '=QUOTIENT(B1,7)',
      alt: ['=INT(B1/7)'],
      mustUse: ['QUOTIENT', 'INT'],
      hints: ['Kamu hanya butuh bagian bulat dari pembagian.', 'QUOTIENT(angka, pembagi).', 'Tulis: =QUOTIENT(B1,7)'],
      explain: '100 ÷ 7 = 14 sisa 2, jadi 14 minggu penuh. Sisanya bisa dicari dengan MOD.'
    }),
    f({
      title: 'Luas lingkaran',
      task: 'Di sel **B2**, hitung luas lingkaran = π × r², dibulatkan 2 desimal. Pakai fungsi **PI()**.',
      sheets: S([['Jari-jari', 10], ['Luas', '']]),
      target: 'B2',
      expect: 314.16,
      solution: '=ROUND(PI()*B1^2,2)',
      mustUse: ['PI'],
      hints: ['Excel punya konstanta pi sendiri.', 'PI() ditulis dengan kurung kosong.', 'Tulis: =ROUND(PI()*B1^2,2)'],
      explain: 'π × 100 = 314,159... yang dibulatkan menjadi 314,16.'
    })
  ],

  logika: [
    f({
      title: 'Kebalikan dengan NOT',
      story: 'Ongkir dikenakan untuk semua kota selain Jakarta.',
      task: 'Di sel **B2**, hasilkan **TRUE** bila kota di A2 **bukan** Jakarta, memakai **NOT**. Salin sampai B4.',
      sheets: S([['Kota', 'Kena ongkir?'], ['Jakarta', ''], ['Bandung', ''], ['Medan', '']]),
      target: 'B2',
      fillTo: 'B4',
      expect: [[false], [true], [true]],
      solution: '=NOT(A2="Jakarta")',
      mustUse: ['NOT'],
      hints: ['Mulai dari pertanyaan: apakah kotanya Jakarta?', 'NOT membalik BENAR menjadi SALAH.', 'Tulis: =NOT(A2="Jakarta")'],
      explain: 'NOT(A2="Jakarta") sama dengan A2<>"Jakarta". NOT berguna untuk membalik hasil fungsi lain.'
    }),
    f({
      title: 'Salah satu saja dengan XOR',
      story: 'Akses gratis berlaku jika pengunjung membawa kupon ATAU berstatus member, tapi bukan keduanya.',
      task: 'Di sel **C2**, hasilkan **TRUE** bila **tepat satu** dari kolom A (member) dan kolom B (kupon) bernilai TRUE, memakai **XOR**. Salin sampai C4.',
      sheets: S([['Member', 'Kupon', 'Gratis?'], [true, false, ''], [true, true, ''], [false, false, '']]),
      target: 'C2',
      fillTo: 'C4',
      expect: [[true], [false], [false]],
      solution: '=XOR(A2,B2)',
      mustUse: ['XOR'],
      hints: ['OR benar bila salah satu atau keduanya benar. Kamu butuh yang berbeda.', 'XOR benar bila jumlah yang benar ganjil.', 'Tulis: =XOR(A2,B2)'],
      explain: 'XOR "exclusive or": baris kedua (keduanya TRUE) menghasilkan FALSE.'
    })
  ],

  'error-iferror': [
    f({
      title: 'Hanya tangkap #N/A',
      story: 'Kode pelanggan yang tidak ada di daftar akan memberi #N/A. Error lain sebaiknya tetap terlihat.',
      task: 'Di sel **B2**, cari nama dari kode di A2 pada tabel D2:E4. Jika tidak ketemu, tampilkan **"Belum terdaftar"** dengan **IFNA**. Salin sampai B4.',
      sheets: S([['Kode', 'Nama', null, 'Kode', 'Nama'], ['K1', '', null, 'K1', 'Ani'], ['K9', '', null, 'K2', 'Budi'], ['K2', '', null, 'K3', 'Cici']]),
      target: 'B2',
      fillTo: 'B4',
      expect: [['Ani'], ['Belum terdaftar'], ['Budi']],
      solution: '=IFNA(VLOOKUP(A2,$D$2:$E$4,2,FALSE),"Belum terdaftar")',
      alt: ['=IFNA(XLOOKUP(A2,$D$2:$D$4,$E$2:$E$4),"Belum terdaftar")'],
      mustUse: ['IFNA'],
      hints: ['IFERROR menangkap semua error. IFNA hanya #N/A.', 'Bungkus VLOOKUP dengan IFNA dan kunci tabelnya.', 'Tulis: =IFNA(VLOOKUP(A2,$D$2:$E$4,2,FALSE),"Belum terdaftar")'],
      explain: 'IFNA lebih aman daripada IFERROR untuk lookup: kalau ada kesalahan lain (misalnya #REF!), kamu tetap melihatnya.'
    }),
    f({
      title: 'Angka atau teks?',
      story: 'Angka yang tersimpan sebagai teks ("7" dalam tanda kutip) tidak dihitung sebagai angka.',
      task: 'Di sel **B2**, tulis **"Angka"** bila A2 berisi angka sungguhan, selain itu **"Teks"**, memakai **ISNUMBER**. Salin sampai B4.',
      sheets: S([['Isi', 'Jenis'], [12, ''], ['abc', ''], ['7', '']]),
      target: 'B2',
      fillTo: 'B4',
      expect: [['Angka'], ['Teks'], ['Teks']],
      solution: '=IF(ISNUMBER(A2),"Angka","Teks")',
      mustUse: ['ISNUMBER'],
      hints: ['ISNUMBER menghasilkan TRUE atau FALSE, cocok sebagai syarat IF.', 'Taruh ISNUMBER(A2) di bagian syarat.', 'Tulis: =IF(ISNUMBER(A2),"Angka","Teks")'],
      explain: 'Baris ketiga berisi "7" yang berupa teks, jadi hasilnya "Teks". Inilah penyebab umum SUM yang "melewatkan" angka.'
    }),
    f({
      title: 'Cek isi sebagai teks',
      task: 'Di sel **B2**, hasilkan TRUE bila A2 berisi **teks** dengan **ISTEXT**. Salin sampai B4.',
      sheets: S([['Isi', 'Teks?'], ['Rina', ''], [45, ''], ['10', '']]),
      target: 'B2',
      fillTo: 'B4',
      expect: [[true], [false], [true]],
      solution: '=ISTEXT(A2)',
      mustUse: ['ISTEXT'],
      hints: ['Lawan dari ISNUMBER.', 'ISTEXT(sel).', 'Tulis: =ISTEXT(A2)'],
      explain: '"10" dalam tanda kutip adalah teks, sedangkan 45 adalah angka.'
    }),
    f({
      title: 'Tandai yang belum diisi',
      task: 'Di sel **C2**, tulis **"Belum diisi"** bila nilai di B2 kosong, selain itu **"OK"**, memakai **ISBLANK**. Salin sampai C4.',
      sheets: S([['Siswa', 'Nilai', 'Status'], ['Ayu', 80, ''], ['Budi', null, ''], ['Citra', 75, '']]),
      target: 'C2',
      fillTo: 'C4',
      expect: [['OK'], ['Belum diisi'], ['OK']],
      solution: '=IF(ISBLANK(B2),"Belum diisi","OK")',
      mustUse: ['ISBLANK'],
      hints: ['ISBLANK mengecek apakah sebuah sel benar-benar kosong.', 'Gunakan sebagai syarat di IF.', 'Tulis: =IF(ISBLANK(B2),"Belum diisi","OK")'],
      explain: 'ISBLANK hanya TRUE untuk sel yang benar-benar kosong. Sel berisi spasi tidak dianggap kosong.'
    }),
    q({
      title: 'Untuk apa NA()?',
      q: 'Fungsi `=NA()` sengaja menghasilkan #N/A. Kapan ini berguna?',
      options: ['Untuk menandai data yang hilang agar grafik tidak menggambar titik nol palsu', 'Untuk menjumlahkan angka yang tidak ada', 'Untuk menghapus error di seluruh sheet', 'Untuk mengubah teks menjadi angka'],
      answer: 0,
      explain: 'Sel kosong atau 0 membuat grafik garis turun ke nol. #N/A dilewati oleh grafik, jadi garis tampak putus pada data yang memang hilang. Fungsi lain seperti IFNA bisa menangkapnya bila perlu.'
    }),
    f({
      title: 'Apakah hasilnya BENAR/SALAH?',
      story: 'Kolom Status kadang berisi TRUE/FALSE sungguhan, kadang teks "TRUE" biasa.',
      task: 'Di sel **B2**, hasilkan TRUE bila A2 berisi nilai logika (TRUE/FALSE sungguhan) dengan **ISLOGICAL**. Salin sampai B4.',
      sheets: S([['Isi', 'Logika?'], [true, ''], ['TRUE', ''], [5, '']]),
      target: 'B2',
      fillTo: 'B4',
      expect: [[true], [false], [false]],
      solution: '=ISLOGICAL(A2)',
      mustUse: ['ISLOGICAL'],
      hints: ['Seperti ISNUMBER dan ISTEXT, tapi untuk BENAR/SALAH.', 'ISLOGICAL(sel).', 'Tulis: =ISLOGICAL(A2)'],
      explain: 'Teks "TRUE" berbeda dari nilai logika TRUE. Hanya yang kedua yang menghasilkan TRUE.'
    }),
    f({
      title: 'Deteksi hitungan yang error',
      task: 'Di sel **C2**, tulis **"Cek data"** bila A2/B2 menghasilkan error, selain itu **"OK"**, memakai **ISERROR**. Salin sampai C4.',
      sheets: S([['Total', 'Hari', 'Status'], [10, 2, ''], [5, 0, ''], [8, 4, '']]),
      target: 'C2',
      fillTo: 'C4',
      expect: [['OK'], ['Cek data'], ['OK']],
      solution: '=IF(ISERROR(A2/B2),"Cek data","OK")',
      mustUse: ['ISERROR'],
      hints: ['ISERROR(sesuatu) menghasilkan TRUE bila "sesuatu" error.', 'Isi "sesuatu" dengan A2/B2.', 'Tulis: =IF(ISERROR(A2/B2),"Cek data","OK")'],
      explain: 'Baris kedua membagi dengan nol sehingga #DIV/0!. ISERROR menangkapnya tanpa menampilkan error itu.'
    }),
    f({
      title: 'Apakah tidak ditemukan?',
      task: 'Di sel **B2**, hasilkan TRUE bila nilai di A2 **tidak ditemukan** di daftar D2:D4, memakai **ISNA** dan **MATCH**. Salin sampai B3.',
      sheets: S([['Cari', 'Tidak ada?', null, 'Daftar'], ['x', '', null, 'x'], ['z', '', null, 'y'], [null, null, null, 'w']]),
      target: 'B2',
      fillTo: 'B3',
      expect: [[false], [true]],
      solution: '=ISNA(MATCH(A2,$D$2:$D$4,0))',
      mustUse: ['ISNA'],
      hints: ['MATCH menghasilkan #N/A bila tidak ketemu.', 'ISNA mengecek apakah hasilnya #N/A.', 'Tulis: =ISNA(MATCH(A2,$D$2:$D$4,0))'],
      explain: 'Pola ISNA(MATCH(...)) umum dipakai untuk mencari data yang hilang di salah satu daftar.'
    })
  ],

  'bersihkan-data': [
    f({
      title: 'Buang karakter tak terlihat',
      story: 'Teks hasil ekspor sistem kadang menyelipkan karakter kontrol yang tidak terlihat.',
      task: 'Di sel **B2**, bersihkan teks di A2 dari karakter yang tidak tercetak dengan **CLEAN**.',
      sheets: S([['Mentah', 'Bersih'], ['Ayam\u0007Bakar', '']]),
      target: 'B2',
      expect: 'AyamBakar',
      solution: '=CLEAN(A2)',
      mustUse: ['CLEAN'],
      hints: ['TRIM membuang spasi, tapi bukan karakter kontrol.', 'CLEAN membuang karakter yang tidak tercetak.', 'Tulis: =CLEAN(A2)'],
      explain: 'CLEAN sering dipasangkan dengan TRIM: =TRIM(CLEAN(A2)).'
    })
  ],

  'teks-lanjut': [
    f({
      title: 'Persis sama atau tidak?',
      task: 'Di sel **C2**, hasilkan TRUE bila A2 dan B2 **persis sama termasuk huruf besar-kecil**, dengan **EXACT**. Salin sampai C3.',
      sheets: S([['Kode 1', 'Kode 2', 'Sama?'], ['abc', 'ABC', ''], ['xyz', 'xyz', '']]),
      target: 'C2',
      fillTo: 'C3',
      expect: [[false], [true]],
      solution: '=EXACT(A2,B2)',
      shouldFail: ['=A2=B2'],
      mustUse: ['EXACT'],
      hints: ['Operator = tidak membedakan huruf besar-kecil.', 'EXACT membedakannya.', 'Tulis: =EXACT(A2,B2)'],
      explain: '"abc" = "ABC" bernilai TRUE di Excel, tapi EXACT menghasilkan FALSE.'
    }),
    f({
      title: 'Diagram batang dari teks',
      task: 'Di sel **B2**, buat batang sederhana dengan mengulang tanda "*" sebanyak angka di A2, memakai **REPT**. Salin sampai B4.',
      sheets: S([['Nilai', 'Batang'], [3, ''], [5, ''], [1, '']]),
      target: 'B2',
      fillTo: 'B4',
      expect: [['***'], ['*****'], ['*']],
      solution: '=REPT("*",A2)',
      mustUse: ['REPT'],
      hints: ['Kamu mengulang sebuah teks beberapa kali.', 'REPT(teks, jumlah ulang).', 'Tulis: =REPT("*",A2)'],
      explain: 'Trik klasik untuk grafik mini di dalam sel tanpa membuat chart.'
    }),
    f({
      title: 'Menyambung range dengan CONCAT',
      task: 'Di sel **B5**, sambung seluruh potongan di A2:A4 menjadi satu kata dengan **CONCAT**.',
      sheets: S([['Potongan'], ['Ja'], ['kar'], ['ta'], ['Kata', '']]),
      target: 'B5',
      expect: 'Jakarta',
      solution: '=CONCAT(A2:A4)',
      mustUse: ['CONCAT'],
      hints: ['CONCATENATE butuh tiap sel disebut satu per satu.', 'CONCAT menerima range sekaligus.', 'Tulis: =CONCAT(A2:A4)'],
      explain: 'CONCAT menyambung semua sel dalam range tanpa pemisah. Dengan pemisah, gunakan TEXTJOIN.'
    })
  ],

  'array-dinamis': [
    f({
      title: 'Memecah teks menyamping',
      task: 'Di sel **B2**, pecah kode "JKT-2025-07" di A2 menjadi tiga bagian (di sel B2, C2, D2) dengan pembatas "-" memakai **TEXTSPLIT**.',
      sheets: S([['Kode', 'Bagian 1', 'Bagian 2', 'Bagian 3'], ['JKT-2025-07', '', '', '']]),
      target: 'B2',
      expect: [['JKT', '2025', '07']],
      solution: '=TEXTSPLIT(A2,"-")',
      mustUse: ['TEXTSPLIT'],
      hints: ['Satu rumus akan mengisi beberapa sel ke kanan.', 'TEXTSPLIT(teks, pembatas).', 'Tulis: =TEXTSPLIT(A2,"-")'],
      explain: 'Hasilnya tetap berupa teks ("07" tidak kehilangan angka nol). Cocok untuk memecah kode, alamat, atau tag.'
    }),
    f({
      title: 'Urutkan berdasarkan kolom lain',
      task: 'Di sel **D2**, tampilkan nama siswa (A2:A4) **terurut dari nilai tertinggi** (B2:B4) memakai **SORTBY**.',
      sheets: S([['Siswa', 'Nilai'], ['Ayu', 80], ['Budi', 95], ['Citra', 70]]),
      target: 'D2',
      expect: [['Budi'], ['Ayu'], ['Citra']],
      solution: '=SORTBY(A2:A4,B2:B4,-1)',
      mustUse: ['SORTBY'],
      hints: ['SORT mengurutkan berdasarkan kolomnya sendiri. Di sini nama diurutkan oleh kolom lain.', 'SORTBY(yang ditampilkan, pengurut, arah). Arah -1 menurun.', 'Tulis: =SORTBY(A2:A4,B2:B4,-1)'],
      explain: 'Kolom pengurut tidak perlu ikut ditampilkan.'
    }),
    f({
      title: 'Putar kolom jadi baris',
      task: 'Di sel **C1**, ubah daftar A2:A4 yang berbentuk kolom menjadi satu baris memakai **TRANSPOSE**.',
      sheets: S([['Bulan'], ['Jan'], ['Feb'], ['Mar']]),
      target: 'C1',
      expect: [['Jan', 'Feb', 'Mar']],
      solution: '=TRANSPOSE(A2:A4)',
      mustUse: ['TRANSPOSE'],
      hints: ['Baris menjadi kolom dan sebaliknya.', 'TRANSPOSE(range).', 'Tulis: =TRANSPOSE(A2:A4)'],
      explain: 'Berguna saat data tersusun vertikal tapi laporan butuh susunan mendatar.'
    }),
    f({
      title: 'Tiga penjualan teratas',
      task: 'Di sel **D2**, tampilkan **3 nilai penjualan terbesar** dari B2:B7, terurut dari terbesar. Gabungkan **TAKE** dan **SORT**.',
      sheets: S([['Sales', 'Penjualan'], ['A', 50], ['B', 90], ['C', 20], ['D', 70], ['E', 10], ['F', 80]]),
      target: 'D2',
      expect: [[90], [80], [70]],
      solution: '=TAKE(SORT(B2:B7,1,-1),3)',
      mustUse: ['TAKE'],
      hints: ['Urutkan dulu dari terbesar, lalu ambil beberapa yang teratas.', 'TAKE(daftar, jumlah baris) mengambil dari atas.', 'Tulis: =TAKE(SORT(B2:B7,1,-1),3)'],
      explain: 'Pola "urutkan lalu ambil N teratas" untuk laporan top-N. TAKE dengan angka negatif mengambil dari bawah.'
    }),
    f({
      title: 'Pilih kolom tertentu',
      task: 'Di sel **E2**, tampilkan hanya **kolom 1 dan kolom 3** dari tabel A2:C4 memakai **CHOOSECOLS**.',
      sheets: S([['Nama', 'Divisi', 'Gaji'], ['Rina', 'HR', 6000000], ['Sandi', 'IT', 9000000], ['Tari', 'HR', 5500000]], { C: 'rp' }),
      target: 'E2',
      expect: [['Rina', 6000000], ['Sandi', 9000000], ['Tari', 5500000]],
      solution: '=CHOOSECOLS(A2:C4,1,3)',
      mustUse: ['CHOOSECOLS'],
      hints: ['Kamu menyaring kolom, bukan baris.', 'CHOOSECOLS(tabel, nomor kolom, nomor kolom, ...).', 'Tulis: =CHOOSECOLS(A2:C4,1,3)'],
      explain: 'Kolom Divisi dilewati. Urutan nomor menentukan urutan kolom hasil.'
    })
  ],

  tanggal: [
    f({
      title: 'Umur dokumen dengan TODAY',
      story: 'Pada latihan ini, "hari ini" dianggap 15 Juni 2025 agar hasilnya konsisten.',
      task: 'Di sel **B2**, hitung **berapa hari** sejak dokumen terbit (B1) sampai hari ini, memakai **TODAY**.',
      sheets: S([['Tanggal terbit', D('2025-06-01')], ['Umur (hari)', '']], { B: 'date' }),
      target: 'B2',
      expect: 14,
      solution: '=TODAY()-B1',
      mustUse: ['TODAY'],
      hints: ['TODAY() memberi tanggal hari ini.', 'Hari ini dikurangi tanggal terbit.', 'Tulis: =TODAY()-B1'],
      explain: 'TODAY() berubah tiap hari, jadi umur dokumen selalu mutakhir saat file dibuka.'
    }),
    f({
      title: 'Tanggal dari NOW',
      story: 'NOW() memberi tanggal dan jam. Pada latihan ini sekarang dianggap 15 Juni 2025 pukul 00.00.',
      task: 'Di sel **B1**, ambil **tanggal saja** (tanpa pecahan jam) dari **NOW()** dengan membuang bagian desimalnya.',
      sheets: S([['Tanggal hari ini', '']], { B: 'date' }),
      target: 'B1',
      allowNoRef: true,
      resultFmt: 'date',
      expect: D('2025-06-15'),
      solution: '=INT(NOW())',
      mustUse: ['NOW'],
      hints: ['NOW() menyimpan jam sebagai pecahan di belakang koma.', 'Buang pecahan dengan fungsi pembulatan ke bawah.', 'Tulis: =INT(NOW())'],
      explain: 'INT(NOW()) sama dengan TODAY(). Pakai NOW bila kamu memang butuh jamnya.'
    }),
    f({
      title: 'Ambil tanggalnya saja',
      task: 'Di sel **B2**, ambil **angka tanggal** (1–31) dari B1.',
      sheets: S([['Tanggal', D('2025-08-17')], ['Hari ke-', '']], { B: 'date' }),
      target: 'B2',
      expect: 17,
      solution: '=DAY(B1)',
      mustUse: ['DAY'],
      hints: ['Seperti YEAR dan MONTH.', 'DAY(tanggal).', 'Tulis: =DAY(B1)'],
      explain: 'Ketiganya (YEAR, MONTH, DAY) memecah tanggal menjadi angka yang bisa dipakai di syarat.'
    }),
    f({
      title: 'Teks tanggal menjadi tanggal',
      story: 'Data impor menulis tanggal sebagai teks "2025-03-15", sehingga tidak bisa dihitung.',
      task: 'Di sel **B2**, ubah teks di A2 menjadi tanggal sungguhan dengan **DATEVALUE**, lalu tambahkan **30 hari**.',
      sheets: S([['Teks tanggal', 'Jatuh tempo'], ['2025-03-15', '']], { B: 'date' }),
      target: 'B2',
      resultFmt: 'date',
      expect: D('2025-04-14'),
      solution: '=DATEVALUE(A2)+30',
      mustUse: ['DATEVALUE'],
      hints: ['Teks tidak bisa ditambah 30 sebagai tanggal.', 'DATEVALUE mengubah teks tanggal menjadi tanggal sungguhan.', 'Tulis: =DATEVALUE(A2)+30'],
      explain: '15 Maret + 30 hari = 14 April.'
    }),
    f({
      title: 'Estimasi 5 hari kerja',
      story: '5 Juni 2025 adalah hari Kamis. Pengiriman memakan 5 hari kerja (tanpa Sabtu dan Minggu).',
      task: 'Di sel **B2**, hitung tanggal tiba memakai **WORKDAY**.',
      sheets: S([['Tanggal kirim', D('2025-06-05')], ['Estimasi tiba', '']], { B: 'date' }),
      target: 'B2',
      resultFmt: 'date',
      expect: D('2025-06-12'),
      solution: '=WORKDAY(B1,5)',
      mustUse: ['WORKDAY'],
      hints: ['Menambah 5 hari biasa akan melewati akhir pekan.', 'WORKDAY(mulai, jumlah hari kerja).', 'Tulis: =WORKDAY(B1,5)'],
      explain: 'Jumat 6, Senin 9, Selasa 10, Rabu 11, lalu Kamis 12 Juni. Argumen ketiga (opsional) bisa berisi hari libur.'
    })
  ],

  vlookup: [
    f({
      title: 'Diskon berdasarkan jumlah beli',
      story: 'Beli 1+ diskon 0%, 10+ diskon 5%, 50+ diskon 10%.',
      task: 'Di sel **E2**, cari persentase diskon untuk qty di **E1** memakai **LOOKUP** pada tabel batas (A2:A4) dan diskon (B2:B4).',
      sheets: S([['Qty min', 'Diskon', null, 'Qty', 25], [1, 0, null, 'Diskon', ''], [10, 0.05], [50, 0.1]], { B: 'pct', E: 'pct' }),
      target: 'E2',
      resultFmt: 'pct',
      expect: 0.05,
      solution: '=LOOKUP(E1,A2:A4,B2:B4)',
      mustUse: ['LOOKUP'],
      hints: ['Ini pencarian berjenjang pada tabel yang terurut naik.', 'LOOKUP(nilai, kolom batas, kolom hasil).', 'Tulis: =LOOKUP(E1,A2:A4,B2:B4)'],
      explain: '25 berada di antara batas 10 dan 50, jadi diskonnya 5%. LOOKUP adalah versi ringkas dari VLOOKUP perkiraan.'
    })
  ],

  xlookup: [
    f({
      title: 'Posisi kemunculan terakhir',
      task: 'Di sel **D2**, cari **urutan** kemunculan **terakhir** nama "Ayu" di A2:A5 memakai **XMATCH** (cari dari bawah).',
      sheets: S([['Nama'], ['Ayu'], ['Budi'], ['Ayu'], ['Citra']]),
      target: 'D2',
      expect: 3,
      solution: '=XMATCH("Ayu",A2:A5,0,-1)',
      mustUse: ['XMATCH'],
      hints: ['Seperti MATCH, tapi punya pilihan arah pencarian.', 'Argumen ketiga 0 = persis, argumen keempat -1 = dari bawah.', 'Tulis: =XMATCH("Ayu",A2:A5,0,-1)'],
      explain: 'Ayu muncul di urutan 1 dan 3. Dengan pencarian dari bawah, hasilnya 3.'
    })
  ],

  'index-match': [
    f({
      title: 'Nomor urut otomatis',
      task: 'Di sel **A2**, isi **nomor urut** (1, 2, 3, ...) dengan rumus yang memakai **ROW**. Rumus disalin sampai A5.',
      sheets: S([['No', 'Nama'], [null, 'Rina'], [null, 'Sandi'], [null, 'Tari'], [null, 'Umar']]),
      target: 'A2',
      fillTo: 'A5',
      allowNoRef: true,
      expect: [[1], [2], [3], [4]],
      solution: '=ROW()-1',
      mustUse: ['ROW'],
      hints: ['ROW() tanpa argumen memberi nomor baris sel tempat rumus berada.', 'Baris pertama data ada di baris 2, jadi kurangi 1.', 'Tulis: =ROW()-1'],
      explain: 'Nomor urut ini tetap benar walau baris dihapus atau disisipkan.'
    }),
    f({
      title: 'Nomor kolom sebuah sel',
      task: 'Di sel **B2**, tampilkan **nomor kolom** dari sel D1 dengan **COLUMN**.',
      sheets: S([['Sel', 'Nomor kolom'], ['D1', '']]),
      target: 'B2',
      expect: 4,
      solution: '=COLUMN(D1)',
      mustUse: ['COLUMN'],
      hints: ['Kolom A = 1, B = 2, dan seterusnya.', 'COLUMN(sel).', 'Tulis: =COLUMN(D1)'],
      explain: 'COLUMN berguna untuk menghasilkan nomor kolom dinamis, misalnya sebagai argumen INDEX atau VLOOKUP.'
    }),
    f({
      title: 'Berapa kolom datanya?',
      task: 'Di sel **B2**, hitung **jumlah kolom** pada range A1:E1 dengan **COLUMNS**.',
      sheets: S([['Q1', 'Q2', 'Q3', 'Q4', 'Total'], ['Jumlah kolom', '']]),
      target: 'B2',
      expect: 5,
      solution: '=COLUMNS(A1:E1)',
      mustUse: ['COLUMNS'],
      hints: ['Mirip ROWS, tapi untuk kolom.', 'COLUMNS(range).', 'Tulis: =COLUMNS(A1:E1)'],
      explain: 'A sampai E ada lima kolom.'
    })
  ],

  statistik: [
    f({
      title: 'Simpangan baku populasi',
      story: 'Data berikut adalah seluruh populasi (bukan sampel).',
      task: 'Di sel **B10**, hitung **simpangan baku populasi** B2:B9 dengan **STDEV.P**.',
      sheets: S([['No', 'Nilai'], [1, 2], [2, 4], [3, 4], [4, 4], [5, 5], [6, 5], [7, 7], [8, 9], ['Simpangan baku', '']]),
      target: 'B10',
      expect: 2,
      solution: '=STDEV.P(B2:B9)',
      mustUse: ['STDEV.P'],
      hints: ['Ada dua versi: untuk sampel dan untuk populasi.', 'Seluruh populasi memakai STDEV.P.', 'Tulis: =STDEV.P(B2:B9)'],
      explain: 'STDEV.S membagi dengan n−1 (sampel), STDEV.P membagi dengan n (seluruh populasi). Data ini menghasilkan tepat 2.'
    }),
    f({
      title: 'Rata-rata hanya baris terlihat',
      task: 'Di sel **B7**, hitung **rata-rata** B2:B6 memakai **SUBTOTAL** (kode 1 untuk AVERAGE), supaya hasilnya mengikuti filter.',
      sheets: S([['Bulan', 'Penjualan'], ['Jan', 10], ['Feb', 20], ['Mar', 30], ['Apr', 40], ['Rata-rata', '']]),
      target: 'B7',
      expect: 25,
      solution: '=SUBTOTAL(1,B2:B5)',
      mustUse: ['SUBTOTAL'],
      hints: ['Argumen pertama SUBTOTAL menentukan jenis hitungan: 1 = AVERAGE, 9 = SUM.', 'Rentang datanya B2:B5.', 'Tulis: =SUBTOTAL(1,B2:B5)'],
      explain: 'Tanpa filter, hasilnya sama dengan AVERAGE. Dengan filter, baris tersembunyi tidak ikut dihitung.'
    })
  ],

  keuangan: [
    f({
      title: 'Tingkat pengembalian internal (IRR)',
      story: 'Investasi awal Rp 100 juta menghasilkan Rp 40 juta, 50 juta, dan 60 juta pada tahun 1–3.',
      task: 'Di sel **B2**, hitung **IRR** dari arus kas di A1:D1 dan bulatkan ke 3 desimal.',
      sheets: S([[-100000000, 40000000, 50000000, 60000000], ['IRR', '']], { A: 'rp', B: 'rp', C: 'rp', D: 'rp' }),
      target: 'B2',
      expect: 0.216,
      solution: '=ROUND(IRR(A1:D1),3)',
      mustUse: ['IRR'],
      hints: ['IRR mencari tingkat bunga yang membuat NPV menjadi nol.', 'IRR(range arus kas), dengan investasi awal bernilai negatif.', 'Tulis: =ROUND(IRR(A1:D1),3)'],
      explain: 'IRR ≈ 21,6% per tahun. Bila lebih besar dari biaya modal (misalnya 10%), proyek layak.'
    })
  ]
};
