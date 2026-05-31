import { formulaLearningContent } from './formulaLearningContent.js';

// Data katalog Formula Coach.
// Kategori dan nama function disiapkan sebagai data lokal supaya komponen UI tidak perlu diubah saat katalog di-update.

const baseFormulaCatalogFull = [
  {
    "id": "detectlanguage",
    "name": "DETECTLANGUAGE",
    "category": "Advanced / Professional",
    "displayCategory": "Advanced / Professional",
    "level": "Advanced",
    "description": "Fungsi Excel DETECTLANGUAGE untuk kebutuhan khusus.",
    "syntax": "DETECTLANGUAGE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DETECTLANGUAGE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "groupby",
    "name": "GROUPBY",
    "category": "Advanced / Professional",
    "displayCategory": "Advanced / Professional",
    "level": "Advanced",
    "description": "Fungsi Excel GROUPBY untuk kebutuhan khusus.",
    "syntax": "GROUPBY(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama GROUPBY, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "lambda",
    "name": "LAMBDA",
    "category": "Advanced / Professional",
    "displayCategory": "Advanced / Professional",
    "level": "Advanced",
    "description": "Membuat function custom langsung dari formula Excel.",
    "syntax": "LAMBDA([parameter1, parameter2, ...], calculation)",
    "simpleLogic": "Pahami input utama LAMBDA, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama LET, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Fungsi Excel PERCENTOF untuk kebutuhan khusus.",
    "syntax": "PERCENTOF(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PERCENTOF, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "pivotby",
    "name": "PIVOTBY",
    "category": "Advanced / Professional",
    "displayCategory": "Advanced / Professional",
    "level": "Advanced",
    "description": "Fungsi Excel PIVOTBY untuk kebutuhan khusus.",
    "syntax": "PIVOTBY(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PIVOTBY, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "regexextract",
    "name": "REGEXEXTRACT",
    "category": "Advanced / Professional",
    "displayCategory": "Advanced / Professional",
    "level": "Advanced",
    "description": "Fungsi Excel REGEXEXTRACT untuk kebutuhan khusus.",
    "syntax": "REGEXEXTRACT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama REGEXEXTRACT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "regexreplace",
    "name": "REGEXREPLACE",
    "category": "Advanced / Professional",
    "displayCategory": "Advanced / Professional",
    "level": "Advanced",
    "description": "Fungsi Excel REGEXREPLACE untuk kebutuhan khusus.",
    "syntax": "REGEXREPLACE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama REGEXREPLACE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "regextest",
    "name": "REGEXTEST",
    "category": "Advanced / Professional",
    "displayCategory": "Advanced / Professional",
    "level": "Advanced",
    "description": "Fungsi Excel REGEXTEST untuk kebutuhan khusus.",
    "syntax": "REGEXTEST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama REGEXTEST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "translate",
    "name": "TRANSLATE",
    "category": "Advanced / Professional",
    "displayCategory": "Advanced / Professional",
    "level": "Advanced",
    "description": "Fungsi Excel TRANSLATE untuk kebutuhan khusus.",
    "syntax": "TRANSLATE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama TRANSLATE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "average",
    "name": "AVERAGE",
    "category": "Statistical",
    "displayCategory": "Basic Calculation",
    "level": "Basic",
    "description": "Menghitung rata-rata angka.",
    "syntax": "AVERAGE(number1, [number2], ...)",
    "simpleLogic": "Pahami input utama AVERAGE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama COUNT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "simpleLogic": "Pahami input utama COUNTA, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "simpleLogic": "Pahami input utama COUNTBLANK, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "description": "Menghitung analisis statistik memakai fungsi LARGE.",
    "syntax": "LARGE(array, k)",
    "simpleLogic": "Pahami input utama LARGE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Menghitung analisis statistik memakai fungsi MAX.",
    "syntax": "MAX(number1, [number2], ...)",
    "simpleLogic": "Pahami input utama MAX, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Menghitung analisis statistik memakai fungsi MIN.",
    "syntax": "MIN(number1, [number2], ...)",
    "simpleLogic": "Pahami input utama MIN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Menghitung analisis statistik memakai fungsi SMALL.",
    "syntax": "SMALL(array, k)",
    "simpleLogic": "Pahami input utama SMALL, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu BETADIST.",
    "syntax": "BETADIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BETADIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "betainv",
    "name": "BETAINV",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu BETAINV.",
    "syntax": "BETAINV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BETAINV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "binomdist",
    "name": "BINOMDIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu BINOMDIST.",
    "syntax": "BINOMDIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BINOMDIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "chidist",
    "name": "CHIDIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu CHIDIST.",
    "syntax": "CHIDIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CHIDIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "chiinv",
    "name": "CHIINV",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu CHIINV.",
    "syntax": "CHIINV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CHIINV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "chitest",
    "name": "CHITEST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu CHITEST.",
    "syntax": "CHITEST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CHITEST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "confidence",
    "name": "CONFIDENCE",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu CONFIDENCE.",
    "syntax": "CONFIDENCE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CONFIDENCE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "covar",
    "name": "COVAR",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu COVAR.",
    "syntax": "COVAR(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama COVAR, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "critbinom",
    "name": "CRITBINOM",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu CRITBINOM.",
    "syntax": "CRITBINOM(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CRITBINOM, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "expondist",
    "name": "EXPONDIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu EXPONDIST.",
    "syntax": "EXPONDIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama EXPONDIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "fdist",
    "name": "FDIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu FDIST.",
    "syntax": "FDIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama FDIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "finv",
    "name": "FINV",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu FINV.",
    "syntax": "FINV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama FINV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "ftest",
    "name": "FTEST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu FTEST.",
    "syntax": "FTEST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama FTEST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "gammadist",
    "name": "GAMMADIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu GAMMADIST.",
    "syntax": "GAMMADIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama GAMMADIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "gammainv",
    "name": "GAMMAINV",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu GAMMAINV.",
    "syntax": "GAMMAINV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama GAMMAINV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "hypgeomdist",
    "name": "HYPGEOMDIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu HYPGEOMDIST.",
    "syntax": "HYPGEOMDIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama HYPGEOMDIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "loginv",
    "name": "LOGINV",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu LOGINV.",
    "syntax": "LOGINV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama LOGINV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "lognormdist",
    "name": "LOGNORMDIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu LOGNORMDIST.",
    "syntax": "LOGNORMDIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama LOGNORMDIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "mode",
    "name": "MODE",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Intermediate",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu MODE.",
    "syntax": "MODE(number1, [number2], ...)",
    "simpleLogic": "Pahami input utama MODE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu NEGBINOMDIST.",
    "syntax": "NEGBINOMDIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama NEGBINOMDIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "normdist",
    "name": "NORMDIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu NORMDIST.",
    "syntax": "NORMDIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama NORMDIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "norminv",
    "name": "NORMINV",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu NORMINV.",
    "syntax": "NORMINV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama NORMINV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "normsdist",
    "name": "NORMSDIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu NORMSDIST.",
    "syntax": "NORMSDIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama NORMSDIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "normsinv",
    "name": "NORMSINV",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu NORMSINV.",
    "syntax": "NORMSINV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama NORMSINV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "percentile",
    "name": "PERCENTILE",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Advanced",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu PERCENTILE.",
    "syntax": "PERCENTILE(array, k)",
    "simpleLogic": "Pahami input utama PERCENTILE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu PERCENTRANK.",
    "syntax": "PERCENTRANK(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PERCENTRANK, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "poisson",
    "name": "POISSON",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu POISSON.",
    "syntax": "POISSON(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama POISSON, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "quartile",
    "name": "QUARTILE",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Advanced",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu QUARTILE.",
    "syntax": "QUARTILE(array, quart)",
    "simpleLogic": "Pahami input utama QUARTILE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu RANK.",
    "syntax": "RANK(number, ref, [order])",
    "simpleLogic": "Pahami input utama RANK, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu STDEV.",
    "syntax": "STDEV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama STDEV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "stdevp",
    "name": "STDEVP",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu STDEVP.",
    "syntax": "STDEVP(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama STDEVP, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "tdist",
    "name": "TDIST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu TDIST.",
    "syntax": "TDIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama TDIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "tinv",
    "name": "TINV",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu TINV.",
    "syntax": "TINV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama TINV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "ttest",
    "name": "TTEST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu TTEST.",
    "syntax": "TTEST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama TTEST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "var",
    "name": "VAR",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu VAR.",
    "syntax": "VAR(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama VAR, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "varp",
    "name": "VARP",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu VARP.",
    "syntax": "VARP(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama VARP, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "weibull",
    "name": "WEIBULL",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu WEIBULL.",
    "syntax": "WEIBULL(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama WEIBULL, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
  },
  {
    "id": "ztest",
    "name": "ZTEST",
    "category": "Compatibility",
    "displayCategory": "Compatibility",
    "level": "Rare / Specialized",
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu ZTEST.",
    "syntax": "ZTEST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ZTEST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "compatibility"
    ],
    "hasExercise": false
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
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "AVERAGEIFS(average_range, criteria_range1, criteria1, ...)",
    "simpleLogic": "Pakai beberapa syarat sekaligus. Baris dihitung kalau semua syarat terpenuhi.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "COUNTIFS(criteria_range1, criteria1, ...)",
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
    "description": "Menghitung analisis statistik memakai fungsi MAXIFS.",
    "syntax": "MAXIFS(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama MAXIFS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "minifs",
    "name": "MINIFS",
    "category": "Statistical",
    "displayCategory": "Conditional Calculation",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi MINIFS.",
    "syntax": "MINIFS(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama MINIFS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
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
    "syntax": "DAVERAGE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DAVERAGE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": false
  },
  {
    "id": "dcount",
    "name": "DCOUNT",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DCOUNT.",
    "syntax": "DCOUNT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DCOUNT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": false
  },
  {
    "id": "dcounta",
    "name": "DCOUNTA",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DCOUNTA.",
    "syntax": "DCOUNTA(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DCOUNTA, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": false
  },
  {
    "id": "dget",
    "name": "DGET",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DGET.",
    "syntax": "DGET(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DGET, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": false
  },
  {
    "id": "dmax",
    "name": "DMAX",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DMAX.",
    "syntax": "DMAX(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DMAX, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": false
  },
  {
    "id": "dmin",
    "name": "DMIN",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DMIN.",
    "syntax": "DMIN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DMIN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": false
  },
  {
    "id": "dproduct",
    "name": "DPRODUCT",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DPRODUCT.",
    "syntax": "DPRODUCT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DPRODUCT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": false
  },
  {
    "id": "dstdev",
    "name": "DSTDEV",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DSTDEV.",
    "syntax": "DSTDEV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DSTDEV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": false
  },
  {
    "id": "dstdevp",
    "name": "DSTDEVP",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DSTDEVP.",
    "syntax": "DSTDEVP(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DSTDEVP, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": false
  },
  {
    "id": "dsum",
    "name": "DSUM",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DSUM.",
    "syntax": "DSUM(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DSUM, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": false
  },
  {
    "id": "dvar",
    "name": "DVAR",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DVAR.",
    "syntax": "DVAR(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DVAR, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": false
  },
  {
    "id": "dvarp",
    "name": "DVARP",
    "category": "Database",
    "displayCategory": "Database",
    "level": "Rare / Specialized",
    "description": "Mengolah tabel database Excel memakai fungsi DVARP.",
    "syntax": "DVARP(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DVARP, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "database"
    ],
    "hasExercise": false
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
    "syntax": "DATEVALUE(argument1, [argument2], ...)",
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
    "hasExercise": false
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
    "syntax": "DAYS360(argument1, [argument2], ...)",
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
    "hasExercise": false
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
    "syntax": "ISOWEEKNUM(argument1, [argument2], ...)",
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
    "hasExercise": false
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
    "syntax": "TIMEVALUE(argument1, [argument2], ...)",
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
    "hasExercise": false
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
    "syntax": "WEEKDAY(argument1, [argument2], ...)",
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
    "hasExercise": false
  },
  {
    "id": "weeknum",
    "name": "WEEKNUM",
    "category": "Date and Time",
    "displayCategory": "Date & Time",
    "level": "Intermediate",
    "description": "Mengolah tanggal atau waktu menggunakan fungsi WEEKNUM.",
    "syntax": "WEEKNUM(argument1, [argument2], ...)",
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
    "hasExercise": false
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
    "syntax": "YEARFRAC(argument1, [argument2], ...)",
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
    "hasExercise": false
  },
  {
    "id": "bycol",
    "name": "BYCOL",
    "category": "Dynamic Array",
    "displayCategory": "Dynamic Array",
    "level": "Advanced",
    "description": "Fungsi Excel BYCOL untuk kebutuhan khusus.",
    "syntax": "BYCOL(array, lambda(column))",
    "simpleLogic": "Pahami input utama BYCOL, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Fungsi Excel BYROW untuk kebutuhan khusus.",
    "syntax": "BYROW(array, lambda(row))",
    "simpleLogic": "Pahami input utama BYROW, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama CHOOSECOLS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama CHOOSEROWS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama DROP, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "EXPAND(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama EXPAND, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "filter",
    "name": "FILTER",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Menyaring data yang memenuhi kondisi.",
    "syntax": "FILTER(array, include, [if_empty])",
    "simpleLogic": "Pahami input utama FILTER, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama HSTACK, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Fungsi Excel MAKEARRAY untuk kebutuhan khusus.",
    "syntax": "MAKEARRAY(rows, cols, lambda(row, col))",
    "simpleLogic": "Pahami input utama MAKEARRAY, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Fungsi Excel MAP untuk kebutuhan khusus.",
    "syntax": "MAP(array1, lambda_or_array2, [lambda])",
    "simpleLogic": "Pahami input utama MAP, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "RANDARRAY(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama RANDARRAY, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "reduce",
    "name": "REDUCE",
    "category": "Dynamic Array",
    "displayCategory": "Dynamic Array",
    "level": "Advanced",
    "description": "Fungsi Excel REDUCE untuk kebutuhan khusus.",
    "syntax": "REDUCE([initial_value], array, lambda)",
    "simpleLogic": "Pahami input utama REDUCE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Fungsi Excel SCAN untuk kebutuhan khusus.",
    "syntax": "SCAN([initial_value], array, lambda)",
    "simpleLogic": "Pahami input utama SCAN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "SEQUENCE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SEQUENCE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "sort",
    "name": "SORT",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai SORT.",
    "syntax": "SORT(array, [sort_index], [sort_order], [by_col])",
    "simpleLogic": "Pahami input utama SORT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama SORTBY, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama TAKE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "TOCOL(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama TOCOL, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "torow",
    "name": "TOROW",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai TOROW.",
    "syntax": "TOROW(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama TOROW, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "transpose",
    "name": "TRANSPOSE",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai TRANSPOSE.",
    "syntax": "TRANSPOSE(array)",
    "simpleLogic": "Pahami input utama TRANSPOSE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama UNIQUE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama VSTACK, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "WRAPCOLS(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama WRAPCOLS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "wraprows",
    "name": "WRAPROWS",
    "category": "Lookup and Reference",
    "displayCategory": "Dynamic Array",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai WRAPROWS.",
    "syntax": "WRAPROWS(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama WRAPROWS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
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
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "BESSELI(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BESSELI, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "besselj",
    "name": "BESSELJ",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BESSELJ.",
    "syntax": "BESSELJ(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BESSELJ, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "besselk",
    "name": "BESSELK",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BESSELK.",
    "syntax": "BESSELK(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BESSELK, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "bessely",
    "name": "BESSELY",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BESSELY.",
    "syntax": "BESSELY(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BESSELY, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "bin2dec",
    "name": "BIN2DEC",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BIN2DEC.",
    "syntax": "BIN2DEC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BIN2DEC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "bin2hex",
    "name": "BIN2HEX",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BIN2HEX.",
    "syntax": "BIN2HEX(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BIN2HEX, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "bin2oct",
    "name": "BIN2OCT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BIN2OCT.",
    "syntax": "BIN2OCT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BIN2OCT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "bitand",
    "name": "BITAND",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BITAND.",
    "syntax": "BITAND(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BITAND, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "bitlshift",
    "name": "BITLSHIFT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BITLSHIFT.",
    "syntax": "BITLSHIFT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BITLSHIFT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "bitor",
    "name": "BITOR",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BITOR.",
    "syntax": "BITOR(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BITOR, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "bitrshift",
    "name": "BITRSHIFT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BITRSHIFT.",
    "syntax": "BITRSHIFT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BITRSHIFT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "bitxor",
    "name": "BITXOR",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BITXOR.",
    "syntax": "BITXOR(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BITXOR, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "complex",
    "name": "COMPLEX",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi COMPLEX.",
    "syntax": "COMPLEX(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama COMPLEX, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "convert",
    "name": "CONVERT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi CONVERT.",
    "syntax": "CONVERT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CONVERT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "dec2bin",
    "name": "DEC2BIN",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi DEC2BIN.",
    "syntax": "DEC2BIN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DEC2BIN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "dec2hex",
    "name": "DEC2HEX",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi DEC2HEX.",
    "syntax": "DEC2HEX(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DEC2HEX, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "dec2oct",
    "name": "DEC2OCT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi DEC2OCT.",
    "syntax": "DEC2OCT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DEC2OCT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "delta",
    "name": "DELTA",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi DELTA.",
    "syntax": "DELTA(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DELTA, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "erf",
    "name": "ERF",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi ERF.",
    "syntax": "ERF(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ERF, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "erf_precise",
    "name": "ERF.PRECISE",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi ERF.PRECISE.",
    "syntax": "ERF.PRECISE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ERF.PRECISE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "erfc",
    "name": "ERFC",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi ERFC.",
    "syntax": "ERFC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ERFC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "erfc_precise",
    "name": "ERFC.PRECISE",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi ERFC.PRECISE.",
    "syntax": "ERFC.PRECISE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ERFC.PRECISE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "gestep",
    "name": "GESTEP",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi GESTEP.",
    "syntax": "GESTEP(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama GESTEP, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "hex2bin",
    "name": "HEX2BIN",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi HEX2BIN.",
    "syntax": "HEX2BIN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama HEX2BIN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "hex2dec",
    "name": "HEX2DEC",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi HEX2DEC.",
    "syntax": "HEX2DEC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama HEX2DEC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "hex2oct",
    "name": "HEX2OCT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi HEX2OCT.",
    "syntax": "HEX2OCT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama HEX2OCT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imabs",
    "name": "IMABS",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMABS.",
    "syntax": "IMABS(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMABS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imaginary",
    "name": "IMAGINARY",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMAGINARY.",
    "syntax": "IMAGINARY(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMAGINARY, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imargument",
    "name": "IMARGUMENT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMARGUMENT.",
    "syntax": "IMARGUMENT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMARGUMENT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imconjugate",
    "name": "IMCONJUGATE",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMCONJUGATE.",
    "syntax": "IMCONJUGATE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMCONJUGATE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imcos",
    "name": "IMCOS",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMCOS.",
    "syntax": "IMCOS(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMCOS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imcosh",
    "name": "IMCOSH",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMCOSH.",
    "syntax": "IMCOSH(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMCOSH, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imcot",
    "name": "IMCOT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMCOT.",
    "syntax": "IMCOT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMCOT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imcsc",
    "name": "IMCSC",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMCSC.",
    "syntax": "IMCSC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMCSC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imcsch",
    "name": "IMCSCH",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMCSCH.",
    "syntax": "IMCSCH(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMCSCH, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imdiv",
    "name": "IMDIV",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMDIV.",
    "syntax": "IMDIV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMDIV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imexp",
    "name": "IMEXP",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMEXP.",
    "syntax": "IMEXP(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMEXP, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imln",
    "name": "IMLN",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMLN.",
    "syntax": "IMLN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMLN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imlog10",
    "name": "IMLOG10",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMLOG10.",
    "syntax": "IMLOG10(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMLOG10, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imlog2",
    "name": "IMLOG2",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMLOG2.",
    "syntax": "IMLOG2(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMLOG2, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "impower",
    "name": "IMPOWER",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMPOWER.",
    "syntax": "IMPOWER(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMPOWER, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "improduct",
    "name": "IMPRODUCT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMPRODUCT.",
    "syntax": "IMPRODUCT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMPRODUCT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imreal",
    "name": "IMREAL",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMREAL.",
    "syntax": "IMREAL(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMREAL, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imsec",
    "name": "IMSEC",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSEC.",
    "syntax": "IMSEC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMSEC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imsech",
    "name": "IMSECH",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSECH.",
    "syntax": "IMSECH(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMSECH, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imsin",
    "name": "IMSIN",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSIN.",
    "syntax": "IMSIN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMSIN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imsinh",
    "name": "IMSINH",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSINH.",
    "syntax": "IMSINH(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMSINH, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imsqrt",
    "name": "IMSQRT",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSQRT.",
    "syntax": "IMSQRT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMSQRT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imsub",
    "name": "IMSUB",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSUB.",
    "syntax": "IMSUB(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMSUB, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imsum",
    "name": "IMSUM",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSUM.",
    "syntax": "IMSUM(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMSUM, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "imtan",
    "name": "IMTAN",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMTAN.",
    "syntax": "IMTAN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMTAN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "oct2bin",
    "name": "OCT2BIN",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi OCT2BIN.",
    "syntax": "OCT2BIN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama OCT2BIN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "oct2dec",
    "name": "OCT2DEC",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi OCT2DEC.",
    "syntax": "OCT2DEC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama OCT2DEC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "oct2hex",
    "name": "OCT2HEX",
    "category": "Engineering",
    "displayCategory": "Engineering",
    "level": "Rare / Specialized",
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi OCT2HEX.",
    "syntax": "OCT2HEX(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama OCT2HEX, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "engineering"
    ],
    "hasExercise": false
  },
  {
    "id": "accrint",
    "name": "ACCRINT",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi ACCRINT.",
    "syntax": "ACCRINT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ACCRINT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "accrintm",
    "name": "ACCRINTM",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi ACCRINTM.",
    "syntax": "ACCRINTM(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ACCRINTM, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "amordegrc",
    "name": "AMORDEGRC",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi AMORDEGRC.",
    "syntax": "AMORDEGRC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama AMORDEGRC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "amorlinc",
    "name": "AMORLINC",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi AMORLINC.",
    "syntax": "AMORLINC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama AMORLINC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "coupdaybs",
    "name": "COUPDAYBS",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi COUPDAYBS.",
    "syntax": "COUPDAYBS(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama COUPDAYBS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "coupdays",
    "name": "COUPDAYS",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi COUPDAYS.",
    "syntax": "COUPDAYS(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama COUPDAYS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "coupdaysnc",
    "name": "COUPDAYSNC",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi COUPDAYSNC.",
    "syntax": "COUPDAYSNC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama COUPDAYSNC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "coupncd",
    "name": "COUPNCD",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi COUPNCD.",
    "syntax": "COUPNCD(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama COUPNCD, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "coupnum",
    "name": "COUPNUM",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi COUPNUM.",
    "syntax": "COUPNUM(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama COUPNUM, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "couppcd",
    "name": "COUPPCD",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi COUPPCD.",
    "syntax": "COUPPCD(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama COUPPCD, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "cumipmt",
    "name": "CUMIPMT",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi CUMIPMT.",
    "syntax": "CUMIPMT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CUMIPMT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "cumprinc",
    "name": "CUMPRINC",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi CUMPRINC.",
    "syntax": "CUMPRINC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CUMPRINC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "db",
    "name": "DB",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi DB.",
    "syntax": "DB(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DB, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "ddb",
    "name": "DDB",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi DDB.",
    "syntax": "DDB(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DDB, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "disc",
    "name": "DISC",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi DISC.",
    "syntax": "DISC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DISC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "dollarde",
    "name": "DOLLARDE",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi DOLLARDE.",
    "syntax": "DOLLARDE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DOLLARDE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "dollarfr",
    "name": "DOLLARFR",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi DOLLARFR.",
    "syntax": "DOLLARFR(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DOLLARFR, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "duration",
    "name": "DURATION",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi DURATION.",
    "syntax": "DURATION(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DURATION, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "effect",
    "name": "EFFECT",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi EFFECT.",
    "syntax": "EFFECT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama EFFECT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "fv",
    "name": "FV",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi FV.",
    "syntax": "FV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama FV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "fvschedule",
    "name": "FVSCHEDULE",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi FVSCHEDULE.",
    "syntax": "FVSCHEDULE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama FVSCHEDULE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "intrate",
    "name": "INTRATE",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi INTRATE.",
    "syntax": "INTRATE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama INTRATE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "ipmt",
    "name": "IPMT",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi IPMT.",
    "syntax": "IPMT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IPMT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "irr",
    "name": "IRR",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi IRR.",
    "syntax": "IRR(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IRR, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "ispmt",
    "name": "ISPMT",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi ISPMT.",
    "syntax": "ISPMT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ISPMT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "mduration",
    "name": "MDURATION",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi MDURATION.",
    "syntax": "MDURATION(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama MDURATION, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "mirr",
    "name": "MIRR",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi MIRR.",
    "syntax": "MIRR(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama MIRR, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "nominal",
    "name": "NOMINAL",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi NOMINAL.",
    "syntax": "NOMINAL(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama NOMINAL, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "nper",
    "name": "NPER",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi NPER.",
    "syntax": "NPER(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama NPER, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "npv",
    "name": "NPV",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi NPV.",
    "syntax": "NPV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama NPV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "oddfprice",
    "name": "ODDFPRICE",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi ODDFPRICE.",
    "syntax": "ODDFPRICE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ODDFPRICE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "oddfyield",
    "name": "ODDFYIELD",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi ODDFYIELD.",
    "syntax": "ODDFYIELD(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ODDFYIELD, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "oddlprice",
    "name": "ODDLPRICE",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi ODDLPRICE.",
    "syntax": "ODDLPRICE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ODDLPRICE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "oddlyield",
    "name": "ODDLYIELD",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi ODDLYIELD.",
    "syntax": "ODDLYIELD(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ODDLYIELD, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "pduration",
    "name": "PDURATION",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi PDURATION.",
    "syntax": "PDURATION(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PDURATION, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "pmt",
    "name": "PMT",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi PMT.",
    "syntax": "PMT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PMT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "ppmt",
    "name": "PPMT",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi PPMT.",
    "syntax": "PPMT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PPMT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "price",
    "name": "PRICE",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi PRICE.",
    "syntax": "PRICE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PRICE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "pricedisc",
    "name": "PRICEDISC",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi PRICEDISC.",
    "syntax": "PRICEDISC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PRICEDISC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "pricemat",
    "name": "PRICEMAT",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi PRICEMAT.",
    "syntax": "PRICEMAT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PRICEMAT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "pv",
    "name": "PV",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi PV.",
    "syntax": "PV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "rate",
    "name": "RATE",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi RATE.",
    "syntax": "RATE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama RATE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "received",
    "name": "RECEIVED",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi RECEIVED.",
    "syntax": "RECEIVED(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama RECEIVED, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "rri",
    "name": "RRI",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi RRI.",
    "syntax": "RRI(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama RRI, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "sln",
    "name": "SLN",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi SLN.",
    "syntax": "SLN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SLN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "syd",
    "name": "SYD",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi SYD.",
    "syntax": "SYD(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SYD, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "tbilleq",
    "name": "TBILLEQ",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi TBILLEQ.",
    "syntax": "TBILLEQ(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama TBILLEQ, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "tbillprice",
    "name": "TBILLPRICE",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi TBILLPRICE.",
    "syntax": "TBILLPRICE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama TBILLPRICE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "tbillyield",
    "name": "TBILLYIELD",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi TBILLYIELD.",
    "syntax": "TBILLYIELD(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama TBILLYIELD, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "vdb",
    "name": "VDB",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi VDB.",
    "syntax": "VDB(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama VDB, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "xirr",
    "name": "XIRR",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi XIRR.",
    "syntax": "XIRR(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama XIRR, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "xnpv",
    "name": "XNPV",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi XNPV.",
    "syntax": "XNPV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama XNPV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "yield",
    "name": "YIELD",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi YIELD.",
    "syntax": "YIELD(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama YIELD, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "yielddisc",
    "name": "YIELDDISC",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi YIELDDISC.",
    "syntax": "YIELDDISC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama YIELDDISC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "yieldmat",
    "name": "YIELDMAT",
    "category": "Financial",
    "displayCategory": "Financial",
    "level": "Rare / Specialized",
    "description": "Menghitung kebutuhan finansial memakai fungsi YIELDMAT.",
    "syntax": "YIELDMAT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama YIELDMAT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
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
    "hasExercise": false
  },
  {
    "id": "cell",
    "name": "CELL",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Advanced",
    "description": "Mengecek informasi cell, error, atau tipe data memakai CELL.",
    "syntax": "CELL(info_type, [reference])",
    "simpleLogic": "Pahami input utama CELL, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "ERROR.TYPE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ERROR.TYPE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "info",
    "name": "INFO",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Intermediate",
    "description": "Mengecek informasi cell, error, atau tipe data memakai INFO.",
    "syntax": "INFO(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama INFO, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "isblank",
    "name": "ISBLANK",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Basic",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISBLANK.",
    "syntax": "ISBLANK(value)",
    "simpleLogic": "Pahami input utama ISBLANK, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "ISERR(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ISERR, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "iserror",
    "name": "ISERROR",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Basic",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISERROR.",
    "syntax": "ISERROR(value)",
    "simpleLogic": "Pahami input utama ISERROR, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "ISEVEN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ISEVEN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "isformula",
    "name": "ISFORMULA",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Intermediate",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISFORMULA.",
    "syntax": "ISFORMULA(reference)",
    "simpleLogic": "Pahami input utama ISFORMULA, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "ISLOGICAL(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ISLOGICAL, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "isna",
    "name": "ISNA",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Basic",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISNA.",
    "syntax": "ISNA(value)",
    "simpleLogic": "Pahami input utama ISNA, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "ISNONTEXT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ISNONTEXT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "isnumber",
    "name": "ISNUMBER",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Basic",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISNUMBER.",
    "syntax": "ISNUMBER(value)",
    "simpleLogic": "Pahami input utama ISNUMBER, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "ISODD(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ISODD, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "isomitted",
    "name": "ISOMITTED",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Intermediate",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISOMITTED.",
    "syntax": "ISOMITTED(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ISOMITTED, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "isref",
    "name": "ISREF",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Intermediate",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISREF.",
    "syntax": "ISREF(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ISREF, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "istext",
    "name": "ISTEXT",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Basic",
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISTEXT.",
    "syntax": "ISTEXT(value)",
    "simpleLogic": "Pahami input utama ISTEXT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama N, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "NA(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama NA, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "sheet",
    "name": "SHEET",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Intermediate",
    "description": "Mengecek informasi cell, error, atau tipe data memakai SHEET.",
    "syntax": "SHEET(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SHEET, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "sheets",
    "name": "SHEETS",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Intermediate",
    "description": "Mengecek informasi cell, error, atau tipe data memakai SHEETS.",
    "syntax": "SHEETS(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SHEETS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "type",
    "name": "TYPE",
    "category": "Information",
    "displayCategory": "Information",
    "level": "Advanced",
    "description": "Mengecek informasi cell, error, atau tipe data memakai TYPE.",
    "syntax": "TYPE(value)",
    "simpleLogic": "Pahami input utama TYPE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "XOR(argument1, [argument2], ...)",
    "simpleLogic": "Pikirkan seperti pertanyaan ya/tidak. Hasil logika menentukan langkah berikutnya.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "address",
    "name": "ADDRESS",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai ADDRESS.",
    "syntax": "ADDRESS(row_num, column_num, [abs_num], [a1], [sheet_text])",
    "simpleLogic": "Pahami input utama ADDRESS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "AREAS(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama AREAS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "choose",
    "name": "CHOOSE",
    "category": "Lookup and Reference",
    "displayCategory": "Lookup & Reference",
    "level": "Intermediate",
    "description": "Mencari, mengambil, atau membuat referensi data memakai CHOOSE.",
    "syntax": "CHOOSE(index_num, value1, [value2], ...)",
    "simpleLogic": "Pahami input utama CHOOSE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama COLUMN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama COLUMNS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama FORMULATEXT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "GETPIVOTDATA(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama GETPIVOTDATA, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
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
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama HYPERLINK, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "IMAGE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama IMAGE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
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
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama INDIRECT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama OFFSET, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama ROW, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama ROWS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "RTD(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama RTD, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
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
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama ABS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "ACOS(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ACOS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "acosh",
    "name": "ACOSH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ACOSH.",
    "syntax": "ACOSH(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ACOSH, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "acot",
    "name": "ACOT",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ACOT.",
    "syntax": "ACOT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ACOT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "acoth",
    "name": "ACOTH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ACOTH.",
    "syntax": "ACOTH(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ACOTH, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "aggregate",
    "name": "AGGREGATE",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Advanced",
    "description": "Melakukan perhitungan matematika memakai fungsi AGGREGATE.",
    "syntax": "AGGREGATE(function_num, options, ref1, [ref2], ...)",
    "simpleLogic": "Pahami input utama AGGREGATE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "ARABIC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ARABIC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "asin",
    "name": "ASIN",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ASIN.",
    "syntax": "ASIN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ASIN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "asinh",
    "name": "ASINH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ASINH.",
    "syntax": "ASINH(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ASINH, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "atan",
    "name": "ATAN",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ATAN.",
    "syntax": "ATAN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ATAN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "atan2",
    "name": "ATAN2",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ATAN2.",
    "syntax": "ATAN2(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ATAN2, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "atanh",
    "name": "ATANH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ATANH.",
    "syntax": "ATANH(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ATANH, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "base",
    "name": "BASE",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi BASE.",
    "syntax": "BASE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BASE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "ceiling",
    "name": "CEILING",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi CEILING.",
    "syntax": "CEILING(number, significance)",
    "simpleLogic": "Pahami input utama CEILING, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "CEILING.MATH(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CEILING.MATH, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "ceiling_precise",
    "name": "CEILING.PRECISE",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi CEILING.PRECISE.",
    "syntax": "CEILING.PRECISE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CEILING.PRECISE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "combin",
    "name": "COMBIN",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi COMBIN.",
    "syntax": "COMBIN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama COMBIN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "combina",
    "name": "COMBINA",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi COMBINA.",
    "syntax": "COMBINA(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama COMBINA, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "cos",
    "name": "COS",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi COS.",
    "syntax": "COS(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama COS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "cosh",
    "name": "COSH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi COSH.",
    "syntax": "COSH(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama COSH, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "cot",
    "name": "COT",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi COT.",
    "syntax": "COT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama COT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "coth",
    "name": "COTH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi COTH.",
    "syntax": "COTH(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama COTH, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "csc",
    "name": "CSC",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi CSC.",
    "syntax": "CSC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CSC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "csch",
    "name": "CSCH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi CSCH.",
    "syntax": "CSCH(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CSCH, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "decimal",
    "name": "DECIMAL",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi DECIMAL.",
    "syntax": "DECIMAL(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DECIMAL, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "degrees",
    "name": "DEGREES",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi DEGREES.",
    "syntax": "DEGREES(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DEGREES, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "even",
    "name": "EVEN",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi EVEN.",
    "syntax": "EVEN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama EVEN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "exp",
    "name": "EXP",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi EXP.",
    "syntax": "EXP(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama EXP, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "fact",
    "name": "FACT",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi FACT.",
    "syntax": "FACT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama FACT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "factdouble",
    "name": "FACTDOUBLE",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi FACTDOUBLE.",
    "syntax": "FACTDOUBLE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama FACTDOUBLE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "floor",
    "name": "FLOOR",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi FLOOR.",
    "syntax": "FLOOR(number, significance)",
    "simpleLogic": "Pahami input utama FLOOR, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "FLOOR.MATH(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama FLOOR.MATH, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "floor_precise",
    "name": "FLOOR.PRECISE",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi FLOOR.PRECISE.",
    "syntax": "FLOOR.PRECISE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama FLOOR.PRECISE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "gcd",
    "name": "GCD",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi GCD.",
    "syntax": "GCD(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama GCD, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "int",
    "name": "INT",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Basic",
    "description": "Melakukan perhitungan matematika memakai fungsi INT.",
    "syntax": "INT(number)",
    "simpleLogic": "Pahami input utama INT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "ISO.CEILING(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ISO.CEILING, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "lcm",
    "name": "LCM",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi LCM.",
    "syntax": "LCM(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama LCM, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "ln",
    "name": "LN",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi LN.",
    "syntax": "LN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama LN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "log",
    "name": "LOG",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi LOG.",
    "syntax": "LOG(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama LOG, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "log10",
    "name": "LOG10",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi LOG10.",
    "syntax": "LOG10(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama LOG10, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "mdeterm",
    "name": "MDETERM",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi MDETERM.",
    "syntax": "MDETERM(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama MDETERM, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "minverse",
    "name": "MINVERSE",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi MINVERSE.",
    "syntax": "MINVERSE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama MINVERSE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "mmult",
    "name": "MMULT",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi MMULT.",
    "syntax": "MMULT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama MMULT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "mod",
    "name": "MOD",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Basic",
    "description": "Melakukan perhitungan matematika memakai fungsi MOD.",
    "syntax": "MOD(number, divisor)",
    "simpleLogic": "Pahami input utama MOD, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "MROUND(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama MROUND, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "multinomial",
    "name": "MULTINOMIAL",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi MULTINOMIAL.",
    "syntax": "MULTINOMIAL(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama MULTINOMIAL, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "munit",
    "name": "MUNIT",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi MUNIT.",
    "syntax": "MUNIT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama MUNIT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "odd",
    "name": "ODD",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi ODD.",
    "syntax": "ODD(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ODD, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "pi",
    "name": "PI",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi PI.",
    "syntax": "PI(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PI, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "power",
    "name": "POWER",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi POWER.",
    "syntax": "POWER(number, power)",
    "simpleLogic": "Pahami input utama POWER, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "PRODUCT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PRODUCT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "quotient",
    "name": "QUOTIENT",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi QUOTIENT.",
    "syntax": "QUOTIENT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama QUOTIENT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "radians",
    "name": "RADIANS",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi RADIANS.",
    "syntax": "RADIANS(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama RADIANS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "rand",
    "name": "RAND",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi RAND.",
    "syntax": "RAND()",
    "simpleLogic": "Pahami input utama RAND, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama RANDBETWEEN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "ROMAN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ROMAN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "round",
    "name": "ROUND",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Basic",
    "description": "Melakukan perhitungan matematika memakai fungsi ROUND.",
    "syntax": "ROUND(number, num_digits)",
    "simpleLogic": "Pahami input utama ROUND, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama ROUNDDOWN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama ROUNDUP, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "SEC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SEC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "sech",
    "name": "SECH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SECH.",
    "syntax": "SECH(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SECH, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "seriessum",
    "name": "SERIESSUM",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SERIESSUM.",
    "syntax": "SERIESSUM(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SERIESSUM, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "sign",
    "name": "SIGN",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SIGN.",
    "syntax": "SIGN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SIGN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "sin",
    "name": "SIN",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SIN.",
    "syntax": "SIN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SIN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "sinh",
    "name": "SINH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SINH.",
    "syntax": "SINH(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SINH, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "sqrt",
    "name": "SQRT",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Basic",
    "description": "Melakukan perhitungan matematika memakai fungsi SQRT.",
    "syntax": "SQRT(number)",
    "simpleLogic": "Pahami input utama SQRT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "SQRTPI(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SQRTPI, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "subtotal",
    "name": "SUBTOTAL",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SUBTOTAL.",
    "syntax": "SUBTOTAL(function_num, ref1, [ref2], ...)",
    "simpleLogic": "Pahami input utama SUBTOTAL, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "simpleLogic": "Pahami input utama SUMPRODUCT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "syntax": "SUMSQ(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SUMSQ, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "sumx2my2",
    "name": "SUMX2MY2",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SUMX2MY2.",
    "syntax": "SUMX2MY2(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SUMX2MY2, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "sumx2py2",
    "name": "SUMX2PY2",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SUMX2PY2.",
    "syntax": "SUMX2PY2(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SUMX2PY2, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "sumxmy2",
    "name": "SUMXMY2",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi SUMXMY2.",
    "syntax": "SUMXMY2(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SUMXMY2, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "tan",
    "name": "TAN",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi TAN.",
    "syntax": "TAN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama TAN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "tanh",
    "name": "TANH",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi TANH.",
    "syntax": "TANH(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama TANH, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "trunc",
    "name": "TRUNC",
    "category": "Math and Trigonometry",
    "displayCategory": "Math & Trigonometry",
    "level": "Intermediate",
    "description": "Melakukan perhitungan matematika memakai fungsi TRUNC.",
    "syntax": "TRUNC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama TRUNC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "call",
    "name": "CALL",
    "category": "Add-in / User Defined",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "Fungsi Excel CALL untuk kebutuhan khusus.",
    "syntax": "CALL(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CALL, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "cubekpimember",
    "name": "CUBEKPIMEMBER",
    "category": "Cube",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "Fungsi Excel CUBEKPIMEMBER untuk kebutuhan khusus.",
    "syntax": "CUBEKPIMEMBER(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CUBEKPIMEMBER, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "cubemember",
    "name": "CUBEMEMBER",
    "category": "Cube",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "Fungsi Excel CUBEMEMBER untuk kebutuhan khusus.",
    "syntax": "CUBEMEMBER(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CUBEMEMBER, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "cubememberproperty",
    "name": "CUBEMEMBERPROPERTY",
    "category": "Cube",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "Fungsi Excel CUBEMEMBERPROPERTY untuk kebutuhan khusus.",
    "syntax": "CUBEMEMBERPROPERTY(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CUBEMEMBERPROPERTY, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "cuberankedmember",
    "name": "CUBERANKEDMEMBER",
    "category": "Cube",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "Fungsi Excel CUBERANKEDMEMBER untuk kebutuhan khusus.",
    "syntax": "CUBERANKEDMEMBER(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CUBERANKEDMEMBER, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "cubeset",
    "name": "CUBESET",
    "category": "Cube",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "Fungsi Excel CUBESET untuk kebutuhan khusus.",
    "syntax": "CUBESET(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CUBESET, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "cubesetcount",
    "name": "CUBESETCOUNT",
    "category": "Cube",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "Fungsi Excel CUBESETCOUNT untuk kebutuhan khusus.",
    "syntax": "CUBESETCOUNT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CUBESETCOUNT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "cubevalue",
    "name": "CUBEVALUE",
    "category": "Cube",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "Fungsi Excel CUBEVALUE untuk kebutuhan khusus.",
    "syntax": "CUBEVALUE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CUBEVALUE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "euroconvert",
    "name": "EUROCONVERT",
    "category": "Add-in / User Defined",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "Fungsi Excel EUROCONVERT untuk kebutuhan khusus.",
    "syntax": "EUROCONVERT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama EUROCONVERT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "register_id",
    "name": "REGISTER.ID",
    "category": "Add-in / User Defined",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "Fungsi Excel REGISTER.ID untuk kebutuhan khusus.",
    "syntax": "REGISTER.ID(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama REGISTER.ID, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "sql_request",
    "name": "SQL.REQUEST",
    "category": "Add-in / User Defined",
    "displayCategory": "Rare / Specialized",
    "level": "Rare / Specialized",
    "description": "Fungsi Excel SQL.REQUEST untuk kebutuhan khusus.",
    "syntax": "SQL.REQUEST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SQL.REQUEST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "avedev",
    "name": "AVEDEV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi AVEDEV.",
    "syntax": "AVEDEV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama AVEDEV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "averagea",
    "name": "AVERAGEA",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi AVERAGEA.",
    "syntax": "AVERAGEA(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama AVERAGEA, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "beta_dist",
    "name": "BETA.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi BETA.DIST.",
    "syntax": "BETA.DIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BETA.DIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "beta_inv",
    "name": "BETA.INV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi BETA.INV.",
    "syntax": "BETA.INV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BETA.INV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "binom_dist",
    "name": "BINOM.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi BINOM.DIST.",
    "syntax": "BINOM.DIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BINOM.DIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "binom_dist_range",
    "name": "BINOM.DIST.RANGE",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi BINOM.DIST.RANGE.",
    "syntax": "BINOM.DIST.RANGE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BINOM.DIST.RANGE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "binom_inv",
    "name": "BINOM.INV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi BINOM.INV.",
    "syntax": "BINOM.INV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama BINOM.INV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "chisq_dist",
    "name": "CHISQ.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi CHISQ.DIST.",
    "syntax": "CHISQ.DIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CHISQ.DIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "chisq_dist_rt",
    "name": "CHISQ.DIST.RT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi CHISQ.DIST.RT.",
    "syntax": "CHISQ.DIST.RT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CHISQ.DIST.RT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "chisq_inv",
    "name": "CHISQ.INV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi CHISQ.INV.",
    "syntax": "CHISQ.INV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CHISQ.INV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "chisq_inv_rt",
    "name": "CHISQ.INV.RT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi CHISQ.INV.RT.",
    "syntax": "CHISQ.INV.RT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CHISQ.INV.RT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "chisq_test",
    "name": "CHISQ.TEST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi CHISQ.TEST.",
    "syntax": "CHISQ.TEST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CHISQ.TEST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "confidence_norm",
    "name": "CONFIDENCE.NORM",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi CONFIDENCE.NORM.",
    "syntax": "CONFIDENCE.NORM(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CONFIDENCE.NORM, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "confidence_t",
    "name": "CONFIDENCE.T",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi CONFIDENCE.T.",
    "syntax": "CONFIDENCE.T(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CONFIDENCE.T, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "correl",
    "name": "CORREL",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi CORREL.",
    "syntax": "CORREL(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama CORREL, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "covariance_p",
    "name": "COVARIANCE.P",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi COVARIANCE.P.",
    "syntax": "COVARIANCE.P(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama COVARIANCE.P, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "covariance_s",
    "name": "COVARIANCE.S",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi COVARIANCE.S.",
    "syntax": "COVARIANCE.S(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama COVARIANCE.S, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "devsq",
    "name": "DEVSQ",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi DEVSQ.",
    "syntax": "DEVSQ(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama DEVSQ, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "expon_dist",
    "name": "EXPON.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi EXPON.DIST.",
    "syntax": "EXPON.DIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama EXPON.DIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "f_dist",
    "name": "F.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi F.DIST.",
    "syntax": "F.DIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama F.DIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "f_dist_rt",
    "name": "F.DIST.RT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi F.DIST.RT.",
    "syntax": "F.DIST.RT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama F.DIST.RT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "f_inv",
    "name": "F.INV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi F.INV.",
    "syntax": "F.INV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama F.INV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "f_inv_rt",
    "name": "F.INV.RT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi F.INV.RT.",
    "syntax": "F.INV.RT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama F.INV.RT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "f_test",
    "name": "F.TEST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi F.TEST.",
    "syntax": "F.TEST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama F.TEST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "fisher",
    "name": "FISHER",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi FISHER.",
    "syntax": "FISHER(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama FISHER, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "fisherinv",
    "name": "FISHERINV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi FISHERINV.",
    "syntax": "FISHERINV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama FISHERINV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "forecast",
    "name": "FORECAST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Advanced",
    "description": "Menghitung analisis statistik memakai fungsi FORECAST.",
    "syntax": "FORECAST(x, known_y's, known_x's)",
    "simpleLogic": "Pahami input utama FORECAST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Menghitung analisis statistik memakai fungsi FORECAST.ETS.",
    "syntax": "FORECAST.ETS(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama FORECAST.ETS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "forecast_ets_confint",
    "name": "FORECAST.ETS.CONFINT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi FORECAST.ETS.CONFINT.",
    "syntax": "FORECAST.ETS.CONFINT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama FORECAST.ETS.CONFINT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "forecast_ets_seasonality",
    "name": "FORECAST.ETS.SEASONALITY",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi FORECAST.ETS.SEASONALITY.",
    "syntax": "FORECAST.ETS.SEASONALITY(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama FORECAST.ETS.SEASONALITY, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "forecast_ets_stat",
    "name": "FORECAST.ETS.STAT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi FORECAST.ETS.STAT.",
    "syntax": "FORECAST.ETS.STAT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama FORECAST.ETS.STAT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "forecast_linear",
    "name": "FORECAST.LINEAR",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi FORECAST.LINEAR.",
    "syntax": "FORECAST.LINEAR(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama FORECAST.LINEAR, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "frequency",
    "name": "FREQUENCY",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi FREQUENCY.",
    "syntax": "FREQUENCY(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama FREQUENCY, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "gamma",
    "name": "GAMMA",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi GAMMA.",
    "syntax": "GAMMA(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama GAMMA, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "gamma_dist",
    "name": "GAMMA.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi GAMMA.DIST.",
    "syntax": "GAMMA.DIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama GAMMA.DIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "gamma_inv",
    "name": "GAMMA.INV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi GAMMA.INV.",
    "syntax": "GAMMA.INV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama GAMMA.INV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "gammaln",
    "name": "GAMMALN",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi GAMMALN.",
    "syntax": "GAMMALN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama GAMMALN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "gammaln_precise",
    "name": "GAMMALN.PRECISE",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi GAMMALN.PRECISE.",
    "syntax": "GAMMALN.PRECISE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama GAMMALN.PRECISE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "gauss",
    "name": "GAUSS",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi GAUSS.",
    "syntax": "GAUSS(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama GAUSS, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "geomean",
    "name": "GEOMEAN",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi GEOMEAN.",
    "syntax": "GEOMEAN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama GEOMEAN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "growth",
    "name": "GROWTH",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi GROWTH.",
    "syntax": "GROWTH(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama GROWTH, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "harmean",
    "name": "HARMEAN",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi HARMEAN.",
    "syntax": "HARMEAN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama HARMEAN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "hypgeom_dist",
    "name": "HYPGEOM.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi HYPGEOM.DIST.",
    "syntax": "HYPGEOM.DIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama HYPGEOM.DIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "intercept",
    "name": "INTERCEPT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi INTERCEPT.",
    "syntax": "INTERCEPT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama INTERCEPT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "kurt",
    "name": "KURT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi KURT.",
    "syntax": "KURT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama KURT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "linest",
    "name": "LINEST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi LINEST.",
    "syntax": "LINEST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama LINEST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "logest",
    "name": "LOGEST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi LOGEST.",
    "syntax": "LOGEST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama LOGEST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "lognorm_dist",
    "name": "LOGNORM.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi LOGNORM.DIST.",
    "syntax": "LOGNORM.DIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama LOGNORM.DIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "lognorm_inv",
    "name": "LOGNORM.INV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi LOGNORM.INV.",
    "syntax": "LOGNORM.INV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama LOGNORM.INV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "maxa",
    "name": "MAXA",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi MAXA.",
    "syntax": "MAXA(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama MAXA, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "median",
    "name": "MEDIAN",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi MEDIAN.",
    "syntax": "MEDIAN(number1, [number2], ...)",
    "simpleLogic": "Pahami input utama MEDIAN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Menghitung analisis statistik memakai fungsi MINA.",
    "syntax": "MINA(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama MINA, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "mode_mult",
    "name": "MODE.MULT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi MODE.MULT.",
    "syntax": "MODE.MULT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama MODE.MULT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "mode_sngl",
    "name": "MODE.SNGL",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi MODE.SNGL.",
    "syntax": "MODE.SNGL(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama MODE.SNGL, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "negbinom_dist",
    "name": "NEGBINOM.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi NEGBINOM.DIST.",
    "syntax": "NEGBINOM.DIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama NEGBINOM.DIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "norm_dist",
    "name": "NORM.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi NORM.DIST.",
    "syntax": "NORM.DIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama NORM.DIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "norm_inv",
    "name": "NORM.INV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi NORM.INV.",
    "syntax": "NORM.INV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama NORM.INV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "norm_s_dist",
    "name": "NORM.S.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi NORM.S.DIST.",
    "syntax": "NORM.S.DIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama NORM.S.DIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "norm_s_inv",
    "name": "NORM.S.INV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi NORM.S.INV.",
    "syntax": "NORM.S.INV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama NORM.S.INV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "pearson",
    "name": "PEARSON",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi PEARSON.",
    "syntax": "PEARSON(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PEARSON, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "percentile_exc",
    "name": "PERCENTILE.EXC",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi PERCENTILE.EXC.",
    "syntax": "PERCENTILE.EXC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PERCENTILE.EXC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "percentile_inc",
    "name": "PERCENTILE.INC",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi PERCENTILE.INC.",
    "syntax": "PERCENTILE.INC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PERCENTILE.INC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "percentrank_exc",
    "name": "PERCENTRANK.EXC",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi PERCENTRANK.EXC.",
    "syntax": "PERCENTRANK.EXC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PERCENTRANK.EXC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "percentrank_inc",
    "name": "PERCENTRANK.INC",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi PERCENTRANK.INC.",
    "syntax": "PERCENTRANK.INC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PERCENTRANK.INC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "permut",
    "name": "PERMUT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi PERMUT.",
    "syntax": "PERMUT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PERMUT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "permutationa",
    "name": "PERMUTATIONA",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi PERMUTATIONA.",
    "syntax": "PERMUTATIONA(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PERMUTATIONA, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "phi",
    "name": "PHI",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi PHI.",
    "syntax": "PHI(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PHI, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "poisson_dist",
    "name": "POISSON.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi POISSON.DIST.",
    "syntax": "POISSON.DIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama POISSON.DIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "prob",
    "name": "PROB",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi PROB.",
    "syntax": "PROB(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama PROB, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "quartile_exc",
    "name": "QUARTILE.EXC",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi QUARTILE.EXC.",
    "syntax": "QUARTILE.EXC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama QUARTILE.EXC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "quartile_inc",
    "name": "QUARTILE.INC",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi QUARTILE.INC.",
    "syntax": "QUARTILE.INC(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama QUARTILE.INC, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "rank_avg",
    "name": "RANK.AVG",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi RANK.AVG.",
    "syntax": "RANK.AVG(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama RANK.AVG, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "rank_eq",
    "name": "RANK.EQ",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Advanced",
    "description": "Menghitung analisis statistik memakai fungsi RANK.EQ.",
    "syntax": "RANK.EQ(number, ref, [order])",
    "simpleLogic": "Pahami input utama RANK.EQ, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Menghitung analisis statistik memakai fungsi RSQ.",
    "syntax": "RSQ(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama RSQ, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "skew",
    "name": "SKEW",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi SKEW.",
    "syntax": "SKEW(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SKEW, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "skew_p",
    "name": "SKEW.P",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi SKEW.P.",
    "syntax": "SKEW.P(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SKEW.P, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "slope",
    "name": "SLOPE",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi SLOPE.",
    "syntax": "SLOPE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama SLOPE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "standardize",
    "name": "STANDARDIZE",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi STANDARDIZE.",
    "syntax": "STANDARDIZE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama STANDARDIZE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "stdev_p",
    "name": "STDEV.P",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Advanced",
    "description": "Menghitung analisis statistik memakai fungsi STDEV.P.",
    "syntax": "STDEV.P(number1, [number2], ...)",
    "simpleLogic": "Pahami input utama STDEV.P, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Menghitung analisis statistik memakai fungsi STDEV.S.",
    "syntax": "STDEV.S(number1, [number2], ...)",
    "simpleLogic": "Pahami input utama STDEV.S, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Menghitung analisis statistik memakai fungsi STDEVA.",
    "syntax": "STDEVA(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama STDEVA, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "stdevpa",
    "name": "STDEVPA",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi STDEVPA.",
    "syntax": "STDEVPA(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama STDEVPA, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "steyx",
    "name": "STEYX",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi STEYX.",
    "syntax": "STEYX(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama STEYX, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "t_dist",
    "name": "T.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi T.DIST.",
    "syntax": "T.DIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama T.DIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "t_dist_2t",
    "name": "T.DIST.2T",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi T.DIST.2T.",
    "syntax": "T.DIST.2T(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama T.DIST.2T, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "t_dist_rt",
    "name": "T.DIST.RT",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi T.DIST.RT.",
    "syntax": "T.DIST.RT(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama T.DIST.RT, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "t_inv",
    "name": "T.INV",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi T.INV.",
    "syntax": "T.INV(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama T.INV, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "t_inv_2t",
    "name": "T.INV.2T",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi T.INV.2T.",
    "syntax": "T.INV.2T(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama T.INV.2T, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "t_test",
    "name": "T.TEST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi T.TEST.",
    "syntax": "T.TEST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama T.TEST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "trend",
    "name": "TREND",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Advanced",
    "description": "Menghitung analisis statistik memakai fungsi TREND.",
    "syntax": "TREND(known_y's, [known_x's], [new_x's], [const])",
    "simpleLogic": "Pahami input utama TREND, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Menghitung analisis statistik memakai fungsi TRIMMEAN.",
    "syntax": "TRIMMEAN(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama TRIMMEAN, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "var_p",
    "name": "VAR.P",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Advanced",
    "description": "Menghitung analisis statistik memakai fungsi VAR.P.",
    "syntax": "VAR.P(number1, [number2], ...)",
    "simpleLogic": "Pahami input utama VAR.P, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Menghitung analisis statistik memakai fungsi VAR.S.",
    "syntax": "VAR.S(number1, [number2], ...)",
    "simpleLogic": "Pahami input utama VAR.S, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "description": "Menghitung analisis statistik memakai fungsi VARA.",
    "syntax": "VARA(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama VARA, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "varpa",
    "name": "VARPA",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi VARPA.",
    "syntax": "VARPA(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama VARPA, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "weibull_dist",
    "name": "WEIBULL.DIST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi WEIBULL.DIST.",
    "syntax": "WEIBULL.DIST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama WEIBULL.DIST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "z_test",
    "name": "Z.TEST",
    "category": "Statistical",
    "displayCategory": "Statistical",
    "level": "Intermediate",
    "description": "Menghitung analisis statistik memakai fungsi Z.TEST.",
    "syntax": "Z.TEST(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama Z.TEST, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
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
    "hasExercise": false
  },
  {
    "id": "arraytotext",
    "name": "ARRAYTOTEXT",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi ARRAYTOTEXT.",
    "syntax": "ARRAYTOTEXT(argument1, [argument2], ...)",
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
    "hasExercise": false
  },
  {
    "id": "asc",
    "name": "ASC",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi ASC.",
    "syntax": "ASC(argument1, [argument2], ...)",
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
    "hasExercise": false
  },
  {
    "id": "bahttext",
    "name": "BAHTTEXT",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi BAHTTEXT.",
    "syntax": "BAHTTEXT(argument1, [argument2], ...)",
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
    "hasExercise": false
  },
  {
    "id": "char",
    "name": "CHAR",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi CHAR.",
    "syntax": "CHAR(argument1, [argument2], ...)",
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
    "hasExercise": false
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
    "syntax": "CODE(argument1, [argument2], ...)",
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
    "hasExercise": false
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
    "syntax": "DBCS(argument1, [argument2], ...)",
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
    "hasExercise": false
  },
  {
    "id": "dollar",
    "name": "DOLLAR",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi DOLLAR.",
    "syntax": "DOLLAR(argument1, [argument2], ...)",
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
    "hasExercise": false
  },
  {
    "id": "exact",
    "name": "EXACT",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi EXACT.",
    "syntax": "EXACT(argument1, [argument2], ...)",
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
    "hasExercise": false
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
    "syntax": "FINDB(argument1, [argument2], ...)",
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
    "hasExercise": false
  },
  {
    "id": "fixed",
    "name": "FIXED",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi FIXED.",
    "syntax": "FIXED(argument1, [argument2], ...)",
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
    "hasExercise": false
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
    "syntax": "LEFTB(argument1, [argument2], ...)",
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
    "hasExercise": false
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
    "syntax": "LENB(argument1, [argument2], ...)",
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
    "hasExercise": false
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
    "syntax": "MIDB(argument1, [argument2], ...)",
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
    "hasExercise": false
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
    "syntax": "PHONETIC(argument1, [argument2], ...)",
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
    "hasExercise": false
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
    "syntax": "REPLACEB(argument1, [argument2], ...)",
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
    "hasExercise": false
  },
  {
    "id": "rept",
    "name": "REPT",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi REPT.",
    "syntax": "REPT(argument1, [argument2], ...)",
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
    "hasExercise": false
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
    "syntax": "RIGHTB(argument1, [argument2], ...)",
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
    "hasExercise": false
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
    "syntax": "SEARCHB(argument1, [argument2], ...)",
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
    "hasExercise": false
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
    "syntax": "T(argument1, [argument2], ...)",
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
    "hasExercise": false
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
    "syntax": "UNICHAR(argument1, [argument2], ...)",
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
    "hasExercise": false
  },
  {
    "id": "unicode",
    "name": "UNICODE",
    "category": "Text",
    "displayCategory": "Text",
    "level": "Intermediate",
    "description": "Mengolah teks menggunakan fungsi UNICODE.",
    "syntax": "UNICODE(argument1, [argument2], ...)",
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
    "hasExercise": false
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
    "syntax": "VALUETOTEXT(argument1, [argument2], ...)",
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
    "hasExercise": false
  },
  {
    "id": "encodeurl",
    "name": "ENCODEURL",
    "category": "Web",
    "displayCategory": "Web",
    "level": "Intermediate",
    "description": "Mengolah data web, URL, atau XML memakai fungsi ENCODEURL.",
    "syntax": "ENCODEURL(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama ENCODEURL, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "web"
    ],
    "hasExercise": false
  },
  {
    "id": "filterxml",
    "name": "FILTERXML",
    "category": "Web",
    "displayCategory": "Web",
    "level": "Intermediate",
    "description": "Mengolah data web, URL, atau XML memakai fungsi FILTERXML.",
    "syntax": "FILTERXML(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama FILTERXML, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "web"
    ],
    "hasExercise": false
  },
  {
    "id": "webservice",
    "name": "WEBSERVICE",
    "category": "Web",
    "displayCategory": "Web",
    "level": "Intermediate",
    "description": "Mengolah data web, URL, atau XML memakai fungsi WEBSERVICE.",
    "syntax": "WEBSERVICE(argument1, [argument2], ...)",
    "simpleLogic": "Pahami input utama WEBSERVICE, lalu cocokkan dengan hasil yang ingin kamu ambil.",
    "useCase": "Dipakai saat kebutuhan datanya cocok dengan fungsi dan format rumus ini.",
    "version": "All supported Excel versions",
    "availability": [
      "Excel Desktop",
      "Excel Web",
      "Microsoft 365"
    ],
    "tags": [
      "web"
    ],
    "hasExercise": false
  }
];

export const formulaCatalogFull = baseFormulaCatalogFull.map((formula) => ({
  ...formula,
  ...(formulaLearningContent[formula.name] || formulaLearningContent[formula.id] || {})
}));

export const formulaById = Object.fromEntries(formulaCatalogFull.map((formula) => [formula.id, formula]));

export const formulasByCategory = formulaCatalogFull.reduce((acc, formula) => {
  const key = formula.displayCategory;
  acc[key] = acc[key] || [];
  acc[key].push(formula);
  return acc;
}, {});

export function importFormulaCatalog(nextCatalog = []) {
  if (!Array.isArray(nextCatalog)) return formulaCatalogFull;
  return nextCatalog.filter(Boolean).map((item) => ({
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
    hasExercise: Boolean(item.hasExercise)
  }));
}
