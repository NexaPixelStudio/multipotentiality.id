import { formulaLearningContent } from './formulaLearningContent.js';
import { normalizeFormulaRecord } from './formulaAuditRules.js';

// Data katalog Formula Coach.
// Kategori dan nama function disiapkan sebagai data lokal supaya komponen UI tidak perlu diubah saat katalog di-update.

const baseFormulaCatalogFull = [
  {
    "id": "detectlanguage",
    "name": "DETECTLANGUAGE",
    "category": "Advanced / Professional",
    "displayCategory": "Advanced / Professional",
    "level": "Advanced",
    "description": "DETECTLANGUAGE dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "DETECTLANGUAGE(text)",
    "simpleLogic": "Baca format DETECTLANGUAGE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "advanced",
      "advanced-/-professional"
    ],
    "hasExercise": true
  },
  {
    "id": "groupby",
    "name": "GROUPBY",
    "category": "Advanced / Professional",
    "displayCategory": "Advanced / Professional",
    "level": "Advanced",
    "description": "GROUPBY dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "GROUPBY(row_fields, values, function, [field_headers], [total_depth], [sort_order], [filter_array], [field_relationship])",
    "simpleLogic": "Baca format GROUPBY dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "advanced",
      "advanced-/-professional"
    ],
    "hasExercise": true
  },
  {
    "id": "lambda",
    "name": "LAMBDA",
    "category": "Advanced / Professional",
    "displayCategory": "Advanced / Professional",
    "level": "Advanced",
    "description": "Membuat function custom langsung dari formula Excel.",
    "syntax": "LAMBDA([parameter1, parameter2, ...], calculation)",
    "simpleLogic": "Baca format LAMBDA dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "advanced",
      "advanced-/-professional",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "let",
    "name": "LET",
    "category": "Advanced / Professional",
    "displayCategory": "Advanced / Professional",
    "level": "Advanced",
    "description": "Menyimpan nilai sementara di dalam formula agar lebih rapi.",
    "syntax": "LET(name1, name_value1, calculation_or_name2, [name_value2], ...)",
    "simpleLogic": "Baca format LET dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "advanced",
      "advanced-/-professional",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "percentof",
    "name": "PERCENTOF",
    "category": "Advanced / Professional",
    "displayCategory": "Advanced / Professional",
    "level": "Advanced",
    "description": "PERCENTOF dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "PERCENTOF(data_subset, data_all)",
    "simpleLogic": "Baca format PERCENTOF dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "advanced",
      "advanced-/-professional"
    ],
    "hasExercise": true
  },
  {
    "id": "pivotby",
    "name": "PIVOTBY",
    "category": "Advanced / Professional",
    "displayCategory": "Advanced / Professional",
    "level": "Advanced",
    "description": "PIVOTBY dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "PIVOTBY(row_fields, col_fields, values, function, [field_headers], [row_total_depth], [row_sort_order], [col_total_depth], [col_sort_order], [filter_array], [relative_to])",
    "simpleLogic": "Baca format PIVOTBY dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "advanced",
      "advanced-/-professional"
    ],
    "hasExercise": true
  },
  {
    "id": "regexextract",
    "name": "REGEXEXTRACT",
    "category": "Advanced / Professional",
    "displayCategory": "Advanced / Professional",
    "level": "Advanced",
    "description": "REGEXEXTRACT dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "REGEXEXTRACT(text, pattern, [return_mode], [case_sensitivity])",
    "simpleLogic": "Baca format REGEXEXTRACT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "advanced",
      "advanced-/-professional"
    ],
    "hasExercise": true
  },
  {
    "id": "regexreplace",
    "name": "REGEXREPLACE",
    "category": "Advanced / Professional",
    "displayCategory": "Advanced / Professional",
    "level": "Advanced",
    "description": "REGEXREPLACE dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "REGEXREPLACE(text, pattern, replacement, [occurrence], [case_sensitivity])",
    "simpleLogic": "Baca format REGEXREPLACE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "advanced",
      "advanced-/-professional"
    ],
    "hasExercise": true
  },
  {
    "id": "regextest",
    "name": "REGEXTEST",
    "category": "Advanced / Professional",
    "displayCategory": "Advanced / Professional",
    "level": "Advanced",
    "description": "REGEXTEST dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "REGEXTEST(text, pattern, [case_sensitivity])",
    "simpleLogic": "Baca format REGEXTEST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "advanced",
      "advanced-/-professional"
    ],
    "hasExercise": true
  },
  {
    "id": "translate",
    "name": "TRANSLATE",
    "category": "Advanced / Professional",
    "displayCategory": "Advanced / Professional",
    "level": "Advanced",
    "description": "TRANSLATE dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "TRANSLATE(text, source_language, target_language)",
    "simpleLogic": "Baca format TRANSLATE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "advanced",
      "advanced-/-professional"
    ],
    "hasExercise": true
  },
  {
    "id": "average",
    "name": "AVERAGE",
    "category": "Statistical",
    "displayCategory": "Basic Calculation",
    "level": "Basic",
    "description": "Menghitung rata-rata angka.",
    "syntax": "AVERAGE(number1, [number2], ...)",
    "simpleLogic": "Baca format AVERAGE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "basic-calculation",
      "practice",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "count",
    "name": "COUNT",
    "category": "Statistical",
    "displayCategory": "Basic Calculation",
    "level": "Basic",
    "description": "Menghitung cell yang berisi angka.",
    "syntax": "COUNT(value1, [value2], ...)",
    "simpleLogic": "Baca format COUNT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai untuk menghitung jumlah data, data kosong, atau data berdasarkan kondisi.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "basic-calculation",
      "practice",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "counta",
    "name": "COUNTA",
    "category": "Statistical",
    "displayCategory": "Basic Calculation",
    "level": "Basic",
    "description": "Menghitung cell yang terisi, baik angka maupun teks.",
    "syntax": "COUNTA(value1, [value2], ...)",
    "simpleLogic": "Baca format COUNTA dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai untuk menghitung jumlah data, data kosong, atau data berdasarkan kondisi.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "basic-calculation",
      "practice",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "countblank",
    "name": "COUNTBLANK",
    "category": "Statistical",
    "displayCategory": "Basic Calculation",
    "level": "Basic",
    "description": "Menghitung cell kosong.",
    "syntax": "COUNTBLANK(range)",
    "simpleLogic": "Baca format COUNTBLANK dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai untuk menghitung jumlah data, data kosong, atau data berdasarkan kondisi.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "basic-calculation",
      "practice",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "large",
    "name": "LARGE",
    "category": "Statistical",
    "displayCategory": "Basic Calculation",
    "level": "Intermediate",
    "description": "LARGE dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "LARGE(array, k)",
    "simpleLogic": "Baca format LARGE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "basic-calculation",
      "practice",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "max",
    "name": "MAX",
    "category": "Statistical",
    "displayCategory": "Basic Calculation",
    "level": "Basic",
    "description": "MAX dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "MAX(number1, [number2], ...)",
    "simpleLogic": "Baca format MAX dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "basic-calculation",
      "practice",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "min",
    "name": "MIN",
    "category": "Statistical",
    "displayCategory": "Basic Calculation",
    "level": "Basic",
    "description": "MIN dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "MIN(number1, [number2], ...)",
    "simpleLogic": "Baca format MIN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "basic-calculation",
      "practice",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "small",
    "name": "SMALL",
    "category": "Statistical",
    "displayCategory": "Basic Calculation",
    "level": "Intermediate",
    "description": "SMALL dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "SMALL(array, k)",
    "simpleLogic": "Baca format SMALL dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "basic-calculation",
      "practice",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "sum",
    "name": "SUM",
    "category": "Math and Trigonometry",
    "displayCategory": "Basic Calculation",
    "level": "Basic",
    "description": "Menjumlahkan angka dalam range tertentu.",
    "syntax": "SUM(number1, [number2], ...)",
    "simpleLogic": "Kalau kamu punya beberapa angka dan ingin menjumlahkan semuanya, pakai SUM.",
    "useCase": "Dipakai untuk menghitung total penjualan, qty, nilai, atau angka lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "basic-calculation",
      "math",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "betadist",
    "name": "BETADIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "BETADIST adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "BETADIST(x, alpha, beta, [A], [B])",
    "simpleLogic": "Baca format BETADIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "betainv",
    "name": "BETAINV",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "BETAINV adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "BETAINV(probability, alpha, beta, [A], [B])",
    "simpleLogic": "Baca format BETAINV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "binomdist",
    "name": "BINOMDIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "BINOMDIST adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "BINOMDIST(number_s, trials, probability_s, cumulative)",
    "simpleLogic": "Baca format BINOMDIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "chidist",
    "name": "CHIDIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "CHIDIST adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "CHIDIST(x, deg_freedom)",
    "simpleLogic": "Baca format CHIDIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "chiinv",
    "name": "CHIINV",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "CHIINV adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "CHIINV(probability, deg_freedom)",
    "simpleLogic": "Baca format CHIINV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "chitest",
    "name": "CHITEST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "CHITEST adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "CHITEST(actual_range, expected_range)",
    "simpleLogic": "Baca format CHITEST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "confidence",
    "name": "CONFIDENCE",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "CONFIDENCE adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "CONFIDENCE(alpha, standard_dev, size)",
    "simpleLogic": "Baca format CONFIDENCE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "covar",
    "name": "COVAR",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "COVAR adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "COVAR(array1, array2)",
    "simpleLogic": "Baca format COVAR dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "critbinom",
    "name": "CRITBINOM",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "CRITBINOM adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "CRITBINOM(trials, probability_s, alpha)",
    "simpleLogic": "Baca format CRITBINOM dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "expondist",
    "name": "EXPONDIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "EXPONDIST adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "EXPONDIST(x, lambda, cumulative)",
    "simpleLogic": "Baca format EXPONDIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "fdist",
    "name": "FDIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "FDIST adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "FDIST(x, deg_freedom1, deg_freedom2)",
    "simpleLogic": "Baca format FDIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "finv",
    "name": "FINV",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "FINV adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "FINV(probability, deg_freedom1, deg_freedom2)",
    "simpleLogic": "Baca format FINV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "ftest",
    "name": "FTEST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "FTEST adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "FTEST(array1, array2)",
    "simpleLogic": "Baca format FTEST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "gammadist",
    "name": "GAMMADIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "GAMMADIST adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "GAMMADIST(x, alpha, beta, cumulative)",
    "simpleLogic": "Baca format GAMMADIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "gammainv",
    "name": "GAMMAINV",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "GAMMAINV adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "GAMMAINV(probability, alpha, beta)",
    "simpleLogic": "Baca format GAMMAINV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "hypgeomdist",
    "name": "HYPGEOMDIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "HYPGEOMDIST adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "HYPGEOMDIST(sample_s, number_sample, population_s, number_pop)",
    "simpleLogic": "Baca format HYPGEOMDIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "loginv",
    "name": "LOGINV",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "LOGINV adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "LOGINV(probability, mean, standard_dev)",
    "simpleLogic": "Baca format LOGINV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "lognormdist",
    "name": "LOGNORMDIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "LOGNORMDIST adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "LOGNORMDIST(x, mean, standard_dev)",
    "simpleLogic": "Baca format LOGNORMDIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "mode",
    "name": "MODE",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Intermediate",
    "description": "MODE adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "MODE(number1, [number2], ...)",
    "simpleLogic": "Baca format MODE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "negbinomdist",
    "name": "NEGBINOMDIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "NEGBINOMDIST adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "NEGBINOMDIST(number_f, number_s, probability_s)",
    "simpleLogic": "Baca format NEGBINOMDIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "normdist",
    "name": "NORMDIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "NORMDIST adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "NORMDIST(x, mean, standard_dev, cumulative)",
    "simpleLogic": "Baca format NORMDIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "norminv",
    "name": "NORMINV",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "NORMINV adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "NORMINV(probability, mean, standard_dev)",
    "simpleLogic": "Baca format NORMINV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "normsdist",
    "name": "NORMSDIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "NORMSDIST adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "NORMSDIST(z)",
    "simpleLogic": "Baca format NORMSDIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "normsinv",
    "name": "NORMSINV",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "NORMSINV adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "NORMSINV(probability)",
    "simpleLogic": "Baca format NORMSINV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "percentile",
    "name": "PERCENTILE",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Advanced",
    "description": "PERCENTILE adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "PERCENTILE(array, k)",
    "simpleLogic": "Baca format PERCENTILE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "percentrank",
    "name": "PERCENTRANK",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "PERCENTRANK adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "PERCENTRANK(array, x, [significance])",
    "simpleLogic": "Baca format PERCENTRANK dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "poisson",
    "name": "POISSON",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "POISSON adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "POISSON(x, mean, cumulative)",
    "simpleLogic": "Baca format POISSON dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "quartile",
    "name": "QUARTILE",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Advanced",
    "description": "QUARTILE adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "QUARTILE(array, quart)",
    "simpleLogic": "Baca format QUARTILE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "rank",
    "name": "RANK",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Advanced",
    "description": "RANK adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "RANK(number, ref, [order])",
    "simpleLogic": "Baca format RANK dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "stdev",
    "name": "STDEV",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "STDEV adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "STDEV(number1, [number2], ...)",
    "simpleLogic": "Baca format STDEV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "stdevp",
    "name": "STDEVP",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "STDEVP adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "STDEVP(number1, [number2], ...)",
    "simpleLogic": "Baca format STDEVP dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "tdist",
    "name": "TDIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "TDIST adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "TDIST(x, deg_freedom, tails)",
    "simpleLogic": "Baca format TDIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "tinv",
    "name": "TINV",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "TINV adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "TINV(probability, deg_freedom)",
    "simpleLogic": "Baca format TINV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "ttest",
    "name": "TTEST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "TTEST adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "TTEST(array1, array2, tails, type)",
    "simpleLogic": "Baca format TTEST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "var",
    "name": "VAR",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "VAR adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "VAR(number1, [number2], ...)",
    "simpleLogic": "Baca format VAR dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "varp",
    "name": "VARP",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "VARP adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "VARP(number1, [number2], ...)",
    "simpleLogic": "Baca format VARP dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "weibull",
    "name": "WEIBULL",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "WEIBULL adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "WEIBULL(x, alpha, beta, cumulative)",
    "simpleLogic": "Baca format WEIBULL dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "ztest",
    "name": "ZTEST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "ZTEST adalah rumus lama Excel yang masih dipakai supaya file lama tetap bisa dibuka dan dihitung.",
    "syntax": "ZTEST(array, x, [sigma])",
    "simpleLogic": "Baca format ZTEST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": true
  },
  {
    "id": "averageif",
    "name": "AVERAGEIF",
    "category": "Statistical",
    "displayCategory": "Conditional Calculation",
    "level": "Intermediate",
    "description": "Menghitung rata-rata berdasarkan satu syarat.",
    "syntax": "AVERAGEIF(range, criteria, [average_range])",
    "simpleLogic": "Cek syarat dulu, baru hitung angka yang barisnya memenuhi syarat.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "conditional-calculation",
      "practice",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "averageifs",
    "name": "AVERAGEIFS",
    "category": "Statistical",
    "displayCategory": "Conditional Calculation",
    "level": "Intermediate",
    "description": "Menghitung rata-rata berdasarkan banyak syarat.",
    "syntax": "AVERAGEIFS(average_range, criteria_range1, criteria1, [criteria_range2], [criteria2], ...)",
    "simpleLogic": "Pakai beberapa syarat sekaligus. Baris dihitung kalau semua syarat terpenuhi.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "conditional-calculation",
      "practice",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "countif",
    "name": "COUNTIF",
    "category": "Statistical",
    "displayCategory": "Conditional Calculation",
    "level": "Intermediate",
    "description": "Menghitung data berdasarkan satu kriteria.",
    "syntax": "COUNTIF(range, criteria)",
    "simpleLogic": "Hitung isi range, tapi hanya yang cocok dengan satu kriteria.",
    "useCase": "Dipakai untuk menghitung jumlah data, data kosong, atau data berdasarkan kondisi.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "conditional-calculation",
      "practice",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "countifs",
    "name": "COUNTIFS",
    "category": "Statistical",
    "displayCategory": "Conditional Calculation",
    "level": "Intermediate",
    "description": "Menghitung data berdasarkan banyak kriteria.",
    "syntax": "COUNTIFS(criteria_range1, criteria1, [criteria_range2], [criteria2], ...)",
    "simpleLogic": "Pakai beberapa syarat sekaligus. Baris dihitung kalau semua syarat terpenuhi.",
    "useCase": "Dipakai untuk menghitung jumlah data, data kosong, atau data berdasarkan kondisi.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "conditional-calculation",
      "practice",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "maxifs",
    "name": "MAXIFS",
    "category": "Statistical",
    "displayCategory": "Conditional Calculation",
    "level": "Intermediate",
    "description": "MAXIFS dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "MAXIFS(max_range, criteria_range1, criteria1, [criteria_range2], [criteria2], ...)",
    "simpleLogic": "Baca format MAXIFS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "conditional-calculation",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "minifs",
    "name": "MINIFS",
    "category": "Statistical",
    "displayCategory": "Conditional Calculation",
    "level": "Intermediate",
    "description": "MINIFS dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "MINIFS(min_range, criteria_range1, criteria1, [criteria_range2], [criteria2], ...)",
    "simpleLogic": "Baca format MINIFS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "conditional-calculation",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "sumif",
    "name": "SUMIF",
    "category": "Math and Trigonometry",
    "displayCategory": "Conditional Calculation",
    "level": "Intermediate",
    "description": "Menjumlahkan angka yang memenuhi satu syarat.",
    "syntax": "SUMIF(range, criteria, [sum_range])",
    "simpleLogic": "Cek syarat dulu, baru hitung angka yang barisnya memenuhi syarat.",
    "useCase": "Dipakai untuk menghitung total penjualan, qty, nilai, atau angka lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "conditional-calculation",
      "math",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "sumifs",
    "name": "SUMIFS",
    "category": "Math and Trigonometry",
    "displayCategory": "Conditional Calculation",
    "level": "Intermediate",
    "description": "Menjumlahkan angka yang memenuhi banyak syarat.",
    "syntax": "SUMIFS(sum_range, criteria_range1, criteria1, ...)",
    "simpleLogic": "Pakai beberapa syarat sekaligus. Baris dihitung kalau semua syarat terpenuhi.",
    "useCase": "Dipakai untuk menghitung total penjualan, qty, nilai, atau angka lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "conditional-calculation",
      "math",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "daverage",
    "name": "DAVERAGE",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DAVERAGE.",
    "syntax": "DAVERAGE(database, field, criteria)",
    "simpleLogic": "Baca format DAVERAGE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": true
  },
  {
    "id": "dcount",
    "name": "DCOUNT",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DCOUNT.",
    "syntax": "DCOUNT(database, field, criteria)",
    "simpleLogic": "Baca format DCOUNT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": true
  },
  {
    "id": "dcounta",
    "name": "DCOUNTA",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DCOUNTA.",
    "syntax": "DCOUNTA(database, field, criteria)",
    "simpleLogic": "Baca format DCOUNTA dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": true
  },
  {
    "id": "dget",
    "name": "DGET",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DGET.",
    "syntax": "DGET(database, field, criteria)",
    "simpleLogic": "Baca format DGET dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": true
  },
  {
    "id": "dmax",
    "name": "DMAX",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DMAX.",
    "syntax": "DMAX(database, field, criteria)",
    "simpleLogic": "Baca format DMAX dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": true
  },
  {
    "id": "dmin",
    "name": "DMIN",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DMIN.",
    "syntax": "DMIN(database, field, criteria)",
    "simpleLogic": "Baca format DMIN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": true
  },
  {
    "id": "dproduct",
    "name": "DPRODUCT",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DPRODUCT.",
    "syntax": "DPRODUCT(database, field, criteria)",
    "simpleLogic": "Baca format DPRODUCT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": true
  },
  {
    "id": "dstdev",
    "name": "DSTDEV",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DSTDEV.",
    "syntax": "DSTDEV(database, field, criteria)",
    "simpleLogic": "Baca format DSTDEV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": true
  },
  {
    "id": "dstdevp",
    "name": "DSTDEVP",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DSTDEVP.",
    "syntax": "DSTDEVP(database, field, criteria)",
    "simpleLogic": "Baca format DSTDEVP dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": true
  },
  {
    "id": "dsum",
    "name": "DSUM",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DSUM.",
    "syntax": "DSUM(database, field, criteria)",
    "simpleLogic": "Baca format DSUM dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": true
  },
  {
    "id": "dvar",
    "name": "DVAR",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DVAR.",
    "syntax": "DVAR(database, field, criteria)",
    "simpleLogic": "Baca format DVAR dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": true
  },
  {
    "id": "dvarp",
    "name": "DVARP",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DVARP.",
    "syntax": "DVARP(database, field, criteria)",
    "simpleLogic": "Baca format DVARP dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": true
  },
  {
    "id": "date",
    "name": "DATE",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Basic",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi DATE.",
    "syntax": "DATE(year, month, day)",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "practice",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "datedif",
    "name": "DATEDIF",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi DATEDIF.",
    "syntax": "DATEDIF(start_date, end_date, unit)",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "practice",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "datevalue",
    "name": "DATEVALUE",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi DATEVALUE.",
    "syntax": "DATEVALUE(date_text)",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "day",
    "name": "DAY",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Basic",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi DAY.",
    "syntax": "DAY(serial_number)",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "practice",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "days",
    "name": "DAYS",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi DAYS.",
    "syntax": "DAYS(end_date, start_date)",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "practice",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "days360",
    "name": "DAYS360",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi DAYS360.",
    "syntax": "DAYS360(serial_number)",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "edate",
    "name": "EDATE",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi EDATE.",
    "syntax": "EDATE(start_date, months)",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "practice",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "eomonth",
    "name": "EOMONTH",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi EOMONTH.",
    "syntax": "EOMONTH(start_date, months)",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "practice",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "hour",
    "name": "HOUR",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi HOUR.",
    "syntax": "HOUR(serial_number)",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "practice",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "isoweeknum",
    "name": "ISOWEEKNUM",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi ISOWEEKNUM.",
    "syntax": "ISOWEEKNUM(serial_number)",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "minute",
    "name": "MINUTE",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi MINUTE.",
    "syntax": "MINUTE(serial_number)",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "practice",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "month",
    "name": "MONTH",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Basic",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi MONTH.",
    "syntax": "MONTH(serial_number)",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "practice",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "networkdays",
    "name": "NETWORKDAYS",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi NETWORKDAYS.",
    "syntax": "NETWORKDAYS(start_date, end_date, [holidays])",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "practice",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "networkdays_intl",
    "name": "NETWORKDAYS.INTL",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi NETWORKDAYS.INTL.",
    "syntax": "NETWORKDAYS.INTL(start_date, end_date, [weekend], [holidays])",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "practice",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "now",
    "name": "NOW",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Basic",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi NOW.",
    "syntax": "NOW()",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "practice",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "second",
    "name": "SECOND",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi SECOND.",
    "syntax": "SECOND(serial_number)",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "practice",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "time",
    "name": "TIME",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi TIME.",
    "syntax": "TIME(hour, minute, second)",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "practice",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "timevalue",
    "name": "TIMEVALUE",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi TIMEVALUE.",
    "syntax": "TIMEVALUE(serial_number)",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "today",
    "name": "TODAY",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Basic",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi TODAY.",
    "syntax": "TODAY()",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "practice",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "weekday",
    "name": "WEEKDAY",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi WEEKDAY.",
    "syntax": "WEEKDAY(serial_number)",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "weeknum",
    "name": "WEEKNUM",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi WEEKNUM.",
    "syntax": "WEEKNUM(serial_number)",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "workday",
    "name": "WORKDAY",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi WORKDAY.",
    "syntax": "WORKDAY(start_date, days, [holidays])",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "practice",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "workday_intl",
    "name": "WORKDAY.INTL",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi WORKDAY.INTL.",
    "syntax": "WORKDAY.INTL(start_date, days, [weekend], [holidays])",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "practice",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "year",
    "name": "YEAR",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Basic",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi YEAR.",
    "syntax": "YEAR(serial_number)",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "practice",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "yearfrac",
    "name": "YEARFRAC",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi YEARFRAC.",
    "syntax": "YEARFRAC(serial_number)",
    "simpleLogic": "Tanggal di Excel adalah angka seri. Rumus ini membantu mengambil bagian tanggal atau menghitung jarak waktunya.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "date",
      "date-and-time",
      "time"
    ],
    "hasExercise": true
  },
  {
    "id": "bycol",
    "name": "BYCOL",
    "category": "Dynamic Array",
    "displayCategory": "Dynamic Array",
    "level": "Advanced",
    "description": "BYCOL dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "BYCOL(array, lambda(column))",
    "simpleLogic": "Baca format BYCOL dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "byrow",
    "name": "BYROW",
    "category": "Dynamic Array",
    "displayCategory": "Dynamic Array",
    "level": "Advanced",
    "description": "BYROW dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "BYROW(array, lambda(row))",
    "simpleLogic": "Baca format BYROW dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "choosecols",
    "name": "CHOOSECOLS",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai CHOOSECOLS.",
    "syntax": "CHOOSECOLS(array, col_num1, [col_num2], ...)",
    "simpleLogic": "Baca format CHOOSECOLS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "lookup",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "chooserows",
    "name": "CHOOSEROWS",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai CHOOSEROWS.",
    "syntax": "CHOOSEROWS(array, row_num1, [row_num2], ...)",
    "simpleLogic": "Baca format CHOOSEROWS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "lookup",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "drop",
    "name": "DROP",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai DROP.",
    "syntax": "DROP(array, rows, [columns])",
    "simpleLogic": "Baca format DROP dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "lookup",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "expand",
    "name": "EXPAND",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai EXPAND.",
    "syntax": "EXPAND(array, rows, [columns], [pad_with])",
    "simpleLogic": "Baca format EXPAND dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "lookup",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "filter",
    "name": "FILTER",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Menyaring data yang memenuhi kondisi.",
    "syntax": "FILTER(array, include, [if_empty])",
    "simpleLogic": "Baca format FILTER dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "lookup",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "hstack",
    "name": "HSTACK",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai HSTACK.",
    "syntax": "HSTACK(array1, [array2], ...)",
    "simpleLogic": "Baca format HSTACK dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "lookup",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "makearray",
    "name": "MAKEARRAY",
    "category": "Dynamic Array",
    "displayCategory": "Dynamic Array",
    "level": "Advanced",
    "description": "MAKEARRAY dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "MAKEARRAY(rows, cols, lambda(row, col))",
    "simpleLogic": "Baca format MAKEARRAY dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "map",
    "name": "MAP",
    "category": "Dynamic Array",
    "displayCategory": "Dynamic Array",
    "level": "Advanced",
    "description": "MAP dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "MAP(array1, lambda_or_array2, [lambda])",
    "simpleLogic": "Baca format MAP dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "randarray",
    "name": "RANDARRAY",
    "category": "Math and Trigonometry",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi RANDARRAY.",
    "syntax": "RANDARRAY(value)",
    "simpleLogic": "Baca format RANDARRAY dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "math"
    ],
    "hasExercise": true
  },
  {
    "id": "reduce",
    "name": "REDUCE",
    "category": "Dynamic Array",
    "displayCategory": "Dynamic Array",
    "level": "Advanced",
    "description": "REDUCE dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "REDUCE([initial_value], array, lambda)",
    "simpleLogic": "Baca format REDUCE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "scan",
    "name": "SCAN",
    "category": "Dynamic Array",
    "displayCategory": "Dynamic Array",
    "level": "Advanced",
    "description": "SCAN dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "SCAN([initial_value], array, lambda)",
    "simpleLogic": "Baca format SCAN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "sequence",
    "name": "SEQUENCE",
    "category": "Math and Trigonometry",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SEQUENCE.",
    "syntax": "SEQUENCE(value)",
    "simpleLogic": "Baca format SEQUENCE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "math"
    ],
    "hasExercise": true
  },
  {
    "id": "sort",
    "name": "SORT",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai SORT.",
    "syntax": "SORT(array, [sort_index], [sort_order], [by_col])",
    "simpleLogic": "Baca format SORT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "lookup",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "sortby",
    "name": "SORTBY",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai SORTBY.",
    "syntax": "SORTBY(array, by_array1, [sort_order1], ...)",
    "simpleLogic": "Baca format SORTBY dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "lookup",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "take",
    "name": "TAKE",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai TAKE.",
    "syntax": "TAKE(array, rows, [columns])",
    "simpleLogic": "Baca format TAKE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "lookup",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "textsplit",
    "name": "TEXTSPLIT",
    "category": "Text",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi TEXTSPLIT.",
    "syntax": "TEXTSPLIT(text, col_delimiter, [row_delimiter])",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "dynamic-array",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "tocol",
    "name": "TOCOL",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai TOCOL.",
    "syntax": "TOCOL(reference)",
    "simpleLogic": "Baca format TOCOL dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "lookup",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "torow",
    "name": "TOROW",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai TOROW.",
    "syntax": "TOROW(reference)",
    "simpleLogic": "Baca format TOROW dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "lookup",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "transpose",
    "name": "TRANSPOSE",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai TRANSPOSE.",
    "syntax": "TRANSPOSE(array)",
    "simpleLogic": "Baca format TRANSPOSE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "lookup",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "unique",
    "name": "UNIQUE",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mengambil daftar unik tanpa duplikat.",
    "syntax": "UNIQUE(array, [by_col], [exactly_once])",
    "simpleLogic": "Baca format UNIQUE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "lookup",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "vstack",
    "name": "VSTACK",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai VSTACK.",
    "syntax": "VSTACK(array1, [array2], ...)",
    "simpleLogic": "Baca format VSTACK dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "lookup",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "wrapcols",
    "name": "WRAPCOLS",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai WRAPCOLS.",
    "syntax": "WRAPCOLS(reference)",
    "simpleLogic": "Baca format WRAPCOLS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "lookup",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "wraprows",
    "name": "WRAPROWS",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai WRAPROWS.",
    "syntax": "WRAPROWS(reference)",
    "simpleLogic": "Baca format WRAPROWS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "lookup",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "xlookup",
    "name": "XLOOKUP",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari data lebih fleksibel dari VLOOKUP.",
    "syntax": "XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])",
    "simpleLogic": "Cari kunci data dulu, lalu ambil nilai yang sejajar dengan kunci tersebut.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "lookup",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "xmatch",
    "name": "XMATCH",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai XMATCH.",
    "syntax": "XMATCH(lookup_value, lookup_array, [match_mode], [search_mode])",
    "simpleLogic": "Cari kunci data dulu, lalu ambil nilai yang sejajar dengan kunci tersebut.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "dynamic-array",
      "lookup",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "besseli",
    "name": "BESSELI",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BESSELI.",
    "syntax": "BESSELI(x, n)",
    "simpleLogic": "Baca format BESSELI dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "besselj",
    "name": "BESSELJ",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BESSELJ.",
    "syntax": "BESSELJ(number)",
    "simpleLogic": "Baca format BESSELJ dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "besselk",
    "name": "BESSELK",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BESSELK.",
    "syntax": "BESSELK(number)",
    "simpleLogic": "Baca format BESSELK dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "bessely",
    "name": "BESSELY",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BESSELY.",
    "syntax": "BESSELY(number)",
    "simpleLogic": "Baca format BESSELY dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "bin2dec",
    "name": "BIN2DEC",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BIN2DEC.",
    "syntax": "BIN2DEC(number)",
    "simpleLogic": "Baca format BIN2DEC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "bin2hex",
    "name": "BIN2HEX",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BIN2HEX.",
    "syntax": "BIN2HEX(number)",
    "simpleLogic": "Baca format BIN2HEX dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "bin2oct",
    "name": "BIN2OCT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BIN2OCT.",
    "syntax": "BIN2OCT(number)",
    "simpleLogic": "Baca format BIN2OCT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "bitand",
    "name": "BITAND",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BITAND.",
    "syntax": "BITAND(number)",
    "simpleLogic": "Baca format BITAND dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "bitlshift",
    "name": "BITLSHIFT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BITLSHIFT.",
    "syntax": "BITLSHIFT(number)",
    "simpleLogic": "Baca format BITLSHIFT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "bitor",
    "name": "BITOR",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BITOR.",
    "syntax": "BITOR(number)",
    "simpleLogic": "Baca format BITOR dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "bitrshift",
    "name": "BITRSHIFT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BITRSHIFT.",
    "syntax": "BITRSHIFT(number)",
    "simpleLogic": "Baca format BITRSHIFT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "bitxor",
    "name": "BITXOR",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BITXOR.",
    "syntax": "BITXOR(number)",
    "simpleLogic": "Baca format BITXOR dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "complex",
    "name": "COMPLEX",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi COMPLEX.",
    "syntax": "COMPLEX(number)",
    "simpleLogic": "Baca format COMPLEX dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "convert",
    "name": "CONVERT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi CONVERT.",
    "syntax": "CONVERT(number)",
    "simpleLogic": "Baca format CONVERT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "dec2bin",
    "name": "DEC2BIN",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi DEC2BIN.",
    "syntax": "DEC2BIN(number)",
    "simpleLogic": "Baca format DEC2BIN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "dec2hex",
    "name": "DEC2HEX",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi DEC2HEX.",
    "syntax": "DEC2HEX(number)",
    "simpleLogic": "Baca format DEC2HEX dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "dec2oct",
    "name": "DEC2OCT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi DEC2OCT.",
    "syntax": "DEC2OCT(number)",
    "simpleLogic": "Baca format DEC2OCT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "delta",
    "name": "DELTA",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi DELTA.",
    "syntax": "DELTA(number)",
    "simpleLogic": "Baca format DELTA dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "erf",
    "name": "ERF",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi ERF.",
    "syntax": "ERF(number)",
    "simpleLogic": "Baca format ERF dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "erf_precise",
    "name": "ERF.PRECISE",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi ERF.PRECISE.",
    "syntax": "ERF.PRECISE(number)",
    "simpleLogic": "Baca format ERF.PRECISE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "erfc",
    "name": "ERFC",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi ERFC.",
    "syntax": "ERFC(number)",
    "simpleLogic": "Baca format ERFC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "erfc_precise",
    "name": "ERFC.PRECISE",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi ERFC.PRECISE.",
    "syntax": "ERFC.PRECISE(number)",
    "simpleLogic": "Baca format ERFC.PRECISE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "gestep",
    "name": "GESTEP",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi GESTEP.",
    "syntax": "GESTEP(number)",
    "simpleLogic": "Baca format GESTEP dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "hex2bin",
    "name": "HEX2BIN",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi HEX2BIN.",
    "syntax": "HEX2BIN(number)",
    "simpleLogic": "Baca format HEX2BIN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "hex2dec",
    "name": "HEX2DEC",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi HEX2DEC.",
    "syntax": "HEX2DEC(number)",
    "simpleLogic": "Baca format HEX2DEC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "hex2oct",
    "name": "HEX2OCT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi HEX2OCT.",
    "syntax": "HEX2OCT(number)",
    "simpleLogic": "Baca format HEX2OCT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imabs",
    "name": "IMABS",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMABS.",
    "syntax": "IMABS(number)",
    "simpleLogic": "Baca format IMABS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imaginary",
    "name": "IMAGINARY",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMAGINARY.",
    "syntax": "IMAGINARY(number)",
    "simpleLogic": "Baca format IMAGINARY dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imargument",
    "name": "IMARGUMENT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMARGUMENT.",
    "syntax": "IMARGUMENT(number)",
    "simpleLogic": "Baca format IMARGUMENT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imconjugate",
    "name": "IMCONJUGATE",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMCONJUGATE.",
    "syntax": "IMCONJUGATE(number)",
    "simpleLogic": "Baca format IMCONJUGATE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imcos",
    "name": "IMCOS",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMCOS.",
    "syntax": "IMCOS(number)",
    "simpleLogic": "Baca format IMCOS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imcosh",
    "name": "IMCOSH",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMCOSH.",
    "syntax": "IMCOSH(number)",
    "simpleLogic": "Baca format IMCOSH dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imcot",
    "name": "IMCOT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMCOT.",
    "syntax": "IMCOT(number)",
    "simpleLogic": "Baca format IMCOT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imcsc",
    "name": "IMCSC",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMCSC.",
    "syntax": "IMCSC(number)",
    "simpleLogic": "Baca format IMCSC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imcsch",
    "name": "IMCSCH",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMCSCH.",
    "syntax": "IMCSCH(number)",
    "simpleLogic": "Baca format IMCSCH dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imdiv",
    "name": "IMDIV",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMDIV.",
    "syntax": "IMDIV(number)",
    "simpleLogic": "Baca format IMDIV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imexp",
    "name": "IMEXP",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMEXP.",
    "syntax": "IMEXP(number)",
    "simpleLogic": "Baca format IMEXP dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imln",
    "name": "IMLN",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMLN.",
    "syntax": "IMLN(number)",
    "simpleLogic": "Baca format IMLN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imlog10",
    "name": "IMLOG10",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMLOG10.",
    "syntax": "IMLOG10(number)",
    "simpleLogic": "Baca format IMLOG10 dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imlog2",
    "name": "IMLOG2",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMLOG2.",
    "syntax": "IMLOG2(number)",
    "simpleLogic": "Baca format IMLOG2 dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "impower",
    "name": "IMPOWER",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMPOWER.",
    "syntax": "IMPOWER(number)",
    "simpleLogic": "Baca format IMPOWER dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "improduct",
    "name": "IMPRODUCT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMPRODUCT.",
    "syntax": "IMPRODUCT(number)",
    "simpleLogic": "Baca format IMPRODUCT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imreal",
    "name": "IMREAL",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMREAL.",
    "syntax": "IMREAL(number)",
    "simpleLogic": "Baca format IMREAL dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imsec",
    "name": "IMSEC",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSEC.",
    "syntax": "IMSEC(number)",
    "simpleLogic": "Baca format IMSEC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imsech",
    "name": "IMSECH",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSECH.",
    "syntax": "IMSECH(number)",
    "simpleLogic": "Baca format IMSECH dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imsin",
    "name": "IMSIN",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSIN.",
    "syntax": "IMSIN(number)",
    "simpleLogic": "Baca format IMSIN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imsinh",
    "name": "IMSINH",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSINH.",
    "syntax": "IMSINH(number)",
    "simpleLogic": "Baca format IMSINH dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imsqrt",
    "name": "IMSQRT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSQRT.",
    "syntax": "IMSQRT(number)",
    "simpleLogic": "Baca format IMSQRT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imsub",
    "name": "IMSUB",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSUB.",
    "syntax": "IMSUB(number)",
    "simpleLogic": "Baca format IMSUB dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imsum",
    "name": "IMSUM",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSUM.",
    "syntax": "IMSUM(number)",
    "simpleLogic": "Baca format IMSUM dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "imtan",
    "name": "IMTAN",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMTAN.",
    "syntax": "IMTAN(number)",
    "simpleLogic": "Baca format IMTAN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "oct2bin",
    "name": "OCT2BIN",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi OCT2BIN.",
    "syntax": "OCT2BIN(number)",
    "simpleLogic": "Baca format OCT2BIN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "oct2dec",
    "name": "OCT2DEC",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi OCT2DEC.",
    "syntax": "OCT2DEC(number)",
    "simpleLogic": "Baca format OCT2DEC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "oct2hex",
    "name": "OCT2HEX",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi OCT2HEX.",
    "syntax": "OCT2HEX(number)",
    "simpleLogic": "Baca format OCT2HEX dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": true
  },
  {
    "id": "accrint",
    "name": "ACCRINT",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi ACCRINT.",
    "syntax": "ACCRINT(issue, first_interest, settlement, rate, par, frequency, [basis], [calc_method])",
    "simpleLogic": "Baca format ACCRINT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "accrintm",
    "name": "ACCRINTM",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi ACCRINTM.",
    "syntax": "ACCRINTM(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format ACCRINTM dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "amordegrc",
    "name": "AMORDEGRC",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi AMORDEGRC.",
    "syntax": "AMORDEGRC(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format AMORDEGRC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "amorlinc",
    "name": "AMORLINC",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi AMORLINC.",
    "syntax": "AMORLINC(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format AMORLINC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "coupdaybs",
    "name": "COUPDAYBS",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi COUPDAYBS.",
    "syntax": "COUPDAYBS(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format COUPDAYBS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "coupdays",
    "name": "COUPDAYS",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi COUPDAYS.",
    "syntax": "COUPDAYS(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format COUPDAYS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "coupdaysnc",
    "name": "COUPDAYSNC",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi COUPDAYSNC.",
    "syntax": "COUPDAYSNC(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format COUPDAYSNC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "coupncd",
    "name": "COUPNCD",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi COUPNCD.",
    "syntax": "COUPNCD(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format COUPNCD dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "coupnum",
    "name": "COUPNUM",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi COUPNUM.",
    "syntax": "COUPNUM(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format COUPNUM dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "couppcd",
    "name": "COUPPCD",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi COUPPCD.",
    "syntax": "COUPPCD(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format COUPPCD dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "cumipmt",
    "name": "CUMIPMT",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi CUMIPMT.",
    "syntax": "CUMIPMT(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format CUMIPMT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "cumprinc",
    "name": "CUMPRINC",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi CUMPRINC.",
    "syntax": "CUMPRINC(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format CUMPRINC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "db",
    "name": "DB",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi DB.",
    "syntax": "DB(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format DB dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "ddb",
    "name": "DDB",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi DDB.",
    "syntax": "DDB(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format DDB dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "disc",
    "name": "DISC",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi DISC.",
    "syntax": "DISC(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format DISC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "dollarde",
    "name": "DOLLARDE",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi DOLLARDE.",
    "syntax": "DOLLARDE(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format DOLLARDE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "dollarfr",
    "name": "DOLLARFR",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi DOLLARFR.",
    "syntax": "DOLLARFR(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format DOLLARFR dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "duration",
    "name": "DURATION",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi DURATION.",
    "syntax": "DURATION(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format DURATION dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "effect",
    "name": "EFFECT",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi EFFECT.",
    "syntax": "EFFECT(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format EFFECT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "fv",
    "name": "FV",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi FV.",
    "syntax": "FV(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format FV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "fvschedule",
    "name": "FVSCHEDULE",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi FVSCHEDULE.",
    "syntax": "FVSCHEDULE(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format FVSCHEDULE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "intrate",
    "name": "INTRATE",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi INTRATE.",
    "syntax": "INTRATE(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format INTRATE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "ipmt",
    "name": "IPMT",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi IPMT.",
    "syntax": "IPMT(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format IPMT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "irr",
    "name": "IRR",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi IRR.",
    "syntax": "IRR(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format IRR dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "ispmt",
    "name": "ISPMT",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi ISPMT.",
    "syntax": "ISPMT(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format ISPMT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "mduration",
    "name": "MDURATION",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi MDURATION.",
    "syntax": "MDURATION(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format MDURATION dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "mirr",
    "name": "MIRR",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi MIRR.",
    "syntax": "MIRR(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format MIRR dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "nominal",
    "name": "NOMINAL",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi NOMINAL.",
    "syntax": "NOMINAL(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format NOMINAL dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "nper",
    "name": "NPER",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi NPER.",
    "syntax": "NPER(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format NPER dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "npv",
    "name": "NPV",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi NPV.",
    "syntax": "NPV(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format NPV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "oddfprice",
    "name": "ODDFPRICE",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi ODDFPRICE.",
    "syntax": "ODDFPRICE(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format ODDFPRICE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "oddfyield",
    "name": "ODDFYIELD",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi ODDFYIELD.",
    "syntax": "ODDFYIELD(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format ODDFYIELD dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "oddlprice",
    "name": "ODDLPRICE",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi ODDLPRICE.",
    "syntax": "ODDLPRICE(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format ODDLPRICE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "oddlyield",
    "name": "ODDLYIELD",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi ODDLYIELD.",
    "syntax": "ODDLYIELD(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format ODDLYIELD dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "pduration",
    "name": "PDURATION",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi PDURATION.",
    "syntax": "PDURATION(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format PDURATION dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "pmt",
    "name": "PMT",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi PMT.",
    "syntax": "PMT(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format PMT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "ppmt",
    "name": "PPMT",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi PPMT.",
    "syntax": "PPMT(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format PPMT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "price",
    "name": "PRICE",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi PRICE.",
    "syntax": "PRICE(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format PRICE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "pricedisc",
    "name": "PRICEDISC",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi PRICEDISC.",
    "syntax": "PRICEDISC(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format PRICEDISC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "pricemat",
    "name": "PRICEMAT",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi PRICEMAT.",
    "syntax": "PRICEMAT(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format PRICEMAT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "pv",
    "name": "PV",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi PV.",
    "syntax": "PV(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format PV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "rate",
    "name": "RATE",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi RATE.",
    "syntax": "RATE(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format RATE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "received",
    "name": "RECEIVED",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi RECEIVED.",
    "syntax": "RECEIVED(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format RECEIVED dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "rri",
    "name": "RRI",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi RRI.",
    "syntax": "RRI(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format RRI dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "sln",
    "name": "SLN",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi SLN.",
    "syntax": "SLN(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format SLN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "syd",
    "name": "SYD",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi SYD.",
    "syntax": "SYD(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format SYD dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "tbilleq",
    "name": "TBILLEQ",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi TBILLEQ.",
    "syntax": "TBILLEQ(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format TBILLEQ dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "tbillprice",
    "name": "TBILLPRICE",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi TBILLPRICE.",
    "syntax": "TBILLPRICE(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format TBILLPRICE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "tbillyield",
    "name": "TBILLYIELD",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi TBILLYIELD.",
    "syntax": "TBILLYIELD(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format TBILLYIELD dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "vdb",
    "name": "VDB",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi VDB.",
    "syntax": "VDB(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format VDB dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "xirr",
    "name": "XIRR",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi XIRR.",
    "syntax": "XIRR(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format XIRR dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "xnpv",
    "name": "XNPV",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi XNPV.",
    "syntax": "XNPV(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format XNPV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "yield",
    "name": "YIELD",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi YIELD.",
    "syntax": "YIELD(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format YIELD dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "yielddisc",
    "name": "YIELDDISC",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi YIELDDISC.",
    "syntax": "YIELDDISC(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format YIELDDISC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "yieldmat",
    "name": "YIELDMAT",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi YIELDMAT.",
    "syntax": "YIELDMAT(rate, nper, pv, [fv], [type])",
    "simpleLogic": "Baca format YIELDMAT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "finance",
      "financial"
    ],
    "hasExercise": true
  },
  {
    "id": "cell",
    "name": "CELL",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Advanced",
    "description": "Mengecek informasi cell, error, atau tipe data memakai CELL.",
    "syntax": "CELL(info_type, [reference])",
    "simpleLogic": "Baca format CELL dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "error_type",
    "name": "ERROR.TYPE",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Intermediate",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ERROR.TYPE.",
    "syntax": "ERROR.TYPE(error_val)",
    "simpleLogic": "Baca format ERROR.TYPE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information"
    ],
    "hasExercise": true
  },
  {
    "id": "info",
    "name": "INFO",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Intermediate",
    "description": "Mengecek informasi cell, error, atau tipe data memakai INFO.",
    "syntax": "INFO(value)",
    "simpleLogic": "Baca format INFO dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information"
    ],
    "hasExercise": true
  },
  {
    "id": "isblank",
    "name": "ISBLANK",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Basic",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISBLANK.",
    "syntax": "ISBLANK(value)",
    "simpleLogic": "Baca format ISBLANK dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "iserr",
    "name": "ISERR",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Intermediate",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISERR.",
    "syntax": "ISERR(value)",
    "simpleLogic": "Baca format ISERR dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information"
    ],
    "hasExercise": true
  },
  {
    "id": "iserror",
    "name": "ISERROR",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Basic",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISERROR.",
    "syntax": "ISERROR(value)",
    "simpleLogic": "Baca format ISERROR dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "iseven",
    "name": "ISEVEN",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Intermediate",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISEVEN.",
    "syntax": "ISEVEN(value)",
    "simpleLogic": "Baca format ISEVEN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information"
    ],
    "hasExercise": true
  },
  {
    "id": "isformula",
    "name": "ISFORMULA",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Intermediate",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISFORMULA.",
    "syntax": "ISFORMULA(reference)",
    "simpleLogic": "Baca format ISFORMULA dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "islogical",
    "name": "ISLOGICAL",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Intermediate",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISLOGICAL.",
    "syntax": "ISLOGICAL(value)",
    "simpleLogic": "Baca format ISLOGICAL dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information"
    ],
    "hasExercise": true
  },
  {
    "id": "isna",
    "name": "ISNA",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Basic",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISNA.",
    "syntax": "ISNA(value)",
    "simpleLogic": "Baca format ISNA dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "isnontext",
    "name": "ISNONTEXT",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Intermediate",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISNONTEXT.",
    "syntax": "ISNONTEXT(value)",
    "simpleLogic": "Baca format ISNONTEXT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information"
    ],
    "hasExercise": true
  },
  {
    "id": "isnumber",
    "name": "ISNUMBER",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Basic",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISNUMBER.",
    "syntax": "ISNUMBER(value)",
    "simpleLogic": "Baca format ISNUMBER dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "isodd",
    "name": "ISODD",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Intermediate",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISODD.",
    "syntax": "ISODD(value)",
    "simpleLogic": "Baca format ISODD dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information"
    ],
    "hasExercise": true
  },
  {
    "id": "isomitted",
    "name": "ISOMITTED",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Intermediate",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISOMITTED.",
    "syntax": "ISOMITTED(value)",
    "simpleLogic": "Baca format ISOMITTED dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information"
    ],
    "hasExercise": true
  },
  {
    "id": "isref",
    "name": "ISREF",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Intermediate",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISREF.",
    "syntax": "ISREF(value)",
    "simpleLogic": "Baca format ISREF dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information"
    ],
    "hasExercise": true
  },
  {
    "id": "istext",
    "name": "ISTEXT",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Basic",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISTEXT.",
    "syntax": "ISTEXT(value)",
    "simpleLogic": "Baca format ISTEXT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "n",
    "name": "N",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Advanced",
    "description": "Mengecek informasi cell, error, atau tipe data memakai N.",
    "syntax": "N(value)",
    "simpleLogic": "Baca format N dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "na",
    "name": "NA",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Intermediate",
    "description": "Mengecek informasi cell, error, atau tipe data memakai NA.",
    "syntax": "NA(value)",
    "simpleLogic": "Baca format NA dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information"
    ],
    "hasExercise": true
  },
  {
    "id": "sheet",
    "name": "SHEET",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Intermediate",
    "description": "Mengecek informasi cell, error, atau tipe data memakai SHEET.",
    "syntax": "SHEET(value)",
    "simpleLogic": "Baca format SHEET dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information"
    ],
    "hasExercise": true
  },
  {
    "id": "sheets",
    "name": "SHEETS",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Intermediate",
    "description": "Mengecek informasi cell, error, atau tipe data memakai SHEETS.",
    "syntax": "SHEETS(value)",
    "simpleLogic": "Baca format SHEETS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information"
    ],
    "hasExercise": true
  },
  {
    "id": "type",
    "name": "TYPE",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Advanced",
    "description": "Mengecek informasi cell, error, atau tipe data memakai TYPE.",
    "syntax": "TYPE(value)",
    "simpleLogic": "Baca format TYPE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "info",
      "information",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "and",
    "name": "AND",
    "category": "Logical",
    "displayCategory": "Logical",
    "level": "Basic",
    "description": "Membantu membuat logika keputusan menggunakan fungsi AND.",
    "syntax": "AND(logical1, [logical2], ...)",
    "simpleLogic": "Pikirkan seperti pertanyaan ya/tidak. Hasil logika menentukan langkah berikutnya.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "logic",
      "logical",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "false",
    "name": "FALSE",
    "category": "Logical",
    "displayCategory": "Logical",
    "level": "Basic",
    "description": "Membantu membuat logika keputusan menggunakan fungsi FALSE.",
    "syntax": "FALSE()",
    "simpleLogic": "Pikirkan seperti pertanyaan ya/tidak. Hasil logika menentukan langkah berikutnya.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "logic",
      "logical",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "if",
    "name": "IF",
    "category": "Logical",
    "displayCategory": "Logical",
    "level": "Basic",
    "description": "Membuat keputusan berdasarkan kondisi tertentu.",
    "syntax": "IF(logical_test, value_if_true, value_if_false)",
    "simpleLogic": "Kalau ada kondisi, tentukan hasil saat kondisi benar dan hasil saat kondisi salah.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "logic",
      "logical",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "iferror",
    "name": "IFERROR",
    "category": "Logical",
    "displayCategory": "Logical",
    "level": "Intermediate",
    "description": "Membantu membuat logika keputusan menggunakan fungsi IFERROR.",
    "syntax": "IFERROR(value, value_if_error)",
    "simpleLogic": "Pikirkan seperti pertanyaan ya/tidak. Hasil logika menentukan langkah berikutnya.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "logic",
      "logical",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "ifna",
    "name": "IFNA",
    "category": "Logical",
    "displayCategory": "Logical",
    "level": "Intermediate",
    "description": "Membantu membuat logika keputusan menggunakan fungsi IFNA.",
    "syntax": "IFNA(value, value_if_na)",
    "simpleLogic": "Pikirkan seperti pertanyaan ya/tidak. Hasil logika menentukan langkah berikutnya.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "logic",
      "logical",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "ifs",
    "name": "IFS",
    "category": "Logical",
    "displayCategory": "Logical",
    "level": "Intermediate",
    "description": "Menguji beberapa kondisi tanpa IF bertingkat panjang.",
    "syntax": "IFS(logical_test1, value_if_true1, ...)",
    "simpleLogic": "Pikirkan seperti pertanyaan ya/tidak. Hasil logika menentukan langkah berikutnya.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "logic",
      "logical",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "not",
    "name": "NOT",
    "category": "Logical",
    "displayCategory": "Logical",
    "level": "Basic",
    "description": "Membantu membuat logika keputusan menggunakan fungsi NOT.",
    "syntax": "NOT(logical)",
    "simpleLogic": "Pikirkan seperti pertanyaan ya/tidak. Hasil logika menentukan langkah berikutnya.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "logic",
      "logical",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "or",
    "name": "OR",
    "category": "Logical",
    "displayCategory": "Logical",
    "level": "Basic",
    "description": "Membantu membuat logika keputusan menggunakan fungsi OR.",
    "syntax": "OR(logical1, [logical2], ...)",
    "simpleLogic": "Pikirkan seperti pertanyaan ya/tidak. Hasil logika menentukan langkah berikutnya.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "logic",
      "logical",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "switch",
    "name": "SWITCH",
    "category": "Logical",
    "displayCategory": "Logical",
    "level": "Intermediate",
    "description": "Membantu membuat logika keputusan menggunakan fungsi SWITCH.",
    "syntax": "SWITCH(expression, value1, result1, [default_or_value2], [result2], ...)",
    "simpleLogic": "Pikirkan seperti pertanyaan ya/tidak. Hasil logika menentukan langkah berikutnya.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "logic",
      "logical",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "true",
    "name": "TRUE",
    "category": "Logical",
    "displayCategory": "Logical",
    "level": "Basic",
    "description": "Membantu membuat logika keputusan menggunakan fungsi TRUE.",
    "syntax": "TRUE()",
    "simpleLogic": "Pikirkan seperti pertanyaan ya/tidak. Hasil logika menentukan langkah berikutnya.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "logic",
      "logical",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "xor",
    "name": "XOR",
    "category": "Logical",
    "displayCategory": "Logical",
    "level": "Intermediate",
    "description": "Membantu membuat logika keputusan menggunakan fungsi XOR.",
    "syntax": "XOR(value)",
    "simpleLogic": "Pikirkan seperti pertanyaan ya/tidak. Hasil logika menentukan langkah berikutnya.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "logic",
      "logical"
    ],
    "hasExercise": true
  },
  {
    "id": "address",
    "name": "ADDRESS",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai ADDRESS.",
    "syntax": "ADDRESS(row_num, column_num, [abs_num], [a1], [sheet_text])",
    "simpleLogic": "Baca format ADDRESS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "areas",
    "name": "AREAS",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai AREAS.",
    "syntax": "AREAS(reference)",
    "simpleLogic": "Baca format AREAS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "choose",
    "name": "CHOOSE",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai CHOOSE.",
    "syntax": "CHOOSE(index_num, value1, [value2], ...)",
    "simpleLogic": "Baca format CHOOSE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "column",
    "name": "COLUMN",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Basic",
    "description": "Mencari, mengambil, atau membuat referensi data memakai COLUMN.",
    "syntax": "COLUMN([reference])",
    "simpleLogic": "Baca format COLUMN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "columns",
    "name": "COLUMNS",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Basic",
    "description": "Mencari, mengambil, atau membuat referensi data memakai COLUMNS.",
    "syntax": "COLUMNS(array)",
    "simpleLogic": "Baca format COLUMNS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "formulatext",
    "name": "FORMULATEXT",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Advanced",
    "description": "Mencari, mengambil, atau membuat referensi data memakai FORMULATEXT.",
    "syntax": "FORMULATEXT(reference)",
    "simpleLogic": "Baca format FORMULATEXT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "getpivotdata",
    "name": "GETPIVOTDATA",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai GETPIVOTDATA.",
    "syntax": "GETPIVOTDATA(reference)",
    "simpleLogic": "Baca format GETPIVOTDATA dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "hlookup",
    "name": "HLOOKUP",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai HLOOKUP.",
    "syntax": "HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])",
    "simpleLogic": "Cari kunci data dulu, lalu ambil nilai yang sejajar dengan kunci tersebut.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "hyperlink",
    "name": "HYPERLINK",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai HYPERLINK.",
    "syntax": "HYPERLINK(link_location, [friendly_name])",
    "simpleLogic": "Baca format HYPERLINK dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "image",
    "name": "IMAGE",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai IMAGE.",
    "syntax": "IMAGE(reference)",
    "simpleLogic": "Baca format IMAGE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "index",
    "name": "INDEX",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai INDEX.",
    "syntax": "INDEX(array, row_num, [column_num])",
    "simpleLogic": "Cari kunci data dulu, lalu ambil nilai yang sejajar dengan kunci tersebut.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "index_match",
    "name": "INDEX MATCH",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Advanced",
    "description": "Mengambil data dengan gabungan posisi baris dan kolom.",
    "syntax": "INDEX(return_range, MATCH(lookup_value, lookup_range, 0))",
    "simpleLogic": "Cari kunci data dulu, lalu ambil nilai yang sejajar dengan kunci tersebut.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "indirect",
    "name": "INDIRECT",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Advanced",
    "description": "Mencari, mengambil, atau membuat referensi data memakai INDIRECT.",
    "syntax": "INDIRECT(ref_text, [a1])",
    "simpleLogic": "Baca format INDIRECT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "lookup",
    "name": "LOOKUP",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai LOOKUP.",
    "syntax": "LOOKUP(lookup_value, lookup_vector, [result_vector])",
    "simpleLogic": "Cari kunci data dulu, lalu ambil nilai yang sejajar dengan kunci tersebut.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "match",
    "name": "MATCH",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai MATCH.",
    "syntax": "MATCH(lookup_value, lookup_array, [match_type])",
    "simpleLogic": "Cari kunci data dulu, lalu ambil nilai yang sejajar dengan kunci tersebut.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "offset",
    "name": "OFFSET",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Advanced",
    "description": "Mencari, mengambil, atau membuat referensi data memakai OFFSET.",
    "syntax": "OFFSET(reference, rows, cols, [height], [width])",
    "simpleLogic": "Baca format OFFSET dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "row",
    "name": "ROW",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Basic",
    "description": "Mencari, mengambil, atau membuat referensi data memakai ROW.",
    "syntax": "ROW([reference])",
    "simpleLogic": "Baca format ROW dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "rows",
    "name": "ROWS",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Basic",
    "description": "Mencari, mengambil, atau membuat referensi data memakai ROWS.",
    "syntax": "ROWS(array)",
    "simpleLogic": "Baca format ROWS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "rtd",
    "name": "RTD",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai RTD.",
    "syntax": "RTD(reference)",
    "simpleLogic": "Baca format RTD dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "vlookup",
    "name": "VLOOKUP",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Intermediate",
    "description": "Mencari data secara vertikal berdasarkan nilai kunci.",
    "syntax": "VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
    "simpleLogic": "Cari kunci data dulu, lalu ambil nilai yang sejajar dengan kunci tersebut.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "lookup",
      "lookup-and-reference",
      "practice",
      "reference"
    ],
    "hasExercise": true
  },
  {
    "id": "abs",
    "name": "ABS",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Basic",
    "description": "Melakukan perhitungan matematika memakai fungsi ABS.",
    "syntax": "ABS(number)",
    "simpleLogic": "Baca format ABS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "acos",
    "name": "ACOS",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ACOS.",
    "syntax": "ACOS(value)",
    "simpleLogic": "Baca format ACOS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "acosh",
    "name": "ACOSH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ACOSH.",
    "syntax": "ACOSH(value)",
    "simpleLogic": "Baca format ACOSH dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "acot",
    "name": "ACOT",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ACOT.",
    "syntax": "ACOT(value)",
    "simpleLogic": "Baca format ACOT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "acoth",
    "name": "ACOTH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ACOTH.",
    "syntax": "ACOTH(value)",
    "simpleLogic": "Baca format ACOTH dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "aggregate",
    "name": "AGGREGATE",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Advanced",
    "description": "Melakukan perhitungan matematika memakai fungsi AGGREGATE.",
    "syntax": "AGGREGATE(function_num, options, ref1, [ref2], ...)",
    "simpleLogic": "Baca format AGGREGATE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "arabic",
    "name": "ARABIC",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ARABIC.",
    "syntax": "ARABIC(value)",
    "simpleLogic": "Baca format ARABIC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "asin",
    "name": "ASIN",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ASIN.",
    "syntax": "ASIN(value)",
    "simpleLogic": "Baca format ASIN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "asinh",
    "name": "ASINH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ASINH.",
    "syntax": "ASINH(value)",
    "simpleLogic": "Baca format ASINH dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "atan",
    "name": "ATAN",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ATAN.",
    "syntax": "ATAN(value)",
    "simpleLogic": "Baca format ATAN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "atan2",
    "name": "ATAN2",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ATAN2.",
    "syntax": "ATAN2(value)",
    "simpleLogic": "Baca format ATAN2 dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "atanh",
    "name": "ATANH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ATANH.",
    "syntax": "ATANH(value)",
    "simpleLogic": "Baca format ATANH dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "base",
    "name": "BASE",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi BASE.",
    "syntax": "BASE(value)",
    "simpleLogic": "Baca format BASE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "ceiling",
    "name": "CEILING",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi CEILING.",
    "syntax": "CEILING(number, significance)",
    "simpleLogic": "Baca format CEILING dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "ceiling_math",
    "name": "CEILING.MATH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi CEILING.MATH.",
    "syntax": "CEILING.MATH(value)",
    "simpleLogic": "Baca format CEILING.MATH dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "ceiling_precise",
    "name": "CEILING.PRECISE",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi CEILING.PRECISE.",
    "syntax": "CEILING.PRECISE(value)",
    "simpleLogic": "Baca format CEILING.PRECISE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "combin",
    "name": "COMBIN",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi COMBIN.",
    "syntax": "COMBIN(value)",
    "simpleLogic": "Baca format COMBIN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "combina",
    "name": "COMBINA",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi COMBINA.",
    "syntax": "COMBINA(value)",
    "simpleLogic": "Baca format COMBINA dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "cos",
    "name": "COS",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi COS.",
    "syntax": "COS(value)",
    "simpleLogic": "Baca format COS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "cosh",
    "name": "COSH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi COSH.",
    "syntax": "COSH(value)",
    "simpleLogic": "Baca format COSH dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "cot",
    "name": "COT",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi COT.",
    "syntax": "COT(value)",
    "simpleLogic": "Baca format COT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "coth",
    "name": "COTH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi COTH.",
    "syntax": "COTH(value)",
    "simpleLogic": "Baca format COTH dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "csc",
    "name": "CSC",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi CSC.",
    "syntax": "CSC(value)",
    "simpleLogic": "Baca format CSC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "csch",
    "name": "CSCH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi CSCH.",
    "syntax": "CSCH(value)",
    "simpleLogic": "Baca format CSCH dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "decimal",
    "name": "DECIMAL",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi DECIMAL.",
    "syntax": "DECIMAL(value)",
    "simpleLogic": "Baca format DECIMAL dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "degrees",
    "name": "DEGREES",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi DEGREES.",
    "syntax": "DEGREES(value)",
    "simpleLogic": "Baca format DEGREES dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "even",
    "name": "EVEN",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi EVEN.",
    "syntax": "EVEN(value)",
    "simpleLogic": "Baca format EVEN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "exp",
    "name": "EXP",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi EXP.",
    "syntax": "EXP(value)",
    "simpleLogic": "Baca format EXP dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "fact",
    "name": "FACT",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi FACT.",
    "syntax": "FACT(value)",
    "simpleLogic": "Baca format FACT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "factdouble",
    "name": "FACTDOUBLE",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi FACTDOUBLE.",
    "syntax": "FACTDOUBLE(value)",
    "simpleLogic": "Baca format FACTDOUBLE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "floor",
    "name": "FLOOR",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi FLOOR.",
    "syntax": "FLOOR(number, significance)",
    "simpleLogic": "Baca format FLOOR dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "floor_math",
    "name": "FLOOR.MATH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi FLOOR.MATH.",
    "syntax": "FLOOR.MATH(value)",
    "simpleLogic": "Baca format FLOOR.MATH dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "floor_precise",
    "name": "FLOOR.PRECISE",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi FLOOR.PRECISE.",
    "syntax": "FLOOR.PRECISE(value)",
    "simpleLogic": "Baca format FLOOR.PRECISE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "gcd",
    "name": "GCD",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi GCD.",
    "syntax": "GCD(value)",
    "simpleLogic": "Baca format GCD dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "int",
    "name": "INT",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Basic",
    "description": "Melakukan perhitungan matematika memakai fungsi INT.",
    "syntax": "INT(number)",
    "simpleLogic": "Baca format INT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "iso_ceiling",
    "name": "ISO.CEILING",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ISO.CEILING.",
    "syntax": "ISO.CEILING(value)",
    "simpleLogic": "Baca format ISO.CEILING dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "lcm",
    "name": "LCM",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi LCM.",
    "syntax": "LCM(value)",
    "simpleLogic": "Baca format LCM dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "ln",
    "name": "LN",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi LN.",
    "syntax": "LN(value)",
    "simpleLogic": "Baca format LN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "log",
    "name": "LOG",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi LOG.",
    "syntax": "LOG(value)",
    "simpleLogic": "Baca format LOG dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "log10",
    "name": "LOG10",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi LOG10.",
    "syntax": "LOG10(value)",
    "simpleLogic": "Baca format LOG10 dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "mdeterm",
    "name": "MDETERM",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi MDETERM.",
    "syntax": "MDETERM(value)",
    "simpleLogic": "Baca format MDETERM dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "minverse",
    "name": "MINVERSE",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi MINVERSE.",
    "syntax": "MINVERSE(value)",
    "simpleLogic": "Baca format MINVERSE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "mmult",
    "name": "MMULT",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi MMULT.",
    "syntax": "MMULT(value)",
    "simpleLogic": "Baca format MMULT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "mod",
    "name": "MOD",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Basic",
    "description": "Melakukan perhitungan matematika memakai fungsi MOD.",
    "syntax": "MOD(number, divisor)",
    "simpleLogic": "Baca format MOD dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "mround",
    "name": "MROUND",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi MROUND.",
    "syntax": "MROUND(value)",
    "simpleLogic": "Baca format MROUND dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "multinomial",
    "name": "MULTINOMIAL",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi MULTINOMIAL.",
    "syntax": "MULTINOMIAL(value)",
    "simpleLogic": "Baca format MULTINOMIAL dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "munit",
    "name": "MUNIT",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi MUNIT.",
    "syntax": "MUNIT(value)",
    "simpleLogic": "Baca format MUNIT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "odd",
    "name": "ODD",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ODD.",
    "syntax": "ODD(value)",
    "simpleLogic": "Baca format ODD dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "pi",
    "name": "PI",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi PI.",
    "syntax": "PI(value)",
    "simpleLogic": "Baca format PI dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "power",
    "name": "POWER",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi POWER.",
    "syntax": "POWER(number, power)",
    "simpleLogic": "Baca format POWER dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "product",
    "name": "PRODUCT",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi PRODUCT.",
    "syntax": "PRODUCT(value)",
    "simpleLogic": "Baca format PRODUCT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "quotient",
    "name": "QUOTIENT",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi QUOTIENT.",
    "syntax": "QUOTIENT(value)",
    "simpleLogic": "Baca format QUOTIENT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "radians",
    "name": "RADIANS",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi RADIANS.",
    "syntax": "RADIANS(value)",
    "simpleLogic": "Baca format RADIANS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "rand",
    "name": "RAND",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi RAND.",
    "syntax": "RAND()",
    "simpleLogic": "Baca format RAND dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "randbetween",
    "name": "RANDBETWEEN",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi RANDBETWEEN.",
    "syntax": "RANDBETWEEN(bottom, top)",
    "simpleLogic": "Baca format RANDBETWEEN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "roman",
    "name": "ROMAN",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ROMAN.",
    "syntax": "ROMAN(value)",
    "simpleLogic": "Baca format ROMAN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "round",
    "name": "ROUND",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Basic",
    "description": "Melakukan perhitungan matematika memakai fungsi ROUND.",
    "syntax": "ROUND(number, num_digits)",
    "simpleLogic": "Baca format ROUND dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "rounddown",
    "name": "ROUNDDOWN",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ROUNDDOWN.",
    "syntax": "ROUNDDOWN(number, num_digits)",
    "simpleLogic": "Baca format ROUNDDOWN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "roundup",
    "name": "ROUNDUP",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ROUNDUP.",
    "syntax": "ROUNDUP(number, num_digits)",
    "simpleLogic": "Baca format ROUNDUP dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "sec",
    "name": "SEC",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SEC.",
    "syntax": "SEC(value)",
    "simpleLogic": "Baca format SEC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "sech",
    "name": "SECH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SECH.",
    "syntax": "SECH(value)",
    "simpleLogic": "Baca format SECH dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "seriessum",
    "name": "SERIESSUM",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SERIESSUM.",
    "syntax": "SERIESSUM(value)",
    "simpleLogic": "Baca format SERIESSUM dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "sign",
    "name": "SIGN",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SIGN.",
    "syntax": "SIGN(value)",
    "simpleLogic": "Baca format SIGN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "sin",
    "name": "SIN",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SIN.",
    "syntax": "SIN(value)",
    "simpleLogic": "Baca format SIN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "sinh",
    "name": "SINH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SINH.",
    "syntax": "SINH(value)",
    "simpleLogic": "Baca format SINH dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "sqrt",
    "name": "SQRT",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Basic",
    "description": "Melakukan perhitungan matematika memakai fungsi SQRT.",
    "syntax": "SQRT(number)",
    "simpleLogic": "Baca format SQRT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "sqrtpi",
    "name": "SQRTPI",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SQRTPI.",
    "syntax": "SQRTPI(value)",
    "simpleLogic": "Baca format SQRTPI dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "subtotal",
    "name": "SUBTOTAL",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SUBTOTAL.",
    "syntax": "SUBTOTAL(function_num, ref1, [ref2], ...)",
    "simpleLogic": "Baca format SUBTOTAL dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "sumproduct",
    "name": "SUMPRODUCT",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Advanced",
    "description": "Melakukan perhitungan matematika memakai fungsi SUMPRODUCT.",
    "syntax": "SUMPRODUCT(array1, [array2], ...)",
    "simpleLogic": "Baca format SUMPRODUCT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry",
      "practice"
    ],
    "hasExercise": true
  },
  {
    "id": "sumsq",
    "name": "SUMSQ",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SUMSQ.",
    "syntax": "SUMSQ(value)",
    "simpleLogic": "Baca format SUMSQ dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "sumx2my2",
    "name": "SUMX2MY2",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SUMX2MY2.",
    "syntax": "SUMX2MY2(value)",
    "simpleLogic": "Baca format SUMX2MY2 dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "sumx2py2",
    "name": "SUMX2PY2",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SUMX2PY2.",
    "syntax": "SUMX2PY2(value)",
    "simpleLogic": "Baca format SUMX2PY2 dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "sumxmy2",
    "name": "SUMXMY2",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SUMXMY2.",
    "syntax": "SUMXMY2(value)",
    "simpleLogic": "Baca format SUMXMY2 dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "tan",
    "name": "TAN",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi TAN.",
    "syntax": "TAN(value)",
    "simpleLogic": "Baca format TAN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "tanh",
    "name": "TANH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi TANH.",
    "syntax": "TANH(value)",
    "simpleLogic": "Baca format TANH dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "trunc",
    "name": "TRUNC",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi TRUNC.",
    "syntax": "TRUNC(value)",
    "simpleLogic": "Baca format TRUNC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "math",
      "math-and-trigonometry"
    ],
    "hasExercise": true
  },
  {
    "id": "call",
    "name": "CALL",
    "category": "Add-in / User Defined",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "CALL dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "CALL(module_text, procedure, type_text, [argument1], ...)",
    "simpleLogic": "Baca format CALL dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "add-in",
      "rare-/-specialized"
    ],
    "hasExercise": true
  },
  {
    "id": "cubekpimember",
    "name": "CUBEKPIMEMBER",
    "category": "Cube",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "CUBEKPIMEMBER dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "CUBEKPIMEMBER(connection, kpi_name, kpi_property, [caption])",
    "simpleLogic": "Baca format CUBEKPIMEMBER dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cube",
      "rare-/-specialized"
    ],
    "hasExercise": true
  },
  {
    "id": "cubemember",
    "name": "CUBEMEMBER",
    "category": "Cube",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "CUBEMEMBER dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "CUBEMEMBER(connection, member_expression)",
    "simpleLogic": "Baca format CUBEMEMBER dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cube",
      "rare-/-specialized"
    ],
    "hasExercise": true
  },
  {
    "id": "cubememberproperty",
    "name": "CUBEMEMBERPROPERTY",
    "category": "Cube",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "CUBEMEMBERPROPERTY dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "CUBEMEMBERPROPERTY(connection, member_expression)",
    "simpleLogic": "Baca format CUBEMEMBERPROPERTY dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cube",
      "rare-/-specialized"
    ],
    "hasExercise": true
  },
  {
    "id": "cuberankedmember",
    "name": "CUBERANKEDMEMBER",
    "category": "Cube",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "CUBERANKEDMEMBER dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "CUBERANKEDMEMBER(connection, member_expression)",
    "simpleLogic": "Baca format CUBERANKEDMEMBER dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cube",
      "rare-/-specialized"
    ],
    "hasExercise": true
  },
  {
    "id": "cubeset",
    "name": "CUBESET",
    "category": "Cube",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "CUBESET dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "CUBESET(connection, member_expression)",
    "simpleLogic": "Baca format CUBESET dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cube",
      "rare-/-specialized"
    ],
    "hasExercise": true
  },
  {
    "id": "cubesetcount",
    "name": "CUBESETCOUNT",
    "category": "Cube",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "CUBESETCOUNT dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "CUBESETCOUNT(connection, member_expression)",
    "simpleLogic": "Baca format CUBESETCOUNT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cube",
      "rare-/-specialized"
    ],
    "hasExercise": true
  },
  {
    "id": "cubevalue",
    "name": "CUBEVALUE",
    "category": "Cube",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "CUBEVALUE dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "CUBEVALUE(connection, member_expression)",
    "simpleLogic": "Baca format CUBEVALUE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cube",
      "rare-/-specialized"
    ],
    "hasExercise": true
  },
  {
    "id": "euroconvert",
    "name": "EUROCONVERT",
    "category": "Add-in / User Defined",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "EUROCONVERT dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "EUROCONVERT(value)",
    "simpleLogic": "Baca format EUROCONVERT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "add-in",
      "rare-/-specialized"
    ],
    "hasExercise": true
  },
  {
    "id": "register_id",
    "name": "REGISTER.ID",
    "category": "Add-in / User Defined",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "REGISTER.ID dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "REGISTER.ID(value)",
    "simpleLogic": "Baca format REGISTER.ID dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "add-in",
      "rare-/-specialized"
    ],
    "hasExercise": true
  },
  {
    "id": "sql_request",
    "name": "SQL.REQUEST",
    "category": "Add-in / User Defined",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "SQL.REQUEST dipakai untuk mengolah data sesuai format rumusnya.",
    "syntax": "SQL.REQUEST(value)",
    "simpleLogic": "Baca format SQL.REQUEST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "add-in",
      "rare-/-specialized"
    ],
    "hasExercise": true
  },
  {
    "id": "avedev",
    "name": "AVEDEV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "AVEDEV dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "AVEDEV(number1, [number2], ...)",
    "simpleLogic": "Baca format AVEDEV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "averagea",
    "name": "AVERAGEA",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "AVERAGEA dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "AVERAGEA(number1, [number2], ...)",
    "simpleLogic": "Baca format AVERAGEA dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "beta_dist",
    "name": "BETA.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "BETA.DIST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "BETA.DIST(x, alpha, beta, cumulative, [A], [B])",
    "simpleLogic": "Baca format BETA.DIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "beta_inv",
    "name": "BETA.INV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "BETA.INV dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "BETA.INV(probability, alpha, beta, [A], [B])",
    "simpleLogic": "Baca format BETA.INV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "binom_dist",
    "name": "BINOM.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "BINOM.DIST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "BINOM.DIST(number_s, trials, probability_s, cumulative)",
    "simpleLogic": "Baca format BINOM.DIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "binom_dist_range",
    "name": "BINOM.DIST.RANGE",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "BINOM.DIST.RANGE dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "BINOM.DIST.RANGE(trials, probability_s, number_s, [number_s2])",
    "simpleLogic": "Baca format BINOM.DIST.RANGE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "binom_inv",
    "name": "BINOM.INV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "BINOM.INV dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "BINOM.INV(trials, probability_s, alpha)",
    "simpleLogic": "Baca format BINOM.INV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "chisq_dist",
    "name": "CHISQ.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "CHISQ.DIST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "CHISQ.DIST(x, deg_freedom, cumulative)",
    "simpleLogic": "Baca format CHISQ.DIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "chisq_dist_rt",
    "name": "CHISQ.DIST.RT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "CHISQ.DIST.RT dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "CHISQ.DIST.RT(x, deg_freedom)",
    "simpleLogic": "Baca format CHISQ.DIST.RT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "chisq_inv",
    "name": "CHISQ.INV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "CHISQ.INV dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "CHISQ.INV(probability, deg_freedom)",
    "simpleLogic": "Baca format CHISQ.INV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "chisq_inv_rt",
    "name": "CHISQ.INV.RT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "CHISQ.INV.RT dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "CHISQ.INV.RT(probability, deg_freedom)",
    "simpleLogic": "Baca format CHISQ.INV.RT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "chisq_test",
    "name": "CHISQ.TEST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "CHISQ.TEST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "CHISQ.TEST(actual_range, expected_range)",
    "simpleLogic": "Baca format CHISQ.TEST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "confidence_norm",
    "name": "CONFIDENCE.NORM",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "CONFIDENCE.NORM dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "CONFIDENCE.NORM(alpha, standard_dev, size)",
    "simpleLogic": "Baca format CONFIDENCE.NORM dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "confidence_t",
    "name": "CONFIDENCE.T",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "CONFIDENCE.T dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "CONFIDENCE.T(alpha, standard_dev, size)",
    "simpleLogic": "Baca format CONFIDENCE.T dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "correl",
    "name": "CORREL",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "CORREL dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "CORREL(array1, array2)",
    "simpleLogic": "Baca format CORREL dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "covariance_p",
    "name": "COVARIANCE.P",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "COVARIANCE.P dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "COVARIANCE.P(array1, array2)",
    "simpleLogic": "Baca format COVARIANCE.P dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "covariance_s",
    "name": "COVARIANCE.S",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "COVARIANCE.S dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "COVARIANCE.S(array1, array2)",
    "simpleLogic": "Baca format COVARIANCE.S dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "devsq",
    "name": "DEVSQ",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "DEVSQ dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "DEVSQ(number1, [number2], ...)",
    "simpleLogic": "Baca format DEVSQ dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "expon_dist",
    "name": "EXPON.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "EXPON.DIST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "EXPON.DIST(x, lambda, cumulative)",
    "simpleLogic": "Baca format EXPON.DIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "f_dist",
    "name": "F.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "F.DIST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "F.DIST(x, deg_freedom1, deg_freedom2, cumulative)",
    "simpleLogic": "Baca format F.DIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "f_dist_rt",
    "name": "F.DIST.RT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "F.DIST.RT dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "F.DIST.RT(x, deg_freedom1, deg_freedom2)",
    "simpleLogic": "Baca format F.DIST.RT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "f_inv",
    "name": "F.INV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "F.INV dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "F.INV(probability, deg_freedom1, deg_freedom2)",
    "simpleLogic": "Baca format F.INV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "f_inv_rt",
    "name": "F.INV.RT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "F.INV.RT dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "F.INV.RT(probability, deg_freedom1, deg_freedom2)",
    "simpleLogic": "Baca format F.INV.RT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "f_test",
    "name": "F.TEST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "F.TEST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "F.TEST(array1, array2)",
    "simpleLogic": "Baca format F.TEST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "fisher",
    "name": "FISHER",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "FISHER dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "FISHER(number1, [number2], ...)",
    "simpleLogic": "Baca format FISHER dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "fisherinv",
    "name": "FISHERINV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "FISHERINV dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "FISHERINV(number1, [number2], ...)",
    "simpleLogic": "Baca format FISHERINV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "forecast",
    "name": "FORECAST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Advanced",
    "description": "FORECAST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "FORECAST(x, known_y's, known_x's)",
    "simpleLogic": "Baca format FORECAST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "practice",
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "forecast_ets",
    "name": "FORECAST.ETS",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "FORECAST.ETS dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "FORECAST.ETS(target_date, values, timeline, [seasonality], [data_completion], [aggregation])",
    "simpleLogic": "Baca format FORECAST.ETS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "forecast_ets_confint",
    "name": "FORECAST.ETS.CONFINT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "FORECAST.ETS.CONFINT dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "FORECAST.ETS.CONFINT(target_date, values, timeline, [confidence_level], [seasonality], [data_completion], [aggregation])",
    "simpleLogic": "Baca format FORECAST.ETS.CONFINT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "forecast_ets_seasonality",
    "name": "FORECAST.ETS.SEASONALITY",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "FORECAST.ETS.SEASONALITY dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "FORECAST.ETS.SEASONALITY(values, timeline, [data_completion], [aggregation])",
    "simpleLogic": "Baca format FORECAST.ETS.SEASONALITY dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "forecast_ets_stat",
    "name": "FORECAST.ETS.STAT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "FORECAST.ETS.STAT dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "FORECAST.ETS.STAT(values, timeline, statistic_type, [seasonality], [data_completion], [aggregation])",
    "simpleLogic": "Baca format FORECAST.ETS.STAT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "forecast_linear",
    "name": "FORECAST.LINEAR",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "FORECAST.LINEAR dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "FORECAST.LINEAR(number1, [number2], ...)",
    "simpleLogic": "Baca format FORECAST.LINEAR dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "frequency",
    "name": "FREQUENCY",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "FREQUENCY dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "FREQUENCY(data_array, bins_array)",
    "simpleLogic": "Baca format FREQUENCY dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "gamma",
    "name": "GAMMA",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "GAMMA dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "GAMMA(number1, [number2], ...)",
    "simpleLogic": "Baca format GAMMA dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "gamma_dist",
    "name": "GAMMA.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "GAMMA.DIST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "GAMMA.DIST(x, alpha, beta, cumulative)",
    "simpleLogic": "Baca format GAMMA.DIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "gamma_inv",
    "name": "GAMMA.INV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "GAMMA.INV dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "GAMMA.INV(probability, alpha, beta)",
    "simpleLogic": "Baca format GAMMA.INV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "gammaln",
    "name": "GAMMALN",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "GAMMALN dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "GAMMALN(number1, [number2], ...)",
    "simpleLogic": "Baca format GAMMALN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "gammaln_precise",
    "name": "GAMMALN.PRECISE",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "GAMMALN.PRECISE dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "GAMMALN.PRECISE(number1, [number2], ...)",
    "simpleLogic": "Baca format GAMMALN.PRECISE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "gauss",
    "name": "GAUSS",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "GAUSS dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "GAUSS(number1, [number2], ...)",
    "simpleLogic": "Baca format GAUSS dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "geomean",
    "name": "GEOMEAN",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "GEOMEAN dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "GEOMEAN(number1, [number2], ...)",
    "simpleLogic": "Baca format GEOMEAN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "growth",
    "name": "GROWTH",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "GROWTH dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "GROWTH(number1, [number2], ...)",
    "simpleLogic": "Baca format GROWTH dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "harmean",
    "name": "HARMEAN",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "HARMEAN dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "HARMEAN(number1, [number2], ...)",
    "simpleLogic": "Baca format HARMEAN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "hypgeom_dist",
    "name": "HYPGEOM.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "HYPGEOM.DIST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "HYPGEOM.DIST(sample_s, number_sample, population_s, number_pop, cumulative)",
    "simpleLogic": "Baca format HYPGEOM.DIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "intercept",
    "name": "INTERCEPT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "INTERCEPT dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "INTERCEPT(number1, [number2], ...)",
    "simpleLogic": "Baca format INTERCEPT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "kurt",
    "name": "KURT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "KURT dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "KURT(number1, [number2], ...)",
    "simpleLogic": "Baca format KURT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "linest",
    "name": "LINEST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "LINEST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "LINEST(number1, [number2], ...)",
    "simpleLogic": "Baca format LINEST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "logest",
    "name": "LOGEST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "LOGEST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "LOGEST(number1, [number2], ...)",
    "simpleLogic": "Baca format LOGEST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "lognorm_dist",
    "name": "LOGNORM.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "LOGNORM.DIST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "LOGNORM.DIST(x, mean, standard_dev, cumulative)",
    "simpleLogic": "Baca format LOGNORM.DIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "lognorm_inv",
    "name": "LOGNORM.INV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "LOGNORM.INV dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "LOGNORM.INV(probability, mean, standard_dev)",
    "simpleLogic": "Baca format LOGNORM.INV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "maxa",
    "name": "MAXA",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "MAXA dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "MAXA(number1, [number2], ...)",
    "simpleLogic": "Baca format MAXA dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "median",
    "name": "MEDIAN",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "MEDIAN dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "MEDIAN(number1, [number2], ...)",
    "simpleLogic": "Baca format MEDIAN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "practice",
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "mina",
    "name": "MINA",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "MINA dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "MINA(number1, [number2], ...)",
    "simpleLogic": "Baca format MINA dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "mode_mult",
    "name": "MODE.MULT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "MODE.MULT dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "MODE.MULT(number1, [number2], ...)",
    "simpleLogic": "Baca format MODE.MULT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "mode_sngl",
    "name": "MODE.SNGL",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "MODE.SNGL dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "MODE.SNGL(number1, [number2], ...)",
    "simpleLogic": "Baca format MODE.SNGL dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "negbinom_dist",
    "name": "NEGBINOM.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "NEGBINOM.DIST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "NEGBINOM.DIST(number_f, number_s, probability_s, cumulative)",
    "simpleLogic": "Baca format NEGBINOM.DIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "norm_dist",
    "name": "NORM.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "NORM.DIST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "NORM.DIST(x, mean, standard_dev, cumulative)",
    "simpleLogic": "Baca format NORM.DIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "norm_inv",
    "name": "NORM.INV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "NORM.INV dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "NORM.INV(probability, mean, standard_dev)",
    "simpleLogic": "Baca format NORM.INV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "norm_s_dist",
    "name": "NORM.S.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "NORM.S.DIST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "NORM.S.DIST(z, cumulative)",
    "simpleLogic": "Baca format NORM.S.DIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "norm_s_inv",
    "name": "NORM.S.INV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "NORM.S.INV dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "NORM.S.INV(probability)",
    "simpleLogic": "Baca format NORM.S.INV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "pearson",
    "name": "PEARSON",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "PEARSON dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "PEARSON(number1, [number2], ...)",
    "simpleLogic": "Baca format PEARSON dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "percentile_exc",
    "name": "PERCENTILE.EXC",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "PERCENTILE.EXC dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "PERCENTILE.EXC(array, k)",
    "simpleLogic": "Baca format PERCENTILE.EXC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "percentile_inc",
    "name": "PERCENTILE.INC",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "PERCENTILE.INC dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "PERCENTILE.INC(array, k)",
    "simpleLogic": "Baca format PERCENTILE.INC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "percentrank_exc",
    "name": "PERCENTRANK.EXC",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "PERCENTRANK.EXC dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "PERCENTRANK.EXC(array, x, [significance])",
    "simpleLogic": "Baca format PERCENTRANK.EXC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "percentrank_inc",
    "name": "PERCENTRANK.INC",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "PERCENTRANK.INC dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "PERCENTRANK.INC(array, x, [significance])",
    "simpleLogic": "Baca format PERCENTRANK.INC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "permut",
    "name": "PERMUT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "PERMUT dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "PERMUT(number1, [number2], ...)",
    "simpleLogic": "Baca format PERMUT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "permutationa",
    "name": "PERMUTATIONA",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "PERMUTATIONA dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "PERMUTATIONA(number1, [number2], ...)",
    "simpleLogic": "Baca format PERMUTATIONA dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "phi",
    "name": "PHI",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "PHI dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "PHI(number1, [number2], ...)",
    "simpleLogic": "Baca format PHI dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "poisson_dist",
    "name": "POISSON.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "POISSON.DIST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "POISSON.DIST(x, mean, cumulative)",
    "simpleLogic": "Baca format POISSON.DIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "prob",
    "name": "PROB",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "PROB dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "PROB(x_range, prob_range, [lower_limit], [upper_limit])",
    "simpleLogic": "Baca format PROB dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "quartile_exc",
    "name": "QUARTILE.EXC",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "QUARTILE.EXC dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "QUARTILE.EXC(array, quart)",
    "simpleLogic": "Baca format QUARTILE.EXC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "quartile_inc",
    "name": "QUARTILE.INC",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "QUARTILE.INC dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "QUARTILE.INC(array, quart)",
    "simpleLogic": "Baca format QUARTILE.INC dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "rank_avg",
    "name": "RANK.AVG",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "RANK.AVG dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "RANK.AVG(number, ref, [order])",
    "simpleLogic": "Baca format RANK.AVG dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "rank_eq",
    "name": "RANK.EQ",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Advanced",
    "description": "RANK.EQ dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "RANK.EQ(number, ref, [order])",
    "simpleLogic": "Baca format RANK.EQ dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "practice",
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "rsq",
    "name": "RSQ",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "RSQ dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "RSQ(number1, [number2], ...)",
    "simpleLogic": "Baca format RSQ dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "skew",
    "name": "SKEW",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "SKEW dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "SKEW(number1, [number2], ...)",
    "simpleLogic": "Baca format SKEW dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "skew_p",
    "name": "SKEW.P",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "SKEW.P dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "SKEW.P(number1, [number2], ...)",
    "simpleLogic": "Baca format SKEW.P dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "slope",
    "name": "SLOPE",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "SLOPE dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "SLOPE(number1, [number2], ...)",
    "simpleLogic": "Baca format SLOPE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "standardize",
    "name": "STANDARDIZE",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "STANDARDIZE dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "STANDARDIZE(x, mean, standard_dev)",
    "simpleLogic": "Baca format STANDARDIZE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "stdev_p",
    "name": "STDEV.P",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Advanced",
    "description": "STDEV.P dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "STDEV.P(number1, [number2], ...)",
    "simpleLogic": "Baca format STDEV.P dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "practice",
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "stdev_s",
    "name": "STDEV.S",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Advanced",
    "description": "STDEV.S dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "STDEV.S(number1, [number2], ...)",
    "simpleLogic": "Baca format STDEV.S dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "practice",
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "stdeva",
    "name": "STDEVA",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "STDEVA dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "STDEVA(number1, [number2], ...)",
    "simpleLogic": "Baca format STDEVA dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "stdevpa",
    "name": "STDEVPA",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "STDEVPA dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "STDEVPA(number1, [number2], ...)",
    "simpleLogic": "Baca format STDEVPA dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "steyx",
    "name": "STEYX",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "STEYX dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "STEYX(number1, [number2], ...)",
    "simpleLogic": "Baca format STEYX dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "t_dist",
    "name": "T.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "T.DIST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "T.DIST(x, deg_freedom, cumulative)",
    "simpleLogic": "Baca format T.DIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "t_dist_2t",
    "name": "T.DIST.2T",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "T.DIST.2T dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "T.DIST.2T(x, deg_freedom)",
    "simpleLogic": "Baca format T.DIST.2T dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "t_dist_rt",
    "name": "T.DIST.RT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "T.DIST.RT dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "T.DIST.RT(x, deg_freedom)",
    "simpleLogic": "Baca format T.DIST.RT dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "t_inv",
    "name": "T.INV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "T.INV dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "T.INV(probability, deg_freedom)",
    "simpleLogic": "Baca format T.INV dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "t_inv_2t",
    "name": "T.INV.2T",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "T.INV.2T dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "T.INV.2T(probability, deg_freedom)",
    "simpleLogic": "Baca format T.INV.2T dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "t_test",
    "name": "T.TEST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "T.TEST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "T.TEST(array1, array2, tails, type)",
    "simpleLogic": "Baca format T.TEST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "trend",
    "name": "TREND",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Advanced",
    "description": "TREND dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "TREND(known_y's, [known_x's], [new_x's], [const])",
    "simpleLogic": "Baca format TREND dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "practice",
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "trimmean",
    "name": "TRIMMEAN",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "TRIMMEAN dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "TRIMMEAN(number1, [number2], ...)",
    "simpleLogic": "Baca format TRIMMEAN dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "var_p",
    "name": "VAR.P",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Advanced",
    "description": "VAR.P dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "VAR.P(number1, [number2], ...)",
    "simpleLogic": "Baca format VAR.P dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "practice",
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "var_s",
    "name": "VAR.S",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Advanced",
    "description": "VAR.S dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "VAR.S(number1, [number2], ...)",
    "simpleLogic": "Baca format VAR.S dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "practice",
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "vara",
    "name": "VARA",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "VARA dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "VARA(number1, [number2], ...)",
    "simpleLogic": "Baca format VARA dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "varpa",
    "name": "VARPA",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "VARPA dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "VARPA(number1, [number2], ...)",
    "simpleLogic": "Baca format VARPA dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "weibull_dist",
    "name": "WEIBULL.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "WEIBULL.DIST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "WEIBULL.DIST(x, alpha, beta, cumulative)",
    "simpleLogic": "Baca format WEIBULL.DIST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "z_test",
    "name": "Z.TEST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Z.TEST dipakai untuk membaca pola angka, peluang, sebaran, ranking, atau ringkasan statistik.",
    "syntax": "Z.TEST(array, x, [sigma])",
    "simpleLogic": "Baca format Z.TEST dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "statistical",
      "statistics"
    ],
    "hasExercise": true
  },
  {
    "id": "arraytotext",
    "name": "ARRAYTOTEXT",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi ARRAYTOTEXT.",
    "syntax": "ARRAYTOTEXT(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "asc",
    "name": "ASC",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi ASC.",
    "syntax": "ASC(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "bahttext",
    "name": "BAHTTEXT",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi BAHTTEXT.",
    "syntax": "BAHTTEXT(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "char",
    "name": "CHAR",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi CHAR.",
    "syntax": "CHAR(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "clean",
    "name": "CLEAN",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi CLEAN.",
    "syntax": "CLEAN(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "code",
    "name": "CODE",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi CODE.",
    "syntax": "CODE(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "concat",
    "name": "CONCAT",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi CONCAT.",
    "syntax": "CONCAT(text1, [text2], ...)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "concatenate",
    "name": "CONCATENATE",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi CONCATENATE.",
    "syntax": "CONCATENATE(text1, [text2], ...)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "dbcs",
    "name": "DBCS",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi DBCS.",
    "syntax": "DBCS(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "dollar",
    "name": "DOLLAR",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi DOLLAR.",
    "syntax": "DOLLAR(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "exact",
    "name": "EXACT",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi EXACT.",
    "syntax": "EXACT(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "find",
    "name": "FIND",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi FIND.",
    "syntax": "FIND(find_text, within_text, [start_num])",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "findb",
    "name": "FINDB",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi FINDB.",
    "syntax": "FINDB(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "fixed",
    "name": "FIXED",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi FIXED.",
    "syntax": "FIXED(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "left",
    "name": "LEFT",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Basic",
    "description": "Mengolah teks menggunakan fungsi LEFT.",
    "syntax": "LEFT(text, [num_chars])",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "leftb",
    "name": "LEFTB",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi LEFTB.",
    "syntax": "LEFTB(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "len",
    "name": "LEN",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Basic",
    "description": "Mengolah teks menggunakan fungsi LEN.",
    "syntax": "LEN(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "lenb",
    "name": "LENB",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi LENB.",
    "syntax": "LENB(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "lower",
    "name": "LOWER",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Basic",
    "description": "Mengolah teks menggunakan fungsi LOWER.",
    "syntax": "LOWER(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "mid",
    "name": "MID",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Basic",
    "description": "Mengolah teks menggunakan fungsi MID.",
    "syntax": "MID(text, start_num, num_chars)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "midb",
    "name": "MIDB",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi MIDB.",
    "syntax": "MIDB(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "numbervalue",
    "name": "NUMBERVALUE",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi NUMBERVALUE.",
    "syntax": "NUMBERVALUE(text, [decimal_separator], [group_separator])",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "phonetic",
    "name": "PHONETIC",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi PHONETIC.",
    "syntax": "PHONETIC(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "proper",
    "name": "PROPER",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Basic",
    "description": "Mengolah teks menggunakan fungsi PROPER.",
    "syntax": "PROPER(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "replace",
    "name": "REPLACE",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi REPLACE.",
    "syntax": "REPLACE(old_text, start_num, num_chars, new_text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "replaceb",
    "name": "REPLACEB",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi REPLACEB.",
    "syntax": "REPLACEB(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "rept",
    "name": "REPT",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi REPT.",
    "syntax": "REPT(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "right",
    "name": "RIGHT",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Basic",
    "description": "Mengolah teks menggunakan fungsi RIGHT.",
    "syntax": "RIGHT(text, [num_chars])",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "rightb",
    "name": "RIGHTB",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi RIGHTB.",
    "syntax": "RIGHTB(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "search",
    "name": "SEARCH",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi SEARCH.",
    "syntax": "SEARCH(find_text, within_text, [start_num])",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "searchb",
    "name": "SEARCHB",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi SEARCHB.",
    "syntax": "SEARCHB(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "substitute",
    "name": "SUBSTITUTE",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi SUBSTITUTE.",
    "syntax": "SUBSTITUTE(text, old_text, new_text, [instance_num])",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "t",
    "name": "T",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi T.",
    "syntax": "T(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "text",
    "name": "TEXT",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Basic",
    "description": "Mengolah teks menggunakan fungsi TEXT.",
    "syntax": "TEXT(value, format_text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "textafter",
    "name": "TEXTAFTER",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi TEXTAFTER.",
    "syntax": "TEXTAFTER(text, delimiter)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "textbefore",
    "name": "TEXTBEFORE",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi TEXTBEFORE.",
    "syntax": "TEXTBEFORE(text, delimiter)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "Microsoft 365 / supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "textjoin",
    "name": "TEXTJOIN",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi TEXTJOIN.",
    "syntax": "TEXTJOIN(delimiter, ignore_empty, text1, [text2], ...)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "trim",
    "name": "TRIM",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Basic",
    "description": "Mengolah teks menggunakan fungsi TRIM.",
    "syntax": "TRIM(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "unichar",
    "name": "UNICHAR",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi UNICHAR.",
    "syntax": "UNICHAR(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "unicode",
    "name": "UNICODE",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi UNICODE.",
    "syntax": "UNICODE(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "upper",
    "name": "UPPER",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Basic",
    "description": "Mengolah teks menggunakan fungsi UPPER.",
    "syntax": "UPPER(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "value",
    "name": "VALUE",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi VALUE.",
    "syntax": "VALUE(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "practice",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "valuetotext",
    "name": "VALUETOTEXT",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi VALUETOTEXT.",
    "syntax": "VALUETOTEXT(text)",
    "simpleLogic": "Anggap teks seperti bahan mentah. Rumus ini membantu mengambil, membersihkan, atau mengubah bentuknya.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "cleaning",
      "text"
    ],
    "hasExercise": true
  },
  {
    "id": "encodeurl",
    "name": "ENCODEURL",
    "category": "Web",
    "displayCategory": "Web",
    "level": "Intermediate",
    "description": "Mengolah data web, URL, atau XML memakai fungsi ENCODEURL.",
    "syntax": "ENCODEURL(text)",
    "simpleLogic": "Baca format ENCODEURL dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "web"
    ],
    "hasExercise": true
  },
  {
    "id": "filterxml",
    "name": "FILTERXML",
    "category": "Web",
    "displayCategory": "Web",
    "level": "Intermediate",
    "description": "Mengolah data web, URL, atau XML memakai fungsi FILTERXML.",
    "syntax": "FILTERXML(url)",
    "simpleLogic": "Baca format FILTERXML dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "web"
    ],
    "hasExercise": true
  },
  {
    "id": "webservice",
    "name": "WEBSERVICE",
    "category": "Web",
    "displayCategory": "Web",
    "level": "Intermediate",
    "description": "Mengolah data web, URL, atau XML memakai fungsi WEBSERVICE.",
    "syntax": "WEBSERVICE(url)",
    "simpleLogic": "Baca format WEBSERVICE dari kiri ke kanan, lalu isi argumen memakai data yang sesuai dari tabel latihan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "web"
    ],
    "hasExercise": true
  }
];

const hiddenFormulaIds = new Set(['true', 'false']);

export const formulaCatalogFull = baseFormulaCatalogFull
  .filter((formula) => !hiddenFormulaIds.has(String(formula.id || '').toLowerCase()))
  .map((formula) => {
  const learning = formulaLearningContent[formula.name] || formulaLearningContent[formula.id] || {};
  const nextTags = Array.from(new Set([...(formula.tags || []), 'practice']));
  return normalizeFormulaRecord({
    ...formula,
    ...learning,
    hasExercise: true,
    tags: nextTags
  });
});

export const formulaById = Object.fromEntries(formulaCatalogFull.map((formula) => [formula.id, formula]));

export const formulasByCategory = formulaCatalogFull.reduce((acc, formula) => {
  const key = formula.displayCategory;
  acc[key] = acc[key] || [];
  acc[key].push(formula);
  return acc;
}, {});

export function importFormulaCatalog(nextCatalog = []) {
  if (!Array.isArray(nextCatalog)) return formulaCatalogFull;
  return nextCatalog.filter(Boolean).map((item) => normalizeFormulaRecord({
    id: item.id,
    name: item.name,
    category: item.category || 'Add-in / User Defined',
    displayCategory: item.displayCategory || 'Rare / Specialized',
    level: item.level || 'Rare / Specialized',
    description: item.description || `Fungsi Excel ${item.name}.`,
    syntax: item.syntax || `${item.name}(argument1, [argument2], ...)`,
    simpleLogic: item.simpleLogic || 'Pahami input yang diminta, lalu cocokkan dengan hasil yang ingin dibuat.',
    useCase: item.useCase || 'Dipakai saat kebutuhan datanya cocok dengan fungsi ini.',
    version: item.version || 'Microsoft 365 / supported Excel versions',
    availability: item.availability || ['Excel Desktop', 'Excel Web', 'Microsoft 365'],
    tags: item.tags || [],
    hasExercise: true
  }));
}
