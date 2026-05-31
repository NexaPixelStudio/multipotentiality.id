// Konten belajar Formula Coach.
// Semua penjelasan sengaja dibuat dengan bahasa awam: fungsi, logika, analogi, contoh rumus, dan maksud contohnya.

export const formulaLearningContent = {
  "DETECTLANGUAGE": {
    "description": "Mendeteksi bahasa dari teks.",
    "simpleLogic": "Excel membaca teks lalu menebak bahasa yang dipakai.",
    "useCase": "Untuk data multi bahasa atau teks dari banyak negara.",
    "analogy": "Kayak petugas yang melihat kalimat lalu menebak ini bahasa Indonesia, Inggris, atau lainnya.",
    "simpleExample": "Mendeteksi bahasa dari teks di A2.",
    "exampleFormula": "=DETECTLANGUAGE(A2)",
    "exampleMeaning": "Mendeteksi bahasa dari teks di A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "GROUPBY": {
    "description": "Membuat formula yang lebih modern dan fleksibel.",
    "simpleLogic": "Excel menggabungkan beberapa input, aturan, atau LAMBDA agar rumus bisa dipakai ulang.",
    "useCase": "Untuk dashboard, automation, dan model formula profesional.",
    "analogy": "Kayak bikin alat kecil sendiri di dalam Excel agar kerjaan berulang jadi otomatis.",
    "simpleExample": "Contoh pola GROUPBY advanced. Sesuaikan argumen dengan kebutuhan.",
    "exampleFormula": "=GROUPBY(A2:A10)",
    "exampleMeaning": "Contoh pola GROUPBY advanced. Sesuaikan argumen dengan kebutuhan.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "LAMBDA": {
    "description": "Membuat function custom sendiri.",
    "simpleLogic": "Kamu tentukan input dan cara hitungnya, lalu rumus itu bisa dipakai seperti function buatan sendiri.",
    "useCase": "Untuk rumus yang sering dipakai ulang.",
    "analogy": "Kayak bikin mesin kecil sendiri: masukkan angka, mesin mengeluarkan hasil sesuai aturan kamu.",
    "simpleExample": "Buat function yang mengalikan x dengan 10, lalu jalankan untuk angka 5.",
    "exampleFormula": "=LAMBDA(x;x*10)(5)",
    "exampleMeaning": "Buat function yang mengalikan x dengan 10, lalu jalankan untuk angka 5.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "LET": {
    "description": "Memberi nama sementara pada bagian rumus.",
    "simpleLogic": "Kamu bisa menyimpan bagian rumus dengan nama, lalu memakainya lagi di formula yang sama.",
    "useCase": "Untuk membuat rumus panjang jadi lebih rapi dan mudah dibaca.",
    "analogy": "Kayak memberi nama panggilan: daripada menyebut kalimat panjang berulang-ulang, cukup panggil namanya.",
    "simpleExample": "Simpan SUM(E2:E16) sebagai total, lalu bagi total itu dengan 10.",
    "exampleFormula": "=LET(total;SUM(E2:E16);total/10)",
    "exampleMeaning": "Simpan SUM(E2:E16) sebagai total, lalu bagi total itu dengan 10.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PERCENTOF": {
    "description": "Membuat formula yang lebih modern dan fleksibel.",
    "simpleLogic": "Excel menggabungkan beberapa input, aturan, atau LAMBDA agar rumus bisa dipakai ulang.",
    "useCase": "Untuk dashboard, automation, dan model formula profesional.",
    "analogy": "Kayak bikin alat kecil sendiri di dalam Excel agar kerjaan berulang jadi otomatis.",
    "simpleExample": "Contoh pola PERCENTOF advanced. Sesuaikan argumen dengan kebutuhan.",
    "exampleFormula": "=PERCENTOF(A2:A10)",
    "exampleMeaning": "Contoh pola PERCENTOF advanced. Sesuaikan argumen dengan kebutuhan.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PIVOTBY": {
    "description": "Membuat formula yang lebih modern dan fleksibel.",
    "simpleLogic": "Excel menggabungkan beberapa input, aturan, atau LAMBDA agar rumus bisa dipakai ulang.",
    "useCase": "Untuk dashboard, automation, dan model formula profesional.",
    "analogy": "Kayak bikin alat kecil sendiri di dalam Excel agar kerjaan berulang jadi otomatis.",
    "simpleExample": "Contoh pola PIVOTBY advanced. Sesuaikan argumen dengan kebutuhan.",
    "exampleFormula": "=PIVOTBY(A2:A10)",
    "exampleMeaning": "Contoh pola PIVOTBY advanced. Sesuaikan argumen dengan kebutuhan.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "REGEXEXTRACT": {
    "description": "Mengambil bagian teks yang cocok pola memakai pola regex.",
    "simpleLogic": "Excel membaca teks, mencari pola tertentu, lalu menjalankan aksi REGEXEXTRACT.",
    "useCase": "Untuk email, kode produk, invoice, atau teks yang polanya konsisten.",
    "analogy": "Kayak detektif teks: bukan mencari kata biasa, tapi mencari pola. ",
    "simpleExample": "Menggunakan pola angka untuk memproses teks di A2 dengan REGEXEXTRACT.",
    "exampleFormula": "=REGEXEXTRACT(A2;\"[0-9]+\")",
    "exampleMeaning": "Menggunakan pola angka untuk memproses teks di A2 dengan REGEXEXTRACT.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "REGEXREPLACE": {
    "description": "Mengganti bagian teks yang cocok pola memakai pola regex.",
    "simpleLogic": "Excel membaca teks, mencari pola tertentu, lalu menjalankan aksi REGEXREPLACE.",
    "useCase": "Untuk email, kode produk, invoice, atau teks yang polanya konsisten.",
    "analogy": "Kayak detektif teks: bukan mencari kata biasa, tapi mencari pola. ",
    "simpleExample": "Menggunakan pola angka untuk memproses teks di A2 dengan REGEXREPLACE.",
    "exampleFormula": "=REGEXREPLACE(A2;\"[0-9]+\")",
    "exampleMeaning": "Menggunakan pola angka untuk memproses teks di A2 dengan REGEXREPLACE.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "REGEXTEST": {
    "description": "Mengecek apakah teks cocok pola memakai pola regex.",
    "simpleLogic": "Excel membaca teks, mencari pola tertentu, lalu menjalankan aksi REGEXTEST.",
    "useCase": "Untuk email, kode produk, invoice, atau teks yang polanya konsisten.",
    "analogy": "Kayak detektif teks: bukan mencari kata biasa, tapi mencari pola. ",
    "simpleExample": "Menggunakan pola angka untuk memproses teks di A2 dengan REGEXTEST.",
    "exampleFormula": "=REGEXTEST(A2;\"[0-9]+\")",
    "exampleMeaning": "Menggunakan pola angka untuk memproses teks di A2 dengan REGEXTEST.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TRANSLATE": {
    "description": "Menerjemahkan teks.",
    "simpleLogic": "Excel mengambil teks sumber lalu mengubahnya ke bahasa target.",
    "useCase": "Untuk menerjemahkan data teks sederhana di spreadsheet.",
    "analogy": "Kayak kamus otomatis di dalam Excel.",
    "simpleExample": "Terjemahkan teks A2 dari Indonesia ke English.",
    "exampleFormula": "=TRANSLATE(A2;\"id\";\"en\")",
    "exampleMeaning": "Terjemahkan teks A2 dari Indonesia ke English.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "AVERAGE": {
    "description": "Menghitung rata-rata angka.",
    "simpleLogic": "Excel menjumlahkan semua angka, lalu membaginya dengan jumlah data angka.",
    "useCase": "Untuk rata-rata nilai, rata-rata penjualan, rata-rata harga, atau rata-rata durasi.",
    "analogy": "Kayak cari nilai rata-rata kelas. Semua nilai dijumlahkan lalu dibagi jumlah siswa.",
    "simpleExample": "Menghitung rata-rata angka di D2:D16.",
    "exampleFormula": "=AVERAGE(D2:D16)",
    "exampleMeaning": "Menghitung rata-rata angka di D2:D16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COUNT": {
    "description": "Menghitung jumlah cell yang berisi angka.",
    "simpleLogic": "Excel melihat range, lalu hanya menghitung cell yang isinya angka. Teks tidak dihitung.",
    "useCase": "Untuk menghitung jumlah nilai, qty, harga, atau data numerik yang terisi.",
    "analogy": "Kayak menghitung kotak yang isinya angka saja. Kotak berisi tulisan dilewati.",
    "simpleExample": "Menghitung berapa cell angka di D2:D16.",
    "exampleFormula": "=COUNT(D2:D16)",
    "exampleMeaning": "Menghitung berapa cell angka di D2:D16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COUNTA": {
    "description": "Menghitung cell yang terisi apa pun.",
    "simpleLogic": "Excel menghitung cell yang ada isinya, baik teks, angka, tanggal, atau simbol.",
    "useCase": "Untuk menghitung jumlah baris data yang sudah diisi.",
    "analogy": "Kayak absen kelas: siapa pun yang hadir dihitung, tidak peduli nilainya berapa.",
    "simpleExample": "Menghitung berapa cell yang terisi di A2:A16.",
    "exampleFormula": "=COUNTA(A2:A16)",
    "exampleMeaning": "Menghitung berapa cell yang terisi di A2:A16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COUNTBLANK": {
    "description": "Menghitung cell kosong.",
    "simpleLogic": "Excel mencari cell yang belum ada isinya.",
    "useCase": "Untuk mengecek data yang belum lengkap.",
    "analogy": "Kayak mencari bangku kosong di kelas.",
    "simpleExample": "Menghitung berapa cell kosong di A2:A16.",
    "exampleFormula": "=COUNTBLANK(A2:A16)",
    "exampleMeaning": "Menghitung berapa cell kosong di A2:A16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "LARGE": {
    "description": "Mengambil angka terbesar urutan tertentu.",
    "simpleLogic": "Kamu tentukan mau angka terbesar ke berapa.",
    "useCase": "Untuk mencari penjualan terbesar ke-2 atau nilai tertinggi ke-3.",
    "analogy": "Kayak mencari juara 2, bukan juara 1.",
    "simpleExample": "Mengambil angka terbesar ke-2 dari D2:D16.",
    "exampleFormula": "=LARGE(D2:D16;2)",
    "exampleMeaning": "Mengambil angka terbesar ke-2 dari D2:D16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MAX": {
    "description": "Mengambil angka paling besar.",
    "simpleLogic": "Excel melihat semua angka, lalu memilih nilai tertinggi.",
    "useCase": "Untuk nilai tertinggi, stok terbesar, atau penjualan terbesar.",
    "analogy": "Kayak mencari juara 1 dari daftar nilai.",
    "simpleExample": "Mengambil angka terbesar dari D2:D16.",
    "exampleFormula": "=MAX(D2:D16)",
    "exampleMeaning": "Mengambil angka terbesar dari D2:D16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MIN": {
    "description": "Mengambil angka paling kecil.",
    "simpleLogic": "Excel melihat semua angka, lalu memilih nilai terendah.",
    "useCase": "Untuk nilai terendah, harga termurah, stok paling sedikit, atau durasi paling cepat.",
    "analogy": "Kayak mencari juara dengan waktu lari paling cepat.",
    "simpleExample": "Mengambil angka terkecil dari D2:D16.",
    "exampleFormula": "=MIN(D2:D16)",
    "exampleMeaning": "Mengambil angka terkecil dari D2:D16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SMALL": {
    "description": "Mengambil angka terkecil urutan tertentu.",
    "simpleLogic": "Kamu tentukan mau angka terkecil ke berapa.",
    "useCase": "Untuk mencari harga termurah ke-2 atau nilai terendah ke-3.",
    "analogy": "Kayak mencari posisi kedua dari bawah.",
    "simpleExample": "Mengambil angka terkecil ke-2 dari D2:D16.",
    "exampleFormula": "=SMALL(D2:D16;2)",
    "exampleMeaning": "Mengambil angka terkecil ke-2 dari D2:D16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SUM": {
    "description": "Menjumlahkan angka.",
    "simpleLogic": "Ambil semua angka yang dipilih, lalu Excel menjumlahkannya.",
    "useCase": "Untuk total qty, total penjualan, total nilai, atau total biaya.",
    "analogy": "Kayak menghitung total belanja di kasir. Semua harga barang dikumpulkan lalu dijumlahkan.",
    "simpleExample": "Menjumlahkan semua angka dari E2 sampai E16.",
    "exampleFormula": "=SUM(E2:E16)",
    "exampleMeaning": "Menjumlahkan semua angka dari E2 sampai E16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BETADIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan BETADIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=BETADIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan BETADIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BETAINV": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan BETAINV compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=BETAINV(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan BETAINV compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BINOMDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan BINOMDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=BINOMDIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan BINOMDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CHIDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan CHIDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=CHIDIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan CHIDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CHIINV": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan CHIINV compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=CHIINV(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan CHIINV compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CHITEST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan CHITEST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=CHITEST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan CHITEST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CONFIDENCE": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan CONFIDENCE compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=CONFIDENCE(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan CONFIDENCE compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COVAR": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan COVAR compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=COVAR(D2:D16)",
    "exampleMeaning": "Contoh pola penggunaan COVAR compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CRITBINOM": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan CRITBINOM compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=CRITBINOM(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan CRITBINOM compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "EXPONDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan EXPONDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=EXPONDIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan EXPONDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan FDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=FDIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan FDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FINV": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan FINV compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=FINV(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan FINV compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FTEST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan FTEST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=FTEST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan FTEST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "GAMMADIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan GAMMADIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=GAMMADIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan GAMMADIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "GAMMAINV": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan GAMMAINV compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=GAMMAINV(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan GAMMAINV compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "HYPGEOMDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan HYPGEOMDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=HYPGEOMDIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan HYPGEOMDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "LOGINV": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan LOGINV compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=LOGINV(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan LOGINV compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "LOGNORMDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan LOGNORMDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=LOGNORMDIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan LOGNORMDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MODE": {
    "description": "Mengambil nilai yang paling sering muncul.",
    "simpleLogic": "Excel mencari angka yang frekuensinya paling banyak.",
    "useCase": "Untuk melihat pilihan atau nilai yang paling umum.",
    "analogy": "Kayak mencari jawaban yang paling banyak dipilih.",
    "simpleExample": "Mengambil angka yang paling sering muncul di D2:D16.",
    "exampleFormula": "=MODE(D2:D16)",
    "exampleMeaning": "Mengambil angka yang paling sering muncul di D2:D16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "NEGBINOMDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan NEGBINOMDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=NEGBINOMDIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan NEGBINOMDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "NORMDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan NORMDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=NORMDIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan NORMDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "NORMINV": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan NORMINV compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=NORMINV(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan NORMINV compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "NORMSDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan NORMSDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=NORMSDIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan NORMSDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "NORMSINV": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan NORMSINV compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=NORMSINV(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan NORMSINV compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PERCENTILE": {
    "description": "Mengambil nilai pada posisi persentase tertentu.",
    "simpleLogic": "Excel mengurutkan data lalu mengambil nilai di posisi persen tertentu.",
    "useCase": "Untuk batas top 25%, median, atau threshold.",
    "analogy": "Kayak mencari nilai yang berada di posisi 90% dari antrean data.",
    "simpleExample": "Ambil nilai percentile 90% dari D2:D16.",
    "exampleFormula": "=PERCENTILE(D2:D16;0.9)",
    "exampleMeaning": "Ambil nilai percentile 90% dari D2:D16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PERCENTRANK": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan PERCENTRANK compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=PERCENTRANK(D2:D16)",
    "exampleMeaning": "Contoh pola penggunaan PERCENTRANK compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "POISSON": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan POISSON compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=POISSON(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan POISSON compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "QUARTILE": {
    "description": "Membagi data menjadi 4 bagian.",
    "simpleLogic": "Excel mengambil batas Q1, Q2, atau Q3 dari data.",
    "useCase": "Untuk melihat sebaran data per kuartal statistik.",
    "analogy": "Kayak membagi antrean nilai menjadi empat kelompok.",
    "simpleExample": "Ambil kuartil pertama dari D2:D16.",
    "exampleFormula": "=QUARTILE(D2:D16;1)",
    "exampleMeaning": "Ambil kuartil pertama dari D2:D16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "RANK": {
    "description": "Memberi peringkat angka.",
    "simpleLogic": "Excel melihat posisi sebuah angka dibanding angka lain.",
    "useCase": "Untuk ranking nilai, sales, atau performa.",
    "analogy": "Kayak menentukan peringkat siswa dari daftar nilai.",
    "simpleExample": "Cari peringkat D2 dari D2:D16, angka terbesar ranking 1.",
    "exampleFormula": "=RANK(D2;D2:D16;0)",
    "exampleMeaning": "Cari peringkat D2 dari D2:D16, angka terbesar ranking 1.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "STDEV": {
    "description": "Menghitung standar deviasi sampel.",
    "simpleLogic": "Excel mengukur seberapa menyebar data dari rata-ratanya.",
    "useCase": "Untuk analisis sampel data.",
    "analogy": "Kayak melihat apakah nilai kelas rapat atau sangat menyebar.",
    "simpleExample": "Contoh pola STDEV. Prinsipnya mirip STDEV.S, tapi nama function dan detail argumennya mengikuti syntax STDEV.",
    "exampleFormula": "=STDEV(D2:D16)",
    "exampleMeaning": "Contoh pola STDEV. Prinsipnya mirip STDEV.S, tapi nama function dan detail argumennya mengikuti syntax STDEV.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "STDEVP": {
    "description": "Menghitung standar deviasi populasi.",
    "simpleLogic": "Excel mengukur sebaran data jika datanya dianggap seluruh populasi.",
    "useCase": "Untuk analisis data lengkap, bukan sampel.",
    "analogy": "Kayak mengukur variasi semua cabang, bukan sebagian cabang.",
    "simpleExample": "Contoh pola STDEVP. Prinsipnya mirip STDEV.P, tapi nama function dan detail argumennya mengikuti syntax STDEVP.",
    "exampleFormula": "=STDEVP(D2:D16)",
    "exampleMeaning": "Contoh pola STDEVP. Prinsipnya mirip STDEV.P, tapi nama function dan detail argumennya mengikuti syntax STDEVP.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TDIST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan TDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=TDIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan TDIST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TINV": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan TINV compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=TINV(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan TINV compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TTEST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan TTEST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=TTEST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan TTEST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "VAR": {
    "description": "Menghitung variance sampel.",
    "simpleLogic": "Excel mengukur sebaran data dalam bentuk kuadrat selisih dari rata-rata.",
    "useCase": "Untuk analisis statistik sampel.",
    "analogy": "Kayak mengukur seberapa jauh data menyebar dari tengahnya.",
    "simpleExample": "Contoh pola VAR. Prinsipnya mirip VAR.S, tapi nama function dan detail argumennya mengikuti syntax VAR.",
    "exampleFormula": "=VAR(D2:D16)",
    "exampleMeaning": "Contoh pola VAR. Prinsipnya mirip VAR.S, tapi nama function dan detail argumennya mengikuti syntax VAR.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "VARP": {
    "description": "Menghitung variance populasi.",
    "simpleLogic": "Excel mengukur sebaran data jika datanya seluruh populasi.",
    "useCase": "Untuk analisis statistik data lengkap.",
    "analogy": "Kayak mengukur penyebaran semua data, bukan contoh data saja.",
    "simpleExample": "Contoh pola VARP. Prinsipnya mirip VAR.P, tapi nama function dan detail argumennya mengikuti syntax VARP.",
    "exampleFormula": "=VARP(D2:D16)",
    "exampleMeaning": "Contoh pola VARP. Prinsipnya mirip VAR.P, tapi nama function dan detail argumennya mengikuti syntax VARP.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "WEIBULL": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan WEIBULL compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=WEIBULL(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan WEIBULL compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ZTEST": {
    "description": "Fungsi versi lama yang masih disediakan agar file Excel lama tetap bisa jalan.",
    "simpleLogic": "Excel menjalankan perhitungan statistik versi lama. Untuk file baru, biasanya ada versi baru dengan nama bertitik yang lebih disarankan.",
    "useCase": "Saat membuka atau merawat file Excel lama.",
    "analogy": "Kayak adaptor charger lama: masih bisa dipakai supaya perangkat lama tetap nyala.",
    "simpleExample": "Contoh pola penggunaan ZTEST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "exampleFormula": "=ZTEST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola penggunaan ZTEST compatibility. Ganti range dan argumen sesuai syntax rumusnya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "AVERAGEIF": {
    "description": "Menghitung rata-rata dengan satu syarat.",
    "simpleLogic": "Excel pilih baris yang memenuhi syarat, lalu menghitung rata-rata angkanya.",
    "useCase": "Untuk rata-rata nilai siswa perempuan, rata-rata sales Jakarta, atau rata-rata harga kategori tertentu.",
    "analogy": "Kayak cari rata-rata nilai siswa yang kelasnya 10A saja.",
    "simpleExample": "Menghitung rata-rata E2:E16 untuk baris yang kategorinya Digital.",
    "exampleFormula": "=AVERAGEIF(B2:B16;\"Digital\";E2:E16)",
    "exampleMeaning": "Menghitung rata-rata E2:E16 untuk baris yang kategorinya Digital.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "AVERAGEIFS": {
    "description": "Menghitung rata-rata dengan banyak syarat.",
    "simpleLogic": "Excel memilih baris yang lolos semua syarat, lalu menghitung rata-rata angka dari baris itu.",
    "useCase": "Untuk rata-rata sales kategori tertentu di kota tertentu.",
    "analogy": "Kayak cari rata-rata belanja pelanggan yang kota Jakarta dan kategorinya Digital saja.",
    "simpleExample": "Menghitung rata-rata E2:E16 untuk kategori Digital dan kota Jakarta.",
    "exampleFormula": "=AVERAGEIFS(E2:E16;B2:B16;\"Digital\";C2:C16;\"Jakarta\")",
    "exampleMeaning": "Menghitung rata-rata E2:E16 untuk kategori Digital dan kota Jakarta.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COUNTIF": {
    "description": "Menghitung data dengan satu syarat.",
    "simpleLogic": "Excel mengecek satu range, lalu menghitung cell yang sesuai dengan kriteria.",
    "useCase": "Untuk menghitung jumlah siswa perempuan, produk Digital, status Lulus, atau kota Jakarta.",
    "analogy": "Kayak menghitung berapa orang yang memakai baju hitam di ruangan.",
    "simpleExample": "Menghitung berapa cell di B2:B16 yang isinya Digital.",
    "exampleFormula": "=COUNTIF(B2:B16;\"Digital\")",
    "exampleMeaning": "Menghitung berapa cell di B2:B16 yang isinya Digital.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COUNTIFS": {
    "description": "Menghitung data dengan banyak syarat.",
    "simpleLogic": "Excel menghitung baris yang memenuhi semua syarat sekaligus.",
    "useCase": "Untuk menghitung data kategori Digital di kota Jakarta, atau siswa kelas 10A yang Lulus.",
    "analogy": "Kayak menghitung tamu yang pakai baju hitam dan membawa undangan. Dua syarat harus lolos.",
    "simpleExample": "Menghitung baris dengan kategori Digital dan kota Jakarta.",
    "exampleFormula": "=COUNTIFS(B2:B16;\"Digital\";C2:C16;\"Jakarta\")",
    "exampleMeaning": "Menghitung baris dengan kategori Digital dan kota Jakarta.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MAXIFS": {
    "description": "Menjumlahkan angka dengan banyak syarat.",
    "simpleLogic": "Excel hanya menjumlahkan baris yang lolos semua syarat, bukan salah satu saja.",
    "useCase": "Untuk total penjualan kategori tertentu di kota tertentu, bulan tertentu, atau sales tertentu.",
    "analogy": "Kayak filter pesanan: ambil yang kategori Digital dan kota Jakarta, baru total penjualannya dijumlahkan.",
    "simpleExample": "Contoh pola MAXIFS. Prinsipnya mirip SUMIFS, tapi nama function dan detail argumennya mengikuti syntax MAXIFS.",
    "exampleFormula": "=MAXIFS(D2:D16)",
    "exampleMeaning": "Contoh pola MAXIFS. Prinsipnya mirip SUMIFS, tapi nama function dan detail argumennya mengikuti syntax MAXIFS.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MINIFS": {
    "description": "Menjumlahkan angka dengan banyak syarat.",
    "simpleLogic": "Excel hanya menjumlahkan baris yang lolos semua syarat, bukan salah satu saja.",
    "useCase": "Untuk total penjualan kategori tertentu di kota tertentu, bulan tertentu, atau sales tertentu.",
    "analogy": "Kayak filter pesanan: ambil yang kategori Digital dan kota Jakarta, baru total penjualannya dijumlahkan.",
    "simpleExample": "Contoh pola MINIFS. Prinsipnya mirip SUMIFS, tapi nama function dan detail argumennya mengikuti syntax MINIFS.",
    "exampleFormula": "=MINIFS(D2:D16)",
    "exampleMeaning": "Contoh pola MINIFS. Prinsipnya mirip SUMIFS, tapi nama function dan detail argumennya mengikuti syntax MINIFS.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SUMIF": {
    "description": "Menjumlahkan angka dengan satu syarat.",
    "simpleLogic": "Excel cek dulu syaratnya di satu kolom. Baris yang cocok saja yang angkanya dijumlahkan.",
    "useCase": "Untuk total penjualan satu kategori, satu kota, satu nama, atau satu status.",
    "analogy": "Kayak bilang ke kasir: jumlahkan belanjaan yang kategorinya Digital saja, yang lain jangan dihitung.",
    "simpleExample": "Jika B2:B16 berisi Digital, jumlahkan angka di E2:E16 pada baris yang sama.",
    "exampleFormula": "=SUMIF(B2:B16;\"Digital\";E2:E16)",
    "exampleMeaning": "Jika B2:B16 berisi Digital, jumlahkan angka di E2:E16 pada baris yang sama.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SUMIFS": {
    "description": "Menjumlahkan angka dengan banyak syarat.",
    "simpleLogic": "Excel hanya menjumlahkan baris yang lolos semua syarat, bukan salah satu saja.",
    "useCase": "Untuk total penjualan kategori tertentu di kota tertentu, bulan tertentu, atau sales tertentu.",
    "analogy": "Kayak filter pesanan: ambil yang kategori Digital dan kota Jakarta, baru total penjualannya dijumlahkan.",
    "simpleExample": "Menjumlahkan E2:E16 hanya untuk baris dengan kategori Digital dan kota Jakarta.",
    "exampleFormula": "=SUMIFS(E2:E16;B2:B16;\"Digital\";C2:C16;\"Jakarta\")",
    "exampleMeaning": "Menjumlahkan E2:E16 hanya untuk baris dengan kategori Digital dan kota Jakarta.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DAVERAGE": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Excel membaca database range, memilih field, lalu hanya menghitung record yang cocok dengan criteria.",
    "useCase": "Untuk laporan tabel lama yang memakai area kriteria terpisah.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh pola database function: database, field, lalu criteria.",
    "exampleFormula": "=DAVERAGE(A1:E16;\"Total Penjualan\";G1:H2)",
    "exampleMeaning": "Contoh pola database function: database, field, lalu criteria.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DCOUNT": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Excel membaca database range, memilih field, lalu hanya menghitung record yang cocok dengan criteria.",
    "useCase": "Untuk laporan tabel lama yang memakai area kriteria terpisah.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh pola database function: database, field, lalu criteria.",
    "exampleFormula": "=DCOUNT(A1:E16;\"Total Penjualan\";G1:H2)",
    "exampleMeaning": "Contoh pola database function: database, field, lalu criteria.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DCOUNTA": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Excel membaca database range, memilih field, lalu hanya menghitung record yang cocok dengan criteria.",
    "useCase": "Untuk laporan tabel lama yang memakai area kriteria terpisah.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh pola database function: database, field, lalu criteria.",
    "exampleFormula": "=DCOUNTA(A1:E16;\"Total Penjualan\";G1:H2)",
    "exampleMeaning": "Contoh pola database function: database, field, lalu criteria.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DGET": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Excel membaca database range, memilih field, lalu hanya menghitung record yang cocok dengan criteria.",
    "useCase": "Untuk laporan tabel lama yang memakai area kriteria terpisah.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh pola database function: database, field, lalu criteria.",
    "exampleFormula": "=DGET(A1:E16;\"Total Penjualan\";G1:H2)",
    "exampleMeaning": "Contoh pola database function: database, field, lalu criteria.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DMAX": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Excel membaca database range, memilih field, lalu hanya menghitung record yang cocok dengan criteria.",
    "useCase": "Untuk laporan tabel lama yang memakai area kriteria terpisah.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh pola database function: database, field, lalu criteria.",
    "exampleFormula": "=DMAX(A1:E16;\"Total Penjualan\";G1:H2)",
    "exampleMeaning": "Contoh pola database function: database, field, lalu criteria.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DMIN": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Excel membaca database range, memilih field, lalu hanya menghitung record yang cocok dengan criteria.",
    "useCase": "Untuk laporan tabel lama yang memakai area kriteria terpisah.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh pola database function: database, field, lalu criteria.",
    "exampleFormula": "=DMIN(A1:E16;\"Total Penjualan\";G1:H2)",
    "exampleMeaning": "Contoh pola database function: database, field, lalu criteria.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DPRODUCT": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Excel membaca database range, memilih field, lalu hanya menghitung record yang cocok dengan criteria.",
    "useCase": "Untuk laporan tabel lama yang memakai area kriteria terpisah.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh pola database function: database, field, lalu criteria.",
    "exampleFormula": "=DPRODUCT(A1:E16;\"Total Penjualan\";G1:H2)",
    "exampleMeaning": "Contoh pola database function: database, field, lalu criteria.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DSTDEV": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Excel membaca database range, memilih field, lalu hanya menghitung record yang cocok dengan criteria.",
    "useCase": "Untuk laporan tabel lama yang memakai area kriteria terpisah.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh pola database function: database, field, lalu criteria.",
    "exampleFormula": "=DSTDEV(A1:E16;\"Total Penjualan\";G1:H2)",
    "exampleMeaning": "Contoh pola database function: database, field, lalu criteria.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DSTDEVP": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Excel membaca database range, memilih field, lalu hanya menghitung record yang cocok dengan criteria.",
    "useCase": "Untuk laporan tabel lama yang memakai area kriteria terpisah.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh pola database function: database, field, lalu criteria.",
    "exampleFormula": "=DSTDEVP(A1:E16;\"Total Penjualan\";G1:H2)",
    "exampleMeaning": "Contoh pola database function: database, field, lalu criteria.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DSUM": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Excel membaca database range, memilih field, lalu hanya menghitung record yang cocok dengan criteria.",
    "useCase": "Untuk laporan tabel lama yang memakai area kriteria terpisah.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh pola database function: database, field, lalu criteria.",
    "exampleFormula": "=DSUM(A1:E16;\"Total Penjualan\";G1:H2)",
    "exampleMeaning": "Contoh pola database function: database, field, lalu criteria.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DVAR": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Excel membaca database range, memilih field, lalu hanya menghitung record yang cocok dengan criteria.",
    "useCase": "Untuk laporan tabel lama yang memakai area kriteria terpisah.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh pola database function: database, field, lalu criteria.",
    "exampleFormula": "=DVAR(A1:E16;\"Total Penjualan\";G1:H2)",
    "exampleMeaning": "Contoh pola database function: database, field, lalu criteria.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DVARP": {
    "description": "Menghitung data tabel berdasarkan criteria range.",
    "simpleLogic": "Excel membaca database range, memilih field, lalu hanya menghitung record yang cocok dengan criteria.",
    "useCase": "Untuk laporan tabel lama yang memakai area kriteria terpisah.",
    "analogy": "Kayak menyuruh Excel membuka lemari arsip, memilih laci tertentu, lalu menghitung hanya dokumen yang cocok syarat.",
    "simpleExample": "Contoh pola database function: database, field, lalu criteria.",
    "exampleFormula": "=DVARP(A1:E16;\"Total Penjualan\";G1:H2)",
    "exampleMeaning": "Contoh pola database function: database, field, lalu criteria.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DATE": {
    "description": "Membuat tanggal dari tahun, bulan, dan hari.",
    "simpleLogic": "Excel menggabungkan angka tahun, bulan, dan hari menjadi satu tanggal valid.",
    "useCase": "Untuk membuat tanggal dari kolom terpisah.",
    "analogy": "Kayak merakit tanggal dari 3 bahan: tahun, bulan, hari.",
    "simpleExample": "Membuat tanggal 30 Mei 2026.",
    "exampleFormula": "=DATE(2026;5;30)",
    "exampleMeaning": "Membuat tanggal 30 Mei 2026.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DATEDIF": {
    "description": "Menghitung selisih tanggal.",
    "simpleLogic": "Excel menghitung jarak antara dua tanggal dalam hari, bulan, atau tahun.",
    "useCase": "Untuk umur, masa kerja, atau durasi membership.",
    "analogy": "Kayak menghitung sudah berapa lama seseorang bekerja.",
    "simpleExample": "Hitung selisih tahun penuh dari A2 ke B2.",
    "exampleFormula": "=DATEDIF(A2;B2;\"Y\")",
    "exampleMeaning": "Hitung selisih tahun penuh dari A2 ke B2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DATEVALUE": {
    "description": "Membuat tanggal dari tahun, bulan, dan hari.",
    "simpleLogic": "Excel menggabungkan angka tahun, bulan, dan hari menjadi satu tanggal valid.",
    "useCase": "Untuk membuat tanggal dari kolom terpisah.",
    "analogy": "Kayak merakit tanggal dari 3 bahan: tahun, bulan, hari.",
    "simpleExample": "Contoh pola DATEVALUE. Prinsipnya mirip DATE, tapi nama function dan detail argumennya mengikuti syntax DATEVALUE.",
    "exampleFormula": "=DATEVALUE(A2)",
    "exampleMeaning": "Contoh pola DATEVALUE. Prinsipnya mirip DATE, tapi nama function dan detail argumennya mengikuti syntax DATEVALUE.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DAY": {
    "description": "Mengambil angka hari dari tanggal.",
    "simpleLogic": "Excel membaca tanggal lalu mengambil bagian harinya saja.",
    "useCase": "Untuk mengetahui tanggal berapa dari sebuah date.",
    "analogy": "Kayak mengambil angka 30 dari 30 Mei 2026.",
    "simpleExample": "Ambil hari dari tanggal di A2.",
    "exampleFormula": "=DAY(A2)",
    "exampleMeaning": "Ambil hari dari tanggal di A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DAYS": {
    "description": "Menghitung jumlah hari antar tanggal.",
    "simpleLogic": "Excel mengurangi tanggal akhir dengan tanggal awal.",
    "useCase": "Untuk durasi proyek, lama pengiriman, atau masa sewa.",
    "analogy": "Kayak menghitung jarak hari dari tanggal masuk sampai tanggal keluar.",
    "simpleExample": "Hitung jumlah hari dari A2 sampai B2.",
    "exampleFormula": "=DAYS(B2;A2)",
    "exampleMeaning": "Hitung jumlah hari dari A2 sampai B2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DAYS360": {
    "description": "Menghitung jumlah hari antar tanggal.",
    "simpleLogic": "Excel mengurangi tanggal akhir dengan tanggal awal.",
    "useCase": "Untuk durasi proyek, lama pengiriman, atau masa sewa.",
    "analogy": "Kayak menghitung jarak hari dari tanggal masuk sampai tanggal keluar.",
    "simpleExample": "Contoh pola DAYS360. Prinsipnya mirip DAYS, tapi nama function dan detail argumennya mengikuti syntax DAYS360.",
    "exampleFormula": "=DAYS360(A2)",
    "exampleMeaning": "Contoh pola DAYS360. Prinsipnya mirip DAYS, tapi nama function dan detail argumennya mengikuti syntax DAYS360.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "EDATE": {
    "description": "Menggeser tanggal beberapa bulan.",
    "simpleLogic": "Excel menambah atau mengurangi bulan dari tanggal awal.",
    "useCase": "Untuk jatuh tempo bulanan, renewal, atau cicilan.",
    "analogy": "Kayak menggeser kalender 3 bulan ke depan.",
    "simpleExample": "Ambil tanggal 3 bulan setelah A2.",
    "exampleFormula": "=EDATE(A2;3)",
    "exampleMeaning": "Ambil tanggal 3 bulan setelah A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "EOMONTH": {
    "description": "Mengambil tanggal akhir bulan.",
    "simpleLogic": "Excel mencari hari terakhir bulan dari tanggal tertentu.",
    "useCase": "Untuk closing bulanan atau due date akhir bulan.",
    "analogy": "Kayak langsung lompat ke tanggal terakhir bulan itu.",
    "simpleExample": "Ambil tanggal akhir bulan dari tanggal di A2.",
    "exampleFormula": "=EOMONTH(A2;0)",
    "exampleMeaning": "Ambil tanggal akhir bulan dari tanggal di A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "HOUR": {
    "description": "Mengambil jam dari waktu.",
    "simpleLogic": "Excel membaca waktu lalu mengambil angka jamnya.",
    "useCase": "Untuk analisis jam mulai, jam selesai, atau shift.",
    "analogy": "Kayak mengambil angka jam dari jam digital.",
    "simpleExample": "Ambil jam dari waktu di A2.",
    "exampleFormula": "=HOUR(A2)",
    "exampleMeaning": "Ambil jam dari waktu di A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ISOWEEKNUM": {
    "description": "Mengambil angka hari dari tanggal.",
    "simpleLogic": "Excel membaca tanggal lalu mengambil bagian harinya saja.",
    "useCase": "Untuk mengetahui tanggal berapa dari sebuah date.",
    "analogy": "Kayak mengambil angka 30 dari 30 Mei 2026.",
    "simpleExample": "Contoh pola ISOWEEKNUM. Prinsipnya mirip DAY, tapi nama function dan detail argumennya mengikuti syntax ISOWEEKNUM.",
    "exampleFormula": "=ISOWEEKNUM(A2)",
    "exampleMeaning": "Contoh pola ISOWEEKNUM. Prinsipnya mirip DAY, tapi nama function dan detail argumennya mengikuti syntax ISOWEEKNUM.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MINUTE": {
    "description": "Mengambil menit dari waktu.",
    "simpleLogic": "Excel membaca waktu lalu mengambil angka menitnya.",
    "useCase": "Untuk durasi detail dan jadwal.",
    "analogy": "Kayak mengambil bagian menit dari jam digital.",
    "simpleExample": "Ambil menit dari waktu di A2.",
    "exampleFormula": "=MINUTE(A2)",
    "exampleMeaning": "Ambil menit dari waktu di A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MONTH": {
    "description": "Mengambil angka bulan dari tanggal.",
    "simpleLogic": "Excel membaca tanggal lalu mengambil bagian bulannya.",
    "useCase": "Untuk analisis data per bulan.",
    "analogy": "Kayak mengambil bulan Mei dari tanggal lengkap.",
    "simpleExample": "Ambil bulan dari tanggal di A2.",
    "exampleFormula": "=MONTH(A2)",
    "exampleMeaning": "Ambil bulan dari tanggal di A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "NETWORKDAYS": {
    "description": "Menghitung hari kerja.",
    "simpleLogic": "Excel menghitung hari Senin-Jumat dan melewati weekend.",
    "useCase": "Untuk SLA, deadline kerja, atau durasi proyek.",
    "analogy": "Kayak menghitung hari kantor buka, bukan semua hari kalender.",
    "simpleExample": "Hitung jumlah hari kerja antara A2 dan B2.",
    "exampleFormula": "=NETWORKDAYS(A2;B2)",
    "exampleMeaning": "Hitung jumlah hari kerja antara A2 dan B2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "NETWORKDAYS.INTL": {
    "description": "Menghitung hari kerja dengan aturan weekend sendiri.",
    "simpleLogic": "Kamu bisa tentukan hari libur mingguan yang dianggap weekend.",
    "useCase": "Untuk jadwal kerja yang liburnya bukan Sabtu-Minggu.",
    "analogy": "Kayak kalender kantor yang punya aturan libur custom.",
    "simpleExample": "Hitung hari kerja A2 sampai B2 dengan Sabtu-Minggu sebagai weekend.",
    "exampleFormula": "=NETWORKDAYS.INTL(A2;B2;\"0000011\")",
    "exampleMeaning": "Hitung hari kerja A2 sampai B2 dengan Sabtu-Minggu sebagai weekend.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "NOW": {
    "description": "Menghasilkan tanggal dan jam saat ini.",
    "simpleLogic": "Excel mengambil tanggal sekaligus waktu dari sistem.",
    "useCase": "Untuk timestamp atau laporan waktu berjalan.",
    "analogy": "Kayak jam digital otomatis di Excel.",
    "simpleExample": "Menampilkan tanggal dan jam saat ini.",
    "exampleFormula": "=NOW()",
    "exampleMeaning": "Menampilkan tanggal dan jam saat ini.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SECOND": {
    "description": "Mengambil detik dari waktu.",
    "simpleLogic": "Excel membaca waktu lalu mengambil angka detiknya.",
    "useCase": "Untuk data waktu yang butuh detail detik.",
    "analogy": "Kayak mengambil angka detik dari stopwatch.",
    "simpleExample": "Ambil detik dari waktu di A2.",
    "exampleFormula": "=SECOND(A2)",
    "exampleMeaning": "Ambil detik dari waktu di A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TIME": {
    "description": "Membuat waktu dari jam, menit, dan detik.",
    "simpleLogic": "Excel menggabungkan angka jam, menit, dan detik menjadi nilai waktu.",
    "useCase": "Untuk membuat jam dari kolom terpisah.",
    "analogy": "Kayak merakit jam dari 3 bahan: jam, menit, detik.",
    "simpleExample": "Membuat waktu 09:30:00.",
    "exampleFormula": "=TIME(9;30;0)",
    "exampleMeaning": "Membuat waktu 09:30:00.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TIMEVALUE": {
    "description": "Membuat waktu dari jam, menit, dan detik.",
    "simpleLogic": "Excel menggabungkan angka jam, menit, dan detik menjadi nilai waktu.",
    "useCase": "Untuk membuat jam dari kolom terpisah.",
    "analogy": "Kayak merakit jam dari 3 bahan: jam, menit, detik.",
    "simpleExample": "Contoh pola TIMEVALUE. Prinsipnya mirip TIME, tapi nama function dan detail argumennya mengikuti syntax TIMEVALUE.",
    "exampleFormula": "=TIMEVALUE(A2)",
    "exampleMeaning": "Contoh pola TIMEVALUE. Prinsipnya mirip TIME, tapi nama function dan detail argumennya mengikuti syntax TIMEVALUE.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TODAY": {
    "description": "Menghasilkan tanggal hari ini.",
    "simpleLogic": "Excel mengambil tanggal hari ini dari sistem.",
    "useCase": "Untuk laporan yang selalu update tanggalnya.",
    "analogy": "Kayak kalender otomatis yang selalu menunjuk hari ini.",
    "simpleExample": "Menampilkan tanggal hari ini.",
    "exampleFormula": "=TODAY()",
    "exampleMeaning": "Menampilkan tanggal hari ini.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "WEEKDAY": {
    "description": "Mengambil angka hari dari tanggal.",
    "simpleLogic": "Excel membaca tanggal lalu mengambil bagian harinya saja.",
    "useCase": "Untuk mengetahui tanggal berapa dari sebuah date.",
    "analogy": "Kayak mengambil angka 30 dari 30 Mei 2026.",
    "simpleExample": "Contoh pola WEEKDAY. Prinsipnya mirip DAY, tapi nama function dan detail argumennya mengikuti syntax WEEKDAY.",
    "exampleFormula": "=WEEKDAY(A2)",
    "exampleMeaning": "Contoh pola WEEKDAY. Prinsipnya mirip DAY, tapi nama function dan detail argumennya mengikuti syntax WEEKDAY.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "WEEKNUM": {
    "description": "Mengambil angka hari dari tanggal.",
    "simpleLogic": "Excel membaca tanggal lalu mengambil bagian harinya saja.",
    "useCase": "Untuk mengetahui tanggal berapa dari sebuah date.",
    "analogy": "Kayak mengambil angka 30 dari 30 Mei 2026.",
    "simpleExample": "Contoh pola WEEKNUM. Prinsipnya mirip DAY, tapi nama function dan detail argumennya mengikuti syntax WEEKNUM.",
    "exampleFormula": "=WEEKNUM(A2)",
    "exampleMeaning": "Contoh pola WEEKNUM. Prinsipnya mirip DAY, tapi nama function dan detail argumennya mengikuti syntax WEEKNUM.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "WORKDAY": {
    "description": "Menghitung tanggal setelah sejumlah hari kerja.",
    "simpleLogic": "Excel menambahkan hari kerja dan melewati weekend.",
    "useCase": "Untuk mencari tanggal deadline kerja.",
    "analogy": "Kayak menghitung deadline 5 hari kerja dari hari ini.",
    "simpleExample": "Cari tanggal 5 hari kerja setelah A2.",
    "exampleFormula": "=WORKDAY(A2;5)",
    "exampleMeaning": "Cari tanggal 5 hari kerja setelah A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "WORKDAY.INTL": {
    "description": "Menghitung tanggal kerja dengan weekend custom.",
    "simpleLogic": "Kamu bisa tentukan hari apa saja yang dianggap libur mingguan.",
    "useCase": "Untuk perusahaan dengan jadwal libur berbeda.",
    "analogy": "Kayak menghitung deadline tapi kalender liburnya bisa kamu atur sendiri.",
    "simpleExample": "Cari tanggal 5 hari kerja setelah A2 dengan weekend Sabtu-Minggu.",
    "exampleFormula": "=WORKDAY.INTL(A2;5;\"0000011\")",
    "exampleMeaning": "Cari tanggal 5 hari kerja setelah A2 dengan weekend Sabtu-Minggu.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "YEAR": {
    "description": "Mengambil tahun dari tanggal.",
    "simpleLogic": "Excel membaca tanggal lalu mengambil bagian tahunnya.",
    "useCase": "Untuk analisis data per tahun.",
    "analogy": "Kayak mengambil 2026 dari tanggal lengkap.",
    "simpleExample": "Ambil tahun dari tanggal di A2.",
    "exampleFormula": "=YEAR(A2)",
    "exampleMeaning": "Ambil tahun dari tanggal di A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "YEARFRAC": {
    "description": "Menghitung selisih tanggal.",
    "simpleLogic": "Excel menghitung jarak antara dua tanggal dalam hari, bulan, atau tahun.",
    "useCase": "Untuk umur, masa kerja, atau durasi membership.",
    "analogy": "Kayak menghitung sudah berapa lama seseorang bekerja.",
    "simpleExample": "Contoh pola YEARFRAC. Prinsipnya mirip DATEDIF, tapi nama function dan detail argumennya mengikuti syntax YEARFRAC.",
    "exampleFormula": "=YEARFRAC(A2)",
    "exampleMeaning": "Contoh pola YEARFRAC. Prinsipnya mirip DATEDIF, tapi nama function dan detail argumennya mengikuti syntax YEARFRAC.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BYCOL": {
    "description": "Menghitung tiap kolom dengan LAMBDA.",
    "simpleLogic": "Excel menjalankan rumus untuk setiap kolom dalam array.",
    "useCase": "Untuk total per kolom tanpa menulis rumus satu-satu.",
    "analogy": "Kayak mengecek setiap kolom laporan satu per satu.",
    "simpleExample": "Hitung total setiap kolom di A2:E6.",
    "exampleFormula": "=BYCOL(A2:E6;LAMBDA(col;SUM(col)))",
    "exampleMeaning": "Hitung total setiap kolom di A2:E6.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BYROW": {
    "description": "Menghitung tiap baris dengan LAMBDA.",
    "simpleLogic": "Excel menjalankan rumus untuk setiap baris dalam array.",
    "useCase": "Untuk total per baris tanpa kolom bantu.",
    "analogy": "Kayak mengecek setiap baris laporan satu per satu.",
    "simpleExample": "Hitung total setiap baris di A2:E6.",
    "exampleFormula": "=BYROW(A2:E6;LAMBDA(row;SUM(row)))",
    "exampleMeaning": "Hitung total setiap baris di A2:E6.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CHOOSECOLS": {
    "description": "Mengambil kolom tertentu dari array.",
    "simpleLogic": "Kamu sebut nomor kolom yang mau diambil, Excel menampilkan kolom itu saja.",
    "useCase": "Untuk mengambil kolom penting dari tabel besar.",
    "analogy": "Kayak memilih kolom yang ingin difotokopi dari laporan.",
    "simpleExample": "Ambil kolom ke-1, ke-3, dan ke-5 dari A2:E16.",
    "exampleFormula": "=CHOOSECOLS(A2:E16;1;3;5)",
    "exampleMeaning": "Ambil kolom ke-1, ke-3, dan ke-5 dari A2:E16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CHOOSEROWS": {
    "description": "Mengambil baris tertentu dari array.",
    "simpleLogic": "Kamu sebut nomor baris yang mau diambil, Excel menampilkan baris itu saja.",
    "useCase": "Untuk mengambil baris tertentu dari tabel.",
    "analogy": "Kayak memilih halaman tertentu dari buku.",
    "simpleExample": "Ambil baris ke-1, ke-3, dan ke-5 dari A2:E16.",
    "exampleFormula": "=CHOOSEROWS(A2:E16;1;3;5)",
    "exampleMeaning": "Ambil baris ke-1, ke-3, dan ke-5 dari A2:E16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DROP": {
    "description": "Membuang beberapa baris/kolom dari awal atau akhir data.",
    "simpleLogic": "Kamu tentukan bagian yang mau dilewati, lalu Excel menampilkan sisanya.",
    "useCase": "Untuk membuang header tambahan atau data awal yang tidak perlu.",
    "analogy": "Kayak membuang 2 halaman depan lalu membaca sisanya.",
    "simpleExample": "Buang 1 baris pertama dari A2:E16.",
    "exampleFormula": "=DROP(A2:E16;1)",
    "exampleMeaning": "Buang 1 baris pertama dari A2:E16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "EXPAND": {
    "description": "Mengambil beberapa baris/kolom dari awal atau akhir data.",
    "simpleLogic": "Kamu tentukan berapa data yang mau diambil.",
    "useCase": "Untuk ambil top 5, data awal, atau data akhir.",
    "analogy": "Kayak mengambil 5 lembar paling atas dari tumpukan kertas.",
    "simpleExample": "Contoh pola EXPAND. Prinsipnya mirip TAKE, tapi nama function dan detail argumennya mengikuti syntax EXPAND.",
    "exampleFormula": "=EXPAND(A2:A10)",
    "exampleMeaning": "Contoh pola EXPAND. Prinsipnya mirip TAKE, tapi nama function dan detail argumennya mengikuti syntax EXPAND.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FILTER": {
    "description": "Memfilter data berdasarkan syarat.",
    "simpleLogic": "Excel menampilkan baris yang memenuhi kondisi, baris lain disembunyikan dari hasil.",
    "useCase": "Untuk membuat list transaksi kategori tertentu atau kota tertentu.",
    "analogy": "Kayak saringan: yang lolos syarat keluar, yang tidak cocok tertahan.",
    "simpleExample": "Tampilkan baris A2:E16 yang kategorinya Digital.",
    "exampleFormula": "=FILTER(A2:E16;B2:B16=\"Digital\")",
    "exampleMeaning": "Tampilkan baris A2:E16 yang kategorinya Digital.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "HSTACK": {
    "description": "Menggabungkan tabel ke samping.",
    "simpleLogic": "Excel menempelkan array kedua di kanan array pertama.",
    "useCase": "Untuk menggabungkan kolom data dari dua sumber.",
    "analogy": "Kayak menempel dua tabel berdampingan.",
    "simpleExample": "Gabungkan dua tabel secara horizontal.",
    "exampleFormula": "=HSTACK(A2:C10;E2:G10)",
    "exampleMeaning": "Gabungkan dua tabel secara horizontal.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MAKEARRAY": {
    "description": "Membuat array baru dari rumus.",
    "simpleLogic": "Kamu tentukan ukuran baris dan kolom, lalu LAMBDA mengisi tiap cell.",
    "useCase": "Untuk membuat tabel bantu dinamis.",
    "analogy": "Kayak membuat papan kotak-kotak, lalu setiap kotak diisi aturan tertentu.",
    "simpleExample": "Buat array 3x3, isi tiap cell dengan nomor baris dikali nomor kolom.",
    "exampleFormula": "=MAKEARRAY(3;3;LAMBDA(r;c;r*c))",
    "exampleMeaning": "Buat array 3x3, isi tiap cell dengan nomor baris dikali nomor kolom.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MAP": {
    "description": "Menjalankan rumus ke tiap item dalam array.",
    "simpleLogic": "Excel mengambil setiap nilai lalu menerapkan LAMBDA ke nilai itu.",
    "useCase": "Untuk mengubah banyak data sekaligus tanpa copy formula ke bawah.",
    "analogy": "Kayak menyuruh satu instruksi dipakai ke semua baris.",
    "simpleExample": "Kalikan setiap nilai A2:A6 dengan 10.",
    "exampleFormula": "=MAP(A2:A6;LAMBDA(x;x*10))",
    "exampleMeaning": "Kalikan setiap nilai A2:A6 dengan 10.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "RANDARRAY": {
    "description": "Membuat angka acak antara 0 dan 1.",
    "simpleLogic": "Excel menghasilkan angka random yang berubah saat sheet dihitung ulang.",
    "useCase": "Untuk simulasi atau data dummy.",
    "analogy": "Kayak mengambil angka acak dari mesin undian.",
    "simpleExample": "Contoh pola RANDARRAY. Prinsipnya mirip RAND, tapi nama function dan detail argumennya mengikuti syntax RANDARRAY.",
    "exampleFormula": "=RANDARRAY(A2:A10)",
    "exampleMeaning": "Contoh pola RANDARRAY. Prinsipnya mirip RAND, tapi nama function dan detail argumennya mengikuti syntax RANDARRAY.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "REDUCE": {
    "description": "Menggabungkan banyak nilai menjadi satu hasil akhir.",
    "simpleLogic": "Excel memproses item satu per satu sambil membawa hasil sementara.",
    "useCase": "Untuk total custom atau penggabungan bertahap.",
    "analogy": "Kayak menabung: tiap transaksi ditambahkan ke saldo berjalan.",
    "simpleExample": "Mulai dari 0, tambahkan setiap nilai A2:A6 sampai jadi total.",
    "exampleFormula": "=REDUCE(0;A2:A6;LAMBDA(total;x;total+x))",
    "exampleMeaning": "Mulai dari 0, tambahkan setiap nilai A2:A6 sampai jadi total.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SCAN": {
    "description": "Membuat hasil berjalan dari proses bertahap.",
    "simpleLogic": "Mirip REDUCE, tapi setiap langkah hasilnya ditampilkan.",
    "useCase": "Untuk saldo berjalan, running total, atau progres kumulatif.",
    "analogy": "Kayak melihat saldo setelah tiap transaksi, bukan hanya saldo akhir.",
    "simpleExample": "Tampilkan total berjalan dari A2:A6.",
    "exampleFormula": "=SCAN(0;A2:A6;LAMBDA(total;x;total+x))",
    "exampleMeaning": "Tampilkan total berjalan dari A2:A6.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SEQUENCE": {
    "description": "Menghitung jumlah baris dalam range.",
    "simpleLogic": "Excel menghitung berapa baris yang ada di range.",
    "useCase": "Untuk ukuran tabel dinamis.",
    "analogy": "Kayak menghitung jumlah tingkat dalam rak.",
    "simpleExample": "Contoh pola SEQUENCE. Prinsipnya mirip ROWS, tapi nama function dan detail argumennya mengikuti syntax SEQUENCE.",
    "exampleFormula": "=SEQUENCE(A2:A10)",
    "exampleMeaning": "Contoh pola SEQUENCE. Prinsipnya mirip ROWS, tapi nama function dan detail argumennya mengikuti syntax SEQUENCE.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SORT": {
    "description": "Mengurutkan data.",
    "simpleLogic": "Excel menyusun data dari kecil ke besar, besar ke kecil, A-Z, atau Z-A.",
    "useCase": "Untuk merapikan daftar berdasarkan nama, nilai, tanggal, atau penjualan.",
    "analogy": "Kayak menyusun buku dari A sampai Z.",
    "simpleExample": "Urutkan A2:E16 berdasarkan kolom ke-5 dari terbesar ke terkecil.",
    "exampleFormula": "=SORT(A2:E16;5;-1)",
    "exampleMeaning": "Urutkan A2:E16 berdasarkan kolom ke-5 dari terbesar ke terkecil.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SORTBY": {
    "description": "Mengurutkan data berdasarkan range lain.",
    "simpleLogic": "Excel mengurutkan tabel utama memakai kolom/range pembantu.",
    "useCase": "Untuk mengurutkan daftar berdasarkan sales, tanggal, atau prioritas.",
    "analogy": "Kayak menyusun daftar nama berdasarkan nilai, bukan berdasarkan nama.",
    "simpleExample": "Urutkan A2:E16 berdasarkan nilai E2:E16 dari terbesar ke terkecil.",
    "exampleFormula": "=SORTBY(A2:E16;E2:E16;-1)",
    "exampleMeaning": "Urutkan A2:E16 berdasarkan nilai E2:E16 dari terbesar ke terkecil.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TAKE": {
    "description": "Mengambil beberapa baris/kolom dari awal atau akhir data.",
    "simpleLogic": "Kamu tentukan berapa data yang mau diambil.",
    "useCase": "Untuk ambil top 5, data awal, atau data akhir.",
    "analogy": "Kayak mengambil 5 lembar paling atas dari tumpukan kertas.",
    "simpleExample": "Ambil 5 baris pertama dari A2:E16.",
    "exampleFormula": "=TAKE(A2:E16;5)",
    "exampleMeaning": "Ambil 5 baris pertama dari A2:E16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TEXTSPLIT": {
    "description": "Memecah teks menjadi beberapa bagian.",
    "simpleLogic": "Excel membagi teks berdasarkan pemisah seperti koma, spasi, atau strip.",
    "useCase": "Untuk memecah nama lengkap, kode, atau data CSV.",
    "analogy": "Kayak memotong kalimat setiap ketemu tanda koma.",
    "simpleExample": "Pecah teks A2 setiap ketemu tanda strip.",
    "exampleFormula": "=TEXTSPLIT(A2;\"-\")",
    "exampleMeaning": "Pecah teks A2 setiap ketemu tanda strip.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TOCOL": {
    "description": "Memutar orientasi data.",
    "simpleLogic": "Data yang tadinya turun ke bawah bisa jadi melebar ke samping, atau sebaliknya.",
    "useCase": "Untuk mengubah baris jadi kolom atau kolom jadi baris.",
    "analogy": "Kayak memutar tabel 90 derajat.",
    "simpleExample": "Contoh pola TOCOL. Prinsipnya mirip TRANSPOSE, tapi nama function dan detail argumennya mengikuti syntax TOCOL.",
    "exampleFormula": "=TOCOL(A2:A10)",
    "exampleMeaning": "Contoh pola TOCOL. Prinsipnya mirip TRANSPOSE, tapi nama function dan detail argumennya mengikuti syntax TOCOL.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TOROW": {
    "description": "Memutar orientasi data.",
    "simpleLogic": "Data yang tadinya turun ke bawah bisa jadi melebar ke samping, atau sebaliknya.",
    "useCase": "Untuk mengubah baris jadi kolom atau kolom jadi baris.",
    "analogy": "Kayak memutar tabel 90 derajat.",
    "simpleExample": "Contoh pola TOROW. Prinsipnya mirip TRANSPOSE, tapi nama function dan detail argumennya mengikuti syntax TOROW.",
    "exampleFormula": "=TOROW(A2:A10)",
    "exampleMeaning": "Contoh pola TOROW. Prinsipnya mirip TRANSPOSE, tapi nama function dan detail argumennya mengikuti syntax TOROW.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TRANSPOSE": {
    "description": "Memutar orientasi data.",
    "simpleLogic": "Data yang tadinya turun ke bawah bisa jadi melebar ke samping, atau sebaliknya.",
    "useCase": "Untuk mengubah baris jadi kolom atau kolom jadi baris.",
    "analogy": "Kayak memutar tabel 90 derajat.",
    "simpleExample": "Mengubah data vertikal A2:A6 menjadi horizontal.",
    "exampleFormula": "=TRANSPOSE(A2:A6)",
    "exampleMeaning": "Mengubah data vertikal A2:A6 menjadi horizontal.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "UNIQUE": {
    "description": "Mengambil daftar unik tanpa duplikat.",
    "simpleLogic": "Excel membaca range lalu menampilkan nilai yang berbeda saja.",
    "useCase": "Untuk membuat daftar kategori, kota, nama produk, atau pelanggan tanpa double.",
    "analogy": "Kayak membuat daftar tamu unik, nama yang sama cukup ditulis sekali.",
    "simpleExample": "Menampilkan daftar nilai unik dari B2:B16.",
    "exampleFormula": "=UNIQUE(B2:B16)",
    "exampleMeaning": "Menampilkan daftar nilai unik dari B2:B16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "VSTACK": {
    "description": "Menggabungkan tabel ke bawah.",
    "simpleLogic": "Excel menumpuk array kedua di bawah array pertama.",
    "useCase": "Untuk gabung data Januari dan Februari dalam satu daftar.",
    "analogy": "Kayak menaruh satu tumpukan kertas di bawah tumpukan lain.",
    "simpleExample": "Gabungkan dua tabel secara vertikal.",
    "exampleFormula": "=VSTACK(A2:E10;A12:E20)",
    "exampleMeaning": "Gabungkan dua tabel secara vertikal.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "WRAPCOLS": {
    "description": "Memutar orientasi data.",
    "simpleLogic": "Data yang tadinya turun ke bawah bisa jadi melebar ke samping, atau sebaliknya.",
    "useCase": "Untuk mengubah baris jadi kolom atau kolom jadi baris.",
    "analogy": "Kayak memutar tabel 90 derajat.",
    "simpleExample": "Contoh pola WRAPCOLS. Prinsipnya mirip TRANSPOSE, tapi nama function dan detail argumennya mengikuti syntax WRAPCOLS.",
    "exampleFormula": "=WRAPCOLS(A2:A10)",
    "exampleMeaning": "Contoh pola WRAPCOLS. Prinsipnya mirip TRANSPOSE, tapi nama function dan detail argumennya mengikuti syntax WRAPCOLS.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "WRAPROWS": {
    "description": "Memutar orientasi data.",
    "simpleLogic": "Data yang tadinya turun ke bawah bisa jadi melebar ke samping, atau sebaliknya.",
    "useCase": "Untuk mengubah baris jadi kolom atau kolom jadi baris.",
    "analogy": "Kayak memutar tabel 90 derajat.",
    "simpleExample": "Contoh pola WRAPROWS. Prinsipnya mirip TRANSPOSE, tapi nama function dan detail argumennya mengikuti syntax WRAPROWS.",
    "exampleFormula": "=WRAPROWS(A2:A10)",
    "exampleMeaning": "Contoh pola WRAPROWS. Prinsipnya mirip TRANSPOSE, tapi nama function dan detail argumennya mengikuti syntax WRAPROWS.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "XLOOKUP": {
    "description": "Mencari data dengan cara lebih fleksibel.",
    "simpleLogic": "Excel mencari lookup value di lookup array, lalu mengembalikan data dari return array.",
    "useCase": "Pengganti modern VLOOKUP/HLOOKUP. Bisa cari ke kanan, kiri, atas, atau bawah.",
    "analogy": "Kayak punya fitur search: cari kode di satu kolom, lalu ambil jawaban dari kolom mana pun.",
    "simpleExample": "Cari A2 di E2:E8, lalu ambil hasil dari F2:F8. Jika tidak ada, tampilkan Tidak ditemukan.",
    "exampleFormula": "=XLOOKUP(A2;E2:E8;F2:F8;\"Tidak ditemukan\")",
    "exampleMeaning": "Cari A2 di E2:E8, lalu ambil hasil dari F2:F8. Jika tidak ada, tampilkan Tidak ditemukan.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "XMATCH": {
    "description": "Mencari posisi nilai versi modern.",
    "simpleLogic": "Mirip MATCH, tapi lebih fleksibel untuk jenis pencarian.",
    "useCase": "Untuk mencari posisi data di array modern.",
    "analogy": "Kayak fitur Find yang memberi tahu posisi hasilnya di daftar.",
    "simpleExample": "Cari posisi A2 di E2:E8 dengan exact match.",
    "exampleFormula": "=XMATCH(A2;E2:E8;0)",
    "exampleMeaning": "Cari posisi A2 di E2:E8 dengan exact match.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BESSELI": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola BESSELI engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=BESSELI(1;2)",
    "exampleMeaning": "Contoh pola BESSELI engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BESSELJ": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola BESSELJ engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=BESSELJ(1;2)",
    "exampleMeaning": "Contoh pola BESSELJ engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BESSELK": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola BESSELK engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=BESSELK(1;2)",
    "exampleMeaning": "Contoh pola BESSELK engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BESSELY": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola BESSELY engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=BESSELY(1;2)",
    "exampleMeaning": "Contoh pola BESSELY engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BIN2DEC": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola BIN2DEC engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=BIN2DEC(1010)",
    "exampleMeaning": "Contoh pola BIN2DEC engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BIN2HEX": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola BIN2HEX engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=BIN2HEX(1010)",
    "exampleMeaning": "Contoh pola BIN2HEX engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BIN2OCT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola BIN2OCT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=BIN2OCT(1010)",
    "exampleMeaning": "Contoh pola BIN2OCT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BITAND": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola BITAND engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=BITAND(5;3)",
    "exampleMeaning": "Contoh pola BITAND engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BITLSHIFT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola BITLSHIFT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=BITLSHIFT(5;1)",
    "exampleMeaning": "Contoh pola BITLSHIFT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BITOR": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola BITOR engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=BITOR(5;3)",
    "exampleMeaning": "Contoh pola BITOR engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BITRSHIFT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola BITRSHIFT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=BITRSHIFT(5;1)",
    "exampleMeaning": "Contoh pola BITRSHIFT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BITXOR": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola BITXOR engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=BITXOR(5;3)",
    "exampleMeaning": "Contoh pola BITXOR engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COMPLEX": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola COMPLEX engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=COMPLEX(3;4)",
    "exampleMeaning": "Contoh pola COMPLEX engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CONVERT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola CONVERT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=CONVERT(10;\"m\";\"cm\")",
    "exampleMeaning": "Contoh pola CONVERT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DEC2BIN": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola DEC2BIN engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=DEC2BIN(10)",
    "exampleMeaning": "Contoh pola DEC2BIN engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DEC2HEX": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola DEC2HEX engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=DEC2HEX(10)",
    "exampleMeaning": "Contoh pola DEC2HEX engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DEC2OCT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola DEC2OCT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=DEC2OCT(10)",
    "exampleMeaning": "Contoh pola DEC2OCT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DELTA": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola DELTA engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=DELTA(A2;10)",
    "exampleMeaning": "Contoh pola DELTA engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ERF": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola ERF engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=ERF(1)",
    "exampleMeaning": "Contoh pola ERF engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ERF.PRECISE": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola ERF.PRECISE engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=ERF.PRECISE(1)",
    "exampleMeaning": "Contoh pola ERF.PRECISE engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ERFC": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola ERFC engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=ERFC(1)",
    "exampleMeaning": "Contoh pola ERFC engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ERFC.PRECISE": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola ERFC.PRECISE engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=ERFC.PRECISE(1)",
    "exampleMeaning": "Contoh pola ERFC.PRECISE engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "GESTEP": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola GESTEP engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=GESTEP(A2;10)",
    "exampleMeaning": "Contoh pola GESTEP engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "HEX2BIN": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola HEX2BIN engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=HEX2BIN(\"A\")",
    "exampleMeaning": "Contoh pola HEX2BIN engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "HEX2DEC": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola HEX2DEC engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=HEX2DEC(\"A\")",
    "exampleMeaning": "Contoh pola HEX2DEC engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "HEX2OCT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola HEX2OCT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=HEX2OCT(\"A\")",
    "exampleMeaning": "Contoh pola HEX2OCT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMABS": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMABS engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMABS(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMABS engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMAGINARY": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMAGINARY engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMAGINARY(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMAGINARY engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMARGUMENT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMARGUMENT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMARGUMENT(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMARGUMENT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMCONJUGATE": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMCONJUGATE engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMCONJUGATE(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMCONJUGATE engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMCOS": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMCOS engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMCOS(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMCOS engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMCOSH": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMCOSH engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMCOSH(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMCOSH engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMCOT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMCOT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMCOT(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMCOT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMCSC": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMCSC engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMCSC(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMCSC engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMCSCH": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMCSCH engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMCSCH(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMCSCH engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMDIV": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMDIV engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMDIV(\"3+4i\";\"1+2i\")",
    "exampleMeaning": "Contoh pola IMDIV engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMEXP": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMEXP engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMEXP(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMEXP engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMLN": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMLN engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMLN(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMLN engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMLOG10": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMLOG10 engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMLOG10(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMLOG10 engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMLOG2": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMLOG2 engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMLOG2(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMLOG2 engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMPOWER": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMPOWER engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMPOWER(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMPOWER engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMPRODUCT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMPRODUCT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMPRODUCT(\"3+4i\";\"1+2i\")",
    "exampleMeaning": "Contoh pola IMPRODUCT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMREAL": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMREAL engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMREAL(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMREAL engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMSEC": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMSEC engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMSEC(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMSEC engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMSECH": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMSECH engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMSECH(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMSECH engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMSIN": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMSIN engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMSIN(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMSIN engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMSINH": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMSINH engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMSINH(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMSINH engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMSQRT": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMSQRT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMSQRT(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMSQRT engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMSUB": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMSUB engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMSUB(\"3+4i\";\"1+2i\")",
    "exampleMeaning": "Contoh pola IMSUB engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMSUM": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMSUM engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMSUM(\"3+4i\";\"1+2i\")",
    "exampleMeaning": "Contoh pola IMSUM engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMTAN": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola IMTAN engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=IMTAN(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMTAN engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "OCT2BIN": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola OCT2BIN engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=OCT2BIN(12)",
    "exampleMeaning": "Contoh pola OCT2BIN engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "OCT2DEC": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola OCT2DEC engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=OCT2DEC(12)",
    "exampleMeaning": "Contoh pola OCT2DEC engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "OCT2HEX": {
    "description": "Menghitung kebutuhan teknik, konversi, bilangan basis, atau angka kompleks.",
    "simpleLogic": "Excel memakai rumus teknis sesuai input angka yang diberikan.",
    "useCase": "Untuk engineering, konversi satuan, binary/hex, dan bilangan kompleks.",
    "analogy": "Kayak kalkulator teknik di dalam Excel.",
    "simpleExample": "Contoh pola OCT2HEX engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "exampleFormula": "=OCT2HEX(12)",
    "exampleMeaning": "Contoh pola OCT2HEX engineering. Sesuaikan input angka/satuan sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ACCRINT": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola ACCRINT financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=ACCRINT(A2;B2;C2)",
    "exampleMeaning": "Contoh pola ACCRINT financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ACCRINTM": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola ACCRINTM financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=ACCRINTM(A2;B2;C2)",
    "exampleMeaning": "Contoh pola ACCRINTM financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "AMORDEGRC": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola AMORDEGRC financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=AMORDEGRC(A2;B2;C2)",
    "exampleMeaning": "Contoh pola AMORDEGRC financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "AMORLINC": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola AMORLINC financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=AMORLINC(A2;B2;C2)",
    "exampleMeaning": "Contoh pola AMORLINC financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COUPDAYBS": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola COUPDAYBS financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=COUPDAYBS(A2;B2;C2)",
    "exampleMeaning": "Contoh pola COUPDAYBS financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COUPDAYS": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola COUPDAYS financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=COUPDAYS(A2;B2;C2)",
    "exampleMeaning": "Contoh pola COUPDAYS financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COUPDAYSNC": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola COUPDAYSNC financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=COUPDAYSNC(A2;B2;C2)",
    "exampleMeaning": "Contoh pola COUPDAYSNC financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COUPNCD": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola COUPNCD financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=COUPNCD(A2;B2;C2)",
    "exampleMeaning": "Contoh pola COUPNCD financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COUPNUM": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola COUPNUM financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=COUPNUM(A2;B2;C2)",
    "exampleMeaning": "Contoh pola COUPNUM financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COUPPCD": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola COUPPCD financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=COUPPCD(A2;B2;C2)",
    "exampleMeaning": "Contoh pola COUPPCD financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CUMIPMT": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola CUMIPMT financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=CUMIPMT(A2;B2;C2)",
    "exampleMeaning": "Contoh pola CUMIPMT financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CUMPRINC": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola CUMPRINC financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=CUMPRINC(A2;B2;C2)",
    "exampleMeaning": "Contoh pola CUMPRINC financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DB": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola DB financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=DB(100000;20000;5)",
    "exampleMeaning": "Contoh pola DB financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DDB": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola DDB financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=DDB(100000;20000;5)",
    "exampleMeaning": "Contoh pola DDB financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DISC": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola DISC financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=DISC(A2;B2;C2)",
    "exampleMeaning": "Contoh pola DISC financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DOLLARDE": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola DOLLARDE financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=DOLLARDE(A2;B2;C2)",
    "exampleMeaning": "Contoh pola DOLLARDE financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DOLLARFR": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola DOLLARFR financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=DOLLARFR(A2;B2;C2)",
    "exampleMeaning": "Contoh pola DOLLARFR financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DURATION": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola DURATION financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=DURATION(A2;B2;C2)",
    "exampleMeaning": "Contoh pola DURATION financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "EFFECT": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola EFFECT financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=EFFECT(A2;B2;C2)",
    "exampleMeaning": "Contoh pola EFFECT financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FV": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola FV financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=FV(5%/12;60;100000)",
    "exampleMeaning": "Contoh pola FV financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FVSCHEDULE": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola FVSCHEDULE financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=FVSCHEDULE(A2;B2;C2)",
    "exampleMeaning": "Contoh pola FVSCHEDULE financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "INTRATE": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola INTRATE financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=INTRATE(A2;B2;C2)",
    "exampleMeaning": "Contoh pola INTRATE financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IPMT": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola IPMT financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=IPMT(5%/12;60;100000)",
    "exampleMeaning": "Contoh pola IPMT financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IRR": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola IRR financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=IRR(A2:A6)",
    "exampleMeaning": "Contoh pola IRR financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ISPMT": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola ISPMT financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=ISPMT(A2;B2;C2)",
    "exampleMeaning": "Contoh pola ISPMT financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MDURATION": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola MDURATION financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=MDURATION(A2;B2;C2)",
    "exampleMeaning": "Contoh pola MDURATION financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MIRR": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola MIRR financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=MIRR(A2:A6)",
    "exampleMeaning": "Contoh pola MIRR financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "NOMINAL": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola NOMINAL financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=NOMINAL(A2;B2;C2)",
    "exampleMeaning": "Contoh pola NOMINAL financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "NPER": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola NPER financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=NPER(5%/12;60;100000)",
    "exampleMeaning": "Contoh pola NPER financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "NPV": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola NPV financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=NPV(A2:A6)",
    "exampleMeaning": "Contoh pola NPV financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ODDFPRICE": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola ODDFPRICE financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=ODDFPRICE(A2;B2;C2)",
    "exampleMeaning": "Contoh pola ODDFPRICE financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ODDFYIELD": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola ODDFYIELD financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=ODDFYIELD(A2;B2;C2)",
    "exampleMeaning": "Contoh pola ODDFYIELD financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ODDLPRICE": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola ODDLPRICE financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=ODDLPRICE(A2;B2;C2)",
    "exampleMeaning": "Contoh pola ODDLPRICE financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ODDLYIELD": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola ODDLYIELD financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=ODDLYIELD(A2;B2;C2)",
    "exampleMeaning": "Contoh pola ODDLYIELD financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PDURATION": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola PDURATION financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=PDURATION(A2;B2;C2)",
    "exampleMeaning": "Contoh pola PDURATION financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PMT": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola PMT financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=PMT(5%/12;60;100000)",
    "exampleMeaning": "Contoh pola PMT financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PPMT": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola PPMT financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=PPMT(5%/12;60;100000)",
    "exampleMeaning": "Contoh pola PPMT financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PRICE": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola PRICE financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=PRICE(A2;B2;C2)",
    "exampleMeaning": "Contoh pola PRICE financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PRICEDISC": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola PRICEDISC financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=PRICEDISC(A2;B2;C2)",
    "exampleMeaning": "Contoh pola PRICEDISC financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PRICEMAT": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola PRICEMAT financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=PRICEMAT(A2;B2;C2)",
    "exampleMeaning": "Contoh pola PRICEMAT financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PV": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola PV financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=PV(5%/12;60;100000)",
    "exampleMeaning": "Contoh pola PV financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "RATE": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola RATE financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=RATE(5%/12;60;100000)",
    "exampleMeaning": "Contoh pola RATE financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "RECEIVED": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola RECEIVED financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=RECEIVED(A2;B2;C2)",
    "exampleMeaning": "Contoh pola RECEIVED financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "RRI": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola RRI financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=RRI(A2;B2;C2)",
    "exampleMeaning": "Contoh pola RRI financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SLN": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola SLN financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=SLN(100000;20000;5)",
    "exampleMeaning": "Contoh pola SLN financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SYD": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola SYD financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=SYD(100000;20000;5)",
    "exampleMeaning": "Contoh pola SYD financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TBILLEQ": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola TBILLEQ financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=TBILLEQ(A2;B2;C2)",
    "exampleMeaning": "Contoh pola TBILLEQ financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TBILLPRICE": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola TBILLPRICE financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=TBILLPRICE(A2;B2;C2)",
    "exampleMeaning": "Contoh pola TBILLPRICE financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TBILLYIELD": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola TBILLYIELD financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=TBILLYIELD(A2;B2;C2)",
    "exampleMeaning": "Contoh pola TBILLYIELD financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "VDB": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola VDB financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=VDB(100000;20000;5)",
    "exampleMeaning": "Contoh pola VDB financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "XIRR": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola XIRR financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=XIRR(A2:A6)",
    "exampleMeaning": "Contoh pola XIRR financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "XNPV": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola XNPV financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=XNPV(A2:A6)",
    "exampleMeaning": "Contoh pola XNPV financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "YIELD": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola YIELD financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=YIELD(A2;B2;C2)",
    "exampleMeaning": "Contoh pola YIELD financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "YIELDDISC": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola YIELDDISC financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=YIELDDISC(A2;B2;C2)",
    "exampleMeaning": "Contoh pola YIELDDISC financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "YIELDMAT": {
    "description": "Menghitung kebutuhan keuangan.",
    "simpleLogic": "Excel menghitung bunga, cicilan, nilai sekarang, nilai masa depan, atau yield berdasarkan input finansial.",
    "useCase": "Untuk cicilan, investasi, obligasi, depresiasi, dan analisis keuangan.",
    "analogy": "Kayak kalkulator finance: masukkan bunga, periode, dan nilai uang, lalu keluar hasilnya.",
    "simpleExample": "Contoh pola YIELDMAT financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "exampleFormula": "=YIELDMAT(A2;B2;C2)",
    "exampleMeaning": "Contoh pola YIELDMAT financial. Sesuaikan rate, periode, dan nilai uang sesuai syntax.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CELL": {
    "description": "Mengambil informasi tentang cell.",
    "simpleLogic": "Excel bisa memberi info seperti alamat, format, atau nama file dari cell.",
    "useCase": "Untuk audit workbook dan informasi cell.",
    "analogy": "Kayak kartu identitas untuk sebuah cell.",
    "simpleExample": "Menampilkan alamat cell A2.",
    "exampleFormula": "=CELL(\"address\";A2)",
    "exampleMeaning": "Menampilkan alamat cell A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ERROR.TYPE": {
    "description": "Mengecek apakah rumus menghasilkan error.",
    "simpleLogic": "Jika hasilnya error apa pun, output TRUE.",
    "useCase": "Untuk membuat kontrol error.",
    "analogy": "Kayak alarm yang menyala kalau ada masalah di rumus.",
    "simpleExample": "Contoh pola ERROR.TYPE. Prinsipnya mirip ISERROR, tapi nama function dan detail argumennya mengikuti syntax ERROR.TYPE.",
    "exampleFormula": "=ERROR.TYPE(A2)",
    "exampleMeaning": "Contoh pola ERROR.TYPE. Prinsipnya mirip ISERROR, tapi nama function dan detail argumennya mengikuti syntax ERROR.TYPE.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "INFO": {
    "description": "Mengambil informasi tentang cell.",
    "simpleLogic": "Excel bisa memberi info seperti alamat, format, atau nama file dari cell.",
    "useCase": "Untuk audit workbook dan informasi cell.",
    "analogy": "Kayak kartu identitas untuk sebuah cell.",
    "simpleExample": "Contoh pola INFO. Prinsipnya mirip CELL, tapi nama function dan detail argumennya mengikuti syntax INFO.",
    "exampleFormula": "=INFO(A2)",
    "exampleMeaning": "Contoh pola INFO. Prinsipnya mirip CELL, tapi nama function dan detail argumennya mengikuti syntax INFO.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ISBLANK": {
    "description": "Mengecek apakah cell kosong.",
    "simpleLogic": "Jika cell belum ada isi, hasilnya TRUE. Kalau ada isi, FALSE.",
    "useCase": "Untuk validasi data wajib isi.",
    "analogy": "Kayak mengecek apakah kotak masih kosong.",
    "simpleExample": "TRUE jika A2 kosong.",
    "exampleFormula": "=ISBLANK(A2)",
    "exampleMeaning": "TRUE jika A2 kosong.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ISERR": {
    "description": "Mengecek apakah rumus menghasilkan error.",
    "simpleLogic": "Jika hasilnya error apa pun, output TRUE.",
    "useCase": "Untuk membuat kontrol error.",
    "analogy": "Kayak alarm yang menyala kalau ada masalah di rumus.",
    "simpleExample": "Contoh pola ISERR. Prinsipnya mirip ISERROR, tapi nama function dan detail argumennya mengikuti syntax ISERR.",
    "exampleFormula": "=ISERR(A2)",
    "exampleMeaning": "Contoh pola ISERR. Prinsipnya mirip ISERROR, tapi nama function dan detail argumennya mengikuti syntax ISERR.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ISERROR": {
    "description": "Mengecek apakah rumus menghasilkan error.",
    "simpleLogic": "Jika hasilnya error apa pun, output TRUE.",
    "useCase": "Untuk membuat kontrol error.",
    "analogy": "Kayak alarm yang menyala kalau ada masalah di rumus.",
    "simpleExample": "TRUE jika A2/B2 menghasilkan error.",
    "exampleFormula": "=ISERROR(A2/B2)",
    "exampleMeaning": "TRUE jika A2/B2 menghasilkan error.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ISEVEN": {
    "description": "Mengecek apakah isi cell adalah angka.",
    "simpleLogic": "Excel melihat apakah value bisa dianggap angka.",
    "useCase": "Untuk validasi input angka.",
    "analogy": "Kayak petugas yang mengecek apakah isinya benar-benar angka.",
    "simpleExample": "Contoh pola ISEVEN. Prinsipnya mirip ISNUMBER, tapi nama function dan detail argumennya mengikuti syntax ISEVEN.",
    "exampleFormula": "=ISEVEN(A2)",
    "exampleMeaning": "Contoh pola ISEVEN. Prinsipnya mirip ISNUMBER, tapi nama function dan detail argumennya mengikuti syntax ISEVEN.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ISFORMULA": {
    "description": "Mengecek apakah cell berisi formula.",
    "simpleLogic": "TRUE jika cell tersebut punya rumus.",
    "useCase": "Untuk audit file Excel.",
    "analogy": "Kayak mengecek apakah cell bekerja sendiri atau cuma berisi angka biasa.",
    "simpleExample": "TRUE jika A2 berisi formula.",
    "exampleFormula": "=ISFORMULA(A2)",
    "exampleMeaning": "TRUE jika A2 berisi formula.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ISLOGICAL": {
    "description": "Menghasilkan nilai logika ISLOGICAL.",
    "simpleLogic": "TRUE berarti kondisi benar atau aktif.",
    "useCase": "Untuk rumus logika, default condition, atau argumen tertentu.",
    "analogy": "Kayak jawaban Ya dalam bahasa Excel.",
    "simpleExample": "Contoh pola ISLOGICAL. Prinsipnya mirip TRUE, tapi nama function dan detail argumennya mengikuti syntax ISLOGICAL.",
    "exampleFormula": "=ISLOGICAL(A2)",
    "exampleMeaning": "Contoh pola ISLOGICAL. Prinsipnya mirip TRUE, tapi nama function dan detail argumennya mengikuti syntax ISLOGICAL.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ISNA": {
    "description": "Mengecek apakah hasilnya #N/A.",
    "simpleLogic": "TRUE jika value adalah error #N/A.",
    "useCase": "Untuk lookup yang datanya tidak ditemukan.",
    "analogy": "Kayak alarm khusus untuk status data tidak ada.",
    "simpleExample": "TRUE jika VLOOKUP menghasilkan #N/A.",
    "exampleFormula": "=ISNA(VLOOKUP(A2;E2:F10;2;0))",
    "exampleMeaning": "TRUE jika VLOOKUP menghasilkan #N/A.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ISNONTEXT": {
    "description": "Mengecek apakah isi cell adalah teks.",
    "simpleLogic": "Excel melihat apakah value berupa tulisan.",
    "useCase": "Untuk validasi nama, kode, atau label.",
    "analogy": "Kayak petugas yang mengecek apakah isinya tulisan.",
    "simpleExample": "Contoh pola ISNONTEXT. Prinsipnya mirip ISTEXT, tapi nama function dan detail argumennya mengikuti syntax ISNONTEXT.",
    "exampleFormula": "=ISNONTEXT(A2)",
    "exampleMeaning": "Contoh pola ISNONTEXT. Prinsipnya mirip ISTEXT, tapi nama function dan detail argumennya mengikuti syntax ISNONTEXT.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ISNUMBER": {
    "description": "Mengecek apakah isi cell adalah angka.",
    "simpleLogic": "Excel melihat apakah value bisa dianggap angka.",
    "useCase": "Untuk validasi input angka.",
    "analogy": "Kayak petugas yang mengecek apakah isinya benar-benar angka.",
    "simpleExample": "TRUE jika A2 berisi angka.",
    "exampleFormula": "=ISNUMBER(A2)",
    "exampleMeaning": "TRUE jika A2 berisi angka.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ISODD": {
    "description": "Mengecek apakah isi cell adalah angka.",
    "simpleLogic": "Excel melihat apakah value bisa dianggap angka.",
    "useCase": "Untuk validasi input angka.",
    "analogy": "Kayak petugas yang mengecek apakah isinya benar-benar angka.",
    "simpleExample": "Contoh pola ISODD. Prinsipnya mirip ISNUMBER, tapi nama function dan detail argumennya mengikuti syntax ISODD.",
    "exampleFormula": "=ISODD(A2)",
    "exampleMeaning": "Contoh pola ISODD. Prinsipnya mirip ISNUMBER, tapi nama function dan detail argumennya mengikuti syntax ISODD.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ISOMITTED": {
    "description": "Mengecek apakah cell kosong.",
    "simpleLogic": "Jika cell belum ada isi, hasilnya TRUE. Kalau ada isi, FALSE.",
    "useCase": "Untuk validasi data wajib isi.",
    "analogy": "Kayak mengecek apakah kotak masih kosong.",
    "simpleExample": "Contoh pola ISOMITTED. Prinsipnya mirip ISBLANK, tapi nama function dan detail argumennya mengikuti syntax ISOMITTED.",
    "exampleFormula": "=ISOMITTED(A2)",
    "exampleMeaning": "Contoh pola ISOMITTED. Prinsipnya mirip ISBLANK, tapi nama function dan detail argumennya mengikuti syntax ISOMITTED.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ISREF": {
    "description": "Mengecek apakah cell berisi formula.",
    "simpleLogic": "TRUE jika cell tersebut punya rumus.",
    "useCase": "Untuk audit file Excel.",
    "analogy": "Kayak mengecek apakah cell bekerja sendiri atau cuma berisi angka biasa.",
    "simpleExample": "Contoh pola ISREF. Prinsipnya mirip ISFORMULA, tapi nama function dan detail argumennya mengikuti syntax ISREF.",
    "exampleFormula": "=ISREF(A2)",
    "exampleMeaning": "Contoh pola ISREF. Prinsipnya mirip ISFORMULA, tapi nama function dan detail argumennya mengikuti syntax ISREF.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ISTEXT": {
    "description": "Mengecek apakah isi cell adalah teks.",
    "simpleLogic": "Excel melihat apakah value berupa tulisan.",
    "useCase": "Untuk validasi nama, kode, atau label.",
    "analogy": "Kayak petugas yang mengecek apakah isinya tulisan.",
    "simpleExample": "TRUE jika A2 berisi teks.",
    "exampleFormula": "=ISTEXT(A2)",
    "exampleMeaning": "TRUE jika A2 berisi teks.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "N": {
    "description": "Mengubah value tertentu menjadi angka.",
    "simpleLogic": "Angka tetap angka, TRUE jadi 1, FALSE jadi 0, teks biasanya jadi 0.",
    "useCase": "Untuk membantu perhitungan logika.",
    "analogy": "Kayak mengubah jawaban Ya/Tidak menjadi skor angka.",
    "simpleExample": "Hasilnya 1.",
    "exampleFormula": "=N(TRUE)",
    "exampleMeaning": "Hasilnya 1.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "NA": {
    "description": "Mengecek apakah hasilnya #N/A.",
    "simpleLogic": "TRUE jika value adalah error #N/A.",
    "useCase": "Untuk lookup yang datanya tidak ditemukan.",
    "analogy": "Kayak alarm khusus untuk status data tidak ada.",
    "simpleExample": "Contoh pola NA. Prinsipnya mirip ISNA, tapi nama function dan detail argumennya mengikuti syntax NA.",
    "exampleFormula": "=NA(A2)",
    "exampleMeaning": "Contoh pola NA. Prinsipnya mirip ISNA, tapi nama function dan detail argumennya mengikuti syntax NA.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SHEET": {
    "description": "Mengambil informasi tentang cell.",
    "simpleLogic": "Excel bisa memberi info seperti alamat, format, atau nama file dari cell.",
    "useCase": "Untuk audit workbook dan informasi cell.",
    "analogy": "Kayak kartu identitas untuk sebuah cell.",
    "simpleExample": "Contoh pola SHEET. Prinsipnya mirip CELL, tapi nama function dan detail argumennya mengikuti syntax SHEET.",
    "exampleFormula": "=SHEET(A2)",
    "exampleMeaning": "Contoh pola SHEET. Prinsipnya mirip CELL, tapi nama function dan detail argumennya mengikuti syntax SHEET.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SHEETS": {
    "description": "Mengambil informasi tentang cell.",
    "simpleLogic": "Excel bisa memberi info seperti alamat, format, atau nama file dari cell.",
    "useCase": "Untuk audit workbook dan informasi cell.",
    "analogy": "Kayak kartu identitas untuk sebuah cell.",
    "simpleExample": "Contoh pola SHEETS. Prinsipnya mirip CELL, tapi nama function dan detail argumennya mengikuti syntax SHEETS.",
    "exampleFormula": "=SHEETS(A2)",
    "exampleMeaning": "Contoh pola SHEETS. Prinsipnya mirip CELL, tapi nama function dan detail argumennya mengikuti syntax SHEETS.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TYPE": {
    "description": "Memberi kode jenis data.",
    "simpleLogic": "Excel mengembalikan angka yang mewakili tipe value.",
    "useCase": "Untuk audit data campuran.",
    "analogy": "Kayak memberi label jenis isi: angka, teks, logika, error.",
    "simpleExample": "Menampilkan kode tipe data dari A2.",
    "exampleFormula": "=TYPE(A2)",
    "exampleMeaning": "Menampilkan kode tipe data dari A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "AND": {
    "description": "Mengecek apakah semua syarat benar.",
    "simpleLogic": "Hasilnya TRUE hanya kalau semua kondisi terpenuhi. Kalau satu saja gagal, hasilnya FALSE.",
    "useCase": "Untuk validasi banyak syarat sekaligus.",
    "analogy": "Kayak masuk konser: harus punya tiket dan KTP. Kalau salah satu tidak ada, tidak bisa masuk.",
    "simpleExample": "TRUE jika nilai D2 minimal 75 dan E2 berisi Lunas.",
    "exampleFormula": "=AND(D2>=75;E2=\"Lunas\")",
    "exampleMeaning": "TRUE jika nilai D2 minimal 75 dan E2 berisi Lunas.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FALSE": {
    "description": "Menghasilkan nilai logika FALSE.",
    "simpleLogic": "FALSE berarti kondisi salah atau tidak aktif.",
    "useCase": "Untuk rumus logika atau default condition.",
    "analogy": "Kayak jawaban Tidak dalam bahasa Excel.",
    "simpleExample": "Menghasilkan FALSE.",
    "exampleFormula": "=FALSE()",
    "exampleMeaning": "Menghasilkan FALSE.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IF": {
    "description": "Membuat keputusan jika kondisi benar atau salah.",
    "simpleLogic": "Excel mengecek satu kondisi. Kalau benar, keluarkan hasil A. Kalau salah, keluarkan hasil B.",
    "useCase": "Untuk status Lulus/Tidak Lulus, Bonus/Tidak Bonus, atau Aman/Tidak Aman.",
    "analogy": "Kayak aturan sederhana: kalau nilai minimal 75 maka Lulus, kalau tidak maka Tidak Lulus.",
    "simpleExample": "Jika nilai D2 minimal 75, hasilnya Lulus. Kalau tidak, hasilnya Tidak Lulus.",
    "exampleFormula": "=IF(D2>=75;\"Lulus\";\"Tidak Lulus\")",
    "exampleMeaning": "Jika nilai D2 minimal 75, hasilnya Lulus. Kalau tidak, hasilnya Tidak Lulus.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IFERROR": {
    "description": "Mengganti hasil error dengan pesan yang lebih enak dibaca.",
    "simpleLogic": "Excel menjalankan rumus. Kalau error, hasilnya diganti dengan teks atau nilai cadangan.",
    "useCase": "Untuk menghindari tampilan #N/A, #DIV/0!, atau #VALUE! di laporan.",
    "analogy": "Kayak menyiapkan kalimat cadangan kalau data tidak ditemukan.",
    "simpleExample": "Jika VLOOKUP error, tampilkan Tidak ditemukan.",
    "exampleFormula": "=IFERROR(VLOOKUP(A2;E2:F10;2;0);\"Tidak ditemukan\")",
    "exampleMeaning": "Jika VLOOKUP error, tampilkan Tidak ditemukan.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IFNA": {
    "description": "Mengganti error #N/A saja.",
    "simpleLogic": "Kalau rumus menghasilkan #N/A, Excel menggantinya dengan nilai cadangan. Error lain tetap muncul.",
    "useCase": "Untuk lookup yang datanya mungkin tidak ada.",
    "analogy": "Kayak bilang: kalau nama tidak ada di daftar, tulis Belum terdaftar.",
    "simpleExample": "Jika XLOOKUP tidak menemukan data, tampilkan Belum ada.",
    "exampleFormula": "=IFNA(XLOOKUP(A2;E2:E10;F2:F10);\"Belum ada\")",
    "exampleMeaning": "Jika XLOOKUP tidak menemukan data, tampilkan Belum ada.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IFS": {
    "description": "Membuat keputusan dengan banyak kondisi.",
    "simpleLogic": "Excel mengecek kondisi dari atas ke bawah. Kondisi pertama yang cocok akan dipakai.",
    "useCase": "Untuk membuat grade A/B/C, level performa, atau status bertingkat.",
    "analogy": "Kayak penjaga gerbang yang cek beberapa aturan satu per satu: kalau VIP masuk jalur A, kalau reguler jalur B, kalau tidak cocok jalur C.",
    "simpleExample": "Jika D2 minimal 90 hasil A, jika minimal 75 hasil B, selain itu C.",
    "exampleFormula": "=IFS(D2>=90;\"A\";D2>=75;\"B\";TRUE;\"C\")",
    "exampleMeaning": "Jika D2 minimal 90 hasil A, jika minimal 75 hasil B, selain itu C.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "NOT": {
    "description": "Membalik hasil TRUE/FALSE.",
    "simpleLogic": "Kalau hasil awal TRUE, NOT membuatnya FALSE. Kalau FALSE, jadi TRUE.",
    "useCase": "Untuk mengecek kondisi kebalikannya.",
    "analogy": "Kayak saklar pembalik: menyala jadi mati, mati jadi menyala.",
    "simpleExample": "TRUE jika D2 tidak mencapai 75.",
    "exampleFormula": "=NOT(D2>=75)",
    "exampleMeaning": "TRUE jika D2 tidak mencapai 75.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "OR": {
    "description": "Mengecek apakah minimal satu syarat benar.",
    "simpleLogic": "Hasilnya TRUE kalau ada salah satu kondisi yang terpenuhi.",
    "useCase": "Untuk aturan yang punya beberapa jalan lolos.",
    "analogy": "Kayak boleh masuk kalau punya tiket atau namanya ada di guest list. Salah satu cukup.",
    "simpleExample": "TRUE jika B2 berisi Jakarta atau Bandung.",
    "exampleFormula": "=OR(B2=\"Jakarta\";B2=\"Bandung\")",
    "exampleMeaning": "TRUE jika B2 berisi Jakarta atau Bandung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SWITCH": {
    "description": "Memilih hasil berdasarkan satu nilai.",
    "simpleLogic": "Excel mencocokkan satu nilai dengan beberapa pilihan jawaban.",
    "useCase": "Untuk kode status, kode kelas, atau kode kategori.",
    "analogy": "Kayak menu pilihan: tekan 1 untuk Sales, 2 untuk Admin, 3 untuk Gudang.",
    "simpleExample": "Jika B2 A hasil Aktif, jika I hasil Inactive, selain itu Tidak dikenal.",
    "exampleFormula": "=SWITCH(B2;\"A\";\"Aktif\";\"I\";\"Inactive\";\"Tidak dikenal\")",
    "exampleMeaning": "Jika B2 A hasil Aktif, jika I hasil Inactive, selain itu Tidak dikenal.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TRUE": {
    "description": "Menghasilkan nilai logika TRUE.",
    "simpleLogic": "TRUE berarti kondisi benar atau aktif.",
    "useCase": "Untuk rumus logika, default condition, atau argumen tertentu.",
    "analogy": "Kayak jawaban Ya dalam bahasa Excel.",
    "simpleExample": "Menghasilkan TRUE.",
    "exampleFormula": "=TRUE()",
    "exampleMeaning": "Menghasilkan TRUE.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "XOR": {
    "description": "Mengecek kondisi yang ganjil jumlah benarnya.",
    "simpleLogic": "TRUE jika jumlah kondisi yang benar ganjil.",
    "useCase": "Jarang dipakai, biasanya untuk aturan logika khusus.",
    "analogy": "Kayak aturan salah satu boleh benar, tapi kalau dua-duanya benar malah tidak lolos.",
    "simpleExample": "TRUE jika hanya salah satu dari A2 atau B2 berisi Ya.",
    "exampleFormula": "=XOR(A2=\"Ya\";B2=\"Ya\")",
    "exampleMeaning": "TRUE jika hanya salah satu dari A2 atau B2 berisi Ya.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ADDRESS": {
    "description": "Membuat alamat cell dari nomor baris dan kolom.",
    "simpleLogic": "Kamu beri nomor baris dan kolom, Excel membuat alamat seperti A1.",
    "useCase": "Untuk membuat referensi dinamis.",
    "analogy": "Kayak mengubah koordinat rumah menjadi alamat lengkap.",
    "simpleExample": "Hasilnya $C$2.",
    "exampleFormula": "=ADDRESS(2;3)",
    "exampleMeaning": "Hasilnya $C$2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "AREAS": {
    "description": "Menghitung jumlah baris dalam range.",
    "simpleLogic": "Excel menghitung berapa baris yang ada di range.",
    "useCase": "Untuk ukuran tabel dinamis.",
    "analogy": "Kayak menghitung jumlah tingkat dalam rak.",
    "simpleExample": "Contoh pola AREAS. Prinsipnya mirip ROWS, tapi nama function dan detail argumennya mengikuti syntax AREAS.",
    "exampleFormula": "=AREAS(A2:A10)",
    "exampleMeaning": "Contoh pola AREAS. Prinsipnya mirip ROWS, tapi nama function dan detail argumennya mengikuti syntax AREAS.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CHOOSE": {
    "description": "Memilih satu hasil berdasarkan nomor pilihan.",
    "simpleLogic": "Kamu beri nomor, lalu Excel mengambil pilihan sesuai urutan itu.",
    "useCase": "Untuk memilih skenario, bulan, label, atau opsi.",
    "analogy": "Kayak memilih menu nomor 1, 2, atau 3.",
    "simpleExample": "Karena pilihannya 2, hasilnya Premium.",
    "exampleFormula": "=CHOOSE(2;\"Basic\";\"Premium\";\"Pro\")",
    "exampleMeaning": "Karena pilihannya 2, hasilnya Premium.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COLUMN": {
    "description": "Mengambil nomor kolom.",
    "simpleLogic": "Excel memberi tahu sebuah cell berada di kolom ke berapa.",
    "useCase": "Untuk formula dinamis atau penomoran kolom.",
    "analogy": "Kayak mengubah kolom A menjadi nomor 1.",
    "simpleExample": "Hasilnya 3.",
    "exampleFormula": "=COLUMN(C2)",
    "exampleMeaning": "Hasilnya 3.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COLUMNS": {
    "description": "Menghitung jumlah kolom dalam range.",
    "simpleLogic": "Excel menghitung berapa kolom yang ada di range.",
    "useCase": "Untuk ukuran tabel dinamis.",
    "analogy": "Kayak menghitung jumlah lajur dalam tabel.",
    "simpleExample": "Menghitung jumlah kolom dalam A1:E1.",
    "exampleFormula": "=COLUMNS(A1:E1)",
    "exampleMeaning": "Menghitung jumlah kolom dalam A1:E1.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FORMULATEXT": {
    "description": "Menampilkan rumus sebagai teks.",
    "simpleLogic": "Excel mengambil formula di cell lalu memperlihatkannya sebagai tulisan.",
    "useCase": "Untuk audit rumus atau dokumentasi.",
    "analogy": "Kayak membuka isi mesin rumus supaya terlihat.",
    "simpleExample": "Menampilkan formula yang ada di A2.",
    "exampleFormula": "=FORMULATEXT(A2)",
    "exampleMeaning": "Menampilkan formula yang ada di A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "GETPIVOTDATA": {
    "description": "Mencari data secara vertikal dari tabel referensi.",
    "simpleLogic": "Excel mencari lookup value di kolom pertama table array, lalu mengambil isi dari kolom ke-n pada baris yang sama.",
    "useCase": "Untuk ambil nama produk, harga, kategori, atau data master berdasarkan kode.",
    "analogy": "Kayak mencari kode barang di daftar harga, lalu mengambil nama atau harganya.",
    "simpleExample": "Contoh pola GETPIVOTDATA. Prinsipnya mirip VLOOKUP, tapi nama function dan detail argumennya mengikuti syntax GETPIVOTDATA.",
    "exampleFormula": "=GETPIVOTDATA(A2:A10)",
    "exampleMeaning": "Contoh pola GETPIVOTDATA. Prinsipnya mirip VLOOKUP, tapi nama function dan detail argumennya mengikuti syntax GETPIVOTDATA.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "HLOOKUP": {
    "description": "Mencari data secara horizontal dari tabel referensi.",
    "simpleLogic": "Excel mencari nilai di baris pertama table array, lalu mengambil isi dari baris ke-n pada kolom yang sama.",
    "useCase": "Untuk data master yang susunannya melebar ke samping.",
    "analogy": "Kayak mencari judul bulan di baris atas, lalu ambil angka di baris bawahnya.",
    "simpleExample": "Cari B1 di baris pertama B1:F3, lalu ambil data dari baris ke-2.",
    "exampleFormula": "=HLOOKUP(B1;B1:F3;2;0)",
    "exampleMeaning": "Cari B1 di baris pertama B1:F3, lalu ambil data dari baris ke-2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "HYPERLINK": {
    "description": "Membuat link yang bisa diklik.",
    "simpleLogic": "Excel menampilkan teks yang jika diklik membuka alamat/link tertentu.",
    "useCase": "Untuk link invoice, file, website, atau email.",
    "analogy": "Kayak membuat tombol jalan pintas ke alamat web.",
    "simpleExample": "Membuat teks Buka Link yang bisa diklik.",
    "exampleFormula": "=HYPERLINK(\"https://example.com\";\"Buka Link\")",
    "exampleMeaning": "Membuat teks Buka Link yang bisa diklik.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "IMAGE": {
    "description": "Membuat link yang bisa diklik.",
    "simpleLogic": "Excel menampilkan teks yang jika diklik membuka alamat/link tertentu.",
    "useCase": "Untuk link invoice, file, website, atau email.",
    "analogy": "Kayak membuat tombol jalan pintas ke alamat web.",
    "simpleExample": "Contoh pola IMAGE. Prinsipnya mirip HYPERLINK, tapi nama function dan detail argumennya mengikuti syntax IMAGE.",
    "exampleFormula": "=IMAGE(\"3+4i\")",
    "exampleMeaning": "Contoh pola IMAGE. Prinsipnya mirip HYPERLINK, tapi nama function dan detail argumennya mengikuti syntax IMAGE.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "INDEX": {
    "description": "Mengambil isi berdasarkan posisi baris dan kolom.",
    "simpleLogic": "Kamu kasih range, nomor baris, dan nomor kolom. Excel mengambil isi di titik temu itu.",
    "useCase": "Untuk mengambil data dari posisi tertentu atau digabung dengan MATCH.",
    "analogy": "Kayak koordinat kursi bioskop: baris ke-3 kolom ke-2.",
    "simpleExample": "Ambil isi dari range E2:I8 pada baris ke-3 kolom ke-2.",
    "exampleFormula": "=INDEX(E2:I8;3;2)",
    "exampleMeaning": "Ambil isi dari range E2:I8 pada baris ke-3 kolom ke-2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "INDEX MATCH": {
    "description": "Mengambil data dengan kombinasi posisi baris dan kolom.",
    "simpleLogic": "MATCH mencari posisi data, lalu INDEX mengambil isi berdasarkan posisi itu.",
    "useCase": "Alternatif VLOOKUP yang lebih fleksibel.",
    "analogy": "Kayak MATCH mencari nomor rak, lalu INDEX mengambil barang dari rak itu.",
    "simpleExample": "Cari posisi A2 di E2:E8, lalu ambil data sejajar dari F2:F8.",
    "exampleFormula": "=INDEX(F2:F8;MATCH(A2;E2:E8;0))",
    "exampleMeaning": "Cari posisi A2 di E2:E8, lalu ambil data sejajar dari F2:F8.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "INDIRECT": {
    "description": "Mengubah teks menjadi referensi cell/range.",
    "simpleLogic": "Excel membaca teks seperti \"A1\" sebagai alamat cell asli.",
    "useCase": "Untuk referensi dinamis berdasarkan pilihan user.",
    "analogy": "Kayak teks alamat yang berubah menjadi lokasi asli.",
    "simpleExample": "Mengambil nilai dari cell A2.",
    "exampleFormula": "=INDIRECT(\"A\"&2)",
    "exampleMeaning": "Mengambil nilai dari cell A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "LOOKUP": {
    "description": "Mencari nilai di satu baris/kolom lalu mengambil hasil yang sejajar.",
    "simpleLogic": "Excel mencari nilai terdekat dalam data yang biasanya sudah berurutan.",
    "useCase": "Untuk lookup sederhana di data lama.",
    "analogy": "Kayak mencari nama di daftar yang sudah disusun urut.",
    "simpleExample": "Cari A2 di E2:E8 lalu ambil hasil sejajar dari F2:F8.",
    "exampleFormula": "=LOOKUP(A2;E2:E8;F2:F8)",
    "exampleMeaning": "Cari A2 di E2:E8 lalu ambil hasil sejajar dari F2:F8.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MATCH": {
    "description": "Mencari posisi sebuah nilai.",
    "simpleLogic": "Excel mencari nilai dalam satu range lalu memberi tahu posisinya ke berapa.",
    "useCase": "Untuk mencari posisi kode, nama, atau header.",
    "analogy": "Kayak mencari nomor antrean seseorang di daftar.",
    "simpleExample": "Cari A2 di E2:E8 dan kembalikan posisi exact match.",
    "exampleFormula": "=MATCH(A2;E2:E8;0)",
    "exampleMeaning": "Cari A2 di E2:E8 dan kembalikan posisi exact match.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "OFFSET": {
    "description": "Menggeser referensi dari titik awal.",
    "simpleLogic": "Excel mulai dari cell awal, lalu bergerak beberapa baris dan kolom.",
    "useCase": "Untuk range dinamis.",
    "analogy": "Kayak mulai dari satu titik di peta, lalu maju 2 langkah dan kanan 1 langkah.",
    "simpleExample": "Dari A1 turun 1 baris dan kanan 2 kolom, hasil referensinya C2.",
    "exampleFormula": "=OFFSET(A1;1;2)",
    "exampleMeaning": "Dari A1 turun 1 baris dan kanan 2 kolom, hasil referensinya C2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ROW": {
    "description": "Mengambil nomor baris.",
    "simpleLogic": "Excel memberi tahu sebuah cell berada di baris ke berapa.",
    "useCase": "Untuk penomoran otomatis atau formula dinamis.",
    "analogy": "Kayak melihat nomor baris di pinggir sheet.",
    "simpleExample": "Hasilnya 2.",
    "exampleFormula": "=ROW(A2)",
    "exampleMeaning": "Hasilnya 2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ROWS": {
    "description": "Menghitung jumlah baris dalam range.",
    "simpleLogic": "Excel menghitung berapa baris yang ada di range.",
    "useCase": "Untuk ukuran tabel dinamis.",
    "analogy": "Kayak menghitung jumlah tingkat dalam rak.",
    "simpleExample": "Menghitung jumlah baris dalam A2:A16.",
    "exampleFormula": "=ROWS(A2:A16)",
    "exampleMeaning": "Menghitung jumlah baris dalam A2:A16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "RTD": {
    "description": "Mencari atau mengambil data dari posisi tertentu.",
    "simpleLogic": "Excel mencari nilai, posisi, baris, kolom, atau alamat cell lalu mengambil hasil yang sesuai.",
    "useCase": "Untuk ambil data master, harga, nama produk, dan referensi dinamis.",
    "analogy": "Kayak mencari kode barang di katalog lalu mengambil info yang sejajar.",
    "simpleExample": "Contoh pola lookup/reference. Sesuaikan lookup value dan range referensi.",
    "exampleFormula": "=RTD(A2:A10)",
    "exampleMeaning": "Contoh pola lookup/reference. Sesuaikan lookup value dan range referensi.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "VLOOKUP": {
    "description": "Mencari data secara vertikal dari tabel referensi.",
    "simpleLogic": "Excel mencari lookup value di kolom pertama table array, lalu mengambil isi dari kolom ke-n pada baris yang sama.",
    "useCase": "Untuk ambil nama produk, harga, kategori, atau data master berdasarkan kode.",
    "analogy": "Kayak mencari kode barang di daftar harga, lalu mengambil nama atau harganya.",
    "simpleExample": "Cari kode di A2 pada kolom pertama E2:I8, lalu ambil kolom ke-2 dengan exact match.",
    "exampleFormula": "=VLOOKUP(A2;E2:I8;2;0)",
    "exampleMeaning": "Cari kode di A2 pada kolom pertama E2:I8, lalu ambil kolom ke-2 dengan exact match.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ABS": {
    "description": "Mengubah angka menjadi positif.",
    "simpleLogic": "Excel mengambil nilai jarak dari nol, jadi tanda minus dihilangkan.",
    "useCase": "Untuk selisih yang tidak peduli minus/plus.",
    "analogy": "Kayak melihat jarak 5 langkah, tidak peduli arahnya ke kiri atau kanan.",
    "simpleExample": "Hasilnya 250.",
    "exampleFormula": "=ABS(-250)",
    "exampleMeaning": "Hasilnya 250.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ACOS": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola ACOS matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=ACOS(A2)",
    "exampleMeaning": "Contoh pola ACOS matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ACOSH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola ACOSH matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=ACOSH(A2)",
    "exampleMeaning": "Contoh pola ACOSH matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ACOT": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola ACOT matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=ACOT(A2)",
    "exampleMeaning": "Contoh pola ACOT matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ACOTH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola ACOTH matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=ACOTH(A2)",
    "exampleMeaning": "Contoh pola ACOTH matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "AGGREGATE": {
    "description": "Menghitung data dengan opsi mengabaikan error atau baris tersembunyi.",
    "simpleLogic": "Excel menjalankan function tertentu dengan aturan tambahan.",
    "useCase": "Untuk laporan yang datanya punya error atau hidden row.",
    "analogy": "Kayak kalkulator yang bisa disuruh mengabaikan data rusak.",
    "simpleExample": "Menjumlahkan E2:E16 dan mengabaikan error.",
    "exampleFormula": "=AGGREGATE(9;6;E2:E16)",
    "exampleMeaning": "Menjumlahkan E2:E16 dan mengabaikan error.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ARABIC": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola ARABIC matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=ARABIC(A2:A10)",
    "exampleMeaning": "Contoh pola ARABIC matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ASIN": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola ASIN matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=ASIN(A2)",
    "exampleMeaning": "Contoh pola ASIN matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ASINH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola ASINH matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=ASINH(A2)",
    "exampleMeaning": "Contoh pola ASINH matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ATAN": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola ATAN matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=ATAN(A2)",
    "exampleMeaning": "Contoh pola ATAN matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ATAN2": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola ATAN2 matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=ATAN2(A2;B2)",
    "exampleMeaning": "Contoh pola ATAN2 matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ATANH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola ATANH matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=ATANH(A2)",
    "exampleMeaning": "Contoh pola ATANH matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BASE": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola BASE matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=BASE(A2;B2)",
    "exampleMeaning": "Contoh pola BASE matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CEILING": {
    "description": "Membulatkan angka ke atas ke kelipatan tertentu.",
    "simpleLogic": "Excel menaikkan angka ke kelipatan yang kamu tentukan.",
    "useCase": "Untuk pembulatan packing, harga, atau kapasitas.",
    "analogy": "Kayak harga 12.300 dibulatkan ke kelipatan 500 terdekat ke atas.",
    "simpleExample": "Bulatkan A2 ke atas ke kelipatan 500.",
    "exampleFormula": "=CEILING(A2;500)",
    "exampleMeaning": "Bulatkan A2 ke atas ke kelipatan 500.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CEILING.MATH": {
    "description": "Membulatkan angka ke atas ke kelipatan tertentu.",
    "simpleLogic": "Excel menaikkan angka ke kelipatan yang kamu tentukan.",
    "useCase": "Untuk pembulatan packing, harga, atau kapasitas.",
    "analogy": "Kayak harga 12.300 dibulatkan ke kelipatan 500 terdekat ke atas.",
    "simpleExample": "Contoh pola CEILING.MATH. Prinsipnya mirip CEILING, tapi nama function dan detail argumennya mengikuti syntax CEILING.MATH.",
    "exampleFormula": "=CEILING.MATH(A2:A10)",
    "exampleMeaning": "Contoh pola CEILING.MATH. Prinsipnya mirip CEILING, tapi nama function dan detail argumennya mengikuti syntax CEILING.MATH.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CEILING.PRECISE": {
    "description": "Membulatkan angka ke atas ke kelipatan tertentu.",
    "simpleLogic": "Excel menaikkan angka ke kelipatan yang kamu tentukan.",
    "useCase": "Untuk pembulatan packing, harga, atau kapasitas.",
    "analogy": "Kayak harga 12.300 dibulatkan ke kelipatan 500 terdekat ke atas.",
    "simpleExample": "Contoh pola CEILING.PRECISE. Prinsipnya mirip CEILING, tapi nama function dan detail argumennya mengikuti syntax CEILING.PRECISE.",
    "exampleFormula": "=CEILING.PRECISE(A2:A10)",
    "exampleMeaning": "Contoh pola CEILING.PRECISE. Prinsipnya mirip CEILING, tapi nama function dan detail argumennya mengikuti syntax CEILING.PRECISE.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COMBIN": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola COMBIN matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=COMBIN(A2;B2)",
    "exampleMeaning": "Contoh pola COMBIN matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COMBINA": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola COMBINA matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=COMBINA(A2;B2)",
    "exampleMeaning": "Contoh pola COMBINA matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COS": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola COS matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=COS(A2)",
    "exampleMeaning": "Contoh pola COS matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COSH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola COSH matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=COSH(A2)",
    "exampleMeaning": "Contoh pola COSH matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COT": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola COT matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=COT(A2)",
    "exampleMeaning": "Contoh pola COT matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COTH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola COTH matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=COTH(A2)",
    "exampleMeaning": "Contoh pola COTH matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CSC": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola CSC matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=CSC(A2)",
    "exampleMeaning": "Contoh pola CSC matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CSCH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola CSCH matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=CSCH(A2)",
    "exampleMeaning": "Contoh pola CSCH matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DECIMAL": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola DECIMAL matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=DECIMAL(A2;B2)",
    "exampleMeaning": "Contoh pola DECIMAL matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DEGREES": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola DEGREES matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=DEGREES(A2)",
    "exampleMeaning": "Contoh pola DEGREES matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "EVEN": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola EVEN matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=EVEN(A2)",
    "exampleMeaning": "Contoh pola EVEN matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "EXP": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola EXP matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=EXP(A2)",
    "exampleMeaning": "Contoh pola EXP matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FACT": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola FACT matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=FACT(A2)",
    "exampleMeaning": "Contoh pola FACT matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FACTDOUBLE": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola FACTDOUBLE matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=FACTDOUBLE(A2)",
    "exampleMeaning": "Contoh pola FACTDOUBLE matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FLOOR": {
    "description": "Membulatkan angka ke bawah ke kelipatan tertentu.",
    "simpleLogic": "Excel menurunkan angka ke kelipatan yang kamu tentukan.",
    "useCase": "Untuk pembulatan bawah ke kelipatan tertentu.",
    "analogy": "Kayak memotong angka ke kelipatan 500 di bawahnya.",
    "simpleExample": "Bulatkan A2 ke bawah ke kelipatan 500.",
    "exampleFormula": "=FLOOR(A2;500)",
    "exampleMeaning": "Bulatkan A2 ke bawah ke kelipatan 500.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FLOOR.MATH": {
    "description": "Membulatkan angka ke bawah ke kelipatan tertentu.",
    "simpleLogic": "Excel menurunkan angka ke kelipatan yang kamu tentukan.",
    "useCase": "Untuk pembulatan bawah ke kelipatan tertentu.",
    "analogy": "Kayak memotong angka ke kelipatan 500 di bawahnya.",
    "simpleExample": "Contoh pola FLOOR.MATH. Prinsipnya mirip FLOOR, tapi nama function dan detail argumennya mengikuti syntax FLOOR.MATH.",
    "exampleFormula": "=FLOOR.MATH(A2:A10)",
    "exampleMeaning": "Contoh pola FLOOR.MATH. Prinsipnya mirip FLOOR, tapi nama function dan detail argumennya mengikuti syntax FLOOR.MATH.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FLOOR.PRECISE": {
    "description": "Membulatkan angka ke bawah ke kelipatan tertentu.",
    "simpleLogic": "Excel menurunkan angka ke kelipatan yang kamu tentukan.",
    "useCase": "Untuk pembulatan bawah ke kelipatan tertentu.",
    "analogy": "Kayak memotong angka ke kelipatan 500 di bawahnya.",
    "simpleExample": "Contoh pola FLOOR.PRECISE. Prinsipnya mirip FLOOR, tapi nama function dan detail argumennya mengikuti syntax FLOOR.PRECISE.",
    "exampleFormula": "=FLOOR.PRECISE(A2:A10)",
    "exampleMeaning": "Contoh pola FLOOR.PRECISE. Prinsipnya mirip FLOOR, tapi nama function dan detail argumennya mengikuti syntax FLOOR.PRECISE.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "GCD": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola GCD matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=GCD(A2;B2)",
    "exampleMeaning": "Contoh pola GCD matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "INT": {
    "description": "Mengambil angka bulat ke bawah.",
    "simpleLogic": "Excel membulatkan angka turun ke integer terdekat.",
    "useCase": "Untuk mengambil bagian angka bulat.",
    "analogy": "Kayak mengambil lantai bawah dari angka desimal.",
    "simpleExample": "Hasilnya 7.",
    "exampleFormula": "=INT(7.9)",
    "exampleMeaning": "Hasilnya 7.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ISO.CEILING": {
    "description": "Membulatkan angka ke atas ke kelipatan tertentu.",
    "simpleLogic": "Excel menaikkan angka ke kelipatan yang kamu tentukan.",
    "useCase": "Untuk pembulatan packing, harga, atau kapasitas.",
    "analogy": "Kayak harga 12.300 dibulatkan ke kelipatan 500 terdekat ke atas.",
    "simpleExample": "Contoh pola ISO.CEILING. Prinsipnya mirip CEILING, tapi nama function dan detail argumennya mengikuti syntax ISO.CEILING.",
    "exampleFormula": "=ISO.CEILING(A2:A10)",
    "exampleMeaning": "Contoh pola ISO.CEILING. Prinsipnya mirip CEILING, tapi nama function dan detail argumennya mengikuti syntax ISO.CEILING.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "LCM": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola LCM matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=LCM(A2;B2)",
    "exampleMeaning": "Contoh pola LCM matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "LN": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola LN matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=LN(A2)",
    "exampleMeaning": "Contoh pola LN matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "LOG": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola LOG matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=LOG(A2;B2)",
    "exampleMeaning": "Contoh pola LOG matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "LOG10": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola LOG10 matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=LOG10(A2)",
    "exampleMeaning": "Contoh pola LOG10 matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MDETERM": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola MDETERM matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=MDETERM(A2:C4)",
    "exampleMeaning": "Contoh pola MDETERM matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MINVERSE": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola MINVERSE matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=MINVERSE(A2:C4)",
    "exampleMeaning": "Contoh pola MINVERSE matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MMULT": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola MMULT matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=MMULT(A2:C4)",
    "exampleMeaning": "Contoh pola MMULT matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MOD": {
    "description": "Mengambil sisa pembagian.",
    "simpleLogic": "Excel membagi angka lalu mengembalikan sisanya.",
    "useCase": "Untuk pola ganjil/genap, batch, atau siklus.",
    "analogy": "Kayak membagi permen ke beberapa orang, lalu melihat sisa permennya.",
    "simpleExample": "Mengambil sisa pembagian A2 dengan 2.",
    "exampleFormula": "=MOD(A2;2)",
    "exampleMeaning": "Mengambil sisa pembagian A2 dengan 2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MROUND": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola MROUND matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=MROUND(A2;B2)",
    "exampleMeaning": "Contoh pola MROUND matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MULTINOMIAL": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola MULTINOMIAL matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=MULTINOMIAL(A2:A10)",
    "exampleMeaning": "Contoh pola MULTINOMIAL matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MUNIT": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola MUNIT matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=MUNIT(A2:C4)",
    "exampleMeaning": "Contoh pola MUNIT matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ODD": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola ODD matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=ODD(A2)",
    "exampleMeaning": "Contoh pola ODD matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PI": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola PI matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=PI(A2:A10)",
    "exampleMeaning": "Contoh pola PI matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "POWER": {
    "description": "Menghitung pangkat.",
    "simpleLogic": "Excel mengalikan angka dengan dirinya sendiri sesuai pangkat.",
    "useCase": "Untuk kuadrat, kubik, atau perhitungan matematika.",
    "analogy": "Kayak 5 pangkat 2 artinya 5 dikali 5.",
    "simpleExample": "Hitung A2 pangkat 2.",
    "exampleFormula": "=POWER(A2;2)",
    "exampleMeaning": "Hitung A2 pangkat 2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PRODUCT": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola PRODUCT matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=PRODUCT(A2:A10)",
    "exampleMeaning": "Contoh pola PRODUCT matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "QUOTIENT": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola QUOTIENT matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=QUOTIENT(A2;B2)",
    "exampleMeaning": "Contoh pola QUOTIENT matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "RADIANS": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola RADIANS matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=RADIANS(A2)",
    "exampleMeaning": "Contoh pola RADIANS matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "RAND": {
    "description": "Membuat angka acak antara 0 dan 1.",
    "simpleLogic": "Excel menghasilkan angka random yang berubah saat sheet dihitung ulang.",
    "useCase": "Untuk simulasi atau data dummy.",
    "analogy": "Kayak mengambil angka acak dari mesin undian.",
    "simpleExample": "Menghasilkan angka acak antara 0 dan 1.",
    "exampleFormula": "=RAND()",
    "exampleMeaning": "Menghasilkan angka acak antara 0 dan 1.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "RANDBETWEEN": {
    "description": "Membuat angka acak dalam batas tertentu.",
    "simpleLogic": "Excel memilih angka random dari angka bawah sampai angka atas.",
    "useCase": "Untuk data dummy nilai, nomor undian, atau sampling.",
    "analogy": "Kayak undian nomor 1 sampai 100.",
    "simpleExample": "Menghasilkan angka acak dari 1 sampai 100.",
    "exampleFormula": "=RANDBETWEEN(1;100)",
    "exampleMeaning": "Menghasilkan angka acak dari 1 sampai 100.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ROMAN": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola ROMAN matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=ROMAN(A2:A10)",
    "exampleMeaning": "Contoh pola ROMAN matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ROUND": {
    "description": "Membulatkan angka ke jumlah digit tertentu.",
    "simpleLogic": "Excel melihat digit berikutnya untuk menentukan naik atau turun.",
    "useCase": "Untuk pembulatan nilai, harga, atau persentase.",
    "analogy": "Kayak membulatkan nilai 87,6 menjadi 88.",
    "simpleExample": "Bulatkan angka di A2 ke bilangan bulat terdekat.",
    "exampleFormula": "=ROUND(A2;0)",
    "exampleMeaning": "Bulatkan angka di A2 ke bilangan bulat terdekat.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ROUNDDOWN": {
    "description": "Membulatkan angka ke bawah.",
    "simpleLogic": "Excel selalu menurunkan angka mendekati nol.",
    "useCase": "Untuk mengambil angka utuh tanpa membulatkan naik.",
    "analogy": "Kayak hanya menghitung box penuh, sisa sedikit tidak dihitung.",
    "simpleExample": "Bulatkan A2 ke bawah.",
    "exampleFormula": "=ROUNDDOWN(A2;0)",
    "exampleMeaning": "Bulatkan A2 ke bawah.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ROUNDUP": {
    "description": "Membulatkan angka ke atas.",
    "simpleLogic": "Excel selalu menaikkan angka menjauhi nol.",
    "useCase": "Untuk stok, packing, atau kebutuhan yang tidak boleh kurang.",
    "analogy": "Kayak kalau butuh 2,1 box, tetap harus sedia 3 box.",
    "simpleExample": "Bulatkan A2 ke atas.",
    "exampleFormula": "=ROUNDUP(A2;0)",
    "exampleMeaning": "Bulatkan A2 ke atas.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SEC": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola SEC matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=SEC(A2)",
    "exampleMeaning": "Contoh pola SEC matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SECH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola SECH matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=SECH(A2)",
    "exampleMeaning": "Contoh pola SECH matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SERIESSUM": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola SERIESSUM matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=SERIESSUM(A2:A10)",
    "exampleMeaning": "Contoh pola SERIESSUM matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SIGN": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola SIGN matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=SIGN(A2)",
    "exampleMeaning": "Contoh pola SIGN matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SIN": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola SIN matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=SIN(A2)",
    "exampleMeaning": "Contoh pola SIN matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SINH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola SINH matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=SINH(A2)",
    "exampleMeaning": "Contoh pola SINH matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SQRT": {
    "description": "Menghitung akar kuadrat.",
    "simpleLogic": "Excel mencari angka yang jika dikali dirinya sendiri menghasilkan angka awal.",
    "useCase": "Untuk perhitungan matematika dan statistik.",
    "analogy": "Kayak mencari sisi persegi jika luasnya sudah diketahui.",
    "simpleExample": "Hitung akar kuadrat dari A2.",
    "exampleFormula": "=SQRT(A2)",
    "exampleMeaning": "Hitung akar kuadrat dari A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SQRTPI": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola SQRTPI matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=SQRTPI(A2)",
    "exampleMeaning": "Contoh pola SQRTPI matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SUBTOTAL": {
    "description": "Menghitung data yang bisa mengikuti filter.",
    "simpleLogic": "Excel menghitung total/rata-rata/count dengan nomor function tertentu, sering dipakai pada data terfilter.",
    "useCase": "Untuk laporan yang memakai filter.",
    "analogy": "Kayak menghitung hanya baris yang sedang kelihatan.",
    "simpleExample": "Menjumlahkan E2:E16 dengan mode SUM subtotal.",
    "exampleFormula": "=SUBTOTAL(9;E2:E16)",
    "exampleMeaning": "Menjumlahkan E2:E16 dengan mode SUM subtotal.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SUMPRODUCT": {
    "description": "Mengalikan pasangan angka lalu menjumlahkan hasilnya.",
    "simpleLogic": "Excel mengalikan item baris per baris, lalu total semuanya.",
    "useCase": "Untuk total penjualan dari Qty x Harga tanpa kolom bantu.",
    "analogy": "Kayak menghitung total belanja: setiap item qty dikali harga, lalu dijumlahkan.",
    "simpleExample": "Kalikan D2:D16 dengan E2:E16 per baris, lalu jumlahkan.",
    "exampleFormula": "=SUMPRODUCT(D2:D16;E2:E16)",
    "exampleMeaning": "Kalikan D2:D16 dengan E2:E16 per baris, lalu jumlahkan.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SUMSQ": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola SUMSQ matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=SUMSQ(A2:A10)",
    "exampleMeaning": "Contoh pola SUMSQ matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SUMX2MY2": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola SUMX2MY2 matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=SUMX2MY2(A2:A10)",
    "exampleMeaning": "Contoh pola SUMX2MY2 matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SUMX2PY2": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola SUMX2PY2 matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=SUMX2PY2(A2:A10)",
    "exampleMeaning": "Contoh pola SUMX2PY2 matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SUMXMY2": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola SUMXMY2 matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=SUMXMY2(A2:A10)",
    "exampleMeaning": "Contoh pola SUMXMY2 matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TAN": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola TAN matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=TAN(A2)",
    "exampleMeaning": "Contoh pola TAN matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TANH": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola TANH matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=TANH(A2)",
    "exampleMeaning": "Contoh pola TANH matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TRUNC": {
    "description": "Menghitung angka dengan aturan matematika.",
    "simpleLogic": "Excel memproses angka/range sesuai fungsi, seperti total, pangkat, akar, pembulatan, atau trigonometri.",
    "useCase": "Untuk hitungan angka, rounding, total, dan model matematika.",
    "analogy": "Kayak kalkulator yang punya tombol khusus untuk tiap jenis hitungan.",
    "simpleExample": "Contoh pola TRUNC matematika. Sesuaikan angka atau range yang dihitung.",
    "exampleFormula": "=TRUNC(A2)",
    "exampleMeaning": "Contoh pola TRUNC matematika. Sesuaikan angka atau range yang dihitung.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CALL": {
    "description": "Memanggil fungsi khusus dari add-in atau sistem lama.",
    "simpleLogic": "Excel menjalankan fungsi tambahan yang tidak selalu tersedia di semua file.",
    "useCase": "Untuk file lama, add-in khusus, atau koneksi eksternal.",
    "analogy": "Kayak tombol khusus yang hanya muncul kalau add-in-nya terpasang.",
    "simpleExample": "Contoh pola CALL add-in. Biasanya perlu add-in atau setting khusus.",
    "exampleFormula": "=CALL(A2:A10)",
    "exampleMeaning": "Contoh pola CALL add-in. Biasanya perlu add-in atau setting khusus.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CUBEKPIMEMBER": {
    "description": "Mengambil data dari model OLAP/Cube.",
    "simpleLogic": "Excel meminta anggota, set, atau nilai dari cube data yang tersambung.",
    "useCase": "Untuk laporan pivot/model data perusahaan yang memakai cube.",
    "analogy": "Kayak bertanya ke gudang data besar: ambilkan angka penjualan dari kategori dan bulan tertentu.",
    "simpleExample": "Contoh pola CUBEKPIMEMBER cube. Biasanya argumennya mengikuti koneksi cube di workbook.",
    "exampleFormula": "=CUBEKPIMEMBER(\"ThisWorkbookDataModel\";\"[Measures].[Total Sales]\")",
    "exampleMeaning": "Contoh pola CUBEKPIMEMBER cube. Biasanya argumennya mengikuti koneksi cube di workbook.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CUBEMEMBER": {
    "description": "Mengambil data dari model OLAP/Cube.",
    "simpleLogic": "Excel meminta anggota, set, atau nilai dari cube data yang tersambung.",
    "useCase": "Untuk laporan pivot/model data perusahaan yang memakai cube.",
    "analogy": "Kayak bertanya ke gudang data besar: ambilkan angka penjualan dari kategori dan bulan tertentu.",
    "simpleExample": "Contoh pola CUBEMEMBER cube. Biasanya argumennya mengikuti koneksi cube di workbook.",
    "exampleFormula": "=CUBEMEMBER(\"ThisWorkbookDataModel\";\"[Measures].[Total Sales]\")",
    "exampleMeaning": "Contoh pola CUBEMEMBER cube. Biasanya argumennya mengikuti koneksi cube di workbook.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CUBEMEMBERPROPERTY": {
    "description": "Mengambil data dari model OLAP/Cube.",
    "simpleLogic": "Excel meminta anggota, set, atau nilai dari cube data yang tersambung.",
    "useCase": "Untuk laporan pivot/model data perusahaan yang memakai cube.",
    "analogy": "Kayak bertanya ke gudang data besar: ambilkan angka penjualan dari kategori dan bulan tertentu.",
    "simpleExample": "Contoh pola CUBEMEMBERPROPERTY cube. Biasanya argumennya mengikuti koneksi cube di workbook.",
    "exampleFormula": "=CUBEMEMBERPROPERTY(\"ThisWorkbookDataModel\";\"[Measures].[Total Sales]\")",
    "exampleMeaning": "Contoh pola CUBEMEMBERPROPERTY cube. Biasanya argumennya mengikuti koneksi cube di workbook.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CUBERANKEDMEMBER": {
    "description": "Mengambil data dari model OLAP/Cube.",
    "simpleLogic": "Excel meminta anggota, set, atau nilai dari cube data yang tersambung.",
    "useCase": "Untuk laporan pivot/model data perusahaan yang memakai cube.",
    "analogy": "Kayak bertanya ke gudang data besar: ambilkan angka penjualan dari kategori dan bulan tertentu.",
    "simpleExample": "Contoh pola CUBERANKEDMEMBER cube. Biasanya argumennya mengikuti koneksi cube di workbook.",
    "exampleFormula": "=CUBERANKEDMEMBER(\"ThisWorkbookDataModel\";\"[Measures].[Total Sales]\")",
    "exampleMeaning": "Contoh pola CUBERANKEDMEMBER cube. Biasanya argumennya mengikuti koneksi cube di workbook.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CUBESET": {
    "description": "Mengambil data dari model OLAP/Cube.",
    "simpleLogic": "Excel meminta anggota, set, atau nilai dari cube data yang tersambung.",
    "useCase": "Untuk laporan pivot/model data perusahaan yang memakai cube.",
    "analogy": "Kayak bertanya ke gudang data besar: ambilkan angka penjualan dari kategori dan bulan tertentu.",
    "simpleExample": "Contoh pola CUBESET cube. Biasanya argumennya mengikuti koneksi cube di workbook.",
    "exampleFormula": "=CUBESET(\"ThisWorkbookDataModel\";\"[Measures].[Total Sales]\")",
    "exampleMeaning": "Contoh pola CUBESET cube. Biasanya argumennya mengikuti koneksi cube di workbook.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CUBESETCOUNT": {
    "description": "Mengambil data dari model OLAP/Cube.",
    "simpleLogic": "Excel meminta anggota, set, atau nilai dari cube data yang tersambung.",
    "useCase": "Untuk laporan pivot/model data perusahaan yang memakai cube.",
    "analogy": "Kayak bertanya ke gudang data besar: ambilkan angka penjualan dari kategori dan bulan tertentu.",
    "simpleExample": "Contoh pola CUBESETCOUNT cube. Biasanya argumennya mengikuti koneksi cube di workbook.",
    "exampleFormula": "=CUBESETCOUNT(\"ThisWorkbookDataModel\";\"[Measures].[Total Sales]\")",
    "exampleMeaning": "Contoh pola CUBESETCOUNT cube. Biasanya argumennya mengikuti koneksi cube di workbook.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CUBEVALUE": {
    "description": "Mengambil data dari model OLAP/Cube.",
    "simpleLogic": "Excel meminta anggota, set, atau nilai dari cube data yang tersambung.",
    "useCase": "Untuk laporan pivot/model data perusahaan yang memakai cube.",
    "analogy": "Kayak bertanya ke gudang data besar: ambilkan angka penjualan dari kategori dan bulan tertentu.",
    "simpleExample": "Contoh pola CUBEVALUE cube. Biasanya argumennya mengikuti koneksi cube di workbook.",
    "exampleFormula": "=CUBEVALUE(\"ThisWorkbookDataModel\";\"[Measures].[Total Sales]\")",
    "exampleMeaning": "Contoh pola CUBEVALUE cube. Biasanya argumennya mengikuti koneksi cube di workbook.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "EUROCONVERT": {
    "description": "Memanggil fungsi khusus dari add-in atau sistem lama.",
    "simpleLogic": "Excel menjalankan fungsi tambahan yang tidak selalu tersedia di semua file.",
    "useCase": "Untuk file lama, add-in khusus, atau koneksi eksternal.",
    "analogy": "Kayak tombol khusus yang hanya muncul kalau add-in-nya terpasang.",
    "simpleExample": "Contoh pola EUROCONVERT add-in. Biasanya perlu add-in atau setting khusus.",
    "exampleFormula": "=EUROCONVERT(A2:A10)",
    "exampleMeaning": "Contoh pola EUROCONVERT add-in. Biasanya perlu add-in atau setting khusus.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "REGISTER.ID": {
    "description": "Memanggil fungsi khusus dari add-in atau sistem lama.",
    "simpleLogic": "Excel menjalankan fungsi tambahan yang tidak selalu tersedia di semua file.",
    "useCase": "Untuk file lama, add-in khusus, atau koneksi eksternal.",
    "analogy": "Kayak tombol khusus yang hanya muncul kalau add-in-nya terpasang.",
    "simpleExample": "Contoh pola REGISTER.ID add-in. Biasanya perlu add-in atau setting khusus.",
    "exampleFormula": "=REGISTER.ID(A2:A10)",
    "exampleMeaning": "Contoh pola REGISTER.ID add-in. Biasanya perlu add-in atau setting khusus.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SQL.REQUEST": {
    "description": "Memanggil fungsi khusus dari add-in atau sistem lama.",
    "simpleLogic": "Excel menjalankan fungsi tambahan yang tidak selalu tersedia di semua file.",
    "useCase": "Untuk file lama, add-in khusus, atau koneksi eksternal.",
    "analogy": "Kayak tombol khusus yang hanya muncul kalau add-in-nya terpasang.",
    "simpleExample": "Contoh pola SQL.REQUEST add-in. Biasanya perlu add-in atau setting khusus.",
    "exampleFormula": "=SQL.REQUEST(A2:A10)",
    "exampleMeaning": "Contoh pola SQL.REQUEST add-in. Biasanya perlu add-in atau setting khusus.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "AVEDEV": {
    "description": "Menghitung standar deviasi sampel.",
    "simpleLogic": "Excel mengukur seberapa menyebar data dari rata-ratanya.",
    "useCase": "Untuk analisis sampel data.",
    "analogy": "Kayak melihat apakah nilai kelas rapat atau sangat menyebar.",
    "simpleExample": "Contoh pola AVEDEV. Prinsipnya mirip STDEV.S, tapi nama function dan detail argumennya mengikuti syntax AVEDEV.",
    "exampleFormula": "=AVEDEV(D2:D16)",
    "exampleMeaning": "Contoh pola AVEDEV. Prinsipnya mirip STDEV.S, tapi nama function dan detail argumennya mengikuti syntax AVEDEV.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "AVERAGEA": {
    "description": "Menghitung rata-rata angka.",
    "simpleLogic": "Excel menjumlahkan semua angka, lalu membaginya dengan jumlah data angka.",
    "useCase": "Untuk rata-rata nilai, rata-rata penjualan, rata-rata harga, atau rata-rata durasi.",
    "analogy": "Kayak cari nilai rata-rata kelas. Semua nilai dijumlahkan lalu dibagi jumlah siswa.",
    "simpleExample": "Contoh pola AVERAGEA. Prinsipnya mirip AVERAGE, tapi nama function dan detail argumennya mengikuti syntax AVERAGEA.",
    "exampleFormula": "=AVERAGEA(D2:D16)",
    "exampleMeaning": "Contoh pola AVERAGEA. Prinsipnya mirip AVERAGE, tapi nama function dan detail argumennya mengikuti syntax AVERAGEA.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BETA.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola BETA.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=BETA.DIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola BETA.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BETA.INV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola BETA.INV statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=BETA.INV(A2;B2;C2)",
    "exampleMeaning": "Contoh pola BETA.INV statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BINOM.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola BINOM.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=BINOM.DIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola BINOM.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BINOM.DIST.RANGE": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola BINOM.DIST.RANGE statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=BINOM.DIST.RANGE(A2;B2;C2)",
    "exampleMeaning": "Contoh pola BINOM.DIST.RANGE statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BINOM.INV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola BINOM.INV statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=BINOM.INV(A2;B2;C2)",
    "exampleMeaning": "Contoh pola BINOM.INV statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CHISQ.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola CHISQ.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=CHISQ.DIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola CHISQ.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CHISQ.DIST.RT": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola CHISQ.DIST.RT statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=CHISQ.DIST.RT(A2;B2;C2)",
    "exampleMeaning": "Contoh pola CHISQ.DIST.RT statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CHISQ.INV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola CHISQ.INV statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=CHISQ.INV(A2;B2;C2)",
    "exampleMeaning": "Contoh pola CHISQ.INV statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CHISQ.INV.RT": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola CHISQ.INV.RT statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=CHISQ.INV.RT(A2;B2;C2)",
    "exampleMeaning": "Contoh pola CHISQ.INV.RT statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CHISQ.TEST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola CHISQ.TEST statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=CHISQ.TEST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola CHISQ.TEST statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CONFIDENCE.NORM": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola CONFIDENCE.NORM statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=CONFIDENCE.NORM(A2;B2;C2)",
    "exampleMeaning": "Contoh pola CONFIDENCE.NORM statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CONFIDENCE.T": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola CONFIDENCE.T statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=CONFIDENCE.T(A2;B2;C2)",
    "exampleMeaning": "Contoh pola CONFIDENCE.T statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CORREL": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Excel membaca pola data lama lalu membuat prediksi yang mengikuti garis tren.",
    "useCase": "Untuk membuat proyeksi data.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Contoh pola CORREL. Prinsipnya mirip TREND, tapi nama function dan detail argumennya mengikuti syntax CORREL.",
    "exampleFormula": "=CORREL(D2:D16)",
    "exampleMeaning": "Contoh pola CORREL. Prinsipnya mirip TREND, tapi nama function dan detail argumennya mengikuti syntax CORREL.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COVARIANCE.P": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola COVARIANCE.P statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=COVARIANCE.P(D2:D16)",
    "exampleMeaning": "Contoh pola COVARIANCE.P statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "COVARIANCE.S": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola COVARIANCE.S statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=COVARIANCE.S(D2:D16)",
    "exampleMeaning": "Contoh pola COVARIANCE.S statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DEVSQ": {
    "description": "Menghitung variance sampel.",
    "simpleLogic": "Excel mengukur sebaran data dalam bentuk kuadrat selisih dari rata-rata.",
    "useCase": "Untuk analisis statistik sampel.",
    "analogy": "Kayak mengukur seberapa jauh data menyebar dari tengahnya.",
    "simpleExample": "Contoh pola DEVSQ. Prinsipnya mirip VAR.S, tapi nama function dan detail argumennya mengikuti syntax DEVSQ.",
    "exampleFormula": "=DEVSQ(D2:D16)",
    "exampleMeaning": "Contoh pola DEVSQ. Prinsipnya mirip VAR.S, tapi nama function dan detail argumennya mengikuti syntax DEVSQ.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "EXPON.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola EXPON.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=EXPON.DIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola EXPON.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "F.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola F.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=F.DIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola F.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "F.DIST.RT": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola F.DIST.RT statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=F.DIST.RT(A2;B2;C2)",
    "exampleMeaning": "Contoh pola F.DIST.RT statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "F.INV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola F.INV statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=F.INV(A2;B2;C2)",
    "exampleMeaning": "Contoh pola F.INV statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "F.INV.RT": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola F.INV.RT statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=F.INV.RT(A2;B2;C2)",
    "exampleMeaning": "Contoh pola F.INV.RT statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "F.TEST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola F.TEST statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=F.TEST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola F.TEST statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FISHER": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola FISHER statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=FISHER(D2:D16)",
    "exampleMeaning": "Contoh pola FISHER statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FISHERINV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola FISHERINV statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=FISHERINV(A2;B2;C2)",
    "exampleMeaning": "Contoh pola FISHERINV statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FORECAST": {
    "description": "Memperkirakan nilai masa depan dari data lama.",
    "simpleLogic": "Excel melihat hubungan data X dan Y, lalu menebak nilai Y untuk X baru.",
    "useCase": "Untuk prediksi sales, demand, atau tren sederhana.",
    "analogy": "Kayak menebak penjualan bulan depan dari pola bulan sebelumnya.",
    "simpleExample": "Prediksi nilai saat X=7 berdasarkan data Y B2:B6 dan X A2:A6.",
    "exampleFormula": "=FORECAST(7;B2:B6;A2:A6)",
    "exampleMeaning": "Prediksi nilai saat X=7 berdasarkan data Y B2:B6 dan X A2:A6.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FORECAST.ETS": {
    "description": "Memperkirakan nilai masa depan dari data lama.",
    "simpleLogic": "Excel melihat hubungan data X dan Y, lalu menebak nilai Y untuk X baru.",
    "useCase": "Untuk prediksi sales, demand, atau tren sederhana.",
    "analogy": "Kayak menebak penjualan bulan depan dari pola bulan sebelumnya.",
    "simpleExample": "Contoh pola FORECAST.ETS. Prinsipnya mirip FORECAST, tapi nama function dan detail argumennya mengikuti syntax FORECAST.ETS.",
    "exampleFormula": "=FORECAST.ETS(A2;B2;C2)",
    "exampleMeaning": "Contoh pola FORECAST.ETS. Prinsipnya mirip FORECAST, tapi nama function dan detail argumennya mengikuti syntax FORECAST.ETS.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FORECAST.ETS.CONFINT": {
    "description": "Memperkirakan nilai masa depan dari data lama.",
    "simpleLogic": "Excel melihat hubungan data X dan Y, lalu menebak nilai Y untuk X baru.",
    "useCase": "Untuk prediksi sales, demand, atau tren sederhana.",
    "analogy": "Kayak menebak penjualan bulan depan dari pola bulan sebelumnya.",
    "simpleExample": "Contoh pola FORECAST.ETS.CONFINT. Prinsipnya mirip FORECAST, tapi nama function dan detail argumennya mengikuti syntax FORECAST.ETS.CONFINT.",
    "exampleFormula": "=FORECAST.ETS.CONFINT(A2;B2;C2)",
    "exampleMeaning": "Contoh pola FORECAST.ETS.CONFINT. Prinsipnya mirip FORECAST, tapi nama function dan detail argumennya mengikuti syntax FORECAST.ETS.CONFINT.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FORECAST.ETS.SEASONALITY": {
    "description": "Memperkirakan nilai masa depan dari data lama.",
    "simpleLogic": "Excel melihat hubungan data X dan Y, lalu menebak nilai Y untuk X baru.",
    "useCase": "Untuk prediksi sales, demand, atau tren sederhana.",
    "analogy": "Kayak menebak penjualan bulan depan dari pola bulan sebelumnya.",
    "simpleExample": "Contoh pola FORECAST.ETS.SEASONALITY. Prinsipnya mirip FORECAST, tapi nama function dan detail argumennya mengikuti syntax FORECAST.ETS.SEASONALITY.",
    "exampleFormula": "=FORECAST.ETS.SEASONALITY(A2;B2;C2)",
    "exampleMeaning": "Contoh pola FORECAST.ETS.SEASONALITY. Prinsipnya mirip FORECAST, tapi nama function dan detail argumennya mengikuti syntax FORECAST.ETS.SEASONALITY.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FORECAST.ETS.STAT": {
    "description": "Memperkirakan nilai masa depan dari data lama.",
    "simpleLogic": "Excel melihat hubungan data X dan Y, lalu menebak nilai Y untuk X baru.",
    "useCase": "Untuk prediksi sales, demand, atau tren sederhana.",
    "analogy": "Kayak menebak penjualan bulan depan dari pola bulan sebelumnya.",
    "simpleExample": "Contoh pola FORECAST.ETS.STAT. Prinsipnya mirip FORECAST, tapi nama function dan detail argumennya mengikuti syntax FORECAST.ETS.STAT.",
    "exampleFormula": "=FORECAST.ETS.STAT(A2;B2;C2)",
    "exampleMeaning": "Contoh pola FORECAST.ETS.STAT. Prinsipnya mirip FORECAST, tapi nama function dan detail argumennya mengikuti syntax FORECAST.ETS.STAT.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FORECAST.LINEAR": {
    "description": "Memperkirakan nilai masa depan dari data lama.",
    "simpleLogic": "Excel melihat hubungan data X dan Y, lalu menebak nilai Y untuk X baru.",
    "useCase": "Untuk prediksi sales, demand, atau tren sederhana.",
    "analogy": "Kayak menebak penjualan bulan depan dari pola bulan sebelumnya.",
    "simpleExample": "Contoh pola FORECAST.LINEAR. Prinsipnya mirip FORECAST, tapi nama function dan detail argumennya mengikuti syntax FORECAST.LINEAR.",
    "exampleFormula": "=FORECAST.LINEAR(A2;B2;C2)",
    "exampleMeaning": "Contoh pola FORECAST.LINEAR. Prinsipnya mirip FORECAST, tapi nama function dan detail argumennya mengikuti syntax FORECAST.LINEAR.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FREQUENCY": {
    "description": "Menghitung data dengan banyak syarat.",
    "simpleLogic": "Excel menghitung baris yang memenuhi semua syarat sekaligus.",
    "useCase": "Untuk menghitung data kategori Digital di kota Jakarta, atau siswa kelas 10A yang Lulus.",
    "analogy": "Kayak menghitung tamu yang pakai baju hitam dan membawa undangan. Dua syarat harus lolos.",
    "simpleExample": "Contoh pola FREQUENCY. Prinsipnya mirip COUNTIFS, tapi nama function dan detail argumennya mengikuti syntax FREQUENCY.",
    "exampleFormula": "=FREQUENCY(D2:D16)",
    "exampleMeaning": "Contoh pola FREQUENCY. Prinsipnya mirip COUNTIFS, tapi nama function dan detail argumennya mengikuti syntax FREQUENCY.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "GAMMA": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola GAMMA statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=GAMMA(A2;B2;C2)",
    "exampleMeaning": "Contoh pola GAMMA statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "GAMMA.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola GAMMA.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=GAMMA.DIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola GAMMA.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "GAMMA.INV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola GAMMA.INV statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=GAMMA.INV(A2;B2;C2)",
    "exampleMeaning": "Contoh pola GAMMA.INV statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "GAMMALN": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola GAMMALN statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=GAMMALN(A2;B2;C2)",
    "exampleMeaning": "Contoh pola GAMMALN statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "GAMMALN.PRECISE": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola GAMMALN.PRECISE statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=GAMMALN.PRECISE(A2;B2;C2)",
    "exampleMeaning": "Contoh pola GAMMALN.PRECISE statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "GAUSS": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola GAUSS statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=GAUSS(D2:D16)",
    "exampleMeaning": "Contoh pola GAUSS statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "GEOMEAN": {
    "description": "Menghitung rata-rata angka.",
    "simpleLogic": "Excel menjumlahkan semua angka, lalu membaginya dengan jumlah data angka.",
    "useCase": "Untuk rata-rata nilai, rata-rata penjualan, rata-rata harga, atau rata-rata durasi.",
    "analogy": "Kayak cari nilai rata-rata kelas. Semua nilai dijumlahkan lalu dibagi jumlah siswa.",
    "simpleExample": "Contoh pola GEOMEAN. Prinsipnya mirip AVERAGE, tapi nama function dan detail argumennya mengikuti syntax GEOMEAN.",
    "exampleFormula": "=GEOMEAN(D2:D16)",
    "exampleMeaning": "Contoh pola GEOMEAN. Prinsipnya mirip AVERAGE, tapi nama function dan detail argumennya mengikuti syntax GEOMEAN.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "GROWTH": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Excel membaca pola data lama lalu membuat prediksi yang mengikuti garis tren.",
    "useCase": "Untuk membuat proyeksi data.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Contoh pola GROWTH. Prinsipnya mirip TREND, tapi nama function dan detail argumennya mengikuti syntax GROWTH.",
    "exampleFormula": "=GROWTH(D2:D16)",
    "exampleMeaning": "Contoh pola GROWTH. Prinsipnya mirip TREND, tapi nama function dan detail argumennya mengikuti syntax GROWTH.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "HARMEAN": {
    "description": "Menghitung rata-rata angka.",
    "simpleLogic": "Excel menjumlahkan semua angka, lalu membaginya dengan jumlah data angka.",
    "useCase": "Untuk rata-rata nilai, rata-rata penjualan, rata-rata harga, atau rata-rata durasi.",
    "analogy": "Kayak cari nilai rata-rata kelas. Semua nilai dijumlahkan lalu dibagi jumlah siswa.",
    "simpleExample": "Contoh pola HARMEAN. Prinsipnya mirip AVERAGE, tapi nama function dan detail argumennya mengikuti syntax HARMEAN.",
    "exampleFormula": "=HARMEAN(D2:D16)",
    "exampleMeaning": "Contoh pola HARMEAN. Prinsipnya mirip AVERAGE, tapi nama function dan detail argumennya mengikuti syntax HARMEAN.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "HYPGEOM.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola HYPGEOM.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=HYPGEOM.DIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola HYPGEOM.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "INTERCEPT": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Excel membaca pola data lama lalu membuat prediksi yang mengikuti garis tren.",
    "useCase": "Untuk membuat proyeksi data.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Contoh pola INTERCEPT. Prinsipnya mirip TREND, tapi nama function dan detail argumennya mengikuti syntax INTERCEPT.",
    "exampleFormula": "=INTERCEPT(D2:D16)",
    "exampleMeaning": "Contoh pola INTERCEPT. Prinsipnya mirip TREND, tapi nama function dan detail argumennya mengikuti syntax INTERCEPT.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "KURT": {
    "description": "Menghitung standar deviasi sampel.",
    "simpleLogic": "Excel mengukur seberapa menyebar data dari rata-ratanya.",
    "useCase": "Untuk analisis sampel data.",
    "analogy": "Kayak melihat apakah nilai kelas rapat atau sangat menyebar.",
    "simpleExample": "Contoh pola KURT. Prinsipnya mirip STDEV.S, tapi nama function dan detail argumennya mengikuti syntax KURT.",
    "exampleFormula": "=KURT(D2:D16)",
    "exampleMeaning": "Contoh pola KURT. Prinsipnya mirip STDEV.S, tapi nama function dan detail argumennya mengikuti syntax KURT.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "LINEST": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Excel membaca pola data lama lalu membuat prediksi yang mengikuti garis tren.",
    "useCase": "Untuk membuat proyeksi data.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Contoh pola LINEST. Prinsipnya mirip TREND, tapi nama function dan detail argumennya mengikuti syntax LINEST.",
    "exampleFormula": "=LINEST(D2:D16)",
    "exampleMeaning": "Contoh pola LINEST. Prinsipnya mirip TREND, tapi nama function dan detail argumennya mengikuti syntax LINEST.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "LOGEST": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Excel membaca pola data lama lalu membuat prediksi yang mengikuti garis tren.",
    "useCase": "Untuk membuat proyeksi data.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Contoh pola LOGEST. Prinsipnya mirip TREND, tapi nama function dan detail argumennya mengikuti syntax LOGEST.",
    "exampleFormula": "=LOGEST(D2:D16)",
    "exampleMeaning": "Contoh pola LOGEST. Prinsipnya mirip TREND, tapi nama function dan detail argumennya mengikuti syntax LOGEST.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "LOGNORM.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola LOGNORM.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=LOGNORM.DIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola LOGNORM.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "LOGNORM.INV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola LOGNORM.INV statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=LOGNORM.INV(A2;B2;C2)",
    "exampleMeaning": "Contoh pola LOGNORM.INV statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MAXA": {
    "description": "Mengambil angka paling besar.",
    "simpleLogic": "Excel melihat semua angka, lalu memilih nilai tertinggi.",
    "useCase": "Untuk nilai tertinggi, stok terbesar, atau penjualan terbesar.",
    "analogy": "Kayak mencari juara 1 dari daftar nilai.",
    "simpleExample": "Contoh pola MAXA. Prinsipnya mirip MAX, tapi nama function dan detail argumennya mengikuti syntax MAXA.",
    "exampleFormula": "=MAXA(D2:D16)",
    "exampleMeaning": "Contoh pola MAXA. Prinsipnya mirip MAX, tapi nama function dan detail argumennya mengikuti syntax MAXA.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MEDIAN": {
    "description": "Mengambil nilai tengah.",
    "simpleLogic": "Excel mengurutkan angka lalu mengambil posisi tengah.",
    "useCase": "Untuk nilai tengah yang tidak terlalu terpengaruh angka ekstrem.",
    "analogy": "Kayak mencari orang yang berdiri di tengah antrean setelah diurutkan.",
    "simpleExample": "Mengambil nilai tengah dari D2:D16.",
    "exampleFormula": "=MEDIAN(D2:D16)",
    "exampleMeaning": "Mengambil nilai tengah dari D2:D16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MINA": {
    "description": "Mengambil angka paling kecil.",
    "simpleLogic": "Excel melihat semua angka, lalu memilih nilai terendah.",
    "useCase": "Untuk nilai terendah, harga termurah, stok paling sedikit, atau durasi paling cepat.",
    "analogy": "Kayak mencari juara dengan waktu lari paling cepat.",
    "simpleExample": "Contoh pola MINA. Prinsipnya mirip MIN, tapi nama function dan detail argumennya mengikuti syntax MINA.",
    "exampleFormula": "=MINA(D2:D16)",
    "exampleMeaning": "Contoh pola MINA. Prinsipnya mirip MIN, tapi nama function dan detail argumennya mengikuti syntax MINA.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MODE.MULT": {
    "description": "Mengambil nilai yang paling sering muncul.",
    "simpleLogic": "Excel mencari angka yang frekuensinya paling banyak.",
    "useCase": "Untuk melihat pilihan atau nilai yang paling umum.",
    "analogy": "Kayak mencari jawaban yang paling banyak dipilih.",
    "simpleExample": "Contoh pola MODE.MULT. Prinsipnya mirip MODE, tapi nama function dan detail argumennya mengikuti syntax MODE.MULT.",
    "exampleFormula": "=MODE.MULT(D2:D16)",
    "exampleMeaning": "Contoh pola MODE.MULT. Prinsipnya mirip MODE, tapi nama function dan detail argumennya mengikuti syntax MODE.MULT.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MODE.SNGL": {
    "description": "Mengambil nilai yang paling sering muncul.",
    "simpleLogic": "Excel mencari angka yang frekuensinya paling banyak.",
    "useCase": "Untuk melihat pilihan atau nilai yang paling umum.",
    "analogy": "Kayak mencari jawaban yang paling banyak dipilih.",
    "simpleExample": "Contoh pola MODE.SNGL. Prinsipnya mirip MODE, tapi nama function dan detail argumennya mengikuti syntax MODE.SNGL.",
    "exampleFormula": "=MODE.SNGL(D2:D16)",
    "exampleMeaning": "Contoh pola MODE.SNGL. Prinsipnya mirip MODE, tapi nama function dan detail argumennya mengikuti syntax MODE.SNGL.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "NEGBINOM.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola NEGBINOM.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=NEGBINOM.DIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola NEGBINOM.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "NORM.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola NORM.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=NORM.DIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola NORM.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "NORM.INV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola NORM.INV statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=NORM.INV(A2;B2;C2)",
    "exampleMeaning": "Contoh pola NORM.INV statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "NORM.S.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola NORM.S.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=NORM.S.DIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola NORM.S.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "NORM.S.INV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola NORM.S.INV statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=NORM.S.INV(A2;B2;C2)",
    "exampleMeaning": "Contoh pola NORM.S.INV statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PEARSON": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Excel membaca pola data lama lalu membuat prediksi yang mengikuti garis tren.",
    "useCase": "Untuk membuat proyeksi data.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Contoh pola PEARSON. Prinsipnya mirip TREND, tapi nama function dan detail argumennya mengikuti syntax PEARSON.",
    "exampleFormula": "=PEARSON(D2:D16)",
    "exampleMeaning": "Contoh pola PEARSON. Prinsipnya mirip TREND, tapi nama function dan detail argumennya mengikuti syntax PEARSON.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PERCENTILE.EXC": {
    "description": "Mengambil nilai pada posisi persentase tertentu.",
    "simpleLogic": "Excel mengurutkan data lalu mengambil nilai di posisi persen tertentu.",
    "useCase": "Untuk batas top 25%, median, atau threshold.",
    "analogy": "Kayak mencari nilai yang berada di posisi 90% dari antrean data.",
    "simpleExample": "Contoh pola PERCENTILE.EXC. Prinsipnya mirip PERCENTILE, tapi nama function dan detail argumennya mengikuti syntax PERCENTILE.EXC.",
    "exampleFormula": "=PERCENTILE.EXC(D2:D16)",
    "exampleMeaning": "Contoh pola PERCENTILE.EXC. Prinsipnya mirip PERCENTILE, tapi nama function dan detail argumennya mengikuti syntax PERCENTILE.EXC.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PERCENTILE.INC": {
    "description": "Mengambil nilai pada posisi persentase tertentu.",
    "simpleLogic": "Excel mengurutkan data lalu mengambil nilai di posisi persen tertentu.",
    "useCase": "Untuk batas top 25%, median, atau threshold.",
    "analogy": "Kayak mencari nilai yang berada di posisi 90% dari antrean data.",
    "simpleExample": "Contoh pola PERCENTILE.INC. Prinsipnya mirip PERCENTILE, tapi nama function dan detail argumennya mengikuti syntax PERCENTILE.INC.",
    "exampleFormula": "=PERCENTILE.INC(D2:D16)",
    "exampleMeaning": "Contoh pola PERCENTILE.INC. Prinsipnya mirip PERCENTILE, tapi nama function dan detail argumennya mengikuti syntax PERCENTILE.INC.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PERCENTRANK.EXC": {
    "description": "Mengambil nilai pada posisi persentase tertentu.",
    "simpleLogic": "Excel mengurutkan data lalu mengambil nilai di posisi persen tertentu.",
    "useCase": "Untuk batas top 25%, median, atau threshold.",
    "analogy": "Kayak mencari nilai yang berada di posisi 90% dari antrean data.",
    "simpleExample": "Contoh pola PERCENTRANK.EXC. Prinsipnya mirip PERCENTILE, tapi nama function dan detail argumennya mengikuti syntax PERCENTRANK.EXC.",
    "exampleFormula": "=PERCENTRANK.EXC(D2:D16)",
    "exampleMeaning": "Contoh pola PERCENTRANK.EXC. Prinsipnya mirip PERCENTILE, tapi nama function dan detail argumennya mengikuti syntax PERCENTRANK.EXC.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PERCENTRANK.INC": {
    "description": "Mengambil nilai pada posisi persentase tertentu.",
    "simpleLogic": "Excel mengurutkan data lalu mengambil nilai di posisi persen tertentu.",
    "useCase": "Untuk batas top 25%, median, atau threshold.",
    "analogy": "Kayak mencari nilai yang berada di posisi 90% dari antrean data.",
    "simpleExample": "Contoh pola PERCENTRANK.INC. Prinsipnya mirip PERCENTILE, tapi nama function dan detail argumennya mengikuti syntax PERCENTRANK.INC.",
    "exampleFormula": "=PERCENTRANK.INC(D2:D16)",
    "exampleMeaning": "Contoh pola PERCENTRANK.INC. Prinsipnya mirip PERCENTILE, tapi nama function dan detail argumennya mengikuti syntax PERCENTRANK.INC.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PERMUT": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola PERMUT statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=PERMUT(D2:D16)",
    "exampleMeaning": "Contoh pola PERMUT statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PERMUTATIONA": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola PERMUTATIONA statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=PERMUTATIONA(D2:D16)",
    "exampleMeaning": "Contoh pola PERMUTATIONA statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PHI": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola PHI statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=PHI(D2:D16)",
    "exampleMeaning": "Contoh pola PHI statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "POISSON.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola POISSON.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=POISSON.DIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola POISSON.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PROB": {
    "description": "Menghitung data dengan banyak syarat.",
    "simpleLogic": "Excel menghitung baris yang memenuhi semua syarat sekaligus.",
    "useCase": "Untuk menghitung data kategori Digital di kota Jakarta, atau siswa kelas 10A yang Lulus.",
    "analogy": "Kayak menghitung tamu yang pakai baju hitam dan membawa undangan. Dua syarat harus lolos.",
    "simpleExample": "Contoh pola PROB. Prinsipnya mirip COUNTIFS, tapi nama function dan detail argumennya mengikuti syntax PROB.",
    "exampleFormula": "=PROB(D2:D16)",
    "exampleMeaning": "Contoh pola PROB. Prinsipnya mirip COUNTIFS, tapi nama function dan detail argumennya mengikuti syntax PROB.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "QUARTILE.EXC": {
    "description": "Membagi data menjadi 4 bagian.",
    "simpleLogic": "Excel mengambil batas Q1, Q2, atau Q3 dari data.",
    "useCase": "Untuk melihat sebaran data per kuartal statistik.",
    "analogy": "Kayak membagi antrean nilai menjadi empat kelompok.",
    "simpleExample": "Contoh pola QUARTILE.EXC. Prinsipnya mirip QUARTILE, tapi nama function dan detail argumennya mengikuti syntax QUARTILE.EXC.",
    "exampleFormula": "=QUARTILE.EXC(D2:D16)",
    "exampleMeaning": "Contoh pola QUARTILE.EXC. Prinsipnya mirip QUARTILE, tapi nama function dan detail argumennya mengikuti syntax QUARTILE.EXC.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "QUARTILE.INC": {
    "description": "Membagi data menjadi 4 bagian.",
    "simpleLogic": "Excel mengambil batas Q1, Q2, atau Q3 dari data.",
    "useCase": "Untuk melihat sebaran data per kuartal statistik.",
    "analogy": "Kayak membagi antrean nilai menjadi empat kelompok.",
    "simpleExample": "Contoh pola QUARTILE.INC. Prinsipnya mirip QUARTILE, tapi nama function dan detail argumennya mengikuti syntax QUARTILE.INC.",
    "exampleFormula": "=QUARTILE.INC(D2:D16)",
    "exampleMeaning": "Contoh pola QUARTILE.INC. Prinsipnya mirip QUARTILE, tapi nama function dan detail argumennya mengikuti syntax QUARTILE.INC.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "RANK.AVG": {
    "description": "Memberi peringkat angka.",
    "simpleLogic": "Excel melihat posisi sebuah angka dibanding angka lain.",
    "useCase": "Untuk ranking nilai, sales, atau performa.",
    "analogy": "Kayak menentukan peringkat siswa dari daftar nilai.",
    "simpleExample": "Contoh pola RANK.AVG. Prinsipnya mirip RANK, tapi nama function dan detail argumennya mengikuti syntax RANK.AVG.",
    "exampleFormula": "=RANK.AVG(D2:D16)",
    "exampleMeaning": "Contoh pola RANK.AVG. Prinsipnya mirip RANK, tapi nama function dan detail argumennya mengikuti syntax RANK.AVG.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "RANK.EQ": {
    "description": "Memberi peringkat angka dengan ranking sama untuk nilai seri.",
    "simpleLogic": "Jika ada nilai sama, Excel memberi ranking yang sama.",
    "useCase": "Untuk ranking nilai atau sales.",
    "analogy": "Kayak dua orang nilai sama mendapat peringkat yang sama.",
    "simpleExample": "Cari ranking D2 dari D2:D16, terbesar ranking 1.",
    "exampleFormula": "=RANK.EQ(D2;D2:D16;0)",
    "exampleMeaning": "Cari ranking D2 dari D2:D16, terbesar ranking 1.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "RSQ": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Excel membaca pola data lama lalu membuat prediksi yang mengikuti garis tren.",
    "useCase": "Untuk membuat proyeksi data.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Contoh pola RSQ. Prinsipnya mirip TREND, tapi nama function dan detail argumennya mengikuti syntax RSQ.",
    "exampleFormula": "=RSQ(D2:D16)",
    "exampleMeaning": "Contoh pola RSQ. Prinsipnya mirip TREND, tapi nama function dan detail argumennya mengikuti syntax RSQ.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SKEW": {
    "description": "Menghitung standar deviasi sampel.",
    "simpleLogic": "Excel mengukur seberapa menyebar data dari rata-ratanya.",
    "useCase": "Untuk analisis sampel data.",
    "analogy": "Kayak melihat apakah nilai kelas rapat atau sangat menyebar.",
    "simpleExample": "Contoh pola SKEW. Prinsipnya mirip STDEV.S, tapi nama function dan detail argumennya mengikuti syntax SKEW.",
    "exampleFormula": "=SKEW(D2:D16)",
    "exampleMeaning": "Contoh pola SKEW. Prinsipnya mirip STDEV.S, tapi nama function dan detail argumennya mengikuti syntax SKEW.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SKEW.P": {
    "description": "Menghitung standar deviasi sampel.",
    "simpleLogic": "Excel mengukur seberapa menyebar data dari rata-ratanya.",
    "useCase": "Untuk analisis sampel data.",
    "analogy": "Kayak melihat apakah nilai kelas rapat atau sangat menyebar.",
    "simpleExample": "Contoh pola SKEW.P. Prinsipnya mirip STDEV.S, tapi nama function dan detail argumennya mengikuti syntax SKEW.P.",
    "exampleFormula": "=SKEW.P(D2:D16)",
    "exampleMeaning": "Contoh pola SKEW.P. Prinsipnya mirip STDEV.S, tapi nama function dan detail argumennya mengikuti syntax SKEW.P.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SLOPE": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Excel membaca pola data lama lalu membuat prediksi yang mengikuti garis tren.",
    "useCase": "Untuk membuat proyeksi data.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Contoh pola SLOPE. Prinsipnya mirip TREND, tapi nama function dan detail argumennya mengikuti syntax SLOPE.",
    "exampleFormula": "=SLOPE(D2:D16)",
    "exampleMeaning": "Contoh pola SLOPE. Prinsipnya mirip TREND, tapi nama function dan detail argumennya mengikuti syntax SLOPE.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "STANDARDIZE": {
    "description": "Menghitung standar deviasi sampel.",
    "simpleLogic": "Excel mengukur seberapa menyebar data dari rata-ratanya.",
    "useCase": "Untuk analisis sampel data.",
    "analogy": "Kayak melihat apakah nilai kelas rapat atau sangat menyebar.",
    "simpleExample": "Contoh pola STANDARDIZE. Prinsipnya mirip STDEV.S, tapi nama function dan detail argumennya mengikuti syntax STANDARDIZE.",
    "exampleFormula": "=STANDARDIZE(D2:D16)",
    "exampleMeaning": "Contoh pola STANDARDIZE. Prinsipnya mirip STDEV.S, tapi nama function dan detail argumennya mengikuti syntax STANDARDIZE.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "STDEV.P": {
    "description": "Menghitung standar deviasi populasi.",
    "simpleLogic": "Excel mengukur sebaran data jika datanya dianggap seluruh populasi.",
    "useCase": "Untuk analisis data lengkap, bukan sampel.",
    "analogy": "Kayak mengukur variasi semua cabang, bukan sebagian cabang.",
    "simpleExample": "Hitung standar deviasi populasi dari D2:D16.",
    "exampleFormula": "=STDEV.P(D2:D16)",
    "exampleMeaning": "Hitung standar deviasi populasi dari D2:D16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "STDEV.S": {
    "description": "Menghitung standar deviasi sampel.",
    "simpleLogic": "Excel mengukur seberapa menyebar data dari rata-ratanya.",
    "useCase": "Untuk analisis sampel data.",
    "analogy": "Kayak melihat apakah nilai kelas rapat atau sangat menyebar.",
    "simpleExample": "Hitung standar deviasi sampel dari D2:D16.",
    "exampleFormula": "=STDEV.S(D2:D16)",
    "exampleMeaning": "Hitung standar deviasi sampel dari D2:D16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "STDEVA": {
    "description": "Menghitung standar deviasi sampel.",
    "simpleLogic": "Excel mengukur seberapa menyebar data dari rata-ratanya.",
    "useCase": "Untuk analisis sampel data.",
    "analogy": "Kayak melihat apakah nilai kelas rapat atau sangat menyebar.",
    "simpleExample": "Contoh pola STDEVA. Prinsipnya mirip STDEV.S, tapi nama function dan detail argumennya mengikuti syntax STDEVA.",
    "exampleFormula": "=STDEVA(D2:D16)",
    "exampleMeaning": "Contoh pola STDEVA. Prinsipnya mirip STDEV.S, tapi nama function dan detail argumennya mengikuti syntax STDEVA.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "STDEVPA": {
    "description": "Menghitung standar deviasi populasi.",
    "simpleLogic": "Excel mengukur sebaran data jika datanya dianggap seluruh populasi.",
    "useCase": "Untuk analisis data lengkap, bukan sampel.",
    "analogy": "Kayak mengukur variasi semua cabang, bukan sebagian cabang.",
    "simpleExample": "Contoh pola STDEVPA. Prinsipnya mirip STDEV.P, tapi nama function dan detail argumennya mengikuti syntax STDEVPA.",
    "exampleFormula": "=STDEVPA(D2:D16)",
    "exampleMeaning": "Contoh pola STDEVPA. Prinsipnya mirip STDEV.P, tapi nama function dan detail argumennya mengikuti syntax STDEVPA.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "STEYX": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Excel membaca pola data lama lalu membuat prediksi yang mengikuti garis tren.",
    "useCase": "Untuk membuat proyeksi data.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Contoh pola STEYX. Prinsipnya mirip TREND, tapi nama function dan detail argumennya mengikuti syntax STEYX.",
    "exampleFormula": "=STEYX(D2:D16)",
    "exampleMeaning": "Contoh pola STEYX. Prinsipnya mirip TREND, tapi nama function dan detail argumennya mengikuti syntax STEYX.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "T.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola T.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=T.DIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola T.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "T.DIST.2T": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola T.DIST.2T statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=T.DIST.2T(A2;B2;C2)",
    "exampleMeaning": "Contoh pola T.DIST.2T statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "T.DIST.RT": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola T.DIST.RT statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=T.DIST.RT(A2;B2;C2)",
    "exampleMeaning": "Contoh pola T.DIST.RT statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "T.INV": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola T.INV statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=T.INV(A2;B2;C2)",
    "exampleMeaning": "Contoh pola T.INV statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "T.INV.2T": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola T.INV.2T statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=T.INV.2T(A2;B2;C2)",
    "exampleMeaning": "Contoh pola T.INV.2T statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "T.TEST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola T.TEST statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=T.TEST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola T.TEST statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TREND": {
    "description": "Menghasilkan nilai berdasarkan tren linear.",
    "simpleLogic": "Excel membaca pola data lama lalu membuat prediksi yang mengikuti garis tren.",
    "useCase": "Untuk membuat proyeksi data.",
    "analogy": "Kayak menarik garis arah dari data lama lalu meneruskannya.",
    "simpleExample": "Prediksi nilai B untuk X baru di A7:A9.",
    "exampleFormula": "=TREND(B2:B6;A2:A6;A7:A9)",
    "exampleMeaning": "Prediksi nilai B untuk X baru di A7:A9.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TRIMMEAN": {
    "description": "Menghitung rata-rata angka.",
    "simpleLogic": "Excel menjumlahkan semua angka, lalu membaginya dengan jumlah data angka.",
    "useCase": "Untuk rata-rata nilai, rata-rata penjualan, rata-rata harga, atau rata-rata durasi.",
    "analogy": "Kayak cari nilai rata-rata kelas. Semua nilai dijumlahkan lalu dibagi jumlah siswa.",
    "simpleExample": "Contoh pola TRIMMEAN. Prinsipnya mirip AVERAGE, tapi nama function dan detail argumennya mengikuti syntax TRIMMEAN.",
    "exampleFormula": "=TRIMMEAN(D2:D16)",
    "exampleMeaning": "Contoh pola TRIMMEAN. Prinsipnya mirip AVERAGE, tapi nama function dan detail argumennya mengikuti syntax TRIMMEAN.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "VAR.P": {
    "description": "Menghitung variance populasi.",
    "simpleLogic": "Excel mengukur sebaran data jika datanya seluruh populasi.",
    "useCase": "Untuk analisis statistik data lengkap.",
    "analogy": "Kayak mengukur penyebaran semua data, bukan contoh data saja.",
    "simpleExample": "Hitung variance populasi dari D2:D16.",
    "exampleFormula": "=VAR.P(D2:D16)",
    "exampleMeaning": "Hitung variance populasi dari D2:D16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "VAR.S": {
    "description": "Menghitung variance sampel.",
    "simpleLogic": "Excel mengukur sebaran data dalam bentuk kuadrat selisih dari rata-rata.",
    "useCase": "Untuk analisis statistik sampel.",
    "analogy": "Kayak mengukur seberapa jauh data menyebar dari tengahnya.",
    "simpleExample": "Hitung variance sampel dari D2:D16.",
    "exampleFormula": "=VAR.S(D2:D16)",
    "exampleMeaning": "Hitung variance sampel dari D2:D16.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "VARA": {
    "description": "Menghitung variance sampel.",
    "simpleLogic": "Excel mengukur sebaran data dalam bentuk kuadrat selisih dari rata-rata.",
    "useCase": "Untuk analisis statistik sampel.",
    "analogy": "Kayak mengukur seberapa jauh data menyebar dari tengahnya.",
    "simpleExample": "Contoh pola VARA. Prinsipnya mirip VAR.S, tapi nama function dan detail argumennya mengikuti syntax VARA.",
    "exampleFormula": "=VARA(D2:D16)",
    "exampleMeaning": "Contoh pola VARA. Prinsipnya mirip VAR.S, tapi nama function dan detail argumennya mengikuti syntax VARA.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "VARPA": {
    "description": "Menghitung variance populasi.",
    "simpleLogic": "Excel mengukur sebaran data jika datanya seluruh populasi.",
    "useCase": "Untuk analisis statistik data lengkap.",
    "analogy": "Kayak mengukur penyebaran semua data, bukan contoh data saja.",
    "simpleExample": "Contoh pola VARPA. Prinsipnya mirip VAR.P, tapi nama function dan detail argumennya mengikuti syntax VARPA.",
    "exampleFormula": "=VARPA(D2:D16)",
    "exampleMeaning": "Contoh pola VARPA. Prinsipnya mirip VAR.P, tapi nama function dan detail argumennya mengikuti syntax VARPA.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "WEIBULL.DIST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola WEIBULL.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=WEIBULL.DIST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola WEIBULL.DIST statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "Z.TEST": {
    "description": "Menganalisis kumpulan angka.",
    "simpleLogic": "Excel melihat banyak data lalu membuat ringkasan seperti rata-rata, ranking, sebaran, peluang, atau prediksi.",
    "useCase": "Untuk nilai, performa, survey, forecast, dan analisis data.",
    "analogy": "Kayak guru yang melihat seluruh nilai kelas lalu mencari rata-rata, ranking, dan pola.",
    "simpleExample": "Contoh pola Z.TEST statistik. Sesuaikan range angka yang dianalisis.",
    "exampleFormula": "=Z.TEST(A2;B2;C2)",
    "exampleMeaning": "Contoh pola Z.TEST statistik. Sesuaikan range angka yang dianalisis.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ARRAYTOTEXT": {
    "description": "Menggabungkan teks dengan pemisah.",
    "simpleLogic": "Excel menyambung banyak teks dan menyisipkan delimiter di antaranya.",
    "useCase": "Untuk gabung list nama, tag, atau alamat dengan koma.",
    "analogy": "Kayak menyusun daftar nama lalu diberi koma otomatis.",
    "simpleExample": "Contoh pola ARRAYTOTEXT. Prinsipnya mirip TEXTJOIN, tapi nama function dan detail argumennya mengikuti syntax ARRAYTOTEXT.",
    "exampleFormula": "=ARRAYTOTEXT(A2)",
    "exampleMeaning": "Contoh pola ARRAYTOTEXT. Prinsipnya mirip TEXTJOIN, tapi nama function dan detail argumennya mengikuti syntax ARRAYTOTEXT.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ASC": {
    "description": "Mengubah teks jadi huruf besar.",
    "simpleLogic": "Excel membuat semua huruf menjadi uppercase.",
    "useCase": "Untuk kode produk, kode kota, atau format tegas.",
    "analogy": "Kayak menyuruh semua huruf bicara keras.",
    "simpleExample": "Contoh pola ASC. Prinsipnya mirip UPPER, tapi nama function dan detail argumennya mengikuti syntax ASC.",
    "exampleFormula": "=ASC(A2)",
    "exampleMeaning": "Contoh pola ASC. Prinsipnya mirip UPPER, tapi nama function dan detail argumennya mengikuti syntax ASC.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "BAHTTEXT": {
    "description": "Mengolah teks.",
    "simpleLogic": "Excel mengambil, memecah, menggabungkan, mengganti, atau merapikan tulisan.",
    "useCase": "Untuk nama, email, kode produk, invoice, dan data copy paste.",
    "analogy": "Kayak gunting, lem, dan stabilo untuk merapikan tulisan.",
    "simpleExample": "Contoh pola BAHTTEXT teks. Sesuaikan cell teks yang ingin diolah.",
    "exampleFormula": "=BAHTTEXT(A2)",
    "exampleMeaning": "Contoh pola BAHTTEXT teks. Sesuaikan cell teks yang ingin diolah.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CHAR": {
    "description": "Mengubah angka/tanggal menjadi teks dengan format tertentu.",
    "simpleLogic": "Excel tetap memakai nilainya, tapi menampilkan bentuk teks sesuai format yang kamu pilih.",
    "useCase": "Untuk format tanggal, rupiah, persen, atau kode.",
    "analogy": "Kayak memberi baju format ke angka agar tampil lebih rapi.",
    "simpleExample": "Contoh pola CHAR. Prinsipnya mirip TEXT, tapi nama function dan detail argumennya mengikuti syntax CHAR.",
    "exampleFormula": "=CHAR(A2)",
    "exampleMeaning": "Contoh pola CHAR. Prinsipnya mirip TEXT, tapi nama function dan detail argumennya mengikuti syntax CHAR.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CLEAN": {
    "description": "Menghapus karakter aneh yang tidak terlihat.",
    "simpleLogic": "Excel membersihkan karakter non-printing dari teks.",
    "useCase": "Untuk membersihkan data impor dari sistem lain.",
    "analogy": "Kayak membersihkan noda tak terlihat di teks.",
    "simpleExample": "Bersihkan karakter tersembunyi di A2.",
    "exampleFormula": "=CLEAN(A2)",
    "exampleMeaning": "Bersihkan karakter tersembunyi di A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CODE": {
    "description": "Mengubah angka/tanggal menjadi teks dengan format tertentu.",
    "simpleLogic": "Excel tetap memakai nilainya, tapi menampilkan bentuk teks sesuai format yang kamu pilih.",
    "useCase": "Untuk format tanggal, rupiah, persen, atau kode.",
    "analogy": "Kayak memberi baju format ke angka agar tampil lebih rapi.",
    "simpleExample": "Contoh pola CODE. Prinsipnya mirip TEXT, tapi nama function dan detail argumennya mengikuti syntax CODE.",
    "exampleFormula": "=CODE(A2)",
    "exampleMeaning": "Contoh pola CODE. Prinsipnya mirip TEXT, tapi nama function dan detail argumennya mengikuti syntax CODE.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CONCAT": {
    "description": "Menggabungkan beberapa teks.",
    "simpleLogic": "Excel menempelkan isi beberapa cell menjadi satu teks.",
    "useCase": "Untuk gabung nama depan dan belakang, kode, atau alamat.",
    "analogy": "Kayak menyambung beberapa potongan kata menjadi satu kalimat.",
    "simpleExample": "Gabungkan A2, tanda strip, dan B2.",
    "exampleFormula": "=CONCAT(A2;\" - \";B2)",
    "exampleMeaning": "Gabungkan A2, tanda strip, dan B2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "CONCATENATE": {
    "description": "Menggabungkan beberapa teks.",
    "simpleLogic": "Excel menempelkan isi beberapa cell menjadi satu teks.",
    "useCase": "Untuk gabung nama depan dan belakang, kode, atau alamat.",
    "analogy": "Kayak menyambung beberapa potongan kata menjadi satu kalimat.",
    "simpleExample": "Contoh pola CONCATENATE. Prinsipnya mirip CONCAT, tapi nama function dan detail argumennya mengikuti syntax CONCATENATE.",
    "exampleFormula": "=CONCATENATE(A2)",
    "exampleMeaning": "Contoh pola CONCATENATE. Prinsipnya mirip CONCAT, tapi nama function dan detail argumennya mengikuti syntax CONCATENATE.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DBCS": {
    "description": "Mengubah teks jadi huruf besar.",
    "simpleLogic": "Excel membuat semua huruf menjadi uppercase.",
    "useCase": "Untuk kode produk, kode kota, atau format tegas.",
    "analogy": "Kayak menyuruh semua huruf bicara keras.",
    "simpleExample": "Contoh pola DBCS. Prinsipnya mirip UPPER, tapi nama function dan detail argumennya mengikuti syntax DBCS.",
    "exampleFormula": "=DBCS(A2)",
    "exampleMeaning": "Contoh pola DBCS. Prinsipnya mirip UPPER, tapi nama function dan detail argumennya mengikuti syntax DBCS.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "DOLLAR": {
    "description": "Mengubah angka/tanggal menjadi teks dengan format tertentu.",
    "simpleLogic": "Excel tetap memakai nilainya, tapi menampilkan bentuk teks sesuai format yang kamu pilih.",
    "useCase": "Untuk format tanggal, rupiah, persen, atau kode.",
    "analogy": "Kayak memberi baju format ke angka agar tampil lebih rapi.",
    "simpleExample": "Contoh pola DOLLAR. Prinsipnya mirip TEXT, tapi nama function dan detail argumennya mengikuti syntax DOLLAR.",
    "exampleFormula": "=DOLLAR(A2)",
    "exampleMeaning": "Contoh pola DOLLAR. Prinsipnya mirip TEXT, tapi nama function dan detail argumennya mengikuti syntax DOLLAR.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "EXACT": {
    "description": "Membuat keputusan jika kondisi benar atau salah.",
    "simpleLogic": "Excel mengecek satu kondisi. Kalau benar, keluarkan hasil A. Kalau salah, keluarkan hasil B.",
    "useCase": "Untuk status Lulus/Tidak Lulus, Bonus/Tidak Bonus, atau Aman/Tidak Aman.",
    "analogy": "Kayak aturan sederhana: kalau nilai minimal 75 maka Lulus, kalau tidak maka Tidak Lulus.",
    "simpleExample": "Contoh pola EXACT. Prinsipnya mirip IF, tapi nama function dan detail argumennya mengikuti syntax EXACT.",
    "exampleFormula": "=EXACT(A2)",
    "exampleMeaning": "Contoh pola EXACT. Prinsipnya mirip IF, tapi nama function dan detail argumennya mengikuti syntax EXACT.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FIND": {
    "description": "Mencari posisi teks dengan huruf besar/kecil sensitif.",
    "simpleLogic": "Excel memberi tahu teks yang dicari mulai di karakter ke berapa.",
    "useCase": "Untuk menemukan posisi simbol atau kata tertentu.",
    "analogy": "Kayak mencari posisi huruf tertentu di kalimat, tapi A dan a dianggap beda.",
    "simpleExample": "Cari posisi tanda strip di A2.",
    "exampleFormula": "=FIND(\"-\";A2)",
    "exampleMeaning": "Cari posisi tanda strip di A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FINDB": {
    "description": "Mencari posisi teks dengan huruf besar/kecil sensitif.",
    "simpleLogic": "Excel memberi tahu teks yang dicari mulai di karakter ke berapa.",
    "useCase": "Untuk menemukan posisi simbol atau kata tertentu.",
    "analogy": "Kayak mencari posisi huruf tertentu di kalimat, tapi A dan a dianggap beda.",
    "simpleExample": "Contoh pola FINDB. Prinsipnya mirip FIND, tapi nama function dan detail argumennya mengikuti syntax FINDB.",
    "exampleFormula": "=FINDB(A2)",
    "exampleMeaning": "Contoh pola FINDB. Prinsipnya mirip FIND, tapi nama function dan detail argumennya mengikuti syntax FINDB.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FIXED": {
    "description": "Mengubah angka/tanggal menjadi teks dengan format tertentu.",
    "simpleLogic": "Excel tetap memakai nilainya, tapi menampilkan bentuk teks sesuai format yang kamu pilih.",
    "useCase": "Untuk format tanggal, rupiah, persen, atau kode.",
    "analogy": "Kayak memberi baju format ke angka agar tampil lebih rapi.",
    "simpleExample": "Contoh pola FIXED. Prinsipnya mirip TEXT, tapi nama function dan detail argumennya mengikuti syntax FIXED.",
    "exampleFormula": "=FIXED(A2)",
    "exampleMeaning": "Contoh pola FIXED. Prinsipnya mirip TEXT, tapi nama function dan detail argumennya mengikuti syntax FIXED.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "LEFT": {
    "description": "Mengambil karakter dari kiri.",
    "simpleLogic": "Excel mengambil beberapa huruf pertama dari sebuah teks.",
    "useCase": "Untuk mengambil kode depan, inisial, atau prefix.",
    "analogy": "Kayak menggunting bagian awal tulisan.",
    "simpleExample": "Ambil 3 karakter pertama dari A2.",
    "exampleFormula": "=LEFT(A2;3)",
    "exampleMeaning": "Ambil 3 karakter pertama dari A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "LEFTB": {
    "description": "Mengambil karakter dari kiri.",
    "simpleLogic": "Excel mengambil beberapa huruf pertama dari sebuah teks.",
    "useCase": "Untuk mengambil kode depan, inisial, atau prefix.",
    "analogy": "Kayak menggunting bagian awal tulisan.",
    "simpleExample": "Contoh pola LEFTB. Prinsipnya mirip LEFT, tapi nama function dan detail argumennya mengikuti syntax LEFTB.",
    "exampleFormula": "=LEFTB(A2)",
    "exampleMeaning": "Contoh pola LEFTB. Prinsipnya mirip LEFT, tapi nama function dan detail argumennya mengikuti syntax LEFTB.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "LEN": {
    "description": "Menghitung jumlah karakter teks.",
    "simpleLogic": "Excel menghitung semua huruf, angka, spasi, dan simbol dalam teks.",
    "useCase": "Untuk cek panjang kode, nomor invoice, atau validasi input.",
    "analogy": "Kayak menghitung jumlah huruf dalam nama.",
    "simpleExample": "Hitung jumlah karakter di A2.",
    "exampleFormula": "=LEN(A2)",
    "exampleMeaning": "Hitung jumlah karakter di A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "LENB": {
    "description": "Menghitung jumlah karakter teks.",
    "simpleLogic": "Excel menghitung semua huruf, angka, spasi, dan simbol dalam teks.",
    "useCase": "Untuk cek panjang kode, nomor invoice, atau validasi input.",
    "analogy": "Kayak menghitung jumlah huruf dalam nama.",
    "simpleExample": "Contoh pola LENB. Prinsipnya mirip LEN, tapi nama function dan detail argumennya mengikuti syntax LENB.",
    "exampleFormula": "=LENB(A2)",
    "exampleMeaning": "Contoh pola LENB. Prinsipnya mirip LEN, tapi nama function dan detail argumennya mengikuti syntax LENB.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "LOWER": {
    "description": "Mengubah teks jadi huruf kecil.",
    "simpleLogic": "Excel membuat semua huruf menjadi lowercase.",
    "useCase": "Untuk merapikan email atau nama file.",
    "analogy": "Kayak menyuruh semua huruf bicara pelan.",
    "simpleExample": "Ubah teks A2 menjadi huruf kecil.",
    "exampleFormula": "=LOWER(A2)",
    "exampleMeaning": "Ubah teks A2 menjadi huruf kecil.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MID": {
    "description": "Mengambil karakter dari tengah.",
    "simpleLogic": "Excel mulai dari posisi tertentu lalu mengambil sejumlah karakter.",
    "useCase": "Untuk mengambil bagian tengah kode produk atau invoice.",
    "analogy": "Kayak mengambil potongan teks dari tengah kalimat.",
    "simpleExample": "Mulai dari karakter ke-4 di A2, ambil 3 karakter.",
    "exampleFormula": "=MID(A2;4;3)",
    "exampleMeaning": "Mulai dari karakter ke-4 di A2, ambil 3 karakter.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "MIDB": {
    "description": "Mengambil karakter dari tengah.",
    "simpleLogic": "Excel mulai dari posisi tertentu lalu mengambil sejumlah karakter.",
    "useCase": "Untuk mengambil bagian tengah kode produk atau invoice.",
    "analogy": "Kayak mengambil potongan teks dari tengah kalimat.",
    "simpleExample": "Contoh pola MIDB. Prinsipnya mirip MID, tapi nama function dan detail argumennya mengikuti syntax MIDB.",
    "exampleFormula": "=MIDB(A2)",
    "exampleMeaning": "Contoh pola MIDB. Prinsipnya mirip MID, tapi nama function dan detail argumennya mengikuti syntax MIDB.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "NUMBERVALUE": {
    "description": "Mengubah teks angka dengan separator tertentu menjadi angka.",
    "simpleLogic": "Kamu beri tahu pemisah desimal dan ribuan, lalu Excel mengubahnya jadi angka.",
    "useCase": "Untuk data angka dari format negara berbeda.",
    "analogy": "Kayak menerjemahkan format angka asing supaya Excel paham.",
    "simpleExample": "Ubah teks angka di A2 dengan koma desimal dan titik ribuan menjadi angka.",
    "exampleFormula": "=NUMBERVALUE(A2;\",\";\".\")",
    "exampleMeaning": "Ubah teks angka di A2 dengan koma desimal dan titik ribuan menjadi angka.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PHONETIC": {
    "description": "Mengolah teks.",
    "simpleLogic": "Excel mengambil, memecah, menggabungkan, mengganti, atau merapikan tulisan.",
    "useCase": "Untuk nama, email, kode produk, invoice, dan data copy paste.",
    "analogy": "Kayak gunting, lem, dan stabilo untuk merapikan tulisan.",
    "simpleExample": "Contoh pola PHONETIC teks. Sesuaikan cell teks yang ingin diolah.",
    "exampleFormula": "=PHONETIC(A2)",
    "exampleMeaning": "Contoh pola PHONETIC teks. Sesuaikan cell teks yang ingin diolah.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "PROPER": {
    "description": "Membuat huruf awal tiap kata jadi kapital.",
    "simpleLogic": "Excel membuat teks menjadi format nama yang lebih rapi.",
    "useCase": "Untuk merapikan nama orang, kota, atau produk.",
    "analogy": "Kayak merapikan nama di sertifikat.",
    "simpleExample": "Ubah teks A2 menjadi kapital di awal tiap kata.",
    "exampleFormula": "=PROPER(A2)",
    "exampleMeaning": "Ubah teks A2 menjadi kapital di awal tiap kata.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "REPLACE": {
    "description": "Mengganti teks berdasarkan posisi karakter.",
    "simpleLogic": "Excel mulai dari posisi tertentu, menghapus sejumlah karakter, lalu menggantinya.",
    "useCase": "Untuk mengganti bagian kode atau nomor.",
    "analogy": "Kayak menimpa bagian tengah nomor seri.",
    "simpleExample": "Mulai karakter ke-4, ganti 3 karakter dengan XXX.",
    "exampleFormula": "=REPLACE(A2;4;3;\"XXX\")",
    "exampleMeaning": "Mulai karakter ke-4, ganti 3 karakter dengan XXX.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "REPLACEB": {
    "description": "Mengganti teks berdasarkan posisi karakter.",
    "simpleLogic": "Excel mulai dari posisi tertentu, menghapus sejumlah karakter, lalu menggantinya.",
    "useCase": "Untuk mengganti bagian kode atau nomor.",
    "analogy": "Kayak menimpa bagian tengah nomor seri.",
    "simpleExample": "Contoh pola REPLACEB. Prinsipnya mirip REPLACE, tapi nama function dan detail argumennya mengikuti syntax REPLACEB.",
    "exampleFormula": "=REPLACEB(A2)",
    "exampleMeaning": "Contoh pola REPLACEB. Prinsipnya mirip REPLACE, tapi nama function dan detail argumennya mengikuti syntax REPLACEB.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "REPT": {
    "description": "Menggabungkan beberapa teks.",
    "simpleLogic": "Excel menempelkan isi beberapa cell menjadi satu teks.",
    "useCase": "Untuk gabung nama depan dan belakang, kode, atau alamat.",
    "analogy": "Kayak menyambung beberapa potongan kata menjadi satu kalimat.",
    "simpleExample": "Contoh pola REPT. Prinsipnya mirip CONCAT, tapi nama function dan detail argumennya mengikuti syntax REPT.",
    "exampleFormula": "=REPT(A2)",
    "exampleMeaning": "Contoh pola REPT. Prinsipnya mirip CONCAT, tapi nama function dan detail argumennya mengikuti syntax REPT.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "RIGHT": {
    "description": "Mengambil karakter dari kanan.",
    "simpleLogic": "Excel mengambil beberapa huruf terakhir dari sebuah teks.",
    "useCase": "Untuk mengambil kode belakang, nomor akhir, atau suffix.",
    "analogy": "Kayak menggunting bagian akhir tulisan.",
    "simpleExample": "Ambil 4 karakter terakhir dari A2.",
    "exampleFormula": "=RIGHT(A2;4)",
    "exampleMeaning": "Ambil 4 karakter terakhir dari A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "RIGHTB": {
    "description": "Mengambil karakter dari kanan.",
    "simpleLogic": "Excel mengambil beberapa huruf terakhir dari sebuah teks.",
    "useCase": "Untuk mengambil kode belakang, nomor akhir, atau suffix.",
    "analogy": "Kayak menggunting bagian akhir tulisan.",
    "simpleExample": "Contoh pola RIGHTB. Prinsipnya mirip RIGHT, tapi nama function dan detail argumennya mengikuti syntax RIGHTB.",
    "exampleFormula": "=RIGHTB(A2)",
    "exampleMeaning": "Contoh pola RIGHTB. Prinsipnya mirip RIGHT, tapi nama function dan detail argumennya mengikuti syntax RIGHTB.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SEARCH": {
    "description": "Mencari posisi teks tanpa sensitif huruf besar/kecil.",
    "simpleLogic": "Excel mencari teks dan memberi tahu posisinya.",
    "useCase": "Untuk mencari kata atau simbol dengan lebih santai.",
    "analogy": "Kayak fitur find biasa yang tidak peduli huruf besar/kecil.",
    "simpleExample": "Cari posisi kata jakarta di A2.",
    "exampleFormula": "=SEARCH(\"jakarta\";A2)",
    "exampleMeaning": "Cari posisi kata jakarta di A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SEARCHB": {
    "description": "Mencari posisi teks tanpa sensitif huruf besar/kecil.",
    "simpleLogic": "Excel mencari teks dan memberi tahu posisinya.",
    "useCase": "Untuk mencari kata atau simbol dengan lebih santai.",
    "analogy": "Kayak fitur find biasa yang tidak peduli huruf besar/kecil.",
    "simpleExample": "Contoh pola SEARCHB. Prinsipnya mirip SEARCH, tapi nama function dan detail argumennya mengikuti syntax SEARCHB.",
    "exampleFormula": "=SEARCHB(A2)",
    "exampleMeaning": "Contoh pola SEARCHB. Prinsipnya mirip SEARCH, tapi nama function dan detail argumennya mengikuti syntax SEARCHB.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "SUBSTITUTE": {
    "description": "Mengganti teks tertentu dengan teks baru.",
    "simpleLogic": "Excel mencari teks lama dan menggantinya dengan teks baru.",
    "useCase": "Untuk mengganti spasi, strip, kode lama, atau kata tertentu.",
    "analogy": "Kayak fitur find and replace.",
    "simpleExample": "Ganti tanda strip di A2 menjadi garis miring.",
    "exampleFormula": "=SUBSTITUTE(A2;\"-\";\"/\")",
    "exampleMeaning": "Ganti tanda strip di A2 menjadi garis miring.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "T": {
    "description": "Mengubah angka/tanggal menjadi teks dengan format tertentu.",
    "simpleLogic": "Excel tetap memakai nilainya, tapi menampilkan bentuk teks sesuai format yang kamu pilih.",
    "useCase": "Untuk format tanggal, rupiah, persen, atau kode.",
    "analogy": "Kayak memberi baju format ke angka agar tampil lebih rapi.",
    "simpleExample": "Contoh pola T. Prinsipnya mirip TEXT, tapi nama function dan detail argumennya mengikuti syntax T.",
    "exampleFormula": "=T(A2)",
    "exampleMeaning": "Contoh pola T. Prinsipnya mirip TEXT, tapi nama function dan detail argumennya mengikuti syntax T.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TEXT": {
    "description": "Mengubah angka/tanggal menjadi teks dengan format tertentu.",
    "simpleLogic": "Excel tetap memakai nilainya, tapi menampilkan bentuk teks sesuai format yang kamu pilih.",
    "useCase": "Untuk format tanggal, rupiah, persen, atau kode.",
    "analogy": "Kayak memberi baju format ke angka agar tampil lebih rapi.",
    "simpleExample": "Ubah tanggal di A2 menjadi teks tanggal panjang.",
    "exampleFormula": "=TEXT(A2;\"dd mmmm yyyy\")",
    "exampleMeaning": "Ubah tanggal di A2 menjadi teks tanggal panjang.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TEXTAFTER": {
    "description": "Mengambil teks setelah tanda tertentu.",
    "simpleLogic": "Excel mencari delimiter, lalu mengambil bagian kanan setelah delimiter itu.",
    "useCase": "Untuk ambil domain email atau kode setelah tanda strip.",
    "analogy": "Kayak mulai membaca setelah melewati tanda tertentu.",
    "simpleExample": "Ambil teks setelah tanda @ di A2.",
    "exampleFormula": "=TEXTAFTER(A2;\"@\")",
    "exampleMeaning": "Ambil teks setelah tanda @ di A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TEXTBEFORE": {
    "description": "Mengambil teks sebelum tanda tertentu.",
    "simpleLogic": "Excel mencari delimiter, lalu mengambil bagian kiri sebelum delimiter itu.",
    "useCase": "Untuk ambil nama sebelum @ pada email atau kode sebelum tanda strip.",
    "analogy": "Kayak membaca tulisan sampai sebelum tanda pagar.",
    "simpleExample": "Ambil teks sebelum tanda @ di A2.",
    "exampleFormula": "=TEXTBEFORE(A2;\"@\")",
    "exampleMeaning": "Ambil teks sebelum tanda @ di A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TEXTJOIN": {
    "description": "Menggabungkan teks dengan pemisah.",
    "simpleLogic": "Excel menyambung banyak teks dan menyisipkan delimiter di antaranya.",
    "useCase": "Untuk gabung list nama, tag, atau alamat dengan koma.",
    "analogy": "Kayak menyusun daftar nama lalu diberi koma otomatis.",
    "simpleExample": "Gabungkan A2:A6 dengan koma dan abaikan cell kosong.",
    "exampleFormula": "=TEXTJOIN(\", \";TRUE;A2:A6)",
    "exampleMeaning": "Gabungkan A2:A6 dengan koma dan abaikan cell kosong.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "TRIM": {
    "description": "Menghapus spasi berlebih.",
    "simpleLogic": "Excel menghapus spasi dobel di depan, tengah berlebih, dan belakang teks.",
    "useCase": "Untuk merapikan data hasil copy paste.",
    "analogy": "Kayak merapikan jarak antar kata agar tidak berantakan.",
    "simpleExample": "Rapikan spasi berlebih di A2.",
    "exampleFormula": "=TRIM(A2)",
    "exampleMeaning": "Rapikan spasi berlebih di A2.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "UNICHAR": {
    "description": "Mengubah angka/tanggal menjadi teks dengan format tertentu.",
    "simpleLogic": "Excel tetap memakai nilainya, tapi menampilkan bentuk teks sesuai format yang kamu pilih.",
    "useCase": "Untuk format tanggal, rupiah, persen, atau kode.",
    "analogy": "Kayak memberi baju format ke angka agar tampil lebih rapi.",
    "simpleExample": "Contoh pola UNICHAR. Prinsipnya mirip TEXT, tapi nama function dan detail argumennya mengikuti syntax UNICHAR.",
    "exampleFormula": "=UNICHAR(A2)",
    "exampleMeaning": "Contoh pola UNICHAR. Prinsipnya mirip TEXT, tapi nama function dan detail argumennya mengikuti syntax UNICHAR.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "UNICODE": {
    "description": "Mengubah angka/tanggal menjadi teks dengan format tertentu.",
    "simpleLogic": "Excel tetap memakai nilainya, tapi menampilkan bentuk teks sesuai format yang kamu pilih.",
    "useCase": "Untuk format tanggal, rupiah, persen, atau kode.",
    "analogy": "Kayak memberi baju format ke angka agar tampil lebih rapi.",
    "simpleExample": "Contoh pola UNICODE. Prinsipnya mirip TEXT, tapi nama function dan detail argumennya mengikuti syntax UNICODE.",
    "exampleFormula": "=UNICODE(A2)",
    "exampleMeaning": "Contoh pola UNICODE. Prinsipnya mirip TEXT, tapi nama function dan detail argumennya mengikuti syntax UNICODE.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "UPPER": {
    "description": "Mengubah teks jadi huruf besar.",
    "simpleLogic": "Excel membuat semua huruf menjadi uppercase.",
    "useCase": "Untuk kode produk, kode kota, atau format tegas.",
    "analogy": "Kayak menyuruh semua huruf bicara keras.",
    "simpleExample": "Ubah teks A2 menjadi huruf besar.",
    "exampleFormula": "=UPPER(A2)",
    "exampleMeaning": "Ubah teks A2 menjadi huruf besar.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "VALUE": {
    "description": "Mengubah teks angka menjadi angka asli.",
    "simpleLogic": "Excel membaca angka yang masih berbentuk teks agar bisa dihitung.",
    "useCase": "Untuk data copy paste yang angkanya tidak bisa dijumlahkan.",
    "analogy": "Kayak mengubah label harga menjadi angka yang bisa dihitung kasir.",
    "simpleExample": "Ubah teks angka di A2 menjadi angka asli.",
    "exampleFormula": "=VALUE(A2)",
    "exampleMeaning": "Ubah teks angka di A2 menjadi angka asli.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "VALUETOTEXT": {
    "description": "Mengubah angka/tanggal menjadi teks dengan format tertentu.",
    "simpleLogic": "Excel tetap memakai nilainya, tapi menampilkan bentuk teks sesuai format yang kamu pilih.",
    "useCase": "Untuk format tanggal, rupiah, persen, atau kode.",
    "analogy": "Kayak memberi baju format ke angka agar tampil lebih rapi.",
    "simpleExample": "Contoh pola VALUETOTEXT. Prinsipnya mirip TEXT, tapi nama function dan detail argumennya mengikuti syntax VALUETOTEXT.",
    "exampleFormula": "=VALUETOTEXT(A2)",
    "exampleMeaning": "Contoh pola VALUETOTEXT. Prinsipnya mirip TEXT, tapi nama function dan detail argumennya mengikuti syntax VALUETOTEXT.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "ENCODEURL": {
    "description": "Mengolah URL, web, atau XML.",
    "simpleLogic": "Excel membaca alamat/teks web lalu mengubah atau mengambil bagian yang dibutuhkan.",
    "useCase": "Untuk URL encoding, web service, atau XML sederhana.",
    "analogy": "Kayak kurir yang mengambil atau merapikan paket data dari alamat web.",
    "simpleExample": "Contoh pola ENCODEURL web. Sesuaikan URL atau teks XML yang dipakai.",
    "exampleFormula": "=ENCODEURL(A2)",
    "exampleMeaning": "Contoh pola ENCODEURL web. Sesuaikan URL atau teks XML yang dipakai.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "FILTERXML": {
    "description": "Mengolah URL, web, atau XML.",
    "simpleLogic": "Excel membaca alamat/teks web lalu mengubah atau mengambil bagian yang dibutuhkan.",
    "useCase": "Untuk URL encoding, web service, atau XML sederhana.",
    "analogy": "Kayak kurir yang mengambil atau merapikan paket data dari alamat web.",
    "simpleExample": "Contoh pola FILTERXML web. Sesuaikan URL atau teks XML yang dipakai.",
    "exampleFormula": "=FILTERXML(A2)",
    "exampleMeaning": "Contoh pola FILTERXML web. Sesuaikan URL atau teks XML yang dipakai.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  },
  "WEBSERVICE": {
    "description": "Mengolah URL, web, atau XML.",
    "simpleLogic": "Excel membaca alamat/teks web lalu mengubah atau mengambil bagian yang dibutuhkan.",
    "useCase": "Untuk URL encoding, web service, atau XML sederhana.",
    "analogy": "Kayak kurir yang mengambil atau merapikan paket data dari alamat web.",
    "simpleExample": "Contoh pola WEBSERVICE web. Sesuaikan URL atau teks XML yang dipakai.",
    "exampleFormula": "=WEBSERVICE(A2)",
    "exampleMeaning": "Contoh pola WEBSERVICE web. Sesuaikan URL atau teks XML yang dipakai.",
    "beginnerTip": "Jangan mulai dari hafalan. Baca soalnya, tentukan bagian yang dicari, pilih range/cell yang tepat, lalu susun argumennya pelan-pelan."
  }
};

export function getFormulaLearningContent(formula = {}) {
  if (!formula) return {};
  return formulaLearningContent[formula.name] || formulaLearningContent[formula.id] || {};
}
