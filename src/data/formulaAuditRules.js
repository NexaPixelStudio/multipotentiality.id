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
    description: (name) => `Rumus ${name} dipakai untuk membaca kondisi dan membuat keputusan dari kondisi tersebut.`,
    logic: 'Untuk pemula, AND, OR, NOT, dan XOR lebih mudah dipelajari jika digabung dengan IF, supaya hasilnya bukan cuma TRUE/FALSE tapi menjadi status yang jelas.',
    useCase: 'Untuk status lulus/tidak, prioritas/reguler, remedial/aman, validasi data, dan keputusan dari beberapa syarat.',
    analogy: 'Kayak aturan pintu masuk. Excel cek syaratnya dulu, lalu IF menentukan tulisan hasil akhirnya.',
    sample: '=IF(AND(B2>=75;C2>=80);"Lulus";"Tidak Lulus")',
    meaning: 'Contoh ini mengecek dua syarat sekaligus. Jika nilai minimal 75 dan kehadiran minimal 80, hasilnya Lulus. Kalau salah satu tidak terpenuhi, hasilnya Tidak Lulus.'
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
  // Advanced / Professional
  DETECTLANGUAGE: 'DETECTLANGUAGE(text)',
  GROUPBY: 'GROUPBY(row_fields, values, function, [field_headers], [total_depth], [sort_order], [filter_array], [field_relationship])',
  LAMBDA: 'LAMBDA([parameter1, parameter2, ...], calculation)',
  LET: 'LET(name1, name_value1, calculation_or_name2, [name_value2], ...)',
  PERCENTOF: 'PERCENTOF(data_subset, data_all)',
  PIVOTBY: 'PIVOTBY(row_fields, col_fields, values, function, [field_headers], [row_total_depth], [row_sort_order], [col_total_depth], [col_sort_order], [filter_array], [relative_to])',
  REGEXEXTRACT: 'REGEXEXTRACT(text, pattern, [return_mode], [case_sensitivity])',
  REGEXREPLACE: 'REGEXREPLACE(text, pattern, replacement, [occurrence], [case_sensitivity])',
  REGEXTEST: 'REGEXTEST(text, pattern, [case_sensitivity])',
  TRANSLATE: 'TRANSLATE(text, source_language, target_language)',

  // Compatibility / Statistical old names
  BETADIST: 'BETADIST(x, alpha, beta, [A], [B])',
  BETAINV: 'BETAINV(probability, alpha, beta, [A], [B])',
  BINOMDIST: 'BINOMDIST(number_s, trials, probability_s, cumulative)',
  CHIDIST: 'CHIDIST(x, deg_freedom)',
  CHIINV: 'CHIINV(probability, deg_freedom)',
  CHITEST: 'CHITEST(actual_range, expected_range)',
  CONFIDENCE: 'CONFIDENCE(alpha, standard_dev, size)',
  COVAR: 'COVAR(array1, array2)',
  CRITBINOM: 'CRITBINOM(trials, probability_s, alpha)',
  EXPONDIST: 'EXPONDIST(x, lambda, cumulative)',
  FDIST: 'FDIST(x, deg_freedom1, deg_freedom2)',
  FINV: 'FINV(probability, deg_freedom1, deg_freedom2)',
  FTEST: 'FTEST(array1, array2)',
  GAMMADIST: 'GAMMADIST(x, alpha, beta, cumulative)',
  GAMMAINV: 'GAMMAINV(probability, alpha, beta)',
  HYPGEOMDIST: 'HYPGEOMDIST(sample_s, number_sample, population_s, number_pop)',
  LOGINV: 'LOGINV(probability, mean, standard_dev)',
  LOGNORMDIST: 'LOGNORMDIST(x, mean, standard_dev)',
  NEGBINOMDIST: 'NEGBINOMDIST(number_f, number_s, probability_s)',
  NORMDIST: 'NORMDIST(x, mean, standard_dev, cumulative)',
  NORMINV: 'NORMINV(probability, mean, standard_dev)',
  NORMSDIST: 'NORMSDIST(z)',
  NORMSINV: 'NORMSINV(probability)',
  PERCENTILE: 'PERCENTILE(array, k)',
  PERCENTRANK: 'PERCENTRANK(array, x, [significance])',
  POISSON: 'POISSON(x, mean, cumulative)',
  QUARTILE: 'QUARTILE(array, quart)',
  RANK: 'RANK(number, ref, [order])',
  STDEV: 'STDEV(number1, [number2], ...)',
  STDEVP: 'STDEVP(number1, [number2], ...)',
  TDIST: 'TDIST(x, deg_freedom, tails)',
  TINV: 'TINV(probability, deg_freedom)',
  TTEST: 'TTEST(array1, array2, tails, type)',
  VAR: 'VAR(number1, [number2], ...)',
  VARP: 'VARP(number1, [number2], ...)',
  WEIBULL: 'WEIBULL(x, alpha, beta, cumulative)',
  ZTEST: 'ZTEST(array, x, [sigma])',

  // Statistical newer names
  'AVERAGEIF': 'AVERAGEIF(range, criteria, [average_range])',
  'AVERAGEIFS': 'AVERAGEIFS(average_range, criteria_range1, criteria1, [criteria_range2], [criteria2], ...)',
  'COUNTIF': 'COUNTIF(range, criteria)',
  'COUNTIFS': 'COUNTIFS(criteria_range1, criteria1, [criteria_range2], [criteria2], ...)',
  'MAXIFS': 'MAXIFS(max_range, criteria_range1, criteria1, [criteria_range2], [criteria2], ...)',
  'MINIFS': 'MINIFS(min_range, criteria_range1, criteria1, [criteria_range2], [criteria2], ...)',
  'BETA.DIST': 'BETA.DIST(x, alpha, beta, cumulative, [A], [B])',
  'BETA.INV': 'BETA.INV(probability, alpha, beta, [A], [B])',
  'BINOM.DIST': 'BINOM.DIST(number_s, trials, probability_s, cumulative)',
  'BINOM.DIST.RANGE': 'BINOM.DIST.RANGE(trials, probability_s, number_s, [number_s2])',
  'BINOM.INV': 'BINOM.INV(trials, probability_s, alpha)',
  'CHISQ.DIST': 'CHISQ.DIST(x, deg_freedom, cumulative)',
  'CHISQ.DIST.RT': 'CHISQ.DIST.RT(x, deg_freedom)',
  'CHISQ.INV': 'CHISQ.INV(probability, deg_freedom)',
  'CHISQ.INV.RT': 'CHISQ.INV.RT(probability, deg_freedom)',
  'CHISQ.TEST': 'CHISQ.TEST(actual_range, expected_range)',
  'CONFIDENCE.NORM': 'CONFIDENCE.NORM(alpha, standard_dev, size)',
  'CONFIDENCE.T': 'CONFIDENCE.T(alpha, standard_dev, size)',
  'CORREL': 'CORREL(array1, array2)',
  'COVARIANCE.P': 'COVARIANCE.P(array1, array2)',
  'COVARIANCE.S': 'COVARIANCE.S(array1, array2)',
  'EXPON.DIST': 'EXPON.DIST(x, lambda, cumulative)',
  'F.DIST': 'F.DIST(x, deg_freedom1, deg_freedom2, cumulative)',
  'F.DIST.RT': 'F.DIST.RT(x, deg_freedom1, deg_freedom2)',
  'F.INV': 'F.INV(probability, deg_freedom1, deg_freedom2)',
  'F.INV.RT': 'F.INV.RT(probability, deg_freedom1, deg_freedom2)',
  'F.TEST': 'F.TEST(array1, array2)',
  'FORECAST': 'FORECAST(x, known_y\'s, known_x\'s)',
  'FORECAST.ETS': 'FORECAST.ETS(target_date, values, timeline, [seasonality], [data_completion], [aggregation])',
  'FORECAST.ETS.CONFINT': 'FORECAST.ETS.CONFINT(target_date, values, timeline, [confidence_level], [seasonality], [data_completion], [aggregation])',
  'FORECAST.ETS.SEASONALITY': 'FORECAST.ETS.SEASONALITY(values, timeline, [data_completion], [aggregation])',
  'FORECAST.ETS.STAT': 'FORECAST.ETS.STAT(values, timeline, statistic_type, [seasonality], [data_completion], [aggregation])',
  'FORECAST.LINEAR': 'FORECAST.LINEAR(x, known_y\'s, known_x\'s)',
  'FREQUENCY': 'FREQUENCY(data_array, bins_array)',
  'GAMMA.DIST': 'GAMMA.DIST(x, alpha, beta, cumulative)',
  'GAMMA.INV': 'GAMMA.INV(probability, alpha, beta)',
  'HYPGEOM.DIST': 'HYPGEOM.DIST(sample_s, number_sample, population_s, number_pop, cumulative)',
  'LOGNORM.DIST': 'LOGNORM.DIST(x, mean, standard_dev, cumulative)',
  'LOGNORM.INV': 'LOGNORM.INV(probability, mean, standard_dev)',
  'MODE.MULT': 'MODE.MULT(number1, [number2], ...)',
  'MODE.SNGL': 'MODE.SNGL(number1, [number2], ...)',
  'NEGBINOM.DIST': 'NEGBINOM.DIST(number_f, number_s, probability_s, cumulative)',
  'NORM.DIST': 'NORM.DIST(x, mean, standard_dev, cumulative)',
  'NORM.INV': 'NORM.INV(probability, mean, standard_dev)',
  'NORM.S.DIST': 'NORM.S.DIST(z, cumulative)',
  'NORM.S.INV': 'NORM.S.INV(probability)',
  'PERCENTILE.EXC': 'PERCENTILE.EXC(array, k)',
  'PERCENTILE.INC': 'PERCENTILE.INC(array, k)',
  'PERCENTRANK.EXC': 'PERCENTRANK.EXC(array, x, [significance])',
  'PERCENTRANK.INC': 'PERCENTRANK.INC(array, x, [significance])',
  'POISSON.DIST': 'POISSON.DIST(x, mean, cumulative)',
  'PROB': 'PROB(x_range, prob_range, [lower_limit], [upper_limit])',
  'QUARTILE.EXC': 'QUARTILE.EXC(array, quart)',
  'QUARTILE.INC': 'QUARTILE.INC(array, quart)',
  'RANK.AVG': 'RANK.AVG(number, ref, [order])',
  'RANK.EQ': 'RANK.EQ(number, ref, [order])',
  'STANDARDIZE': 'STANDARDIZE(x, mean, standard_dev)',
  'T.DIST': 'T.DIST(x, deg_freedom, cumulative)',
  'T.DIST.2T': 'T.DIST.2T(x, deg_freedom)',
  'T.DIST.RT': 'T.DIST.RT(x, deg_freedom)',
  'T.INV': 'T.INV(probability, deg_freedom)',
  'T.INV.2T': 'T.INV.2T(probability, deg_freedom)',
  'T.TEST': 'T.TEST(array1, array2, tails, type)',
  'WEIBULL.DIST': 'WEIBULL.DIST(x, alpha, beta, cumulative)',
  'Z.TEST': 'Z.TEST(array, x, [sigma])',

  // Database
  DAVERAGE: 'DAVERAGE(database, field, criteria)', DCOUNT: 'DCOUNT(database, field, criteria)', DCOUNTA: 'DCOUNTA(database, field, criteria)', DGET: 'DGET(database, field, criteria)', DMAX: 'DMAX(database, field, criteria)', DMIN: 'DMIN(database, field, criteria)', DPRODUCT: 'DPRODUCT(database, field, criteria)', DSTDEV: 'DSTDEV(database, field, criteria)', DSTDEVP: 'DSTDEVP(database, field, criteria)', DSUM: 'DSUM(database, field, criteria)', DVAR: 'DVAR(database, field, criteria)', DVARP: 'DVARP(database, field, criteria)',

  // Date/time
  DATEVALUE: 'DATEVALUE(date_text)', DAYS360: 'DAYS360(start_date, end_date, [method])', ISOWEEKNUM: 'ISOWEEKNUM(date)', TIMEVALUE: 'TIMEVALUE(time_text)', WEEKDAY: 'WEEKDAY(serial_number, [return_type])', WEEKNUM: 'WEEKNUM(serial_number, [return_type])', YEARFRAC: 'YEARFRAC(start_date, end_date, [basis])',

  // Lookup/reference and dynamic
  EXPAND: 'EXPAND(array, rows, [columns], [pad_with])', RANDARRAY: 'RANDARRAY([rows], [columns], [min], [max], [whole_number])', SEQUENCE: 'SEQUENCE(rows, [columns], [start], [step])', TOCOL: 'TOCOL(array, [ignore], [scan_by_column])', TOROW: 'TOROW(array, [ignore], [scan_by_column])', WRAPCOLS: 'WRAPCOLS(vector, wrap_count, [pad_with])', WRAPROWS: 'WRAPROWS(vector, wrap_count, [pad_with])',
  XLOOKUP: 'XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])', XMATCH: 'XMATCH(lookup_value, lookup_array, [match_mode], [search_mode])', HLOOKUP: 'HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])', VLOOKUP: 'VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])', LOOKUP: 'LOOKUP(lookup_value, lookup_vector, [result_vector])', MATCH: 'MATCH(lookup_value, lookup_array, [match_type])', INDEX: 'INDEX(array, row_num, [column_num])', OFFSET: 'OFFSET(reference, rows, cols, [height], [width])', INDIRECT: 'INDIRECT(ref_text, [a1])', ADDRESS: 'ADDRESS(row_num, column_num, [abs_num], [a1], [sheet_text])', CHOOSE: 'CHOOSE(index_num, value1, [value2], ...)',

  // Engineering
  BESSELI: 'BESSELI(x, n)', BESSELJ: 'BESSELJ(x, n)', BESSELK: 'BESSELK(x, n)', BESSELY: 'BESSELY(x, n)', BIN2DEC: 'BIN2DEC(number)', BIN2HEX: 'BIN2HEX(number, [places])', BIN2OCT: 'BIN2OCT(number, [places])', BITAND: 'BITAND(number1, number2)', BITLSHIFT: 'BITLSHIFT(number, shift_amount)', BITOR: 'BITOR(number1, number2)', BITRSHIFT: 'BITRSHIFT(number, shift_amount)', BITXOR: 'BITXOR(number1, number2)', COMPLEX: 'COMPLEX(real_num, i_num, [suffix])', CONVERT: 'CONVERT(number, from_unit, to_unit)', DEC2BIN: 'DEC2BIN(number, [places])', DEC2HEX: 'DEC2HEX(number, [places])', DEC2OCT: 'DEC2OCT(number, [places])', DELTA: 'DELTA(number1, [number2])', ERF: 'ERF(lower_limit, [upper_limit])', 'ERF.PRECISE': 'ERF.PRECISE(x)', ERFC: 'ERFC(x)', 'ERFC.PRECISE': 'ERFC.PRECISE(x)', GESTEP: 'GESTEP(number, [step])', HEX2BIN: 'HEX2BIN(number, [places])', HEX2DEC: 'HEX2DEC(number)', HEX2OCT: 'HEX2OCT(number, [places])', IMABS: 'IMABS(inumber)', IMAGINARY: 'IMAGINARY(inumber)', IMARGUMENT: 'IMARGUMENT(inumber)', IMCONJUGATE: 'IMCONJUGATE(inumber)', IMCOS: 'IMCOS(inumber)', IMCOSH: 'IMCOSH(inumber)', IMCOT: 'IMCOT(inumber)', IMCSC: 'IMCSC(inumber)', IMCSCH: 'IMCSCH(inumber)', IMDIV: 'IMDIV(inumber1, inumber2)', IMEXP: 'IMEXP(inumber)', IMLN: 'IMLN(inumber)', IMLOG10: 'IMLOG10(inumber)', IMLOG2: 'IMLOG2(inumber)', IMPOWER: 'IMPOWER(inumber, number)', IMPRODUCT: 'IMPRODUCT(inumber1, [inumber2], ...)', IMREAL: 'IMREAL(inumber)', IMSEC: 'IMSEC(inumber)', IMSECH: 'IMSECH(inumber)', IMSIN: 'IMSIN(inumber)', IMSINH: 'IMSINH(inumber)', IMSQRT: 'IMSQRT(inumber)', IMSUB: 'IMSUB(inumber1, inumber2)', IMSUM: 'IMSUM(inumber1, [inumber2], ...)', IMTAN: 'IMTAN(inumber)', OCT2BIN: 'OCT2BIN(number, [places])', OCT2DEC: 'OCT2DEC(number)', OCT2HEX: 'OCT2HEX(number, [places])',

  // Financial
  ACCRINT: 'ACCRINT(issue, first_interest, settlement, rate, par, frequency, [basis], [calc_method])', ACCRINTM: 'ACCRINTM(issue, settlement, rate, par, [basis])', AMORDEGRC: 'AMORDEGRC(cost, date_purchased, first_period, salvage, period, rate, [basis])', AMORLINC: 'AMORLINC(cost, date_purchased, first_period, salvage, period, rate, [basis])', COUPDAYBS: 'COUPDAYBS(settlement, maturity, frequency, [basis])', COUPDAYS: 'COUPDAYS(settlement, maturity, frequency, [basis])', COUPDAYSNC: 'COUPDAYSNC(settlement, maturity, frequency, [basis])', COUPNCD: 'COUPNCD(settlement, maturity, frequency, [basis])', COUPNUM: 'COUPNUM(settlement, maturity, frequency, [basis])', COUPPCD: 'COUPPCD(settlement, maturity, frequency, [basis])', CUMIPMT: 'CUMIPMT(rate, nper, pv, start_period, end_period, type)', CUMPRINC: 'CUMPRINC(rate, nper, pv, start_period, end_period, type)', DB: 'DB(cost, salvage, life, period, [month])', DDB: 'DDB(cost, salvage, life, period, [factor])', DISC: 'DISC(settlement, maturity, pr, redemption, [basis])', DOLLARDE: 'DOLLARDE(fractional_dollar, fraction)', DOLLARFR: 'DOLLARFR(decimal_dollar, fraction)', DURATION: 'DURATION(settlement, maturity, coupon, yld, frequency, [basis])', EFFECT: 'EFFECT(nominal_rate, npery)', FV: 'FV(rate, nper, pmt, [pv], [type])', FVSCHEDULE: 'FVSCHEDULE(principal, schedule)', INTRATE: 'INTRATE(settlement, maturity, investment, redemption, [basis])', IPMT: 'IPMT(rate, per, nper, pv, [fv], [type])', IRR: 'IRR(values, [guess])', ISPMT: 'ISPMT(rate, per, nper, pv)', MDURATION: 'MDURATION(settlement, maturity, coupon, yld, frequency, [basis])', MIRR: 'MIRR(values, finance_rate, reinvest_rate)', NOMINAL: 'NOMINAL(effect_rate, npery)', NPER: 'NPER(rate, pmt, pv, [fv], [type])', NPV: 'NPV(rate, value1, [value2], ...)', PDURATION: 'PDURATION(rate, pv, fv)', PMT: 'PMT(rate, nper, pv, [fv], [type])', PPMT: 'PPMT(rate, per, nper, pv, [fv], [type])', PV: 'PV(rate, nper, pmt, [fv], [type])', RATE: 'RATE(nper, pmt, pv, [fv], [type], [guess])', RRI: 'RRI(nper, pv, fv)', SLN: 'SLN(cost, salvage, life)', SYD: 'SYD(cost, salvage, life, per)', VDB: 'VDB(cost, salvage, life, start_period, end_period, [factor], [no_switch])', XIRR: 'XIRR(values, dates, [guess])', XNPV: 'XNPV(rate, values, dates)',

  // Information
  'ERROR.TYPE': 'ERROR.TYPE(error_val)', INFO: 'INFO(type_text)', ISERR: 'ISERR(value)', ISEVEN: 'ISEVEN(number)', ISLOGICAL: 'ISLOGICAL(value)', ISNONTEXT: 'ISNONTEXT(value)', ISODD: 'ISODD(number)', ISOMITTED: 'ISOMITTED(argument)', ISREF: 'ISREF(value)', NA: 'NA()', SHEET: 'SHEET([value])', SHEETS: 'SHEETS([reference])', TYPE: 'TYPE(value)',

  // Web / Cube / Add-in
  ENCODEURL: 'ENCODEURL(text)', FILTERXML: 'FILTERXML(xml, xpath)', WEBSERVICE: 'WEBSERVICE(url)',
  CUBEKPIMEMBER: 'CUBEKPIMEMBER(connection, kpi_name, kpi_property, [caption])', CUBEMEMBER: 'CUBEMEMBER(connection, member_expression, [caption])', CUBEMEMBERPROPERTY: 'CUBEMEMBERPROPERTY(connection, member_expression, property)', CUBERANKEDMEMBER: 'CUBERANKEDMEMBER(connection, set_expression, rank, [caption])', CUBESET: 'CUBESET(connection, set_expression, [caption], [sort_order], [sort_by])', CUBESETCOUNT: 'CUBESETCOUNT(set)', CUBEVALUE: 'CUBEVALUE(connection, [member_expression1], [member_expression2], ...)',
  CALL: 'CALL(module_text, procedure, type_text, [argument1], ...)', EUROCONVERT: 'EUROCONVERT(number, source, target, [full_precision], [triangulation_precision])', 'REGISTER.ID': 'REGISTER.ID(module_text, procedure, [type_text])', 'SQL.REQUEST': 'SQL.REQUEST(connection_string, output_ref, driver_prompt, query_text, col_names_logical)'
};

export const functionExamples = {
  SUM: {
    exampleFormula: '=SUM(B2:B13)',
    exampleMeaning: 'Contoh ini menjumlahkan seluruh angka penjualan dari B2 sampai B13.',
    simpleLogic: 'SUM dipakai untuk menjumlahkan angka dalam satu range atau beberapa range.',
    useCase: 'Untuk total penjualan, total biaya, total qty, atau angka lain yang perlu dijumlahkan.'
  },
  AVERAGE: {
    exampleFormula: '=AVERAGE(B2:B13)',
    exampleMeaning: 'Contoh ini menghitung rata-rata penjualan dari B2 sampai B13.',
    simpleLogic: 'AVERAGE menjumlahkan angka lalu membaginya dengan jumlah data angka.',
    useCase: 'Untuk mencari rata-rata nilai, rata-rata penjualan, rata-rata qty, atau rata-rata biaya.'
  },
  MIN: {
    exampleFormula: '=MIN(B2:B13)',
    exampleMeaning: 'Contoh ini mencari angka penjualan paling kecil dari B2 sampai B13.',
    simpleLogic: 'MIN dipakai untuk mengambil nilai terkecil dari kumpulan angka.',
    useCase: 'Untuk mencari penjualan terendah, nilai terendah, stok paling sedikit, atau biaya paling kecil.'
  },
  MAX: {
    exampleFormula: '=MAX(B2:B13)',
    exampleMeaning: 'Contoh ini mencari angka penjualan paling besar dari B2 sampai B13.',
    simpleLogic: 'MAX dipakai untuk mengambil nilai terbesar dari kumpulan angka.',
    useCase: 'Untuk mencari penjualan tertinggi, nilai tertinggi, stok terbanyak, atau biaya paling besar.'
  },
  LARGE: {
    exampleFormula: '=LARGE(B2:B13;2)',
    exampleMeaning: 'Contoh ini mencari penjualan terbesar ke-2 dari B2 sampai B13.',
    simpleLogic: 'LARGE mencari angka terbesar berdasarkan urutan yang kamu tentukan.',
    useCase: 'Untuk mencari top 2, top 3, atau ranking nilai terbesar tanpa membuat sort manual.'
  },
  SMALL: {
    exampleFormula: '=SMALL(B2:B13;2)',
    exampleMeaning: 'Contoh ini mencari penjualan terkecil ke-2 dari B2 sampai B13.',
    simpleLogic: 'SMALL mencari angka terkecil berdasarkan urutan yang kamu tentukan.',
    useCase: 'Untuk mencari bottom 2, bottom 3, atau ranking nilai terkecil tanpa membuat sort manual.'
  },
  COUNT: {
    exampleFormula: '=COUNT(B2:B13)',
    exampleMeaning: 'Contoh ini menghitung berapa banyak cell berisi angka pada B2 sampai B13.',
    simpleLogic: 'COUNT hanya menghitung cell yang isinya angka. Teks dan cell kosong tidak dihitung.',
    useCase: 'Untuk menghitung jumlah data angka, jumlah nilai, jumlah transaksi bernominal, atau kolom numeric.'
  },
  COUNTA: {
    exampleFormula: '=COUNTA(A2:A13)',
    exampleMeaning: 'Contoh ini menghitung berapa banyak cell yang terisi pada A2 sampai A13, termasuk teks.',
    simpleLogic: 'COUNTA menghitung semua cell yang tidak kosong, baik teks maupun angka.',
    useCase: 'Untuk menghitung jumlah nama, kode, catatan terisi, atau data yang sudah diinput.'
  },
  COUNTBLANK: {
    exampleFormula: '=COUNTBLANK(F2:F13)',
    exampleMeaning: 'Contoh ini menghitung berapa banyak cell kosong pada F2 sampai F13.',
    simpleLogic: 'COUNTBLANK hanya menghitung cell yang kosong.',
    useCase: 'Untuk mengecek data yang belum diisi, catatan kosong, atau kolom yang masih bolong.'
  },
  SUMIF: {
    exampleFormula: '=SUMIF(C2:C9;"Digital";D2:D9)',
    exampleMeaning: 'Contoh ini menjumlahkan Penjualan di D2:D9 hanya untuk baris yang Kategorinya Digital di C2:C9.',
    simpleLogic: 'SUMIF menjumlahkan angka dengan satu syarat.',
    useCase: 'Untuk total penjualan per kategori, total omzet per kota, atau total angka berdasarkan satu kriteria.'
  },
  SUMIFS: {
    exampleFormula: '=SUMIFS(D2:D9;C2:C9;"Digital";B2:B9;"Jakarta")',
    exampleMeaning: 'Contoh ini menjumlahkan Penjualan di D2:D9 untuk Kategori Digital dan Kota Jakarta.',
    simpleLogic: 'SUMIFS menjumlahkan angka dengan lebih dari satu syarat.',
    useCase: 'Untuk total penjualan berdasarkan beberapa kriteria sekaligus.'
  },
  COUNTIF: {
    exampleFormula: '=COUNTIF(C2:C9;"Digital")',
    exampleMeaning: 'Contoh ini menghitung berapa baris yang Kategorinya Digital pada C2:C9.',
    simpleLogic: 'COUNTIF menghitung jumlah data yang memenuhi satu syarat.',
    useCase: 'Untuk menghitung jumlah order per kategori, jumlah data per kota, atau jumlah status tertentu.'
  },
  COUNTIFS: {
    exampleFormula: '=COUNTIFS(C2:C9;"Digital";B2:B9;"Jakarta")',
    exampleMeaning: 'Contoh ini menghitung jumlah order dengan Kategori Digital dan Kota Jakarta.',
    simpleLogic: 'COUNTIFS menghitung jumlah data yang memenuhi beberapa syarat sekaligus.',
    useCase: 'Untuk menghitung data yang harus cocok dengan dua atau lebih kriteria.'
  },
  AVERAGEIF: {
    exampleFormula: '=AVERAGEIF(C2:C9;"Digital";D2:D9)',
    exampleMeaning: 'Contoh ini menghitung rata-rata Penjualan di D2:D9 untuk baris yang Kategorinya Digital.',
    simpleLogic: 'AVERAGEIF menghitung rata-rata angka dengan satu syarat.',
    useCase: 'Untuk rata-rata penjualan per kategori, rata-rata qty per kota, atau rata-rata nilai berdasarkan satu kriteria.'
  },
  AVERAGEIFS: {
    exampleFormula: '=AVERAGEIFS(D2:D9;C2:C9;"Digital";B2:B9;"Jakarta")',
    exampleMeaning: 'Contoh ini menghitung rata-rata Penjualan untuk Kategori Digital dan Kota Jakarta.',
    simpleLogic: 'AVERAGEIFS menghitung rata-rata angka dengan lebih dari satu syarat.',
    useCase: 'Untuk rata-rata angka berdasarkan beberapa kriteria sekaligus.'
  },
  MAXIFS: {
    exampleFormula: '=MAXIFS(D2:D9;C2:C9;"Digital";B2:B9;"Jakarta")',
    exampleMeaning: 'Contoh ini mencari Penjualan terbesar untuk Kategori Digital dan Kota Jakarta.',
    simpleLogic: 'MAXIFS mencari nilai terbesar yang memenuhi satu atau beberapa syarat.',
    useCase: 'Untuk mencari transaksi tertinggi berdasarkan kategori, kota, status, atau kriteria lain.'
  },
  MINIFS: {
    exampleFormula: '=MINIFS(D2:D9;C2:C9;"Digital";B2:B9;"Jakarta")',
    exampleMeaning: 'Contoh ini mencari Penjualan terkecil untuk Kategori Digital dan Kota Jakarta.',
    simpleLogic: 'MINIFS mencari nilai terkecil yang memenuhi satu atau beberapa syarat.',
    useCase: 'Untuk mencari transaksi terendah berdasarkan kategori, kota, status, atau kriteria lain.'
  },
  IF: {
    exampleFormula: '=IF(B2>=75;"Lulus";"Tidak Lulus")',
    exampleMeaning: 'Contoh ini mengecek nilai di B2. Kalau nilainya minimal 75, hasilnya Lulus. Kalau tidak, hasilnya Tidak Lulus.',
    simpleLogic: 'IF membaca satu kondisi, lalu mengeluarkan hasil berbeda untuk kondisi benar dan kondisi salah.',
    useCase: 'Untuk membuat status seperti Lulus/Tidak Lulus, Layak/Tidak Layak, atau Prioritas/Normal.'
  },
  IFS: {
    exampleFormula: '=IFS(B2>=90;"A";B2>=75;"B";TRUE;"C")',
    exampleMeaning: 'Contoh ini mengecek nilai di B2 secara berurutan. Jika minimal 90 hasilnya A, jika minimal 75 hasilnya B, selain itu C.',
    simpleLogic: 'IFS mengecek beberapa kondisi dari kiri ke kanan. Kondisi pertama yang benar akan dipakai sebagai hasil.',
    useCase: 'Untuk membuat kategori bertingkat seperti grade nilai, level prioritas, atau status risiko.'
  },
  AND: {
    exampleFormula: '=IF(AND(B2>=75;C2>=80);"Lulus";"Tidak Lulus")',
    exampleMeaning: 'Contoh ini mengecek dua syarat sekaligus. Jika nilai minimal 75 dan kehadiran minimal 80, hasilnya Lulus. Jika salah satu tidak terpenuhi, hasilnya Tidak Lulus.',
    simpleLogic: 'AND dipakai saat semua syarat harus terpenuhi.',
    useCase: 'Untuk mengecek kelayakan yang butuh lebih dari satu syarat.'
  },
  OR: {
    exampleFormula: '=IF(OR(B2>=90;C2>=95);"Prioritas";"Reguler")',
    exampleMeaning: 'Contoh ini mengecek apakah salah satu syarat tinggi terpenuhi. Jika nilai minimal 90 atau kehadiran minimal 95, hasilnya Prioritas. Jika tidak, hasilnya Reguler.',
    simpleLogic: 'OR dipakai saat cukup salah satu syarat saja yang benar.',
    useCase: 'Untuk mengecek kondisi alternatif, misalnya boleh lanjut karena nilai cukup atau kehadiran cukup.'
  },
  NOT: {
    exampleFormula: '=IF(NOT(ISBLANK(A2));"Data Ada";"Data Kosong")',
    exampleMeaning: 'Contoh ini mengecek apakah A2 tidak kosong. Jika A2 terisi, hasilnya Data Ada. Jika kosong, hasilnya Data Kosong.',
    simpleLogic: 'NOT dipakai untuk membalik hasil logika. TRUE jadi FALSE, FALSE jadi TRUE.',
    useCase: 'Untuk mengecek kebalikan dari sebuah kondisi, misalnya data tidak kosong atau status bukan kondisi tertentu.'
  },
  XOR: {
    exampleFormula: '=IF(XOR(B2>=90;C2>=95);"Tepat Satu";"Tidak")',
    exampleMeaning: 'Contoh ini mengecek apakah hanya salah satu syarat yang terpenuhi. Jika tepat satu kondisi benar, hasilnya Tepat Satu. Jika dua-duanya sama, hasilnya Tidak.',
    simpleLogic: 'XOR dipakai untuk kondisi ganjil: hasil TRUE jika jumlah kondisi benar adalah ganjil.',
    useCase: 'Untuk kasus logika khusus saat hanya satu syarat yang boleh benar.'
  },
  IFERROR: {
    exampleFormula: '=IFERROR(VLOOKUP(A2;E2:F10;2;FALSE);"Tidak ditemukan")',
    exampleMeaning: 'Contoh ini menjalankan VLOOKUP. Kalau rumus itu menghasilkan error apa pun, Excel menampilkan teks Tidak ditemukan.',
    simpleLogic: 'IFERROR menangkap error dari rumus utama, lalu menggantinya dengan hasil yang lebih aman dibaca.',
    useCase: 'Untuk merapikan hasil lookup, pembagian, atau rumus lain yang bisa error.'
  },
  IFNA: {
    exampleFormula: '=IFNA(XLOOKUP(A2;E2:E10;F2:F10);"Tidak ditemukan")',
    exampleMeaning: 'Contoh ini menjalankan XLOOKUP. Kalau data tidak ditemukan dan hasilnya #N/A, Excel menampilkan teks Tidak ditemukan.',
    simpleLogic: 'IFNA khusus menangani error #N/A, biasanya dari data lookup yang tidak ditemukan.',
    useCase: 'Untuk lookup yang datanya mungkin belum ada di master data.'
  },
  SWITCH: {
    exampleFormula: '=SWITCH(D2;"Laki-laki";"Male";"Perempuan";"Female";"Tidak diketahui")',
    exampleMeaning: 'Contoh ini membaca isi D2. Jika Laki-laki hasilnya Male, jika Perempuan hasilnya Female, selain itu Tidak diketahui.',
    simpleLogic: 'SWITCH mencocokkan satu value dengan beberapa kemungkinan hasil.',
    useCase: 'Untuk mengubah kode/status menjadi label yang lebih mudah dibaca.'
  },
  TRUE: {
    exampleFormula: '=TRUE()',
    exampleMeaning: 'Contoh ini menghasilkan nilai logika TRUE. Ini nilai logika, bukan latihan rumus utama untuk table.',
    simpleLogic: 'TRUE mengembalikan nilai benar.',
    useCase: 'Biasanya dipakai sebagai kondisi default di rumus seperti IFS.'
  },
  FALSE: {
    exampleFormula: '=FALSE()',
    exampleMeaning: 'Contoh ini menghasilkan nilai logika FALSE. Ini nilai logika, bukan latihan rumus utama untuk table.',
    simpleLogic: 'FALSE mengembalikan nilai salah.',
    useCase: 'Biasanya dipakai untuk argumen exact match atau kondisi logika.'
  },
  ISBLANK: {
    exampleFormula: '=IF(ISBLANK(A2);"Data Kosong";"Data Ada")',
    exampleMeaning: 'Contoh ini mengecek apakah A2 kosong. Jika kosong, hasilnya Data Kosong. Jika terisi, hasilnya Data Ada.',
    simpleLogic: 'ISBLANK mengecek apakah sebuah cell kosong.',
    useCase: 'Untuk validasi input yang belum diisi.'
  },
  ISNUMBER: {
    exampleFormula: '=IF(ISNUMBER(B2);"Angka";"Bukan Angka")',
    exampleMeaning: 'Contoh ini mengecek apakah B2 berisi angka. Jika iya, hasilnya Angka. Jika tidak, hasilnya Bukan Angka.',
    simpleLogic: 'ISNUMBER mengecek apakah sebuah value bertipe angka.',
    useCase: 'Untuk memastikan data bisa dihitung sebelum dipakai di rumus.'
  },
  ISTEXT: {
    exampleFormula: '=IF(ISTEXT(A2);"Teks";"Bukan Teks")',
    exampleMeaning: 'Contoh ini mengecek apakah A2 berisi teks. Jika iya, hasilnya Teks. Jika tidak, hasilnya Bukan Teks.',
    simpleLogic: 'ISTEXT mengecek apakah sebuah value bertipe teks.',
    useCase: 'Untuk validasi data nama, kode, status, atau input teks lain.'
  },
  ISERROR: {
    exampleFormula: '=IF(ISERROR(A2);"Ada Error";"Aman")',
    exampleMeaning: 'Contoh ini mengecek apakah A2 berisi error. Jika ada error, hasilnya Ada Error. Jika tidak, hasilnya Aman.',
    simpleLogic: 'ISERROR mengecek semua jenis error Excel.',
    useCase: 'Untuk mendeteksi error sebelum rumus lain diproses.'
  },
  ISNA: {
    exampleFormula: '=IF(ISNA(A2);"Tidak Ditemukan";"Ada Data")',
    exampleMeaning: 'Contoh ini mengecek apakah A2 berisi error #N/A. Jika iya, hasilnya Tidak Ditemukan. Jika tidak, hasilnya Ada Data.',
    simpleLogic: 'ISNA khusus mengecek error #N/A.',
    useCase: 'Untuk mengecek hasil lookup yang tidak ditemukan.'
  },
  DETECTLANGUAGE: {
    exampleFormula: '=DETECTLANGUAGE(A2)',
    exampleMeaning: 'Mendeteksi bahasa dari teks di A2.'
  },
  TRANSLATE: {
    exampleFormula: '=TRANSLATE(A2;"id";"en")',
    exampleMeaning: 'Menerjemahkan teks di A2 dari bahasa Indonesia ke English.'
  },
  REGEXEXTRACT: {
    exampleFormula: '=REGEXEXTRACT(A2;"[0-9]+")',
    exampleMeaning: 'Mengambil angka pertama yang muncul di teks A2.'
  },
  REGEXREPLACE: {
    exampleFormula: '=REGEXREPLACE(A2;"[0-9]+";"XXX")',
    exampleMeaning: 'Mengganti bagian angka di A2 menjadi XXX.'
  },
  REGEXTEST: {
    exampleFormula: '=REGEXTEST(A2;"[0-9]+")',
    exampleMeaning: 'Mengecek apakah teks A2 punya angka.'
  },
  LET: {
    exampleFormula: '=LET(total;SUM(E2:E16);total)',
    exampleMeaning: 'Simpan total penjualan sebagai nama total, lalu tampilkan hasilnya.'
  },
  LAMBDA: {
    exampleFormula: '=LAMBDA(x;x*10)(5)',
    exampleMeaning: 'Buat function kecil yang mengalikan input dengan 10, lalu jalankan untuk angka 5.'
  }
};

const categoryFallback = (category = '') => humanCategoryCopy[category] || humanCategoryCopy['Advanced / Professional'];

export function isGenericFormat(format = '') {
  return /argument1\s*,\s*\[argument2\]/i.test(String(format || ''));
}


const withIdSeparator = (formula = '') => String(formula || '').replace(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/g, ';');

const exampleOverrides = {
  SUM: '=SUM(B2:B13)',
  AVERAGE: '=AVERAGE(B2:B13)',
  MIN: '=MIN(B2:B13)',
  MAX: '=MAX(B2:B13)',
  LARGE: '=LARGE(B2:B13;2)',
  SMALL: '=SMALL(B2:B13;2)',
  COUNT: '=COUNT(B2:B13)',
  COUNTA: '=COUNTA(A2:A13)',
  COUNTBLANK: '=COUNTBLANK(F2:F13)',
  COUNTIF: '=COUNTIF(C2:C9;"Digital")',
  COUNTIFS: '=COUNTIFS(C2:C9;"Digital";B2:B9;"Jakarta")',
  SUMIF: '=SUMIF(C2:C9;"Digital";D2:D9)',
  SUMIFS: '=SUMIFS(D2:D9;C2:C9;"Digital";B2:B9;"Jakarta")',
  AVERAGEIF: '=AVERAGEIF(C2:C9;"Digital";D2:D9)',
  AVERAGEIFS: '=AVERAGEIFS(D2:D9;C2:C9;"Digital";B2:B9;"Jakarta")',
  MAXIFS: '=MAXIFS(D2:D9;C2:C9;"Digital";B2:B9;"Jakarta")',
  MINIFS: '=MINIFS(D2:D9;C2:C9;"Digital";B2:B9;"Jakarta")',
  IF: '=IF(B2>=75;"Lulus";"Tidak Lulus")',
  IFS: '=IFS(B2>=90;"A";B2>=75;"B";TRUE;"C")',
  AND: '=IF(AND(B2>=75;C2>=80);"Lulus";"Tidak Lulus")',
  OR: '=IF(OR(B2>=90;C2>=95);"Prioritas";"Reguler")',
  NOT: '=IF(NOT(ISBLANK(A2));"Data Ada";"Data Kosong")',
  XOR: '=IF(XOR(B2>=90;C2>=95);"Tepat Satu";"Tidak")',
  IFERROR: '=IFERROR(VLOOKUP(A2;E2:F10;2;FALSE);"Tidak ditemukan")',
  IFNA: '=IFNA(XLOOKUP(A2;E2:E10;F2:F10);"Tidak ditemukan")',
  SWITCH: '=SWITCH(D2;"Laki-laki";"Male";"Perempuan";"Female";"Tidak diketahui")',
  TRUE: '=TRUE()',
  FALSE: '=FALSE()',
  ISBLANK: '=IF(ISBLANK(A2);"Data Kosong";"Data Ada")',
  ISNUMBER: '=IF(ISNUMBER(B2);"Angka";"Bukan Angka")',
  ISTEXT: '=IF(ISTEXT(A2);"Teks";"Bukan Teks")',
  ISERROR: '=IF(ISERROR(A2);"Ada Error";"Aman")',
  ISNA: '=IF(ISNA(A2);"Tidak Ditemukan";"Ada Data")',
  VLOOKUP: '=VLOOKUP(A2;E2:H20;2;FALSE)',
  HLOOKUP: '=HLOOKUP(B1;A1:E5;3;FALSE)',
  XLOOKUP: '=XLOOKUP(A2;E2:E20;F2:F20;"Tidak ditemukan")',
  LOOKUP: '=LOOKUP(A2;E2:E20;F2:F20)',
  MATCH: '=MATCH(A2;E2:E20;0)',
  XMATCH: '=XMATCH(A2;E2:E20;0)',
  INDEX: '=INDEX(E2:H20;3;2)',
  FILTER: '=FILTER(A2:E20;B2:B20="Digital")',
  SORT: '=SORT(A2:E20;4;-1)',
  UNIQUE: '=UNIQUE(B2:B20)',
  TEXT: '=TEXT(E2;"Rp #,##0")',
  LEFT: '=LEFT(A2;3)',
  RIGHT: '=RIGHT(A2;4)',
  MID: '=MID(A2;2;3)',
  LEN: '=LEN(A2)',
  TRIM: '=TRIM(A2)',
  LOWER: '=LOWER(A2)',
  UPPER: '=UPPER(A2)',
  PROPER: '=PROPER(A2)',
  CONCAT: '=CONCAT(A2;" - ";B2)',
  TEXTJOIN: '=TEXTJOIN(", ";TRUE;A2:A5)',
  DATE: '=DATE(2026;1;15)',
  DAY: '=DAY(A2)',
  MONTH: '=MONTH(A2)',
  YEAR: '=YEAR(A2)',
  TODAY: '=TODAY()',
  NOW: '=NOW()',
  DATEDIF: '=DATEDIF(A2;B2;"d")',
  DAYS: '=DAYS(B2;A2)',
  NETWORKDAYS: '=NETWORKDAYS(A2;B2)',
  WORKDAY: '=WORKDAY(A2;5)',
  EDATE: '=EDATE(A2;3)',
  EOMONTH: '=EOMONTH(A2;0)',
  ABS: '=ABS(B2)',
  ROUND: '=ROUND(B2;2)',
  ROUNDUP: '=ROUNDUP(B2;0)',
  ROUNDDOWN: '=ROUNDDOWN(B2;0)',
  INT: '=INT(B2)',
  MOD: '=MOD(B2;3)',
  POWER: '=POWER(B2;2)',
  SQRT: '=SQRT(B2)',
  SUBTOTAL: '=SUBTOTAL(9;E2:E20)',
  SUMPRODUCT: '=SUMPRODUCT(D2:D20;E2:E20)',
  NEGBINOMDIST: '=NEGBINOMDIST(3;5;0.4)',
  'NEGBINOM.DIST': '=NEGBINOM.DIST(3;5;0.4;FALSE)',
  BINOMDIST: '=BINOMDIST(6;10;0.4;FALSE)',
  'BINOM.DIST': '=BINOM.DIST(6;10;0.4;FALSE)',
  NORMDIST: '=NORMDIST(42;40;1.5;TRUE)',
  'NORM.DIST': '=NORM.DIST(42;40;1.5;TRUE)',
  PMT: '=PMT(8%/12;12;10000000)',
  FV: '=FV(8%/12;12;-900000)',
  PV: '=PV(8%/12;12;-900000)',
  CONVERT: '=CONVERT(10;"m";"cm")',
  ENCODEURL: '=ENCODEURL("Formula Coach Excel")',
  FILTERXML: '=FILTERXML("<root><title>Formula Coach</title></root>";"//title")'
};

const buildExampleFromFormat = (formula = {}, format = '') => {
  const name = formula.name || 'FORMULA';
  if (exampleOverrides[name]) return exampleOverrides[name];
  const category = formula.category || formula.displayCategory || '';
  const open = String(format).indexOf('(');
  const close = String(format).lastIndexOf(')');
  if (open < 0 || close < open) return categoryFallback(category).sample;
  const args = String(format).slice(open + 1, close).split(',').map((arg) => arg.trim()).filter(Boolean);
  const cleaned = args.filter((arg) => !/^\[.*\]$/.test(arg)).slice(0, 4);
  const mapArg = (arg) => {
    const t = String(arg).replace(/[\[\]]/g, '').toLowerCase();
    if (/sum_range|average_range|max_range|min_range|values|known_y|return_array/.test(t)) return 'E2:E20';
    if (/criteria_range|lookup_array|lookup_vector|range/.test(t)) return 'B2:B20';
    if (/criteria/.test(t)) return '"Digital"';
    if (/lookup_value|value|text|number|x|z|probability|alpha|rate/.test(t)) return 'A2';
    if (/array|ref|database/.test(t)) return 'A2:E20';
    if (/table_array/.test(t)) return 'E2:H20';
    if (/col_index/.test(t)) return '2';
    if (/row_index/.test(t)) return '3';
    if (/cumulative|range_lookup/.test(t)) return 'FALSE';
    if (/start_date/.test(t)) return 'A2';
    if (/end_date/.test(t)) return 'B2';
    if (/year/.test(t)) return '2026';
    if (/month/.test(t)) return '1';
    if (/day/.test(t)) return '15';
    return 'A2';
  };
  const mapped = cleaned.length ? cleaned.map(mapArg) : [];
  if (!mapped.length) return `=${name}()`;
  return `=${name}(${mapped.join(';')})`;
};


const buildExampleMeaning = (formula = {}) => {
  const name = formula.name || '';
  if (['SUMIF','AVERAGEIF'].includes(name)) return 'Contoh ini memakai satu syarat. Excel mengecek kategori Digital, lalu menghitung angka yang sesuai.';
  if (name === 'COUNTIF') return 'Contoh ini menghitung jumlah data yang kategorinya Digital.';
  if (['SUMIFS','AVERAGEIFS','MAXIFS','MINIFS'].includes(name)) return 'Contoh ini memakai lebih dari satu syarat, misalnya kategori Digital dan kota Jakarta, lalu menghitung angka yang sesuai.';
  if (name === 'COUNTIFS') return 'Contoh ini menghitung jumlah data yang memenuhi beberapa syarat sekaligus.';
  if (['VLOOKUP','HLOOKUP','XLOOKUP','LOOKUP','MATCH','XMATCH','INDEX'].includes(name)) return 'Contoh ini mengambil data dari tabel referensi memakai nilai pencarian yang sudah ada.';
  if (['LEFT','RIGHT','MID','LEN','TRIM','LOWER','UPPER','PROPER','CONCAT','CONCATENATE','TEXTJOIN','TEXTSPLIT','TEXTBEFORE','TEXTAFTER','FIND','SEARCH','SUBSTITUTE','REPLACE','TEXT'].includes(name)) return 'Contoh ini mengolah teks, kode, nama, atau format tampilan dari cell.';
  if (['DATE','DAY','MONTH','YEAR','TODAY','NOW','DATEDIF','DAYS','NETWORKDAYS','WORKDAY','EDATE','EOMONTH','TIME','HOUR','MINUTE','SECOND'].includes(name)) return 'Contoh ini memakai data tanggal atau waktu yang umum dipakai di laporan kerja.';
  if (['NEGBINOMDIST','NEGBINOM.DIST','BINOMDIST','BINOM.DIST','NORMDIST','NORM.DIST','NORMINV','NORM.INV','POISSON','POISSON.DIST'].includes(name)) return 'Contoh ini memakai parameter statistik yang sesuai dengan argumen rumusnya.';
  if (['PMT','FV','PV','NPER','RATE','NPV','IRR'].includes(name)) return 'Contoh ini memakai parameter keuangan seperti bunga, periode, pembayaran, atau nilai pinjaman.';
  if (formula.category === 'Math and Trigonometry') return 'Contoh ini menghitung angka dari cell atau range angka.';
  if (formula.category === 'Statistical' || formula.category === 'Compatibility') return 'Contoh ini memakai range atau parameter statistik yang sesuai dengan jenis rumusnya.';
  if (formula.category === 'Text') return 'Contoh ini mengolah teks dari cell.';
  if (formula.category === 'Date and Time') return 'Contoh ini mengolah tanggal atau jam.';
  return categoryFallback(formula.category || formula.displayCategory).meaning;
};

export function buildBeginnerLearningContent(formula = {}) {
  const name = formula.name || 'FORMULA';
  const copy = categoryFallback(formula.category || formula.displayCategory);
  const specific = functionExamples[name] || {};
  const genericFormat = isGenericFormat(formula.syntax);
  const baseExample = specific.exampleFormula || buildExampleFromFormat(formula, formula.syntax || '') || formula.exampleFormula;

  return {
    description: formula.description && !/untuk kebutuhan khusus|berdasarkan parameter tertentu/i.test(formula.description)
      ? formula.description
      : copy.description(name),
    simpleLogic: specific.simpleLogic || formula.simpleLogic && !/Pahami input utama/i.test(formula.simpleLogic)
      ? (specific.simpleLogic || formula.simpleLogic)
      : copy.logic,
    useCase: formula.useCase && !/kebutuhan datanya cocok/i.test(formula.useCase) ? formula.useCase : copy.useCase,
    analogy: specific.analogy || formula.analogy || copy.analogy,
    simpleExample: specific.exampleMeaning || buildExampleMeaning(formula) || formula.simpleExample || formula.exampleMeaning || copy.meaning,
    exampleFormula: baseExample,
    exampleMeaning: specific.exampleMeaning || buildExampleMeaning(formula) || formula.exampleMeaning || formula.simpleExample || copy.meaning,
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
