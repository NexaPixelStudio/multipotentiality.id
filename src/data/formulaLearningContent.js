// Konten belajar Formula Coach.
// Disusun sebagai data lokal supaya penjelasan rumus bisa di-update tanpa mengubah banyak komponen.

export const formulaLearningContent = {
  "DETECTLANGUAGE": {
    "description": "Membuat formula yang lebih dinamis dan profesional.",
    "simpleLogic": "Gabungkan input, nama variabel, atau LAMBDA agar rumus lebih fleksibel.",
    "useCase": "Dipakai untuk dashboard, model rumus reusable, dan otomasi formula.",
    "analogy": "Kayak bikin sistem kecil di dalam Excel.",
    "simpleExample": "Contoh sederhana: pakai DETECTLANGUAGE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DETECTLANGUAGE(A2:A10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DETECTLANGUAGE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "GROUPBY": {
    "description": "Membuat formula yang lebih dinamis dan profesional.",
    "simpleLogic": "Gabungkan input, nama variabel, atau LAMBDA agar rumus lebih fleksibel.",
    "useCase": "Dipakai untuk dashboard, model rumus reusable, dan otomasi formula.",
    "analogy": "Kayak bikin sistem kecil di dalam Excel.",
    "simpleExample": "Contoh sederhana: pakai GROUPBY saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=GROUPBY(A2:A10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan GROUPBY. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "LAMBDA": {
    "description": "Membuat rumus menjadi function custom.",
    "simpleLogic": "Kamu tentukan parameter dan perhitungan, lalu bisa dipakai seperti function sendiri.",
    "useCase": "Saat ada pola rumus yang sering dipakai ulang.",
    "analogy": "Kayak bikin mesin rumus pribadi di Excel.",
    "simpleExample": "Buat function sementara yang mengalikan x dengan 10, lalu jalankan untuk 5.",
    "exampleFormula": "=LAMBDA(x;x*10)(5)",
    "exampleMeaning": "Buat function sementara yang mengalikan x dengan 10, lalu jalankan untuk 5.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "LET": {
    "description": "Memberi nama sementara pada bagian rumus.",
    "simpleLogic": "Kamu bisa menyimpan nilai/range dengan nama, lalu memakainya lagi di rumus yang sama.",
    "useCase": "Saat rumus panjang ingin dibuat lebih rapi dan cepat.",
    "analogy": "Kayak memberi nama panggilan ke angka yang sering dipakai.",
    "simpleExample": "Simpan SUM(E2:E16) sebagai total, lalu bagi 10.",
    "exampleFormula": "=LET(total;SUM(E2:E16);total/10)",
    "exampleMeaning": "Simpan SUM(E2:E16) sebagai total, lalu bagi 10.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "PERCENTOF": {
    "description": "Menghitung posisi persentase data dengan PERCENTOF.",
    "simpleLogic": "Excel melihat posisi nilai dalam data berdasarkan persentase.",
    "useCase": "Dipakai untuk percentile, rank persentase, dan batas top/bottom data.",
    "analogy": "Kayak melihat seseorang ada di posisi berapa persen dalam antrean.",
    "simpleExample": "Contoh sederhana: pakai PERCENTOF saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PERCENTOF(A2:A10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PERCENTOF. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PIVOTBY": {
    "description": "Membuat formula yang lebih dinamis dan profesional.",
    "simpleLogic": "Gabungkan input, nama variabel, atau LAMBDA agar rumus lebih fleksibel.",
    "useCase": "Dipakai untuk dashboard, model rumus reusable, dan otomasi formula.",
    "analogy": "Kayak bikin sistem kecil di dalam Excel.",
    "simpleExample": "Contoh sederhana: pakai PIVOTBY saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PIVOTBY(A2:A10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PIVOTBY. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "REGEXEXTRACT": {
    "description": "Membuat formula yang lebih dinamis dan profesional.",
    "simpleLogic": "Gabungkan input, nama variabel, atau LAMBDA agar rumus lebih fleksibel.",
    "useCase": "Dipakai untuk dashboard, model rumus reusable, dan otomasi formula.",
    "analogy": "Kayak bikin sistem kecil di dalam Excel.",
    "simpleExample": "Contoh sederhana: pakai REGEXEXTRACT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=REGEXEXTRACT(A2:A10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan REGEXEXTRACT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "REGEXREPLACE": {
    "description": "Membuat formula yang lebih dinamis dan profesional.",
    "simpleLogic": "Gabungkan input, nama variabel, atau LAMBDA agar rumus lebih fleksibel.",
    "useCase": "Dipakai untuk dashboard, model rumus reusable, dan otomasi formula.",
    "analogy": "Kayak bikin sistem kecil di dalam Excel.",
    "simpleExample": "Contoh sederhana: pakai REGEXREPLACE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=REGEXREPLACE(A2:A10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan REGEXREPLACE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "REGEXTEST": {
    "description": "Membuat formula yang lebih dinamis dan profesional.",
    "simpleLogic": "Gabungkan input, nama variabel, atau LAMBDA agar rumus lebih fleksibel.",
    "useCase": "Dipakai untuk dashboard, model rumus reusable, dan otomasi formula.",
    "analogy": "Kayak bikin sistem kecil di dalam Excel.",
    "simpleExample": "Contoh sederhana: pakai REGEXTEST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=REGEXTEST(A2:A10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan REGEXTEST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "TRANSLATE": {
    "description": "Membuat formula yang lebih dinamis dan profesional.",
    "simpleLogic": "Gabungkan input, nama variabel, atau LAMBDA agar rumus lebih fleksibel.",
    "useCase": "Dipakai untuk dashboard, model rumus reusable, dan otomasi formula.",
    "analogy": "Kayak bikin sistem kecil di dalam Excel.",
    "simpleExample": "Contoh sederhana: pakai TRANSLATE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=TRANSLATE(A2:A10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan TRANSLATE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "AVERAGE": {
    "description": "Menghitung rata-rata angka.",
    "simpleLogic": "Jumlahkan semua angka, lalu bagi dengan jumlah datanya.",
    "useCase": "Saat ingin tahu rata-rata nilai, harga, atau penjualan.",
    "analogy": "Kayak cari nilai rata-rata kelas, bukan nilai tertinggi atau terendah.",
    "simpleExample": "Hitung rata-rata angka dari D2 sampai D16.",
    "exampleFormula": "=AVERAGE(D2:D16)",
    "exampleMeaning": "Hitung rata-rata angka dari D2 sampai D16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "COUNT": {
    "description": "Menghitung jumlah cell yang berisi angka.",
    "simpleLogic": "Excel hanya menghitung data numerik, teks tidak dihitung.",
    "useCase": "Saat ingin tahu berapa data nilai atau qty yang terisi angka.",
    "analogy": "Kayak menghitung kursi yang ada nomor kursinya saja.",
    "simpleExample": "Hitung berapa cell angka di D2:D16.",
    "exampleFormula": "=COUNT(D2:D16)",
    "exampleMeaning": "Hitung berapa cell angka di D2:D16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "COUNTA": {
    "description": "Menghitung cell yang terisi apa pun.",
    "simpleLogic": "Kalau cell ada isi, baik angka maupun teks, akan dihitung.",
    "useCase": "Saat ingin tahu berapa baris data yang sudah terisi.",
    "analogy": "Kayak absen: siapa pun yang hadir dihitung, mau nilainya angka atau teks.",
    "simpleExample": "Hitung semua cell terisi di A2:A16.",
    "exampleFormula": "=COUNTA(A2:A16)",
    "exampleMeaning": "Hitung semua cell terisi di A2:A16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "COUNTBLANK": {
    "description": "Menghitung cell kosong.",
    "simpleLogic": "Excel mencari cell yang belum ada isinya.",
    "useCase": "Saat ingin cek data yang belum lengkap.",
    "analogy": "Kayak nyari bangku kosong di kelas.",
    "simpleExample": "Hitung berapa cell kosong di A2:A16.",
    "exampleFormula": "=COUNTBLANK(A2:A16)",
    "exampleMeaning": "Hitung berapa cell kosong di A2:A16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "LARGE": {
    "description": "Mengambil angka terbesar urutan tertentu.",
    "simpleLogic": "Kamu tentukan mau peringkat ke berapa dari angka terbesar.",
    "useCase": "Saat ingin tahu penjualan terbesar ke-2 atau nilai terbesar ke-3.",
    "analogy": "Kayak mencari juara 2, bukan selalu juara 1.",
    "simpleExample": "Ambil angka terbesar ke-2 dari D2:D16.",
    "exampleFormula": "=LARGE(D2:D16;2)",
    "exampleMeaning": "Ambil angka terbesar ke-2 dari D2:D16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "MAX": {
    "description": "Mengambil angka paling besar.",
    "simpleLogic": "Excel melihat semua angka lalu memilih yang nilainya paling tinggi.",
    "useCase": "Saat ingin tahu nilai tertinggi, stok terbesar, atau penjualan terbesar.",
    "analogy": "Kayak mencari juara pertama dari daftar nilai.",
    "simpleExample": "Cari angka terbesar di D2:D16.",
    "exampleFormula": "=MAX(D2:D16)",
    "exampleMeaning": "Cari angka terbesar di D2:D16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "MIN": {
    "description": "Mengambil angka paling kecil.",
    "simpleLogic": "Excel melihat semua angka lalu memilih yang nilainya paling rendah.",
    "useCase": "Saat ingin tahu nilai terendah, stok paling kecil, atau harga termurah.",
    "analogy": "Kayak mencari orang paling pendek di satu barisan.",
    "simpleExample": "Cari angka terkecil di D2:D16.",
    "exampleFormula": "=MIN(D2:D16)",
    "exampleMeaning": "Cari angka terkecil di D2:D16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "SMALL": {
    "description": "Mengambil angka terkecil urutan tertentu.",
    "simpleLogic": "Kamu tentukan mau peringkat ke berapa dari angka terkecil.",
    "useCase": "Saat ingin tahu stok terkecil ke-2 atau nilai terendah ke-3.",
    "analogy": "Kayak mencari posisi kedua dari bawah.",
    "simpleExample": "Ambil angka terkecil ke-2 dari D2:D16.",
    "exampleFormula": "=SMALL(D2:D16;2)",
    "exampleMeaning": "Ambil angka terkecil ke-2 dari D2:D16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "SUM": {
    "description": "Menjumlahkan angka dalam range.",
    "simpleLogic": "Pilih kumpulan angka, lalu Excel menjumlahkan semuanya.",
    "useCase": "Saat ingin total penjualan, total qty, atau total nilai.",
    "analogy": "Kayak ngumpulin semua uang receh di meja lalu dihitung totalnya.",
    "simpleExample": "Jumlahkan semua angka di E2 sampai E16.",
    "exampleFormula": "=SUM(E2:E16)",
    "exampleMeaning": "Jumlahkan semua angka di E2 sampai E16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "BETADIST": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu BETADIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai BETADIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BETADIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BETADIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BETAINV": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu BETAINV.",
    "simpleLogic": "Masukkan probabilitas dan parameter, lalu Excel mencari nilai balikannya.",
    "useCase": "Dipakai saat punya peluang dan ingin tahu nilai batasnya.",
    "analogy": "Kayak membalik pertanyaan: bukan “peluang dari nilai berapa?”, tapi “nilai berapa untuk peluang ini?”.",
    "simpleExample": "Contoh sederhana: pakai BETAINV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BETAINV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BETAINV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BINOMDIST": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu BINOMDIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai BINOMDIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BINOMDIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BINOMDIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CHIDIST": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu CHIDIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai CHIDIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CHIDIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CHIDIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CHIINV": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu CHIINV.",
    "simpleLogic": "Masukkan probabilitas dan parameter, lalu Excel mencari nilai balikannya.",
    "useCase": "Dipakai saat punya peluang dan ingin tahu nilai batasnya.",
    "analogy": "Kayak membalik pertanyaan: bukan “peluang dari nilai berapa?”, tapi “nilai berapa untuk peluang ini?”.",
    "simpleExample": "Contoh sederhana: pakai CHIINV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CHIINV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CHIINV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CHITEST": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu CHITEST.",
    "simpleLogic": "Cara kerjanya mirip fungsi modern, tapi dipertahankan agar file lama tetap jalan.",
    "useCase": "Dipakai kalau membuka file lama atau butuh hasil yang sama dengan Excel versi lama.",
    "analogy": "Kayak adaptor agar alat lama tetap bisa dipakai.",
    "simpleExample": "Contoh sederhana: pakai CHITEST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CHITEST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CHITEST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CONFIDENCE": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu CONFIDENCE.",
    "simpleLogic": "Cara kerjanya mirip fungsi modern, tapi dipertahankan agar file lama tetap jalan.",
    "useCase": "Dipakai kalau membuka file lama atau butuh hasil yang sama dengan Excel versi lama.",
    "analogy": "Kayak adaptor agar alat lama tetap bisa dipakai.",
    "simpleExample": "Contoh sederhana: pakai CONFIDENCE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CONFIDENCE(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CONFIDENCE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "COVAR": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu COVAR.",
    "simpleLogic": "Cara kerjanya mirip fungsi modern, tapi dipertahankan agar file lama tetap jalan.",
    "useCase": "Dipakai kalau membuka file lama atau butuh hasil yang sama dengan Excel versi lama.",
    "analogy": "Kayak adaptor agar alat lama tetap bisa dipakai.",
    "simpleExample": "Contoh sederhana: pakai COVAR saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=COVAR(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan COVAR. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CRITBINOM": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu CRITBINOM.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai CRITBINOM saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CRITBINOM(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CRITBINOM. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "EXPONDIST": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu EXPONDIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai EXPONDIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=EXPONDIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan EXPONDIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FDIST": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu FDIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai FDIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FDIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FDIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FINV": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu FINV.",
    "simpleLogic": "Masukkan probabilitas dan parameter, lalu Excel mencari nilai balikannya.",
    "useCase": "Dipakai saat punya peluang dan ingin tahu nilai batasnya.",
    "analogy": "Kayak membalik pertanyaan: bukan “peluang dari nilai berapa?”, tapi “nilai berapa untuk peluang ini?”.",
    "simpleExample": "Contoh sederhana: pakai FINV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FINV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FINV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FTEST": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu FTEST.",
    "simpleLogic": "Cara kerjanya mirip fungsi modern, tapi dipertahankan agar file lama tetap jalan.",
    "useCase": "Dipakai kalau membuka file lama atau butuh hasil yang sama dengan Excel versi lama.",
    "analogy": "Kayak adaptor agar alat lama tetap bisa dipakai.",
    "simpleExample": "Contoh sederhana: pakai FTEST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FTEST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FTEST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "GAMMADIST": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu GAMMADIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai GAMMADIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=GAMMADIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan GAMMADIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "GAMMAINV": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu GAMMAINV.",
    "simpleLogic": "Masukkan probabilitas dan parameter, lalu Excel mencari nilai balikannya.",
    "useCase": "Dipakai saat punya peluang dan ingin tahu nilai batasnya.",
    "analogy": "Kayak membalik pertanyaan: bukan “peluang dari nilai berapa?”, tapi “nilai berapa untuk peluang ini?”.",
    "simpleExample": "Contoh sederhana: pakai GAMMAINV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=GAMMAINV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan GAMMAINV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "HYPGEOMDIST": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu HYPGEOMDIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai HYPGEOMDIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=HYPGEOMDIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan HYPGEOMDIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "LOGINV": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu LOGINV.",
    "simpleLogic": "Masukkan probabilitas dan parameter, lalu Excel mencari nilai balikannya.",
    "useCase": "Dipakai saat punya peluang dan ingin tahu nilai batasnya.",
    "analogy": "Kayak membalik pertanyaan: bukan “peluang dari nilai berapa?”, tapi “nilai berapa untuk peluang ini?”.",
    "simpleExample": "Contoh sederhana: pakai LOGINV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=LOGINV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan LOGINV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "LOGNORMDIST": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu LOGNORMDIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai LOGNORMDIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=LOGNORMDIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan LOGNORMDIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "MODE": {
    "description": "Mengambil nilai yang paling sering muncul.",
    "simpleLogic": "Excel mencari angka yang frekuensinya paling banyak.",
    "useCase": "Saat ingin tahu nilai atau ukuran yang paling umum.",
    "analogy": "Kayak mencari jawaban yang paling banyak dipilih.",
    "simpleExample": "Cari angka yang paling sering muncul di D2:D16.",
    "exampleFormula": "=MODE(D2:D16)",
    "exampleMeaning": "Cari angka yang paling sering muncul di D2:D16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "NEGBINOMDIST": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu NEGBINOMDIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai NEGBINOMDIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=NEGBINOMDIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan NEGBINOMDIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "NORMDIST": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu NORMDIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai NORMDIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=NORMDIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan NORMDIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "NORMINV": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu NORMINV.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai NORMINV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=NORMINV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan NORMINV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "NORMSDIST": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu NORMSDIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai NORMSDIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=NORMSDIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan NORMSDIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "NORMSINV": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu NORMSINV.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai NORMSINV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=NORMSINV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan NORMSINV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PERCENTILE": {
    "description": "Mengambil nilai pada persentil tertentu.",
    "simpleLogic": "Excel mencari batas nilai berdasarkan persentase posisi data.",
    "useCase": "Saat ingin nilai batas 90% atau 25%.",
    "analogy": "Kayak mencari garis batas top 10%.",
    "simpleExample": "Ambil nilai persentil 90%.",
    "exampleFormula": "=PERCENTILE(D2:D16;0,9)",
    "exampleMeaning": "Ambil nilai persentil 90%.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "PERCENTRANK": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu PERCENTRANK.",
    "simpleLogic": "Excel melihat posisi nilai dalam data berdasarkan persentase.",
    "useCase": "Dipakai untuk percentile, rank persentase, dan batas top/bottom data.",
    "analogy": "Kayak melihat seseorang ada di posisi berapa persen dalam antrean.",
    "simpleExample": "Contoh sederhana: pakai PERCENTRANK saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PERCENTRANK(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PERCENTRANK. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "POISSON": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu POISSON.",
    "simpleLogic": "Cara kerjanya mirip fungsi modern, tapi dipertahankan agar file lama tetap jalan.",
    "useCase": "Dipakai kalau membuka file lama atau butuh hasil yang sama dengan Excel versi lama.",
    "analogy": "Kayak adaptor agar alat lama tetap bisa dipakai.",
    "simpleExample": "Contoh sederhana: pakai POISSON saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=POISSON(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan POISSON. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "QUARTILE": {
    "description": "Mengambil nilai kuartil data.",
    "simpleLogic": "Excel membagi data menjadi empat bagian.",
    "useCase": "Saat ingin Q1, median, atau Q3.",
    "analogy": "Kayak membagi barisan data menjadi 4 kelompok.",
    "simpleExample": "Ambil kuartil pertama dari D2:D16.",
    "exampleFormula": "=QUARTILE(D2:D16;1)",
    "exampleMeaning": "Ambil kuartil pertama dari D2:D16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "RANK": {
    "description": "Menentukan peringkat angka dalam daftar.",
    "simpleLogic": "Excel membandingkan satu angka dengan angka lain.",
    "useCase": "Saat ingin ranking nilai atau sales.",
    "analogy": "Kayak menentukan posisi lomba dari daftar skor.",
    "simpleExample": "Cari ranking D2 dalam D2:D16 dari terbesar.",
    "exampleFormula": "=RANK(D2;D2:D16;0)",
    "exampleMeaning": "Cari ranking D2 dalam D2:D16 dari terbesar.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "STDEV": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu STDEV.",
    "simpleLogic": "Cara kerjanya mirip fungsi modern, tapi dipertahankan agar file lama tetap jalan.",
    "useCase": "Dipakai kalau membuka file lama atau butuh hasil yang sama dengan Excel versi lama.",
    "analogy": "Kayak adaptor agar alat lama tetap bisa dipakai.",
    "simpleExample": "Contoh sederhana: pakai STDEV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=STDEV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan STDEV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "STDEVP": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu STDEVP.",
    "simpleLogic": "Cara kerjanya mirip fungsi modern, tapi dipertahankan agar file lama tetap jalan.",
    "useCase": "Dipakai kalau membuka file lama atau butuh hasil yang sama dengan Excel versi lama.",
    "analogy": "Kayak adaptor agar alat lama tetap bisa dipakai.",
    "simpleExample": "Contoh sederhana: pakai STDEVP saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=STDEVP(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan STDEVP. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "TDIST": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu TDIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai TDIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=TDIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan TDIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "TINV": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu TINV.",
    "simpleLogic": "Masukkan probabilitas dan parameter, lalu Excel mencari nilai balikannya.",
    "useCase": "Dipakai saat punya peluang dan ingin tahu nilai batasnya.",
    "analogy": "Kayak membalik pertanyaan: bukan “peluang dari nilai berapa?”, tapi “nilai berapa untuk peluang ini?”.",
    "simpleExample": "Contoh sederhana: pakai TINV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=TINV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan TINV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "TTEST": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu TTEST.",
    "simpleLogic": "Cara kerjanya mirip fungsi modern, tapi dipertahankan agar file lama tetap jalan.",
    "useCase": "Dipakai kalau membuka file lama atau butuh hasil yang sama dengan Excel versi lama.",
    "analogy": "Kayak adaptor agar alat lama tetap bisa dipakai.",
    "simpleExample": "Contoh sederhana: pakai TTEST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=TTEST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan TTEST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "VAR": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu VAR.",
    "simpleLogic": "Cara kerjanya mirip fungsi modern, tapi dipertahankan agar file lama tetap jalan.",
    "useCase": "Dipakai kalau membuka file lama atau butuh hasil yang sama dengan Excel versi lama.",
    "analogy": "Kayak adaptor agar alat lama tetap bisa dipakai.",
    "simpleExample": "Contoh sederhana: pakai VAR saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=VAR(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan VAR. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "VARP": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu VARP.",
    "simpleLogic": "Cara kerjanya mirip fungsi modern, tapi dipertahankan agar file lama tetap jalan.",
    "useCase": "Dipakai kalau membuka file lama atau butuh hasil yang sama dengan Excel versi lama.",
    "analogy": "Kayak adaptor agar alat lama tetap bisa dipakai.",
    "simpleExample": "Contoh sederhana: pakai VARP saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=VARP(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan VARP. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "WEIBULL": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu WEIBULL.",
    "simpleLogic": "Cara kerjanya mirip fungsi modern, tapi dipertahankan agar file lama tetap jalan.",
    "useCase": "Dipakai kalau membuka file lama atau butuh hasil yang sama dengan Excel versi lama.",
    "analogy": "Kayak adaptor agar alat lama tetap bisa dipakai.",
    "simpleExample": "Contoh sederhana: pakai WEIBULL saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=WEIBULL(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan WEIBULL. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ZTEST": {
    "description": "Fungsi lama Excel yang masih tersedia untuk kompatibilitas, yaitu ZTEST.",
    "simpleLogic": "Cara kerjanya mirip fungsi modern, tapi dipertahankan agar file lama tetap jalan.",
    "useCase": "Dipakai kalau membuka file lama atau butuh hasil yang sama dengan Excel versi lama.",
    "analogy": "Kayak adaptor agar alat lama tetap bisa dipakai.",
    "simpleExample": "Contoh sederhana: pakai ZTEST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ZTEST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ZTEST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "AVERAGEIF": {
    "description": "Menghitung rata-rata berdasarkan satu syarat.",
    "simpleLogic": "Cari data yang cocok dengan satu kriteria, lalu rata-ratakan angka yang sejajar.",
    "useCase": "Saat ingin rata-rata nilai siswa perempuan atau rata-rata sales kategori tertentu.",
    "analogy": "Kayak guru yang menghitung rata-rata hanya untuk satu kelompok siswa.",
    "simpleExample": "Ambil baris Perempuan di B, lalu hitung rata-rata nilai di D.",
    "exampleFormula": "=AVERAGEIF(B2:B16;\"Perempuan\";D2:D16)",
    "exampleMeaning": "Ambil baris Perempuan di B, lalu hitung rata-rata nilai di D.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "AVERAGEIFS": {
    "description": "Menghitung rata-rata berdasarkan banyak syarat.",
    "simpleLogic": "Rata-rata dihitung hanya dari baris yang lolos semua syarat.",
    "useCase": "Saat ingin rata-rata sales kategori Digital di Jakarta.",
    "analogy": "Kayak menghitung rata-rata hanya dari data yang sudah lolos beberapa filter.",
    "simpleExample": "Rata-ratakan E2:E16 untuk kategori Digital dan kota Jakarta.",
    "exampleFormula": "=AVERAGEIFS(E2:E16;B2:B16;\"Digital\";C2:C16;\"Jakarta\")",
    "exampleMeaning": "Rata-ratakan E2:E16 untuk kategori Digital dan kota Jakarta.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "COUNTIF": {
    "description": "Menghitung data berdasarkan satu syarat.",
    "simpleLogic": "Cek satu range, lalu hitung cell yang isinya cocok dengan kriteria.",
    "useCase": "Saat ingin menghitung jumlah data Perempuan, Digital, atau Lulus.",
    "analogy": "Kayak menghitung berapa orang yang pakai baju hitam.",
    "simpleExample": "Hitung berapa cell di B2:B16 yang berisi Perempuan.",
    "exampleFormula": "=COUNTIF(B2:B16;\"Perempuan\")",
    "exampleMeaning": "Hitung berapa cell di B2:B16 yang berisi Perempuan.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "COUNTIFS": {
    "description": "Menghitung data berdasarkan banyak syarat.",
    "simpleLogic": "Data dihitung hanya kalau semua syarat terpenuhi.",
    "useCase": "Saat ingin menghitung siswa Perempuan di kelas A yang nilainya lulus.",
    "analogy": "Kayak nyari orang yang pakai baju hitam dan duduk di baris depan.",
    "simpleExample": "Hitung baris yang Gender Perempuan dan Kelas A.",
    "exampleFormula": "=COUNTIFS(B2:B16;\"Perempuan\";C2:C16;\"A\")",
    "exampleMeaning": "Hitung baris yang Gender Perempuan dan Kelas A.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "MAXIFS": {
    "description": "Menghitung analisis statistik memakai fungsi MAXIFS.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai MAXIFS saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=MAXIFS(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan MAXIFS. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "MINIFS": {
    "description": "Menghitung analisis statistik memakai fungsi MINIFS.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai MINIFS saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=MINIFS(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan MINIFS. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SUMIF": {
    "description": "Menjumlahkan angka yang memenuhi satu syarat.",
    "simpleLogic": "Cek satu kolom untuk mencari syarat tertentu, lalu jumlahkan angka yang barisnya cocok.",
    "useCase": "Saat ingin total penjualan khusus kategori Digital.",
    "analogy": "Kayak kasir yang cuma menjumlahkan transaksi dari produk Digital saja.",
    "simpleExample": "Cari Digital di B2:B16, lalu jumlahkan angka sejajar di E2:E16.",
    "exampleFormula": "=SUMIF(B2:B16;\"Digital\";E2:E16)",
    "exampleMeaning": "Cari Digital di B2:B16, lalu jumlahkan angka sejajar di E2:E16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "SUMIFS": {
    "description": "Menjumlahkan angka yang memenuhi banyak syarat.",
    "simpleLogic": "Tentukan angka yang mau dijumlahkan, lalu pasang beberapa syarat yang harus cocok semua.",
    "useCase": "Saat ingin total penjualan kategori Digital di kota Jakarta.",
    "analogy": "Kayak filter pesanan: cuma ambil yang kategori Digital dan kota Jakarta, baru dijumlahkan.",
    "simpleExample": "Jumlahkan E2:E16 hanya jika kategori Digital dan kota Jakarta.",
    "exampleFormula": "=SUMIFS(E2:E16;B2:B16;\"Digital\";C2:C16;\"Jakarta\")",
    "exampleMeaning": "Jumlahkan E2:E16 hanya jika kategori Digital dan kota Jakarta.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "DAVERAGE": {
    "description": "Mengolah tabel database Excel memakai fungsi DAVERAGE.",
    "simpleLogic": "Tentukan tabel database, field yang dihitung, dan criteria range untuk memfilter data.",
    "useCase": "Dipakai untuk model tabel lama yang memakai area kriteria database.",
    "analogy": "Kayak PivotTable versi formula lama: filter dulu, baru hitung.",
    "simpleExample": "Contoh sederhana: pakai DAVERAGE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DAVERAGE(A1:E20;\"Total\";G1:H2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DAVERAGE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DCOUNT": {
    "description": "Mengolah tabel database Excel memakai fungsi DCOUNT.",
    "simpleLogic": "Tentukan tabel database, field yang dihitung, dan criteria range untuk memfilter data.",
    "useCase": "Dipakai untuk model tabel lama yang memakai area kriteria database.",
    "analogy": "Kayak PivotTable versi formula lama: filter dulu, baru hitung.",
    "simpleExample": "Contoh sederhana: pakai DCOUNT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DCOUNT(A1:E20;\"Total\";G1:H2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DCOUNT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DCOUNTA": {
    "description": "Mengolah tabel database Excel memakai fungsi DCOUNTA.",
    "simpleLogic": "Tentukan tabel database, field yang dihitung, dan criteria range untuk memfilter data.",
    "useCase": "Dipakai untuk model tabel lama yang memakai area kriteria database.",
    "analogy": "Kayak PivotTable versi formula lama: filter dulu, baru hitung.",
    "simpleExample": "Contoh sederhana: pakai DCOUNTA saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DCOUNTA(A1:E20;\"Total\";G1:H2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DCOUNTA. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DGET": {
    "description": "Mengolah tabel database Excel memakai fungsi DGET.",
    "simpleLogic": "Tentukan tabel database, field yang dihitung, dan criteria range untuk memfilter data.",
    "useCase": "Dipakai untuk model tabel lama yang memakai area kriteria database.",
    "analogy": "Kayak PivotTable versi formula lama: filter dulu, baru hitung.",
    "simpleExample": "Contoh sederhana: pakai DGET saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DGET(A1:E20;\"Total\";G1:H2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DGET. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DMAX": {
    "description": "Mengolah tabel database Excel memakai fungsi DMAX.",
    "simpleLogic": "Tentukan tabel database, field yang dihitung, dan criteria range untuk memfilter data.",
    "useCase": "Dipakai untuk model tabel lama yang memakai area kriteria database.",
    "analogy": "Kayak PivotTable versi formula lama: filter dulu, baru hitung.",
    "simpleExample": "Contoh sederhana: pakai DMAX saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DMAX(A1:E20;\"Total\";G1:H2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DMAX. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DMIN": {
    "description": "Mengolah tabel database Excel memakai fungsi DMIN.",
    "simpleLogic": "Tentukan tabel database, field yang dihitung, dan criteria range untuk memfilter data.",
    "useCase": "Dipakai untuk model tabel lama yang memakai area kriteria database.",
    "analogy": "Kayak PivotTable versi formula lama: filter dulu, baru hitung.",
    "simpleExample": "Contoh sederhana: pakai DMIN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DMIN(A1:E20;\"Total\";G1:H2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DMIN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DPRODUCT": {
    "description": "Mengolah tabel database Excel memakai fungsi DPRODUCT.",
    "simpleLogic": "Tentukan tabel database, field yang dihitung, dan criteria range untuk memfilter data.",
    "useCase": "Dipakai untuk model tabel lama yang memakai area kriteria database.",
    "analogy": "Kayak PivotTable versi formula lama: filter dulu, baru hitung.",
    "simpleExample": "Contoh sederhana: pakai DPRODUCT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DPRODUCT(A1:E20;\"Total\";G1:H2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DPRODUCT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DSTDEV": {
    "description": "Mengolah tabel database Excel memakai fungsi DSTDEV.",
    "simpleLogic": "Tentukan tabel database, field yang dihitung, dan criteria range untuk memfilter data.",
    "useCase": "Dipakai untuk model tabel lama yang memakai area kriteria database.",
    "analogy": "Kayak PivotTable versi formula lama: filter dulu, baru hitung.",
    "simpleExample": "Contoh sederhana: pakai DSTDEV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DSTDEV(A1:E20;\"Total\";G1:H2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DSTDEV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DSTDEVP": {
    "description": "Mengolah tabel database Excel memakai fungsi DSTDEVP.",
    "simpleLogic": "Tentukan tabel database, field yang dihitung, dan criteria range untuk memfilter data.",
    "useCase": "Dipakai untuk model tabel lama yang memakai area kriteria database.",
    "analogy": "Kayak PivotTable versi formula lama: filter dulu, baru hitung.",
    "simpleExample": "Contoh sederhana: pakai DSTDEVP saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DSTDEVP(A1:E20;\"Total\";G1:H2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DSTDEVP. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DSUM": {
    "description": "Mengolah tabel database Excel memakai fungsi DSUM.",
    "simpleLogic": "Tentukan tabel database, field yang dihitung, dan criteria range untuk memfilter data.",
    "useCase": "Dipakai untuk model tabel lama yang memakai area kriteria database.",
    "analogy": "Kayak PivotTable versi formula lama: filter dulu, baru hitung.",
    "simpleExample": "Contoh sederhana: pakai DSUM saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DSUM(A1:E20;\"Total\";G1:H2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DSUM. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DVAR": {
    "description": "Mengolah tabel database Excel memakai fungsi DVAR.",
    "simpleLogic": "Tentukan tabel database, field yang dihitung, dan criteria range untuk memfilter data.",
    "useCase": "Dipakai untuk model tabel lama yang memakai area kriteria database.",
    "analogy": "Kayak PivotTable versi formula lama: filter dulu, baru hitung.",
    "simpleExample": "Contoh sederhana: pakai DVAR saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DVAR(A1:E20;\"Total\";G1:H2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DVAR. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DVARP": {
    "description": "Mengolah tabel database Excel memakai fungsi DVARP.",
    "simpleLogic": "Tentukan tabel database, field yang dihitung, dan criteria range untuk memfilter data.",
    "useCase": "Dipakai untuk model tabel lama yang memakai area kriteria database.",
    "analogy": "Kayak PivotTable versi formula lama: filter dulu, baru hitung.",
    "simpleExample": "Contoh sederhana: pakai DVARP saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DVARP(A1:E20;\"Total\";G1:H2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DVARP. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DATE": {
    "description": "Membuat tanggal dari tahun, bulan, dan hari.",
    "simpleLogic": "Masukkan tahun, bulan, hari, lalu Excel membentuk tanggal valid.",
    "useCase": "Saat ingin membuat tanggal dari kolom tahun/bulan/hari.",
    "analogy": "Kayak merakit tanggal dari tiga potongan angka.",
    "simpleExample": "Buat tanggal 31 Mei 2026.",
    "exampleFormula": "=DATE(2026;5;31)",
    "exampleMeaning": "Buat tanggal 31 Mei 2026.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "DATEDIF": {
    "description": "Menghitung selisih hari, bulan, atau tahun.",
    "simpleLogic": "Excel membandingkan tanggal mulai dan tanggal akhir.",
    "useCase": "Saat ingin menghitung umur, masa kerja, atau durasi.",
    "analogy": "Kayak menghitung jarak waktu dari hari masuk sampai hari keluar.",
    "simpleExample": "Hitung selisih bulan antara A2 dan B2.",
    "exampleFormula": "=DATEDIF(A2;B2;\"M\")",
    "exampleMeaning": "Hitung selisih bulan antara A2 dan B2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "DATEVALUE": {
    "description": "Mengolah tanggal atau waktu menggunakan fungsi DATEVALUE.",
    "simpleLogic": "Masukkan tanggal/jam, lalu Excel mengambil bagian tertentu atau menghitung jarak waktunya.",
    "useCase": "Dipakai untuk deadline, umur, masa kerja, SLA, dan jadwal.",
    "analogy": "Kayak kalender dan jam otomatis di Excel.",
    "simpleExample": "Contoh sederhana: pakai DATEVALUE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DATEVALUE(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DATEVALUE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DAY": {
    "description": "Mengambil angka hari dari tanggal.",
    "simpleLogic": "Excel membaca tanggal lalu mengambil bagian harinya.",
    "useCase": "Saat ingin tahu tanggal berapa dari sebuah date.",
    "analogy": "Kayak memotong kalender dan ambil nomor harinya saja.",
    "simpleExample": "Ambil hari dari tanggal di A2.",
    "exampleFormula": "=DAY(A2)",
    "exampleMeaning": "Ambil hari dari tanggal di A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "DAYS": {
    "description": "Menghitung jumlah hari antara dua tanggal.",
    "simpleLogic": "Tanggal akhir dikurangi tanggal awal.",
    "useCase": "Saat ingin tahu durasi hari.",
    "analogy": "Kayak menghitung berapa lembar kalender yang dilewati.",
    "simpleExample": "Hitung hari dari A2 sampai B2.",
    "exampleFormula": "=DAYS(B2;A2)",
    "exampleMeaning": "Hitung hari dari A2 sampai B2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "DAYS360": {
    "description": "Mengolah tanggal atau waktu menggunakan fungsi DAYS360.",
    "simpleLogic": "Masukkan tanggal/jam, lalu Excel mengambil bagian tertentu atau menghitung jarak waktunya.",
    "useCase": "Dipakai untuk deadline, umur, masa kerja, SLA, dan jadwal.",
    "analogy": "Kayak kalender dan jam otomatis di Excel.",
    "simpleExample": "Contoh sederhana: pakai DAYS360 saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DAYS360(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DAYS360. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "EDATE": {
    "description": "Menggeser tanggal beberapa bulan.",
    "simpleLogic": "Excel menambah atau mengurangi bulan dari tanggal awal.",
    "useCase": "Saat menghitung jatuh tempo bulanan.",
    "analogy": "Kayak geser kalender maju 3 bulan.",
    "simpleExample": "Ambil tanggal 3 bulan setelah A2.",
    "exampleFormula": "=EDATE(A2;3)",
    "exampleMeaning": "Ambil tanggal 3 bulan setelah A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "EOMONTH": {
    "description": "Mengambil akhir bulan.",
    "simpleLogic": "Excel mencari tanggal terakhir dari bulan tertentu.",
    "useCase": "Saat ingin deadline akhir bulan atau closing period.",
    "analogy": "Kayak lompat ke halaman terakhir bulan di kalender.",
    "simpleExample": "Ambil tanggal akhir bulan dari tanggal A2.",
    "exampleFormula": "=EOMONTH(A2;0)",
    "exampleMeaning": "Ambil tanggal akhir bulan dari tanggal A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "HOUR": {
    "description": "Mengambil jam dari waktu.",
    "simpleLogic": "Excel membaca waktu lalu mengambil bagian jam.",
    "useCase": "Saat ingin analisis per jam.",
    "analogy": "Kayak ambil angka jam dari jam digital.",
    "simpleExample": "Ambil jam dari waktu di A2.",
    "exampleFormula": "=HOUR(A2)",
    "exampleMeaning": "Ambil jam dari waktu di A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "ISOWEEKNUM": {
    "description": "Mengolah tanggal atau waktu menggunakan fungsi ISOWEEKNUM.",
    "simpleLogic": "Masukkan cell yang ingin dicek, lalu Excel memberi hasil TRUE atau FALSE.",
    "useCase": "Dipakai untuk validasi data sebelum diproses rumus lain.",
    "analogy": "Kayak satpam yang mengecek isi cell sebelum diizinkan lanjut.",
    "simpleExample": "Contoh sederhana: pakai ISOWEEKNUM saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ISOWEEKNUM(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ISOWEEKNUM. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "MINUTE": {
    "description": "Mengambil menit dari waktu.",
    "simpleLogic": "Excel membaca waktu lalu mengambil bagian menit.",
    "useCase": "Saat ingin analisis keterlambatan menit.",
    "analogy": "Kayak ambil angka menit dari jam digital.",
    "simpleExample": "Ambil menit dari waktu di A2.",
    "exampleFormula": "=MINUTE(A2)",
    "exampleMeaning": "Ambil menit dari waktu di A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "MONTH": {
    "description": "Mengambil angka bulan dari tanggal.",
    "simpleLogic": "Excel membaca tanggal lalu mengambil bagian bulannya.",
    "useCase": "Saat ingin kelompokkan data berdasarkan bulan.",
    "analogy": "Kayak ambil nama laci bulan dari sebuah tanggal.",
    "simpleExample": "Ambil bulan dari tanggal di A2.",
    "exampleFormula": "=MONTH(A2)",
    "exampleMeaning": "Ambil bulan dari tanggal di A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "NETWORKDAYS": {
    "description": "Menghitung hari kerja antara dua tanggal.",
    "simpleLogic": "Excel menghitung Senin-Jumat dan mengabaikan weekend.",
    "useCase": "Saat ingin SLA kerja atau durasi kerja proyek.",
    "analogy": "Kayak menghitung hari kantor buka saja.",
    "simpleExample": "Hitung hari kerja dari A2 sampai B2.",
    "exampleFormula": "=NETWORKDAYS(A2;B2)",
    "exampleMeaning": "Hitung hari kerja dari A2 sampai B2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "NETWORKDAYS.INTL": {
    "description": "Menghitung hari kerja dengan aturan weekend custom.",
    "simpleLogic": "Kamu bisa tentukan hari apa yang dianggap weekend.",
    "useCase": "Saat jadwal kerja bukan Senin-Jumat normal.",
    "analogy": "Kayak kalender kerja yang bisa disesuaikan shift.",
    "simpleExample": "Hitung hari kerja dengan pola weekend tertentu.",
    "exampleFormula": "=NETWORKDAYS.INTL(A2;B2;1)",
    "exampleMeaning": "Hitung hari kerja dengan pola weekend tertentu.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "NOW": {
    "description": "Menghasilkan tanggal dan jam sekarang.",
    "simpleLogic": "Excel mengambil waktu saat workbook dihitung.",
    "useCase": "Saat ingin timestamp dinamis.",
    "analogy": "Kayak jam digital yang ikut waktu sekarang.",
    "simpleExample": "Tampilkan tanggal dan jam saat ini.",
    "exampleFormula": "=NOW()",
    "exampleMeaning": "Tampilkan tanggal dan jam saat ini.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "SECOND": {
    "description": "Mengambil detik dari waktu.",
    "simpleLogic": "Excel membaca waktu lalu mengambil bagian detik.",
    "useCase": "Saat butuh detail waktu sampai detik.",
    "analogy": "Kayak ambil detik dari stopwatch.",
    "simpleExample": "Ambil detik dari waktu di A2.",
    "exampleFormula": "=SECOND(A2)",
    "exampleMeaning": "Ambil detik dari waktu di A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "TIME": {
    "description": "Membuat nilai waktu dari jam, menit, detik.",
    "simpleLogic": "Masukkan jam, menit, detik, lalu Excel membentuk time.",
    "useCase": "Saat ingin membuat jam dari kolom terpisah.",
    "analogy": "Kayak merakit jam digital dari tiga angka.",
    "simpleExample": "Buat waktu 09:30:00.",
    "exampleFormula": "=TIME(9;30;0)",
    "exampleMeaning": "Buat waktu 09:30:00.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "TIMEVALUE": {
    "description": "Mengolah tanggal atau waktu menggunakan fungsi TIMEVALUE.",
    "simpleLogic": "Masukkan tanggal/jam, lalu Excel mengambil bagian tertentu atau menghitung jarak waktunya.",
    "useCase": "Dipakai untuk deadline, umur, masa kerja, SLA, dan jadwal.",
    "analogy": "Kayak kalender dan jam otomatis di Excel.",
    "simpleExample": "Contoh sederhana: pakai TIMEVALUE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=TIMEVALUE(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan TIMEVALUE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "TODAY": {
    "description": "Menghasilkan tanggal hari ini.",
    "simpleLogic": "Excel mengambil tanggal saat workbook dibuka/dihitung.",
    "useCase": "Saat ingin menghitung umur data sampai hari ini.",
    "analogy": "Kayak kalender otomatis di Excel.",
    "simpleExample": "Tampilkan tanggal hari ini.",
    "exampleFormula": "=TODAY()",
    "exampleMeaning": "Tampilkan tanggal hari ini.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "WEEKDAY": {
    "description": "Mengolah tanggal atau waktu menggunakan fungsi WEEKDAY.",
    "simpleLogic": "Masukkan tanggal/jam, lalu Excel mengambil bagian tertentu atau menghitung jarak waktunya.",
    "useCase": "Dipakai untuk deadline, umur, masa kerja, SLA, dan jadwal.",
    "analogy": "Kayak kalender dan jam otomatis di Excel.",
    "simpleExample": "Contoh sederhana: pakai WEEKDAY saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=WEEKDAY(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan WEEKDAY. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "WEEKNUM": {
    "description": "Mengolah tanggal atau waktu menggunakan fungsi WEEKNUM.",
    "simpleLogic": "Masukkan tanggal/jam, lalu Excel mengambil bagian tertentu atau menghitung jarak waktunya.",
    "useCase": "Dipakai untuk deadline, umur, masa kerja, SLA, dan jadwal.",
    "analogy": "Kayak kalender dan jam otomatis di Excel.",
    "simpleExample": "Contoh sederhana: pakai WEEKNUM saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=WEEKNUM(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan WEEKNUM. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "WORKDAY": {
    "description": "Mencari tanggal setelah sejumlah hari kerja.",
    "simpleLogic": "Mulai dari tanggal awal, Excel maju/mundur sejumlah hari kerja.",
    "useCase": "Saat ingin menentukan deadline kerja.",
    "analogy": "Kayak menghitung deadline tanpa menghitung Sabtu Minggu.",
    "simpleExample": "Cari tanggal 5 hari kerja setelah A2.",
    "exampleFormula": "=WORKDAY(A2;5)",
    "exampleMeaning": "Cari tanggal 5 hari kerja setelah A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "WORKDAY.INTL": {
    "description": "Mencari tanggal kerja dengan weekend custom.",
    "simpleLogic": "Mirip WORKDAY, tapi aturan weekend bisa diatur.",
    "useCase": "Saat perusahaan punya jadwal kerja shift atau weekend berbeda.",
    "analogy": "Kayak WORKDAY yang kalender kerjanya bisa diganti.",
    "simpleExample": "Cari tanggal setelah 5 hari kerja dengan pola weekend tertentu.",
    "exampleFormula": "=WORKDAY.INTL(A2;5;1)",
    "exampleMeaning": "Cari tanggal setelah 5 hari kerja dengan pola weekend tertentu.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "YEAR": {
    "description": "Mengambil tahun dari tanggal.",
    "simpleLogic": "Excel membaca tanggal lalu mengambil bagian tahunnya.",
    "useCase": "Saat ingin laporan per tahun.",
    "analogy": "Kayak ambil label tahun dari kalender.",
    "simpleExample": "Ambil tahun dari tanggal di A2.",
    "exampleFormula": "=YEAR(A2)",
    "exampleMeaning": "Ambil tahun dari tanggal di A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "YEARFRAC": {
    "description": "Mengolah tanggal atau waktu menggunakan fungsi YEARFRAC.",
    "simpleLogic": "Masukkan tanggal/jam, lalu Excel mengambil bagian tertentu atau menghitung jarak waktunya.",
    "useCase": "Dipakai untuk deadline, umur, masa kerja, SLA, dan jadwal.",
    "analogy": "Kayak kalender dan jam otomatis di Excel.",
    "simpleExample": "Contoh sederhana: pakai YEARFRAC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=YEARFRAC(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan YEARFRAC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BYCOL": {
    "description": "Mengolah data per kolom.",
    "simpleLogic": "Excel menjalankan LAMBDA untuk setiap kolom.",
    "useCase": "Saat ingin total per kolom otomatis.",
    "analogy": "Kayak mengecek setiap kolom sebagai satu paket.",
    "simpleExample": "Jumlahkan tiap kolom dari A2:E10.",
    "exampleFormula": "=BYCOL(A2:E10;LAMBDA(c;SUM(c)))",
    "exampleMeaning": "Jumlahkan tiap kolom dari A2:E10.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "BYROW": {
    "description": "Mengolah data per baris.",
    "simpleLogic": "Excel menjalankan LAMBDA untuk setiap baris.",
    "useCase": "Saat ingin total per baris tanpa copy formula.",
    "analogy": "Kayak mengecek satu baris data sebagai satu paket.",
    "simpleExample": "Jumlahkan tiap baris dari A2:E10.",
    "exampleFormula": "=BYROW(A2:E10;LAMBDA(r;SUM(r)))",
    "exampleMeaning": "Jumlahkan tiap baris dari A2:E10.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "CHOOSECOLS": {
    "description": "Mencari, mengambil, atau membuat referensi data memakai CHOOSECOLS.",
    "simpleLogic": "Tentukan nilai yang dicari atau posisi data, lalu Excel mengambil hasil dari tabel.",
    "useCase": "Dipakai untuk master produk, harga, kategori, alamat cell, dan tabel referensi.",
    "analogy": "Kayak petugas arsip yang mencari kode lalu mengambil informasi pasangannya.",
    "simpleExample": "Contoh sederhana: pakai CHOOSECOLS saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CHOOSECOLS(A2:E10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CHOOSECOLS. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CHOOSEROWS": {
    "description": "Mencari, mengambil, atau membuat referensi data memakai CHOOSEROWS.",
    "simpleLogic": "Tentukan nilai yang dicari atau posisi data, lalu Excel mengambil hasil dari tabel.",
    "useCase": "Dipakai untuk master produk, harga, kategori, alamat cell, dan tabel referensi.",
    "analogy": "Kayak petugas arsip yang mencari kode lalu mengambil informasi pasangannya.",
    "simpleExample": "Contoh sederhana: pakai CHOOSEROWS saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CHOOSEROWS(A2:E10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CHOOSEROWS. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DROP": {
    "description": "Mencari, mengambil, atau membuat referensi data memakai DROP.",
    "simpleLogic": "Tentukan nilai yang dicari atau posisi data, lalu Excel mengambil hasil dari tabel.",
    "useCase": "Dipakai untuk master produk, harga, kategori, alamat cell, dan tabel referensi.",
    "analogy": "Kayak petugas arsip yang mencari kode lalu mengambil informasi pasangannya.",
    "simpleExample": "Contoh sederhana: pakai DROP saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DROP(A2:E10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DROP. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "EXPAND": {
    "description": "Mencari, mengambil, atau membuat referensi data memakai EXPAND.",
    "simpleLogic": "Tentukan nilai yang dicari atau posisi data, lalu Excel mengambil hasil dari tabel.",
    "useCase": "Dipakai untuk master produk, harga, kategori, alamat cell, dan tabel referensi.",
    "analogy": "Kayak petugas arsip yang mencari kode lalu mengambil informasi pasangannya.",
    "simpleExample": "Contoh sederhana: pakai EXPAND saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=EXPAND(A2:E10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan EXPAND. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FILTER": {
    "description": "Menampilkan data yang memenuhi syarat.",
    "simpleLogic": "Pilih tabel, lalu buat kondisi. Baris yang lolos akan keluar otomatis.",
    "useCase": "Saat ingin membuat daftar produk kategori Digital saja.",
    "analogy": "Kayak menyaring kopi: yang lolos filter saja yang masuk gelas.",
    "simpleExample": "Tampilkan baris A2:E16 yang kategorinya Digital.",
    "exampleFormula": "=FILTER(A2:E16;B2:B16=\"Digital\")",
    "exampleMeaning": "Tampilkan baris A2:E16 yang kategorinya Digital.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "HSTACK": {
    "description": "Mencari, mengambil, atau membuat referensi data memakai HSTACK.",
    "simpleLogic": "Tentukan nilai yang dicari atau posisi data, lalu Excel mengambil hasil dari tabel.",
    "useCase": "Dipakai untuk master produk, harga, kategori, alamat cell, dan tabel referensi.",
    "analogy": "Kayak petugas arsip yang mencari kode lalu mengambil informasi pasangannya.",
    "simpleExample": "Contoh sederhana: pakai HSTACK saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=HSTACK(A2:E10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan HSTACK. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "MAKEARRAY": {
    "description": "Membuat array baru dari aturan baris dan kolom.",
    "simpleLogic": "Excel membuat tabel virtual berdasarkan rumus LAMBDA.",
    "useCase": "Saat ingin generate grid atau tabel perhitungan otomatis.",
    "analogy": "Kayak membuat cetakan tabel sendiri dari rumus.",
    "simpleExample": "Buat tabel 3x3 berisi hasil baris dikali kolom.",
    "exampleFormula": "=MAKEARRAY(3;3;LAMBDA(r;c;r*c))",
    "exampleMeaning": "Buat tabel 3x3 berisi hasil baris dikali kolom.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "MAP": {
    "description": "Mengolah setiap item dalam array dengan LAMBDA.",
    "simpleLogic": "Excel menjalankan aturan yang sama ke tiap nilai.",
    "useCase": "Saat ingin mengubah banyak data tanpa copy formula ke bawah.",
    "analogy": "Kayak memberi instruksi yang sama ke semua baris sekaligus.",
    "simpleExample": "Kalikan setiap nilai A2:A10 dengan 10.",
    "exampleFormula": "=MAP(A2:A10;LAMBDA(x;x*10))",
    "exampleMeaning": "Kalikan setiap nilai A2:A10 dengan 10.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "RANDARRAY": {
    "description": "Melakukan perhitungan matematika memakai fungsi RANDARRAY.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai RANDARRAY saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=RANDARRAY(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan RANDARRAY. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "REDUCE": {
    "description": "Menggabungkan banyak nilai menjadi satu hasil akhir.",
    "simpleLogic": "Excel membawa nilai awal, lalu memproses item satu per satu.",
    "useCase": "Saat ingin akumulasi custom.",
    "analogy": "Kayak menabung sedikit demi sedikit sampai jadi total akhir.",
    "simpleExample": "Jumlahkan A2:A10 dengan proses akumulasi.",
    "exampleFormula": "=REDUCE(0;A2:A10;LAMBDA(a;b;a+b))",
    "exampleMeaning": "Jumlahkan A2:A10 dengan proses akumulasi.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "SCAN": {
    "description": "Menampilkan hasil akumulasi bertahap.",
    "simpleLogic": "Mirip REDUCE, tapi setiap langkahnya ikut ditampilkan.",
    "useCase": "Saat ingin running total.",
    "analogy": "Kayak catatan saldo setelah setiap transaksi.",
    "simpleExample": "Buat running total dari A2:A10.",
    "exampleFormula": "=SCAN(0;A2:A10;LAMBDA(a;b;a+b))",
    "exampleMeaning": "Buat running total dari A2:A10.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "SEQUENCE": {
    "description": "Melakukan perhitungan matematika memakai fungsi SEQUENCE.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai SEQUENCE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SEQUENCE(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SEQUENCE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SORT": {
    "description": "Mengurutkan data.",
    "simpleLogic": "Excel menyusun ulang data berdasarkan kolom dan arah urutan.",
    "useCase": "Saat ingin mengurutkan sales dari kecil ke besar.",
    "analogy": "Kayak merapikan daftar dari A-Z atau dari angka terkecil.",
    "simpleExample": "Urutkan A2:E16 berdasarkan kolom ke-5 dari terbesar.",
    "exampleFormula": "=SORT(A2:E16;5;-1)",
    "exampleMeaning": "Urutkan A2:E16 berdasarkan kolom ke-5 dari terbesar.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "SORTBY": {
    "description": "Mengurutkan data berdasarkan range lain.",
    "simpleLogic": "Data utama diurutkan memakai nilai dari kolom/range tertentu.",
    "useCase": "Saat ingin urutkan produk berdasarkan total penjualan.",
    "analogy": "Kayak merapikan daftar nama, tapi acuannya nilai di kolom lain.",
    "simpleExample": "Urutkan A2:E16 berdasarkan E2:E16 dari terbesar.",
    "exampleFormula": "=SORTBY(A2:E16;E2:E16;-1)",
    "exampleMeaning": "Urutkan A2:E16 berdasarkan E2:E16 dari terbesar.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "TAKE": {
    "description": "Mencari, mengambil, atau membuat referensi data memakai TAKE.",
    "simpleLogic": "Tentukan nilai yang dicari atau posisi data, lalu Excel mengambil hasil dari tabel.",
    "useCase": "Dipakai untuk master produk, harga, kategori, alamat cell, dan tabel referensi.",
    "analogy": "Kayak petugas arsip yang mencari kode lalu mengambil informasi pasangannya.",
    "simpleExample": "Contoh sederhana: pakai TAKE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=TAKE(A2:E10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan TAKE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "TEXTSPLIT": {
    "description": "Memecah teks menjadi beberapa bagian.",
    "simpleLogic": "Tentukan pemisah, lalu Excel membagi teks ke kolom/baris.",
    "useCase": "Saat ingin memecah nama, email, atau kode.",
    "analogy": "Kebalikan dari TEXTJOIN: satu kalimat dipecah jadi potongan.",
    "simpleExample": "Pecah isi A2 berdasarkan tanda strip.",
    "exampleFormula": "=TEXTSPLIT(A2;\"-\")",
    "exampleMeaning": "Pecah isi A2 berdasarkan tanda strip.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "TOCOL": {
    "description": "Mencari, mengambil, atau membuat referensi data memakai TOCOL.",
    "simpleLogic": "Tentukan nilai yang dicari atau posisi data, lalu Excel mengambil hasil dari tabel.",
    "useCase": "Dipakai untuk master produk, harga, kategori, alamat cell, dan tabel referensi.",
    "analogy": "Kayak petugas arsip yang mencari kode lalu mengambil informasi pasangannya.",
    "simpleExample": "Contoh sederhana: pakai TOCOL saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=TOCOL(A2:E10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan TOCOL. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "TOROW": {
    "description": "Mencari, mengambil, atau membuat referensi data memakai TOROW.",
    "simpleLogic": "Tentukan nilai yang dicari atau posisi data, lalu Excel mengambil hasil dari tabel.",
    "useCase": "Dipakai untuk master produk, harga, kategori, alamat cell, dan tabel referensi.",
    "analogy": "Kayak petugas arsip yang mencari kode lalu mengambil informasi pasangannya.",
    "simpleExample": "Contoh sederhana: pakai TOROW saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=TOROW(A2:E10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan TOROW. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "TRANSPOSE": {
    "description": "Menukar arah baris dan kolom.",
    "simpleLogic": "Data yang tadinya ke bawah bisa dibuat ke samping, atau sebaliknya.",
    "useCase": "Saat layout tabel perlu dibalik.",
    "analogy": "Kayak memutar tabel 90 derajat.",
    "simpleExample": "Ubah baris menjadi kolom dari A1:E5.",
    "exampleFormula": "=TRANSPOSE(A1:E5)",
    "exampleMeaning": "Ubah baris menjadi kolom dari A1:E5.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "UNIQUE": {
    "description": "Mengambil daftar nilai unik.",
    "simpleLogic": "Excel membuang duplikat dan menyisakan item yang berbeda saja.",
    "useCase": "Saat ingin daftar kategori tanpa double.",
    "analogy": "Kayak membuat daftar tamu, nama yang sama cukup ditulis sekali.",
    "simpleExample": "Ambil kategori unik dari B2:B16.",
    "exampleFormula": "=UNIQUE(B2:B16)",
    "exampleMeaning": "Ambil kategori unik dari B2:B16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "VSTACK": {
    "description": "Mencari, mengambil, atau membuat referensi data memakai VSTACK.",
    "simpleLogic": "Tentukan nilai yang dicari atau posisi data, lalu Excel mengambil hasil dari tabel.",
    "useCase": "Dipakai untuk master produk, harga, kategori, alamat cell, dan tabel referensi.",
    "analogy": "Kayak petugas arsip yang mencari kode lalu mengambil informasi pasangannya.",
    "simpleExample": "Contoh sederhana: pakai VSTACK saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=VSTACK(A2:E10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan VSTACK. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "WRAPCOLS": {
    "description": "Mencari, mengambil, atau membuat referensi data memakai WRAPCOLS.",
    "simpleLogic": "Tentukan nilai yang dicari atau posisi data, lalu Excel mengambil hasil dari tabel.",
    "useCase": "Dipakai untuk master produk, harga, kategori, alamat cell, dan tabel referensi.",
    "analogy": "Kayak petugas arsip yang mencari kode lalu mengambil informasi pasangannya.",
    "simpleExample": "Contoh sederhana: pakai WRAPCOLS saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=WRAPCOLS(A2:E10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan WRAPCOLS. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "WRAPROWS": {
    "description": "Mencari, mengambil, atau membuat referensi data memakai WRAPROWS.",
    "simpleLogic": "Tentukan nilai yang dicari atau posisi data, lalu Excel mengambil hasil dari tabel.",
    "useCase": "Dipakai untuk master produk, harga, kategori, alamat cell, dan tabel referensi.",
    "analogy": "Kayak petugas arsip yang mencari kode lalu mengambil informasi pasangannya.",
    "simpleExample": "Contoh sederhana: pakai WRAPROWS saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=WRAPROWS(A2:E10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan WRAPROWS. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "XLOOKUP": {
    "description": "Mencari data dari satu range dan mengambil hasil dari range lain.",
    "simpleLogic": "Lookup range dan return range bisa dipisah, jadi lebih fleksibel.",
    "useCase": "Saat ingin mengganti VLOOKUP dengan rumus lookup yang lebih aman.",
    "analogy": "Kayak tanya “kode ini ada di mana?”, lalu ambil jawaban dari kolom yang sejajar.",
    "simpleExample": "Cari A2 di E2:E8, lalu ambil hasil sejajar dari F2:F8.",
    "exampleFormula": "=XLOOKUP(A2;E2:E8;F2:F8)",
    "exampleMeaning": "Cari A2 di E2:E8, lalu ambil hasil sejajar dari F2:F8.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "XMATCH": {
    "description": "Mencari posisi nilai dengan opsi modern.",
    "simpleLogic": "Mirip MATCH, tapi lebih fleksibel untuk mode pencarian.",
    "useCase": "Saat butuh posisi data untuk lookup modern.",
    "analogy": "Kayak MATCH versi baru yang lebih bisa diatur arah dan cara cari.",
    "simpleExample": "Cari posisi A2 dalam E2:E8.",
    "exampleFormula": "=XMATCH(A2;E2:E8)",
    "exampleMeaning": "Cari posisi A2 dalam E2:E8.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "BESSELI": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BESSELI.",
    "simpleLogic": "Masukkan angka teknis, satuan, basis bilangan, atau angka kompleks.",
    "useCase": "Dipakai untuk konversi satuan, bilangan biner/hex, angka kompleks, dan fungsi teknik.",
    "analogy": "Kayak toolbox teknik untuk angka yang lebih spesifik.",
    "simpleExample": "Contoh sederhana: pakai BESSELI saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BESSELI(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BESSELI. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BESSELJ": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BESSELJ.",
    "simpleLogic": "Masukkan angka teknis, satuan, basis bilangan, atau angka kompleks.",
    "useCase": "Dipakai untuk konversi satuan, bilangan biner/hex, angka kompleks, dan fungsi teknik.",
    "analogy": "Kayak toolbox teknik untuk angka yang lebih spesifik.",
    "simpleExample": "Contoh sederhana: pakai BESSELJ saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BESSELJ(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BESSELJ. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BESSELK": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BESSELK.",
    "simpleLogic": "Masukkan angka teknis, satuan, basis bilangan, atau angka kompleks.",
    "useCase": "Dipakai untuk konversi satuan, bilangan biner/hex, angka kompleks, dan fungsi teknik.",
    "analogy": "Kayak toolbox teknik untuk angka yang lebih spesifik.",
    "simpleExample": "Contoh sederhana: pakai BESSELK saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BESSELK(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BESSELK. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BESSELY": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BESSELY.",
    "simpleLogic": "Masukkan angka teknis, satuan, basis bilangan, atau angka kompleks.",
    "useCase": "Dipakai untuk konversi satuan, bilangan biner/hex, angka kompleks, dan fungsi teknik.",
    "analogy": "Kayak toolbox teknik untuk angka yang lebih spesifik.",
    "simpleExample": "Contoh sederhana: pakai BESSELY saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BESSELY(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BESSELY. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BIN2DEC": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BIN2DEC.",
    "simpleLogic": "Masukkan angka dari satu sistem bilangan, lalu Excel ubah ke sistem lain.",
    "useCase": "Dipakai untuk kebutuhan teknik, komputer, biner, oktal, desimal, atau hex.",
    "analogy": "Kayak menerjemahkan angka dari bahasa komputer ke bahasa angka lain.",
    "simpleExample": "Contoh sederhana: pakai BIN2DEC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BIN2DEC(1010)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BIN2DEC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BIN2HEX": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BIN2HEX.",
    "simpleLogic": "Masukkan angka dari satu sistem bilangan, lalu Excel ubah ke sistem lain.",
    "useCase": "Dipakai untuk kebutuhan teknik, komputer, biner, oktal, desimal, atau hex.",
    "analogy": "Kayak menerjemahkan angka dari bahasa komputer ke bahasa angka lain.",
    "simpleExample": "Contoh sederhana: pakai BIN2HEX saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BIN2HEX(1010)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BIN2HEX. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BIN2OCT": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BIN2OCT.",
    "simpleLogic": "Masukkan angka dari satu sistem bilangan, lalu Excel ubah ke sistem lain.",
    "useCase": "Dipakai untuk kebutuhan teknik, komputer, biner, oktal, desimal, atau hex.",
    "analogy": "Kayak menerjemahkan angka dari bahasa komputer ke bahasa angka lain.",
    "simpleExample": "Contoh sederhana: pakai BIN2OCT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BIN2OCT(1010)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BIN2OCT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BITAND": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BITAND.",
    "simpleLogic": "Masukkan angka teknis, satuan, basis bilangan, atau angka kompleks.",
    "useCase": "Dipakai untuk konversi satuan, bilangan biner/hex, angka kompleks, dan fungsi teknik.",
    "analogy": "Kayak toolbox teknik untuk angka yang lebih spesifik.",
    "simpleExample": "Contoh sederhana: pakai BITAND saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BITAND(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BITAND. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BITLSHIFT": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BITLSHIFT.",
    "simpleLogic": "Masukkan angka teknis, satuan, basis bilangan, atau angka kompleks.",
    "useCase": "Dipakai untuk konversi satuan, bilangan biner/hex, angka kompleks, dan fungsi teknik.",
    "analogy": "Kayak toolbox teknik untuk angka yang lebih spesifik.",
    "simpleExample": "Contoh sederhana: pakai BITLSHIFT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BITLSHIFT(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BITLSHIFT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BITOR": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BITOR.",
    "simpleLogic": "Masukkan angka teknis, satuan, basis bilangan, atau angka kompleks.",
    "useCase": "Dipakai untuk konversi satuan, bilangan biner/hex, angka kompleks, dan fungsi teknik.",
    "analogy": "Kayak toolbox teknik untuk angka yang lebih spesifik.",
    "simpleExample": "Contoh sederhana: pakai BITOR saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BITOR(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BITOR. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BITRSHIFT": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BITRSHIFT.",
    "simpleLogic": "Masukkan angka teknis, satuan, basis bilangan, atau angka kompleks.",
    "useCase": "Dipakai untuk konversi satuan, bilangan biner/hex, angka kompleks, dan fungsi teknik.",
    "analogy": "Kayak toolbox teknik untuk angka yang lebih spesifik.",
    "simpleExample": "Contoh sederhana: pakai BITRSHIFT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BITRSHIFT(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BITRSHIFT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BITXOR": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi BITXOR.",
    "simpleLogic": "Masukkan angka teknis, satuan, basis bilangan, atau angka kompleks.",
    "useCase": "Dipakai untuk konversi satuan, bilangan biner/hex, angka kompleks, dan fungsi teknik.",
    "analogy": "Kayak toolbox teknik untuk angka yang lebih spesifik.",
    "simpleExample": "Contoh sederhana: pakai BITXOR saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BITXOR(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BITXOR. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "COMPLEX": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi COMPLEX.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai COMPLEX saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=COMPLEX(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan COMPLEX. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CONVERT": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi CONVERT.",
    "simpleLogic": "Masukkan angka teknis, satuan, basis bilangan, atau angka kompleks.",
    "useCase": "Dipakai untuk konversi satuan, bilangan biner/hex, angka kompleks, dan fungsi teknik.",
    "analogy": "Kayak toolbox teknik untuk angka yang lebih spesifik.",
    "simpleExample": "Contoh sederhana: pakai CONVERT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CONVERT(10;\"m\";\"cm\")",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CONVERT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DEC2BIN": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi DEC2BIN.",
    "simpleLogic": "Masukkan angka dari satu sistem bilangan, lalu Excel ubah ke sistem lain.",
    "useCase": "Dipakai untuk kebutuhan teknik, komputer, biner, oktal, desimal, atau hex.",
    "analogy": "Kayak menerjemahkan angka dari bahasa komputer ke bahasa angka lain.",
    "simpleExample": "Contoh sederhana: pakai DEC2BIN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DEC2BIN(1010)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DEC2BIN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DEC2HEX": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi DEC2HEX.",
    "simpleLogic": "Masukkan angka dari satu sistem bilangan, lalu Excel ubah ke sistem lain.",
    "useCase": "Dipakai untuk kebutuhan teknik, komputer, biner, oktal, desimal, atau hex.",
    "analogy": "Kayak menerjemahkan angka dari bahasa komputer ke bahasa angka lain.",
    "simpleExample": "Contoh sederhana: pakai DEC2HEX saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DEC2HEX(1010)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DEC2HEX. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DEC2OCT": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi DEC2OCT.",
    "simpleLogic": "Masukkan angka dari satu sistem bilangan, lalu Excel ubah ke sistem lain.",
    "useCase": "Dipakai untuk kebutuhan teknik, komputer, biner, oktal, desimal, atau hex.",
    "analogy": "Kayak menerjemahkan angka dari bahasa komputer ke bahasa angka lain.",
    "simpleExample": "Contoh sederhana: pakai DEC2OCT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DEC2OCT(1010)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DEC2OCT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DELTA": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi DELTA.",
    "simpleLogic": "Masukkan angka teknis, satuan, basis bilangan, atau angka kompleks.",
    "useCase": "Dipakai untuk konversi satuan, bilangan biner/hex, angka kompleks, dan fungsi teknik.",
    "analogy": "Kayak toolbox teknik untuk angka yang lebih spesifik.",
    "simpleExample": "Contoh sederhana: pakai DELTA saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DELTA(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DELTA. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ERF": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi ERF.",
    "simpleLogic": "Masukkan angka teknis, satuan, basis bilangan, atau angka kompleks.",
    "useCase": "Dipakai untuk konversi satuan, bilangan biner/hex, angka kompleks, dan fungsi teknik.",
    "analogy": "Kayak toolbox teknik untuk angka yang lebih spesifik.",
    "simpleExample": "Contoh sederhana: pakai ERF saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ERF(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ERF. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ERF.PRECISE": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi ERF.PRECISE.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai ERF.PRECISE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ERF.PRECISE(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ERF.PRECISE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ERFC": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi ERFC.",
    "simpleLogic": "Masukkan angka teknis, satuan, basis bilangan, atau angka kompleks.",
    "useCase": "Dipakai untuk konversi satuan, bilangan biner/hex, angka kompleks, dan fungsi teknik.",
    "analogy": "Kayak toolbox teknik untuk angka yang lebih spesifik.",
    "simpleExample": "Contoh sederhana: pakai ERFC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ERFC(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ERFC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ERFC.PRECISE": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi ERFC.PRECISE.",
    "simpleLogic": "Masukkan angka teknis, satuan, basis bilangan, atau angka kompleks.",
    "useCase": "Dipakai untuk konversi satuan, bilangan biner/hex, angka kompleks, dan fungsi teknik.",
    "analogy": "Kayak toolbox teknik untuk angka yang lebih spesifik.",
    "simpleExample": "Contoh sederhana: pakai ERFC.PRECISE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ERFC.PRECISE(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ERFC.PRECISE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "GESTEP": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi GESTEP.",
    "simpleLogic": "Masukkan angka teknis, satuan, basis bilangan, atau angka kompleks.",
    "useCase": "Dipakai untuk konversi satuan, bilangan biner/hex, angka kompleks, dan fungsi teknik.",
    "analogy": "Kayak toolbox teknik untuk angka yang lebih spesifik.",
    "simpleExample": "Contoh sederhana: pakai GESTEP saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=GESTEP(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan GESTEP. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "HEX2BIN": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi HEX2BIN.",
    "simpleLogic": "Masukkan angka dari satu sistem bilangan, lalu Excel ubah ke sistem lain.",
    "useCase": "Dipakai untuk kebutuhan teknik, komputer, biner, oktal, desimal, atau hex.",
    "analogy": "Kayak menerjemahkan angka dari bahasa komputer ke bahasa angka lain.",
    "simpleExample": "Contoh sederhana: pakai HEX2BIN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=HEX2BIN(1010)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan HEX2BIN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "HEX2DEC": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi HEX2DEC.",
    "simpleLogic": "Masukkan angka dari satu sistem bilangan, lalu Excel ubah ke sistem lain.",
    "useCase": "Dipakai untuk kebutuhan teknik, komputer, biner, oktal, desimal, atau hex.",
    "analogy": "Kayak menerjemahkan angka dari bahasa komputer ke bahasa angka lain.",
    "simpleExample": "Contoh sederhana: pakai HEX2DEC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=HEX2DEC(1010)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan HEX2DEC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "HEX2OCT": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi HEX2OCT.",
    "simpleLogic": "Masukkan angka dari satu sistem bilangan, lalu Excel ubah ke sistem lain.",
    "useCase": "Dipakai untuk kebutuhan teknik, komputer, biner, oktal, desimal, atau hex.",
    "analogy": "Kayak menerjemahkan angka dari bahasa komputer ke bahasa angka lain.",
    "simpleExample": "Contoh sederhana: pakai HEX2OCT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=HEX2OCT(1010)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan HEX2OCT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMABS": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMABS.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMABS saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMABS(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMABS. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMAGINARY": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMAGINARY.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMAGINARY saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMAGINARY(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMAGINARY. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMARGUMENT": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMARGUMENT.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMARGUMENT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMARGUMENT(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMARGUMENT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMCONJUGATE": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMCONJUGATE.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMCONJUGATE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMCONJUGATE(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMCONJUGATE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMCOS": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMCOS.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMCOS saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMCOS(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMCOS. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMCOSH": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMCOSH.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMCOSH saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMCOSH(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMCOSH. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMCOT": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMCOT.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMCOT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMCOT(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMCOT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMCSC": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMCSC.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMCSC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMCSC(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMCSC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMCSCH": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMCSCH.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMCSCH saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMCSCH(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMCSCH. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMDIV": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMDIV.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMDIV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMDIV(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMDIV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMEXP": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMEXP.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMEXP saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMEXP(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMEXP. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMLN": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMLN.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMLN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMLN(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMLN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMLOG10": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMLOG10.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMLOG10 saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMLOG10(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMLOG10. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMLOG2": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMLOG2.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMLOG2 saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMLOG2(1010)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMLOG2. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMPOWER": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMPOWER.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMPOWER saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMPOWER(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMPOWER. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMPRODUCT": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMPRODUCT.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMPRODUCT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMPRODUCT(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMPRODUCT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMREAL": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMREAL.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMREAL saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMREAL(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMREAL. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMSEC": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSEC.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMSEC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMSEC(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMSEC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMSECH": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSECH.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMSECH saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMSECH(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMSECH. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMSIN": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSIN.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMSIN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMSIN(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMSIN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMSINH": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSINH.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMSINH saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMSINH(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMSINH. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMSQRT": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSQRT.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMSQRT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMSQRT(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMSQRT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMSUB": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSUB.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMSUB saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMSUB(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMSUB. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMSUM": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMSUM.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMSUM saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMSUM(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMSUM. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IMTAN": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi IMTAN.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMTAN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMTAN(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMTAN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "OCT2BIN": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi OCT2BIN.",
    "simpleLogic": "Masukkan angka dari satu sistem bilangan, lalu Excel ubah ke sistem lain.",
    "useCase": "Dipakai untuk kebutuhan teknik, komputer, biner, oktal, desimal, atau hex.",
    "analogy": "Kayak menerjemahkan angka dari bahasa komputer ke bahasa angka lain.",
    "simpleExample": "Contoh sederhana: pakai OCT2BIN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=OCT2BIN(1010)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan OCT2BIN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "OCT2DEC": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi OCT2DEC.",
    "simpleLogic": "Masukkan angka dari satu sistem bilangan, lalu Excel ubah ke sistem lain.",
    "useCase": "Dipakai untuk kebutuhan teknik, komputer, biner, oktal, desimal, atau hex.",
    "analogy": "Kayak menerjemahkan angka dari bahasa komputer ke bahasa angka lain.",
    "simpleExample": "Contoh sederhana: pakai OCT2DEC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=OCT2DEC(1010)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan OCT2DEC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "OCT2HEX": {
    "description": "Mengolah kebutuhan teknis atau engineering memakai fungsi OCT2HEX.",
    "simpleLogic": "Masukkan angka dari satu sistem bilangan, lalu Excel ubah ke sistem lain.",
    "useCase": "Dipakai untuk kebutuhan teknik, komputer, biner, oktal, desimal, atau hex.",
    "analogy": "Kayak menerjemahkan angka dari bahasa komputer ke bahasa angka lain.",
    "simpleExample": "Contoh sederhana: pakai OCT2HEX saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=OCT2HEX(1010)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan OCT2HEX. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ACCRINT": {
    "description": "Menghitung kebutuhan finansial memakai fungsi ACCRINT.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai ACCRINT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ACCRINT(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ACCRINT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ACCRINTM": {
    "description": "Menghitung kebutuhan finansial memakai fungsi ACCRINTM.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai ACCRINTM saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ACCRINTM(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ACCRINTM. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "AMORDEGRC": {
    "description": "Menghitung kebutuhan finansial memakai fungsi AMORDEGRC.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai AMORDEGRC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=AMORDEGRC(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan AMORDEGRC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "AMORLINC": {
    "description": "Menghitung kebutuhan finansial memakai fungsi AMORLINC.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai AMORLINC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=AMORLINC(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan AMORLINC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "COUPDAYBS": {
    "description": "Menghitung kebutuhan finansial memakai fungsi COUPDAYBS.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai COUPDAYBS saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=COUPDAYBS(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan COUPDAYBS. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "COUPDAYS": {
    "description": "Menghitung kebutuhan finansial memakai fungsi COUPDAYS.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai COUPDAYS saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=COUPDAYS(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan COUPDAYS. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "COUPDAYSNC": {
    "description": "Menghitung kebutuhan finansial memakai fungsi COUPDAYSNC.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai COUPDAYSNC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=COUPDAYSNC(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan COUPDAYSNC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "COUPNCD": {
    "description": "Menghitung kebutuhan finansial memakai fungsi COUPNCD.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai COUPNCD saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=COUPNCD(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan COUPNCD. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "COUPNUM": {
    "description": "Menghitung kebutuhan finansial memakai fungsi COUPNUM.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai COUPNUM saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=COUPNUM(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan COUPNUM. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "COUPPCD": {
    "description": "Menghitung kebutuhan finansial memakai fungsi COUPPCD.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai COUPPCD saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=COUPPCD(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan COUPPCD. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CUMIPMT": {
    "description": "Menghitung kebutuhan finansial memakai fungsi CUMIPMT.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai CUMIPMT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CUMIPMT(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CUMIPMT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CUMPRINC": {
    "description": "Menghitung kebutuhan finansial memakai fungsi CUMPRINC.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai CUMPRINC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CUMPRINC(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CUMPRINC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DB": {
    "description": "Menghitung kebutuhan finansial memakai fungsi DB.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai DB saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DB(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DB. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DDB": {
    "description": "Menghitung kebutuhan finansial memakai fungsi DDB.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai DDB saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DDB(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DDB. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DISC": {
    "description": "Menghitung kebutuhan finansial memakai fungsi DISC.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai DISC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DISC(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DISC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DOLLARDE": {
    "description": "Menghitung kebutuhan finansial memakai fungsi DOLLARDE.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai DOLLARDE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DOLLARDE(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DOLLARDE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DOLLARFR": {
    "description": "Menghitung kebutuhan finansial memakai fungsi DOLLARFR.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai DOLLARFR saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DOLLARFR(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DOLLARFR. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DURATION": {
    "description": "Menghitung kebutuhan finansial memakai fungsi DURATION.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai DURATION saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DURATION(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DURATION. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "EFFECT": {
    "description": "Menghitung kebutuhan finansial memakai fungsi EFFECT.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai EFFECT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=EFFECT(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan EFFECT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FV": {
    "description": "Menghitung kebutuhan finansial memakai fungsi FV.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai FV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FV(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FVSCHEDULE": {
    "description": "Menghitung kebutuhan finansial memakai fungsi FVSCHEDULE.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai FVSCHEDULE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FVSCHEDULE(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FVSCHEDULE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "INTRATE": {
    "description": "Menghitung kebutuhan finansial memakai fungsi INTRATE.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai INTRATE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=INTRATE(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan INTRATE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IPMT": {
    "description": "Menghitung kebutuhan finansial memakai fungsi IPMT.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai IPMT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IPMT(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IPMT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "IRR": {
    "description": "Menghitung kebutuhan finansial memakai fungsi IRR.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai IRR saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IRR(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IRR. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ISPMT": {
    "description": "Menghitung kebutuhan finansial memakai fungsi ISPMT.",
    "simpleLogic": "Masukkan cell yang ingin dicek, lalu Excel memberi hasil TRUE atau FALSE.",
    "useCase": "Dipakai untuk validasi data sebelum diproses rumus lain.",
    "analogy": "Kayak satpam yang mengecek isi cell sebelum diizinkan lanjut.",
    "simpleExample": "Contoh sederhana: pakai ISPMT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ISPMT(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ISPMT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "MDURATION": {
    "description": "Menghitung kebutuhan finansial memakai fungsi MDURATION.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai MDURATION saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=MDURATION(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan MDURATION. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "MIRR": {
    "description": "Menghitung kebutuhan finansial memakai fungsi MIRR.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai MIRR saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=MIRR(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan MIRR. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "NOMINAL": {
    "description": "Menghitung kebutuhan finansial memakai fungsi NOMINAL.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai NOMINAL saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=NOMINAL(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan NOMINAL. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "NPER": {
    "description": "Menghitung kebutuhan finansial memakai fungsi NPER.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai NPER saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=NPER(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan NPER. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "NPV": {
    "description": "Menghitung kebutuhan finansial memakai fungsi NPV.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai NPV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=NPV(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan NPV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ODDFPRICE": {
    "description": "Menghitung kebutuhan finansial memakai fungsi ODDFPRICE.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai ODDFPRICE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ODDFPRICE(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ODDFPRICE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ODDFYIELD": {
    "description": "Menghitung kebutuhan finansial memakai fungsi ODDFYIELD.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai ODDFYIELD saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ODDFYIELD(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ODDFYIELD. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ODDLPRICE": {
    "description": "Menghitung kebutuhan finansial memakai fungsi ODDLPRICE.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai ODDLPRICE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ODDLPRICE(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ODDLPRICE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ODDLYIELD": {
    "description": "Menghitung kebutuhan finansial memakai fungsi ODDLYIELD.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai ODDLYIELD saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ODDLYIELD(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ODDLYIELD. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PDURATION": {
    "description": "Menghitung kebutuhan finansial memakai fungsi PDURATION.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai PDURATION saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PDURATION(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PDURATION. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PMT": {
    "description": "Menghitung kebutuhan finansial memakai fungsi PMT.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai PMT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PMT(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PMT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PPMT": {
    "description": "Menghitung kebutuhan finansial memakai fungsi PPMT.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai PPMT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PPMT(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PPMT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PRICE": {
    "description": "Menghitung kebutuhan finansial memakai fungsi PRICE.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai PRICE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PRICE(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PRICE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PRICEDISC": {
    "description": "Menghitung kebutuhan finansial memakai fungsi PRICEDISC.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai PRICEDISC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PRICEDISC(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PRICEDISC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PRICEMAT": {
    "description": "Menghitung kebutuhan finansial memakai fungsi PRICEMAT.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai PRICEMAT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PRICEMAT(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PRICEMAT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PV": {
    "description": "Menghitung kebutuhan finansial memakai fungsi PV.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai PV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PV(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "RATE": {
    "description": "Menghitung kebutuhan finansial memakai fungsi RATE.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai RATE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=RATE(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan RATE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "RECEIVED": {
    "description": "Menghitung kebutuhan finansial memakai fungsi RECEIVED.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai RECEIVED saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=RECEIVED(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan RECEIVED. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "RRI": {
    "description": "Menghitung kebutuhan finansial memakai fungsi RRI.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai RRI saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=RRI(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan RRI. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SLN": {
    "description": "Menghitung kebutuhan finansial memakai fungsi SLN.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai SLN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SLN(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SLN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SYD": {
    "description": "Menghitung kebutuhan finansial memakai fungsi SYD.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai SYD saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SYD(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SYD. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "TBILLEQ": {
    "description": "Menghitung kebutuhan finansial memakai fungsi TBILLEQ.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai TBILLEQ saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=TBILLEQ(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan TBILLEQ. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "TBILLPRICE": {
    "description": "Menghitung kebutuhan finansial memakai fungsi TBILLPRICE.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai TBILLPRICE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=TBILLPRICE(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan TBILLPRICE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "TBILLYIELD": {
    "description": "Menghitung kebutuhan finansial memakai fungsi TBILLYIELD.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai TBILLYIELD saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=TBILLYIELD(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan TBILLYIELD. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "VDB": {
    "description": "Menghitung kebutuhan finansial memakai fungsi VDB.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai VDB saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=VDB(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan VDB. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "XIRR": {
    "description": "Menghitung kebutuhan finansial memakai fungsi XIRR.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai XIRR saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=XIRR(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan XIRR. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "XNPV": {
    "description": "Menghitung kebutuhan finansial memakai fungsi XNPV.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai XNPV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=XNPV(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan XNPV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "YIELD": {
    "description": "Menghitung kebutuhan finansial memakai fungsi YIELD.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai YIELD saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=YIELD(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan YIELD. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "YIELDDISC": {
    "description": "Menghitung kebutuhan finansial memakai fungsi YIELDDISC.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai YIELDDISC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=YIELDDISC(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan YIELDDISC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "YIELDMAT": {
    "description": "Menghitung kebutuhan finansial memakai fungsi YIELDMAT.",
    "simpleLogic": "Masukkan angka keuangan yang diminta, lalu Excel menghitung nilai finansialnya.",
    "useCase": "Dipakai untuk simulasi pinjaman, investasi, bunga, dan cashflow.",
    "analogy": "Kayak kalkulator keuangan yang menghitung uang hari ini, uang nanti, atau cicilan.",
    "simpleExample": "Contoh sederhana: pakai YIELDMAT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=YIELDMAT(10%/12;12;-100000)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan YIELDMAT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CELL": {
    "description": "Mengambil informasi tentang cell.",
    "simpleLogic": "Excel menampilkan info seperti alamat, format, atau tipe file.",
    "useCase": "Saat butuh metadata cell.",
    "analogy": "Kayak melihat KTP sebuah cell.",
    "simpleExample": "Tampilkan alamat cell A2.",
    "exampleFormula": "=CELL(\"address\";A2)",
    "exampleMeaning": "Tampilkan alamat cell A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "ERROR.TYPE": {
    "description": "Mengecek informasi cell, error, atau tipe data memakai ERROR.TYPE.",
    "simpleLogic": "Excel memeriksa isi cell lalu memberi jawaban seperti TRUE/FALSE atau kode informasi.",
    "useCase": "Dipakai untuk audit data, cek error, cek kosong, dan validasi tipe data.",
    "analogy": "Kayak sensor yang mengecek isi cell sebelum diproses.",
    "simpleExample": "Contoh sederhana: pakai ERROR.TYPE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ERROR.TYPE(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ERROR.TYPE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "INFO": {
    "description": "Mengecek informasi cell, error, atau tipe data memakai INFO.",
    "simpleLogic": "Excel memeriksa isi cell lalu memberi jawaban seperti TRUE/FALSE atau kode informasi.",
    "useCase": "Dipakai untuk audit data, cek error, cek kosong, dan validasi tipe data.",
    "analogy": "Kayak sensor yang mengecek isi cell sebelum diproses.",
    "simpleExample": "Contoh sederhana: pakai INFO saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=INFO(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan INFO. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ISBLANK": {
    "description": "Mengecek apakah cell kosong.",
    "simpleLogic": "Hasil TRUE jika cell kosong.",
    "useCase": "Saat ingin menandai data yang belum diisi.",
    "analogy": "Kayak cek apakah kotak masih kosong.",
    "simpleExample": "TRUE jika A2 kosong.",
    "exampleFormula": "=ISBLANK(A2)",
    "exampleMeaning": "TRUE jika A2 kosong.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "ISERR": {
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISERR.",
    "simpleLogic": "Masukkan cell yang ingin dicek, lalu Excel memberi hasil TRUE atau FALSE.",
    "useCase": "Dipakai untuk validasi data sebelum diproses rumus lain.",
    "analogy": "Kayak satpam yang mengecek isi cell sebelum diizinkan lanjut.",
    "simpleExample": "Contoh sederhana: pakai ISERR saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ISERR(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ISERR. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ISERROR": {
    "description": "Mengecek apakah hasilnya error.",
    "simpleLogic": "Hasil TRUE untuk error apa pun.",
    "useCase": "Saat ingin mendeteksi formula bermasalah.",
    "analogy": "Kayak lampu indikator kalau mesin rumus error.",
    "simpleExample": "TRUE jika A2 berisi error.",
    "exampleFormula": "=ISERROR(A2)",
    "exampleMeaning": "TRUE jika A2 berisi error.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "ISEVEN": {
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISEVEN.",
    "simpleLogic": "Masukkan cell yang ingin dicek, lalu Excel memberi hasil TRUE atau FALSE.",
    "useCase": "Dipakai untuk validasi data sebelum diproses rumus lain.",
    "analogy": "Kayak satpam yang mengecek isi cell sebelum diizinkan lanjut.",
    "simpleExample": "Contoh sederhana: pakai ISEVEN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ISEVEN(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ISEVEN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ISFORMULA": {
    "description": "Mengecek apakah cell berisi formula.",
    "simpleLogic": "Hasil TRUE jika cell punya rumus.",
    "useCase": "Saat audit sheet dan ingin tahu mana hasil formula.",
    "analogy": "Kayak cek apakah cell ini hasil ketikan biasa atau mesin rumus.",
    "simpleExample": "TRUE jika A2 berisi formula.",
    "exampleFormula": "=ISFORMULA(A2)",
    "exampleMeaning": "TRUE jika A2 berisi formula.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "ISLOGICAL": {
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISLOGICAL.",
    "simpleLogic": "Masukkan cell yang ingin dicek, lalu Excel memberi hasil TRUE atau FALSE.",
    "useCase": "Dipakai untuk validasi data sebelum diproses rumus lain.",
    "analogy": "Kayak satpam yang mengecek isi cell sebelum diizinkan lanjut.",
    "simpleExample": "Contoh sederhana: pakai ISLOGICAL saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ISLOGICAL(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ISLOGICAL. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ISNA": {
    "description": "Mengecek apakah error-nya #N/A.",
    "simpleLogic": "Hasil TRUE hanya untuk #N/A.",
    "useCase": "Saat lookup tidak menemukan data.",
    "analogy": "Kayak detektor khusus “data tidak ditemukan”.",
    "simpleExample": "TRUE jika A2 berisi #N/A.",
    "exampleFormula": "=ISNA(A2)",
    "exampleMeaning": "TRUE jika A2 berisi #N/A.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "ISNONTEXT": {
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISNONTEXT.",
    "simpleLogic": "Masukkan cell yang ingin dicek, lalu Excel memberi hasil TRUE atau FALSE.",
    "useCase": "Dipakai untuk validasi data sebelum diproses rumus lain.",
    "analogy": "Kayak satpam yang mengecek isi cell sebelum diizinkan lanjut.",
    "simpleExample": "Contoh sederhana: pakai ISNONTEXT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ISNONTEXT(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ISNONTEXT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ISNUMBER": {
    "description": "Mengecek apakah isi cell berupa angka.",
    "simpleLogic": "Hasil TRUE jika value adalah number.",
    "useCase": "Saat validasi data angka.",
    "analogy": "Kayak satpam yang cuma mengizinkan angka masuk.",
    "simpleExample": "TRUE jika A2 adalah angka.",
    "exampleFormula": "=ISNUMBER(A2)",
    "exampleMeaning": "TRUE jika A2 adalah angka.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "ISODD": {
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISODD.",
    "simpleLogic": "Masukkan cell yang ingin dicek, lalu Excel memberi hasil TRUE atau FALSE.",
    "useCase": "Dipakai untuk validasi data sebelum diproses rumus lain.",
    "analogy": "Kayak satpam yang mengecek isi cell sebelum diizinkan lanjut.",
    "simpleExample": "Contoh sederhana: pakai ISODD saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ISODD(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ISODD. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ISOMITTED": {
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISOMITTED.",
    "simpleLogic": "Masukkan cell yang ingin dicek, lalu Excel memberi hasil TRUE atau FALSE.",
    "useCase": "Dipakai untuk validasi data sebelum diproses rumus lain.",
    "analogy": "Kayak satpam yang mengecek isi cell sebelum diizinkan lanjut.",
    "simpleExample": "Contoh sederhana: pakai ISOMITTED saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ISOMITTED(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ISOMITTED. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ISREF": {
    "description": "Mengecek informasi cell, error, atau tipe data memakai ISREF.",
    "simpleLogic": "Masukkan cell yang ingin dicek, lalu Excel memberi hasil TRUE atau FALSE.",
    "useCase": "Dipakai untuk validasi data sebelum diproses rumus lain.",
    "analogy": "Kayak satpam yang mengecek isi cell sebelum diizinkan lanjut.",
    "simpleExample": "Contoh sederhana: pakai ISREF saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ISREF(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ISREF. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ISTEXT": {
    "description": "Mengecek apakah isi cell berupa teks.",
    "simpleLogic": "Hasil TRUE jika value adalah text.",
    "useCase": "Saat validasi nama/kode teks.",
    "analogy": "Kayak cek apakah isi kotak berupa tulisan.",
    "simpleExample": "TRUE jika A2 adalah teks.",
    "exampleFormula": "=ISTEXT(A2)",
    "exampleMeaning": "TRUE jika A2 adalah teks.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "N": {
    "description": "Mengubah value menjadi angka jika memungkinkan.",
    "simpleLogic": "Angka tetap angka, TRUE jadi 1, teks jadi 0.",
    "useCase": "Saat butuh konversi ringan dalam rumus.",
    "analogy": "Kayak memaksa data masuk ke jalur angka.",
    "simpleExample": "Konversi A2 menjadi angka sesuai aturan N.",
    "exampleFormula": "=N(A2)",
    "exampleMeaning": "Konversi A2 menjadi angka sesuai aturan N.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "NA": {
    "description": "Mengecek informasi cell, error, atau tipe data memakai NA.",
    "simpleLogic": "Excel memeriksa isi cell lalu memberi jawaban seperti TRUE/FALSE atau kode informasi.",
    "useCase": "Dipakai untuk audit data, cek error, cek kosong, dan validasi tipe data.",
    "analogy": "Kayak sensor yang mengecek isi cell sebelum diproses.",
    "simpleExample": "Contoh sederhana: pakai NA saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=NA(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan NA. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SHEET": {
    "description": "Mengecek informasi cell, error, atau tipe data memakai SHEET.",
    "simpleLogic": "Excel memeriksa isi cell lalu memberi jawaban seperti TRUE/FALSE atau kode informasi.",
    "useCase": "Dipakai untuk audit data, cek error, cek kosong, dan validasi tipe data.",
    "analogy": "Kayak sensor yang mengecek isi cell sebelum diproses.",
    "simpleExample": "Contoh sederhana: pakai SHEET saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SHEET(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SHEET. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SHEETS": {
    "description": "Mengecek informasi cell, error, atau tipe data memakai SHEETS.",
    "simpleLogic": "Excel memeriksa isi cell lalu memberi jawaban seperti TRUE/FALSE atau kode informasi.",
    "useCase": "Dipakai untuk audit data, cek error, cek kosong, dan validasi tipe data.",
    "analogy": "Kayak sensor yang mengecek isi cell sebelum diproses.",
    "simpleExample": "Contoh sederhana: pakai SHEETS saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SHEETS(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SHEETS. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "TYPE": {
    "description": "Mengembalikan kode jenis data.",
    "simpleLogic": "Excel memberi angka kode untuk tipe value.",
    "useCase": "Saat butuh validasi tipe data lebih teknis.",
    "analogy": "Kayak memberi label kategori untuk isi cell.",
    "simpleExample": "Tampilkan kode tipe data A2.",
    "exampleFormula": "=TYPE(A2)",
    "exampleMeaning": "Tampilkan kode tipe data A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "AND": {
    "description": "Mengecek apakah semua kondisi benar.",
    "simpleLogic": "Hasil TRUE hanya muncul kalau semua syarat terpenuhi.",
    "useCase": "Saat ingin cek nilai lulus dan kehadiran cukup.",
    "analogy": "Kayak masuk bioskop: punya tiket dan datang tepat waktu, dua-duanya harus iya.",
    "simpleExample": "TRUE jika nilai minimal 75 dan kehadiran minimal 80%.",
    "exampleFormula": "=AND(D2>=75;E2>=80%)",
    "exampleMeaning": "TRUE jika nilai minimal 75 dan kehadiran minimal 80%.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "FALSE": {
    "description": "Menghasilkan nilai logika FALSE.",
    "simpleLogic": "Dipakai saat kamu butuh nilai salah secara eksplisit.",
    "useCase": "Kadang dipakai untuk exact match di VLOOKUP.",
    "analogy": "Kayak bilang “jangan pakai perkiraan”.",
    "simpleExample": "Menghasilkan FALSE.",
    "exampleFormula": "=FALSE()",
    "exampleMeaning": "Menghasilkan FALSE.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "IF": {
    "description": "Membuat keputusan jika kondisi benar atau salah.",
    "simpleLogic": "Tentukan kondisi. Kalau benar, tampilkan hasil A. Kalau salah, tampilkan hasil B.",
    "useCase": "Saat ingin membuat status Lulus/Tidak Lulus, Bonus/Tidak Bonus.",
    "analogy": "Kayak aturan sederhana: jika nilai minimal 75 maka Lulus, kalau tidak maka Tidak Lulus.",
    "simpleExample": "Jika D2 minimal 75 tampilkan Lulus, selain itu Tidak Lulus.",
    "exampleFormula": "=IF(D2>=75;\"Lulus\";\"Tidak Lulus\")",
    "exampleMeaning": "Jika D2 minimal 75 tampilkan Lulus, selain itu Tidak Lulus.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "IFERROR": {
    "description": "Mengganti error dengan teks atau nilai lain.",
    "simpleLogic": "Excel coba jalankan rumus. Kalau error, tampilkan cadangan yang kamu siapkan.",
    "useCase": "Saat ingin mengganti #N/A atau #DIV/0! dengan pesan yang lebih rapi.",
    "analogy": "Kayak punya plan B kalau rencana utama gagal.",
    "simpleExample": "Jika VLOOKUP error, tampilkan Tidak ditemukan.",
    "exampleFormula": "=IFERROR(VLOOKUP(A2;E2:F8;2;0);\"Tidak ditemukan\")",
    "exampleMeaning": "Jika VLOOKUP error, tampilkan Tidak ditemukan.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "IFNA": {
    "description": "Mengganti error #N/A saja.",
    "simpleLogic": "Kalau hasil rumus #N/A, tampilkan nilai cadangan. Error lain tetap muncul.",
    "useCase": "Saat lookup tidak menemukan data dan ingin pesan yang lebih jelas.",
    "analogy": "Kayak khusus menangani “barang tidak ketemu”, bukan semua jenis masalah.",
    "simpleExample": "Jika XLOOKUP tidak menemukan data, tampilkan Tidak ada.",
    "exampleFormula": "=IFNA(XLOOKUP(A2;E2:E8;F2:F8);\"Tidak ada\")",
    "exampleMeaning": "Jika XLOOKUP tidak menemukan data, tampilkan Tidak ada.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "IFS": {
    "description": "Membuat banyak keputusan bertingkat.",
    "simpleLogic": "Excel mengecek kondisi dari atas ke bawah, lalu mengambil hasil dari kondisi pertama yang cocok.",
    "useCase": "Saat ingin membuat grade A/B/C/D dari nilai.",
    "analogy": "Kayak penjaga gerbang yang mengecek beberapa aturan satu per satu.",
    "simpleExample": "Tentukan grade berdasarkan rentang nilai.",
    "exampleFormula": "=IFS(D2>=90;\"A\";D2>=75;\"B\";D2>=60;\"C\";TRUE;\"D\")",
    "exampleMeaning": "Tentukan grade berdasarkan rentang nilai.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "NOT": {
    "description": "Membalik hasil TRUE/FALSE.",
    "simpleLogic": "Kalau hasil awal TRUE, NOT membuatnya FALSE. Kalau awal FALSE, jadi TRUE.",
    "useCase": "Saat ingin mengecek kebalikan dari sebuah kondisi.",
    "analogy": "Kayak tombol pembalik: iya jadi tidak, tidak jadi iya.",
    "simpleExample": "TRUE jika A2 bukan Lunas.",
    "exampleFormula": "=NOT(A2=\"Lunas\")",
    "exampleMeaning": "TRUE jika A2 bukan Lunas.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "OR": {
    "description": "Mengecek apakah salah satu kondisi benar.",
    "simpleLogic": "Hasil TRUE muncul jika minimal satu syarat terpenuhi.",
    "useCase": "Saat ingin memberi akses kalau user punya email atau nomor HP.",
    "analogy": "Kayak bisa masuk lewat pintu depan atau pintu samping, cukup salah satu.",
    "simpleExample": "TRUE jika nilai cukup atau pembayaran lunas.",
    "exampleFormula": "=OR(D2>=75;E2=\"Lunas\")",
    "exampleMeaning": "TRUE jika nilai cukup atau pembayaran lunas.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "SWITCH": {
    "description": "Mengganti satu nilai menjadi hasil tertentu.",
    "simpleLogic": "Excel mencocokkan satu nilai dengan daftar pilihan, lalu mengambil hasil yang sesuai.",
    "useCase": "Saat ingin mengubah kode status menjadi nama status.",
    "analogy": "Kayak menu restoran: pilih kode A, keluarnya paket ayam.",
    "simpleExample": "Ubah kode P/S menjadi teks status.",
    "exampleFormula": "=SWITCH(A2;\"P\";\"Pending\";\"S\";\"Selesai\";\"Tidak dikenal\")",
    "exampleMeaning": "Ubah kode P/S menjadi teks status.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "TRUE": {
    "description": "Menghasilkan nilai logika TRUE.",
    "simpleLogic": "Dipakai saat kamu butuh nilai benar secara eksplisit.",
    "useCase": "Sering dipakai sebagai kondisi default dalam IFS.",
    "analogy": "Kayak bilang “anggap ini benar” supaya aturan terakhir selalu jalan.",
    "simpleExample": "Menghasilkan TRUE.",
    "exampleFormula": "=TRUE()",
    "exampleMeaning": "Menghasilkan TRUE.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "XOR": {
    "description": "Membantu membuat logika keputusan menggunakan fungsi XOR.",
    "simpleLogic": "Tentukan kondisi, lalu Excel memilih hasil sesuai benar atau salah.",
    "useCase": "Dipakai untuk status lulus, validasi, bonus, dan aturan otomatis.",
    "analogy": "Kayak aturan “jika begini maka begitu”.",
    "simpleExample": "Contoh sederhana: pakai XOR saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=XOR(A2>0)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan XOR. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ADDRESS": {
    "description": "Membuat alamat cell dari nomor baris dan kolom.",
    "simpleLogic": "Kamu beri nomor baris dan kolom, Excel membuat referensi cell.",
    "useCase": "Saat butuh referensi cell dinamis.",
    "analogy": "Kayak mengubah koordinat menjadi alamat rumah.",
    "simpleExample": "Hasilnya alamat cell baris 2 kolom 3.",
    "exampleFormula": "=ADDRESS(2;3)",
    "exampleMeaning": "Hasilnya alamat cell baris 2 kolom 3.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "AREAS": {
    "description": "Mencari, mengambil, atau membuat referensi data memakai AREAS.",
    "simpleLogic": "Tentukan nilai yang dicari atau posisi data, lalu Excel mengambil hasil dari tabel.",
    "useCase": "Dipakai untuk master produk, harga, kategori, alamat cell, dan tabel referensi.",
    "analogy": "Kayak petugas arsip yang mencari kode lalu mengambil informasi pasangannya.",
    "simpleExample": "Contoh sederhana: pakai AREAS saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=AREAS(A2:E10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan AREAS. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CHOOSE": {
    "description": "Memilih nilai berdasarkan nomor pilihan.",
    "simpleLogic": "Kamu kasih nomor, Excel mengambil item ke-n dari daftar pilihan.",
    "useCase": "Saat ingin memilih skenario 1, 2, atau 3.",
    "analogy": "Kayak pilih menu nomor 2, lalu keluar menu kedua.",
    "simpleExample": "Karena pilih 2, hasilnya Pro.",
    "exampleFormula": "=CHOOSE(2;\"Basic\";\"Pro\";\"Premium\")",
    "exampleMeaning": "Karena pilih 2, hasilnya Pro.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "COLUMN": {
    "description": "Mengambil nomor kolom.",
    "simpleLogic": "Excel mengembalikan posisi kolom dari cell.",
    "useCase": "Saat butuh nomor kolom dalam formula dinamis.",
    "analogy": "Kayak membaca nomor lajur kolom.",
    "simpleExample": "Hasilnya nomor kolom C.",
    "exampleFormula": "=COLUMN(C2)",
    "exampleMeaning": "Hasilnya nomor kolom C.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "COLUMNS": {
    "description": "Menghitung jumlah kolom dalam range.",
    "simpleLogic": "Excel menghitung lebar range.",
    "useCase": "Saat ingin tahu berapa kolom dalam pilihan.",
    "analogy": "Kayak mengukur lebar tabel dari jumlah kolom.",
    "simpleExample": "Hitung jumlah kolom di A2:E16.",
    "exampleFormula": "=COLUMNS(A2:E16)",
    "exampleMeaning": "Hitung jumlah kolom di A2:E16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "FORMULATEXT": {
    "description": "Menampilkan isi formula sebagai teks.",
    "simpleLogic": "Excel menampilkan rumus yang ada di cell.",
    "useCase": "Saat ingin audit atau belajar formula.",
    "analogy": "Kayak membuka isi mesin rumus tanpa menjalankannya.",
    "simpleExample": "Tampilkan formula yang ada di A2.",
    "exampleFormula": "=FORMULATEXT(A2)",
    "exampleMeaning": "Tampilkan formula yang ada di A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "GETPIVOTDATA": {
    "description": "Mencari, mengambil, atau membuat referensi data memakai GETPIVOTDATA.",
    "simpleLogic": "Tentukan nilai yang dicari atau posisi data, lalu Excel mengambil hasil dari tabel.",
    "useCase": "Dipakai untuk master produk, harga, kategori, alamat cell, dan tabel referensi.",
    "analogy": "Kayak petugas arsip yang mencari kode lalu mengambil informasi pasangannya.",
    "simpleExample": "Contoh sederhana: pakai GETPIVOTDATA saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=GETPIVOTDATA(A2:E10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan GETPIVOTDATA. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "HLOOKUP": {
    "description": "Mencari data secara horizontal dari tabel.",
    "simpleLogic": "Cari value di baris pertama, lalu ambil hasil dari baris ke-n.",
    "useCase": "Saat tabel master disusun melebar ke samping.",
    "analogy": "Kayak mencari judul di baris atas, lalu turun ke baris data yang diminta.",
    "simpleExample": "Cari A2 di baris pertama table, lalu ambil baris ke-3.",
    "exampleFormula": "=HLOOKUP(A2;E1:I4;3;0)",
    "exampleMeaning": "Cari A2 di baris pertama table, lalu ambil baris ke-3.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "HYPERLINK": {
    "description": "Membuat link yang bisa diklik.",
    "simpleLogic": "Kamu beri URL dan teks tampilan.",
    "useCase": "Saat ingin membuat link dokumen, website, atau email.",
    "analogy": "Kayak membuat tombol jalan pintas ke alamat web.",
    "simpleExample": "Tampilkan teks Buka yang mengarah ke website.",
    "exampleFormula": "=HYPERLINK(\"https://example.com\";\"Buka\")",
    "exampleMeaning": "Tampilkan teks Buka yang mengarah ke website.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "IMAGE": {
    "description": "Mencari, mengambil, atau membuat referensi data memakai IMAGE.",
    "simpleLogic": "Masukkan angka kompleks, lalu Excel menghitung bagian real, imajiner, atau operasi kompleksnya.",
    "useCase": "Dipakai untuk kebutuhan teknik, matematika, dan sinyal.",
    "analogy": "Kayak kalkulator khusus untuk angka yang punya bagian nyata dan imajiner.",
    "simpleExample": "Contoh sederhana: pakai IMAGE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=IMAGE(A2:E10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan IMAGE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "INDEX": {
    "description": "Mengambil isi cell berdasarkan posisi baris dan kolom.",
    "simpleLogic": "Kamu kasih range, nomor baris, dan nomor kolom, lalu Excel ambil titik temu.",
    "useCase": "Saat ingin ambil data berdasarkan posisi tertentu.",
    "analogy": "Kayak main battleship: tentukan baris dan kolom, lalu ambil isi kotaknya.",
    "simpleExample": "Ambil isi baris ke-2 kolom ke-2 dari E2:I8.",
    "exampleFormula": "=INDEX(E2:I8;2;2)",
    "exampleMeaning": "Ambil isi baris ke-2 kolom ke-2 dari E2:I8.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "INDEX MATCH": {
    "description": "Mengambil data dengan gabungan posisi baris dan kolom.",
    "simpleLogic": "Tentukan nilai yang dicari atau posisi data, lalu Excel mengambil hasil dari tabel.",
    "useCase": "Dipakai untuk master produk, harga, kategori, alamat cell, dan tabel referensi.",
    "analogy": "Kayak petugas arsip yang mencari kode lalu mengambil informasi pasangannya.",
    "simpleExample": "Contoh sederhana: pakai INDEX MATCH saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=INDEX MATCH(A2:E10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan INDEX MATCH. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "INDIRECT": {
    "description": "Mengubah teks alamat menjadi referensi cell.",
    "simpleLogic": "Teks seperti \"A2\" bisa dibaca sebagai cell A2.",
    "useCase": "Saat nama sheet/range dibuat dinamis.",
    "analogy": "Kayak mengubah tulisan alamat menjadi lokasi nyata.",
    "simpleExample": "Ambil nilai dari cell A2.",
    "exampleFormula": "=INDIRECT(\"A2\")",
    "exampleMeaning": "Ambil nilai dari cell A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "LOOKUP": {
    "description": "Mencari nilai dan mengambil pasangan hasilnya.",
    "simpleLogic": "Excel mencari value dalam satu range lalu mengambil hasil yang sebaris atau seposisi.",
    "useCase": "Saat data sudah tersusun dan butuh pencarian sederhana.",
    "analogy": "Kayak kamus kecil: cari kata, ambil artinya.",
    "simpleExample": "Cari A2 di E2:E8 lalu ambil pasangan dari F2:F8.",
    "exampleFormula": "=LOOKUP(A2;E2:E8;F2:F8)",
    "exampleMeaning": "Cari A2 di E2:E8 lalu ambil pasangan dari F2:F8.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "MATCH": {
    "description": "Mencari posisi sebuah nilai dalam range.",
    "simpleLogic": "Hasilnya nomor posisi, bukan isi datanya.",
    "useCase": "Sering digabung dengan INDEX untuk lookup fleksibel.",
    "analogy": "Kayak mencari nomor antrean seseorang di daftar.",
    "simpleExample": "Cari posisi A2 dalam E2:E8 dengan exact match.",
    "exampleFormula": "=MATCH(A2;E2:E8;0)",
    "exampleMeaning": "Cari posisi A2 dalam E2:E8 dengan exact match.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "OFFSET": {
    "description": "Menggeser referensi dari titik awal.",
    "simpleLogic": "Mulai dari satu cell, lalu geser baris/kolom untuk mengambil range baru.",
    "useCase": "Saat membuat range dinamis.",
    "analogy": "Kayak berdiri di A1 lalu jalan 2 langkah turun dan 1 kanan.",
    "simpleExample": "Ambil cell satu baris di bawah A1.",
    "exampleFormula": "=OFFSET(A1;1;0)",
    "exampleMeaning": "Ambil cell satu baris di bawah A1.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "ROW": {
    "description": "Mengambil nomor baris.",
    "simpleLogic": "Excel mengembalikan posisi baris dari cell.",
    "useCase": "Saat butuh nomor urut otomatis berdasarkan baris.",
    "analogy": "Kayak membaca nomor kursi baris.",
    "simpleExample": "Hasilnya nomor baris A2.",
    "exampleFormula": "=ROW(A2)",
    "exampleMeaning": "Hasilnya nomor baris A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "ROWS": {
    "description": "Menghitung jumlah baris dalam range.",
    "simpleLogic": "Excel menghitung tinggi range.",
    "useCase": "Saat ingin tahu berapa baris data dalam pilihan.",
    "analogy": "Kayak mengukur tinggi tabel dari jumlah baris.",
    "simpleExample": "Hitung jumlah baris di A2:E16.",
    "exampleFormula": "=ROWS(A2:E16)",
    "exampleMeaning": "Hitung jumlah baris di A2:E16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "RTD": {
    "description": "Mencari, mengambil, atau membuat referensi data memakai RTD.",
    "simpleLogic": "Tentukan nilai yang dicari atau posisi data, lalu Excel mengambil hasil dari tabel.",
    "useCase": "Dipakai untuk master produk, harga, kategori, alamat cell, dan tabel referensi.",
    "analogy": "Kayak petugas arsip yang mencari kode lalu mengambil informasi pasangannya.",
    "simpleExample": "Contoh sederhana: pakai RTD saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=RTD(A2:E10)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan RTD. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "VLOOKUP": {
    "description": "Mencari data secara vertikal dari tabel.",
    "simpleLogic": "Cari value di kolom pertama table array, lalu ambil hasil dari kolom ke-n.",
    "useCase": "Saat ingin mengambil nama produk dari kode produk.",
    "analogy": "Kayak cari kode barang di rak paling kiri, lalu ambil nama barang di kolom sebelahnya.",
    "simpleExample": "Cari A2 di E2:E8, lalu ambil kolom ke-2 dari tabel E2:I8.",
    "exampleFormula": "=VLOOKUP(A2;E2:I8;2;0)",
    "exampleMeaning": "Cari A2 di E2:E8, lalu ambil kolom ke-2 dari tabel E2:I8.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "ABS": {
    "description": "Mengubah angka menjadi nilai positif.",
    "simpleLogic": "Excel mengambil jarak angka dari nol, tanpa tanda minus.",
    "useCase": "Saat selisih minus/plus ingin dibaca sebagai jarak.",
    "analogy": "Kayak melihat utang atau lebih bayar sebagai jumlah nominal saja.",
    "simpleExample": "Ubah nilai A2 menjadi positif.",
    "exampleFormula": "=ABS(A2)",
    "exampleMeaning": "Ubah nilai A2 menjadi positif.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "ACOS": {
    "description": "Melakukan perhitungan matematika memakai fungsi ACOS.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai ACOS saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ACOS(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ACOS. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ACOSH": {
    "description": "Melakukan perhitungan matematika memakai fungsi ACOSH.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai ACOSH saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ACOSH(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ACOSH. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ACOT": {
    "description": "Melakukan perhitungan matematika memakai fungsi ACOT.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai ACOT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ACOT(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ACOT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ACOTH": {
    "description": "Melakukan perhitungan matematika memakai fungsi ACOTH.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai ACOTH saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ACOTH(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ACOTH. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "AGGREGATE": {
    "description": "Menghitung data dengan opsi mengabaikan error/hidden row.",
    "simpleLogic": "Kamu pilih jenis hitungan dan opsi apa yang diabaikan.",
    "useCase": "Saat perlu total/rata-rata tapi ada error atau baris hidden.",
    "analogy": "Kayak kalkulator yang bisa disuruh abaikan data bermasalah.",
    "simpleExample": "Jumlahkan E2:E16 sambil mengabaikan error.",
    "exampleFormula": "=AGGREGATE(9;6;E2:E16)",
    "exampleMeaning": "Jumlahkan E2:E16 sambil mengabaikan error.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "ARABIC": {
    "description": "Melakukan perhitungan matematika memakai fungsi ARABIC.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai ARABIC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ARABIC(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ARABIC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ASIN": {
    "description": "Melakukan perhitungan matematika memakai fungsi ASIN.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai ASIN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ASIN(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ASIN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ASINH": {
    "description": "Melakukan perhitungan matematika memakai fungsi ASINH.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai ASINH saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ASINH(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ASINH. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ATAN": {
    "description": "Melakukan perhitungan matematika memakai fungsi ATAN.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai ATAN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ATAN(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ATAN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ATAN2": {
    "description": "Melakukan perhitungan matematika memakai fungsi ATAN2.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai ATAN2 saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ATAN2(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ATAN2. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ATANH": {
    "description": "Melakukan perhitungan matematika memakai fungsi ATANH.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai ATANH saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ATANH(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ATANH. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BASE": {
    "description": "Melakukan perhitungan matematika memakai fungsi BASE.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai BASE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BASE(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BASE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CEILING": {
    "description": "Membulatkan angka ke atas ke kelipatan tertentu.",
    "simpleLogic": "Excel naik ke kelipatan terdekat.",
    "useCase": "Saat qty harus dibulatkan ke pack size.",
    "analogy": "Kayak barang harus dibeli per dus isi 12.",
    "simpleExample": "Bulatkan A2 ke kelipatan 12 ke atas.",
    "exampleFormula": "=CEILING(A2;12)",
    "exampleMeaning": "Bulatkan A2 ke kelipatan 12 ke atas.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "CEILING.MATH": {
    "description": "Melakukan perhitungan matematika memakai fungsi CEILING.MATH.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai CEILING.MATH saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CEILING.MATH(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CEILING.MATH. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CEILING.PRECISE": {
    "description": "Melakukan perhitungan matematika memakai fungsi CEILING.PRECISE.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai CEILING.PRECISE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CEILING.PRECISE(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CEILING.PRECISE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "COMBIN": {
    "description": "Melakukan perhitungan matematika memakai fungsi COMBIN.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai COMBIN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=COMBIN(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan COMBIN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "COMBINA": {
    "description": "Melakukan perhitungan matematika memakai fungsi COMBINA.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai COMBINA saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=COMBINA(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan COMBINA. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "COS": {
    "description": "Melakukan perhitungan matematika memakai fungsi COS.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai COS saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=COS(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan COS. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "COSH": {
    "description": "Melakukan perhitungan matematika memakai fungsi COSH.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai COSH saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=COSH(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan COSH. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "COT": {
    "description": "Melakukan perhitungan matematika memakai fungsi COT.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai COT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=COT(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan COT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "COTH": {
    "description": "Melakukan perhitungan matematika memakai fungsi COTH.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai COTH saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=COTH(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan COTH. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CSC": {
    "description": "Melakukan perhitungan matematika memakai fungsi CSC.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai CSC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CSC(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CSC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CSCH": {
    "description": "Melakukan perhitungan matematika memakai fungsi CSCH.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai CSCH saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CSCH(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CSCH. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DECIMAL": {
    "description": "Melakukan perhitungan matematika memakai fungsi DECIMAL.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai DECIMAL saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DECIMAL(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DECIMAL. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DEGREES": {
    "description": "Melakukan perhitungan matematika memakai fungsi DEGREES.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai DEGREES saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DEGREES(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DEGREES. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "EVEN": {
    "description": "Melakukan perhitungan matematika memakai fungsi EVEN.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai EVEN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=EVEN(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan EVEN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "EXP": {
    "description": "Melakukan perhitungan matematika memakai fungsi EXP.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai EXP saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=EXP(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan EXP. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FACT": {
    "description": "Melakukan perhitungan matematika memakai fungsi FACT.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai FACT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FACT(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FACT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FACTDOUBLE": {
    "description": "Melakukan perhitungan matematika memakai fungsi FACTDOUBLE.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai FACTDOUBLE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FACTDOUBLE(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FACTDOUBLE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FLOOR": {
    "description": "Membulatkan angka ke bawah ke kelipatan tertentu.",
    "simpleLogic": "Excel turun ke kelipatan terdekat.",
    "useCase": "Saat ingin hitung paket penuh saja.",
    "analogy": "Kayak hanya menghitung dus yang benar-benar penuh.",
    "simpleExample": "Bulatkan A2 ke kelipatan 12 ke bawah.",
    "exampleFormula": "=FLOOR(A2;12)",
    "exampleMeaning": "Bulatkan A2 ke kelipatan 12 ke bawah.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "FLOOR.MATH": {
    "description": "Melakukan perhitungan matematika memakai fungsi FLOOR.MATH.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai FLOOR.MATH saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FLOOR.MATH(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FLOOR.MATH. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FLOOR.PRECISE": {
    "description": "Melakukan perhitungan matematika memakai fungsi FLOOR.PRECISE.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai FLOOR.PRECISE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FLOOR.PRECISE(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FLOOR.PRECISE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "GCD": {
    "description": "Melakukan perhitungan matematika memakai fungsi GCD.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai GCD saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=GCD(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan GCD. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "INT": {
    "description": "Membulatkan angka ke bawah ke bilangan bulat.",
    "simpleLogic": "Excel mengambil bilangan bulat terdekat ke bawah.",
    "useCase": "Saat ingin mengambil bagian hari/jumlah utuh.",
    "analogy": "Kayak lantai gedung: 4,9 tetap dianggap lantai 4 sebelum naik.",
    "simpleExample": "Ambil bilangan bulat bawah dari A2.",
    "exampleFormula": "=INT(A2)",
    "exampleMeaning": "Ambil bilangan bulat bawah dari A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "ISO.CEILING": {
    "description": "Melakukan perhitungan matematika memakai fungsi ISO.CEILING.",
    "simpleLogic": "Masukkan cell yang ingin dicek, lalu Excel memberi hasil TRUE atau FALSE.",
    "useCase": "Dipakai untuk validasi data sebelum diproses rumus lain.",
    "analogy": "Kayak satpam yang mengecek isi cell sebelum diizinkan lanjut.",
    "simpleExample": "Contoh sederhana: pakai ISO.CEILING saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ISO.CEILING(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ISO.CEILING. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "LCM": {
    "description": "Melakukan perhitungan matematika memakai fungsi LCM.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai LCM saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=LCM(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan LCM. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "LN": {
    "description": "Melakukan perhitungan matematika memakai fungsi LN.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai LN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=LN(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan LN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "LOG": {
    "description": "Melakukan perhitungan matematika memakai fungsi LOG.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai LOG saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=LOG(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan LOG. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "LOG10": {
    "description": "Melakukan perhitungan matematika memakai fungsi LOG10.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai LOG10 saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=LOG10(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan LOG10. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "MDETERM": {
    "description": "Melakukan perhitungan matematika memakai fungsi MDETERM.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai MDETERM saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=MDETERM(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan MDETERM. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "MINVERSE": {
    "description": "Melakukan perhitungan matematika memakai fungsi MINVERSE.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai MINVERSE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=MINVERSE(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan MINVERSE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "MMULT": {
    "description": "Melakukan perhitungan matematika memakai fungsi MMULT.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai MMULT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=MMULT(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan MMULT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "MOD": {
    "description": "Mengambil sisa pembagian.",
    "simpleLogic": "Excel membagi angka lalu mengembalikan sisanya.",
    "useCase": "Saat ingin cek ganjil/genap atau pola berulang.",
    "analogy": "Kayak membagi permen ke beberapa orang lalu lihat sisanya.",
    "simpleExample": "Sisa pembagian A2 dengan 2.",
    "exampleFormula": "=MOD(A2;2)",
    "exampleMeaning": "Sisa pembagian A2 dengan 2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "MROUND": {
    "description": "Melakukan perhitungan matematika memakai fungsi MROUND.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai MROUND saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=MROUND(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan MROUND. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "MULTINOMIAL": {
    "description": "Melakukan perhitungan matematika memakai fungsi MULTINOMIAL.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai MULTINOMIAL saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=MULTINOMIAL(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan MULTINOMIAL. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "MUNIT": {
    "description": "Melakukan perhitungan matematika memakai fungsi MUNIT.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai MUNIT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=MUNIT(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan MUNIT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ODD": {
    "description": "Melakukan perhitungan matematika memakai fungsi ODD.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai ODD saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ODD(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ODD. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PI": {
    "description": "Melakukan perhitungan matematika memakai fungsi PI.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai PI saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PI(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PI. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "POWER": {
    "description": "Menghitung pangkat.",
    "simpleLogic": "Excel menaikkan angka ke pangkat tertentu.",
    "useCase": "Saat butuh kuadrat, kubik, atau pertumbuhan eksponensial.",
    "analogy": "Kayak angka yang dikalikan dirinya sendiri beberapa kali.",
    "simpleExample": "Hitung A2 pangkat 2.",
    "exampleFormula": "=POWER(A2;2)",
    "exampleMeaning": "Hitung A2 pangkat 2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "PRODUCT": {
    "description": "Melakukan perhitungan matematika memakai fungsi PRODUCT.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai PRODUCT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PRODUCT(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PRODUCT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "QUOTIENT": {
    "description": "Melakukan perhitungan matematika memakai fungsi QUOTIENT.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai QUOTIENT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=QUOTIENT(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan QUOTIENT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "RADIANS": {
    "description": "Melakukan perhitungan matematika memakai fungsi RADIANS.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai RADIANS saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=RADIANS(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan RADIANS. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "RAND": {
    "description": "Menghasilkan angka acak antara 0 dan 1.",
    "simpleLogic": "Excel membuat angka random yang berubah saat recalculation.",
    "useCase": "Saat butuh simulasi atau random sampling.",
    "analogy": "Kayak mesin undian angka desimal.",
    "simpleExample": "Hasilkan angka acak 0 sampai 1.",
    "exampleFormula": "=RAND()",
    "exampleMeaning": "Hasilkan angka acak 0 sampai 1.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "RANDBETWEEN": {
    "description": "Menghasilkan angka acak dalam rentang tertentu.",
    "simpleLogic": "Kamu tentukan angka minimum dan maksimum.",
    "useCase": "Saat butuh nomor undian atau data dummy.",
    "analogy": "Kayak ambil nomor lotre dari batas yang kamu tentukan.",
    "simpleExample": "Hasilkan angka acak 1 sampai 100.",
    "exampleFormula": "=RANDBETWEEN(1;100)",
    "exampleMeaning": "Hasilkan angka acak 1 sampai 100.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "ROMAN": {
    "description": "Melakukan perhitungan matematika memakai fungsi ROMAN.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai ROMAN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ROMAN(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ROMAN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ROUND": {
    "description": "Membulatkan angka ke jumlah digit tertentu.",
    "simpleLogic": "Excel melihat digit setelah batas, lalu membulatkan normal.",
    "useCase": "Saat ingin angka rapi dengan 0/2 desimal.",
    "analogy": "Kayak membulatkan harga agar lebih enak dibaca.",
    "simpleExample": "Bulatkan A2 menjadi 2 angka desimal.",
    "exampleFormula": "=ROUND(A2;2)",
    "exampleMeaning": "Bulatkan A2 menjadi 2 angka desimal.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "ROUNDDOWN": {
    "description": "Membulatkan angka ke bawah.",
    "simpleLogic": "Excel memotong angka menuju bawah sesuai digit.",
    "useCase": "Saat ingin mengabaikan sisa desimal.",
    "analogy": "Kayak ambil bagian utuhnya saja tanpa naik.",
    "simpleExample": "Bulatkan A2 ke bawah tanpa desimal.",
    "exampleFormula": "=ROUNDDOWN(A2;0)",
    "exampleMeaning": "Bulatkan A2 ke bawah tanpa desimal.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "ROUNDUP": {
    "description": "Membulatkan angka ke atas.",
    "simpleLogic": "Sekecil apa pun sisanya, Excel naikkan angka.",
    "useCase": "Saat butuh pembulatan jumlah box atau paket.",
    "analogy": "Kayak kalau butuh 2,1 box, tetap harus 3 box.",
    "simpleExample": "Bulatkan A2 ke atas tanpa desimal.",
    "exampleFormula": "=ROUNDUP(A2;0)",
    "exampleMeaning": "Bulatkan A2 ke atas tanpa desimal.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "SEC": {
    "description": "Melakukan perhitungan matematika memakai fungsi SEC.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai SEC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SEC(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SEC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SECH": {
    "description": "Melakukan perhitungan matematika memakai fungsi SECH.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai SECH saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SECH(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SECH. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SERIESSUM": {
    "description": "Melakukan perhitungan matematika memakai fungsi SERIESSUM.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai SERIESSUM saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SERIESSUM(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SERIESSUM. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SIGN": {
    "description": "Melakukan perhitungan matematika memakai fungsi SIGN.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai SIGN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SIGN(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SIGN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SIN": {
    "description": "Melakukan perhitungan matematika memakai fungsi SIN.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai SIN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SIN(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SIN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SINH": {
    "description": "Melakukan perhitungan matematika memakai fungsi SINH.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai SINH saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SINH(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SINH. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SQRT": {
    "description": "Menghitung akar kuadrat.",
    "simpleLogic": "Excel mencari angka yang jika dikalikan dirinya sendiri menghasilkan nilai asal.",
    "useCase": "Saat menghitung sisi, jarak, atau statistik tertentu.",
    "analogy": "Kayak mencari sisi persegi dari luasnya.",
    "simpleExample": "Hitung akar kuadrat dari A2.",
    "exampleFormula": "=SQRT(A2)",
    "exampleMeaning": "Hitung akar kuadrat dari A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "SQRTPI": {
    "description": "Melakukan perhitungan matematika memakai fungsi SQRTPI.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai SQRTPI saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SQRTPI(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SQRTPI. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SUBTOTAL": {
    "description": "Menghitung subtotal yang bisa mengikuti filter.",
    "simpleLogic": "Excel menghitung data terlihat sesuai kode fungsi.",
    "useCase": "Saat ingin total data yang sudah difilter.",
    "analogy": "Kayak total kasir yang berubah saat daftar transaksi difilter.",
    "simpleExample": "Jumlahkan E2:E16 dengan mode subtotal SUM.",
    "exampleFormula": "=SUBTOTAL(9;E2:E16)",
    "exampleMeaning": "Jumlahkan E2:E16 dengan mode subtotal SUM.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "SUMPRODUCT": {
    "description": "Mengalikan pasangan angka lalu menjumlahkannya.",
    "simpleLogic": "Excel mengalikan array satu dengan array lain, lalu total hasilnya.",
    "useCase": "Saat ingin total omzet dari Qty x Harga tanpa kolom bantu.",
    "analogy": "Kayak menghitung semua keranjang: qty dikali harga, lalu dijumlahkan.",
    "simpleExample": "Kalikan D dengan E per baris, lalu jumlahkan.",
    "exampleFormula": "=SUMPRODUCT(D2:D16;E2:E16)",
    "exampleMeaning": "Kalikan D dengan E per baris, lalu jumlahkan.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "SUMSQ": {
    "description": "Melakukan perhitungan matematika memakai fungsi SUMSQ.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai SUMSQ saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SUMSQ(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SUMSQ. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SUMX2MY2": {
    "description": "Melakukan perhitungan matematika memakai fungsi SUMX2MY2.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai SUMX2MY2 saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SUMX2MY2(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SUMX2MY2. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SUMX2PY2": {
    "description": "Melakukan perhitungan matematika memakai fungsi SUMX2PY2.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai SUMX2PY2 saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SUMX2PY2(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SUMX2PY2. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SUMXMY2": {
    "description": "Melakukan perhitungan matematika memakai fungsi SUMXMY2.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai SUMXMY2 saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SUMXMY2(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SUMXMY2. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "TAN": {
    "description": "Melakukan perhitungan matematika memakai fungsi TAN.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai TAN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=TAN(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan TAN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "TANH": {
    "description": "Melakukan perhitungan matematika memakai fungsi TANH.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai TANH saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=TANH(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan TANH. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "TRUNC": {
    "description": "Melakukan perhitungan matematika memakai fungsi TRUNC.",
    "simpleLogic": "Masukkan angka atau range, lalu Excel menjalankan operasi hitung yang sesuai.",
    "useCase": "Dipakai untuk pembulatan, pangkat, akar, sudut, total, kombinasi, dan operasi angka lain.",
    "analogy": "Kayak kalkulator ilmiah di dalam spreadsheet.",
    "simpleExample": "Contoh sederhana: pakai TRUNC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=TRUNC(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan TRUNC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CALL": {
    "description": "Fungsi tambahan atau fungsi buatan user/add-in.",
    "simpleLogic": "Cara pakainya tergantung add-in atau definisi function yang tersedia.",
    "useCase": "Dipakai saat workbook memakai fitur tambahan di luar function standar.",
    "analogy": "Kayak memasang alat tambahan ke Excel.",
    "simpleExample": "Contoh sederhana: pakai CALL saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CALL(argument1)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CALL. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CUBEKPIMEMBER": {
    "description": "Mengambil data dari cube atau model OLAP.",
    "simpleLogic": "Excel mengirim referensi member/set ke cube lalu mengambil nilai atau properti.",
    "useCase": "Dipakai untuk laporan Pivot/OLAP yang terhubung ke data model.",
    "analogy": "Kayak bertanya ke gudang data besar dan mengambil angka yang diminta.",
    "simpleExample": "Contoh sederhana: pakai CUBEKPIMEMBER saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CUBEKPIMEMBER(\"ThisWorkbookDataModel\";\"[Measures].[Sales]\")",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CUBEKPIMEMBER. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CUBEMEMBER": {
    "description": "Mengambil data dari cube atau model OLAP.",
    "simpleLogic": "Excel mengirim referensi member/set ke cube lalu mengambil nilai atau properti.",
    "useCase": "Dipakai untuk laporan Pivot/OLAP yang terhubung ke data model.",
    "analogy": "Kayak bertanya ke gudang data besar dan mengambil angka yang diminta.",
    "simpleExample": "Contoh sederhana: pakai CUBEMEMBER saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CUBEMEMBER(\"ThisWorkbookDataModel\";\"[Measures].[Sales]\")",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CUBEMEMBER. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CUBEMEMBERPROPERTY": {
    "description": "Mengambil data dari cube atau model OLAP.",
    "simpleLogic": "Excel mengirim referensi member/set ke cube lalu mengambil nilai atau properti.",
    "useCase": "Dipakai untuk laporan Pivot/OLAP yang terhubung ke data model.",
    "analogy": "Kayak bertanya ke gudang data besar dan mengambil angka yang diminta.",
    "simpleExample": "Contoh sederhana: pakai CUBEMEMBERPROPERTY saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CUBEMEMBERPROPERTY(\"ThisWorkbookDataModel\";\"[Measures].[Sales]\")",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CUBEMEMBERPROPERTY. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CUBERANKEDMEMBER": {
    "description": "Mengambil data dari cube atau model OLAP.",
    "simpleLogic": "Excel mengirim referensi member/set ke cube lalu mengambil nilai atau properti.",
    "useCase": "Dipakai untuk laporan Pivot/OLAP yang terhubung ke data model.",
    "analogy": "Kayak bertanya ke gudang data besar dan mengambil angka yang diminta.",
    "simpleExample": "Contoh sederhana: pakai CUBERANKEDMEMBER saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CUBERANKEDMEMBER(\"ThisWorkbookDataModel\";\"[Measures].[Sales]\")",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CUBERANKEDMEMBER. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CUBESET": {
    "description": "Mengambil data dari cube atau model OLAP.",
    "simpleLogic": "Excel mengirim referensi member/set ke cube lalu mengambil nilai atau properti.",
    "useCase": "Dipakai untuk laporan Pivot/OLAP yang terhubung ke data model.",
    "analogy": "Kayak bertanya ke gudang data besar dan mengambil angka yang diminta.",
    "simpleExample": "Contoh sederhana: pakai CUBESET saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CUBESET(\"ThisWorkbookDataModel\";\"[Measures].[Sales]\")",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CUBESET. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CUBESETCOUNT": {
    "description": "Mengambil data dari cube atau model OLAP.",
    "simpleLogic": "Excel mengirim referensi member/set ke cube lalu mengambil nilai atau properti.",
    "useCase": "Dipakai untuk laporan Pivot/OLAP yang terhubung ke data model.",
    "analogy": "Kayak bertanya ke gudang data besar dan mengambil angka yang diminta.",
    "simpleExample": "Contoh sederhana: pakai CUBESETCOUNT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CUBESETCOUNT(\"ThisWorkbookDataModel\";\"[Measures].[Sales]\")",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CUBESETCOUNT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CUBEVALUE": {
    "description": "Mengambil data dari cube atau model OLAP.",
    "simpleLogic": "Excel mengirim referensi member/set ke cube lalu mengambil nilai atau properti.",
    "useCase": "Dipakai untuk laporan Pivot/OLAP yang terhubung ke data model.",
    "analogy": "Kayak bertanya ke gudang data besar dan mengambil angka yang diminta.",
    "simpleExample": "Contoh sederhana: pakai CUBEVALUE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CUBEVALUE(\"ThisWorkbookDataModel\";\"[Measures].[Sales]\")",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CUBEVALUE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "EUROCONVERT": {
    "description": "Fungsi tambahan atau fungsi buatan user/add-in.",
    "simpleLogic": "Cara pakainya tergantung add-in atau definisi function yang tersedia.",
    "useCase": "Dipakai saat workbook memakai fitur tambahan di luar function standar.",
    "analogy": "Kayak memasang alat tambahan ke Excel.",
    "simpleExample": "Contoh sederhana: pakai EUROCONVERT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=EUROCONVERT(argument1)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan EUROCONVERT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "REGISTER.ID": {
    "description": "Fungsi tambahan atau fungsi buatan user/add-in.",
    "simpleLogic": "Cara pakainya tergantung add-in atau definisi function yang tersedia.",
    "useCase": "Dipakai saat workbook memakai fitur tambahan di luar function standar.",
    "analogy": "Kayak memasang alat tambahan ke Excel.",
    "simpleExample": "Contoh sederhana: pakai REGISTER.ID saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=REGISTER.ID(argument1)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan REGISTER.ID. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SQL.REQUEST": {
    "description": "Fungsi tambahan atau fungsi buatan user/add-in.",
    "simpleLogic": "Cara pakainya tergantung add-in atau definisi function yang tersedia.",
    "useCase": "Dipakai saat workbook memakai fitur tambahan di luar function standar.",
    "analogy": "Kayak memasang alat tambahan ke Excel.",
    "simpleExample": "Contoh sederhana: pakai SQL.REQUEST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SQL.REQUEST(argument1)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SQL.REQUEST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "AVEDEV": {
    "description": "Menghitung analisis statistik memakai fungsi AVEDEV.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai AVEDEV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=AVEDEV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan AVEDEV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "AVERAGEA": {
    "description": "Menghitung analisis statistik memakai fungsi AVERAGEA.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai AVERAGEA saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=AVERAGEA(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan AVERAGEA. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BETA.DIST": {
    "description": "Menghitung analisis statistik memakai fungsi BETA.DIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai BETA.DIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BETA.DIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BETA.DIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BETA.INV": {
    "description": "Menghitung analisis statistik memakai fungsi BETA.INV.",
    "simpleLogic": "Masukkan probabilitas dan parameter, lalu Excel mencari nilai balikannya.",
    "useCase": "Dipakai saat punya peluang dan ingin tahu nilai batasnya.",
    "analogy": "Kayak membalik pertanyaan: bukan “peluang dari nilai berapa?”, tapi “nilai berapa untuk peluang ini?”.",
    "simpleExample": "Contoh sederhana: pakai BETA.INV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BETA.INV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BETA.INV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BINOM.DIST": {
    "description": "Menghitung analisis statistik memakai fungsi BINOM.DIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai BINOM.DIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BINOM.DIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BINOM.DIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BINOM.DIST.RANGE": {
    "description": "Menghitung analisis statistik memakai fungsi BINOM.DIST.RANGE.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai BINOM.DIST.RANGE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BINOM.DIST.RANGE(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BINOM.DIST.RANGE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BINOM.INV": {
    "description": "Menghitung analisis statistik memakai fungsi BINOM.INV.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai BINOM.INV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BINOM.INV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BINOM.INV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CHISQ.DIST": {
    "description": "Menghitung analisis statistik memakai fungsi CHISQ.DIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai CHISQ.DIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CHISQ.DIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CHISQ.DIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CHISQ.DIST.RT": {
    "description": "Menghitung analisis statistik memakai fungsi CHISQ.DIST.RT.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai CHISQ.DIST.RT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CHISQ.DIST.RT(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CHISQ.DIST.RT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CHISQ.INV": {
    "description": "Menghitung analisis statistik memakai fungsi CHISQ.INV.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai CHISQ.INV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CHISQ.INV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CHISQ.INV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CHISQ.INV.RT": {
    "description": "Menghitung analisis statistik memakai fungsi CHISQ.INV.RT.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai CHISQ.INV.RT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CHISQ.INV.RT(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CHISQ.INV.RT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CHISQ.TEST": {
    "description": "Menghitung analisis statistik memakai fungsi CHISQ.TEST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai CHISQ.TEST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CHISQ.TEST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CHISQ.TEST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CONFIDENCE.NORM": {
    "description": "Menghitung analisis statistik memakai fungsi CONFIDENCE.NORM.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai CONFIDENCE.NORM saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CONFIDENCE.NORM(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CONFIDENCE.NORM. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CONFIDENCE.T": {
    "description": "Menghitung analisis statistik memakai fungsi CONFIDENCE.T.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai CONFIDENCE.T saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CONFIDENCE.T(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CONFIDENCE.T. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CORREL": {
    "description": "Menghitung analisis statistik memakai fungsi CORREL.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai CORREL saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CORREL(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CORREL. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "COVARIANCE.P": {
    "description": "Menghitung analisis statistik memakai fungsi COVARIANCE.P.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai COVARIANCE.P saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=COVARIANCE.P(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan COVARIANCE.P. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "COVARIANCE.S": {
    "description": "Menghitung analisis statistik memakai fungsi COVARIANCE.S.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai COVARIANCE.S saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=COVARIANCE.S(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan COVARIANCE.S. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DEVSQ": {
    "description": "Menghitung analisis statistik memakai fungsi DEVSQ.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai DEVSQ saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DEVSQ(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DEVSQ. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "EXPON.DIST": {
    "description": "Menghitung analisis statistik memakai fungsi EXPON.DIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai EXPON.DIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=EXPON.DIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan EXPON.DIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "F.DIST": {
    "description": "Menghitung analisis statistik memakai fungsi F.DIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai F.DIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=F.DIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan F.DIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "F.DIST.RT": {
    "description": "Menghitung analisis statistik memakai fungsi F.DIST.RT.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai F.DIST.RT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=F.DIST.RT(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan F.DIST.RT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "F.INV": {
    "description": "Menghitung analisis statistik memakai fungsi F.INV.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai F.INV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=F.INV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan F.INV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "F.INV.RT": {
    "description": "Menghitung analisis statistik memakai fungsi F.INV.RT.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai F.INV.RT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=F.INV.RT(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan F.INV.RT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "F.TEST": {
    "description": "Menghitung analisis statistik memakai fungsi F.TEST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai F.TEST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=F.TEST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan F.TEST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FISHER": {
    "description": "Menghitung analisis statistik memakai fungsi FISHER.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai FISHER saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FISHER(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FISHER. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FISHERINV": {
    "description": "Menghitung analisis statistik memakai fungsi FISHERINV.",
    "simpleLogic": "Masukkan probabilitas dan parameter, lalu Excel mencari nilai balikannya.",
    "useCase": "Dipakai saat punya peluang dan ingin tahu nilai batasnya.",
    "analogy": "Kayak membalik pertanyaan: bukan “peluang dari nilai berapa?”, tapi “nilai berapa untuk peluang ini?”.",
    "simpleExample": "Contoh sederhana: pakai FISHERINV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FISHERINV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FISHERINV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FORECAST": {
    "description": "Memprediksi nilai masa depan dari data lama.",
    "simpleLogic": "Excel membuat perkiraan berdasarkan hubungan data yang sudah ada.",
    "useCase": "Saat ingin forecast sales sederhana.",
    "analogy": "Kayak menebak penjualan bulan depan dari pola bulan sebelumnya.",
    "simpleExample": "Prediksi nilai untuk A10 berdasarkan data A2:B9.",
    "exampleFormula": "=FORECAST(A10;B2:B9;A2:A9)",
    "exampleMeaning": "Prediksi nilai untuk A10 berdasarkan data A2:B9.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "FORECAST.ETS": {
    "description": "Menghitung analisis statistik memakai fungsi FORECAST.ETS.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai FORECAST.ETS saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FORECAST.ETS(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FORECAST.ETS. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FORECAST.ETS.CONFINT": {
    "description": "Menghitung analisis statistik memakai fungsi FORECAST.ETS.CONFINT.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai FORECAST.ETS.CONFINT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FORECAST.ETS.CONFINT(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FORECAST.ETS.CONFINT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FORECAST.ETS.SEASONALITY": {
    "description": "Menghitung analisis statistik memakai fungsi FORECAST.ETS.SEASONALITY.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai FORECAST.ETS.SEASONALITY saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FORECAST.ETS.SEASONALITY(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FORECAST.ETS.SEASONALITY. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FORECAST.ETS.STAT": {
    "description": "Menghitung analisis statistik memakai fungsi FORECAST.ETS.STAT.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai FORECAST.ETS.STAT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FORECAST.ETS.STAT(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FORECAST.ETS.STAT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FORECAST.LINEAR": {
    "description": "Menghitung analisis statistik memakai fungsi FORECAST.LINEAR.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai FORECAST.LINEAR saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FORECAST.LINEAR(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FORECAST.LINEAR. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FREQUENCY": {
    "description": "Menghitung analisis statistik memakai fungsi FREQUENCY.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai FREQUENCY saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FREQUENCY(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FREQUENCY. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "GAMMA": {
    "description": "Menghitung analisis statistik memakai fungsi GAMMA.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai GAMMA saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=GAMMA(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan GAMMA. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "GAMMA.DIST": {
    "description": "Menghitung analisis statistik memakai fungsi GAMMA.DIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai GAMMA.DIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=GAMMA.DIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan GAMMA.DIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "GAMMA.INV": {
    "description": "Menghitung analisis statistik memakai fungsi GAMMA.INV.",
    "simpleLogic": "Masukkan probabilitas dan parameter, lalu Excel mencari nilai balikannya.",
    "useCase": "Dipakai saat punya peluang dan ingin tahu nilai batasnya.",
    "analogy": "Kayak membalik pertanyaan: bukan “peluang dari nilai berapa?”, tapi “nilai berapa untuk peluang ini?”.",
    "simpleExample": "Contoh sederhana: pakai GAMMA.INV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=GAMMA.INV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan GAMMA.INV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "GAMMALN": {
    "description": "Menghitung analisis statistik memakai fungsi GAMMALN.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai GAMMALN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=GAMMALN(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan GAMMALN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "GAMMALN.PRECISE": {
    "description": "Menghitung analisis statistik memakai fungsi GAMMALN.PRECISE.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai GAMMALN.PRECISE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=GAMMALN.PRECISE(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan GAMMALN.PRECISE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "GAUSS": {
    "description": "Menghitung analisis statistik memakai fungsi GAUSS.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai GAUSS saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=GAUSS(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan GAUSS. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "GEOMEAN": {
    "description": "Menghitung analisis statistik memakai fungsi GEOMEAN.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai GEOMEAN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=GEOMEAN(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan GEOMEAN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "GROWTH": {
    "description": "Menghitung analisis statistik memakai fungsi GROWTH.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai GROWTH saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=GROWTH(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan GROWTH. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "HARMEAN": {
    "description": "Menghitung analisis statistik memakai fungsi HARMEAN.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai HARMEAN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=HARMEAN(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan HARMEAN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "HYPGEOM.DIST": {
    "description": "Menghitung analisis statistik memakai fungsi HYPGEOM.DIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai HYPGEOM.DIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=HYPGEOM.DIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan HYPGEOM.DIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "INTERCEPT": {
    "description": "Menghitung analisis statistik memakai fungsi INTERCEPT.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai INTERCEPT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=INTERCEPT(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan INTERCEPT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "KURT": {
    "description": "Menghitung analisis statistik memakai fungsi KURT.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai KURT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=KURT(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan KURT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "LINEST": {
    "description": "Menghitung analisis statistik memakai fungsi LINEST.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai LINEST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=LINEST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan LINEST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "LOGEST": {
    "description": "Menghitung analisis statistik memakai fungsi LOGEST.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai LOGEST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=LOGEST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan LOGEST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "LOGNORM.DIST": {
    "description": "Menghitung analisis statistik memakai fungsi LOGNORM.DIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai LOGNORM.DIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=LOGNORM.DIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan LOGNORM.DIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "LOGNORM.INV": {
    "description": "Menghitung analisis statistik memakai fungsi LOGNORM.INV.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai LOGNORM.INV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=LOGNORM.INV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan LOGNORM.INV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "MAXA": {
    "description": "Menghitung analisis statistik memakai fungsi MAXA.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai MAXA saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=MAXA(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan MAXA. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "MEDIAN": {
    "description": "Mengambil nilai tengah.",
    "simpleLogic": "Excel mengurutkan data lalu mengambil angka yang berada di tengah.",
    "useCase": "Saat ingin rata tengah yang tidak mudah terganggu nilai ekstrem.",
    "analogy": "Kayak mencari orang yang berdiri tepat di tengah barisan.",
    "simpleExample": "Cari nilai tengah dari D2:D16.",
    "exampleFormula": "=MEDIAN(D2:D16)",
    "exampleMeaning": "Cari nilai tengah dari D2:D16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "MINA": {
    "description": "Menghitung analisis statistik memakai fungsi MINA.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai MINA saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=MINA(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan MINA. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "MODE.MULT": {
    "description": "Menghitung analisis statistik memakai fungsi MODE.MULT.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai MODE.MULT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=MODE.MULT(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan MODE.MULT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "MODE.SNGL": {
    "description": "Menghitung analisis statistik memakai fungsi MODE.SNGL.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai MODE.SNGL saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=MODE.SNGL(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan MODE.SNGL. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "NEGBINOM.DIST": {
    "description": "Menghitung analisis statistik memakai fungsi NEGBINOM.DIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai NEGBINOM.DIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=NEGBINOM.DIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan NEGBINOM.DIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "NORM.DIST": {
    "description": "Menghitung analisis statistik memakai fungsi NORM.DIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai NORM.DIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=NORM.DIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan NORM.DIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "NORM.INV": {
    "description": "Menghitung analisis statistik memakai fungsi NORM.INV.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai NORM.INV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=NORM.INV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan NORM.INV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "NORM.S.DIST": {
    "description": "Menghitung analisis statistik memakai fungsi NORM.S.DIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai NORM.S.DIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=NORM.S.DIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan NORM.S.DIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "NORM.S.INV": {
    "description": "Menghitung analisis statistik memakai fungsi NORM.S.INV.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai NORM.S.INV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=NORM.S.INV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan NORM.S.INV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PEARSON": {
    "description": "Menghitung analisis statistik memakai fungsi PEARSON.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai PEARSON saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PEARSON(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PEARSON. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PERCENTILE.EXC": {
    "description": "Menghitung analisis statistik memakai fungsi PERCENTILE.EXC.",
    "simpleLogic": "Excel melihat posisi nilai dalam data berdasarkan persentase.",
    "useCase": "Dipakai untuk percentile, rank persentase, dan batas top/bottom data.",
    "analogy": "Kayak melihat seseorang ada di posisi berapa persen dalam antrean.",
    "simpleExample": "Contoh sederhana: pakai PERCENTILE.EXC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PERCENTILE.EXC(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PERCENTILE.EXC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PERCENTILE.INC": {
    "description": "Menghitung analisis statistik memakai fungsi PERCENTILE.INC.",
    "simpleLogic": "Excel melihat posisi nilai dalam data berdasarkan persentase.",
    "useCase": "Dipakai untuk percentile, rank persentase, dan batas top/bottom data.",
    "analogy": "Kayak melihat seseorang ada di posisi berapa persen dalam antrean.",
    "simpleExample": "Contoh sederhana: pakai PERCENTILE.INC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PERCENTILE.INC(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PERCENTILE.INC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PERCENTRANK.EXC": {
    "description": "Menghitung analisis statistik memakai fungsi PERCENTRANK.EXC.",
    "simpleLogic": "Excel melihat posisi nilai dalam data berdasarkan persentase.",
    "useCase": "Dipakai untuk percentile, rank persentase, dan batas top/bottom data.",
    "analogy": "Kayak melihat seseorang ada di posisi berapa persen dalam antrean.",
    "simpleExample": "Contoh sederhana: pakai PERCENTRANK.EXC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PERCENTRANK.EXC(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PERCENTRANK.EXC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PERCENTRANK.INC": {
    "description": "Menghitung analisis statistik memakai fungsi PERCENTRANK.INC.",
    "simpleLogic": "Excel melihat posisi nilai dalam data berdasarkan persentase.",
    "useCase": "Dipakai untuk percentile, rank persentase, dan batas top/bottom data.",
    "analogy": "Kayak melihat seseorang ada di posisi berapa persen dalam antrean.",
    "simpleExample": "Contoh sederhana: pakai PERCENTRANK.INC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PERCENTRANK.INC(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PERCENTRANK.INC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PERMUT": {
    "description": "Menghitung analisis statistik memakai fungsi PERMUT.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai PERMUT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PERMUT(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PERMUT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PERMUTATIONA": {
    "description": "Menghitung analisis statistik memakai fungsi PERMUTATIONA.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai PERMUTATIONA saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PERMUTATIONA(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PERMUTATIONA. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PHI": {
    "description": "Menghitung analisis statistik memakai fungsi PHI.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai PHI saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PHI(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PHI. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "POISSON.DIST": {
    "description": "Menghitung analisis statistik memakai fungsi POISSON.DIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai POISSON.DIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=POISSON.DIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan POISSON.DIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PROB": {
    "description": "Menghitung analisis statistik memakai fungsi PROB.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai PROB saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PROB(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PROB. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "QUARTILE.EXC": {
    "description": "Menghitung analisis statistik memakai fungsi QUARTILE.EXC.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai QUARTILE.EXC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=QUARTILE.EXC(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan QUARTILE.EXC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "QUARTILE.INC": {
    "description": "Menghitung analisis statistik memakai fungsi QUARTILE.INC.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai QUARTILE.INC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=QUARTILE.INC(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan QUARTILE.INC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "RANK.AVG": {
    "description": "Menghitung analisis statistik memakai fungsi RANK.AVG.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai RANK.AVG saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=RANK.AVG(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan RANK.AVG. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "RANK.EQ": {
    "description": "Menentukan ranking dengan nilai sama diberi ranking sama.",
    "simpleLogic": "Kalau ada angka kembar, rankingnya sama.",
    "useCase": "Saat ingin ranking sales dan menerima posisi seri.",
    "analogy": "Kayak dua orang nilai sama dapat peringkat yang sama.",
    "simpleExample": "Cari ranking D2 dari terbesar dengan sistem seri.",
    "exampleFormula": "=RANK.EQ(D2;D2:D16;0)",
    "exampleMeaning": "Cari ranking D2 dari terbesar dengan sistem seri.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "RSQ": {
    "description": "Menghitung analisis statistik memakai fungsi RSQ.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai RSQ saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=RSQ(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan RSQ. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SKEW": {
    "description": "Menghitung analisis statistik memakai fungsi SKEW.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai SKEW saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SKEW(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SKEW. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SKEW.P": {
    "description": "Menghitung analisis statistik memakai fungsi SKEW.P.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai SKEW.P saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SKEW.P(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SKEW.P. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SLOPE": {
    "description": "Menghitung analisis statistik memakai fungsi SLOPE.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai SLOPE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SLOPE(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SLOPE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "STANDARDIZE": {
    "description": "Menghitung analisis statistik memakai fungsi STANDARDIZE.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai STANDARDIZE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=STANDARDIZE(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan STANDARDIZE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "STDEV.P": {
    "description": "Menghitung standar deviasi populasi.",
    "simpleLogic": "Excel mengukur sebaran data ketika seluruh populasi tersedia.",
    "useCase": "Saat data yang dipakai adalah semua anggota, bukan sampel.",
    "analogy": "Kayak mengukur sebaran nilai semua siswa dalam kelas.",
    "simpleExample": "Hitung standar deviasi populasi dari D2:D16.",
    "exampleFormula": "=STDEV.P(D2:D16)",
    "exampleMeaning": "Hitung standar deviasi populasi dari D2:D16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "STDEV.S": {
    "description": "Menghitung standar deviasi sampel.",
    "simpleLogic": "Excel mengukur seberapa menyebar data sampel dari rata-ratanya.",
    "useCase": "Saat analisis variasi dari sebagian data.",
    "analogy": "Kayak melihat seberapa jauh nilai siswa menyebar dari rata-rata kelas.",
    "simpleExample": "Hitung standar deviasi sampel dari D2:D16.",
    "exampleFormula": "=STDEV.S(D2:D16)",
    "exampleMeaning": "Hitung standar deviasi sampel dari D2:D16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "STDEVA": {
    "description": "Menghitung analisis statistik memakai fungsi STDEVA.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai STDEVA saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=STDEVA(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan STDEVA. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "STDEVPA": {
    "description": "Menghitung analisis statistik memakai fungsi STDEVPA.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai STDEVPA saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=STDEVPA(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan STDEVPA. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "STEYX": {
    "description": "Menghitung analisis statistik memakai fungsi STEYX.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai STEYX saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=STEYX(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan STEYX. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "T.DIST": {
    "description": "Menghitung analisis statistik memakai fungsi T.DIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai T.DIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=T.DIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan T.DIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "T.DIST.2T": {
    "description": "Menghitung analisis statistik memakai fungsi T.DIST.2T.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai T.DIST.2T saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=T.DIST.2T(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan T.DIST.2T. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "T.DIST.RT": {
    "description": "Menghitung analisis statistik memakai fungsi T.DIST.RT.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai T.DIST.RT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=T.DIST.RT(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan T.DIST.RT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "T.INV": {
    "description": "Menghitung analisis statistik memakai fungsi T.INV.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai T.INV saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=T.INV(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan T.INV. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "T.INV.2T": {
    "description": "Menghitung analisis statistik memakai fungsi T.INV.2T.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai T.INV.2T saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=T.INV.2T(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan T.INV.2T. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "T.TEST": {
    "description": "Menghitung analisis statistik memakai fungsi T.TEST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai T.TEST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=T.TEST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan T.TEST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "TREND": {
    "description": "Menghasilkan nilai tren dari data yang ada.",
    "simpleLogic": "Excel membaca pola data lalu menghasilkan garis tren.",
    "useCase": "Saat ingin estimasi beberapa nilai sekaligus.",
    "analogy": "Kayak menarik garis arah dari data historis.",
    "simpleExample": "Prediksi tren untuk A10:A12.",
    "exampleFormula": "=TREND(B2:B9;A2:A9;A10:A12)",
    "exampleMeaning": "Prediksi tren untuk A10:A12.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "TRIMMEAN": {
    "description": "Menghitung analisis statistik memakai fungsi TRIMMEAN.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai TRIMMEAN saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=TRIMMEAN(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan TRIMMEAN. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "VAR.P": {
    "description": "Menghitung varians populasi.",
    "simpleLogic": "Excel mengukur penyebaran seluruh data populasi.",
    "useCase": "Saat semua data yang dianalisis sudah lengkap.",
    "analogy": "Kayak mengukur variasi dari seluruh isi kelas.",
    "simpleExample": "Hitung varians populasi dari D2:D16.",
    "exampleFormula": "=VAR.P(D2:D16)",
    "exampleMeaning": "Hitung varians populasi dari D2:D16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "VAR.S": {
    "description": "Menghitung varians sampel.",
    "simpleLogic": "Excel mengukur tingkat penyebaran data sampel.",
    "useCase": "Saat butuh dasar statistik dari sebagian data.",
    "analogy": "Kayak melihat seberapa berantakan jarak nilai dari rata-rata.",
    "simpleExample": "Hitung varians sampel dari D2:D16.",
    "exampleFormula": "=VAR.S(D2:D16)",
    "exampleMeaning": "Hitung varians sampel dari D2:D16.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "VARA": {
    "description": "Menghitung analisis statistik memakai fungsi VARA.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai VARA saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=VARA(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan VARA. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "VARPA": {
    "description": "Menghitung analisis statistik memakai fungsi VARPA.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai VARPA saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=VARPA(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan VARPA. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "WEIBULL.DIST": {
    "description": "Menghitung analisis statistik memakai fungsi WEIBULL.DIST.",
    "simpleLogic": "Masukkan nilai dan parameter distribusi, lalu Excel menghitung peluang atau nilai statistiknya.",
    "useCase": "Dipakai untuk analisis statistik yang butuh distribusi probabilitas.",
    "analogy": "Kayak membaca peta kemungkinan dari data angka.",
    "simpleExample": "Contoh sederhana: pakai WEIBULL.DIST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=WEIBULL.DIST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan WEIBULL.DIST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "Z.TEST": {
    "description": "Menghitung analisis statistik memakai fungsi Z.TEST.",
    "simpleLogic": "Pilih data angka dan parameter statistiknya, lalu Excel mengembalikan hasil analisis.",
    "useCase": "Dipakai untuk rata-rata, sebaran, probabilitas, regresi, ranking, dan distribusi.",
    "analogy": "Kayak alat baca pola data: seberapa tinggi, sering, menyebar, atau mungkin terjadi.",
    "simpleExample": "Contoh sederhana: pakai Z.TEST saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=Z.TEST(A2:A20)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan Z.TEST. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ARRAYTOTEXT": {
    "description": "Mengolah teks menggunakan fungsi ARRAYTOTEXT.",
    "simpleLogic": "Masukkan teks dan aturan pengolahannya, lalu Excel mengembalikan teks yang sudah diubah.",
    "useCase": "Dipakai untuk merapikan nama, kode, email, invoice, atau data impor.",
    "analogy": "Kayak gunting dan lem untuk membentuk teks sesuai kebutuhan.",
    "simpleExample": "Contoh sederhana: pakai ARRAYTOTEXT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ARRAYTOTEXT(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ARRAYTOTEXT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ASC": {
    "description": "Mengolah teks menggunakan fungsi ASC.",
    "simpleLogic": "Masukkan teks atau cell teks, lalu Excel mengambil, membersihkan, memecah, atau menggabungkannya.",
    "useCase": "Dipakai untuk merapikan nama, kode, invoice, email, dan data hasil copy paste.",
    "analogy": "Kayak gunting dan lem untuk data teks.",
    "simpleExample": "Contoh sederhana: pakai ASC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ASC(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ASC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "BAHTTEXT": {
    "description": "Mengolah teks menggunakan fungsi BAHTTEXT.",
    "simpleLogic": "Masukkan teks dan aturan pengolahannya, lalu Excel mengembalikan teks yang sudah diubah.",
    "useCase": "Dipakai untuk merapikan nama, kode, email, invoice, atau data impor.",
    "analogy": "Kayak gunting dan lem untuk membentuk teks sesuai kebutuhan.",
    "simpleExample": "Contoh sederhana: pakai BAHTTEXT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=BAHTTEXT(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan BAHTTEXT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CHAR": {
    "description": "Mengolah teks menggunakan fungsi CHAR.",
    "simpleLogic": "Masukkan teks atau cell teks, lalu Excel mengambil, membersihkan, memecah, atau menggabungkannya.",
    "useCase": "Dipakai untuk merapikan nama, kode, invoice, email, dan data hasil copy paste.",
    "analogy": "Kayak gunting dan lem untuk data teks.",
    "simpleExample": "Contoh sederhana: pakai CHAR saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CHAR(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CHAR. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CLEAN": {
    "description": "Menghapus karakter yang tidak terlihat.",
    "simpleLogic": "Excel membersihkan karakter aneh dari data impor.",
    "useCase": "Saat data dari sistem lain terlihat normal tapi susah dicocokkan.",
    "analogy": "Kayak membersihkan debu tak terlihat di teks.",
    "simpleExample": "Bersihkan karakter non-printing di A2.",
    "exampleFormula": "=CLEAN(A2)",
    "exampleMeaning": "Bersihkan karakter non-printing di A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "CODE": {
    "description": "Mengolah teks menggunakan fungsi CODE.",
    "simpleLogic": "Masukkan teks atau cell teks, lalu Excel mengambil, membersihkan, memecah, atau menggabungkannya.",
    "useCase": "Dipakai untuk merapikan nama, kode, invoice, email, dan data hasil copy paste.",
    "analogy": "Kayak gunting dan lem untuk data teks.",
    "simpleExample": "Contoh sederhana: pakai CODE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=CODE(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan CODE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "CONCAT": {
    "description": "Menggabungkan teks dari beberapa cell.",
    "simpleLogic": "Excel menyambung beberapa potongan teks menjadi satu.",
    "useCase": "Saat ingin gabung nama depan dan belakang.",
    "analogy": "Kayak menyatukan potongan puzzle teks.",
    "simpleExample": "Gabungkan A2, spasi, dan B2.",
    "exampleFormula": "=CONCAT(A2;\" \";B2)",
    "exampleMeaning": "Gabungkan A2, spasi, dan B2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "CONCATENATE": {
    "description": "Menggabungkan beberapa teks menjadi satu.",
    "simpleLogic": "Versi lama untuk menyambung teks.",
    "useCase": "Saat file harus kompatibel dengan Excel lama.",
    "analogy": "Kayak CONCAT versi senior.",
    "simpleExample": "Gabungkan A2 dan B2 dengan spasi.",
    "exampleFormula": "=CONCATENATE(A2;\" \";B2)",
    "exampleMeaning": "Gabungkan A2 dan B2 dengan spasi.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "DBCS": {
    "description": "Mengolah teks menggunakan fungsi DBCS.",
    "simpleLogic": "Masukkan teks atau cell teks, lalu Excel mengambil, membersihkan, memecah, atau menggabungkannya.",
    "useCase": "Dipakai untuk merapikan nama, kode, invoice, email, dan data hasil copy paste.",
    "analogy": "Kayak gunting dan lem untuk data teks.",
    "simpleExample": "Contoh sederhana: pakai DBCS saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DBCS(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DBCS. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "DOLLAR": {
    "description": "Mengolah teks menggunakan fungsi DOLLAR.",
    "simpleLogic": "Masukkan teks atau cell teks, lalu Excel mengambil, membersihkan, memecah, atau menggabungkannya.",
    "useCase": "Dipakai untuk merapikan nama, kode, invoice, email, dan data hasil copy paste.",
    "analogy": "Kayak gunting dan lem untuk data teks.",
    "simpleExample": "Contoh sederhana: pakai DOLLAR saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=DOLLAR(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan DOLLAR. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "EXACT": {
    "description": "Mengolah teks menggunakan fungsi EXACT.",
    "simpleLogic": "Masukkan teks atau cell teks, lalu Excel mengambil, membersihkan, memecah, atau menggabungkannya.",
    "useCase": "Dipakai untuk merapikan nama, kode, invoice, email, dan data hasil copy paste.",
    "analogy": "Kayak gunting dan lem untuk data teks.",
    "simpleExample": "Contoh sederhana: pakai EXACT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=EXACT(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan EXACT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FIND": {
    "description": "Mencari posisi teks dengan case-sensitive.",
    "simpleLogic": "Excel mencari teks persis, huruf besar kecil berpengaruh.",
    "useCase": "Saat perlu mencari posisi kode yang harus sama persis.",
    "analogy": "Kayak mencari kata dengan kaca pembesar yang sensitif huruf besar kecil.",
    "simpleExample": "Cari posisi tanda strip di A2.",
    "exampleFormula": "=FIND(\"-\";A2)",
    "exampleMeaning": "Cari posisi tanda strip di A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "FINDB": {
    "description": "Mengolah teks menggunakan fungsi FINDB.",
    "simpleLogic": "Masukkan teks dan aturan pengolahannya, lalu Excel mengembalikan teks yang sudah diubah.",
    "useCase": "Dipakai untuk merapikan nama, kode, email, invoice, atau data impor.",
    "analogy": "Kayak gunting dan lem untuk membentuk teks sesuai kebutuhan.",
    "simpleExample": "Contoh sederhana: pakai FINDB saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FINDB(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FINDB. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FIXED": {
    "description": "Mengolah teks menggunakan fungsi FIXED.",
    "simpleLogic": "Masukkan teks atau cell teks, lalu Excel mengambil, membersihkan, memecah, atau menggabungkannya.",
    "useCase": "Dipakai untuk merapikan nama, kode, invoice, email, dan data hasil copy paste.",
    "analogy": "Kayak gunting dan lem untuk data teks.",
    "simpleExample": "Contoh sederhana: pakai FIXED saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FIXED(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FIXED. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "LEFT": {
    "description": "Mengambil karakter dari kiri teks.",
    "simpleLogic": "Tentukan teks dan jumlah karakter dari sisi kiri.",
    "useCase": "Saat ingin ambil kode awal dari nomor invoice.",
    "analogy": "Kayak memotong bagian depan teks.",
    "simpleExample": "Ambil 3 karakter pertama dari A2.",
    "exampleFormula": "=LEFT(A2;3)",
    "exampleMeaning": "Ambil 3 karakter pertama dari A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "LEFTB": {
    "description": "Mengolah teks menggunakan fungsi LEFTB.",
    "simpleLogic": "Masukkan teks dan aturan pengolahannya, lalu Excel mengembalikan teks yang sudah diubah.",
    "useCase": "Dipakai untuk merapikan nama, kode, email, invoice, atau data impor.",
    "analogy": "Kayak gunting dan lem untuk membentuk teks sesuai kebutuhan.",
    "simpleExample": "Contoh sederhana: pakai LEFTB saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=LEFTB(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan LEFTB. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "LEN": {
    "description": "Menghitung jumlah karakter teks.",
    "simpleLogic": "Excel menghitung semua karakter termasuk spasi.",
    "useCase": "Saat ingin cek panjang kode atau nama.",
    "analogy": "Kayak menghitung huruf dalam satu kalimat.",
    "simpleExample": "Hitung jumlah karakter di A2.",
    "exampleFormula": "=LEN(A2)",
    "exampleMeaning": "Hitung jumlah karakter di A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "LENB": {
    "description": "Mengolah teks menggunakan fungsi LENB.",
    "simpleLogic": "Masukkan teks dan aturan pengolahannya, lalu Excel mengembalikan teks yang sudah diubah.",
    "useCase": "Dipakai untuk merapikan nama, kode, email, invoice, atau data impor.",
    "analogy": "Kayak gunting dan lem untuk membentuk teks sesuai kebutuhan.",
    "simpleExample": "Contoh sederhana: pakai LENB saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=LENB(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan LENB. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "LOWER": {
    "description": "Mengubah teks menjadi huruf kecil.",
    "simpleLogic": "Semua huruf dibuat lowercase.",
    "useCase": "Saat ingin standarisasi email atau kode.",
    "analogy": "Kayak menyuruh semua huruf “pelan-pelan”, jadi kecil semua.",
    "simpleExample": "Ubah isi A2 menjadi huruf kecil.",
    "exampleFormula": "=LOWER(A2)",
    "exampleMeaning": "Ubah isi A2 menjadi huruf kecil.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "MID": {
    "description": "Mengambil karakter dari tengah teks.",
    "simpleLogic": "Tentukan teks, posisi mulai, dan jumlah karakter.",
    "useCase": "Saat ingin ambil kode yang ada di tengah invoice.",
    "analogy": "Kayak mengambil potongan teks dari posisi tertentu.",
    "simpleExample": "Ambil 3 karakter mulai dari karakter ke-4.",
    "exampleFormula": "=MID(A2;4;3)",
    "exampleMeaning": "Ambil 3 karakter mulai dari karakter ke-4.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "MIDB": {
    "description": "Mengolah teks menggunakan fungsi MIDB.",
    "simpleLogic": "Masukkan teks dan aturan pengolahannya, lalu Excel mengembalikan teks yang sudah diubah.",
    "useCase": "Dipakai untuk merapikan nama, kode, email, invoice, atau data impor.",
    "analogy": "Kayak gunting dan lem untuk membentuk teks sesuai kebutuhan.",
    "simpleExample": "Contoh sederhana: pakai MIDB saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=MIDB(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan MIDB. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "NUMBERVALUE": {
    "description": "Mengubah teks angka dengan aturan separator tertentu menjadi angka.",
    "simpleLogic": "Kamu bisa tentukan pemisah desimal dan ribuan.",
    "useCase": "Saat data angka dari negara lain beda format separator.",
    "analogy": "Kayak penerjemah format angka internasional.",
    "simpleExample": "Ubah teks angka dengan koma desimal menjadi angka asli.",
    "exampleFormula": "=NUMBERVALUE(A2;\",\";\".\")",
    "exampleMeaning": "Ubah teks angka dengan koma desimal menjadi angka asli.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "PHONETIC": {
    "description": "Mengolah teks menggunakan fungsi PHONETIC.",
    "simpleLogic": "Masukkan teks atau cell teks, lalu Excel mengambil, membersihkan, memecah, atau menggabungkannya.",
    "useCase": "Dipakai untuk merapikan nama, kode, invoice, email, dan data hasil copy paste.",
    "analogy": "Kayak gunting dan lem untuk data teks.",
    "simpleExample": "Contoh sederhana: pakai PHONETIC saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=PHONETIC(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan PHONETIC. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "PROPER": {
    "description": "Mengubah awal kata menjadi huruf besar.",
    "simpleLogic": "Setiap kata dibuat seperti format nama orang.",
    "useCase": "Saat ingin merapikan nama pelanggan.",
    "analogy": "Kayak merapikan nama di undangan.",
    "simpleExample": "Ubah teks A2 menjadi kapital di awal kata.",
    "exampleFormula": "=PROPER(A2)",
    "exampleMeaning": "Ubah teks A2 menjadi kapital di awal kata.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "REPLACE": {
    "description": "Mengganti teks berdasarkan posisi.",
    "simpleLogic": "Excel mengganti karakter mulai dari posisi tertentu.",
    "useCase": "Saat ingin masking nomor HP atau ubah bagian kode.",
    "analogy": "Kayak mengganti huruf dari posisi ke sekian.",
    "simpleExample": "Mulai karakter ke-4, ganti 3 karakter menjadi XXX.",
    "exampleFormula": "=REPLACE(A2;4;3;\"XXX\")",
    "exampleMeaning": "Mulai karakter ke-4, ganti 3 karakter menjadi XXX.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "REPLACEB": {
    "description": "Mengolah teks menggunakan fungsi REPLACEB.",
    "simpleLogic": "Masukkan teks dan aturan pengolahannya, lalu Excel mengembalikan teks yang sudah diubah.",
    "useCase": "Dipakai untuk merapikan nama, kode, email, invoice, atau data impor.",
    "analogy": "Kayak gunting dan lem untuk membentuk teks sesuai kebutuhan.",
    "simpleExample": "Contoh sederhana: pakai REPLACEB saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=REPLACEB(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan REPLACEB. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "REPT": {
    "description": "Mengolah teks menggunakan fungsi REPT.",
    "simpleLogic": "Masukkan teks atau cell teks, lalu Excel mengambil, membersihkan, memecah, atau menggabungkannya.",
    "useCase": "Dipakai untuk merapikan nama, kode, invoice, email, dan data hasil copy paste.",
    "analogy": "Kayak gunting dan lem untuk data teks.",
    "simpleExample": "Contoh sederhana: pakai REPT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=REPT(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan REPT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "RIGHT": {
    "description": "Mengambil karakter dari kanan teks.",
    "simpleLogic": "Tentukan teks dan jumlah karakter dari sisi kanan.",
    "useCase": "Saat ingin ambil 4 digit terakhir kode.",
    "analogy": "Kayak memotong bagian belakang teks.",
    "simpleExample": "Ambil 4 karakter terakhir dari A2.",
    "exampleFormula": "=RIGHT(A2;4)",
    "exampleMeaning": "Ambil 4 karakter terakhir dari A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "RIGHTB": {
    "description": "Mengolah teks menggunakan fungsi RIGHTB.",
    "simpleLogic": "Masukkan teks dan aturan pengolahannya, lalu Excel mengembalikan teks yang sudah diubah.",
    "useCase": "Dipakai untuk merapikan nama, kode, email, invoice, atau data impor.",
    "analogy": "Kayak gunting dan lem untuk membentuk teks sesuai kebutuhan.",
    "simpleExample": "Contoh sederhana: pakai RIGHTB saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=RIGHTB(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan RIGHTB. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SEARCH": {
    "description": "Mencari posisi teks tanpa peduli huruf besar kecil.",
    "simpleLogic": "Excel mencari teks tapi tidak terlalu sensitif ke kapital.",
    "useCase": "Saat ingin cari kata dalam teks bebas.",
    "analogy": "Kayak cari kata di chat, huruf besar kecil tidak masalah.",
    "simpleExample": "Cari posisi kata jakarta di A2.",
    "exampleFormula": "=SEARCH(\"jakarta\";A2)",
    "exampleMeaning": "Cari posisi kata jakarta di A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "SEARCHB": {
    "description": "Mengolah teks menggunakan fungsi SEARCHB.",
    "simpleLogic": "Masukkan teks dan aturan pengolahannya, lalu Excel mengembalikan teks yang sudah diubah.",
    "useCase": "Dipakai untuk merapikan nama, kode, email, invoice, atau data impor.",
    "analogy": "Kayak gunting dan lem untuk membentuk teks sesuai kebutuhan.",
    "simpleExample": "Contoh sederhana: pakai SEARCHB saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=SEARCHB(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan SEARCHB. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "SUBSTITUTE": {
    "description": "Mengganti teks tertentu dengan teks baru.",
    "simpleLogic": "Excel mencari teks lama lalu menggantinya.",
    "useCase": "Saat ingin ubah kata lama menjadi kata baru.",
    "analogy": "Kayak fitur find and replace.",
    "simpleExample": "Ganti kata lama di A2 menjadi baru.",
    "exampleFormula": "=SUBSTITUTE(A2;\"lama\";\"baru\")",
    "exampleMeaning": "Ganti kata lama di A2 menjadi baru.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "T": {
    "description": "Mengolah teks menggunakan fungsi T.",
    "simpleLogic": "Masukkan teks atau cell teks, lalu Excel mengambil, membersihkan, memecah, atau menggabungkannya.",
    "useCase": "Dipakai untuk merapikan nama, kode, invoice, email, dan data hasil copy paste.",
    "analogy": "Kayak gunting dan lem untuk data teks.",
    "simpleExample": "Contoh sederhana: pakai T saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=T(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan T. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "TEXT": {
    "description": "Mengubah angka/tanggal menjadi teks dengan format tertentu.",
    "simpleLogic": "Nilai tetap diambil, tapi tampilannya diatur sebagai teks.",
    "useCase": "Saat ingin format tanggal, rupiah, atau kode.",
    "analogy": "Kayak memberi baju format ke angka mentah.",
    "simpleExample": "Ubah tanggal di A2 menjadi format hari bulan tahun.",
    "exampleFormula": "=TEXT(A2;\"dd mmmm yyyy\")",
    "exampleMeaning": "Ubah tanggal di A2 menjadi format hari bulan tahun.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "TEXTAFTER": {
    "description": "Mengambil teks setelah pemisah.",
    "simpleLogic": "Excel mencari delimiter lalu mengambil bagian kanan.",
    "useCase": "Saat ingin ambil domain setelah @ di email.",
    "analogy": "Kayak ambil bagian setelah pagar pembatas.",
    "simpleExample": "Ambil teks setelah tanda @.",
    "exampleFormula": "=TEXTAFTER(A2;\"@\")",
    "exampleMeaning": "Ambil teks setelah tanda @.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "TEXTBEFORE": {
    "description": "Mengambil teks sebelum pemisah.",
    "simpleLogic": "Excel mencari delimiter lalu mengambil bagian kiri.",
    "useCase": "Saat ingin ambil username sebelum @ di email.",
    "analogy": "Kayak ambil bagian sebelum pagar pembatas.",
    "simpleExample": "Ambil teks sebelum tanda @.",
    "exampleFormula": "=TEXTBEFORE(A2;\"@\")",
    "exampleMeaning": "Ambil teks sebelum tanda @.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "TEXTJOIN": {
    "description": "Menggabungkan teks dengan pemisah.",
    "simpleLogic": "Kamu tentukan delimiter dan apakah cell kosong diabaikan.",
    "useCase": "Saat ingin gabung banyak tag atau nama dengan koma.",
    "analogy": "Kayak membuat daftar belanja dalam satu kalimat.",
    "simpleExample": "Gabungkan A2:A5 dengan koma dan abaikan yang kosong.",
    "exampleFormula": "=TEXTJOIN(\", \";TRUE;A2:A5)",
    "exampleMeaning": "Gabungkan A2:A5 dengan koma dan abaikan yang kosong.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "TRIM": {
    "description": "Menghapus spasi berlebih.",
    "simpleLogic": "Spasi depan, belakang, dan dobel di tengah dirapikan.",
    "useCase": "Saat data hasil copy paste punya spasi berantakan.",
    "analogy": "Kayak merapikan teks yang kebanyakan jarak.",
    "simpleExample": "Bersihkan spasi berlebih di A2.",
    "exampleFormula": "=TRIM(A2)",
    "exampleMeaning": "Bersihkan spasi berlebih di A2.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "UNICHAR": {
    "description": "Mengolah teks menggunakan fungsi UNICHAR.",
    "simpleLogic": "Masukkan teks atau cell teks, lalu Excel mengambil, membersihkan, memecah, atau menggabungkannya.",
    "useCase": "Dipakai untuk merapikan nama, kode, invoice, email, dan data hasil copy paste.",
    "analogy": "Kayak gunting dan lem untuk data teks.",
    "simpleExample": "Contoh sederhana: pakai UNICHAR saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=UNICHAR(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan UNICHAR. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "UNICODE": {
    "description": "Mengolah teks menggunakan fungsi UNICODE.",
    "simpleLogic": "Masukkan teks atau cell teks, lalu Excel mengambil, membersihkan, memecah, atau menggabungkannya.",
    "useCase": "Dipakai untuk merapikan nama, kode, invoice, email, dan data hasil copy paste.",
    "analogy": "Kayak gunting dan lem untuk data teks.",
    "simpleExample": "Contoh sederhana: pakai UNICODE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=UNICODE(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan UNICODE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "UPPER": {
    "description": "Mengubah teks menjadi huruf besar.",
    "simpleLogic": "Semua huruf dibuat uppercase.",
    "useCase": "Saat ingin standarisasi kode produk.",
    "analogy": "Kayak menyuruh teks teriak, jadi kapital semua.",
    "simpleExample": "Ubah isi A2 menjadi huruf besar.",
    "exampleFormula": "=UPPER(A2)",
    "exampleMeaning": "Ubah isi A2 menjadi huruf besar.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "VALUE": {
    "description": "Mengubah angka yang berbentuk teks menjadi angka asli.",
    "simpleLogic": "Excel membaca teks angka agar bisa dihitung.",
    "useCase": "Saat angka hasil copy paste tidak bisa dijumlahkan.",
    "analogy": "Kayak mengubah label harga palsu menjadi angka yang bisa dihitung.",
    "simpleExample": "Ubah teks angka di A2 menjadi angka.",
    "exampleFormula": "=VALUE(A2)",
    "exampleMeaning": "Ubah teks angka di A2 menjadi angka.",
    "beginnerTip": "Baca soalnya pelan-pelan, tentukan range yang dicek, lalu baru tulis rumusnya."
  },
  "VALUETOTEXT": {
    "description": "Mengolah teks menggunakan fungsi VALUETOTEXT.",
    "simpleLogic": "Masukkan teks dan aturan pengolahannya, lalu Excel mengembalikan teks yang sudah diubah.",
    "useCase": "Dipakai untuk merapikan nama, kode, email, invoice, atau data impor.",
    "analogy": "Kayak gunting dan lem untuk membentuk teks sesuai kebutuhan.",
    "simpleExample": "Contoh sederhana: pakai VALUETOTEXT saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=VALUETOTEXT(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan VALUETOTEXT. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "ENCODEURL": {
    "description": "Mengolah data web, URL, atau XML memakai fungsi ENCODEURL.",
    "simpleLogic": "Masukkan URL atau XML, lalu Excel mengambil konten atau bagian tertentu.",
    "useCase": "Dipakai untuk koneksi web sederhana dan parsing XML.",
    "analogy": "Kayak kurir yang mengambil teks dari alamat web.",
    "simpleExample": "Contoh sederhana: pakai ENCODEURL saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=ENCODEURL(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan ENCODEURL. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "FILTERXML": {
    "description": "Mengolah data web, URL, atau XML memakai fungsi FILTERXML.",
    "simpleLogic": "Masukkan URL atau XML, lalu Excel mengambil konten atau bagian tertentu.",
    "useCase": "Dipakai untuk koneksi web sederhana dan parsing XML.",
    "analogy": "Kayak kurir yang mengambil teks dari alamat web.",
    "simpleExample": "Contoh sederhana: pakai FILTERXML saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=FILTERXML(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan FILTERXML. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  },
  "WEBSERVICE": {
    "description": "Mengolah data web, URL, atau XML memakai fungsi WEBSERVICE.",
    "simpleLogic": "Masukkan URL atau XML, lalu Excel mengambil konten atau bagian tertentu.",
    "useCase": "Dipakai untuk koneksi web sederhana dan parsing XML.",
    "analogy": "Kayak kurir yang mengambil teks dari alamat web.",
    "simpleExample": "Contoh sederhana: pakai WEBSERVICE saat kamu punya data di spreadsheet dan ingin hasil yang sesuai fungsi ini.",
    "exampleFormula": "=WEBSERVICE(A2)",
    "exampleMeaning": "Formula ini menunjukkan pola dasar penggunaan WEBSERVICE. Sesuaikan range, cell, dan argumennya dengan tabel latihan.",
    "beginnerTip": "Jangan mulai dari hafalan. Mulai dari pertanyaan: data mana yang dicek, syaratnya apa, dan hasil apa yang ingin keluar."
  }
};

export function getFormulaLearningContent(formula = {}) {
  if (!formula) return {};
  return formulaLearningContent[formula.name] || formulaLearningContent[formula.id] || {};
}
