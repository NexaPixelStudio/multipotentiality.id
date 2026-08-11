// Batch 03: Logical
// Fokus: membuat keputusan dari satu syarat, banyak syarat berurutan, atau gabungan syarat.
// Catatan desain: tiap 6 level memakai AMBANG NILAI, OPERATOR PERBANDINGAN, dan LABEL HASIL
// yang berbeda-beda (bukan cuma ganti nama siswa dengan aturan yang sama persis), supaya
// pelajar benar-benar berlatih membaca syarat, bukan menghafal pola. Soal dan logicPrompt
// sengaja tidak menyebut nama rumus.

export const batchLogicalStudentTable = {
  title: 'Data Nilai Siswa',
  description: 'Data siswa sederhana. Kolom Status dipakai untuk menulis hasil rumus logical.',
  columns: ['Nama', 'Nilai', 'Jenis Kelamin', 'Status'],
  rows: [
    ['Andi', 86, 'Laki-laki', ''],
    ['Sinta', 72, 'Perempuan', ''],
    ['Budi', 91, 'Laki-laki', ''],
    ['Rani', 64, 'Perempuan', ''],
    ['Dimas', 78, 'Laki-laki', ''],
    ['Maya', 88, 'Perempuan', '']
  ]
};

const idSeparator = (formula = '') => formula.replace(/,/g, ';');
const opWord = (op) => (op === '>' ? 'lebih dari' : 'minimal');
const opDesc = (op) => (op === '>' ? 'harus lebih besar dari' : 'boleh sama dengan atau lebih besar dari');

// ---------- IF ----------
const ifVariants = [
  { threshold: 75, op: '>=', trueLabel: 'Lulus', falseLabel: 'Tidak Lulus' },
  { threshold: 80, op: '>=', trueLabel: 'Lulus', falseLabel: 'Tidak Lulus' },
  { threshold: 70, op: '>', trueLabel: 'Layak', falseLabel: 'Tidak Layak' },
  { threshold: 65, op: '>=', trueLabel: 'Naik Kelas', falseLabel: 'Tinggal Kelas' },
  { threshold: 85, op: '>=', trueLabel: 'Istimewa', falseLabel: 'Standar' },
  { threshold: 80, op: '>', trueLabel: 'Lolos Seleksi', falseLabel: 'Belum Lolos' }
];

// ---------- IFS ----------
const ifsVariants = [
  { tiers: [[90, 'A'], [80, 'B'], [75, 'C']], fallback: 'Remedial' },
  { tiers: [[85, 'Istimewa'], [70, 'Baik'], [60, 'Cukup']], fallback: 'Kurang' },
  { tiers: [[90, 'Sangat Baik'], [75, 'Baik'], [60, 'Cukup']], fallback: 'Perlu Bimbingan' },
  { tiers: [[80, 'Tinggi'], [65, 'Sedang']], fallback: 'Rendah' },
  { tiers: [[85, 'A'], [70, 'B']], fallback: 'C' },
  { tiers: [[90, 'Juara 1'], [80, 'Juara 2'], [70, 'Juara 3']], fallback: 'Peserta' }
];

// ---------- IF + AND ----------
const ifAndVariants = [
  { threshold: 75, gender: 'Laki-laki', trueLabel: 'Lulus Putra', falseLabel: 'Tidak Sesuai' },
  { threshold: 80, gender: 'Perempuan', trueLabel: 'Lulus Putri', falseLabel: 'Tidak Sesuai' },
  { threshold: 85, gender: 'Laki-laki', trueLabel: 'Beasiswa Putra', falseLabel: 'Tidak Memenuhi' },
  { threshold: 70, gender: 'Perempuan', trueLabel: 'Lulus Putri', falseLabel: 'Tidak Sesuai' },
  { threshold: 75, gender: 'Laki-laki', trueLabel: 'Lulus Putra', falseLabel: 'Tidak Sesuai' },
  { threshold: 85, gender: 'Perempuan', trueLabel: 'Beasiswa Putri', falseLabel: 'Tidak Memenuhi' }
];

// ---------- IF + OR ----------
const ifOrVariants = [
  { threshold: 75, gender: 'Perempuan', trueLabel: 'Masuk Kriteria', falseLabel: 'Tidak Masuk' },
  { threshold: 85, gender: 'Laki-laki', trueLabel: 'Masuk Kriteria', falseLabel: 'Tidak Masuk' },
  { threshold: 90, gender: 'Perempuan', trueLabel: 'Dapat Apresiasi', falseLabel: 'Belum Dapat' },
  { threshold: 70, gender: 'Laki-laki', trueLabel: 'Masuk Kriteria', falseLabel: 'Tidak Masuk' },
  { threshold: 80, gender: 'Perempuan', trueLabel: 'Masuk Kriteria', falseLabel: 'Tidak Masuk' },
  { threshold: 90, gender: 'Laki-laki', trueLabel: 'Dapat Apresiasi', falseLabel: 'Belum Dapat' }
];

// ---------- IF + NOT ----------
const ifNotVariants = [
  { threshold: 75, trueLabel: 'Remedial', falseLabel: 'Lulus' },
  { threshold: 80, trueLabel: 'Remedial', falseLabel: 'Lulus' },
  { threshold: 70, trueLabel: 'Perlu Perbaikan', falseLabel: 'Sudah Baik' },
  { threshold: 65, trueLabel: 'Perlu Perbaikan', falseLabel: 'Sudah Baik' },
  { threshold: 85, trueLabel: 'Belum Istimewa', falseLabel: 'Istimewa' },
  { threshold: 90, trueLabel: 'Belum Istimewa', falseLabel: 'Istimewa' }
];

const logicalPlans = {
  if: {
    name: 'IF',
    argumentCount: { min: 3, max: 3 },
    variants: ifVariants,
    buildFormula: (row, v) => `=IF(B${row}${v.op}${v.threshold},"${v.trueLabel}","${v.falseLabel}")`,
    buildQuestion: ({ row, student, v }) => `Di cell D${row}, tentukan status ${student}. Kalau nilainya ${opWord(v.op)} ${v.threshold}, tulis "${v.trueLabel}". Kalau tidak, tulis "${v.falseLabel}".`,
    buildLogic: ({ row, v }) => `Ada satu syarat yang dicek pada nilai di B${row}: apakah nilainya ${opDesc(v.op)} ${v.threshold}. Ada dua kemungkinan hasil: satu untuk syarat yang terpenuhi, satu lagi untuk syarat yang tidak terpenuhi.`,
    hints: (row, v) => [`Syaratnya ada di B${row}, dibandingkan dengan angka ${v.threshold}.`, 'Ada dua kemungkinan hasil: satu kalau syarat terpenuhi, satu kalau tidak.', 'Bagian kedua rumus untuk hasil saat syarat benar, bagian ketiga untuk saat syarat salah.', `Tulis hasilnya di D${row}.`],
    parts: (row, v) => ['Bagian ini membuat hasil berdasarkan satu kondisi.', `B${row}${v.op}${v.threshold} adalah kondisi yang dicek.`, `"${v.trueLabel}" adalah hasil jika kondisi benar.`, `"${v.falseLabel}" adalah hasil jika kondisi salah.`],
    mistakes: ['Lupa menulis hasil untuk kondisi yang salah.', 'Menukar posisi hasil benar dan salah.', 'Menulis nilai manual, padahal harus membandingkan dengan cell nilai.']
  },
  ifs: {
    name: 'IFS',
    argumentCount: { min: 6, max: 8 },
    variants: ifsVariants,
    buildFormula: (row, v) => {
      const tierText = v.tiers.map(([threshold, label]) => `B${row}>=${threshold},"${label}"`).join(',');
      return `=IFS(${tierText},TRUE,"${v.fallback}")`;
    },
    buildQuestion: ({ row, student, v }) => {
      const tierText = v.tiers.map(([threshold, label]) => `"${label}" jika minimal ${threshold}`).join(', ');
      return `Di cell D${row}, tentukan tingkatan hasil ${student} berdasarkan nilainya: ${tierText}, dan "${v.fallback}" jika semua syarat itu tidak terpenuhi.`;
    },
    buildLogic: ({ row, v }) => `Ada beberapa syarat yang perlu dicek berurutan dari yang paling tinggi ambang nilainya sampai yang paling rendah, memakai nilai di B${row}. Begitu ketemu syarat pertama yang terpenuhi, hasil untuk syarat itu langsung dipakai dan syarat-syarat sesudahnya tidak perlu dicek lagi. Kalau tidak ada satu pun syarat yang terpenuhi, hasilnya adalah "${v.fallback}".`,
    hints: (row, v) => [`Mulai dari syarat dengan ambang nilai paling tinggi: B${row}>=${v.tiers[0][0]}.`, 'Syarat dan hasilnya ditulis berpasangan, dari ambang tertinggi ke terendah.', 'Kalau semua syarat di atas tidak terpenuhi, siapkan satu pasangan terakhir sebagai hasil default.', `Tulis hasilnya di D${row}.`],
    parts: (row, v) => [
      'Bagian ini mengecek beberapa syarat secara berurutan.',
      ...v.tiers.map(([threshold, label]) => `B${row}>=${threshold} menghasilkan "${label}".`),
      `Kalau tidak ada syarat di atas yang terpenuhi, hasilnya "${v.fallback}".`
    ],
    mistakes: ['Menaruh syarat dengan ambang rendah di awal, sehingga hasil untuk ambang tinggi tidak pernah terbaca.', 'Lupa menuliskan pasangan hasil setelah tiap syarat.', 'Tidak menyiapkan hasil default untuk kondisi yang tidak memenuhi syarat manapun.']
  },
  if_and: {
    name: 'IF AND',
    argumentCount: { min: 3, max: 3 },
    variants: ifAndVariants,
    buildFormula: (row, v) => `=IF(AND(B${row}>=${v.threshold},C${row}="${v.gender}"),"${v.trueLabel}","${v.falseLabel}")`,
    buildQuestion: ({ row, student, v }) => `Di cell D${row}, tentukan status ${student}. Kalau nilainya minimal ${v.threshold} DAN jenis kelaminnya ${v.gender}, tulis "${v.trueLabel}". Kalau salah satu saja tidak terpenuhi, tulis "${v.falseLabel}".`,
    buildLogic: ({ row, v }) => `Ada dua syarat yang harus benar semuanya secara bersamaan: nilai di B${row} minimal ${v.threshold}, dan jenis kelamin di C${row} adalah ${v.gender}. Kalau salah satu saja tidak terpenuhi, hasilnya tetap "${v.falseLabel}".`,
    hints: (row, v) => [`Syarat pertama: B${row}>=${v.threshold}.`, `Syarat kedua: C${row}="${v.gender}".`, 'Kedua syarat itu harus benar bersamaan, tidak boleh cuma salah satu.', `Tulis hasilnya di D${row}.`],
    parts: (row, v) => ['Bagian ini mengecek apakah dua syarat benar semuanya.', `B${row}>=${v.threshold} mengecek nilai.`, `C${row}="${v.gender}" mengecek jenis kelamin.`, `Hasilnya "${v.trueLabel}" hanya kalau keduanya benar, selain itu "${v.falseLabel}".`],
    mistakes: ['Menganggap cukup salah satu syarat yang benar, padahal keduanya wajib benar.', 'Menulis dua syarat itu terpisah tanpa digabung jadi satu pengecekan.', 'Lupa tanda petik untuk teks jenis kelamin.']
  },
  if_or: {
    name: 'IF OR',
    argumentCount: { min: 3, max: 3 },
    variants: ifOrVariants,
    buildFormula: (row, v) => `=IF(OR(B${row}>=${v.threshold},C${row}="${v.gender}"),"${v.trueLabel}","${v.falseLabel}")`,
    buildQuestion: ({ row, student, v }) => `Di cell D${row}, tentukan status ${student}. Kalau nilainya minimal ${v.threshold} ATAU jenis kelaminnya ${v.gender}, tulis "${v.trueLabel}". Kalau dua-duanya tidak terpenuhi, tulis "${v.falseLabel}".`,
    buildLogic: ({ row, v }) => `Ada dua syarat, tapi cukup salah satu saja yang benar: nilai di B${row} minimal ${v.threshold}, atau jenis kelamin di C${row} adalah ${v.gender}. Hasilnya baru "${v.falseLabel}" kalau dua-duanya sama-sama tidak terpenuhi.`,
    hints: (row, v) => [`Syarat pertama: B${row}>=${v.threshold}.`, `Syarat kedua: C${row}="${v.gender}".`, 'Cukup salah satu syarat itu benar, tidak perlu keduanya.', `Tulis hasilnya di D${row}.`],
    parts: (row, v) => ['Bagian ini mengecek apakah minimal satu dari dua syarat benar.', `B${row}>=${v.threshold} mengecek nilai.`, `C${row}="${v.gender}" mengecek jenis kelamin.`, `Hasilnya "${v.trueLabel}" kalau salah satu benar, "${v.falseLabel}" kalau dua-duanya salah.`],
    mistakes: ['Mengira kedua syarat harus benar semua, padahal cukup salah satu.', 'Menulis dua syarat itu terpisah tanpa digabung jadi satu pengecekan.', 'Lupa tanda petik untuk teks jenis kelamin.']
  },
  if_not: {
    name: 'IF NOT',
    argumentCount: { min: 3, max: 3 },
    variants: ifNotVariants,
    buildFormula: (row, v) => `=IF(NOT(B${row}>=${v.threshold}),"${v.trueLabel}","${v.falseLabel}")`,
    buildQuestion: ({ row, student, v }) => `Di cell D${row}, tentukan status ${student}. Kalau nilainya TIDAK memenuhi minimal ${v.threshold}, tulis "${v.trueLabel}". Kalau memenuhi, tulis "${v.falseLabel}".`,
    buildLogic: ({ row, v }) => `Syarat dasarnya adalah nilai di B${row} minimal ${v.threshold}. Yang dicek justru kebalikannya: dipakai saat syarat dasar itu TIDAK terpenuhi. Kalau syarat dasar terpenuhi, hasilnya "${v.falseLabel}".`,
    hints: (row, v) => [`Syarat dasarnya: B${row}>=${v.threshold}.`, 'Yang dicek adalah kebalikan dari syarat dasar itu.', `Kalau kebalikannya benar (syarat dasar tidak terpenuhi), hasilnya "${v.trueLabel}".`, `Tulis hasilnya di D${row}.`],
    parts: (row, v) => ['Bagian ini membalik hasil dari satu syarat.', `B${row}>=${v.threshold} adalah syarat dasarnya.`, `Hasilnya "${v.trueLabel}" kalau syarat dasar itu tidak terpenuhi.`, `Hasilnya "${v.falseLabel}" kalau syarat dasar terpenuhi.`],
    mistakes: ['Menulis kebalikan syarat itu sendirian tanpa dibungkus jadi satu keputusan lengkap.', 'Kebalik menaruh hasil untuk kondisi terpenuhi dan tidak terpenuhi.', 'Mengira ini sama dengan mengecek syarat sebaliknya secara langsung tanpa membalik hasil.']
  }
};

function buildExercise(formulaId, plan, rowData, rowIndex) {
  const row = rowIndex + 2;
  const student = rowData[0];
  const v = plan.variants[rowIndex];
  const expectedFormula = plan.buildFormula(row, v);
  const context = { row, student, v };
  const question = plan.buildQuestion(context);
  const logicPrompt = plan.buildLogic(context);
  const refs = [`B${row}`, `C${row}`];
  const levelLabel = formulaId === 'ifs'
    ? `${v.tiers.map(([t]) => t).join('/')} - ${student}`
    : `${v.threshold} - ${student}`;
  const argumentCount = formulaId === 'ifs'
    ? { min: v.tiers.length * 2 + 2, max: v.tiers.length * 2 + 2 }
    : plan.argumentCount;

  return {
    id: `${formulaId}__level_${rowIndex + 1}`,
    baseFormulaId: formulaId,
    formulaName: plan.name,
    title: `Latihan ${rowIndex + 1}: ${levelLabel}`,
    levelIndex: rowIndex,
    levelLabel,
    tableKey: 'batchLogicalStudents',
    table: batchLogicalStudentTable,
    activeCell: `D${row}`,
    question,
    logicPrompt,
    expectedFormula,
    acceptedFormulas: [idSeparator(expectedFormula)],
    requiredRefs: refs,
    requiredTexts: [],
    criteriaValue: '',
    argumentCount,
    highlightRanges: refs,
    allowedFunctions: plan.name.split(' '),
    hints: plan.hints(row, v),
    successExplanation: `Tepat. Status untuk baris ${student} sudah dihasilkan sesuai syarat yang diminta.`,
    formulaParts: plan.parts(row, v),
    commonMistakes: plan.mistakes,
    nextUseCase: 'Pola pengambilan keputusan seperti ini bisa dipakai untuk status lulus, validasi data, prioritas kerja, atau pengecekan syarat otomatis lainnya.',
    audit: { batch: 'batch-03-logical', tableKey: 'batchLogicalStudents', expectedFormula, refs, note: 'Tiap level memakai ambang nilai, operator, atau label berbeda supaya bukan pengulangan kasus yang sama.' }
  };
}

export const batch03LogicalCalculationExercises = Object.fromEntries(
  Object.entries(logicalPlans).map(([formulaId, plan]) => [
    formulaId,
    batchLogicalStudentTable.rows.map((rowData, rowIndex) => buildExercise(formulaId, plan, rowData, rowIndex))
  ])
);

export const batch03LogicalCalculationLevels = Object.fromEntries(
  Object.entries(batch03LogicalCalculationExercises).map(([formulaId, levels]) => [
    formulaId,
    levels.map(({ id, title, levelLabel, question, expectedFormula }) => ({ id, title, levelLabel, question, expectedFormula }))
  ])
);
