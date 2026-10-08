import { sheet, f, q, p, analogy, tip, warn, steps, syntax, demo } from './helpers.js';

// ============================================================
// LEVEL 1 - PEMULA
// ============================================================

const kenalan = {
  id: 'kenalan',
  level: 1,
  icon: 'table',
  title: 'Dasar-Dasar Excel',
  tagline: 'Struktur lembar kerja, sel, dan rumus sederhana.',
  why: 'Seluruh materi Excel berikutnya bertumpu pada tiga konsep: sel, alamat sel, dan rumus. Dengan memahaminya sejak awal, Anda akan lebih mudah mengikuti modul-modul selanjutnya.',
  minutes: 8,
  lessons: [
    {
      title: 'Struktur lembar kerja Excel',
      body: [
        p('Bayangkan buku tulis bergaris yang sangat besar. Setiap kotak kecilnya dapat Anda isi dengan angka atau tulisan. Itulah Excel.'),
        p('Kotak kecil itu namanya **sel**. Sel-sel tersusun dalam **kolom** (berjalan ke samping, diberi nama huruf: A, B, C...) dan **baris** (berjalan ke bawah, diberi nomor: 1, 2, 3...).'),
        analogy('Alamat sel itu seperti nomor kursi di bioskop. "Kursi C4" artinya: lajur C, baris ke-4. Di Excel, sel C4 adalah kotak di pertemuan **kolom C** dan **baris 4**.'),
        demo({
          rows: [['Nama', 'Nilai', null, 'Isi B3:'], ['Ayu', 85], ['Budi', 90], ['Citra', 78]],
          cell: 'D3',
          formula: '=B3',
          caption: 'Sel B3 berisi angka 90 (kolom B, baris 3). Rumus =B3 di sel D3 hanya menampilkan isi sel tersebut.'
        }),
        tip('Saat Anda mengklik sebuah sel, alamatnya muncul di kotak kecil di sebelah kiri atas, yang disebut Name Box.')
      ]
    },
    {
      title: 'Tiga jenis isi sel',
      body: [
        p('Sebuah sel dapat berisi tiga macam hal:'),
        steps(
          '**Teks**, misalnya "Ayu" atau "Jakarta". Biasanya rata kiri.',
          '**Angka**, misalnya 85 atau 15000. Biasanya rata kanan, dan dapat dihitung.',
          '**Rumus**, yaitu perintah hitung. Rumus **selalu diawali tanda sama dengan (=)**.'
        ),
        warn('Jika Anda lupa mengetik "=", Excel menganggap yang Anda tulis adalah teks biasa. Ketik 5+3 hasilnya tetap tulisan "5+3", bukan 8.')
      ]
    },
    {
      title: 'Membuat rumus pertama',
      body: [
        p('Rumus adalah instruksi yang meminta Excel melakukan perhitungan. Perhatikan contoh berikut:'),
        demo({
          rows: [['Item', 'Harga'], ['Nasi', 12000], ['Teh', 5000], ['Total', '']],
          cell: 'B4',
          formula: '=B2+B3',
          caption: 'Rumus =B2+B3 artinya: ambil isi B2, tambah isi B3.'
        }),
        p('Rumus ditulis dengan **alamat sel** (B2, B3), bukan dengan angka langsung (12000+5000). Alasannya, jika harga Nasi berubah, total **ikut berubah secara otomatis**. Inilah keunggulan utama Excel.'),
        tip('Alamat sel tidak harus diketik. Saat menulis rumus, klik sel yang dimaksud dan alamatnya akan terisi otomatis. Anda dapat mencobanya langsung pada latihan.')
      ]
    }
  ],
  exercises: [
    q({
      title: 'Membaca alamat sel',
      q: 'Sel yang berada di pertemuan kolom **C** dan baris **4** punya alamat...',
      options: ['4C', 'C4', 'C-4', 'CC4'],
      answer: 1,
      explain: 'Alamat sel selalu ditulis **huruf kolom dahulu, baru nomor baris**: C4.'
    }),
    q({
      title: 'Tanda pembuka rumus',
      q: 'Agar Excel tahu bahwa yang Anda ketik adalah **rumus**, Anda harus memulainya dengan...',
      options: ['Tanda tambah (+) saja', 'Tanda sama dengan (=)', 'Tanda kutip (")', 'Tanda tanya (?)'],
      answer: 1,
      explain: 'Tanda **=** menandakan bahwa isi sel adalah rumus. Tanpa tanda ini, Excel menganggapnya teks biasa.',
      whyNot: ['Tanda + terkadang masih diterima Excel, tetapi penulisan yang baku adalah =.', '', 'Tanda kutip digunakan untuk mengapit teks di dalam rumus, bukan untuk membuka rumus.', 'Tanda tanya tidak punya arti khusus di awal rumus.']
    }),
    f({
      title: 'Total belanja',
      story: 'Anda mencatat belanja makan siang.',
      task: 'Di sel **B4**, hitung total belanja dengan menjumlahkan harga di B2 dan B3. Gunakan alamat selnya, jangan mengetik angka.',
      sheets: [sheet('Belanja', [['Item', 'Harga'], ['Nasi Goreng', 15000], ['Es Teh', 5000], ['Total', '']], { B: 'rp' })],
      target: 'B4',
      resultFmt: 'rp',
      expect: 20000,
      solution: '=B2+B3',
      hints: ['Rumus selalu diawali tanda =.', 'Anda ingin menambahkan isi sel B2 dengan isi sel B3.', 'Tulis: =B2 lalu tanda tambah lalu B3.'],
      parts: [['=', 'Penanda awal rumus'], ['B2', 'Ambil isi sel B2 (15.000)'], ['+', 'Ditambah'], ['B3', 'isi sel B3 (5.000)']],
      explain: 'Excel mengambil isi B2 dan B3, lalu menjumlahkannya. Jika salah satu harga diubah, total langsung ikut berubah.'
    }),
    q({
      title: 'Rumus menghitung ulang otomatis',
      q: 'Sel A1 berisi 10 dan A2 berisi 20. Di sel B1 ada rumus `=A1+A2` (hasilnya 30). Jika Anda ubah isi A1 menjadi 15, hasil di B1 menjadi...',
      options: ['Tetap 30', '35', '15', 'Error'],
      answer: 1,
      explain: 'Rumus menunjuk ke **sel**, bukan angkanya. Begitu A1 berubah menjadi 15, Excel menghitung ulang: 15 + 20 = 35.',
      whyNot: ['Itu terjadi jika rumusnya berupa =10+20 (angka langsung). Karena rumus menggunakan alamat sel, hasilnya ikut berubah.', '', '15 hanyalah isi A1, bukan hasil penjumlahan.', 'Tidak ada yang salah dengan rumusnya, jadi tidak error.']
    }),
    f({
      title: 'Kekurangan target',
      story: 'Anda adalah admin penjualan dan ingin mengetahui cabang mana yang belum mencapai target.',
      task: 'Di sel **D2**, hitung kekurangan Cabang Bandung: **Target dikurangi Realisasi**.',
      sheets: [sheet('Target', [['Cabang', 'Target', 'Realisasi', 'Kurang'], ['Bandung', 50, 45, '']])],
      target: 'D2',
      expect: 5,
      solution: '=B2-C2',
      hints: ['Operator kurang di Excel adalah tanda minus (-).', 'Yang pertama diambil adalah Target (kolom B), lalu dikurangi Realisasi (kolom C).', 'Tulis: =B2-C2'],
      parts: [['=', 'Awal rumus'], ['B2', 'Target (50)'], ['-', 'dikurangi'], ['C2', 'Realisasi (45)']],
      explain: 'Urutan penting untuk pengurangan: B2-C2 = 5, sedangkan C2-B2 = -5.'
    }),
    q({
      title: 'Apa itu sel?',
      q: 'Manakah yang paling tepat menggambarkan **sel** di Excel?',
      options: ['Seluruh lembar kerja', 'Satu kotak di pertemuan kolom dan baris', 'Satu baris penuh dari kiri ke kanan', 'Nama file Excel'],
      answer: 1,
      explain: 'Sel adalah satu kotak kecil, hasil pertemuan satu kolom dan satu baris. Contoh: B3.'
    }),
    f({
      title: 'Total per produk',
      story: 'Anda menghitung total harga alat tulis yang dibeli.',
      task: 'Di sel **D2**, hitung total harga pensil: **Qty dikali Harga**. Operator kali di Excel adalah tanda bintang (*).',
      sheets: [sheet('Alat Tulis', [['Produk', 'Qty', 'Harga', 'Total'], ['Pensil', 12, 3000, '']], { C: 'rp', D: 'rp' })],
      target: 'D2',
      resultFmt: 'rp',
      expect: 36000,
      solution: '=B2*C2',
      alt: ['=C2*B2'],
      hints: ['Operator kali di Excel adalah * (bintang), bukan x.', 'Yang dikalikan adalah Qty (B2) dan Harga (C2).', 'Tulis: =B2*C2'],
      parts: [['B2', 'Qty (12)'], ['*', 'dikali'], ['C2', 'Harga satuan (3.000)']],
      explain: 'Total = jumlah × harga satuan. 12 × 3.000 = 36.000.'
    })
  ]
};

const operator = {
  id: 'operator',
  level: 1,
  icon: 'calculator',
  title: 'Operator dan Perhitungan Dasar',
  tagline: 'Penjumlahan, perkalian, pangkat, dan persentase.',
  why: 'Operator hitung digunakan di hampir semua rumus, mulai dari perhitungan diskon hingga pajak. Menguasainya terlebih dahulu akan memudahkan Anda mempelajari fungsi.',
  minutes: 10,
  lessons: [
    {
      title: 'Enam operator dasar',
      body: [
        p('Operator adalah simbol yang menentukan jenis perhitungan. Sebagian besar sama dengan kalkulator; hanya simbol perkalian dan pembagian yang berbeda.'),
        steps(
          '`+` penjumlahan, contoh `=5+3` hasilnya 8',
          '`-` pengurangan, contoh `=5-3` hasilnya 2',
          '`*` perkalian (tanda bintang, bukan huruf x), contoh `=5*3` hasilnya 15',
          '`/` pembagian (garis miring), contoh `=6/3` hasilnya 2',
          '`^` perpangkatan, contoh `=2^3` hasilnya 8 (artinya 2×2×2)',
          '`%` persentase, contoh `=50%` sama dengan 0,5'
        ),
        demo({
          rows: [['Sisi', 4], ['Luas', '']],
          cell: 'B2',
          formula: '=B1^2',
          caption: 'Luas persegi = sisi pangkat 2. 4 pangkat 2 = 16.'
        })
      ]
    },
    {
      title: 'Urutan pengerjaan operasi hitung',
      body: [
        p('Excel mengikuti aturan urutan operasi matematika: **perkalian dan pembagian dikerjakan lebih dahulu**, baru penjumlahan dan pengurangan. Untuk mengubah urutan tersebut, gunakan **tanda kurung**.'),
        demo({
          rows: [['A', 2], ['B', 3], ['C', 4], ['Tanpa kurung', ''], ['Dengan kurung', '']],
          cell: 'B4',
          formula: '=B1+B2*B3',
          caption: '3 × 4 dikerjakan lebih dahulu = 12, lalu ditambah 2 = 14.'
        }),
        demo({
          rows: [['A', 2], ['B', 3], ['C', 4], ['Tanpa kurung', 14], ['Dengan kurung', '']],
          cell: 'B5',
          formula: '=(B1+B2)*B3',
          caption: 'Bagian dalam kurung dikerjakan lebih dahulu: 2 + 3 = 5, lalu dikalikan 4 = 20.'
        }),
        warn('Kesalahan yang paling sering terjadi adalah menghitung rata-rata dengan `=A1+A2+A3/3`. Pada rumus tersebut, hanya A3 yang dibagi 3. Rumus yang benar adalah `=(A1+A2+A3)/3`.')
      ]
    },
    {
      title: 'Bekerja dengan persentase',
      body: [
        p('Di Excel, 15% sama dengan 0,15. Anda dapat mengetik `15%` langsung di rumus, atau menyimpannya di sel berformat persentase.'),
        analogy('Diskon 20% artinya Anda hanya membayar 80%. Jadi harga akhir = harga × (1 − 20%).'),
        demo({
          rows: [['Harga', 200000], ['Diskon', 0.2], ['Harga akhir', '']],
          fmt: { B: 'rp' },
          cell: 'B3',
          formula: '=B1*(1-B2)',
          caption: 'Bayar 80% dari harga: Rp 160.000.'
        })
      ]
    }
  ],
  exercises: [
    q({
      title: 'Urutan hitung',
      q: 'Berapa hasil rumus `=2+3*4` ?',
      options: ['20', '14', '24', '9'],
      answer: 1,
      explain: 'Perkalian dikerjakan lebih dahulu: 3×4 = 12, lalu 2 + 12 = **14**.',
      whyNot: ['20 diperoleh jika penjumlahan dikerjakan lebih dahulu (2+3=5, lalu ×4). Hal itu memerlukan kurung: =(2+3)*4.', '', '', '']
    }),
    q({
      title: 'Kurung mengubah urutan',
      q: 'Berapa hasil rumus `=(2+3)*4` ?',
      options: ['14', '20', '10', '24'],
      answer: 1,
      explain: 'Bagian dalam kurung dikerjakan lebih dahulu: 2+3 = 5, lalu 5×4 = **20**.'
    }),
    f({
      title: 'Harga setelah diskon',
      story: 'Sebuah toko sepatu memberi diskon 15%.',
      task: 'Di sel **D2**, hitung **harga akhir** sepatu setelah dipotong diskon yang ada di C2.',
      sheets: [sheet('Diskon', [['Produk', 'Harga', 'Diskon', 'Harga Akhir'], ['Sepatu', 200000, 0.15, '']], { B: 'rp', C: 'pct', D: 'rp' })],
      target: 'D2',
      resultFmt: 'rp',
      expect: 170000,
      solution: '=B2-B2*C2',
      alt: ['=B2*(1-C2)'],
      wrongs: [{ value: 30000, msg: 'Itu adalah besar potongan (nilai diskon), bukan harga akhir. Harga akhir = harga dikurangi potongan.' }],
      hints: ['Diskon 15% artinya harga dipotong 15% dari harga awal.', 'Potongan = B2*C2. Harga akhir = harga awal dikurangi potongan.', 'Tulis: =B2-B2*C2 (atau =B2*(1-C2)).'],
      parts: [['B2', 'Harga awal (200.000)'], ['-', 'dikurangi'], ['B2*C2', 'potongan (200.000 × 15% = 30.000)']],
      explain: 'Kedua cara benar: mengurangi harga dengan potongan, atau langsung mengalikannya dengan (1 − diskon), yaitu 85% dari harga.'
    }),
    f({
      title: 'Total bayar dengan PPN',
      story: 'Barang di toko dikenai PPN 11%.',
      task: 'Di sel **B3**, hitung **total bayar** = harga barang ditambah PPN-nya.',
      sheets: [sheet('PPN', [['Harga Barang', 500000], ['PPN', 0.11], ['Total Bayar', '']], { B: 'rp' })],
      target: 'B3',
      resultFmt: 'rp',
      expect: 555000,
      solution: '=B1*(1+B2)',
      alt: ['=B1+B1*B2'],
      hints: ['PPN adalah tambahan 11% dari harga barang.', 'Total bayar = harga + (harga × PPN).', 'Tulis: =B1+B1*B2 atau =B1*(1+B2).'],
      parts: [['B1', 'Harga barang'], ['*(1+B2)', 'dikali 111% (harga + 11% PPN)']],
      explain: 'Menambah 11% sama dengan mengalikan dengan 1,11. Cara ini lebih ringkas dari menghitung PPN terpisah.'
    }),
    f({
      title: 'Rata-rata dengan kurung',
      story: 'Anda menghitung rata-rata nilai rapor secara manual, tanpa fungsi AVERAGE.',
      task: 'Di sel **B5**, hitung rata-rata ketiga nilai di B2 sampai B4. Gunakan tanda kurung.',
      sheets: [sheet('Nilai', [['Mata Pelajaran', 'Nilai'], ['Matematika', 80], ['IPA', 90], ['Bahasa', 70], ['Rata-rata', '']])],
      target: 'B5',
      expect: 80,
      solution: '=(B2+B3+B4)/3',
      wrongs: [{ value: 80 + 90 + 70 / 3, msg: 'Hampir tepat, tetapi `=B2+B3+B4/3` hanya membagi B4 dengan 3 karena pembagian dikerjakan lebih dahulu. Letakkan penjumlahan di dalam tanda kurung.' }],
      hints: ['Rata-rata = jumlah semua nilai dibagi banyaknya nilai (3).', 'Jumlahkan B2, B3, dan B4 terlebih dahulu. Penjumlahan itu harus berada di dalam kurung.', 'Tulis: =(B2+B3+B4)/3'],
      parts: [['(B2+B3+B4)', 'Jumlah ketiga nilai, dikerjakan lebih dahulu karena berada di dalam kurung'], ['/3', 'dibagi 3 mata pelajaran']],
      explain: 'Tanpa kurung, hanya B4 yang dibagi 3. Dengan kurung, jumlah ketiganya yang dibagi 3: (80+90+70)/3 = 80.'
    }),
    f({
      title: 'Luas persegi',
      task: 'Di sel **B2**, hitung luas persegi dari panjang sisi di B1 menggunakan operator pangkat `^`.',
      sheets: [sheet('Luas', [['Sisi persegi (cm)', 12], ['Luas (cm²)', '']])],
      target: 'B2',
      expect: 144,
      solution: '=B1^2',
      alt: ['=B1*B1'],
      hints: ['Luas persegi = sisi × sisi, alias sisi pangkat 2.', 'Operator pangkat di Excel adalah ^ (tanda caret).', 'Tulis: =B1^2'],
      parts: [['B1', 'Panjang sisi (12)'], ['^2', 'dipangkatkan 2']],
      explain: '12^2 = 12 × 12 = 144.'
    }),
    f({
      title: 'Menyambung teks',
      story: 'Nama depan dan nama belakang tersimpan di dua kolom yang berbeda.',
      task: 'Di sel **C2**, gabungkan nama depan dan nama belakang dengan **satu spasi** di antaranya. Operator sambung teks adalah `&`, dan teks ditulis di antara tanda kutip.',
      sheets: [sheet('Nama', [['Depan', 'Belakang', 'Nama Lengkap'], ['Budi', 'Santoso', '']])],
      target: 'C2',
      expect: 'Budi Santoso',
      solution: '=A2&" "&B2',
      hints: ['Operator & menyambung dua teks menjadi satu.', 'Di antara dua nama perlu sebuah spasi. Spasi ditulis sebagai teks: " " (kutip, spasi, kutip).', 'Tulis: =A2&" "&B2'],
      parts: [['A2', 'Nama depan'], ['&', 'sambung dengan'], ['" "', 'sebuah spasi (teks, makanya diapit kutip)'], ['&B2', 'lalu nama belakang']],
      wrongs: [{ value: 'BudiSantoso', msg: 'Nama depan dan belakang masih menyatu. Tambahkan spasi di antaranya: &" "&' }],
      explain: 'Tanpa " " di tengah, hasilnya menyatu: BudiSantoso. Teks apa pun yang Anda tulis langsung di rumus harus diapit tanda kutip.'
    }),
    f({
      title: 'Persentase kenaikan harga',
      story: 'Harga bahan baku naik dan Anda ingin mengetahui besar kenaikannya dalam persen.',
      task: 'Di sel **D2**, hitung persentase kenaikan: **(harga baru − harga lama) dibagi harga lama**.',
      sheets: [sheet('Kenaikan', [['Produk', 'Harga Lama', 'Harga Baru', 'Kenaikan'], ['Tepung', 80000, 92000, '']], { B: 'rp', C: 'rp', D: 'pct' })],
      target: 'D2',
      resultFmt: 'pct',
      expect: 0.15,
      solution: '=(C2-B2)/B2',
      wrongs: [{ value: 12000, msg: 'Itu selisih harganya (Rp 12.000). Untuk persen, selisih itu masih harus dibagi harga lama.' }],
      hints: ['Kenaikan dalam rupiah dahulu: harga baru dikurangi harga lama.', 'Lalu bagi selisih itu dengan harga lama (bukan harga baru).', 'Tulis: =(C2-B2)/B2'],
      parts: [['(C2-B2)', 'Selisih harga = 12.000'], ['/B2', 'dibagi harga lama (80.000)']],
      explain: '12.000 / 80.000 = 0,15, dan sel diformat persen sehingga tampil 15%. Pola "(baru − lama) / lama" digunakan untuk semua jenis pertumbuhan.'
    })
  ]
};

const fungsiDasar = {
  id: 'fungsi-dasar',
  level: 1,
  icon: 'sigma',
  title: 'Fungsi Dasar Excel',
  tagline: 'Olah data lebih cepat dengan SUM, AVERAGE, dan COUNT.',
  why: 'Menjumlahkan ratusan sel satu per satu dengan tanda + tidak efisien dan mudah menimbulkan kesalahan. Dengan fungsi, perhitungan yang sama cukup ditulis dalam satu rumus. Lima fungsi ini paling sering digunakan dalam pekerjaan.',
  minutes: 12,
  lessons: [
    {
      title: 'Memahami fungsi dan range',
      body: [
        p('**Fungsi** adalah rumus siap pakai yang sudah disediakan Excel. Anda cukup memanggil namanya, lalu memberi bahan yang dihitung.'),
        analogy('Fungsi bekerja seperti blender: Anda memasukkan bahan (data), memilih program yang sesuai (nama fungsi), dan alat mengerjakan sisanya.'),
        syntax('=SUM(B2:B6)', [['=', 'Tanda rumus'], ['SUM', 'Nama fungsi: jumlahkan'], ['( )', 'Kurung berisi bahan yang dihitung'], ['B2:B6', 'Range: dari sel B2 sampai B6']]),
        p('**Range** adalah sekelompok sel yang berdampingan. Ditulis dengan tanda titik dua: `B2:B6` dibaca "dari B2 **sampai** B6".'),
        demo({
          rows: [['Hari', 'Penjualan'], ['Senin', 120], ['Selasa', 95], ['Rabu', 150], ['Total', '']],
          cell: 'B5',
          formula: '=SUM(B2:B4)',
          caption: '120 + 95 + 150 = 365. Jauh lebih ringkas dari =B2+B3+B4.'
        })
      ]
    },
    {
      title: 'AVERAGE, MIN, dan MAX',
      body: [
        p('Ketiga fungsi ini bekerja dengan cara yang sama: Anda memberikan range, dan Excel mengembalikan satu angka.'),
        steps('`AVERAGE` mencari **rata-rata**.', '`MAX` mencari angka **terbesar**.', '`MIN` mencari angka **terkecil**.'),
        demo({
          rows: [['Nilai'], [70], [85], [90], [60], ['Rata-rata', ''], ['Tertinggi', ''], ['Terendah', '']],
          cell: 'B6',
          formula: '=AVERAGE(A2:A5)',
          caption: 'Rata-rata dari 70, 85, 90, 60 adalah 76,25.'
        }),
        tip('Cara cepat menjumlahkan: pilih sel kosong di bawah deretan angka, lalu tekan **Alt + =**. Excel akan menuliskan rumus =SUM(...) secara otomatis.')
      ]
    },
    {
      title: 'COUNT dan COUNTA: menghitung jumlah data',
      body: [
        p('Dalam beberapa kasus, yang dibutuhkan bukan jumlah nilainya, melainkan **banyaknya** data.'),
        steps('`COUNT` menghitung sel yang berisi **angka**.', '`COUNTA` menghitung sel yang **tidak kosong** (angka maupun teks).'),
        demo({
          rows: [['Nama', 'Nilai'], ['Ayu', 80], ['Budi', null], ['Citra', 'izin'], ['Dedi', 75], ['COUNT', ''], ['COUNTA', '']],
          cell: 'B6',
          formula: '=COUNT(B2:B5)',
          caption: 'Hanya 80 dan 75 yang berupa angka, jadi COUNT = 2.'
        }),
        demo({
          rows: [['Nama', 'Nilai'], ['Ayu', 80], ['Budi', null], ['Citra', 'izin'], ['Dedi', 75], ['COUNT', 2], ['COUNTA', '']],
          cell: 'B7',
          formula: '=COUNTA(B2:B5)',
          caption: 'Sel Budi kosong, sisanya terisi (termasuk teks "izin"), jadi COUNTA = 3.'
        })
      ]
    }
  ],
  exercises: [
    f({
      title: 'Total penjualan seminggu',
      story: 'Anda pemilik warung dan ingin mengetahui total pemasukan selama seminggu.',
      task: 'Di sel **B9**, jumlahkan seluruh penjualan harian dari B2 sampai B8 menggunakan fungsi **SUM**.',
      sheets: [sheet('Warung', [['Hari', 'Penjualan'], ['Senin', 120000], ['Selasa', 95000], ['Rabu', 150000], ['Kamis', 80000], ['Jumat', 175000], ['Sabtu', 210000], ['Minggu', 130000], ['Total', '']], { B: 'rp' })],
      target: 'B9',
      resultFmt: 'rp',
      expect: 960000,
      solution: '=SUM(B2:B8)',
      mustUse: ['SUM'],
      hints: ['Gunakan fungsi yang namanya berarti "jumlah".', 'Fungsinya SUM. Datanya ada dari B2 sampai B8.', 'Tulis: =SUM(B2:B8)'],
      parts: [['SUM', 'Jumlahkan'], ['B2:B8', 'semua angka dari B2 sampai B8']],
      explain: 'SUM menjumlahkan seluruh angka di range. Anda tidak perlu mengetik B2+B3+B4+... satu per satu.'
    }),
    f({
      title: 'Total dari dua kolom',
      story: 'Sebuah kafe mencatat jumlah pelanggan pagi dan sore tiap hari.',
      task: 'Di sel **B7**, hitung total pelanggan (pagi **dan** sore) selama 4 hari. Range dapat berbentuk persegi, misalnya B2:C5.',
      sheets: [sheet('Pelanggan', [['Hari', 'Pagi', 'Sore'], ['Senin', 12, 15], ['Selasa', 10, 14], ['Rabu', 9, 16], ['Kamis', 11, 13], [null, null, null], ['Total', '', null]])],
      target: 'B7',
      expect: 100,
      solution: '=SUM(B2:C5)',
      alt: ['=SUM(B2:B5,C2:C5)', '=SUM(B2:B5)+SUM(C2:C5)'],
      mustUse: ['SUM'],
      hints: ['Ada dua kolom angka yang harus dijumlahkan: Pagi dan Sore.', 'Range tidak harus satu kolom. B2:C5 berarti seluruh kotak dari B2 sampai C5.', 'Tulis: =SUM(B2:C5)'],
      parts: [['B2:C5', 'Kotak dari sel kiri-atas B2 ke sel kanan-bawah C5 (8 angka)']],
      explain: 'Range dua dimensi seperti B2:C5 mencakup semua sel di dalam kotaknya. Hasil: 12+15+10+14+9+16+11+13 = 100.'
    }),
    f({
      title: 'Rata-rata nilai kelas',
      story: 'Seorang guru ingin mengetahui rata-rata nilai ujian 6 siswa.',
      task: 'Di sel **B8**, hitung rata-rata nilai ujian dengan fungsi **AVERAGE**.',
      sheets: [sheet('Ujian', [['Siswa', 'Nilai'], ['Ayu', 78], ['Budi', 85], ['Citra', 90], ['Dedi', 72], ['Eka', 88], ['Fani', 67], ['Rata-rata', '']])],
      target: 'B8',
      expect: 80,
      solution: '=AVERAGE(B2:B7)',
      mustUse: ['AVERAGE'],
      hints: ['Nama fungsi rata-rata sama dengan istilah bahasa Inggrisnya: "average".', 'Range nilai ada di B2:B7 (jangan ikut sel B8 sendiri).', 'Tulis: =AVERAGE(B2:B7)'],
      parts: [['AVERAGE', 'Rata-rata'], ['B2:B7', 'nilai keenam siswa']],
      explain: '(78+85+90+72+88+67) / 6 = 80. AVERAGE sudah menghitung jumlah dan membaginya dengan banyak data.'
    }),
    f({
      title: 'Suhu tertinggi',
      story: 'Stasiun cuaca mencatat suhu harian.',
      task: 'Di sel **B9**, cari **suhu tertinggi** minggu ini.',
      sheets: [sheet('Suhu', [['Hari', 'Suhu (°C)'], ['Senin', 28], ['Selasa', 31], ['Rabu', 33], ['Kamis', 30], ['Jumat', 34], ['Sabtu', 32], ['Minggu', 29], ['Tertinggi', '']])],
      target: 'B9',
      expect: 34,
      solution: '=MAX(B2:B8)',
      mustUse: ['MAX'],
      hints: ['Cari fungsi yang mengambil angka paling besar.', 'MAX artinya maksimum.', 'Tulis: =MAX(B2:B8)'],
      parts: [['MAX', 'Nilai terbesar'], ['B2:B8', 'dari semua suhu satu minggu']],
      explain: 'MAX membaca seluruh angka di range dan mengembalikan yang terbesar, yaitu 34.'
    }),
    f({
      title: 'Harga laptop termurah',
      story: 'Anda membandingkan harga laptop yang sama di 5 toko.',
      task: 'Di sel **B7**, cari harga **terendah**.',
      sheets: [sheet('Laptop', [['Toko', 'Harga'], ['Toko A', 8500000], ['Toko B', 8200000], ['Toko C', 8750000], ['Toko D', 8100000], ['Toko E', 8400000], ['Termurah', '']], { B: 'rp' })],
      target: 'B7',
      resultFmt: 'rp',
      expect: 8100000,
      solution: '=MIN(B2:B6)',
      mustUse: ['MIN'],
      hints: ['Kebalikan dari MAX.', 'MIN artinya minimum, nilai terkecil.', 'Tulis: =MIN(B2:B6)'],
      parts: [['MIN', 'Nilai terkecil'], ['B2:B6', 'harga di kelima toko']],
      explain: 'MIN mengembalikan angka terkecil di range: Rp 8.100.000 (Toko D).'
    }),
    f({
      title: 'Siapa saja yang sudah mengumpulkan?',
      story: 'Sel nilai yang kosong atau berisi "-" berarti belum mengumpulkan tugas.',
      task: 'Di sel **B8**, hitung **berapa siswa** yang sudah punya nilai angka. Fungsi mana yang hanya menghitung sel berisi angka?',
      sheets: [sheet('Tugas', [['Siswa', 'Nilai Tugas'], ['Andi', 85], ['Budi', null], ['Citra', 90], ['Dedi', '-'], ['Eka', 78], ['Fani', 88], ['Sudah kumpul', '']])],
      target: 'B8',
      expect: 4,
      solution: '=COUNT(B2:B7)',
      mustUse: ['COUNT'],
      wrongs: [{ value: 5, msg: 'Anda menghitung sel yang tidak kosong, termasuk "-" yang berupa teks. Padahal yang diminta hanya sel berisi angka.' }],
      hints: ['Anda tidak menjumlahkan nilai, hanya menghitung banyaknya.', 'COUNT hanya menghitung sel berupa angka. COUNTA menghitung semua yang tidak kosong. Mana yang sesuai?', 'Tulis: =COUNT(B2:B7)'],
      parts: [['COUNT', 'Hitung banyak sel berisi angka'], ['B2:B7', 'di kolom nilai tugas']],
      explain: 'Budi kosong dan Dedi berisi teks "-", jadi keduanya tidak dihitung COUNT. Sisanya 4 siswa.'
    }),
    f({
      title: 'Jumlah peserta terdaftar',
      story: 'Daftar peserta pelatihan punya 8 baris, tetapi sebagian belum terisi.',
      task: 'Di sel **B1**, hitung **jumlah peserta** yang namanya sudah terisi di A2:A9, apa pun isinya (teks).',
      sheets: [sheet('Peserta', [['Jumlah peserta', ''], ['Rina'], ['Sandi'], ['Tari'], [null], ['Umar'], ['Vina'], [null], ['Wawan']])],
      target: 'B1',
      expect: 6,
      solution: '=COUNTA(A2:A9)',
      mustUse: ['COUNTA'],
      wrongs: [{ value: 0, msg: 'COUNT hanya menghitung angka. Nama itu teks, jadi hasilnya 0. Gunakan fungsi yang menghitung semua sel terisi.' }],
      hints: ['Yang dihitung adalah nama (teks), bukan angka.', 'COUNT tidak menghitung teks. Gunakan fungsi sejenis yang berakhiran "A".', 'Tulis: =COUNTA(A2:A9)'],
      parts: [['COUNTA', 'Hitung semua sel yang tidak kosong'], ['A2:A9', 'daftar nama']],
      explain: 'COUNTA ("count all") menghitung semua sel yang tidak kosong. Dua sel kosong dilewati sehingga hasilnya 6.'
    }),
    q({
      title: 'Memilih fungsi',
      q: 'Anda ingin mengetahui **nilai ujian paling tinggi** dari 30 siswa. Fungsi yang paling tepat adalah...',
      options: ['SUM', 'AVERAGE', 'MAX', 'COUNT'],
      answer: 2,
      explain: '**MAX** mengambil angka terbesar dari sebuah range.',
      whyNot: ['SUM menjumlahkan semua nilai.', 'AVERAGE mencari rata-rata, bukan yang tertinggi.', '', 'COUNT hanya menghitung berapa banyak data.']
    }),
    f({
      title: 'Rentang suhu',
      story: 'Rentang (range) data = nilai tertinggi dikurangi nilai terendah. Ukuran ini sering digunakan untuk melihat seberapa lebar variasi data.',
      task: 'Di sel **B10**, hitung selisih suhu tertinggi dan terendah minggu ini. Anda boleh menggunakan dua fungsi dalam satu rumus.',
      sheets: [sheet('Suhu', [['Hari', 'Suhu (°C)'], ['Senin', 28], ['Selasa', 31], ['Rabu', 33], ['Kamis', 30], ['Jumat', 34], ['Sabtu', 32], ['Minggu', 29], [null, null], ['Rentang', '']])],
      target: 'B10',
      expect: 6,
      solution: '=MAX(B2:B8)-MIN(B2:B8)',
      hints: ['Anda butuh dua hal: suhu tertinggi dan suhu terendah.', 'Dua fungsi dapat digunakan dalam satu rumus dan dihubungkan dengan operator.', 'Tulis: =MAX(B2:B8)-MIN(B2:B8)'],
      parts: [['MAX(B2:B8)', 'Suhu tertinggi = 34'], ['-', 'dikurangi'], ['MIN(B2:B8)', 'Suhu terendah = 28']],
      explain: 'Fungsi boleh dikombinasikan dengan operator. Hasil MAX dan MIN diperlakukan seperti angka biasa: 34 − 28 = 6.'
    }),
    f({
      title: 'Perbaiki rumus yang rusak',
      story: 'Rekan kerja Anda menulis rumus total tetapi Excel menolaknya.',
      task: 'Rumus berikut mengandung kesalahan kecil. Perbaiki agar menghitung total pengeluaran di **B7**.',
      start: '=SUM(B2:B6',
      sheets: [sheet('Pengeluaran', [['Pos', 'Biaya'], ['Listrik', 30000], ['Air', 45000], ['Internet', 25000], ['Makan', 60000], ['Transport', 95000], ['Total', '']], { B: 'rp' })],
      target: 'B7',
      resultFmt: 'rp',
      expect: 255000,
      solution: '=SUM(B2:B6)',
      hints: ['Baca rumusnya dengan teliti dari awal sampai akhir.', 'Setiap kurung buka "(" harus punya pasangan kurung tutup ")".', 'Tambahkan tanda ) di paling akhir.'],
      explain: 'Tanda kurung yang tidak berpasangan termasuk kesalahan yang paling sering terjadi. Pastikan jumlah "(" sama dengan jumlah ")".'
    })
  ]
};

const salinRumus = {
  id: 'salin-rumus',
  level: 1,
  icon: 'copy',
  title: 'Referensi Sel dan Penyalinan Rumus',
  tagline: 'Menyalin rumus dan referensi absolut dengan tanda $.',
  why: 'Dalam praktik, satu rumus hampir selalu disalin ke banyak baris. Jika tanda $ tidak dipahami, hasil perhitungan dapat keliru tanpa disadari.',
  minutes: 12,
  lessons: [
    {
      title: 'Referensi relatif: rumus ikut bergeser saat disalin',
      body: [
        p('Tulis rumus di sel pertama, lalu **tarik titik kecil di sudut kanan bawah sel** (fill handle) ke bawah, atau klik dua kali titik tersebut. Rumus akan tersalin ke seluruh baris.'),
        analogy('Rumus yang disalin ibarat petunjuk arah **relatif**: "dua kolom di sebelah kiri dari posisi Anda". Jika posisi Anda bergeser satu baris ke bawah, tujuannya ikut bergeser satu baris ke bawah.'),
        demo({
          rows: [['Produk', 'Qty', 'Harga', 'Total'], ['Pulpen', 10, 2500, ''], ['Buku', 5, 8000, '']],
          cell: 'D2',
          formula: '=B2*C2',
          caption: 'Jika disalin ke D3, rumusnya otomatis menjadi =B3*C3. sesuai yang dibutuhkan.'
        }),
        p('Perilaku ini disebut **referensi relatif** dan sesuai dengan kebutuhan pada sebagian besar kasus.')
      ]
    },
    {
      title: 'Referensi absolut: mengunci sel dengan tanda $',
      body: [
        p('Misalnya tarif PPN disimpan di satu sel, yaitu `F1`. Semua baris harus mengalikan dengan F1, bukan F2, F3, dan seterusnya. Untuk itulah tanda **$** digunakan, yaitu mengunci referensi.'),
        analogy('`$F$1` ibarat alamat lengkap dengan nama jalan: ke mana pun surat disalin, tujuannya tetap sama. Sebaliknya, `F1` tanpa $ ibarat "rumah sebelah" yang ikut berpindah.'),
        steps(
          '`F1` : relatif, kolom dan baris boleh bergeser',
          '`$F$1` : **absolut**, kolom dan baris dikunci',
          '`$F1` : kolom dikunci, baris boleh bergeser',
          '`F$1` : baris dikunci, kolom boleh bergeser'
        ),
        demo({
          rows: [['Produk', 'Harga USD', 'Harga Rp', null, 'Kurs', 16000], ['Mouse', 10, '', null, null, null], ['Keyboard', 25, '', null, null, null]],
          cell: 'C2',
          formula: '=B2*$F$1',
          caption: 'Di C3 rumusnya menjadi =B3*$F$1: B bergeser ke B3, sedangkan $F$1 tetap mengunci kurs.'
        }),
        tip('Saat mengetik rumus, tekan **F4** untuk memutar F1, $F$1, F$1, $F1, lalu kembali ke F1.')
      ]
    }
  ],
  exercises: [
    f({
      title: 'Salin total ke bawah',
      story: 'Tulis satu rumus, lalu bayangkan Anda menyalinnya ke 4 baris di bawahnya.',
      task: 'Di sel **D2**, hitung total = Qty × Harga. Rumus Anda akan otomatis diuji saat disalin sampai **D6**.',
      sheets: [sheet('Alat Tulis', [['Produk', 'Qty', 'Harga', 'Total'], ['Pulpen', 10, 2500, ''], ['Buku', 5, 8000, ''], ['Penggaris', 8, 3500, ''], ['Spidol', 4, 12000, ''], ['Map', 20, 1500, '']], { C: 'rp', D: 'rp' })],
      target: 'D2',
      fillTo: 'D6',
      resultFmt: 'rp',
      expect: [[25000], [40000], [28000], [48000], [30000]],
      solution: '=B2*C2',
      hints: ['Cukup tulis rumus untuk baris pertama (baris 2).', 'Qty ada di kolom B dan Harga di kolom C.', 'Tulis: =B2*C2'],
      explain: 'Karena B2 dan C2 bersifat relatif, saat rumus disalin ke D3 menjadi =B3*C3, ke D4 menjadi =B4*C4, dan seterusnya.'
    }),
    q({
      title: 'Apa yang terjadi saat disalin?',
      q: 'Rumus `=B2*C2` ada di sel D2. Anda menyalinnya ke sel D3. Rumus di D3 menjadi...',
      options: ['=B2*C2', '=B3*C3', '=B2*C3', '=C3*D3'],
      answer: 1,
      explain: 'Referensi relatif ikut bergeser satu baris ke bawah: B2 menjadi B3, C2 menjadi C3.',
      whyNot: ['Itu hanya terjadi jika semua referensinya dikunci dengan $: =$B$2*$C$2.', '', '', '']
    }),
    f({
      title: 'Mengunci sel kurs',
      story: 'Kurs dolar disimpan di F1. Semua harga dolar harus dikalikan dengan kurs yang sama.',
      task: 'Di sel **C2**, hitung harga rupiah = harga USD × kurs di **F1**. Salin sampai **C5**, sehingga kurs harus dikunci dengan tanda $.',
      sheets: [sheet('Kurs', [['Produk', 'Harga USD', 'Harga Rp', null, 'Kurs', 16000], ['Mouse', 10, '', null, null, null], ['Keyboard', 25, '', null, null, null], ['Headset', 8, '', null, null, null], ['Webcam', 15, '', null, null, null]], { C: 'rp', F: 'int' })],
      target: 'C2',
      fillTo: 'C5',
      resultFmt: 'rp',
      expect: [[160000], [400000], [128000], [240000]],
      solution: '=B2*$F$1',
      alt: ['=$F$1*B2'],
      shouldFail: ['=B2*F1'],
      hints: ['Harga USD (kolom B) boleh bergeser, tetapi kurs di F1 harus selalu F1.', 'Kunci sel kurs dengan tanda $ di depan huruf kolom dan angka baris.', 'Tulis: =B2*$F$1'],
      parts: [['B2', 'Harga USD, relatif (ikut bergeser)'], ['$F$1', 'Kurs, dikunci (tidak bergeser)']],
      explain: 'Tanpa $, rumus di C3 menjadi =B3*F2, dan F2 kosong, sehingga hasilnya 0. Tanda $ mengunci F1 agar tetap sama untuk semua baris.'
    }),
    q({
      title: 'Jalan pintas $',
      q: 'Saat mengetik referensi sel di rumus, tombol apa yang menambahkan tanda **$** secara otomatis?',
      options: ['F2', 'F4', 'F5', 'F12'],
      answer: 1,
      explain: '**F4** memutar jenis referensi: F1, $F$1, F$1, $F1, lalu kembali ke F1. Tidak perlu mengetik $ manual.',
      whyNot: ['F2 digunakan untuk mengedit isi sel.', '', 'F5 digunakan untuk "Go To" (pindah ke sel tertentu).', 'F12 adalah "Save As".']
    }),
    f({
      title: 'Komisi dengan persentase tetap',
      story: 'Semua sales mendapat komisi 5% yang tersimpan di F1.',
      task: 'Di sel **C2**, hitung komisi Andi (penjualan × persentase komisi di F1). Rumus akan disalin sampai **C5**.',
      sheets: [sheet('Komisi', [['Sales', 'Penjualan', 'Komisi', null, 'Komisi %', 0.05], ['Andi', 20000000, '', null, null, null], ['Budi', 15000000, '', null, null, null], ['Citra', 30000000, '', null, null, null], ['Dedi', 12000000, '', null, null, null]], { B: 'rp', C: 'rp', F: 'pct' })],
      target: 'C2',
      fillTo: 'C5',
      resultFmt: 'rp',
      expect: [[1000000], [750000], [1500000], [600000]],
      solution: '=B2*$F$1',
      shouldFail: ['=B2*F1'],
      hints: ['Penjualan tiap sales berbeda-beda (relatif), tetapi persentase komisinya sama (harus dikunci).', 'Kunci F1 dengan $: bagian kolom dan bagian baris.', 'Tulis: =B2*$F$1'],
      explain: 'Jika ada satu "angka acuan" yang digunakan semua baris (tarif, kurs, diskon), simpan di satu sel dan kunci dengan $.'
    }),
    f({
      title: 'Tabel perkalian (campuran)',
      story: 'Latihan ini mengunci sebagian referensi saja: baris atau kolomnya.',
      task: 'Di sel **B2**, tulis satu rumus: angka di kolom A dikalikan dengan angka di baris 1. Rumus disalin ke seluruh tabel sampai **D4**. Hasilnya harus tabel perkalian 1 sampai 3.',
      sheets: [sheet('Perkalian', [['x', 1, 2, 3], [1, '', '', ''], [2, '', '', ''], [3, '', '', '']])],
      target: 'B2',
      fillTo: 'D4',
      expect: [[1, 2, 3], [2, 4, 6], [3, 6, 9]],
      solution: '=$A2*B$1',
      shouldFail: ['=A2*B1', '=$A$2*$B$1'],
      hints: ['Saat disalin ke kanan, kolom A harus tetap A. Saat disalin ke bawah, baris 1 harus tetap baris 1.', 'Kunci kolom pada angka sisi kiri ($A) dan kunci baris pada angka sisi atas (B$1).', 'Tulis: =$A2*B$1'],
      parts: [['$A2', 'Kolom A dikunci, baris boleh bergeser'], ['B$1', 'Baris 1 dikunci, kolom boleh bergeser']],
      explain: 'Inilah referensi campuran. `$A2` selalu mengambil kolom A, `B$1` selalu mengambil baris 1. Satu rumus cukup untuk seluruh tabel.'
    }),
    f({
      title: 'Persentase kontribusi',
      story: 'Anda ingin mengetahui persentase kontribusi tiap produk terhadap total penjualan.',
      task: 'Di sel **C2**, hitung kontribusi Kopi terhadap total di **B7**. Salin sampai **C6**.',
      sheets: [sheet('Kontribusi', [['Produk', 'Penjualan', 'Kontribusi'], ['Kopi', 400000, ''], ['Teh', 250000, ''], ['Susu', 150000, ''], ['Jus', 120000, ''], ['Air', 80000, ''], ['Total', 1000000, null]], { B: 'rp', C: 'pct' })],
      target: 'C2',
      fillTo: 'C6',
      resultFmt: 'pct',
      expect: [[0.4], [0.25], [0.15], [0.12], [0.08]],
      solution: '=B2/$B$7',
      shouldFail: ['=B2/B7'],
      hints: ['Kontribusi = penjualan produk dibagi total penjualan.', 'Total berada di B7 dan harus selalu merujuk ke B7, jadi kunci dengan $.', 'Tulis: =B2/$B$7'],
      parts: [['B2', 'Penjualan produk (relatif)'], ['/', 'dibagi'], ['$B$7', 'Total (dikunci)']],
      explain: 'Pola "bagian / total terkunci" sangat sering digunakan untuk membuat persentase kontribusi, porsi anggaran, dan sejenisnya.'
    })
  ]
};

const shortcut = {
  id: 'shortcut',
  level: 1,
  icon: 'keyboard',
  title: 'Shortcut dan Praktik Kerja Efisien',
  tagline: 'Shortcut penting untuk bekerja lebih cepat.',
  why: 'Pengguna Excel yang berpengalaman bekerja lebih cepat karena memanfaatkan shortcut keyboard dan menyusun data secara terstruktur. Praktik sederhana ini dapat menghemat banyak waktu kerja.',
  minutes: 8,
  lessons: [
    {
      title: 'Shortcut yang paling sering digunakan',
      body: [
        p('Anda tidak perlu menghafal semuanya sekaligus. Mulailah dari yang paling sering digunakan:'),
        steps(
          '**Ctrl + Z** : batalkan (undo). **Ctrl + Y** : ulangi lagi.',
          '**Ctrl + C / X / V** : salin / potong / tempel.',
          '**F2** : edit isi sel tanpa mengetik ulang dari awal.',
          '**Ctrl + Panah** : lompat ke ujung data. Sangat berguna untuk tabel panjang.',
          '**Ctrl + Shift + Panah** : pilih sampai ujung data.',
          '**Alt + =** : AutoSum, menulis =SUM(...) otomatis.',
          '**Ctrl + ;** : mengisi tanggal hari ini.',
          '**Ctrl + 1** : buka jendela Format Cells.',
          '**Ctrl + T** : ubah data menjadi Tabel Excel.'
        ),
        tip('Excel di Mac menggunakan tombol **Cmd** sebagai pengganti **Ctrl** untuk sebagian besar shortcut.')
      ]
    },
    {
      title: 'Praktik terbaik dalam menyusun data',
      body: [
        steps(
          '**Satu kolom = satu jenis data.** Jangan mencampur angka dan satuan dalam satu sel (contoh yang kurang tepat: "50 kg"). Tulis angka 50 dan cantumkan satuannya di judul kolom.',
          '**Baris pertama = judul kolom.** Satu baris per catatan, tanpa baris kosong di tengah.',
          '**Hindari mengetik angka langsung di dalam rumus.** `=B2*0.11` kurang baik dibandingkan `=B2*$F$1` dengan tarif disimpan di sel tersendiri. Jika tarif berubah, Anda cukup mengubahnya di satu tempat.',
          '**Hindari menggabung sel (Merge)** di dalam tabel data. Merge sering mengganggu fungsi sorting dan filter.'
        ),
        warn('Angka yang ditulis sebagai teks (misalnya diawali tanda petik atau tertulis rata kiri) tidak dapat dihitung. Jika angka tidak terhitung sebagaimana mestinya, periksa apakah angka tersebut sebenarnya tersimpan sebagai teks.')
      ]
    }
  ],
  exercises: [
    q({
      title: 'Membatalkan perubahan',
      q: 'Anda tidak sengaja menghapus satu kolom data. Shortcut tercepat untuk membatalkannya adalah...',
      options: ['Ctrl + S', 'Ctrl + Z', 'Ctrl + P', 'Ctrl + F'],
      answer: 1,
      explain: '**Ctrl + Z** membatalkan aksi terakhir. Dapat ditekan berkali-kali untuk mundur beberapa langkah.',
      whyNot: ['Ctrl + S menyimpan file.', '', 'Ctrl + P membuka jendela cetak.', 'Ctrl + F membuka pencarian.']
    }),
    q({
      title: 'Menjumlahkan dengan AutoSum',
      q: 'Anda memilih sel kosong tepat di bawah deretan angka. Shortcut yang otomatis menulis `=SUM(...)` adalah...',
      options: ['Alt + =', 'Ctrl + =', 'Shift + S', 'F4'],
      answer: 0,
      explain: '**Alt + =** adalah AutoSum. Excel menebak range angka di atasnya dan menuliskan rumus SUM.'
    }),
    q({
      title: 'Mengedit tanpa mengetik ulang',
      q: 'Rumus di sebuah sel hampir benar, dan Anda hanya perlu mengubah sedikit bagiannya. Cara tercepat membuka sel itu untuk diedit adalah...',
      options: ['Menghapus isi sel lalu mengetik ulang', 'Menekan F2', 'Menekan Esc', 'Menekan Ctrl + A'],
      answer: 1,
      explain: '**F2** membuka isi sel dalam mode edit dengan kursor di akhir teks. Anda juga dapat klik dua kali sel tersebut.'
    }),
    q({
      title: 'Berpindah ke ujung tabel',
      q: 'Tabel Anda memiliki 5.000 baris. Anda ingin segera berpindah ke baris data paling bawah dari sel A1. Caranya adalah...',
      options: ['Scroll mouse terus-menerus', 'Ctrl + Panah Bawah', 'Menekan Enter 5.000 kali', 'Ctrl + Home'],
      answer: 1,
      explain: '**Ctrl + Panah Bawah** melompat ke ujung blok data berikutnya. Menambah Shift (Ctrl + Shift + Panah Bawah) sekaligus memilih datanya.',
      whyNot: ['Dapat, tetapi lambat.', '', 'Tidak praktis untuk 5.000 baris.', 'Ctrl + Home membawa Anda kembali ke A1.']
    }),
    q({
      title: 'Struktur data yang tepat',
      q: 'Manakah cara menyimpan berat barang yang **paling baik** untuk dihitung di Excel?',
      options: ['Sel berisi "50 kg"', 'Sel berisi angka 50, dan judul kolomnya "Berat (kg)"', 'Sel berisi "lima puluh"', 'Sel berisi 50 dan kg ditulis di sel sebelahnya tanpa judul'],
      answer: 1,
      explain: 'Angka harus murni angka agar dapat dijumlahkan. Satuan cukup ditulis di judul kolom.',
      whyNot: ['"50 kg" adalah teks. SUM tidak akan dapat menjumlahkannya.', '', 'Itu teks, tidak dapat dihitung.', 'Judul kolom tetap diperlukan agar orang lain memahami datanya.']
    }),
    q({
      title: 'Angka di dalam rumus',
      q: 'Tarif pajak 11% digunakan di 500 rumus. Mana praktik **terbaik**?',
      options: ['Mengetik 0.11 langsung di setiap rumus', 'Menyimpan 11% di satu sel dan merujuknya dengan $', 'Mencatat tarif di buku catatan lalu mengetiknya ulang', 'Menulis tarif di nama file'],
      answer: 1,
      explain: 'Simpan angka patokan di satu sel. Jika tarif berubah, cukup ganti satu sel dan semua rumus ikut benar.',
      whyNot: ['Jika tarif berubah, Anda harus mengedit 500 rumus satu per satu.', '', 'Berisiko salah ketik dan sulit dipelihara.', 'Excel tidak membaca nama file.']
    }),
    q({
      title: 'Format Cells',
      q: 'Shortcut untuk membuka jendela **Format Cells** (mengatur angka, tanggal, persen, rata teks, dll.) adalah...',
      options: ['Ctrl + 1', 'Ctrl + F', 'Ctrl + K', 'Ctrl + D'],
      answer: 0,
      explain: '**Ctrl + 1** membuka Format Cells. Dari sini Anda mengubah tampilan angka tanpa mengubah nilai aslinya.'
    })
  ]
};

export default [kenalan, operator, fungsiDasar, salinRumus, shortcut];
