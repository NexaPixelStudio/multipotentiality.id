// Curated exercise bank untuk rumus populer.
// Expected formula disimpan dalam separator English (,). UI akan mengubah tampilannya sesuai mode Indonesia/English.

export const sharedExerciseTables = {
  "students": {
    "title": "Data Nilai Siswa",
    "description": "Pakai tabel ini untuk latihan hitung, kondisi, statistik, dan logika.",
    "columns": [
      "Nama Siswa",
      "Gender",
      "Kelas",
      "Nilai",
      "Status"
    ],
    "rows": [
      [
        "Agus",
        "Laki-laki",
        "X-A",
        82,
        "Lulus"
      ],
      [
        "Sinta",
        "Perempuan",
        "X-A",
        91,
        "Lulus"
      ],
      [
        "Budi",
        "Laki-laki",
        "X-B",
        68,
        "Tidak Lulus"
      ],
      [
        "Nadia",
        "Perempuan",
        "X-B",
        77,
        "Lulus"
      ],
      [
        "Raka",
        "Laki-laki",
        "X-A",
        73,
        "Tidak Lulus"
      ],
      [
        "Maya",
        "Perempuan",
        "X-C",
        88,
        "Lulus"
      ],
      [
        "Dimas",
        "Laki-laki",
        "X-C",
        95,
        "Lulus"
      ],
      [
        "Putri",
        "Perempuan",
        "X-A",
        64,
        "Tidak Lulus"
      ],
      [
        "Rian",
        "Laki-laki",
        "X-B",
        80,
        "Lulus"
      ],
      [
        "Ayu",
        "Perempuan",
        "X-B",
        72,
        "Tidak Lulus"
      ],
      [
        "Fajar",
        "Laki-laki",
        "X-C",
        86,
        "Lulus"
      ],
      [
        "Tari",
        "Perempuan",
        "X-A",
        79,
        "Lulus"
      ],
      [
        "Yoga",
        "Laki-laki",
        "X-B",
        58,
        ""
      ],
      [
        "Lina",
        "Perempuan",
        "X-C",
        90,
        "Lulus"
      ],
      [
        "Eko",
        "Laki-laki",
        "X-A",
        75,
        "Lulus"
      ]
    ]
  },
  "sales": {
    "title": "Data Penjualan",
    "description": "Cocok untuk latihan total, syarat kategori, kota, qty, dan revenue.",
    "columns": [
      "Produk",
      "Kategori",
      "Kota",
      "Qty",
      "Total Penjualan"
    ],
    "rows": [
      [
        "Kaos Basic",
        "Fashion",
        "Jakarta",
        12,
        600000
      ],
      [
        "Ebook Excel",
        "Digital",
        "Bandung",
        8,
        400000
      ],
      [
        "Template CV",
        "Digital",
        "Jakarta",
        15,
        750000
      ],
      [
        "Topi Denim",
        "Fashion",
        "Surabaya",
        5,
        250000
      ],
      [
        "Preset Foto",
        "Digital",
        "Jakarta",
        20,
        1000000
      ],
      [
        "Hoodie",
        "Fashion",
        "Bandung",
        7,
        700000
      ],
      [
        "Kelas Excel",
        "Education",
        "Jakarta",
        10,
        1500000
      ],
      [
        "Sticker Pack",
        "Digital",
        "Surabaya",
        18,
        270000
      ],
      [
        "Totebag",
        "Fashion",
        "Jakarta",
        9,
        315000
      ],
      [
        "Mini Course",
        "Education",
        "Bandung",
        6,
        900000
      ],
      [
        "Mockup Pack",
        "Digital",
        "Jakarta",
        14,
        560000
      ],
      [
        "Jaket Coach",
        "Fashion",
        "Surabaya",
        4,
        800000
      ],
      [
        "Prompt AI",
        "Digital",
        "Jakarta",
        25,
        625000
      ],
      [
        "Webinar",
        "Education",
        "Jakarta",
        11,
        1100000
      ],
      [
        "Notebook",
        "Stationery",
        "Bandung",
        30,
        450000
      ]
    ]
  },
  "lookup": {
    "title": "Transaksi dan Master Produk",
    "description": "Kolom A-C adalah data transaksi. Kolom E-I adalah master produk.",
    "columns": [
      "Kode Produk",
      "Nama Produk",
      "Qty",
      "",
      "Master Kode",
      "Master Nama",
      "Harga",
      "Kategori",
      "Stok"
    ],
    "rows": [
      [
        "P-001",
        "",
        3,
        "",
        "P-001",
        "Kaos Basic",
        50000,
        "Fashion",
        120
      ],
      [
        "P-003",
        "",
        2,
        "",
        "P-002",
        "Ebook Excel",
        50000,
        "Digital",
        999
      ],
      [
        "P-005",
        "",
        5,
        "",
        "P-003",
        "Template CV",
        50000,
        "Digital",
        888
      ],
      [
        "P-002",
        "",
        1,
        "",
        "P-004",
        "Topi Denim",
        50000,
        "Fashion",
        80
      ],
      [
        "P-004",
        "",
        4,
        "",
        "P-005",
        "Preset Foto",
        50000,
        "Digital",
        777
      ],
      [
        "P-006",
        "",
        2,
        "",
        "P-006",
        "Hoodie",
        100000,
        "Fashion",
        60
      ],
      [
        "P-007",
        "",
        1,
        "",
        "P-007",
        "Kelas Excel",
        150000,
        "Education",
        40
      ]
    ]
  },
  "lookupHorizontal": {
    "title": "Master Produk Horizontal",
    "description": "Data master dibuat horizontal supaya cocok untuk HLOOKUP.",
    "columns": [
      "Field",
      "P-001",
      "P-002",
      "P-003",
      "P-004",
      "P-005",
      "P-006",
      "P-007"
    ],
    "rows": [
      [
        "Nama Produk",
        "Kaos Basic",
        "Ebook Excel",
        "Template CV",
        "Topi Denim",
        "Preset Foto",
        "Hoodie",
        "Kelas Excel"
      ],
      [
        "Harga",
        50000,
        50000,
        50000,
        50000,
        50000,
        100000,
        150000
      ],
      [
        "Kategori",
        "Fashion",
        "Digital",
        "Digital",
        "Fashion",
        "Digital",
        "Fashion",
        "Education"
      ]
    ]
  },
  "text": {
    "title": "Data Teks Customer",
    "description": "Pakai tabel ini untuk latihan bersihin nama, kode produk, invoice, dan email.",
    "columns": [
      "Nama Lengkap",
      "Kode Produk",
      "Nomor Invoice",
      "Email"
    ],
    "rows": [
      [
        "  johanes suak tiwa  ",
        "PRD-AXL-001",
        "1001",
        "johanes@gmail.com"
      ],
      [
        "sinta ayu",
        "PRD-DGN-204",
        "1002",
        "sinta@yahoo.com"
      ],
      [
        "budi santoso",
        "PRD-EXC-330",
        "1003",
        "budi@outlook.com"
      ],
      [
        "maya putri",
        "PRD-AI-115",
        "1004",
        "maya@gmail.com"
      ],
      [
        "raka firmansyah",
        "PRD-WEB-900",
        "1005",
        "raka@company.co.id"
      ]
    ]
  },
  "date": {
    "title": "Data Tanggal dan Jam Kerja",
    "description": "Pakai tabel ini untuk menghitung durasi, deadline, bulan, tahun, dan jam.",
    "columns": [
      "Nama",
      "Tanggal Masuk",
      "Tanggal Keluar",
      "Deadline",
      "Jam Mulai",
      "Jam Selesai"
    ],
    "rows": [
      [
        "Agus",
        "2026-05-01",
        "2026-05-10",
        "2026-05-15",
        "09:15:30",
        "17:45:00"
      ],
      [
        "Sinta",
        "2026-05-03",
        "2026-05-12",
        "2026-05-20",
        "10:00:15",
        "18:10:45"
      ],
      [
        "Budi",
        "2026-05-05",
        "2026-05-18",
        "2026-05-25",
        "08:30:00",
        "16:20:10"
      ],
      [
        "Nadia",
        "2026-05-07",
        "2026-05-19",
        "2026-05-28",
        "13:05:05",
        "20:00:00"
      ]
    ]
  },
  "dynamic": {
    "title": "Data Sales Dynamic Array",
    "description": "Pakai untuk FILTER, SORT, UNIQUE, VSTACK, HSTACK, dan rumus spill lainnya.",
    "columns": [
      "Produk",
      "Kategori",
      "Kota",
      "Sales",
      "Bulan"
    ],
    "rows": [
      [
        "Kaos Basic",
        "Fashion",
        "Jakarta",
        600000,
        "Mei"
      ],
      [
        "Ebook Excel",
        "Digital",
        "Bandung",
        400000,
        "Mei"
      ],
      [
        "Template CV",
        "Digital",
        "Jakarta",
        750000,
        "Mei"
      ],
      [
        "Topi Denim",
        "Fashion",
        "Surabaya",
        250000,
        "Juni"
      ],
      [
        "Preset Foto",
        "Digital",
        "Jakarta",
        1000000,
        "Juni"
      ],
      [
        "Hoodie",
        "Fashion",
        "Bandung",
        700000,
        "Juni"
      ],
      [
        "Kelas Excel",
        "Education",
        "Jakarta",
        1500000,
        "Juli"
      ],
      [
        "Sticker Pack",
        "Digital",
        "Surabaya",
        270000,
        "Juli"
      ],
      [
        "Totebag",
        "Fashion",
        "Jakarta",
        315000,
        "Juli"
      ],
      [
        "Mini Course",
        "Education",
        "Bandung",
        900000,
        "Agustus"
      ],
      [
        "Mockup Pack",
        "Digital",
        "Jakarta",
        560000,
        "Agustus"
      ],
      [
        "Prompt AI",
        "Digital",
        "Jakarta",
        625000,
        "Agustus"
      ],
      [
        "Webinar",
        "Education",
        "Jakarta",
        1100000,
        "September"
      ],
      [
        "Notebook",
        "Stationery",
        "Bandung",
        450000,
        "September"
      ],
      [
        "Jaket Coach",
        "Fashion",
        "Surabaya",
        800000,
        "September"
      ]
    ]
  },
  "info": {
    "title": "Data Cek Cell dan Referensi",
    "description": "Dipakai untuk latihan IS, CELL, ROW, COLUMN, OFFSET, INDIRECT, dan FORMULATEXT.",
    "columns": [
      "Nilai",
      "Teks",
      "Kosong",
      "Error",
      "Formula Demo",
      "Link"
    ],
    "rows": [
      [
        125,
        "Excel",
        "",
        "#N/A",
        "=SUM(A2:A2)",
        "https://support.microsoft.com"
      ],
      [
        240,
        "Formula",
        "",
        "#VALUE!",
        "=A3*2",
        "https://excel.cloud"
      ],
      [
        0,
        "Coach",
        "",
        "#DIV/0!",
        "=A4+10",
        "https://example.com"
      ]
    ]
  },
  "forecast": {
    "title": "Data Forecast Penjualan",
    "description": "Kolom A adalah bulan ke-, kolom B adalah total sales.",
    "columns": [
      "Bulan Ke",
      "Sales"
    ],
    "rows": [
      [
        1,
        100
      ],
      [
        2,
        130
      ],
      [
        3,
        160
      ],
      [
        4,
        180
      ],
      [
        5,
        220
      ],
      [
        6,
        ""
      ]
    ]
  }
};

const rawCuratedExercises = {
  "sum": {
    "id": "sum",
    "formulaName": "SUM",
    "title": "Latihan SUM",
    "tableKey": "sales",
    "activeCell": "B2",
    "question": "Hitung total penjualan dari kolom Total Penjualan.",
    "logicPrompt": "Coba pikir dulu input apa yang diminta oleh SUM, lalu susun argumennya sesuai format.",
    "expectedFormula": "=SUM(E2:E16)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "E2:E16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "E2:E16"
    ],
    "allowedFunctions": [
      "SUM"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: E2:E16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "SUM sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "SUM adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: E2:E16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "average": {
    "id": "average",
    "formulaName": "AVERAGE",
    "title": "Latihan AVERAGE",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Hitung rata-rata nilai siswa.",
    "logicPrompt": "Coba pikir dulu input apa yang diminta oleh AVERAGE, lalu susun argumennya sesuai format.",
    "expectedFormula": "=AVERAGE(D2:D16)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "D2:D16"
    ],
    "allowedFunctions": [
      "AVERAGE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "AVERAGE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "AVERAGE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "count": {
    "id": "count",
    "formulaName": "COUNT",
    "title": "Latihan COUNT",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Hitung berapa banyak nilai angka di kolom Nilai.",
    "logicPrompt": "Coba pikir dulu input apa yang diminta oleh COUNT, lalu susun argumennya sesuai format.",
    "expectedFormula": "=COUNT(D2:D16)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "D2:D16"
    ],
    "allowedFunctions": [
      "COUNT"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "COUNT sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "COUNT adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "counta": {
    "id": "counta",
    "formulaName": "COUNTA",
    "title": "Latihan COUNTA",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Hitung berapa banyak nama siswa yang terisi.",
    "logicPrompt": "Coba pikir dulu input apa yang diminta oleh COUNTA, lalu susun argumennya sesuai format.",
    "expectedFormula": "=COUNTA(A2:A16)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2:A16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "A2:A16"
    ],
    "allowedFunctions": [
      "COUNTA"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2:A16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "COUNTA sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "COUNTA adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2:A16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "countblank": {
    "id": "countblank",
    "formulaName": "COUNTBLANK",
    "title": "Latihan COUNTBLANK",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Hitung berapa cell kosong di kolom Status.",
    "logicPrompt": "Coba pikir dulu input apa yang diminta oleh COUNTBLANK, lalu susun argumennya sesuai format.",
    "expectedFormula": "=COUNTBLANK(E2:E16)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "E2:E16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "E2:E16"
    ],
    "allowedFunctions": [
      "COUNTBLANK"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: E2:E16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "COUNTBLANK sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "COUNTBLANK adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: E2:E16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "min": {
    "id": "min",
    "formulaName": "MIN",
    "title": "Latihan MIN",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Cari nilai paling kecil.",
    "logicPrompt": "Coba pikir dulu input apa yang diminta oleh MIN, lalu susun argumennya sesuai format.",
    "expectedFormula": "=MIN(D2:D16)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "D2:D16"
    ],
    "allowedFunctions": [
      "MIN"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "MIN sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "MIN adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "max": {
    "id": "max",
    "formulaName": "MAX",
    "title": "Latihan MAX",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Cari nilai paling besar.",
    "logicPrompt": "Coba pikir dulu input apa yang diminta oleh MAX, lalu susun argumennya sesuai format.",
    "expectedFormula": "=MAX(D2:D16)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "D2:D16"
    ],
    "allowedFunctions": [
      "MAX"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "MAX sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "MAX adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "large": {
    "id": "large",
    "formulaName": "LARGE",
    "title": "Latihan LARGE",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Cari nilai terbesar ke-2.",
    "logicPrompt": "Coba pikir dulu input apa yang diminta oleh LARGE, lalu susun argumennya sesuai format.",
    "expectedFormula": "=LARGE(D2:D16,2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "D2:D16"
    ],
    "allowedFunctions": [
      "LARGE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "LARGE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "LARGE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "small": {
    "id": "small",
    "formulaName": "SMALL",
    "title": "Latihan SMALL",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Cari nilai terkecil ke-2.",
    "logicPrompt": "Coba pikir dulu input apa yang diminta oleh SMALL, lalu susun argumennya sesuai format.",
    "expectedFormula": "=SMALL(D2:D16,2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "D2:D16"
    ],
    "allowedFunctions": [
      "SMALL"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "SMALL sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "SMALL adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "median": {
    "id": "median",
    "formulaName": "MEDIAN",
    "title": "Latihan MEDIAN",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Cari nilai tengah dari data nilai.",
    "logicPrompt": "Coba pikir dulu input apa yang diminta oleh MEDIAN, lalu susun argumennya sesuai format.",
    "expectedFormula": "=MEDIAN(D2:D16)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "D2:D16"
    ],
    "allowedFunctions": [
      "MEDIAN"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "MEDIAN sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "MEDIAN adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "mode": {
    "id": "mode",
    "formulaName": "MODE",
    "title": "Latihan MODE",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Cari nilai yang paling sering muncul.",
    "logicPrompt": "Coba pikir dulu input apa yang diminta oleh MODE, lalu susun argumennya sesuai format.",
    "expectedFormula": "=MODE(D2:D16)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "D2:D16"
    ],
    "allowedFunctions": [
      "MODE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "MODE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "MODE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "stdev_s": {
    "id": "stdev_s",
    "formulaName": "STDEV.S",
    "title": "Latihan STDEV.S",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Hitung standar deviasi sampel dari nilai siswa.",
    "logicPrompt": "Coba pikir dulu input apa yang diminta oleh STDEV.S, lalu susun argumennya sesuai format.",
    "expectedFormula": "=STDEV.S(D2:D16)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "D2:D16"
    ],
    "allowedFunctions": [
      "STDEV.S"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "STDEV.S sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "STDEV.S adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "stdev_p": {
    "id": "stdev_p",
    "formulaName": "STDEV.P",
    "title": "Latihan STDEV.P",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Hitung standar deviasi populasi dari nilai siswa.",
    "logicPrompt": "Coba pikir dulu input apa yang diminta oleh STDEV.P, lalu susun argumennya sesuai format.",
    "expectedFormula": "=STDEV.P(D2:D16)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "D2:D16"
    ],
    "allowedFunctions": [
      "STDEV.P"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "STDEV.P sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "STDEV.P adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "var_s": {
    "id": "var_s",
    "formulaName": "VAR.S",
    "title": "Latihan VAR.S",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Hitung varians sampel dari nilai siswa.",
    "logicPrompt": "Coba pikir dulu input apa yang diminta oleh VAR.S, lalu susun argumennya sesuai format.",
    "expectedFormula": "=VAR.S(D2:D16)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "D2:D16"
    ],
    "allowedFunctions": [
      "VAR.S"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "VAR.S sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "VAR.S adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "var_p": {
    "id": "var_p",
    "formulaName": "VAR.P",
    "title": "Latihan VAR.P",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Hitung varians populasi dari nilai siswa.",
    "logicPrompt": "Coba pikir dulu input apa yang diminta oleh VAR.P, lalu susun argumennya sesuai format.",
    "expectedFormula": "=VAR.P(D2:D16)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "D2:D16"
    ],
    "allowedFunctions": [
      "VAR.P"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "VAR.P sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "VAR.P adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "rank": {
    "id": "rank",
    "formulaName": "RANK",
    "title": "Latihan RANK",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Cari ranking nilai Agus dibanding semua siswa, nilai besar ranking atas.",
    "logicPrompt": "Coba pikir dulu input apa yang diminta oleh RANK, lalu susun argumennya sesuai format.",
    "expectedFormula": "=RANK(D2,D2:D16,0)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2",
      "D2:D16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 3,
      "max": null
    },
    "highlightRanges": [
      "D2",
      "D2:D16"
    ],
    "allowedFunctions": [
      "RANK"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2, D2:D16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "RANK sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "RANK adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2, D2:D16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "rank_eq": {
    "id": "rank_eq",
    "formulaName": "RANK.EQ",
    "title": "Latihan RANK.EQ",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Cari ranking nilai Agus dengan RANK.EQ.",
    "logicPrompt": "Coba pikir dulu input apa yang diminta oleh RANK.EQ, lalu susun argumennya sesuai format.",
    "expectedFormula": "=RANK.EQ(D2,D2:D16,0)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2",
      "D2:D16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 3,
      "max": null
    },
    "highlightRanges": [
      "D2",
      "D2:D16"
    ],
    "allowedFunctions": [
      "RANK.EQ"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2, D2:D16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "RANK.EQ sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "RANK.EQ adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2, D2:D16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "percentile": {
    "id": "percentile",
    "formulaName": "PERCENTILE",
    "title": "Latihan PERCENTILE",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Cari percentile 90% dari nilai siswa.",
    "logicPrompt": "Coba pikir dulu input apa yang diminta oleh PERCENTILE, lalu susun argumennya sesuai format.",
    "expectedFormula": "=PERCENTILE(D2:D16,0.9)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "D2:D16"
    ],
    "allowedFunctions": [
      "PERCENTILE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "PERCENTILE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "PERCENTILE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "quartile": {
    "id": "quartile",
    "formulaName": "QUARTILE",
    "title": "Latihan QUARTILE",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Cari kuartil pertama dari nilai siswa.",
    "logicPrompt": "Coba pikir dulu input apa yang diminta oleh QUARTILE, lalu susun argumennya sesuai format.",
    "expectedFormula": "=QUARTILE(D2:D16,1)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "D2:D16"
    ],
    "allowedFunctions": [
      "QUARTILE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "QUARTILE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "QUARTILE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "sumif": {
    "id": "sumif",
    "formulaName": "SUMIF",
    "title": "Latihan SUMIF",
    "tableKey": "sales",
    "activeCell": "B2",
    "question": "Jumlahkan Total Penjualan untuk kategori Digital.",
    "logicPrompt": "Cek dulu kolom kriteria, baru hitung baris yang memenuhi syaratnya.",
    "expectedFormula": "=SUMIF(B2:B16,\"Digital\",E2:E16)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2:B16",
      "E2:E16"
    ],
    "requiredTexts": [
      "Digital"
    ],
    "argumentCount": {
      "min": 3,
      "max": 3
    },
    "highlightRanges": [
      "B2:B16",
      "E2:E16"
    ],
    "allowedFunctions": [
      "SUMIF"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2:B16, E2:E16.",
      "Ada kriteria/parameter yang harus masuk, misalnya Digital.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "SUMIF sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "SUMIF adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2:B16, E2:E16.",
      "Kriteria/parameter penting: Digital.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "sumifs": {
    "id": "sumifs",
    "formulaName": "SUMIFS",
    "title": "Latihan SUMIFS",
    "tableKey": "sales",
    "activeCell": "B2",
    "question": "Jumlahkan Total Penjualan untuk kategori Digital di kota Jakarta.",
    "logicPrompt": "Cek dulu kolom kriteria, baru hitung baris yang memenuhi syaratnya.",
    "expectedFormula": "=SUMIFS(E2:E16,B2:B16,\"Digital\",C2:C16,\"Jakarta\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "E2:E16",
      "B2:B16",
      "C2:C16"
    ],
    "requiredTexts": [
      "Digital",
      "Jakarta"
    ],
    "argumentCount": {
      "min": 5,
      "max": 5
    },
    "highlightRanges": [
      "E2:E16",
      "B2:B16",
      "C2:C16"
    ],
    "allowedFunctions": [
      "SUMIFS"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: E2:E16, B2:B16, C2:C16.",
      "Ada kriteria/parameter yang harus masuk, misalnya Digital, Jakarta.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "SUMIFS sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "SUMIFS adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: E2:E16, B2:B16, C2:C16.",
      "Kriteria/parameter penting: Digital, Jakarta.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "averageif": {
    "id": "averageif",
    "formulaName": "AVERAGEIF",
    "title": "Latihan AVERAGEIF",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Hitung rata-rata nilai siswa Perempuan.",
    "logicPrompt": "Cek dulu kolom kriteria, baru hitung baris yang memenuhi syaratnya.",
    "expectedFormula": "=AVERAGEIF(B2:B16,\"Perempuan\",D2:D16)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2:B16",
      "D2:D16"
    ],
    "requiredTexts": [
      "Perempuan"
    ],
    "argumentCount": {
      "min": 3,
      "max": 3
    },
    "highlightRanges": [
      "B2:B16",
      "D2:D16"
    ],
    "allowedFunctions": [
      "AVERAGEIF"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2:B16, D2:D16.",
      "Ada kriteria/parameter yang harus masuk, misalnya Perempuan.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "AVERAGEIF sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "AVERAGEIF adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2:B16, D2:D16.",
      "Kriteria/parameter penting: Perempuan.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "averageifs": {
    "id": "averageifs",
    "formulaName": "AVERAGEIFS",
    "title": "Latihan AVERAGEIFS",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Hitung rata-rata nilai siswa Perempuan dari kelas X-A.",
    "logicPrompt": "Cek dulu kolom kriteria, baru hitung baris yang memenuhi syaratnya.",
    "expectedFormula": "=AVERAGEIFS(D2:D16,B2:B16,\"Perempuan\",C2:C16,\"X-A\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16",
      "B2:B16",
      "C2:C16"
    ],
    "requiredTexts": [
      "Perempuan",
      "X-A"
    ],
    "argumentCount": {
      "min": 5,
      "max": 5
    },
    "highlightRanges": [
      "D2:D16",
      "B2:B16",
      "C2:C16"
    ],
    "allowedFunctions": [
      "AVERAGEIFS"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16, B2:B16, C2:C16.",
      "Ada kriteria/parameter yang harus masuk, misalnya Perempuan, X-A.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "AVERAGEIFS sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "AVERAGEIFS adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16, B2:B16, C2:C16.",
      "Kriteria/parameter penting: Perempuan, X-A.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "countif": {
    "id": "countif",
    "formulaName": "COUNTIF",
    "title": "Latihan COUNTIF",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Hitung jumlah siswa Perempuan.",
    "logicPrompt": "Cek dulu kolom kriteria, baru hitung baris yang memenuhi syaratnya.",
    "expectedFormula": "=COUNTIF(B2:B16,\"Perempuan\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2:B16"
    ],
    "requiredTexts": [
      "Perempuan"
    ],
    "argumentCount": {
      "min": 2,
      "max": 2
    },
    "highlightRanges": [
      "B2:B16"
    ],
    "allowedFunctions": [
      "COUNTIF"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2:B16.",
      "Ada kriteria/parameter yang harus masuk, misalnya Perempuan.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "COUNTIF sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "COUNTIF adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2:B16.",
      "Kriteria/parameter penting: Perempuan.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "countifs": {
    "id": "countifs",
    "formulaName": "COUNTIFS",
    "title": "Latihan COUNTIFS",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Hitung jumlah siswa Perempuan di kelas X-A.",
    "logicPrompt": "Cek dulu kolom kriteria, baru hitung baris yang memenuhi syaratnya.",
    "expectedFormula": "=COUNTIFS(B2:B16,\"Perempuan\",C2:C16,\"X-A\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2:B16",
      "C2:C16"
    ],
    "requiredTexts": [
      "Perempuan",
      "X-A"
    ],
    "argumentCount": {
      "min": 4,
      "max": 4
    },
    "highlightRanges": [
      "B2:B16",
      "C2:C16"
    ],
    "allowedFunctions": [
      "COUNTIFS"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2:B16, C2:C16.",
      "Ada kriteria/parameter yang harus masuk, misalnya Perempuan, X-A.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "COUNTIFS sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "COUNTIFS adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2:B16, C2:C16.",
      "Kriteria/parameter penting: Perempuan, X-A.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "if": {
    "id": "if",
    "formulaName": "IF",
    "title": "Latihan IF",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Di cell F2, buat status baru: kalau nilai D2 >= 75 hasilnya Lulus, kalau tidak hasilnya Tidak Lulus.",
    "logicPrompt": "Bayangkan rumus logical seperti pertanyaan. Jawabannya TRUE/FALSE atau hasil yang kamu tentukan.",
    "expectedFormula": "=IF(D2>=75,\"Lulus\",\"Tidak Lulus\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2"
    ],
    "requiredTexts": [
      "75",
      "Lulus",
      "Tidak Lulus"
    ],
    "argumentCount": {
      "min": 3,
      "max": 3
    },
    "highlightRanges": [
      "D2"
    ],
    "allowedFunctions": [
      "IF"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 75, Lulus, Tidak Lulus.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "IF sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "IF adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2.",
      "Kriteria/parameter penting: 75, Lulus, Tidak Lulus.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "ifs": {
    "id": "ifs",
    "formulaName": "IFS",
    "title": "Latihan IFS",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Buat grade: nilai >=90 dapat A, >=75 dapat B, di bawah 75 dapat C.",
    "logicPrompt": "Bayangkan rumus logical seperti pertanyaan. Jawabannya TRUE/FALSE atau hasil yang kamu tentukan.",
    "expectedFormula": "=IFS(D2>=90,\"A\",D2>=75,\"B\",D2<75,\"C\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2"
    ],
    "requiredTexts": [
      "90",
      "75",
      "A",
      "B",
      "C"
    ],
    "argumentCount": {
      "min": 6,
      "max": 6
    },
    "highlightRanges": [
      "D2"
    ],
    "allowedFunctions": [
      "IFS"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 90, 75, A.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "IFS sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "IFS adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2.",
      "Kriteria/parameter penting: 90, 75, A, B, C.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "and": {
    "id": "and",
    "formulaName": "AND",
    "title": "Latihan AND",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Cek apakah siswa pertama nilainya >=75 dan statusnya Lulus.",
    "logicPrompt": "Bayangkan rumus logical seperti pertanyaan. Jawabannya TRUE/FALSE atau hasil yang kamu tentukan.",
    "expectedFormula": "=AND(D2>=75,E2=\"Lulus\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2",
      "E2"
    ],
    "requiredTexts": [
      "75",
      "Lulus"
    ],
    "argumentCount": {
      "min": 2,
      "max": 2
    },
    "highlightRanges": [
      "D2",
      "E2"
    ],
    "allowedFunctions": [
      "AND"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2, E2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 75, Lulus.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "AND sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "AND adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2, E2.",
      "Kriteria/parameter penting: 75, Lulus.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "or": {
    "id": "or",
    "formulaName": "OR",
    "title": "Latihan OR",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Cek apakah siswa pertama nilainya >=75 atau kelasnya X-A.",
    "logicPrompt": "Bayangkan rumus logical seperti pertanyaan. Jawabannya TRUE/FALSE atau hasil yang kamu tentukan.",
    "expectedFormula": "=OR(D2>=75,C2=\"X-A\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2",
      "C2"
    ],
    "requiredTexts": [
      "75",
      "X-A"
    ],
    "argumentCount": {
      "min": 2,
      "max": 2
    },
    "highlightRanges": [
      "D2",
      "C2"
    ],
    "allowedFunctions": [
      "OR"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2, C2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 75, X-A.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "OR sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "OR adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2, C2.",
      "Kriteria/parameter penting: 75, X-A.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "not": {
    "id": "not",
    "formulaName": "NOT",
    "title": "Latihan NOT",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Cek kebalikan dari status E2 = Lulus.",
    "logicPrompt": "Bayangkan rumus logical seperti pertanyaan. Jawabannya TRUE/FALSE atau hasil yang kamu tentukan.",
    "expectedFormula": "=NOT(E2=\"Lulus\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "E2"
    ],
    "requiredTexts": [
      "Lulus"
    ],
    "argumentCount": {
      "min": 1,
      "max": 1
    },
    "highlightRanges": [
      "E2"
    ],
    "allowedFunctions": [
      "NOT"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: E2.",
      "Ada kriteria/parameter yang harus masuk, misalnya Lulus.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "NOT sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "NOT adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: E2.",
      "Kriteria/parameter penting: Lulus.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "iferror": {
    "id": "iferror",
    "formulaName": "IFERROR",
    "title": "Latihan IFERROR",
    "tableKey": "info",
    "activeCell": "B2",
    "question": "Jika formula di E2 error, tampilkan teks Cek formula.",
    "logicPrompt": "Bayangkan rumus logical seperti pertanyaan. Jawabannya TRUE/FALSE atau hasil yang kamu tentukan.",
    "expectedFormula": "=IFERROR(E2,\"Cek formula\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "E2"
    ],
    "requiredTexts": [
      "Cek formula"
    ],
    "argumentCount": {
      "min": 2,
      "max": 2
    },
    "highlightRanges": [
      "E2"
    ],
    "allowedFunctions": [
      "IFERROR"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: E2.",
      "Ada kriteria/parameter yang harus masuk, misalnya Cek formula.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "IFERROR sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "IFERROR adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: E2.",
      "Kriteria/parameter penting: Cek formula.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "ifna": {
    "id": "ifna",
    "formulaName": "IFNA",
    "title": "Latihan IFNA",
    "tableKey": "lookup",
    "activeCell": "B2",
    "question": "Cari nama produk kode P-010. Kalau tidak ada, tampilkan Tidak ditemukan.",
    "logicPrompt": "Bayangkan rumus logical seperti pertanyaan. Jawabannya TRUE/FALSE atau hasil yang kamu tentukan.",
    "expectedFormula": "=IFNA(XLOOKUP(\"P-010\",E2:E8,F2:F8),\"Tidak ditemukan\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "E2:E8",
      "F2:F8"
    ],
    "requiredTexts": [
      "P-010",
      "Tidak ditemukan"
    ],
    "argumentCount": {
      "min": 2,
      "max": 2
    },
    "highlightRanges": [
      "E2:E8",
      "F2:F8"
    ],
    "allowedFunctions": [
      "IFNA",
      "XLOOKUP"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: E2:E8, F2:F8.",
      "Ada kriteria/parameter yang harus masuk, misalnya P-010, Tidak ditemukan.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "IFNA sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "IFNA adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: E2:E8, F2:F8.",
      "Kriteria/parameter penting: P-010, Tidak ditemukan.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "switch": {
    "id": "switch",
    "formulaName": "SWITCH",
    "title": "Latihan SWITCH",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Ubah kelas C2: X-A jadi Kelas A, X-B jadi Kelas B, selain itu Lainnya.",
    "logicPrompt": "Bayangkan rumus logical seperti pertanyaan. Jawabannya TRUE/FALSE atau hasil yang kamu tentukan.",
    "expectedFormula": "=SWITCH(C2,\"X-A\",\"Kelas A\",\"X-B\",\"Kelas B\",\"Lainnya\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "C2"
    ],
    "requiredTexts": [
      "X-A",
      "Kelas A",
      "X-B",
      "Kelas B",
      "Lainnya"
    ],
    "argumentCount": {
      "min": 5,
      "max": 5
    },
    "highlightRanges": [
      "C2"
    ],
    "allowedFunctions": [
      "SWITCH"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: C2.",
      "Ada kriteria/parameter yang harus masuk, misalnya X-A, Kelas A, X-B.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "SWITCH sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "SWITCH adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: C2.",
      "Kriteria/parameter penting: X-A, Kelas A, X-B, Kelas B, Lainnya.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "true": {
    "id": "true",
    "formulaName": "TRUE",
    "title": "Latihan TRUE",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Tulis fungsi yang menghasilkan nilai TRUE.",
    "logicPrompt": "Bayangkan rumus logical seperti pertanyaan. Jawabannya TRUE/FALSE atau hasil yang kamu tentukan.",
    "expectedFormula": "=TRUE()",
    "acceptedFormulas": [],
    "requiredRefs": [],
    "requiredTexts": [],
    "argumentCount": {
      "min": 0,
      "max": 0
    },
    "highlightRanges": [],
    "allowedFunctions": [
      "TRUE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Cari kolom atau range yang jadi bahan utama.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "TRUE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "TRUE adalah fungsi utama yang dipakai sesuai soal.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "false": {
    "id": "false",
    "formulaName": "FALSE",
    "title": "Latihan FALSE",
    "tableKey": "students",
    "activeCell": "B2",
    "question": "Tulis fungsi yang menghasilkan nilai FALSE.",
    "logicPrompt": "Bayangkan rumus logical seperti pertanyaan. Jawabannya TRUE/FALSE atau hasil yang kamu tentukan.",
    "expectedFormula": "=FALSE()",
    "acceptedFormulas": [],
    "requiredRefs": [],
    "requiredTexts": [],
    "argumentCount": {
      "min": 0,
      "max": 0
    },
    "highlightRanges": [],
    "allowedFunctions": [
      "FALSE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Cari kolom atau range yang jadi bahan utama.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "FALSE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "FALSE adalah fungsi utama yang dipakai sesuai soal.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "vlookup": {
    "id": "vlookup",
    "formulaName": "VLOOKUP",
    "title": "Latihan VLOOKUP",
    "tableKey": "lookup",
    "activeCell": "B2",
    "question": "Ambil Master Nama untuk Kode Produk di A2 dari master produk.",
    "logicPrompt": "Cari kunci datanya dulu, lalu pastikan range pengambilannya sejajar dengan kunci tersebut.",
    "expectedFormula": "=VLOOKUP(A2,E2:I8,2,FALSE)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2",
      "E2:I8"
    ],
    "requiredTexts": [
      "FALSE"
    ],
    "argumentCount": {
      "min": 4,
      "max": null
    },
    "highlightRanges": [
      "A2",
      "E2:I8"
    ],
    "allowedFunctions": [
      "VLOOKUP"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2, E2:I8.",
      "Ada kriteria/parameter yang harus masuk, misalnya FALSE.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "VLOOKUP sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "VLOOKUP adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2, E2:I8.",
      "Kriteria/parameter penting: FALSE.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "hlookup": {
    "id": "hlookup",
    "formulaName": "HLOOKUP",
    "title": "Latihan HLOOKUP",
    "tableKey": "lookupHorizontal",
    "activeCell": "B2",
    "question": "Ambil Harga untuk Master Kode P-003 dari tabel horizontal.",
    "logicPrompt": "Cari kunci datanya dulu, lalu pastikan range pengambilannya sejajar dengan kunci tersebut.",
    "expectedFormula": "=HLOOKUP(\"P-003\",A1:H4,3,FALSE)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A1:H4"
    ],
    "requiredTexts": [
      "P-003",
      "FALSE"
    ],
    "argumentCount": {
      "min": 4,
      "max": null
    },
    "highlightRanges": [
      "A1:H4"
    ],
    "allowedFunctions": [
      "HLOOKUP"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A1:H4.",
      "Ada kriteria/parameter yang harus masuk, misalnya P-003, FALSE.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "HLOOKUP sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "HLOOKUP adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A1:H4.",
      "Kriteria/parameter penting: P-003, FALSE.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "xlookup": {
    "id": "xlookup",
    "formulaName": "XLOOKUP",
    "title": "Latihan XLOOKUP",
    "tableKey": "lookup",
    "activeCell": "B2",
    "question": "Ambil Master Nama untuk Kode Produk di A2 dari master produk.",
    "logicPrompt": "Cari kunci datanya dulu, lalu pastikan range pengambilannya sejajar dengan kunci tersebut.",
    "expectedFormula": "=XLOOKUP(A2,E2:E8,F2:F8,\"Tidak ada\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2",
      "E2:E8",
      "F2:F8"
    ],
    "requiredTexts": [
      "Tidak ada"
    ],
    "argumentCount": {
      "min": 4,
      "max": null
    },
    "highlightRanges": [
      "A2",
      "E2:E8",
      "F2:F8"
    ],
    "allowedFunctions": [
      "XLOOKUP"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2, E2:E8, F2:F8.",
      "Ada kriteria/parameter yang harus masuk, misalnya Tidak ada.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "XLOOKUP sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "XLOOKUP adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2, E2:E8, F2:F8.",
      "Kriteria/parameter penting: Tidak ada.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "lookup": {
    "id": "lookup",
    "formulaName": "LOOKUP",
    "title": "Latihan LOOKUP",
    "tableKey": "lookup",
    "activeCell": "B2",
    "question": "Cari nama produk dengan LOOKUP berdasarkan kode P-003.",
    "logicPrompt": "Cari kunci datanya dulu, lalu pastikan range pengambilannya sejajar dengan kunci tersebut.",
    "expectedFormula": "=LOOKUP(\"P-003\",E2:E8,F2:F8)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "E2:E8",
      "F2:F8"
    ],
    "requiredTexts": [
      "P-003"
    ],
    "argumentCount": {
      "min": 3,
      "max": null
    },
    "highlightRanges": [
      "E2:E8",
      "F2:F8"
    ],
    "allowedFunctions": [
      "LOOKUP"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: E2:E8, F2:F8.",
      "Ada kriteria/parameter yang harus masuk, misalnya P-003.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "LOOKUP sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "LOOKUP adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: E2:E8, F2:F8.",
      "Kriteria/parameter penting: P-003.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "index": {
    "id": "index",
    "formulaName": "INDEX",
    "title": "Latihan INDEX",
    "tableKey": "lookup",
    "activeCell": "B2",
    "question": "Ambil data ke-3 dari kolom Master Nama.",
    "logicPrompt": "Cari kunci datanya dulu, lalu pastikan range pengambilannya sejajar dengan kunci tersebut.",
    "expectedFormula": "=INDEX(F2:F8,3)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "F2:F8"
    ],
    "requiredTexts": [
      "3"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "F2:F8"
    ],
    "allowedFunctions": [
      "INDEX"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: F2:F8.",
      "Ada kriteria/parameter yang harus masuk, misalnya 3.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "INDEX sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "INDEX adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: F2:F8.",
      "Kriteria/parameter penting: 3.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "match": {
    "id": "match",
    "formulaName": "MATCH",
    "title": "Latihan MATCH",
    "tableKey": "lookup",
    "activeCell": "B2",
    "question": "Cari posisi Kode Produk A2 di kolom Master Kode.",
    "logicPrompt": "Cari kunci datanya dulu, lalu pastikan range pengambilannya sejajar dengan kunci tersebut.",
    "expectedFormula": "=MATCH(A2,E2:E8,0)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2",
      "E2:E8"
    ],
    "requiredTexts": [
      "0"
    ],
    "argumentCount": {
      "min": 3,
      "max": null
    },
    "highlightRanges": [
      "A2",
      "E2:E8"
    ],
    "allowedFunctions": [
      "MATCH"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2, E2:E8.",
      "Ada kriteria/parameter yang harus masuk, misalnya 0.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "MATCH sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "MATCH adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2, E2:E8.",
      "Kriteria/parameter penting: 0.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "index_match": {
    "id": "index_match",
    "formulaName": "INDEX MATCH",
    "title": "Latihan INDEX MATCH",
    "tableKey": "lookup",
    "activeCell": "B2",
    "question": "Ambil Master Nama untuk Kode Produk A2 dengan gabungan INDEX dan MATCH.",
    "logicPrompt": "Cari kunci datanya dulu, lalu pastikan range pengambilannya sejajar dengan kunci tersebut.",
    "expectedFormula": "=INDEX(F2:F8,MATCH(A2,E2:E8,0))",
    "acceptedFormulas": [],
    "requiredRefs": [
      "F2:F8",
      "A2",
      "E2:E8"
    ],
    "requiredTexts": [
      "0"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "F2:F8",
      "A2",
      "E2:E8"
    ],
    "allowedFunctions": [
      "INDEX",
      "MATCH"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: F2:F8, A2, E2:E8.",
      "Ada kriteria/parameter yang harus masuk, misalnya 0.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "INDEX MATCH sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "INDEX MATCH adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: F2:F8, A2, E2:E8.",
      "Kriteria/parameter penting: 0.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "xmatch": {
    "id": "xmatch",
    "formulaName": "XMATCH",
    "title": "Latihan XMATCH",
    "tableKey": "lookup",
    "activeCell": "B2",
    "question": "Cari posisi Kode Produk A2 di Master Kode memakai XMATCH.",
    "logicPrompt": "Cari kunci datanya dulu, lalu pastikan range pengambilannya sejajar dengan kunci tersebut.",
    "expectedFormula": "=XMATCH(A2,E2:E8)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2",
      "E2:E8"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "A2",
      "E2:E8"
    ],
    "allowedFunctions": [
      "XMATCH"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2, E2:E8.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "XMATCH sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "XMATCH adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2, E2:E8.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "choose": {
    "id": "choose",
    "formulaName": "CHOOSE",
    "title": "Latihan CHOOSE",
    "tableKey": "lookup",
    "activeCell": "B2",
    "question": "Ambil pilihan ke-2 dari Nama Produk, Harga, dan Kategori baris master pertama.",
    "logicPrompt": "Cari kunci datanya dulu, lalu pastikan range pengambilannya sejajar dengan kunci tersebut.",
    "expectedFormula": "=CHOOSE(2,F2,G2,H2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "F2",
      "G2",
      "H2"
    ],
    "requiredTexts": [
      "2"
    ],
    "argumentCount": {
      "min": 4,
      "max": null
    },
    "highlightRanges": [
      "F2",
      "G2",
      "H2"
    ],
    "allowedFunctions": [
      "CHOOSE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: F2, G2, H2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 2.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "CHOOSE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "CHOOSE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: F2, G2, H2.",
      "Kriteria/parameter penting: 2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "row": {
    "id": "row",
    "formulaName": "ROW",
    "title": "Latihan ROW",
    "tableKey": "lookup",
    "activeCell": "B2",
    "question": "Tampilkan nomor baris dari A2.",
    "logicPrompt": "Cari kunci datanya dulu, lalu pastikan range pengambilannya sejajar dengan kunci tersebut.",
    "expectedFormula": "=ROW(A2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "A2"
    ],
    "allowedFunctions": [
      "ROW"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "ROW sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "ROW adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "column": {
    "id": "column",
    "formulaName": "COLUMN",
    "title": "Latihan COLUMN",
    "tableKey": "lookup",
    "activeCell": "B2",
    "question": "Tampilkan nomor kolom dari G2.",
    "logicPrompt": "Cari kunci datanya dulu, lalu pastikan range pengambilannya sejajar dengan kunci tersebut.",
    "expectedFormula": "=COLUMN(G2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "G2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "G2"
    ],
    "allowedFunctions": [
      "COLUMN"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: G2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "COLUMN sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "COLUMN adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: G2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "rows": {
    "id": "rows",
    "formulaName": "ROWS",
    "title": "Latihan ROWS",
    "tableKey": "lookup",
    "activeCell": "B2",
    "question": "Hitung jumlah baris pada range master.",
    "logicPrompt": "Cari kunci datanya dulu, lalu pastikan range pengambilannya sejajar dengan kunci tersebut.",
    "expectedFormula": "=ROWS(E2:I8)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "E2:I8"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "E2:I8"
    ],
    "allowedFunctions": [
      "ROWS"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: E2:I8.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "ROWS sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "ROWS adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: E2:I8.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "columns": {
    "id": "columns",
    "formulaName": "COLUMNS",
    "title": "Latihan COLUMNS",
    "tableKey": "lookup",
    "activeCell": "B2",
    "question": "Hitung jumlah kolom pada range master.",
    "logicPrompt": "Cari kunci datanya dulu, lalu pastikan range pengambilannya sejajar dengan kunci tersebut.",
    "expectedFormula": "=COLUMNS(E2:I8)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "E2:I8"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "E2:I8"
    ],
    "allowedFunctions": [
      "COLUMNS"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: E2:I8.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "COLUMNS sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "COLUMNS adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: E2:I8.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "address": {
    "id": "address",
    "formulaName": "ADDRESS",
    "title": "Latihan ADDRESS",
    "tableKey": "lookup",
    "activeCell": "B2",
    "question": "Buat alamat cell dari baris 2 dan kolom 7.",
    "logicPrompt": "Cari kunci datanya dulu, lalu pastikan range pengambilannya sejajar dengan kunci tersebut.",
    "expectedFormula": "=ADDRESS(2,7)",
    "acceptedFormulas": [],
    "requiredRefs": [],
    "requiredTexts": [
      "2",
      "7"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [],
    "allowedFunctions": [
      "ADDRESS"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Cari kolom atau range yang jadi bahan utama.",
      "Ada kriteria/parameter yang harus masuk, misalnya 2, 7.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "ADDRESS sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "ADDRESS adalah fungsi utama yang dipakai sesuai soal.",
      "Kriteria/parameter penting: 2, 7.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "indirect": {
    "id": "indirect",
    "formulaName": "INDIRECT",
    "title": "Latihan INDIRECT",
    "tableKey": "lookup",
    "activeCell": "B2",
    "question": "Ambil nilai dari alamat yang ditulis sebagai teks G2.",
    "logicPrompt": "Cari kunci datanya dulu, lalu pastikan range pengambilannya sejajar dengan kunci tersebut.",
    "expectedFormula": "=INDIRECT(\"G2\")",
    "acceptedFormulas": [],
    "requiredRefs": [],
    "requiredTexts": [
      "G2"
    ],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [],
    "allowedFunctions": [
      "INDIRECT"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Cari kolom atau range yang jadi bahan utama.",
      "Ada kriteria/parameter yang harus masuk, misalnya G2.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "INDIRECT sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "INDIRECT adalah fungsi utama yang dipakai sesuai soal.",
      "Kriteria/parameter penting: G2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "offset": {
    "id": "offset",
    "formulaName": "OFFSET",
    "title": "Latihan OFFSET",
    "tableKey": "lookup",
    "activeCell": "B2",
    "question": "Mulai dari E2, geser 2 baris dan 1 kolom.",
    "logicPrompt": "Cari kunci datanya dulu, lalu pastikan range pengambilannya sejajar dengan kunci tersebut.",
    "expectedFormula": "=OFFSET(E2,2,1)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "E2"
    ],
    "requiredTexts": [
      "2",
      "1"
    ],
    "argumentCount": {
      "min": 3,
      "max": null
    },
    "highlightRanges": [
      "E2"
    ],
    "allowedFunctions": [
      "OFFSET"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: E2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 2, 1.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "OFFSET sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "OFFSET adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: E2.",
      "Kriteria/parameter penting: 2, 1.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "formulatext": {
    "id": "formulatext",
    "formulaName": "FORMULATEXT",
    "title": "Latihan FORMULATEXT",
    "tableKey": "info",
    "activeCell": "B2",
    "question": "Tampilkan formula yang ada di E2 sebagai teks.",
    "logicPrompt": "Cari kunci datanya dulu, lalu pastikan range pengambilannya sejajar dengan kunci tersebut.",
    "expectedFormula": "=FORMULATEXT(E2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "E2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "E2"
    ],
    "allowedFunctions": [
      "FORMULATEXT"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: E2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "FORMULATEXT sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "FORMULATEXT adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: E2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "hyperlink": {
    "id": "hyperlink",
    "formulaName": "HYPERLINK",
    "title": "Latihan HYPERLINK",
    "tableKey": "info",
    "activeCell": "B2",
    "question": "Buat link dari F2 dengan teks Buka Link.",
    "logicPrompt": "Cari kunci datanya dulu, lalu pastikan range pengambilannya sejajar dengan kunci tersebut.",
    "expectedFormula": "=HYPERLINK(F2,\"Buka Link\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "F2"
    ],
    "requiredTexts": [
      "Buka Link"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "F2"
    ],
    "allowedFunctions": [
      "HYPERLINK"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: F2.",
      "Ada kriteria/parameter yang harus masuk, misalnya Buka Link.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "HYPERLINK sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "HYPERLINK adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: F2.",
      "Kriteria/parameter penting: Buka Link.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "filter": {
    "id": "filter",
    "formulaName": "FILTER",
    "title": "Latihan FILTER",
    "tableKey": "dynamic",
    "activeCell": "B2",
    "question": "Tampilkan semua baris yang kotanya Jakarta.",
    "logicPrompt": "Rumus dynamic array bisa menghasilkan banyak cell sekaligus. Fokus ke area data dan kondisi spill-nya.",
    "expectedFormula": "=FILTER(A2:E16,C2:C16=\"Jakarta\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2:E16",
      "C2:C16"
    ],
    "requiredTexts": [
      "Jakarta"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "A2:E16",
      "C2:C16"
    ],
    "allowedFunctions": [
      "FILTER"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2:E16, C2:C16.",
      "Ada kriteria/parameter yang harus masuk, misalnya Jakarta.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "FILTER sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "FILTER adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2:E16, C2:C16.",
      "Kriteria/parameter penting: Jakarta.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "sort": {
    "id": "sort",
    "formulaName": "SORT",
    "title": "Latihan SORT",
    "tableKey": "dynamic",
    "activeCell": "B2",
    "question": "Urutkan data berdasarkan Sales terbesar ke terkecil.",
    "logicPrompt": "Rumus dynamic array bisa menghasilkan banyak cell sekaligus. Fokus ke area data dan kondisi spill-nya.",
    "expectedFormula": "=SORT(A2:E16,4,-1)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2:E16"
    ],
    "requiredTexts": [
      "4",
      "-1"
    ],
    "argumentCount": {
      "min": 3,
      "max": null
    },
    "highlightRanges": [
      "A2:E16"
    ],
    "allowedFunctions": [
      "SORT"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2:E16.",
      "Ada kriteria/parameter yang harus masuk, misalnya 4, -1.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "SORT sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "SORT adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2:E16.",
      "Kriteria/parameter penting: 4, -1.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "sortby": {
    "id": "sortby",
    "formulaName": "SORTBY",
    "title": "Latihan SORTBY",
    "tableKey": "dynamic",
    "activeCell": "B2",
    "question": "Urutkan data berdasarkan kolom Sales dari besar ke kecil.",
    "logicPrompt": "Rumus dynamic array bisa menghasilkan banyak cell sekaligus. Fokus ke area data dan kondisi spill-nya.",
    "expectedFormula": "=SORTBY(A2:E16,D2:D16,-1)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2:E16",
      "D2:D16"
    ],
    "requiredTexts": [
      "-1"
    ],
    "argumentCount": {
      "min": 3,
      "max": null
    },
    "highlightRanges": [
      "A2:E16",
      "D2:D16"
    ],
    "allowedFunctions": [
      "SORTBY"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2:E16, D2:D16.",
      "Ada kriteria/parameter yang harus masuk, misalnya -1.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "SORTBY sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "SORTBY adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2:E16, D2:D16.",
      "Kriteria/parameter penting: -1.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "unique": {
    "id": "unique",
    "formulaName": "UNIQUE",
    "title": "Latihan UNIQUE",
    "tableKey": "dynamic",
    "activeCell": "B2",
    "question": "Ambil daftar kategori unik.",
    "logicPrompt": "Rumus dynamic array bisa menghasilkan banyak cell sekaligus. Fokus ke area data dan kondisi spill-nya.",
    "expectedFormula": "=UNIQUE(B2:B16)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2:B16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "B2:B16"
    ],
    "allowedFunctions": [
      "UNIQUE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2:B16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "UNIQUE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "UNIQUE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2:B16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "transpose": {
    "id": "transpose",
    "formulaName": "TRANSPOSE",
    "title": "Latihan TRANSPOSE",
    "tableKey": "dynamic",
    "activeCell": "B2",
    "question": "Ubah header dari horizontal menjadi vertikal.",
    "logicPrompt": "Rumus dynamic array bisa menghasilkan banyak cell sekaligus. Fokus ke area data dan kondisi spill-nya.",
    "expectedFormula": "=TRANSPOSE(A1:E1)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A1:E1"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "A1:E1"
    ],
    "allowedFunctions": [
      "TRANSPOSE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A1:E1.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "TRANSPOSE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "TRANSPOSE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A1:E1.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "choosecols": {
    "id": "choosecols",
    "formulaName": "CHOOSECOLS",
    "title": "Latihan CHOOSECOLS",
    "tableKey": "dynamic",
    "activeCell": "B2",
    "question": "Ambil hanya kolom Produk dan Sales.",
    "logicPrompt": "Rumus dynamic array bisa menghasilkan banyak cell sekaligus. Fokus ke area data dan kondisi spill-nya.",
    "expectedFormula": "=CHOOSECOLS(A1:E16,1,4)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A1:E16"
    ],
    "requiredTexts": [
      "1",
      "4"
    ],
    "argumentCount": {
      "min": 3,
      "max": null
    },
    "highlightRanges": [
      "A1:E16"
    ],
    "allowedFunctions": [
      "CHOOSECOLS"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A1:E16.",
      "Ada kriteria/parameter yang harus masuk, misalnya 1, 4.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "CHOOSECOLS sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "CHOOSECOLS adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A1:E16.",
      "Kriteria/parameter penting: 1, 4.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "chooserows": {
    "id": "chooserows",
    "formulaName": "CHOOSEROWS",
    "title": "Latihan CHOOSEROWS",
    "tableKey": "dynamic",
    "activeCell": "B2",
    "question": "Ambil header dan 2 baris pertama.",
    "logicPrompt": "Rumus dynamic array bisa menghasilkan banyak cell sekaligus. Fokus ke area data dan kondisi spill-nya.",
    "expectedFormula": "=CHOOSEROWS(A1:E16,1,2,3)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A1:E16"
    ],
    "requiredTexts": [
      "1",
      "2",
      "3"
    ],
    "argumentCount": {
      "min": 4,
      "max": null
    },
    "highlightRanges": [
      "A1:E16"
    ],
    "allowedFunctions": [
      "CHOOSEROWS"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A1:E16.",
      "Ada kriteria/parameter yang harus masuk, misalnya 1, 2, 3.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "CHOOSEROWS sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "CHOOSEROWS adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A1:E16.",
      "Kriteria/parameter penting: 1, 2, 3.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "take": {
    "id": "take",
    "formulaName": "TAKE",
    "title": "Latihan TAKE",
    "tableKey": "dynamic",
    "activeCell": "B2",
    "question": "Ambil 5 baris pertama.",
    "logicPrompt": "Rumus dynamic array bisa menghasilkan banyak cell sekaligus. Fokus ke area data dan kondisi spill-nya.",
    "expectedFormula": "=TAKE(A1:E16,5)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A1:E16"
    ],
    "requiredTexts": [
      "5"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "A1:E16"
    ],
    "allowedFunctions": [
      "TAKE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A1:E16.",
      "Ada kriteria/parameter yang harus masuk, misalnya 5.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "TAKE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "TAKE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A1:E16.",
      "Kriteria/parameter penting: 5.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "drop": {
    "id": "drop",
    "formulaName": "DROP",
    "title": "Latihan DROP",
    "tableKey": "dynamic",
    "activeCell": "B2",
    "question": "Buang header, tampilkan sisa data.",
    "logicPrompt": "Rumus dynamic array bisa menghasilkan banyak cell sekaligus. Fokus ke area data dan kondisi spill-nya.",
    "expectedFormula": "=DROP(A1:E16,1)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A1:E16"
    ],
    "requiredTexts": [
      "1"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "A1:E16"
    ],
    "allowedFunctions": [
      "DROP"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A1:E16.",
      "Ada kriteria/parameter yang harus masuk, misalnya 1.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "DROP sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "DROP adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A1:E16.",
      "Kriteria/parameter penting: 1.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "vstack": {
    "id": "vstack",
    "formulaName": "VSTACK",
    "title": "Latihan VSTACK",
    "tableKey": "dynamic",
    "activeCell": "B2",
    "question": "Gabungkan dua blok data secara vertikal.",
    "logicPrompt": "Rumus dynamic array bisa menghasilkan banyak cell sekaligus. Fokus ke area data dan kondisi spill-nya.",
    "expectedFormula": "=VSTACK(A1:E8,A9:E16)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A1:E8",
      "A9:E16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "A1:E8",
      "A9:E16"
    ],
    "allowedFunctions": [
      "VSTACK"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A1:E8, A9:E16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "VSTACK sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "VSTACK adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A1:E8, A9:E16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "hstack": {
    "id": "hstack",
    "formulaName": "HSTACK",
    "title": "Latihan HSTACK",
    "tableKey": "dynamic",
    "activeCell": "B2",
    "question": "Gabungkan kolom Produk/Kategori dengan Sales/Bulan secara horizontal.",
    "logicPrompt": "Rumus dynamic array bisa menghasilkan banyak cell sekaligus. Fokus ke area data dan kondisi spill-nya.",
    "expectedFormula": "=HSTACK(A1:B16,D1:E16)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A1:B16",
      "D1:E16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "A1:B16",
      "D1:E16"
    ],
    "allowedFunctions": [
      "HSTACK"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A1:B16, D1:E16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "HSTACK sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "HSTACK adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A1:B16, D1:E16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "text": {
    "id": "text",
    "formulaName": "TEXT",
    "title": "Latihan TEXT",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Format nomor invoice C2 menjadi 4 digit teks.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=TEXT(C2,\"0000\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "C2"
    ],
    "requiredTexts": [
      "0000"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "C2"
    ],
    "allowedFunctions": [
      "TEXT"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: C2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 0000.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "TEXT sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "TEXT adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: C2.",
      "Kriteria/parameter penting: 0000.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "left": {
    "id": "left",
    "formulaName": "LEFT",
    "title": "Latihan LEFT",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Ambil 3 karakter paling kiri dari kode produk.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=LEFT(B2,3)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2"
    ],
    "requiredTexts": [
      "3"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "B2"
    ],
    "allowedFunctions": [
      "LEFT"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 3.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "LEFT sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "LEFT adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2.",
      "Kriteria/parameter penting: 3.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "right": {
    "id": "right",
    "formulaName": "RIGHT",
    "title": "Latihan RIGHT",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Ambil 2 karakter paling kanan dari nomor invoice.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=RIGHT(C2,2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "C2"
    ],
    "requiredTexts": [
      "2"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "C2"
    ],
    "allowedFunctions": [
      "RIGHT"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: C2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 2.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "RIGHT sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "RIGHT adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: C2.",
      "Kriteria/parameter penting: 2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "mid": {
    "id": "mid",
    "formulaName": "MID",
    "title": "Latihan MID",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Ambil 3 karakter dari kode produk mulai karakter ke-5.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=MID(B2,5,3)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2"
    ],
    "requiredTexts": [
      "5",
      "3"
    ],
    "argumentCount": {
      "min": 3,
      "max": null
    },
    "highlightRanges": [
      "B2"
    ],
    "allowedFunctions": [
      "MID"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 5, 3.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "MID sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "MID adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2.",
      "Kriteria/parameter penting: 5, 3.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "len": {
    "id": "len",
    "formulaName": "LEN",
    "title": "Latihan LEN",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Hitung jumlah karakter pada nama lengkap A2.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=LEN(A2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "A2"
    ],
    "allowedFunctions": [
      "LEN"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "LEN sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "LEN adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "trim": {
    "id": "trim",
    "formulaName": "TRIM",
    "title": "Latihan TRIM",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Bersihkan spasi berlebih pada nama lengkap A2.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=TRIM(A2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "A2"
    ],
    "allowedFunctions": [
      "TRIM"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "TRIM sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "TRIM adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "clean": {
    "id": "clean",
    "formulaName": "CLEAN",
    "title": "Latihan CLEAN",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Bersihkan karakter tidak terlihat dari A2.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=CLEAN(A2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "A2"
    ],
    "allowedFunctions": [
      "CLEAN"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "CLEAN sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "CLEAN adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "lower": {
    "id": "lower",
    "formulaName": "LOWER",
    "title": "Latihan LOWER",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Ubah email D2 menjadi huruf kecil.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=LOWER(D2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "D2"
    ],
    "allowedFunctions": [
      "LOWER"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "LOWER sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "LOWER adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "upper": {
    "id": "upper",
    "formulaName": "UPPER",
    "title": "Latihan UPPER",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Ubah nama lengkap A2 menjadi huruf besar.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=UPPER(A2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "A2"
    ],
    "allowedFunctions": [
      "UPPER"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "UPPER sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "UPPER adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "proper": {
    "id": "proper",
    "formulaName": "PROPER",
    "title": "Latihan PROPER",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Ubah nama A2 menjadi kapital di awal kata.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=PROPER(A2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "A2"
    ],
    "allowedFunctions": [
      "PROPER"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "PROPER sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "PROPER adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "concat": {
    "id": "concat",
    "formulaName": "CONCAT",
    "title": "Latihan CONCAT",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Gabungkan nama dan kode produk dengan tanda hubung.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=CONCAT(A2,\" - \",B2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2",
      "B2"
    ],
    "requiredTexts": [
      " - "
    ],
    "argumentCount": {
      "min": 3,
      "max": null
    },
    "highlightRanges": [
      "A2",
      "B2"
    ],
    "allowedFunctions": [
      "CONCAT"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2, B2.",
      "Ada kriteria/parameter yang harus masuk, misalnya  - .",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "CONCAT sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "CONCAT adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2, B2.",
      "Kriteria/parameter penting:  - .",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "concatenate": {
    "id": "concatenate",
    "formulaName": "CONCATENATE",
    "title": "Latihan CONCATENATE",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Gabungkan nama dan kode produk dengan CONCATENATE.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=CONCATENATE(A2,\" - \",B2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2",
      "B2"
    ],
    "requiredTexts": [
      " - "
    ],
    "argumentCount": {
      "min": 3,
      "max": null
    },
    "highlightRanges": [
      "A2",
      "B2"
    ],
    "allowedFunctions": [
      "CONCATENATE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2, B2.",
      "Ada kriteria/parameter yang harus masuk, misalnya  - .",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "CONCATENATE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "CONCATENATE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2, B2.",
      "Kriteria/parameter penting:  - .",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "textjoin": {
    "id": "textjoin",
    "formulaName": "TEXTJOIN",
    "title": "Latihan TEXTJOIN",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Gabungkan A2 dan B2 dengan spasi, abaikan kosong.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=TEXTJOIN(\" \",TRUE,A2,B2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2",
      "B2"
    ],
    "requiredTexts": [
      "TRUE"
    ],
    "argumentCount": {
      "min": 4,
      "max": null
    },
    "highlightRanges": [
      "A2",
      "B2"
    ],
    "allowedFunctions": [
      "TEXTJOIN"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2, B2.",
      "Ada kriteria/parameter yang harus masuk, misalnya TRUE.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "TEXTJOIN sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "TEXTJOIN adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2, B2.",
      "Kriteria/parameter penting: TRUE.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "textsplit": {
    "id": "textsplit",
    "formulaName": "TEXTSPLIT",
    "title": "Latihan TEXTSPLIT",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Pisahkan email menjadi bagian sebelum dan sesudah @.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=TEXTSPLIT(D2,\"@\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2"
    ],
    "requiredTexts": [
      "@"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "D2"
    ],
    "allowedFunctions": [
      "TEXTSPLIT"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2.",
      "Ada kriteria/parameter yang harus masuk, misalnya @.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "TEXTSPLIT sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "TEXTSPLIT adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2.",
      "Kriteria/parameter penting: @.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "textbefore": {
    "id": "textbefore",
    "formulaName": "TEXTBEFORE",
    "title": "Latihan TEXTBEFORE",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Ambil teks sebelum tanda @ pada email.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=TEXTBEFORE(D2,\"@\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2"
    ],
    "requiredTexts": [
      "@"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "D2"
    ],
    "allowedFunctions": [
      "TEXTBEFORE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2.",
      "Ada kriteria/parameter yang harus masuk, misalnya @.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "TEXTBEFORE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "TEXTBEFORE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2.",
      "Kriteria/parameter penting: @.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "textafter": {
    "id": "textafter",
    "formulaName": "TEXTAFTER",
    "title": "Latihan TEXTAFTER",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Ambil teks setelah tanda @ pada email.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=TEXTAFTER(D2,\"@\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2"
    ],
    "requiredTexts": [
      "@"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "D2"
    ],
    "allowedFunctions": [
      "TEXTAFTER"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2.",
      "Ada kriteria/parameter yang harus masuk, misalnya @.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "TEXTAFTER sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "TEXTAFTER adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2.",
      "Kriteria/parameter penting: @.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "find": {
    "id": "find",
    "formulaName": "FIND",
    "title": "Latihan FIND",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Cari posisi tanda @ pada email.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=FIND(\"@\",D2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2"
    ],
    "requiredTexts": [
      "@"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "D2"
    ],
    "allowedFunctions": [
      "FIND"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2.",
      "Ada kriteria/parameter yang harus masuk, misalnya @.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "FIND sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "FIND adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2.",
      "Kriteria/parameter penting: @.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "search": {
    "id": "search",
    "formulaName": "SEARCH",
    "title": "Latihan SEARCH",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Cari posisi kata gmail pada email.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=SEARCH(\"gmail\",D2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2"
    ],
    "requiredTexts": [
      "gmail"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "D2"
    ],
    "allowedFunctions": [
      "SEARCH"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2.",
      "Ada kriteria/parameter yang harus masuk, misalnya gmail.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "SEARCH sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "SEARCH adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2.",
      "Kriteria/parameter penting: gmail.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "substitute": {
    "id": "substitute",
    "formulaName": "SUBSTITUTE",
    "title": "Latihan SUBSTITUTE",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Ganti domain gmail.com menjadi outlook.com.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=SUBSTITUTE(D2,\"gmail.com\",\"outlook.com\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2"
    ],
    "requiredTexts": [
      "gmail.com",
      "outlook.com"
    ],
    "argumentCount": {
      "min": 3,
      "max": null
    },
    "highlightRanges": [
      "D2"
    ],
    "allowedFunctions": [
      "SUBSTITUTE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2.",
      "Ada kriteria/parameter yang harus masuk, misalnya gmail.com, outlook.com.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "SUBSTITUTE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "SUBSTITUTE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2.",
      "Kriteria/parameter penting: gmail.com, outlook.com.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "replace": {
    "id": "replace",
    "formulaName": "REPLACE",
    "title": "Latihan REPLACE",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Ganti 3 karakter pertama kode produk dengan SKU.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=REPLACE(B2,1,3,\"SKU\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2"
    ],
    "requiredTexts": [
      "1",
      "3",
      "SKU"
    ],
    "argumentCount": {
      "min": 4,
      "max": null
    },
    "highlightRanges": [
      "B2"
    ],
    "allowedFunctions": [
      "REPLACE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 1, 3, SKU.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "REPLACE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "REPLACE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2.",
      "Kriteria/parameter penting: 1, 3, SKU.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "value": {
    "id": "value",
    "formulaName": "VALUE",
    "title": "Latihan VALUE",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Ubah nomor invoice yang berupa teks menjadi angka.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=VALUE(C2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "C2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "C2"
    ],
    "allowedFunctions": [
      "VALUE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: C2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "VALUE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "VALUE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: C2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "numbervalue": {
    "id": "numbervalue",
    "formulaName": "NUMBERVALUE",
    "title": "Latihan NUMBERVALUE",
    "tableKey": "text",
    "activeCell": "B2",
    "question": "Ubah nomor invoice menjadi angka dengan NUMBERVALUE.",
    "logicPrompt": "Untuk rumus teks, tentukan dulu bagian mana yang mau diambil, diubah, atau digabung.",
    "expectedFormula": "=NUMBERVALUE(C2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "C2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "C2"
    ],
    "allowedFunctions": [
      "NUMBERVALUE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: C2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "NUMBERVALUE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "NUMBERVALUE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: C2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "date": {
    "id": "date",
    "formulaName": "DATE",
    "title": "Latihan DATE",
    "tableKey": "date",
    "activeCell": "B2",
    "question": "Buat tanggal 30 Mei 2026 dari angka tahun, bulan, hari.",
    "logicPrompt": "Tanggal dan jam di Excel dihitung sebagai angka. Ambil bagian yang diminta atau hitung jaraknya.",
    "expectedFormula": "=DATE(2026,5,30)",
    "acceptedFormulas": [],
    "requiredRefs": [],
    "requiredTexts": [
      "2026",
      "5",
      "30"
    ],
    "argumentCount": {
      "min": 3,
      "max": 3
    },
    "highlightRanges": [],
    "allowedFunctions": [
      "DATE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Cari kolom atau range yang jadi bahan utama.",
      "Ada kriteria/parameter yang harus masuk, misalnya 2026, 5, 30.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "DATE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "DATE adalah fungsi utama yang dipakai sesuai soal.",
      "Kriteria/parameter penting: 2026, 5, 30.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "day": {
    "id": "day",
    "formulaName": "DAY",
    "title": "Latihan DAY",
    "tableKey": "date",
    "activeCell": "B2",
    "question": "Ambil angka hari dari Tanggal Masuk.",
    "logicPrompt": "Tanggal dan jam di Excel dihitung sebagai angka. Ambil bagian yang diminta atau hitung jaraknya.",
    "expectedFormula": "=DAY(B2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": 1
    },
    "highlightRanges": [
      "B2"
    ],
    "allowedFunctions": [
      "DAY"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "DAY sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "DAY adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "month": {
    "id": "month",
    "formulaName": "MONTH",
    "title": "Latihan MONTH",
    "tableKey": "date",
    "activeCell": "B2",
    "question": "Ambil angka bulan dari Tanggal Masuk.",
    "logicPrompt": "Tanggal dan jam di Excel dihitung sebagai angka. Ambil bagian yang diminta atau hitung jaraknya.",
    "expectedFormula": "=MONTH(B2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": 1
    },
    "highlightRanges": [
      "B2"
    ],
    "allowedFunctions": [
      "MONTH"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "MONTH sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "MONTH adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "year": {
    "id": "year",
    "formulaName": "YEAR",
    "title": "Latihan YEAR",
    "tableKey": "date",
    "activeCell": "B2",
    "question": "Ambil tahun dari Tanggal Masuk.",
    "logicPrompt": "Tanggal dan jam di Excel dihitung sebagai angka. Ambil bagian yang diminta atau hitung jaraknya.",
    "expectedFormula": "=YEAR(B2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": 1
    },
    "highlightRanges": [
      "B2"
    ],
    "allowedFunctions": [
      "YEAR"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "YEAR sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "YEAR adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "today": {
    "id": "today",
    "formulaName": "TODAY",
    "title": "Latihan TODAY",
    "tableKey": "date",
    "activeCell": "B2",
    "question": "Tampilkan tanggal hari ini.",
    "logicPrompt": "Tanggal dan jam di Excel dihitung sebagai angka. Ambil bagian yang diminta atau hitung jaraknya.",
    "expectedFormula": "=TODAY()",
    "acceptedFormulas": [],
    "requiredRefs": [],
    "requiredTexts": [],
    "argumentCount": {
      "min": 0,
      "max": 0
    },
    "highlightRanges": [],
    "allowedFunctions": [
      "TODAY"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Cari kolom atau range yang jadi bahan utama.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "TODAY sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "TODAY adalah fungsi utama yang dipakai sesuai soal.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "now": {
    "id": "now",
    "formulaName": "NOW",
    "title": "Latihan NOW",
    "tableKey": "date",
    "activeCell": "B2",
    "question": "Tampilkan tanggal dan jam sekarang.",
    "logicPrompt": "Tanggal dan jam di Excel dihitung sebagai angka. Ambil bagian yang diminta atau hitung jaraknya.",
    "expectedFormula": "=NOW()",
    "acceptedFormulas": [],
    "requiredRefs": [],
    "requiredTexts": [],
    "argumentCount": {
      "min": 0,
      "max": 0
    },
    "highlightRanges": [],
    "allowedFunctions": [
      "NOW"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Cari kolom atau range yang jadi bahan utama.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "NOW sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "NOW adalah fungsi utama yang dipakai sesuai soal.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "datedif": {
    "id": "datedif",
    "formulaName": "DATEDIF",
    "title": "Latihan DATEDIF",
    "tableKey": "date",
    "activeCell": "B2",
    "question": "Hitung selisih hari antara Tanggal Masuk dan Tanggal Keluar.",
    "logicPrompt": "Tanggal dan jam di Excel dihitung sebagai angka. Ambil bagian yang diminta atau hitung jaraknya.",
    "expectedFormula": "=DATEDIF(B2,C2,\"d\")",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2",
      "C2"
    ],
    "requiredTexts": [
      "d"
    ],
    "argumentCount": {
      "min": 3,
      "max": 3
    },
    "highlightRanges": [
      "B2",
      "C2"
    ],
    "allowedFunctions": [
      "DATEDIF"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2, C2.",
      "Ada kriteria/parameter yang harus masuk, misalnya d.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "DATEDIF sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "DATEDIF adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2, C2.",
      "Kriteria/parameter penting: d.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "days": {
    "id": "days",
    "formulaName": "DAYS",
    "title": "Latihan DAYS",
    "tableKey": "date",
    "activeCell": "B2",
    "question": "Hitung jumlah hari dari Tanggal Masuk ke Tanggal Keluar.",
    "logicPrompt": "Tanggal dan jam di Excel dihitung sebagai angka. Ambil bagian yang diminta atau hitung jaraknya.",
    "expectedFormula": "=DAYS(C2,B2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "C2",
      "B2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 2,
      "max": 2
    },
    "highlightRanges": [
      "C2",
      "B2"
    ],
    "allowedFunctions": [
      "DAYS"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: C2, B2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "DAYS sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "DAYS adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: C2, B2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "networkdays": {
    "id": "networkdays",
    "formulaName": "NETWORKDAYS",
    "title": "Latihan NETWORKDAYS",
    "tableKey": "date",
    "activeCell": "B2",
    "question": "Hitung jumlah hari kerja dari Tanggal Masuk sampai Deadline.",
    "logicPrompt": "Tanggal dan jam di Excel dihitung sebagai angka. Ambil bagian yang diminta atau hitung jaraknya.",
    "expectedFormula": "=NETWORKDAYS(B2,D2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2",
      "D2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 2,
      "max": 2
    },
    "highlightRanges": [
      "B2",
      "D2"
    ],
    "allowedFunctions": [
      "NETWORKDAYS"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2, D2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "NETWORKDAYS sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "NETWORKDAYS adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2, D2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "networkdays_intl": {
    "id": "networkdays_intl",
    "formulaName": "NETWORKDAYS.INTL",
    "title": "Latihan NETWORKDAYS.INTL",
    "tableKey": "date",
    "activeCell": "B2",
    "question": "Hitung hari kerja dengan pola weekend standar Sabtu-Minggu.",
    "logicPrompt": "Tanggal dan jam di Excel dihitung sebagai angka. Ambil bagian yang diminta atau hitung jaraknya.",
    "expectedFormula": "=NETWORKDAYS.INTL(B2,D2,1)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2",
      "D2"
    ],
    "requiredTexts": [
      "1"
    ],
    "argumentCount": {
      "min": 3,
      "max": 3
    },
    "highlightRanges": [
      "B2",
      "D2"
    ],
    "allowedFunctions": [
      "NETWORKDAYS.INTL"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2, D2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 1.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "NETWORKDAYS.INTL sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "NETWORKDAYS.INTL adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2, D2.",
      "Kriteria/parameter penting: 1.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "workday": {
    "id": "workday",
    "formulaName": "WORKDAY",
    "title": "Latihan WORKDAY",
    "tableKey": "date",
    "activeCell": "B2",
    "question": "Cari tanggal kerja 5 hari setelah Tanggal Masuk.",
    "logicPrompt": "Tanggal dan jam di Excel dihitung sebagai angka. Ambil bagian yang diminta atau hitung jaraknya.",
    "expectedFormula": "=WORKDAY(B2,5)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2"
    ],
    "requiredTexts": [
      "5"
    ],
    "argumentCount": {
      "min": 2,
      "max": 2
    },
    "highlightRanges": [
      "B2"
    ],
    "allowedFunctions": [
      "WORKDAY"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 5.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "WORKDAY sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "WORKDAY adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2.",
      "Kriteria/parameter penting: 5.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "workday_intl": {
    "id": "workday_intl",
    "formulaName": "WORKDAY.INTL",
    "title": "Latihan WORKDAY.INTL",
    "tableKey": "date",
    "activeCell": "B2",
    "question": "Cari tanggal kerja 5 hari setelah masuk dengan weekend standar.",
    "logicPrompt": "Tanggal dan jam di Excel dihitung sebagai angka. Ambil bagian yang diminta atau hitung jaraknya.",
    "expectedFormula": "=WORKDAY.INTL(B2,5,1)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2"
    ],
    "requiredTexts": [
      "5",
      "1"
    ],
    "argumentCount": {
      "min": 3,
      "max": 3
    },
    "highlightRanges": [
      "B2"
    ],
    "allowedFunctions": [
      "WORKDAY.INTL"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 5, 1.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "WORKDAY.INTL sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "WORKDAY.INTL adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2.",
      "Kriteria/parameter penting: 5, 1.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "edate": {
    "id": "edate",
    "formulaName": "EDATE",
    "title": "Latihan EDATE",
    "tableKey": "date",
    "activeCell": "B2",
    "question": "Cari tanggal 1 bulan setelah Tanggal Masuk.",
    "logicPrompt": "Tanggal dan jam di Excel dihitung sebagai angka. Ambil bagian yang diminta atau hitung jaraknya.",
    "expectedFormula": "=EDATE(B2,1)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2"
    ],
    "requiredTexts": [
      "1"
    ],
    "argumentCount": {
      "min": 2,
      "max": 2
    },
    "highlightRanges": [
      "B2"
    ],
    "allowedFunctions": [
      "EDATE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 1.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "EDATE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "EDATE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2.",
      "Kriteria/parameter penting: 1.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "eomonth": {
    "id": "eomonth",
    "formulaName": "EOMONTH",
    "title": "Latihan EOMONTH",
    "tableKey": "date",
    "activeCell": "B2",
    "question": "Cari tanggal akhir bulan dari Tanggal Masuk.",
    "logicPrompt": "Tanggal dan jam di Excel dihitung sebagai angka. Ambil bagian yang diminta atau hitung jaraknya.",
    "expectedFormula": "=EOMONTH(B2,0)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2"
    ],
    "requiredTexts": [
      "0"
    ],
    "argumentCount": {
      "min": 2,
      "max": 2
    },
    "highlightRanges": [
      "B2"
    ],
    "allowedFunctions": [
      "EOMONTH"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 0.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "EOMONTH sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "EOMONTH adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2.",
      "Kriteria/parameter penting: 0.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "hour": {
    "id": "hour",
    "formulaName": "HOUR",
    "title": "Latihan HOUR",
    "tableKey": "date",
    "activeCell": "B2",
    "question": "Ambil jam dari Jam Mulai.",
    "logicPrompt": "Tanggal dan jam di Excel dihitung sebagai angka. Ambil bagian yang diminta atau hitung jaraknya.",
    "expectedFormula": "=HOUR(E2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "E2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": 1
    },
    "highlightRanges": [
      "E2"
    ],
    "allowedFunctions": [
      "HOUR"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: E2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "HOUR sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "HOUR adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: E2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "minute": {
    "id": "minute",
    "formulaName": "MINUTE",
    "title": "Latihan MINUTE",
    "tableKey": "date",
    "activeCell": "B2",
    "question": "Ambil menit dari Jam Mulai.",
    "logicPrompt": "Tanggal dan jam di Excel dihitung sebagai angka. Ambil bagian yang diminta atau hitung jaraknya.",
    "expectedFormula": "=MINUTE(E2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "E2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": 1
    },
    "highlightRanges": [
      "E2"
    ],
    "allowedFunctions": [
      "MINUTE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: E2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "MINUTE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "MINUTE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: E2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "second": {
    "id": "second",
    "formulaName": "SECOND",
    "title": "Latihan SECOND",
    "tableKey": "date",
    "activeCell": "B2",
    "question": "Ambil detik dari Jam Mulai.",
    "logicPrompt": "Tanggal dan jam di Excel dihitung sebagai angka. Ambil bagian yang diminta atau hitung jaraknya.",
    "expectedFormula": "=SECOND(E2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "E2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": 1
    },
    "highlightRanges": [
      "E2"
    ],
    "allowedFunctions": [
      "SECOND"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: E2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "SECOND sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "SECOND adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: E2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "time": {
    "id": "time",
    "formulaName": "TIME",
    "title": "Latihan TIME",
    "tableKey": "date",
    "activeCell": "B2",
    "question": "Buat waktu 09:30:00 dari angka jam, menit, detik.",
    "logicPrompt": "Tanggal dan jam di Excel dihitung sebagai angka. Ambil bagian yang diminta atau hitung jaraknya.",
    "expectedFormula": "=TIME(9,30,0)",
    "acceptedFormulas": [],
    "requiredRefs": [],
    "requiredTexts": [
      "9",
      "30",
      "0"
    ],
    "argumentCount": {
      "min": 3,
      "max": 3
    },
    "highlightRanges": [],
    "allowedFunctions": [
      "TIME"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Cari kolom atau range yang jadi bahan utama.",
      "Ada kriteria/parameter yang harus masuk, misalnya 9, 30, 0.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "TIME sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "TIME adalah fungsi utama yang dipakai sesuai soal.",
      "Kriteria/parameter penting: 9, 30, 0.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "abs": {
    "id": "abs",
    "formulaName": "ABS",
    "title": "Latihan ABS",
    "tableKey": "forecast",
    "activeCell": "B2",
    "question": "Ubah angka negatif menjadi nilai absolut.",
    "logicPrompt": "Pastikan angka utama dan parameter tambahannya sesuai dengan tujuan hitungnya.",
    "expectedFormula": "=ABS(A2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "A2"
    ],
    "allowedFunctions": [
      "ABS"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "ABS sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "ABS adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "round": {
    "id": "round",
    "formulaName": "ROUND",
    "title": "Latihan ROUND",
    "tableKey": "forecast",
    "activeCell": "B2",
    "question": "Bulatkan sales B2 ke 0 digit desimal.",
    "logicPrompt": "Pastikan angka utama dan parameter tambahannya sesuai dengan tujuan hitungnya.",
    "expectedFormula": "=ROUND(B2,0)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2"
    ],
    "requiredTexts": [
      "0"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "B2"
    ],
    "allowedFunctions": [
      "ROUND"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 0.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "ROUND sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "ROUND adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2.",
      "Kriteria/parameter penting: 0.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "roundup": {
    "id": "roundup",
    "formulaName": "ROUNDUP",
    "title": "Latihan ROUNDUP",
    "tableKey": "forecast",
    "activeCell": "B2",
    "question": "Bulatkan sales B2 ke atas.",
    "logicPrompt": "Pastikan angka utama dan parameter tambahannya sesuai dengan tujuan hitungnya.",
    "expectedFormula": "=ROUNDUP(B2,0)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2"
    ],
    "requiredTexts": [
      "0"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "B2"
    ],
    "allowedFunctions": [
      "ROUNDUP"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 0.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "ROUNDUP sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "ROUNDUP adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2.",
      "Kriteria/parameter penting: 0.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "rounddown": {
    "id": "rounddown",
    "formulaName": "ROUNDDOWN",
    "title": "Latihan ROUNDDOWN",
    "tableKey": "forecast",
    "activeCell": "B2",
    "question": "Bulatkan sales B2 ke bawah.",
    "logicPrompt": "Pastikan angka utama dan parameter tambahannya sesuai dengan tujuan hitungnya.",
    "expectedFormula": "=ROUNDDOWN(B2,0)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2"
    ],
    "requiredTexts": [
      "0"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "B2"
    ],
    "allowedFunctions": [
      "ROUNDDOWN"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 0.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "ROUNDDOWN sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "ROUNDDOWN adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2.",
      "Kriteria/parameter penting: 0.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "int": {
    "id": "int",
    "formulaName": "INT",
    "title": "Latihan INT",
    "tableKey": "forecast",
    "activeCell": "B2",
    "question": "Ambil angka bulat dari sales B2.",
    "logicPrompt": "Pastikan angka utama dan parameter tambahannya sesuai dengan tujuan hitungnya.",
    "expectedFormula": "=INT(B2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "B2"
    ],
    "allowedFunctions": [
      "INT"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "INT sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "INT adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "mod": {
    "id": "mod",
    "formulaName": "MOD",
    "title": "Latihan MOD",
    "tableKey": "forecast",
    "activeCell": "B2",
    "question": "Cari sisa bagi sales B2 jika dibagi 3.",
    "logicPrompt": "Pastikan angka utama dan parameter tambahannya sesuai dengan tujuan hitungnya.",
    "expectedFormula": "=MOD(B2,3)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2"
    ],
    "requiredTexts": [
      "3"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "B2"
    ],
    "allowedFunctions": [
      "MOD"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 3.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "MOD sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "MOD adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2.",
      "Kriteria/parameter penting: 3.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "ceiling": {
    "id": "ceiling",
    "formulaName": "CEILING",
    "title": "Latihan CEILING",
    "tableKey": "forecast",
    "activeCell": "B2",
    "question": "Bulatkan sales B2 ke kelipatan 50 terdekat ke atas.",
    "logicPrompt": "Pastikan angka utama dan parameter tambahannya sesuai dengan tujuan hitungnya.",
    "expectedFormula": "=CEILING(B2,50)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2"
    ],
    "requiredTexts": [
      "50"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "B2"
    ],
    "allowedFunctions": [
      "CEILING"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 50.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "CEILING sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "CEILING adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2.",
      "Kriteria/parameter penting: 50.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "floor": {
    "id": "floor",
    "formulaName": "FLOOR",
    "title": "Latihan FLOOR",
    "tableKey": "forecast",
    "activeCell": "B2",
    "question": "Bulatkan sales B2 ke kelipatan 50 terdekat ke bawah.",
    "logicPrompt": "Pastikan angka utama dan parameter tambahannya sesuai dengan tujuan hitungnya.",
    "expectedFormula": "=FLOOR(B2,50)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2"
    ],
    "requiredTexts": [
      "50"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "B2"
    ],
    "allowedFunctions": [
      "FLOOR"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 50.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "FLOOR sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "FLOOR adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2.",
      "Kriteria/parameter penting: 50.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "power": {
    "id": "power",
    "formulaName": "POWER",
    "title": "Latihan POWER",
    "tableKey": "forecast",
    "activeCell": "B2",
    "question": "Pangkatkan bulan ke- A2 dengan pangkat 2.",
    "logicPrompt": "Pastikan angka utama dan parameter tambahannya sesuai dengan tujuan hitungnya.",
    "expectedFormula": "=POWER(A2,2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2"
    ],
    "requiredTexts": [
      "2"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "A2"
    ],
    "allowedFunctions": [
      "POWER"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2.",
      "Ada kriteria/parameter yang harus masuk, misalnya 2.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "POWER sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "POWER adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2.",
      "Kriteria/parameter penting: 2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "sqrt": {
    "id": "sqrt",
    "formulaName": "SQRT",
    "title": "Latihan SQRT",
    "tableKey": "forecast",
    "activeCell": "B2",
    "question": "Cari akar kuadrat dari Sales B2.",
    "logicPrompt": "Pastikan angka utama dan parameter tambahannya sesuai dengan tujuan hitungnya.",
    "expectedFormula": "=SQRT(B2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": null
    },
    "highlightRanges": [
      "B2"
    ],
    "allowedFunctions": [
      "SQRT"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "SQRT sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "SQRT adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "rand": {
    "id": "rand",
    "formulaName": "RAND",
    "title": "Latihan RAND",
    "tableKey": "forecast",
    "activeCell": "B2",
    "question": "Buat angka acak antara 0 dan 1.",
    "logicPrompt": "Pastikan angka utama dan parameter tambahannya sesuai dengan tujuan hitungnya.",
    "expectedFormula": "=RAND()",
    "acceptedFormulas": [],
    "requiredRefs": [],
    "requiredTexts": [],
    "argumentCount": {
      "min": 0,
      "max": null
    },
    "highlightRanges": [],
    "allowedFunctions": [
      "RAND"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Cari kolom atau range yang jadi bahan utama.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "RAND sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "RAND adalah fungsi utama yang dipakai sesuai soal.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "randbetween": {
    "id": "randbetween",
    "formulaName": "RANDBETWEEN",
    "title": "Latihan RANDBETWEEN",
    "tableKey": "forecast",
    "activeCell": "B2",
    "question": "Buat angka acak dari 1 sampai 100.",
    "logicPrompt": "Pastikan angka utama dan parameter tambahannya sesuai dengan tujuan hitungnya.",
    "expectedFormula": "=RANDBETWEEN(1,100)",
    "acceptedFormulas": [],
    "requiredRefs": [],
    "requiredTexts": [
      "1",
      "100"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [],
    "allowedFunctions": [
      "RANDBETWEEN"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Cari kolom atau range yang jadi bahan utama.",
      "Ada kriteria/parameter yang harus masuk, misalnya 1, 100.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "RANDBETWEEN sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "RANDBETWEEN adalah fungsi utama yang dipakai sesuai soal.",
      "Kriteria/parameter penting: 1, 100.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "subtotal": {
    "id": "subtotal",
    "formulaName": "SUBTOTAL",
    "title": "Latihan SUBTOTAL",
    "tableKey": "forecast",
    "activeCell": "B2",
    "question": "Hitung subtotal SUM untuk kolom Sales.",
    "logicPrompt": "Pastikan angka utama dan parameter tambahannya sesuai dengan tujuan hitungnya.",
    "expectedFormula": "=SUBTOTAL(9,B2:B6)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2:B6"
    ],
    "requiredTexts": [
      "9"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "B2:B6"
    ],
    "allowedFunctions": [
      "SUBTOTAL"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2:B6.",
      "Ada kriteria/parameter yang harus masuk, misalnya 9.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "SUBTOTAL sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "SUBTOTAL adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2:B6.",
      "Kriteria/parameter penting: 9.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "aggregate": {
    "id": "aggregate",
    "formulaName": "AGGREGATE",
    "title": "Latihan AGGREGATE",
    "tableKey": "forecast",
    "activeCell": "B2",
    "question": "Hitung aggregate SUM sambil abaikan error.",
    "logicPrompt": "Pastikan angka utama dan parameter tambahannya sesuai dengan tujuan hitungnya.",
    "expectedFormula": "=AGGREGATE(9,6,B2:B6)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2:B6"
    ],
    "requiredTexts": [
      "9",
      "6"
    ],
    "argumentCount": {
      "min": 3,
      "max": null
    },
    "highlightRanges": [
      "B2:B6"
    ],
    "allowedFunctions": [
      "AGGREGATE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2:B6.",
      "Ada kriteria/parameter yang harus masuk, misalnya 9, 6.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "AGGREGATE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "AGGREGATE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2:B6.",
      "Kriteria/parameter penting: 9, 6.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "sumproduct": {
    "id": "sumproduct",
    "formulaName": "SUMPRODUCT",
    "title": "Latihan SUMPRODUCT",
    "tableKey": "sales",
    "activeCell": "B2",
    "question": "Kalikan Qty dan Total Penjualan per baris, lalu jumlahkan.",
    "logicPrompt": "Pastikan angka utama dan parameter tambahannya sesuai dengan tujuan hitungnya.",
    "expectedFormula": "=SUMPRODUCT(D2:D16,E2:E16)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16",
      "E2:E16"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "D2:D16",
      "E2:E16"
    ],
    "allowedFunctions": [
      "SUMPRODUCT"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16, E2:E16.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "SUMPRODUCT sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "SUMPRODUCT adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16, E2:E16.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "let": {
    "id": "let",
    "formulaName": "LET",
    "title": "Latihan LET",
    "tableKey": "dynamic",
    "activeCell": "B2",
    "question": "Simpan hasil SUM Sales ke nama total, lalu tampilkan total.",
    "logicPrompt": "Rumus modern ini lebih mirip membuat alur kecil di dalam cell. Pahami nama variabel dan urutan prosesnya.",
    "expectedFormula": "=LET(total,SUM(D2:D16),total)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16"
    ],
    "requiredTexts": [
      "total"
    ],
    "argumentCount": {
      "min": 3,
      "max": null
    },
    "highlightRanges": [
      "D2:D16"
    ],
    "allowedFunctions": [
      "LET",
      "LAMBDA",
      "SUM"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16.",
      "Ada kriteria/parameter yang harus masuk, misalnya total.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "LET sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "LET adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16.",
      "Kriteria/parameter penting: total.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "lambda": {
    "id": "lambda",
    "formulaName": "LAMBDA",
    "title": "Latihan LAMBDA",
    "tableKey": "dynamic",
    "activeCell": "B2",
    "question": "Buat LAMBDA sederhana untuk mengalikan nilai D2 dengan 10.",
    "logicPrompt": "Rumus modern ini lebih mirip membuat alur kecil di dalam cell. Pahami nama variabel dan urutan prosesnya.",
    "expectedFormula": "=LAMBDA(x,x*10)(D2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2"
    ],
    "requiredTexts": [
      "x",
      "10"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "D2"
    ],
    "allowedFunctions": [
      "LAMBDA",
      "LAMBDA",
      "SUM"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2.",
      "Ada kriteria/parameter yang harus masuk, misalnya x, 10.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "LAMBDA sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "LAMBDA adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2.",
      "Kriteria/parameter penting: x, 10.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "map": {
    "id": "map",
    "formulaName": "MAP",
    "title": "Latihan MAP",
    "tableKey": "dynamic",
    "activeCell": "B2",
    "question": "Kalikan setiap nilai Sales dengan 2 memakai MAP dan LAMBDA.",
    "logicPrompt": "Rumus modern ini lebih mirip membuat alur kecil di dalam cell. Pahami nama variabel dan urutan prosesnya.",
    "expectedFormula": "=MAP(D2:D16,LAMBDA(x,x*2))",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16"
    ],
    "requiredTexts": [
      "LAMBDA",
      "x",
      "2"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "D2:D16"
    ],
    "allowedFunctions": [
      "MAP",
      "LAMBDA",
      "SUM"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16.",
      "Ada kriteria/parameter yang harus masuk, misalnya LAMBDA, x, 2.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "MAP sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "MAP adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16.",
      "Kriteria/parameter penting: LAMBDA, x, 2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "reduce": {
    "id": "reduce",
    "formulaName": "REDUCE",
    "title": "Latihan REDUCE",
    "tableKey": "dynamic",
    "activeCell": "B2",
    "question": "Jumlahkan Sales dengan REDUCE mulai dari 0.",
    "logicPrompt": "Rumus modern ini lebih mirip membuat alur kecil di dalam cell. Pahami nama variabel dan urutan prosesnya.",
    "expectedFormula": "=REDUCE(0,D2:D16,LAMBDA(a,b,a+b))",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16"
    ],
    "requiredTexts": [
      "0",
      "LAMBDA",
      "a",
      "b"
    ],
    "argumentCount": {
      "min": 3,
      "max": null
    },
    "highlightRanges": [
      "D2:D16"
    ],
    "allowedFunctions": [
      "REDUCE",
      "LAMBDA",
      "SUM"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16.",
      "Ada kriteria/parameter yang harus masuk, misalnya 0, LAMBDA, a.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "REDUCE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "REDUCE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16.",
      "Kriteria/parameter penting: 0, LAMBDA, a, b.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "scan": {
    "id": "scan",
    "formulaName": "SCAN",
    "title": "Latihan SCAN",
    "tableKey": "dynamic",
    "activeCell": "B2",
    "question": "Buat running total Sales dengan SCAN.",
    "logicPrompt": "Rumus modern ini lebih mirip membuat alur kecil di dalam cell. Pahami nama variabel dan urutan prosesnya.",
    "expectedFormula": "=SCAN(0,D2:D16,LAMBDA(a,b,a+b))",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16"
    ],
    "requiredTexts": [
      "0",
      "LAMBDA",
      "a",
      "b"
    ],
    "argumentCount": {
      "min": 3,
      "max": null
    },
    "highlightRanges": [
      "D2:D16"
    ],
    "allowedFunctions": [
      "SCAN",
      "LAMBDA",
      "SUM"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16.",
      "Ada kriteria/parameter yang harus masuk, misalnya 0, LAMBDA, a.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "SCAN sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "SCAN adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16.",
      "Kriteria/parameter penting: 0, LAMBDA, a, b.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "byrow": {
    "id": "byrow",
    "formulaName": "BYROW",
    "title": "Latihan BYROW",
    "tableKey": "dynamic",
    "activeCell": "B2",
    "question": "Proses tiap baris Sales dan kalikan 2.",
    "logicPrompt": "Rumus modern ini lebih mirip membuat alur kecil di dalam cell. Pahami nama variabel dan urutan prosesnya.",
    "expectedFormula": "=BYROW(D2:D16,LAMBDA(row,row*2))",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:D16"
    ],
    "requiredTexts": [
      "LAMBDA",
      "row",
      "2"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "D2:D16"
    ],
    "allowedFunctions": [
      "BYROW",
      "LAMBDA",
      "SUM"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:D16.",
      "Ada kriteria/parameter yang harus masuk, misalnya LAMBDA, row, 2.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "BYROW sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "BYROW adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:D16.",
      "Kriteria/parameter penting: LAMBDA, row, 2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "bycol": {
    "id": "bycol",
    "formulaName": "BYCOL",
    "title": "Latihan BYCOL",
    "tableKey": "dynamic",
    "activeCell": "B2",
    "question": "Jumlahkan setiap kolom di range Sales dan Bulan/angka memakai BYCOL.",
    "logicPrompt": "Rumus modern ini lebih mirip membuat alur kecil di dalam cell. Pahami nama variabel dan urutan prosesnya.",
    "expectedFormula": "=BYCOL(D2:E16,LAMBDA(col,SUM(col)))",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2:E16"
    ],
    "requiredTexts": [
      "LAMBDA",
      "col",
      "SUM"
    ],
    "argumentCount": {
      "min": 2,
      "max": null
    },
    "highlightRanges": [
      "D2:E16"
    ],
    "allowedFunctions": [
      "BYCOL",
      "LAMBDA",
      "SUM"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2:E16.",
      "Ada kriteria/parameter yang harus masuk, misalnya LAMBDA, col, SUM.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "BYCOL sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "BYCOL adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2:E16.",
      "Kriteria/parameter penting: LAMBDA, col, SUM.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "makearray": {
    "id": "makearray",
    "formulaName": "MAKEARRAY",
    "title": "Latihan MAKEARRAY",
    "tableKey": "dynamic",
    "activeCell": "B2",
    "question": "Buat array 3x3 berisi hasil perkalian nomor baris dan kolom.",
    "logicPrompt": "Rumus modern ini lebih mirip membuat alur kecil di dalam cell. Pahami nama variabel dan urutan prosesnya.",
    "expectedFormula": "=MAKEARRAY(3,3,LAMBDA(r,c,r*c))",
    "acceptedFormulas": [],
    "requiredRefs": [],
    "requiredTexts": [
      "3",
      "LAMBDA",
      "r",
      "c"
    ],
    "argumentCount": {
      "min": 3,
      "max": null
    },
    "highlightRanges": [],
    "allowedFunctions": [
      "MAKEARRAY",
      "LAMBDA",
      "SUM"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Cari kolom atau range yang jadi bahan utama.",
      "Ada kriteria/parameter yang harus masuk, misalnya 3, LAMBDA, r.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "MAKEARRAY sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "MAKEARRAY adalah fungsi utama yang dipakai sesuai soal.",
      "Kriteria/parameter penting: 3, LAMBDA, r, c.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "isblank": {
    "id": "isblank",
    "formulaName": "ISBLANK",
    "title": "Latihan ISBLANK",
    "tableKey": "info",
    "activeCell": "B2",
    "question": "Cek apakah cell C2 kosong.",
    "logicPrompt": "Rumus information dipakai untuk mengecek isi cell, bukan menghitung data utama.",
    "expectedFormula": "=ISBLANK(C2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "C2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": 1
    },
    "highlightRanges": [
      "C2"
    ],
    "allowedFunctions": [
      "ISBLANK"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: C2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "ISBLANK sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "ISBLANK adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: C2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "isnumber": {
    "id": "isnumber",
    "formulaName": "ISNUMBER",
    "title": "Latihan ISNUMBER",
    "tableKey": "info",
    "activeCell": "B2",
    "question": "Cek apakah A2 berisi angka.",
    "logicPrompt": "Rumus information dipakai untuk mengecek isi cell, bukan menghitung data utama.",
    "expectedFormula": "=ISNUMBER(A2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": 1
    },
    "highlightRanges": [
      "A2"
    ],
    "allowedFunctions": [
      "ISNUMBER"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "ISNUMBER sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "ISNUMBER adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "istext": {
    "id": "istext",
    "formulaName": "ISTEXT",
    "title": "Latihan ISTEXT",
    "tableKey": "info",
    "activeCell": "B2",
    "question": "Cek apakah B2 berisi teks.",
    "logicPrompt": "Rumus information dipakai untuk mengecek isi cell, bukan menghitung data utama.",
    "expectedFormula": "=ISTEXT(B2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": 1
    },
    "highlightRanges": [
      "B2"
    ],
    "allowedFunctions": [
      "ISTEXT"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "ISTEXT sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "ISTEXT adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "iserror": {
    "id": "iserror",
    "formulaName": "ISERROR",
    "title": "Latihan ISERROR",
    "tableKey": "info",
    "activeCell": "B2",
    "question": "Cek apakah D2 berisi error.",
    "logicPrompt": "Rumus information dipakai untuk mengecek isi cell, bukan menghitung data utama.",
    "expectedFormula": "=ISERROR(D2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": 1
    },
    "highlightRanges": [
      "D2"
    ],
    "allowedFunctions": [
      "ISERROR"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "ISERROR sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "ISERROR adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "isna": {
    "id": "isna",
    "formulaName": "ISNA",
    "title": "Latihan ISNA",
    "tableKey": "info",
    "activeCell": "B2",
    "question": "Cek apakah D2 adalah error #N/A.",
    "logicPrompt": "Rumus information dipakai untuk mengecek isi cell, bukan menghitung data utama.",
    "expectedFormula": "=ISNA(D2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "D2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": 1
    },
    "highlightRanges": [
      "D2"
    ],
    "allowedFunctions": [
      "ISNA"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: D2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "ISNA sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "ISNA adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: D2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "isformula": {
    "id": "isformula",
    "formulaName": "ISFORMULA",
    "title": "Latihan ISFORMULA",
    "tableKey": "info",
    "activeCell": "B2",
    "question": "Cek apakah E2 berisi formula.",
    "logicPrompt": "Rumus information dipakai untuk mengecek isi cell, bukan menghitung data utama.",
    "expectedFormula": "=ISFORMULA(E2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "E2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": 1
    },
    "highlightRanges": [
      "E2"
    ],
    "allowedFunctions": [
      "ISFORMULA"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: E2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "ISFORMULA sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "ISFORMULA adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: E2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "type": {
    "id": "type",
    "formulaName": "TYPE",
    "title": "Latihan TYPE",
    "tableKey": "info",
    "activeCell": "B2",
    "question": "Cek tipe data dari A2.",
    "logicPrompt": "Rumus information dipakai untuk mengecek isi cell, bukan menghitung data utama.",
    "expectedFormula": "=TYPE(A2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": 1
    },
    "highlightRanges": [
      "A2"
    ],
    "allowedFunctions": [
      "TYPE"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "TYPE sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "TYPE adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "n": {
    "id": "n",
    "formulaName": "N",
    "title": "Latihan N",
    "tableKey": "info",
    "activeCell": "B2",
    "question": "Ubah nilai A2 menjadi angka jika memungkinkan.",
    "logicPrompt": "Rumus information dipakai untuk mengecek isi cell, bukan menghitung data utama.",
    "expectedFormula": "=N(A2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 1,
      "max": 1
    },
    "highlightRanges": [
      "A2"
    ],
    "allowedFunctions": [
      "N"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "N sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "N adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "cell": {
    "id": "cell",
    "formulaName": "CELL",
    "title": "Latihan CELL",
    "tableKey": "info",
    "activeCell": "B2",
    "question": "Tampilkan alamat dari cell A2.",
    "logicPrompt": "Rumus information dipakai untuk mengecek isi cell, bukan menghitung data utama.",
    "expectedFormula": "=CELL(\"address\",A2)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A2"
    ],
    "requiredTexts": [
      "address"
    ],
    "argumentCount": {
      "min": 2,
      "max": 2
    },
    "highlightRanges": [
      "A2"
    ],
    "allowedFunctions": [
      "CELL"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A2.",
      "Ada kriteria/parameter yang harus masuk, misalnya address.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "CELL sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "CELL adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A2.",
      "Kriteria/parameter penting: address.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "forecast": {
    "id": "forecast",
    "formulaName": "FORECAST",
    "title": "Latihan FORECAST",
    "tableKey": "forecast",
    "activeCell": "B2",
    "question": "Prediksi Sales untuk bulan ke-6 berdasarkan data bulan sebelumnya.",
    "logicPrompt": "Butuh data x dan y yang sejajar. Jangan kebalik antara nilai yang diprediksi dan data pembanding.",
    "expectedFormula": "=FORECAST(A7,B2:B6,A2:A6)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "A7",
      "B2:B6",
      "A2:A6"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 3,
      "max": 3
    },
    "highlightRanges": [
      "A7",
      "B2:B6",
      "A2:A6"
    ],
    "allowedFunctions": [
      "FORECAST"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: A7, B2:B6, A2:A6.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "FORECAST sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "FORECAST adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: A7, B2:B6, A2:A6.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  },
  "trend": {
    "id": "trend",
    "formulaName": "TREND",
    "title": "Latihan TREND",
    "tableKey": "forecast",
    "activeCell": "B2",
    "question": "Buat prediksi tren untuk bulan ke-6.",
    "logicPrompt": "Butuh data x dan y yang sejajar. Jangan kebalik antara nilai yang diprediksi dan data pembanding.",
    "expectedFormula": "=TREND(B2:B6,A2:A6,A7)",
    "acceptedFormulas": [],
    "requiredRefs": [
      "B2:B6",
      "A2:A6",
      "A7"
    ],
    "requiredTexts": [],
    "argumentCount": {
      "min": 3,
      "max": 3
    },
    "highlightRanges": [
      "B2:B6",
      "A2:A6",
      "A7"
    ],
    "allowedFunctions": [
      "TREND"
    ],
    "hints": [
      "Tentukan dulu hasil akhir yang diminta soal.",
      "Range yang perlu kamu perhatikan: B2:B6, A2:A6, A7.",
      "Cocokkan urutan argumen dengan format rumusnya.",
      "Cek separator sesuai mode Excel yang kamu pilih."
    ],
    "successExplanation": "TREND sudah dipakai sesuai konteks soal. Range, kriteria, dan struktur argumennya sudah nyambung.",
    "formulaParts": [
      "TREND adalah fungsi utama yang dipakai sesuai soal.",
      "Range/cell penting: B2:B6, A2:A6, A7.",
      "Urutan argumen harus mengikuti format, jangan cuma hafal bentuk rumusnya."
    ],
    "commonMistakes": [
      "Lupa tanda = di awal rumus.",
      "Range yang dipilih meleset satu kolom atau satu baris.",
      "Separator tidak sesuai mode Excel Indonesia atau English.",
      "Kurung buka dan tutup tidak seimbang."
    ],
    "nextUseCase": "Coba ulang konsep yang sama ke data lain, misalnya data penjualan, stok, atau nilai siswa."
  }
};

const extractMainRefs = (exercise = {}) => {
  const refs = [...(exercise.requiredRefs || []), ...(exercise.highlightRanges || [])]
    .filter(Boolean)
    .filter((item, index, array) => array.indexOf(item) === index);
  return refs;
};

const formulaFriendlyNames = {
  SUM: 'menjumlahkan angka',
  SUMIF: 'menjumlahkan angka dengan 1 syarat',
  SUMIFS: 'menjumlahkan angka dengan beberapa syarat',
  COUNT: 'menghitung cell berisi angka',
  COUNTA: 'menghitung cell yang terisi',
  COUNTBLANK: 'menghitung cell kosong',
  COUNTIF: 'menghitung data dengan 1 syarat',
  COUNTIFS: 'menghitung data dengan beberapa syarat',
  AVERAGE: 'menghitung rata-rata',
  AVERAGEIF: 'menghitung rata-rata dengan 1 syarat',
  AVERAGEIFS: 'menghitung rata-rata dengan beberapa syarat',
  IF: 'membuat hasil berdasarkan kondisi',
  IFS: 'mengecek beberapa kondisi berurutan',
  VLOOKUP: 'mencari data secara vertikal',
  HLOOKUP: 'mencari data secara horizontal',
  XLOOKUP: 'mencari data dan mengambil hasil sejajar',
  INDEX: 'mengambil data berdasarkan posisi',
  MATCH: 'mencari posisi data',
  XMATCH: 'mencari posisi data versi modern',
  FILTER: 'menyaring tabel berdasarkan syarat',
  UNIQUE: 'mengambil data unik',
  SORT: 'mengurutkan data',
  TEXT: 'mengubah tampilan angka menjadi teks berformat'
};

const buildBetterHints = (exercise = {}) => {
  const refs = extractMainRefs(exercise);
  const texts = exercise.requiredTexts || [];
  const name = exercise.formulaName;
  const hints = [
    `Baca dulu soalnya. Hasil akhirnya adalah: ${exercise.question}`,
    `Pilih rumus ${name} karena tugasnya untuk ${formulaFriendlyNames[name] || 'mengolah data sesuai soal'}.`
  ];

  if (refs.length) hints.push(`Cari data yang dipakai di tabel. Range/cell pentingnya: ${refs.join(', ')}.`);
  if (texts.length) hints.push(`Value/kriteria yang harus masuk: ${texts.join(', ')}.`);

  hints.push('Isi argumen satu per satu dari kiri ke kanan. Jangan loncat dulu ke jawaban final.');
  hints.push('Cek lagi separatornya: mode Indonesia pakai titik koma (;), mode English pakai koma (,).');
  return hints;
};

const buildFormulaParts = (exercise = {}) => {
  const refs = extractMainRefs(exercise);
  const texts = exercise.requiredTexts || [];
  const parts = [
    `${exercise.formulaName} adalah rumus utama yang dipakai untuk soal ini.`,
    refs.length ? `Range/cell yang dipakai: ${refs.join(', ')}.` : 'Rumus ini fokus ke struktur argumen yang benar.',
  ];
  if (texts.length) parts.push(`Value/kriteria dari soal: ${texts.join(', ')}.`);
  parts.push('Kalau hasilnya sudah sama dengan target, artinya alur rumusnya sudah benar.');
  return parts;
};

const buildCommonMistakes = (exercise = {}) => {
  const refs = extractMainRefs(exercise);
  const texts = exercise.requiredTexts || [];
  return [
    'Lupa tanda = di awal rumus.',
    refs.length ? `Range/cell meleset. Cek lagi ${refs.join(', ')}.` : 'Argumen belum mengikuti format rumus.',
    texts.length ? `Value/kriteria belum lengkap. Cek lagi ${texts.join(', ')}.` : 'Urutan argumen belum tepat.',
    'Separator tidak sesuai mode Excel Indonesia atau English.',
    'Kurung buka dan kurung tutup belum seimbang.'
  ];
};

const exercisePatches = {
  let: {
    question: 'Buat nama sementara total untuk SUM(D2:D16), lalu tampilkan totalnya.',
    expectedFormula: '=LET(total,SUM(D2:D16),total)',
    requiredRefs: ['D2:D16'],
    requiredTexts: ['total'],
    highlightRanges: ['D2:D16'],
    successExplanation: 'Nah, ini tepat. LET menyimpan SUM(D2:D16) ke nama total, lalu menampilkan total itu lagi.'
  },
  vlookup: {
    question: 'Ambil Master Nama untuk Kode Produk di A2 dari master produk.',
    expectedFormula: '=VLOOKUP(A2,E2:I8,2,0)',
    requiredRefs: ['A2', 'E2:I8'],
    requiredTexts: ['2', '0']
  },
  hlookup: {
    question: 'Ambil harga produk P-003 dari tabel master horizontal.',
    requiredTexts: ['P-003']
  },
  sumifs: {
    question: 'Jumlahkan Total Penjualan untuk kategori Digital di kota Jakarta.',
    requiredTexts: ['Digital', 'Jakarta']
  },
  countifs: {
    requiredTexts: ['Perempuan', 'X-A']
  },
  averageifs: {
    requiredTexts: ['Perempuan', 'X-A']
  }
};

const normalizeExercise = (exercise = {}) => {
  const patch = exercisePatches[exercise.id] || {};
  const merged = { ...exercise, ...patch };
  const refs = extractMainRefs(merged);
  const texts = merged.requiredTexts || [];
  const action = formulaFriendlyNames[merged.formulaName] || 'menjawab soal ini';

  return {
    ...merged,
    title: merged.title || `Latihan ${merged.formulaName}`,
    logicPrompt: merged.logicPrompt && !/Coba pikir dulu input apa yang diminta/i.test(merged.logicPrompt)
      ? merged.logicPrompt
      : `Rumus ${merged.formulaName} dipakai untuk ${action}. Tentukan data yang dipakai, lalu isi argumennya sesuai arah soal.`,
    hints: buildBetterHints(merged),
    successExplanation: merged.successExplanation && !/sudah dipakai sesuai konteks soal/i.test(merged.successExplanation)
      ? merged.successExplanation
      : `Nah, ini baru tepat. ${merged.formulaName} sudah mengambil data yang sesuai dengan soal, jadi hasilnya nyambung dengan tabel latihan.`,
    formulaParts: buildFormulaParts(merged),
    commonMistakes: buildCommonMistakes(merged),
    nextUseCase: merged.nextUseCase && !/Coba ulang konsep yang sama/i.test(merged.nextUseCase)
      ? merged.nextUseCase
      : `Pakai pola yang sama saat kamu butuh ${action} di data lain.`,
    audit: {
      refsChecked: refs,
      criteriaChecked: texts,
      expectedFormulaChecked: Boolean(merged.expectedFormula),
      note: 'Dinormalisasi oleh audit Formula Coach agar soal, hint, range, dan expected formula lebih konsisten.'
    }
  };
};

export const curatedExercises = Object.fromEntries(
  Object.entries(rawCuratedExercises).map(([key, exercise]) => [key, normalizeExercise(exercise)])
);

export const getCuratedExercise = (formulaId) => curatedExercises[formulaId] || null;
