import { useCallback, useEffect, useRef, useState } from 'react';
import { addr } from '../engine/refs.js';

const OPENERS = '=(,;+-*/^&<>:';

// Memungkinkan pengguna mengklik / menyeret sel di tabel untuk menyisipkan alamatnya ke dalam rumus,
// seperti di Excel sungguhan.
export function useRefPicker({ inputRef, value, setValue, homeSheet }) {
  const valueRef = useRef(value);
  valueRef.current = value;
  const last = useRef(null); // segmen teks hasil klik terakhir {start, end}
  const drag = useRef(null);
  const [live, setLive] = useState(null);

  const refText = useCallback((sheet, r1, c1, r2, c2) => {
    const a = addr(r1, c1);
    const t = r1 === r2 && c1 === c2 ? a : `${a}:${addr(r2, c2)}`;
    if (sheet === homeSheet) return t;
    return `${/[^A-Za-z0-9_]/.test(sheet) ? `'${sheet}'` : sheet}!${t}`;
  }, [homeSheet]);

  const write = useCallback((start, end, text) => {
    const el = inputRef.current;
    const v = valueRef.current;
    const nv = v.slice(0, start) + text + v.slice(end);
    last.current = { start, end: start + text.length };
    valueRef.current = nv;
    setValue(nv);
    requestAnimationFrame(() => {
      if (!el) return;
      el.focus();
      el.setSelectionRange(last.current.end, last.current.end);
    });
  }, [inputRef, setValue]);

  const canPick = useCallback(() => {
    const el = inputRef.current;
    const v = valueRef.current;
    if (!el || document.activeElement !== el || !v.startsWith('=')) return false;
    const pos = el.selectionStart ?? v.length;
    if (last.current && last.current.end === pos) return true;
    const before = v.slice(0, pos).trimEnd();
    return before.length > 0 && OPENERS.includes(before[before.length - 1]);
  }, [inputRef]);

  useEffect(() => {
    const up = () => {
      drag.current = null;
      setLive(null);
    };
    window.addEventListener('mouseup', up);
    return () => window.removeEventListener('mouseup', up);
  }, []);

  const onDown = useCallback((sheet, r, c, e) => {
    if (!canPick()) return false;
    e.preventDefault();
    const el = inputRef.current;
    const pos = el.selectionStart ?? valueRef.current.length;
    const text = refText(sheet, r, c, r, c);
    if (last.current && last.current.end === pos) write(last.current.start, last.current.end, text);
    else write(pos, el.selectionEnd ?? pos, text);
    drag.current = { sheet, r, c };
    setLive({ sheet, r1: r, c1: c, r2: r, c2: c });
    return true;
  }, [canPick, inputRef, refText, write]);

  const onEnter = useCallback((sheet, r, c) => {
    const d = drag.current;
    if (!d || d.sheet !== sheet || !last.current) return;
    const r1 = Math.min(d.r, r);
    const r2 = Math.max(d.r, r);
    const c1 = Math.min(d.c, c);
    const c2 = Math.max(d.c, c);
    write(last.current.start, last.current.end, refText(sheet, r1, c1, r2, c2));
    setLive({ sheet, r1, c1, r2, c2 });
  }, [refText, write]);

  const reset = useCallback(() => {
    last.current = null;
  }, []);

  return { onDown, onEnter, live, canPick, reset };
}
