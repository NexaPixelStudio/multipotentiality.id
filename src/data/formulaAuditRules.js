import { formatOverrides as practiceFormatOverrides } from './formulaPracticeFactory.js';
// Formula Coach audit helpers.
// File ini sengaja dibuat terpisah supaya data katalog bisa dinormalisasi tanpa mengubah komponen UI.

const humanCategoryCopy = {
  'Math and Trigonometry': {
    description: (name) => `Rumus ${name} dipakai untuk menghitung angka atau mengubah bentuk angka.`,
    logic: 'Tentukan dulu angka atau range angka yang mau dihitung, lalu masukkan ke argumen rumus.',
    useCase: 'Untuk total, pembulatan, pembagian sisa, akar, pangkat, atau hitungan angka lainnya.',
    analogy: 'Kayak kalkulator kecil di Excel. Kamu kasih angka yang benar, Excel bantu hitung hasilnya.',
    sample: '=SUM(A2:A10)',
    meaning: 'Contoh ini menjumlahkan angka dari A2 sampai A10.'
  },
  Statistical: {
    description: (name) => `Rumus ${name} dipakai untuk membaca pola dari kumpulan angka.`,
    logic: 'Pilih dulu kumpulan datanya, lalu tentukan ukuran statistik yang mau dicari.',
    useCase: 'Untuk rata-rata, ranking, median, standar deviasi, persentil, dan analisis data angka.',
    analogy: 'Kayak guru yang melihat semua nilai murid, lalu mencari rangkuman seperti nilai tengah atau ranking.',
    sample: '=AVERAGE(A2:A10)',
    meaning: 'Contoh ini mencari rata-rata angka dari A2 sampai A10.'
  },
  'Lookup and Reference': {
    description: (name) => `Rumus ${name} dipakai untuk mencari data atau mengambil isi dari posisi tertentu.`,
    logic: 'Tentukan value yang dicari, tempat mencarinya, lalu kolom atau range hasil yang mau diambil.',
    useCase: 'Untuk mengambil nama produk dari kode, mencari harga dari master data, atau mengambil data dari tabel lain.',
    analogy: 'Kayak cari nama kontak dari nomor HP. Excel mencari kode dulu, lalu mengambil informasi yang sejajar.',
    sample: '=XLOOKUP(A2;E2:E8;F2:F8)',
    meaning: 'Contoh ini mencari kode di A2 pada E2:E8, lalu mengambil hasil dari F2:F8.'
  },
  Text: {
    description: (name) => `Rumus ${name} dipakai untuk mengambil, menggabungkan, membersihkan, atau mengubah teks.`,
    logic: 'Pilih teksnya dulu, lalu tentukan bagian teks mana yang mau diambil atau diubah.',
    useCase: 'Untuk nama pelanggan, kode produk, nomor invoice, email, dan data copy paste yang perlu dirapikan.',
    analogy: 'Kayak gunting dan lem untuk teks. Bisa motong, gabung, atau merapikan tulisan.',
    sample: '=LEFT(A2;3)',
    meaning: 'Contoh ini mengambil 3 karakter pertama dari teks di A2.'
  },
  'Date and Time': {
    description: (name) => `Rumus ${name} dipakai untuk membaca atau menghitung tanggal dan waktu.`,
    logic: 'Tentukan tanggal atau jam yang dipakai, lalu pilih bagian yang mau diambil atau dihitung.',
    useCase: 'Untuk umur data, deadline, durasi kerja, tanggal jatuh tempo, bulan, tahun, jam, dan menit.',
    analogy: 'Kayak kalender dan jam di dalam Excel. Kamu tunjuk tanggalnya, Excel ambil bagian yang kamu butuhkan.',
    sample: '=DATEDIF(B2;C2;"d")',
    meaning: 'Contoh ini menghitung jumlah hari antara tanggal B2 dan C2.'
  },
  Logical: {
    description: (name) => `Rumus ${name} dipakai untuk membuat keputusan dari kondisi benar atau salah.`,
    logic: 'Tulis kondisi yang mau dicek, lalu tentukan hasil kalau kondisi benar dan hasil kalau salah.',
    useCase: 'Untuk status lulus/tidak, approve/reject, diskon/tidak diskon, atau valid/tidak valid.',
    analogy: 'Kayak aturan pintu masuk. Kalau syaratnya terpenuhi, masuk jalur A. Kalau tidak, masuk jalur B.',
    sample: '=IF(D2>=75;"Lulus";"Tidak Lulus")',
    meaning: 'Contoh ini mengecek nilai D2. Kalau minimal 75 hasilnya Lulus, kalau tidak hasilnya Tidak Lulus.'
  },
  'Dynamic Array': {
    description: (name) => `Rumus ${name} dipakai untuk mengeluarkan hasil yang bisa melebar otomatis ke banyak cell.`,
    logic: 'Pilih array atau tabel sumber, lalu tentukan aturan filter, sortir, ambil, atau gabung datanya.',
    useCase: 'Untuk membuat list unik, filter data, sortir data, dan membuat output tabel otomatis.',
    analogy: 'Kayak mesin penyaring data. Sekali formula jalan, hasilnya bisa keluar banyak baris sekaligus.',
    sample: '=FILTER(A2:E16;B2:B16="Digital")',
    meaning: 'Contoh ini menampilkan baris dari A2:E16 yang kategorinya Digital.'
  },
  Financial: {
    description: (name) => `Rumus ${name} dipakai untuk hitungan keuangan.`,
    logic: 'Siapkan angka keuangan seperti bunga, periode, pembayaran, atau nilai sekarang, lalu masukkan sesuai urutan format.',
    useCase: 'Untuk cicilan, bunga, nilai investasi, depresiasi, dan analisis keuangan.',
    analogy: 'Kayak kalkulator finansial. Inputnya harus rapi karena urutan argumen sangat berpengaruh.',
    sample: '=PMT(10%/12;12;10000000)',
    meaning: 'Contoh ini menghitung estimasi cicilan bulanan untuk pinjaman 10 juta selama 12 bulan.'
  },
  Engineering: {
    description: (name) => `Rumus ${name} dipakai untuk hitungan teknis atau konversi angka khusus.`,
    logic: 'Pahami dulu jenis inputnya, misalnya bilangan biner, satuan, atau angka teknik, lalu masukkan sesuai format.',
    useCase: 'Untuk konversi satuan, bilangan biner/hex, bilangan kompleks, dan perhitungan teknik.',
    analogy: 'Kayak alat bengkel khusus. Dipakai saat datanya memang teknis.',
    sample: '=CONVERT(10;"km";"m")',
    meaning: 'Contoh ini mengubah 10 kilometer menjadi meter.'
  },
  Information: {
    description: (name) => `Rumus ${name} dipakai untuk mengecek jenis isi cell.`,
    logic: 'Pilih cell yang mau dicek, lalu Excel memberi tahu apakah isinya kosong, angka, teks, error, atau jenis lain.',
    useCase: 'Untuk validasi data, cek error, cek cell kosong, dan memastikan data siap dihitung.',
    analogy: 'Kayak petugas QC yang mengecek isi kotak sebelum diproses.',
    sample: '=ISBLANK(A2)',
    meaning: 'Contoh ini mengecek apakah A2 kosong.'
  },
  Database: {
    description: (name) => `Rumus ${name} dipakai untuk menghitung data seperti database kecil di Excel.`,
    logic: 'Pilih tabel database, nama field/kolom, lalu range criteria yang berisi syarat pencarian.',
    useCase: 'Untuk menghitung, menjumlahkan, atau mengambil data dari tabel yang punya area criteria.',
    analogy: 'Kayak filter tabel lama di Excel. Ada data utama, lalu ada kotak syarat yang menentukan data mana yang dihitung.',
    sample: '=DSUM(A1:E16;"Total Penjualan";G1:H2)',
    meaning: 'Contoh ini menjumlahkan field Total Penjualan dari database A1:E16 memakai criteria di G1:H2.'
  },
  Compatibility: {
    description: (name) => `Rumus ${name} adalah rumus lama yang masih ada agar file Excel lama tetap bisa dibuka.`,
    logic: 'Pakai hanya kalau kamu mengerjakan file lama. Untuk file baru, biasanya ada versi function yang lebih baru.',
    useCase: 'Untuk menjaga file lama tetap jalan atau memahami rumus dari workbook lama.',
    analogy: 'Kayak adaptor charger lama. Masih berguna kalau perangkatnya masih butuh versi lama.',
    sample: '=FORECAST(A7;B2:B6;A2:A6)',
    meaning: 'Contoh ini memperlihatkan pola rumus lama. Untuk file baru, cek apakah ada versi modernnya.'
  },
  Cube: {
    description: (name) => `Rumus ${name} dipakai untuk mengambil data dari model cube atau data model.`,
    logic: 'Kamu butuh koneksi/model cube lebih dulu, lalu rumus mengambil member, set, atau nilai dari cube tersebut.',
    useCase: 'Untuk laporan berbasis OLAP, Power Pivot, atau data model yang sudah dibuat.',
    analogy: 'Kayak mengambil barang dari gudang besar. Kamu harus tahu alamat raknya dulu.',
    sample: '=CUBEVALUE("ThisWorkbookDataModel";"[Measures].[Total Sales]")',
    meaning: 'Contoh ini mengambil nilai Total Sales dari data model workbook.'
  },
  Web: {
    description: (name) => `Rumus ${name} dipakai untuk data URL, web service, atau XML.`,
    logic: 'Masukkan URL atau teks XML, lalu Excel mengambil atau merapikan data web tersebut.',
    useCase: 'Untuk encode URL, mengambil response dari web service, atau membaca XML sederhana.',
    analogy: 'Kayak kurir data dari internet. Rumusnya mengambil alamat, lalu membawa balik data yang diminta.',
    sample: '=ENCODEURL(A2)',
    meaning: 'Contoh ini mengubah teks di A2 agar aman dipakai di URL.'
  },
  'Advanced / Professional': {
    description: (name) => `Rumus ${name} dipakai untuk kebutuhan Excel yang lebih modern atau profesional.`,
    logic: 'Pahami dulu output yang diinginkan, lalu susun input dan aturan prosesnya dengan hati-hati.',
    useCase: 'Untuk dashboard modern, formula custom, automation, regex, translate, atau model formula yang lebih advanced.',
    analogy: 'Kayak bikin mesin kecil sendiri di Excel. Lebih kuat, tapi harus paham alurnya dulu.',
    sample: '=LET(total;SUM(E2:E16);total)',
    meaning: 'Contoh ini menyimpan SUM(E2:E16) sebagai total, lalu menampilkan total itu.'
  },
  'Add-in / User Defined': {
    description: (name) => `Rumus ${name} berasal dari add-in atau function buatan user.`,
    logic: 'Pastikan add-in atau function custom-nya tersedia dulu, baru rumusnya bisa jalan.',
    useCase: 'Untuk kebutuhan khusus yang tidak disediakan function bawaan Excel.',
    analogy: 'Kayak alat tambahan yang dipasang ke Excel. Kalau alatnya belum terpasang, rumusnya tidak dikenali.',
    sample: '=MYFUNCTION(A2)',
    meaning: 'Contoh ini hanya pola. Function add-in bisa berbeda tergantung file atau add-in yang dipakai.'
  }
};

export const verifiedFormatOverrides = {
  ...practiceFormatOverrides,
  DETECTLANGUAGE: 'DETECTLANGUAGE(text)',
  TRANSLATE: 'TRANSLATE(text, [source_language], [target_language])',
  REGEXEXTRACT: 'REGEXEXTRACT(text, pattern, [return_mode], [case_sensitivity])',
  REGEXREPLACE: 'REGEXREPLACE(text, pattern, replacement, [occurrence], [case_sensitivity])',
  REGEXTEST: 'REGEXTEST(text, pattern, [case_sensitivity])',
  GROUPBY: 'GROUPBY(row_fields, values, function, [field_headers], [total_depth], [sort_order], [filter_array], [field_relationship])',
  PIVOTBY: 'PIVOTBY(row_fields, col_fields, values, function, [field_headers], [row_total_depth], [row_sort_order], [col_total_depth], [col_sort_order], [filter_array], [relative_to])',

  // Text
  ARRAYTOTEXT: 'ARRAYTOTEXT(array, [format])', ASC: 'ASC(text)', BAHTTEXT: 'BAHTTEXT(number)', CHAR: 'CHAR(number)', CLEAN: 'CLEAN(text)', CODE: 'CODE(text)', CONCAT: 'CONCAT(text1, [text2], ...)', CONCATENATE: 'CONCATENATE(text1, [text2], ...)', DBCS: 'DBCS(text)', DOLLAR: 'DOLLAR(number, [decimals])', EXACT: 'EXACT(text1, text2)', FIND: 'FIND(find_text, within_text, [start_num])', FINDB: 'FINDB(find_text, within_text, [start_num])', FIXED: 'FIXED(number, [decimals], [no_commas])', LEFT: 'LEFT(text, [num_chars])', LEFTB: 'LEFTB(text, [num_bytes])', LEN: 'LEN(text)', LENB: 'LENB(text)', LOWER: 'LOWER(text)', MID: 'MID(text, start_num, num_chars)', MIDB: 'MIDB(text, start_num, num_bytes)', NUMBERVALUE: 'NUMBERVALUE(text, [decimal_separator], [group_separator])', PHONETIC: 'PHONETIC(reference)', PROPER: 'PROPER(text)', REPLACE: 'REPLACE(old_text, start_num, num_chars, new_text)', REPLACEB: 'REPLACEB(old_text, start_num, num_bytes, new_text)', REPT: 'REPT(text, number_times)', RIGHT: 'RIGHT(text, [num_chars])', RIGHTB: 'RIGHTB(text, [num_bytes])', SEARCH: 'SEARCH(find_text, within_text, [start_num])', SEARCHB: 'SEARCHB(find_text, within_text, [start_num])', SUBSTITUTE: 'SUBSTITUTE(text, old_text, new_text, [instance_num])', T: 'T(value)', TEXT: 'TEXT(value, format_text)', TEXTAFTER: 'TEXTAFTER(text, delimiter, [instance_num], [match_mode], [match_end], [if_not_found])', TEXTBEFORE: 'TEXTBEFORE(text, delimiter, [instance_num], [match_mode], [match_end], [if_not_found])', TEXTJOIN: 'TEXTJOIN(delimiter, ignore_empty, text1, [text2], ...)', TEXTSPLIT: 'TEXTSPLIT(text, col_delimiter, [row_delimiter], [ignore_empty], [match_mode], [pad_with])', TRIM: 'TRIM(text)', UNICHAR: 'UNICHAR(number)', UNICODE: 'UNICODE(text)', UPPER: 'UPPER(text)', VALUE: 'VALUE(text)', VALUETOTEXT: 'VALUETOTEXT(value, [format])',
};

export const functionExamples = {
  DETECTLANGUAGE: {
    exampleFormula: '=DETECTLANGUAGE(A2)',
    exampleMeaning: 'Mendeteksi bahasa dari teks di A2.',
    simpleLogic: 'Excel membaca teks, lalu mengembalikan kode bahasa yang terdeteksi.'
  },
  TRANSLATE: {
    exampleFormula: '=TRANSLATE(A2;"id";"en")',
    exampleMeaning: 'Menerjemahkan teks di A2 dari bahasa Indonesia ke English.',
    simpleLogic: 'Excel mengambil teks sumber, lalu menerjemahkannya ke bahasa target.'
  },
  REGEXEXTRACT: {
    exampleFormula: '=REGEXEXTRACT(A2;"[0-9]+")',
    exampleMeaning: 'Mengambil angka pertama yang muncul di teks A2.',
    simpleLogic: 'Excel mencari teks yang cocok dengan pola regex, lalu mengambil bagian yang cocok.'
  },
  REGEXREPLACE: {
    exampleFormula: '=REGEXREPLACE(A2;"[0-9]+";"XXX")',
    exampleMeaning: 'Mengganti bagian angka di A2 menjadi XXX.',
    simpleLogic: 'Excel mencari pola tertentu di teks, lalu menggantinya dengan teks baru.'
  },
  REGEXTEST: {
    exampleFormula: '=REGEXTEST(A2;"[0-9]+")',
    exampleMeaning: 'Mengecek apakah teks A2 punya angka.',
    simpleLogic: 'Excel mengecek apakah teks cocok dengan pola regex. Hasilnya TRUE atau FALSE.'
  },
  LET: {
    exampleFormula: '=LET(total;SUM(E2:E16);total)',
    exampleMeaning: 'Simpan total penjualan sebagai nama total, lalu tampilkan hasilnya.',
    simpleLogic: 'Excel menghitung bagian rumus, menyimpannya dengan nama sementara, lalu memakai nama itu lagi.'
  },
  LAMBDA: {
    exampleFormula: '=LAMBDA(x;x*10)(5)',
    exampleMeaning: 'Buat function kecil yang mengalikan input dengan 10, lalu jalankan untuk angka 5.',
    simpleLogic: 'Kamu membuat function sendiri: tentukan inputnya, lalu tentukan cara hitungnya.'
  }
};

const categoryFallback = (category = '') => humanCategoryCopy[category] || humanCategoryCopy['Advanced / Professional'];

export function isGenericFormat(format = '') {
  return /argument1\s*,\s*\[argument2\]/i.test(String(format || ''));
}


const teachingExampleOverrides = {
  SUM: ['=SUM(E2:E20)', 'Menjumlahkan semua angka penjualan dari E2 sampai E20.'],
  AVERAGE: ['=AVERAGE(E2:E20)', 'Menghitung rata-rata angka dari E2 sampai E20.'],
  MIN: ['=MIN(E2:E20)', 'Mengambil angka paling kecil dari E2 sampai E20.'],
  MAX: ['=MAX(E2:E20)', 'Mengambil angka paling besar dari E2 sampai E20.'],
  COUNT: ['=COUNT(E2:E20)', 'Menghitung berapa cell di E2:E20 yang berisi angka.'],
  COUNTA: ['=COUNTA(A2:A20)', 'Menghitung berapa cell di A2:A20 yang terisi, baik angka maupun teks.'],
  COUNTBLANK: ['=COUNTBLANK(A2:A20)', 'Menghitung berapa cell kosong di A2:A20.'],
  LARGE: ['=LARGE(E2:E20;2)', 'Mengambil angka terbesar ke-2 dari E2 sampai E20.'],
  SMALL: ['=SMALL(E2:E20;2)', 'Mengambil angka terkecil ke-2 dari E2 sampai E20.'],

  SUMIF: ['=SUMIF(B2:B20;"Digital";E2:E20)', 'Menjumlahkan nilai di E2:E20 hanya untuk baris yang kategorinya Digital di B2:B20.'],
  SUMIFS: ['=SUMIFS(E2:E20;B2:B20;"Digital";C2:C20;"Jakarta")', 'Menjumlahkan nilai di E2:E20 hanya untuk kategori Digital dan kota Jakarta.'],
  AVERAGEIF: ['=AVERAGEIF(B2:B20;"Digital";E2:E20)', 'Menghitung rata-rata nilai di E2:E20 hanya untuk baris yang kategorinya Digital.'],
  AVERAGEIFS: ['=AVERAGEIFS(E2:E20;B2:B20;"Digital";C2:C20;"Jakarta")', 'Menghitung rata-rata nilai untuk data kategori Digital di kota Jakarta.'],
  COUNTIF: ['=COUNTIF(B2:B20;"Digital")', 'Menghitung berapa kali kategori Digital muncul di B2:B20.'],
  COUNTIFS: ['=COUNTIFS(B2:B20;"Digital";C2:C20;"Jakarta")', 'Menghitung jumlah baris yang kategorinya Digital dan kotanya Jakarta.'],
  MAXIFS: ['=MAXIFS(E2:E20;B2:B20;"Digital")', 'Mengambil nilai terbesar dari E2:E20 untuk kategori Digital.'],
  MINIFS: ['=MINIFS(E2:E20;B2:B20;"Digital")', 'Mengambil nilai terkecil dari E2:E20 untuk kategori Digital.'],

  IF: ['=IF(D2>=75;"Lulus";"Tidak Lulus")', 'Mengecek nilai D2. Kalau minimal 75 hasilnya Lulus, kalau tidak hasilnya Tidak Lulus.'],
  IFS: ['=IFS(D2>=90;"A";D2>=75;"B";TRUE;"C")', 'Mengecek beberapa kondisi nilai dari atas ke bawah sampai menemukan kondisi yang cocok.'],
  AND: ['=AND(D2>=75;E2="Lunas")', 'Menghasilkan TRUE kalau nilai minimal 75 dan status pembayaran Lunas.'],
  OR: ['=OR(D2>=75;E2="Lunas")', 'Menghasilkan TRUE kalau salah satu kondisi terpenuhi.'],
  NOT: ['=NOT(D2="Lunas")', 'Membalik hasil logika. Kalau D2 bukan Lunas, hasilnya TRUE.'],
  IFERROR: ['=IFERROR(VLOOKUP(A2;E2:F20;2;FALSE);"Tidak ditemukan")', 'Menampilkan Tidak ditemukan kalau VLOOKUP menghasilkan error.'],
  IFNA: ['=IFNA(XLOOKUP(A2;E2:E20;F2:F20);"Tidak ditemukan")', 'Menampilkan Tidak ditemukan kalau XLOOKUP menghasilkan #N/A.'],
  SWITCH: ['=SWITCH(B2;"A";"Prioritas";"B";"Normal";"Lainnya")', 'Mengubah kode di B2 menjadi label yang lebih mudah dibaca.'],
  TRUE: ['=TRUE()', 'Menghasilkan nilai logika TRUE.'],
  FALSE: ['=FALSE()', 'Menghasilkan nilai logika FALSE.'],

  VLOOKUP: ['=VLOOKUP(A2;E2:H20;2;FALSE)', 'Mencari kode di A2 pada kolom pertama tabel E2:H20, lalu mengambil hasil dari kolom ke-2.'],
  HLOOKUP: ['=HLOOKUP(B1;B1:H4;3;FALSE)', 'Mencari value di B1 pada baris pertama tabel B1:H4, lalu mengambil hasil dari baris ke-3.'],
  XLOOKUP: ['=XLOOKUP(A2;E2:E20;F2:F20;"Tidak ditemukan")', 'Mencari A2 di E2:E20, lalu mengambil hasil sejajar dari F2:F20.'],
  LOOKUP: ['=LOOKUP(A2;E2:E20;F2:F20)', 'Mencari A2 di E2:E20, lalu mengambil hasil sejajar dari F2:F20.'],
  MATCH: ['=MATCH(A2;E2:E20;0)', 'Mencari posisi A2 di dalam E2:E20 dengan match exact.'],
  XMATCH: ['=XMATCH(A2;E2:E20;0)', 'Mencari posisi A2 di dalam E2:E20 dengan match exact versi modern.'],
  INDEX: ['=INDEX(F2:F20;MATCH(A2;E2:E20;0))', 'Mengambil isi dari F2:F20 pada posisi kode A2 yang ditemukan di E2:E20.'],
  CHOOSE: ['=CHOOSE(2;"Basic";"Premium";"Pro")', 'Memilih item ke-2 dari daftar pilihan, hasilnya Premium.'],

  LEFT: ['=LEFT(A2;3)', 'Mengambil 3 karakter pertama dari teks di A2.'],
  RIGHT: ['=RIGHT(A2;4)', 'Mengambil 4 karakter terakhir dari teks di A2.'],
  MID: ['=MID(A2;4;5)', 'Mengambil 5 karakter dari teks A2, mulai karakter ke-4.'],
  LEN: ['=LEN(A2)', 'Menghitung jumlah karakter di A2.'],
  TRIM: ['=TRIM(A2)', 'Membersihkan spasi berlebih di teks A2.'],
  CLEAN: ['=CLEAN(A2)', 'Membersihkan karakter tidak terlihat dari teks A2.'],
  LOWER: ['=LOWER(A2)', 'Mengubah teks A2 menjadi huruf kecil.'],
  UPPER: ['=UPPER(A2)', 'Mengubah teks A2 menjadi huruf besar.'],
  PROPER: ['=PROPER(A2)', 'Membuat huruf awal tiap kata di A2 menjadi kapital.'],
  CONCAT: ['=CONCAT(A2;" ";B2)', 'Menggabungkan isi A2, spasi, dan B2.'],
  CONCATENATE: ['=CONCATENATE(A2;" ";B2)', 'Menggabungkan isi A2, spasi, dan B2 memakai rumus lama.'],
  TEXTJOIN: ['=TEXTJOIN(", ";TRUE;A2:A5)', 'Menggabungkan teks dari A2:A5 dengan pemisah koma dan mengabaikan cell kosong.'],
  TEXTSPLIT: ['=TEXTSPLIT(A2;"-")', 'Memecah teks A2 menjadi beberapa bagian berdasarkan tanda minus.'],
  TEXTBEFORE: ['=TEXTBEFORE(A2;"-")', 'Mengambil teks sebelum tanda minus pertama di A2.'],
  TEXTAFTER: ['=TEXTAFTER(A2;"-")', 'Mengambil teks setelah tanda minus pertama di A2.'],
  FIND: ['=FIND("@";A2)', 'Mencari posisi tanda @ di dalam teks A2, case-sensitive.'],
  SEARCH: ['=SEARCH("jakarta";A2)', 'Mencari posisi kata jakarta di A2, tidak peduli huruf besar/kecil.'],
  SUBSTITUTE: ['=SUBSTITUTE(A2;"lama";"baru")', 'Mengganti kata lama menjadi baru di teks A2.'],
  REPLACE: ['=REPLACE(A2;1;3;"INV")', 'Mengganti 3 karakter pertama di A2 menjadi INV.'],
  VALUE: ['=VALUE(A2)', 'Mengubah teks angka di A2 menjadi angka asli.'],
  NUMBERVALUE: ['=NUMBERVALUE(A2;",";".")', 'Mengubah teks angka dengan format separator tertentu menjadi angka asli.'],
  TEXT: ['=TEXT(E2;"Rp #,##0")', 'Mengubah angka di E2 menjadi teks dengan format rupiah.'],

  DATE: ['=DATE(2026;5;30)', 'Membuat tanggal dari tahun 2026, bulan 5, dan tanggal 30.'],
  DAY: ['=DAY(B2)', 'Mengambil angka tanggal dari date di B2.'],
  MONTH: ['=MONTH(B2)', 'Mengambil angka bulan dari date di B2.'],
  YEAR: ['=YEAR(B2)', 'Mengambil tahun dari date di B2.'],
  TODAY: ['=TODAY()', 'Menghasilkan tanggal hari ini.'],
  NOW: ['=NOW()', 'Menghasilkan tanggal dan jam saat ini.'],
  DATEDIF: ['=DATEDIF(B2;C2;"d")', 'Menghitung selisih hari antara tanggal B2 dan C2.'],
  DAYS: ['=DAYS(C2;B2)', 'Menghitung jumlah hari dari B2 sampai C2.'],
  NETWORKDAYS: ['=NETWORKDAYS(B2;C2;E2:E5)', 'Menghitung hari kerja dari B2 sampai C2, dikurangi tanggal libur di E2:E5.'],
  'NETWORKDAYS.INTL': ['=NETWORKDAYS.INTL(B2;C2;1;E2:E5)', 'Menghitung hari kerja dengan pola weekend dan daftar libur khusus.'],
  WORKDAY: ['=WORKDAY(B2;10;E2:E5)', 'Mengambil tanggal 10 hari kerja setelah tanggal B2.'],
  'WORKDAY.INTL': ['=WORKDAY.INTL(B2;10;1;E2:E5)', 'Mengambil tanggal kerja berikutnya dengan pola weekend khusus.'],
  EDATE: ['=EDATE(B2;3)', 'Mengambil tanggal 3 bulan setelah B2.'],
  EOMONTH: ['=EOMONTH(B2;0)', 'Mengambil tanggal akhir bulan dari tanggal B2.'],
  HOUR: ['=HOUR(D2)', 'Mengambil jam dari waktu di D2.'],
  MINUTE: ['=MINUTE(D2)', 'Mengambil menit dari waktu di D2.'],
  SECOND: ['=SECOND(D2)', 'Mengambil detik dari waktu di D2.'],
  TIME: ['=TIME(8;30;0)', 'Membuat waktu jam 08:30:00.'],

  FILTER: ['=FILTER(A2:E20;B2:B20="Digital";"Tidak ada data")', 'Menampilkan baris A2:E20 yang kategorinya Digital.'],
  SORT: ['=SORT(A2:E20;5;-1)', 'Mengurutkan tabel A2:E20 berdasarkan kolom ke-5 dari terbesar ke terkecil.'],
  SORTBY: ['=SORTBY(A2:E20;E2:E20;-1)', 'Mengurutkan tabel A2:E20 berdasarkan nilai di E2:E20 dari terbesar ke terkecil.'],
  UNIQUE: ['=UNIQUE(B2:B20)', 'Menampilkan daftar kategori unik dari B2:B20.'],
  TRANSPOSE: ['=TRANSPOSE(A2:E2)', 'Mengubah data horizontal A2:E2 menjadi vertikal.'],
  TAKE: ['=TAKE(A2:E20;5)', 'Mengambil 5 baris pertama dari A2:E20.'],
  DROP: ['=DROP(A2:E20;1)', 'Membuang 1 baris pertama dari A2:E20.'],
  VSTACK: ['=VSTACK(A2:E10;A11:E20)', 'Menggabungkan dua tabel secara vertikal.'],
  HSTACK: ['=HSTACK(A2:B20;D2:E20)', 'Menggabungkan dua range secara horizontal.'],
  CHOOSECOLS: ['=CHOOSECOLS(A2:E20;1;3;5)', 'Mengambil kolom ke-1, ke-3, dan ke-5 dari A2:E20.'],
  CHOOSEROWS: ['=CHOOSEROWS(A2:E20;1;3;5)', 'Mengambil baris ke-1, ke-3, dan ke-5 dari A2:E20.'],

  SUBTOTAL: ['=SUBTOTAL(9;E2:E20)', 'Menjumlahkan E2:E20 dengan mode SUBTOTAL SUM.'],
  AGGREGATE: ['=AGGREGATE(9;6;E2:E20)', 'Menjumlahkan E2:E20 sambil mengabaikan error.'],
  SUMPRODUCT: ['=SUMPRODUCT(D2:D20;E2:E20)', 'Mengalikan Qty dan Harga per baris, lalu menjumlahkan hasilnya.'],
  LET: ['=LET(total;SUM(E2:E20);total)', 'Menyimpan hasil SUM(E2:E20) dengan nama total, lalu menampilkan total itu.'],
  LAMBDA: ['=LAMBDA(x;x*10)(5)', 'Membuat function kecil yang mengalikan input dengan 10, lalu menjalankannya untuk angka 5.'],

  CUBEVALUE: ['=CUBEVALUE("ThisWorkbookDataModel";"[Measures].[Total Sales]")', 'Mengambil nilai Total Sales dari Data Model workbook.'],
  CUBEMEMBER: ['=CUBEMEMBER("ThisWorkbookDataModel";"[Product].[Category].[Digital]")', 'Mengambil member kategori Digital dari Data Model.'],
  CUBESET: ['=CUBESET("ThisWorkbookDataModel";"[Product].[Category].Members")', 'Membuat set dari daftar kategori produk di Data Model.'],
  CUBESETCOUNT: ['=CUBESETCOUNT(A2)', 'Menghitung jumlah item di set Cube yang ada di A2.'],

  NEGBINOMDIST: ['=NEGBINOMDIST(3;5;0.4)', 'Menghitung peluang 3 kali gagal sebelum 5 kali berhasil, dengan peluang berhasil 0.4.'],
  'BINOM.DIST': ['=BINOM.DIST(6;10;0.4;FALSE)', 'Menghitung peluang tepat 6 sukses dari 10 percobaan dengan peluang sukses 0.4.'],
  BINOMDIST: ['=BINOMDIST(6;10;0.4;FALSE)', 'Versi lama dari BINOM.DIST untuk menghitung peluang binomial.'],
  'NORM.DIST': ['=NORM.DIST(42;40;1.5;TRUE)', 'Menghitung distribusi normal kumulatif untuk nilai 42 dengan mean 40 dan standar deviasi 1.5.'],
  NORMDIST: ['=NORMDIST(42;40;1.5;TRUE)', 'Versi lama dari NORM.DIST.'],
  'NORM.INV': ['=NORM.INV(0.8;40;1.5)', 'Mengambil nilai x dari peluang 0.8 pada distribusi normal.'],
  NORMINV: ['=NORMINV(0.8;40;1.5)', 'Versi lama dari NORM.INV.'],

  PMT: ['=PMT(8%/12;12;-10000000)', 'Menghitung estimasi cicilan bulanan untuk pinjaman 10 juta selama 12 bulan.'],
  FV: ['=FV(8%/12;12;-900000)', 'Menghitung nilai masa depan dari setoran 900.000 per bulan.'],
  PV: ['=PV(8%/12;12;-900000)', 'Menghitung nilai sekarang dari pembayaran 900.000 per bulan.'],
  RATE: ['=RATE(12;-900000;10000000)', 'Menghitung estimasi bunga per periode dari data cicilan.'],
  NPER: ['=NPER(8%/12;-900000;10000000)', 'Menghitung jumlah periode untuk melunasi pinjaman.'],

  CONVERT: ['=CONVERT(10;"m";"cm")', 'Mengubah 10 meter menjadi centimeter.'],
  ENCODEURL: ['=ENCODEURL("Formula Coach Excel")', 'Mengubah teks agar aman dipakai sebagai bagian URL.'],
  FILTERXML: ['=FILTERXML("<root><title>Formula Coach</title></root>";"//title")', 'Mengambil isi title dari teks XML sederhana.'],
  WEBSERVICE: ['=WEBSERVICE("https://example.com/api")', 'Contoh struktur WEBSERVICE. Hasil asli bergantung koneksi web dan URL yang dipakai.']
};

function splitFormatArguments(format = '') {
  const open = String(format).indexOf('(');
  const close = String(format).lastIndexOf(')');
  if (open < 0 || close < open) return [];
  const inner = String(format).slice(open + 1, close);
  const result = [];
  let current = '';
  let depth = 0;
  for (const char of inner) {
    if (char === '(') depth += 1;
    if (char === ')') depth = Math.max(0, depth - 1);
    if (char === ',' && depth === 0) {
      if (current.trim()) result.push(current.trim());
      current = '';
      continue;
    }
    current += char;
  }
  if (current.trim()) result.push(current.trim());
  return result;
}

function normalizeArgName(arg = '') {
  return String(arg).replace(/[\[\]]/g, '').replace(/\.\.\./g, '').trim().toLowerCase();
}

function shouldUseOptionalArg(name, arg) {
  const n = String(name).toUpperCase();
  const a = normalizeArgName(arg);
  if (['VLOOKUP', 'HLOOKUP', 'XLOOKUP', 'NETWORKDAYS', 'NETWORKDAYS.INTL', 'WORKDAY', 'WORKDAY.INTL', 'SUBTOTAL', 'AGGREGATE'].includes(n)) return true;
  if (/if_not_found|range_lookup|match_mode|search_mode|holidays|weekend|function_num|options/.test(a)) return true;
  return false;
}

function exampleArgValue(arg = '', formula = {}) {
  const name = String(formula.name || '').toUpperCase();
  const category = formula.category || '';
  const a = normalizeArgName(arg);

  if (/lookup_value/.test(a)) return 'A2';
  if (/lookup_array|lookup_vector/.test(a)) return 'E2:E20';
  if (/return_array|result_vector/.test(a)) return 'F2:F20';
  if (/table_array/.test(a)) return 'E2:H20';
  if (/col_index/.test(a)) return '2';
  if (/row_index/.test(a)) return '3';
  if (/range_lookup/.test(a)) return 'FALSE';
  if (/match_mode|match_type/.test(a)) return '0';
  if (/search_mode/.test(a)) return '1';

  if (/sum_range|average_range|max_range|min_range/.test(a)) return 'E2:E20';
  if (/criteria_range/.test(a)) return /2/.test(a) ? 'C2:C20' : 'B2:B20';
  if (/criteria/.test(a)) return /2/.test(a) ? '"Jakarta"' : '"Digital"';
  if (/range/.test(a) && /if/.test(name)) return 'B2:B20';

  if (/logical_test|condition/.test(a)) return 'D2>=75';
  if (/value_if_true|result_if_true/.test(a)) return '"Lulus"';
  if (/value_if_false|result_if_false/.test(a)) return '"Tidak Lulus"';
  if (/logical/.test(a)) return 'D2>=75';

  if (/start_date/.test(a)) return 'B2';
  if (/end_date/.test(a)) return 'C2';
  if (/holidays/.test(a)) return 'E2:E5';
  if (/weekend/.test(a)) return '1';
  if (/year/.test(a)) return '2026';
  if (/month/.test(a)) return '5';
  if (/day/.test(a)) return '30';
  if (/hour/.test(a)) return '8';
  if (/minute/.test(a)) return '30';
  if (/second/.test(a)) return '0';
  if (/serial_number|date_text|time_text/.test(a)) return /time/.test(a) ? 'D2' : 'B2';
  if (/months|days/.test(a)) return '3';

  if (/find_text|old_text|delimiter|col_delimiter|row_delimiter/.test(a)) return '"-"';
  if (/new_text|replacement/.test(a)) return '"Baru"';
  if (/text1/.test(a)) return 'A2';
  if (/text2/.test(a)) return 'B2';
  if (/text|within_text/.test(a)) return 'A2';
  if (/start_num/.test(a)) return '4';
  if (/num_chars|num_bytes|number_times|decimals/.test(a)) return '3';
  if (/format_text/.test(a)) return '"Rp #,##0"';

  if (/row_fields/.test(a)) return 'B2:B20';
  if (/col_fields/.test(a)) return 'C2:C20';
  if (/function/.test(a)) return 'SUM';
  if (/values/.test(a)) return 'E2:E20';
  if (category === 'Engineering') {
    if (/number1/.test(a)) return '6';
    if (/number2/.test(a)) return '3';
    if (/^n$|order/.test(a)) return '2';
    if (/places|shift_amount|step/.test(a)) return '2';
    if (/number|x|lower_limit|upper_limit/.test(a)) return '10';
  }

  if (/array1/.test(a)) return 'D2:D20';
  if (/array2/.test(a)) return 'E2:E20';
  if (/array|ref|reference|number1|value1/.test(a)) {
    if (category === 'Text') return 'A2:A10';
    if (category === 'Lookup and Reference') return 'A2:E20';
    return 'E2:E20';
  }
  if (/number2|value2/.test(a)) return 'B2';
  if (/number_times|decimals/.test(a)) return '3';
  if (/number|x|z/.test(a)) return '42';
  if (/k|quart|num_digits|significance|multiple|rows|columns|height|width|step|start/.test(a)) return '2';

  if (/rate/.test(a)) return '8%/12';
  if (/nper|per|period/.test(a)) return '12';
  if (/pmt/.test(a)) return '-900000';
  if (/pv/.test(a)) return '10000000';
  if (/fv/.test(a)) return '0';
  if (/type|basis|method/.test(a)) return '0';

  if (/probability_s|probability|alpha/.test(a)) return '0.4';
  if (/number_f/.test(a)) return '3';
  if (/number_s|sample_s|success/.test(a)) return '5';
  if (/trials|deg_freedom|size|number_sample|number_pop/.test(a)) return '10';
  if (/mean|standard_dev|sigma|lambda|beta/.test(a)) return /standard|sigma/.test(a) ? '1.5' : '40';
  if (/cumulative/.test(a)) return 'TRUE';

  if (/from_unit/.test(a)) return '"m"';
  if (/to_unit/.test(a)) return '"cm"';
  if (/unit/.test(a)) return '"m"';
  if (/real_num/.test(a)) return '3';
  if (/^i_num$|imag_num/.test(a)) return '4';
  if (/inumber|complex/.test(a)) return '"3+4i"';
  if (/suffix/.test(a)) return '"i"';

  if (/url/.test(a)) return '"https://example.com/api"';
  if (/xml/.test(a)) return '"<root><title>Formula Coach</title></root>"';
  if (/xpath/.test(a)) return '"//title"';

  if (/connection/.test(a)) return '"ThisWorkbookDataModel"';
  if (/member|set|measure|tuple/.test(a)) return '"[Measures].[Total Sales]"';
  if (/caption/.test(a)) return '"Total Sales"';

  if (/function/.test(a)) return 'SUM';
  if (/lambda/.test(a)) return 'LAMBDA(x;x*2)';
  if (/name1/.test(a)) return 'total';
  if (/name_value/.test(a)) return 'SUM(E2:E20)';
  if (/calculation/.test(a)) return 'total';

  return category === 'Text' ? 'A2' : 'E2:E20';
}

function buildTeachingExample(formula = {}) {
  const name = String(formula.name || '').toUpperCase();
  const override = teachingExampleOverrides[name];
  if (override) {
    return { exampleFormula: override[0], exampleMeaning: override[1] };
  }

  const syntax = formula.syntax || `${formula.name || 'FORMULA'}(value)`;
  const args = splitFormatArguments(syntax);
  const argsToUse = args
    .filter((arg) => !/^\s*\.\.\.\s*$/.test(arg))
    .filter((arg) => !/^\[.*\]$/.test(arg) || shouldUseOptionalArg(name, arg))
    .slice(0, 6);

  const values = argsToUse.map((arg) => exampleArgValue(arg, formula));
  const formulaName = formula.name || String(syntax).split('(')[0] || 'FORMULA';
  const exampleFormula = values.length ? `=${formulaName}(${values.join(';')})` : `=${formulaName}()`;

  let exampleMeaning = `Contoh ini menunjukkan cara mengisi ${formulaName} dengan argumen yang sesuai format, bukan jawaban latihan.`;
  if (formula.category === 'Text') exampleMeaning = `Contoh ini mengolah teks dari cell atau range yang dipilih.`;
  if (formula.category === 'Date and Time') exampleMeaning = `Contoh ini mengolah tanggal atau waktu memakai input yang sesuai format.`;
  if (formula.category === 'Financial') exampleMeaning = `Contoh ini memakai angka keuangan seperti bunga, periode, pembayaran, atau nilai pinjaman.`;
  if (formula.category === 'Statistical' || formula.category === 'Compatibility') exampleMeaning = `Contoh ini memakai angka statistik yang sesuai dengan argumen ${formulaName}.`;
  if (formula.category === 'Engineering') exampleMeaning = `Contoh ini memakai input teknik seperti angka, satuan, bilangan biner, atau bilangan kompleks.`;
  if (formula.category === 'Lookup and Reference') exampleMeaning = `Contoh ini mencari data dari tabel referensi, lalu mengambil hasil yang sejajar.`;
  if (formula.category === 'Database') exampleMeaning = `Contoh ini memakai database kecil, field, dan area kriteria.`;
  if (formula.category === 'Web') exampleMeaning = `Contoh ini memakai URL atau XML sebagai bahan latihan struktur rumus.`;
  if (formula.category === 'Cube') exampleMeaning = `Contoh ini menunjukkan struktur rumus Cube. Hasil asli butuh Data Model atau koneksi Cube.`;

  return { exampleFormula, exampleMeaning };
}

export function buildBeginnerLearningContent(formula = {}) {
  const name = formula.name || 'FORMULA';
  const copy = categoryFallback(formula.category || formula.displayCategory);
  const specific = functionExamples[name] || {};
  const generatedExample = buildTeachingExample(formula);
  const genericFormat = isGenericFormat(formula.syntax);
  const baseExample = specific.exampleFormula || generatedExample.exampleFormula || copy.sample;
  const baseMeaning = specific.exampleMeaning || generatedExample.exampleMeaning || copy.meaning;

  return {
    description: formula.description && !/untuk kebutuhan khusus|berdasarkan parameter tertentu/i.test(formula.description)
      ? formula.description
      : copy.description(name),
    simpleLogic: specific.simpleLogic || (formula.simpleLogic && !/Pahami input utama|Baca format .* lalu isi rumus dari kiri ke kanan/i.test(formula.simpleLogic))
      ? (specific.simpleLogic || formula.simpleLogic)
      : copy.logic,
    useCase: formula.useCase && !/kebutuhan datanya cocok|sesuai dengan jenis data dan argumen pada format rumus ini/i.test(formula.useCase) ? formula.useCase : copy.useCase,
    analogy: specific.analogy || formula.analogy || copy.analogy,
    simpleExample: baseMeaning,
    exampleFormula: baseExample,
    exampleMeaning: baseMeaning,
    beginnerTip: 'Contoh di atas hanya contoh penggunaan rumus, bukan jawaban latihan. Untuk latihan, tetap baca soal dan ambil data dari tabel yang sedang aktif.',
    auditStatus: genericFormat ? 'needs-manual-format-check' : 'checked-basic',
    auditNote: genericFormat
      ? 'Format detail belum diverifikasi di source, jadi dipakai sebagai theory-only sampai format resmi dicek.'
      : 'Format dasar sudah tersedia di source dan dipakai untuk latihan atau halaman teori.'
  };
}

export function normalizeFormulaRecord(formula = {}) {
  const name = formula.name || 'FORMULA';
  const overrideFormat = verifiedFormatOverrides[name];
  const syntax = overrideFormat || formula.syntax;
  const learning = buildBeginnerLearningContent({ ...formula, syntax });
  const generic = isGenericFormat(syntax);

  return {
    ...formula,
    syntax,
    description: learning.description,
    simpleLogic: learning.simpleLogic,
    useCase: learning.useCase,
    analogy: learning.analogy,
    exampleFormula: learning.exampleFormula,
    exampleMeaning: learning.exampleMeaning,
    beginnerTip: learning.beginnerTip,
    auditStatus: generic ? 'needs-manual-format-check' : learning.auditStatus,
    auditNote: generic ? learning.auditNote : learning.auditNote,
    hasExercise: Boolean(formula.hasExercise)
  };
}

export function formatFunctionNameList(items = []) {
  return items.filter(Boolean).join(', ');
}
