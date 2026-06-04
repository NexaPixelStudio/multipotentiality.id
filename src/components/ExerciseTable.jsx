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

const stripSheetName = (ref = '') => String(ref || '').replace(/^'?[^'!]+?'?!/, '');

const parseCell = (ref = '') => {
  const match = stripSheetName(ref).toUpperCase().match(/^([A-Z]+)(\d+)$/);
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

const normalizeVerticalRange = (startRef, endRef = startRef) => {
  const start = parseCell(startRef);
  const end = parseCell(endRef);
  if (!start || !end) return startRef;

  const col = numberToCol(start.col);
  const minRow = Math.min(start.row, end.row);
  const maxRow = Math.max(start.row, end.row);
  const from = `${col}${minRow}`;
  const to = `${col}${maxRow}`;

  return from === to ? from : `${from}:${to}`;
};

const splitSheetRange = (range = '') => {
  const text = String(range || '');
  const bangIndex = text.lastIndexOf('!');
  if (bangIndex === -1) return { sheetName: '', ref: text };
  return {
    sheetName: text.slice(0, bangIndex).replace(/^'|'$/g, ''),
    ref: text.slice(bangIndex + 1)
  };
};

const inRange = (cellRef, rangeRef) => {
  const cell = parseCell(cellRef);
  if (!cell) return false;
  const [start, end] = String(splitSheetRange(rangeRef).ref).split(':');
  if (!end) return stripSheetName(cellRef).toUpperCase() === start.toUpperCase();
  const a = parseCell(start);
  const b = parseCell(end);
  if (!a || !b) return false;
  const minCol = Math.min(a.col, b.col);
  const maxCol = Math.max(a.col, b.col);
  const minRow = Math.min(a.row, b.row);
  const maxRow = Math.max(a.row, b.row);
  return cell.col >= minCol && cell.col <= maxCol && cell.row >= minRow && cell.row <= maxRow;
};

const normalizeSheet = (sheet, index = 0) => {
  const name = sheet?.name || sheet?.sheetName || `Sheet${index + 1}`;
  const id = sheet?.id || name.toLowerCase().replace(/\s+/g, '');
  return {
    id,
    name,
    label: sheet?.label || name,
    selectable: sheet?.selectable !== false,
    table: {
      title: sheet?.title || sheet?.table?.title || name,
      description: sheet?.description || sheet?.table?.description || '',
      columns: sheet?.columns || sheet?.table?.columns || [],
      rows: sheet?.rows || sheet?.table?.rows || []
    }
  };
};

export default function ExerciseTable({ table, highlightRanges = [], activeCell, cellValues = {}, onCellClick, onRangeSelected, onFillDrag }) {
  const sheets = useMemo(() => {
    if (Array.isArray(table?.sheets) && table.sheets.length) {
      return table.sheets.map((sheet, index) => normalizeSheet(sheet, index));
    }

    return [normalizeSheet({
      id: 'sheet1',
      name: table?.sheetName || 'Sheet1',
      label: 'Data',
      title: table?.title || 'Data Latihan',
      description: table?.description || '',
      columns: table?.columns || [],
      rows: table?.rows || [],
      selectable: true
    })];
  }, [table]);

  const answerSheetId = table?.answerSheetId || table?.formulaSheetId || sheets[0]?.id || 'sheet1';
  const initialSheetId = table?.activeSheetId || answerSheetId || sheets[0]?.id || 'sheet1';
  const [activeSheetId, setActiveSheetId] = useState(initialSheetId);
  const activeSheet = sheets.find((sheet) => sheet.id === activeSheetId) || sheets[0];
  const currentTable = activeSheet?.table || {};
  const columns = currentTable.columns || [];
  const rows = currentTable.rows || [];
  const canSelect = Boolean(activeSheet?.selectable);
  const isAnswerSheet = activeSheet?.id === answerSheetId || sheets.length === 1;

  const [selectionStart, setSelectionStart] = useState(null);
  const [selectionEnd, setSelectionEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectionMode, setSelectionMode] = useState('cell');

  useEffect(() => {
    setActiveSheetId(initialSheetId);
    setIsDragging(false);
    setSelectionStart(null);
    setSelectionEnd(null);
    setSelectionMode('cell');
  }, [initialSheetId, table]);

  const visibleRanges = useMemo(() => {
    return highlightRanges
      .map((range) => {
        const { sheetName, ref } = splitSheetRange(range);
        if (!sheetName) return isAnswerSheet || sheets.length === 1 ? ref : '';
        return sheetName === activeSheet?.name ? ref : '';
      })
      .filter(Boolean);
  }, [activeSheet?.name, highlightRanges, isAnswerSheet, sheets.length]);

  const liveRange = useMemo(() => {
    if (!selectionStart) return null;
    if (selectionMode === 'fill') return normalizeVerticalRange(selectionStart, selectionEnd || selectionStart);
    return normalizeRange(selectionStart, selectionEnd || selectionStart);
  }, [selectionMode, selectionStart, selectionEnd]);

  const isHighlighted = (ref) => canSelect && visibleRanges.some((range) => inRange(ref, range));
  const isSelected = (ref) => liveRange ? inRange(ref, liveRange) : false;
  const lastSheetRow = rows.length + 1;
  const lastSheetColumn = numberToCol(columns.length || 1);
  const displayActiveCell = isAnswerSheet ? (activeCell || 'A1') : activeSheet?.name;

  const resetSelection = () => {
    setIsDragging(false);
    setSelectionStart(null);
    setSelectionEnd(null);
    setSelectionMode('cell');
  };

  const getMeta = () => ({
    sheetId: activeSheet?.id,
    sheetName: activeSheet?.name,
    isAnswerSheet
  });

  const handleSheetChange = (sheetId) => {
    setActiveSheetId(sheetId);
    resetSelection();
  };

  const formatRangeForFormula = (range) => {
    if (!range) return range;
    if (isAnswerSheet || sheets.length === 1) return range;
    return `${activeSheet.name}!${range}`;
  };

  const beginColumnSelection = (event, colIndex) => {
    if (!canSelect) return;
    event.preventDefault();
    const col = numberToCol(colIndex + 1);
    setSelectionMode('column');
    setSelectionStart(`${col}1`);
    setSelectionEnd(`${col}${lastSheetRow}`);
    setIsDragging(true);
    onCellClick?.(`${col}1`, getMeta());
  };

  const moveColumnSelection = (colIndex) => {
    if (!canSelect || !isDragging || selectionMode !== 'column' || !selectionStart) return;
    const col = numberToCol(colIndex + 1);
    setSelectionEnd(`${col}${lastSheetRow}`);
  };

  const beginRowSelection = (event, sheetRow) => {
    if (!canSelect) return;
    event.preventDefault();
    setSelectionMode('row');
    setSelectionStart(`A${sheetRow}`);
    setSelectionEnd(`${lastSheetColumn}${sheetRow}`);
    setIsDragging(true);
    onCellClick?.(`A${sheetRow}`, getMeta());
  };

  const moveRowSelection = (sheetRow) => {
    if (!canSelect || !isDragging || selectionMode !== 'row' || !selectionStart) return;
    setSelectionEnd(`${lastSheetColumn}${sheetRow}`);
  };

  useEffect(() => {
    if (!isDragging) return undefined;

    const finishSelection = () => {
      if (!selectionStart) return;

      if (selectionMode === 'fill') {
        const endRef = selectionEnd || selectionStart;
        const finalRange = normalizeVerticalRange(selectionStart, endRef);
        if (finalRange.includes(':')) {
          onFillDrag?.({ sourceCell: selectionStart, targetCell: endRef, targetRange: finalRange });
        }
        resetSelection();
        return;
      }

      const finalRange = normalizeRange(selectionStart, selectionEnd || selectionStart);
      onRangeSelected?.(formatRangeForFormula(finalRange), getMeta());
      resetSelection();
    };

    window.addEventListener('mouseup', finishSelection);
    return () => window.removeEventListener('mouseup', finishSelection);
  }, [isDragging, selectionMode, selectionStart, selectionEnd, onRangeSelected, onFillDrag, activeSheet?.id, activeSheet?.name, isAnswerSheet]);

  const beginSelection = (event, ref) => {
    if (!canSelect) return;
    event.preventDefault();
    setSelectionMode('cell');
    setSelectionStart(ref);
    setSelectionEnd(ref);
    setIsDragging(true);
    onCellClick?.(ref, getMeta());
  };

  const moveSelection = (ref) => {
    if (!canSelect || !isDragging || !selectionStart) return;
    if (selectionMode === 'fill') {
      setSelectionEnd(ref);
      return;
    }
    if (selectionMode !== 'cell') return;
    setSelectionEnd(ref);
  };

  const beginFillDrag = (event, ref) => {
    if (!canSelect || !isAnswerSheet) return;
    event.preventDefault();
    event.stopPropagation();
    setSelectionMode('fill');
    setSelectionStart(ref);
    setSelectionEnd(ref);
    setIsDragging(true);
    onCellClick?.(ref, getMeta());
  };

  const statusText = !canSelect
    ? 'Sheet ini hanya untuk dibaca'
    : isAnswerSheet
      ? 'Klik cell untuk target hasil, rumus tetap diketik di formula bar'
      : 'Klik/drag cell, header kolom, atau nomor baris';

  return (
    <section className="rounded-[2rem] border border-coach-line bg-white p-4 shadow-soft dark:border-white/10 dark:bg-white/[0.055]">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-coach-green dark:text-emerald-300">Spreadsheet Practice</p>
          <h3 className="text-xl font-black text-coach-ink dark:text-white">{currentTable.title || 'Data Latihan'}</h3>
          <p className="mt-1 text-sm text-black/55 dark:text-white/55">{currentTable.description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-black/50 dark:text-white/55">
          <span className="rounded-full bg-coach-beige px-3 py-2 dark:bg-black/20">Aktif: {displayActiveCell}</span>
          <span className="rounded-full bg-coach-greenSoft px-3 py-2 text-coach-green dark:bg-emerald-400/10 dark:text-emerald-200">
            {statusText}
          </span>
        </div>
      </div>

      <div className="formula-scroll overflow-auto rounded-2xl border border-coach-line dark:border-white/10">
        <table className={`border-collapse bg-white text-sm dark:bg-[#1b211c] ${isAnswerSheet ? 'sheet-answer-table' : 'sheet-data-table'}`}>
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
                    title={canSelect ? `Klik atau drag untuk pilih ${colName}1:${colName}${lastSheetRow}` : colName}
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
                title={canSelect ? `Klik atau drag untuk pilih A1:${lastSheetColumn}1` : '1'}
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
                    value={isAnswerSheet ? (cellValues[ref] ?? column) : column}
                    header
                    active={canSelect && isAnswerSheet && activeCell === ref}
                    highlighted={isHighlighted(ref)}
                    selected={isSelected(ref)}
                    canSelect={canSelect}
                    isAnswerSheet={isAnswerSheet}
                    onMouseDown={beginSelection}
                    onMouseEnter={moveSelection}
                    onFillMouseDown={beginFillDrag}
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
                    title={canSelect ? `Klik atau drag untuk pilih A${sheetRow}:${lastSheetColumn}${sheetRow}` : String(sheetRow)}
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
                        value={isAnswerSheet ? (cellValues[ref] ?? row[colIndex]) : row[colIndex]}
                        active={canSelect && isAnswerSheet && activeCell === ref}
                        highlighted={isHighlighted(ref)}
                        selected={isSelected(ref)}
                        canSelect={canSelect}
                        isAnswerSheet={isAnswerSheet}
                        onMouseDown={beginSelection}
                        onMouseEnter={moveSelection}
                        onFillMouseDown={beginFillDrag}
                      />
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {sheets.length > 1 ? (
        <div className="mt-2 flex items-center gap-2 rounded-2xl border border-coach-line bg-coach-beige px-3 py-2 dark:border-white/10 dark:bg-black/20">
          {sheets.map((sheet) => (
            <button
              key={sheet.id}
              type="button"
              onClick={() => handleSheetChange(sheet.id)}
              className={`rounded-xl px-4 py-2 text-xs font-black transition ${activeSheetId === sheet.id ? 'bg-white text-coach-green shadow-sm dark:bg-white/10 dark:text-emerald-200' : 'text-black/55 hover:bg-white/70 hover:text-coach-green dark:text-white/55 dark:hover:bg-white/10'}`}
              title={sheet.label}
            >
              {sheet.name}
            </button>
          ))}
        </div>
      ) : null}
    </section>
  );
}

function Cell({ refName, value, header, active, highlighted, selected, canSelect, isAnswerSheet, onMouseDown, onMouseEnter, onFillMouseDown }) {
  return (
    <td
      onMouseDown={(event) => onMouseDown?.(event, refName)}
      onMouseEnter={() => onMouseEnter?.(refName)}
      title={refName}
      className={`sheet-cell relative ${canSelect ? 'cursor-cell' : 'cursor-default'} select-none border border-coach-line px-3 py-2 transition dark:border-white/10 ${header ? 'bg-coach-green/8 font-black text-coach-ink dark:bg-emerald-400/10 dark:text-white' : 'text-black/70 dark:text-white/70'} ${highlighted ? 'bg-coach-green/16 ring-1 ring-inset ring-coach-green/50 dark:bg-emerald-400/14' : ''} ${selected ? 'bg-coach-greenSoft ring-2 ring-inset ring-coach-green/80 dark:bg-emerald-400/18' : ''} ${active ? 'outline outline-2 outline-coach-green' : ''}`}
    >
      <div className="min-h-[20px] truncate">{String(value ?? '')}</div>
      {active && !header && canSelect && isAnswerSheet ? (
        <button
          type="button"
          aria-label={`Tarik untuk duplikat rumus dari ${refName}`}
          title="Tarik ke bawah untuk duplikat rumus"
          onMouseDown={(event) => onFillMouseDown?.(event, refName)}
          className="absolute -bottom-1 -right-1 h-3 w-3 cursor-crosshair rounded-[2px] border border-white bg-coach-green shadow-sm ring-1 ring-coach-green/70 dark:border-[#1b211c]"
        />
      ) : null}
    </td>
  );
}
