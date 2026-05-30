import { useEffect, useMemo, useState } from 'react';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const colToNumber = (col = '') => col.split('').reduce((sum, char) => sum * 26 + char.charCodeAt(0) - 64, 0);

const numberToCol = (num = 1) => {
  let col = '';
  let value = num;
  while (value > 0) {
    const remainder = (value - 1) % 26;
    col = String.fromCharCode(65 + remainder) + col;
    value = Math.floor((value - 1) / 26);
  }
  return col;
};

const parseCell = (ref = '') => {
  const match = String(ref).toUpperCase().match(/^([A-Z]+)(\d+)$/);
  if (!match) return null;
  return { col: colToNumber(match[1]), row: Number(match[2]) };
};

const normalizeRange = (startRef, endRef = startRef) => {
  const start = parseCell(startRef);
  const end = parseCell(endRef);
  if (!start || !end) return startRef;

  const minCol = Math.min(start.col, end.col);
  const maxCol = Math.max(start.col, end.col);
  const minRow = Math.min(start.row, end.row);
  const maxRow = Math.max(start.row, end.row);
  const from = `${numberToCol(minCol)}${minRow}`;
  const to = `${numberToCol(maxCol)}${maxRow}`;

  return from === to ? from : `${from}:${to}`;
};

const inRange = (cellRef, rangeRef) => {
  const cell = parseCell(cellRef);
  if (!cell) return false;
  const [start, end] = String(rangeRef).split(':');
  if (!end) return cellRef.toUpperCase() === start.toUpperCase();
  const a = parseCell(start);
  const b = parseCell(end);
  if (!a || !b) return false;
  const minCol = Math.min(a.col, b.col);
  const maxCol = Math.max(a.col, b.col);
  const minRow = Math.min(a.row, b.row);
  const maxRow = Math.max(a.row, b.row);
  return cell.col >= minCol && cell.col <= maxCol && cell.row >= minRow && cell.row <= maxRow;
};

export default function ExerciseTable({ table, highlightRanges = [], activeCell, onCellClick, onRangeSelected }) {
  const columns = table?.columns || [];
  const rows = table?.rows || [];
  const [selectionStart, setSelectionStart] = useState(null);
  const [selectionEnd, setSelectionEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectionMode, setSelectionMode] = useState('cell');

  const liveRange = useMemo(() => {
    if (!selectionStart) return null;
    return normalizeRange(selectionStart, selectionEnd || selectionStart);
  }, [selectionStart, selectionEnd]);

  const isHighlighted = (ref) => highlightRanges.some((range) => inRange(ref, range));
  const isSelected = (ref) => liveRange ? inRange(ref, liveRange) : false;
  const lastSheetRow = rows.length + 1;
  const lastSheetColumn = numberToCol(columns.length || 1);

  const beginColumnSelection = (event, colIndex) => {
    event.preventDefault();
    const col = numberToCol(colIndex + 1);
    setSelectionMode('column');
    setSelectionStart(`${col}1`);
    setSelectionEnd(`${col}${lastSheetRow}`);
    setIsDragging(true);
    onCellClick?.(`${col}1`);
  };

  const moveColumnSelection = (colIndex) => {
    if (!isDragging || selectionMode !== 'column' || !selectionStart) return;
    const col = numberToCol(colIndex + 1);
    setSelectionEnd(`${col}${lastSheetRow}`);
    onCellClick?.(`${col}1`);
  };

  const beginRowSelection = (event, sheetRow) => {
    event.preventDefault();
    setSelectionMode('row');
    setSelectionStart(`A${sheetRow}`);
    setSelectionEnd(`${lastSheetColumn}${sheetRow}`);
    setIsDragging(true);
    onCellClick?.(`A${sheetRow}`);
  };

  const moveRowSelection = (sheetRow) => {
    if (!isDragging || selectionMode !== 'row' || !selectionStart) return;
    setSelectionEnd(`${lastSheetColumn}${sheetRow}`);
    onCellClick?.(`A${sheetRow}`);
  };

  useEffect(() => {
    if (!isDragging) return undefined;

    const finishSelection = () => {
      if (!selectionStart) return;
      const finalRange = normalizeRange(selectionStart, selectionEnd || selectionStart);
      onRangeSelected?.(finalRange);
      setIsDragging(false);
      setSelectionStart(null);
      setSelectionEnd(null);
      setSelectionMode('cell');
    };

    window.addEventListener('mouseup', finishSelection);
    return () => window.removeEventListener('mouseup', finishSelection);
  }, [isDragging, selectionStart, selectionEnd, onRangeSelected]);

  const beginSelection = (event, ref) => {
    event.preventDefault();
    setSelectionMode('cell');
    setSelectionStart(ref);
    setSelectionEnd(ref);
    setIsDragging(true);
    onCellClick?.(ref);
  };

  const moveSelection = (ref) => {
    if (!isDragging || selectionMode !== 'cell' || !selectionStart) return;
    setSelectionEnd(ref);
    onCellClick?.(ref);
  };

  const stopDragging = () => {
    setIsDragging(false);
    setSelectionMode('cell');
  };

  return (
    <section className="rounded-[2rem] border border-coach-line bg-white p-4 shadow-soft dark:border-white/10 dark:bg-white/[0.055]">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-coach-green dark:text-emerald-300">Spreadsheet Practice</p>
          <h3 className="text-xl font-black text-coach-ink dark:text-white">{table?.title || 'Data Latihan'}</h3>
          <p className="mt-1 text-sm text-black/55 dark:text-white/55">{table?.description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-black/50 dark:text-white/55">
          <span className="rounded-full bg-coach-beige px-3 py-2 dark:bg-black/20">Aktif: {activeCell || 'A1'}</span>
          <span className="rounded-full bg-coach-greenSoft px-3 py-2 text-coach-green dark:bg-emerald-400/10 dark:text-emerald-200">
            Klik/drag cell, header kolom, atau nomor baris
          </span>
        </div>
      </div>

      <div className="formula-scroll overflow-auto rounded-2xl border border-coach-line dark:border-white/10">
        <table className="border-collapse bg-white text-sm dark:bg-[#1b211c]">
          <thead>
            <tr>
              <th className="sticky left-0 z-20 min-w-[48px] border border-coach-line bg-coach-beige px-3 py-2 text-center text-xs font-black text-black/45 dark:border-white/10 dark:bg-black/30 dark:text-white/45" />
              {columns.map((_, index) => {
                const colName = numberToCol(index + 1);
                return (
                  <th
                    key={colName}
                    onMouseDown={(event) => beginColumnSelection(event, index)}
                    onMouseEnter={() => moveColumnSelection(index)}
                    title={`Klik atau drag untuk pilih ${colName}1:${colName}${lastSheetRow}`}
                    className="sheet-cell cursor-cell select-none border border-coach-line bg-coach-beige px-3 py-2 text-center text-xs font-black text-black/45 transition hover:bg-coach-greenSoft hover:text-coach-green dark:border-white/10 dark:bg-black/30 dark:text-white/45 dark:hover:bg-emerald-400/12 dark:hover:text-emerald-200"
                  >
                    {colName}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                onMouseDown={(event) => beginRowSelection(event, 1)}
                onMouseEnter={() => moveRowSelection(1)}
                title={`Klik atau drag untuk pilih A1:${lastSheetColumn}1`}
                className="sticky left-0 z-10 cursor-cell select-none border border-coach-line bg-coach-beige px-3 py-2 text-center text-xs font-black text-black/45 transition hover:bg-coach-greenSoft hover:text-coach-green dark:border-white/10 dark:bg-black/30 dark:text-white/45 dark:hover:bg-emerald-400/12 dark:hover:text-emerald-200"
              >
                1
              </th>
              {columns.map((column, index) => {
                const ref = `${letters[index]}1`;
                return (
                  <Cell
                    key={ref}
                    refName={ref}
                    value={column}
                    header
                    active={activeCell === ref}
                    highlighted={isHighlighted(ref)}
                    selected={isSelected(ref)}
                    onMouseDown={beginSelection}
                    onMouseEnter={moveSelection}
                  />
                );
              })}
            </tr>
            {rows.map((row, rowIndex) => {
              const sheetRow = rowIndex + 2;
              return (
                <tr key={sheetRow}>
                  <th
                    onMouseDown={(event) => beginRowSelection(event, sheetRow)}
                    onMouseEnter={() => moveRowSelection(sheetRow)}
                    title={`Klik atau drag untuk pilih A${sheetRow}:${lastSheetColumn}${sheetRow}`}
                    className="sticky left-0 z-10 cursor-cell select-none border border-coach-line bg-coach-beige px-3 py-2 text-center text-xs font-black text-black/45 transition hover:bg-coach-greenSoft hover:text-coach-green dark:border-white/10 dark:bg-black/30 dark:text-white/45 dark:hover:bg-emerald-400/12 dark:hover:text-emerald-200"
                  >
                    {sheetRow}
                  </th>
                  {columns.map((_, colIndex) => {
                    const ref = `${letters[colIndex]}${sheetRow}`;
                    return (
                      <Cell
                        key={ref}
                        refName={ref}
                        value={row[colIndex]}
                        active={activeCell === ref}
                        highlighted={isHighlighted(ref)}
                        selected={isSelected(ref)}
                        onMouseDown={beginSelection}
                        onMouseEnter={moveSelection}
                      />
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Cell({ refName, value, header, active, highlighted, selected, onMouseDown, onMouseEnter }) {
  return (
    <td
      onMouseDown={(event) => onMouseDown?.(event, refName)}
      onMouseEnter={() => onMouseEnter?.(refName)}
      title={refName}
      className={`sheet-cell cursor-cell select-none border border-coach-line px-3 py-2 transition dark:border-white/10 ${header ? 'bg-coach-green/8 font-black text-coach-ink dark:bg-emerald-400/10 dark:text-white' : 'text-black/70 dark:text-white/70'} ${highlighted ? 'bg-coach-green/16 ring-1 ring-inset ring-coach-green/50 dark:bg-emerald-400/14' : ''} ${selected ? 'bg-coach-greenSoft ring-2 ring-inset ring-coach-green/80 dark:bg-emerald-400/18' : ''} ${active ? 'outline outline-2 outline-coach-green' : ''}`}
    >
      <div className="min-h-[20px] truncate">{String(value ?? '')}</div>
    </td>
  );
}
