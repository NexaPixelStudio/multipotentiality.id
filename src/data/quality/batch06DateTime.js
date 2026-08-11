// Batch 06: Date & Time
// Fokus: membaca bagian tanggal, menghitung selisih, dan menggeser tanggal.
// Soal dan logicPrompt tidak menyebut nama rumus, supaya pelajar menyimpulkan sendiri.

export const batchDateEmployeeTable = {
  title: 'Data Karyawan dan Proyek',
  description: 'Data tanggal bergabung karyawan dan deadline proyek yang sedang dikerjakan.',
  columns: ['Nama', 'Tanggal Bergabung', 'Deadline Proyek', 'Hasil'],
  rows: [
    ['Rina Wijaya', '2022-03-15', '2026-06-30', ''],
    ['Fajar Nugroho', '2021-11-02', '2026-08-15', ''],
    ['Lina Marlina', '2023-07-20', '2026-05-10', ''],
    ['Hendra Saputra', '2020-01-10', '2026-12-01', ''],
    ['Wulan Sari', '2024-09-05', '2026-07-22', ''],
    ['Bayu Kurniawan', '2019-06-25', '2026-09-18', '']
  ]
};

const idSeparator = (formula = '') => formula.replace(/,/g, ';');
const datedifUnits = [['D', 'hari'], ['M', 'bulan'], ['Y', 'tahun'], ['D', 'hari'], ['M', 'bulan'], ['Y', 'tahun']];
const edateShifts = [3, 6, 12, 1, 9, 4];
const eomonthShifts = [0, 1, 2, 0, 3, 1];

const plans = {
  year: {
    name: 'YEAR',
    argumentCount: { min: 1, max: 1 },
    buildFormula: (row) => `=YEAR(B${row})`,
    buildQuestion: (row) => `Di cell D${row}, ambil tahun dari tanggal bergabung pada baris ini.`,
    buildLogic: (row) => `Yang diambil hanya bagian tahun dari tanggal lengkap di B${row}, bulan dan tanggal hariannya diabaikan.`,
    hints: (row) => [`Tanggalnya ada di B${row}.`, 'Yang diambil cuma bagian tahunnya saja.', 'Bulan dan tanggal harian tidak ikut diambil.', `Tulis hasilnya di D${row}.`],
    parts: (row) => ['Bagian ini mengambil komponen tahun dari sebuah tanggal.', `B${row} adalah tanggal sumbernya.`, 'Hasilnya angka tahun, misalnya 2022.'],
    mistakes: ['Mengira hasilnya berupa tanggal lengkap, padahal cuma angka tahun.', 'Memilih kolom deadline, bukan tanggal bergabung.', 'Menulis tahun secara manual, bukan mengambil dari cell.']
  },
  month: {
    name: 'MONTH',
    argumentCount: { min: 1, max: 1 },
    buildFormula: (row) => `=MONTH(B${row})`,
    buildQuestion: (row) => `Di cell D${row}, ambil angka bulan dari tanggal bergabung pada baris ini.`,
    buildLogic: (row) => `Yang diambil hanya bagian bulan (angka 1 sampai 12) dari tanggal lengkap di B${row}.`,
    hints: (row) => [`Tanggalnya ada di B${row}.`, 'Yang diambil cuma bagian bulannya, berupa angka 1-12.', 'Tahun dan tanggal harian tidak ikut diambil.', `Tulis hasilnya di D${row}.`],
    parts: (row) => ['Bagian ini mengambil komponen bulan dari sebuah tanggal.', `B${row} adalah tanggal sumbernya.`, 'Hasilnya angka 1 sampai 12.'],
    mistakes: ['Mengira hasilnya nama bulan, padahal berupa angka.', 'Memilih kolom deadline, bukan tanggal bergabung.', 'Tertukar dengan mengambil bagian tanggal harian.']
  },
  day: {
    name: 'DAY',
    argumentCount: { min: 1, max: 1 },
    buildFormula: (row) => `=DAY(B${row})`,
    buildQuestion: (row) => `Di cell D${row}, ambil angka tanggal harian dari tanggal bergabung pada baris ini.`,
    buildLogic: (row) => `Yang diambil hanya bagian tanggal harian (angka 1 sampai 31) dari tanggal lengkap di B${row}.`,
    hints: (row) => [`Tanggalnya ada di B${row}.`, 'Yang diambil cuma angka tanggal hariannya.', 'Bulan dan tahun tidak ikut diambil.', `Tulis hasilnya di D${row}.`],
    parts: (row) => ['Bagian ini mengambil komponen tanggal harian dari sebuah tanggal.', `B${row} adalah tanggal sumbernya.`, 'Hasilnya angka 1 sampai 31.'],
    mistakes: ['Tertukar dengan mengambil bagian bulan.', 'Memilih kolom deadline, bukan tanggal bergabung.', 'Menulis angka manual, bukan mengambil dari cell.']
  },
  weekday: {
    name: 'WEEKDAY',
    argumentCount: { min: 1, max: 2 },
    buildFormula: (row) => `=WEEKDAY(C${row})`,
    buildQuestion: (row) => `Di cell D${row}, cari deadline proyek pada baris ini jatuh di hari keberapa dalam seminggu (1 = Minggu, 2 = Senin, dan seterusnya sampai 7 = Sabtu).`,
    buildLogic: (row) => `Tanggal di C${row} perlu dicek jatuh di hari apa, lalu hasilnya berupa angka urutan hari dalam seminggu, bukan nama harinya.`,
    hints: (row) => [`Tanggalnya ada di C${row}.`, 'Hasilnya berupa angka 1 sampai 7.', 'Angka 1 mewakili hari Minggu, angka 7 mewakili hari Sabtu.', `Tulis hasilnya di D${row}.`],
    parts: (row) => ['Bagian ini mencari urutan hari dalam seminggu dari sebuah tanggal.', `C${row} adalah tanggal sumbernya.`, 'Hasilnya angka 1 (Minggu) sampai 7 (Sabtu).'],
    mistakes: ['Mengira hasilnya nama hari, padahal berupa angka.', 'Memilih kolom tanggal bergabung, bukan deadline.', 'Salah asumsi angka 1 mewakili hari Senin.']
  },
  datedif: {
    name: 'DATEDIF',
    argumentCount: { min: 3, max: 3 },
    buildFormula: (row, [unit]) => `=DATEDIF(B${row},C${row},"${unit}")`,
    buildQuestion: (row, [unit, unitWord]) => `Di cell D${row}, hitung selisih dari tanggal bergabung sampai deadline proyek pada baris ini, dalam satuan ${unitWord}.`,
    buildLogic: (row, [unit, unitWord]) => `Selisih dihitung dari tanggal awal di B${row} sampai tanggal akhir di C${row}, hasilnya dibulatkan dalam satuan ${unitWord} penuh, bukan hari desimal.`,
    hints: (row, [unit, unitWord]) => [`Tanggal awal ada di B${row}, tanggal akhir ada di C${row}.`, `Satuan hasil yang diminta adalah ${unitWord}.`, 'Urutan argumen: tanggal awal dulu, baru tanggal akhir, baru satuannya.', `Tulis hasilnya di D${row}.`],
    parts: (row, [unit, unitWord]) => ['Bagian ini menghitung selisih dua tanggal.', `B${row} adalah tanggal awal, C${row} adalah tanggal akhir.`, `"${unit}" adalah kode satuan ${unitWord} yang diminta.`],
    mistakes: ['Menukar posisi tanggal awal dan tanggal akhir.', 'Salah menulis kode satuan hasil.', 'Mengira hasilnya berupa tanggal, padahal berupa angka selisih.']
  },
  edate: {
    name: 'EDATE',
    argumentCount: { min: 2, max: 2 },
    buildFormula: (row, months) => `=EDATE(B${row},${months})`,
    buildQuestion: (row, months) => `Di cell D${row}, cari tanggal yang jatuh ${months} bulan setelah tanggal bergabung pada baris ini.`,
    buildLogic: (row, months) => `Dari tanggal di B${row}, tanggal hasilnya digeser maju sebanyak ${months} bulan, tanggal hariannya mengikuti tanggal asal.`,
    hints: (row, months) => [`Tanggal awalnya ada di B${row}.`, `Jumlah bulan yang digeser: ${months}.`, 'Hasilnya berupa tanggal baru, bukan angka selisih.', `Tulis hasilnya di D${row}.`],
    parts: (row, months) => ['Bagian ini menggeser sebuah tanggal maju atau mundur sejumlah bulan.', `B${row} adalah tanggal awal.`, `${months} adalah jumlah bulan yang digeser maju.`],
    mistakes: ['Mengira hasilnya angka selisih, padahal berupa tanggal baru.', 'Salah menghitung jumlah bulan yang diminta.', 'Memilih kolom deadline sebagai tanggal awal, padahal harus tanggal bergabung.']
  },
  eomonth: {
    name: 'EOMONTH',
    argumentCount: { min: 2, max: 2 },
    buildFormula: (row, months) => `=EOMONTH(B${row},${months})`,
    buildQuestion: (row, months) => `Di cell D${row}, cari tanggal akhir bulan, ${months} bulan setelah bulan tanggal bergabung pada baris ini.`,
    buildLogic: (row, months) => `Dari bulan pada tanggal di B${row}, hitung maju ${months} bulan, lalu ambil tanggal terakhir di bulan hasilnya (misalnya 28, 30, atau 31 tergantung bulannya).`,
    hints: (row, months) => [`Tanggal awalnya ada di B${row}.`, `Jumlah bulan yang digeser maju: ${months}.`, 'Hasilnya selalu tanggal terakhir di bulan tersebut, bukan tanggal yang sama seperti awal.', `Tulis hasilnya di D${row}.`],
    parts: (row, months) => ['Bagian ini mencari tanggal akhir bulan setelah digeser sejumlah bulan.', `B${row} adalah tanggal awal.`, `${months} adalah jumlah bulan yang digeser sebelum diambil tanggal akhirnya.`],
    mistakes: ['Mengira hasilnya tanggal yang sama seperti tanggal awal, padahal selalu tanggal akhir bulan.', 'Salah menghitung jumlah bulan yang digeser.', 'Memilih kolom deadline, bukan tanggal bergabung.']
  },
  networkdays: {
    name: 'NETWORKDAYS',
    argumentCount: { min: 2, max: 3 },
    buildFormula: (row) => `=NETWORKDAYS(B${row},C${row})`,
    buildQuestion: (row) => `Di cell D${row}, hitung berapa hari kerja (Senin sampai Jumat) dari tanggal bergabung sampai deadline proyek pada baris ini.`,
    buildLogic: (row) => `Dihitung jumlah hari dari B${row} sampai C${row}, tapi hari Sabtu dan Minggu tidak ikut dihitung sebagai hari kerja.`,
    hints: (row) => [`Tanggal awal ada di B${row}, tanggal akhir ada di C${row}.`, 'Hari Sabtu dan Minggu tidak dihitung.', 'Tanggal awal dan akhir sama-sama termasuk dalam hitungan kalau jatuh di hari kerja.', `Tulis hasilnya di D${row}.`],
    parts: (row) => ['Bagian ini menghitung jumlah hari kerja di antara dua tanggal.', `B${row} adalah tanggal awal, C${row} adalah tanggal akhir.`, 'Sabtu dan Minggu otomatis tidak ikut dihitung.'],
    mistakes: ['Ikut menghitung hari Sabtu dan Minggu.', 'Menukar posisi tanggal awal dan akhir.', 'Mengira hasilnya berupa tanggal, padahal berupa angka jumlah hari.']
  }
};

function buildExercise(formulaId, plan, rowData, rowIndex) {
  const row = rowIndex + 2;
  const param = formulaId === 'datedif' ? datedifUnits[rowIndex]
    : formulaId === 'edate' ? edateShifts[rowIndex]
    : formulaId === 'eomonth' ? eomonthShifts[rowIndex]
    : undefined;
  const expectedFormula = plan.buildFormula(row, param);
  const question = plan.buildQuestion(row, param);
  const logicPrompt = plan.buildLogic(row, param);
  const refs = ['year', 'month', 'day', 'edate', 'eomonth'].includes(formulaId) ? [`B${row}`]
    : formulaId === 'weekday' ? [`C${row}`]
    : [`B${row}`, `C${row}`];

  return {
    id: `${formulaId}__level_${rowIndex + 1}`,
    baseFormulaId: formulaId,
    formulaName: plan.name,
    title: `Latihan ${rowIndex + 1}: ${plan.name} baris ${row - 1}`,
    levelIndex: rowIndex,
    levelLabel: `Baris ${row - 1}`,
    tableKey: 'batchDateEmployees',
    table: batchDateEmployeeTable,
    activeCell: `D${row}`,
    question,
    logicPrompt,
    expectedFormula,
    acceptedFormulas: [idSeparator(expectedFormula)],
    requiredRefs: refs,
    requiredTexts: [],
    criteriaValue: '',
    argumentCount: plan.argumentCount,
    highlightRanges: refs,
    allowedFunctions: [plan.name],
    hints: plan.hints(row, param),
    successExplanation: `Tepat. Hasilnya sudah sesuai untuk baris ${row - 1}.`,
    formulaParts: plan.parts(row, param),
    commonMistakes: plan.mistakes,
    nextUseCase: 'Pola hitungan tanggal seperti ini sering dipakai untuk masa kerja, umur data, deadline, dan jadwal kerja.',
    audit: { batch: 'batch-06-date-time', tableKey: 'batchDateEmployees', expectedFormula, refs, note: 'Tiap level memakai baris dan/atau parameter berbeda supaya hasilnya bervariasi.' }
  };
}

export const batch06DateTimeExercises = Object.fromEntries(
  Object.entries(plans).map(([formulaId, plan]) => [
    formulaId,
    batchDateEmployeeTable.rows.map((rowData, rowIndex) => buildExercise(formulaId, plan, rowData, rowIndex))
  ])
);

export const batch06DateTimeLevels = Object.fromEntries(
  Object.entries(batch06DateTimeExercises).map(([formulaId, levels]) => [
    formulaId,
    levels.map(({ id, title, levelLabel, question, expectedFormula }) => ({ id, title, levelLabel, question, expectedFormula }))
  ])
);
