# Formula Coach Strict Practice Alignment Audit v2

Audit ini dibuat untuk memastikan latihan tidak lagi memakai tabel yang tidak nyambung dengan rumus. Prosesnya tidak berdasarkan tampilan, tapi loop seluruh formula catalog dan mengecek data latihan yang digenerate.

## Ringkasan hasil

- Total rumus discan: 520
- Total rumus yang punya latihan aktif: 520
- Total lolos strict alignment check: 520
- Total perlu review dari audit otomatis: 0

## Yang dicek oleh audit

- Setiap formula catalog punya exercise.
- Setiap exercise punya tableKey dan tabelnya benar-benar tersedia.
- Jenis tabel sesuai kategori atau karakter rumus, misalnya lookup pakai master produk, financial pakai parameter keuangan, statistical pakai parameter statistik ringkas, text pakai data teks, date pakai tanggal.
- Expected formula ada dan nama rumusnya sesuai formula yang sedang dipilih.
- Soal tidak kosong dan cukup jelas.
- Hint bertahap minimal 4 langkah.
- Required refs valid sebagai cell atau range.
- Criteria / lookup value tidak kosong.
- Tabel statistik tidak memakai tabel over panjang untuk rumus yang cuma butuh beberapa argumen.

## Distribusi kategori

- Add-in / User Defined: 4 rumus
- Advanced / Professional: 10 rumus
- Compatibility: 38 rumus
- Cube: 7 rumus
- Database: 12 rumus
- Date and Time: 25 rumus
- Dynamic Array: 6 rumus
- Engineering: 54 rumus
- Financial: 55 rumus
- Information: 21 rumus
- Logical: 11 rumus
- Lookup and Reference: 38 rumus
- Math and Trigonometry: 81 rumus
- Statistical: 111 rumus
- Text: 44 rumus
- Web: 3 rumus

## Distribusi tabel latihan

- addinParameter: 4 rumus
- cubeParameter: 7 rumus
- databaseMini: 12 rumus
- date: 18 rumus
- datePractice: 7 rumus
- dynamic: 27 rumus
- engineeringParameter: 54 rumus
- financeParameter: 55 rumus
- forecast: 16 rumus
- info: 12 rumus
- informationMixed: 12 rumus
- logicalPractice: 1 rumus
- lookup: 25 rumus
- lookupHorizontal: 1 rumus
- mathNumbers: 63 rumus
- sales: 4 rumus
- statsActualExpected: 2 rumus
- statsBetaGamma: 15 rumus
- statsBinom: 7 rumus
- statsFreedom: 19 rumus
- statsNegBinom: 2 rumus
- statsNormal: 13 rumus
- statsSeriesCompact: 67 rumus
- students: 30 rumus
- text: 22 rumus
- textPractice: 22 rumus
- webParameter: 3 rumus

## Catatan implementasi

- Factory sekarang memilih tabel berdasarkan kategori, family rumus, dan argumen rumus, bukan memakai satu tabel umum untuk semua rumus.
- Untuk rumus statistik, tabel dipisah jadi Negative Binomial, Binomial, Normal, Beta/Gamma, Uji Statistik, Actual vs Expected, dan Statistik Berbasis Range.
- Untuk rumus teknis seperti Cube, Web, Add-in, beberapa Engineering dan Financial, latihan fokus ke struktur argumen yang benar dan data contoh yang relevan, tanpa pura-pura menghitung environment Excel khusus.
- Key internal `syntax` tetap dibiarkan karena dipakai aplikasi, tapi label UI tetap harus tampil sebagai “Format”.

## Contoh hasil perbaikan

NEGBINOMDIST tidak lagi memakai Data Nilai Siswa. Sekarang memakai `statsNegBinom` dengan parameter: Jumlah gagal, Target berhasil, Peluang berhasil, dan Cumulative. Expected formula utama memakai referensi cell:

```excel
=NEGBINOMDIST(B2;B3;B4)
```

Alternatif hardcode tetap diterima:

```excel
=NEGBINOMDIST(3;5;0.4)
```