import { tokenize } from '../engine/parser.js';
import { colToNum } from '../engine/refs.js';

const CELL_RE = /^\$?([A-Za-z]{1,3})\$?(\d{1,7})$/;
const COL_RE = /^\$?([A-Za-z]{1,3})$/;
const ROW_RE = /^\$?(\d{1,7})$/;

// batas lembar kerja Excel; dipakai untuk kolom/baris penuh (B:B atau 2:2)
export const MAX_ROW = 1048576;
export const MAX_COL = 16384;

const toCell = (word) => {
  const m = CELL_RE.exec(word);
  return m ? { c: colToNum(m[1]), r: Number(m[2]) } : null;
};

const toCol = (word) => {
  const m = COL_RE.exec(word);
  return m ? colToNum(m[1]) : null;
};

const toRow = (tk) => {
  if (!tk) return null;
  if (tk.t === 'num') return Number.isInteger(tk.v) && tk.v >= 1 ? tk.v : null;
  const m = tk.t === 'word' ? ROW_RE.exec(tk.v) : null;
  return m && Number(m[1]) >= 1 ? Number(m[1]) : null;
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
    const next = toks[i + 1];
    const isColon = next && next.t === 'op' && next.v === ':';
    // baris penuh: 2:5
    const row1 = toRow(tk);
    if (row1 !== null && isColon) {
      const row2 = toRow(toks[i + 2]);
      if (row2 !== null) {
        out.push({ sheet: tk.sheet || targetSheet, r1: Math.min(row1, row2), c1: 1, r2: Math.max(row1, row2), c2: MAX_COL });
        i += 2;
      }
      continue;
    }
    if (tk.t !== 'word') continue;
    if (next && next.t === 'op' && next.v === '(') continue; // nama fungsi, bukan sel
    // kolom penuh: B:B
    const col1 = toCol(tk.v);
    if (col1 !== null && isColon) {
      const col2 = toks[i + 2] && toks[i + 2].t === 'word' ? toCol(toks[i + 2].v) : null;
      if (col2 !== null) {
        out.push({ sheet: tk.sheet || targetSheet, r1: 1, c1: Math.min(col1, col2), r2: MAX_ROW, c2: Math.max(col1, col2) });
        i += 2;
      }
      continue;
    }
    const a = toCell(tk.v);
    if (!a) continue;
    const sheet = tk.sheet || targetSheet;
    const other = isColon && toks[i + 2] && toks[i + 2].t === 'word' ? toCell(toks[i + 2].v) : null;
    if (other) {
      out.push({ sheet, r1: Math.min(a.r, other.r), c1: Math.min(a.c, other.c), r2: Math.max(a.r, other.r), c2: Math.max(a.c, other.c) });
      i += 2;
    } else {
      out.push({ sheet, r1: a.r, c1: a.c, r2: a.r, c2: a.c });
    }
  }
  return out;
}
