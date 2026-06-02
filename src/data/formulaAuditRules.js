// Formula Coach audit helpers.
// File ini sengaja dibuat terpisah supaya data katalog bisa dinormalisasi tanpa mengubah komponen UI.

const humanCategoryCopy = {
  'Math and Trigonometry': {
    description: (name) => `Rumus ${name} dipakai untuk menghitung angka atau mengubah bentuk angka.`,
    logic: 'Tentukan dulu angka atau range angka yang mau dihitung, lalu masukkan ke argumen rumus.',
    useCase: 'Untuk total, pembulatan, pembagian sisa, akar, pangkat, atau hitungan angka lainnya.',
    analogy: 'Kayak kalkulator kecil di Excel. Kamu kasih angka yang benar, Excel bantu hitung hasilnya.',
    sample: '=SUM(range_angka)',
    meaning: 'Pola ini menjumlahkan semua angka di range_angka.'
  },
  Statistical: {
    description: (name) => `Rumus ${name} dipakai untuk membaca pola dari kumpulan angka.`,
    logic: 'Pilih dulu kumpulan datanya, lalu tentukan ukuran statistik yang mau dicari.',
    useCase: 'Untuk rata-rata, ranking, median, standar deviasi, persentil, dan analisis data angka.',
    analogy: 'Kayak guru yang melihat semua nilai murid, lalu mencari rangkuman seperti nilai tengah atau ranking.',
    sample: '=AVERAGE(range_angka)',
    meaning: 'Pola ini mencari rata-rata dari range_angka.'
  },
  'Lookup and Reference': {
    description: (name) => `Rumus ${name} dipakai untuk mencari data atau mengambil isi dari posisi tertentu.`,
    logic: 'Tentukan value yang dicari, tempat mencarinya, lalu kolom atau range hasil yang mau diambil.',
    useCase: 'Untuk mengambil nama produk dari kode, mencari harga dari master data, atau mengambil data dari tabel lain.',
    analogy: 'Kayak cari nama kontak dari nomor HP. Excel mencari kode dulu, lalu mengambil informasi yang sejajar.',
    sample: '=XLOOKUP(nilai_yang_dicari; range_pencarian; range_hasil)',
    meaning: 'Pola ini mencari satu nilai di range_pencarian, lalu mengambil data sejajar dari range_hasil.'
  },
  Text: {
    description: (name) => `Rumus ${name} dipakai untuk mengambil, menggabungkan, membersihkan, atau mengubah teks.`,
    logic: 'Pilih teksnya dulu, lalu tentukan bagian teks mana yang mau diambil atau diubah.',
    useCase: 'Untuk nama pelanggan, kode produk, nomor invoice, email, dan data copy paste yang perlu dirapikan.',
    analogy: 'Kayak gunting dan lem untuk teks. Bisa motong, gabung, atau merapikan tulisan.',
    sample: '=LEFT(teks; jumlah_karakter)',
    meaning: 'Pola ini mengambil beberapa karakter dari teks sesuai jumlah yang kamu tentukan.'
  },
  'Date and Time': {
    description: (name) => `Rumus ${name} dipakai untuk membaca atau menghitung tanggal dan waktu.`,
    logic: 'Tentukan tanggal atau jam yang dipakai, lalu pilih bagian yang mau diambil atau dihitung.',
    useCase: 'Untuk umur data, deadline, durasi kerja, tanggal jatuh tempo, bulan, tahun, jam, dan menit.',
    analogy: 'Kayak kalender dan jam di dalam Excel. Kamu tunjuk tanggalnya, Excel ambil bagian yang kamu butuhkan.',
    sample: '=DATEDIF(tanggal_awal; tanggal_akhir; satuan_hasil)',
    meaning: 'Pola ini menghitung jarak antara tanggal_awal dan tanggal_akhir sesuai satuan yang kamu pilih.'
  },
  Logical: {
    description: (name) => `Rumus ${name} dipakai untuk membaca hasil kondisi TRUE/FALSE atau membuat keputusan dari kondisi tertentu.`,
    logic: 'Tulis kondisi yang mau dicek. Kalau rumusnya IF/IFS, tentukan juga hasil saat kondisi benar dan salah.',
    useCase: 'Untuk status lulus/tidak, validasi data, syarat kelayakan, pengecekan kosong/tidak kosong, atau kondisi alternatif.',
    analogy: 'Kayak aturan pintu masuk. Excel mengecek syarat dulu, lalu mengeluarkan hasil sesuai aturan rumusnya.',
    sample: '=IF(AND(syarat_1; syarat_2); hasil_jika_semua_benar; hasil_jika_ada_yang_salah)',
    meaning: 'Pola ini memakai AND di dalam IF. AND mengecek semua syarat, lalu IF mengubah hasilnya menjadi keputusan yang mudah dibaca.'
  },
  'Dynamic Array': {
    description: (name) => `Rumus ${name} dipakai untuk mengeluarkan hasil yang bisa melebar otomatis ke banyak cell.`,
    logic: 'Pilih array atau tabel sumber, lalu tentukan aturan filter, sortir, ambil, atau gabung datanya.',
    useCase: 'Untuk membuat list unik, filter data, sortir data, dan membuat output tabel otomatis.',
    analogy: 'Kayak mesin penyaring data. Sekali formula jalan, hasilnya bisa keluar banyak baris sekaligus.',
    sample: '=FILTER(tabel_data; syarat_filter)',
    meaning: 'Pola ini menampilkan baris dari tabel_data yang memenuhi syarat_filter.'
  },
  Financial: {
    description: (name) => `Rumus ${name} dipakai untuk hitungan keuangan.`,
    logic: 'Siapkan angka keuangan seperti bunga, periode, pembayaran, atau nilai sekarang, lalu masukkan sesuai urutan format.',
    useCase: 'Untuk cicilan, bunga, nilai investasi, depresiasi, dan analisis keuangan.',
    analogy: 'Kayak kalkulator finansial. Inputnya harus rapi karena urutan argumen sangat berpengaruh.',
    sample: '=PMT(bunga_per_periode; jumlah_periode; nilai_pinjaman)',
    meaning: 'Pola ini menghitung estimasi pembayaran rutin dari bunga, periode, dan nilai pinjaman.'
  },
  Engineering: {
    description: (name) => `Rumus ${name} dipakai untuk hitungan teknis atau konversi angka khusus.`,
    logic: 'Pahami dulu jenis inputnya, misalnya bilangan biner, satuan, atau angka teknik, lalu masukkan sesuai format.',
    useCase: 'Untuk konversi satuan, bilangan biner/hex, bilangan kompleks, dan perhitungan teknik.',
    analogy: 'Kayak alat bengkel khusus. Dipakai saat datanya memang teknis.',
    sample: '=CONVERT(angka; satuan_awal; satuan_tujuan)',
    meaning: 'Pola ini mengubah angka dari satuan_awal ke satuan_tujuan.'
  },
  Information: {
    description: (name) => `Rumus ${name} dipakai untuk mengecek jenis isi cell.`,
    logic: 'Pilih cell yang mau dicek, lalu Excel memberi tahu apakah isinya kosong, angka, teks, error, atau jenis lain.',
    useCase: 'Untuk validasi data, cek error, cek cell kosong, dan memastikan data siap dihitung.',
    analogy: 'Kayak petugas QC yang mengecek isi kotak sebelum diproses.',
    sample: '=IF(ISBLANK(cell_yang_dicek); hasil_jika_kosong; hasil_jika_terisi)',
    meaning: 'Pola ini mengecek apakah cell kosong, lalu IF mengubah hasil TRUE/FALSE menjadi status yang mudah dibaca.'
  },
  Database: {
    description: (name) => `Rumus ${name} dipakai untuk menghitung data seperti database kecil di Excel.`,
    logic: 'Pilih tabel database, nama field/kolom, lalu range criteria yang berisi syarat pencarian.',
    useCase: 'Untuk menghitung, menjumlahkan, atau mengambil data dari tabel yang punya area criteria.',
    analogy: 'Kayak filter tabel lama di Excel. Ada data utama, lalu ada kotak syarat yang menentukan data mana yang dihitung.',
    sample: '=DSUM(tabel_database; nama_kolom; area_syarat)',
    meaning: 'Pola ini menjumlahkan satu kolom dari tabel_database memakai syarat yang ditulis di area_syarat.'
  },
  Compatibility: {
    description: (name) => `Rumus ${name} adalah rumus lama yang masih ada agar file Excel lama tetap bisa dibuka.`,
    logic: 'Pakai hanya kalau kamu mengerjakan file lama. Untuk file baru, biasanya ada versi function yang lebih baru.',
    useCase: 'Untuk menjaga file lama tetap jalan atau memahami rumus dari workbook lama.',
    analogy: 'Kayak adaptor charger lama. Masih berguna kalau perangkatnya masih butuh versi lama.',
    sample: '=FORECAST(nilai_x_baru; data_hasil_lama; data_x_lama)',
    meaning: 'Pola ini memperkirakan hasil baru berdasarkan pasangan data lama.'
  },
  Cube: {
    description: (name) => `Rumus ${name} dipakai untuk mengambil data dari model cube atau data model.`,
    logic: 'Kamu butuh koneksi/model cube lebih dulu, lalu rumus mengambil member, set, atau nilai dari cube tersebut.',
    useCase: 'Untuk laporan berbasis OLAP, Power Pivot, atau data model yang sudah dibuat.',
    analogy: 'Kayak mengambil barang dari gudang besar. Kamu harus tahu alamat raknya dulu.',
    sample: '=CUBEVALUE(koneksi_data_model; item_yang_diambil)',
    meaning: 'Pola ini mengambil nilai dari data model atau cube yang sudah tersedia.'
  },
  Web: {
    description: (name) => `Rumus ${name} dipakai untuk data URL, web service, atau XML.`,
    logic: 'Masukkan URL atau teks XML, lalu Excel mengambil atau merapikan data web tersebut.',
    useCase: 'Untuk encode URL, mengambil response dari web service, atau membaca XML sederhana.',
    analogy: 'Kayak kurir data dari internet. Rumusnya mengambil alamat, lalu membawa balik data yang diminta.',
    sample: '=ENCODEURL(teks_yang_mau_dipakai_di_url)',
    meaning: 'Pola ini mengubah teks agar aman dipakai sebagai bagian dari URL.'
  },
  'Advanced / Professional': {
    description: (name) => `Rumus ${name} dipakai untuk kebutuhan Excel yang lebih modern atau profesional.`,
    logic: 'Pahami dulu output yang diinginkan, lalu susun input dan aturan prosesnya dengan hati-hati.',
    useCase: 'Untuk dashboard modern, formula custom, automation, regex, translate, atau model formula yang lebih advanced.',
    analogy: 'Kayak bikin mesin kecil sendiri di Excel. Lebih kuat, tapi harus paham alurnya dulu.',
    sample: '=LET(nama_singkat; rumus_atau_nilai; hasil_akhir)',
    meaning: 'Pola ini memberi nama sementara pada bagian rumus agar rumus lebih mudah dibaca.'
  },
  'Add-in / User Defined': {
    description: (name) => `Rumus ${name} berasal dari add-in atau function buatan user.`,
    logic: 'Pastikan add-in atau function custom-nya tersedia dulu, baru rumusnya bisa jalan.',
    useCase: 'Untuk kebutuhan khusus yang tidak disediakan function bawaan Excel.',
    analogy: 'Kayak alat tambahan yang dipasang ke Excel. Kalau alatnya belum terpasang, rumusnya tidak dikenali.',
    sample: '=NAMA_FUNCTION(input_yang_diminta)',
    meaning: 'Pola function add-in bisa berbeda tergantung add-in atau file yang dipakai.'
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
    exampleFormula: '=SUM(range_angka)',
    exampleMeaning: 'Baca begini: jumlahkan semua angka yang ada di range_angka.',
    simpleLogic: 'SUM dipakai untuk menjumlahkan angka dalam satu range atau beberapa range.',
    useCase: 'Untuk total penjualan, total biaya, total qty, atau angka lain yang perlu dijumlahkan.'
  },
  AVERAGE: {
    exampleFormula: '=AVERAGE(range_angka)',
    exampleMeaning: 'Baca begini: ambil semua angka di range_angka, lalu cari rata-ratanya.',
    simpleLogic: 'AVERAGE menjumlahkan angka lalu membaginya dengan jumlah data angka.',
    useCase: 'Untuk mencari rata-rata nilai, rata-rata penjualan, rata-rata qty, atau rata-rata biaya.'
  },
  MIN: {
    exampleFormula: '=MIN(range_angka)',
    exampleMeaning: 'Baca begini: cari angka paling kecil dari range_angka.',
    simpleLogic: 'MIN dipakai untuk mengambil nilai terkecil dari kumpulan angka.',
    useCase: 'Untuk mencari penjualan terendah, nilai terendah, stok paling sedikit, atau biaya paling kecil.'
  },
  MAX: {
    exampleFormula: '=MAX(range_angka)',
    exampleMeaning: 'Baca begini: cari angka paling besar dari range_angka.',
    simpleLogic: 'MAX dipakai untuk mengambil nilai terbesar dari kumpulan angka.',
    useCase: 'Untuk mencari penjualan tertinggi, nilai tertinggi, stok terbanyak, atau biaya paling besar.'
  },
  LARGE: {
    exampleFormula: '=LARGE(range_angka; urutan_terbesar_keberapa)',
    exampleMeaning: 'Baca begini: dari range_angka, ambil angka terbesar sesuai urutan yang diminta.',
    simpleLogic: 'LARGE mencari angka terbesar berdasarkan urutan yang kamu tentukan.',
    useCase: 'Untuk mencari top 2, top 3, atau ranking nilai terbesar tanpa membuat sort manual.'
  },
  SMALL: {
    exampleFormula: '=SMALL(range_angka; urutan_terkecil_keberapa)',
    exampleMeaning: 'Baca begini: dari range_angka, ambil angka terkecil sesuai urutan yang diminta.',
    simpleLogic: 'SMALL mencari angka terkecil berdasarkan urutan yang kamu tentukan.',
    useCase: 'Untuk mencari bottom 2, bottom 3, atau ranking nilai terkecil tanpa membuat sort manual.'
  },
  COUNT: {
    exampleFormula: '=COUNT(range_yang_dicek)',
    exampleMeaning: 'Baca begini: hitung berapa cell berisi angka di range_yang_dicek. Teks tidak dihitung.',
    simpleLogic: 'COUNT hanya menghitung cell yang isinya angka. Teks dan cell kosong tidak dihitung.',
    useCase: 'Untuk menghitung jumlah data angka, jumlah nilai, jumlah transaksi bernominal, atau kolom numeric.'
  },
  COUNTA: {
    exampleFormula: '=COUNTA(range_yang_dicek)',
    exampleMeaning: 'Baca begini: hitung berapa cell yang terisi di range_yang_dicek, baik angka maupun teks.',
    simpleLogic: 'COUNTA menghitung semua cell yang tidak kosong, baik teks maupun angka.',
    useCase: 'Untuk menghitung jumlah nama, kode, catatan terisi, atau data yang sudah diinput.'
  },
  COUNTBLANK: {
    exampleFormula: '=COUNTBLANK(range_yang_dicek)',
    exampleMeaning: 'Baca begini: hitung berapa cell kosong di range_yang_dicek.',
    simpleLogic: 'COUNTBLANK hanya menghitung cell yang kosong.',
    useCase: 'Untuk mengecek data yang belum diisi, catatan kosong, atau kolom yang masih bolong.'
  },
  SUMIF: {
    exampleFormula: '=SUMIF(range_syarat; syarat; range_angka_yang_dijumlahkan)',
    exampleMeaning: 'Baca begini: cek syarat di range_syarat. Kalau cocok, jumlahkan angka pada baris yang sama di range_angka_yang_dijumlahkan.',
    simpleLogic: 'SUMIF menjumlahkan angka dengan satu syarat.',
    useCase: 'Untuk total penjualan per kategori, total omzet per kota, atau total angka berdasarkan satu kriteria.'
  },
  SUMIFS: {
    exampleFormula: '=SUMIFS(range_angka_yang_dijumlahkan; range_syarat_1; syarat_1; range_syarat_2; syarat_2)',
    exampleMeaning: 'Baca begini: jumlahkan angka hanya untuk baris yang memenuhi semua syarat.',
    simpleLogic: 'SUMIFS menjumlahkan angka dengan lebih dari satu syarat.',
    useCase: 'Untuk total angka berdasarkan beberapa kriteria sekaligus.'
  },
  COUNTIF: {
    exampleFormula: '=COUNTIF(range_yang_dicek; syarat)',
    exampleMeaning: 'Baca begini: hitung berapa data di range_yang_dicek yang sesuai dengan syarat.',
    simpleLogic: 'COUNTIF menghitung jumlah data yang memenuhi satu syarat.',
    useCase: 'Untuk menghitung jumlah order per kategori, jumlah nama tertentu, atau jumlah status tertentu.'
  },
  COUNTIFS: {
    exampleFormula: '=COUNTIFS(range_syarat_1; syarat_1; range_syarat_2; syarat_2)',
    exampleMeaning: 'Baca begini: hitung jumlah data yang memenuhi semua syarat sekaligus.',
    simpleLogic: 'COUNTIFS menghitung jumlah data yang memenuhi beberapa syarat sekaligus.',
    useCase: 'Untuk menghitung jumlah order berdasarkan kategori, kota, status, atau kriteria lain.'
  },
  AVERAGEIF: {
    exampleFormula: '=AVERAGEIF(range_syarat; syarat; range_angka_yang_dirata_ratakan)',
    exampleMeaning: 'Baca begini: cek syarat dulu, lalu rata-ratakan angka yang barisnya cocok.',
    simpleLogic: 'AVERAGEIF menghitung rata-rata angka dengan satu syarat.',
    useCase: 'Untuk rata-rata penjualan per kategori, rata-rata qty per kota, atau rata-rata nilai berdasarkan satu kriteria.'
  },
  AVERAGEIFS: {
    exampleFormula: '=AVERAGEIFS(range_angka_yang_dirata_ratakan; range_syarat_1; syarat_1; range_syarat_2; syarat_2)',
    exampleMeaning: 'Baca begini: rata-ratakan angka hanya untuk baris yang memenuhi semua syarat.',
    simpleLogic: 'AVERAGEIFS menghitung rata-rata angka dengan lebih dari satu syarat.',
    useCase: 'Untuk rata-rata angka berdasarkan beberapa kriteria sekaligus.'
  },
  MAXIFS: {
    exampleFormula: '=MAXIFS(range_angka; range_syarat_1; syarat_1; range_syarat_2; syarat_2)',
    exampleMeaning: 'Baca begini: dari range_angka, ambil angka terbesar yang memenuhi semua syarat.',
    simpleLogic: 'MAXIFS mencari nilai terbesar yang memenuhi satu atau beberapa syarat.',
    useCase: 'Untuk mencari transaksi tertinggi berdasarkan kategori, kota, status, atau kriteria lain.'
  },
  MINIFS: {
    exampleFormula: '=MINIFS(range_angka; range_syarat_1; syarat_1; range_syarat_2; syarat_2)',
    exampleMeaning: 'Baca begini: dari range_angka, ambil angka terkecil yang memenuhi semua syarat.',
    simpleLogic: 'MINIFS mencari nilai terkecil yang memenuhi satu atau beberapa syarat.',
    useCase: 'Untuk mencari transaksi terendah berdasarkan kategori, kota, status, atau kriteria lain.'
  },
  IF: {
    exampleFormula: '=IF(syarat_yang_dicek; hasil_jika_benar; hasil_jika_salah)',
    exampleMeaning: 'Baca begini: kalau syarat_yang_dicek benar, tampilkan hasil_jika_benar. Kalau salah, tampilkan hasil_jika_salah.',
    simpleLogic: 'IF membaca satu kondisi, lalu mengeluarkan hasil berbeda untuk kondisi benar dan kondisi salah.',
    useCase: 'Untuk membuat status seperti Lulus/Tidak Lulus, Layak/Tidak Layak, atau Prioritas/Normal.'
  },
  IFS: {
    exampleFormula: '=IFS(syarat_1; hasil_1; syarat_2; hasil_2; TRUE; hasil_default)',
    exampleMeaning: 'Baca begini: cek syarat dari kiri ke kanan. Hasil pertama dari syarat yang benar akan dipakai. TRUE di akhir dipakai sebagai jawaban default.',
    simpleLogic: 'IFS mengecek beberapa kondisi dari kiri ke kanan. Kondisi pertama yang benar akan dipakai sebagai hasil.',
    useCase: 'Untuk membuat kategori bertingkat seperti grade nilai, level prioritas, atau status risiko.'
  },
  AND: {
    exampleFormula: '=IF(AND(syarat_1; syarat_2); hasil_jika_semua_syarat_benar; hasil_jika_ada_syarat_gagal)',
    exampleMeaning: 'Baca begini: AND mengecek apakah semua syarat benar. IF lalu mengubahnya menjadi hasil yang bisa dibaca.',
    simpleLogic: 'AND mengecek apakah semua kondisi benar. Untuk pemula, AND lebih mudah dipahami saat digabung dengan IF supaya hasilnya menjadi status yang bisa dibaca.',
    useCase: 'Untuk keputusan yang butuh semua syarat terpenuhi, misalnya lulus jika nilai cukup dan kehadiran cukup.'
  },
  OR: {
    exampleFormula: '=IF(OR(syarat_1; syarat_2); hasil_jika_minimal_satu_syarat_benar; hasil_jika_semua_syarat_salah)',
    exampleMeaning: 'Baca begini: OR cukup butuh satu syarat benar. IF lalu mengubahnya menjadi keputusan akhir.',
    simpleLogic: 'OR mengecek apakah minimal satu kondisi benar. Untuk latihan pemula, OR lebih jelas jika digabung dengan IF agar hasil akhirnya berupa keputusan.',
    useCase: 'Untuk keputusan yang cukup memenuhi salah satu syarat, misalnya prioritas jika nilai sangat tinggi atau kehadiran sangat tinggi.'
  },
  NOT: {
    exampleFormula: '=IF(NOT(syarat_yang_dicek); hasil_jika_kondisi_tidak_terpenuhi; hasil_jika_kondisi_terpenuhi)',
    exampleMeaning: 'Baca begini: NOT membalik syarat. Kalau syarat awal tidak terpenuhi, bagian hasil pertama yang keluar.',
    simpleLogic: 'NOT membalik hasil logika. TRUE menjadi FALSE dan FALSE menjadi TRUE. Untuk pemula, NOT lebih mudah dipakai di dalam IF agar hasilnya menjadi status.',
    useCase: 'Untuk keputusan yang memakai kebalikan syarat, misalnya remedial jika nilai tidak memenuhi batas.'
  },
  XOR: {
    exampleFormula: '=IF(XOR(syarat_1; syarat_2); hasil_jika_hanya_satu_syarat_benar; hasil_jika_dua_syarat_sama)',
    exampleMeaning: 'Baca begini: XOR benar hanya kalau salah satu syarat benar. Kalau dua-duanya sama-sama benar atau sama-sama salah, hasilnya masuk bagian kedua.',
    simpleLogic: 'XOR bernilai benar jika hanya salah satu kondisi benar. Karena hasil mentahnya TRUE/FALSE, lebih mudah diajarkan dengan IF agar outputnya jelas.',
    useCase: 'Untuk validasi khusus saat dua kondisi seharusnya konsisten, misalnya butuh dicek manual jika hanya satu syarat yang lolos.'
  },
  IFERROR: {
    exampleFormula: '=IFERROR(rumus_utama; hasil_jika_rumus_error)',
    exampleMeaning: 'Baca begini: jalankan rumus_utama. Kalau error, tampilkan hasil_jika_rumus_error.',
    simpleLogic: 'IFERROR menangkap error dari rumus utama, lalu menggantinya dengan hasil yang lebih aman dibaca.',
    useCase: 'Untuk merapikan hasil lookup, pembagian, atau rumus lain yang bisa error.'
  },
  IFNA: {
    exampleFormula: '=IFNA(rumus_lookup; hasil_jika_data_tidak_ditemukan)',
    exampleMeaning: 'Baca begini: jalankan rumus_lookup. Kalau hasilnya #N/A karena data tidak ditemukan, tampilkan hasil pengganti.',
    simpleLogic: 'IFNA khusus menangani error #N/A, biasanya dari data lookup yang tidak ditemukan.',
    useCase: 'Untuk lookup yang datanya mungkin belum ada di master data.'
  },
  SWITCH: {
    exampleFormula: '=SWITCH(value_yang_dicek; pilihan_1; hasil_1; pilihan_2; hasil_2; hasil_default)',
    exampleMeaning: 'Baca begini: cocokkan value_yang_dicek dengan beberapa pilihan. Kalau tidak ada yang cocok, pakai hasil_default.',
    simpleLogic: 'SWITCH mencocokkan satu value dengan beberapa kemungkinan hasil.',
    useCase: 'Untuk mengubah kode/status menjadi label yang lebih mudah dibaca.'
  },
  TRUE: {
    exampleFormula: '=TRUE()',
    exampleMeaning: 'TRUE adalah nilai logika benar. Biasanya dipakai sebagai kondisi default, bukan latihan utama.',
    simpleLogic: 'TRUE mengembalikan nilai benar.',
    useCase: 'Biasanya dipakai sebagai kondisi default di rumus seperti IFS.'
  },
  FALSE: {
    exampleFormula: '=FALSE()',
    exampleMeaning: 'FALSE adalah nilai logika salah. Biasanya dipakai sebagai parameter atau kondisi, bukan latihan utama.',
    simpleLogic: 'FALSE mengembalikan nilai salah.',
    useCase: 'Biasanya dipakai untuk argumen exact match atau kondisi logika.'
  },
  ISBLANK: {
    exampleFormula: '=IF(ISBLANK(cell_yang_dicek); hasil_jika_kosong; hasil_jika_terisi)',
    exampleMeaning: 'Baca begini: cek apakah cell kosong. IF lalu mengubah hasilnya menjadi status yang mudah dibaca.',
    simpleLogic: 'ISBLANK mengecek apakah cell kosong. Untuk pemula, hasilnya lebih mudah dibaca jika dibungkus dengan IF.',
    useCase: 'Untuk validasi data kosong sebelum data diproses.'
  },
  ISNUMBER: {
    exampleFormula: '=IF(ISNUMBER(cell_yang_dicek); hasil_jika_angka; hasil_jika_bukan_angka)',
    exampleMeaning: 'Baca begini: cek apakah isi cell angka. IF lalu mengubah hasilnya menjadi label.',
    simpleLogic: 'ISNUMBER mengecek apakah isi cell berupa angka. Supaya ramah untuk pemula, gabungkan dengan IF untuk membuat label hasil.',
    useCase: 'Untuk validasi input angka sebelum dihitung.'
  },
  ISTEXT: {
    exampleFormula: '=IF(ISTEXT(cell_yang_dicek); hasil_jika_teks; hasil_jika_bukan_teks)',
    exampleMeaning: 'Baca begini: cek apakah isi cell teks. IF lalu mengubah hasilnya menjadi label.',
    simpleLogic: 'ISTEXT mengecek apakah isi cell berupa teks. Gabungkan dengan IF jika ingin hasilnya menjadi label.',
    useCase: 'Untuk validasi nama, kode, kategori, atau input teks lain.'
  },
  ISERROR: {
    exampleFormula: '=IF(ISERROR(rumus_atau_cell_yang_dicek); hasil_jika_error; hasil_jika_aman)',
    exampleMeaning: 'Baca begini: cek apakah rumus atau cell menghasilkan error. IF lalu mengubahnya menjadi status.',
    simpleLogic: 'ISERROR mengecek apakah value menghasilkan error. Untuk laporan, lebih enak jika digabung dengan IF agar hasilnya berupa status.',
    useCase: 'Untuk membuat pengecekan sebelum error ditangani atau sebelum laporan dibagikan.'
  },
  ISNA: {
    exampleFormula: '=IF(ISNA(rumus_lookup); hasil_jika_tidak_ditemukan; hasil_jika_ada)',
    exampleMeaning: 'Baca begini: cek apakah rumus lookup menghasilkan #N/A. IF lalu mengubahnya menjadi status.',
    simpleLogic: 'ISNA hanya mengecek error #N/A. Dalam praktik lookup, gabungkan dengan IF agar hasilnya lebih mudah dibaca.',
    useCase: 'Untuk cek hasil lookup yang tidak menemukan data.'
  },
  VLOOKUP: {
    exampleFormula: '=VLOOKUP(nilai_yang_dicari; tabel_referensi; nomor_kolom_hasil; FALSE)',
    exampleMeaning: 'Baca begini: cari nilai_yang_dicari di kolom pertama tabel_referensi, lalu ambil hasil dari nomor_kolom_hasil.',
    simpleLogic: 'VLOOKUP mencari data secara vertikal dari kolom paling kiri tabel referensi.'
  },
  HLOOKUP: {
    exampleFormula: '=HLOOKUP(nilai_yang_dicari; tabel_referensi; nomor_baris_hasil; FALSE)',
    exampleMeaning: 'Baca begini: cari nilai_yang_dicari di baris pertama tabel_referensi, lalu ambil hasil dari nomor_baris_hasil.',
    simpleLogic: 'HLOOKUP mencari data secara horizontal dari baris paling atas tabel referensi.'
  },
  XLOOKUP: {
    exampleFormula: '=XLOOKUP(nilai_yang_dicari; range_pencarian; range_hasil; hasil_jika_tidak_ditemukan)',
    exampleMeaning: 'Baca begini: cari nilai di range_pencarian, lalu ambil data sejajar dari range_hasil.',
    simpleLogic: 'XLOOKUP mencari value di satu range lalu mengembalikan hasil dari range lain yang sejajar.'
  },
  LOOKUP: {
    exampleFormula: '=LOOKUP(nilai_yang_dicari; range_pencarian; range_hasil)',
    exampleMeaning: 'Baca begini: cari nilai di range_pencarian, lalu ambil hasil yang sejajar dari range_hasil.'
  },
  MATCH: {
    exampleFormula: '=MATCH(nilai_yang_dicari; range_pencarian; mode_pencarian)',
    exampleMeaning: 'Baca begini: cari posisi nilai_yang_dicari di range_pencarian.'
  },
  XMATCH: {
    exampleFormula: '=XMATCH(nilai_yang_dicari; range_pencarian; mode_pencarian)',
    exampleMeaning: 'Baca begini: cari posisi nilai_yang_dicari di range_pencarian dengan opsi pencarian yang lebih modern.'
  },
  INDEX: {
    exampleFormula: '=INDEX(range_data; nomor_baris; nomor_kolom)',
    exampleMeaning: 'Baca begini: ambil isi dari range_data berdasarkan posisi baris dan kolom yang kamu tentukan.'
  },
  FILTER: {
    exampleFormula: '=FILTER(tabel_data; syarat_filter)',
    exampleMeaning: 'Baca begini: tampilkan baris dari tabel_data yang memenuhi syarat_filter.'
  },
  SORT: {
    exampleFormula: '=SORT(tabel_data; nomor_kolom_sort; urutan_sort)',
    exampleMeaning: 'Baca begini: urutkan tabel_data berdasarkan kolom dan urutan yang kamu tentukan.'
  },
  UNIQUE: {
    exampleFormula: '=UNIQUE(range_data)',
    exampleMeaning: 'Baca begini: ambil daftar unik dari range_data, data yang double hanya muncul sekali.'
  },
  LEFT: { exampleFormula: '=LEFT(teks; jumlah_karakter)', exampleMeaning: 'Baca begini: ambil beberapa karakter dari sisi kiri teks.' },
  RIGHT: { exampleFormula: '=RIGHT(teks; jumlah_karakter)', exampleMeaning: 'Baca begini: ambil beberapa karakter dari sisi kanan teks.' },
  MID: { exampleFormula: '=MID(teks; posisi_mulai; jumlah_karakter)', exampleMeaning: 'Baca begini: ambil bagian tengah teks mulai dari posisi tertentu.' },
  LEN: { exampleFormula: '=LEN(teks)', exampleMeaning: 'Baca begini: hitung jumlah karakter dalam teks.' },
  TRIM: { exampleFormula: '=TRIM(teks)', exampleMeaning: 'Baca begini: hapus spasi berlebih dari teks.' },
  LOWER: { exampleFormula: '=LOWER(teks)', exampleMeaning: 'Baca begini: ubah teks menjadi huruf kecil.' },
  UPPER: { exampleFormula: '=UPPER(teks)', exampleMeaning: 'Baca begini: ubah teks menjadi huruf besar.' },
  PROPER: { exampleFormula: '=PROPER(teks)', exampleMeaning: 'Baca begini: ubah awal tiap kata menjadi huruf besar.' },
  CONCAT: { exampleFormula: '=CONCAT(teks_1; teks_2)', exampleMeaning: 'Baca begini: gabungkan beberapa teks menjadi satu.' },
  TEXTJOIN: { exampleFormula: '=TEXTJOIN(pemisah; abaikan_kosong; range_teks)', exampleMeaning: 'Baca begini: gabungkan banyak teks dengan pemisah yang kamu tentukan.' },
  TEXT: { exampleFormula: '=TEXT(angka_atau_tanggal; format_tampilan)', exampleMeaning: 'Baca begini: ubah angka atau tanggal menjadi teks dengan format tampilan tertentu.' },
  DATE: { exampleFormula: '=DATE(tahun; bulan; hari)', exampleMeaning: 'Baca begini: buat tanggal dari tahun, bulan, dan hari.' },
  DAY: { exampleFormula: '=DAY(tanggal)', exampleMeaning: 'Baca begini: ambil angka hari dari tanggal.' },
  MONTH: { exampleFormula: '=MONTH(tanggal)', exampleMeaning: 'Baca begini: ambil angka bulan dari tanggal.' },
  YEAR: { exampleFormula: '=YEAR(tanggal)', exampleMeaning: 'Baca begini: ambil angka tahun dari tanggal.' },
  TODAY: { exampleFormula: '=TODAY()', exampleMeaning: 'Baca begini: tampilkan tanggal hari ini.' },
  NOW: { exampleFormula: '=NOW()', exampleMeaning: 'Baca begini: tampilkan tanggal dan jam saat ini.' },
  DATEDIF: { exampleFormula: '=DATEDIF(tanggal_awal; tanggal_akhir; satuan_hasil)', exampleMeaning: 'Baca begini: hitung jarak antara dua tanggal sesuai satuan yang dipilih.' },
  DAYS: { exampleFormula: '=DAYS(tanggal_akhir; tanggal_awal)', exampleMeaning: 'Baca begini: hitung selisih hari antara dua tanggal.' },
  NETWORKDAYS: { exampleFormula: '=NETWORKDAYS(tanggal_awal; tanggal_akhir; daftar_libur_opsional)', exampleMeaning: 'Baca begini: hitung jumlah hari kerja di antara dua tanggal.' },
  WORKDAY: { exampleFormula: '=WORKDAY(tanggal_awal; jumlah_hari_kerja; daftar_libur_opsional)', exampleMeaning: 'Baca begini: cari tanggal kerja setelah beberapa hari kerja.' },
  EDATE: { exampleFormula: '=EDATE(tanggal_awal; jumlah_bulan)', exampleMeaning: 'Baca begini: maju atau mundurkan tanggal beberapa bulan.' },
  EOMONTH: { exampleFormula: '=EOMONTH(tanggal_awal; jumlah_bulan)', exampleMeaning: 'Baca begini: cari tanggal akhir bulan dari tanggal tertentu.' },
  ABS: { exampleFormula: '=ABS(angka)', exampleMeaning: 'Baca begini: ubah angka negatif menjadi nilai positif.' },
  ROUND: { exampleFormula: '=ROUND(angka; jumlah_digit)', exampleMeaning: 'Baca begini: bulatkan angka sesuai jumlah digit.' },
  ROUNDUP: { exampleFormula: '=ROUNDUP(angka; jumlah_digit)', exampleMeaning: 'Baca begini: bulatkan angka ke atas.' },
  ROUNDDOWN: { exampleFormula: '=ROUNDDOWN(angka; jumlah_digit)', exampleMeaning: 'Baca begini: bulatkan angka ke bawah.' },
  INT: { exampleFormula: '=INT(angka)', exampleMeaning: 'Baca begini: ambil bagian bilangan bulat dari angka.' },
  MOD: { exampleFormula: '=MOD(angka; pembagi)', exampleMeaning: 'Baca begini: ambil sisa pembagian angka.' },
  POWER: { exampleFormula: '=POWER(angka; pangkat)', exampleMeaning: 'Baca begini: hitung angka pangkat tertentu.' },
  SQRT: { exampleFormula: '=SQRT(angka)', exampleMeaning: 'Baca begini: hitung akar kuadrat angka.' },
  SUBTOTAL: { exampleFormula: '=SUBTOTAL(kode_perhitungan; range_angka)', exampleMeaning: 'Baca begini: hitung subtotal dari range, biasanya mengikuti data yang sedang difilter.' },
  SUMPRODUCT: { exampleFormula: '=SUMPRODUCT(range_angka_1; range_angka_2)', exampleMeaning: 'Baca begini: kalikan angka sejajar dari dua range, lalu jumlahkan hasilnya.' },
  PMT: { exampleFormula: '=PMT(bunga_per_periode; jumlah_periode; nilai_pinjaman)', exampleMeaning: 'Baca begini: hitung estimasi cicilan dari bunga, periode, dan nilai pinjaman.' },
  FV: { exampleFormula: '=FV(bunga_per_periode; jumlah_periode; pembayaran_rutin)', exampleMeaning: 'Baca begini: hitung perkiraan nilai akhir dari pembayaran rutin.' },
  PV: { exampleFormula: '=PV(bunga_per_periode; jumlah_periode; pembayaran_rutin)', exampleMeaning: 'Baca begini: hitung nilai sekarang dari pembayaran di masa depan.' },
  CONVERT: { exampleFormula: '=CONVERT(angka; satuan_awal; satuan_tujuan)', exampleMeaning: 'Baca begini: ubah angka dari satuan_awal ke satuan_tujuan.' },
  ENCODEURL: { exampleFormula: '=ENCODEURL(teks_yang_mau_dipakai_di_url)', exampleMeaning: 'Baca begini: ubah teks agar aman dipakai di URL.' },
  FILTERXML: { exampleFormula: '=FILTERXML(teks_xml; jalur_data_yang_diambil)', exampleMeaning: 'Baca begini: ambil bagian tertentu dari teks XML.' },
  WEBSERVICE: { exampleFormula: '=WEBSERVICE(alamat_url)', exampleMeaning: 'Baca begini: ambil data dari alamat_url.' },
  DETECTLANGUAGE: { exampleFormula: '=DETECTLANGUAGE(teks)', exampleMeaning: 'Baca begini: deteksi bahasa dari teks.' },
  TRANSLATE: { exampleFormula: '=TRANSLATE(teks; bahasa_asal; bahasa_tujuan)', exampleMeaning: 'Baca begini: terjemahkan teks dari bahasa_asal ke bahasa_tujuan.' },
  REGEXEXTRACT: { exampleFormula: '=REGEXEXTRACT(teks; pola_yang_dicari)', exampleMeaning: 'Baca begini: ambil bagian teks yang cocok dengan pola.' },
  REGEXREPLACE: { exampleFormula: '=REGEXREPLACE(teks; pola_yang_dicari; teks_pengganti)', exampleMeaning: 'Baca begini: cari bagian teks yang cocok pola, lalu ganti.' },
  REGEXTEST: { exampleFormula: '=REGEXTEST(teks; pola_yang_dicek)', exampleMeaning: 'Baca begini: cek apakah teks cocok dengan pola.' },
  LET: { exampleFormula: '=LET(nama_singkat; rumus_atau_nilai; hasil_akhir)', exampleMeaning: 'Baca begini: simpan bagian rumus dengan nama_singkat agar rumus lebih mudah dibaca.' },
  LAMBDA: { exampleFormula: '=LAMBDA(nama_input; rumus_yang_dijalankan)', exampleMeaning: 'Baca begini: buat function kecil sendiri dengan nama input dan rumus yang akan dijalankan.' }
};

const categoryFallback = (category = '') => humanCategoryCopy[category] || humanCategoryCopy['Advanced / Professional'];

export function isGenericFormat(format = '') {
  return /argument1\s*,\s*\[argument2\]/i.test(String(format || ''));
}


const withIdSeparator = (formula = '') => String(formula || '').replace(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/g, ';');

const exampleOverrides = Object.fromEntries(
  Object.entries(functionExamples).map(([name, item]) => [name, item.exampleFormula]).filter(([, example]) => Boolean(example))
);

const buildExampleFromFormat = (formula = {}, format = '') => {
  const name = formula.name || 'FORMULA';
  if (exampleOverrides[name]) return exampleOverrides[name];

  const open = String(format).indexOf('(');
  const close = String(format).lastIndexOf(')');
  if (open < 0 || close < open) return categoryFallback(formula.category || formula.displayCategory).sample;

  const rawArgs = String(format)
    .slice(open + 1, close)
    .split(',')
    .map((arg) => arg.trim())
    .filter(Boolean)
    .filter((arg) => !/^\.\.\.$/.test(arg))
    .slice(0, 6);

  const mapArg = (arg) => {
    const optional = /^\[.*\]$/.test(arg);
    const cleaned = String(arg).replace(/[\[\]]/g, '').replace(/\.\.\.$/, '').trim();
    const t = cleaned.toLowerCase();
    let label = cleaned.replace(/[^a-zA-Z0-9_]/g, '_') || 'input';

    if (/^argument\d*$/.test(t)) label = 'input_tambahan';
    else if (/^value\d*$/.test(t)) label = 'nilai';
    else if (/^ref\d*$/.test(t)) label = 'range_referensi';
    else if (/^options$/.test(t)) label = 'opsi_perhitungan';
    else if (/^procedure$/.test(t)) label = 'nama_prosedur';
    else if (/^places$/.test(t)) label = 'jumlah_digit';
    else if (/lookup_value/.test(t)) label = 'nilai_yang_dicari';
    else if (/lookup_array|lookup_vector/.test(t)) label = 'range_pencarian';
    else if (/return_array|result_vector/.test(t)) label = 'range_hasil';
    else if (/table_array|array|database|data_all|data_subset/.test(t)) label = 'tabel_atau_range_data';
    else if (/row_fields|col_fields/.test(t)) label = 'field_baris_atau_kolom';
    else if (/values|sum_range|max_range|min_range|average_range|known_y/.test(t)) label = 'range_angka';
    else if (/criteria_range/.test(t)) label = 'range_syarat';
    else if (/criteria|condition|logical|test/.test(t)) label = 'syarat';
    else if (/if_not_found/.test(t)) label = 'hasil_jika_tidak_ditemukan';
    else if (/value_if_true|true|value_true/.test(t)) label = 'hasil_jika_benar';
    else if (/value_if_false|false|value_false/.test(t)) label = 'hasil_jika_salah';
    else if (/old_text/.test(t)) label = 'teks_lama';
    else if (/new_text|replacement/.test(t)) label = 'teks_pengganti';
    else if (/text|within_text|find_text|pattern/.test(t)) label = 'teks_atau_pola';
    else if (/start_date|issue|settlement|date/.test(t)) label = 'tanggal_awal';
    else if (/end_date|maturity|target_date/.test(t)) label = 'tanggal_akhir';
    else if (/rate|yld|coupon|finance_rate|reinvest_rate/.test(t)) label = 'bunga_atau_rate';
    else if (/nper|period|per|life|frequency|size|trials|deg_freedom/.test(t)) label = 'jumlah_periode_atau_data';
    else if (/pv|principal|cost|investment|number|num|x|z|alpha|beta|probability|lambda|mean|standard_dev|sigma/.test(t)) label = 'angka_atau_parameter';
    else if (/col_index/.test(t)) label = 'nomor_kolom_hasil';
    else if (/row_index/.test(t)) label = 'nomor_baris_hasil';
    else if (/match_type|match_mode|search_mode|range_lookup|cumulative|type|basis|mode|order/.test(t)) label = 'mode_opsional';
    else if (/unit|from_unit|to_unit/.test(t)) label = 'satuan';

    return optional ? `[${label}]` : label;
  };

  const mapped = rawArgs.map(mapArg).filter(Boolean);
  if (!mapped.length) return `=${name}()`;
  return `=${name}(${mapped.join('; ')})`;
};


const buildExampleMeaning = (formula = {}) => {
  const name = formula.name || '';
  if (functionExamples[name]?.exampleMeaning) return functionExamples[name].exampleMeaning;
  if (['AND','OR','NOT','XOR'].includes(name)) return 'Pola ini lebih mudah dipahami jika dipakai di dalam IF, karena hasil akhirnya menjadi status, bukan TRUE/FALSE mentah.';
  if (['ISBLANK','ISNUMBER','ISTEXT','ISERROR','ISNA'].includes(name)) return 'Pola ini memakai fungsi pengecekan di dalam IF supaya hasilnya menjadi label yang mudah dibaca.';
  if (/IF$|IFS$/.test(name)) return 'Pola ini memakai syarat untuk menentukan hasil akhir.';
  if (formula.category === 'Lookup and Reference') return 'Pola ini mencari data dari tabel referensi. Isi bagian nilai, range pencarian, dan range hasil sesuai tabelmu.';
  if (formula.category === 'Text') return 'Pola ini mengolah teks. Ganti bagian teks, posisi, jumlah karakter, atau pemisah sesuai kebutuhan.';
  if (formula.category === 'Date and Time') return 'Pola ini mengolah tanggal atau waktu. Isi bagian tanggal, jumlah hari, bulan, atau satuan sesuai soal.';
  if (formula.category === 'Math and Trigonometry') return 'Pola ini menghitung angka. Ganti bagian angka atau range_angka sesuai data yang ingin dihitung.';
  if (formula.category === 'Statistical' || formula.category === 'Compatibility') return 'Pola ini memakai range atau parameter statistik. Isi parameternya sesuai urutan format rumus.';
  if (formula.category === 'Financial') return 'Pola ini memakai parameter keuangan. Urutan bunga, periode, pembayaran, dan nilai sangat berpengaruh.';
  if (formula.category === 'Dynamic Array') return 'Pola ini biasanya menghasilkan lebih dari satu cell. Isi tabel_data dan syarat proses sesuai output yang kamu mau.';
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
    beginnerTip: 'Jangan hafalin. Baca pola rumusnya, ganti placeholder dengan cell/range dari soal, lalu cek lagi urutannya.',
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
    auditStatus: formula.auditStatus || (generic ? 'needs-manual-format-check' : learning.auditStatus),
    auditNote: formula.auditNote || learning.auditNote,
    hasExercise: Boolean(formula.hasExercise)
  };
}

export function formatFunctionNameList(items = []) {
  return items.filter(Boolean).join(', ');
}
