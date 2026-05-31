# Formula Coach Data Alignment Audit

Tanggal audit: 2026-06-01

## Hasil utama
- Semua formula tetap aktif sebagai latihan, bukan theory-only.
- Generator latihan diganti dari kategori umum menjadi mapping berdasarkan jenis argumen.
- Rumus statistik dan compatibility sekarang memakai tabel `Parameter Statistik`, bukan `Data Nilai Siswa`.
- NEGBINOMDIST sekarang memakai `=NEGBINOMDIST(B2,B3,B4)` sebagai jawaban utama dan `=NEGBINOMDIST(3,5,0.4)` sebagai alternatif.
- Function finansial memakai tabel `Parameter Keuangan`.
- Function engineering memakai tabel `Parameter Teknik`.
- Function web memakai tabel `Data Web`.
- Function cube memakai tabel `Contoh Cube / Data Model`.
- Function database memakai `Database Mini` dengan criteria range.
- Function lookup tetap memakai tabel master produk dan lookup value yang tersedia.
- Label UI user-facing tetap memakai “Format”, bukan “Syntax”. Key internal `syntax` tidak diganti agar app tidak rusak.

## File yang diperbaiki
- src/data/formulaPracticeFactory.js
- src/data/curatedExercises.js
- src/data/formulaCatalogFull.js
- src/data/formulaLearningContent.js
- src/utils/formulaValidator.js
- src/components/FormulaTheory.jsx

## Catatan audit
Beberapa function sangat teknis, terutama Cube, Web, Add-in, dan beberapa Financial/Engineering lama. Untuk function seperti itu, latihan dibuat sebagai structured practice yang selaras dengan argumennya. Artinya user tetap belajar tabel yang benar, argumen yang benar, expected formula yang benar, dan validasi struktur yang benar, tanpa pura-pura menghitung hasil yang sebenarnya butuh koneksi Excel khusus.
