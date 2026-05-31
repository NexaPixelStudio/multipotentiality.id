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
  DETECTLANGUAGE: 'DETECTLANGUAGE(text)',
  TRANSLATE: 'TRANSLATE(text, [source_language], [target_language])',
  REGEXEXTRACT: 'REGEXEXTRACT(text, pattern, [return_mode], [case_sensitivity])',
  REGEXREPLACE: 'REGEXREPLACE(text, pattern, replacement, [occurrence], [case_sensitivity])',
  REGEXTEST: 'REGEXTEST(text, pattern, [case_sensitivity])',
  GROUPBY: 'GROUPBY(row_fields, values, function, [field_headers], [total_depth], [sort_order], [filter_array], [field_relationship])',
  PIVOTBY: 'PIVOTBY(row_fields, col_fields, values, function, [field_headers], [row_total_depth], [row_sort_order], [col_total_depth], [col_sort_order], [filter_array], [relative_to])'
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

export function buildBeginnerLearningContent(formula = {}) {
  const name = formula.name || 'FORMULA';
  const copy = categoryFallback(formula.category || formula.displayCategory);
  const specific = functionExamples[name] || {};
  const genericFormat = isGenericFormat(formula.syntax);
  const baseExample = specific.exampleFormula || formula.exampleFormula || (!genericFormat ? `=${formula.syntax}` : copy.sample);

  return {
    description: formula.description && !/untuk kebutuhan khusus|berdasarkan parameter tertentu/i.test(formula.description)
      ? formula.description
      : copy.description(name),
    simpleLogic: specific.simpleLogic || formula.simpleLogic && !/Pahami input utama/i.test(formula.simpleLogic)
      ? (specific.simpleLogic || formula.simpleLogic)
      : copy.logic,
    useCase: formula.useCase && !/kebutuhan datanya cocok/i.test(formula.useCase) ? formula.useCase : copy.useCase,
    analogy: specific.analogy || formula.analogy || copy.analogy,
    simpleExample: specific.exampleMeaning || formula.simpleExample || formula.exampleMeaning || copy.meaning,
    exampleFormula: baseExample,
    exampleMeaning: specific.exampleMeaning || formula.exampleMeaning || formula.simpleExample || copy.meaning,
    beginnerTip: 'Jangan hafalin dulu. Baca soalnya, cari data yang dipakai, tentukan syaratnya, baru susun rumusnya pelan-pelan.',
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
