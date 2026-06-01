// Batch 01, Basic Calculation manual quality layer.
// File ini sengaja dipisah dari catalog besar supaya audit bisa bertahap dan tidak merusak 520 rumus lain.

const numberTable = {
  title: 'Data Angka Bulanan',
  description: 'Pakai tabel ini untuk latihan total, rata-rata, nilai terkecil, nilai terbesar, peringkat angka, dan urutan angka.',
  columns: ['Bulan', 'Penjualan', 'Qty Order', 'Biaya Operasional', 'Rating'],
  rows: [
    ['Januari', 1250000, 18, 450000, 4.2],
    ['Februari', 980000, 15, 380000, 4.0],
    ['Maret', 1520000, 22, 510000, 4.5],
    ['April', 875000, 12, 350000, 3.9],
    ['Mei', 2100000, 30, 690000, 4.8],
    ['Juni', 1750000, 26, 620000, 4.6],
    ['Juli', 1320000, 19, 470000, 4.1],
    ['Agustus', 2450000, 34, 750000, 4.9],
    ['September', 1680000, 24, 580000, 4.4],
    ['Oktober', 1980000, 28, 640000, 4.7],
    ['November', 1560000, 21, 530000, 4.3],
    ['Desember', 2250000, 32, 710000, 4.8]
  ]
};

const mixedTable = {
  title: 'Data Campuran untuk Hitung Cell',
  description: 'Pakai tabel ini untuk membedakan cell angka, cell terisi, dan cell kosong.',
  columns: ['Nama Data', 'Nilai Angka', 'Catatan', 'Status'],
  rows: [
    ['Order A', 120, 'Selesai', 'OK'],
    ['Order B', '', 'Pending', ''],
    ['Order C', 75, '', 'OK'],
    ['Order D', 0, 'Retur', 'Cek'],
    ['Order E', 240, '', 'OK'],
    ['Order F', '', '', 'Pending'],
    ['Order G', 95, 'Selesai', 'OK'],
    ['Order H', 180, 'Selesai', ''],
    ['Order I', '', 'Pending', 'Cek'],
    ['Order J', 60, '', 'OK'],
    ['Order K', 310, 'Selesai', 'OK'],
    ['Order L', '', '', '']
  ]
};

const salesTable = {
  title: 'Data Penjualan',
  description: 'Pakai tabel ini untuk latihan rumus dengan syarat, seperti kategori, kota, qty, total penjualan, dan rating.',
  columns: ['Produk', 'Kategori', 'Kota', 'Qty', 'Total Penjualan', 'Rating'],
  rows: [
    ['Kaos Basic', 'Fashion', 'Jakarta', 12, 600000, 4.3],
    ['Ebook Excel', 'Digital', 'Bandung', 8, 400000, 4.8],
    ['Template CV', 'Digital', 'Jakarta', 15, 750000, 4.7],
    ['Topi Denim', 'Fashion', 'Surabaya', 5, 250000, 4.1],
    ['Preset Foto', 'Digital', 'Jakarta', 20, 1000000, 4.9],
    ['Hoodie', 'Fashion', 'Bandung', 7, 700000, 4.4],
    ['Kelas Excel', 'Education', 'Jakarta', 10, 1500000, 5.0],
    ['Sticker Pack', 'Digital', 'Surabaya', 18, 270000, 4.2],
    ['Totebag', 'Fashion', 'Jakarta', 9, 315000, 4.0],
    ['Mini Course', 'Education', 'Bandung', 6, 900000, 4.6],
    ['Mockup Pack', 'Digital', 'Jakarta', 14, 560000, 4.5],
    ['Notebook', 'Stationery', 'Bandung', 30, 450000, 3.9]
  ]
};

const formulaMeta = {
  sum: { name: 'SUM', format: '=SUM(number1; [number2]; ..)' },
  average: { name: 'AVERAGE', format: '=AVERAGE(number1; [number2]; ..)' },
  count: { name: 'COUNT', format: '=COUNT(value1; [value2]; ..)' },
  counta: { name: 'COUNTA', format: '=COUNTA(value1; [value2]; ..)' },
  countblank: { name: 'COUNTBLANK', format: '=COUNTBLANK(range)' },
  min: { name: 'MIN', format: '=MIN(number1; [number2]; ..)' },
  max: { name: 'MAX', format: '=MAX(number1; [number2]; ..)' },
  large: { name: 'LARGE', format: '=LARGE(array; k)' },
  small: { name: 'SMALL', format: '=SMALL(array; k)' },
  sumif: { name: 'SUMIF', format: '=SUMIF(range; criteria; [sum_range])' },
  sumifs: { name: 'SUMIFS', format: '=SUMIFS(sum_range; criteria_range1; criteria1; [criteria_range2]; [criteria2]; ..)' },
  averageif: { name: 'AVERAGEIF', format: '=AVERAGEIF(range; criteria; [average_range])' },
  averageifs: { name: 'AVERAGEIFS', format: '=AVERAGEIFS(average_range; criteria_range1; criteria1; [criteria_range2]; [criteria2]; ..)' },
  countif: { name: 'COUNTIF', format: '=COUNTIF(range; criteria)' },
  countifs: { name: 'COUNTIFS', format: '=COUNTIFS(criteria_range1; criteria1; [criteria_range2]; [criteria2]; ..)' }
};

const labelByIndex = ['Dasar', 'Range Lain', 'Syarat', 'Multi Data', 'Validasi', 'Tantangan'];

const splitArgs = (formula = '') => {
  const inner = String(formula).replace(/^=\w+(?:\.\w+)?\(/, '').replace(/\)$/, '');
  const output = [];
  let current = '';
  let inQuote = false;
  for (const char of inner) {
    if (char === '"') inQuote = !inQuote;
    if (!inQuote && char === ',') {
      output.push(current.trim());
      current = '';
      continue;
    }
    current += char;
  }
  if (current.trim()) output.push(current.trim());
  return output;
};

const isRef = (value = '') => /^\$?[A-Z]+\$?\d+(?::\$?[A-Z]+\$?\d+)?$/i.test(String(value).trim());
const isTextParam = (value = '') => /^".*"$/.test(String(value).trim()) || /^(TRUE|FALSE)$/i.test(String(value).trim()) || /^(>=|<=|<>|>|<|=)/.test(String(value).replace(/^"|"$/g, '').trim());

function argInfo(formula = '') {
  const args = splitArgs(formula);
  return {
    refs: args.filter(isRef),
    texts: args.filter((arg) => !isRef(arg) && isTextParam(arg))
  };
}

function tableFor(id) {
  if (['sumif','sumifs','averageif','averageifs','countif','countifs'].includes(id)) return salesTable;
  if (['count','counta','countblank'].includes(id)) return mixedTable;
  return numberTable;
}


const cleanQuestionText = (question = '') => String(question || '')
  .replace(/\?+$/g, '')
  .trim()
  .replace(/^Berapa\s+/i, 'berapa ')
  .replace(/^Apa\s+/i, 'apa ');

const cleanParam = (value = '') => String(value || '')
  .trim()
  .replace(/^"|"$/g, '')
  .replace(/^“|”$/g, '');

function buildLogicPrompt(id, config = {}) {
  const args = splitArgs(config.expectedFormula);
  const { refs, texts } = argInfo(config.expectedFormula);
  const question = cleanQuestionText(config.question);
  const functionName = formulaMeta[id]?.name || String(id || '').toUpperCase();
  const firstRef = refs[0] || 'range yang sesuai';
  const secondRef = refs[1] || '';
  const thirdRef = refs[2] || '';

  if (id === 'sum') {
    if (refs.length > 1) {
      return `Pertanyaan ini meminta ${question}. ${functionName} dipakai untuk menjumlahkan angka. Pilih ${refs.join(' dan ')} karena dua range itu sama-sama menjadi angka yang harus ditotal. Jangan pilih kolom lain yang tidak diminta soal.`;
    }
    return `Pertanyaan ini meminta ${question}. ${functionName} dipakai untuk menjumlahkan angka. Pilih ${firstRef} karena range itu berisi angka yang perlu ditotal.`;
  }

  if (id === 'average') {
    return `Pertanyaan ini meminta ${question}. ${functionName} dipakai untuk mencari rata-rata. Pilih ${firstRef} karena range itu berisi angka yang ingin dirata-ratakan. Jangan pilih seluruh tabel, cukup kolom atau baris angka yang sesuai dengan soal.`;
  }

  if (id === 'min') {
    return `Pertanyaan ini meminta ${question}. ${functionName} mencari angka paling kecil dari range yang dipilih. Pilih ${firstRef} karena range itu berisi angka yang sedang dibandingkan. Kalau range-nya salah, nilai terkecil yang keluar juga akan salah.`;
  }

  if (id === 'max') {
    return `Pertanyaan ini meminta ${question}. ${functionName} mencari angka paling besar dari range yang dipilih. Pilih ${firstRef} karena range itu berisi angka yang sedang dibandingkan.`;
  }

  if (id === 'large' || id === 'small') {
    const direction = id === 'large' ? 'terbesar' : 'terkecil';
    const opposite = id === 'large' ? 'MAX hanya mengambil terbesar pertama' : 'MIN hanya mengambil terkecil pertama';
    const k = args[1] || 'k';
    return `Pertanyaan ini meminta ${question}. ${functionName} dipakai untuk mencari angka ${direction} berdasarkan urutan tertentu. Pilih ${firstRef} sebagai range angka, lalu masukkan ${k} sebagai urutan/peringkat yang dicari. Jangan pakai ${id === 'large' ? 'MAX' : 'MIN'} kalau yang diminta bukan peringkat pertama, karena ${opposite}.`;
  }

  if (id === 'count') {
    return `Pertanyaan ini meminta ${question}. ${functionName} menghitung berapa cell yang berisi angka, bukan menjumlahkan nilainya. Pilih ${refs.join(' dan ') || firstRef} sesuai area yang ditanya. Teks dan cell kosong tidak ikut dihitung.`;
  }

  if (id === 'counta') {
    return `Pertanyaan ini meminta ${question}. ${functionName} menghitung cell yang terisi, baik angka maupun teks. Pilih ${firstRef} karena area itu yang ingin dicek. Cell kosong tidak ikut dihitung.`;
  }

  if (id === 'countblank') {
    return `Pertanyaan ini meminta ${question}. ${functionName} menghitung cell kosong pada range yang dipilih. Pilih ${firstRef} karena area itu yang ingin dicek kosongnya. Cell yang berisi teks atau angka tidak ikut dihitung.`;
  }

  if (id === 'countif') {
    const criteriaRange = args[0] || firstRef;
    const criteria = cleanParam(args[1] || texts[0] || 'kriteria dari soal');
    return `Pertanyaan ini meminta ${question}. ${functionName} dipakai untuk menghitung data yang cocok dengan satu kriteria. Pilih ${criteriaRange} sebagai range yang dicek, lalu pakai kriteria ${criteria}. Karena rumus ini hanya menghitung jumlah baris yang cocok, tidak perlu range angka hasil.`;
  }

  if (id === 'sumif' || id === 'averageif') {
    const criteriaRange = args[0] || firstRef;
    const criteria = cleanParam(args[1] || texts[0] || 'kriteria dari soal');
    const valueRange = args[2] || secondRef || 'range angka hasil';
    const action = id === 'sumif' ? 'menjumlahkan' : 'mencari rata-rata dari';
    const outputName = id === 'sumif' ? 'angka yang dijumlahkan' : 'angka yang dirata-ratakan';
    return `Pertanyaan ini meminta ${question}. ${functionName} bekerja dengan satu syarat. Pertama, pilih ${criteriaRange} sebagai tempat Excel mencari kriteria ${criteria}. Setelah barisnya cocok, Excel akan ${action} ${valueRange} sebagai ${outputName}. Urutannya harus range kriteria, kriteria, lalu range angka.`;
  }

  if (id === 'countifs') {
    const cRange1 = args[0] || firstRef;
    const c1 = cleanParam(args[1] || 'kriteria pertama');
    const cRange2 = args[2] || secondRef || 'range kriteria kedua';
    const c2 = cleanParam(args[3] || 'kriteria kedua');
    return `Pertanyaan ini meminta ${question}. ${functionName} menghitung baris yang memenuhi lebih dari satu syarat. Cek ${cRange1} dengan kriteria ${c1}, lalu cek ${cRange2} dengan kriteria ${c2}. Baris baru dihitung kalau semua syarat terpenuhi.`;
  }

  if (id === 'sumifs' || id === 'averageifs') {
    const resultRange = args[0] || firstRef;
    const cRange1 = args[1] || secondRef || 'range kriteria pertama';
    const c1 = cleanParam(args[2] || 'kriteria pertama');
    const cRange2 = args[3] || thirdRef || 'range kriteria kedua';
    const c2 = cleanParam(args[4] || 'kriteria kedua');
    const action = id === 'sumifs' ? 'menjumlahkan' : 'menghitung rata-rata dari';
    return `Pertanyaan ini meminta ${question}. ${functionName} memakai beberapa syarat. Mulai dari ${resultRange} sebagai angka yang akan dihitung. Lalu cek ${cRange1} dengan kriteria ${c1} dan ${cRange2} dengan kriteria ${c2}. Excel hanya akan ${action} baris yang lolos semua syarat.`;
  }

  return `${config.logic || ''} Range yang dipakai pada latihan ini adalah ${refs.join(' dan ') || 'range yang sesuai dengan soal'}. Baca pertanyaannya, cari kolom yang sesuai, lalu masukkan argumen sesuai urutan format ${functionName}.`.trim();
}

function makeExercise(id, levelIndex, config) {
  const meta = formulaMeta[id];
  const { refs, texts } = argInfo(config.expectedFormula);
  const table = config.table || tableFor(id);
  const title = `Latihan ${levelIndex + 1}: ${config.title || labelByIndex[levelIndex]}`;
  const activeCell = config.activeCell || 'G2';
  const logicPrompt = buildLogicPrompt(id, config);

  return {
    id: `${id}__batch_basic_${levelIndex + 1}`,
    baseFormulaId: id,
    formulaName: meta.name,
    title,
    levelIndex,
    levelLabel: config.title || labelByIndex[levelIndex],
    tableKey: `batch01_${id}`,
    table,
    activeCell,
    question: config.question,
    logicPrompt,
    expectedFormula: config.expectedFormula,
    acceptedFormulas: config.acceptedFormulas || [],
    requiredRefs: refs,
    requiredTexts: texts,
    argumentCount: { min: config.minArgs ?? splitArgs(config.expectedFormula).length, max: config.maxArgs ?? null },
    highlightRanges: refs,
    allowedFunctions: [meta.name],
    hints: config.hints,
    successExplanation: config.success || `Tepat. ${meta.name} sudah memakai range, kriteria, dan urutan argumen yang sesuai dengan soal.`,
    formulaParts: [
      `${meta.name} adalah function utama yang dipakai untuk menjawab soal ini.`,
      `Format rumus: ${meta.format}`,
      refs.length ? `Range/cell yang dipakai pada latihan ini: ${refs.join(' | ')}.` : 'Latihan ini fokus pada struktur rumus tanpa range tambahan.',
      texts.length ? `Kriteria/parameter yang dipakai: ${texts.join(' | ')}.` : 'Tidak ada kriteria teks khusus pada latihan ini.'
    ],
    commonMistakes: config.commonMistakes || [
      'Memilih range yang ikut header padahal soal meminta data isi saja.',
      'Urutan argumen tertukar.',
      'Kriteria ditulis tidak sama dengan isi tabel.',
      'Lupa tanda = di awal rumus.',
      'Separator dan kurung penutup belum sesuai.'
    ],
    nextUseCase: config.nextUseCase || `Pakai pola ini saat kamu menemukan soal ${meta.name} dengan data yang mirip.`,
    qualityStatus: 'reviewed',
    audit: {
      batch: 'batch01-basic-calculation',
      reviewed: true,
      note: 'Latihan ini ditulis manual sebagai baseline kualitas untuk batch basic.'
    }
  };
}

const nRangeHints = (goal, range, extra = '') => [
  `Hint 1: Soalnya mencari ${goal}. Jadi yang perlu kamu cari dulu adalah kolom angka yang relevan, bukan semua kolom di tabel.`,
  `Hint 2: Select ${range} karena range itu berisi angka yang diminta soal.`,
  `Hint 3: Masukkan range itu sebagai argumen utama. Untuk data yang berurutan, satu range sudah cukup.`,
  extra || 'Hint 4: Cek lagi apakah range yang kamu pilih benar-benar menjawab pertanyaan, bukan hanya terlihat berisi angka.',
  'Hint 5: Setelah range masuk, tutup kurung dan tekan Enter untuk cek hasilnya.'
].filter(Boolean);

const oneCriteriaHints = ({ goal, criteriaRange, criteria, valueRange, functionName }) => {
  const base = [
    `Hint 1: Soalnya mencari ${goal}. Berarti kamu butuh satu syarat utama: ${criteria}.`,
    `Hint 2: Select ${criteriaRange} sebagai range kriteria, karena range ini berisi data tempat Excel mencari ${criteria}.`,
    `Hint 3: Masukkan kriteria ${criteria} persis seperti yang tertulis di tabel atau soal.`
  ];
  if (valueRange) base.push(`Hint 4: Select ${valueRange} sebagai range angka yang akan dihitung setelah barisnya lolos syarat.`);
  else base.push(`Hint 4: ${functionName} hanya menghitung jumlah data yang cocok, jadi tidak perlu range angka hasil.`);
  base.push(`Hint 5: Ikuti urutan format ${functionName}. Jangan menaruh range angka di posisi yang salah.`);
  return base;
};

const twoCriteriaHints = ({ goal, resultRange, criteriaRange1, criteria1, criteriaRange2, criteria2, functionName, countOnly = false }) => {
  const hints = [
    `Hint 1: Soalnya mencari ${goal}. Artinya, baris data harus memenuhi dua syarat sekaligus.`,
  ];
  if (!countOnly) hints.push(`Hint 2: Select ${resultRange} sebagai range angka hasil yang mau dihitung.`);
  hints.push(`Hint ${countOnly ? 2 : 3}: Syarat pertama: select ${criteriaRange1}, lalu masukkan ${criteria1}.`);
  hints.push(`Hint ${countOnly ? 3 : 4}: Syarat kedua: select ${criteriaRange2}, lalu masukkan ${criteria2}.`);
  hints.push(`Hint ${countOnly ? 4 : 5}: ${functionName} membaca pasangan range kriteria dan kriteria. Jangan pisahkan pasangan ini.`);
  hints.push(`Hint ${countOnly ? 5 : 6}: Cek lagi apakah value kriteria benar-benar ada di tabel.`);
  return hints;
};

const exercises = {
  sum: [
    { title: 'Dasar', question: 'Berapa total penjualan dari seluruh bulan pada tabel?', logic: 'SUM dipakai saat kamu ingin menjumlahkan semua angka dalam satu range. Di soal ini, yang dijumlahkan adalah kolom Penjualan.', expectedFormula: '=SUM(B2:B13)', hints: nRangeHints('total penjualan seluruh bulan', 'B2:B13') },
    { title: 'Range Lain', question: 'Berapa total Qty Order dari seluruh bulan pada tabel?', logic: 'Masih memakai SUM, tapi range yang dipilih berpindah ke kolom Qty Order. Rumusnya harus mengikuti kolom yang ditanya.', expectedFormula: '=SUM(C2:C13)', hints: nRangeHints('total Qty Order seluruh bulan', 'C2:C13') },
    { title: 'Biaya', question: 'Berapa total biaya operasional dari seluruh bulan pada tabel?', logic: 'Cari dulu kolom Biaya Operasional, lalu jumlahkan seluruh angka isinya dengan SUM.', expectedFormula: '=SUM(D2:D13)', hints: nRangeHints('total biaya operasional', 'D2:D13') },
    { title: 'Semester 1', question: 'Berapa total penjualan dari Januari sampai Juni?', logic: 'Soal ini hanya meminta sebagian bulan. SUM tetap sama, tapi range-nya dibatasi dari Januari sampai Juni.', expectedFormula: '=SUM(B2:B7)', hints: nRangeHints('total penjualan Januari sampai Juni', 'B2:B7', 'Hint 4: Jangan pilih sampai Desember, karena soal hanya meminta Januari sampai Juni.') },
    { title: 'Semester 2', question: 'Berapa total penjualan dari Juli sampai Desember?', logic: 'Soal meminta total semester 2. Pilih range penjualan mulai Juli sampai Desember saja.', expectedFormula: '=SUM(B8:B13)', hints: nRangeHints('total penjualan Juli sampai Desember', 'B8:B13', 'Hint 4: Pastikan range dimulai dari Juli, bukan Januari.') },
    { title: 'Tantangan', question: 'Berapa total gabungan antara seluruh penjualan dan seluruh biaya operasional?', logic: 'SUM bisa menerima lebih dari satu range. Di soal ini, jumlahkan range Penjualan dan range Biaya Operasional dalam satu rumus.', expectedFormula: '=SUM(B2:B13,D2:D13)', hints: ['Hint 1: Soalnya meminta dua kelompok angka sekaligus: Penjualan dan Biaya Operasional.', 'Hint 2: Select B2:B13 untuk seluruh penjualan.', 'Hint 3: Setelah separator, select D2:D13 untuk seluruh biaya operasional.', 'Hint 4: SUM boleh memakai lebih dari satu range jika keduanya sama-sama ingin dijumlahkan.', 'Hint 5: Cek separator antara dua range dan kurung penutupnya.'] }
  ],
  average: [
    { title: 'Dasar', question: 'Berapa rata-rata penjualan dari seluruh bulan?', logic: 'AVERAGE dipakai untuk mencari nilai tengah rata-rata dari angka dalam range.', expectedFormula: '=AVERAGE(B2:B13)', hints: nRangeHints('rata-rata penjualan seluruh bulan', 'B2:B13') },
    { title: 'Qty', question: 'Berapa rata-rata Qty Order dari seluruh bulan?', logic: 'Pilih range Qty Order karena yang diminta bukan penjualan, melainkan jumlah order.', expectedFormula: '=AVERAGE(C2:C13)', hints: nRangeHints('rata-rata Qty Order', 'C2:C13') },
    { title: 'Biaya', question: 'Berapa rata-rata biaya operasional bulanan?', logic: 'AVERAGE menghitung rata-rata dari angka biaya operasional tiap bulan.', expectedFormula: '=AVERAGE(D2:D13)', hints: nRangeHints('rata-rata biaya operasional', 'D2:D13') },
    { title: 'Rating', question: 'Berapa rata-rata rating dari seluruh bulan?', logic: 'Rating juga angka, jadi bisa dihitung rata-ratanya dengan AVERAGE.', expectedFormula: '=AVERAGE(E2:E13)', hints: nRangeHints('rata-rata rating', 'E2:E13') },
    { title: 'Semester 1', question: 'Berapa rata-rata penjualan dari Januari sampai Juni?', logic: 'Rata-rata hanya untuk bulan Januari sampai Juni, jadi range tidak boleh sampai Desember.', expectedFormula: '=AVERAGE(B2:B7)', hints: nRangeHints('rata-rata penjualan Januari sampai Juni', 'B2:B7') },
    { title: 'Tantangan', question: 'Berapa rata-rata penjualan dari Juli sampai Desember?', logic: 'Pilih range semester 2 saja, lalu gunakan AVERAGE.', expectedFormula: '=AVERAGE(B8:B13)', hints: nRangeHints('rata-rata penjualan Juli sampai Desember', 'B8:B13') }
  ],
  min: [
    { title: 'Dasar', question: 'Berapa penjualan paling kecil dari seluruh bulan?', logic: 'MIN mencari angka terkecil dari range yang dipilih.', expectedFormula: '=MIN(B2:B13)', hints: nRangeHints('penjualan paling kecil', 'B2:B13') },
    { title: 'Qty', question: 'Berapa Qty Order paling kecil dari seluruh bulan?', logic: 'Pakai MIN pada kolom Qty Order karena yang dicari adalah angka terkecil di kolom itu.', expectedFormula: '=MIN(C2:C13)', hints: nRangeHints('Qty Order paling kecil', 'C2:C13') },
    { title: 'Biaya', question: 'Berapa biaya operasional paling kecil?', logic: 'MIN akan mengambil biaya paling kecil dari seluruh bulan.', expectedFormula: '=MIN(D2:D13)', hints: nRangeHints('biaya operasional paling kecil', 'D2:D13') },
    { title: 'Rating', question: 'Berapa rating paling rendah pada tabel?', logic: 'Rating rendah berarti nilai terkecil di kolom Rating.', expectedFormula: '=MIN(E2:E13)', hints: nRangeHints('rating paling rendah', 'E2:E13') },
    { title: 'Semester 1', question: 'Berapa penjualan paling kecil dari Januari sampai Juni?', logic: 'Range dibatasi Januari sampai Juni agar MIN hanya membaca semester 1.', expectedFormula: '=MIN(B2:B7)', hints: nRangeHints('penjualan paling kecil semester 1', 'B2:B7') },
    { title: 'Tantangan', question: 'Berapa penjualan paling kecil dari Juli sampai Desember?', logic: 'Range dibatasi Juli sampai Desember agar MIN hanya membaca semester 2.', expectedFormula: '=MIN(B8:B13)', hints: nRangeHints('penjualan paling kecil semester 2', 'B8:B13') }
  ],
  max: [
    { title: 'Dasar', question: 'Berapa penjualan paling besar dari seluruh bulan?', logic: 'MAX mencari angka terbesar dari range yang dipilih.', expectedFormula: '=MAX(B2:B13)', hints: nRangeHints('penjualan paling besar', 'B2:B13') },
    { title: 'Qty', question: 'Berapa Qty Order paling besar dari seluruh bulan?', logic: 'Pakai MAX pada kolom Qty Order karena yang dicari adalah angka terbesar di kolom itu.', expectedFormula: '=MAX(C2:C13)', hints: nRangeHints('Qty Order paling besar', 'C2:C13') },
    { title: 'Biaya', question: 'Berapa biaya operasional paling besar?', logic: 'MAX akan mengambil biaya paling besar dari seluruh bulan.', expectedFormula: '=MAX(D2:D13)', hints: nRangeHints('biaya operasional paling besar', 'D2:D13') },
    { title: 'Rating', question: 'Berapa rating paling tinggi pada tabel?', logic: 'Rating tertinggi berarti nilai terbesar di kolom Rating.', expectedFormula: '=MAX(E2:E13)', hints: nRangeHints('rating paling tinggi', 'E2:E13') },
    { title: 'Semester 1', question: 'Berapa penjualan paling besar dari Januari sampai Juni?', logic: 'Range dibatasi Januari sampai Juni agar MAX hanya membaca semester 1.', expectedFormula: '=MAX(B2:B7)', hints: nRangeHints('penjualan paling besar semester 1', 'B2:B7') },
    { title: 'Tantangan', question: 'Berapa penjualan paling besar dari Juli sampai Desember?', logic: 'Range dibatasi Juli sampai Desember agar MAX hanya membaca semester 2.', expectedFormula: '=MAX(B8:B13)', hints: nRangeHints('penjualan paling besar semester 2', 'B8:B13') }
  ],
  large: [
    { title: 'Dasar', question: 'Berapa penjualan terbesar ke-2 dari seluruh bulan?', logic: 'LARGE mencari angka terbesar berdasarkan urutan. Angka k menentukan peringkat terbesar yang dicari.', expectedFormula: '=LARGE(B2:B13,2)', hints: ['Hint 1: Soalnya mencari penjualan terbesar ke-2, bukan nilai terbesar pertama.', 'Hint 2: Select B2:B13 sebagai range penjualan.', 'Hint 3: Masukkan 2 sebagai k karena yang diminta peringkat terbesar ke-2.', 'Hint 4: Urutan LARGE adalah array dulu, lalu k.', 'Hint 5: Jangan memakai MAX, karena MAX hanya mencari terbesar pertama.'] },
    { title: 'Qty', question: 'Berapa Qty Order terbesar ke-3?', logic: 'Gunakan LARGE pada kolom Qty Order dan isi k dengan 3.', expectedFormula: '=LARGE(C2:C13,3)', hints: ['Hint 1: Soal mencari Qty Order terbesar ke-3.', 'Hint 2: Select C2:C13 sebagai range Qty Order.', 'Hint 3: Masukkan 3 sebagai k.', 'Hint 4: LARGE membaca k sebagai peringkat dari yang paling besar.', 'Hint 5: Jangan pilih kolom Penjualan karena yang ditanya Qty Order.'] },
    { title: 'Biaya', question: 'Berapa biaya operasional terbesar ke-2?', logic: 'Gunakan LARGE pada kolom Biaya Operasional.', expectedFormula: '=LARGE(D2:D13,2)', hints: ['Hint 1: Soal mencari biaya operasional terbesar ke-2.', 'Hint 2: Select D2:D13.', 'Hint 3: Masukkan 2 sebagai peringkat terbesar.', 'Hint 4: Urutannya array, lalu k.', 'Hint 5: Gunakan hanya range data biaya operasional yang diminta soal.'] },
    { title: 'Rating', question: 'Berapa rating tertinggi ke-3?', logic: 'Rating tertinggi ke-3 berarti pakai LARGE pada kolom Rating dengan k 3.', expectedFormula: '=LARGE(E2:E13,3)', hints: ['Hint 1: Soal mencari rating tertinggi ke-3.', 'Hint 2: Select E2:E13 sebagai range rating.', 'Hint 3: Masukkan 3 sebagai k.', 'Hint 4: LARGE mengurutkan dari terbesar.', 'Hint 5: Pastikan tidak memakai SMALL karena arahnya berbeda.'] },
    { title: 'Semester 1', question: 'Berapa penjualan terbesar ke-2 dari Januari sampai Juni?', logic: 'Range hanya semester 1, lalu k bernilai 2.', expectedFormula: '=LARGE(B2:B7,2)', hints: ['Hint 1: Fokus hanya Januari sampai Juni.', 'Hint 2: Select B2:B7.', 'Hint 3: Masukkan 2 karena diminta terbesar ke-2.', 'Hint 4: Jangan pilih B2:B13 karena itu seluruh tahun.', 'Hint 5: Cek urutan array dan k.'] },
    { title: 'Tantangan', question: 'Berapa penjualan terbesar ke-4 dari seluruh bulan?', logic: 'Gunakan range seluruh penjualan dengan k 4.', expectedFormula: '=LARGE(B2:B13,4)', hints: ['Hint 1: Soal mencari peringkat terbesar ke-4.', 'Hint 2: Select B2:B13.', 'Hint 3: Masukkan 4 sebagai k.', 'Hint 4: LARGE cocok untuk mencari peringkat dari angka terbesar.', 'Hint 5: Kalau memakai MAX, hasilnya hanya terbesar pertama.'] }
  ],
  small: [
    { title: 'Dasar', question: 'Berapa penjualan terkecil ke-2 dari seluruh bulan?', logic: 'SMALL mencari angka terkecil berdasarkan urutan. Angka k menentukan peringkat terkecil yang dicari.', expectedFormula: '=SMALL(B2:B13,2)', hints: ['Hint 1: Soalnya mencari penjualan terkecil ke-2.', 'Hint 2: Select B2:B13 sebagai range penjualan.', 'Hint 3: Masukkan 2 sebagai k.', 'Hint 4: SMALL membaca k dari yang paling kecil.', 'Hint 5: Jangan memakai MIN karena MIN hanya mencari terkecil pertama.'] },
    { title: 'Qty', question: 'Berapa Qty Order terkecil ke-3?', logic: 'Gunakan SMALL pada kolom Qty Order dan isi k dengan 3.', expectedFormula: '=SMALL(C2:C13,3)', hints: ['Hint 1: Soal mencari Qty Order terkecil ke-3.', 'Hint 2: Select C2:C13.', 'Hint 3: Masukkan 3 sebagai k.', 'Hint 4: SMALL mengurutkan dari terkecil.', 'Hint 5: Jangan pilih kolom Penjualan karena yang ditanya Qty Order.'] },
    { title: 'Biaya', question: 'Berapa biaya operasional terkecil ke-2?', logic: 'Gunakan SMALL pada kolom Biaya Operasional.', expectedFormula: '=SMALL(D2:D13,2)', hints: ['Hint 1: Soal mencari biaya operasional terkecil ke-2.', 'Hint 2: Select D2:D13.', 'Hint 3: Masukkan 2 sebagai k.', 'Hint 4: Urutannya array, lalu k.', 'Hint 5: Gunakan hanya range data yang diminta soal.'] },
    { title: 'Rating', question: 'Berapa rating terendah ke-3?', logic: 'Rating terendah ke-3 berarti pakai SMALL pada kolom Rating dengan k 3.', expectedFormula: '=SMALL(E2:E13,3)', hints: ['Hint 1: Soal mencari rating terendah ke-3.', 'Hint 2: Select E2:E13.', 'Hint 3: Masukkan 3 sebagai k.', 'Hint 4: SMALL mengurutkan dari terkecil.', 'Hint 5: Pastikan tidak memakai LARGE.'] },
    { title: 'Semester 1', question: 'Berapa penjualan terkecil ke-2 dari Januari sampai Juni?', logic: 'Range hanya semester 1, lalu k bernilai 2.', expectedFormula: '=SMALL(B2:B7,2)', hints: ['Hint 1: Fokus hanya Januari sampai Juni.', 'Hint 2: Select B2:B7.', 'Hint 3: Masukkan 2 karena diminta terkecil ke-2.', 'Hint 4: Jangan pilih seluruh tahun.', 'Hint 5: Cek urutan array dan k.'] },
    { title: 'Tantangan', question: 'Berapa penjualan terkecil ke-4 dari seluruh bulan?', logic: 'Gunakan range seluruh penjualan dengan k 4.', expectedFormula: '=SMALL(B2:B13,4)', hints: ['Hint 1: Soal mencari peringkat terkecil ke-4.', 'Hint 2: Select B2:B13.', 'Hint 3: Masukkan 4 sebagai k.', 'Hint 4: SMALL cocok untuk mencari peringkat dari angka terkecil.', 'Hint 5: Kalau memakai MIN, hasilnya hanya terkecil pertama.'] }
  ],
  count: [
    { title: 'Dasar', question: 'Berapa banyak cell angka pada kolom Nilai Angka?', logic: 'COUNT hanya menghitung cell yang berisi angka. Teks dan cell kosong tidak ikut dihitung.', expectedFormula: '=COUNT(B2:B13)', hints: nRangeHints('jumlah cell angka', 'B2:B13', 'Hint 4: COUNT tidak menghitung teks seperti OK atau Pending.') },
    { title: 'Area Lebih Luas', question: 'Berapa banyak cell angka pada area A2:D13?', logic: 'COUNT boleh membaca area luas, tapi tetap hanya menghitung angka di dalam area itu.', expectedFormula: '=COUNT(A2:D13)', hints: nRangeHints('jumlah cell angka di seluruh area data', 'A2:D13', 'Hint 4: Walaupun range luas, COUNT tetap mengabaikan teks dan kosong.') },
    { title: 'Kolom Catatan', question: 'Berapa banyak cell angka pada kolom Catatan?', logic: 'Kolom Catatan berisi teks dan blank. COUNT akan menghasilkan 0 jika tidak ada angka.', expectedFormula: '=COUNT(C2:C13)', hints: nRangeHints('jumlah cell angka pada kolom Catatan', 'C2:C13', 'Hint 4: Jangan heran kalau hasilnya 0, karena COUNT hanya membaca angka.') },
    { title: 'Dua Kolom', question: 'Berapa banyak cell angka pada kolom Nilai Angka dan Status jika dihitung sekaligus?', logic: 'COUNT bisa menerima lebih dari satu range. Hanya angka dari kedua range yang ikut dihitung.', expectedFormula: '=COUNT(B2:B13,D2:D13)', hints: ['Hint 1: Soalnya meminta dua kolom sekaligus: Nilai Angka dan Status.', 'Hint 2: Select B2:B13 sebagai range pertama.', 'Hint 3: Setelah separator, select D2:D13 sebagai range kedua.', 'Hint 4: COUNT tetap hanya menghitung angka, jadi teks Status tidak ikut dihitung.', 'Hint 5: Cek separator antar range.'] },
    { title: 'Sebagian Baris', question: 'Berapa banyak cell angka pada Nilai Angka dari Order A sampai Order F?', logic: 'Range dibatasi dari baris Order A sampai Order F saja.', expectedFormula: '=COUNT(B2:B7)', hints: nRangeHints('jumlah angka dari Order A sampai Order F', 'B2:B7') },
    { title: 'Tantangan', question: 'Berapa banyak cell angka pada Nilai Angka dari Order G sampai Order L?', logic: 'Range dibatasi dari Order G sampai Order L.', expectedFormula: '=COUNT(B8:B13)', hints: nRangeHints('jumlah angka dari Order G sampai Order L', 'B8:B13') }
  ],
  counta: [
    { title: 'Dasar', question: 'Berapa banyak cell yang terisi pada kolom Status?', logic: 'COUNTA menghitung cell yang terisi, baik teks maupun angka. Cell kosong tidak ikut dihitung.', expectedFormula: '=COUNTA(D2:D13)', hints: nRangeHints('jumlah cell terisi pada kolom Status', 'D2:D13', 'Hint 4: COUNTA menghitung teks seperti OK, Cek, dan Pending.') },
    { title: 'Catatan', question: 'Berapa banyak cell yang terisi pada kolom Catatan?', logic: 'Kolom Catatan punya teks dan kosong. COUNTA menghitung yang ada isinya saja.', expectedFormula: '=COUNTA(C2:C13)', hints: nRangeHints('jumlah cell terisi pada kolom Catatan', 'C2:C13') },
    { title: 'Nama Data', question: 'Berapa banyak nama data yang terisi pada kolom Nama Data?', logic: 'Semua nama order berisi teks, jadi COUNTA cocok untuk menghitung jumlah entry.', expectedFormula: '=COUNTA(A2:A13)', hints: nRangeHints('jumlah nama data yang terisi', 'A2:A13') },
    { title: 'Area Luas', question: 'Berapa banyak cell yang terisi pada area A2:D13?', logic: 'COUNTA bisa membaca area luas dan menghitung semua cell yang tidak kosong.', expectedFormula: '=COUNTA(A2:D13)', hints: nRangeHints('jumlah cell terisi di seluruh area data', 'A2:D13') },
    { title: 'Sebagian Baris', question: 'Berapa banyak cell terisi dari Order A sampai Order F pada area A2:D7?', logic: 'Range dibatasi pada enam order pertama.', expectedFormula: '=COUNTA(A2:D7)', hints: nRangeHints('jumlah cell terisi dari Order A sampai Order F', 'A2:D7') },
    { title: 'Tantangan', question: 'Berapa banyak cell terisi dari Order G sampai Order L pada area A8:D13?', logic: 'Range dibatasi pada enam order terakhir.', expectedFormula: '=COUNTA(A8:D13)', hints: nRangeHints('jumlah cell terisi dari Order G sampai Order L', 'A8:D13') }
  ],
  countblank: [
    { title: 'Dasar', question: 'Berapa banyak cell kosong pada kolom Status?', logic: 'COUNTBLANK menghitung cell yang benar-benar kosong pada range yang dipilih.', expectedFormula: '=COUNTBLANK(D2:D13)', hints: nRangeHints('jumlah cell kosong pada kolom Status', 'D2:D13', 'Hint 4: COUNTBLANK tidak menghitung teks. Dia hanya menghitung cell kosong.') },
    { title: 'Catatan', question: 'Berapa banyak cell kosong pada kolom Catatan?', logic: 'Pilih kolom Catatan karena soal meminta kosong di kolom itu.', expectedFormula: '=COUNTBLANK(C2:C13)', hints: nRangeHints('jumlah cell kosong pada kolom Catatan', 'C2:C13') },
    { title: 'Nilai Angka', question: 'Berapa banyak cell kosong pada kolom Nilai Angka?', logic: 'Kolom Nilai Angka punya beberapa cell kosong. COUNTBLANK akan menghitung kosongnya saja.', expectedFormula: '=COUNTBLANK(B2:B13)', hints: nRangeHints('jumlah cell kosong pada kolom Nilai Angka', 'B2:B13') },
    { title: 'Area Luas', question: 'Berapa banyak cell kosong pada area A2:D13?', logic: 'COUNTBLANK bisa membaca area lebih dari satu kolom.', expectedFormula: '=COUNTBLANK(A2:D13)', hints: nRangeHints('jumlah cell kosong di seluruh area data', 'A2:D13') },
    { title: 'Sebagian Baris', question: 'Berapa banyak cell kosong dari Order A sampai Order F pada area A2:D7?', logic: 'Range dibatasi pada enam order pertama.', expectedFormula: '=COUNTBLANK(A2:D7)', hints: nRangeHints('jumlah cell kosong dari Order A sampai Order F', 'A2:D7') },
    { title: 'Tantangan', question: 'Berapa banyak cell kosong dari Order G sampai Order L pada area A8:D13?', logic: 'Range dibatasi pada enam order terakhir.', expectedFormula: '=COUNTBLANK(A8:D13)', hints: nRangeHints('jumlah cell kosong dari Order G sampai Order L', 'A8:D13') }
  ],
  countif: [
    { title: 'Kategori', question: 'Berapa jumlah produk dengan kategori Digital?', logic: 'COUNTIF dipakai untuk menghitung data berdasarkan satu syarat. Di soal ini, syaratnya adalah kategori Digital.', expectedFormula: '=COUNTIF(B2:B13,"Digital")', hints: oneCriteriaHints({ goal: 'jumlah produk kategori Digital', criteriaRange: 'B2:B13', criteria: '“Digital”', functionName: 'COUNTIF' }) },
    { title: 'Kota', question: 'Berapa jumlah produk yang berasal dari kota Jakarta?', logic: 'COUNTIF mengecek satu kolom kriteria, lalu menghitung berapa baris yang cocok.', expectedFormula: '=COUNTIF(C2:C13,"Jakarta")', hints: oneCriteriaHints({ goal: 'jumlah produk dari Jakarta', criteriaRange: 'C2:C13', criteria: '“Jakarta”', functionName: 'COUNTIF' }) },
    { title: 'Kategori Fashion', question: 'Berapa jumlah produk dengan kategori Fashion?', logic: 'Range kriterianya tetap kolom Kategori, tetapi kriterianya berubah menjadi Fashion.', expectedFormula: '=COUNTIF(B2:B13,"Fashion")', hints: oneCriteriaHints({ goal: 'jumlah produk kategori Fashion', criteriaRange: 'B2:B13', criteria: '“Fashion”', functionName: 'COUNTIF' }) },
    { title: 'Qty Besar', question: 'Berapa jumlah produk dengan Qty lebih dari 10?', logic: 'COUNTIF juga bisa memakai kriteria angka seperti >10.', expectedFormula: '=COUNTIF(D2:D13,">10")', hints: oneCriteriaHints({ goal: 'jumlah produk dengan Qty lebih dari 10', criteriaRange: 'D2:D13', criteria: '“>10”', functionName: 'COUNTIF' }) },
    { title: 'Rating', question: 'Berapa jumlah produk dengan rating minimal 4,5?', logic: 'Gunakan kriteria >=4.5 pada kolom Rating.', expectedFormula: '=COUNTIF(F2:F13,">=4.5")', hints: oneCriteriaHints({ goal: 'jumlah produk dengan rating minimal 4,5', criteriaRange: 'F2:F13', criteria: '“>=4.5”', functionName: 'COUNTIF' }) },
    { title: 'Tantangan', question: 'Berapa jumlah produk dari kota Bandung?', logic: 'Fokus pada kolom Kota, lalu hitung baris yang berisi Bandung.', expectedFormula: '=COUNTIF(C2:C13,"Bandung")', hints: oneCriteriaHints({ goal: 'jumlah produk dari Bandung', criteriaRange: 'C2:C13', criteria: '“Bandung”', functionName: 'COUNTIF' }) }
  ],
  sumif: [
    { title: 'Kategori', question: 'Berapa total penjualan untuk kategori Digital?', logic: 'SUMIF menjumlahkan angka hanya dari baris yang memenuhi satu syarat.', expectedFormula: '=SUMIF(B2:B13,"Digital",E2:E13)', hints: oneCriteriaHints({ goal: 'total penjualan kategori Digital', criteriaRange: 'B2:B13', criteria: '“Digital”', valueRange: 'E2:E13', functionName: 'SUMIF' }) },
    { title: 'Kota', question: 'Berapa total penjualan untuk kota Jakarta?', logic: 'Range kriteria adalah Kota, sedangkan angka yang dijumlahkan adalah Total Penjualan.', expectedFormula: '=SUMIF(C2:C13,"Jakarta",E2:E13)', hints: oneCriteriaHints({ goal: 'total penjualan kota Jakarta', criteriaRange: 'C2:C13', criteria: '“Jakarta”', valueRange: 'E2:E13', functionName: 'SUMIF' }) },
    { title: 'Kategori Fashion', question: 'Berapa total penjualan untuk kategori Fashion?', logic: 'Kriteria berubah menjadi Fashion, tapi range angka tetap Total Penjualan.', expectedFormula: '=SUMIF(B2:B13,"Fashion",E2:E13)', hints: oneCriteriaHints({ goal: 'total penjualan kategori Fashion', criteriaRange: 'B2:B13', criteria: '“Fashion”', valueRange: 'E2:E13', functionName: 'SUMIF' }) },
    { title: 'Qty', question: 'Berapa total Qty untuk kategori Digital?', logic: 'SUMIF tidak selalu menjumlahkan uang. Di soal ini, angka yang dijumlahkan adalah Qty.', expectedFormula: '=SUMIF(B2:B13,"Digital",D2:D13)', hints: oneCriteriaHints({ goal: 'total Qty kategori Digital', criteriaRange: 'B2:B13', criteria: '“Digital”', valueRange: 'D2:D13', functionName: 'SUMIF' }) },
    { title: 'Qty Besar', question: 'Berapa total penjualan untuk produk dengan Qty lebih dari 10?', logic: 'Syaratnya ada pada kolom Qty, sedangkan angka yang dijumlahkan ada di Total Penjualan.', expectedFormula: '=SUMIF(D2:D13,">10",E2:E13)', hints: oneCriteriaHints({ goal: 'total penjualan dengan Qty lebih dari 10', criteriaRange: 'D2:D13', criteria: '“>10”', valueRange: 'E2:E13', functionName: 'SUMIF' }) },
    { title: 'Tantangan', question: 'Berapa total penjualan untuk kota Bandung?', logic: 'Cari Bandung pada kolom Kota, lalu jumlahkan Total Penjualan dari baris yang cocok.', expectedFormula: '=SUMIF(C2:C13,"Bandung",E2:E13)', hints: oneCriteriaHints({ goal: 'total penjualan kota Bandung', criteriaRange: 'C2:C13', criteria: '“Bandung”', valueRange: 'E2:E13', functionName: 'SUMIF' }) }
  ],
  averageif: [
    { title: 'Kategori', question: 'Berapa rata-rata penjualan untuk kategori Digital?', logic: 'AVERAGEIF menghitung rata-rata angka hanya dari baris yang memenuhi satu syarat.', expectedFormula: '=AVERAGEIF(B2:B13,"Digital",E2:E13)', hints: oneCriteriaHints({ goal: 'rata-rata penjualan kategori Digital', criteriaRange: 'B2:B13', criteria: '“Digital”', valueRange: 'E2:E13', functionName: 'AVERAGEIF' }) },
    { title: 'Kota', question: 'Berapa rata-rata penjualan untuk kota Jakarta?', logic: 'Range kriteria adalah Kota, sedangkan angka yang dirata-ratakan adalah Total Penjualan.', expectedFormula: '=AVERAGEIF(C2:C13,"Jakarta",E2:E13)', hints: oneCriteriaHints({ goal: 'rata-rata penjualan kota Jakarta', criteriaRange: 'C2:C13', criteria: '“Jakarta”', valueRange: 'E2:E13', functionName: 'AVERAGEIF' }) },
    { title: 'Fashion', question: 'Berapa rata-rata penjualan untuk kategori Fashion?', logic: 'Kriteria ada pada kolom Kategori. Average range tetap Total Penjualan.', expectedFormula: '=AVERAGEIF(B2:B13,"Fashion",E2:E13)', hints: oneCriteriaHints({ goal: 'rata-rata penjualan kategori Fashion', criteriaRange: 'B2:B13', criteria: '“Fashion”', valueRange: 'E2:E13', functionName: 'AVERAGEIF' }) },
    { title: 'Rating', question: 'Berapa rata-rata rating untuk kategori Digital?', logic: 'AVERAGEIF bisa merata-ratakan kolom apa pun yang berisi angka. Di sini yang dirata-ratakan adalah Rating.', expectedFormula: '=AVERAGEIF(B2:B13,"Digital",F2:F13)', hints: oneCriteriaHints({ goal: 'rata-rata rating kategori Digital', criteriaRange: 'B2:B13', criteria: '“Digital”', valueRange: 'F2:F13', functionName: 'AVERAGEIF' }) },
    { title: 'Qty Besar', question: 'Berapa rata-rata penjualan untuk produk dengan Qty lebih dari 10?', logic: 'Gunakan Qty sebagai range kriteria dan Total Penjualan sebagai average range.', expectedFormula: '=AVERAGEIF(D2:D13,">10",E2:E13)', hints: oneCriteriaHints({ goal: 'rata-rata penjualan produk dengan Qty lebih dari 10', criteriaRange: 'D2:D13', criteria: '“>10”', valueRange: 'E2:E13', functionName: 'AVERAGEIF' }) },
    { title: 'Tantangan', question: 'Berapa rata-rata penjualan untuk kota Bandung?', logic: 'Cari Bandung di kolom Kota, lalu rata-ratakan Total Penjualan dari baris yang cocok.', expectedFormula: '=AVERAGEIF(C2:C13,"Bandung",E2:E13)', hints: oneCriteriaHints({ goal: 'rata-rata penjualan kota Bandung', criteriaRange: 'C2:C13', criteria: '“Bandung”', valueRange: 'E2:E13', functionName: 'AVERAGEIF' }) }
  ],
  countifs: [
    { title: 'Digital Jakarta', question: 'Berapa jumlah produk kategori Digital yang berada di kota Jakarta?', logic: 'COUNTIFS menghitung data yang memenuhi lebih dari satu syarat sekaligus.', expectedFormula: '=COUNTIFS(B2:B13,"Digital",C2:C13,"Jakarta")', hints: twoCriteriaHints({ goal: 'jumlah produk Digital di Jakarta', criteriaRange1: 'B2:B13', criteria1: '“Digital”', criteriaRange2: 'C2:C13', criteria2: '“Jakarta”', functionName: 'COUNTIFS', countOnly: true }) },
    { title: 'Fashion Jakarta', question: 'Berapa jumlah produk kategori Fashion yang berada di kota Jakarta?', logic: 'Dua syarat harus sama-sama terpenuhi: Kategori Fashion dan Kota Jakarta.', expectedFormula: '=COUNTIFS(B2:B13,"Fashion",C2:C13,"Jakarta")', hints: twoCriteriaHints({ goal: 'jumlah produk Fashion di Jakarta', criteriaRange1: 'B2:B13', criteria1: '“Fashion”', criteriaRange2: 'C2:C13', criteria2: '“Jakarta”', functionName: 'COUNTIFS', countOnly: true }) },
    { title: 'Digital Qty', question: 'Berapa jumlah produk kategori Digital dengan Qty lebih dari 10?', logic: 'Syarat pertama berupa teks, syarat kedua berupa angka.', expectedFormula: '=COUNTIFS(B2:B13,"Digital",D2:D13,">10")', hints: twoCriteriaHints({ goal: 'jumlah produk Digital dengan Qty lebih dari 10', criteriaRange1: 'B2:B13', criteria1: '“Digital”', criteriaRange2: 'D2:D13', criteria2: '“>10”', functionName: 'COUNTIFS', countOnly: true }) },
    { title: 'Jakarta Rating', question: 'Berapa jumlah produk di Jakarta dengan rating minimal 4,5?', logic: 'COUNTIFS bisa menggabungkan syarat kota dan syarat angka rating.', expectedFormula: '=COUNTIFS(C2:C13,"Jakarta",F2:F13,">=4.5")', hints: twoCriteriaHints({ goal: 'jumlah produk Jakarta dengan rating minimal 4,5', criteriaRange1: 'C2:C13', criteria1: '“Jakarta”', criteriaRange2: 'F2:F13', criteria2: '“>=4.5”', functionName: 'COUNTIFS', countOnly: true }) },
    { title: 'Bandung Qty', question: 'Berapa jumlah produk di Bandung dengan Qty lebih dari 5?', logic: 'Baris dihitung jika kotanya Bandung dan Qty-nya lebih dari 5.', expectedFormula: '=COUNTIFS(C2:C13,"Bandung",D2:D13,">5")', hints: twoCriteriaHints({ goal: 'jumlah produk Bandung dengan Qty lebih dari 5', criteriaRange1: 'C2:C13', criteria1: '“Bandung”', criteriaRange2: 'D2:D13', criteria2: '“>5”', functionName: 'COUNTIFS', countOnly: true }) },
    { title: 'Tantangan', question: 'Berapa jumlah produk kategori Education yang berada di kota Jakarta?', logic: 'COUNTIFS akan menghitung baris yang memenuhi Education dan Jakarta sekaligus.', expectedFormula: '=COUNTIFS(B2:B13,"Education",C2:C13,"Jakarta")', hints: twoCriteriaHints({ goal: 'jumlah produk Education di Jakarta', criteriaRange1: 'B2:B13', criteria1: '“Education”', criteriaRange2: 'C2:C13', criteria2: '“Jakarta”', functionName: 'COUNTIFS', countOnly: true }) }
  ],
  sumifs: [
    { title: 'Digital Jakarta', question: 'Berapa total penjualan kategori Digital di kota Jakarta?', logic: 'SUMIFS menjumlahkan angka setelah semua syarat terpenuhi.', expectedFormula: '=SUMIFS(E2:E13,B2:B13,"Digital",C2:C13,"Jakarta")', hints: twoCriteriaHints({ goal: 'total penjualan Digital di Jakarta', resultRange: 'E2:E13', criteriaRange1: 'B2:B13', criteria1: '“Digital”', criteriaRange2: 'C2:C13', criteria2: '“Jakarta”', functionName: 'SUMIFS' }) },
    { title: 'Fashion Jakarta', question: 'Berapa total penjualan kategori Fashion di kota Jakarta?', logic: 'Range hasil adalah Total Penjualan. Dua range kriteria adalah Kategori dan Kota.', expectedFormula: '=SUMIFS(E2:E13,B2:B13,"Fashion",C2:C13,"Jakarta")', hints: twoCriteriaHints({ goal: 'total penjualan Fashion di Jakarta', resultRange: 'E2:E13', criteriaRange1: 'B2:B13', criteria1: '“Fashion”', criteriaRange2: 'C2:C13', criteria2: '“Jakarta”', functionName: 'SUMIFS' }) },
    { title: 'Digital Qty', question: 'Berapa total penjualan kategori Digital dengan Qty lebih dari 10?', logic: 'Gabungkan syarat kategori Digital dan Qty lebih dari 10, lalu jumlahkan Total Penjualan.', expectedFormula: '=SUMIFS(E2:E13,B2:B13,"Digital",D2:D13,">10")', hints: twoCriteriaHints({ goal: 'total penjualan Digital dengan Qty lebih dari 10', resultRange: 'E2:E13', criteriaRange1: 'B2:B13', criteria1: '“Digital”', criteriaRange2: 'D2:D13', criteria2: '“>10”', functionName: 'SUMIFS' }) },
    { title: 'Qty Digital Jakarta', question: 'Berapa total Qty untuk kategori Digital di kota Jakarta?', logic: 'SUMIFS tidak selalu menjumlahkan uang. Di soal ini, range hasilnya adalah Qty.', expectedFormula: '=SUMIFS(D2:D13,B2:B13,"Digital",C2:C13,"Jakarta")', hints: twoCriteriaHints({ goal: 'total Qty Digital di Jakarta', resultRange: 'D2:D13', criteriaRange1: 'B2:B13', criteria1: '“Digital”', criteriaRange2: 'C2:C13', criteria2: '“Jakarta”', functionName: 'SUMIFS' }) },
    { title: 'Bandung Qty', question: 'Berapa total penjualan di Bandung untuk produk dengan Qty lebih dari 5?', logic: 'Kota Bandung dan Qty >5 harus terpenuhi sebelum Total Penjualan dijumlahkan.', expectedFormula: '=SUMIFS(E2:E13,C2:C13,"Bandung",D2:D13,">5")', hints: twoCriteriaHints({ goal: 'total penjualan Bandung dengan Qty lebih dari 5', resultRange: 'E2:E13', criteriaRange1: 'C2:C13', criteria1: '“Bandung”', criteriaRange2: 'D2:D13', criteria2: '“>5”', functionName: 'SUMIFS' }) },
    { title: 'Tantangan', question: 'Berapa total penjualan kategori Education di kota Jakarta?', logic: 'Pakai Total Penjualan sebagai range hasil, lalu pasangan syarat Education dan Jakarta.', expectedFormula: '=SUMIFS(E2:E13,B2:B13,"Education",C2:C13,"Jakarta")', hints: twoCriteriaHints({ goal: 'total penjualan Education di Jakarta', resultRange: 'E2:E13', criteriaRange1: 'B2:B13', criteria1: '“Education”', criteriaRange2: 'C2:C13', criteria2: '“Jakarta”', functionName: 'SUMIFS' }) }
  ],
  averageifs: [
    { title: 'Digital Jakarta', question: 'Berapa rata-rata penjualan kategori Digital di kota Jakarta?', logic: 'AVERAGEIFS menghitung rata-rata setelah semua syarat terpenuhi.', expectedFormula: '=AVERAGEIFS(E2:E13,B2:B13,"Digital",C2:C13,"Jakarta")', hints: twoCriteriaHints({ goal: 'rata-rata penjualan Digital di Jakarta', resultRange: 'E2:E13', criteriaRange1: 'B2:B13', criteria1: '“Digital”', criteriaRange2: 'C2:C13', criteria2: '“Jakarta”', functionName: 'AVERAGEIFS' }) },
    { title: 'Fashion Jakarta', question: 'Berapa rata-rata penjualan kategori Fashion di kota Jakarta?', logic: 'Range rata-rata adalah Total Penjualan. Dua syaratnya Fashion dan Jakarta.', expectedFormula: '=AVERAGEIFS(E2:E13,B2:B13,"Fashion",C2:C13,"Jakarta")', hints: twoCriteriaHints({ goal: 'rata-rata penjualan Fashion di Jakarta', resultRange: 'E2:E13', criteriaRange1: 'B2:B13', criteria1: '“Fashion”', criteriaRange2: 'C2:C13', criteria2: '“Jakarta”', functionName: 'AVERAGEIFS' }) },
    { title: 'Digital Rating', question: 'Berapa rata-rata rating kategori Digital di kota Jakarta?', logic: 'Average range tidak harus Total Penjualan. Di soal ini, yang dirata-ratakan adalah Rating.', expectedFormula: '=AVERAGEIFS(F2:F13,B2:B13,"Digital",C2:C13,"Jakarta")', hints: twoCriteriaHints({ goal: 'rata-rata rating Digital di Jakarta', resultRange: 'F2:F13', criteriaRange1: 'B2:B13', criteria1: '“Digital”', criteriaRange2: 'C2:C13', criteria2: '“Jakarta”', functionName: 'AVERAGEIFS' }) },
    { title: 'Qty Digital Jakarta', question: 'Berapa rata-rata Qty kategori Digital di kota Jakarta?', logic: 'Pakai Qty sebagai average range, lalu filter dengan kategori dan kota.', expectedFormula: '=AVERAGEIFS(D2:D13,B2:B13,"Digital",C2:C13,"Jakarta")', hints: twoCriteriaHints({ goal: 'rata-rata Qty Digital di Jakarta', resultRange: 'D2:D13', criteriaRange1: 'B2:B13', criteria1: '“Digital”', criteriaRange2: 'C2:C13', criteria2: '“Jakarta”', functionName: 'AVERAGEIFS' }) },
    { title: 'Bandung Qty', question: 'Berapa rata-rata penjualan di Bandung untuk produk dengan Qty lebih dari 5?', logic: 'AVERAGEIFS menghitung rata-rata Total Penjualan untuk baris yang memenuhi Bandung dan Qty >5.', expectedFormula: '=AVERAGEIFS(E2:E13,C2:C13,"Bandung",D2:D13,">5")', hints: twoCriteriaHints({ goal: 'rata-rata penjualan Bandung dengan Qty lebih dari 5', resultRange: 'E2:E13', criteriaRange1: 'C2:C13', criteria1: '“Bandung”', criteriaRange2: 'D2:D13', criteria2: '“>5”', functionName: 'AVERAGEIFS' }) },
    { title: 'Tantangan', question: 'Berapa rata-rata penjualan kategori Education di kota Jakarta?', logic: 'Ambil Total Penjualan sebagai average range, lalu filter Education dan Jakarta.', expectedFormula: '=AVERAGEIFS(E2:E13,B2:B13,"Education",C2:C13,"Jakarta")', hints: twoCriteriaHints({ goal: 'rata-rata penjualan Education di Jakarta', resultRange: 'E2:E13', criteriaRange1: 'B2:B13', criteria1: '“Education”', criteriaRange2: 'C2:C13', criteria2: '“Jakarta”', functionName: 'AVERAGEIFS' }) }
  ]
};

const levels = Object.fromEntries(
  Object.entries(exercises).map(([id, items]) => [id, items.map((item, index) => makeExercise(id, index, item))])
);

export const batch01BasicCalculationLevels = levels;
export const batch01BasicCalculationExercises = Object.fromEntries(
  Object.entries(levels).map(([id, items]) => [id, items[0]])
);
export const batch01BasicFormulaIds = Object.keys(levels);
