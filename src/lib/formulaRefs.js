import { tokenize } from '../engine/parser.js';
import { colToNum } from '../engine/refs.js';

const CELL_RE = /^\$?([A-Za-z]{1,3})\$?(\d{1,7})$/;

const toCell = (word) => {
  const m = CELL_RE.exec(word);
  return m ? { c: colToNum(m[1]), r: Number(m[2]) } : null;
};

// Memecah rumus menjadi token. Saat rumus belum lengkap (misalnya tanda kutip belum ditutup),
// bagian akhir dipangkas sampai bagian depannya dapat dibaca, supaya penanda tetap muncul.
function lenientTokens(body, locale) {
  for (let end = body.length; end > 0; end -= 1) {
    try {
      return tokenize(body.slice(0, end), locale);
    } catch {
      // coba lagi dengan teks yang lebih pendek
    }
  }
  return [];
}

// Daftar sel dan range yang disebut di dalam rumus, berurutan sesuai kemunculan.
// Tidak membutuhkan rumus yang valid, sehingga "=B2+" tetap menandai B2 selagi pengguna mengetik.
export function formulaRefs(input, locale, targetSheet) {
  const text = String(input || '').trim();
  if (!text.startsWith('=')) return [];
  const toks = lenientTokens(text.slice(1), locale);
  const out = [];
  for (let i = 0; i < toks.length; i += 1) {
    const tk = toks[i];
    if (tk.t !== 'word') continue;
    const next = toks[i + 1];
    if (next && next.t === 'op' && next.v === '(') continue; // nama fungsi, bukan sel
    const a = toCell(tk.v);
    if (!a) continue;
    const sheet = tk.sheet || targetSheet;
    const colon = next && next.t === 'op' && next.v === ':';
    const other = colon && toks[i + 2] && toks[i + 2].t === 'word' ? toCell(toks[i + 2].v) : null;
    if (other) {
      out.push({ sheet, r1: Math.min(a.r, other.r), c1: Math.min(a.c, other.c), r2: Math.max(a.r, other.r), c2: Math.max(a.c, other.c) });
      i += 2;
    } else {
      out.push({ sheet, r1: a.r, c1: a.c, r2: a.r, c2: a.c });
    }
  }
  return out;
}
