import React, { useMemo, useState } from 'react';
import { FUNCTION_NAMES } from '../engine/functions.js';
import { REFERENCE, REFERENCE_BY_NAME } from '../content/reference.js';
import { localizeFormula } from '../lib/text.jsx';

const ORDER = new Map(REFERENCE.map((r, i) => [r.name, i]));

const wordAt = (text, caret) => {
  const m = /([A-Za-z][A-Za-z0-9.]*)$/.exec(text.slice(0, caret));
  if (!m) return null;
  const before = text[caret - m[1].length - 1];
  if (before && /[A-Za-z0-9_.$!']/.test(before)) return null;
  if (/^[A-Za-z]{1,3}\d+$/.test(m[1])) return null;
  return { word: m[1], start: caret - m[1].length };
};

// Mencari nama fungsi yang sedang "terbuka" di posisi kursor, untuk menampilkan bantuan sintaks.
const currentFunction = (text, caret) => {
  let depth = 0;
  let inStr = false;
  const stack = [];
  for (let i = 0; i < caret; i += 1) {
    const ch = text[i];
    if (ch === '"') inStr = !inStr;
    if (inStr) continue;
    if (ch === '(') {
      const m = /([A-Za-z][A-Za-z0-9.]*)$/.exec(text.slice(0, i));
      stack.push(m ? m[1].toUpperCase() : null);
      depth += 1;
    } else if (ch === ')') {
      stack.pop();
      depth -= 1;
    }
  }
  for (let i = stack.length - 1; i >= 0; i -= 1) if (stack[i]) return stack[i];
  return null;
};

export default function FormulaBar({
  value, onChange, onSubmit, inputRef, label, locale, placeholder, disabled, onFocusChange, autoFocus
}) {
  const [caret, setCaret] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  const sync = (el) => setCaret(el.selectionStart ?? value.length);

  const suggestions = useMemo(() => {
    if (dismissed || !value.startsWith('=')) return [];
    const w = wordAt(value, caret);
    if (!w || w.word.length < 2) return [];
    const up = w.word.toUpperCase();
    const list = FUNCTION_NAMES.filter((n) => n.startsWith(up) && n !== up);
    list.sort((a, b) => (ORDER.get(a) ?? 999) - (ORDER.get(b) ?? 999) || a.length - b.length);
    return list.slice(0, 6).map((name) => ({ name, start: w.start }));
  }, [value, caret, dismissed]);

  const fn = useMemo(() => (value.startsWith('=') ? currentFunction(value, caret) : null), [value, caret]);
  const info = fn ? REFERENCE_BY_NAME[fn] : null;

  const accept = (s) => {
    const el = inputRef.current;
    const end = el.selectionStart ?? caret;
    const nv = `${value.slice(0, s.start)}${s.name}(${value.slice(end)}`;
    const pos = s.start + s.name.length + 1;
    onChange(nv);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(pos, pos);
      setCaret(pos);
    });
  };

  // F4: memutar jenis referensi (A1 -> $A$1 -> A$1 -> $A1) pada sel di dekat kursor, seperti di Excel.
  const cycleReference = () => {
    const el = inputRef.current;
    const pos = el.selectionStart ?? caret;
    const re = /\$?[A-Za-z]{1,3}\$?\d+/g;
    let m;
    while ((m = re.exec(value))) {
      const start = m.index;
      const end = start + m[0].length;
      if (pos < start || pos > end) continue;
      const [, ac, col, ar, row] = /^(\$?)([A-Za-z]{1,3})(\$?)(\d+)$/.exec(m[0]);
      const stage = (ac ? 1 : 0) + (ar ? 2 : 0);
      const nextStage = { 0: 3, 3: 2, 2: 1, 1: 0 }[stage];
      const replaced = `${nextStage & 1 ? '$' : ''}${col}${nextStage & 2 ? '$' : ''}${row}`;
      onChange(value.slice(0, start) + replaced + value.slice(end));
      requestAnimationFrame(() => {
        const np = start + replaced.length;
        el.setSelectionRange(np, np);
        setCaret(np);
      });
      return;
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'F4') {
      e.preventDefault();
      cycleReference();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit && onSubmit();
    } else if (e.key === 'Tab' && suggestions.length) {
      e.preventDefault();
      accept(suggestions[0]);
    } else if (e.key === 'Escape') {
      setDismissed(true);
    }
  };

  return (
    <div>
      <div className="flex items-stretch overflow-hidden rounded-xl border border-line bg-surface focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/30">
        <div className="grid min-w-[4.25rem] place-items-center border-r border-line bg-sunken px-3 text-sm font-semibold text-muted" aria-label="Sel yang diisi">
          {label}
        </div>
        <div className="grid place-items-center px-3 font-serif text-lg italic text-brand" aria-hidden="true">fx</div>
        <input
          ref={inputRef}
          value={value}
          disabled={disabled}
          autoFocus={autoFocus}
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          aria-label="Kotak rumus"
          placeholder={placeholder}
          className="formula-input min-w-0 flex-1 bg-transparent px-2 py-3 text-ink outline-none placeholder:text-muted/70 disabled:opacity-70"
          onChange={(e) => {
            setDismissed(false);
            onChange(e.target.value);
            sync(e.target);
          }}
          onKeyDown={onKeyDown}
          onKeyUp={(e) => sync(e.target)}
          onClick={(e) => sync(e.target)}
          onSelect={(e) => sync(e.target)}
          onFocus={(e) => {
            onFocusChange && onFocusChange(true);
            sync(e.target);
          }}
          onBlur={() => onFocusChange && onFocusChange(false)}
        />
      </div>

      {suggestions.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5" role="listbox" aria-label="Saran fungsi">
          {suggestions.map((s, i) => (
            <button
              key={s.name}
              type="button"
              role="option"
              onMouseDown={(e) => {
                e.preventDefault();
                accept(s);
              }}
              className="rounded-lg border border-line bg-surface px-2.5 py-1 text-left text-xs hover:bg-brand-soft"
            >
              <span className="font-mono font-semibold text-brand">{s.name}</span>
              <span className="ml-1.5 text-muted">{REFERENCE_BY_NAME[s.name]?.desc.split('.')[0].slice(0, 46)}</span>
              {i === 0 && <span className="ml-1.5 rounded bg-sunken px-1 text-[0.65rem] text-muted">Tab</span>}
            </button>
          ))}
        </div>
      )}

      {info && suggestions.length === 0 && (
        <p className="mt-2 rounded-lg bg-info-soft px-3 py-2 text-xs text-info">
          <span className="font-mono font-semibold">{localizeFormula(info.syntax, locale)}</span>
          <span className="ml-2 opacity-90">{info.desc}</span>
        </p>
      )}
    </div>
  );
}
