# Formula Coach

Formula Coach adalah website edukasi Excel berbasis React + Vite + Tailwind CSS.

Fokusnya bukan cuma menampilkan daftar rumus, tapi membuat user menulis formula sendiri, lalu sistem memberi koreksi spesifik.

## Fitur yang sudah ada

- Katalog 520 function/rumus Excel dalam `src/data/formulaCatalogFull.js`
- Sidebar kanan dengan search, filter kategori, filter level, filter punya latihan, dan filter status belajar
- Rumus bisa diklik dan semua punya halaman detail
- 138 latihan curated untuk rumus populer yang diminta
- Theory page untuk function yang belum punya latihan detail
- Formula bar mirip Excel
- Tabel latihan bergaya spreadsheet, cell bisa diklik dan range bisa disorot
- Toggle separator Excel Indonesia `;` dan Excel English `,`
- Guided Mode, Practice Mode, dan Challenge Mode
- Hint bertahap, tidak langsung membuka jawaban final
- Validator formula sederhana:
  - cek tanda `=`
  - cek nama function
  - cek separator
  - cek kurung
  - cek jumlah argumen
  - cek range/cell
  - cek kriteria penting
  - cek kecocokan rumus dengan soal
- Feedback salah yang spesifik
- Setelah benar, baru tampil rumus final, penjelasan bagian rumus, kesalahan umum, dan contoh penerapan lain
- Progress tersimpan di localStorage
- Reset data
- Dark mode / light mode
- Import Catalog dari file JSON
- Mobile responsive, sidebar berubah menjadi drawer

## Cara menjalankan

```bash
npm install
npm run dev
```

Lalu buka URL lokal yang muncul dari Vite.

## Build production

```bash
npm run build
npm run preview
```

## Struktur penting

```txt
src/App.jsx
src/main.jsx
src/index.css
src/data/formulaCatalogFull.js
src/data/formulaCategories.js
src/data/curatedExercises.js
src/data/exerciseTemplates.js
src/utils/formulaValidator.js
src/utils/formulaSearch.js
src/utils/localStorage.js
src/components/Header.jsx
src/components/FormulaSidebar.jsx
src/components/ProgressPanel.jsx
src/components/ExerciseTable.jsx
src/components/FormulaBar.jsx
src/components/HintBox.jsx
src/components/FeedbackBox.jsx
src/components/FormulaTheory.jsx
src/components/LearningModeSelector.jsx
src/components/SeparatorToggle.jsx
```

## Update katalog rumus

Katalog utama ada di:

```txt
src/data/formulaCatalogFull.js
```

Developer bisa mengganti atau menambah data dengan struktur:

```js
{
  id: "sum",
  name: "SUM",
  category: "Math and Trigonometry",
  displayCategory: "Basic Calculation",
  level: "Basic",
  description: "Menjumlahkan angka dalam range tertentu.",
  syntax: "SUM(number1, [number2], ...)",
  simpleLogic: "Kalau kamu punya beberapa angka dan ingin menjumlahkan semuanya, pakai SUM.",
  useCase: "Dipakai untuk menghitung total penjualan, total qty, total nilai, dan total angka lainnya.",
  version: "All supported Excel versions",
  availability: ["Excel Desktop", "Excel Web", "Microsoft 365"],
  tags: ["basic", "calculation", "total"],
  hasExercise: true
}
```

Di UI juga ada tombol Import Catalog untuk mengetes file JSON tanpa mengubah komponen utama.

## Catatan validator

Validator ini bukan engine Excel penuh. Tujuannya untuk learning experience: mengecek pola formula, function name, range, kriteria, separator, kurung, dan argumen dasar. Jadi variasi jawaban yang masih logis tetap bisa diterima selama struktur utamanya sesuai.
