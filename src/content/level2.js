import { sheet, f, q, p, analogy, tip, warn, steps, syntax, demo } from './helpers.js';

// ============================================================
// LEVEL 2 - DASAR
// ============================================================

// Data penjualan yang digunakan beberapa soal COUNTIF / SUMIF
const penjualanRows = (extra = []) => [
  ['Produk', 'Kategori', 'Qty', 'Harga'],
  ['Kopi', 'Minuman', 10, 20000],
  ['Teh', 'Minuman', 5, 15000],
  ['Roti', 'Makanan', 8, 12000],
  ['Kue', 'Makanan', 3, 30000],
  ['Susu', 'Minuman', 12, 18000],
  ['Mie', 'Makanan', 15, 10000],
  ['Jus', 'Minuman', 7, 22000],
  ['Nasi', 'Makanan', 20, 15000],
  [null, null, null, null],
  ...extra
];

const pembulatan = {
  id: 'pembulatan',
  level: 2,
  icon: 'target',
  title: 'Pembulatan dan Fungsi Angka',
  tagline: 'Rapikan angka dengan ROUND, INT, MOD, dan ABS.',
  why: 'Harga, gaji, dan pajak hampir selalu perlu dibulatkan. Hasil perhitungan Excel sering memiliki banyak angka desimal (misalnya 33,333333), sehingga perlu dirapikan dengan benar.',
  minutes: 10,
  lessons: [
    {
      title: 'ROUND: membulatkan ke angka terdekat',
      body: [
        p('ROUND memerlukan dua informasi: **angka yang dibulatkan** dan **jumlah digit** yang ingin dipertahankan.'),
        syntax('=ROUND(angka, jumlah_digit)', [['angka', 'Angka (atau sel) yang dibulatkan'], ['jumlah_digit', '2 = dua desimal, 0 = bilangan bulat, -3 = ke ribuan terdekat']]),
        analogy('Jumlah digit menentukan "berapa angka yang dipertahankan di belakang koma". Angka positif mengarah ke kanan (desimal), sedangkan angka negatif mengarah ke kiri (puluhan, ratusan, ribuan).'),
        demo({
          rows: [['Angka', 15678.456], ['2 desimal', ''], ['Bulat', ''], ['Ribuan', '']],
          cell: 'B2',
          formula: '=ROUND(B1,2)',
          caption: '15678,456 dibulatkan ke 2 desimal menjadi 15678,46.'
        }),
        demo({
          rows: [['Angka', 15678.456], ['2 desimal', 15678.46], ['Bulat', ''], ['Ribuan', '']],
          cell: 'B4',
          formula: '=ROUND(B1,-3)',
          caption: 'Digit negatif membulatkan ke kiri: -3 artinya ke ribuan terdekat, jadi 16000.'
        })
      ]
    },
    {
      title: 'Pembulatan ke atas, ke bawah, dan sisa bagi',
      body: [
        steps(
          '`ROUNDUP` selalu membulatkan **ke atas** (menjauhi nol). Cocok untuk kebutuhan kardus, kursi, atau mobil.',
          '`ROUNDDOWN` selalu membulatkan **ke bawah** (mendekati nol).',
          '`INT` membuang desimal dan membulatkan ke bawah: INT(7,9) = 7.',
          '`MOD(angka, pembagi)` menghasilkan **sisa bagi**: MOD(10,3) = 1.',
          '`ABS` menghilangkan tanda minus: ABS(-5) = 5.'
        ),
        analogy('Contoh pemesanan kardus: 50 botol, satu kardus berisi 12 botol. 50 ÷ 12 = 4,17, padahal Anda tidak dapat membeli 4,17 kardus. Jumlah yang dibutuhkan adalah **5**, sehingga ROUNDUP yang digunakan.'),
        warn('ROUND(2,5) hasilnya 3, bukan 2. Excel membulatkan angka ".5" ke atas (menjauhi nol).')
      ]
    }
  ],
  exercises: [
    f({
      title: 'Bulatkan ke ratusan',
      story: 'Harga hasil perhitungan sering memiliki angka desimal yang panjang. Anda ingin membulatkannya ke ratusan terdekat.',
      task: 'Di sel **B3**, bulatkan harga di B2 ke **ratusan terdekat**.',
      sheets: [sheet('Harga', [['Keterangan', 'Nilai'], ['Harga hitungan', 15678], ['Harga bulat', '']], { B: 'rp' })],
      target: 'B3',
      resultFmt: 'rp',
      expect: 15700,
      solution: '=ROUND(B2,-2)',
      mustUse: ['ROUND'],
      hints: ['Gunakan fungsi untuk membulatkan ke angka terdekat.', 'Untuk membulatkan ke ratusan, jumlah digitnya adalah -2 (dua langkah ke kiri dari koma).', 'Tulis: =ROUND(B2,-2)'],
      parts: [['ROUND', 'Bulatkan ke terdekat'], ['B2', 'angka yang dibulatkan'], ['-2', 'dua digit ke kiri = ratusan']],
      explain: '15.678: dua digit terakhirnya, 78, lebih dari 50, sehingga dibulatkan naik menjadi 15.700.'
    }),
    f({
      title: 'Dua angka di belakang koma',
      story: 'Rata-rata nilai ditampilkan dengan dua desimal di rapor.',
      task: 'Di sel **B3**, bulatkan nilai di B2 menjadi **dua desimal**.',
      sheets: [sheet('Rapor', [['Keterangan', 'Nilai'], ['Rata-rata mentah', 78.4567], ['Rata-rata rapor', '']])],
      target: 'B3',
      expect: 78.46,
      solution: '=ROUND(B2,2)',
      mustUse: ['ROUND'],
      hints: ['Fungsi yang sama untuk membulatkan ke terdekat.', 'Dua desimal artinya jumlah digit = 2.', 'Tulis: =ROUND(B2,2)'],
      explain: '78,4567: digit ketiga adalah 6 (di atas 5), sehingga digit kedua naik dan hasilnya 78,46.'
    }),
    f({
      title: 'Berapa kardus yang dibutuhkan?',
      story: 'Satu kardus berisi 12 botol. Pesanan masuk 50 botol.',
      task: 'Di sel **B4**, hitung **jumlah kardus** yang harus disiapkan (kardus tidak boleh kurang).',
      sheets: [sheet('Kardus', [['Keterangan', 'Nilai'], ['Pesanan (botol)', 50], ['Isi per kardus', 12], ['Kardus dibutuhkan', '']])],
      target: 'B4',
      expect: 5,
      solution: '=ROUNDUP(B2/B3,0)',
      mustUse: ['ROUNDUP'],
      wrongs: [{ value: 4, msg: 'Pembulatan biasa menghasilkan 4, padahal 2 botol sisanya tidak muat. Diperlukan pembulatan yang selalu ke atas.' }],
      hints: ['Bagi pesanan dengan isi per kardus. Hasilnya berupa desimal.', 'Kardus tidak boleh kurang, jadi bulatkan selalu ke atas.', 'Tulis: =ROUNDUP(B2/B3,0)'],
      parts: [['B2/B3', '50 ÷ 12 = 4,17 kardus'], ['ROUNDUP(..., 0)', 'bulatkan ke atas menjadi bilangan bulat']],
      explain: 'Gunakan ROUNDUP ketika kekurangan tidak dapat diterima, misalnya untuk kardus, kursi, armada, atau tiket.'
    }),
    f({
      title: 'Bulatkan gaji ke bawah',
      story: 'Perusahaan membayar gaji dalam kelipatan ribuan penuh. Sisanya diabaikan.',
      task: 'Di sel **B3**, bulatkan **ke bawah** gaji di B2 hingga ribuan.',
      sheets: [sheet('Gaji', [['Keterangan', 'Nilai'], ['Gaji hitungan', 4567890], ['Gaji dibayar', '']], { B: 'rp' })],
      target: 'B3',
      resultFmt: 'rp',
      expect: 4567000,
      solution: '=ROUNDDOWN(B2,-3)',
      mustUse: ['ROUNDDOWN'],
      hints: ['Pembulatan harus selalu ke bawah, sedekat apa pun nilainya dengan angka di atasnya.', 'ROUNDDOWN dengan jumlah digit -3 (ribuan).', 'Tulis: =ROUNDDOWN(B2,-3)'],
      explain: 'Sisa 890 dibuang. Hasil: Rp 4.567.000.'
    }),
    f({
      title: 'Jam kerja penuh',
      task: 'Di sel **B3**, ambil **jam penuhnya saja** (tanpa pecahan) dari jam kerja di B2.',
      sheets: [sheet('Jam Kerja', [['Keterangan', 'Nilai'], ['Jam kerja', 7.75], ['Jam penuh', '']])],
      target: 'B3',
      expect: 7,
      solution: '=INT(B2)',
      alt: ['=ROUNDDOWN(B2,0)', '=TRUNC(B2)'],
      hints: ['Bagian di belakang koma dibuang.', 'INT membulatkan ke bawah menjadi bilangan bulat.', 'Tulis: =INT(B2)'],
      explain: 'INT(7,75) = 7. Hati-hati dengan angka negatif: INT(-2,5) = -3 karena dibulatkan ke bawah (ke arah yang lebih kecil).'
    }),
    f({
      title: 'Sisa permen',
      story: 'Seorang guru membagikan permen secara merata kepada murid. Berapa sisanya?',
      task: 'Di sel **B3**, hitung **sisa permen** setelah 100 permen dibagi rata ke 7 anak (angkanya ada di B1 dan B2).',
      sheets: [sheet('Permen', [['Jumlah permen', 100], ['Jumlah anak', 7], ['Sisa permen', '']])],
      target: 'B3',
      expect: 2,
      solution: '=MOD(B1,B2)',
      mustUse: ['MOD'],
      hints: ['Yang dicari bukan hasil bagi, tetapi sisa bagi.', 'Fungsi MOD memberi sisa bagi: MOD(yang dibagi, pembagi).', 'Tulis: =MOD(B1,B2)'],
      parts: [['MOD', 'Sisa bagi'], ['B1', 'yang dibagi (100)'], ['B2', 'pembagi (7)']],
      explain: '100 = 14 × 7 + 2. Tiap anak mendapat 14 permen dan tersisa 2.'
    }),
    f({
      title: 'Selisih tanpa tanda minus',
      story: 'Auditor hanya memerlukan besar selisih antara target dan realisasi, bukan arahnya.',
      task: 'Di sel **C2**, hitung selisih antara target dan realisasi sebagai **angka positif**.',
      sheets: [sheet('Selisih', [['Target', 'Realisasi', 'Selisih'], [80, 92, '']])],
      target: 'C2',
      expect: 12,
      solution: '=ABS(A2-B2)',
      alt: ['=ABS(B2-A2)'],
      hints: ['A2-B2 menghasilkan -12 (negatif).', 'ABS membuang tanda minus.', 'Tulis: =ABS(A2-B2)'],
      explain: 'ABS = absolute value, nilai mutlak. Selalu positif, apa pun arah selisihnya.'
    }),
    f({
      title: 'Harga akhir dibulatkan',
      story: 'Kasir membulatkan total bayar (setelah PPN) ke ratusan rupiah terdekat.',
      task: 'Di sel **B4**, hitung total bayar = harga + PPN (tarif di B3), lalu **bulatkan ke ratusan terdekat**. Satu rumus saja.',
      sheets: [sheet('Kasir', [['Keterangan', 'Nilai'], ['Harga', 123456], ['PPN', 0.11], ['Total dibulatkan', '']], { B: 'int' })],
      target: 'B4',
      resultFmt: 'int',
      expect: 137000,
      solution: '=ROUND(B2*(1+B3),-2)',
      alt: ['=ROUND(B2+B2*B3,-2)'],
      hints: ['Hitung total dengan PPN terlebih dahulu: harga × (1 + PPN).', 'Gunakan fungsi pembulatan pada hasil perhitungan tersebut.', 'Tulis: =ROUND(B2*(1+B3),-2)'],
      explain: 'Fungsi dapat memuat perhitungan di dalamnya. 123.456 × 1,11 = 137.036,16 dan dibulatkan ke ratusan menjadi 137.000.'
    }),
    q({
      title: 'Arti angka negatif',
      q: 'Pada rumus `=ROUND(A1,-3)`, angka **-3** berarti...',
      options: ['Membulatkan sampai 3 desimal', 'Membulatkan ke ribuan terdekat', 'Mengurangi angka dengan 3', 'Membulatkan ke bawah 3 kali'],
      answer: 1,
      explain: 'Digit negatif menggeser pembulatan ke kiri koma. -1 = puluhan, -2 = ratusan, -3 = ribuan.'
    }),
    q({
      title: 'Hasil pembulatan',
      q: 'Berapa hasil `=ROUND(2.5, 0)` ?',
      options: ['2', '3', '2,5', '0'],
      answer: 1,
      explain: 'Excel membulatkan angka yang tepat di tengah (.5) menjauhi nol, jadi 2,5 menjadi **3**.'
    })
  ]
};

const ifDasar = {
  id: 'if',
  level: 2,
  icon: 'split',
  title: 'Fungsi IF untuk Pengambilan Keputusan',
  tagline: 'Hasil berbeda sesuai syarat dengan fungsi IF.',
  why: 'IF membuat lembar kerja mampu mengambil keputusan secara otomatis. Penentuan status kelulusan, bonus, diskon, hingga peringatan stok semuanya berawal dari fungsi ini.',
  minutes: 12,
  lessons: [
    {
      title: 'Struktur dasar fungsi IF',
      body: [
        analogy('Anda tentu pernah berpikir: "Jika hujan, saya membawa payung; jika tidak, saya menggunakan topi." Fungsi IF bekerja dengan logika yang sama.'),
        syntax('=IF(syarat, hasil_jika_benar, hasil_jika_salah)', [['syarat', 'Pertanyaan yang jawabannya BENAR atau SALAH, misalnya B2>=70'], ['hasil_jika_benar', 'Apa yang ditampilkan jika syarat terpenuhi'], ['hasil_jika_salah', 'Apa yang ditampilkan jika syarat tidak terpenuhi']]),
        demo({
          rows: [['Nama', 'Nilai', 'Status'], ['Ayu', 85, ''], ['Budi', 60, '']],
          cell: 'C2',
          formula: '=IF(B2>=70,"Lulus","Remedial")',
          caption: 'Nilai 85 memenuhi syarat >= 70, jadi hasilnya "Lulus".'
        }),
        demo({
          rows: [['Nama', 'Nilai', 'Status'], ['Ayu', 85, 'Lulus'], ['Budi', 60, '']],
          cell: 'C3',
          formula: '=IF(B3>=70,"Lulus","Remedial")',
          caption: 'Nilai 60 tidak memenuhi syarat, jadi hasilnya "Remedial".'
        })
      ]
    },
    {
      title: 'Operator pembanding',
      body: [
        p('Untuk menulis syarat, gunakan operator pembanding:'),
        steps(
          '`=` sama dengan, contoh `B2="Lunas"`',
          '`<>` tidak sama dengan, contoh `B2<>"Lunas"`',
          '`>` lebih besar, `<` lebih kecil',
          '`>=` lebih besar **atau sama dengan**, `<=` lebih kecil atau sama dengan'
        ),
        warn('**Teks harus diapit tanda kutip**: "Lulus". Tanpa tanda kutip, Excel menganggapnya sebagai nama dan menampilkan #NAME?. Angka tidak memerlukan tanda kutip.'),
        tip('Excel tidak membedakan huruf besar/kecil saat membandingkan teks: "lunas" sama dengan "LUNAS".')
      ]
    },
    {
      title: 'Hasil IF dapat berupa teks, angka, atau perhitungan',
      body: [
        p('Hasil IF dapat berupa teks, angka, atau perhitungan lain.'),
        demo({
          rows: [['Belanja', 'Ongkir'], [150000, ''], [80000, '']],
          fmt: { A: 'rp', B: 'rp' },
          cell: 'B2',
          formula: '=IF(A2>=100000,0,15000)',
          caption: 'Belanja Rp 150.000 sudah memenuhi syarat gratis ongkir, jadi ongkirnya 0.'
        })
      ]
    }
  ],
  exercises: [
    f({
      title: 'Lulus atau remedial',
      story: 'Batas lulus adalah nilai 70 (nilai 70 sudah lulus).',
      task: 'Di sel **C2**, tentukan status siswa: "Lulus" jika nilai >= 70, selain itu "Remedial". Rumus akan disalin sampai C5.',
      sheets: [sheet('Nilai', [['Nama', 'Nilai', 'Status'], ['Ayu', 82, ''], ['Budi', 65, ''], ['Citra', 70, ''], ['Dedi', 55, '']])],
      target: 'C2',
      fillTo: 'C5',
      expect: [['Lulus'], ['Remedial'], ['Lulus'], ['Remedial']],
      solution: '=IF(B2>=70,"Lulus","Remedial")',
      shouldFail: ['=IF(B2>70,"Lulus","Remedial")'],
      mustUse: ['IF'],
      hints: ['Tentukan syaratnya terlebih dahulu: nilai di B2 minimal 70.', 'Gunakan >= (lebih besar atau sama dengan) agar nilai tepat 70 ikut lulus.', 'Tulis: =IF(B2>=70,"Lulus","Remedial")'],
      parts: [['B2>=70', 'Syarat: nilai minimal 70'], ['"Lulus"', 'Hasil jika syarat benar'], ['"Remedial"', 'Hasil jika syarat salah']],
      explain: 'Citra bernilai tepat 70 dan harus lulus. Itu sebabnya digunakan >= (bukan >).'
    }),
    f({
      title: 'Bonus target',
      story: 'Sales yang mencapai atau melampaui target mendapat bonus Rp 500.000.',
      task: 'Di sel **D2**, isi bonus: **500000** jika penjualan (B) mencapai target (C), selain itu **0**. Salin sampai D4.',
      sheets: [sheet('Bonus', [['Sales', 'Penjualan', 'Target', 'Bonus'], ['Andi', 12000000, 10000000, ''], ['Budi', 9000000, 10000000, ''], ['Citra', 10000000, 10000000, '']], { B: 'rp', C: 'rp', D: 'rp' })],
      target: 'D2',
      fillTo: 'D4',
      resultFmt: 'rp',
      expect: [[500000], [0], [500000]],
      solution: '=IF(B2>=C2,500000,0)',
      mustUse: ['IF'],
      hints: ['Bandingkan penjualan (B2) dengan target (C2).', '"Mencapai" artinya lebih besar atau sama dengan.', 'Tulis: =IF(B2>=C2,500000,0)'],
      explain: 'Hasil IF di sini berupa angka, jadi tidak perlu tanda kutip. Pada IF, syarat dapat membandingkan dua sel sekaligus.'
    }),
    f({
      title: 'Peringatan stok',
      task: 'Di sel **C2**, tulis **"Habis"** jika stok di B2 sama dengan 0, selain itu tulis **"Tersedia"**. Salin sampai C5.',
      sheets: [sheet('Stok', [['Produk', 'Stok', 'Status'], ['Kopi', 5, ''], ['Teh', 0, ''], ['Susu', 12, ''], ['Gula', 0, '']])],
      target: 'C2',
      fillTo: 'C5',
      expect: [['Tersedia'], ['Habis'], ['Tersedia'], ['Habis']],
      solution: '=IF(B2=0,"Habis","Tersedia")',
      alt: ['=IF(B2>0,"Tersedia","Habis")'],
      mustUse: ['IF'],
      hints: ['Syaratnya: stok sama dengan 0.', 'Operator "sama dengan" untuk syarat cukup satu tanda =.', 'Tulis: =IF(B2=0,"Habis","Tersedia")'],
      explain: 'Di dalam IF, tanda = berarti "dibandingkan dengan", bukan "mulai rumus". Tanda = pembuka rumus hanya satu, di paling depan.'
    }),
    f({
      title: 'Membandingkan teks',
      story: 'Bagian keuangan ingin menandai transaksi yang belum lunas.',
      task: 'Di sel **C2**, tulis **"Selesai"** jika status di B2 adalah "Lunas", selain itu **"Tagih"**. Salin sampai C5.',
      sheets: [sheet('Tagihan', [['Pelanggan', 'Status', 'Tindakan'], ['PT Maju', 'Lunas', ''], ['CV Jaya', 'Belum', ''], ['Toko Sinar', 'Lunas', ''], ['UD Bersama', 'Belum', '']])],
      target: 'C2',
      fillTo: 'C5',
      expect: [['Selesai'], ['Tagih'], ['Selesai'], ['Tagih']],
      solution: '=IF(B2="Lunas","Selesai","Tagih")',
      alt: ['=IF(B2<>"Lunas","Tagih","Selesai")'],
      mustUse: ['IF'],
      hints: ['Teks yang dibandingkan harus diapit tanda kutip.', 'Syaratnya: B2="Lunas".', 'Tulis: =IF(B2="Lunas","Selesai","Tagih")'],
      explain: 'Membandingkan teks sama seperti angka, hanya saja teksnya wajib diapit kutip. Kedua cara (= atau <>) benar selama hasilnya tidak tertukar.'
    }),
    f({
      title: 'Gratis ongkos kirim',
      story: 'Toko online memberikan gratis ongkos kirim untuk belanja minimal Rp 100.000. Di bawah itu, ongkos kirimnya Rp 15.000.',
      task: 'Di sel **B2**, tentukan ongkos kirim untuk belanja di A2. Salin sampai B4.',
      sheets: [sheet('Ongkir', [['Belanja', 'Ongkir'], [150000, ''], [80000, ''], [100000, '']], { A: 'rp', B: 'rp' })],
      target: 'B2',
      fillTo: 'B4',
      resultFmt: 'rp',
      expect: [[0], [15000], [0]],
      solution: '=IF(A2>=100000,0,15000)',
      mustUse: ['IF'],
      shouldFail: ['=IF(A2>100000,0,15000)'],
      hints: ['Syarat: belanja minimal 100.000.', '"Minimal" berarti lebih besar atau sama dengan.', 'Tulis: =IF(A2>=100000,0,15000)'],
      explain: 'Belanja tepat Rp 100.000 harus mendapat gratis ongkos kirim. Kata "minimal" selalu berarti >=.'
    }),
    f({
      title: 'Harga member',
      story: 'Member mendapat diskon 10%, non-member membayar harga normal.',
      task: 'Di sel **D2**, hitung harga yang dibayar. Jika status (kolom C) adalah "Member", bayar 90% dari harga di B2; selain itu bayar harga penuh. Salin sampai D4.',
      sheets: [sheet('Member', [['Pelanggan', 'Harga', 'Status', 'Bayar'], ['Rina', 100000, 'Member', ''], ['Sari', 50000, 'Umum', ''], ['Tono', 200000, 'Member', '']], { B: 'rp', D: 'rp' })],
      target: 'D2',
      fillTo: 'D4',
      resultFmt: 'rp',
      expect: [[90000], [50000], [180000]],
      solution: '=IF(C2="Member",B2*0.9,B2)',
      alt: ['=IF(C2="Member",B2*(1-10%),B2)', '=IF(C2<>"Member",B2,B2*0.9)'],
      mustUse: ['IF'],
      hints: ['Syaratnya memeriksa teks di kolom C.', 'Hasil IF boleh berupa hitungan. Untuk member: harga dikali 0,9. Selain itu: harga biasa.', 'Tulis: =IF(C2="Member",B2*0.9,B2)'],
      explain: 'Hasil IF boleh berupa rumus lain, bukan hanya teks atau angka tetap.'
    }),
    q({
      title: 'Penyebab #NAME? pada rumus IF',
      q: 'Anda menulis `=IF(B2>=70,Lulus,"Remedial")` dan hasilnya `#NAME?`. Penyebabnya...',
      options: ['Fungsi IF salah ketik', 'Teks Lulus tidak diapit tanda kutip', 'Angka 70 harus menggunakan kutip', 'B2 tidak boleh digunakan di IF'],
      answer: 1,
      explain: 'Tanpa kutip, Excel menganggap `Lulus` sebagai nama (seperti nama fungsi atau nama range) dan tidak menemukannya. Teks di dalam rumus selalu ditulis dengan tanda kutip.',
      whyNot: ['IF sudah tertulis benar.', '', 'Angka tidak perlu kutip.', 'B2 dapat digunakan.']
    }),
    f({
      title: 'Perbaiki rumus IF',
      story: 'Rumus dari rekan kerja Anda menghasilkan #NAME?. Temukan masalahnya.',
      task: 'Perbaiki rumus ini di sel **C2** agar menampilkan status yang benar.',
      start: '=IF(B2>=70,Lulus,"Remedial")',
      sheets: [sheet('Nilai', [['Nama', 'Nilai', 'Status'], ['Ayu', 85, '']])],
      target: 'C2',
      expect: 'Lulus',
      solution: '=IF(B2>=70,"Lulus","Remedial")',
      hints: ['Lihat bagian yang menghasilkan teks: mana yang berbeda dari "Remedial"?', 'Ada teks yang lupa diberi tanda kutip.', 'Ganti Lulus menjadi "Lulus".'],
      explain: 'Setiap teks di dalam rumus harus diapit tanda kutip ganda.'
    }),
    q({
      title: 'IF tanpa pilihan kedua',
      q: 'Apa hasil `=IF(1>2,"Ya")` (argumen ketiga dihilangkan)?',
      options: ['Kosong', 'Error', 'FALSE', '"Ya"'],
      answer: 2,
      explain: 'Bila syarat salah dan Anda tidak menulis hasil untuk kondisi salah, Excel menampilkan **FALSE**. Biasanya lebih rapi selalu menulis ketiga bagian.'
    })
  ]
};

const logika = {
  id: 'logika',
  level: 2,
  icon: 'git-branch',
  title: 'AND, OR, dan IF Bersarang',
  tagline: 'Syarat ganda dengan AND, OR, dan IFS.',
  why: 'Kondisi di dunia kerja jarang hanya terdiri dari satu syarat. Bonus, misalnya, dapat mensyaratkan target tercapai dan kehadiran yang baik, sedangkan penilaian A sampai E memerlukan beberapa tingkat. Modul ini membahas cara menyusunnya.',
  minutes: 14,
  lessons: [
    {
      title: 'AND dan OR: beberapa syarat sekaligus',
      body: [
        analogy('**AND** seperti persyaratan melamar kerja: usia cukup **dan** punya ijazah **dan** lolos tes. Semua harus ya. **OR** seperti diskon: "member **atau** belanja di atas 200 ribu". Salah satu cukup.'),
        syntax('=IF(AND(syarat1, syarat2), "Ya", "Tidak")', [['AND(...)', 'BENAR hanya jika semua syarat benar'], ['OR(...)', 'BENAR jika salah satu syarat benar'], ['NOT(...)', 'Membalik: benar jadi salah']]),
        demo({
          rows: [['Nilai', 'Hadir %', 'Status'], [80, 90, ''], [85, 60, '']],
          cell: 'C2',
          formula: '=IF(AND(A2>=70,B2>=75),"Lulus","Tidak")',
          caption: 'Nilai 80 dan hadir 90%: keduanya memenuhi, jadi Lulus.'
        }),
        demo({
          rows: [['Nilai', 'Hadir %', 'Status'], [80, 90, 'Lulus'], [85, 60, '']],
          cell: 'C3',
          formula: '=IF(AND(A3>=70,B3>=75),"Lulus","Tidak")',
          caption: 'Nilai 85 bagus, tetapi hadir hanya 60% (belum 75). Satu syarat gagal, hasilnya Tidak.'
        })
      ]
    },
    {
      title: 'IF bersarang: penilaian bertingkat',
      body: [
        p('Untuk lebih dari dua kemungkinan (misalnya nilai A, B, C, D), letakkan **IF di dalam IF**. Excel mengecek dari atas ke bawah, dan berhenti di syarat pertama yang benar.'),
        analogy('Cara kerjanya seperti menuruni tangga dari atas: "Nilai di atas 85? A. Jika bukan, di atas 70? B. Jika bukan, di atas 55? C. Sisanya D."'),
        demo({
          rows: [['Nilai', 'Grade'], [78, '']],
          cell: 'B2',
          formula: '=IF(A2>=85,"A",IF(A2>=70,"B",IF(A2>=55,"C","D")))',
          caption: 'Nilai 78: tidak >= 85, tetapi >= 70, jadi "B".'
        }),
        warn('**Urutan syarat menentukan hasil.** Mulai dari batas tertinggi. Jika syarat ">= 55" diperiksa lebih dahulu, semua nilai 55 ke atas langsung menjadi C dan tidak pernah sampai ke A.')
      ]
    },
    {
      title: 'IFS: alternatif yang lebih ringkas',
      body: [
        p('IF yang bersarang terlalu banyak membuat tanda kurungnya menumpuk. **IFS** menuliskannya sebagai daftar pasangan "syarat, hasil":'),
        syntax('=IFS(syarat1, hasil1, syarat2, hasil2, ..., TRUE, hasil_lainnya)', [['syarat, hasil', 'Pasangan yang dicek berurutan'], ['TRUE, hasil', 'Syarat penutup yang selalu benar: digunakan untuk "selain itu"']]),
        demo({
          rows: [['Nilai', 'Grade'], [78, '']],
          cell: 'B2',
          formula: '=IFS(A2>=85,"A",A2>=70,"B",A2>=55,"C",TRUE,"D")',
          caption: 'Hasilnya sama dengan IF bersarang tadi, tetapi lebih mudah dibaca.'
        }),
        tip('IFS tersedia di Excel 2019 / Microsoft 365 ke atas. Jika bekerja dengan Excel versi lama, Anda tetap perlu IF bersarang.')
      ]
    }
  ],
  exercises: [
    f({
      title: 'Lulus butuh dua syarat',
      story: 'Siswa lulus jika nilainya minimal 70 **dan** kehadirannya minimal 75%.',
      task: 'Di sel **C2**, tulis "Lulus" jika kedua syarat terpenuhi, selain itu "Tidak Lulus". Salin sampai C5.',
      sheets: [sheet('Kelulusan', [['Nilai', 'Hadir %', 'Status'], [80, 90, ''], [85, 60, ''], [60, 95, ''], [70, 75, '']])],
      target: 'C2',
      fillTo: 'C5',
      expect: [['Lulus'], ['Tidak Lulus'], ['Tidak Lulus'], ['Lulus']],
      solution: '=IF(AND(A2>=70,B2>=75),"Lulus","Tidak Lulus")',
      mustUse: ['AND'],
      hints: ['Ada dua syarat yang harus terpenuhi sekaligus.', 'Gabungkan keduanya dengan AND(syarat1, syarat2) lalu letakkan di dalam IF.', 'Tulis: =IF(AND(A2>=70,B2>=75),"Lulus","Tidak Lulus")'],
      parts: [['AND(A2>=70, B2>=75)', 'Nilai minimal 70 DAN hadir minimal 75'], ['"Lulus"', 'jika keduanya benar'], ['"Tidak Lulus"', 'jika ada yang salah']],
      explain: 'AND hanya BENAR jika semua syarat di dalamnya benar. Baris 2 Lulus, sedangkan baris 3 dan 4 masing-masing gagal di salah satu syarat.'
    }),
    f({
      title: 'Diskon dengan salah satu syarat',
      story: 'Pelanggan dapat diskon jika berstatus "Member" **atau** belanja minimal Rp 200.000.',
      task: 'Di sel **C2**, tulis "Ya" jika pelanggan dapat diskon, selain itu "Tidak". Salin sampai C4.',
      sheets: [sheet('Diskon', [['Status', 'Belanja', 'Diskon?'], ['Member', 100000, ''], ['Umum', 250000, ''], ['Umum', 100000, '']], { B: 'rp' })],
      target: 'C2',
      fillTo: 'C4',
      expect: [['Ya'], ['Ya'], ['Tidak']],
      solution: '=IF(OR(A2="Member",B2>=200000),"Ya","Tidak")',
      mustUse: ['OR'],
      hints: ['Cukup salah satu syarat terpenuhi untuk mendapat diskon.', 'Gabungkan dengan OR(syarat1, syarat2).', 'Tulis: =IF(OR(A2="Member",B2>=200000),"Ya","Tidak")'],
      explain: 'OR BENAR jika minimal satu syarat benar. Hanya baris ketiga yang gagal di kedua syarat.'
    }),
    f({
      title: 'Grade nilai A sampai D',
      story: 'A untuk nilai 85 ke atas, B untuk 70 sampai 84, C untuk 55 sampai 69, dan D untuk di bawahnya.',
      task: 'Di sel **B2**, tentukan grade dari nilai di A2 menggunakan IF bersarang. Salin sampai B5.',
      sheets: [sheet('Grade', [['Nilai', 'Grade'], [90, ''], [75, ''], [60, ''], [40, '']])],
      target: 'B2',
      fillTo: 'B5',
      expect: [['A'], ['B'], ['C'], ['D']],
      solution: '=IF(A2>=85,"A",IF(A2>=70,"B",IF(A2>=55,"C","D")))',
      alt: ['=IFS(A2>=85,"A",A2>=70,"B",A2>=55,"C",TRUE,"D")'],
      hints: ['Periksa mulai dari batas tertinggi (85). Jika tidak memenuhi, lanjut ke batas berikutnya.', 'IF kedua, ketiga, dan seterusnya diletakkan di bagian "hasil jika salah" milik IF sebelumnya.', 'Tulis: =IF(A2>=85,"A",IF(A2>=70,"B",IF(A2>=55,"C","D")))'],
      parts: [['IF(A2>=85,"A", ...', 'Jika 85 ke atas, A. Jika tidak, lanjut ke IF berikutnya'], ['IF(A2>=70,"B", ...', 'Jika 70 ke atas, B'], ['IF(A2>=55,"C","D")', 'Jika 55 ke atas, C. Sisanya D']],
      explain: 'Setiap IF menangani satu batas, dan sisanya diteruskan ke IF berikutnya. Jumlah kurung tutup di akhir harus sama dengan jumlah IF.'
    }),
    f({
      title: 'Kategori umur dengan IFS',
      story: 'Taman bermain mengelompokkan pengunjung berdasarkan usia.',
      task: 'Di sel **B2**, kelompokkan usia di A2 dengan **IFS**: di bawah 13 "Anak", di bawah 18 "Remaja", di bawah 60 "Dewasa", sisanya "Lansia". Salin sampai B5.',
      sheets: [sheet('Umur', [['Usia', 'Kelompok'], [8, ''], [15, ''], [30, ''], [65, '']])],
      target: 'B2',
      fillTo: 'B5',
      expect: [['Anak'], ['Remaja'], ['Dewasa'], ['Lansia']],
      solution: '=IFS(A2<13,"Anak",A2<18,"Remaja",A2<60,"Dewasa",TRUE,"Lansia")',
      mustUse: ['IFS'],
      hints: ['IFS menerima pasangan: syarat lalu hasil, berulang.', 'Mulai dari yang terkecil karena syaratnya menggunakan "<". Pasangan terakhir menggunakan TRUE sebagai syarat "selain itu".', 'Tulis: =IFS(A2<13,"Anak",A2<18,"Remaja",A2<60,"Dewasa",TRUE,"Lansia")'],
      explain: 'Syarat TRUE di akhir selalu benar, jadi digunakan untuk menangkap semua sisanya. Tanpa itu, usia 65 akan menghasilkan #N/A.'
    }),
    f({
      title: 'Bonus bertingkat',
      story: 'Penjualan ≥ Rp 50 juta mendapat bonus 5%, penjualan ≥ Rp 30 juta mendapat bonus 3%, di bawah itu tidak ada bonus.',
      task: 'Di sel **B2**, hitung **jumlah bonus (rupiah)** dari penjualan di A2. Salin sampai B4.',
      sheets: [sheet('Bonus', [['Penjualan', 'Bonus'], [55000000, ''], [35000000, ''], [20000000, '']], { A: 'rp', B: 'rp' })],
      target: 'B2',
      fillTo: 'B4',
      resultFmt: 'rp',
      expect: [[2750000], [1050000], [0]],
      solution: '=IF(A2>=50000000,A2*5%,IF(A2>=30000000,A2*3%,0))',
      alt: ['=IFS(A2>=50000000,A2*0.05,A2>=30000000,A2*0.03,TRUE,0)'],
      hints: ['Ada tiga kemungkinan hasil, jadi butuh dua IF yang bersarang.', 'Periksa batas tertinggi terlebih dahulu (50 juta). Bonusnya adalah penjualan dikalikan persentase.', 'Tulis: =IF(A2>=50000000,A2*5%,IF(A2>=30000000,A2*3%,0))'],
      explain: 'Hasil IF yang berupa hitungan (A2*5%) membuat nilai bonus langsung muncul. Urutan dari batas tertinggi menjamin penjualan 55 juta tidak berhenti di bonus 3%.'
    }),
    q({
      title: 'Pentingnya urutan syarat',
      q: 'Anda menulis `=IF(A2>=55,"C",IF(A2>=70,"B",IF(A2>=85,"A","D")))`. Nilai 90 menghasilkan...',
      options: ['A', 'B', 'C', 'D'],
      answer: 2,
      explain: 'Nilai 90 langsung memenuhi syarat pertama (>= 55), sehingga Excel berhenti dan menjawab **C**. IF berikutnya tidak pernah dicek. Selalu susun syarat dari batas tertinggi ke terendah.'
    }),
    f({
      title: 'Harga tiket bioskop',
      story: 'Tiket Rp 25.000 untuk anak (di bawah 12 tahun) atau lansia (60 tahun ke atas). Selain itu Rp 50.000.',
      task: 'Di sel **B2**, tentukan harga tiket berdasarkan usia di A2. Salin sampai B5.',
      sheets: [sheet('Tiket', [['Usia', 'Harga'], [8, ''], [30, ''], [65, ''], [12, '']], { B: 'rp' })],
      target: 'B2',
      fillTo: 'B5',
      resultFmt: 'rp',
      expect: [[25000], [50000], [25000], [50000]],
      solution: '=IF(OR(A2<12,A2>=60),25000,50000)',
      mustUse: ['OR'],
      hints: ['Ada dua kelompok yang mendapat harga murah, cukup salah satu terpenuhi.', 'Gunakan OR untuk dua syarat: usia < 12 atau usia >= 60.', 'Tulis: =IF(OR(A2<12,A2>=60),25000,50000)'],
      explain: 'Usia 12 tepat tidak termasuk "di bawah 12", jadi membayar Rp 50.000.'
    }),
    q({
      title: 'Membaca AND dan OR',
      q: 'Berapa hasil `=AND(TRUE, FALSE)` dan `=OR(TRUE, FALSE)` ?',
      options: ['TRUE dan TRUE', 'FALSE dan TRUE', 'FALSE dan FALSE', 'TRUE dan FALSE'],
      answer: 1,
      explain: 'AND butuh semuanya benar, jadi FALSE. OR cukup satu yang benar, jadi TRUE.'
    })
  ]
};

const bersyarat = {
  id: 'countif-sumif',
  level: 2,
  icon: 'filter',
  title: 'Menghitung dan Menjumlahkan dengan Syarat',
  tagline: 'Hitung dan jumlahkan data sesuai kriteria.',
  why: '"Berapa total penjualan kategori Minuman?" atau "Berapa jumlah pelanggan dari Jakarta?" Pertanyaan seperti ini muncul setiap hari, dan tiga fungsi ini dirancang untuk menjawabnya.',
  minutes: 14,
  lessons: [
    {
      title: 'COUNTIF: menghitung data yang memenuhi syarat',
      body: [
        analogy('Di kelas ada 30 murid. "Berapa murid yang menggunakan kacamata?" Anda tidak menghitung semua orang, hanya yang cocok dengan syarat.'),
        syntax('=COUNTIF(range, kriteria)', [['range', 'Kolom atau area yang diperiksa Excel'], ['kriteria', 'Syarat yang harus cocok. Teks ditulis di dalam kutip: "Minuman"']]),
        demo({
          rows: [['Produk', 'Kategori', 'Qty'], ['Kopi', 'Minuman', 10], ['Roti', 'Makanan', 8], ['Teh', 'Minuman', 5], ['Kue', 'Makanan', 3], ['Jumlah minuman', '', '']],
          cell: 'B6',
          formula: '=COUNTIF(B2:B5,"Minuman")',
          caption: 'Ada 2 baris yang kategorinya "Minuman".'
        }),
        p('Untuk syarat angka, tulis operatornya **di dalam kutip**: `">10"`, `"<=50"`, `"<>0"`.')
      ]
    },
    {
      title: 'SUMIF: menjumlahkan data yang memenuhi syarat',
      body: [
        analogy('Anda punya tumpukan kuitansi dengan label "Makan", "Transport", "Hotel". "Berapa total yang berlabel Makan?" Jumlahkan hanya kuitansi berlabel itu.'),
        syntax('=SUMIF(range_syarat, kriteria, range_yang_dijumlahkan)', [['range_syarat', 'Kolom yang dicek (misalnya Kategori)'], ['kriteria', 'Syaratnya, misalnya "Minuman"'], ['range_yang_dijumlahkan', 'Kolom angka yang dijumlahkan (misalnya Qty)']]),
        demo({
          rows: [['Produk', 'Kategori', 'Qty'], ['Kopi', 'Minuman', 10], ['Roti', 'Makanan', 8], ['Teh', 'Minuman', 5], ['Kue', 'Makanan', 3], ['Qty minuman', '', '']],
          cell: 'C6',
          formula: '=SUMIF(B2:B5,"Minuman",C2:C5)',
          caption: '10 + 5 = 15. Range syarat (B) dan range jumlah (C) harus sama panjang dan sejajar.'
        }),
        tip('Jika yang dicek dan yang dijumlahkan adalah kolom yang sama, argumen ketiga boleh dihilangkan. Contoh: =SUMIF(C2:C5,">5") menjumlahkan qty yang lebih dari 5.')
      ]
    },
    {
      title: 'AVERAGEIF, wildcard, dan kriteria dari sel',
      body: [
        p('**AVERAGEIF** bekerja seperti SUMIF, tetapi mencari rata-rata: `=AVERAGEIF(range_syarat, kriteria, range_rata_rata)`.'),
        p('**Wildcard** membantu mencari pola teks. `*` berarti "teks apa pun" dan `?` berarti "satu huruf apa pun":'),
        steps('`"K*"` : semua yang diawali huruf K', '`"*kopi*"` : semua yang mengandung kata kopi', '`"???"` : tepat tiga huruf'),
        p('Kriteria juga boleh **diambil dari sel**, jadi syaratnya dapat diubah tanpa mengedit rumus. Untuk operator, sambung dengan `&`:'),
        demo({
          rows: [['Qty', 'Batas'], [10, 8], [8, null], [5, null], [12, null], ['Jumlah > batas', '']],
          cell: 'B6',
          formula: '=COUNTIF(A2:A5,">"&B2)',
          caption: '">"&B2 membentuk syarat ">8" dari isi sel B2. Ada 2 angka di atas 8 (10 dan 12).'
        })
      ]
    }
  ],
  exercises: [
    f({
      title: 'Berapa produk minuman?',
      task: 'Di sel **B11**, hitung **berapa produk** yang kategorinya "Minuman".',
      sheets: [sheet('Penjualan', penjualanRows([['Jumlah minuman', '', null, null]]), { D: 'rp' })],
      target: 'B11',
      expect: 4,
      solution: '=COUNTIF(B2:B9,"Minuman")',
      mustUse: ['COUNTIF', 'COUNTIFS'],
      hints: ['Anda menghitung baris yang cocok dengan syarat, bukan semua baris.', 'COUNTIF(range yang dicek, syarat). Syarat berupa teks harus diapit kutip.', 'Tulis: =COUNTIF(B2:B9,"Minuman")'],
      parts: [['B2:B9', 'Kolom Kategori yang dicek'], ['"Minuman"', 'Syarat yang harus cocok']],
      explain: 'COUNTIF membaca setiap sel di B2:B9 dan menghitung yang isinya "Minuman": Kopi, Teh, Susu, Jus = 4.'
    }),
    f({
      title: 'Produk dengan qty besar',
      task: 'Di sel **B11**, hitung berapa produk yang **qty-nya lebih dari 10**.',
      sheets: [sheet('Penjualan', penjualanRows([['Qty > 10', '', null, null]]), { D: 'rp' })],
      target: 'B11',
      expect: 3,
      solution: '=COUNTIF(C2:C9,">10")',
      mustUse: ['COUNTIF', 'COUNTIFS'],
      wrongs: [{ value: 4, msg: 'Angka 10 (Kopi) ikut terhitung. Soal meminta "lebih dari" 10, jadi operatornya > saja, bukan >=.' }],
      hints: ['Syarat untuk angka juga diletakkan di dalam kutip, lengkap dengan operatornya.', '"Lebih dari 10" ditulis ">10".', 'Tulis: =COUNTIF(C2:C9,">10")'],
      explain: 'Syarat angka ditulis sebagai teks: ">10". Hanya Susu (12), Mie (15), dan Nasi (20) yang memenuhi.'
    }),
    f({
      title: 'Total qty minuman',
      task: 'Di sel **C11**, jumlahkan **qty** semua produk berkategori "Minuman".',
      sheets: [sheet('Penjualan', penjualanRows([['Qty minuman', null, '', null]]), { D: 'rp' })],
      target: 'C11',
      expect: 34,
      solution: '=SUMIF(B2:B9,"Minuman",C2:C9)',
      mustUse: ['SUMIF', 'SUMIFS', 'SUMPRODUCT'],
      hints: ['Anda menjumlahkan hanya baris yang cocok, jadi bukan SUM biasa.', 'SUMIF(kolom syarat, syarat, kolom yang dijumlahkan).', 'Tulis: =SUMIF(B2:B9,"Minuman",C2:C9)'],
      parts: [['B2:B9', 'Kolom yang dicek (Kategori)'], ['"Minuman"', 'Syaratnya'], ['C2:C9', 'Kolom yang dijumlahkan (Qty)']],
      explain: 'Hanya baris Minuman yang qty-nya dijumlahkan: 10 + 5 + 12 + 7 = 34.'
    }),
    f({
      title: 'Total harga produk mahal',
      story: 'Pada kasus tertentu, kolom yang diperiksa dan kolom yang dijumlahkan adalah kolom yang sama.',
      task: 'Di sel **D11**, jumlahkan semua **harga** yang nilainya Rp 20.000 atau lebih.',
      sheets: [sheet('Penjualan', penjualanRows([['Total harga mahal', null, null, '']]), { D: 'rp' })],
      target: 'D11',
      resultFmt: 'rp',
      expect: 72000,
      solution: '=SUMIF(D2:D9,">=20000")',
      alt: ['=SUMIF(D2:D9,">=20000",D2:D9)'],
      mustUse: ['SUMIF', 'SUMIFS'],
      hints: ['Kolom yang dicek dan yang dijumlahkan sama-sama kolom harga.', 'Jika sama, argumen ketiga boleh dihilangkan.', 'Tulis: =SUMIF(D2:D9,">=20000")'],
      explain: 'Kopi (20.000) + Kue (30.000) + Jus (22.000) = 72.000.'
    }),
    f({
      title: 'Rata-rata harga makanan',
      task: 'Di sel **D11**, hitung **rata-rata harga** produk berkategori "Makanan".',
      sheets: [sheet('Penjualan', penjualanRows([['Rata-rata makanan', null, null, '']]), { D: 'rp' })],
      target: 'D11',
      resultFmt: 'rp',
      expect: 16750,
      solution: '=AVERAGEIF(B2:B9,"Makanan",D2:D9)',
      mustUse: ['AVERAGEIF', 'AVERAGEIFS'],
      hints: ['Seperti SUMIF, tetapi yang dicari rata-ratanya.', 'AVERAGEIF(kolom syarat, syarat, kolom yang dirata-rata).', 'Tulis: =AVERAGEIF(B2:B9,"Makanan",D2:D9)'],
      explain: '(12.000 + 30.000 + 10.000 + 15.000) / 4 = 16.750.'
    }),
    f({
      title: 'Wildcard: diawali huruf K',
      task: 'Di sel **B11**, hitung berapa **produk yang namanya diawali huruf K**. Gunakan tanda bintang `*` sebagai wildcard.',
      sheets: [sheet('Penjualan', penjualanRows([['Diawali K', '', null, null]]), { D: 'rp' })],
      target: 'B11',
      expect: 2,
      solution: '=COUNTIF(A2:A9,"K*")',
      mustUse: ['COUNTIF', 'COUNTIFS'],
      hints: ['Syaratnya adalah pola teks, bukan nama yang persis.', 'Tanda * berarti "diikuti teks apa saja".', 'Tulis: =COUNTIF(A2:A9,"K*")'],
      explain: '"K*" cocok dengan semua teks yang diawali K: Kopi dan Kue.'
    }),
    f({
      title: 'Kriteria dari sel',
      story: 'Supaya laporan fleksibel, kategori yang dicari ditulis di sel F1. Anda dapat menggantinya tanpa mengedit rumus.',
      task: 'Di sel **C11**, jumlahkan qty untuk kategori yang tertulis di **F1**.',
      sheets: [sheet('Penjualan', penjualanRows([['Qty kategori F1', null, '', null]]).map((r, i) => (i === 0 ? [...r, null, 'Makanan'] : r)), { D: 'rp' })],
      target: 'C11',
      expect: 46,
      solution: '=SUMIF(B2:B9,F1,C2:C9)',
      shouldFail: ['=SUMIF(B2:B9,"F1",C2:C9)'],
      mustUse: ['SUMIF', 'SUMIFS'],
      hints: ['Kriteria boleh berupa alamat sel. Tanpa tanda kutip, karena bukan teks.', 'Letakkan F1 di posisi kriteria.', 'Tulis: =SUMIF(B2:B9,F1,C2:C9)'],
      explain: 'Menulis F1 tanpa kutip artinya "gunakan isi sel F1". Ganti F1 menjadi "Minuman" dan angka langsung berubah.'
    }),
    f({
      title: 'Lebih besar dari sel batas',
      task: 'Di sel **C11**, hitung berapa produk yang qty-nya **lebih dari angka di F1**. Operator dan sel digabung dengan `&`.',
      sheets: [sheet('Penjualan', penjualanRows([['Qty > F1', null, '', null]]).map((r, i) => (i === 0 ? [...r, null, 8] : r)), { D: 'rp' })],
      target: 'C11',
      expect: 4,
      solution: '=COUNTIF(C2:C9,">"&F1)',
      shouldFail: ['=COUNTIF(C2:C9,">F1")'],
      mustUse: ['COUNTIF', 'COUNTIFS'],
      hints: ['Operator ">" adalah teks, sedangkan F1 adalah sel. Keduanya harus disambung.', 'Sambung dengan tanda &: ">"&F1.', 'Tulis: =COUNTIF(C2:C9,">"&F1)'],
      explain: '">"&F1 membentuk ">8". Jika Anda menulis ">F1", Excel mencari angka yang lebih besar dari teks "F1", dan hasilnya salah.'
    }),
    f({
      title: 'Persentase minuman',
      task: 'Di sel **B11**, hitung **berapa persen** produk yang berkategori "Minuman" dari seluruh produk.',
      sheets: [sheet('Penjualan', penjualanRows([['% minuman', '', null, null]]), { B: 'pct', D: 'rp' })],
      target: 'B11',
      resultFmt: 'pct',
      expect: 0.5,
      solution: '=COUNTIF(B2:B9,"Minuman")/COUNTA(B2:B9)',
      alt: ['=COUNTIF(B2:B9,"Minuman")/ROWS(B2:B9)', '=COUNTIF(B2:B9,"Minuman")/COUNTA(A2:A9)'],
      hints: ['Persentase = bagian / keseluruhan.', 'Bagian: jumlah baris Minuman. Keseluruhan: jumlah semua produk (COUNTA).', 'Tulis: =COUNTIF(B2:B9,"Minuman")/COUNTA(B2:B9)'],
      explain: 'Fungsi dapat digunakan di kedua sisi pembagian. 4 minuman dari 8 produk = 50%.'
    })
  ]
};

const teksDasar = {
  id: 'teks-dasar',
  level: 2,
  icon: 'type',
  title: 'Fungsi Teks Dasar',
  tagline: 'Ambil dan rapikan teks dengan LEFT, MID, dan TRIM.',
  why: 'Data di lapangan sering berupa teks yang tidak rapi atau perlu dipecah, seperti kode produk, nama, dan nomor telepon. Fungsi teks membantu merapikannya.',
  minutes: 12,
  lessons: [
    {
      title: 'Mengambil potongan teks',
      body: [
        analogy('Anggap teks sebagai deretan huruf bernomor. Anda dapat mengambil potongannya dari kiri, kanan, atau tengah.'),
        steps(
          '`LEFT(teks, n)` : ambil **n huruf pertama** dari kiri.',
          '`RIGHT(teks, n)` : ambil **n huruf terakhir** dari kanan.',
          '`MID(teks, mulai, n)` : mulai dari huruf ke-**mulai**, ambil **n huruf**.',
          '`LEN(teks)` : hitung **panjang** teks (berapa karakter).'
        ),
        demo({
          rows: [['Kode', 'KMP-0012-BDG'], ['3 pertama', ''], ['3 terakhir', ''], ['Bagian tengah', '']],
          cell: 'B2',
          formula: '=LEFT(B1,3)',
          caption: 'LEFT mengambil "KMP" dari kiri.'
        }),
        demo({
          rows: [['Kode', 'KMP-0012-BDG'], ['3 pertama', 'KMP'], ['3 terakhir', ''], ['Bagian tengah', '']],
          cell: 'B4',
          formula: '=MID(B1,5,4)',
          caption: 'Huruf ke-5 adalah angka 0 pertama. Ambil 4 huruf dari sana: "0012".'
        })
      ]
    },
    {
      title: 'Merapikan teks dan mengubah huruf',
      body: [
        steps(
          '`TRIM(teks)` : hapus spasi berlebih di awal, akhir, dan di tengah (spasi ganda jadi satu).',
          '`UPPER(teks)` : SEMUA HURUF BESAR.',
          '`LOWER(teks)` : semua huruf kecil.',
          '`PROPER(teks)` : Huruf Pertama Tiap Kata Besar.'
        ),
        demo({
          rows: [['Asli', 'sITI   aMINAH '], ['Rapi', '']],
          cell: 'B2',
          formula: '=PROPER(TRIM(B1))',
          caption: 'TRIM menghapus spasi berlebih, lalu PROPER merapikan huruf besar-kecilnya: "Siti Aminah".'
        }),
        p('Fungsi dapat **disarangkan** seperti pada contoh di atas. Excel menghitung dari bagian terdalam ke luar.'),
        tip('Gunakan `&` untuk menyambung beberapa teks, misalnya `=LOWER(A2)&"@kantor.com"`.')
      ]
    }
  ],
  exercises: [
    f({
      title: 'Kode kategori',
      story: 'Kode produk berformat KATEGORI-NOMOR-KOTA. Tiga huruf pertama menunjukkan kategori.',
      task: 'Di sel **B2**, ambil **3 huruf pertama** dari kode di A2.',
      sheets: [sheet('Kode', [['Kode produk', 'Kategori'], ['KMP-0012-BDG', '']])],
      target: 'B2',
      expect: 'KMP',
      solution: '=LEFT(A2,3)',
      alt: ['=MID(A2,1,3)'],
      hints: ['Anda mengambil potongan dari sisi kiri teks.', 'LEFT(teks, jumlah huruf).', 'Tulis: =LEFT(A2,3)'],
      explain: 'LEFT(A2,3) memotong tiga huruf dari kiri: K, M, P.'
    }),
    f({
      title: 'Kode kota',
      task: 'Di sel **B2**, ambil **3 huruf terakhir** dari kode di A2.',
      sheets: [sheet('Kode', [['Kode produk', 'Kota'], ['KMP-0012-BDG', '']])],
      target: 'B2',
      expect: 'BDG',
      solution: '=RIGHT(A2,3)',
      alt: ['=MID(A2,10,3)'],
      hints: ['Sekarang sisi kanan teks yang dipotong.', 'RIGHT(teks, jumlah huruf).', 'Tulis: =RIGHT(A2,3)'],
      explain: 'RIGHT bekerja dari ujung kanan. Cocok untuk kode yang panjangnya berbeda-beda tetapi akhirannya tetap.'
    }),
    f({
      title: 'Nomor di tengah kode',
      task: 'Di sel **B2**, ambil **4 digit nomor** yang ada di tengah kode (setelah tanda "-" pertama).',
      sheets: [sheet('Kode', [['Kode produk', 'Nomor'], ['KMP-0012-BDG', '']])],
      target: 'B2',
      expect: '0012',
      solution: '=MID(A2,5,4)',
      mustUse: ['MID', 'TEXTBEFORE', 'LEFT', 'RIGHT'],
      hints: ['Nomor itu ada di tengah, jadi Anda memerlukan fungsi yang dapat dimulai dari posisi mana pun.', 'Huruf K-M-P-"-" menghabiskan 4 posisi, jadi nomor mulai dari posisi ke-5. Panjangnya 4.', 'Tulis: =MID(A2,5,4)'],
      parts: [['MID', 'Ambil potongan tengah'], ['A2', 'teks sumber'], ['5', 'mulai dari huruf ke-5'], ['4', 'ambil 4 huruf']],
      explain: 'MID(teks, mulai, panjang). Hasilnya tetap teks "0012" sehingga angka nol di depannya tidak hilang.'
    }),
    f({
      title: 'Panjang nomor telepon',
      story: 'Tim data mengecek apakah nomor telepon memiliki jumlah digit yang benar.',
      task: 'Di sel **B2**, hitung **berapa karakter** nomor telepon di A2.',
      sheets: [sheet('Telepon', [['No. HP', 'Panjang'], ['081234567890', '']])],
      target: 'B2',
      expect: 12,
      solution: '=LEN(A2)',
      mustUse: ['LEN'],
      hints: ['Anda menghitung banyaknya karakter, bukan nilainya.', 'LEN = length (panjang).', 'Tulis: =LEN(A2)'],
      explain: 'LEN menghitung semua karakter, termasuk spasi dan tanda baca.'
    }),
    f({
      title: 'Hapus spasi berlebih',
      story: 'Nama hasil copy-paste sering mengandung spasi berlebih yang membuat pencarian gagal.',
      task: 'Di sel **B2**, rapikan nama di A2 agar spasi berlebih hilang.',
      sheets: [sheet('Nama', [['Nama kotor', 'Nama rapi'], ['  Budi   Santoso  ', '']])],
      target: 'B2',
      expect: 'Budi Santoso',
      solution: '=TRIM(A2)',
      mustUse: ['TRIM'],
      hints: ['Ada spasi di awal, di akhir, dan ganda di tengah.', 'Satu fungsi menyelesaikan ketiganya.', 'Tulis: =TRIM(A2)'],
      explain: 'TRIM menghapus spasi di awal/akhir dan mengubah spasi ganda di tengah menjadi satu.'
    }),
    f({
      title: 'Huruf awal besar',
      task: 'Di sel **B2**, ubah nama di A2 supaya **setiap kata diawali huruf besar**.',
      sheets: [sheet('Nama', [['Nama asli', 'Nama rapi'], ['sITI aMINAH', '']])],
      target: 'B2',
      expect: 'Siti Aminah',
      solution: '=PROPER(A2)',
      mustUse: ['PROPER'],
      hints: ['Ada fungsi khusus untuk huruf awal tiap kata.', 'PROPER mengubah ke gaya nama.', 'Tulis: =PROPER(A2)'],
      explain: 'PROPER menjadikan huruf pertama tiap kata kapital dan sisanya huruf kecil.'
    }),
    f({
      title: 'Semua huruf besar',
      task: 'Di sel **B2**, ubah kode di A2 menjadi **huruf kapital semua**.',
      sheets: [sheet('Kode', [['Kode', 'Kapital'], ['abc-12x', '']])],
      target: 'B2',
      expect: 'ABC-12X',
      solution: '=UPPER(A2)',
      mustUse: ['UPPER'],
      hints: ['Kebalikan dari LOWER.', 'UPPER mengubah menjadi huruf besar.', 'Tulis: =UPPER(A2)'],
      explain: 'Angka dan tanda hubung tidak berubah. Hanya huruf yang dikapitalkan.'
    }),
    f({
      title: 'Membuat alamat email',
      story: 'Email kantor berformat nama huruf kecil lalu @kantor.com.',
      task: 'Di sel **B2**, buat alamat email dari nama di A2, misalnya "Rina" menjadi "rina@kantor.com".',
      sheets: [sheet('Email', [['Nama', 'Email'], ['Rina', '']])],
      target: 'B2',
      expect: 'rina@kantor.com',
      solution: '=LOWER(A2)&"@kantor.com"',
      mustUse: ['LOWER'],
      hints: ['Ubah nama menjadi huruf kecil, lalu sambung dengan teks domain.', 'LOWER untuk huruf kecil dan & untuk menyambung.', 'Tulis: =LOWER(A2)&"@kantor.com"'],
      parts: [['LOWER(A2)', 'Nama menjadi huruf kecil'], ['&', 'disambung dengan'], ['"@kantor.com"', 'teks tetap']],
      explain: 'Fungsi teks dan operator & saling melengkapi. Anda dapat menyalin rumus ke ratusan nama sekaligus.'
    }),
    f({
      title: 'Kode karyawan',
      story: 'Kode karyawan = 3 huruf pertama nama (kapital) + tanda "-" + tahun masuk.',
      task: 'Di sel **C2**, buat kode karyawan dari nama (A2) dan tahun masuk (B2). Contoh hasil: BUD-2021.',
      sheets: [sheet('Karyawan', [['Nama', 'Tahun masuk', 'Kode'], ['Budi', 2021, '']])],
      target: 'C2',
      expect: 'BUD-2021',
      solution: '=UPPER(LEFT(A2,3))&"-"&B2',
      mustUse: ['UPPER', 'LEFT'],
      hints: ['Anda butuh tiga bagian yang disambung: 3 huruf awal, tanda hubung, dan tahun.', 'Ambil 3 huruf dengan LEFT, kapitalkan dengan UPPER, lalu sambung dengan &.', 'Tulis: =UPPER(LEFT(A2,3))&"-"&B2'],
      parts: [['UPPER(LEFT(A2,3))', '"Budi" jadi "Bud" jadi "BUD"'], ['&"-"&', 'sambung dengan tanda hubung'], ['B2', 'lalu tahun masuk']],
      explain: 'Fungsi dihitung dari bagian terdalam: LEFT lebih dahulu, baru UPPER. Angka (tahun) otomatis menjadi teks saat disambung dengan &.'
    })
  ]
};

const errorModul = {
  id: 'error-iferror',
  level: 2,
  icon: 'alert',
  title: 'Memahami Error dan Menggunakan IFERROR',
  tagline: 'Kenali pesan error dan tangani dengan IFERROR.',
  why: 'Pesan error adalah petunjuk, bukan kegagalan. Dengan memahami artinya, Anda dapat memperbaiki rumus lebih cepat dan menghasilkan laporan yang rapi.',
  minutes: 10,
  lessons: [
    {
      title: 'Lima error yang paling sering ditemui',
      body: [
        p('Setiap pesan error diawali tanda `#`. Namanya sudah memberi petunjuk tentang penyebabnya:'),
        steps(
          '**#DIV/0!** : ada pembagian dengan nol (atau sel kosong).',
          '**#NAME?** : Excel tidak mengenal nama yang Anda tulis. Biasanya fungsi salah ketik atau teks tanpa kutip.',
          '**#VALUE!** : tipe data salah, misalnya menjumlahkan angka dengan teks.',
          '**#REF!** : rujukan ke sel yang tidak ada lagi (misalnya kolomnya terhapus).',
          '**#N/A** : nilai yang dicari tidak ditemukan (sering muncul di VLOOKUP).'
        ),
        tip('Latihan ini juga menjelaskan arti error yang muncul pada rumus Anda. Bacalah pesannya karena itu petunjuk yang paling berguna.')
      ]
    },
    {
      title: 'IFERROR: menangani error pada rumus',
      body: [
        p('**IFERROR** menjalankan rumus. Jika hasilnya error, ia menampilkan nilai cadangan yang Anda tentukan.'),
        syntax('=IFERROR(rumus, nilai_jika_error)', [['rumus', 'Rumus yang mungkin error'], ['nilai_jika_error', 'Tampilkan ini jika error (boleh 0, teks, atau kosong "")']]),
        demo({
          rows: [['Total', 'Hari', 'Rata-rata'], [100, 0, '']],
          cell: 'C2',
          formula: '=IFERROR(A2/B2,"Belum ada data")',
          caption: 'A2/B2 akan #DIV/0! karena B2 = 0. IFERROR menggantinya dengan pesan yang lebih jelas.'
        }),
        warn('Hindari menggunakan IFERROR untuk menutupi semua error. Error yang tidak Anda pahami dapat menandakan adanya kesalahan pada data atau rumus. Gunakan IFERROR hanya jika Anda tahu persis error apa yang diharapkan.')
      ]
    }
  ],
  exercises: [
    q({
      title: 'Penyebab #DIV/0!',
      q: 'Sel C2 berisi `=A2/B2` dan hasilnya `#DIV/0!`. Penyebab yang paling mungkin...',
      options: ['A2 berisi teks', 'B2 berisi 0 atau kosong', 'Kolom C terlalu sempit', 'Fungsi tidak dikenal'],
      answer: 1,
      explain: 'Membagi dengan nol tidak mungkin. Excel juga menganggap sel kosong sebagai 0, jadi hasilnya #DIV/0!.',
      whyNot: ['Teks akan menghasilkan #VALUE!, bukan #DIV/0!.', '', 'Kolom sempit hanya menampilkan ####, bukan error.', 'Fungsi tidak dikenal menghasilkan #NAME?.']
    }),
    q({
      title: 'Penyebab #NAME? pada nama fungsi',
      q: 'Anda mengetik `=SUMM(B2:B5)` dan Excel menampilkan `#NAME?`. Artinya...',
      options: ['Rentang B2:B5 salah', 'Nama fungsi tidak dikenal (salah ketik)', 'Angka terlalu besar', 'Sel terkunci'],
      answer: 1,
      explain: 'SUMM bukan fungsi yang dikenal Excel. #NAME? hampir selalu berarti salah ketik nama fungsi, atau teks yang lupa diberi kutip.'
    }),
    q({
      title: 'Penyebab #N/A',
      q: 'VLOOKUP menghasilkan `#N/A`. Penjelasan yang paling tepat...',
      options: ['Nilai yang dicari tidak ditemukan di tabel', 'Pembagian dengan nol', 'Sel yang dirujuk sudah dihapus', 'Rumus terlalu panjang'],
      answer: 0,
      explain: '#N/A = Not Available. Nilai yang Anda cari tidak ada di kolom pencarian. Cek ejaan atau spasi tersembunyi.',
      whyNot: ['', 'Itu #DIV/0!.', 'Itu #REF!.', 'Panjang rumus tidak menimbulkan #N/A.']
    }),
    f({
      title: 'Rata-rata per hari tanpa error',
      story: 'Beberapa produk belum terjual sama sekali (hari aktif = 0), sehingga rata-ratanya error.',
      task: 'Di sel **C2**, hitung rata-rata penjualan per hari (total ÷ hari). Jika error, tampilkan angka **0**. Salin sampai C4.',
      sheets: [sheet('Rata-rata', [['Total', 'Hari', 'Per hari'], [100, 4, ''], [50, 0, ''], [90, 3, '']])],
      target: 'C2',
      fillTo: 'C4',
      expect: [[25], [0], [30]],
      solution: '=IFERROR(A2/B2,0)',
      mustUse: ['IFERROR'],
      hints: ['Baris kedua membagi 50 dengan 0 sehingga akan error.', 'Gunakan IFERROR pada rumus pembagian.', 'Tulis: =IFERROR(A2/B2,0)'],
      explain: 'IFERROR(rumus, 0) menampilkan hasil rumus bila normal, dan 0 bila error.'
    }),
    f({
      title: 'Pesan pengganti error',
      story: 'Laporan untuk atasan sebaiknya tidak memuat #DIV/0!.',
      task: 'Di sel **C2**, hitung total ÷ hari, tetapi tampilkan teks **"Belum ada data"** bila error. Salin sampai C4.',
      sheets: [sheet('Laporan', [['Total', 'Hari', 'Per hari'], [100, 4, ''], [50, 0, ''], [90, 3, '']])],
      target: 'C2',
      fillTo: 'C4',
      expect: [[25], ['Belum ada data'], [30]],
      solution: '=IFERROR(A2/B2,"Belum ada data")',
      mustUse: ['IFERROR'],
      hints: ['Nilai cadangan IFERROR boleh berupa teks.', 'Teks diapit tanda kutip.', 'Tulis: =IFERROR(A2/B2,"Belum ada data")'],
      explain: 'Nilai cadangan IFERROR bebas: angka, teks, atau "" (kosong).'
    }),
    f({
      title: 'Perbaiki salah ketik',
      story: 'Rumus rekan kerja Anda menampilkan #NAME?. Cari tahu penyebabnya.',
      task: 'Perbaiki rumus di **B6** agar menjumlahkan B2:B5.',
      start: '=SUMM(B2:B5)',
      sheets: [sheet('Belanja', [['Item', 'Harga'], ['Roti', 12000], ['Susu', 18000], ['Telur', 25000], ['Beras', 60000], ['Total', '']], { B: 'rp' })],
      target: 'B6',
      resultFmt: 'rp',
      expect: 115000,
      solution: '=SUM(B2:B5)',
      hints: ['Baca pesan error: nama apa yang tidak dikenali?', 'Fungsi SUMM tidak ada. Pikirkan fungsi yang dimaksud.', 'Hapus satu huruf M.'],
      explain: 'Jika Excel (atau latihan ini) menyatakan fungsi tidak dikenal, periksa ejaannya. Excel juga menyarankan nama fungsi saat Anda mengetik.'
    }),
    f({
      title: 'Rata-rata dari data kosong',
      story: 'Kolom nilai belum diisi sama sekali, sehingga AVERAGE error.',
      task: 'Di sel **B6**, hitung rata-rata nilai B2:B5. Jika error, tampilkan tanda **"-"**.',
      sheets: [sheet('Nilai', [['Siswa', 'Nilai'], ['Ayu', null], ['Budi', null], ['Citra', null], ['Dedi', null], ['Rata-rata', '']])],
      target: 'B6',
      expect: '-',
      solution: '=IFERROR(AVERAGE(B2:B5),"-")',
      mustUse: ['IFERROR'],
      hints: ['AVERAGE dari sel kosong menghasilkan #DIV/0!.', 'Letakkan AVERAGE di dalam IFERROR.', 'Tulis: =IFERROR(AVERAGE(B2:B5),"-")'],
      explain: 'IFERROR dapat diterapkan pada fungsi apa pun, bukan hanya pembagian. Begitu data terisi, rata-rata otomatis muncul.'
    })
  ]
};

export default [pembulatan, ifDasar, logika, bersyarat, teksDasar, errorModul];
