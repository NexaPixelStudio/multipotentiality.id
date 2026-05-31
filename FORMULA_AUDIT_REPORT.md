# Formula Coach Audit Report

Audit ini fokus ke source data rumus, latihan, validator, dan formula engine.

## Ringkasan hasil

- Total rumus di katalog: 520
- Rumus dengan latihan curated: 138
- Theory only: 382
- Expected formula curated yang berhasil dihitung oleh engine: 138/138
- Expected formula yang error: 0
- Formula dengan format generic yang sengaja ditandai butuh cek manual detail: 375

## Perubahan utama

1. Menambahkan `formulaAuditRules.js` untuk normalisasi semua data katalog.
2. Semua rumus tetap muncul di katalog, tapi rumus yang formatnya masih generic diberi `auditStatus: "needs-manual-format-check"` agar tidak terkesan sudah verified padahal belum.
3. Penjelasan default semua kategori dibuat lebih manusiawi dan cocok untuk pemula.
4. Contoh rumus dan maksud contoh dibuat lebih natural, terutama untuk kategori Text, Lookup, Logical, Date, Dynamic Array, Financial, Engineering, Database, Cube, dan Web.
5. Curated exercise 138 rumus dinormalisasi otomatis:
   - hint lebih bertahap,
   - feedback sukses lebih jelas,
   - common mistakes lebih spesifik,
   - audit metadata ditambahkan.
6. Formula engine diperbaiki untuk `LET`, jadi `=LET(total;SUM(D2:D16);total)` bisa dihitung.
7. Semua expected formula curated sudah dites lewat engine dan hasilnya tidak error.

## Catatan penting

Rumus dengan format generic tidak dihapus. Statusnya tetap theory only dan diberi tanda audit agar nanti bisa dicek bertahap berdasarkan dokumentasi function masing-masing. Ini lebih aman daripada memaksakan format asal-asalan.
