const stripSpacesOutsideQuotes = (value = '') => {
  let output = '';
  let inQuote = false;
  for (let i = 0; i < value.length; i += 1) {
    const char = value[i];
    if (char === '"') inQuote = !inQuote;
    if (!inQuote && /\s/.test(char)) continue;
    output += char;
  }
  return output;
};

const replaceOutsideQuotes = (value = '', from, to) => {
  let output = '';
  let inQuote = false;
  for (let i = 0; i < value.length; i += 1) {
    const char = value[i];
    if (char === '"') inQuote = !inQuote;
    output += !inQuote && char === from ? to : char;
  }
  return output;
};

export const normalizeFormula = (value = '') => {
  const trimmed = stripSpacesOutsideQuotes(value.trim());
  return replaceOutsideQuotes(trimmed, ';', ',').toUpperCase();
};

export const formulaForSeparator = (formula = '', separatorMode = 'id') => {
  if (separatorMode === 'id') return replaceOutsideQuotes(formula, ',', ';');
  return replaceOutsideQuotes(formula, ';', ',');
};

export const hasBalancedParentheses = (formula = '') => {
  let depth = 0;
  let inQuote = false;
  for (const char of formula) {
    if (char === '"') inQuote = !inQuote;
    if (inQuote) continue;
    if (char === '(') depth += 1;
    if (char === ')') depth -= 1;
    if (depth < 0) return false;
  }
  return depth === 0 && !inQuote;
};

export const getRootFunctionName = (formula = '') => {
  const match = formula.trim().match(/^=\s*([A-Z][A-Z0-9._]*)\s*\(/i);
  return match ? match[1].toUpperCase() : '';
};

const getFirstFunctionArgumentText = (formula = '') => {
  const start = formula.indexOf('(');
  if (start === -1) return '';
  let depth = 0;
  let inQuote = false;
  for (let i = start + 1; i < formula.length; i += 1) {
    const char = formula[i];
    if (char === '"') inQuote = !inQuote;
    if (inQuote) continue;
    if (char === '(') depth += 1;
    if (char === ')') {
      if (depth === 0) return formula.slice(start + 1, i);
      depth -= 1;
    }
  }
  return formula.slice(start + 1);
};

export const splitTopLevelArguments = (formula = '', separator = ',') => {
  const inner = getFirstFunctionArgumentText(formula);
  if (!inner.trim()) return [];

  const args = [];
  let current = '';
  let depth = 0;
  let inQuote = false;

  for (const char of inner) {
    if (char === '"') inQuote = !inQuote;
    if (!inQuote) {
      if (char === '(') depth += 1;
      if (char === ')') depth -= 1;
      if (char === separator && depth === 0) {
        args.push(current.trim());
        current = '';
        continue;
      }
    }
    current += char;
  }
  args.push(current.trim());
  return args;
};

const hasSeparatorOutsideQuotes = (formula = '', separator) => {
  let inQuote = false;
  for (const char of formula) {
    if (char === '"') inQuote = !inQuote;
    if (!inQuote && char === separator) return true;
  }
  return false;
};

const includesNormalized = (formulaNorm, piece = '') => {
  if (!piece) return true;
  const needle = normalizeFormula(String(piece)).replace(/^=/, '');
  const haystackNoSpaces = formulaNorm.replace(/\s+/g, '');
  const needleNoSpaces = needle.replace(/\s+/g, '');
  return formulaNorm.includes(needle) || haystackNoSpaces.includes(needleNoSpaces);
};

const getExpectedRoot = (exercise) => exercise?.formulaName?.split(' ')[0]?.toUpperCase() || '';

const checkComboFunction = (formulaNorm, exercise) => {
  if (exercise.formulaName === 'INDEX MATCH') {
    return formulaNorm.includes('INDEX(') && formulaNorm.includes('MATCH(');
  }
  return true;
};

const exactFormulaMatch = (answer, exercise) => {
  const answerNorm = normalizeFormula(answer);
  const variants = [exercise.expectedFormula, ...(exercise.acceptedFormulas || [])].filter(Boolean);
  return variants.some((item) => normalizeFormula(item) === answerNorm);
};

const buildWrongFunctionMessage = (root, expected) => {
  if (root === 'COUNT' && expected === 'COUNTIF') return 'Kamu memakai COUNT. COUNT cuma menghitung angka, sedangkan soal ini butuh menghitung berdasarkan kriteria. Pakai COUNTIF.';
  if (root === 'COUNT' && expected === 'COUNTIFS') return 'COUNT belum cukup, karena soal ini punya lebih dari satu kriteria. Pakai COUNTIFS.';
  if (root === 'SUM' && expected === 'SUMIF') return 'SUM menjumlahkan semua angka. Karena soal punya syarat, gunakan SUMIF.';
  if (root === 'SUMIF' && expected === 'SUMIFS') return 'SUMIF hanya untuk satu syarat. Soal ini butuh banyak syarat, jadi gunakan SUMIFS.';
  if (root === 'VLOOKUP' && expected === 'XLOOKUP') return 'VLOOKUP bisa dipakai untuk beberapa kasus, tapi latihan ini memang meminta XLOOKUP. Coba pakai XLOOKUP supaya logikanya sesuai.';
  return `Nama rumus belum sesuai. Kamu memakai ${root || 'rumus yang belum terbaca'}, sedangkan latihan ini meminta ${expected}.`;
};

export function validateFormula(answer, exercise, separatorMode = 'id') {
  const raw = String(answer || '').trim();
  const details = [];

  if (!raw) {
    return {
      correct: false,
      title: 'Formula masih kosong.',
      message: 'Tulis dulu rumusnya di formula bar. Mulai dari tanda =.',
      details
    };
  }

  if (!raw.startsWith('=')) {
    return {
      correct: false,
      title: 'Awal formula belum benar.',
      message: 'Formula Excel harus diawali tanda =. Tambahkan = di paling depan.',
      details: ['Contoh pola: =NAMA_RUMUS(argumen1; argumen2)']
    };
  }

  if (!hasBalancedParentheses(raw)) {
    return {
      correct: false,
      title: 'Kurungnya belum seimbang.',
      message: 'Ada kurung buka atau kurung tutup yang belum pas. Coba cek lagi bagian akhir rumus.',
      details
    };
  }

  const expectedRoot = getExpectedRoot(exercise);
  const root = getRootFunctionName(raw);
  const formulaNorm = normalizeFormula(raw);

  if (!root) {
    return {
      correct: false,
      title: 'Nama function belum terbaca.',
      message: 'Setelah tanda =, tulis nama function lalu buka kurung. Misalnya =SUM(...).',
      details
    };
  }

  if (exercise.formulaName !== 'INDEX MATCH' && root !== expectedRoot) {
    return {
      correct: false,
      title: 'Rumusnya belum cocok dengan soal.',
      message: buildWrongFunctionMessage(root, expectedRoot),
      details: [`Rumus yang dipilih: ${root}`, `Rumus yang diminta: ${expectedRoot}`]
    };
  }

  if (!checkComboFunction(formulaNorm, exercise)) {
    return {
      correct: false,
      title: 'Gabungan rumusnya belum lengkap.',
      message: 'Untuk latihan INDEX MATCH, kamu perlu memakai INDEX dan MATCH di formula yang sama.',
      details: ['INDEX mengambil hasilnya.', 'MATCH mencari posisi baris atau kolomnya.']
    };
  }

  const expectedSeparator = separatorMode === 'id' ? ';' : ',';
  const wrongSeparator = separatorMode === 'id' ? ',' : ';';
  const minArgs = exercise.argumentCount?.min ?? 0;
  const needsSeparator = minArgs > 1;

  if (needsSeparator && hasSeparatorOutsideQuotes(raw, wrongSeparator) && !hasSeparatorOutsideQuotes(raw, expectedSeparator)) {
    return {
      correct: false,
      title: 'Separator belum sesuai mode Excel.',
      message: separatorMode === 'id'
        ? 'Mode kamu Excel Indonesia. Biasanya pakai titik koma (;), bukan koma (,).'
        : 'Mode kamu Excel English. Biasanya pakai koma (,), bukan titik koma (;).',
      details: [`Separator aktif: ${expectedSeparator}`]
    };
  }

  const answerAsEnglish = formulaForSeparator(raw, 'en');
  const args = splitTopLevelArguments(answerAsEnglish, ',');
  const maxArgs = exercise.argumentCount?.max;

  if (minArgs > 0 && args.length < minArgs) {
    return {
      correct: false,
      title: 'Argumennya belum lengkap.',
      message: `${expectedRoot} di latihan ini butuh minimal ${minArgs} bagian argumen. Kamu baru mengisi ${args.length}.`,
      details: ['Cek lagi syntax dan urutan argumennya.']
    };
  }

  if (typeof maxArgs === 'number' && args.length > maxArgs) {
    return {
      correct: false,
      title: 'Argumennya kebanyakan.',
      message: `${expectedRoot} di latihan ini cukup ${maxArgs} argumen. Ada bagian yang sepertinya berlebih.`,
      details
    };
  }

  const missingRefs = (exercise.requiredRefs || []).filter((ref) => !includesNormalized(formulaNorm, ref));
  if (missingRefs.length) {
    return {
      correct: false,
      title: 'Range atau cell masih meleset.',
      message: 'Nama rumus sudah benar, tapi range/cell yang kamu pilih belum sesuai dengan tabel latihan.',
      details: missingRefs.map((ref) => `Belum menemukan ${ref} di formula kamu.`)
    };
  }

  const missingTexts = (exercise.requiredTexts || []).filter((text) => !includesNormalized(formulaNorm, text));
  if (missingTexts.length) {
    return {
      correct: false,
      title: 'Kriteria atau parameter belum lengkap.',
      message: 'Rumusnya sudah mengarah, tapi ada kriteria/parameter penting yang belum masuk.',
      details: missingTexts.map((text) => `Belum menemukan ${text}.`)
    };
  }

  if (exercise.expectedFormula?.includes('>=75') && !formulaNorm.includes('D2>=75') && !formulaNorm.includes('75<=D2')) {
    return {
      correct: false,
      title: 'Kondisinya belum tepat.',
      message: 'Untuk soal ini, batas lulusnya adalah nilai lebih besar atau sama dengan 75. Operatornya harus >=, bukan cuma > atau <.',
      details: ['Coba cek bagian kondisi logical_test.']
    };
  }

  const exact = exactFormulaMatch(answerAsEnglish, exercise);
  if (!exact && exercise.expectedFormula && (exercise.requiredRefs || []).length === 0 && (exercise.requiredTexts || []).length === 0 && minArgs === 0) {
    return {
      correct: false,
      title: 'Strukturnya belum sama dengan target latihan.',
      message: 'Untuk function tanpa argumen, bentuknya harus rapi: nama function lalu kurung buka dan tutup.',
      details
    };
  }

  return {
    correct: true,
    title: 'Jawaban kamu benar.',
    message: 'Jawaban kamu benar. Logikanya sudah tepat.',
    details: exact ? ['Formula cocok dengan target latihan.'] : ['Formula tidak harus identik 100%, tapi fungsi, range, kriteria, dan struktur utamanya sudah tepat.']
  };
}

export function validateGenericFormula(answer, formula, separatorMode = 'id') {
  const raw = String(answer || '').trim();
  if (!raw.startsWith('=')) {
    return { correct: false, title: 'Awal formula belum benar.', message: 'Mulai formula dengan tanda = dulu.' };
  }
  if (!hasBalancedParentheses(raw)) {
    return { correct: false, title: 'Kurung belum seimbang.', message: 'Cek kurung buka dan tutupnya.' };
  }
  const root = getRootFunctionName(raw);
  if (root !== formula.name.toUpperCase()) {
    return { correct: false, title: 'Nama rumus belum cocok.', message: `Latihan ini untuk ${formula.name}, tapi formula kamu terbaca sebagai ${root || 'tidak terbaca'}.` };
  }
  const wrongSeparator = separatorMode === 'id' ? ',' : ';';
  const expectedSeparator = separatorMode === 'id' ? ';' : ',';
  if (hasSeparatorOutsideQuotes(raw, wrongSeparator) && !hasSeparatorOutsideQuotes(raw, expectedSeparator)) {
    return { correct: false, title: 'Separator belum sesuai.', message: separatorMode === 'id' ? 'Gunakan titik koma (;) untuk mode Indonesia.' : 'Gunakan koma (,) untuk mode English.' };
  }
  return { correct: true, title: 'Struktur formula sudah benar.', message: 'Nama rumus, tanda =, dan kurungnya sudah aman. Latihan detail rumus ini akan ditambahkan bertahap.' };
}
