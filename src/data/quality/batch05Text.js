// Batch 05: Text
// Fokus: mengambil, membersihkan, menggabungkan, dan mengganti sebagian teks.
// Soal dan logicPrompt tidak menyebut nama rumus, supaya pelajar menyimpulkan sendiri.

export const batchTextParticipantTable = {
  title: 'Data Pendaftar Workshop',
  description: 'Data pendaftar hasil copy-paste dari formulir pendaftaran. Kolom "Nama di Formulir" sengaja belum rapi.',
  columns: ['Nama Lengkap', 'Nama di Formulir', 'Kode Peserta', 'Kota', 'Hasil'],
  rows: [
    ['Budi Santoso', '  budi santoso  ', 'PST-2026-001', 'Jakarta', ''],
    ['Siti Aminah', 'SITI AMINAH', 'PST-2026-002', 'Bandung', ''],
    ['Rudi Hartono', 'rudi   hartono', 'PST-2026-003', 'Surabaya', ''],
    ['Dewi Lestari', '  Dewi Lestari', 'PST-2026-004', 'Yogyakarta', ''],
    ['Agus Prasetyo', 'AGUS prasetyo', 'PST-2026-005', 'Medan', ''],
    ['Maya Kusuma', 'maya KUSUMA  ', 'PST-2026-006', 'Bali', '']
  ]
};

const idSeparator = (formula = '') => formula.replace(/,/g, ';');

const leftLens = [3, 4, 7, 8, 5, 10];
const rightLens = [3, 4, 5, 6, 2, 7];
const midSpans = [[1, 3], [5, 4], [10, 3], [1, 8], [2, 6], [6, 6]];
const caseTargets = ['A', 'D', 'A', 'D', 'A', 'D']; // selang-seling nama dan kota

const plans = {
  left: {
    name: 'LEFT',
    argumentCount: { min: 2, max: 2 },
    buildFormula: (row, n) => `=LEFT(C${row},${n})`,
    buildQuestion: (row, n) => `Di cell E${row}, ambil ${n} karakter dari sisi kiri kode peserta.`,
    buildLogic: (row, n) => `Yang diambil adalah ${n} karakter paling awal dari teks di C${row}, dihitung mulai dari huruf pertama di sisi kiri.`,
    hints: (row, n) => [`Teksnya ada di C${row}.`, `Jumlah karakter yang diambil dari sisi kiri: ${n}.`, 'Karakter dihitung termasuk tanda strip (-), bukan cuma huruf.', `Tulis hasilnya di E${row}.`],
    parts: (row, n) => [`Bagian ini mengambil karakter dari sisi kiri teks.`, `C${row} adalah teks sumbernya.`, `${n} adalah jumlah karakter yang diambil dari kiri.`],
    mistakes: ['Menghitung dari sisi kanan, bukan kiri.', 'Salah menghitung jumlah karakter yang diminta.', 'Memilih kolom yang bukan kode peserta.']
  },
  right: {
    name: 'RIGHT',
    argumentCount: { min: 2, max: 2 },
    buildFormula: (row, n) => `=RIGHT(C${row},${n})`,
    buildQuestion: (row, n) => `Di cell E${row}, ambil ${n} karakter dari sisi kanan kode peserta.`,
    buildLogic: (row, n) => `Yang diambil adalah ${n} karakter paling akhir dari teks di C${row}, dihitung mulai dari huruf terakhir di sisi kanan.`,
    hints: (row, n) => [`Teksnya ada di C${row}.`, `Jumlah karakter yang diambil dari sisi kanan: ${n}.`, 'Karakter dihitung mundur dari huruf paling akhir.', `Tulis hasilnya di E${row}.`],
    parts: (row, n) => [`Bagian ini mengambil karakter dari sisi kanan teks.`, `C${row} adalah teks sumbernya.`, `${n} adalah jumlah karakter yang diambil dari kanan.`],
    mistakes: ['Menghitung dari sisi kiri, bukan kanan.', 'Salah menghitung jumlah karakter yang diminta.', 'Memilih kolom yang bukan kode peserta.']
  },
  mid: {
    name: 'MID',
    argumentCount: { min: 3, max: 3 },
    buildFormula: (row, [start, len]) => `=MID(C${row},${start},${len})`,
    buildQuestion: (row, [start, len]) => `Di cell E${row}, ambil ${len} karakter dari kode peserta, dimulai dari posisi karakter ke-${start}.`,
    buildLogic: (row, [start, len]) => `Yang diambil adalah bagian tengah teks di C${row}: mulai dari posisi karakter ke-${start}, sebanyak ${len} karakter ke kanan.`,
    hints: (row, [start, len]) => [`Teksnya ada di C${row}.`, `Posisi mulai menghitungnya di karakter ke-${start}.`, `Jumlah karakter yang diambil dari posisi itu: ${len}.`, `Tulis hasilnya di E${row}.`],
    parts: (row, [start, len]) => ['Bagian ini mengambil potongan teks dari posisi tertentu di tengah.', `C${row} adalah teks sumbernya.`, `${start} adalah posisi karakter awal.`, `${len} adalah jumlah karakter yang diambil.`],
    mistakes: ['Salah menghitung posisi awal karakter.', 'Menukar posisi awal dengan jumlah karakter.', 'Memilih kolom yang bukan kode peserta.']
  },
  len: {
    name: 'LEN',
    argumentCount: { min: 1, max: 1 },
    buildFormula: (row) => `=LEN(A${row})`,
    buildQuestion: (row) => `Di cell E${row}, hitung berapa jumlah karakter pada nama lengkap di baris ini (termasuk spasi antar kata).`,
    buildLogic: (row) => `Yang dihitung adalah jumlah seluruh karakter pada teks di A${row}, termasuk huruf dan spasi di antaranya.`,
    hints: (row) => [`Teksnya ada di A${row}.`, 'Spasi di antara kata ikut dihitung sebagai karakter.', 'Ini bukan menghitung jumlah kata, tapi jumlah karakter.', `Tulis hasilnya di E${row}.`],
    parts: (row) => ['Bagian ini menghitung jumlah karakter dalam sebuah teks.', `A${row} adalah teks yang dihitung.`, 'Hasilnya adalah angka jumlah karakter, termasuk spasi.'],
    mistakes: ['Menghitung jumlah kata, bukan jumlah karakter.', 'Lupa spasi ikut dihitung sebagai karakter.', 'Memilih kolom yang bukan nama lengkap.']
  },
  trim: {
    name: 'TRIM',
    argumentCount: { min: 1, max: 1 },
    buildFormula: (row) => `=TRIM(B${row})`,
    buildQuestion: (row) => `Di cell E${row}, rapikan spasi berlebih pada nama di kolom "Nama di Formulir" untuk baris ini.`,
    buildLogic: (row) => `Teks di B${row} punya spasi berlebih di awal, akhir, atau di antara kata. Yang perlu dilakukan adalah membersihkan spasi itu sampai tersisa satu spasi saja antar kata, tanpa spasi di awal atau akhir.`,
    hints: (row) => [`Teksnya ada di B${row}.`, 'Spasi di awal dan akhir teks perlu dihilangkan.', 'Spasi ganda di antara kata perlu dijadikan satu spasi saja.', `Tulis hasilnya di E${row}.`],
    parts: (row) => ['Bagian ini membersihkan spasi berlebih dari teks.', `B${row} adalah teks yang dirapikan.`, 'Hasilnya teks yang sama tapi tanpa spasi berlebih.'],
    mistakes: ['Hanya menghapus spasi di awal, lupa spasi di tengah.', 'Memilih kolom nama yang sudah rapi, bukan yang berantakan.', 'Mengira ini mengubah huruf besar/kecil, padahal hanya spasi yang dibersihkan.']
  },
  upper: {
    name: 'UPPER',
    argumentCount: { min: 1, max: 1 },
    buildFormula: (row, col) => `=UPPER(${col}${row})`,
    buildQuestion: (row, col) => `Di cell E${row}, ubah teks pada kolom "${col === 'A' ? 'Nama Lengkap' : 'Kota'}" baris ini menjadi huruf besar semua.`,
    buildLogic: (row, col) => `Setiap huruf pada teks di ${col}${row} perlu diubah menjadi huruf kapital, tanpa mengubah spasi atau tanda baca.`,
    hints: (row, col) => [`Teksnya ada di ${col}${row}.`, 'Semua huruf perlu jadi huruf besar (kapital).', 'Angka dan tanda baca tidak berubah, hanya huruf.', `Tulis hasilnya di E${row}.`],
    parts: (row, col) => ['Bagian ini mengubah semua huruf menjadi kapital.', `${col}${row} adalah teks sumbernya.`, 'Huruf yang sudah kapital tidak berubah.'],
    mistakes: ['Mengira ini merapikan spasi, padahal hanya mengubah huruf jadi kapital.', 'Memilih kolom yang salah.', 'Mencampur dengan mengubah huruf jadi kecil, bukan besar.']
  },
  lower: {
    name: 'LOWER',
    argumentCount: { min: 1, max: 1 },
    buildFormula: (row, col) => `=LOWER(${col}${row})`,
    buildQuestion: (row, col) => `Di cell E${row}, ubah teks pada kolom "${col === 'A' ? 'Nama Lengkap' : 'Kota'}" baris ini menjadi huruf kecil semua.`,
    buildLogic: (row, col) => `Setiap huruf pada teks di ${col}${row} perlu diubah menjadi huruf kecil, tanpa mengubah spasi atau tanda baca.`,
    hints: (row, col) => [`Teksnya ada di ${col}${row}.`, 'Semua huruf perlu jadi huruf kecil.', 'Angka dan tanda baca tidak berubah, hanya huruf.', `Tulis hasilnya di E${row}.`],
    parts: (row, col) => ['Bagian ini mengubah semua huruf menjadi huruf kecil.', `${col}${row} adalah teks sumbernya.`, 'Huruf yang sudah kecil tidak berubah.'],
    mistakes: ['Mengira ini merapikan spasi, padahal hanya mengubah huruf jadi kecil.', 'Memilih kolom yang salah.', 'Mencampur dengan mengubah huruf jadi besar, bukan kecil.']
  },
  proper: {
    name: 'PROPER',
    argumentCount: { min: 1, max: 1 },
    buildFormula: (row) => `=PROPER(B${row})`,
    buildQuestion: (row) => `Di cell E${row}, rapikan huruf besar/kecil pada nama di kolom "Nama di Formulir" untuk baris ini, sehingga tiap awal kata jadi huruf kapital.`,
    buildLogic: (row) => `Teks di B${row} punya campuran huruf besar dan kecil yang tidak konsisten. Yang perlu dilakukan adalah membuat huruf pertama tiap kata menjadi kapital, sisanya huruf kecil.`,
    hints: (row) => [`Teksnya ada di B${row}.`, 'Huruf pertama tiap kata jadi kapital.', 'Huruf sesudahnya dalam kata yang sama jadi huruf kecil.', `Tulis hasilnya di E${row}.`],
    parts: (row) => ['Bagian ini merapikan huruf kapital di awal tiap kata.', `B${row} adalah teks sumbernya.`, 'Hasilnya format nama yang rapi, huruf pertama tiap kata kapital.'],
    mistakes: ['Mengira ini hanya mengubah semua huruf jadi besar.', 'Lupa merapikan spasi berlebih yang mungkin masih ada.', 'Memilih kolom nama yang sudah rapi, bukan yang dari formulir.']
  },
  concat: {
    name: 'CONCAT',
    argumentCount: { min: 2, max: null },
    buildFormula: (row) => `=CONCAT(A${row},"-",D${row})`,
    buildQuestion: (row) => `Di cell E${row}, gabungkan nama lengkap dan kota pada baris ini menjadi satu teks, dipisahkan tanda strip (-), tanpa spasi tambahan.`,
    buildLogic: (row) => `Dua teks, yaitu A${row} dan D${row}, perlu digabung menjadi satu teks. Di antara keduanya disisipkan tanda strip sebagai pemisah.`,
    hints: (row) => [`Teks pertama ada di A${row}.`, `Teks kedua ada di D${row}.`, 'Di antara keduanya perlu disisipkan tanda "-".', `Tulis hasilnya di E${row}.`],
    parts: (row) => ['Bagian ini menggabungkan beberapa teks menjadi satu.', `A${row} dan D${row} adalah teks yang digabung.`, 'Tanda "-" disisipkan sebagai pemisah di antara keduanya.'],
    mistakes: ['Lupa menyisipkan tanda pemisah.', 'Menukar urutan nama dan kota.', 'Menambah spasi ekstra yang tidak diminta.']
  },
  substitute: {
    name: 'SUBSTITUTE',
    argumentCount: { min: 3, max: 4 },
    buildFormula: (row) => `=SUBSTITUTE(C${row},"PST","VIP")`,
    buildQuestion: (row) => `Di cell E${row}, ganti semua bagian "PST" pada kode peserta baris ini menjadi "VIP".`,
    buildLogic: (row) => `Teks di C${row} berisi bagian "PST" yang perlu diganti menjadi "VIP". Bagian teks lain yang tidak cocok tetap dibiarkan seperti semula.`,
    hints: (row) => [`Teksnya ada di C${row}.`, 'Bagian yang dicari adalah "PST".', 'Bagian itu diganti menjadi "VIP".', `Tulis hasilnya di E${row}.`],
    parts: (row) => ['Bagian ini mengganti sepotong teks tertentu dengan teks baru.', `C${row} adalah teks sumbernya.`, '"PST" adalah teks yang dicari, "VIP" adalah teks penggantinya.'],
    mistakes: ['Menukar posisi teks yang dicari dengan teks pengganti.', 'Lupa tanda petik pada teks yang dicari/diganti.', 'Memilih kolom yang bukan kode peserta.']
  }
};

function buildExercise(formulaId, plan, rowData, rowIndex) {
  const row = rowIndex + 2;
  const param = formulaId === 'left' ? leftLens[rowIndex]
    : formulaId === 'right' ? rightLens[rowIndex]
    : formulaId === 'mid' ? midSpans[rowIndex]
    : formulaId === 'upper' || formulaId === 'lower' ? caseTargets[rowIndex]
    : undefined;
  const expectedFormula = plan.buildFormula(row, param);
  const question = plan.buildQuestion(row, param);
  const logicPrompt = plan.buildLogic(row, param);
  const refs = formulaId === 'concat' ? [`A${row}`, `D${row}`] : formulaId === 'upper' || formulaId === 'lower' ? [`${param}${row}`] : formulaId === 'len' ? [`A${row}`] : formulaId === 'trim' || formulaId === 'proper' ? [`B${row}`] : [`C${row}`];

  return {
    id: `${formulaId}__level_${rowIndex + 1}`,
    baseFormulaId: formulaId,
    formulaName: plan.name,
    title: `Latihan ${rowIndex + 1}: ${plan.name} baris ${row - 1}`,
    levelIndex: rowIndex,
    levelLabel: `Baris ${row - 1}`,
    tableKey: 'batchTextParticipants',
    table: batchTextParticipantTable,
    activeCell: `E${row}`,
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
    nextUseCase: 'Pola membersihkan dan menyusun teks seperti ini sering dipakai untuk merapikan data hasil copy-paste, formulir, atau import dari sistem lain.',
    audit: { batch: 'batch-05-text', tableKey: 'batchTextParticipants', expectedFormula, refs, note: 'Tiap level memakai baris dan/atau parameter berbeda supaya hasilnya bervariasi.' }
  };
}

export const batch05TextExercises = Object.fromEntries(
  Object.entries(plans).map(([formulaId, plan]) => [
    formulaId,
    batchTextParticipantTable.rows.map((rowData, rowIndex) => buildExercise(formulaId, plan, rowData, rowIndex))
  ])
);

export const batch05TextLevels = Object.fromEntries(
  Object.entries(batch05TextExercises).map(([formulaId, levels]) => [
    formulaId,
    levels.map(({ id, title, levelLabel, question, expectedFormula }) => ({ id, title, levelLabel, question, expectedFormula }))
  ])
);
