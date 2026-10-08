import React from 'react';

// Mengubah rumus gaya Inggris (koma pemisah, titik desimal) menjadi gaya yang dipilih pengguna.
export function localizeFormula(formula, locale) {
  if (locale !== 'id' || typeof formula !== 'string') return formula;
  let out = '';
  let inStr = false;
  for (let i = 0; i < formula.length; i += 1) {
    const ch = formula[i];
    if (ch === '"') inStr = !inStr;
    if (!inStr) {
      if (ch === ',') {
        out += ';';
        continue;
      }
      if (ch === '.' && /\d/.test(formula[i - 1] || '') && /\d/.test(formula[i + 1] || '')) {
        out += ',';
        continue;
      }
    }
    out += ch;
  }
  return out;
}

// Mengubah teks "Tulis: =..." di petunjuk agar mengikuti gaya yang dipilih.
export function localizeText(text, locale) {
  if (typeof text !== 'string') return text;
  return text.replace(/(Tulis: )(=.*)$/, (m, a, b) => a + localizeFormula(b, locale));
}

const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`)/g;

// Teks sederhana dengan **tebal** dan `kode`.
export function Rich({ text, locale = 'id', className = '' }) {
  if (text === undefined || text === null) return null;
  const parts = String(text).split(TOKEN).filter((s) => s !== '');
  return (
    <span className={`rich ${className}`}>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) return <strong key={i} className="font-semibold text-ink">{part.slice(2, -2)}</strong>;
        if (part.startsWith('`') && part.endsWith('`')) {
          const code = part.slice(1, -1);
          return <code key={i}>{code.startsWith('=') ? localizeFormula(code, locale) : code}</code>;
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </span>
  );
}

// Pengacak deterministik (supaya urutan opsi pilihan ganda stabil per soal)
export function seededShuffle(arr, seedStr) {
  let h = 2166136261;
  for (const c of seedStr) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  const rnd = () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rnd() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
