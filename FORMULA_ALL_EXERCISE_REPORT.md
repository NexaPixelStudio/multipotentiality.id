# Formula Coach - All Formula Exercise Update

Update ini mengubah sistem latihan supaya semua rumus di katalog punya latihan aktif, bukan hanya theory only.

## Ringkasan

- Katalog tetap memakai 520 rumus.
- Semua rumus sekarang diberi `hasExercise: true`.
- Latihan manual yang sudah ada tetap dipakai.
- Rumus yang belum punya latihan manual akan otomatis dibuatkan latihan detail dari `formulaPracticeFactory.js`.
- Pesan “Latihan detail belum tersedia, akan ditambahkan bertahap” dihapus dari flow latihan.
- Validator tetap menjaga fitur lama: cek tanda `=`, nama rumus, separator, jumlah argumen, range, criteria, dan struktur dasar.
- Untuk rumus teknis yang belum bisa dihitung simulator, formula tidak langsung dianggap error. Sistem tetap bisa mengecek struktur rumusnya.

## Catatan penting

Beberapa rumus Excel sangat teknis, misalnya Cube, Web, Add-in, dan beberapa rumus statistik lama. Untuk rumus seperti ini, latihan dibuat sebagai structured practice: user tetap menulis rumus lengkap, mengisi argumen, dan dicek struktur dasarnya. Jika simulator lokal belum bisa menghitung angka finalnya, UI akan menampilkan bahwa struktur bisa dicek.

## File yang berubah

- `src/data/formulaPracticeFactory.js`
- `src/data/formulaCatalogFull.js`
- `src/data/curatedExercises.js`
- `src/data/exerciseTemplates.js`
- `src/components/FormulaTheory.jsx`
- `src/utils/formulaEngine.js`
- `src/utils/formulaValidator.js`

## Contoh NEGBINOMDIST

Sekarang NEGBINOMDIST punya latihan detail:

- Soal: Hitung peluang 3 kegagalan terjadi sebelum 5 keberhasilan, dengan peluang berhasil 40%.
- Contoh target: `=NEGBINOMDIST(3,5,0.4)`
- Hint dibuat bertahap: mulai dari nama rumus, jumlah gagal, jumlah berhasil, peluang berhasil.

