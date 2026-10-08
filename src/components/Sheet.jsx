import React, { useMemo } from 'react';
import { numToCol } from '../engine/refs.js';
import { XlError, formatCell } from '../engine/values.js';

const isHeaderRow = (rows) => {
  const first = rows[0] || [];
  const strings = first.filter((v) => typeof v === 'string' && v !== '' && !v.startsWith('='));
  return strings.length >= 2 && first[0] !== null && typeof first[0] === 'string' && rows.length >= 3;
};

// Menampilkan satu lembar kerja (tabel gaya spreadsheet).
// overrides: Map "r,c" -> {value, kind: 'target' | 'ghost'} untuk hasil pratinjau jawaban pengguna.
export default function Sheet({
  def, ctx, locale, overrides, target, selected, refs = [], live, pickMode,
  onDown, onEnter, onSelect, minRows = 0, minCols = 0, headerStyle = 'auto', maxHeight
}) {
  const s = ctx.sheet(def.name);
  const header = headerStyle === 'auto' ? isHeaderRow(def.rows) : headerStyle === 'yes';

  const { nRows, nCols } = useMemo(() => {
    let R = Math.max(s.maxR, minRows);
    let C = Math.max(s.maxC, minCols);
    if (overrides) {
      overrides.forEach((_, key) => {
        const [r, c] = key.split(',').map(Number);
        R = Math.max(R, r);
        C = Math.max(C, c);
      });
    }
    if (target && target.sheet === def.name) {
      R = Math.max(R, target.r);
      C = Math.max(C, target.c);
    }
    return { nRows: R, nCols: C };
  }, [s, overrides, target, def.name, minRows, minCols]);

  const fmtOf = (r, c) => def.fmt?.[`${numToCol(c)}${r}`] ?? def.fmt?.[numToCol(c)];

  const refClass = useMemo(() => {
    const m = new Map();
    refs.forEach((rf, i) => {
      if (rf.sheet !== def.name) return;
      for (let r = rf.r1; r <= rf.r2; r += 1) for (let c = rf.c1; c <= rf.c2; c += 1) if (!m.has(`${r},${c}`)) m.set(`${r},${c}`, `ref-${i % 5}`);
    });
    return m;
  }, [refs, def.name]);

  const rowsArr = Array.from({ length: nRows }, (_, i) => i + 1);
  const colsArr = Array.from({ length: nCols }, (_, i) => i + 1);

  return (
    <div className="sheet-wrap" style={maxHeight ? { maxHeight, overflowY: 'auto' } : undefined}>
      <table className="sheet" aria-label={`Lembar kerja ${def.name}`}>
        <thead>
          <tr>
            <th aria-hidden="true" />
            {colsArr.map((c) => <th key={c} scope="col">{numToCol(c)}</th>)}
          </tr>
        </thead>
        <tbody>
          {rowsArr.map((r) => (
            <tr key={r}>
              <th scope="row">{r}</th>
              {colsArr.map((c) => {
                const key = `${r},${c}`;
                const ov = overrides?.get(key);
                let v;
                if (ov) v = ov.value;
                else {
                  try {
                    v = ctx.getCell(def.name, r, c);
                  } catch (e) {
                    v = e instanceof XlError ? e : null;
                  }
                }
                const text = formatCell(v, ov ? ov.fmt : fmtOf(r, c), locale);
                const isTarget = target && target.sheet === def.name && target.r === r && target.c === c;
                const cls = [];
                if (typeof v === 'number' || (ov && typeof v === 'number')) cls.push('num');
                if (v instanceof XlError) cls.push('is-err');
                if (header && r === 1) cls.push('head');
                if (isTarget) cls.push('is-target');
                if (ov?.kind === 'ghost') cls.push('is-ghost');
                if (selected && selected.sheet === def.name && selected.r === r && selected.c === c) cls.push('is-selected');
                if (live && live.sheet === def.name && r >= live.r1 && r <= live.r2 && c >= live.c1 && c <= live.c2) cls.push('is-live');
                else if (refClass.has(key)) cls.push(refClass.get(key));
                if (pickMode) cls.push('pick');
                return (
                  <td
                    key={c}
                    className={cls.join(' ')}
                    title={text.length > 18 ? text : undefined}
                    onMouseDown={(e) => {
                      const handled = onDown ? onDown(def.name, r, c, e) : false;
                      if (!handled && onSelect) onSelect(def.name, r, c, e);
                    }}
                    onMouseEnter={() => onEnter && onEnter(def.name, r, c)}
                  >
                    {text}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
