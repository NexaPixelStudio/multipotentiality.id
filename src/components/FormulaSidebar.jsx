import { useEffect, useMemo, useState } from 'react';
import { displayCategories, levels } from '../data/formulaCategories';
import { getFormulaStatus, searchFormulas } from '../utils/formulaSearch';

const statusClasses = {
  'Belum dicoba': 'bg-black/5 text-black/45 dark:bg-white/10 dark:text-white/45',
  'Sedang belajar': 'bg-amber-100 text-amber-800 dark:bg-amber-400/15 dark:text-amber-200',
  Benar: 'bg-coach-green/12 text-coach-green dark:bg-emerald-400/15 dark:text-emerald-200',
  'Perlu ulang': 'bg-rose-100 text-rose-700 dark:bg-rose-400/15 dark:text-rose-200'
};

const familyOrder = [
  'SUM Family',
  'COUNT Family',
  'AVERAGE Family',
  'MIN / MAX Family',
  'IF Family',
  'Logical Test Family',
  'LOOKUP Family',
  'INDEX MATCH Family',
  'Reference Family',
  'Text Extract Family',
  'Text Clean Family',
  'Text Join Family',
  'Text Search Family',
  'Date Family',
  'Time Family',
  'Dynamic Filter Family',
  'Dynamic Sort Family',
  'Dynamic Stack Family',
  'Dynamic Transform Family',
  'Round Family',
  'Random Family',
  'Power Family',
  'Subtotal Family',
  'Error Check Family',
  'Cell Info Family',
  'Forecast Family',
  'Rank & Percentile Family'
];

function getFormulaFamily(formula) {
  const name = formula.name.toUpperCase();
  const category = formula.displayCategory;

  if (/^SUM(IF|IFS|PRODUCT)?$/.test(name) || ['SUBTOTAL', 'AGGREGATE'].includes(name)) return 'SUM Family';
  if (/^COUNT/.test(name)) return 'COUNT Family';
  if (/^AVERAGE/.test(name)) return 'AVERAGE Family';
  if (['MIN', 'MAX', 'LARGE', 'SMALL'].includes(name)) return 'MIN / MAX Family';

  if (['IF', 'IFS', 'IFERROR', 'IFNA', 'SWITCH', 'TRUE', 'FALSE'].includes(name)) return 'IF Family';
  if (['AND', 'OR', 'NOT', 'XOR'].includes(name)) return 'Logical Test Family';

  if (['VLOOKUP', 'HLOOKUP', 'XLOOKUP', 'LOOKUP'].includes(name)) return 'LOOKUP Family';
  if (['INDEX', 'MATCH', 'XMATCH', 'INDEX MATCH'].includes(name)) return 'INDEX MATCH Family';
  if (['ROW', 'ROWS', 'COLUMN', 'COLUMNS', 'ADDRESS', 'INDIRECT', 'OFFSET', 'FORMULATEXT', 'HYPERLINK', 'CHOOSE', 'CHOOSECOLS', 'CHOOSEROWS', 'AREAS'].includes(name)) return 'Reference Family';

  if (['LEFT', 'RIGHT', 'MID', 'TEXTBEFORE', 'TEXTAFTER', 'TEXTSPLIT'].includes(name)) return 'Text Extract Family';
  if (['TRIM', 'CLEAN', 'LOWER', 'UPPER', 'PROPER', 'LEN', 'VALUE', 'NUMBERVALUE', 'TEXT', 'DOLLAR', 'FIXED'].includes(name)) return 'Text Clean Family';
  if (['CONCAT', 'CONCATENATE', 'TEXTJOIN', 'REPT', 'UNICHAR', 'CHAR'].includes(name)) return 'Text Join Family';
  if (['FIND', 'SEARCH', 'SUBSTITUTE', 'REPLACE', 'EXACT'].includes(name)) return 'Text Search Family';

  if (['DATE', 'DAY', 'MONTH', 'YEAR', 'TODAY', 'DATEDIF', 'DAYS', 'NETWORKDAYS', 'NETWORKDAYS.INTL', 'WORKDAY', 'WORKDAY.INTL', 'EDATE', 'EOMONTH', 'WEEKDAY', 'WEEKNUM', 'ISOWEEKNUM', 'YEARFRAC'].includes(name)) return 'Date Family';
  if (['NOW', 'HOUR', 'MINUTE', 'SECOND', 'TIME', 'TIMEVALUE'].includes(name)) return 'Time Family';

  if (['FILTER', 'UNIQUE'].includes(name)) return 'Dynamic Filter Family';
  if (['SORT', 'SORTBY'].includes(name)) return 'Dynamic Sort Family';
  if (['VSTACK', 'HSTACK', 'EXPAND', 'WRAPROWS', 'WRAPCOLS'].includes(name)) return 'Dynamic Stack Family';
  if (['TRANSPOSE', 'TAKE', 'DROP', 'TOCOL', 'TOROW', 'MAKEARRAY', 'MAP', 'REDUCE', 'SCAN', 'BYROW', 'BYCOL'].includes(name)) return 'Dynamic Transform Family';

  if (['ROUND', 'ROUNDUP', 'ROUNDDOWN', 'MROUND', 'INT', 'MOD', 'CEILING', 'CEILING.MATH', 'FLOOR', 'FLOOR.MATH', 'ABS', 'SIGN', 'TRUNC'].includes(name)) return 'Round Family';
  if (['RAND', 'RANDBETWEEN', 'RANDARRAY'].includes(name)) return 'Random Family';
  if (['POWER', 'SQRT', 'SQRTPI', 'EXP', 'LN', 'LOG', 'LOG10'].includes(name)) return 'Power Family';
  if (['SUBTOTAL', 'AGGREGATE', 'SUMPRODUCT'].includes(name)) return 'Subtotal Family';

  if (/^IS/.test(name) || ['TYPE', 'N', 'NA', 'ERROR.TYPE'].includes(name)) return 'Error Check Family';
  if (['CELL', 'INFO', 'SHEET', 'SHEETS'].includes(name)) return 'Cell Info Family';

  if (['FORECAST', 'FORECAST.LINEAR', 'TREND', 'GROWTH', 'LINEST', 'LOGEST'].includes(name)) return 'Forecast Family';
  if (/^(RANK|PERCENTILE|QUARTILE|MEDIAN|MODE|STDEV|VAR)/.test(name)) return 'Rank & Percentile Family';

  if (category === 'Financial') {
    if (/^(PV|FV|PMT|RATE|NPER|IPMT|PPMT)/.test(name)) return 'Loan & Investment Family';
    if (/^(NPV|IRR|MIRR|XIRR|XNPV)/.test(name)) return 'Cashflow Family';
    if (/^(DB|DDB|SLN|SYD|VDB|AMOR)/.test(name)) return 'Depreciation Family';
    return 'Financial Family';
  }

  if (category === 'Engineering') {
    if (/CONVERT/.test(name)) return 'Conversion Family';
    if (/^(BIN|DEC|HEX|OCT)/.test(name)) return 'Number Base Family';
    if (/^IM/.test(name) || name.includes('COMPLEX')) return 'Complex Number Family';
    return 'Engineering Family';
  }

  if (category === 'Database') return 'Database Family';
  if (category === 'Web') return 'Web Family';
  if (category === 'Cube') return 'Cube Family';
  if (category === 'Compatibility') return 'Legacy Compatibility Family';
  if (category === 'Advanced / Professional') return 'Professional Formula Family';
  if (category === 'Rare / Specialized') return 'Specialized Family';

  const baseName = name.split('.')[0].split(/[^A-Z0-9]+/)[0];
  return `${baseName} Family`;
}

function sortFamilyNames(a, b) {
  const aIndex = familyOrder.indexOf(a);
  const bIndex = familyOrder.indexOf(b);
  if (aIndex !== -1 || bIndex !== -1) {
    return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
  }
  return a.localeCompare(b);
}

const STATUS_FILTERS = [
  { value: 'All', label: 'Semua status' },
  { value: 'onlyExercise', label: 'Punya latihan' },
  { value: 'Belum dicoba', label: 'Belum dicoba' },
  { value: 'Sedang belajar', label: 'Sedang belajar' },
  { value: 'Benar', label: 'Benar' },
  { value: 'Perlu ulang', label: 'Perlu ulang' }
];

export default function FormulaSidebar({ formulas, selectedId, onSelect, progress, mobileOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [openCategories, setOpenCategories] = useState({});

  const onlyExercise = statusFilter === 'onlyExercise';
  const status = onlyExercise ? 'All' : statusFilter;

  const filtered = useMemo(() => searchFormulas(formulas, { query, category, level, onlyExercise, status, progress }), [formulas, query, category, level, onlyExercise, status, progress]);
  const isSearching = Boolean(query.trim()) || level !== 'All' || statusFilter !== 'All';

  const grouped = useMemo(() => {
    return filtered.reduce((acc, formula) => {
      const categoryName = formula.displayCategory;
      acc[categoryName] = acc[categoryName] || [];
      acc[categoryName].push(formula);
      return acc;
    }, {});
  }, [filtered]);

  const selectedFormula = useMemo(() => formulas.find((formula) => formula.id === selectedId), [formulas, selectedId]);

  useEffect(() => {
    if (!selectedFormula) return;
    const selectedCategory = selectedFormula.displayCategory;
    setOpenCategories((prev) => ({ ...prev, [selectedCategory]: true }));
  }, [selectedFormula]);

  useEffect(() => {
    if (category === 'All') return;
    setOpenCategories((prev) => ({ ...prev, [category]: true }));
  }, [category]);

  useEffect(() => {
    if (!isSearching) return;
    const nextCategories = {};
    Object.keys(grouped).forEach((categoryName) => {
      nextCategories[categoryName] = true;
    });
    setOpenCategories((prev) => ({ ...prev, ...nextCategories }));
  }, [isSearching, grouped]);

  const toggleCategory = (categoryName) => {
    setOpenCategories((prev) => ({ ...prev, [categoryName]: !prev[categoryName] }));
  };

  const content = (
    <aside className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-coach-line bg-white shadow-soft dark:border-white/10 dark:bg-white/[0.055]">
      <div className="border-b border-coach-line p-4 dark:border-white/10">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-black text-coach-green dark:text-emerald-300">Daftar Rumus</h2>
          </div>
          <button onClick={onClose} className="rounded-full px-3 py-1 text-sm font-bold text-black/50 lg:hidden dark:text-white/60">Tutup</button>
        </div>

        <div className="mt-4 space-y-2">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Cari SUM, IF, lookup..."
            className="w-full rounded-2xl border border-coach-line bg-coach-beige px-4 py-3 text-sm outline-none transition focus:border-coach-green dark:border-white/10 dark:bg-black/20 dark:text-white"
          />
          <div className="grid grid-cols-2 gap-2">
            <select value={category} onChange={(event) => setCategory(event.target.value)} className="rounded-2xl border border-coach-line bg-white px-3 py-2 text-xs font-semibold dark:border-white/10 dark:bg-black/20 dark:text-white">
              <option value="All">Semua kategori</option>
              {displayCategories.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
            <select value={level} onChange={(event) => setLevel(event.target.value)} className="rounded-2xl border border-coach-line bg-white px-3 py-2 text-xs font-semibold dark:border-white/10 dark:bg-black/20 dark:text-white">
              <option value="All">Semua level</option>
              {levels.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>
          <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="w-full rounded-2xl border border-coach-line bg-white px-3 py-2 text-xs font-semibold dark:border-white/10 dark:bg-black/20 dark:text-white">
            {STATUS_FILTERS.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
          </select>
        </div>
      </div>

      <div className="sidebar-scroll flex-1 overflow-y-auto p-3">
        {displayCategories.map((groupName) => {
          const items = grouped[groupName];
          if (!items) return null;
          const sortedItems = [...items].sort((a, b) => {
            const familyDiff = sortFamilyNames(getFormulaFamily(a), getFormulaFamily(b));
            return familyDiff !== 0 ? familyDiff : a.name.localeCompare(b.name);
          });
          const isCategoryOpen = Boolean(openCategories[groupName]);

          return (
            <div key={groupName} className="mb-2 overflow-hidden rounded-3xl border border-coach-line bg-coach-beige/60 dark:border-white/10 dark:bg-black/15">
              <button
                type="button"
                onClick={() => toggleCategory(groupName)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition hover:bg-coach-green/8 dark:hover:bg-white/5"
              >
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-coach-green dark:text-emerald-300">{groupName}</p>
                  <p className="mt-1 text-xs font-semibold text-black/45 dark:text-white/45">{sortedItems.length} rumus</p>
                </div>
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-coach-line bg-white text-sm font-black text-coach-green transition dark:border-white/10 dark:bg-white/5 ${isCategoryOpen ? 'rotate-90' : ''}`}>›</span>
              </button>

              {isCategoryOpen && (
                <div className="space-y-2 border-t border-coach-line p-2 dark:border-white/10">
                  {sortedItems.map((formula) => {
                    const formulaStatus = getFormulaStatus(progress, formula.id);
                    return (
                      <button
                        key={formula.id}
                        onClick={() => onSelect(formula.id)}
                        className={`w-full rounded-2xl border p-3 text-left transition hover:border-coach-green hover:bg-coach-green/5 ${selectedId === formula.id ? 'border-coach-green bg-coach-green/10 ring-2 ring-coach-green/10' : 'border-black/6 bg-black/[0.015] dark:border-white/8 dark:bg-white/[0.025]'}`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-black text-coach-ink dark:text-white">{formula.name}</p>
                            <p className="mt-1 line-clamp-2 text-xs text-black/50 dark:text-white/50">{formula.description}</p>
                          </div>
                          <span className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-black ${formula.hasExercise ? 'bg-coach-green text-white' : 'bg-black/8 text-black/45 dark:bg-white/10 dark:text-white/50'}`}>
                            {formula.hasExercise ? 'Practice' : 'Theory'}
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          <span className="rounded-full bg-coach-beige px-2 py-1 text-[10px] font-bold text-black/55 dark:bg-black/25 dark:text-white/55">{formula.level}</span>
                          <span className="rounded-full bg-black/5 px-2 py-1 text-[10px] font-bold text-black/40 dark:bg-white/10 dark:text-white/40">{getFormulaFamily(formula)}</span>
                          <span className={`rounded-full px-2 py-1 text-[10px] font-bold ${statusClasses[formulaStatus]}`}>{formulaStatus}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );

  return (
    <>
      <div className="hidden h-[calc(100vh-72px)] min-h-[720px] lg:sticky lg:top-4 lg:block">{content}</div>
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 p-3 lg:hidden" onClick={onClose}>
          <div className="ml-auto h-full max-w-[440px]" onClick={(event) => event.stopPropagation()}>{content}</div>
        </div>
      )}
    </>
  );
}
