// Formula Coach detailed practice generator.
// Tujuannya: semua rumus punya latihan aktif, bukan lagi theory only.
// Latihan curated yang sudah ada tetap dipakai. File ini mengisi rumus yang belum punya latihan manual.

const upper = (value = '') => String(value || '').toUpperCase();

const tableByCategory = {
  'Text': 'text',
  'Date and Time': 'date',
  'Logical': 'students',
  'Lookup and Reference': 'lookup',
  'Dynamic Array': 'dynamic',
  'Math and Trigonometry': 'sales',
  'Statistical': 'students',
  'Compatibility': 'students',
  'Financial': 'forecast',
  'Information': 'info',
  'Engineering': 'info',
  'Database': 'students',
  'Web': 'text',
  'Cube': 'sales',
  'Advanced / Professional': 'dynamic',
  'Add-in / User Defined': 'info'
};

const categoryTarget = {
  'Text': { ref: 'A2', extraRef: 'B2', range: 'A2:A5', target: 'teks di A2' },
  'Date and Time': { ref: 'B2', extraRef: 'C2', range: 'B2:C7', target: 'tanggal di B2' },
  'Logical': { ref: 'D2', extraRef: 'E2', range: 'D2:D16', target: 'nilai siswa di D2' },
  'Lookup and Reference': { ref: 'A2', extraRef: 'E2:I8', range: 'E2:I8', target: 'kode produk A2' },
  'Dynamic Array': { ref: 'A2', extraRef: 'D2:D13', range: 'A2:E13', target: 'data produk A2:E13' },
  'Math and Trigonometry': { ref: 'E2', extraRef: 'D2', range: 'E2:E16', target: 'angka penjualan' },
  'Statistical': { ref: 'D2', extraRef: 'D3', range: 'D2:D16', target: 'nilai siswa D2:D16' },
  'Compatibility': { ref: 'D2', extraRef: 'D3', range: 'D2:D16', target: 'contoh angka statistik' },
  'Financial': { ref: 'B2', extraRef: 'B3', range: 'B2:B7', target: 'data sales bulanan' },
  'Information': { ref: 'A2', extraRef: 'B2', range: 'A2:F4', target: 'isi cell A2' },
  'Engineering': { ref: 'A2', extraRef: 'B2', range: 'A2:B4', target: 'contoh angka/teks teknik' },
  'Database': { ref: 'D2', extraRef: 'D3', range: 'A1:E16', target: 'database siswa' },
  'Web': { ref: 'D2', extraRef: 'C2', range: 'A2:D5', target: 'contoh URL atau XML' },
  'Cube': { ref: 'A2', extraRef: 'B2', range: 'A1:E16', target: 'data model/cube' },
  'Advanced / Professional': { ref: 'A2', extraRef: 'D2:D13', range: 'A2:E13', target: 'range dinamis' },
  'Add-in / User Defined': { ref: 'A2', extraRef: 'B2', range: 'A2:B4', target: 'argumen dasar' }
};

const explicitExamples = {
  // Compatibility / old statistical names
  BETADIST: ['2', '8', '10', 'TRUE'],
  BETAINV: ['0.5', '8', '10'],
  BINOMDIST: ['6', '10', '0.5', 'FALSE'],
  CHIDIST: ['18.307', '10'],
  CHIINV: ['0.05', '10'],
  CHITEST: ['D2:D6', 'E2:E6'],
  CONFIDENCE: ['0.05', '2.5', '50'],
  COVAR: ['D2:D6', 'E2:E6'],
  CRITBINOM: ['10', '0.5', '0.75'],
  EXPONDIST: ['0.2', '10', 'TRUE'],
  FDIST: ['15.206', '6', '4'],
  FINV: ['0.01', '6', '4'],
  FTEST: ['D2:D6', 'E2:E6'],
  GAMMADIST: ['10', '9', '2', 'TRUE'],
  GAMMAINV: ['0.068094', '9', '2'],
  HYPGEOMDIST: ['1', '4', '8', '20'],
  LOGINV: ['0.039084', '3.5', '1.2'],
  LOGNORMDIST: ['4', '3.5', '1.2'],
  NEGBINOMDIST: ['3', '5', '0.4'],
  NORMDIST: ['42', '40', '1.5', 'TRUE'],
  NORMINV: ['0.908789', '40', '1.5'],
  NORMSDIST: ['1.333333'],
  NORMSINV: ['0.908789'],
  PERCENTRANK: ['D2:D16', '80'],
  POISSON: ['2', '5', 'TRUE'],
  STDEV: ['D2:D16'],
  STDEVP: ['D2:D16'],
  TDIST: ['1.959999', '60', '2'],
  TINV: ['0.054645', '60'],
  TTEST: ['D2:D6', 'E2:E6', '2', '1'],
  VAR: ['D2:D16'],
  VARP: ['D2:D16'],
  WEIBULL: ['105', '20', '100', 'TRUE'],
  ZTEST: ['D2:D16', '75'],

  // Common newer statistical / math demos
  'NORM.DIST': ['42', '40', '1.5', 'TRUE'],
  'NORM.INV': ['0.908789', '40', '1.5'],
  'NORM.S.DIST': ['1.333333', 'TRUE'],
  'NORM.S.INV': ['0.908789'],
  'BINOM.DIST': ['6', '10', '0.5', 'FALSE'],
  'BINOM.INV': ['10', '0.5', '0.75'],
  'NEGBINOM.DIST': ['3', '5', '0.4', 'FALSE'],
  'POISSON.DIST': ['2', '5', 'TRUE'],
  'HYPGEOM.DIST': ['1', '4', '8', '20', 'FALSE'],
  'BETA.DIST': ['2', '8', '10', 'TRUE'],
  'BETA.INV': ['0.5', '8', '10'],
  'GAMMA.DIST': ['10', '9', '2', 'TRUE'],
  'GAMMA.INV': ['0.068094', '9', '2'],
  'CHISQ.DIST': ['18.307', '10', 'TRUE'],
  'CHISQ.DIST.RT': ['18.307', '10'],
  'CHISQ.INV': ['0.95', '10'],
  'CHISQ.INV.RT': ['0.05', '10'],
  'CHISQ.TEST': ['D2:D6', 'E2:E6'],
  'F.DIST': ['15.206', '6', '4', 'TRUE'],
  'F.DIST.RT': ['15.206', '6', '4'],
  'F.INV': ['0.01', '6', '4'],
  'F.INV.RT': ['0.01', '6', '4'],
  'F.TEST': ['D2:D6', 'E2:E6'],
  'T.DIST': ['1.959999', '60', 'TRUE'],
  'T.DIST.2T': ['1.959999', '60'],
  'T.DIST.RT': ['1.959999', '60'],
  'T.INV': ['0.054645', '60'],
  'T.INV.2T': ['0.054645', '60'],
  'T.TEST': ['D2:D6', 'E2:E6', '2', '1'],
  'WEIBULL.DIST': ['105', '20', '100', 'TRUE'],
  'LOGNORM.DIST': ['4', '3.5', '1.2', 'TRUE'],
  'LOGNORM.INV': ['0.039084', '3.5', '1.2'],
  CONFIDENCE_NORM: ['0.05', '2.5', '50'],
  'CONFIDENCE.NORM': ['0.05', '2.5', '50'],
  'CONFIDENCE.T': ['0.05', '2.5', '50'],

  // Finance
  PMT: ['8%/12', '12', '10000000'],
  PV: ['8%/12', '12', '-900000'],
  FV: ['8%/12', '12', '-900000'],
  RATE: ['12', '-900000', '10000000'],
  NPER: ['8%/12', '-900000', '10000000'],
  NPV: ['10%', 'B2:B7'],
  IRR: ['B2:B7'],
  XIRR: ['B2:B7', 'A2:A7'],
  XNPV: ['10%', 'B2:B7', 'A2:A7'],
  DB: ['10000000', '1000000', '5', '1'],
  DDB: ['10000000', '1000000', '5', '1'],
  SLN: ['10000000', '1000000', '5'],
  SYD: ['10000000', '1000000', '5', '1'],
  CUMIPMT: ['8%/12', '12', '10000000', '1', '12', '0'],
  CUMPRINC: ['8%/12', '12', '10000000', '1', '12', '0'],
  IPMT: ['8%/12', '1', '12', '10000000'],
  PPMT: ['8%/12', '1', '12', '10000000'],
  EFFECT: ['8%', '12'],
  NOMINAL: ['8%', '12'],

  // Engineering
  CONVERT: ['10', '"m"', '"cm"'],
  BIN2DEC: ['"1010"'], BIN2HEX: ['"1010"'], BIN2OCT: ['"1010"'],
  DEC2BIN: ['10'], DEC2HEX: ['10'], DEC2OCT: ['10'],
  HEX2BIN: ['"A"'], HEX2DEC: ['"A"'], HEX2OCT: ['"A"'],
  OCT2BIN: ['"12"'], OCT2DEC: ['"12"'], OCT2HEX: ['"12"'],
  COMPLEX: ['3', '4'], IMABS: ['"3+4i"'], IMREAL: ['"3+4i"'], IMAGINARY: ['"3+4i"'], IMSUM: ['"3+4i"', '"2+1i"'], IMSUB: ['"3+4i"', '"2+1i"'], IMPRODUCT: ['"3+4i"', '"2+1i"'], IMDIV: ['"3+4i"', '"2+1i"'],
  DELTA: ['5', '5'], GESTEP: ['8', '5'], BITAND: ['6', '3'], BITOR: ['6', '3'], BITXOR: ['6', '3'], BITLSHIFT: ['6', '2'], BITRSHIFT: ['6', '1'],

  // Web / cube demos
  ENCODEURL: ['D2'], FILTERXML: ['A2', '"//title"'], WEBSERVICE: ['D2'],
  CUBEVALUE: ['"ThisWorkbookDataModel"', '"[Measures].[Total Sales]"'],
  CUBEMEMBER: ['"ThisWorkbookDataModel"', '"[Product].[Category].[Digital]"'],
  CUBESET: ['"ThisWorkbookDataModel"', '"[Product].[Category].Members"'],
  CUBESETCOUNT: ['A2'],
  CUBERANKEDMEMBER: ['"ThisWorkbookDataModel"', 'A2', '1'],
  CUBEMEMBERPROPERTY: ['"ThisWorkbookDataModel"', 'A2', '"Caption"'],
  CUBEKPIMEMBER: ['"ThisWorkbookDataModel"', '"Sales KPI"', '"Value"'],

  // Dynamic/advanced
  GROUPBY: ['B2:B13', 'D2:D13', 'SUM'],
  PIVOTBY: ['B2:B13', 'C2:C13', 'D2:D13', 'SUM'],
  LET: ['total', 'SUM(D2:D13)', 'total'],
  LAMBDA: ['x', 'x*2'],
  MAP: ['D2:D13', 'LAMBDA(x,x*2)'],
  REDUCE: ['0', 'D2:D13', 'LAMBDA(a,b,a+b)'],
  SCAN: ['0', 'D2:D13', 'LAMBDA(a,b,a+b)'],
  BYROW: ['D2:E13', 'LAMBDA(row,SUM(row))'],
  BYCOL: ['D2:E13', 'LAMBDA(col,SUM(col))'],
  MAKEARRAY: ['3', '3', 'LAMBDA(r,c,r*c)'],
  DETECTLANGUAGE: ['A2'], TRANSLATE: ['A2', '"id"', '"en"']
};

const rootSyntaxArgs = (syntax = '') => {
  const open = String(syntax).indexOf('(');
  const close = String(syntax).lastIndexOf(')');
  if (open < 0 || close < open) return [];
  const inner = String(syntax).slice(open + 1, close);
  const args = [];
  let current = '';
  let depth = 0;
  for (const char of inner) {
    if (char === '(') depth += 1;
    if (char === ')') depth = Math.max(0, depth - 1);
    if (char === ',' && depth === 0) {
      args.push(current.trim());
      current = '';
      continue;
    }
    current += char;
  }
  if (current.trim()) args.push(current.trim());
  return args;
};

const baseExampleForArg = (token = '', formula = {}) => {
  const t = token.toLowerCase().replace(/[\[\]]/g, '').trim();
  const target = categoryTarget[formula.category] || categoryTarget['Add-in / User Defined'];
  if (/lookup_value|value|number|x|num|decimal|real|inumber|rows?|cols?|k\b|quart|rank|period|rate|nper|pv|fv|cost|salvage|life|per\b|guess|probability|alpha|beta|mean|standard|sigma|lambda|degrees|radians|multiple|significance|step|threshold|year|month|day|hour|minute|second|start_num|num_chars|old_text|new_text|instance/i.test(t)) return target.ref || 'A2';
  if (/array|range|ref|reference|data|values|known_y|known_x|actual|expected|criteria_range|sum_range|average_range|lookup_array|return_array|table_array|database|field|list|vector|sample|population/i.test(t)) return target.range || 'A2:A10';
  if (/criteria|condition|logical_test|if_not_found|match_mode|search_mode|type|unit|format|delimiter|text|find_text|within_text|start_date|end_date/i.test(t)) return '"Aktif"';
  if (/cumulative|ignore_empty|exactly_once|ascending|is_omitted/i.test(t)) return 'TRUE';
  return target.ref || 'A2';
};

const argsFromSyntax = (formula) => {
  const name = upper(formula.name);
  if (explicitExamples[name]) return explicitExamples[name];
  const args = rootSyntaxArgs(formula.syntax);
  const isGeneric = args.length === 0 || args.some((item) => /^\[?argument\d+\]?$/i.test(item));
  if (isGeneric) {
    const target = categoryTarget[formula.category] || categoryTarget['Add-in / User Defined'];
    if (formula.category === 'Text') return [target.ref];
    if (formula.category === 'Date and Time') return [target.ref];
    if (formula.category === 'Financial') return ['8%/12', '12', '10000000'];
    if (formula.category === 'Engineering') return ['10'];
    if (formula.category === 'Compatibility' || formula.category === 'Statistical') return [target.range];
    return [target.ref];
  }
  const required = args.filter((arg) => !/^\[.*\]$/.test(arg)).slice(0, 4);
  return (required.length ? required : args.slice(0, 1)).map((arg) => baseExampleForArg(arg, formula));
};

const formulaExpression = (formula) => `=${formula.name}(${argsFromSyntax(formula).join(',')})`;

const requiredRefsFromArgs = (args = []) => args.filter((arg) => /^\$?[A-Z]+\$?\d+(?::\$?[A-Z]+\$?\d+)?$/i.test(arg));
const requiredTextsFromArgs = (args = []) => args.filter((arg) => /^".*"$/.test(arg)).map((arg) => arg.replace(/^"|"$/g, ''));

const actionByCategory = (formula) => {
  const name = formula.name;
  const category = formula.category;
  if (category === 'Text') return 'mengolah teks supaya lebih rapi atau mengambil bagian tertentu dari teks';
  if (category === 'Date and Time') return 'mengolah tanggal atau jam supaya bisa dihitung dengan mudah';
  if (category === 'Financial') return 'menghitung simulasi keuangan seperti cicilan, bunga, nilai sekarang, atau nilai masa depan';
  if (category === 'Engineering') return 'mengolah angka teknik seperti konversi satuan, bilangan biner, atau bilangan kompleks';
  if (category === 'Compatibility') return 'membuka atau mengecek file Excel lama yang masih memakai nama rumus lama';
  if (category === 'Cube') return 'mengambil data dari Data Model atau cube, biasanya untuk laporan tingkat lanjut';
  if (category === 'Web') return 'mengambil atau merapikan data yang berhubungan dengan web';
  if (category === 'Database') return 'mengambil hasil dari tabel database kecil berdasarkan kriteria';
  if (category === 'Information') return 'mengecek jenis isi cell, misalnya kosong, angka, teks, error, atau alamat cell';
  if (category === 'Lookup and Reference') return 'mencari posisi atau mengambil data dari tabel referensi';
  if (category === 'Dynamic Array') return 'membuat hasil yang bisa melebar otomatis seperti filter, urut, atau ambil baris tertentu';
  if (category === 'Statistical') return 'menganalisis data angka, seperti rata-rata, ranking, sebaran, atau peluang';
  if (category === 'Logical') return 'membuat keputusan berdasarkan kondisi benar atau salah';
  if (category === 'Math and Trigonometry') return 'menghitung angka dari range atau nilai yang dipilih';
  return `mencoba struktur dasar ${name} sesuai formatnya`;
};

const makeQuestion = (formula) => {
  const name = upper(formula.name);
  const action = actionByCategory(formula);
  if (name === 'NEGBINOMDIST') return 'Hitung peluang 3 kegagalan terjadi sebelum 5 keberhasilan, dengan peluang berhasil 40%.';
  if (name === 'BINOMDIST' || name === 'BINOM.DIST') return 'Hitung peluang mendapat 6 keberhasilan dari 10 percobaan, dengan peluang berhasil 50%.';
  if (name === 'CONVERT') return 'Ubah angka 10 meter menjadi centimeter.';
  if (name === 'PMT') return 'Hitung estimasi cicilan bulanan untuk pinjaman 10.000.000 dengan bunga 8% per tahun selama 12 bulan.';
  if (name === 'ENCODEURL') return 'Ubah teks URL di cell D2 supaya aman dipakai sebagai alamat web.';
  if (formula.category === 'Compatibility') return `Latihan rumus lama ${formula.name}: isi argumen yang diminta untuk mencoba fungsi kompatibilitas ini.`;
  return `Gunakan ${formula.name} untuk ${action}. Ikuti arah argumen dari format rumusnya.`;
};

const makeLogic = (formula) => {
  const name = formula.name;
  const action = actionByCategory(formula);
  if (upper(name) === 'NEGBINOMDIST') return 'Rumus ini membaca jumlah gagal, jumlah berhasil yang ditargetkan, lalu peluang berhasil dalam satu percobaan.';
  return `Pikirkan dulu data yang mau diproses. Setelah itu isi ${name} dengan argumen yang diminta. Intinya: ${action}.`;
};

const makeHints = (formula, args, refs, texts) => {
  const name = formula.name;
  const target = categoryTarget[formula.category] || categoryTarget['Add-in / User Defined'];
  return [
    `Mulai dari tanda = lalu tulis nama rumus ${name}.`,
    refs.length ? `Pilih range/cell yang dibutuhkan: ${refs.join(', ')}.` : `Isi argumen pertama sesuai soal. Untuk latihan ini, perhatikan ${target.target}.`,
    texts.length ? `Ada teks/kriteria yang perlu dimasukkan: ${texts.join(', ')}.` : 'Baca urutan argumen dari format rumus, jangan loncat ke argumen terakhir dulu.',
    `Lengkapi argumen ${name} satu per satu, lalu tutup kurung di akhir.`
  ];
};

export function generateDetailedExerciseForFormula(formula) {
  const args = argsFromSyntax(formula);
  const expectedFormula = formulaExpression(formula);
  const refs = requiredRefsFromArgs(args);
  const texts = requiredTextsFromArgs(args);
  const tableKey = tableByCategory[formula.category] || 'info';
  const minArgs = Math.max(0, args.length);
  const target = categoryTarget[formula.category] || categoryTarget['Add-in / User Defined'];

  return {
    id: formula.id,
    formulaName: formula.name,
    title: `Latihan ${formula.name}`,
    tableKey,
    activeCell: formula.category === 'Lookup and Reference' ? 'B2' : 'G2',
    question: makeQuestion(formula),
    logicPrompt: makeLogic(formula),
    expectedFormula,
    acceptedFormulas: [],
    requiredRefs: refs,
    requiredTexts: texts,
    argumentCount: { min: minArgs, max: null },
    highlightRanges: refs.length ? refs : [],
    allowedFunctions: [formula.name],
    hints: makeHints(formula, args, refs, texts),
    successExplanation: `Nah, ini sudah masuk. ${formula.name} dipakai dengan struktur yang benar dan argumennya sudah mengikuti soal latihan.`,
    formulaParts: [
      `${formula.name} adalah nama rumus yang sedang dilatih.`,
      args.length ? `Argumen latihan ini: ${args.join(' | ')}.` : 'Rumus ini tidak membutuhkan argumen tambahan.',
      refs.length ? `Range/cell penting: ${refs.join(', ')}.` : 'Kalau tidak memakai range, fokusnya ada di urutan nilai/parameter yang diketik.',
      'Separator mengikuti mode Excel yang kamu pilih: titik koma untuk Indonesia, koma untuk English.'
    ],
    commonMistakes: [
      'Lupa tanda = di awal rumus.',
      'Nama rumus salah ketik atau tertukar dengan rumus lain.',
      'Argumen belum lengkap atau urutannya kebalik.',
      'Separator tidak sesuai mode Excel Indonesia atau English.'
    ],
    nextUseCase: `Pakai pola ini saat kamu butuh ${actionByCategory(formula)}.`,
    generatedBy: 'formulaPracticeFactory',
    audit: {
      generated: true,
      status: formula.auditStatus === 'needs-manual-format-check' ? 'structured-practice-from-available-format' : 'detailed-practice-ready',
      note: 'Latihan ini dibuat otomatis dari kategori, format rumus, dan aturan contoh Formula Coach. Rumus teknis tetap diberi latihan struktur agar tidak lagi theory only.'
    }
  };
}
