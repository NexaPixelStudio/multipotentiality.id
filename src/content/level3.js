import { sheet, f, q, p, analogy, tip, warn, steps, syntax, demo, D } from './helpers.js';

// ============================================================
// LEVEL 3 - MENENGAH
// ============================================================

const orderRows = (extra = []) => [
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
  ['Citra', 'Surabaya', 'Mouse', 8, 1200000],
  [null, null, null, null, null],
  ...extra
];
const orderFmt = { E: 'rp' };

const multiSyarat = {
  id: 'multi-syarat',
  level: 3,
  icon: 'layers',
  title: 'Fungsi dengan Syarat Ganda',
  tagline: 'Gunakan COUNTIFS, SUMIFS, AVERAGEIFS, MAXIFS, dan MINIFS untuk menganalisis data dengan beberapa kriteria sekaligus.',
  why: 'Pertanyaan bisnis jarang hanya memiliki satu syarat, misalnya omzet produk Laptop di Jakarta pada bulan Januari. Fungsi berakhiran "S" dirancang untuk kasus seperti ini dan termasuk kemampuan yang paling sering dibutuhkan di dunia kerja.',
  minutes: 15,
  lessons: [
    {
      title: 'Dari satu syarat ke beberapa syarat',
      body: [
        p('Dengan menambahkan huruf **S** (jamak) di akhir nama fungsi, Anda dapat memasang beberapa syarat sekaligus. Semua syarat harus terpenuhi (seperti AND).'),
        syntax('=SUMIFS(range_jumlah, range_syarat1, syarat1, range_syarat2, syarat2, ...)', [['range_jumlah', 'Kolom angka yang dijumlahkan (SELALU di posisi pertama pada SUMIFS)'], ['range_syarat1, syarat1', 'Pasangan pertama: kolom yang dicek + syaratnya'], ['range_syarat2, syarat2', 'Pasangan berikutnya, dapat ditambahkan sesuai kebutuhan']]),
        warn('Urutan argumen **berbeda** dari SUMIF. Di SUMIF, range jumlah ada di belakang. Di SUMIFS, range jumlah ada di **depan**. Perbedaan ini sering menimbulkan kebingungan.'),
        demo({
          rows: [['Wilayah', 'Produk', 'Omzet'], ['Jakarta', 'Laptop', 20], ['Jakarta', 'Mouse', 2], ['Bandung', 'Laptop', 10], ['Jakarta', 'Laptop', 10], ['Omzet Laptop Jakarta', '', '']],
          cell: 'C6',
          formula: '=SUMIFS(C2:C5,A2:A5,"Jakarta",B2:B5,"Laptop")',
          caption: 'Hanya baris 2 dan 5 yang Jakarta DAN Laptop: 20 + 10 = 30.'
        })
      ]
    },
    {
      title: 'Daftar lengkap fungsi bersyarat ganda',
      body: [
        steps(
          '`COUNTIFS(range1, syarat1, range2, syarat2, ...)` : menghitung baris yang memenuhi semua syarat.',
          '`SUMIFS(jumlah, range1, syarat1, ...)` : menjumlahkan.',
          '`AVERAGEIFS(rata, range1, syarat1, ...)` : rata-rata.',
          '`MAXIFS(nilai, range1, syarat1, ...)` : nilai terbesar yang memenuhi syarat.',
          '`MINIFS(nilai, range1, syarat1, ...)` : nilai terkecil yang memenuhi syarat.'
        ),
        p('Semua range harus **berukuran sama** (jumlah baris yang sama). Jika tidak, hasilnya #VALUE!.'),
        tip('Operator `<>` berarti "selain". Contoh `"<>Jakarta"` berarti semua wilayah kecuali Jakarta.')
      ]
    },
    {
      title: 'Syarat tanggal',
      body: [
        p('Untuk menyaring rentang tanggal, gunakan dua syarat pada kolom tanggal yang sama: satu batas bawah, satu batas atas. Operatornya digabung dengan tanggal menggunakan `&`:'),
        syntax('">="&DATE(2025,1,1)', [['">="', 'Operator sebagai teks'], ['&', 'disambung dengan'], ['DATE(2025,1,1)', 'tanggal 1 Januari 2025 (tersimpan sebagai angka)']]),
        p('Tanggal di Excel sebenarnya angka, jadi ">= tanggal" bekerja seperti ">= angka".')
      ]
    }
  ],
  exercises: [
    f({
      title: 'Jakarta dan Laptop',
      task: 'Di sel **B13**, hitung berapa transaksi dengan wilayah **Jakarta** dan produk **Laptop**.',
      sheets: [sheet('Order', orderRows([['Jakarta & Laptop', '']]), orderFmt)],
      target: 'B13',
      expect: 2,
      solution: '=COUNTIFS(B2:B11,"Jakarta",C2:C11,"Laptop")',
      mustUse: ['COUNTIFS'],
      hints: ['Dua syarat sekaligus, jadi COUNTIF biasa tidak cukup.', 'COUNTIFS(range1, syarat1, range2, syarat2).', 'Tulis: =COUNTIFS(B2:B11,"Jakarta",C2:C11,"Laptop")'],
      parts: [['B2:B11, "Jakarta"', 'Wilayah harus Jakarta'], ['C2:C11, "Laptop"', 'dan Produk harus Laptop']],
      explain: 'Hanya baris Andi (20 juta) dan Citra (10 juta) yang memenuhi kedua syarat: 2 transaksi.'
    }),
    f({
      title: 'Omzet Andi di Jakarta',
      task: 'Di sel **E13**, jumlahkan **omzet** yang dibuat oleh **Andi** di wilayah **Jakarta**.',
      sheets: [sheet('Order', orderRows([['Omzet Andi Jakarta', null, null, null, '']]), orderFmt)],
      target: 'E13',
      resultFmt: 'rp',
      expect: 20750000,
      solution: '=SUMIFS(E2:E11,A2:A11,"Andi",B2:B11,"Jakarta")',
      mustUse: ['SUMIFS', 'SUMPRODUCT'],
      hints: ['Range yang dijumlahkan ditulis lebih dahulu di SUMIFS.', 'Lalu pasangan: kolom Sales + "Andi", kolom Wilayah + "Jakarta".', 'Tulis: =SUMIFS(E2:E11,A2:A11,"Andi",B2:B11,"Jakarta")'],
      parts: [['E2:E11', 'Yang dijumlahkan: Omzet'], ['A2:A11, "Andi"', 'syarat 1: sales Andi'], ['B2:B11, "Jakarta"', 'syarat 2: wilayah Jakarta']],
      explain: 'Andi punya 3 transaksi, tetapi hanya 2 di Jakarta: 20.000.000 + 750.000.'
    }),
    f({
      title: 'Laptop di luar Jakarta',
      task: 'Di sel **E13**, jumlahkan omzet **Laptop** yang terjual di wilayah **selain Jakarta**. Operator "selain" adalah `<>`.',
      sheets: [sheet('Order', orderRows([['Laptop non-Jakarta', null, null, null, '']]), orderFmt)],
      target: 'E13',
      resultFmt: 'rp',
      expect: 40000000,
      solution: '=SUMIFS(E2:E11,C2:C11,"Laptop",B2:B11,"<>Jakarta")',
      mustUse: ['SUMIFS', 'SUMPRODUCT'],
      hints: ['Syarat pertama: produk adalah Laptop.', 'Syarat kedua: wilayah bukan Jakarta, ditulis "<>Jakarta".', 'Tulis: =SUMIFS(E2:E11,C2:C11,"Laptop",B2:B11,"<>Jakarta")'],
      explain: 'Laptop di Bandung (10 juta) + Surabaya (30 juta) = 40 juta. Laptop Jakarta tidak dihitung.'
    }),
    f({
      title: 'Transaksi besar untuk Laptop',
      task: 'Di sel **B13**, hitung berapa transaksi **Laptop** yang omzetnya **minimal Rp 10.000.000**.',
      sheets: [sheet('Order', orderRows([['Laptop >= 10 jt', '']]), orderFmt)],
      target: 'B13',
      expect: 4,
      solution: '=COUNTIFS(C2:C11,"Laptop",E2:E11,">=10000000")',
      mustUse: ['COUNTIFS'],
      hints: ['Satu syarat teks (produk), satu syarat angka (omzet).', 'Syarat angka ditulis dengan operatornya dalam kutip.', 'Tulis: =COUNTIFS(C2:C11,"Laptop",E2:E11,">=10000000")'],
      explain: 'Keempat transaksi Laptop memenuhi >= 10 juta: 20, 10, 30, dan 10 juta.'
    }),
    f({
      title: 'Rata-rata dengan dua syarat',
      task: 'Di sel **E13**, hitung **rata-rata omzet** produk **Monitor** yang **qty-nya minimal 2**.',
      sheets: [sheet('Order', orderRows([['Rata-rata Monitor qty >= 2', null, null, null, '']]), orderFmt)],
      target: 'E13',
      resultFmt: 'rp',
      expect: 9000000,
      solution: '=AVERAGEIFS(E2:E11,C2:C11,"Monitor",D2:D11,">=2")',
      mustUse: ['AVERAGEIFS'],
      hints: ['Rata-rata dengan lebih dari satu syarat menggunakan AVERAGEIFS.', 'Range rata-rata (omzet) ditulis pertama, lalu pasangan syarat.', 'Tulis: =AVERAGEIFS(E2:E11,C2:C11,"Monitor",D2:D11,">=2")'],
      explain: 'Monitor dengan qty >= 2 hanya dua transaksi: 6 juta dan 12 juta, rata-ratanya 9 juta. Transaksi Andi (qty 1) tidak ikut.'
    }),
    f({
      title: 'Omzet tertinggi di Jakarta',
      task: 'Di sel **E13**, cari **omzet tertinggi** untuk wilayah **Jakarta**.',
      sheets: [sheet('Order', orderRows([['Omzet tertinggi Jakarta', null, null, null, '']]), orderFmt)],
      target: 'E13',
      resultFmt: 'rp',
      expect: 20000000,
      solution: '=MAXIFS(E2:E11,B2:B11,"Jakarta")',
      mustUse: ['MAXIFS'],
      hints: ['Anda mencari nilai terbesar, tetapi hanya untuk baris Jakarta.', 'MAXIFS(nilai, kolom syarat, syarat).', 'Tulis: =MAXIFS(E2:E11,B2:B11,"Jakarta")'],
      explain: 'MAXIFS menyaring baris terlebih dahulu, baru mencari nilai maksimum. Tanpa fungsi ini, Anda memerlukan rumus array yang lebih rumit.'
    }),
    f({
      title: 'Omzet terendah di Surabaya',
      task: 'Di sel **E13**, cari **omzet terendah** untuk wilayah **Surabaya**.',
      sheets: [sheet('Order', orderRows([['Omzet terendah Surabaya', null, null, null, '']]), orderFmt)],
      target: 'E13',
      resultFmt: 'rp',
      expect: 1200000,
      solution: '=MINIFS(E2:E11,B2:B11,"Surabaya")',
      mustUse: ['MINIFS'],
      hints: ['Kebalikan dari MAXIFS.', 'MINIFS(nilai, kolom syarat, syarat).', 'Tulis: =MINIFS(E2:E11,B2:B11,"Surabaya")'],
      explain: 'Dari tiga transaksi Surabaya (30 juta, 12 juta, 1,2 juta), yang terendah adalah 1,2 juta.'
    }),
    f({
      title: 'Pengeluaran dalam rentang tanggal',
      story: 'Anda merekap pengeluaran makan hanya untuk Januari dan Februari 2025.',
      task: 'Di sel **C10**, jumlahkan pengeluaran kategori **Makan** dari **1 Januari 2025 sampai 28 Februari 2025**.',
      sheets: [sheet('Transaksi', [
        ['Tanggal', 'Kategori', 'Jumlah'],
        [D('2025-01-05'), 'Makan', 50000],
        [D('2025-01-12'), 'Transport', 30000],
        [D('2025-01-20'), 'Makan', 70000],
        [D('2025-02-03'), 'Makan', 40000],
        [D('2025-02-14'), 'Hiburan', 100000],
        [D('2025-02-25'), 'Transport', 20000],
        [D('2025-03-01'), 'Makan', 60000],
        [null, null, null],
        [null, null, null],
        ['Makan Jan-Feb', null, '']
      ], { A: 'date', C: 'rp' })],
      target: 'C10',
      resultFmt: 'rp',
      expect: 160000,
      solution: '=SUMIFS(C2:C8,B2:B8,"Makan",A2:A8,">="&DATE(2025,1,1),A2:A8,"<="&DATE(2025,2,28))',
      mustUse: ['SUMIFS', 'SUMPRODUCT'],
      hints: ['Ada tiga syarat: kategori Makan, tanggal batas bawah, tanggal batas atas.', 'Kolom tanggal digunakan dua kali, masing-masing dengan operatornya. Sambung operator dan DATE dengan &.', 'Tulis: =SUMIFS(C2:C8,B2:B8,"Makan",A2:A8,">="&DATE(2025,1,1),A2:A8,"<="&DATE(2025,2,28))'],
      parts: [['A2:A8, ">="&DATE(2025,1,1)', 'tanggal mulai 1 Januari 2025 atau lebih'], ['A2:A8, "<="&DATE(2025,2,28)', 'dan tanggal paling akhir 28 Februari 2025']],
      explain: 'Makan pada 5 Jan (50.000), 20 Jan (70.000), dan 3 Feb (40.000) = 160.000. Makan 1 Maret berada di luar rentang.'
    }),
    q({
      title: 'COUNTIF atau COUNTIFS?',
      q: 'Anda ingin menghitung transaksi yang **wilayahnya Jakarta DAN produknya Mouse**. Fungsi mana yang tepat?',
      options: ['COUNTIF dengan dua kriteria dipisah koma', 'COUNTIFS dengan dua pasang range-syarat', 'COUNT dengan IF di dalamnya tanpa array', 'SUMIF dengan dua kriteria'],
      answer: 1,
      explain: '**COUNTIFS** dirancang untuk beberapa pasang range-syarat. COUNTIF hanya menerima satu pasang.',
      whyNot: ['COUNTIF hanya punya satu range dan satu kriteria.', '', 'COUNT menghitung angka, bukan menyaring kondisi.', 'SUMIF menjumlahkan, bukan menghitung baris.']
    }),
    q({
      title: 'Range harus sama panjang',
      q: 'Rumus `=SUMIFS(E2:E11, B2:B10, "Jakarta")` menghasilkan `#VALUE!`. Penyebabnya...',
      options: ['Kata Jakarta salah eja', 'Range jumlah (E2:E11) dan range syarat (B2:B10) beda ukuran', 'SUMIFS tidak dapat digunakan dengan teks', 'Seharusnya gunakan SUMIF'],
      answer: 1,
      explain: 'Semua range di fungsi berakhiran S harus punya jumlah baris yang sama (E2:E11 adalah 10 baris, B2:B10 hanya 9).',
      whyNot: ['Salah eja menghasilkan 0, bukan #VALUE!.', '', 'SUMIFS dapat menggunakan teks.', 'SUMIF tidak akan menyelesaikan masalah ini.']
    })
  ]
};

const katalogRows = [
  ['Kode', 'Nama', 'Harga', 'Stok'],
  ['P001', 'Pulpen', 2500, 100],
  ['P002', 'Buku', 8000, 50],
  ['P003', 'Penggaris', 3500, 75],
  ['P004', 'Spidol', 12000, 30],
  ['P005', 'Map', 1500, 200]
];

const vlookup = {
  id: 'vlookup',
  level: 3,
  icon: 'search',
  title: 'VLOOKUP dan HLOOKUP',
  tagline: 'Cari dan ambil data dari tabel lain secara otomatis menggunakan VLOOKUP dan HLOOKUP.',
  why: 'Misalnya Anda memiliki daftar kode produk dan ingin harga tampil secara otomatis. Itulah fungsi VLOOKUP, salah satu fungsi yang paling banyak digunakan di Excel.',
  minutes: 16,
  lessons: [
    {
      title: 'Cara kerja VLOOKUP',
      body: [
        analogy('Di buku telepon, Anda mencari **nama** di daftar paling kiri, lalu membaca **nomor** yang ada di sampingnya. VLOOKUP melakukan hal yang sama: cari di kolom paling kiri sebuah tabel, lalu ambil isi dari kolom ke-sekian di baris yang sama.'),
        syntax('=VLOOKUP(dicari, tabel, nomor_kolom, FALSE)', [['dicari', 'Nilai yang Anda cari, misalnya kode "P003"'], ['tabel', 'Seluruh tabel, dan kolom pertamanya adalah tempat mencari'], ['nomor_kolom', 'Kolom ke berapa (dihitung dari kolom pertama tabel) yang akan diambil'], ['FALSE', 'Mencari yang persis sama. Pilihan ini yang paling sering dibutuhkan']]),
        demo({
          rows: [['Kode', 'Nama', 'Harga'], ['P001', 'Pulpen', 2500], ['P002', 'Buku', 8000], ['P003', 'Penggaris', 3500], ['Cari kode:', 'P002', '']],
          cell: 'C5',
          formula: '=VLOOKUP(B5,A2:C4,3,FALSE)',
          caption: 'Cari "P002" di kolom pertama (A), lalu ambil kolom ke-3 (Harga): 8000.'
        })
      ]
    },
    {
      title: 'Pencocokan persis (FALSE) dan perkiraan (TRUE)',
      body: [
        p('Argumen keempat menentukan cara mencocokkan:'),
        steps(
          '**FALSE** (atau 0) : harus **persis sama**. Digunakan untuk kode, ID, nama. Jika tidak ditemukan, hasilnya #N/A.',
          '**TRUE** (atau 1, atau dikosongkan) : cari **nilai terdekat yang tidak melebihi**. Digunakan untuk tabel berjenjang seperti skala nilai atau komisi. Kolom pertama tabel **wajib terurut naik**.'
        ),
        analogy('Skala nilai: 0 = E, 55 = D, 65 = C, 75 = B, 85 = A. Nilai 78 tidak ada persis di tabel. Dengan TRUE, Excel mundur ke batas terdekat di bawahnya (75), lalu mengambil "B".'),
        demo({
          rows: [['Nilai min', 'Grade'], [0, 'E'], [55, 'D'], [65, 'C'], [75, 'B'], [85, 'A'], ['Nilai 78:', '']],
          cell: 'B7',
          formula: '=VLOOKUP(78,A2:B6,2,TRUE)',
          caption: '78 jatuh di antara 75 dan 85, jadi diambil baris 75 = "B".'
        })
      ]
    },
    {
      title: 'Aturan penting dalam menggunakan VLOOKUP',
      body: [
        steps(
          'Kolom yang dicari harus ada di **paling kiri** tabel. VLOOKUP tidak dapat mencari ke kiri.',
          'Nomor kolom dihitung dari **kolom pertama tabel yang Anda pilih**, bukan dari kolom A lembar kerja.',
          'Kunci tabel dengan `$` (misalnya `$A$2:$D$6`) sebelum menyalin rumus ke bawah.',
          '#N/A biasanya berarti nilai yang dicari tidak ada persis, sering karena **spasi tersembunyi** atau salah ketik.'
        ),
        p('**HLOOKUP** adalah versi untuk tabel yang tersusun **mendatar** (judul di baris paling atas): `=HLOOKUP(dicari, tabel, nomor_baris, FALSE)`.')
      ]
    }
  ],
  exercises: [
    f({
      title: 'Harga berdasarkan kode',
      story: 'Katalog ada di A1:D6. Kode yang dicari tertulis di G1.',
      task: 'Di sel **G2**, ambil **harga** produk yang kodenya ada di G1.',
      sheets: [sheet('Katalog', [[...katalogRows[0], null, null, 'P003'], ...katalogRows.slice(1).map((r) => [...r])], { C: 'rp' })],
      target: 'G2',
      expect: 3500,
      solution: '=VLOOKUP(G1,A2:D6,3,FALSE)',
      alt: ['=VLOOKUP(G1,A1:D6,3,0)'],
      mustUse: ['VLOOKUP'],
      hints: ['Kolom Kode ada di paling kiri tabel, cocok untuk VLOOKUP.', 'Harga ada di kolom ke-3 dari tabel A:D. Gunakan FALSE untuk pencocokan persis.', 'Tulis: =VLOOKUP(G1,A2:D6,3,FALSE)'],
      parts: [['G1', 'Kode yang dicari'], ['A2:D6', 'Tabel katalog'], ['3', 'Ambil kolom ke-3 (Harga)'], ['FALSE', 'Cari persis sama']],
      explain: 'Excel mencari P003 di kolom A, menemukannya di baris Penggaris, lalu mengambil isi kolom ke-3 dari baris itu: 3.500.'
    }),
    f({
      title: 'Nama produk dari kode',
      task: 'Di sel **G2**, ambil **nama** produk untuk kode di G1.',
      sheets: [sheet('Katalog', [[...katalogRows[0], null, null, 'P004'], ...katalogRows.slice(1).map((r) => [...r])], { C: 'rp' })],
      target: 'G2',
      expect: 'Spidol',
      solution: '=VLOOKUP(G1,A2:D6,2,FALSE)',
      mustUse: ['VLOOKUP'],
      hints: ['Sama seperti sebelumnya, tetapi kolom yang diambil berbeda.', 'Nama ada di kolom ke-2 tabel.', 'Tulis: =VLOOKUP(G1,A2:D6,2,FALSE)'],
      explain: 'Hanya nomor kolomnya yang berubah. Tabel dan kode yang dicari sama.'
    }),
    f({
      title: 'Harga untuk daftar pesanan',
      story: 'Sheet "Pesanan" berisi kode dan qty. Harga harus diambil dari sheet "Katalog".',
      task: 'Di sel **C2**, ambil **harga** sesuai kode di A2 dari tabel di sheet **Katalog** (A2:D6). Rumus akan disalin sampai C5, jadi tabelnya harus dikunci.',
      sheets: [
        sheet('Pesanan', [['Kode', 'Qty', 'Harga', 'Total'], ['P002', 5, '', ''], ['P005', 20, '', ''], ['P001', 10, '', ''], ['P004', 2, '', '']], { C: 'rp', D: 'rp' }),
        sheet('Katalog', katalogRows, { C: 'rp' })
      ],
      target: 'C2',
      fillTo: 'C5',
      resultFmt: 'rp',
      expect: [[8000], [1500], [2500], [12000]],
      solution: '=VLOOKUP(A2,Katalog!$A$2:$D$6,3,FALSE)',
      shouldFail: ['=VLOOKUP(A2,Katalog!A2:D6,3,FALSE)'],
      mustUse: ['VLOOKUP'],
      hints: ['Tabelnya ada di sheet lain. Rujukan sheet lain ditulis NamaSheet!Range.', 'Kunci range dengan $ supaya tidak bergeser saat disalin ke bawah.', 'Tulis: =VLOOKUP(A2,Katalog!$A$2:$D$6,3,FALSE)'],
      parts: [['A2', 'Kode di baris ini (relatif)'], ['Katalog!$A$2:$D$6', 'Tabel di sheet Katalog (dikunci)'], ['3', 'Kolom Harga']],
      explain: 'Tanpa $, tabel ikut bergeser ke bawah pada setiap baris dan secara bertahap tidak lagi memuat kode yang dicari, sehingga muncul #N/A.'
    }),
    f({
      title: 'Total harga langsung',
      story: 'Kali ini kolom Harga tidak ada. Anda menghitung total langsung dalam satu rumus.',
      task: 'Di sel **D2**, hitung **total** = qty × harga (harga diambil dari sheet Katalog dengan VLOOKUP). Salin sampai D5.',
      sheets: [
        sheet('Pesanan', [['Kode', 'Qty', null, 'Total'], ['P002', 5, null, ''], ['P005', 20, null, ''], ['P001', 10, null, ''], ['P004', 2, null, '']], { D: 'rp' }),
        sheet('Katalog', katalogRows, { C: 'rp' })
      ],
      target: 'D2',
      fillTo: 'D5',
      resultFmt: 'rp',
      expect: [[40000], [30000], [25000], [24000]],
      solution: '=B2*VLOOKUP(A2,Katalog!$A$2:$D$6,3,FALSE)',
      mustUse: ['VLOOKUP'],
      hints: ['Hasil VLOOKUP adalah sebuah angka, jadi boleh dikali seperti angka biasa.', 'Qty (B2) dikali VLOOKUP untuk harga.', 'Tulis: =B2*VLOOKUP(A2,Katalog!$A$2:$D$6,3,FALSE)'],
      explain: 'Fungsi yang menghasilkan angka dapat digunakan di dalam hitungan, persis seperti sel biasa.'
    }),
    f({
      title: 'Grade dari skala nilai',
      story: 'Skala ada di sheet "Skala" (A2:B6). Nilai 78 tidak ada persis di sana, jadi Anda butuh pencocokan perkiraan.',
      task: 'Di sel **C2**, cari grade dari nilai di B2 menggunakan tabel di sheet **Skala**. Salin sampai C6.',
      sheets: [
        sheet('Nilai', [['Siswa', 'Nilai', 'Grade'], ['Ayu', 90, ''], ['Budi', 78, ''], ['Citra', 60, ''], ['Dedi', 40, ''], ['Eka', 85, '']]),
        sheet('Skala', [['Nilai min', 'Grade'], [0, 'E'], [55, 'D'], [65, 'C'], [75, 'B'], [85, 'A']])
      ],
      target: 'C2',
      fillTo: 'C6',
      expect: [['A'], ['B'], ['D'], ['E'], ['A']],
      solution: '=VLOOKUP(B2,Skala!$A$2:$B$6,2,TRUE)',
      alt: ['=VLOOKUP(B2,Skala!$A$2:$B$6,2)'],
      shouldFail: ['=VLOOKUP(B2,Skala!$A$2:$B$6,2,FALSE)'],
      mustUse: ['VLOOKUP'],
      hints: ['Nilai siswa jarang sama persis dengan batas di tabel.', 'Gunakan pencocokan perkiraan (TRUE atau dikosongkan). Tabel sudah terurut naik.', 'Tulis: =VLOOKUP(B2,Skala!$A$2:$B$6,2,TRUE)'],
      parts: [['B2', 'Nilai siswa'], ['Skala!$A$2:$B$6', 'Tabel batas nilai'], ['2', 'Ambil kolom Grade'], ['TRUE', 'Cari batas terdekat yang tidak melebihi nilai']],
      explain: 'Dengan TRUE, Excel mundur ke batas terbesar yang tidak melebihi nilai. 78 mengikuti batas 75, hasilnya "B". Dengan FALSE, 78 dianggap tidak ditemukan (#N/A).'
    }),
    f({
      title: 'Komisi berjenjang',
      story: 'Komisi naik sesuai omzet: mulai 0%, Rp 10 juta 2%, Rp 25 juta 3,5%, Rp 50 juta 5%. Tabelnya ada di sheet "Tarif".',
      task: 'Di sel **C2**, hitung **komisi dalam rupiah**: omzet (B2) × persentase dari tabel di sheet **Tarif**. Salin sampai C5.',
      sheets: [
        sheet('Komisi', [['Sales', 'Omzet', 'Komisi'], ['Andi', 8000000, ''], ['Budi', 30000000, ''], ['Citra', 55000000, ''], ['Dedi', 12000000, '']], { B: 'rp', C: 'rp' }),
        sheet('Tarif', [['Omzet min', 'Komisi %'], [0, 0], [10000000, 0.02], [25000000, 0.035], [50000000, 0.05]], { A: 'rp', B: 'pct' })
      ],
      target: 'C2',
      fillTo: 'C5',
      resultFmt: 'rp',
      expect: [[0], [1050000], [2750000], [240000]],
      solution: '=B2*VLOOKUP(B2,Tarif!$A$2:$B$5,2,TRUE)',
      mustUse: ['VLOOKUP'],
      hints: ['Cari persentase komisi yang sesuai dengan omzet terlebih dahulu. Tabel berjenjang cocok dengan pencocokan perkiraan.', 'Hasil VLOOKUP dikalikan dengan omzet.', 'Tulis: =B2*VLOOKUP(B2,Tarif!$A$2:$B$5,2,TRUE)'],
      explain: 'Omzet 30 juta berada di antara 25 juta dan 50 juta, jadi tarifnya 3,5%: 30.000.000 × 3,5% = 1.050.000.'
    }),
    q({
      title: 'Menghitung nomor kolom',
      q: 'Tabel Anda dipilih sebagai `B2:E6` (kolom B Nama, C Divisi, D Gaji, E Tunjangan). Untuk mengambil **Gaji**, nomor kolom di VLOOKUP adalah...',
      options: ['4', '3', '2', '5'],
      answer: 1,
      explain: 'Nomor kolom dihitung dari **kolom pertama tabel yang Anda pilih**: B = 1, C = 2, **D = 3**, E = 4.',
      whyNot: ['4 adalah posisi huruf D di alfabet, tetapi VLOOKUP menghitung dari awal tabel.', '', 'Itu kolom Divisi.', 'Nomor ini melebihi jumlah kolom; tabelnya hanya terdiri dari 4 kolom.']
    }),
    q({
      title: 'Mencari ke kiri',
      q: 'Tabel punya kolom A = Kode dan B = Nama. Anda ingin mencari **Kode berdasarkan Nama**. Mengapa VLOOKUP biasa tidak dapat melakukannya?',
      options: ['Karena Nama berupa teks', 'Karena VLOOKUP hanya mencari di kolom paling kiri tabel dan mengambil ke kanan', 'Karena butuh FALSE', 'Karena tabel harus terurut'],
      answer: 1,
      explain: 'VLOOKUP hanya dapat mengambil data di sebelah **kanan** kolom pencarian. Untuk mencari ke kiri, gunakan INDEX + MATCH atau XLOOKUP (akan dipelajari nanti).'
    }),
    q({
      title: 'Penyebab #N/A pada VLOOKUP',
      q: 'Kode "P003" jelas ada di katalog, tetapi `VLOOKUP(A2, katalog, 3, FALSE)` menghasilkan #N/A. Penyebab paling mungkin...',
      options: ['Kode di A2 punya spasi tersembunyi di belakangnya ("P003 ")', 'Harga di katalog bukan angka', 'Angka 3 harus diganti 4', 'FALSE tidak boleh digunakan'],
      answer: 0,
      explain: 'Spasi tak terlihat membuat "P003 " berbeda dengan "P003". Solusinya, gunakan TRIM, misalnya `VLOOKUP(TRIM(A2), ...)`.'
    }),
    f({
      title: 'HLOOKUP untuk tabel mendatar',
      story: 'Target tersusun mendatar: kuartal di baris 1, target di baris 2.',
      task: 'Di sel **B6**, ambil target untuk kuartal yang tertulis di **B5** menggunakan **HLOOKUP**.',
      sheets: [sheet('Target', [['Kuartal', 'Q1', 'Q2', 'Q3', 'Q4'], ['Target', 100, 120, 150, 200], [null, null, null, null, null], [null, null, null, null, null], ['Kuartal dicari', 'Q3', null, null, null], ['Target', '', null, null, null]])],
      target: 'B6',
      expect: 150,
      solution: '=HLOOKUP(B5,A1:E2,2,FALSE)',
      mustUse: ['HLOOKUP'],
      hints: ['HLOOKUP seperti VLOOKUP, tetapi mencari di baris paling atas.', 'Nomor yang diberikan adalah nomor baris, bukan nomor kolom.', 'Tulis: =HLOOKUP(B5,A1:E2,2,FALSE)'],
      explain: 'HLOOKUP mencari "Q3" di baris pertama, lalu mengambil nilai di baris ke-2 pada kolom yang sama: 150.'
    })
  ]
};

const karyawanRows = [
  ['ID', 'Nama', 'Divisi', 'Gaji'],
  ['K01', 'Rina', 'Marketing', 7500000],
  ['K02', 'Sandi', 'IT', 9000000],
  ['K03', 'Tari', 'HR', 6800000],
  ['K04', 'Umar', 'IT', 9500000],
  ['K05', 'Vina', 'Finance', 8200000]
];

const indexMatch = {
  id: 'index-match',
  level: 3,
  icon: 'crosshair',
  title: 'INDEX dan MATCH',
  tagline: 'Gunakan kombinasi INDEX dan MATCH untuk pencarian data yang lebih fleksibel dibanding VLOOKUP.',
  why: 'Banyak profesional memilih INDEX-MATCH karena dapat mencari ke arah mana pun dan tetap berfungsi ketika kolom disisipkan.',
  minutes: 14,
  lessons: [
    {
      title: 'INDEX: mengambil isi sel berdasarkan posisi',
      body: [
        analogy('INDEX bekerja seperti rak surat bernomor: Anda menyebutkan "ambil surat di rak nomor 3", dan isinya langsung diberikan.'),
        syntax('=INDEX(range, nomor_baris, [nomor_kolom])', [['range', 'Area data'], ['nomor_baris', 'Baris ke berapa di dalam range'], ['nomor_kolom', 'Kolom ke berapa (opsional, digunakan untuk range 2 dimensi)']]),
        demo({
          rows: [['Nama'], ['Rina'], ['Sandi'], ['Tari'], ['Ke-3:', '']],
          cell: 'B5',
          formula: '=INDEX(A2:A4,3)',
          caption: 'Nomor 3 di dalam A2:A4 adalah "Tari".'
        })
      ]
    },
    {
      title: 'MATCH: mencari posisi suatu nilai',
      body: [
        p('INDEX memerlukan nomor posisi. **MATCH** bertugas menemukan nomor tersebut.'),
        syntax('=MATCH(dicari, range, 0)', [['dicari', 'Nilai yang Anda cari'], ['range', 'Satu kolom atau satu baris tempat mencari'], ['0', 'Mencari yang persis sama (paling sering digunakan)']]),
        demo({
          rows: [['Nama'], ['Rina'], ['Sandi'], ['Tari'], ['Posisi "Sandi":', '']],
          cell: 'B5',
          formula: '=MATCH("Sandi",A2:A4,0)',
          caption: '"Sandi" ada di urutan ke-2 dalam range A2:A4.'
        })
      ]
    },
    {
      title: 'Menggabungkan INDEX dan MATCH',
      body: [
        p('Cara menyusunnya: **MATCH menemukan baris yang tepat, lalu INDEX mengambil isinya.**'),
        syntax('=INDEX(kolom_hasil, MATCH(dicari, kolom_pencarian, 0))', [['kolom_hasil', 'Kolom yang isinya akan diambil'], ['MATCH(...)', 'Mencari posisi baris dari nilai yang dicari']]),
        demo({
          rows: [['Nama', 'Gaji'], ['Rina', 7500], ['Sandi', 9000], ['Tari', 6800], ['Gaji Sandi:', '']],
          cell: 'B5',
          formula: '=INDEX(B2:B4,MATCH("Sandi",A2:A4,0))',
          caption: 'MATCH menemukan Sandi di urutan 2. INDEX mengambil urutan ke-2 dari kolom Gaji: 9000.'
        }),
        steps(
          '**Dapat mencari ke kiri**: kolom pencarian tidak harus paling kiri.',
          '**Lebih tahan perubahan**: jika kolom baru disisipkan, rumus tetap benar (VLOOKUP menjadi salah karena nomor kolomnya bergeser).',
          '**Lebih jelas**: Anda menunjuk kolom hasil langsung, bukan menghitung nomor kolom.'
        )
      ]
    }
  ],
  exercises: [
    f({
      title: 'Nama pada urutan ke-3',
      task: 'Di sel **F2**, ambil isi urutan ke-3 dari daftar nama di **B2:B6**.',
      sheets: [sheet('Karyawan', karyawanRows.map((r, i) => (i === 0 ? [...r, null, 'Hasil'] : r)), { D: 'rp' })],
      target: 'F2',
      expect: 'Tari',
      solution: '=INDEX(B2:B6,3)',
      mustUse: ['INDEX'],
      hints: ['Anda mengambil isi dari sebuah daftar berdasarkan nomor urutnya.', 'INDEX(range, nomor).', 'Tulis: =INDEX(B2:B6,3)'],
      explain: 'Urutan ke-3 dari B2:B6 adalah baris ke-3 di range itu, yaitu "Tari".'
    }),
    f({
      title: 'INDEX dua dimensi',
      task: 'Di sel **F2**, ambil isi **baris ke-4, kolom ke-4** dari seluruh tabel **A2:D6** (isinya gaji Umar).',
      sheets: [sheet('Karyawan', karyawanRows.map((r, i) => (i === 0 ? [...r, null, 'Hasil'] : r)), { D: 'rp' })],
      target: 'F2',
      resultFmt: 'rp',
      expect: 9500000,
      solution: '=INDEX(A2:D6,4,4)',
      mustUse: ['INDEX'],
      hints: ['Untuk range yang punya baris dan kolom, INDEX butuh dua nomor.', 'Urutannya: baris dahulu, baru kolom.', 'Tulis: =INDEX(A2:D6,4,4)'],
      explain: 'INDEX(range, baris, kolom) menunjuk satu sel di dalam range seperti koordinat.'
    }),
    f({
      title: 'Posisi sebuah ID',
      task: 'Di sel **F2**, cari **urutan ke berapa** ID "K04" berada di dalam **A2:A6**.',
      sheets: [sheet('Karyawan', karyawanRows.map((r, i) => (i === 0 ? [...r, null, 'Hasil'] : r)), { D: 'rp' })],
      target: 'F2',
      expect: 4,
      solution: '=MATCH("K04",A2:A6,0)',
      mustUse: ['MATCH'],
      hints: ['Anda tidak mengambil isinya, hanya mencari nomor urutnya.', 'MATCH(dicari, range, 0) dengan 0 untuk pencocokan persis.', 'Tulis: =MATCH("K04",A2:A6,0)'],
      explain: 'K04 adalah ID keempat dalam daftar, jadi MATCH mengembalikan 4.'
    }),
    f({
      title: 'Gaji berdasarkan nama',
      story: 'Nama yang dicari ditulis di G1.',
      task: 'Di sel **G2**, ambil **gaji** karyawan yang namanya tertulis di G1 menggunakan **INDEX + MATCH**.',
      sheets: [sheet('Karyawan', karyawanRows.map((r, i) => (i === 0 ? [...r, null, null, 'Vina'] : r)), { D: 'rp' })],
      target: 'G2',
      resultFmt: 'rp',
      expect: 8200000,
      solution: '=INDEX(D2:D6,MATCH(G1,B2:B6,0))',
      mustUse: ['INDEX', 'XLOOKUP'],
      hints: ['MATCH mencari posisi nama di kolom Nama, INDEX mengambil gaji di posisi itu.', 'Kolom hasil adalah D (Gaji). Kolom pencarian adalah B (Nama).', 'Tulis: =INDEX(D2:D6,MATCH(G1,B2:B6,0))'],
      parts: [['MATCH(G1, B2:B6, 0)', 'Posisi nama Vina di kolom Nama (hasil: 5)'], ['INDEX(D2:D6, ...)', 'ambil urutan ke-5 dari kolom Gaji']],
      explain: 'Dua fungsi saling melengkapi: MATCH menjawab "di baris ke berapa?", INDEX menjawab "apa isinya di baris itu?".'
    }),
    f({
      title: 'Mencari ke kiri',
      story: 'VLOOKUP tidak dapat mengambil kolom di sebelah kiri kolom pencarian. INDEX-MATCH dapat.',
      task: 'Di sel **G2**, cari **ID** karyawan yang namanya tertulis di G1 (ID ada di kolom A, sebelah kiri Nama).',
      sheets: [sheet('Karyawan', karyawanRows.map((r, i) => (i === 0 ? [...r, null, null, 'Umar'] : r)), { D: 'rp' })],
      target: 'G2',
      expect: 'K04',
      solution: '=INDEX(A2:A6,MATCH(G1,B2:B6,0))',
      mustUse: ['INDEX', 'XLOOKUP'],
      hints: ['Kolom hasil dan kolom pencarian dapat dipilih bebas di INDEX-MATCH.', 'Hasil dari kolom A, pencarian di kolom B.', 'Tulis: =INDEX(A2:A6,MATCH(G1,B2:B6,0))'],
      explain: 'Inilah keunggulan utama INDEX-MATCH: arah pencarian tidak dibatasi.'
    }),
    f({
      title: 'Daftar gaji sekaligus',
      story: 'Daftar nama yang ingin Anda cari gajinya ada di kolom F.',
      task: 'Di sel **G2**, ambil gaji untuk nama di F2 menggunakan INDEX + MATCH. Salin sampai G4. Kunci range tabel dengan $.',
      sheets: [sheet('Karyawan', karyawanRows.map((r, i) => (i === 0 ? [...r, null, 'Nama dicari', 'Gaji'] : i === 1 ? [...r, null, 'Sandi', ''] : i === 2 ? [...r, null, 'Rina', ''] : i === 3 ? [...r, null, 'Tari', ''] : r)), { D: 'rp', G: 'rp' })],
      target: 'G2',
      fillTo: 'G4',
      resultFmt: 'rp',
      expect: [[9000000], [7500000], [6800000]],
      solution: '=INDEX($D$2:$D$6,MATCH(F2,$B$2:$B$6,0))',
      shouldFail: ['=INDEX(D2:D6,MATCH(F2,B2:B6,0))'],
      mustUse: ['INDEX', 'XLOOKUP'],
      hints: ['Hanya nama yang dicari (F2) yang boleh bergeser saat disalin ke bawah.', 'Kunci kedua range (D2:D6 dan B2:B6) dengan $.', 'Tulis: =INDEX($D$2:$D$6,MATCH(F2,$B$2:$B$6,0))'],
      explain: 'Praktik penting: tabel sumber selalu dikunci dengan $, sedangkan nilai yang dicari dibiarkan relatif.'
    }),
    f({
      title: 'Siapa bergaji tertinggi?',
      task: 'Di sel **G2**, cari **nama karyawan dengan gaji tertinggi**. Gabungkan MAX, MATCH, dan INDEX.',
      sheets: [sheet('Karyawan', karyawanRows.map((r, i) => (i === 0 ? [...r, null, null, 'Tertinggi'] : r)), { D: 'rp' })],
      target: 'G2',
      expect: 'Umar',
      solution: '=INDEX(B2:B6,MATCH(MAX(D2:D6),D2:D6,0))',
      hints: ['Langkah 1: cari gaji tertinggi dengan MAX. Langkah 2: cari posisinya dengan MATCH. Langkah 3: ambil namanya dengan INDEX.', 'MATCH mencari hasil MAX di dalam kolom gaji.', 'Tulis: =INDEX(B2:B6,MATCH(MAX(D2:D6),D2:D6,0))'],
      parts: [['MAX(D2:D6)', 'Gaji tertinggi = 9.500.000'], ['MATCH(..., D2:D6, 0)', 'ada di urutan ke-4'], ['INDEX(B2:B6, 4)', 'nama urutan ke-4 = Umar']],
      explain: 'Pola ini sangat sering digunakan untuk "siapa yang tertinggi/terendah". Fungsi bersarang dikerjakan dari bagian terdalam ke luar.'
    }),
    q({
      title: 'Arti angka 0 di MATCH',
      q: 'Pada `=MATCH("Tari", B2:B6, 0)`, angka **0** di akhir berarti...',
      options: ['Cari persis sama', 'Mulai dari baris ke-0', 'Abaikan huruf besar', 'Jangan tampilkan hasil'],
      answer: 0,
      explain: '**0** = pencocokan persis. Nilai 1 atau dikosongkan berarti "terdekat yang tidak melebihi" dan memerlukan data terurut. Untuk sebagian besar kasus, gunakan 0.'
    }),
    q({
      title: 'Ketahanan INDEX-MATCH terhadap perubahan kolom',
      q: 'Seseorang menyisipkan satu kolom baru di tengah tabel. Rumus mana yang tetap benar tanpa diedit?',
      options: ['VLOOKUP dengan nomor kolom tetap (misalnya 3)', 'INDEX-MATCH yang menunjuk kolom hasil langsung', 'Keduanya rusak', 'Keduanya tetap benar'],
      answer: 1,
      explain: 'VLOOKUP mengandalkan nomor kolom (3), yang menjadi salah begitu kolom disisipkan. INDEX-MATCH menunjuk kolom aslinya, jadi Excel otomatis menyesuaikan.'
    })
  ]
};

const tglRows = (r) => r;
const tanggal = {
  id: 'tanggal',
  level: 3,
  icon: 'calendar',
  title: 'Tanggal dan Waktu',
  tagline: 'Hitung jatuh tempo, masa kerja, umur, dan hari kerja dengan DATE, DATEDIF, EDATE, EOMONTH, NETWORKDAYS, dan TEXT.',
  why: 'Jatuh tempo faktur, masa kerja, umur, hari kerja, dan laporan bulanan semuanya bergantung pada tanggal. Excel menyediakan banyak fungsi untuk mengolahnya.',
  minutes: 16,
  lessons: [
    {
      title: 'Tanggal di Excel disimpan sebagai angka',
      body: [
        p('Excel menyimpan setiap tanggal sebagai **nomor urut hari**. Hari ke-1 adalah 1 Januari 1900. Tanggal 15 Januari 2025 adalah angka 45672.'),
        analogy('Bayangkan kalender yang setiap harinya diberi nomor urut. Karena berupa angka, tanggal dapat **ditambah** (misalnya +30 hari) dan **dikurangi** untuk mendapatkan selisih hari.'),
        demo({
          rows: [['Mulai', D('2025-01-15')], ['Selesai', D('2025-03-01')], ['Selisih hari', '']],
          fmt: { B: 'date' },
          cell: 'B3',
          formula: '=B2-B1',
          caption: 'Dua tanggal dikurangkan menghasilkan jumlah hari: 45 hari.'
        }),
        tip('Jika hasil perhitungan tanggal tampil sebagai angka seperti 45672, ubah format selnya menjadi Date (Ctrl + 1). Sebaliknya, jika selisih hari tampil sebagai tanggal, ubah formatnya menjadi General.')
      ]
    },
    {
      title: 'Memecah dan menyusun tanggal',
      body: [
        steps(
          '`YEAR(tgl)`, `MONTH(tgl)`, `DAY(tgl)` : ambil tahun, bulan, atau hari.',
          '`DATE(tahun, bulan, hari)` : susun tanggal dari tiga angka.',
          '`TODAY()` : tanggal hari ini (berubah otomatis setiap hari).',
          '`WEEKDAY(tgl)` : nomor hari dalam seminggu (1 = Minggu).'
        ),
        demo({
          rows: [['Tanggal', D('2025-08-17')], ['Tahun', ''], ['Bulan', '']],
          fmt: { B: 'date' },
          cell: 'B2',
          formula: '=YEAR(B1)',
          caption: 'Tahun dari 17 Agustus 2025 adalah 2025.'
        }),
        warn('DATE otomatis menyesuaikan angka yang melebihi batas. DATE(2025, 14, 1) menjadi 1 Februari 2026, karena bulan ke-14 berarti Februari tahun berikutnya.')
      ]
    },
    {
      title: 'Fungsi tanggal yang sering digunakan',
      body: [
        steps(
          '`DATEDIF(mulai, selesai, "Y")` : selisih tahun penuh (umur). Unit lain: "M" bulan penuh, "D" hari.',
          '`EDATE(tgl, n)` : tanggal n bulan setelahnya (cocok untuk jatuh tempo bulanan).',
          '`EOMONTH(tgl, n)` : tanggal terakhir bulan, n bulan dari sekarang.',
          '`NETWORKDAYS(mulai, selesai)` : hitung hari kerja (Senin sampai Jumat).',
          '`TEXT(tgl, "dddd")` : mengubah tanggal menjadi teks dalam format tertentu, misalnya nama hari.'
        ),
        demo({
          rows: [['Lahir', D('1995-08-17')], ['Acuan', D('2025-06-15')], ['Umur', '']],
          fmt: { B: 'date' },
          cell: 'B3',
          formula: '=DATEDIF(B1,B2,"Y")',
          caption: 'Ulang tahun ke-30 baru tiba Agustus, jadi umurnya masih 29 tahun penuh.'
        }),
        tip('Kode format TEXT yang sering digunakan: "dd/mm/yyyy" menghasilkan 15/06/2025, "mmmm yyyy" menghasilkan Juni 2025, "dddd" menghasilkan Minggu, dan "mmm" menghasilkan Jun.')
      ]
    }
  ],
  exercises: [
    f({
      title: 'Durasi proyek dalam hari',
      task: 'Di sel **B3**, hitung **selisih hari** antara tanggal mulai (B1) dan selesai (B2).',
      sheets: [sheet('Proyek', tglRows([['Mulai', D('2025-01-15')], ['Selesai', D('2025-03-01')], ['Durasi (hari)', '']]), { B: 'date' })],
      target: 'B3',
      expect: 45,
      solution: '=B2-B1',
      alt: ['=DAYS(B2,B1)'],
      wrongs: [{ value: -45, msg: 'Tanggalnya terbalik. Tanggal yang lebih akhir harus berada di depan tanda minus.' }],
      hints: ['Tanggal adalah angka, jadi dapat dikurangkan.', 'Yang lebih akhir dikurangi yang lebih awal.', 'Tulis: =B2-B1'],
      explain: 'Hasil pengurangan dua tanggal adalah jumlah hari di antaranya. Jika selnya tampil sebagai tanggal, ubah formatnya menjadi angka biasa.'
    }),
    f({
      title: 'Tahun lahir',
      task: 'Di sel **B2**, ambil **tahunnya saja** dari tanggal lahir di B1.',
      sheets: [sheet('Lahir', [['Tanggal lahir', D('1995-08-17')], ['Tahun', '']], { B: 'date' })],
      target: 'B2',
      expect: 1995,
      solution: '=YEAR(B1)',
      mustUse: ['YEAR', 'TEXT'],
      hints: ['Ada fungsi dengan nama yang sama dengan bagian yang Anda cari.', 'YEAR(tanggal).', 'Tulis: =YEAR(B1)'],
      explain: 'YEAR, MONTH, dan DAY memecah tanggal menjadi angka tahun, bulan, dan hari.'
    }),
    f({
      title: 'Bulan transaksi',
      task: 'Di sel **B2**, ambil **nomor bulan** dari tanggal transaksi di B1.',
      sheets: [sheet('Transaksi', [['Tanggal', D('2025-08-17')], ['Bulan ke-', '']], { B: 'date' })],
      target: 'B2',
      expect: 8,
      solution: '=MONTH(B1)',
      mustUse: ['MONTH'],
      hints: ['Mirip dengan YEAR.', 'MONTH(tanggal) mengembalikan 1 sampai 12.', 'Tulis: =MONTH(B1)'],
      explain: 'MONTH sangat berguna untuk mengelompokkan data per bulan, misalnya dengan SUMIFS atau COUNTIFS pada kolom bantu.'
    }),
    f({
      title: 'Menyusun tanggal',
      story: 'Tahun, bulan, dan tanggal tersimpan di tiga sel terpisah.',
      task: 'Di sel **D2**, gabungkan ketiganya menjadi **satu tanggal** yang utuh.',
      sheets: [sheet('Rakit', [['Tahun', 'Bulan', 'Hari', 'Tanggal'], [2025, 7, 20, '']], { D: 'date' })],
      target: 'D2',
      resultFmt: 'date',
      expect: D('2025-07-20'),
      solution: '=DATE(A2,B2,C2)',
      mustUse: ['DATE'],
      hints: ['Ada fungsi untuk menyusun tanggal dari tiga angka.', 'DATE(tahun, bulan, hari), urutannya begitu.', 'Tulis: =DATE(A2,B2,C2)'],
      explain: 'DATE menghasilkan tanggal sungguhan (angka seri), sehingga dapat digunakan untuk perhitungan tanggal lain.'
    }),
    f({
      title: 'Umur dari tanggal lahir',
      story: 'Tanggal acuan (B2) sengaja diisi manual supaya hasilnya konsisten.',
      task: 'Di sel **B3**, hitung **umur dalam tahun penuh** dari tanggal lahir (B1) sampai tanggal acuan (B2) dengan DATEDIF.',
      sheets: [sheet('Umur', [['Tanggal lahir', D('1995-08-17')], ['Tanggal acuan', D('2025-06-15')], ['Umur (tahun)', '']], { B: 'date' })],
      target: 'B3',
      expect: 29,
      solution: '=DATEDIF(B1,B2,"Y")',
      mustUse: ['DATEDIF'],
      wrongs: [{ value: 30, msg: 'Selisih tahun kalender 2025 − 1995 = 30, tetapi ulang tahunnya belum tiba. DATEDIF dengan "Y" menghitung tahun penuh.' }],
      hints: ['Selisih tahun penuh sebaiknya tidak dihitung dengan pengurangan tahun biasa.', 'DATEDIF(mulai, selesai, "Y").', 'Tulis: =DATEDIF(B1,B2,"Y")'],
      parts: [['B1', 'Tanggal mulai (lahir)'], ['B2', 'Tanggal selesai (acuan)'], ['"Y"', 'Hitung tahun penuh']],
      explain: 'Dalam pemakaian sehari-hari, ganti B2 dengan TODAY() agar umur selalu diperbarui secara otomatis.'
    }),
    f({
      title: 'Jatuh tempo 3 bulan',
      story: 'Cicilan jatuh tempo tepat 3 bulan setelah tanggal kontrak. Jika tanggalnya tidak ada di bulan tujuan, Excel menggunakan tanggal terakhir bulan itu.',
      task: 'Di sel **B2**, hitung tanggal jatuh tempo: **3 bulan setelah** tanggal di B1.',
      sheets: [sheet('Kontrak', [['Tanggal kontrak', D('2025-01-31')], ['Jatuh tempo', '']], { B: 'date' })],
      target: 'B2',
      resultFmt: 'date',
      expect: D('2025-04-30'),
      solution: '=EDATE(B1,3)',
      mustUse: ['EDATE'],
      hints: ['Menambah 90 hari tidak sama dengan menambah 3 bulan.', 'EDATE(tanggal, jumlah bulan).', 'Tulis: =EDATE(B1,3)'],
      explain: 'EDATE menggeser bulan dan otomatis menyesuaikan akhir bulan: 31 Januari + 3 bulan = 30 April (April hanya 30 hari).'
    }),
    f({
      title: 'Akhir bulan',
      task: 'Di sel **B2**, cari **tanggal terakhir** pada bulan yang sama dengan tanggal di B1.',
      sheets: [sheet('Bulan', [['Tanggal', D('2025-02-10')], ['Akhir bulan', '']], { B: 'date' })],
      target: 'B2',
      resultFmt: 'date',
      expect: D('2025-02-28'),
      solution: '=EOMONTH(B1,0)',
      mustUse: ['EOMONTH'],
      hints: ['Anda tidak perlu tahu apakah bulan itu 28, 30, atau 31 hari.', 'EOMONTH(tanggal, 0): angka 0 artinya bulan yang sama.', 'Tulis: =EOMONTH(B1,0)'],
      explain: 'EOMONTH sudah tahu panjang tiap bulan, termasuk Februari tahun kabisat. Angka 1 akan menghasilkan akhir bulan berikutnya.'
    }),
    f({
      title: 'Hari kerja',
      story: '2 Juni 2025 adalah hari Senin dan 13 Juni 2025 adalah hari Jumat.',
      task: 'Di sel **B3**, hitung **jumlah hari kerja** (Senin sampai Jumat) dari B1 sampai B2, kedua tanggal ikut dihitung.',
      sheets: [sheet('Kerja', [['Mulai', D('2025-06-02')], ['Selesai', D('2025-06-13')], ['Hari kerja', '']], { B: 'date' })],
      target: 'B3',
      expect: 10,
      solution: '=NETWORKDAYS(B1,B2)',
      mustUse: ['NETWORKDAYS'],
      wrongs: [{ value: 11, msg: 'Itu selisih hari + 1 (termasuk Sabtu dan Minggu). Soal ini hanya menghitung hari Senin sampai Jumat.' }],
      hints: ['Hari Sabtu dan Minggu tidak dihitung.', 'NETWORKDAYS(mulai, selesai).', 'Tulis: =NETWORKDAYS(B1,B2)'],
      explain: 'Dua minggu kerja = 10 hari kerja. Argumen ketiga (opsional) dapat berisi daftar hari libur nasional.'
    }),
    f({
      title: 'Nama hari',
      task: 'Di sel **B2**, tampilkan **nama hari** (misalnya Senin) dari tanggal di B1 menggunakan TEXT.',
      sheets: [sheet('Hari', [['Tanggal', D('2025-06-15')], ['Hari', '']], { B: 'date' })],
      target: 'B2',
      expect: 'Minggu',
      solution: '=TEXT(B1,"dddd")',
      mustUse: ['TEXT'],
      hints: ['Anda mengubah tanggal menjadi teks dengan format tertentu.', 'Kode "dddd" menghasilkan nama hari lengkap.', 'Tulis: =TEXT(B1,"dddd")'],
      explain: 'TEXT(nilai, kode_format) mengubah angka atau tanggal menjadi teks. "ddd" memberi singkatannya (Min).'
    }),
    f({
      title: 'Bulan dan tahun',
      task: 'Di sel **B2**, ubah tanggal di B1 menjadi teks **"Juni 2025"** (nama bulan lengkap + tahun).',
      sheets: [sheet('Judul', [['Tanggal', D('2025-06-15')], ['Judul laporan', '']], { B: 'date' })],
      target: 'B2',
      expect: 'Juni 2025',
      solution: '=TEXT(B1,"mmmm yyyy")',
      mustUse: ['TEXT'],
      hints: ['Gunakan TEXT lagi, dengan kode format yang berbeda.', '"mmmm" adalah nama bulan lengkap, "yyyy" adalah tahun 4 digit.', 'Tulis: =TEXT(B1,"mmmm yyyy")'],
      explain: 'Kode format dapat digabung dengan spasi dan tanda baca. Cocok untuk judul laporan otomatis.'
    }),
    f({
      title: 'Tanggal jatuh tempo faktur',
      task: 'Di sel **B2**, hitung jatuh tempo faktur: **30 hari setelah** tanggal faktur di B1.',
      sheets: [sheet('Faktur', [['Tanggal faktur', D('2025-01-20')], ['Jatuh tempo', '']], { B: 'date' })],
      target: 'B2',
      resultFmt: 'date',
      expect: D('2025-02-19'),
      solution: '=B1+30',
      alt: ['=B1+30*1'],
      hints: ['Tanggal adalah angka, jadi dapat ditambah.', 'Tambahkan 30 ke tanggal.', 'Tulis: =B1+30'],
      explain: 'Menambah 30 ke tanggal berarti maju 30 hari. Ini berbeda dari EDATE yang maju per bulan.'
    }),
    q({
      title: 'Perilaku fungsi TODAY',
      q: 'Anda menulis `=TODAY()` di sebuah sel hari ini. Besok file dibuka lagi. Apa yang tampil?',
      options: ['Tanggal hari ini saat file disimpan', 'Tanggal besok (selalu mengikuti hari sekarang)', 'Error karena tanggal berubah', 'Tanggal 1 Januari 1900'],
      answer: 1,
      explain: 'TODAY() dihitung ulang setiap kali file dibuka atau berubah, jadi selalu menampilkan tanggal terbaru. Jika memerlukan tanggal yang tetap, ketik tanggalnya langsung atau tekan **Ctrl + ;**.'
    })
  ]
};

const teksLanjut = {
  id: 'teks-lanjut',
  level: 3,
  icon: 'scissors',
  title: 'Fungsi Teks Lanjutan',
  tagline: 'Cari, ganti, pecah, dan gabungkan teks menggunakan FIND, SEARCH, SUBSTITUTE, REPLACE, TEXT, TEXTJOIN, dan VALUE.',
  why: 'Data dari sistem lain sering menyatu dalam satu kolom, misalnya nama dan email atau kode dan kota. Fungsi teks lanjutan memungkinkan Anda memisahkan dan merapikannya secara otomatis.',
  minutes: 15,
  lessons: [
    {
      title: 'FIND: mencari posisi karakter',
      body: [
        p('`FIND(yang_dicari, teks)` menghasilkan **nomor posisi** karakter pertama yang ditemukan. `SEARCH` sama, tetapi tidak peduli huruf besar-kecil.'),
        demo({
          rows: [['Email', 'rina@kantor.com'], ['Posisi @', '']],
          cell: 'B2',
          formula: '=FIND("@",B1)',
          caption: 'Tanda @ ada di posisi ke-5.'
        }),
        analogy('FIND berfungsi seperti penanda halaman. Dengan mengetahui bahwa "@ ada di huruf ke-5", Anda dapat memotong teks tepat di titik itu menggunakan LEFT, MID, atau RIGHT.'),
        demo({
          rows: [['Email', 'rina@kantor.com'], ['Posisi @', 5], ['Username', '']],
          cell: 'B3',
          formula: '=LEFT(B1,FIND("@",B1)-1)',
          caption: 'Ambil huruf dari kiri sebanyak (posisi @ − 1) = 4 huruf: "rina".'
        })
      ]
    },
    {
      title: 'Mengganti isi teks',
      body: [
        steps(
          '`SUBSTITUTE(teks, lama, baru)` : mengganti **teks tertentu** di mana pun teks itu muncul.',
          '`REPLACE(teks, mulai, panjang, baru)` : mengganti **berdasarkan posisi**, apa pun isinya.'
        ),
        demo({
          rows: [['Telepon', '0812-3456-7890'], ['Bersih', '']],
          cell: 'B2',
          formula: '=SUBSTITUTE(B1,"-","")',
          caption: 'Semua tanda "-" diganti dengan teks kosong, sehingga hilang.'
        }),
        tip('Menghapus teks berarti menggantinya dengan "" (dua tanda kutip tanpa isi).')
      ]
    },
    {
      title: 'TEXT, TEXTJOIN, dan VALUE',
      body: [
        steps(
          '`TEXT(angka, "00000")` : mempertahankan angka nol di depan: 123 menjadi "00123".',
          '`TEXTJOIN(pemisah, abaikan_kosong, range)` : gabungkan banyak sel sekaligus dengan pemisah.',
          '`VALUE(teks)` : ubah teks yang berisi angka menjadi angka yang sebenarnya.',
          '`REPT(teks, n)` : ulangi teks n kali.'
        ),
        demo({
          rows: [['Nama'], ['Ayu'], ['Budi'], ['Citra'], ['Gabungan', '']],
          cell: 'B5',
          formula: '=TEXTJOIN(", ",TRUE,A2:A4)',
          caption: 'Sekali rumus, semua nama tergabung dengan koma dan spasi.'
        })
      ]
    }
  ],
  exercises: [
    f({
      title: 'Posisi tanda @',
      task: 'Di sel **B2**, cari **posisi** tanda "@" di dalam email di A2.',
      sheets: [sheet('Email', [['Email', 'Posisi @'], ['rina@kantor.com', '']])],
      target: 'B2',
      expect: 5,
      solution: '=FIND("@",A2)',
      alt: ['=SEARCH("@",A2)'],
      hints: ['Anda mencari nomor urut sebuah huruf di dalam teks.', 'FIND(yang dicari, teksnya).', 'Tulis: =FIND("@",A2)'],
      explain: 'r-i-n-a berada di posisi 1 sampai 4, maka "@" ada di posisi 5.'
    }),
    f({
      title: 'Ambil username email',
      task: 'Di sel **B2**, ambil **bagian sebelum tanda @** dari email di A2.',
      sheets: [sheet('Email', [['Email', 'Username'], ['rina@kantor.com', '']])],
      target: 'B2',
      expect: 'rina',
      solution: '=LEFT(A2,FIND("@",A2)-1)',
      alt: ['=TEXTBEFORE(A2,"@")'],
      hints: ['Anda perlu tahu di mana "@" berada, lalu mengambil semua huruf sebelumnya.', 'LEFT(teks, posisi@ − 1). Minus 1 agar @ tidak ikut terambil.', 'Tulis: =LEFT(A2,FIND("@",A2)-1)'],
      parts: [['FIND("@",A2)', 'posisi @ = 5'], ['-1', 'ambil sampai satu huruf sebelumnya = 4'], ['LEFT(A2, 4)', 'empat huruf pertama']],
      explain: 'Ini pola paling umum dalam memotong teks: FIND untuk mencari posisi, LEFT/MID/RIGHT untuk memotong.'
    }),
    f({
      title: 'Ambil domain email',
      task: 'Di sel **B2**, ambil **bagian sesudah tanda @** dari email di A2.',
      sheets: [sheet('Email', [['Email', 'Domain'], ['rina@kantor.com', '']])],
      target: 'B2',
      expect: 'kantor.com',
      solution: '=MID(A2,FIND("@",A2)+1,100)',
      alt: ['=RIGHT(A2,LEN(A2)-FIND("@",A2))', '=TEXTAFTER(A2,"@")'],
      hints: ['Mulai memotong tepat satu huruf setelah "@".', 'MID(teks, posisi@ + 1, panjang yang besar), atau RIGHT dengan panjang sisa.', 'Tulis: =MID(A2,FIND("@",A2)+1,100)'],
      explain: 'Angka 100 hanya dipilih agar pasti cukup panjang. MID berhenti sendiri di akhir teks.'
    }),
    f({
      title: 'Nama depan',
      task: 'Di sel **B2**, ambil **nama depan** (kata sebelum spasi pertama) dari nama lengkap di A2.',
      sheets: [sheet('Nama', [['Nama lengkap', 'Nama depan'], ['Budi Santoso', '']])],
      target: 'B2',
      expect: 'Budi',
      solution: '=LEFT(A2,FIND(" ",A2)-1)',
      alt: ['=TEXTBEFORE(A2," ")'],
      hints: ['Spasi adalah pembatas antara nama depan dan belakang.', 'Cari posisi spasi, lalu ambil huruf di kirinya.', 'Tulis: =LEFT(A2,FIND(" ",A2)-1)'],
      explain: 'Pola yang sama dengan username email, hanya pembatasnya spasi.'
    }),
    f({
      title: 'Bersihkan nomor telepon',
      task: 'Di sel **B2**, hapus semua tanda "-" dari nomor telepon di A2.',
      sheets: [sheet('Telepon', [['Nomor mentah', 'Nomor bersih'], ['0812-3456-7890', '']])],
      target: 'B2',
      expect: '081234567890',
      solution: '=SUBSTITUTE(A2,"-","")',
      mustUse: ['SUBSTITUTE'],
      hints: ['Anda mengganti sebuah karakter dengan "tidak ada apa-apa".', 'SUBSTITUTE(teks, yang_lama, yang_baru). Pengganti kosong ditulis "".', 'Tulis: =SUBSTITUTE(A2,"-","")'],
      explain: 'SUBSTITUTE mengganti semua kemunculan. Hasilnya tetap teks sehingga angka 0 di depan tidak hilang.'
    }),
    f({
      title: 'Menghitung jumlah kata',
      story: 'Jumlah kata = jumlah spasi + 1. Jumlah spasi dapat dihitung dengan membandingkan panjang teks sebelum dan sesudah semua spasi dihapus.',
      task: 'Di sel **B2**, hitung **jumlah kata** dalam kalimat di A2.',
      sheets: [sheet('Kata', [['Kalimat', 'Jumlah kata'], ['belajar excel itu mudah', '']])],
      target: 'B2',
      expect: 4,
      solution: '=LEN(TRIM(A2))-LEN(SUBSTITUTE(TRIM(A2)," ",""))+1',
      hints: ['Hitung panjang kalimat, lalu panjang kalimat tanpa spasi. Selisihnya adalah jumlah spasi.', 'Hilangkan spasi dengan SUBSTITUTE(A2," ",""). Tambah 1 di akhir.', 'Tulis: =LEN(TRIM(A2))-LEN(SUBSTITUTE(TRIM(A2)," ",""))+1'],
      explain: 'Kalimat 23 huruf dengan 3 spasi: 23 − 20 + 1 = 4 kata. TRIM memastikan spasi ganda tidak merusak hitungan.'
    }),
    f({
      title: 'Angka dengan nol di depan',
      story: 'Nomor urut harus selalu 5 digit, misalnya 00123.',
      task: 'Di sel **B2**, ubah angka di A2 menjadi teks **5 digit** dengan nol di depan.',
      sheets: [sheet('Nomor', [['Nomor', 'Kode'], [123, '']])],
      target: 'B2',
      expect: '00123',
      solution: '=TEXT(A2,"00000")',
      mustUse: ['TEXT'],
      hints: ['Angka biasa membuang nol di depan, jadi hasilnya harus berupa teks.', 'Gunakan TEXT dengan kode format berisi lima angka nol.', 'Tulis: =TEXT(A2,"00000")'],
      explain: 'Setiap "0" dalam kode format memaksa sebuah digit tampil, dan menambah nol di depan bila angkanya lebih pendek.'
    }),
    f({
      title: 'Menggabungkan banyak nama',
      task: 'Di sel **B6**, gabungkan semua nama di A2:A5 menjadi satu teks dipisah **koma dan spasi** (", ").',
      sheets: [sheet('Tim', [['Anggota'], ['Ayu'], ['Budi'], ['Citra'], ['Dedi'], ['Daftar', '']])],
      target: 'B6',
      expect: 'Ayu, Budi, Citra, Dedi',
      solution: '=TEXTJOIN(", ",TRUE,A2:A5)',
      mustUse: ['TEXTJOIN', 'CONCAT', 'CONCATENATE'],
      hints: ['Menyambung satu per satu dengan & akan terlalu panjang.', 'TEXTJOIN(pemisah, abaikan_kosong, range).', 'Tulis: =TEXTJOIN(", ",TRUE,A2:A5)'],
      parts: [['", "', 'Pemisah antar nama'], ['TRUE', 'Lewati sel kosong'], ['A2:A5', 'Daftar yang digabung']],
      explain: 'TEXTJOIN sangat menghemat waktu untuk daftar panjang. Argumen TRUE membuat sel kosong tidak menghasilkan koma ganda.'
    }),
    f({
      title: 'Angka yang tersimpan sebagai teks',
      story: 'Dua angka hasil impor tersimpan sebagai teks. SUM akan mengabaikannya.',
      task: 'Di sel **C2**, jumlahkan angka di A2 dan B2 (keduanya sebenarnya teks) sehingga hasilnya menjadi **angka 4000**.',
      sheets: [sheet('Impor', [['Nilai A', 'Nilai B', 'Jumlah'], ['1500', '2500', '']])],
      target: 'C2',
      expect: 4000,
      solution: '=VALUE(A2)+VALUE(B2)',
      shouldFail: ['=SUM(A2:B2)'],
      hints: ['SUM(A2:B2) menghasilkan 0 karena isinya teks.', 'Ubah teks menjadi angka dengan VALUE, lalu jumlahkan.', 'Tulis: =VALUE(A2)+VALUE(B2)'],
      explain: 'Angka teks sering muncul pada data impor dan ditandai rata kiri atau segitiga hijau kecil. VALUE mengubahnya menjadi angka yang dapat dihitung.'
    }),
    f({
      title: 'Menyembunyikan sebagian nomor',
      story: 'Demi privasi, empat digit tengah nomor telepon diganti bintang.',
      task: 'Di sel **B2**, ganti digit ke-5 sampai ke-8 dari nomor di A2 dengan "****" menggunakan REPLACE.',
      sheets: [sheet('Privasi', [['Nomor', 'Disamarkan'], ['081234567890', '']])],
      target: 'B2',
      expect: '0812****7890',
      solution: '=REPLACE(A2,5,4,"****")',
      mustUse: ['REPLACE', 'SUBSTITUTE'],
      hints: ['Anda mengganti berdasarkan posisi, bukan berdasarkan isi.', 'REPLACE(teks, posisi_mulai, jumlah_huruf, teks_baru).', 'Tulis: =REPLACE(A2,5,4,"****")'],
      explain: 'REPLACE cocok bila posisinya tetap dan isinya bervariasi. SUBSTITUTE cocok bila isinya tetap dan posisinya bervariasi.'
    })
  ]
};

const statistik = {
  id: 'statistik',
  level: 3,
  icon: 'bar-chart',
  title: 'Statistik dan Peringkat',
  tagline: 'Gunakan MEDIAN, MODE, LARGE, SMALL, RANK, dan STDEV untuk membaca sebaran data dan menentukan peringkat.',
  why: 'Rata-rata dapat menyesatkan. Gaji seorang direktur, misalnya, dapat menaikkan rata-rata gaji satu perusahaan. Statistik dasar membantu Anda membaca data secara lebih akurat.',
  minutes: 14,
  lessons: [
    {
      title: 'Rata-rata dan median',
      body: [
        analogy('Bayangkan lima orang di sebuah warung: empat orang bergaji Rp 6 juta dan satu pemilik pabrik bergaji Rp 30 juta. "Rata-rata gaji" menjadi Rp 10,8 juta, padahal hampir semua orang di sana hanya bergaji Rp 6 juta. **Median** (nilai tengah setelah diurutkan) tetap Rp 6 juta sehingga lebih mewakili.'),
        demo({
          rows: [['Gaji (juta)'], [6], [5.5], [30], [6.5], [6.2], ['Rata-rata', ''], ['Median', '']],
          cell: 'B7',
          formula: '=AVERAGE(A2:A6)',
          caption: 'Rata-rata terdorong naik oleh 30 juta menjadi 10,84.'
        }),
        demo({
          rows: [['Gaji (juta)'], [6], [5.5], [30], [6.5], [6.2], ['Rata-rata', 10.84], ['Median', '']],
          cell: 'B8',
          formula: '=MEDIAN(A2:A6)',
          caption: 'Median tidak terpengaruh nilai ekstrem: 6,2.'
        })
      ]
    },
    {
      title: 'Peringkat dan data ke-n',
      body: [
        steps(
          '`LARGE(range, n)` : nilai terbesar ke-n. LARGE(...,1) = MAX.',
          '`SMALL(range, n)` : nilai terkecil ke-n.',
          '`RANK(nilai, range)` : peringkat sebuah nilai. Urutan 1 = terbesar (jika argumen ketiga dikosongkan).',
          '`MODE(range)` : nilai yang paling sering muncul.'
        ),
        demo({
          rows: [['Nilai'], [78], [92], [85], [95], ['Peringkat 85:', '']],
          cell: 'B6',
          formula: '=RANK(85,A2:A5)',
          caption: 'Urutan terbesar: 95, 92, 85, 78. Nilai 85 ada di peringkat 3.'
        })
      ]
    },
    {
      title: 'Sebaran data dengan STDEV',
      body: [
        p('**Simpangan baku** (`STDEV.S`) mengukur seberapa jauh data biasanya menyebar dari rata-ratanya. Angka kecil berarti data seragam, sedangkan angka besar berarti data sangat bervariasi.'),
        analogy('Dua kelas sama-sama rata-rata nilainya 75. Kelas A semua murid bernilai 74–76 (simpangan kecil). Kelas B ada yang 40 dan ada yang 100 (simpangan besar). Rata-ratanya sama, tetapi sebaran datanya berbeda.'),
        tip('`SUBTOTAL(9, range)` sama dengan SUM, tetapi hanya menjumlahkan baris yang **terlihat** setelah Anda memfilter tabel. Cocok untuk total di bawah tabel yang sering difilter.')
      ]
    }
  ],
  exercises: [
    f({
      title: 'Median gaji',
      task: 'Di sel **B7**, cari **median** gaji pada B2:B6.',
      sheets: [sheet('Gaji', [['Karyawan', 'Gaji'], ['A', 6500000], ['B', 5500000], ['C', 30000000], ['D', 6000000], ['E', 6200000], ['Median', '']], { B: 'rp' })],
      target: 'B7',
      resultFmt: 'rp',
      expect: 6200000,
      solution: '=MEDIAN(B2:B6)',
      mustUse: ['MEDIAN'],
      hints: ['Anda mencari nilai yang berada tepat di tengah setelah data diurutkan.', 'Fungsi namanya sama dengan istilah statistiknya.', 'Tulis: =MEDIAN(B2:B6)'],
      explain: 'Urutan: 5,5 / 6,0 / 6,2 / 6,5 / 30 juta. Nilai tengahnya 6,2 juta.'
    }),
    q({
      title: 'Mana yang lebih mewakili?',
      q: 'Gaji 5 karyawan: 5,5 / 6 / 6,2 / 6,5 / 30 juta. Mana yang paling menggambarkan gaji "umumnya"?',
      options: ['Rata-rata (10,84 juta)', 'Median (6,2 juta)', 'Nilai tertinggi (30 juta)', 'Jumlah (54,2 juta)'],
      answer: 1,
      explain: 'Nilai ekstrem 30 juta menarik rata-rata ke atas. **Median** tidak terpengaruh, jadi lebih mewakili kebanyakan orang.'
    }),
    f({
      title: 'Nilai tertinggi kedua',
      task: 'Di sel **B8**, cari **nilai tertinggi kedua** dari B2:B7.',
      sheets: [sheet('Nilai', [['Siswa', 'Nilai'], ['A', 78], ['B', 92], ['C', 85], ['D', 95], ['E', 60], ['F', 88], ['Kedua tertinggi', '']])],
      target: 'B8',
      expect: 92,
      solution: '=LARGE(B2:B7,2)',
      mustUse: ['LARGE'],
      hints: ['MAX hanya memberi yang pertama. Anda butuh yang kedua.', 'LARGE(range, n) dengan n = 2.', 'Tulis: =LARGE(B2:B7,2)'],
      explain: 'LARGE(range, 1) sama dengan MAX. Ganti angka terakhirnya untuk mendapat ke-3, ke-4, dan seterusnya.'
    }),
    f({
      title: 'Nilai terendah kedua',
      task: 'Di sel **B8**, cari **nilai terendah kedua** dari B2:B7.',
      sheets: [sheet('Nilai', [['Siswa', 'Nilai'], ['A', 78], ['B', 92], ['C', 85], ['D', 95], ['E', 60], ['F', 88], ['Kedua terendah', '']])],
      target: 'B8',
      expect: 78,
      solution: '=SMALL(B2:B7,2)',
      mustUse: ['SMALL'],
      hints: ['Kebalikan dari LARGE.', 'SMALL(range, n).', 'Tulis: =SMALL(B2:B7,2)'],
      explain: 'Urutan dari terendah: 60, 78, 85, 88, 92, 95. Yang kedua adalah 78.'
    }),
    f({
      title: 'Peringkat kelas',
      task: 'Di sel **C2**, tentukan **peringkat** nilai siswa (B2) dari seluruh nilai B2:B7, 1 untuk nilai tertinggi. Salin sampai C7.',
      sheets: [sheet('Peringkat', [['Siswa', 'Nilai', 'Peringkat'], ['A', 78, ''], ['B', 92, ''], ['C', 85, ''], ['D', 95, ''], ['E', 60, ''], ['F', 88, '']])],
      target: 'C2',
      fillTo: 'C7',
      expect: [[5], [2], [4], [1], [6], [3]],
      solution: '=RANK(B2,$B$2:$B$7)',
      alt: ['=RANK.EQ(B2,$B$2:$B$7,0)'],
      shouldFail: ['=RANK(B2,B2:B7)'],
      mustUse: ['RANK', 'RANK.EQ', 'COUNTIF'],
      hints: ['Fungsi peringkat butuh nilai yang diperingkat dan seluruh daftarnya.', 'Daftar seluruh nilai harus dikunci dengan $ agar tidak bergeser saat disalin.', 'Tulis: =RANK(B2,$B$2:$B$7)'],
      explain: 'Tanpa $, daftar nilai bergeser dan sebagian nilai tidak lagi berada di dalam daftarnya (muncul #N/A).'
    }),
    f({
      title: 'Ukuran sepatu terlaris',
      task: 'Di sel **B9**, cari **ukuran sepatu yang paling sering terjual** dari B2:B8.',
      sheets: [sheet('Sepatu', [['Penjualan', 'Ukuran'], ['1', 39], ['2', 40], ['3', 41], ['4', 40], ['5', 42], ['6', 40], ['7', 39], ['Terlaris', '']])],
      target: 'B9',
      expect: 40,
      solution: '=MODE(B2:B8)',
      alt: ['=MODE.SNGL(B2:B8)'],
      mustUse: ['MODE', 'MODE.SNGL'],
      hints: ['Yang dicari bukan rata-rata, tetapi nilai yang paling sering muncul.', 'Fungsi namanya MODE.', 'Tulis: =MODE(B2:B8)'],
      explain: 'Ukuran 40 muncul tiga kali, lebih banyak dari 39 (dua kali).'
    }),
    f({
      title: 'Simpangan baku',
      task: 'Di sel **B10**, hitung **simpangan baku sampel** dari B2:B9 dan **bulatkan menjadi 2 desimal**.',
      sheets: [sheet('Data', [['No', 'Nilai'], [1, 2], [2, 4], [3, 4], [4, 4], [5, 5], [6, 5], [7, 7], [8, 9], ['Simpangan baku', '']])],
      target: 'B10',
      expect: 2.14,
      solution: '=ROUND(STDEV.S(B2:B9),2)',
      alt: ['=ROUND(STDEV(B2:B9),2)'],
      mustUse: ['STDEV.S', 'STDEV'],
      hints: ['Ada fungsi statistik khusus untuk simpangan baku sampel.', 'Gunakan ROUND untuk membulatkan hasilnya ke 2 desimal.', 'Tulis: =ROUND(STDEV.S(B2:B9),2)'],
      explain: 'Rata-rata data adalah 5 dan sebarannya sekitar 2,14. Semakin besar angka ini, semakin tidak seragam datanya.'
    }),
    f({
      title: 'Jumlah tiga nilai teratas',
      task: 'Di sel **B8**, jumlahkan **tiga nilai tertinggi** dari B2:B7.',
      sheets: [sheet('Nilai', [['Siswa', 'Nilai'], ['A', 78], ['B', 92], ['C', 85], ['D', 95], ['E', 60], ['F', 88], ['Total top 3', '']])],
      target: 'B8',
      expect: 275,
      solution: '=LARGE(B2:B7,1)+LARGE(B2:B7,2)+LARGE(B2:B7,3)',
      mustUse: ['LARGE'],
      hints: ['Ambil nilai terbesar ke-1, ke-2, dan ke-3, lalu jumlahkan.', 'Gunakan LARGE tiga kali, lalu jumlahkan.', 'Tulis: =LARGE(B2:B7,1)+LARGE(B2:B7,2)+LARGE(B2:B7,3)'],
      explain: '95 + 92 + 88 = 275. Pola ini berguna untuk laporan "top N".'
    }),
    f({
      title: 'Di atas rata-rata',
      task: 'Di sel **B8**, hitung **berapa siswa** yang nilainya **di atas rata-rata kelas**.',
      sheets: [sheet('Nilai', [['Siswa', 'Nilai'], ['A', 78], ['B', 92], ['C', 85], ['D', 95], ['E', 60], ['F', 88], ['Di atas rata-rata', '']])],
      target: 'B8',
      expect: 4,
      solution: '=COUNTIF(B2:B7,">"&AVERAGE(B2:B7))',
      mustUse: ['COUNTIF'],
      hints: ['Kriteria COUNTIF boleh berisi hasil fungsi lain, asal disambung dengan &.', 'Syaratnya: lebih besar dari rata-rata.', 'Tulis: =COUNTIF(B2:B7,">"&AVERAGE(B2:B7))'],
      explain: 'Rata-ratanya 83. Nilai yang lebih tinggi: 92, 85, 95, 88 = 4 siswa.'
    }),
    q({
      title: 'Kapan menggunakan SUBTOTAL?',
      q: 'Tabel Anda sering difilter (misalnya hanya menampilkan wilayah Jakarta). Anda ingin total di bawah tabel **mengikuti baris yang terlihat**. Pilih...',
      options: ['SUM', 'SUBTOTAL(9, range)', 'COUNT', 'ROUND'],
      answer: 1,
      explain: 'SUM menjumlahkan semua baris, termasuk yang tersembunyi oleh filter. **SUBTOTAL(9, ...)** hanya menjumlahkan baris yang terlihat.'
    })
  ]
};

export default [multiSyarat, vlookup, indexMatch, tanggal, teksLanjut, statistik];
