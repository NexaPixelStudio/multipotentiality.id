import { sheet, f, q, p, analogy, tip, warn, steps, syntax, demo, D } from './helpers.js';

// ============================================================
// LEVEL 5 - PROFESIONAL
// ============================================================

const keuangan = {
  id: 'keuangan',
  level: 5,
  icon: 'coins',
  title: 'Fungsi Keuangan',
  tagline: 'Hitung cicilan, tabungan, nilai waktu uang, dan kelayakan investasi dengan PMT, FV, PV, NPV, dan IRR.',
  why: 'Dari cicilan KPR hingga keputusan investasi, Excel digunakan secara luas di bidang keuangan. Lima fungsi dalam modul ini menjadi fondasinya.',
  minutes: 16,
  lessons: [
    {
      title: 'Nilai waktu uang',
      body: [
        analogy('Rp 100 juta hari ini lebih berharga daripada Rp 100 juta tiga tahun lagi. Uang hari ini dapat disimpan dan berbunga. Semua fungsi keuangan Excel berpijak pada gagasan sederhana ini.'),
        p('Fungsi keuangan menggunakan tiga komponen dasar: **tingkat bunga per periode (rate)**, **jumlah periode (nper)**, dan **jumlah uang**.'),
        warn('**Satuan harus selaras.** Bunga 12% per tahun dengan cicilan bulanan harus ditulis sebagai rate = 12%/12 dan nper = jumlah tahun × 12. Ini adalah kesalahan yang paling sering dilakukan pemula.'),
        p('Excel menggunakan konvensi tanda: **uang keluar bernilai negatif** dan **uang masuk bernilai positif**. Itu sebabnya hasil PMT sering muncul negatif, karena Anda membayar. Tambahkan tanda minus di depan fungsi atau pada argumennya untuk membaliknya.')
      ]
    },
    {
      title: 'Empat fungsi utama',
      body: [
        steps(
          '`PMT(rate, nper, pv)` : cicilan per periode untuk pinjaman sebesar pv.',
          '`FV(rate, nper, pmt)` : nilai di masa depan dari setoran rutin sebesar pmt.',
          '`PV(rate, nper, pmt, fv)` : nilai sekarang dari sejumlah uang di masa depan.',
          '`NPV(rate, arus1, arus2, ...)` : nilai sekarang dari arus kas yang akan datang.'
        ),
        demo({
          rows: [['Pinjaman', 100000000], ['Bunga/tahun', 0.12], ['Lama (bulan)', 12], ['Cicilan/bulan', '']],
          fmt: { A: 'int', B: 'rp' },
          cell: 'B4',
          formula: '=-PMT(B2/12,B3,B1)',
          caption: 'Rate bulanan = 12%/12 = 1%. Hasilnya sekitar Rp 8,88 juta per bulan. Tanda minus membuatnya positif.'
        }),
        tip('Investasi layak bila **NPV > 0**: nilai sekarang arus kas masuk lebih besar daripada uang yang dikeluarkan di awal.')
      ]
    }
  ],
  exercises: [
    f({
      title: 'Cicilan pinjaman',
      story: 'Pinjaman Rp 100 juta, bunga 12% per tahun, dibayar selama 12 bulan.',
      task: 'Di sel **B4**, hitung **cicilan per bulan** sebagai angka positif dan bulatkan ke rupiah.',
      sheets: [sheet('Pinjaman', [['Pinjaman', 100000000], ['Bunga per tahun', 0.12], ['Lama (bulan)', 12], ['Cicilan per bulan', '']], { B: 'rp' })],
      target: 'B4',
      resultFmt: 'rp',
      expect: 8884879,
      solution: '=ROUND(-PMT(B2/12,B3,B1),0)',
      alt: ['=ROUND(PMT(B2/12,B3,-B1),0)'],
      mustUse: ['PMT'],
      wrongs: [{ value: -8884879, msg: 'Nilainya benar tetapi bertanda negatif karena Excel menganggap cicilan sebagai uang keluar. Pasang minus di depan PMT untuk membalik.' }],
      hints: ['Gunakan fungsi untuk menghitung cicilan berkala. Bunga bulanan = bunga tahunan ÷ 12.', 'PMT(rate bulanan, jumlah bulan, jumlah pinjaman). Hasilnya negatif, jadi balik tandanya dan bulatkan.', 'Tulis: =ROUND(-PMT(B2/12,B3,B1),0)'],
      parts: [['B2/12', 'Bunga per bulan (1%)'], ['B3', 'Jumlah cicilan (12 bulan)'], ['B1', 'Jumlah pinjaman'], ['-PMT', 'balik tanda agar positif']],
      explain: 'Setiap bulan Anda membayar Rp 8.884.879. Total dalam 12 bulan lebih besar dari pinjaman karena ada bunga.'
    }),
    f({
      title: 'Total bunga yang dibayar',
      story: 'Cicilan per bulan sudah dihitung (Rp 8.884.879).',
      task: 'Di sel **B5**, hitung **total bunga** selama masa pinjaman: total yang dibayar dikurangi pokok pinjaman.',
      sheets: [sheet('Pinjaman', [['Pinjaman', 100000000], ['Bunga per tahun', 0.12], ['Lama (bulan)', 12], ['Cicilan per bulan', 8884879], ['Total bunga', '']], { B: 'rp' })],
      target: 'B5',
      resultFmt: 'rp',
      expect: 6618548,
      solution: '=B4*B3-B1',
      hints: ['Total bayar = cicilan × jumlah bulan.', 'Bunga = total bayar dikurangi pokok pinjaman.', 'Tulis: =B4*B3-B1'],
      explain: '8.884.879 × 12 = 106.618.548. Dikurangi pokok 100.000.000, total bunganya Rp 6.618.548.'
    }),
    f({
      title: 'Tabungan 5 tahun',
      story: 'Anda menabung Rp 1 juta setiap akhir bulan dengan bunga 6% per tahun selama 5 tahun.',
      task: 'Di sel **B4**, hitung **nilai tabungan di akhir** (positif, dibulatkan ke rupiah). Perhatikan satuannya: bulanan.',
      sheets: [sheet('Tabungan', [['Setoran per bulan', 1000000], ['Bunga per tahun', 0.06], ['Lama (tahun)', 5], ['Nilai akhir', '']], { B: 'rp' })],
      target: 'B4',
      resultFmt: 'rp',
      expect: 69770031,
      solution: '=ROUND(FV(B2/12,B3*12,-B1),0)',
      mustUse: ['FV'],
      wrongs: [{ value: 60000000, msg: 'Itu hanya total setoran (60 juta) tanpa bunga. Gunakan fungsi nilai masa depan (FV).' }],
      hints: ['Fungsi yang menghitung nilai masa depan dari setoran rutin.', 'Rate = bunga ÷ 12, nper = tahun × 12. Setoran dimasukkan negatif karena uang keluar.', 'Tulis: =ROUND(FV(B2/12,B3*12,-B1),0)'],
      parts: [['B2/12', 'Bunga per bulan (0,5%)'], ['B3*12', '60 bulan'], ['-B1', 'setoran sebagai uang keluar']],
      explain: 'Total setoran Rp 60 juta tumbuh menjadi sekitar Rp 69,77 juta berkat bunga majemuk.'
    }),
    f({
      title: 'Nilai sekarang dari uang masa depan',
      story: 'Anda akan menerima Rp 100 juta tiga tahun lagi. Tingkat diskonto 10% per tahun.',
      task: 'Di sel **B4**, hitung **nilai sekarang** (positif, dibulatkan ke rupiah) dari uang itu.',
      sheets: [sheet('Nilai Sekarang', [['Uang di masa depan', 100000000], ['Diskonto per tahun', 0.1], ['Lama (tahun)', 3], ['Nilai sekarang', '']], { B: 'rp' })],
      target: 'B4',
      resultFmt: 'rp',
      expect: 75131480,
      solution: '=ROUND(PV(B2,B3,0,-B1),0)',
      alt: ['=ROUND(B1/(1+B2)^B3,0)'],
      hints: ['Anda mencari berapa uang hari ini yang setara dengan Rp 100 juta di masa depan.', 'PV(rate, nper, pmt, fv). Tidak ada setoran rutin, jadi pmt = 0 dan fv diberi minus.', 'Tulis: =ROUND(PV(B2,B3,0,-B1),0)'],
      explain: 'Rp 100 juta tiga tahun lagi setara dengan sekitar Rp 75,1 juta hari ini pada diskonto 10%.'
    }),
    f({
      title: 'Apakah investasi ini layak?',
      story: 'Investasi awal Rp 100 juta. Arus kas masuk: Rp 40 juta, 50 juta, dan 60 juta pada tahun 1 sampai 3. Diskonto 10%.',
      task: 'Di sel **B7**, hitung **NPV** = nilai sekarang arus kas masuk dikurangi investasi awal, dibulatkan ke rupiah.',
      sheets: [sheet('Investasi', [['Diskonto', 0.1], ['Investasi awal', 100000000], ['Arus kas tahun 1', 40000000], ['Arus kas tahun 2', 50000000], ['Arus kas tahun 3', 60000000], [null, null], ['NPV', '']], { B: 'rp' }) ],
      target: 'B7',
      resultFmt: 'rp',
      expect: 22764838,
      solution: '=ROUND(NPV(B1,B3:B5)-B2,0)',
      mustUse: ['NPV'],
      wrongs: [{ value: 122764838, msg: 'Itu nilai sekarang dari arus kas masuk saja. Kurangi dengan investasi awal untuk mendapat NPV.' }],
      hints: ['NPV di Excel menghitung nilai sekarang dari arus kas yang datang setelah tahun 0.', 'Investasi awal terjadi sekarang, jadi dikurangkan terpisah di luar NPV.', 'Tulis: =ROUND(NPV(B1,B3:B5)-B2,0)'],
      parts: [['NPV(B1, B3:B5)', 'Nilai sekarang dari 3 arus kas masuk = 122,76 juta'], ['-B2', 'dikurangi investasi awal 100 juta']],
      explain: 'NPV positif (Rp 22,76 juta), jadi investasi layak pada diskonto 10%. Kesalahan yang sering terjadi: fungsi NPV tidak menghitung arus kas "tahun 0", sehingga investasi awal harus dikurangkan secara terpisah.'
    }),
    q({
      title: 'Menyelaraskan satuan periode',
      q: 'Pinjaman 3 tahun dengan bunga 9% per tahun, dibayar cicilan **bulanan**. Argumen `rate` dan `nper` di PMT yang benar adalah...',
      options: ['rate = 9%, nper = 3', 'rate = 9%/12, nper = 3×12', 'rate = 9%, nper = 3×12', 'rate = 9%/12, nper = 3'],
      answer: 1,
      explain: 'Cicilan bulanan berarti periode = bulan. Bunga tahunan dibagi 12 menjadi bunga bulanan, dan 3 tahun dikali 12 menjadi 36 bulan.',
      whyNot: ['Itu hitungan tahunan, bukan bulanan.', '', 'Bunga tahunan tidak boleh dipasangkan dengan jumlah periode bulanan.', 'Bunga bulanan dipasangkan dengan periode tahunan juga tidak cocok.']
    }),
    q({
      title: 'Menafsirkan NPV',
      q: 'Sebuah proyek memiliki NPV **negatif**. Artinya...',
      options: ['Proyek menguntungkan, lanjutkan', 'Nilai sekarang arus kas masuk lebih kecil dari biaya investasi, proyek tidak layak pada diskonto itu', 'Rumus NPV salah', 'Proyek tidak punya arus kas'],
      answer: 1,
      explain: 'NPV < 0 berarti setelah memperhitungkan nilai waktu uang, proyek tidak menutup biayanya. NPV > 0 berarti layak.'
    })
  ]
};

const tarifRows = [
  ['Kota', '1 kg', '2 kg', '5 kg'],
  ['Jakarta', 9000, 15000, 30000],
  ['Bandung', 12000, 20000, 40000],
  ['Surabaya', 15000, 26000, 52000],
  ['Medan', 25000, 45000, 90000]
];

const lookup2arah = {
  id: 'lookup-lanjut',
  level: 5,
  icon: 'map',
  title: 'Lookup Dua Arah dan Tarif Berlapis',
  tagline: 'Cari data pada tabel matriks dan hitung pajak progresif dengan tarif berlapis.',
  why: 'Tarif ongkos kirim bergantung pada kota dan berat, sedangkan pajak penghasilan bergantung pada lapisan penghasilan. Kedua pola ini sering ditemui dalam pekerjaan profesional.',
  minutes: 16,
  lessons: [
    {
      title: 'Tabel matriks: pencarian dengan dua kunci',
      body: [
        analogy('Seperti tabel jarak antarkota di peta jalan: Anda mencari kota asal di sisi kiri, kota tujuan di sisi atas, lalu membaca angka di pertemuannya.'),
        p('Gunakan **INDEX** dengan dua **MATCH**: satu mencari baris, satu mencari kolom.'),
        syntax('=INDEX(tabel_isi, MATCH(kunci_baris, daftar_baris, 0), MATCH(kunci_kolom, daftar_kolom, 0))', [['tabel_isi', 'Hanya bagian angkanya, tanpa judul baris dan kolom'], ['MATCH pertama', 'Mencari nomor baris dari daftar di sisi kiri'], ['MATCH kedua', 'Mencari nomor kolom dari judul di sisi atas']]),
        demo({
          rows: [['Kota', '1 kg', '2 kg'], ['Jakarta', 9000, 15000], ['Bandung', 12000, 20000], ['Kota:', 'Bandung', null], ['Berat:', '2 kg', null], ['Ongkir:', '', null]],
          cell: 'B6',
          formula: '=INDEX(B2:C3,MATCH(B4,A2:A3,0),MATCH(B5,B1:C1,0))',
          caption: 'Bandung = baris ke-2, "2 kg" = kolom ke-2, pertemuannya 20.000.'
        })
      ]
    },
    {
      title: 'Pajak progresif: perhitungan per lapisan',
      body: [
        p('Pada pajak progresif, setiap **lapisan** penghasilan dikenai tarif berbeda. Penghasilan Rp 300 juta tidak seluruhnya dikenai tarif tertinggi; hanya bagian yang masuk ke lapisan tersebut.'),
        analogy('Seperti mengisi tangki bertingkat: 60 juta pertama dikenai 5%, 190 juta berikutnya 15%, dan seterusnya. Tiap lapisan dihitung tersendiri, lalu dijumlahkan.'),
        p('Pendekatan yang umum digunakan: simpan **selisih tarif** tiap lapisan (kenaikan tarif dibandingkan lapisan sebelumnya). Dengan begitu, pajak total = jumlah dari (penghasilan di atas batas) × (selisih tarif), yang dapat dihitung dengan SUMPRODUCT.'),
        demo({
          rows: [['Batas', 'Selisih tarif'], [0, 0.05], [100, 0.1], [200, 0.1], ['Penghasilan', 250], ['Pajak', '']],
          cell: 'B6',
          formula: '=SUMPRODUCT((B5>A2:A4)*(B5-A2:A4)*B2:B4)',
          caption: '250×5% + 150×10% + 50×10% = 12,5 + 15 + 5 = 32,5.'
        })
      ]
    }
  ],
  exercises: [
    f({
      title: 'Ongkos kirim berdasarkan kota dan berat',
      story: 'Tabel tarif ada di A1:D5. Kota tujuan di G1 dan berat paket di G2.',
      task: 'Di sel **G3**, ambil ongkos kirim untuk kota di G1 dan berat di G2 menggunakan **INDEX dengan dua MATCH**.',
      sheets: [sheet('Tarif', tarifRows.map((r, i) => (i === 0 ? [...r, null, null, 'Surabaya'] : i === 1 ? [...r, null, null, '2 kg'] : r)), { B: 'rp', C: 'rp', D: 'rp' })],
      target: 'G3',
      resultFmt: 'rp',
      expect: 26000,
      solution: '=INDEX(B2:D5,MATCH(G1,A2:A5,0),MATCH(G2,B1:D1,0))',
      mustUse: ['INDEX', 'XLOOKUP'],
      hints: ['Anda butuh dua nomor: baris untuk kota, kolom untuk berat.', 'INDEX mengambil dari tabel angka B2:D5. MATCH pertama mencari kota di A2:A5, MATCH kedua mencari berat di B1:D1.', 'Tulis: =INDEX(B2:D5,MATCH(G1,A2:A5,0),MATCH(G2,B1:D1,0))'],
      parts: [['B2:D5', 'Tabel isi (angka saja)'], ['MATCH(G1,A2:A5,0)', 'Surabaya = baris ke-3'], ['MATCH(G2,B1:D1,0)', '"2 kg" = kolom ke-2']],
      explain: 'Pertemuan baris ke-3 dan kolom ke-2 dari tabel isi adalah 26.000.'
    }),
    f({
      title: 'Cara lain dengan XLOOKUP bersarang',
      story: 'XLOOKUP dapat digunakan bersarang untuk lookup dua arah.',
      task: 'Di sel **G3**, hitung ongkos kirim yang sama dengan **dua XLOOKUP** (satu di dalam yang lain).',
      sheets: [sheet('Tarif', tarifRows.map((r, i) => (i === 0 ? [...r, null, null, 'Medan'] : i === 1 ? [...r, null, null, '5 kg'] : r)), { B: 'rp', C: 'rp', D: 'rp' })],
      target: 'G3',
      resultFmt: 'rp',
      expect: 90000,
      solution: '=XLOOKUP(G2,B1:D1,XLOOKUP(G1,A2:A5,B2:D5))',
      mustUse: ['XLOOKUP'],
      hints: ['XLOOKUP bagian dalam mengambil satu baris utuh milik kota itu.', 'XLOOKUP bagian luar memilih kolom berat dari baris tadi.', 'Tulis: =XLOOKUP(G2,B1:D1,XLOOKUP(G1,A2:A5,B2:D5))'],
      explain: 'XLOOKUP dalam mengembalikan baris kota (3 angka). XLOOKUP luar memilih satu angka berdasarkan judul berat di B1:D1.'
    }),
    f({
      title: 'Ongkos kirim untuk banyak paket',
      task: 'Di sel **C2**, hitung ongkos kirim tiap paket berdasarkan kota (A2) dan berat (B2) dari sheet **Tarif**. Salin sampai C5.',
      sheets: [
        sheet('Kirim', [['Kota', 'Berat', 'Ongkir'], ['Jakarta', '1 kg', ''], ['Medan', '5 kg', ''], ['Bandung', '2 kg', ''], ['Surabaya', '1 kg', '']], { C: 'rp' }),
        sheet('Tarif', tarifRows, { B: 'rp', C: 'rp', D: 'rp' })
      ],
      target: 'C2',
      fillTo: 'C5',
      resultFmt: 'rp',
      expect: [[9000], [90000], [20000], [15000]],
      solution: '=INDEX(Tarif!$B$2:$D$5,MATCH(A2,Tarif!$A$2:$A$5,0),MATCH(B2,Tarif!$B$1:$D$1,0))',
      shouldFail: ['=INDEX(Tarif!B2:D5,MATCH(A2,Tarif!A2:A5,0),MATCH(B2,Tarif!B1:D1,0))'],
      mustUse: ['INDEX', 'XLOOKUP'],
      hints: ['Rumusnya sama seperti soal sebelumnya, tetapi tabel ada di sheet lain.', 'Kunci semua range tabel dengan $, termasuk judul kolom.', 'Tulis: =INDEX(Tarif!$B$2:$D$5,MATCH(A2,Tarif!$A$2:$A$5,0),MATCH(B2,Tarif!$B$1:$D$1,0))'],
      explain: 'Tabel tarif selalu dikunci. Hanya A2 dan B2 yang bergeser mengikuti baris pengiriman.'
    }),
    f({
      title: 'Pajak penghasilan progresif',
      story: 'Lapisan: 0 sampai 60 juta tarif 5%, 60 sampai 250 juta 15%, 250 sampai 500 juta 25%, dan di atas 500 juta 30%. Tabel menyimpan selisih tarif tiap lapisan (5%, 10%, 10%, 5%).',
      task: 'Di sel **E2**, hitung **total pajak** untuk penghasilan di **E1** menggunakan SUMPRODUCT dan tabel batas + selisih tarif.',
      sheets: [sheet('Pajak', [['Batas', 'Selisih tarif', null, 'Penghasilan', 300000000], [0, 0.05, null, 'Pajak', ''], [60000000, 0.1], [250000000, 0.1], [500000000, 0.05]], { A: 'rp', B: 'pct', E: 'rp' })],
      target: 'E2',
      resultFmt: 'rp',
      expect: 44000000,
      solution: '=SUMPRODUCT((E1>A2:A5)*(E1-A2:A5)*B2:B5)',
      mustUse: ['SUMPRODUCT'],
      hints: ['Setiap lapisan memberi kontribusi: (penghasilan − batas lapisan) × selisih tarif, tetapi hanya jika penghasilan melewati batas itu.', 'Syarat "melewati batas" = (E1>A2:A5). Kalikan dengan (E1−batas) dan selisih tarif.', 'Tulis: =SUMPRODUCT((E1>A2:A5)*(E1-A2:A5)*B2:B5)'],
      parts: [['(E1>A2:A5)', '1 jika penghasilan melewati batas lapisan'], ['(E1-A2:A5)', 'bagian penghasilan di atas batas'], ['*B2:B5', 'dikali selisih tarif lapisan']],
      explain: '300 juta × 5% + 240 juta × 10% + 50 juta × 10% + 0 = 15 + 24 + 5 = Rp 44 juta. Lapisan 500 juta tidak tersentuh.'
    }),
    f({
      title: 'Pencarian dengan kata kunci sebagian',
      story: 'Anda hanya mengingat sebagian nama produk: "hijau".',
      task: 'Di sel **E2**, cari **harga** produk yang namanya **mengandung kata di E1**. Gunakan wildcard `*` di kedua sisi dan XLOOKUP dengan mode cocok **2** (wildcard).',
      sheets: [sheet('Katalog', [['Produk', 'Harga', null, 'Kata kunci', 'hijau'], ['Kopi Arabika', 45000, null, 'Harga', ''], ['Teh Hijau', 15000], ['Susu Murni', 18000]], { B: 'rp', E: 'rp' })],
      target: 'E2',
      resultFmt: 'rp',
      expect: 15000,
      solution: '=XLOOKUP("*"&E1&"*",A2:A4,B2:B4,"-",2)',
      mustUse: ['XLOOKUP'],
      hints: ['Gabungkan tanda bintang, kata kunci, dan tanda bintang menjadi pola pencarian.', '"*"&E1&"*" membentuk pola yang mencocokkan teks apa pun yang mengandung kata kunci. Mode cocok 2 mengaktifkan wildcard.', 'Tulis: =XLOOKUP("*"&E1&"*",A2:A4,B2:B4,"-",2)'],
      explain: 'Wildcard membuat pencarian lebih fleksibel: "hijau" ditemukan di dalam "Teh Hijau". Pencarian tidak peduli huruf besar-kecil.'
    }),
    f({
      title: 'Referensi seluruh kolom',
      story: 'Data terus bertambah setiap hari. Rumus dengan range tetap (A2:A6) tidak akan menjangkau baris baru.',
      task: 'Di sel **G2**, ambil gaji karyawan yang namanya di G1 menggunakan referensi **seluruh kolom** (misalnya B:B) agar rumus otomatis mencakup baris baru.',
      sheets: [sheet('Karyawan', [['ID', 'Nama', 'Divisi', 'Gaji', null, null, 'Tari'], ['K01', 'Rina', 'Marketing', 7500000], ['K02', 'Sandi', 'IT', 9000000], ['K03', 'Tari', 'HR', 6800000], ['K04', 'Umar', 'IT', 9500000]], { D: 'rp' })],
      target: 'G2',
      resultFmt: 'rp',
      expect: 6800000,
      solution: '=XLOOKUP(G1,B:B,D:D)',
      alt: ['=VLOOKUP(G1,B:D,3,FALSE)', '=INDEX(D:D,MATCH(G1,B:B,0))'],
      hints: ['Ganti range dengan referensi kolom utuh.', 'Referensi seluruh kolom ditulis B:B (tanpa nomor baris).', 'Tulis: =XLOOKUP(G1,B:B,D:D)'],
      explain: 'Referensi kolom penuh (B:B) otomatis menjangkau baris yang ditambahkan kemudian. Hindari memakainya pada perhitungan array yang berat di tabel yang sangat besar.'
    }),
    q({
      title: 'Memilih fungsi yang sesuai',
      q: 'Anda membuat model tarif ongkir untuk kolega yang menggunakan **Excel 2016**. Cara lookup dua arah yang paling aman adalah...',
      options: ['XLOOKUP bersarang', 'INDEX dengan dua MATCH', 'FILTER dan SORT', 'LET dengan XLOOKUP'],
      answer: 1,
      explain: 'INDEX dan MATCH tersedia di semua versi Excel. XLOOKUP, FILTER, dan LET hanya ada di Excel 2021 / 365.'
    })
  ]
};

// -------- Studi kasus: laporan penjualan --------
const transaksi = [
  [D('2025-01-05'), 'Andi', 'Laptop', 2],
  [D('2025-01-12'), 'Budi', 'Mouse', 10],
  [D('2025-01-20'), 'Citra', 'Monitor', 3],
  [D('2025-02-03'), 'Andi', 'Mouse', 20],
  [D('2025-02-14'), 'Budi', 'Laptop', 1],
  [D('2025-02-25'), 'Citra', 'Laptop', 2],
  [D('2025-03-02'), 'Andi', 'Monitor', 4],
  [D('2025-03-15'), 'Budi', 'Monitor', 2],
  [D('2025-03-28'), 'Citra', 'Mouse', 15],
  [D('2025-03-30'), 'Andi', 'Laptop', 1]
];
const hargaSheet = () => sheet('Harga', [['Produk', 'Harga', 'HPP'], ['Laptop', 10000000, 8000000], ['Mouse', 150000, 90000], ['Monitor', 3000000, 2400000]], { B: 'rp', C: 'rp' });
const penjualanSheet = ({ omzet = false, laba = false, ringkas = false, extra = [] } = {}) => {
  const rows = [['Tanggal', 'Sales', 'Produk', 'Qty', 'Omzet', 'Laba']];
  transaksi.forEach((t, i) => {
    const r = i + 2;
    rows.push([
      ...t,
      omzet ? `=D${r}*VLOOKUP(C${r},Harga!$A$2:$C$4,2,FALSE)` : '',
      laba ? `=D${r}*(VLOOKUP(C${r},Harga!$A$2:$C$4,2,FALSE)-VLOOKUP(C${r},Harga!$A$2:$C$4,3,FALSE))` : ''
    ]);
  });
  if (ringkas) {
    rows[0].push(null, 'Sales', 'Total omzet');
    ['Andi', 'Budi', 'Citra'].forEach((n, i) => {
      rows[i + 1].push(null, n, `=SUMIF($B$2:$B$11,H${i + 2},$E$2:$E$11)`);
    });
  }
  rows.push([null], ...extra);
  return sheet('Transaksi', rows, { A: 'date', E: 'rp', F: 'rp', I: 'rp' });
};

const kasusPenjualan = {
  id: 'kasus-penjualan',
  level: 5,
  icon: 'trending-up',
  title: 'Studi Kasus: Laporan Penjualan',
  tagline: 'Ubah data transaksi mentah menjadi laporan omzet, laba, peringkat sales, dan pertumbuhan untuk manajemen.',
  why: 'Ini adalah pekerjaan nyata seorang analis: mengubah data transaksi mentah menjadi omzet, laba, peringkat sales, dan pertumbuhan. Anda akan menggunakan banyak fungsi sekaligus.',
  minutes: 22,
  lessons: [
    {
      title: 'Pola kerja seorang analis',
      body: [
        p('Anda mendapat data transaksi mentah: tanggal, sales, produk, dan qty. Tabel harga dan HPP ada di sheet lain. Manajemen ingin tahu omzet, sales terbaik, margin laba, dan pertumbuhan.'),
        steps(
          '**Pahami data**: kolom apa saja, satu baris mewakili apa.',
          '**Bangun kolom hitung**: omzet = qty × harga (lookup dari sheet Harga).',
          '**Ringkas**: SUMIF, SUMIFS, dan MAX untuk menjawab pertanyaan.',
          '**Verifikasi**: pastikan totalnya masuk akal dengan mencocokkannya pada perhitungan manual berskala kecil.'
        ),
        tip('Gunakan kolom bantu yang jelas (Omzet, Laba) daripada satu rumus yang sangat panjang. Rumus yang mudah dibaca lebih mudah diperiksa dan diperbaiki.')
      ]
    }
  ],
  exercises: [
    f({
      title: 'Kolom omzet per transaksi',
      story: 'Sheet "Harga" menyimpan harga jual dan HPP tiap produk.',
      task: 'Di sel **E2**, hitung **omzet** = qty (D2) × harga produk (ambil dari sheet Harga). Salin sampai E11.',
      sheets: [penjualanSheet(), hargaSheet()],
      target: 'E2',
      fillTo: 'E11',
      resultFmt: 'rp',
      expect: [[20000000], [1500000], [9000000], [3000000], [10000000], [20000000], [12000000], [6000000], [2250000], [10000000]],
      solution: '=D2*VLOOKUP(C2,Harga!$A$2:$C$4,2,FALSE)',
      alt: ['=D2*XLOOKUP(C2,Harga!$A$2:$A$4,Harga!$B$2:$B$4)', '=D2*INDEX(Harga!$B$2:$B$4,MATCH(C2,Harga!$A$2:$A$4,0))'],
      mustUse: ['VLOOKUP', 'XLOOKUP', 'INDEX'],
      hints: ['Omzet = jumlah × harga satuan. Harga satuan harus dicari dari sheet lain.', 'Gunakan lookup untuk harga (kolom ke-2 dari tabel Harga) lalu kalikan dengan qty. Kunci tabelnya.', 'Tulis: =D2*VLOOKUP(C2,Harga!$A$2:$C$4,2,FALSE)'],
      explain: 'Ini pola dasar hampir semua laporan penjualan: satu kolom hitung yang mengambil harga lewat lookup.'
    }),
    f({
      title: 'Omzet satu sales',
      story: 'Kolom Omzet sudah terisi.',
      task: 'Di sel **E13**, hitung **total omzet milik Andi**.',
      sheets: [penjualanSheet({ omzet: true, extra: [['Omzet Andi', null, null, null, '']] }), hargaSheet()],
      target: 'E13',
      resultFmt: 'rp',
      expect: 45000000,
      solution: '=SUMIF(B2:B11,"Andi",E2:E11)',
      alt: ['=SUMIFS(E2:E11,B2:B11,"Andi")'],
      mustUse: ['SUMIF', 'SUMIFS', 'SUMPRODUCT'],
      hints: ['Jumlahkan hanya baris milik Andi.', 'SUMIF(kolom Sales, "Andi", kolom Omzet).', 'Tulis: =SUMIF(B2:B11,"Andi",E2:E11)'],
      explain: '20 juta + 3 juta + 12 juta + 10 juta = 45 juta.'
    }),
    f({
      title: 'Omzet bulan Februari',
      task: 'Di sel **E13**, hitung **total omzet bulan Februari 2025**. Batas akhir bulan dihitung dengan EOMONTH, jangan mengetik angka 28 secara manual.',
      sheets: [penjualanSheet({ omzet: true, extra: [['Omzet Februari', null, null, null, '']] }), hargaSheet()],
      target: 'E13',
      resultFmt: 'rp',
      expect: 33000000,
      solution: '=SUMIFS(E2:E11,A2:A11,">="&DATE(2025,2,1),A2:A11,"<="&EOMONTH(DATE(2025,2,1),0))',
      mustUse: ['SUMIFS', 'SUMPRODUCT'],
      hints: ['Dua batas tanggal: awal Februari dan akhir Februari.', 'Awal = DATE(2025,2,1). Akhir = EOMONTH(awal, 0).', 'Tulis: =SUMIFS(E2:E11,A2:A11,">="&DATE(2025,2,1),A2:A11,"<="&EOMONTH(DATE(2025,2,1),0))'],
      explain: 'Transaksi Februari: 3 juta + 10 juta + 20 juta = 33 juta. EOMONTH menangani panjang bulan secara otomatis.'
    }),
    f({
      title: 'Menentukan sales terbaik',
      story: 'Tabel ringkasan di H1:I4 sudah menghitung total omzet tiap sales.',
      task: 'Di sel **I6**, tampilkan **nama sales dengan total omzet tertinggi**.',
      sheets: [penjualanSheet({ omzet: true, ringkas: true }), hargaSheet()].map((s, i) => (i === 0 ? { ...s, rows: s.rows.map((r, ri) => (ri === 5 ? [...r.slice(0, 6), null, 'Sales terbaik', ''] : r)) } : s)),
      target: 'I6',
      expect: 'Andi',
      solution: '=INDEX(H2:H4,MATCH(MAX(I2:I4),I2:I4,0))',
      alt: ['=XLOOKUP(MAX(I2:I4),I2:I4,H2:H4)'],
      hints: ['Cari total tertinggi terlebih dahulu, lalu cari pemiliknya.', 'MAX untuk nilai tertinggi, MATCH untuk posisinya, INDEX untuk nama pada posisi itu.', 'Tulis: =INDEX(H2:H4,MATCH(MAX(I2:I4),I2:I4,0))'],
      explain: 'Andi 45 juta, Citra 31,25 juta, Budi 17,5 juta. Pola INDEX-MATCH-MAX dapat digunakan setiap kali Anda perlu menentukan pemilik nilai tertinggi.'
    }),
    f({
      title: 'Margin laba keseluruhan',
      story: 'Kolom Omzet dan Laba sudah terisi.',
      task: 'Di sel **E13**, hitung **margin laba** = total laba dibagi total omzet.',
      sheets: [penjualanSheet({ omzet: true, laba: true, extra: [['Margin laba', null, null, null, '']] }), hargaSheet()],
      target: 'E13',
      resultFmt: 'pct',
      expect: 20100000 / 93750000,
      solution: '=SUM(F2:F11)/SUM(E2:E11)',
      hints: ['Margin laba adalah perbandingan: laba dibagi omzet.', 'Jumlahkan kolom Laba dan kolom Omzet, lalu bagi.', 'Tulis: =SUM(F2:F11)/SUM(E2:E11)'],
      explain: 'Total laba Rp 20,1 juta dari omzet Rp 93,75 juta, margin sekitar 21,4%.'
    }),
    f({
      title: 'Pertumbuhan Maret vs Februari',
      story: 'Manajemen ingin tahu apakah penjualan Maret naik atau turun dibanding Februari.',
      task: 'Di sel **E13**, hitung **persentase pertumbuhan omzet** Maret dibanding Februari 2025: (Maret − Februari) ÷ Februari. Satu rumus saja.',
      sheets: [penjualanSheet({ omzet: true, extra: [['Pertumbuhan Mar vs Feb', null, null, null, '']] }), hargaSheet()],
      target: 'E13',
      resultFmt: 'pct',
      expect: (30250000 - 33000000) / 33000000,
      solution: '=LET(feb,SUMIFS(E2:E11,A2:A11,">="&DATE(2025,2,1),A2:A11,"<="&EOMONTH(DATE(2025,2,1),0)),mar,SUMIFS(E2:E11,A2:A11,">="&DATE(2025,3,1),A2:A11,"<="&EOMONTH(DATE(2025,3,1),0)),(mar-feb)/feb)',
      alt: ['=(SUMIFS(E2:E11,A2:A11,">="&DATE(2025,3,1))-SUMIFS(E2:E11,A2:A11,">="&DATE(2025,2,1),A2:A11,"<="&DATE(2025,2,28)))/SUMIFS(E2:E11,A2:A11,">="&DATE(2025,2,1),A2:A11,"<="&DATE(2025,2,28))'],
      hints: ['Hitung dua angka: omzet Februari dan omzet Maret. Lalu terapkan rumus pertumbuhan.', 'LET sangat membantu agar omzet Februari tidak ditulis dua kali.', 'Tulis: =LET(feb,SUMIFS(E2:E11,A2:A11,">="&DATE(2025,2,1),A2:A11,"<="&EOMONTH(DATE(2025,2,1),0)),mar,SUMIFS(E2:E11,A2:A11,">="&DATE(2025,3,1),A2:A11,"<="&EOMONTH(DATE(2025,3,1),0)),(mar-feb)/feb)'],
      explain: 'Februari 33 juta, Maret 30,25 juta. Pertumbuhan = (30,25 − 33) / 33 = −8,3%. Penjualan Maret turun.'
    })
  ]
};

// -------- Studi kasus: payroll --------
const karyawanData = [
  ['Rina', 'Staff', D('2020-03-01'), 6000000, 22, 5],
  ['Sandi', 'Supervisor', D('2018-07-15'), 9000000, 20, 0],
  ['Tari', 'Staff', D('2023-01-10'), 5500000, 22, 10],
  ['Umar', 'Manager', D('2015-11-01'), 15000000, 21, 2],
  ['Vina', 'Staff', D('2024-06-01'), 5000000, 18, 8]
];
const payrollSheet = (filled = [], extra = []) => {
  const rows = [['Nama', 'Jabatan', 'Tgl masuk', 'Gaji pokok', 'Hadir', 'Lembur (jam)', 'Masa kerja', 'Tunjangan', 'Lembur (Rp)', 'Potongan', 'Gaji bersih', null, 'Tarif lembur/jam', 50000]];
  karyawanData.forEach((k, i) => {
    const r = i + 2;
    const row = [...k];
    row.push(filled.includes('G') ? `=DATEDIF(C${r},$N$3,"Y")` : '');
    row.push(filled.includes('H') ? `=IFS(G${r}>=5,D${r}*10%,G${r}>=2,D${r}*5%,TRUE,0)` : '');
    row.push(filled.includes('I') ? `=F${r}*$N$1` : '');
    row.push(filled.includes('J') ? `=ROUND(($N$2-E${r})/$N$2*D${r},0)` : '');
    row.push(filled.includes('K') ? `=D${r}+H${r}+I${r}-J${r}` : '');
    if (i === 0) row.push(null, 'Hari kerja', 22);
    if (i === 1) row.push(null, 'Tanggal acuan', D('2025-06-15'));
    rows.push(row);
  });
  rows.push([null], ...extra);
  return sheet('Payroll', rows, { C: 'date', D: 'rp', H: 'rp', I: 'rp', J: 'rp', K: 'rp', N: 'int', N3: 'date' });
};

const kasusPayroll = {
  id: 'kasus-payroll',
  level: 5,
  icon: 'users',
  title: 'Studi Kasus: Payroll dan HR',
  tagline: 'Hitung gaji karyawan lengkap dengan tunjangan, lembur, dan potongan dari data dasar.',
  why: 'Tim HR dan keuangan menghitung gaji, tunjangan, lembur, dan potongan setiap bulan. Kasus ini memadukan fungsi tanggal, IF, referensi terkunci, dan pembulatan.',
  minutes: 22,
  lessons: [
    {
      title: 'Merancang tabel payroll',
      body: [
        p('Tabel payroll yang baik memisahkan **data masukan** (gaji pokok, kehadiran) dari **parameter** (tarif lembur, hari kerja, tanggal acuan) dan **hasil hitungan** (tunjangan, potongan, gaji bersih).'),
        steps(
          'Parameter disimpan di sel tersendiri (N1:N3) sehingga mudah diubah dan dirujuk dengan `$`.',
          'Setiap kolom hitung menggunakan satu rumus yang disalin ke bawah.',
          'Gaji bersih = gaji pokok + tunjangan + lembur − potongan.'
        ),
        warn('Hindari mengetik angka seperti 50000 atau 22 langsung di dalam rumus. Simpan di sel parameter agar perubahan kebijakan cukup dilakukan di satu tempat.')
      ]
    }
  ],
  exercises: [
    f({
      title: 'Masa kerja dalam tahun',
      story: 'Tanggal acuan perhitungan ada di N3 (15 Juni 2025).',
      task: 'Di sel **G2**, hitung masa kerja karyawan dalam **tahun penuh** dari tanggal masuk (C2) sampai tanggal acuan di N3. Salin sampai G6.',
      sheets: [payrollSheet()],
      target: 'G2',
      fillTo: 'G6',
      expect: [[5], [6], [2], [9], [1]],
      solution: '=DATEDIF(C2,$N$3,"Y")',
      shouldFail: ['=DATEDIF(C2,N3,"Y")'],
      mustUse: ['DATEDIF'],
      hints: ['Selisih tahun penuh antara dua tanggal.', 'DATEDIF(tanggal masuk, tanggal acuan, "Y"). Tanggal acuan harus dikunci.', 'Tulis: =DATEDIF(C2,$N$3,"Y")'],
      explain: 'Tanpa $, N3 ikut bergeser ke N4, N5, dan seterusnya (kosong), sehingga hasilnya error.'
    }),
    f({
      title: 'Upah lembur',
      story: 'Tarif lembur Rp 50.000 per jam ada di N1.',
      task: 'Di sel **I2**, hitung **upah lembur** = jam lembur (F2) × tarif di N1. Salin sampai I6.',
      sheets: [payrollSheet()],
      target: 'I2',
      fillTo: 'I6',
      resultFmt: 'rp',
      expect: [[250000], [0], [500000], [100000], [400000]],
      solution: '=F2*$N$1',
      shouldFail: ['=F2*N1'],
      hints: ['Jam lembur berbeda tiap orang, tarifnya sama untuk semua.', 'Kunci sel tarif dengan $.', 'Tulis: =F2*$N$1'],
      explain: 'Jika kebijakan tarif lembur berubah, cukup edit N1 dan seluruh kolom ikut menyesuaikan.'
    }),
    f({
      title: 'Tunjangan masa kerja',
      story: 'Masa kerja 5 tahun atau lebih mendapat tunjangan 10% dari gaji pokok. 2 sampai 4 tahun mendapat 5%. Kurang dari 2 tahun tidak mendapat tunjangan.',
      task: 'Di sel **H2**, hitung **tunjangan (rupiah)** berdasarkan masa kerja (G2) dan gaji pokok (D2). Salin sampai H6.',
      sheets: [payrollSheet(['G'])],
      target: 'H2',
      fillTo: 'H6',
      resultFmt: 'rp',
      expect: [[600000], [900000], [275000], [1500000], [0]],
      solution: '=IFS(G2>=5,D2*10%,G2>=2,D2*5%,TRUE,0)',
      alt: ['=IF(G2>=5,D2*10%,IF(G2>=2,D2*5%,0))'],
      hints: ['Tiga tingkat, jadi butuh IF bersarang atau IFS. Mulai dari batas tertinggi.', 'Hasil tiap tingkat adalah persentase dari gaji pokok.', 'Tulis: =IFS(G2>=5,D2*10%,G2>=2,D2*5%,TRUE,0)'],
      explain: 'Kolom Masa kerja yang dihitung di soal sebelumnya sekarang menjadi masukan untuk tunjangan. Itulah gunanya kolom bantu.'
    }),
    f({
      title: 'Potongan absensi',
      story: 'Hari kerja bulan ini ada di N2 (22 hari). Potongan = bagian hari yang tidak hadir dari gaji pokok, dibulatkan ke rupiah.',
      task: 'Di sel **J2**, hitung **potongan** = (hari kerja − hadir) ÷ hari kerja × gaji pokok, dibulatkan ke rupiah. Salin sampai J6.',
      sheets: [payrollSheet()],
      target: 'J2',
      fillTo: 'J6',
      resultFmt: 'rp',
      expect: [[0], [818182], [0], [681818], [909091]],
      solution: '=ROUND(($N$2-E2)/$N$2*D2,0)',
      shouldFail: ['=ROUND((N2-E2)/N2*D2,0)'],
      mustUse: ['ROUND'],
      hints: ['Berapa hari tidak hadir? Hari kerja dikurangi hadir.', 'Kunci N2. Bulatkan hasil akhir dengan ROUND ke 0 desimal.', 'Tulis: =ROUND(($N$2-E2)/$N$2*D2,0)'],
      explain: 'Sandi tidak hadir 2 hari: 2/22 × 9.000.000 = 818.181,8 yang dibulatkan menjadi 818.182.'
    }),
    f({
      title: 'Gaji bersih',
      story: 'Semua komponen sudah dihitung.',
      task: 'Di sel **K2**, hitung **gaji bersih** = gaji pokok + tunjangan + upah lembur − potongan. Salin sampai K6.',
      sheets: [payrollSheet(['G', 'H', 'I', 'J'])],
      target: 'K2',
      fillTo: 'K6',
      resultFmt: 'rp',
      expect: [[6850000], [9081818], [6275000], [15918182], [4490909]],
      solution: '=D2+H2+I2-J2',
      hints: ['Tambahkan komponen yang menambah, kurangkan komponen yang mengurangi.', 'Gaji pokok = D, tunjangan = H, lembur = I, potongan = J.', 'Tulis: =D2+H2+I2-J2'],
      explain: 'Tahap akhir rumus payroll sering sederhana, karena semua kerumitan sudah dipecah ke kolom bantu.'
    }),
    f({
      title: 'Total beban gaji',
      story: 'Kolom gaji bersih sudah terisi.',
      task: 'Di sel **K8**, hitung **total gaji bersih** seluruh karyawan.',
      sheets: [payrollSheet(['G', 'H', 'I', 'J', 'K'], [[null, null, null, null, null, null, null, null, null, 'Total', '']])],
      target: 'K8',
      resultFmt: 'rp',
      expect: 42615909,
      solution: '=SUM(K2:K6)',
      mustUse: ['SUM', 'SUMPRODUCT'],
      hints: ['Jumlahkan seluruh kolom gaji bersih.', 'Range-nya K2 sampai K6.', 'Tulis: =SUM(K2:K6)'],
      explain: 'Total yang harus disiapkan perusahaan bulan ini: Rp 42.615.909.'
    }),
    f({
      title: 'Gaji di atas rata-rata',
      task: 'Di sel **D8**, hitung **berapa karyawan** yang gaji pokoknya **di atas rata-rata** gaji pokok seluruh karyawan.',
      sheets: [payrollSheet([], [['Di atas rata-rata', null, null, '']])],
      target: 'D8',
      expect: 2,
      solution: '=COUNTIF(D2:D6,">"&AVERAGE(D2:D6))',
      mustUse: ['COUNTIF', 'COUNTIFS'],
      hints: ['Cari rata-rata terlebih dahulu, lalu hitung yang lebih besar darinya.', 'Rata-rata dapat ditulis langsung di dalam kriteria COUNTIF.', 'Tulis: =COUNTIF(D2:D6,">"&AVERAGE(D2:D6))'],
      explain: 'Rata-rata gaji pokok Rp 8,1 juta. Hanya Sandi (9 juta) dan Umar (15 juta) yang lebih tinggi.'
    }),
    f({
      title: 'Rata-rata gaji staff',
      task: 'Di sel **D8**, hitung **rata-rata gaji pokok** karyawan berjabatan **Staff**.',
      sheets: [payrollSheet([], [['Rata-rata Staff', null, null, '']])],
      target: 'D8',
      resultFmt: 'rp',
      expect: 5500000,
      solution: '=AVERAGEIF(B2:B6,"Staff",D2:D6)',
      mustUse: ['AVERAGEIF', 'AVERAGEIFS'],
      hints: ['Rata-rata bersyarat berdasarkan jabatan.', 'AVERAGEIF(kolom jabatan, "Staff", kolom gaji pokok).', 'Tulis: =AVERAGEIF(B2:B6,"Staff",D2:D6)'],
      explain: '(6.000.000 + 5.500.000 + 5.000.000) ÷ 3 = 5.500.000.'
    })
  ]
};

// -------- Studi kasus: inventori --------
const stokSheet = (extra = []) => sheet('Stok', [
  ['Kode', 'Barang', 'Stok', 'Minimum', 'Harga beli', 'Supplier', 'Status', 'Pesan'],
  ['P001', 'Pulpen', 120, 50, 2000, 'ABC'],
  ['P002', 'Buku', 30, 40, 6000, 'XYZ'],
  ['P003', 'Penggaris', 75, 30, 2500, 'ABC'],
  ['P004', 'Spidol', 10, 25, 9000, 'XYZ'],
  ['P005', 'Map', 200, 100, 1000, 'DEF'],
  [null],
  ...extra
], { E: 'rp' });

const kasusInventori = {
  id: 'kasus-inventori',
  level: 5,
  icon: 'package',
  title: 'Studi Kasus: Inventori Gudang',
  tagline: 'Pantau stok, tentukan waktu pemesanan ulang, dan hitung nilai persediaan.',
  why: 'Gudang yang kehabisan stok kehilangan penjualan, sedangkan stok berlebih menahan modal. Excel membantu tim gudang memantau keduanya.',
  minutes: 20,
  lessons: [
    {
      title: 'Tiga pertanyaan inti gudang',
      body: [
        steps(
          '**Apa yang harus dipesan?** Bandingkan stok dengan minimum.',
          '**Berapa yang harus dipesan?** Sampai tingkat target, misalnya dua kali stok minimum.',
          '**Berapa nilai persediaan?** Stok × harga beli, dijumlahkan.'
        ),
        analogy('Mirip persediaan di dapur rumah: ada batas minimal ("jika telur tinggal 4, beli lagi") dan ada uang yang tertahan di dalamnya. Gudang hanyalah versi yang lebih besar.')
      ]
    }
  ],
  exercises: [
    f({
      title: 'Status stok',
      task: 'Di sel **G2**, tulis **"Pesan"** bila stok (C2) lebih kecil dari minimum (D2), selain itu **"Aman"**. Salin sampai G6.',
      sheets: [stokSheet()],
      target: 'G2',
      fillTo: 'G6',
      expect: [['Aman'], ['Pesan'], ['Aman'], ['Pesan'], ['Aman']],
      solution: '=IF(C2<D2,"Pesan","Aman")',
      mustUse: ['IF', 'IFS'],
      hints: ['Bandingkan dua kolom di baris yang sama.', 'Stok di bawah minimum berarti perlu dipesan.', 'Tulis: =IF(C2<D2,"Pesan","Aman")'],
      explain: 'Buku (30 < 40) dan Spidol (10 < 25) perlu dipesan.'
    }),
    f({
      title: 'Jumlah yang harus dipesan',
      story: 'Kebijakan: stok dipulihkan hingga dua kali jumlah minimum. Jika stok sudah cukup, tidak ada pesanan (hasilnya tidak boleh negatif).',
      task: 'Di sel **H2**, hitung **jumlah pesanan** = 2 × minimum − stok, tetapi **tidak boleh kurang dari 0**. Salin sampai H6.',
      sheets: [stokSheet()],
      target: 'H2',
      fillTo: 'H6',
      expect: [[0], [50], [0], [40], [0]],
      solution: '=MAX(0,D2*2-C2)',
      alt: ['=IF(D2*2>C2,D2*2-C2,0)'],
      wrongs: [{ value: [[-20], [50], [-15], [40], [0]], msg: 'Ada hasil negatif. Pesanan tidak boleh kurang dari 0. Gunakan MAX(0, ...).' }],
      hints: ['Kebutuhan = 2 × minimum − stok, tetapi hasilnya dapat negatif jika stok berlebih.', 'MAX(0, nilai) membatasi hasil agar minimal 0.', 'Tulis: =MAX(0,D2*2-C2)'],
      explain: 'MAX(0, ...) adalah cara yang rapi agar hasil tidak menjadi negatif. Pulpen: 100 − 120 = −20, jadi dibatasi menjadi 0.'
    }),
    f({
      title: 'Total nilai persediaan',
      task: 'Di sel **B8**, hitung **total nilai persediaan** = jumlah dari (stok × harga beli) seluruh barang.',
      sheets: [stokSheet([['Nilai persediaan', '']])],
      target: 'B8',
      resultFmt: 'rp',
      expect: 897500,
      solution: '=SUMPRODUCT(C2:C6,E2:E6)',
      mustUse: ['SUMPRODUCT'],
      hints: ['Setiap barang punya stok × harga. Lalu semuanya dijumlahkan.', 'SUMPRODUCT mengalikan dua kolom lalu menjumlahkan.', 'Tulis: =SUMPRODUCT(C2:C6,E2:E6)'],
      explain: '240.000 + 180.000 + 187.500 + 90.000 + 200.000 = 897.500.'
    }),
    f({
      title: 'Nilai persediaan satu supplier',
      task: 'Di sel **B8**, hitung nilai persediaan (stok × harga beli) hanya untuk barang dari supplier **XYZ**.',
      sheets: [stokSheet([['Nilai XYZ', '']])],
      target: 'B8',
      resultFmt: 'rp',
      expect: 270000,
      solution: '=SUMPRODUCT((F2:F6="XYZ")*C2:C6*E2:E6)',
      mustUse: ['SUMPRODUCT'],
      hints: ['Tambahkan syarat supplier ke dalam SUMPRODUCT.', '(F2:F6="XYZ") bernilai 1 untuk baris XYZ dan 0 untuk lainnya.', 'Tulis: =SUMPRODUCT((F2:F6="XYZ")*C2:C6*E2:E6)'],
      explain: 'Buku (30 × 6.000 = 180.000) + Spidol (10 × 9.000 = 90.000) = 270.000.'
    }),
    f({
      title: 'Daftar barang yang harus dipesan',
      story: 'Anda ingin daftar otomatis yang selalu mutakhir untuk dikirim ke bagian pembelian.',
      task: 'Di sel **B8**, tampilkan **nama barang** yang stoknya di bawah minimum dengan satu rumus.',
      sheets: [stokSheet([['Perlu dipesan', '']])],
      target: 'B8',
      expect: [['Buku'], ['Spidol']],
      solution: '=FILTER(B2:B6,C2:C6<D2:D6)',
      mustUse: ['FILTER'],
      hints: ['Saring daftar nama berdasarkan perbandingan dua kolom.', 'FILTER(kolom nama, stok < minimum).', 'Tulis: =FILTER(B2:B6,C2:C6<D2:D6)'],
      explain: 'Begitu stok diperbarui, daftar ikut berubah. Tidak perlu menyaring manual setiap hari.'
    }),
    f({
      title: 'Barang dengan nilai persediaan terbesar',
      task: 'Di sel **B8**, tampilkan **nama barang** yang nilai persediaannya (stok × harga beli) paling besar.',
      sheets: [stokSheet([['Terbesar', '']])],
      target: 'B8',
      expect: 'Pulpen',
      solution: '=INDEX(B2:B6,MATCH(MAX(C2:C6*E2:E6),C2:C6*E2:E6,0))',
      hints: ['Hitung nilai persediaan per barang (stok × harga), cari yang tertinggi, lalu cari namanya.', 'MAX dan MATCH dapat bekerja pada hasil perkalian dua kolom (C2:C6*E2:E6).', 'Tulis: =INDEX(B2:B6,MATCH(MAX(C2:C6*E2:E6),C2:C6*E2:E6,0))'],
      explain: 'Pulpen: 120 × 2.000 = 240.000, tertinggi di antara semua barang. Rumus array ini bekerja tanpa kolom bantu.'
    })
  ]
};

const fiturPro = {
  id: 'fitur-pro',
  level: 5,
  icon: 'sliders',
  title: 'Fitur Lanjutan Excel (Konsep)',
  tagline: 'Kenali konsep PivotTable, Tabel, Validasi Data, Format Bersyarat, dan praktik terbaik pemodelan data.',
  why: 'Rumus hanyalah satu bagian dari Excel. Profesional memilih alat yang paling sesuai: dalam beberapa kasus, PivotTable lebih efisien daripada ratusan rumus SUMIFS.',
  minutes: 16,
  lessons: [
    {
      title: 'Alat yang melengkapi rumus',
      body: [
        steps(
          '**PivotTable** : merangkum puluhan ribu baris menjadi tabel ringkas (total per wilayah per bulan) dengan seret-dan-lepas, tanpa rumus.',
          '**Tabel Excel (Ctrl + T)** : mengubah data menjadi tabel pintar. Rumus, format, dan rentang otomatis ikut bertambah saat ada baris baru.',
          '**Conditional Formatting** : mewarnai sel otomatis berdasarkan aturan (stok merah bila di bawah minimum).',
          '**Data Validation** : membatasi isi sel, misalnya dropdown yang hanya berisi "Lunas" dan "Belum", mencegah salah ketik.',
          '**Named Range** : memberi nama pada range, sehingga `=SUM(Penjualan)` lebih mudah dibaca daripada `=SUM(B2:B500)`.',
          '**Power Query** : mengimpor, menggabungkan, dan membersihkan data dari banyak sumber secara otomatis dan dapat diulang.',
          '**Freeze Panes** : membekukan baris judul agar tetap terlihat saat menggulir.',
          '**Protect Sheet** : mengunci sel rumus agar tidak terhapus secara tidak sengaja.'
        )
      ]
    },
    {
      title: 'Prinsip menyusun model data yang baik',
      body: [
        steps(
          '**Pisahkan** input, perhitungan, dan output. Jangan campur dalam satu area.',
          '**Satu rumus, satu tujuan**, lebih mudah diperiksa daripada satu rumus yang sangat panjang.',
          '**Dokumentasikan asumsi** (tarif, tanggal acuan, kebijakan) di sel yang terlihat.',
          '**Uji dengan angka kecil** yang dapat Anda hitung manual, lalu terapkan pada data yang besar.',
          '**Simpan versi**. Jangan menimpa file yang sudah dikirim ke orang lain.'
        )
      ]
    }
  ],
  exercises: [
    q({
      title: 'Meringkas data besar',
      q: 'Anda punya 50.000 baris transaksi dan atasan meminta **total penjualan per wilayah per bulan** dalam bentuk tabel, dan Anda harus dapat mengubah susunannya dengan cepat. Alat terbaik adalah...',
      options: ['Menulis ratusan rumus SUMIFS satu per satu', 'PivotTable', 'Menyalin data ke Word', 'Mengurutkan dan menjumlahkan manual'],
      answer: 1,
      explain: '**PivotTable** meringkas data besar hanya dengan seret-dan-lepas, dan dapat disusun ulang dalam hitungan detik.',
      whyNot: ['Dapat, tetapi lambat dan sulit dipelihara untuk kebutuhan seperti ini.', '', 'Word tidak dapat menghitung.', 'Memakan waktu lama dan rawan salah.']
    }),
    q({
      title: 'Peringatan otomatis',
      q: 'Anda ingin sel stok berubah **merah otomatis** ketika nilainya di bawah minimum. Fitur yang digunakan adalah...',
      options: ['Data Validation', 'Conditional Formatting', 'Freeze Panes', 'Protect Sheet'],
      answer: 1,
      explain: '**Conditional Formatting** (menu Home, lalu Conditional Formatting) mewarnai sel berdasarkan aturan yang Anda tentukan.',
      whyNot: ['Validation membatasi apa yang boleh diisi, tidak mewarnai.', '', 'Freeze Panes mengunci baris/kolom agar tetap terlihat.', 'Protect Sheet mencegah sel diubah.']
    }),
    q({
      title: 'Mencegah salah ketik',
      q: 'Kolom Status hanya boleh berisi "Lunas" atau "Belum", dan Anda ingin pengguna memilih dari **dropdown**. Fitur yang tepat adalah...',
      options: ['Conditional Formatting', 'Data Validation (List)', 'PivotTable', 'Named Range'],
      answer: 1,
      explain: '**Data Validation dengan tipe List** menampilkan dropdown dan menolak isian lain. Ini menjaga konsistensi data sejak awal.'
    }),
    q({
      title: 'Data yang tumbuh sendiri',
      q: 'Data penjualan Anda bertambah setiap hari, dan Anda ingin rumus serta format otomatis mencakup baris baru tanpa diedit. Langkah paling tepat...',
      options: ['Mengubah data menjadi Tabel Excel (Ctrl + T)', 'Menyalin rumus manual ke baris baru tiap hari', 'Mengganti font menjadi tebal', 'Menyembunyikan kolom'],
      answer: 0,
      explain: '**Tabel Excel** (Ctrl + T) otomatis memperluas rentang, rumus kolom, dan format saat Anda menambah baris.'
    }),
    q({
      title: 'Menggabungkan banyak file',
      q: 'Setiap bulan Anda menerima 12 file Excel dengan struktur sama dan harus menggabungkan serta membersihkannya. Alat yang menghemat paling banyak waktu...',
      options: ['Menyalin-tempel manual setiap bulan', 'Power Query', 'Membuka semua file dan melihatnya satu per satu', 'Rumus VLOOKUP'],
      answer: 1,
      explain: '**Power Query** (menu Data, lalu Get Data) mengimpor, menggabung, dan membersihkan data lewat langkah yang dapat diulang dengan satu klik "Refresh".'
    }),
    q({
      title: 'Judul tetap terlihat',
      q: 'Saat Anda menggulir tabel 1.000 baris ke bawah, baris judul kolom hilang dari layar. Solusinya...',
      options: ['Protect Sheet', 'Freeze Panes (Freeze Top Row)', 'Data Validation', 'Conditional Formatting'],
      answer: 1,
      explain: '**View, Freeze Panes, lalu Freeze Top Row** membuat baris judul tetap terlihat saat menggulir.'
    }),
    q({
      title: 'Memilih grafik',
      q: 'Anda ingin menunjukkan **perubahan penjualan dari bulan ke bulan** selama setahun. Jenis grafik yang paling tepat...',
      options: ['Grafik garis (Line)', 'Grafik pai (Pie) dengan 12 irisan', 'Grafik radar', 'Tidak perlu grafik'],
      answer: 0,
      explain: 'Tren dari waktu ke waktu paling jelas dengan **grafik garis**. Pie cocok untuk komposisi dari sedikit kategori (maksimal 5 sampai 6).'
    }),
    q({
      title: 'Melindungi sel rumus',
      q: 'Sel hasil perhitungan penting sering terhapus tidak sengaja oleh rekan kerja yang mengisi tabel. Cara mencegahnya...',
      options: ['Meminta mereka lebih hati-hati', 'Mengunci sel rumus lalu mengaktifkan Protect Sheet', 'Mengubah warna sel menjadi kuning', 'Menempatkan rumus di sheet paling kiri'],
      answer: 1,
      explain: 'Kunci sel yang berisi rumus (Format Cells, tab Protection), lalu aktifkan **Review, lalu Protect Sheet**. Sel input tetap dapat diisi.'
    }),
    q({
      title: 'Merancang model yang sehat',
      q: 'Manakah praktik yang paling membantu agar file Excel mudah dipahami dan dipercaya oleh orang lain?',
      options: ['Menempatkan semua angka dan rumus dalam satu area yang padat', 'Memisahkan input, perhitungan, dan output, serta menulis asumsi di sel yang terlihat', 'Mengetik angka tarif langsung di setiap rumus', 'Menyembunyikan semua sheet pendukung'],
      answer: 1,
      explain: 'Pemisahan input-hitung-output dan asumsi yang terdokumentasi membuat orang lain (dan diri Anda enam bulan lagi) dapat memeriksa dan memperbarui file dengan percaya diri.'
    })
  ]
};

export default [keuangan, lookup2arah, kasusPenjualan, kasusPayroll, kasusInventori, fiturPro];
