import { createContext, evaluate } from '../engine/evaluator.js';
import { XlError, general } from '../engine/values.js';

// Generator soal "Tebak Hasil". Jawaban benar dan pengecoh dihitung oleh mesin rumus yang sama
// dengan latihan, jadi hasilnya selalu konsisten dengan perilaku Excel di situs ini.

const SHEET = 'Soal';
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const int = (lo, hi) => lo + Math.floor(Math.random() * (hi - lo + 1));
const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const uniqueNums = (n, lo, hi) => {
  const s = new Set();
  while (s.size < n) s.add(int(lo, hi));
  return [...s];
};

export function calc(rows, formula) {
  const def = { name: SHEET, rows, fmt: {} };
  const ctx = createContext([def], { locale: 'en' });
  try {
    const { value: v } = evaluate(formula, ctx, SHEET, { locale: 'en', cur: { r: 99, c: 9 } });
    return v instanceof XlError ? String(v.code || '#ERROR') : v;
  } catch {
    return '#ERROR';
  }
}

export const show = (v) => (typeof v === 'boolean' ? (v ? 'TRUE' : 'FALSE') : typeof v === 'number' ? general(Math.round(v * 1e9) / 1e9, 'id') : String(v));

const TEMPLATES = [
  {
    level: 1,
    make() {
      const nums = uniqueNums(5, 3, 40);
      const fn = pick(['SUM', 'AVERAGE', 'MAX', 'MIN', 'COUNT']);
      const note = { SUM: 'SUM menjumlahkan semua angka di rentang.', AVERAGE: 'AVERAGE menghitung rata-rata: jumlah dibagi banyaknya angka.', MAX: 'MAX mengambil angka terbesar.', MIN: 'MIN mengambil angka terkecil.', COUNT: 'COUNT menghitung banyaknya sel yang berisi angka.' }[fn];
      return { rows: [['Nilai'], ...nums.map((n) => [n])], formula: `=${fn}(A2:A6)`, siblings: ['SUM', 'AVERAGE', 'MAX', 'MIN', 'COUNT'].filter((f) => f !== fn).map((f) => `=${f}(A2:A6)`), note };
    }
  },
  {
    level: 1,
    make() {
      const a = int(2, 9), b = int(2, 9), c = int(2, 5);
      return {
        rows: [['']], formula: `=${a}+${b}*${c}`,
        siblings: [`=(${a}+${b})*${c}`, `=${a}*${b}+${c}`, `=${a}+${b}+${c}`, `=${a}*${b}*${c}`],
        note: 'Perkalian dikerjakan lebih dulu daripada penjumlahan, kecuali ada kurung.'
      };
    }
  },
  {
    level: 1,
    make() {
      const x = (Math.random() * 90 + 10).toFixed(0) / 1 + int(1, 9) / 10 + int(1, 9) / 100;
      const r = Math.round(x * 100) / 100;
      const fn = pick(['ROUND', 'ROUNDDOWN', 'ROUNDUP']);
      const note = { ROUND: 'ROUND membulatkan ke angka terdekat.', ROUNDDOWN: 'ROUNDDOWN selalu membulatkan ke bawah (mendekati nol).', ROUNDUP: 'ROUNDUP selalu membulatkan ke atas (menjauhi nol).' }[fn];
      return { rows: [['Angka'], [r]], formula: `=${fn}(A2,1)`, siblings: ['ROUND', 'ROUNDDOWN', 'ROUNDUP'].filter((f) => f !== fn).map((f) => `=${f}(A2,1)`).concat(['=INT(A2)']), note };
    }
  },
  {
    level: 2,
    make() {
      const cats = ['Minuman', 'Makanan'];
      const rows = [['Produk', 'Kategori', 'Qty']];
      const names = shuffle(['Kopi', 'Teh', 'Roti', 'Kue', 'Susu', 'Mie']).slice(0, 5);
      names.forEach((n, i) => rows.push([n, i < 2 ? cats[i % 2] : pick(cats), int(2, 15)]));
      const target = pick(cats);
      const other = cats.find((c) => c !== target);
      return {
        rows, formula: `=SUMIF(B2:B6,"${target}",C2:C6)`,
        siblings: [`=SUMIF(B2:B6,"${other}",C2:C6)`, `=COUNTIF(B2:B6,"${target}")`, '=SUM(C2:C6)', `=MAX(C2:C6)`],
        note: 'SUMIF menjumlahkan kolom Qty hanya pada baris yang kategorinya sesuai kriteria.'
      };
    }
  },
  {
    level: 2,
    make() {
      const s = int(40, 99);
      return {
        rows: [['Nilai'], [s]],
        formula: '=IF(A2>=85,"A",IF(A2>=70,"B",IF(A2>=55,"C","D")))',
        siblings: ['="A"', '="B"', '="C"', '="D"'],
        note: 'IF bersarang diperiksa dari atas ke bawah. Cabang pertama yang benar akan dipakai.'
      };
    }
  },
  {
    level: 2,
    make() {
      const words = ['Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang', 'Makassar'];
      const w = pick(words);
      const n = int(2, 4);
      const fn = pick(['LEFT', 'RIGHT', 'LEN', 'UPPER']);
      const formula = fn === 'LEN' || fn === 'UPPER' ? `=${fn}(A2)` : `=${fn}(A2,${n})`;
      const note = { LEFT: 'LEFT mengambil karakter dari sisi kiri.', RIGHT: 'RIGHT mengambil karakter dari sisi kanan.', LEN: 'LEN menghitung jumlah karakter.', UPPER: 'UPPER mengubah semua huruf menjadi kapital.' }[fn];
      return { rows: [['Kota'], [w]], formula, siblings: [`=LEFT(A2,${n})`, `=RIGHT(A2,${n})`, '=LEN(A2)', '=UPPER(A2)', `=MID(A2,2,${n})`].filter((f) => f !== formula), note };
    }
  },
  {
    level: 3,
    make() {
      const rows = [['Kode', 'Produk', 'Harga'], ['K01', 'Kopi', 20000], ['K02', 'Teh', 15000], ['K03', 'Roti', 12000], ['K04', 'Kue', 30000]];
      const code = pick(['K01', 'K02', 'K03', 'K04']);
      const idx = pick([2, 3]);
      return {
        rows, formula: `=VLOOKUP("${code}",A2:C5,${idx},FALSE)`,
        siblings: [`=VLOOKUP("${code}",A2:C5,${idx === 2 ? 3 : 2},FALSE)`, `=VLOOKUP("${code}",A2:C5,1,FALSE)`, `=INDEX(C2:C5,${int(1, 4)})`],
        note: 'VLOOKUP mencari kode di kolom pertama, lalu mengambil nilai dari kolom ke-N pada baris yang sama.'
      };
    }
  },
  {
    level: 3,
    make() {
      const nums = uniqueNums(6, 5, 60);
      const t = int(20, 40);
      return {
        rows: [['Nilai'], ...nums.map((n) => [n])], formula: `=COUNTIF(A2:A7,">${t}")`,
        siblings: [`=COUNTIF(A2:A7,">=${t}")`, `=SUMIF(A2:A7,">${t}")`, `=COUNTIF(A2:A7,"<${t}")`, '=COUNT(A2:A7)'],
        note: 'COUNTIF menghitung banyaknya sel yang memenuhi kriteria. Tanda ">" berarti lebih besar dari (tidak termasuk sama dengan).'
      };
    }
  }
];

// Membuat satu soal: { rows, formula, options: [teks], answerIndex, note }
export function makeQuestion(tpl) {
  for (let tries = 0; tries < 20; tries += 1) {
    const t = tpl.make();
    const correct = calc(t.rows, t.formula);
    if (typeof correct === 'string' && correct.startsWith('#')) continue;
    const correctText = show(correct);
    const seen = new Set([correctText]);
    const wrong = [];
    for (const f of shuffle(t.siblings)) {
      const text = show(calc(t.rows, f));
      if (seen.has(text) || text.startsWith('#')) continue;
      seen.add(text);
      wrong.push(text);
    }
    // jika pengecoh kurang, buat dari angka di dekat jawaban benar
    let guard = 0;
    while (wrong.length < 3 && typeof correct === 'number' && guard < 40) {
      guard += 1;
      const d = pick([-10, -5, -2, -1, 1, 2, 5, 10]);
      const text = show(Math.abs(correct) < 5 ? correct + d / 5 : correct + d);
      if (seen.has(text)) continue;
      seen.add(text);
      wrong.push(text);
    }
    if (wrong.length < (typeof correct === 'string' ? 2 : 3)) continue;
    const options = shuffle([correctText, ...wrong.slice(0, 3)]);
    return { rows: t.rows, formula: t.formula, options, answerIndex: options.indexOf(correctText), answer: correctText, note: t.note };
  }
  return null;
}

// 5 soal dengan tingkat naik bertahap
export function makeRound() {
  const order = [1, 1, 2, 2, 3];
  const used = new Set();
  const out = [];
  order.forEach((lv) => {
    const pool = TEMPLATES.filter((t) => t.level === lv);
    for (let i = 0; i < 12; i += 1) {
      const tpl = pick(pool);
      const q = makeQuestion(tpl);
      if (q && !used.has(q.formula + JSON.stringify(q.rows))) {
        used.add(q.formula + JSON.stringify(q.rows));
        out.push({ ...q, level: lv });
        break;
      }
    }
  });
  return out;
}
