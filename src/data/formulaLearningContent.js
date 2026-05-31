import { buildBeginnerLearningContent } from './formulaAuditRules.js';

// Konten belajar Formula Coach.
// Semua penjelasan sengaja dibuat dengan bahasa awam: fungsi, logika, analogi, contoh rumus, dan maksud contohnya.

export const formulaLearningContent = {
  "DETECTLANGUAGE": {
    "description": "Mendeteksi bahasa dari teks.",
    "simpleLogic": "Baca format DETECTLANGUAGE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak petugas yang melihat kalimat lalu menebak ini bahasa Indonesia, Inggris, atau lainnya.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=DETECTLANGUAGE(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "GROUPBY": {
    "description": "Membuat formula yang lebih modern dan fleksibel.",
    "simpleLogic": "Baca format GROUPBY, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak bikin alat kecil sendiri di dalam Excel agar kerjaan berulang jadi otomatis.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=GROUPBY(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "LAMBDA": {
    "description": "Membuat function custom sendiri.",
    "simpleLogic": "Baca format LAMBDA, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak bikin mesin kecil sendiri: masukkan angka, mesin mengeluarkan hasil sesuai aturan kamu.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=LAMBDA(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "LET": {
    "description": "Memberi nama sementara pada bagian rumus.",
    "simpleLogic": "Baca format LET, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak memberi nama panggilan: daripada menyebut kalimat panjang berulang-ulang, cukup panggil namanya.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=LET(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PERCENTOF": {
    "description": "Membuat formula yang lebih modern dan fleksibel.",
    "simpleLogic": "Baca format PERCENTOF, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak bikin alat kecil sendiri di dalam Excel agar kerjaan berulang jadi otomatis.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=PERCENTOF(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PIVOTBY": {
    "description": "Membuat formula yang lebih modern dan fleksibel.",
    "simpleLogic": "Baca format PIVOTBY, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak bikin alat kecil sendiri di dalam Excel agar kerjaan berulang jadi otomatis.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=PIVOTBY(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "REGEXEXTRACT": {
    "description": "Mengambil bagian teks yang cocok pola memakai pola regex.",
    "simpleLogic": "Baca format REGEXEXTRACT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak detektif teks: bukan mencari kata biasa, tapi mencari pola. ",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=REGEXEXTRACT(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "REGEXREPLACE": {
    "description": "Mengganti bagian teks yang cocok pola memakai pola regex.",
    "simpleLogic": "Baca format REGEXREPLACE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak detektif teks: bukan mencari kata biasa, tapi mencari pola. ",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=REGEXREPLACE(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "REGEXTEST": {
    "description": "Mengecek apakah teks cocok pola memakai pola regex.",
    "simpleLogic": "Baca format REGEXTEST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak detektif teks: bukan mencari kata biasa, tapi mencari pola. ",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=REGEXTEST(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TRANSLATE": {
    "description": "Menerjemahkan teks.",
    "simpleLogic": "Baca format TRANSLATE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kamus otomatis di dalam Excel.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=TRANSLATE(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "AVERAGE": {
    "description": "Menghitung rata-rata angka.",
    "simpleLogic": "Baca format AVERAGE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak cari nilai rata-rata kelas. Semua nilai dijumlahkan lalu dibagi jumlah siswa.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=AVERAGE(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COUNT": {
    "description": "Menghitung jumlah cell yang berisi angka.",
    "simpleLogic": "Baca format COUNT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai untuk menghitung jumlah data, data kosong, atau data berdasarkan kondisi.",
    "analogy": "Kayak menghitung kotak yang isinya angka saja. Kotak berisi tulisan dilewati.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=COUNT(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COUNTA": {
    "description": "Menghitung cell yang terisi apa pun.",
    "simpleLogic": "Baca format COUNTA, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai untuk menghitung jumlah data, data kosong, atau data berdasarkan kondisi.",
    "analogy": "Kayak absen kelas: siapa pun yang hadir dihitung, tidak peduli nilainya berapa.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=COUNTA(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COUNTBLANK": {
    "description": "Menghitung cell kosong.",
    "simpleLogic": "Baca format COUNTBLANK, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai untuk menghitung jumlah data, data kosong, atau data berdasarkan kondisi.",
    "analogy": "Kayak mencari bangku kosong di kelas.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=COUNTBLANK(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "LARGE": {
    "description": "Mengambil angka terbesar urutan tertentu.",
    "simpleLogic": "Baca format LARGE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari juara 2, bukan juara 1.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=LARGE(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MAX": {
    "description": "Mengambil angka paling besar.",
    "simpleLogic": "Baca format MAX, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari juara 1 dari daftar nilai.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=MAX(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MIN": {
    "description": "Mengambil angka paling kecil.",
    "simpleLogic": "Baca format MIN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari juara dengan waktu lari paling cepat.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=MIN(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SMALL": {
    "description": "Mengambil angka terkecil urutan tertentu.",
    "simpleLogic": "Baca format SMALL, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari posisi kedua dari bawah.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=SMALL(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SUM": {
    "description": "Menjumlahkan angka.",
    "simpleLogic": "Baca format SUM, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai untuk menghitung total penjualan, qty, nilai, atau angka lain.",
    "analogy": "Kayak menghitung total belanja di kasir. Semua harga barang dikumpulkan lalu dijumlahkan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SUM(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BETADIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format BETADIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=BETADIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BETAINV": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format BETAINV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=BETAINV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BINOMDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format BINOMDIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=BINOMDIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CHIDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format CHIDIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=CHIDIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CHIINV": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format CHIINV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=CHIINV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CHITEST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format CHITEST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=CHITEST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CONFIDENCE": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format CONFIDENCE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=CONFIDENCE(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COVAR": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format COVAR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=COVAR(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CRITBINOM": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format CRITBINOM, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=CRITBINOM(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "EXPONDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format EXPONDIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=EXPONDIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format FDIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=FDIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FINV": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format FINV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=FINV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FTEST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format FTEST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=FTEST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "GAMMADIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format GAMMADIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=GAMMADIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "GAMMAINV": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format GAMMAINV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=GAMMAINV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "HYPGEOMDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format HYPGEOMDIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=HYPGEOMDIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "LOGINV": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format LOGINV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=LOGINV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "LOGNORMDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format LOGNORMDIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=LOGNORMDIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MODE": {
    "description": "Mengambil nilai yang paling sering muncul.",
    "simpleLogic": "Baca format MODE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari jawaban yang paling banyak dipilih.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=MODE(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "NEGBINOMDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format NEGBINOMDIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Mengambil jumlah gagal, target berhasil, dan peluang berhasil dari tabel parameter statistik.",
    "exampleFormula": "=NEGBINOMDIST(B2;B3;B4)",
    "exampleMeaning": "Mengambil jumlah gagal, target berhasil, dan peluang berhasil dari tabel parameter statistik.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "NORMDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format NORMDIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=NORMDIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "NORMINV": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format NORMINV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=NORMINV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "NORMSDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format NORMSDIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=NORMSDIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "NORMSINV": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format NORMSINV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=NORMSINV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PERCENTILE": {
    "description": "Mengambil nilai pada posisi persentase tertentu.",
    "simpleLogic": "Baca format PERCENTILE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari nilai yang berada di posisi 90% dari antrean data.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=PERCENTILE(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PERCENTRANK": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format PERCENTRANK, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=PERCENTRANK(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "POISSON": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format POISSON, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=POISSON(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "QUARTILE": {
    "description": "Membagi data menjadi 4 bagian.",
    "simpleLogic": "Baca format QUARTILE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak membagi antrean nilai menjadi empat kelompok.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=QUARTILE(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "RANK": {
    "description": "Memberi peringkat angka.",
    "simpleLogic": "Baca format RANK, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menentukan peringkat siswa dari daftar nilai.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=RANK(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "STDEV": {
    "description": "Menghitung standar deviasi sampel.",
    "simpleLogic": "Baca format STDEV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak melihat apakah nilai kelas rapat atau sangat menyebar.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=STDEV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "STDEVP": {
    "description": "Menghitung standar deviasi populasi.",
    "simpleLogic": "Baca format STDEVP, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengukur variasi semua cabang, bukan sebagian cabang.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=STDEVP(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format TDIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=TDIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TINV": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format TINV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=TINV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TTEST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format TTEST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=TTEST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "VAR": {
    "description": "Menghitung variance sampel.",
    "simpleLogic": "Baca format VAR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengukur seberapa jauh data menyebar dari tengahnya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=VAR(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "VARP": {
    "description": "Menghitung variance populasi.",
    "simpleLogic": "Baca format VARP, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengukur penyebaran semua data, bukan contoh data saja.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=VARP(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "WEIBULL": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format WEIBULL, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=WEIBULL(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ZTEST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Baca format ZTEST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=ZTEST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "AVERAGEIF": {
    "description": "Menghitung rata-rata dengan satu syarat.",
    "simpleLogic": "Baca format AVERAGEIF, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak cari rata-rata nilai siswa yang kelasnya 10A saja.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=AVERAGEIF(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "AVERAGEIFS": {
    "description": "Menghitung rata-rata dengan banyak syarat.",
    "simpleLogic": "Baca format AVERAGEIFS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak cari rata-rata belanja pelanggan yang kota Jakarta dan kategorinya Digital saja.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=AVERAGEIFS(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COUNTIF": {
    "description": "Menghitung data dengan satu syarat.",
    "simpleLogic": "Baca format COUNTIF, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai untuk menghitung jumlah data, data kosong, atau data berdasarkan kondisi.",
    "analogy": "Kayak menghitung berapa orang yang memakai baju hitam di ruangan.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=COUNTIF(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COUNTIFS": {
    "description": "Menghitung data dengan banyak syarat.",
    "simpleLogic": "Baca format COUNTIFS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai untuk menghitung jumlah data, data kosong, atau data berdasarkan kondisi.",
    "analogy": "Kayak menghitung tamu yang pakai baju hitam dan membawa undangan. Dua syarat harus lolos.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=COUNTIFS(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MAXIFS": {
    "description": "Menjumlahkan angka dengan banyak syarat.",
    "simpleLogic": "Baca format MAXIFS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak filter pesanan: ambil yang kategori Digital dan kota Jakarta, baru total penjualannya dijumlahkan.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=MAXIFS(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MINIFS": {
    "description": "Menjumlahkan angka dengan banyak syarat.",
    "simpleLogic": "Baca format MINIFS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak filter pesanan: ambil yang kategori Digital dan kota Jakarta, baru total penjualannya dijumlahkan.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=MINIFS(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SUMIF": {
    "description": "Menjumlahkan angka dengan satu syarat.",
    "simpleLogic": "Baca format SUMIF, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai untuk menghitung total penjualan, qty, nilai, atau angka lain.",
    "analogy": "Kayak bilang ke kasir: jumlahkan belanjaan yang kategorinya Digital saja, yang lain jangan dihitung.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SUMIF(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SUMIFS": {
    "description": "Menjumlahkan angka dengan banyak syarat.",
    "simpleLogic": "Baca format SUMIFS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai untuk menghitung total penjualan, qty, nilai, atau angka lain.",
    "analogy": "Kayak filter pesanan: ambil yang kategori Digital dan kota Jakarta, baru total penjualannya dijumlahkan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SUMIFS(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DAVERAGE": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Baca format DAVERAGE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh memakai database mini dan criteria range.",
    "exampleFormula": "=DAVERAGE(A1:E8;\"Nilai\";G1:G2)",
    "exampleMeaning": "Contoh memakai database mini dan criteria range.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DCOUNT": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Baca format DCOUNT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh memakai database mini dan criteria range.",
    "exampleFormula": "=DCOUNT(A1:E8;\"Nilai\";G1:G2)",
    "exampleMeaning": "Contoh memakai database mini dan criteria range.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DCOUNTA": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Baca format DCOUNTA, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh memakai database mini dan criteria range.",
    "exampleFormula": "=DCOUNTA(A1:E8;\"Nilai\";G1:G2)",
    "exampleMeaning": "Contoh memakai database mini dan criteria range.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DGET": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Baca format DGET, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh memakai database mini dan criteria range.",
    "exampleFormula": "=DGET(A1:E8;\"Nilai\";G1:G2)",
    "exampleMeaning": "Contoh memakai database mini dan criteria range.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DMAX": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Baca format DMAX, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh memakai database mini dan criteria range.",
    "exampleFormula": "=DMAX(A1:E8;\"Nilai\";G1:G2)",
    "exampleMeaning": "Contoh memakai database mini dan criteria range.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DMIN": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Baca format DMIN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh memakai database mini dan criteria range.",
    "exampleFormula": "=DMIN(A1:E8;\"Nilai\";G1:G2)",
    "exampleMeaning": "Contoh memakai database mini dan criteria range.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DPRODUCT": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Baca format DPRODUCT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh memakai database mini dan criteria range.",
    "exampleFormula": "=DPRODUCT(A1:E8;\"Nilai\";G1:G2)",
    "exampleMeaning": "Contoh memakai database mini dan criteria range.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DSTDEV": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Baca format DSTDEV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh memakai database mini dan criteria range.",
    "exampleFormula": "=DSTDEV(A1:E8;\"Nilai\";G1:G2)",
    "exampleMeaning": "Contoh memakai database mini dan criteria range.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DSTDEVP": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Baca format DSTDEVP, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh memakai database mini dan criteria range.",
    "exampleFormula": "=DSTDEVP(A1:E8;\"Nilai\";G1:G2)",
    "exampleMeaning": "Contoh memakai database mini dan criteria range.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DSUM": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Baca format DSUM, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh memakai database mini dan criteria range.",
    "exampleFormula": "=DSUM(A1:E8;\"Nilai\";G1:G2)",
    "exampleMeaning": "Contoh memakai database mini dan criteria range.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DVAR": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Baca format DVAR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh memakai database mini dan criteria range.",
    "exampleFormula": "=DVAR(A1:E8;\"Nilai\";G1:G2)",
    "exampleMeaning": "Contoh memakai database mini dan criteria range.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DVARP": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Baca format DVARP, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh memakai database mini dan criteria range.",
    "exampleFormula": "=DVARP(A1:E8;\"Nilai\";G1:G2)",
    "exampleMeaning": "Contoh memakai database mini dan criteria range.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DATE": {
    "description": "Membuat tanggal dari tahun, bulan, dan hari.",
    "simpleLogic": "Baca format DATE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak merakit tanggal dari 3 bahan: tahun, bulan, hari.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=DATE(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DATEDIF": {
    "description": "Menghitung selisih tanggal.",
    "simpleLogic": "Baca format DATEDIF, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak menghitung sudah berapa lama seseorang bekerja.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=DATEDIF(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DATEVALUE": {
    "description": "Membuat tanggal dari tahun, bulan, dan hari.",
    "simpleLogic": "Baca format DATEVALUE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak merakit tanggal dari 3 bahan: tahun, bulan, hari.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=DATEVALUE(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DAY": {
    "description": "Mengambil angka hari dari tanggal.",
    "simpleLogic": "Baca format DAY, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak mengambil angka 30 dari 30 Mei 2026.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=DAY(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DAYS": {
    "description": "Menghitung jumlah hari antar tanggal.",
    "simpleLogic": "Baca format DAYS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak menghitung jarak hari dari tanggal masuk sampai tanggal keluar.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=DAYS(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DAYS360": {
    "description": "Menghitung jumlah hari antar tanggal.",
    "simpleLogic": "Baca format DAYS360, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak menghitung jarak hari dari tanggal masuk sampai tanggal keluar.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=DAYS360(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "EDATE": {
    "description": "Menggeser tanggal beberapa bulan.",
    "simpleLogic": "Baca format EDATE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak menggeser kalender 3 bulan ke depan.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=EDATE(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "EOMONTH": {
    "description": "Mengambil tanggal akhir bulan.",
    "simpleLogic": "Baca format EOMONTH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak langsung lompat ke tanggal terakhir bulan itu.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=EOMONTH(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "HOUR": {
    "description": "Mengambil jam dari waktu.",
    "simpleLogic": "Baca format HOUR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak mengambil angka jam dari jam digital.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=HOUR(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ISOWEEKNUM": {
    "description": "Mengambil angka hari dari tanggal.",
    "simpleLogic": "Baca format ISOWEEKNUM, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak mengambil angka 30 dari 30 Mei 2026.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=ISOWEEKNUM(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MINUTE": {
    "description": "Mengambil menit dari waktu.",
    "simpleLogic": "Baca format MINUTE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak mengambil bagian menit dari jam digital.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=MINUTE(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MONTH": {
    "description": "Mengambil angka bulan dari tanggal.",
    "simpleLogic": "Baca format MONTH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak mengambil bulan Mei dari tanggal lengkap.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=MONTH(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "NETWORKDAYS": {
    "description": "Menghitung hari kerja.",
    "simpleLogic": "Baca format NETWORKDAYS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak menghitung hari kantor buka, bukan semua hari kalender.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=NETWORKDAYS(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "NETWORKDAYS.INTL": {
    "description": "Menghitung hari kerja dengan aturan weekend sendiri.",
    "simpleLogic": "Baca format NETWORKDAYS.INTL, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak kalender kantor yang punya aturan libur custom.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=NETWORKDAYS.INTL(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "NOW": {
    "description": "Menghasilkan tanggal dan jam saat ini.",
    "simpleLogic": "Baca format NOW, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak jam digital otomatis di Excel.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=NOW(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SECOND": {
    "description": "Mengambil detik dari waktu.",
    "simpleLogic": "Baca format SECOND, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak mengambil angka detik dari stopwatch.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=SECOND(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TIME": {
    "description": "Membuat waktu dari jam, menit, dan detik.",
    "simpleLogic": "Baca format TIME, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak merakit jam dari 3 bahan: jam, menit, detik.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=TIME(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TIMEVALUE": {
    "description": "Membuat waktu dari jam, menit, dan detik.",
    "simpleLogic": "Baca format TIMEVALUE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak merakit jam dari 3 bahan: jam, menit, detik.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=TIMEVALUE(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TODAY": {
    "description": "Menghasilkan tanggal hari ini.",
    "simpleLogic": "Baca format TODAY, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak kalender otomatis yang selalu menunjuk hari ini.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=TODAY(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "WEEKDAY": {
    "description": "Mengambil angka hari dari tanggal.",
    "simpleLogic": "Baca format WEEKDAY, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak mengambil angka 30 dari 30 Mei 2026.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=WEEKDAY(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "WEEKNUM": {
    "description": "Mengambil angka hari dari tanggal.",
    "simpleLogic": "Baca format WEEKNUM, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak mengambil angka 30 dari 30 Mei 2026.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=WEEKNUM(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "WORKDAY": {
    "description": "Menghitung tanggal setelah sejumlah hari kerja.",
    "simpleLogic": "Baca format WORKDAY, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak menghitung deadline 5 hari kerja dari hari ini.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=WORKDAY(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "WORKDAY.INTL": {
    "description": "Menghitung tanggal kerja dengan weekend custom.",
    "simpleLogic": "Baca format WORKDAY.INTL, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak menghitung deadline tapi kalender liburnya bisa kamu atur sendiri.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=WORKDAY.INTL(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "YEAR": {
    "description": "Mengambil tahun dari tanggal.",
    "simpleLogic": "Baca format YEAR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak mengambil 2026 dari tanggal lengkap.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=YEAR(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "YEARFRAC": {
    "description": "Menghitung selisih tanggal.",
    "simpleLogic": "Baca format YEARFRAC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk deadline, masa kerja, umur data, tanggal jatuh tempo, dan jam kerja.",
    "analogy": "Kayak menghitung sudah berapa lama seseorang bekerja.",
    "simpleExample": "Contoh mengolah tanggal dari tabel tanggal.",
    "exampleFormula": "=YEARFRAC(B6)",
    "exampleMeaning": "Contoh mengolah tanggal dari tabel tanggal.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BYCOL": {
    "description": "Menghitung tiap kolom dengan LAMBDA.",
    "simpleLogic": "Baca format BYCOL, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengecek setiap kolom laporan satu per satu.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=BYCOL(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BYROW": {
    "description": "Menghitung tiap baris dengan LAMBDA.",
    "simpleLogic": "Baca format BYROW, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengecek setiap baris laporan satu per satu.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=BYROW(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CHOOSECOLS": {
    "description": "Mengambil kolom tertentu dari array.",
    "simpleLogic": "Baca format CHOOSECOLS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak memilih kolom yang ingin difotokopi dari laporan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=CHOOSECOLS(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CHOOSEROWS": {
    "description": "Mengambil baris tertentu dari array.",
    "simpleLogic": "Baca format CHOOSEROWS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak memilih halaman tertentu dari buku.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=CHOOSEROWS(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DROP": {
    "description": "Membuang beberapa baris/kolom dari awal atau akhir data.",
    "simpleLogic": "Baca format DROP, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak membuang 2 halaman depan lalu membaca sisanya.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=DROP(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "EXPAND": {
    "description": "Mengambil beberapa baris/kolom dari awal atau akhir data.",
    "simpleLogic": "Baca format EXPAND, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengambil 5 lembar paling atas dari tumpukan kertas.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=EXPAND(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FILTER": {
    "description": "Memfilter data berdasarkan syarat.",
    "simpleLogic": "Baca format FILTER, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak saringan: yang lolos syarat keluar, yang tidak cocok tertahan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=FILTER(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "HSTACK": {
    "description": "Menggabungkan tabel ke samping.",
    "simpleLogic": "Baca format HSTACK, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menempel dua tabel berdampingan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=HSTACK(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MAKEARRAY": {
    "description": "Membuat array baru dari rumus.",
    "simpleLogic": "Baca format MAKEARRAY, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak membuat papan kotak-kotak, lalu setiap kotak diisi aturan tertentu.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=MAKEARRAY(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MAP": {
    "description": "Menjalankan rumus ke tiap item dalam array.",
    "simpleLogic": "Baca format MAP, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menyuruh satu instruksi dipakai ke semua baris.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=MAP(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "RANDARRAY": {
    "description": "Membuat angka acak antara 0 dan 1.",
    "simpleLogic": "Baca format RANDARRAY, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengambil angka acak dari mesin undian.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=RANDARRAY(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "REDUCE": {
    "description": "Menggabungkan banyak nilai menjadi satu hasil akhir.",
    "simpleLogic": "Baca format REDUCE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menabung: tiap transaksi ditambahkan ke saldo berjalan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=REDUCE(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SCAN": {
    "description": "Membuat hasil berjalan dari proses bertahap.",
    "simpleLogic": "Baca format SCAN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak melihat saldo setelah tiap transaksi, bukan hanya saldo akhir.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SCAN(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SEQUENCE": {
    "description": "Menghitung jumlah baris dalam range.",
    "simpleLogic": "Baca format SEQUENCE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menghitung jumlah tingkat dalam rak.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SEQUENCE(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SORT": {
    "description": "Mengurutkan data.",
    "simpleLogic": "Baca format SORT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menyusun buku dari A sampai Z.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SORT(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SORTBY": {
    "description": "Mengurutkan data berdasarkan range lain.",
    "simpleLogic": "Baca format SORTBY, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menyusun daftar nama berdasarkan nilai, bukan berdasarkan nama.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SORTBY(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TAKE": {
    "description": "Mengambil beberapa baris/kolom dari awal atau akhir data.",
    "simpleLogic": "Baca format TAKE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengambil 5 lembar paling atas dari tumpukan kertas.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=TAKE(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TEXTSPLIT": {
    "description": "Memecah teks menjadi beberapa bagian.",
    "simpleLogic": "Baca format TEXTSPLIT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak memotong kalimat setiap ketemu tanda koma.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=TEXTSPLIT(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TOCOL": {
    "description": "Memutar orientasi data.",
    "simpleLogic": "Baca format TOCOL, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak memutar tabel 90 derajat.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=TOCOL(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TOROW": {
    "description": "Memutar orientasi data.",
    "simpleLogic": "Baca format TOROW, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak memutar tabel 90 derajat.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=TOROW(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TRANSPOSE": {
    "description": "Memutar orientasi data.",
    "simpleLogic": "Baca format TRANSPOSE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak memutar tabel 90 derajat.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=TRANSPOSE(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "UNIQUE": {
    "description": "Mengambil daftar unik tanpa duplikat.",
    "simpleLogic": "Baca format UNIQUE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak membuat daftar tamu unik, nama yang sama cukup ditulis sekali.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=UNIQUE(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "VSTACK": {
    "description": "Menggabungkan tabel ke bawah.",
    "simpleLogic": "Baca format VSTACK, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menaruh satu tumpukan kertas di bawah tumpukan lain.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=VSTACK(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "WRAPCOLS": {
    "description": "Memutar orientasi data.",
    "simpleLogic": "Baca format WRAPCOLS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak memutar tabel 90 derajat.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=WRAPCOLS(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "WRAPROWS": {
    "description": "Memutar orientasi data.",
    "simpleLogic": "Baca format WRAPROWS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak memutar tabel 90 derajat.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=WRAPROWS(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "XLOOKUP": {
    "description": "Mencari data dengan cara lebih fleksibel.",
    "simpleLogic": "Baca format XLOOKUP, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak punya fitur search: cari kode di satu kolom, lalu ambil jawaban dari kolom mana pun.",
    "simpleExample": "Mengambil data dari tabel master memakai lookup value yang memang ada di tabel.",
    "exampleFormula": "=XLOOKUP(A2;E2:E8;F2:F8)",
    "exampleMeaning": "Mengambil data dari tabel master memakai lookup value yang memang ada di tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "XMATCH": {
    "description": "Mencari posisi nilai versi modern.",
    "simpleLogic": "Baca format XMATCH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak fitur Find yang memberi tahu posisi hasilnya di daftar.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=XMATCH(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BESSELI": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format BESSELI, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=BESSELI(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BESSELJ": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format BESSELJ, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=BESSELJ(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BESSELK": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format BESSELK, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=BESSELK(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BESSELY": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format BESSELY, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=BESSELY(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BIN2DEC": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format BIN2DEC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=BIN2DEC(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BIN2HEX": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format BIN2HEX, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=BIN2HEX(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BIN2OCT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format BIN2OCT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=BIN2OCT(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BITAND": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format BITAND, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=BITAND(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BITLSHIFT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format BITLSHIFT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=BITLSHIFT(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BITOR": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format BITOR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=BITOR(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BITRSHIFT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format BITRSHIFT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=BITRSHIFT(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BITXOR": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format BITXOR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=BITXOR(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COMPLEX": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format COMPLEX, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=COMPLEX(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CONVERT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format CONVERT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Mengubah angka dari unit asal ke unit tujuan.",
    "exampleFormula": "=CONVERT(J2;J3;J4)",
    "exampleMeaning": "Mengubah angka dari unit asal ke unit tujuan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DEC2BIN": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format DEC2BIN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=DEC2BIN(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DEC2HEX": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format DEC2HEX, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=DEC2HEX(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DEC2OCT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format DEC2OCT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=DEC2OCT(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DELTA": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format DELTA, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=DELTA(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ERF": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format ERF, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=ERF(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ERF.PRECISE": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format ERF.PRECISE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=ERF.PRECISE(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ERFC": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format ERFC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=ERFC(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ERFC.PRECISE": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format ERFC.PRECISE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=ERFC.PRECISE(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "GESTEP": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format GESTEP, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=GESTEP(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "HEX2BIN": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format HEX2BIN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=HEX2BIN(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "HEX2DEC": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format HEX2DEC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=HEX2DEC(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "HEX2OCT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format HEX2OCT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=HEX2OCT(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMABS": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMABS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMABS(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMAGINARY": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMAGINARY, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMAGINARY(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMARGUMENT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMARGUMENT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMARGUMENT(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMCONJUGATE": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMCONJUGATE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMCONJUGATE(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMCOS": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMCOS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMCOS(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMCOSH": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMCOSH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMCOSH(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMCOT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMCOT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMCOT(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMCSC": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMCSC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMCSC(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMCSCH": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMCSCH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMCSCH(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMDIV": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMDIV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMDIV(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMEXP": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMEXP, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMEXP(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMLN": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMLN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMLN(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMLOG10": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMLOG10, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMLOG10(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMLOG2": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMLOG2, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMLOG2(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMPOWER": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMPOWER, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMPOWER(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMPRODUCT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMPRODUCT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMPRODUCT(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMREAL": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMREAL, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMREAL(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMSEC": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMSEC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMSEC(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMSECH": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMSECH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMSECH(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMSIN": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMSIN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMSIN(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMSINH": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMSINH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMSINH(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMSQRT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMSQRT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMSQRT(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMSUB": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMSUB, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMSUB(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMSUM": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMSUM, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMSUM(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMTAN": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format IMTAN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=IMTAN(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "OCT2BIN": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format OCT2BIN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=OCT2BIN(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "OCT2DEC": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format OCT2DEC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=OCT2DEC(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "OCT2HEX": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Baca format OCT2HEX, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh memakai parameter teknik dari tabel.",
    "exampleFormula": "=OCT2HEX(J2)",
    "exampleMeaning": "Contoh memakai parameter teknik dari tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ACCRINT": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format ACCRINT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=ACCRINT(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ACCRINTM": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format ACCRINTM, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=ACCRINTM(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "AMORDEGRC": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format AMORDEGRC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=AMORDEGRC(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "AMORLINC": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format AMORLINC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=AMORLINC(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COUPDAYBS": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format COUPDAYBS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=COUPDAYBS(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COUPDAYS": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format COUPDAYS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=COUPDAYS(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COUPDAYSNC": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format COUPDAYSNC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=COUPDAYSNC(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COUPNCD": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format COUPNCD, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=COUPNCD(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COUPNUM": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format COUPNUM, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=COUPNUM(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COUPPCD": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format COUPPCD, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=COUPPCD(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CUMIPMT": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format CUMIPMT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=CUMIPMT(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CUMPRINC": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format CUMPRINC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=CUMPRINC(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DB": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format DB, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=DB(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DDB": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format DDB, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=DDB(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DISC": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format DISC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=DISC(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DOLLARDE": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format DOLLARDE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=DOLLARDE(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DOLLARFR": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format DOLLARFR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=DOLLARFR(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DURATION": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format DURATION, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=DURATION(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "EFFECT": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format EFFECT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=EFFECT(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FV": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format FV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=FV(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FVSCHEDULE": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format FVSCHEDULE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=FVSCHEDULE(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "INTRATE": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format INTRATE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=INTRATE(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IPMT": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format IPMT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=IPMT(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IRR": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format IRR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=IRR(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ISPMT": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format ISPMT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=ISPMT(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MDURATION": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format MDURATION, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=MDURATION(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MIRR": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format MIRR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=MIRR(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "NOMINAL": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format NOMINAL, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=NOMINAL(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "NPER": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format NPER, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=NPER(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "NPV": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format NPV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=NPV(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ODDFPRICE": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format ODDFPRICE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=ODDFPRICE(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ODDFYIELD": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format ODDFYIELD, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=ODDFYIELD(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ODDLPRICE": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format ODDLPRICE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=ODDLPRICE(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ODDLYIELD": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format ODDLYIELD, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=ODDLYIELD(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PDURATION": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format PDURATION, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=PDURATION(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PMT": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format PMT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Menghitung estimasi cicilan dari rate, jumlah periode, dan nilai pinjaman.",
    "exampleFormula": "=PMT(F2;F3;F4)",
    "exampleMeaning": "Menghitung estimasi cicilan dari rate, jumlah periode, dan nilai pinjaman.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PPMT": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format PPMT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=PPMT(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PRICE": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format PRICE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=PRICE(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PRICEDISC": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format PRICEDISC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=PRICEDISC(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PRICEMAT": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format PRICEMAT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=PRICEMAT(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PV": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format PV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=PV(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "RATE": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format RATE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=RATE(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "RECEIVED": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format RECEIVED, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=RECEIVED(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "RRI": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format RRI, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=RRI(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SLN": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format SLN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=SLN(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SYD": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format SYD, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=SYD(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TBILLEQ": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format TBILLEQ, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=TBILLEQ(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TBILLPRICE": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format TBILLPRICE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=TBILLPRICE(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TBILLYIELD": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format TBILLYIELD, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=TBILLYIELD(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "VDB": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format VDB, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=VDB(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "XIRR": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format XIRR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=XIRR(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "XNPV": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format XNPV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=XNPV(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "YIELD": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format YIELD, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=YIELD(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "YIELDDISC": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format YIELDDISC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=YIELDDISC(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "YIELDMAT": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Baca format YIELDMAT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk pinjaman, investasi, bunga, depresiasi, dan perhitungan keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "exampleFormula": "=YIELDMAT(F2;F3;F4)",
    "exampleMeaning": "Contoh memakai parameter keuangan dari tabel, seperti rate, periode, dan nilai uang.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CELL": {
    "description": "Mengambil informasi tentang cell.",
    "simpleLogic": "Baca format CELL, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kartu identitas untuk sebuah cell.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=CELL(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ERROR.TYPE": {
    "description": "Mengecek apakah rumus menghasilkan error.",
    "simpleLogic": "Baca format ERROR.TYPE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak alarm yang menyala kalau ada masalah di rumus.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=ERROR.TYPE(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "INFO": {
    "description": "Mengambil informasi tentang cell.",
    "simpleLogic": "Baca format INFO, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kartu identitas untuk sebuah cell.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=INFO(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ISBLANK": {
    "description": "Mengecek apakah cell kosong.",
    "simpleLogic": "Baca format ISBLANK, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengecek apakah kotak masih kosong.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=ISBLANK(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ISERR": {
    "description": "Mengecek apakah rumus menghasilkan error.",
    "simpleLogic": "Baca format ISERR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak alarm yang menyala kalau ada masalah di rumus.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=ISERR(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ISERROR": {
    "description": "Mengecek apakah rumus menghasilkan error.",
    "simpleLogic": "Baca format ISERROR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak alarm yang menyala kalau ada masalah di rumus.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=ISERROR(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ISEVEN": {
    "description": "Mengecek apakah isi cell adalah angka.",
    "simpleLogic": "Baca format ISEVEN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak petugas yang mengecek apakah isinya benar-benar angka.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=ISEVEN(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ISFORMULA": {
    "description": "Mengecek apakah cell berisi formula.",
    "simpleLogic": "Baca format ISFORMULA, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengecek apakah cell bekerja sendiri atau cuma berisi angka biasa.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=ISFORMULA(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ISLOGICAL": {
    "description": "Menghasilkan nilai logika ISLOGICAL.",
    "simpleLogic": "Baca format ISLOGICAL, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak jawaban Ya dalam bahasa Excel.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=ISLOGICAL(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ISNA": {
    "description": "Mengecek apakah hasilnya #N/A.",
    "simpleLogic": "Baca format ISNA, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak alarm khusus untuk status data tidak ada.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=ISNA(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ISNONTEXT": {
    "description": "Mengecek apakah isi cell adalah teks.",
    "simpleLogic": "Baca format ISNONTEXT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak petugas yang mengecek apakah isinya tulisan.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=ISNONTEXT(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ISNUMBER": {
    "description": "Mengecek apakah isi cell adalah angka.",
    "simpleLogic": "Baca format ISNUMBER, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak petugas yang mengecek apakah isinya benar-benar angka.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=ISNUMBER(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ISODD": {
    "description": "Mengecek apakah isi cell adalah angka.",
    "simpleLogic": "Baca format ISODD, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak petugas yang mengecek apakah isinya benar-benar angka.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=ISODD(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ISOMITTED": {
    "description": "Mengecek apakah cell kosong.",
    "simpleLogic": "Baca format ISOMITTED, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengecek apakah kotak masih kosong.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=ISOMITTED(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ISREF": {
    "description": "Mengecek apakah cell berisi formula.",
    "simpleLogic": "Baca format ISREF, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengecek apakah cell bekerja sendiri atau cuma berisi angka biasa.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=ISREF(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ISTEXT": {
    "description": "Mengecek apakah isi cell adalah teks.",
    "simpleLogic": "Baca format ISTEXT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak petugas yang mengecek apakah isinya tulisan.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=ISTEXT(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "N": {
    "description": "Mengubah value tertentu menjadi angka.",
    "simpleLogic": "Baca format N, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengubah jawaban Ya/Tidak menjadi skor angka.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=N(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "NA": {
    "description": "Mengecek apakah hasilnya #N/A.",
    "simpleLogic": "Baca format NA, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak alarm khusus untuk status data tidak ada.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=NA(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SHEET": {
    "description": "Mengambil informasi tentang cell.",
    "simpleLogic": "Baca format SHEET, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kartu identitas untuk sebuah cell.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=SHEET(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SHEETS": {
    "description": "Mengambil informasi tentang cell.",
    "simpleLogic": "Baca format SHEETS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kartu identitas untuk sebuah cell.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=SHEETS(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TYPE": {
    "description": "Memberi kode jenis data.",
    "simpleLogic": "Baca format TYPE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak memberi label jenis isi: angka, teks, logika, error.",
    "simpleExample": "Contoh mengecek isi cell dari tabel campuran.",
    "exampleFormula": "=TYPE(A2)",
    "exampleMeaning": "Contoh mengecek isi cell dari tabel campuran.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "AND": {
    "description": "Mengecek apakah semua syarat benar.",
    "simpleLogic": "Baca format AND, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak masuk konser: harus punya tiket dan KTP. Kalau salah satu tidak ada, tidak bisa masuk.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=AND(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FALSE": {
    "description": "Menghasilkan nilai logika FALSE.",
    "simpleLogic": "Baca format FALSE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak jawaban Tidak dalam bahasa Excel.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=FALSE(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IF": {
    "description": "Membuat keputusan jika kondisi benar atau salah.",
    "simpleLogic": "Baca format IF, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak aturan sederhana: kalau nilai minimal 75 maka Lulus, kalau tidak maka Tidak Lulus.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=IF(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IFERROR": {
    "description": "Mengganti hasil error dengan pesan yang lebih enak dibaca.",
    "simpleLogic": "Baca format IFERROR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menyiapkan kalimat cadangan kalau data tidak ditemukan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=IFERROR(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IFNA": {
    "description": "Mengganti error #N/A saja.",
    "simpleLogic": "Baca format IFNA, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak bilang: kalau nama tidak ada di daftar, tulis Belum terdaftar.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=IFNA(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IFS": {
    "description": "Membuat keputusan dengan banyak kondisi.",
    "simpleLogic": "Baca format IFS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak penjaga gerbang yang cek beberapa aturan satu per satu: kalau VIP masuk jalur A, kalau reguler jalur B, kalau tidak cocok jalur C.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=IFS(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "NOT": {
    "description": "Membalik hasil TRUE/FALSE.",
    "simpleLogic": "Baca format NOT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak saklar pembalik: menyala jadi mati, mati jadi menyala.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=NOT(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "OR": {
    "description": "Mengecek apakah minimal satu syarat benar.",
    "simpleLogic": "Baca format OR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak boleh masuk kalau punya tiket atau namanya ada di guest list. Salah satu cukup.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=OR(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SWITCH": {
    "description": "Memilih hasil berdasarkan satu nilai.",
    "simpleLogic": "Baca format SWITCH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menu pilihan: tekan 1 untuk Sales, 2 untuk Admin, 3 untuk Gudang.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SWITCH(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TRUE": {
    "description": "Menghasilkan nilai logika TRUE.",
    "simpleLogic": "Baca format TRUE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak jawaban Ya dalam bahasa Excel.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=TRUE(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "XOR": {
    "description": "Mengecek kondisi yang ganjil jumlah benarnya.",
    "simpleLogic": "Baca format XOR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak aturan salah satu boleh benar, tapi kalau dua-duanya benar malah tidak lolos.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=XOR(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ADDRESS": {
    "description": "Membuat alamat cell dari nomor baris dan kolom.",
    "simpleLogic": "Baca format ADDRESS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengubah koordinat rumah menjadi alamat lengkap.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ADDRESS(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "AREAS": {
    "description": "Menghitung jumlah baris dalam range.",
    "simpleLogic": "Baca format AREAS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menghitung jumlah tingkat dalam rak.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=AREAS(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CHOOSE": {
    "description": "Memilih satu hasil berdasarkan nomor pilihan.",
    "simpleLogic": "Baca format CHOOSE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak memilih menu nomor 1, 2, atau 3.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=CHOOSE(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COLUMN": {
    "description": "Mengambil nomor kolom.",
    "simpleLogic": "Baca format COLUMN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengubah kolom A menjadi nomor 1.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=COLUMN(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COLUMNS": {
    "description": "Menghitung jumlah kolom dalam range.",
    "simpleLogic": "Baca format COLUMNS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menghitung jumlah lajur dalam tabel.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=COLUMNS(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FORMULATEXT": {
    "description": "Menampilkan rumus sebagai teks.",
    "simpleLogic": "Baca format FORMULATEXT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak membuka isi mesin rumus supaya terlihat.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=FORMULATEXT(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "GETPIVOTDATA": {
    "description": "Mencari data secara vertikal dari tabel referensi.",
    "simpleLogic": "Baca format GETPIVOTDATA, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari kode barang di daftar harga, lalu mengambil nama atau harganya.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=GETPIVOTDATA(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "HLOOKUP": {
    "description": "Mencari data secara horizontal dari tabel referensi.",
    "simpleLogic": "Baca format HLOOKUP, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari judul bulan di baris atas, lalu ambil angka di baris bawahnya.",
    "simpleExample": "Mengambil data dari tabel master memakai lookup value yang memang ada di tabel.",
    "exampleFormula": "=HLOOKUP(\"P-003\";A1:G4;2;FALSE)",
    "exampleMeaning": "Mengambil data dari tabel master memakai lookup value yang memang ada di tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "HYPERLINK": {
    "description": "Membuat link yang bisa diklik.",
    "simpleLogic": "Baca format HYPERLINK, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak membuat tombol jalan pintas ke alamat web.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=HYPERLINK(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "IMAGE": {
    "description": "Membuat link yang bisa diklik.",
    "simpleLogic": "Baca format IMAGE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak membuat tombol jalan pintas ke alamat web.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=IMAGE(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "INDEX": {
    "description": "Mengambil isi berdasarkan posisi baris dan kolom.",
    "simpleLogic": "Baca format INDEX, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak koordinat kursi bioskop: baris ke-3 kolom ke-2.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=INDEX(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "INDEX MATCH": {
    "description": "Mengambil data dengan kombinasi posisi baris dan kolom.",
    "simpleLogic": "Baca format INDEX MATCH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak MATCH mencari nomor rak, lalu INDEX mengambil barang dari rak itu.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=INDEX MATCH(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "INDIRECT": {
    "description": "Mengubah teks menjadi referensi cell/range.",
    "simpleLogic": "Baca format INDIRECT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak teks alamat yang berubah menjadi lokasi asli.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=INDIRECT(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "LOOKUP": {
    "description": "Mencari nilai di satu baris/kolom lalu mengambil hasil yang sejajar.",
    "simpleLogic": "Baca format LOOKUP, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari nama di daftar yang sudah disusun urut.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=LOOKUP(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MATCH": {
    "description": "Mencari posisi sebuah nilai.",
    "simpleLogic": "Baca format MATCH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari nomor antrean seseorang di daftar.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=MATCH(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "OFFSET": {
    "description": "Menggeser referensi dari titik awal.",
    "simpleLogic": "Baca format OFFSET, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mulai dari satu titik di peta, lalu maju 2 langkah dan kanan 1 langkah.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=OFFSET(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ROW": {
    "description": "Mengambil nomor baris.",
    "simpleLogic": "Baca format ROW, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak melihat nomor baris di pinggir sheet.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ROW(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ROWS": {
    "description": "Menghitung jumlah baris dalam range.",
    "simpleLogic": "Baca format ROWS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menghitung jumlah tingkat dalam rak.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ROWS(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "RTD": {
    "description": "Mencari atau mengambil data dari posisi tertentu.",
    "simpleLogic": "Baca format RTD, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari kode barang di katalog lalu mengambil info yang sejajar.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=RTD(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "VLOOKUP": {
    "description": "Mencari data secara vertikal dari tabel referensi.",
    "simpleLogic": "Baca format VLOOKUP, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari kode barang di daftar harga, lalu mengambil nama atau harganya.",
    "simpleExample": "Mengambil data dari tabel master memakai lookup value yang memang ada di tabel.",
    "exampleFormula": "=VLOOKUP(A2;E2:I8;2;FALSE)",
    "exampleMeaning": "Mengambil data dari tabel master memakai lookup value yang memang ada di tabel.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ABS": {
    "description": "Mengubah angka menjadi positif.",
    "simpleLogic": "Baca format ABS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak melihat jarak 5 langkah, tidak peduli arahnya ke kiri atau kanan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ABS(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ACOS": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format ACOS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ACOS(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ACOSH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format ACOSH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ACOSH(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ACOT": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format ACOT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ACOT(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ACOTH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format ACOTH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ACOTH(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "AGGREGATE": {
    "description": "Menghitung data dengan opsi mengabaikan error atau baris tersembunyi.",
    "simpleLogic": "Baca format AGGREGATE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang bisa disuruh mengabaikan data rusak.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=AGGREGATE(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ARABIC": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format ARABIC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ARABIC(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ASIN": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format ASIN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ASIN(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ASINH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format ASINH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ASINH(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ATAN": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format ATAN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ATAN(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ATAN2": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format ATAN2, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ATAN2(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ATANH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format ATANH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ATANH(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BASE": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format BASE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=BASE(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CEILING": {
    "description": "Membulatkan angka ke atas ke kelipatan tertentu.",
    "simpleLogic": "Baca format CEILING, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak harga 12.300 dibulatkan ke kelipatan 500 terdekat ke atas.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=CEILING(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CEILING.MATH": {
    "description": "Membulatkan angka ke atas ke kelipatan tertentu.",
    "simpleLogic": "Baca format CEILING.MATH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak harga 12.300 dibulatkan ke kelipatan 500 terdekat ke atas.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=CEILING.MATH(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CEILING.PRECISE": {
    "description": "Membulatkan angka ke atas ke kelipatan tertentu.",
    "simpleLogic": "Baca format CEILING.PRECISE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak harga 12.300 dibulatkan ke kelipatan 500 terdekat ke atas.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=CEILING.PRECISE(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COMBIN": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format COMBIN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=COMBIN(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COMBINA": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format COMBINA, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=COMBINA(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COS": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format COS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=COS(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COSH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format COSH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=COSH(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COT": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format COT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=COT(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COTH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format COTH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=COTH(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CSC": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format CSC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=CSC(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CSCH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format CSCH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=CSCH(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DECIMAL": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format DECIMAL, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=DECIMAL(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DEGREES": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format DEGREES, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=DEGREES(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "EVEN": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format EVEN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=EVEN(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "EXP": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format EXP, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=EXP(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FACT": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format FACT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=FACT(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FACTDOUBLE": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format FACTDOUBLE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=FACTDOUBLE(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FLOOR": {
    "description": "Membulatkan angka ke bawah ke kelipatan tertentu.",
    "simpleLogic": "Baca format FLOOR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak memotong angka ke kelipatan 500 di bawahnya.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=FLOOR(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FLOOR.MATH": {
    "description": "Membulatkan angka ke bawah ke kelipatan tertentu.",
    "simpleLogic": "Baca format FLOOR.MATH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak memotong angka ke kelipatan 500 di bawahnya.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=FLOOR.MATH(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FLOOR.PRECISE": {
    "description": "Membulatkan angka ke bawah ke kelipatan tertentu.",
    "simpleLogic": "Baca format FLOOR.PRECISE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak memotong angka ke kelipatan 500 di bawahnya.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=FLOOR.PRECISE(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "GCD": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format GCD, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=GCD(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "INT": {
    "description": "Mengambil angka bulat ke bawah.",
    "simpleLogic": "Baca format INT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengambil lantai bawah dari angka desimal.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=INT(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ISO.CEILING": {
    "description": "Membulatkan angka ke atas ke kelipatan tertentu.",
    "simpleLogic": "Baca format ISO.CEILING, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak harga 12.300 dibulatkan ke kelipatan 500 terdekat ke atas.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ISO.CEILING(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "LCM": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format LCM, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=LCM(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "LN": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format LN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=LN(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "LOG": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format LOG, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=LOG(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "LOG10": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format LOG10, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=LOG10(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MDETERM": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format MDETERM, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=MDETERM(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MINVERSE": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format MINVERSE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=MINVERSE(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MMULT": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format MMULT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=MMULT(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MOD": {
    "description": "Mengambil sisa pembagian.",
    "simpleLogic": "Baca format MOD, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak membagi permen ke beberapa orang, lalu melihat sisa permennya.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=MOD(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MROUND": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format MROUND, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=MROUND(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MULTINOMIAL": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format MULTINOMIAL, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=MULTINOMIAL(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MUNIT": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format MUNIT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=MUNIT(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ODD": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format ODD, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ODD(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PI": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format PI, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=PI(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "POWER": {
    "description": "Menghitung pangkat.",
    "simpleLogic": "Baca format POWER, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak 5 pangkat 2 artinya 5 dikali 5.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=POWER(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PRODUCT": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format PRODUCT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=PRODUCT(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "QUOTIENT": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format QUOTIENT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=QUOTIENT(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "RADIANS": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format RADIANS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=RADIANS(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "RAND": {
    "description": "Membuat angka acak antara 0 dan 1.",
    "simpleLogic": "Baca format RAND, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengambil angka acak dari mesin undian.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=RAND(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "RANDBETWEEN": {
    "description": "Membuat angka acak dalam batas tertentu.",
    "simpleLogic": "Baca format RANDBETWEEN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak undian nomor 1 sampai 100.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=RANDBETWEEN(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ROMAN": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format ROMAN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ROMAN(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ROUND": {
    "description": "Membulatkan angka ke jumlah digit tertentu.",
    "simpleLogic": "Baca format ROUND, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak membulatkan nilai 87,6 menjadi 88.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ROUND(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ROUNDDOWN": {
    "description": "Membulatkan angka ke bawah.",
    "simpleLogic": "Baca format ROUNDDOWN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak hanya menghitung box penuh, sisa sedikit tidak dihitung.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ROUNDDOWN(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ROUNDUP": {
    "description": "Membulatkan angka ke atas.",
    "simpleLogic": "Baca format ROUNDUP, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalau butuh 2,1 box, tetap harus sedia 3 box.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=ROUNDUP(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SEC": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format SEC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SEC(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SECH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format SECH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SECH(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SERIESSUM": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format SERIESSUM, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SERIESSUM(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SIGN": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format SIGN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SIGN(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SIN": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format SIN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SIN(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SINH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format SINH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SINH(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SQRT": {
    "description": "Menghitung akar kuadrat.",
    "simpleLogic": "Baca format SQRT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari sisi persegi jika luasnya sudah diketahui.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SQRT(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SQRTPI": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format SQRTPI, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SQRTPI(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SUBTOTAL": {
    "description": "Menghitung data yang bisa mengikuti filter.",
    "simpleLogic": "Baca format SUBTOTAL, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menghitung hanya baris yang sedang kelihatan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SUBTOTAL(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SUMPRODUCT": {
    "description": "Mengalikan pasangan angka lalu menjumlahkan hasilnya.",
    "simpleLogic": "Baca format SUMPRODUCT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menghitung total belanja: setiap item qty dikali harga, lalu dijumlahkan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SUMPRODUCT(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SUMSQ": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format SUMSQ, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SUMSQ(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SUMX2MY2": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format SUMX2MY2, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SUMX2MY2(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SUMX2PY2": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format SUMX2PY2, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SUMX2PY2(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SUMXMY2": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format SUMXMY2, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SUMXMY2(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TAN": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format TAN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=TAN(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TANH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format TANH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=TANH(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TRUNC": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Baca format TRUNC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=TRUNC(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CALL": {
    "description": "Memanggil fungsi khusus dari add-in atau sistem lama.",
    "simpleLogic": "Baca format CALL, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak tombol khusus yang hanya muncul kalau add-in-nya terpasang.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=CALL(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CUBEKPIMEMBER": {
    "description": "Mengambil data dari model OLAP/Cube.",
    "simpleLogic": "Baca format CUBEKPIMEMBER, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak bertanya ke gudang data besar: ambilkan angka penjualan dari kategori dan bulan tertentu.",
    "simpleExample": "Contoh memakai connection dan member expression dari tabel cube.",
    "exampleFormula": "=CUBEKPIMEMBER(B2;B3)",
    "exampleMeaning": "Contoh memakai connection dan member expression dari tabel cube.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CUBEMEMBER": {
    "description": "Mengambil data dari model OLAP/Cube.",
    "simpleLogic": "Baca format CUBEMEMBER, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak bertanya ke gudang data besar: ambilkan angka penjualan dari kategori dan bulan tertentu.",
    "simpleExample": "Contoh memakai connection dan member expression dari tabel cube.",
    "exampleFormula": "=CUBEMEMBER(B2;B3)",
    "exampleMeaning": "Contoh memakai connection dan member expression dari tabel cube.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CUBEMEMBERPROPERTY": {
    "description": "Mengambil data dari model OLAP/Cube.",
    "simpleLogic": "Baca format CUBEMEMBERPROPERTY, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak bertanya ke gudang data besar: ambilkan angka penjualan dari kategori dan bulan tertentu.",
    "simpleExample": "Contoh memakai connection dan member expression dari tabel cube.",
    "exampleFormula": "=CUBEMEMBERPROPERTY(B2;B3)",
    "exampleMeaning": "Contoh memakai connection dan member expression dari tabel cube.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CUBERANKEDMEMBER": {
    "description": "Mengambil data dari model OLAP/Cube.",
    "simpleLogic": "Baca format CUBERANKEDMEMBER, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak bertanya ke gudang data besar: ambilkan angka penjualan dari kategori dan bulan tertentu.",
    "simpleExample": "Contoh memakai connection dan member expression dari tabel cube.",
    "exampleFormula": "=CUBERANKEDMEMBER(B2;B3)",
    "exampleMeaning": "Contoh memakai connection dan member expression dari tabel cube.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CUBESET": {
    "description": "Mengambil data dari model OLAP/Cube.",
    "simpleLogic": "Baca format CUBESET, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak bertanya ke gudang data besar: ambilkan angka penjualan dari kategori dan bulan tertentu.",
    "simpleExample": "Contoh memakai connection dan member expression dari tabel cube.",
    "exampleFormula": "=CUBESET(B2;B3)",
    "exampleMeaning": "Contoh memakai connection dan member expression dari tabel cube.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CUBESETCOUNT": {
    "description": "Mengambil data dari model OLAP/Cube.",
    "simpleLogic": "Baca format CUBESETCOUNT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak bertanya ke gudang data besar: ambilkan angka penjualan dari kategori dan bulan tertentu.",
    "simpleExample": "Contoh memakai connection dan member expression dari tabel cube.",
    "exampleFormula": "=CUBESETCOUNT(B2;B3)",
    "exampleMeaning": "Contoh memakai connection dan member expression dari tabel cube.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CUBEVALUE": {
    "description": "Mengambil data dari model OLAP/Cube.",
    "simpleLogic": "Baca format CUBEVALUE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak bertanya ke gudang data besar: ambilkan angka penjualan dari kategori dan bulan tertentu.",
    "simpleExample": "Contoh memakai connection dan member expression dari tabel cube.",
    "exampleFormula": "=CUBEVALUE(B2;B3)",
    "exampleMeaning": "Contoh memakai connection dan member expression dari tabel cube.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "EUROCONVERT": {
    "description": "Memanggil fungsi khusus dari add-in atau sistem lama.",
    "simpleLogic": "Baca format EUROCONVERT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak tombol khusus yang hanya muncul kalau add-in-nya terpasang.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=EUROCONVERT(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "REGISTER.ID": {
    "description": "Memanggil fungsi khusus dari add-in atau sistem lama.",
    "simpleLogic": "Baca format REGISTER.ID, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak tombol khusus yang hanya muncul kalau add-in-nya terpasang.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=REGISTER.ID(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SQL.REQUEST": {
    "description": "Memanggil fungsi khusus dari add-in atau sistem lama.",
    "simpleLogic": "Baca format SQL.REQUEST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak tombol khusus yang hanya muncul kalau add-in-nya terpasang.",
    "simpleExample": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "exampleFormula": "=SQL.REQUEST(A2)",
    "exampleMeaning": "Contoh memakai data dari tabel latihan yang sesuai dengan jenis rumusnya.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "AVEDEV": {
    "description": "Menghitung standar deviasi sampel.",
    "simpleLogic": "Baca format AVEDEV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak melihat apakah nilai kelas rapat atau sangat menyebar.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=AVEDEV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "AVERAGEA": {
    "description": "Menghitung rata-rata angka.",
    "simpleLogic": "Baca format AVERAGEA, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak cari nilai rata-rata kelas. Semua nilai dijumlahkan lalu dibagi jumlah siswa.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=AVERAGEA(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BETA.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format BETA.DIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=BETA.DIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BETA.INV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format BETA.INV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=BETA.INV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BINOM.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format BINOM.DIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=BINOM.DIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BINOM.DIST.RANGE": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format BINOM.DIST.RANGE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=BINOM.DIST.RANGE(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BINOM.INV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format BINOM.INV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=BINOM.INV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CHISQ.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format CHISQ.DIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=CHISQ.DIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CHISQ.DIST.RT": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format CHISQ.DIST.RT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=CHISQ.DIST.RT(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CHISQ.INV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format CHISQ.INV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=CHISQ.INV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CHISQ.INV.RT": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format CHISQ.INV.RT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=CHISQ.INV.RT(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CHISQ.TEST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format CHISQ.TEST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=CHISQ.TEST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CONFIDENCE.NORM": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format CONFIDENCE.NORM, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=CONFIDENCE.NORM(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CONFIDENCE.T": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format CONFIDENCE.T, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=CONFIDENCE.T(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CORREL": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Baca format CORREL, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=CORREL(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COVARIANCE.P": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format COVARIANCE.P, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=COVARIANCE.P(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "COVARIANCE.S": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format COVARIANCE.S, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=COVARIANCE.S(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DEVSQ": {
    "description": "Menghitung variance sampel.",
    "simpleLogic": "Baca format DEVSQ, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengukur seberapa jauh data menyebar dari tengahnya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=DEVSQ(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "EXPON.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format EXPON.DIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=EXPON.DIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "F.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format F.DIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=F.DIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "F.DIST.RT": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format F.DIST.RT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=F.DIST.RT(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "F.INV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format F.INV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=F.INV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "F.INV.RT": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format F.INV.RT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=F.INV.RT(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "F.TEST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format F.TEST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=F.TEST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FISHER": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format FISHER, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=FISHER(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FISHERINV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format FISHERINV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=FISHERINV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FORECAST": {
    "description": "Memperkirakan nilai masa depan dari data lama.",
    "simpleLogic": "Baca format FORECAST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menebak penjualan bulan depan dari pola bulan sebelumnya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=FORECAST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FORECAST.ETS": {
    "description": "Memperkirakan nilai masa depan dari data lama.",
    "simpleLogic": "Baca format FORECAST.ETS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menebak penjualan bulan depan dari pola bulan sebelumnya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=FORECAST.ETS(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FORECAST.ETS.CONFINT": {
    "description": "Memperkirakan nilai masa depan dari data lama.",
    "simpleLogic": "Baca format FORECAST.ETS.CONFINT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menebak penjualan bulan depan dari pola bulan sebelumnya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=FORECAST.ETS.CONFINT(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FORECAST.ETS.SEASONALITY": {
    "description": "Memperkirakan nilai masa depan dari data lama.",
    "simpleLogic": "Baca format FORECAST.ETS.SEASONALITY, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menebak penjualan bulan depan dari pola bulan sebelumnya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=FORECAST.ETS.SEASONALITY(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FORECAST.ETS.STAT": {
    "description": "Memperkirakan nilai masa depan dari data lama.",
    "simpleLogic": "Baca format FORECAST.ETS.STAT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menebak penjualan bulan depan dari pola bulan sebelumnya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=FORECAST.ETS.STAT(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FORECAST.LINEAR": {
    "description": "Memperkirakan nilai masa depan dari data lama.",
    "simpleLogic": "Baca format FORECAST.LINEAR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menebak penjualan bulan depan dari pola bulan sebelumnya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=FORECAST.LINEAR(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FREQUENCY": {
    "description": "Menghitung data dengan banyak syarat.",
    "simpleLogic": "Baca format FREQUENCY, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menghitung tamu yang pakai baju hitam dan membawa undangan. Dua syarat harus lolos.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=FREQUENCY(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "GAMMA": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format GAMMA, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=GAMMA(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "GAMMA.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format GAMMA.DIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=GAMMA.DIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "GAMMA.INV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format GAMMA.INV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=GAMMA.INV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "GAMMALN": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format GAMMALN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=GAMMALN(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "GAMMALN.PRECISE": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format GAMMALN.PRECISE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=GAMMALN.PRECISE(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "GAUSS": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format GAUSS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=GAUSS(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "GEOMEAN": {
    "description": "Menghitung rata-rata angka.",
    "simpleLogic": "Baca format GEOMEAN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak cari nilai rata-rata kelas. Semua nilai dijumlahkan lalu dibagi jumlah siswa.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=GEOMEAN(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "GROWTH": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Baca format GROWTH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=GROWTH(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "HARMEAN": {
    "description": "Menghitung rata-rata angka.",
    "simpleLogic": "Baca format HARMEAN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak cari nilai rata-rata kelas. Semua nilai dijumlahkan lalu dibagi jumlah siswa.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=HARMEAN(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "HYPGEOM.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format HYPGEOM.DIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=HYPGEOM.DIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "INTERCEPT": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Baca format INTERCEPT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=INTERCEPT(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "KURT": {
    "description": "Menghitung standar deviasi sampel.",
    "simpleLogic": "Baca format KURT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak melihat apakah nilai kelas rapat atau sangat menyebar.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=KURT(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "LINEST": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Baca format LINEST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=LINEST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "LOGEST": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Baca format LOGEST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=LOGEST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "LOGNORM.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format LOGNORM.DIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=LOGNORM.DIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "LOGNORM.INV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format LOGNORM.INV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=LOGNORM.INV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MAXA": {
    "description": "Mengambil angka paling besar.",
    "simpleLogic": "Baca format MAXA, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari juara 1 dari daftar nilai.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=MAXA(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MEDIAN": {
    "description": "Mengambil nilai tengah.",
    "simpleLogic": "Baca format MEDIAN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari orang yang berdiri di tengah antrean setelah diurutkan.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=MEDIAN(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MINA": {
    "description": "Mengambil angka paling kecil.",
    "simpleLogic": "Baca format MINA, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari juara dengan waktu lari paling cepat.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=MINA(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MODE.MULT": {
    "description": "Mengambil nilai yang paling sering muncul.",
    "simpleLogic": "Baca format MODE.MULT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari jawaban yang paling banyak dipilih.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=MODE.MULT(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MODE.SNGL": {
    "description": "Mengambil nilai yang paling sering muncul.",
    "simpleLogic": "Baca format MODE.SNGL, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari jawaban yang paling banyak dipilih.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=MODE.SNGL(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "NEGBINOM.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format NEGBINOM.DIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Mengambil parameter negative binomial dari tabel, termasuk pilihan kumulatif.",
    "exampleFormula": "=NEGBINOM.DIST(B2;B3;B4;B12)",
    "exampleMeaning": "Mengambil parameter negative binomial dari tabel, termasuk pilihan kumulatif.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "NORM.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format NORM.DIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=NORM.DIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "NORM.INV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format NORM.INV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=NORM.INV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "NORM.S.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format NORM.S.DIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=NORM.S.DIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "NORM.S.INV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format NORM.S.INV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=NORM.S.INV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PEARSON": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Baca format PEARSON, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=PEARSON(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PERCENTILE.EXC": {
    "description": "Mengambil nilai pada posisi persentase tertentu.",
    "simpleLogic": "Baca format PERCENTILE.EXC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari nilai yang berada di posisi 90% dari antrean data.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=PERCENTILE.EXC(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PERCENTILE.INC": {
    "description": "Mengambil nilai pada posisi persentase tertentu.",
    "simpleLogic": "Baca format PERCENTILE.INC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari nilai yang berada di posisi 90% dari antrean data.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=PERCENTILE.INC(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PERCENTRANK.EXC": {
    "description": "Mengambil nilai pada posisi persentase tertentu.",
    "simpleLogic": "Baca format PERCENTRANK.EXC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari nilai yang berada di posisi 90% dari antrean data.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=PERCENTRANK.EXC(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PERCENTRANK.INC": {
    "description": "Mengambil nilai pada posisi persentase tertentu.",
    "simpleLogic": "Baca format PERCENTRANK.INC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mencari nilai yang berada di posisi 90% dari antrean data.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=PERCENTRANK.INC(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PERMUT": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format PERMUT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=PERMUT(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PERMUTATIONA": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format PERMUTATIONA, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=PERMUTATIONA(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PHI": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format PHI, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=PHI(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "POISSON.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format POISSON.DIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=POISSON.DIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PROB": {
    "description": "Menghitung data dengan banyak syarat.",
    "simpleLogic": "Baca format PROB, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menghitung tamu yang pakai baju hitam dan membawa undangan. Dua syarat harus lolos.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=PROB(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "QUARTILE.EXC": {
    "description": "Membagi data menjadi 4 bagian.",
    "simpleLogic": "Baca format QUARTILE.EXC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak membagi antrean nilai menjadi empat kelompok.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=QUARTILE.EXC(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "QUARTILE.INC": {
    "description": "Membagi data menjadi 4 bagian.",
    "simpleLogic": "Baca format QUARTILE.INC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak membagi antrean nilai menjadi empat kelompok.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=QUARTILE.INC(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "RANK.AVG": {
    "description": "Memberi peringkat angka.",
    "simpleLogic": "Baca format RANK.AVG, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menentukan peringkat siswa dari daftar nilai.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=RANK.AVG(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "RANK.EQ": {
    "description": "Memberi peringkat angka dengan ranking sama untuk nilai seri.",
    "simpleLogic": "Baca format RANK.EQ, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak dua orang nilai sama mendapat peringkat yang sama.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=RANK.EQ(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "RSQ": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Baca format RSQ, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=RSQ(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SKEW": {
    "description": "Menghitung standar deviasi sampel.",
    "simpleLogic": "Baca format SKEW, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak melihat apakah nilai kelas rapat atau sangat menyebar.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=SKEW(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SKEW.P": {
    "description": "Menghitung standar deviasi sampel.",
    "simpleLogic": "Baca format SKEW.P, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak melihat apakah nilai kelas rapat atau sangat menyebar.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=SKEW.P(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SLOPE": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Baca format SLOPE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=SLOPE(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "STANDARDIZE": {
    "description": "Menghitung standar deviasi sampel.",
    "simpleLogic": "Baca format STANDARDIZE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak melihat apakah nilai kelas rapat atau sangat menyebar.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=STANDARDIZE(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "STDEV.P": {
    "description": "Menghitung standar deviasi populasi.",
    "simpleLogic": "Baca format STDEV.P, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengukur variasi semua cabang, bukan sebagian cabang.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=STDEV.P(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "STDEV.S": {
    "description": "Menghitung standar deviasi sampel.",
    "simpleLogic": "Baca format STDEV.S, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak melihat apakah nilai kelas rapat atau sangat menyebar.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=STDEV.S(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "STDEVA": {
    "description": "Menghitung standar deviasi sampel.",
    "simpleLogic": "Baca format STDEVA, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak melihat apakah nilai kelas rapat atau sangat menyebar.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=STDEVA(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "STDEVPA": {
    "description": "Menghitung standar deviasi populasi.",
    "simpleLogic": "Baca format STDEVPA, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengukur variasi semua cabang, bukan sebagian cabang.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=STDEVPA(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "STEYX": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Baca format STEYX, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=STEYX(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "T.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format T.DIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=T.DIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "T.DIST.2T": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format T.DIST.2T, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=T.DIST.2T(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "T.DIST.RT": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format T.DIST.RT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=T.DIST.RT(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "T.INV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format T.INV, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=T.INV(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "T.INV.2T": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format T.INV.2T, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=T.INV.2T(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "T.TEST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format T.TEST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=T.TEST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TREND": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Baca format TREND, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=TREND(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TRIMMEAN": {
    "description": "Menghitung rata-rata angka.",
    "simpleLogic": "Baca format TRIMMEAN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak cari nilai rata-rata kelas. Semua nilai dijumlahkan lalu dibagi jumlah siswa.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=TRIMMEAN(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "VAR.P": {
    "description": "Menghitung variance populasi.",
    "simpleLogic": "Baca format VAR.P, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengukur penyebaran semua data, bukan contoh data saja.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=VAR.P(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "VAR.S": {
    "description": "Menghitung variance sampel.",
    "simpleLogic": "Baca format VAR.S, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengukur seberapa jauh data menyebar dari tengahnya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=VAR.S(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "VARA": {
    "description": "Menghitung variance sampel.",
    "simpleLogic": "Baca format VARA, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengukur seberapa jauh data menyebar dari tengahnya.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=VARA(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "VARPA": {
    "description": "Menghitung variance populasi.",
    "simpleLogic": "Baca format VARPA, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak mengukur penyebaran semua data, bukan contoh data saja.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=VARPA(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "WEIBULL.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format WEIBULL.DIST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=WEIBULL.DIST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "Z.TEST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Baca format Z.TEST, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "exampleFormula": "=Z.TEST(B2;B3;B4)",
    "exampleMeaning": "Contoh memakai parameter statistik dari tabel, bukan data siswa asal-asalan.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ARRAYTOTEXT": {
    "description": "Menggabungkan teks dengan pemisah.",
    "simpleLogic": "Baca format ARRAYTOTEXT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak menyusun daftar nama lalu diberi koma otomatis.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=ARRAYTOTEXT(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ASC": {
    "description": "Mengubah teks jadi huruf besar.",
    "simpleLogic": "Baca format ASC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak menyuruh semua huruf bicara keras.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=ASC(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "BAHTTEXT": {
    "description": "Mengolah teks.",
    "simpleLogic": "Baca format BAHTTEXT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak gunting, lem, dan stabilo untuk merapikan tulisan.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=BAHTTEXT(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CHAR": {
    "description": "Mengubah angka/tanggal menjadi teks dengan format tertentu.",
    "simpleLogic": "Baca format CHAR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak memberi baju format ke angka agar tampil lebih rapi.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=CHAR(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CLEAN": {
    "description": "Menghapus karakter aneh yang tidak terlihat.",
    "simpleLogic": "Baca format CLEAN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak membersihkan noda tak terlihat di teks.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=CLEAN(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CODE": {
    "description": "Mengubah angka/tanggal menjadi teks dengan format tertentu.",
    "simpleLogic": "Baca format CODE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak memberi baju format ke angka agar tampil lebih rapi.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=CODE(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CONCAT": {
    "description": "Menggabungkan beberapa teks.",
    "simpleLogic": "Baca format CONCAT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak menyambung beberapa potongan kata menjadi satu kalimat.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=CONCAT(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "CONCATENATE": {
    "description": "Menggabungkan beberapa teks.",
    "simpleLogic": "Baca format CONCATENATE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak menyambung beberapa potongan kata menjadi satu kalimat.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=CONCATENATE(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DBCS": {
    "description": "Mengubah teks jadi huruf besar.",
    "simpleLogic": "Baca format DBCS, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak menyuruh semua huruf bicara keras.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=DBCS(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "DOLLAR": {
    "description": "Mengubah angka/tanggal menjadi teks dengan format tertentu.",
    "simpleLogic": "Baca format DOLLAR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak memberi baju format ke angka agar tampil lebih rapi.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=DOLLAR(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "EXACT": {
    "description": "Membuat keputusan jika kondisi benar atau salah.",
    "simpleLogic": "Baca format EXACT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak aturan sederhana: kalau nilai minimal 75 maka Lulus, kalau tidak maka Tidak Lulus.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=EXACT(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FIND": {
    "description": "Mencari posisi teks dengan huruf besar/kecil sensitif.",
    "simpleLogic": "Baca format FIND, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak mencari posisi huruf tertentu di kalimat, tapi A dan a dianggap beda.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=FIND(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FINDB": {
    "description": "Mencari posisi teks dengan huruf besar/kecil sensitif.",
    "simpleLogic": "Baca format FINDB, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak mencari posisi huruf tertentu di kalimat, tapi A dan a dianggap beda.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=FINDB(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FIXED": {
    "description": "Mengubah angka/tanggal menjadi teks dengan format tertentu.",
    "simpleLogic": "Baca format FIXED, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak memberi baju format ke angka agar tampil lebih rapi.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=FIXED(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "LEFT": {
    "description": "Mengambil karakter dari kiri.",
    "simpleLogic": "Baca format LEFT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak menggunting bagian awal tulisan.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=LEFT(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "LEFTB": {
    "description": "Mengambil karakter dari kiri.",
    "simpleLogic": "Baca format LEFTB, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak menggunting bagian awal tulisan.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=LEFTB(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "LEN": {
    "description": "Menghitung jumlah karakter teks.",
    "simpleLogic": "Baca format LEN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak menghitung jumlah huruf dalam nama.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=LEN(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "LENB": {
    "description": "Menghitung jumlah karakter teks.",
    "simpleLogic": "Baca format LENB, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak menghitung jumlah huruf dalam nama.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=LENB(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "LOWER": {
    "description": "Mengubah teks jadi huruf kecil.",
    "simpleLogic": "Baca format LOWER, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak menyuruh semua huruf bicara pelan.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=LOWER(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MID": {
    "description": "Mengambil karakter dari tengah.",
    "simpleLogic": "Baca format MID, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak mengambil potongan teks dari tengah kalimat.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=MID(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "MIDB": {
    "description": "Mengambil karakter dari tengah.",
    "simpleLogic": "Baca format MIDB, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak mengambil potongan teks dari tengah kalimat.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=MIDB(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "NUMBERVALUE": {
    "description": "Mengubah teks angka dengan separator tertentu menjadi angka.",
    "simpleLogic": "Baca format NUMBERVALUE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak menerjemahkan format angka asing supaya Excel paham.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=NUMBERVALUE(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PHONETIC": {
    "description": "Mengolah teks.",
    "simpleLogic": "Baca format PHONETIC, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak gunting, lem, dan stabilo untuk merapikan tulisan.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=PHONETIC(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "PROPER": {
    "description": "Membuat huruf awal tiap kata jadi kapital.",
    "simpleLogic": "Baca format PROPER, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak merapikan nama di sertifikat.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=PROPER(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "REPLACE": {
    "description": "Mengganti teks berdasarkan posisi karakter.",
    "simpleLogic": "Baca format REPLACE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak menimpa bagian tengah nomor seri.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=REPLACE(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "REPLACEB": {
    "description": "Mengganti teks berdasarkan posisi karakter.",
    "simpleLogic": "Baca format REPLACEB, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak menimpa bagian tengah nomor seri.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=REPLACEB(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "REPT": {
    "description": "Menggabungkan beberapa teks.",
    "simpleLogic": "Baca format REPT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak menyambung beberapa potongan kata menjadi satu kalimat.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=REPT(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "RIGHT": {
    "description": "Mengambil karakter dari kanan.",
    "simpleLogic": "Baca format RIGHT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak menggunting bagian akhir tulisan.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=RIGHT(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "RIGHTB": {
    "description": "Mengambil karakter dari kanan.",
    "simpleLogic": "Baca format RIGHTB, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak menggunting bagian akhir tulisan.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=RIGHTB(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SEARCH": {
    "description": "Mencari posisi teks tanpa sensitif huruf besar/kecil.",
    "simpleLogic": "Baca format SEARCH, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak fitur find biasa yang tidak peduli huruf besar/kecil.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=SEARCH(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SEARCHB": {
    "description": "Mencari posisi teks tanpa sensitif huruf besar/kecil.",
    "simpleLogic": "Baca format SEARCHB, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak fitur find biasa yang tidak peduli huruf besar/kecil.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=SEARCHB(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "SUBSTITUTE": {
    "description": "Mengganti teks tertentu dengan teks baru.",
    "simpleLogic": "Baca format SUBSTITUTE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak fitur find and replace.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=SUBSTITUTE(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "T": {
    "description": "Mengubah angka/tanggal menjadi teks dengan format tertentu.",
    "simpleLogic": "Baca format T, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak memberi baju format ke angka agar tampil lebih rapi.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=T(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TEXT": {
    "description": "Mengubah angka/tanggal menjadi teks dengan format tertentu.",
    "simpleLogic": "Baca format TEXT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak memberi baju format ke angka agar tampil lebih rapi.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=TEXT(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TEXTAFTER": {
    "description": "Mengambil teks setelah tanda tertentu.",
    "simpleLogic": "Baca format TEXTAFTER, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak mulai membaca setelah melewati tanda tertentu.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=TEXTAFTER(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TEXTBEFORE": {
    "description": "Mengambil teks sebelum tanda tertentu.",
    "simpleLogic": "Baca format TEXTBEFORE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak membaca tulisan sampai sebelum tanda pagar.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=TEXTBEFORE(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TEXTJOIN": {
    "description": "Menggabungkan teks dengan pemisah.",
    "simpleLogic": "Baca format TEXTJOIN, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak menyusun daftar nama lalu diberi koma otomatis.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=TEXTJOIN(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "TRIM": {
    "description": "Menghapus spasi berlebih.",
    "simpleLogic": "Baca format TRIM, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak merapikan jarak antar kata agar tidak berantakan.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=TRIM(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "UNICHAR": {
    "description": "Mengubah angka/tanggal menjadi teks dengan format tertentu.",
    "simpleLogic": "Baca format UNICHAR, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak memberi baju format ke angka agar tampil lebih rapi.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=UNICHAR(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "UNICODE": {
    "description": "Mengubah angka/tanggal menjadi teks dengan format tertentu.",
    "simpleLogic": "Baca format UNICODE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak memberi baju format ke angka agar tampil lebih rapi.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=UNICODE(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "UPPER": {
    "description": "Mengubah teks jadi huruf besar.",
    "simpleLogic": "Baca format UPPER, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak menyuruh semua huruf bicara keras.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=UPPER(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "VALUE": {
    "description": "Mengubah teks angka menjadi angka asli.",
    "simpleLogic": "Baca format VALUE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak mengubah label harga menjadi angka yang bisa dihitung kasir.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=VALUE(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "VALUETOTEXT": {
    "description": "Mengubah angka/tanggal menjadi teks dengan format tertentu.",
    "simpleLogic": "Baca format VALUETOTEXT, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Cocok untuk membersihkan nama, kode produk, invoice, email, dan data teks lain.",
    "analogy": "Kayak memberi baju format ke angka agar tampil lebih rapi.",
    "simpleExample": "Contoh mengolah teks dari cell A2.",
    "exampleFormula": "=VALUETOTEXT(A2)",
    "exampleMeaning": "Contoh mengolah teks dari cell A2.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "ENCODEURL": {
    "description": "Mengolah URL, web, atau XML.",
    "simpleLogic": "Baca format ENCODEURL, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kurir yang mengambil atau merapikan paket data dari alamat web.",
    "simpleExample": "Contoh memakai data URL/XML dari tabel web.",
    "exampleFormula": "=ENCODEURL(C2)",
    "exampleMeaning": "Contoh memakai data URL/XML dari tabel web.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "FILTERXML": {
    "description": "Mengolah URL, web, atau XML.",
    "simpleLogic": "Baca format FILTERXML, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kurir yang mengambil atau merapikan paket data dari alamat web.",
    "simpleExample": "Contoh memakai data URL/XML dari tabel web.",
    "exampleFormula": "=FILTERXML(C2)",
    "exampleMeaning": "Contoh memakai data URL/XML dari tabel web.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  },
  "WEBSERVICE": {
    "description": "Mengolah URL, web, atau XML.",
    "simpleLogic": "Baca format WEBSERVICE, ambil argumen dari tabel latihan, lalu isi rumus dari kiri ke kanan.",
    "useCase": "Dipakai saat kamu butuh hasil yang sesuai dengan jenis data dan argumen pada format rumus ini.",
    "analogy": "Kayak kurir yang mengambil atau merapikan paket data dari alamat web.",
    "simpleExample": "Contoh memakai data URL/XML dari tabel web.",
    "exampleFormula": "=WEBSERVICE(C2)",
    "exampleMeaning": "Contoh memakai data URL/XML dari tabel web.",
    "beginnerTip": "Utamakan referensi cell/range dari tabel. Angka hardcode boleh untuk cek cepat, tapi kurang fleksibel saat data berubah."
  }
};

export function getFormulaLearningContent(formula = {}) {
  if (!formula) return {};
  const saved = formulaLearningContent[formula.name] || formulaLearningContent[formula.id] || {};
  return buildBeginnerLearningContent({ ...saved, ...formula });
}
