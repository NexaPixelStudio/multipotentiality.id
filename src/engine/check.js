import { createContext, evaluate, evalAst, analyze, shiftAst, ParseError, XlError } from './evaluator.js';
import { FUNCTION_NAMES } from './functions.js';
import { parseAddr, addr } from './refs.js';
import { formatCell } from './values.js';

// ---------- perbandingan nilai ----------
export function sameValue(a, b) {
  if (Array.isArray(b)) {
    if (!Array.isArray(a) || a.length !== b.length || a[0].length !== b[0].length) return false;
    return b.every((row, i) => row.every((v, j) => sameValue(a[i][j], v)));
  }
  if (Array.isArray(a)) return a.length === 1 && a[0].length === 1 && sameValue(a[0][0], b);
  if (a instanceof XlError || b instanceof XlError) return a instanceof XlError && b instanceof XlError && a.code === b.code;
  if (typeof a === 'number' && typeof b === 'number') return Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(b));
  if ((a === null || a === '') && (b === null || b === '')) return true;
  return a === b;
}

export const display = (v, fmt, locale) => {
  if (Array.isArray(v)) return v.map((r) => r.map((x) => formatCell(x, fmt, locale)).join(' | ')).join('  /  ');
  return formatCell(v, fmt, locale);
};

// ---------- saran nama fungsi ----------
const dist = (a, b) => {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j += 1) dp[0][j] = j;
  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
  }
  return dp[a.length][b.length];
};
export const suggestFunction = (name) => {
  let best = null;
  let bd = 3;
  for (const f of FUNCTION_NAMES) {
    const d = dist(name, f);
    if (d < bd) { bd = d; best = f; }
  }
  return best;
};

// ---------- penjelasan error ----------
export const ERROR_HELP = {
  '#DIV/0!': 'Ada pembagian dengan 0 atau dengan sel kosong. Cek sel yang jadi pembagi.',
  '#VALUE!': 'Ada nilai yang tipenya salah, misalnya teks dipakai untuk menghitung. Cek sel yang kamu pakai.',
  '#REF!': 'Rumus menunjuk ke sel yang tidak ada, atau ada kolom yang lebih kecil dari angka kolom yang diminta.',
  '#NAME?': 'Excel tidak mengenal nama yang kamu tulis. Biasanya nama fungsi salah ketik, atau teks lupa diberi tanda kutip.',
  '#N/A': 'Nilai yang dicari tidak ditemukan. Cek ejaan nilai yang dicari dan range tempat mencarinya.',
  '#NUM!': 'Angka tidak valid untuk perhitungan itu, misalnya akar dari bilangan negatif.',
  '#CALC!': 'Hasil perhitungan kosong atau tidak bisa dihitung. Cek kriteria atau datanya.'
};

const sheetCtx = (ex, locale) => createContext(ex.sheets, { locale, now: () => new Date(Date.UTC(2025, 5, 15)) });

function parseTarget(ex) {
  const p = parseAddr(ex.target);
  const sheetName = ex.targetSheet || ex.sheets[0].name;
  return { ...p, sheetName };
}

function runOnce(ex, input, locale, preview = false) {
  const text = input.trim();
  const t = parseTarget(ex);
  const ctx = sheetCtx(ex, locale);
  let ev;
  try {
    ev = evaluate(text, ctx, t.sheetName, { locale, cur: { r: t.r, c: t.c } });
  } catch (e) {
    if (e instanceof ParseError) return { status: 'syntax', kind: e.kind, message: e.message };
    throw e;
  }
  const info = analyze(ev.ast);
  const bad = info.issues[0];
  if (bad?.kind === 'unknown-fn') {
    const s = suggestFunction(bad.name);
    return { status: 'unknown-fn', name: bad.name, suggestion: s, message: `Excel tidak mengenal fungsi "${bad.name}".${s ? ` Maksudmu ${s}?` : ' Cek ejaannya.'}` };
  }
  if (bad?.kind === 'argcount') {
    const need = bad.min === bad.max ? `${bad.min}` : `${bad.min}${bad.max > 20 ? ' atau lebih' : ` sampai ${bad.max}`}`;
    return { status: 'argcount', name: bad.name, message: `${bad.name} butuh ${need} argumen, tapi kamu menulis ${bad.got}. Cek pemisah argumen: Excel Indonesia memakai ; (titik koma).` };
  }
  if (!preview && ex.mustUse?.length && !ex.mustUse.some((f) => info.fns.has(f))) {
    return { status: 'mustuse', message: `Latihan ini ingin kamu berlatih ${ex.mustUse.join(' / ')}. Coba pakai fungsi itu ya.` };
  }
  if (!preview && ex.forbid?.length) {
    const used = ex.forbid.find((f) => info.fns.has(f));
    if (used) return { status: 'forbid', message: `Untuk soal ini, coba selesaikan tanpa ${used}.` };
  }
  if (!preview && !ex.allowNoRef && info.refs === 0) {
    return { status: 'hardcode', message: 'Rumusmu belum mengambil data dari tabel. Gunakan alamat sel (misalnya B2) supaya hasilnya otomatis berubah kalau datanya berubah.' };
  }

  const fill = ex.fillTo ? parseAddr(ex.fillTo) : null;
  const nRows = fill ? fill.r - t.r + 1 : 1;
  const nCols = fill ? fill.c - t.c + 1 : 1;
  let value;
  if (fill) {
    value = [];
    for (let i = 0; i < nRows; i += 1) {
      const row = [];
      for (let j = 0; j < nCols; j += 1) {
        const ast = i === 0 && j === 0 ? ev.ast : shiftAst(ev.ast, i, j);
        const v = evalAst(ast, ctx, t.sheetName, { r: t.r + i, c: t.c + j });
        row.push(Array.isArray(v) ? v[0][0] : v);
      }
      value.push(row);
    }
  } else value = evalAst(ev.ast, ctx, t.sheetName, { r: t.r, c: t.c });
  return { status: 'evaluated', value, ast: ev.ast, info, fill: Boolean(fill), target: t };
}

const firstError = (v) => {
  const list = Array.isArray(v) ? v.flat() : [v];
  return list.find((x) => x instanceof XlError);
};

function judge(ex, run, locale) {
  if (run.status !== 'evaluated') return run;
  const { value } = run;
  const fmt = ex.resultFmt;
  const shown = display(value, fmt, locale);
  const err = firstError(value);
  if (err) {
    return { status: 'error', code: err.code, value, shown, message: `Rumusmu menghasilkan ${err.code}. ${ERROR_HELP[err.code] || ''}` };
  }
  const expected = ex.expect;
  const expectedShown = display(expected, fmt, locale);
  if (sameValue(value, expected)) return { status: 'correct', value, shown, expectedShown, ast: run.ast };
  const result = { status: 'wrong', value, shown, expectedShown };

  if (run.fill) {
    const t = run.target;
    let bad = null;
    expected.forEach((row, i) => row.forEach((v, j) => {
      if (!bad && !sameValue(value[i][j], v)) bad = [i, j];
    }));
    const [bi, bj] = bad;
    const cellAddr = addr(t.r + bi, t.c + bj);
    const first = bi === 0 && bj === 0;
    result.message = first
      ? 'Hasil di sel pertama belum sesuai. Cek lagi sel-sel yang kamu pakai.'
      : `Sel pertama sudah benar, tapi setelah rumus disalin, ${cellAddr} menghasilkan ${display(value[bi][bj], fmt, locale)} padahal seharusnya ${display(expected[bi][bj], fmt, locale)}. Cek bagian yang harus tetap (pakai $) dan bagian yang boleh bergeser.`;
    return result;
  }

  const custom = (ex.wrongs || []).find((w) => sameValue(value, w.value));
  if (custom) {
    result.message = custom.msg;
    return result;
  }
  const got = Array.isArray(value) ? value[0][0] : value;
  const want = Array.isArray(expected) ? expected[0][0] : expected;
  if (Array.isArray(expected) && !Array.isArray(value)) result.message = 'Soal ini mengharapkan hasil berupa beberapa sel (daftar). Rumusmu hanya menghasilkan satu nilai.';
  else if (!Array.isArray(expected) && Array.isArray(value) && value.flat().length > 1) result.message = 'Rumusmu menghasilkan beberapa nilai sekaligus, padahal soal ini hanya butuh satu hasil.';
  else if (typeof want === 'number' && typeof got === 'string') result.message = 'Hasilnya berupa teks, padahal soal ini mengharapkan angka. Cek apakah ada tanda kutip atau fungsi teks yang tidak perlu.';
  else if (typeof want === 'string' && typeof got === 'number') result.message = 'Hasilnya berupa angka, padahal soal ini mengharapkan teks. Cek apakah kamu mengambil kolom yang tepat.';
  else if (typeof want === 'string' && typeof got === 'string') result.message = 'Teksnya hampir benar? Perhatikan huruf besar/kecil, spasi, dan tanda baca. Excel membandingkan teks apa adanya.';
  else if (typeof want === 'number' && typeof got === 'number') {
    result.message = 'Angkanya belum sesuai. Cek lagi range yang kamu pilih dan syarat dari soal.';
    if (Math.abs(got - want) < 1 && !Number.isInteger(want)) result.message += ' Perhatikan juga pembulatan.';
  } else result.message = 'Hasilnya belum sesuai dengan yang diminta soal.';
  return result;
}

// Titik masuk untuk soal bertipe "formula".
export function checkFormula(ex, input, locale = 'id') {
  const text = (input || '').trim();
  if (!text) return { status: 'empty', message: 'Kotak rumus masih kosong. Ketik rumusmu dulu, ya.' };
  if (!text.startsWith('=')) return { status: 'noequals', message: 'Rumus di Excel selalu diawali tanda sama dengan (=). Tambahkan = di paling depan.' };

  const primary = judge(ex, runOnce(ex, text, locale), locale);
  if (primary.status === 'correct') return primary;
  // Jika tidak cocok, coba baca dengan gaya penulisan lain (; vs ,) supaya pengguna Excel versi mana pun tetap dinilai adil.
  const other = locale === 'id' ? 'en' : 'id';
  let secondary = null;
  try {
    secondary = judge(ex, runOnce(ex, text, other), other);
  } catch {
    secondary = null;
  }
  if (secondary && secondary.status === 'correct') {
    return {
      ...secondary,
      note: locale === 'id'
        ? 'Catatan: kamu memakai koma (,) sebagai pemisah argumen. Itu benar untuk Excel berbahasa Inggris. Di Excel versi Indonesia, pemisahnya titik koma (;).'
        : 'Catatan: kamu memakai titik koma (;) sebagai pemisah. Itu benar untuk Excel versi Indonesia. Di Excel berbahasa Inggris, pemisahnya koma (,).'
    };
  }
  return primary;
}

// untuk pratinjau langsung saat mengetik
export function previewFormula(ex, input, locale = 'id') {
  const text = (input || '').trim();
  if (!text.startsWith('=') || text.length < 2) return null;
  try {
    const run = runOnce(ex, text, locale, true);
    if (run.status !== 'evaluated') return null;
    const err = firstError(run.value);
    return { ok: !err, text: err ? err.code : display(run.fill ? run.value[0][0] : run.value, ex.resultFmt, locale), value: run.value };
  } catch {
    return null;
  }
}
