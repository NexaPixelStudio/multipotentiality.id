import { normalizeFormulaRecord } from './formulaAuditRules.js';

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
    availability: ['Excel Desktop', 'Excel Web', 'Microsoft 365'],
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
    availability: ['Excel Desktop', 'Excel Web', 'Microsoft 365'],
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
    availability: ['Excel Desktop', 'Excel Web', 'Microsoft 365'],
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
    availability: ['Excel Desktop', 'Excel Web', 'Microsoft 365'],
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
    availability: ['Excel Desktop', 'Excel Web', 'Microsoft 365'],
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
    availability: ['Excel Desktop', 'Excel Web', 'Microsoft 365'],
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
    availability: ['Excel Desktop', 'Excel Web', 'Microsoft 365'],
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
    availability: ['Excel Desktop', 'Excel Web', 'Microsoft 365'],
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
    availability: ['Excel Desktop', 'Excel Web', 'Microsoft 365'],
    tags: ['basic', 'batch-01', 'practice'],
    hasExercise: true
  }
];

export const formulaCatalogFull = batchBasicFormulaRecords.map((record) => normalizeFormulaRecord(record));

export function importFormulaCatalog(records = []) {
  const source = Array.isArray(records) ? records : [];
  return source.map((record) => normalizeFormulaRecord(record)).filter(Boolean);
}
