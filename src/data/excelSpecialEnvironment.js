const normalizeName = (value = '') => String(value || '').trim().toUpperCase();

const ENVIRONMENTS = {
  cube: {
    id: 'cube',
    label: 'Excel Desktop dengan Data Model / OLAP Cube',
    shortLabel: 'Butuh Data Model / Cube',
    resultLabel: 'Butuh Cube',
    kind: 'Cube',
    description: 'Function Cube membaca data dari Data Model, Power Pivot, atau OLAP server. Website bisa mengecek susunan argumennya, tapi hasil angka aslinya baru bisa keluar kalau workbook terhubung ke cube yang benar.',
    requirements: [
      'Workbook memiliki Data Model, Power Pivot, atau koneksi OLAP.',
      'Connection name, member expression, dan measure harus tersedia di workbook.',
      'Biasanya paling aman dites langsung di Excel Desktop atau Microsoft 365.'
    ]
  },
  web: {
    id: 'web',
    label: 'Excel dengan koneksi web / XML',
    shortLabel: 'Butuh koneksi web',
    resultLabel: 'Butuh Web/XML',
    kind: 'Web',
    description: 'Function Web seperti WEBSERVICE atau FILTERXML bergantung pada URL, respons server, dan format XML. Website bisa validasi struktur rumusnya, tapi tidak akan menampilkan hasil palsu.',
    requirements: [
      'URL harus aktif dan bisa diakses dari Excel.',
      'Untuk FILTERXML, isi XML dan XPath harus valid.',
      'Jika endpoint butuh login atau diblokir, hasil asli hanya bisa dicek di Excel.'
    ]
  },
  addin: {
    id: 'addin',
    label: 'Excel dengan Add-in / User Defined Function aktif',
    shortLabel: 'Butuh Add-in aktif',
    resultLabel: 'Butuh Add-in',
    kind: 'Add-in / UDF',
    description: 'Function Add-in dan User Defined Function hanya bisa dihitung kalau add-in atau kode custom-nya aktif di workbook. Website tidak menebak hasilnya agar tidak menyesatkan.',
    requirements: [
      'Add-in terkait harus sudah terpasang dan aktif.',
      'Macro, XLL, atau custom function harus diizinkan di workbook.',
      'Nama function dan urutan argumennya harus mengikuti add-in yang dipakai.'
    ]
  },
  engineering: {
    id: 'engineering',
    label: 'Excel Engineering Function tingkat lanjut',
    shortLabel: 'Butuh kalkulasi engineering Excel',
    resultLabel: 'Butuh Excel Engineering',
    kind: 'Engineering',
    description: 'Beberapa function Engineering memakai aturan konversi, bilangan kompleks, atau fungsi khusus yang hasilnya bisa berbeda jika disederhanakan. Website memvalidasi struktur dan argumen, lalu arahkan pengecekan angka final ke Excel.',
    requirements: [
      'Pastikan unit, basis angka, atau bilangan kompleks sesuai format Excel.',
      'Untuk bilangan kompleks, gunakan format yang dikenali Excel seperti "3+4i".',
      'Cek hasil akhir di Excel jika function masuk kategori engineering kompleks.'
    ]
  },
  advancedStats: {
    id: 'advancedStats',
    label: 'Excel Statistical Function tingkat lanjut',
    shortLabel: 'Butuh kalkulasi statistik Excel',
    resultLabel: 'Butuh Excel Statistik',
    kind: 'Advanced Statistics',
    description: 'Beberapa function statistik tingkat lanjut memakai distribusi, uji hipotesis, atau algoritma numerik Excel. Website mengecek susunan argumen dan data latihan, tapi tidak menampilkan angka estimasi kalau engine belum aman menghitungnya.',
    requirements: [
      'Parameter statistik harus sesuai jenis distribusi atau uji yang dipakai.',
      'Range actual dan expected harus punya ukuran data yang cocok.',
      'Untuk hasil final, gunakan Excel agar perhitungan mengikuti engine statistik bawaan Excel.'
    ]
  }
};

const exactEnvironmentMap = new Map([
  ['WEBSERVICE', 'web'],
  ['FILTERXML', 'web'],
  ['CALL', 'addin'],
  ['REGISTER.ID', 'addin'],
  ['EUROCONVERT', 'addin'],
  ['SQL.REQUEST', 'addin'],
  ['BESSELI', 'engineering'],
  ['BESSELJ', 'engineering'],
  ['BESSELK', 'engineering'],
  ['BESSELY', 'engineering'],
  ['COMPLEX', 'engineering'],
  ['IMABS', 'engineering'],
  ['IMAGINARY', 'engineering'],
  ['IMARGUMENT', 'engineering'],
  ['IMCONJUGATE', 'engineering'],
  ['IMCOS', 'engineering'],
  ['IMCOSH', 'engineering'],
  ['IMCOT', 'engineering'],
  ['IMCSC', 'engineering'],
  ['IMCSCH', 'engineering'],
  ['IMDIV', 'engineering'],
  ['IMEXP', 'engineering'],
  ['IMLN', 'engineering'],
  ['IMLOG10', 'engineering'],
  ['IMLOG2', 'engineering'],
  ['IMPOWER', 'engineering'],
  ['IMPRODUCT', 'engineering'],
  ['IMREAL', 'engineering'],
  ['IMSEC', 'engineering'],
  ['IMSECH', 'engineering'],
  ['IMSIN', 'engineering'],
  ['IMSINH', 'engineering'],
  ['IMSQRT', 'engineering'],
  ['IMSUB', 'engineering'],
  ['IMSUM', 'engineering'],
  ['IMTAN', 'engineering'],
  ['ERF', 'engineering'],
  ['ERF.PRECISE', 'engineering'],
  ['ERFC', 'engineering'],
  ['ERFC.PRECISE', 'engineering'],
  ['BETA.DIST', 'advancedStats'],
  ['BETADIST', 'advancedStats'],
  ['BETA.INV', 'advancedStats'],
  ['BETAINV', 'advancedStats'],
  ['CHIDIST', 'advancedStats'],
  ['CHIINV', 'advancedStats'],
  ['CHITEST', 'advancedStats'],
  ['CHISQ.DIST', 'advancedStats'],
  ['CHISQ.DIST.RT', 'advancedStats'],
  ['CHISQ.INV', 'advancedStats'],
  ['CHISQ.INV.RT', 'advancedStats'],
  ['CHISQ.TEST', 'advancedStats'],
  ['F.DIST', 'advancedStats'],
  ['F.DIST.RT', 'advancedStats'],
  ['F.INV', 'advancedStats'],
  ['F.INV.RT', 'advancedStats'],
  ['F.TEST', 'advancedStats'],
  ['FDIST', 'advancedStats'],
  ['FINV', 'advancedStats'],
  ['FTEST', 'advancedStats'],
  ['GAMMA', 'advancedStats'],
  ['GAMMA.DIST', 'advancedStats'],
  ['GAMMA.INV', 'advancedStats'],
  ['GAMMADIST', 'advancedStats'],
  ['GAMMAINV', 'advancedStats'],
  ['GAMMALN', 'advancedStats'],
  ['GAMMALN.PRECISE', 'advancedStats'],
  ['HYPGEOM.DIST', 'advancedStats'],
  ['HYPGEOMDIST', 'advancedStats'],
  ['T.DIST', 'advancedStats'],
  ['T.DIST.2T', 'advancedStats'],
  ['T.DIST.RT', 'advancedStats'],
  ['T.INV', 'advancedStats'],
  ['T.INV.2T', 'advancedStats'],
  ['T.TEST', 'advancedStats'],
  ['TDIST', 'advancedStats'],
  ['TINV', 'advancedStats'],
  ['TTEST', 'advancedStats'],
  ['WEIBULL', 'advancedStats'],
  ['WEIBULL.DIST', 'advancedStats'],
  ['Z.TEST', 'advancedStats'],
  ['ZTEST', 'advancedStats']
]);

const prefixEnvironmentMap = [
  { prefix: 'CUBE', id: 'cube' }
];

export function getExcelSpecialEnvironment(input) {
  const name = normalizeName(typeof input === 'string' ? input : input?.name);
  const category = typeof input === 'string' ? '' : input?.category;

  if (!name && !category) return null;
  if (category === 'Cube') return ENVIRONMENTS.cube;
  if (category === 'Add-in / User Defined') return ENVIRONMENTS.addin;

  const prefixMatch = prefixEnvironmentMap.find((item) => name.startsWith(item.prefix));
  if (prefixMatch) return ENVIRONMENTS[prefixMatch.id];

  const exactId = exactEnvironmentMap.get(name);
  return exactId ? ENVIRONMENTS[exactId] : null;
}

export function makeSpecialEnvironmentResult(functionName = '', argCount = 0) {
  const environment = getExcelSpecialEnvironment(functionName);
  if (!environment) return null;

  return {
    __structureOnly: true,
    __specialEnvironment: true,
    functionName: normalizeName(functionName),
    argCount,
    environment,
    preview: environment.resultLabel
  };
}

export function formatEnvironmentChecklist(environment) {
  if (!environment) return '';
  return environment.requirements.join(' ');
}

export { ENVIRONMENTS as excelSpecialEnvironments };
