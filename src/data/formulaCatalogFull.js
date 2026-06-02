import { normalizeFormulaRecord } from './formulaAuditRules.js';

const commonAvailability = ['Excel Desktop', 'Excel Web', 'Microsoft 365'];

const batchBasicFormulaRecords = [
  {
    id: 'sum',
    name: 'SUM',
    category: 'Math and Trigonometry',
    displayCategory: 'Basic Calculation',
    level: 'Basic',
    description: 'Menjumlahkan angka dalam satu range.',
    syntax: 'SUM(number1, [number2], ...)',
    simpleLogic: 'Pilih range angka yang mau dijumlahkan. Jangan ketik angkanya satu per satu kalau datanya sudah ada di tabel.',
    useCase: 'Dipakai untuk menghitung total penjualan, total qty, total nilai, atau total angka lain.',
    version: 'Excel 2010+ / Microsoft 365',
    availability: commonAvailability,
    tags: ['basic', 'batch-01', 'practice'],
    hasExercise: true
  },
  {
    id: 'average',
    name: 'AVERAGE',
    category: 'Statistical',
    displayCategory: 'Basic Calculation',
    level: 'Basic',
    description: 'Menghitung rata-rata angka dalam satu range.',
    syntax: 'AVERAGE(number1, [number2], ...)',
    simpleLogic: 'Pilih kumpulan angka, lalu Excel membagi totalnya dengan jumlah angka yang ada.',
    useCase: 'Dipakai untuk mencari rata-rata penjualan, rata-rata nilai, atau performa bulanan.',
    version: 'Excel 2010+ / Microsoft 365',
    availability: commonAvailability,
    tags: ['basic', 'batch-01', 'practice'],
    hasExercise: true
  },
  {
    id: 'min',
    name: 'MIN',
    category: 'Statistical',
    displayCategory: 'Basic Calculation',
    level: 'Basic',
    description: 'Mencari angka paling kecil dalam satu range.',
    syntax: 'MIN(number1, [number2], ...)',
    simpleLogic: 'Pilih range angka, lalu Excel mengambil angka yang nilainya paling rendah.',
    useCase: 'Dipakai untuk mencari penjualan terendah, nilai terkecil, atau stok paling sedikit.',
    version: 'Excel 2010+ / Microsoft 365',
    availability: commonAvailability,
    tags: ['basic', 'batch-01', 'practice'],
    hasExercise: true
  },
  {
    id: 'max',
    name: 'MAX',
    category: 'Statistical',
    displayCategory: 'Basic Calculation',
    level: 'Basic',
    description: 'Mencari angka paling besar dalam satu range.',
    syntax: 'MAX(number1, [number2], ...)',
    simpleLogic: 'Pilih range angka, lalu Excel mengambil angka yang nilainya paling tinggi.',
    useCase: 'Dipakai untuk mencari penjualan tertinggi, nilai terbesar, atau stok paling banyak.',
    version: 'Excel 2010+ / Microsoft 365',
    availability: commonAvailability,
    tags: ['basic', 'batch-01', 'practice'],
    hasExercise: true
  },
  {
    id: 'large',
    name: 'LARGE',
    category: 'Statistical',
    displayCategory: 'Basic Calculation',
    level: 'Basic',
    description: 'Mencari angka terbesar ke-1, ke-2, ke-3, dan seterusnya.',
    syntax: 'LARGE(array, k)',
    simpleLogic: 'Pilih range angka, lalu tentukan urutan terbesar yang dicari.',
    useCase: 'Dipakai saat kamu butuh top 1, top 2, atau top 3 dari sebuah data angka.',
    version: 'Excel 2010+ / Microsoft 365',
    availability: commonAvailability,
    tags: ['basic', 'batch-01', 'practice'],
    hasExercise: true
  },
  {
    id: 'small',
    name: 'SMALL',
    category: 'Statistical',
    displayCategory: 'Basic Calculation',
    level: 'Basic',
    description: 'Mencari angka terkecil ke-1, ke-2, ke-3, dan seterusnya.',
    syntax: 'SMALL(array, k)',
    simpleLogic: 'Pilih range angka, lalu tentukan urutan terkecil yang dicari.',
    useCase: 'Dipakai saat kamu butuh bottom 1, bottom 2, atau angka terendah urutan tertentu.',
    version: 'Excel 2010+ / Microsoft 365',
    availability: commonAvailability,
    tags: ['basic', 'batch-01', 'practice'],
    hasExercise: true
  },
  {
    id: 'count',
    name: 'COUNT',
    category: 'Statistical',
    displayCategory: 'Basic Calculation',
    level: 'Basic',
    description: 'Menghitung berapa cell yang berisi angka.',
    syntax: 'COUNT(value1, [value2], ...)',
    simpleLogic: 'Pilih range, lalu Excel menghitung cell yang isinya angka saja.',
    useCase: 'Dipakai untuk menghitung berapa bulan yang punya angka penjualan atau berapa nilai yang sudah terisi angka.',
    version: 'Excel 2010+ / Microsoft 365',
    availability: commonAvailability,
    tags: ['basic', 'batch-01', 'practice'],
    hasExercise: true
  },
  {
    id: 'counta',
    name: 'COUNTA',
    category: 'Statistical',
    displayCategory: 'Basic Calculation',
    level: 'Basic',
    description: 'Menghitung berapa cell yang terisi, baik angka maupun teks.',
    syntax: 'COUNTA(value1, [value2], ...)',
    simpleLogic: 'Pilih range, lalu Excel menghitung semua cell yang tidak kosong.',
    useCase: 'Dipakai untuk mengecek berapa data yang sudah diisi, termasuk angka, teks, dan catatan.',
    version: 'Excel 2010+ / Microsoft 365',
    availability: commonAvailability,
    tags: ['basic', 'batch-01', 'practice'],
    hasExercise: true
  },
  {
    id: 'countblank',
    name: 'COUNTBLANK',
    category: 'Statistical',
    displayCategory: 'Basic Calculation',
    level: 'Basic',
    description: 'Menghitung berapa cell yang masih kosong.',
    syntax: 'COUNTBLANK(range)',
    simpleLogic: 'Pilih range, lalu Excel menghitung cell yang belum terisi.',
    useCase: 'Dipakai untuk mencari data yang belum lengkap, catatan yang belum diisi, atau kolom yang masih kosong.',
    version: 'Excel 2010+ / Microsoft 365',
    availability: commonAvailability,
    tags: ['basic', 'batch-01', 'practice'],
    hasExercise: true
  }
];

const batchConditionalFormulaRecords = [
  {
    id: 'sumif',
    name: 'SUMIF',
    category: 'Math and Trigonometry',
    displayCategory: 'Conditional Calculation',
    level: 'Basic',
    description: 'Menjumlahkan angka yang memenuhi satu syarat.',
    syntax: 'SUMIF(range, criteria, [sum_range])',
    simpleLogic: 'Tentukan kolom yang dicek syaratnya, tulis syaratnya, lalu tentukan kolom angka yang mau dijumlahkan.',
    useCase: 'Dipakai untuk total penjualan per kategori, kota, toko, channel, atau status.',
    version: 'Excel 2010+ / Microsoft 365',
    availability: commonAvailability,
    tags: ['conditional', 'batch-02', 'practice'],
    hasExercise: true
  },
  {
    id: 'countif',
    name: 'COUNTIF',
    category: 'Statistical',
    displayCategory: 'Conditional Calculation',
    level: 'Basic',
    description: 'Menghitung jumlah data yang memenuhi satu syarat.',
    syntax: 'COUNTIF(range, criteria)',
    simpleLogic: 'Tentukan range yang dicek, lalu tulis syarat yang mau dihitung.',
    useCase: 'Dipakai untuk menghitung jumlah order per kota, kategori, channel, toko, atau status.',
    version: 'Excel 2010+ / Microsoft 365',
    availability: commonAvailability,
    tags: ['conditional', 'batch-02', 'practice'],
    hasExercise: true
  },
  {
    id: 'averageif',
    name: 'AVERAGEIF',
    category: 'Statistical',
    displayCategory: 'Conditional Calculation',
    level: 'Basic',
    description: 'Menghitung rata-rata angka yang memenuhi satu syarat.',
    syntax: 'AVERAGEIF(range, criteria, [average_range])',
    simpleLogic: 'Tentukan kolom yang dicek syaratnya, tulis syaratnya, lalu tentukan kolom angka yang mau dirata-ratakan.',
    useCase: 'Dipakai untuk rata-rata penjualan per kategori, kota, toko, channel, atau status.',
    version: 'Excel 2010+ / Microsoft 365',
    availability: commonAvailability,
    tags: ['conditional', 'batch-02', 'practice'],
    hasExercise: true
  },
  {
    id: 'sumifs',
    name: 'SUMIFS',
    category: 'Math and Trigonometry',
    displayCategory: 'Conditional Calculation',
    level: 'Basic',
    description: 'Menjumlahkan angka yang memenuhi lebih dari satu syarat.',
    syntax: 'SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)',
    simpleLogic: 'Tentukan range angka yang dijumlahkan, lalu tulis pasangan range syarat dan isi syaratnya.',
    useCase: 'Dipakai untuk total penjualan dengan gabungan syarat, misalnya kategori Fashion dari kota Jakarta.',
    version: 'Excel 2010+ / Microsoft 365',
    availability: commonAvailability,
    tags: ['conditional', 'batch-02', 'practice'],
    hasExercise: true
  },
  {
    id: 'countifs',
    name: 'COUNTIFS',
    category: 'Statistical',
    displayCategory: 'Conditional Calculation',
    level: 'Basic',
    description: 'Menghitung jumlah data yang memenuhi lebih dari satu syarat.',
    syntax: 'COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2], ...)',
    simpleLogic: 'Tulis pasangan range syarat dan isi syaratnya. Data dihitung hanya kalau semua syarat terpenuhi.',
    useCase: 'Dipakai untuk jumlah order dengan gabungan syarat, misalnya Shopee yang statusnya Selesai.',
    version: 'Excel 2010+ / Microsoft 365',
    availability: commonAvailability,
    tags: ['conditional', 'batch-02', 'practice'],
    hasExercise: true
  },
  {
    id: 'averageifs',
    name: 'AVERAGEIFS',
    category: 'Statistical',
    displayCategory: 'Conditional Calculation',
    level: 'Basic',
    description: 'Menghitung rata-rata angka yang memenuhi lebih dari satu syarat.',
    syntax: 'AVERAGEIFS(average_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)',
    simpleLogic: 'Tentukan range angka yang dirata-ratakan, lalu tulis pasangan range syarat dan isi syaratnya.',
    useCase: 'Dipakai untuk rata-rata penjualan dengan gabungan syarat, misalnya kota Surabaya melalui Lazada.',
    version: 'Excel 2010+ / Microsoft 365',
    availability: commonAvailability,
    tags: ['conditional', 'batch-02', 'practice'],
    hasExercise: true
  }
];

export const formulaCatalogFull = [
  ...batchBasicFormulaRecords,
  ...batchConditionalFormulaRecords
].map((record) => normalizeFormulaRecord(record));

export function importFormulaCatalog(records = []) {
  const source = Array.isArray(records) ? records : [];
  return source.map((record) => normalizeFormulaRecord(record)).filter(Boolean);
}
