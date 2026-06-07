// Batch 03: Logical
// Fokus: IF, IFS, dan kombinasi IF dengan AND / OR / NOT.

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

const logicalPlans = {
  if: {
    name: 'IF',
    label: 'Status Lulus',
    argumentCount: { min: 3, max: 3 },
    buildFormula: (row) => `=IF(B${row}>=75,"Lulus","Tidak Lulus")`,
    buildQuestion: ({ row, student }) => `Di cell D${row}, buat status ${student}. Jika nilai minimal 75, hasilnya Lulus. Jika kurang dari 75, hasilnya Tidak Lulus.`,
    buildLogic: ({ row }) => `IF dipakai untuk membuat keputusan. Cara bacanya: cek apakah B${row} >= 75. Kalau benar, tulis Lulus. Kalau salah, tulis Tidak Lulus.`,
    hints: (row) => [`Kondisinya ada di B${row}>=75.`, 'Bagian kedua adalah hasil kalau kondisi benar.', 'Bagian ketiga adalah hasil kalau kondisi salah.', `Tulis hasilnya di D${row}.`],
    parts: (row) => ['IF membuat hasil berdasarkan satu kondisi.', `B${row}>=75 adalah kondisi yang dicek.`, '"Lulus" adalah hasil jika kondisi benar.', '"Tidak Lulus" adalah hasil jika kondisi salah.'],
    mistakes: ['Lupa menulis hasil jika salah.', 'Menukar posisi hasil benar dan salah.', 'Menulis nilai manual, padahal harus ambil dari cell nilai.']
  },
  ifs: {
    name: 'IFS',
    label: 'Grade Nilai',
    argumentCount: { min: 8, max: 8 },
    buildFormula: (row) => `=IFS(B${row}>=90,"A",B${row}>=80,"B",B${row}>=75,"C",TRUE,"Remedial")`,
    buildQuestion: ({ row, student }) => `Di cell D${row}, buat grade nilai ${student}: A jika nilai minimal 90, B jika minimal 80, C jika minimal 75, selain itu Remedial.`,
    buildLogic: ({ row }) => `IFS dipakai saat pilihan hasilnya lebih dari dua. Cara bacanya: cek B${row} dari syarat paling tinggi dulu, lalu turun ke syarat berikutnya. TRUE dipakai sebagai pilihan terakhir kalau semua syarat sebelumnya tidak terpenuhi.`,
    hints: (row) => [`Mulai dari syarat tertinggi: B${row}>=90.`, 'IFS dibaca berpasangan: syarat, hasil, syarat, hasil.', 'TRUE di akhir berarti selain syarat sebelumnya.', `Tulis hasilnya di D${row}.`],
    parts: (row) => ['IFS mengecek banyak kondisi berurutan.', `B${row}>=90 menghasilkan A.`, `B${row}>=80 menghasilkan B.`, `B${row}>=75 menghasilkan C.`, 'TRUE menghasilkan Remedial sebagai pilihan terakhir.'],
    mistakes: ['Menaruh syarat rendah di awal, sehingga grade tinggi tidak terbaca benar.', 'Lupa pasangan hasil setelah kondisi.', 'Lupa kondisi terakhir untuk nilai yang tidak memenuhi syarat.']
  },
  if_and: {
    name: 'IF AND',
    label: 'Lulus Putra',
    argumentCount: { min: 3, max: 3 },
    buildFormula: (row) => `=IF(AND(B${row}>=75,C${row}="Laki-laki"),"Lulus Putra","Tidak Sesuai")`,
    buildQuestion: ({ row, student }) => `Di cell D${row}, buat status ${student}. Jika nilai minimal 75 dan jenis kelamin Laki-laki, hasilnya Lulus Putra. Jika tidak, hasilnya Tidak Sesuai.`,
    buildLogic: ({ row }) => `AND dipakai karena dua syarat harus benar semua. IF mengubah hasil TRUE/FALSE dari AND menjadi teks yang mudah dibaca.`,
    hints: (row) => [`Syarat pertama: B${row}>=75.`, `Syarat kedua: C${row}="Laki-laki".`, 'Masukkan AND di dalam IF.', `Tulis hasilnya di D${row}.`],
    parts: (row) => ['AND mengecek apakah semua syarat benar.', `B${row}>=75 mengecek nilai.`, `C${row}="Laki-laki" mengecek jenis kelamin.`, 'IF menampilkan teks sesuai hasil AND.'],
    mistakes: ['Memakai OR padahal soal meminta dua syarat wajib benar.', 'Menulis AND sendirian tanpa IF sehingga hasilnya hanya TRUE/FALSE.', 'Lupa tanda petik untuk teks Laki-laki.']
  },
  if_or: {
    name: 'IF OR',
    label: 'Masuk Kriteria',
    argumentCount: { min: 3, max: 3 },
    buildFormula: (row) => `=IF(OR(B${row}>=75,C${row}="Perempuan"),"Masuk Kriteria","Tidak Masuk")`,
    buildQuestion: ({ row, student }) => `Di cell D${row}, buat status ${student}. Jika nilai minimal 75 atau jenis kelamin Perempuan, hasilnya Masuk Kriteria. Jika keduanya tidak terpenuhi, hasilnya Tidak Masuk.`,
    buildLogic: ({ row }) => `OR dipakai karena cukup salah satu syarat yang benar. IF mengubah hasil OR menjadi teks status.`,
    hints: (row) => [`Syarat pertama: B${row}>=75.`, `Syarat kedua: C${row}="Perempuan".`, 'OR cukup butuh salah satu syarat benar.', `Tulis hasilnya di D${row}.`],
    parts: (row) => ['OR mengecek apakah minimal satu syarat benar.', `B${row}>=75 mengecek nilai.`, `C${row}="Perempuan" mengecek jenis kelamin.`, 'IF menampilkan status sesuai hasil OR.'],
    mistakes: ['Memakai AND padahal soal bilang atau.', 'Lupa memasukkan OR ke dalam IF.', 'Menulis teks Perempuan tanpa tanda petik.']
  },
  if_not: {
    name: 'IF NOT',
    label: 'Status Remedial',
    argumentCount: { min: 3, max: 3 },
    buildFormula: (row) => `=IF(NOT(B${row}>=75),"Remedial","Lulus")`,
    buildQuestion: ({ row, student }) => `Di cell D${row}, buat status ${student}. Jika nilai tidak memenuhi minimal 75, hasilnya Remedial. Jika memenuhi, hasilnya Lulus.`,
    buildLogic: ({ row }) => `NOT dipakai untuk membalik kondisi. B${row}>=75 artinya memenuhi. NOT membuatnya menjadi tidak memenuhi. Setelah itu IF menampilkan Remedial atau Lulus.`,
    hints: (row) => [`Kondisi dasarnya: B${row}>=75.`, 'NOT membalik hasil kondisi tersebut.', 'Kalau hasil NOT benar, artinya siswa perlu Remedial.', `Tulis hasilnya di D${row}.`],
    parts: (row) => ['NOT membalik TRUE menjadi FALSE, dan FALSE menjadi TRUE.', `B${row}>=75 mengecek apakah nilai memenuhi.`, 'IF menampilkan Remedial jika kondisi setelah NOT benar.'],
    mistakes: ['Memakai NOT tanpa IF sehingga hasilnya hanya TRUE/FALSE.', 'Kebalik menaruh hasil Remedial dan Lulus.', 'Mengira NOT sama dengan OR.']
  }
};

function buildExercise(formulaId, plan, rowData, rowIndex) {
  const row = rowIndex + 2;
  const student = rowData[0];
  const expectedFormula = plan.buildFormula(row);
  const title = `Latihan ${rowIndex + 1}: ${plan.label} - ${student}`;
  const question = plan.buildQuestion({ row, student });
  const logicPrompt = plan.buildLogic({ row, student });
  const refs = [`B${row}`, `C${row}`];

  return {
    id: `${formulaId}__level_${rowIndex + 1}`,
    baseFormulaId: formulaId,
    formulaName: plan.name,
    title,
    levelIndex: rowIndex,
    levelLabel: `${plan.label} - ${student}`,
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
    argumentCount: plan.argumentCount,
    highlightRanges: refs,
    allowedFunctions: plan.name.split(' '),
    hints: plan.hints(row),
    successExplanation: `Tepat. ${plan.name} sudah menghasilkan status sesuai kondisi pada baris ${student}.`,
    formulaParts: plan.parts(row),
    commonMistakes: plan.mistakes,
    nextUseCase: 'Pola logical ini bisa dipakai untuk status lulus, validasi data, prioritas kerja, atau pengecekan syarat otomatis.',
    audit: { batch: 'batch-03-logical', tableKey: 'batchLogicalStudents', expectedFormula, refs, note: 'Logical batch memakai data siswa sederhana agar kondisi mudah dibaca.' }
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
