export function createGenericExercise(formula) {
  const sampleRef = formula.category === 'Text' ? 'A2' : formula.category === 'Date and Time' ? 'B2' : 'A2:A10';

  return {
    id: `${formula.id}-generic`,
    formulaName: formula.name,
    title: `Latihan dasar ${formula.name}`,
    activeCell: 'C2',
    question: `Coba tulis formula ${formula.name} sederhana berdasarkan format yang tersedia. Fokus dulu ke struktur, bukan hasil angka final.`,
    logicPrompt: formula.simpleLogic,
    expectedFormula: `=${formula.name}(${sampleRef})`,
    acceptedFormulas: [],
    requiredRefs: [],
    requiredTexts: [],
    argumentCount: { min: 0, max: null },
    highlightRanges: [],
    hints: [
      `Mulai dengan tanda = lalu nama rumus ${formula.name}.`,
      'Buka kurung setelah nama rumus.',
      'Isi argumen sesuai format. Tidak perlu sempurna, yang penting strukturnya mendekati.',
      'Tutup kurung di akhir formula.'
    ],
    successExplanation: `Struktur dasar ${formula.name} sudah benar. Latihan detail untuk rumus ini akan ditambahkan bertahap.`,
    formulaParts: [
      `${formula.name} adalah nama function.`,
      'Bagian di dalam kurung adalah argumen yang diproses function.',
      'Urutan argumen mengikuti format yang ditampilkan di halaman teori.'
    ],
    commonMistakes: [
      'Nama function salah ketik.',
      'Formula tidak diawali =.',
      'Kurung belum ditutup.',
      'Separator tidak sesuai mode Excel yang dipilih.'
    ],
    nextUseCase: formula.useCase
  };
}

export const genericTheoryTable = {
  title: 'Mini Data Contoh',
  description: 'Data kecil ini hanya untuk latihan struktur formula dasar.',
  columns: ['Item', 'Nilai', 'Keterangan'],
  rows: [
    ['Contoh A', 10, 'Aktif'],
    ['Contoh B', 25, 'Nonaktif'],
    ['Contoh C', 40, 'Aktif']
  ]
};
