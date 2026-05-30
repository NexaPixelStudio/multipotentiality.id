const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const colToNumber = (col = '') => col.split('').reduce((sum, char) => sum * 26 + char.charCodeAt(0) - 64, 0);

const parseCell = (ref = '') => {
  const match = String(ref).toUpperCase().match(/^([A-Z]+)(\d+)$/);
  if (!match) return null;
  return { col: colToNumber(match[1]), row: Number(match[2]) };
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

export default function ExerciseTable({ table, highlightRanges = [], activeCell, onCellClick }) {
  const columns = table?.columns || [];
  const rows = table?.rows || [];

  const isHighlighted = (ref) => highlightRanges.some((range) => inRange(ref, range));

  return (
    <section className="coach-card-strong rounded-[2rem] p-4 dark:border-white/10 dark:bg-white/[0.055]">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-coach-green dark:text-coach-sky">Spreadsheet Practice</p>
          <h3 className="text-xl font-black text-coach-ink dark:text-white">{table?.title || 'Data Latihan'}</h3>
          <p className="mt-1 text-sm text-black/55 dark:text-white/55">{table?.description}</p>
        </div>
        <p className="rounded-full bg-coach-beige px-3 py-2 text-xs font-bold text-black/50 dark:bg-black/20 dark:text-white/55">
          Klik cell untuk melihat referensi. Aktif: {activeCell || 'A1'}
        </p>
      </div>

      <div className="formula-scroll overflow-auto rounded-2xl border border-coach-line dark:border-white/10">
        <table className="border-collapse bg-white text-sm dark:bg-[#1b211c]">
          <thead>
            <tr>
              <th className="sticky left-0 z-20 min-w-[48px] border border-coach-line bg-coach-beige px-3 py-2 text-center text-xs font-black text-black/45 dark:border-white/10 dark:bg-black/30 dark:text-white/45" />
              {columns.map((_, index) => (
                <th key={index} className="sheet-cell border border-coach-line bg-coach-beige px-3 py-2 text-center text-xs font-black text-black/45 dark:border-white/10 dark:bg-black/30 dark:text-white/45">
                  {letters[index] || `C${index + 1}`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="sticky left-0 z-10 border border-coach-line bg-coach-beige px-3 py-2 text-center text-xs font-black text-black/45 dark:border-white/10 dark:bg-black/30 dark:text-white/45">1</th>
              {columns.map((column, index) => {
                const ref = `${letters[index]}1`;
                return (
                  <Cell key={ref} refName={ref} value={column} header active={activeCell === ref} highlighted={isHighlighted(ref)} onClick={onCellClick} />
                );
              })}
            </tr>
            {rows.map((row, rowIndex) => {
              const sheetRow = rowIndex + 2;
              return (
                <tr key={sheetRow}>
                  <th className="sticky left-0 z-10 border border-coach-line bg-coach-beige px-3 py-2 text-center text-xs font-black text-black/45 dark:border-white/10 dark:bg-black/30 dark:text-white/45">{sheetRow}</th>
                  {columns.map((_, colIndex) => {
                    const ref = `${letters[colIndex]}${sheetRow}`;
                    return (
                      <Cell key={ref} refName={ref} value={row[colIndex]} active={activeCell === ref} highlighted={isHighlighted(ref)} onClick={onCellClick} />
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

function Cell({ refName, value, header, active, highlighted, onClick }) {
  return (
    <td
      onClick={() => onClick?.(refName)}
      title={refName}
      className={`sheet-cell cursor-pointer border border-coach-line px-3 py-2 transition dark:border-white/10 ${header ? 'bg-coach-sky/25 font-black text-coach-ink dark:bg-coach-sky/10 dark:text-white' : 'text-black/70 dark:text-white/70'} ${highlighted ? 'bg-coach-sky/45 ring-1 ring-inset ring-coach-aqua/70 dark:bg-coach-sky/14' : ''} ${active ? 'outline outline-2 outline-coach-aqua' : ''}`}
    >
      <div className="min-h-[20px] truncate">{String(value ?? '')}</div>
    </td>
  );
}
