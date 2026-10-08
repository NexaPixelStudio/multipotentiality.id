import { sheet, f, q, p, analogy, tip, warn, steps, syntax, demo, D } from './helpers.js';

// ============================================================
// LEVEL 4 - MAHIR
// ============================================================

const karyawanRows = [
  ['ID', 'Nama', 'Divisi', 'Gaji'],
  ['K01', 'Rina', 'Marketing', 7500000],
  ['K02', 'Sandi', 'IT', 9000000],
  ['K03', 'Tari', 'HR', 6800000],
  ['K04', 'Umar', 'IT', 9500000],
  ['K05', 'Vina', 'Finance', 8200000]
];
const withExtra = (rows, extras) => rows.map((r, i) => [...r, ...(extras[i] || [])]);

const orderRows = () => [
  ['Sales', 'Wilayah', 'Produk', 'Qty', 'Omzet'],
  ['Andi', 'Jakarta', 'Laptop', 2, 20000000],
  ['Budi', 'Bandung', 'Laptop', 1, 10000000],
  ['Citra', 'Jakarta', 'Mouse', 10, 1500000],
  ['Andi', 'Jakarta', 'Mouse', 5, 750000],
  ['Dedi', 'Surabaya', 'Laptop', 3, 30000000],
  ['Budi', 'Bandung', 'Monitor', 2, 6000000],
  ['Citra', 'Jakarta', 'Laptop', 1, 10000000],
  ['Dedi', 'Surabaya', 'Monitor', 4, 12000000],
  ['Andi', 'Bandung', 'Monitor', 1, 3000000],
  ['Citra', 'Surabaya', 'Mouse', 8, 1200000]
];

const xlookup = {
  id: 'xlookup',
  level: 4,
  icon: 'zap',
  title: 'XLOOKUP dan Pencarian Modern',
  tagline: 'Pengganti VLOOKUP yang lebih sederhana.',
  why: 'XLOOKUP mengatasi keterbatasan VLOOKUP: tidak memerlukan nomor kolom, dapat mencari ke arah kiri, dan menyediakan pesan bawaan jika data tidak ditemukan.',
  minutes: 14,
  lessons: [
    {
      title: 'XLOOKUP: pencarian yang lebih sederhana',
      body: [
        syntax('=XLOOKUP(dicari, kolom_pencarian, kolom_hasil, [jika_tidak_ada], [mode_cocok], [mode_cari])', [['dicari', 'Nilai yang dicari'], ['kolom_pencarian', 'Kolom tempat mencari (dapat berada di posisi mana pun)'], ['kolom_hasil', 'Kolom yang isinya akan diambil. Tidak memerlukan nomor kolom'], ['jika_tidak_ada', 'Pesan jika tidak ditemukan (opsional), menggantikan IFERROR']]),
        steps(
          'Defaultnya **pencocokan persis**. Tidak perlu menulis FALSE.',
          'Dapat mengambil kolom di **kiri maupun kanan**.',
          'Punya argumen **jika tidak ada** bawaan.',
          'Tabel tidak perlu terurut untuk pencocokan perkiraan.'
        ),
        demo({
          rows: [['Nama', 'Gaji'], ['Rina', 7500], ['Sandi', 9000], ['Tari', 6800], ['Gaji Sandi:', '']],
          cell: 'B5',
          formula: '=XLOOKUP("Sandi",A2:A4,B2:B4)',
          caption: 'Cari "Sandi" di kolom A, ambil sel sejajar di kolom B: 9000.'
        }),
        warn('XLOOKUP hanya ada di Excel 2021, Microsoft 365, dan Excel Web. Excel 2019 ke bawah tidak punya. Untuk file yang dibagikan kepada banyak orang, pastikan versi Excel mereka mendukungnya.')
      ]
    },
    {
      title: 'Kemampuan tambahan XLOOKUP',
      body: [
        steps(
          '**Mode cocok** (argumen ke-5): `0` persis, `-1` persis atau **terkecil berikutnya**, `1` persis atau **terbesar berikutnya**, `2` wildcard.',
          '**Mode cari** (argumen ke-6): `1` dari atas ke bawah, `-1` dari **bawah ke atas** (menemukan kemunculan terakhir).',
          '**Hasil banyak kolom**: jika kolom hasil lebih dari satu, XLOOKUP mengembalikan seluruh barisnya sekaligus (tumpah ke sel di sebelahnya).'
        ),
        demo({
          rows: [['Pelanggan', 'Jumlah'], ['Ayu', 100], ['Budi', 200], ['Ayu', 150], ['Transaksi terakhir Ayu:', '']],
          cell: 'B5',
          formula: '=XLOOKUP("Ayu",A2:A4,B2:B4,"-",0,-1)',
          caption: 'Mode cari -1 membaca dari bawah, jadi kemunculan terakhir Ayu (150) yang diambil.'
        })
      ]
    }
  ],
  exercises: [
    f({
      title: 'Gaji dari nama',
      story: 'Nama yang dicari ditulis di G1.',
      task: 'Di sel **G2**, ambil **gaji** karyawan yang namanya ada di G1 menggunakan **XLOOKUP**.',
      sheets: [sheet('Karyawan', withExtra(karyawanRows, [[null, null, 'Vina']]), { D: 'rp' })],
      target: 'G2',
      resultFmt: 'rp',
      expect: 8200000,
      solution: '=XLOOKUP(G1,B2:B6,D2:D6)',
      mustUse: ['XLOOKUP'],
      hints: ['XLOOKUP butuh tiga bahan utama: yang dicari, kolom tempat mencari, kolom yang diambil.', 'Cari di kolom Nama (B), ambil dari kolom Gaji (D).', 'Tulis: =XLOOKUP(G1,B2:B6,D2:D6)'],
      parts: [['G1', 'Nama yang dicari'], ['B2:B6', 'Kolom tempat mencari'], ['D2:D6', 'Kolom yang diambil']],
      explain: 'Tidak ada nomor kolom dan tidak ada FALSE. Cukup tunjuk kolom pencarian dan kolom hasil.'
    }),
    f({
      title: 'Mencari ke kiri',
      task: 'Di sel **G2**, ambil **ID** (kolom A, di sebelah kiri Nama) untuk nama yang ada di G1.',
      sheets: [sheet('Karyawan', withExtra(karyawanRows, [[null, null, 'Umar']]), { D: 'rp' })],
      target: 'G2',
      expect: 'K04',
      solution: '=XLOOKUP(G1,B2:B6,A2:A6)',
      mustUse: ['XLOOKUP'],
      hints: ['Letak kolom hasil tidak dibatasi, boleh di kiri kolom pencarian.', 'Kolom pencarian: Nama. Kolom hasil: ID.', 'Tulis: =XLOOKUP(G1,B2:B6,A2:A6)'],
      explain: 'Pencarian ke kiri tidak dapat dilakukan VLOOKUP, tetapi mudah dilakukan XLOOKUP.'
    }),
    f({
      title: 'Pesan jika tidak ditemukan',
      story: 'Nama "Zaki" belum terdaftar.',
      task: 'Di sel **G2**, ambil gaji untuk nama di G1. Jika nama tidak ada, tampilkan teks **"Tidak terdaftar"**, tanpa menggunakan IFERROR.',
      sheets: [sheet('Karyawan', withExtra(karyawanRows, [[null, null, 'Zaki']]), { D: 'rp' })],
      target: 'G2',
      expect: 'Tidak terdaftar',
      solution: '=XLOOKUP(G1,B2:B6,D2:D6,"Tidak terdaftar")',
      mustUse: ['XLOOKUP'],
      forbid: ['IFERROR', 'IFNA'],
      hints: ['XLOOKUP punya argumen keempat khusus untuk kasus tidak ditemukan.', 'Isi argumen keempat dengan teks pesannya.', 'Tulis: =XLOOKUP(G1,B2:B6,D2:D6,"Tidak terdaftar")'],
      explain: 'Argumen "jika tidak ada" membuat rumus lebih pendek dan lebih mudah dibaca dibanding menerapkan IFERROR pada VLOOKUP.'
    }),
    f({
      title: 'Komisi berjenjang tanpa pengurutan',
      story: 'Seperti VLOOKUP perkiraan, tetapi XLOOKUP tidak mewajibkan tabel terurut dan lebih jelas maksudnya.',
      task: 'Di sel **C2**, cari **persentase komisi** untuk omzet di B2 dari tabel sheet **Tarif**. Gunakan mode "persis atau terkecil berikutnya" (-1). Salin sampai C5.',
      sheets: [
        sheet('Komisi', [['Sales', 'Omzet', 'Komisi %'], ['Andi', 8000000, ''], ['Budi', 30000000, ''], ['Citra', 55000000, ''], ['Dedi', 12000000, '']], { B: 'rp', C: 'pct' }),
        sheet('Tarif', [['Omzet min', 'Komisi %'], [0, 0], [10000000, 0.02], [25000000, 0.035], [50000000, 0.05]], { A: 'rp', B: 'pct' })
      ],
      target: 'C2',
      fillTo: 'C5',
      resultFmt: 'pct',
      expect: [[0], [0.035], [0.05], [0.02]],
      solution: '=XLOOKUP(B2,Tarif!$A$2:$A$5,Tarif!$B$2:$B$5,0,-1)',
      mustUse: ['XLOOKUP'],
      hints: ['Omzet jarang tepat sama dengan batas di tabel, jadi perlu mode pencocokan yang mencari batas di bawahnya.', 'Argumen kelima = -1 berarti "persis atau terkecil berikutnya".', 'Tulis: =XLOOKUP(B2,Tarif!$A$2:$A$5,Tarif!$B$2:$B$5,0,-1)'],
      explain: 'Mode -1 mencari nilai yang sama persis, atau jika tidak ada, nilai terdekat yang lebih kecil. Cocok untuk tarif berjenjang.'
    }),
    f({
      title: 'Transaksi terakhir pelanggan',
      story: 'Pelanggan dapat muncul berkali-kali. Anda butuh transaksi paling bawah (paling baru).',
      task: 'Di sel **D2**, ambil **jumlah transaksi terakhir** untuk pelanggan di D1 dengan membaca daftar dari bawah ke atas.',
      sheets: [sheet('Transaksi', [['Pelanggan', 'Jumlah', null, 'Ayu'], ['Ayu', 100], ['Budi', 200], ['Ayu', 150], ['Citra', 300], ['Budi', 250], ['Ayu', 175]])],
      target: 'D2',
      expect: 175,
      solution: '=XLOOKUP(D1,A2:A7,B2:B7,"-",0,-1)',
      alt: ['=XLOOKUP(D1,A2:A7,B2:B7,,0,-1)'],
      wrongs: [{ value: 100, msg: 'Itu transaksi pertama Ayu. Gunakan mode pencarian -1 (argumen keenam) untuk membaca dari bawah.' }],
      mustUse: ['XLOOKUP'],
      hints: ['Secara default pencarian dimulai dari atas dan berhenti di kecocokan pertama.', 'Argumen keenam (mode cari) bernilai -1 untuk mulai dari bawah.', 'Tulis: =XLOOKUP(D1,A2:A7,B2:B7,"-",0,-1)'],
      explain: 'Mode cari -1 menemukan kemunculan terakhir. VLOOKUP tidak punya kemampuan ini.'
    }),
    f({
      title: 'Mengambil dua kolom sekaligus',
      story: 'Jika kolom hasilnya lebih dari satu, XLOOKUP mengembalikan seluruh baris yang cocok dan hasilnya "tumpah" ke sel sebelah kanan.',
      task: 'Di sel **G2**, ambil **Divisi dan Gaji** (kolom C:D) karyawan yang namanya ada di G1 dengan satu rumus.',
      sheets: [sheet('Karyawan', withExtra(karyawanRows, [[null, null, 'Umar']]), { D: 'rp' })],
      target: 'G2',
      expect: [['IT', 9500000]],
      solution: '=XLOOKUP(G1,B2:B6,C2:D6)',
      mustUse: ['XLOOKUP'],
      hints: ['Kolom hasil boleh lebih dari satu kolom.', 'Pilih C2:D6 sebagai kolom hasil.', 'Tulis: =XLOOKUP(G1,B2:B6,C2:D6)'],
      explain: 'Satu rumus mengisi dua sel (G2 dan H2). Ini disebut spill, dan akan Anda dalami di modul Array Dinamis.'
    }),
    q({
      title: 'XLOOKUP dibandingkan VLOOKUP',
      q: 'Manakah pernyataan yang **benar** tentang XLOOKUP?',
      options: ['Hanya dapat mencari ke kanan seperti VLOOKUP', 'Defaultnya pencocokan persis', 'Wajib menggunakan nomor kolom', 'Tersedia di semua versi Excel, termasuk Excel 2010'],
      answer: 1,
      explain: 'XLOOKUP otomatis mencari yang persis sama (tanpa FALSE), tidak menggunakan nomor kolom, dan dapat mencari ke arah mana pun. Namun, fungsi ini hanya tersedia di Excel 2021 / Microsoft 365 ke atas.',
      whyNot: ['Salah satu kelebihan XLOOKUP justru dapat mencari ke kiri.', '', 'Itu VLOOKUP. XLOOKUP langsung menunjuk kolom hasil.', 'Tidak tersedia di Excel 2019 ke bawah.']
    }),
    q({
      title: 'Kapan VLOOKUP masih diperlukan?',
      q: 'Anda membagikan file Excel kepada rekan yang masih menggunakan Excel 2016. Rumus pencarian mana yang paling aman digunakan?',
      options: ['XLOOKUP', 'VLOOKUP atau INDEX-MATCH', 'FILTER', 'LET'],
      answer: 1,
      explain: 'XLOOKUP, FILTER, dan LET baru ada di Excel 2021 / 365. Untuk kompatibilitas luas, VLOOKUP dan INDEX-MATCH tetap pilihan aman.'
    })
  ]
};

const tokoRows = [
  ['Produk', 'Qty', 'Harga', 'Kategori'],
  ['Kopi', 10, 20000, 'Minuman'],
  ['Teh', 5, 15000, 'Minuman'],
  ['Roti', 8, 12000, 'Makanan'],
  ['Kue', 3, 30000, 'Makanan'],
  ['Susu', 12, 18000, 'Minuman']
];

const sumproduct = {
  id: 'sumproduct',
  level: 4,
  icon: 'grid',
  title: 'SUMPRODUCT dan Perhitungan Berbobot',
  tagline: 'Kalikan lalu jumlahkan data dalam satu rumus.',
  why: 'Total omzet dihitung dari kuantitas dikali harga pada setiap baris, lalu dijumlahkan. Biasanya hal ini memerlukan kolom bantu. SUMPRODUCT menyelesaikannya dalam satu rumus dan mendukung banyak syarat.',
  minutes: 14,
  lessons: [
    {
      title: 'Cara kerja SUMPRODUCT',
      body: [
        analogy('Pada sebuah struk: 3 kopi @ Rp 20 ribu dan 2 teh @ Rp 15 ribu. Totalnya (3×20) + (2×15). SUMPRODUCT bekerja dengan cara yang sama: mengalikan angka yang sebaris dari beberapa range, lalu menjumlahkan semuanya.'),
        demo({
          rows: [['Produk', 'Qty', 'Harga'], ['Kopi', 3, 20000], ['Teh', 2, 15000], ['Total omzet', '', '']],
          cell: 'B4',
          formula: '=SUMPRODUCT(B2:B3,C2:C3)',
          caption: '(3 × 20.000) + (2 × 15.000) = 90.000. Tanpa kolom bantu.'
        })
      ]
    },
    {
      title: 'SUMPRODUCT dengan syarat',
      body: [
        p('Anda dapat menyisipkan syarat berupa pernyataan benar atau salah. Saat dikalikan, Excel memperlakukan BENAR sebagai 1 dan SALAH sebagai 0, sehingga baris yang tidak memenuhi syarat menjadi 0 dan tidak ikut dihitung.'),
        syntax('=SUMPRODUCT((range_syarat="nilai") * range_jumlah1 * range_jumlah2)', [['(range="nilai")', 'Menghasilkan deretan BENAR/SALAH'], ['*', 'Mengalikan: BENAR = 1, SALAH = 0, jadi baris tidak cocok bernilai 0']]),
        demo({
          rows: [['Produk', 'Qty', 'Harga', 'Kat.'], ['Kopi', 3, 20000, 'Minuman'], ['Roti', 4, 12000, 'Makanan'], ['Teh', 2, 15000, 'Minuman'], ['Omzet minuman', '', '', '']],
          cell: 'B5',
          formula: '=SUMPRODUCT((D2:D4="Minuman")*B2:B4*C2:C4)',
          caption: '(3×20.000) + (2×15.000) = 90.000. Baris Roti dikali 0.'
        }),
        tip('Untuk syarat **ATAU**, jumlahkan syaratnya: `((A2:A6="Kopi")+(A2:A6="Teh"))`. Untuk syarat **DAN**, kalikan: `(syarat1)*(syarat2)`.')
      ]
    },
    {
      title: 'Rata-rata tertimbang',
      body: [
        analogy('Nilai akhir: tugas berbobot 2, UTS berbobot 3, dan UAS berbobot 5. UAS lebih menentukan, sehingga rata-rata biasa kurang tepat. Rata-rata tertimbang mengalikan tiap nilai dengan bobotnya terlebih dahulu.'),
        syntax('=SUMPRODUCT(nilai, bobot) / SUM(bobot)', [['SUMPRODUCT(nilai, bobot)', 'Jumlah (nilai × bobot)'], ['SUM(bobot)', 'Total bobot sebagai pembagi']])
      ]
    }
  ],
  exercises: [
    f({
      title: 'Total omzet tanpa kolom bantu',
      task: 'Di sel **B8**, hitung **total omzet** = jumlah dari (Qty × Harga) tiap produk dengan satu rumus.',
      sheets: [sheet('Toko', [...tokoRows, [null, null, null, null], [null, null, null, null], ['Total omzet', '', null, null]], { C: 'rp' })],
      target: 'B8',
      resultFmt: 'rp',
      expect: 677000,
      solution: '=SUMPRODUCT(B2:B6,C2:C6)',
      mustUse: ['SUMPRODUCT'],
      hints: ['Anda butuh jumlah dari hasil kali dua kolom.', 'SUMPRODUCT(range1, range2) mengalikan pasangan sebaris lalu menjumlahkannya.', 'Tulis: =SUMPRODUCT(B2:B6,C2:C6)'],
      explain: '200.000 + 75.000 + 96.000 + 90.000 + 216.000 = 677.000.'
    }),
    f({
      title: 'Omzet satu kategori',
      task: 'Di sel **B8**, hitung total omzet (Qty × Harga) untuk produk berkategori **Minuman** menggunakan SUMPRODUCT dengan syarat.',
      sheets: [sheet('Toko', [...tokoRows, [null, null, null, null], [null, null, null, null], ['Omzet minuman', '', null, null]], { C: 'rp' })],
      target: 'B8',
      resultFmt: 'rp',
      expect: 491000,
      solution: '=SUMPRODUCT((D2:D6="Minuman")*B2:B6*C2:C6)',
      mustUse: ['SUMPRODUCT'],
      hints: ['Tambahkan syarat kategori di dalam SUMPRODUCT sebagai pernyataan benar atau salah.', 'Sambung dengan tanda kali: (D2:D6="Minuman")*B2:B6*C2:C6.', 'Tulis: =SUMPRODUCT((D2:D6="Minuman")*B2:B6*C2:C6)'],
      parts: [['(D2:D6="Minuman")', 'BENAR (1) untuk baris minuman, SALAH (0) untuk lainnya'], ['*B2:B6*C2:C6', 'dikali qty dan harga']],
      explain: 'Roti dan Kue dikali 0 sehingga tidak ikut: 200.000 + 75.000 + 216.000 = 491.000.'
    }),
    f({
      title: 'Hitung dengan dua syarat',
      task: 'Di sel **B8**, hitung **berapa produk** yang kategorinya Minuman **dan** qty-nya minimal 10, menggunakan SUMPRODUCT.',
      sheets: [sheet('Toko', [...tokoRows, [null, null, null, null], [null, null, null, null], ['Minuman qty >= 10', '', null, null]], { C: 'rp' })],
      target: 'B8',
      expect: 2,
      solution: '=SUMPRODUCT((D2:D6="Minuman")*(B2:B6>=10))',
      mustUse: ['SUMPRODUCT'],
      hints: ['Dua syarat DAN dihubungkan dengan perkalian.', 'Setiap syarat diletakkan dalam kurung tersendiri.', 'Tulis: =SUMPRODUCT((D2:D6="Minuman")*(B2:B6>=10))'],
      explain: 'Hanya baris yang mendapat 1 × 1 = 1 yang dihitung: Kopi (10) dan Susu (12).'
    }),
    f({
      title: 'Syarat ATAU',
      task: 'Di sel **B8**, jumlahkan **qty** untuk produk **Kopi atau Teh** dengan SUMPRODUCT. Syarat ATAU dihubungkan dengan penjumlahan.',
      sheets: [sheet('Toko', [...tokoRows, [null, null, null, null], [null, null, null, null], ['Qty Kopi + Teh', '', null, null]], { C: 'rp' })],
      target: 'B8',
      expect: 15,
      solution: '=SUMPRODUCT(((A2:A6="Kopi")+(A2:A6="Teh"))*B2:B6)',
      mustUse: ['SUMPRODUCT'],
      hints: ['Baris cocok jika produknya Kopi ATAU produknya Teh.', 'Dua syarat dijumlahkan: (syarat1)+(syarat2). Hasilnya 1 jika salah satu benar.', 'Tulis: =SUMPRODUCT(((A2:A6="Kopi")+(A2:A6="Teh"))*B2:B6)'],
      explain: 'Kopi (10) + Teh (5) = 15. Penjumlahan syarat bertindak sebagai OR.'
    }),
    f({
      title: 'Nilai akhir tertimbang',
      story: 'Bobot Tugas = 2, UTS = 3, UAS = 5.',
      task: 'Di sel **B6**, hitung **nilai akhir tertimbang** dari nilai di B2:B4 dan bobot di C2:C4.',
      sheets: [sheet('Penilaian', [['Komponen', 'Nilai', 'Bobot'], ['Tugas', 80, 2], ['UTS', 70, 3], ['UAS', 90, 5], [null, null, null], ['Nilai akhir', '', null]])],
      target: 'B6',
      expect: 82,
      solution: '=SUMPRODUCT(B2:B4,C2:C4)/SUM(C2:C4)',
      mustUse: ['SUMPRODUCT'],
      wrongs: [{ value: 80, msg: 'Itu rata-rata biasa. Komponen UAS harus lebih berpengaruh karena bobotnya 5.' }],
      hints: ['Setiap nilai dikali bobotnya, lalu dijumlahkan, lalu dibagi total bobot.', 'SUMPRODUCT untuk pembilang, SUM untuk penyebut.', 'Tulis: =SUMPRODUCT(B2:B4,C2:C4)/SUM(C2:C4)'],
      parts: [['SUMPRODUCT(B2:B4,C2:C4)', '(80×2)+(70×3)+(90×5) = 820'], ['/SUM(C2:C4)', 'dibagi total bobot 10']],
      explain: '820 / 10 = 82. Karena UAS bernilai tinggi dan bobotnya terbesar, nilai akhir lebih tinggi dari rata-rata biasa (80).'
    }),
    f({
      title: 'Porsi omzet minuman',
      task: 'Di sel **B8**, hitung **berapa persen** omzet (Qty × Harga) berasal dari kategori Minuman terhadap total omzet.',
      sheets: [sheet('Toko', [...tokoRows, [null, null, null, null], [null, null, null, null], ['% omzet minuman', '', null, null]], { B: 'pct', C: 'rp' })],
      target: 'B8',
      resultFmt: 'pct',
      expect: 491000 / 677000,
      solution: '=SUMPRODUCT((D2:D6="Minuman")*B2:B6*C2:C6)/SUMPRODUCT(B2:B6,C2:C6)',
      mustUse: ['SUMPRODUCT'],
      hints: ['Bagian = omzet minuman. Keseluruhan = total omzet.', 'Keduanya dapat dihitung dengan SUMPRODUCT.', 'Tulis: =SUMPRODUCT((D2:D6="Minuman")*B2:B6*C2:C6)/SUMPRODUCT(B2:B6,C2:C6)'],
      explain: '491.000 / 677.000 ≈ 72,5%.'
    }),
    q({
      title: 'Nilai BENAR dan SALAH dalam perhitungan',
      q: 'Di dalam SUMPRODUCT, pernyataan `(B2:B6>=10)` menghasilkan BENAR atau SALAH. Saat dikalikan dengan angka, BENAR dan SALAH diperlakukan sebagai...',
      options: ['BENAR = 10, SALAH = 0', 'BENAR = 1, SALAH = 0', 'BENAR = 0, SALAH = 1', 'Keduanya menghasilkan error'],
      answer: 1,
      explain: 'Dalam perhitungan, BENAR menjadi **1** dan SALAH menjadi **0**. Itulah sebabnya perkalian dengan syarat dapat menyaring baris.'
    })
  ]
};

const arrayDinamis = {
  id: 'array-dinamis',
  level: 4,
  icon: 'waves',
  title: 'Array Dinamis',
  tagline: 'Saring, urutkan, dan buat daftar otomatis.',
  why: 'Dahulu, mengurutkan, menyaring, dan membuat daftar unik memerlukan menu atau rumus yang rumit. Dengan array dinamis, satu rumus menghasilkan daftar lengkap yang ikut diperbarui saat data berubah.',
  minutes: 18,
  lessons: [
    {
      title: 'Satu rumus, banyak hasil',
      body: [
        analogy('Bayangkan air yang dituang ke selokan kosong: airnya mengalir mengisi seluruh jalur yang dilaluinya. Rumus array dinamis bekerja serupa: ditulis sekali di satu sel, hasilnya **tumpah (spill)** ke sel kosong di bawah atau di sampingnya.'),
        steps(
          'Tulis rumus di **sel pertama** saja. Sel-sel di sekelilingnya terisi otomatis.',
          'Jika data sumber berubah, daftar hasil ikut berubah.',
          'Jika ada sel di jalur tumpahan yang sudah terisi, Excel menampilkan **#SPILL!**. Bersihkan sel penghalangnya.'
        ),
        warn('Fitur ini ada di Excel 2021 dan Microsoft 365. Di Excel 2019 ke bawah, FILTER, SORT, dan UNIQUE tidak tersedia.')
      ]
    },
    {
      title: 'FILTER: menyaring baris',
      body: [
        syntax('=FILTER(data, syarat, [jika_kosong])', [['data', 'Tabel atau kolom yang diambil'], ['syarat', 'Pertanyaan benar/salah per baris, misalnya B2:B11="Jakarta"'], ['jika_kosong', 'Teks jika tidak ada yang cocok (opsional)']]),
        demo({
          rows: [['Sales', 'Wilayah'], ['Andi', 'Jakarta'], ['Budi', 'Bandung'], ['Citra', 'Jakarta'], ['Hasil:', '']],
          cell: 'A6',
          formula: '=FILTER(A2:A4,B2:B4="Jakarta")',
          caption: 'Hanya Andi dan Citra yang wilayahnya Jakarta. Hasil mengalir ke bawah.'
        })
      ]
    },
    {
      title: 'SORT, UNIQUE, SEQUENCE, dan kombinasinya',
      body: [
        steps(
          '`SORT(data, kolom_urut, arah)` : mengurutkan. Arah `1` naik, `-1` turun.',
          '`UNIQUE(data)` : daftar nilai unik tanpa duplikat.',
          '`SEQUENCE(baris, kolom, mulai, kenaikan)` : membuat deret angka.'
        ),
        p('Kekuatan sebenarnya muncul saat **digabung**:'),
        steps(
          '`=SORT(FILTER(...), 1, -1)` : saring lalu urutkan dari terbesar.',
          '`=COUNTA(UNIQUE(range))` : berapa nilai unik.',
          '`=SUM(FILTER(...))` : jumlahkan hasil saringan.'
        )
      ]
    }
  ],
  exercises: [
    f({
      title: 'Saring seluruh baris Jakarta',
      task: 'Di sel **G2**, tampilkan **semua kolom** pada baris yang wilayahnya **Jakarta**. Hasilnya akan tumpah ke bawah dan ke samping.',
      sheets: [sheet('Order', orderRows(), { E: 'rp' })],
      target: 'G2',
      expect: [
        ['Andi', 'Jakarta', 'Laptop', 2, 20000000],
        ['Citra', 'Jakarta', 'Mouse', 10, 1500000],
        ['Andi', 'Jakarta', 'Mouse', 5, 750000],
        ['Citra', 'Jakarta', 'Laptop', 1, 10000000]
      ],
      solution: '=FILTER(A2:E11,B2:B11="Jakarta")',
      mustUse: ['FILTER'],
      hints: ['Gunakan fungsi yang menyaring baris berdasarkan syarat.', 'FILTER(seluruh tabel, syarat per baris).', 'Tulis: =FILTER(A2:E11,B2:B11="Jakarta")'],
      parts: [['A2:E11', 'Seluruh data yang ditampilkan'], ['B2:B11="Jakarta"', 'Hanya baris yang wilayahnya Jakarta']],
      explain: 'Empat baris Jakarta tampil lengkap dengan semua kolomnya, dan daftar akan ikut berubah jika data sumber diubah.'
    }),
    f({
      title: 'Jika tidak ada yang cocok',
      task: 'Di sel **G2**, saring baris wilayah **Medan** (tidak ada di data). Jika kosong, tampilkan teks **"Tidak ada data"**.',
      sheets: [sheet('Order', orderRows(), { E: 'rp' })],
      target: 'G2',
      expect: 'Tidak ada data',
      solution: '=FILTER(A2:E11,B2:B11="Medan","Tidak ada data")',
      mustUse: ['FILTER'],
      hints: ['Tanpa argumen ketiga, FILTER menghasilkan error #CALC! saat tidak ada yang cocok.', 'Argumen ketiga adalah teks pengganti.', 'Tulis: =FILTER(A2:E11,B2:B11="Medan","Tidak ada data")'],
      explain: 'Selalu sediakan argumen ketiga pada laporan yang datanya dapat kosong, agar pembaca tidak melihat pesan error.'
    }),
    f({
      title: 'Transaksi dengan omzet besar',
      task: 'Di sel **G2**, tampilkan **daftar nama sales** (kolom A) pada transaksi yang omzetnya **minimal Rp 10.000.000**.',
      sheets: [sheet('Order', orderRows(), { E: 'rp' })],
      target: 'G2',
      expect: [['Andi'], ['Budi'], ['Dedi'], ['Citra'], ['Dedi']],
      solution: '=FILTER(A2:A11,E2:E11>=10000000)',
      mustUse: ['FILTER'],
      hints: ['Yang ditampilkan hanya kolom nama, bukan seluruh tabel.', 'Syaratnya menggunakan kolom omzet (E).', 'Tulis: =FILTER(A2:A11,E2:E11>=10000000)'],
      explain: 'Kolom yang ditampilkan dan kolom yang digunakan untuk syarat tidak harus sama.'
    }),
    f({
      title: 'Daftar wilayah unik',
      task: 'Di sel **G2**, buat **daftar wilayah tanpa duplikat** dari B2:B11.',
      sheets: [sheet('Order', orderRows(), { E: 'rp' })],
      target: 'G2',
      expect: [['Jakarta'], ['Bandung'], ['Surabaya']],
      solution: '=UNIQUE(B2:B11)',
      mustUse: ['UNIQUE'],
      hints: ['Anda ingin menghilangkan nilai yang berulang.', 'UNIQUE(range).', 'Tulis: =UNIQUE(B2:B11)'],
      explain: 'UNIQUE mempertahankan urutan kemunculan pertama: Jakarta, Bandung, lalu Surabaya.'
    }),
    f({
      title: 'Urutkan omzet dari terbesar',
      task: 'Di sel **G2**, tampilkan semua nilai omzet (E2:E11) **terurut dari terbesar ke terkecil**.',
      sheets: [sheet('Order', orderRows(), { E: 'rp' })],
      target: 'G2',
      expect: [[30000000], [20000000], [12000000], [10000000], [10000000], [6000000], [3000000], [1500000], [1200000], [750000]],
      solution: '=SORT(E2:E11,1,-1)',
      mustUse: ['SORT', 'SORTBY'],
      hints: ['Gunakan fungsi pengurutan.', 'SORT(range, kolom_urut, arah). Arah -1 berarti menurun.', 'Tulis: =SORT(E2:E11,1,-1)'],
      explain: 'Angka -1 membalik urutan dari kecil-ke-besar menjadi besar-ke-kecil.'
    }),
    f({
      title: 'Saring lalu urutkan',
      task: 'Di sel **G2**, tampilkan omzet transaksi **Jakarta saja**, **terurut dari terbesar**. Gabungkan FILTER dan SORT.',
      sheets: [sheet('Order', orderRows(), { E: 'rp' })],
      target: 'G2',
      expect: [[20000000], [10000000], [1500000], [750000]],
      solution: '=SORT(FILTER(E2:E11,B2:B11="Jakarta"),1,-1)',
      mustUse: ['SORT', 'SORTBY'],
      hints: ['Kerjakan dua langkah: pertama saring, kedua urutkan hasil saringannya.', 'Letakkan FILTER di dalam SORT.', 'Tulis: =SORT(FILTER(E2:E11,B2:B11="Jakarta"),1,-1)'],
      parts: [['FILTER(E2:E11, B2:B11="Jakarta")', 'Ambil omzet baris Jakarta'], ['SORT(..., 1, -1)', 'urutkan dari terbesar']],
      explain: 'Hasil FILTER langsung menjadi bahan SORT. Seperti inilah array dinamis dikombinasikan menjadi satu rumus yang kuat.'
    }),
    f({
      title: 'Jumlah wilayah yang berbeda',
      task: 'Di sel **G2**, hitung **berapa wilayah berbeda** yang ada di B2:B11.',
      sheets: [sheet('Order', orderRows(), { E: 'rp' })],
      target: 'G2',
      expect: 3,
      solution: '=COUNTA(UNIQUE(B2:B11))',
      alt: ['=ROWS(UNIQUE(B2:B11))'],
      hints: ['Buat daftar unik terlebih dahulu, lalu hitung isinya.', 'COUNTA menghitung isi daftar yang dihasilkan UNIQUE.', 'Tulis: =COUNTA(UNIQUE(B2:B11))'],
      explain: 'Hasil UNIQUE dapat langsung digunakan oleh fungsi lain, di sini untuk menghitung ukurannya.'
    }),
    f({
      title: 'Total omzet Jakarta',
      task: 'Di sel **G2**, jumlahkan omzet transaksi **Jakarta** menggunakan kombinasi SUM dan FILTER.',
      sheets: [sheet('Order', orderRows(), { E: 'rp' })],
      target: 'G2',
      resultFmt: 'rp',
      expect: 32250000,
      solution: '=SUM(FILTER(E2:E11,B2:B11="Jakarta"))',
      mustUse: ['FILTER'],
      hints: ['FILTER menghasilkan daftar, dan SUM dapat menjumlahkan daftar.', 'Letakkan FILTER di dalam SUM.', 'Tulis: =SUM(FILTER(E2:E11,B2:B11="Jakarta"))'],
      explain: '20.000.000 + 1.500.000 + 750.000 + 10.000.000 = 32.250.000.'
    }),
    f({
      title: 'Deret angka otomatis',
      story: 'Membuat nomor urut secara manual memakan waktu.',
      task: 'Di sel **A2**, buat **5 angka** yang dimulai dari **10** dan bertambah **10** setiap barisnya (10, 20, 30, 40, 50).',
      sheets: [sheet('Deret', [['Deret angka'], [null], [null], [null], [null], [null]])],
      target: 'A2',
      allowNoRef: true,
      expect: [[10], [20], [30], [40], [50]],
      solution: '=SEQUENCE(5,1,10,10)',
      mustUse: ['SEQUENCE'],
      hints: ['Ada fungsi yang khusus membuat deret angka.', 'SEQUENCE(jumlah baris, jumlah kolom, angka mulai, kenaikan).', 'Tulis: =SEQUENCE(5,1,10,10)'],
      explain: 'SEQUENCE sangat berguna untuk nomor urut, kalender otomatis, dan sebagai bahan rumus lain.'
    }),
    q({
      title: 'Arti #SPILL!',
      q: 'Anda menulis `=UNIQUE(A2:A20)` di sel D2, tetapi sel D5 sudah berisi data lain. Excel menampilkan `#SPILL!`. Artinya...',
      options: ['Fungsi UNIQUE salah ketik', 'Hasil rumus tidak dapat mengalir karena ada sel yang terisi menghalangi', 'Datanya terlalu banyak', 'Rumus harus ditulis ulang di sel kosong lain'],
      answer: 1,
      explain: 'Hasil array dinamis memerlukan ruang kosong untuk tumpah. Kosongkan sel penghalang (D5), dan hasilnya langsung muncul.'
    })
  ]
};

const switchChoose = {
  id: 'switch-choose-let',
  level: 4,
  icon: 'list',
  title: 'SWITCH, CHOOSE, dan LET',
  tagline: 'Rumus lebih ringkas dengan SWITCH, CHOOSE, dan LET.',
  why: 'IF bersarang yang panjang sulit dibaca dan dipelihara. SWITCH dan CHOOSE menyederhanakannya untuk kasus tertentu, sedangkan LET memberi nama pada bagian perhitungan agar rumus tidak berulang.',
  minutes: 14,
  lessons: [
    {
      title: 'SWITCH: mengubah kode menjadi nama',
      body: [
        analogy('Cara kerjanya seperti menu pilihan angka pada layanan telepon: "Tekan 1 untuk Baru, 2 untuk Proses, 3 untuk Selesai". SWITCH mencocokkan satu nilai dengan daftar pilihan.'),
        syntax('=SWITCH(nilai, cocok1, hasil1, cocok2, hasil2, ..., [lainnya])', [['nilai', 'Yang diperiksa'], ['cocok, hasil', 'Pasangan: jika nilai sama dengan cocok, hasilnya adalah hasil'], ['lainnya', 'Nilai bawaan jika tidak ada yang cocok']]),
        demo({
          rows: [['Kode', 'Status'], [2, '']],
          cell: 'B2',
          formula: '=SWITCH(A2,1,"Baru",2,"Proses",3,"Selesai","Tidak dikenal")',
          caption: 'Kode 2 cocok dengan pasangan kedua, jadi hasilnya "Proses".'
        }),
        tip('SWITCH hanya membandingkan **kesamaan**. Untuk rentang ("lebih dari 80"), tetap gunakan IFS atau IF.')
      ]
    },
    {
      title: 'CHOOSE: memilih berdasarkan nomor urut',
      body: [
        syntax('=CHOOSE(nomor, pilihan1, pilihan2, pilihan3, ...)', [['nomor', '1 untuk pilihan pertama, 2 untuk kedua, dst'], ['pilihan', 'Daftar hasil yang mungkin']]),
        demo({
          rows: [['Hari ke-', 'Nama'], [3, '']],
          cell: 'B2',
          formula: '=CHOOSE(A2,"Senin","Selasa","Rabu","Kamis","Jumat")',
          caption: 'Nomor 3 memilih pilihan ketiga: "Rabu".'
        }),
        p('CHOOSE sangat nyaman dikombinasikan dengan fungsi yang menghasilkan nomor, seperti `WEEKDAY` atau `MONTH`.')
      ]
    },
    {
      title: 'LET: memberi nama pada bagian perhitungan',
      body: [
        analogy('Dalam percakapan, Anda menyebut "Budi" untuk orang yang sama berulang kali, bukan menjelaskan ciri-cirinya setiap saat. LET memberi nama pada suatu perhitungan agar dapat digunakan ulang.'),
        syntax('=LET(nama1, nilai1, nama2, nilai2, ..., hasil)', [['nama, nilai', 'Pasangan: nama yang Anda buat dan hitungannya'], ['hasil', 'Rumus akhir yang boleh menggunakan nama-nama tadi']]),
        demo({
          rows: [['Harga', 'Diskon', 'Bayar'], [200000, 0.15, '']],
          cell: 'C2',
          formula: '=LET(harga,A2,diskon,B2,harga*(1-diskon))',
          caption: 'Rumus terbaca seperti kalimat: harga dikali (1 − diskon).'
        }),
        warn('Nama LET tidak boleh menyerupai alamat sel (misalnya X1 atau AB12) dan tidak boleh memuat spasi. Gunakan nama deskriptif seperti total, harga, atau ppn.')
      ]
    }
  ],
  exercises: [
    f({
      title: 'Mengubah kode status menjadi teks',
      story: '1 = Baru, 2 = Proses, 3 = Selesai. Kode lain dianggap tidak dikenal.',
      task: 'Di sel **B2**, ubah kode status di A2 menjadi tulisannya menggunakan **SWITCH**. Salin sampai B5.',
      sheets: [sheet('Status', [['Kode', 'Status'], [1, ''], [2, ''], [3, ''], [9, '']])],
      target: 'B2',
      fillTo: 'B5',
      expect: [['Baru'], ['Proses'], ['Selesai'], ['Tidak dikenal']],
      solution: '=SWITCH(A2,1,"Baru",2,"Proses",3,"Selesai","Tidak dikenal")',
      mustUse: ['SWITCH'],
      hints: ['Cocokkan satu nilai (A2) dengan beberapa kemungkinan sekaligus.', 'Setelah semua pasangan, tambahkan satu nilai terakhir tanpa pasangan sebagai nilai bawaan.', 'Tulis: =SWITCH(A2,1,"Baru",2,"Proses",3,"Selesai","Tidak dikenal")'],
      explain: 'Nilai terakhir yang tidak berpasangan digunakan bila tidak ada yang cocok. Tanpa itu, kode 9 menghasilkan #N/A.'
    }),
    f({
      title: 'Singkatan kota',
      task: 'Di sel **B2**, ubah singkatan kota di A2 menjadi nama lengkap: JKT = Jakarta, BDG = Bandung, SBY = Surabaya, lainnya "Kota lain". Salin sampai B4.',
      sheets: [sheet('Kota', [['Kode', 'Kota'], ['JKT', ''], ['BDG', ''], ['MLG', '']])],
      target: 'B2',
      fillTo: 'B4',
      expect: [['Jakarta'], ['Bandung'], ['Kota lain']],
      solution: '=SWITCH(A2,"JKT","Jakarta","BDG","Bandung","SBY","Surabaya","Kota lain")',
      mustUse: ['SWITCH'],
      hints: ['SWITCH juga dapat membandingkan teks.', 'Tiga pasangan, ditambah satu nilai bawaan.', 'Tulis: =SWITCH(A2,"JKT","Jakarta","BDG","Bandung","SBY","Surabaya","Kota lain")'],
      explain: 'MLG tidak ada di daftar, sehingga hasilnya adalah nilai bawaan "Kota lain".'
    }),
    f({
      title: 'Mengubah bulan menjadi kuartal',
      story: 'Kuartal ditentukan dengan membulatkan ke atas hasil bagi bulan dengan 3. Bulan 1 sampai 3 = Q1, 4 sampai 6 = Q2, 7 sampai 9 = Q3, 10 sampai 12 = Q4.',
      task: 'Di sel **B2**, ubah nomor bulan di A2 menjadi "Q1" sampai "Q4" menggunakan **CHOOSE**. Salin sampai B5.',
      sheets: [sheet('Kuartal', [['Bulan', 'Kuartal'], [2, ''], [5, ''], [9, ''], [12, '']])],
      target: 'B2',
      fillTo: 'B5',
      expect: [['Q1'], ['Q2'], ['Q3'], ['Q4']],
      solution: '=CHOOSE(ROUNDUP(A2/3,0),"Q1","Q2","Q3","Q4")',
      mustUse: ['CHOOSE'],
      hints: ['CHOOSE memerlukan nomor 1 sampai 4. Ubah bulan menjadi nomor kuartal terlebih dahulu.', 'Bulan ÷ 3, dibulatkan ke atas, menghasilkan nomor kuartal.', 'Tulis: =CHOOSE(ROUNDUP(A2/3,0),"Q1","Q2","Q3","Q4")'],
      explain: 'Bulan 5: 5/3 = 1,67, dibulatkan ke atas menjadi 2, jadi pilihan kedua "Q2".'
    }),
    f({
      title: 'Singkatan hari dari tanggal',
      story: 'WEEKDAY(tanggal, 2) memberi nomor hari dengan Senin = 1 sampai Minggu = 7.',
      task: 'Di sel **B2**, tampilkan singkatan hari (Sen, Sel, Rab, Kam, Jum, Sab, Min) untuk tanggal di A2 menggunakan CHOOSE dan WEEKDAY.',
      sheets: [sheet('Hari', [['Tanggal', 'Hari'], [D('2025-06-15'), '']], { A: 'date' })],
      target: 'B2',
      expect: 'Min',
      solution: '=CHOOSE(WEEKDAY(A2,2),"Sen","Sel","Rab","Kam","Jum","Sab","Min")',
      mustUse: ['CHOOSE'],
      hints: ['WEEKDAY dengan tipe 2 menghasilkan nomor 1 sampai 7 mulai Senin.', 'Hasil WEEKDAY menjadi nomor pilihan di CHOOSE.', 'Tulis: =CHOOSE(WEEKDAY(A2,2),"Sen","Sel","Rab","Kam","Jum","Sab","Min")'],
      explain: '15 Juni 2025 adalah hari Minggu, WEEKDAY(...,2) = 7, jadi pilihan ketujuh "Min".'
    }),
    f({
      title: 'Harga setelah diskon dengan LET',
      task: 'Di sel **C2**, hitung harga setelah diskon menggunakan **LET**: beri nama pada harga (A2) dan diskon (B2), lalu hitung `harga*(1-diskon)`.',
      sheets: [sheet('Diskon', [['Harga', 'Diskon', 'Bayar'], [200000, 0.15, '']], { A: 'rp', B: 'pct', C: 'rp' })],
      target: 'C2',
      resultFmt: 'rp',
      expect: 170000,
      solution: '=LET(harga,A2,diskon,B2,harga*(1-diskon))',
      mustUse: ['LET'],
      hints: ['LET dimulai dengan pasangan nama dan nilai. Hasil akhir ada di argumen paling belakang.', 'Dua pasangan: harga dengan A2, diskon dengan B2. Lalu rumus akhirnya.', 'Tulis: =LET(harga,A2,diskon,B2,harga*(1-diskon))'],
      explain: 'Rumus menjadi mudah dibaca seperti sebuah kalimat. Manfaat ini semakin terasa pada rumus yang panjang.'
    }),
    f({
      title: 'Hindari menulis hitungan dua kali',
      story: 'Total belanja digunakan dua kali: untuk menghitung PPN 11% dan untuk dijumlahkan di akhir.',
      task: 'Di sel **C2**, hitung total bayar = total + PPN 11%, dengan total = qty (A2) × harga (B2). Gunakan LET agar "total" hanya dihitung sekali.',
      sheets: [sheet('PPN', [['Qty', 'Harga', 'Total bayar'], [3, 150000, '']], { B: 'rp', C: 'rp' })],
      target: 'C2',
      resultFmt: 'rp',
      expect: 499500,
      solution: '=LET(total,A2*B2,ppn,total*0.11,total+ppn)',
      alt: ['=LET(total,A2*B2,total*1.11)'],
      mustUse: ['LET'],
      hints: ['Beri nama pada total, lalu pada PPN yang bergantung pada total.', 'Nama yang sudah dibuat boleh digunakan di pasangan berikutnya.', 'Tulis: =LET(total,A2*B2,ppn,total*0.11,total+ppn)'],
      explain: '450.000 + 49.500 = 499.500. LET juga mempercepat hitungan karena total tidak dihitung ulang.'
    }),
    q({
      title: 'Memilih antara SWITCH dan IFS',
      q: 'Anda ingin mengubah nilai ujian (misalnya 87) menjadi huruf A/B/C berdasarkan **rentang** nilai. Pilih...',
      options: ['SWITCH, karena lebih ringkas', 'IFS atau IF bersarang, karena butuh perbandingan rentang', 'CHOOSE, karena ada banyak pilihan', 'LET, karena memberi nama'],
      answer: 1,
      explain: 'SWITCH hanya mengecek **kesamaan** (apakah sama dengan 87?). Untuk rentang (>= 85), gunakan IFS atau IF bersarang.'
    }),
    q({
      title: 'Manfaat LET',
      q: 'Manakah yang BUKAN manfaat utama dari fungsi LET?',
      options: ['Rumus lebih mudah dibaca', 'Hitungan yang sama tidak perlu ditulis berulang', 'Mengubah angka menjadi huruf besar', 'Dapat mempercepat perhitungan rumus panjang'],
      answer: 2,
      explain: 'LET tidak mengubah huruf (itu tugas UPPER). LET digunakan untuk memberi nama pada hitungan agar rumus lebih rapi dan efisien.'
    })
  ]
};

const bersihkanData = {
  id: 'bersihkan-data',
  level: 4,
  icon: 'sparkles',
  title: 'Pembersihan Data',
  tagline: 'Rapikan data agar siap dianalisis.',
  why: 'Sebagian besar waktu analisis data dihabiskan untuk membersihkan data. Pengguna Excel yang andal tahu cara merapikannya dengan cepat dan aman.',
  minutes: 16,
  lessons: [
    {
      title: 'Masalah data yang paling sering ditemui',
      body: [
        steps(
          '**Spasi berlebih** di awal, akhir, atau tengah teks: gunakan TRIM',
          '**Huruf besar-kecil acak**: gunakan PROPER, UPPER, LOWER',
          '**Angka tersimpan sebagai teks** ("Rp 1.500.000"): gunakan SUBSTITUTE + VALUE',
          '**Format campur** pada nomor telepon dan tanggal: gunakan SUBSTITUTE bertingkat',
          '**Data duplikat**: gunakan COUNTIF atau UNIQUE'
        ),
        warn('Jangan menimpa data asli. Bersihkan data di **kolom baru** dan simpan data mentah apa adanya. Jika terjadi kesalahan, data aslinya masih tersedia.')
      ]
    },
    {
      title: 'Menggabungkan beberapa fungsi pembersih',
      body: [
        p('Fungsi pembersih dapat **digabungkan**: hasil satu fungsi menjadi masukan bagi fungsi berikutnya. Excel mengerjakannya dari bagian terdalam ke luar.'),
        demo({
          rows: [['Mentah', '  sITI   aMINAH '], ['Bersih', '']],
          cell: 'B2',
          formula: '=PROPER(TRIM(B1))',
          caption: 'TRIM merapikan spasi, lalu PROPER merapikan huruf.'
        }),
        demo({
          rows: [['Mentah', 'Rp 1.500.000'], ['Angka', '']],
          cell: 'B2',
          formula: '=VALUE(SUBSTITUTE(SUBSTITUTE(B1,"Rp ",""),".",""))',
          caption: 'Hapus "Rp ", hapus titik pemisah ribuan, lalu ubah teks menjadi angka yang dapat dihitung.'
        }),
        tip('Setelah rumus pembersih selesai, salin hasilnya dan tempel sebagai **Values** (Ctrl + Alt + V, lalu pilih Values) agar tidak lagi bergantung pada kolom mentah.')
      ]
    }
  ],
  exercises: [
    f({
      title: 'Merapikan nama yang tidak konsisten',
      task: 'Di sel **B2**, rapikan nama di A2: hilangkan spasi berlebih **dan** ubah menjadi huruf awal besar.',
      sheets: [sheet('Nama', [['Mentah', 'Rapi'], ['  sITI   aMINAH ', '']])],
      target: 'B2',
      expect: 'Siti Aminah',
      solution: '=PROPER(TRIM(A2))',
      alt: ['=TRIM(PROPER(A2))'],
      hints: ['Dua masalah: spasi dan huruf besar-kecil.', 'Gunakan dua fungsi yang saling bersarang.', 'Tulis: =PROPER(TRIM(A2))'],
      explain: 'Urutan kedua fungsi ini boleh ditukar. Hasilnya sama.'
    }),
    f({
      title: 'Mengubah teks rupiah menjadi angka',
      story: 'Data hasil ekspor sistem berbentuk teks "Rp 1.500.000", sehingga tidak dapat dijumlahkan.',
      task: 'Di sel **B2**, ubah teks di A2 menjadi **angka 1500000**.',
      sheets: [sheet('Harga', [['Teks', 'Angka'], ['Rp 1.500.000', '']])],
      target: 'B2',
      expect: 1500000,
      solution: '=VALUE(SUBSTITUTE(SUBSTITUTE(A2,"Rp ",""),".",""))',
      mustUse: ['VALUE', 'SUBSTITUTE'],
      hints: ['Buang bagian yang bukan angka: awalan "Rp " dan titik pemisah ribuan.', 'Dua SUBSTITUTE bersarang, lalu gunakan VALUE.', 'Tulis: =VALUE(SUBSTITUTE(SUBSTITUTE(A2,"Rp ",""),".",""))'],
      parts: [['SUBSTITUTE(A2,"Rp ","")', 'Hapus awalan Rp'], ['SUBSTITUTE(...,".","")', 'Hapus titik pemisah ribuan'], ['VALUE(...)', 'Ubah teks "1500000" menjadi angka']],
      explain: 'Setelah menjadi angka, nilainya dapat dijumlahkan, dirata-rata, dan diformat sesuai kebutuhan.'
    }),
    f({
      title: 'Mengambil nama kota dari alamat',
      task: 'Di sel **B2**, ambil **kota** (bagian sebelum tanda " - ") dari teks di A2.',
      sheets: [sheet('Alamat', [['Lokasi', 'Kota'], ['Jakarta - Selatan', '']])],
      target: 'B2',
      expect: 'Jakarta',
      solution: '=TRIM(LEFT(A2,FIND("-",A2)-1))',
      alt: ['=TEXTBEFORE(A2," - ")', '=LEFT(A2,FIND(" - ",A2)-1)'],
      hints: ['Cari posisi tanda "-", lalu ambil teks sebelumnya.', 'Spasi di ujung perlu dibuang dengan TRIM.', 'Tulis: =TRIM(LEFT(A2,FIND("-",A2)-1))'],
      explain: 'FIND mencari posisi pembatas, LEFT memotong, TRIM merapikan sisa spasi.'
    }),
    f({
      title: 'Menyeragamkan nomor telepon',
      story: 'Nomor masuk dalam format +62 812-3456-7890. Standar internal: 081234567890.',
      task: 'Di sel **B2**, ubah nomor di A2 ke format standar: ganti awalan "+62 " menjadi "0", lalu hapus semua tanda "-".',
      sheets: [sheet('Telepon', [['Mentah', 'Standar'], ['+62 812-3456-7890', '']])],
      target: 'B2',
      expect: '081234567890',
      solution: '=SUBSTITUTE(SUBSTITUTE(A2,"+62 ","0"),"-","")',
      mustUse: ['SUBSTITUTE'],
      hints: ['Dua penggantian berturut-turut.', 'SUBSTITUTE pertama: "+62 " menjadi "0". Yang kedua: "-" menjadi kosong.', 'Tulis: =SUBSTITUTE(SUBSTITUTE(A2,"+62 ","0"),"-","")'],
      explain: 'SUBSTITUTE dapat bersarang berkali-kali untuk membereskan banyak variasi format sekaligus.'
    }),
    f({
      title: 'Teks yang tercampur dengan angka',
      story: 'Kolom hasil impor berisi angka, tetapi sesekali terselip teks seperti "abc". Teks itu harus dianggap 0.',
      task: 'Di sel **B2**, ubah isi A2 menjadi angka. Jika tidak dapat diubah (teks biasa), hasilkan **0**. Salin sampai B4.',
      sheets: [sheet('Impor', [['Mentah', 'Angka'], ['12', ''], ['abc', ''], ['30', '']])],
      target: 'B2',
      fillTo: 'B4',
      expect: [[12], [0], [30]],
      solution: '=IFERROR(VALUE(A2),0)',
      mustUse: ['IFERROR'],
      hints: ['VALUE("abc") menghasilkan #VALUE!.', 'Gunakan IFERROR pada VALUE.', 'Tulis: =IFERROR(VALUE(A2),0)'],
      explain: 'IFERROR di sini tepat digunakan: Anda tahu persis error apa yang diharapkan dan sudah menentukan penanganannya.'
    }),
    f({
      title: 'Menandai data duplikat',
      story: 'Kode "KD-01" dan "KD-02" muncul lebih dari sekali.',
      task: 'Di sel **B2**, tulis **"Duplikat"** jika kode di A2 muncul lebih dari sekali dalam A2:A6, selain itu **"Unik"**. Salin sampai B6.',
      sheets: [sheet('Kode', [['Kode', 'Status'], ['KD-01', ''], ['KD-02', ''], ['KD-01', ''], ['KD-03', ''], ['KD-02', '']])],
      target: 'B2',
      fillTo: 'B6',
      expect: [['Duplikat'], ['Duplikat'], ['Duplikat'], ['Unik'], ['Duplikat']],
      solution: '=IF(COUNTIF($A$2:$A$6,A2)>1,"Duplikat","Unik")',
      shouldFail: ['=IF(COUNTIF(A2:A6,A2)>1,"Duplikat","Unik")'],
      mustUse: ['COUNTIF', 'COUNTIFS'],
      hints: ['Hitung berapa kali kode di baris ini muncul di seluruh daftar.', 'Jika hitungannya lebih dari 1, berarti duplikat. Kunci daftar dengan $.', 'Tulis: =IF(COUNTIF($A$2:$A$6,A2)>1,"Duplikat","Unik")'],
      explain: 'COUNTIF + IF adalah cara klasik menandai duplikat tanpa menghapus apa pun, sehingga Anda dapat meninjaunya terlebih dahulu.'
    }),
    f({
      title: 'Mengambil nomor dari teks',
      task: 'Di sel **B2**, ambil **nomor order** sebagai angka dari teks "Order #4521" di A2 (bagian setelah tanda #).',
      sheets: [sheet('Order', [['Teks', 'Nomor'], ['Order #4521', '']])],
      target: 'B2',
      expect: 4521,
      solution: '=VALUE(MID(A2,FIND("#",A2)+1,10))',
      alt: ['=VALUE(TEXTAFTER(A2,"#"))', '=VALUE(RIGHT(A2,4))'],
      hints: ['Cari posisi "#", lalu ambil semua teks sesudahnya.', 'MID menghasilkan teks. Gunakan VALUE agar hasilnya menjadi angka.', 'Tulis: =VALUE(MID(A2,FIND("#",A2)+1,10))'],
      explain: 'MID(..., 10) mengambil sampai maksimal 10 karakter, jadi cukup untuk nomor apa pun. VALUE mengubah "4521" menjadi angka 4521.'
    }),
    q({
      title: 'Prinsip utama pembersihan data',
      q: 'Manakah praktik yang **paling aman** saat membersihkan data?',
      options: ['Menimpa langsung data asli dengan hasil pembersihan', 'Membersihkan di kolom baru dan menyimpan data asli apa adanya', 'Menghapus baris yang terlihat aneh tanpa dicatat', 'Membersihkan manual sel per sel'],
      answer: 1,
      explain: 'Simpan data mentah. Bersihkan dengan rumus di kolom baru. Jika ada kesalahan, Anda dapat mengulang dari data asli, dan proses pembersihannya terdokumentasi lewat rumus.'
    })
  ]
};

export default [xlookup, sumproduct, arrayDinamis, switchChoose, bersihkanData];
