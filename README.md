# Belajar Excel

Platform kursus Excel berbahasa Indonesia **dari dasar hingga mahir**. Peserta mempelajari materi yang disusun bertahap, lalu menulis rumus di lembar kerja interaktif dan langsung menerima umpan balik yang jelas.

Semua berjalan di browser (React + Vite + Tailwind). Tidak ada server, akun, atau data yang dikirim ke mana pun. Progres tersimpan di `localStorage`.

## Yang ada di dalamnya

- **5 level, 28 modul, 289 soal**: Dasar Excel, Rumus Esensial, Analisis Data, Rumus Lanjutan, dan Penerapan Profesional.
  Setiap modul punya materi berperumpamaan (analogi sehari-hari), contoh yang dihitung langsung, lalu latihan.
- **Soal dinilai dari hasilnya**, bukan dari kecocokan teks. Cara lain yang benar tetap diterima (misalnya `VLOOKUP`, `XLOOKUP`, atau `INDEX-MATCH` untuk soal yang sama).
- **Mesin rumus sendiri** (`src/engine`) yang membaca dan menghitung lebih dari 120 fungsi Excel, termasuk `XLOOKUP`, `FILTER`, `SORT`, `UNIQUE`, `LET`, `SUMIFS`, `DATEDIF`, `PMT`, dan referensi antar-sheet.
- **Umpan balik spesifik**: pesan untuk error `#DIV/0!`/`#N/A`/dst, saran nama fungsi yang salah ketik, kurung tidak berpasangan, argumen kurang, jebakan umum per soal, dan petunjuk bertingkat (3 level).
- **Simulasi salin rumus** (`fillTo`): rumus diuji saat "ditarik" ke bawah/samping, sehingga tanda `$` benar-benar dilatih.
- **UI yang ramah**: klik atau seret sel untuk menyisipkan alamat ke rumus, referensi diwarnai seperti di Excel, pratinjau hasil saat mengetik, saran fungsi (Tab untuk menerima), bantuan sintaks, tombol `F4` untuk `$`, mode gelap, dan tampilan ponsel.
- **Kamus Rumus**: 122 fungsi dengan penjelasan sederhana dan contoh yang dihitung langsung.
- **Ruang Coba**: lembar kerja bebas dengan data contoh untuk bereksperimen.
- **Gaya penulisan** Excel Indonesia (`;`) atau Inggris (`,`). Kalau pemisah tidak cocok dengan pilihan, soal tetap dinilai dan pengguna diberi catatan.
- **XP, streak, dan progres per modul**.

## Menjalankan

```bash
npm install
npm run dev        # pengembangan
npm run build      # produksi (hasil di dist/)
npm run verify     # tes mesin rumus + verifikasi seluruh materi
```

`npm run verify` wajib lulus sebelum deploy (sudah dipasang di `.github/workflows/deploy.yml`). Skrip ini memastikan, untuk **setiap soal**, bahwa:

- rumus `solution` menghasilkan nilai `expect` lewat mesin yang sama dengan yang dipakai pengguna,
- semua rumus `alt` juga diterima dan semua `shouldFail` ditolak,
- versi dengan titik koma (`;`) juga bekerja,
- setiap pilihan ganda, petunjuk (tepat 3), dan penjelasan lengkap,
- setiap contoh di Kamus Rumus bisa dihitung tanpa error.

## Struktur

```txt
src/
  engine/        mesin rumus (parser, evaluator, 120+ fungsi, penilai jawaban)
    parser.js      tokenizer + parser, mendukung ; dan , sebagai pemisah
    evaluator.js   konteks sheet, perhitungan, referensi antar-sheet, deteksi sirkular
    functions.js   seluruh fungsi Excel yang didukung
    check.js       penilaian jawaban, pesan umpan balik, pratinjau
    values.js      tipe nilai, error, tanggal, TEXT(), format tampilan
  content/       seluruh materi
    level1.js ... level5.js   modul per level (materi + soal)
    reference.js              isi Kamus Rumus
    index.js                  gabungan level dan modul
    helpers.js                pembantu penulisan materi
  components/    Sheet, FormulaBar, Header, Blocks (blok materi)
  pages/         Home, ModulePage, ExercisePage, ReferencePage, SandboxPage
  state/         progres belajar (localStorage)
scripts/
  engine-tests.mjs   158 tes mesin rumus
  verify.mjs         verifikasi seluruh materi
```

## Menambah atau mengubah soal

Buka file level yang sesuai di `src/content/` dan tambahkan ke array `exercises` sebuah modul. Rumus selalu ditulis dengan gaya Inggris (koma sebagai pemisah, titik desimal). Tampilan ke pengguna diubah otomatis.

### Soal rumus

```js
f({
  title: 'Omzet Andi di Jakarta',
  story: 'Konteks singkat (opsional).',
  task: 'Di sel **E13**, jumlahkan omzet ...',          // **tebal** dan `kode` didukung
  sheets: [sheet('Order', rows, { E: 'rp' })],           // format kolom: rp, int, dec1, dec2, pct, date
  target: 'E13',                                          // sel yang diisi pengguna
  fillTo: 'E20',                                          // opsional: uji rumus setelah disalin
  expect: 20750000,                                       // nilai, atau array 2D untuk hasil banyak sel
  solution: '=SUMIFS(E2:E11,A2:A11,"Andi",B2:B11,"Jakarta")',
  alt: ['=SUMPRODUCT(...)'],                              // jawaban lain yang juga benar
  shouldFail: ['=SUM(E2:E11)'],                           // jawaban salah yang harus ditolak
  mustUse: ['SUMIFS', 'SUMPRODUCT'],                      // minimal satu fungsi ini harus dipakai
  wrongs: [{ value: 45750000, msg: 'Penjelasan kenapa hasil ini salah' }],
  hints: ['Konsep', 'Fungsi dan range', 'Tulis: =SUMIFS(...)'],   // tepat 3
  parts: [['SUMIFS', 'penjelasan bagian rumus']],         // "Bedah rumus" setelah benar
  explain: 'Kenapa rumusnya begitu.',
  start: '=SUM(B2:B6',                                    // opsional: rumus rusak untuk diperbaiki
  resultFmt: 'rp'                                         // format hasil yang ditampilkan
})
```

Sel di `rows` boleh berisi rumus (`'=D2*VLOOKUP(...)'`) untuk menyiapkan kolom hitung yang sudah jadi.

### Soal pilihan ganda

```js
q({ title, q: 'Pertanyaan', options: [...], answer: 1, explain: '...', whyNot: ['', 'alasan opsi B salah', ...] })
```

Setelah menambah soal, jalankan `npm run verify`.

## Deploy

Push ke `main` memicu GitHub Actions (`.github/workflows/deploy.yml`) yang menjalankan verifikasi, build, dan publikasi ke GitHub Pages. `vite.config.js` memakai `base: './'` dan router berbasis hash, jadi situs aman dibuka dari domain sendiri maupun dari `username.github.io/repo`.

## Catatan

Mesin rumus ini dibuat untuk **belajar**, bukan pengganti Excel penuh. Belum ada: array konstanta `{1,2,3}`, rujukan `INDIRECT`/`OFFSET`, nama range, format angka kustom di luar `TEXT()` yang umum, dan fungsi di luar daftar 119 yang didukung. Nama bulan/hari di `TEXT()` memakai bahasa Indonesia.
