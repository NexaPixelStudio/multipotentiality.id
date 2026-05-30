import { useMemo, useState } from 'react';
import { displayCategories, levels } from '../data/formulaCategories';
import { getFormulaStatus, searchFormulas } from '../utils/formulaSearch';

const statusClasses = {
  'Belum dicoba': 'bg-black/5 text-black/45 dark:bg-white/10 dark:text-white/45',
  'Sedang belajar': 'bg-amber-100 text-amber-800 dark:bg-amber-400/15 dark:text-amber-200',
  Benar: 'bg-coach-sky/35 text-coach-green dark:bg-coach-sky/15 dark:text-coach-sky',
  'Perlu ulang': 'bg-rose-100 text-rose-700 dark:bg-rose-400/15 dark:text-rose-200'
};

export default function FormulaSidebar({ formulas, selectedId, onSelect, progress, mobileOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState('All');
  const [onlyExercise, setOnlyExercise] = useState(false);
  const [status, setStatus] = useState('All');

  const filtered = useMemo(() => searchFormulas(formulas, { query, category, level, onlyExercise, status, progress }), [formulas, query, category, level, onlyExercise, status, progress]);

  const grouped = useMemo(() => {
    return filtered.reduce((acc, formula) => {
      const key = formula.displayCategory;
      acc[key] = acc[key] || [];
      acc[key].push(formula);
      return acc;
    }, {});
  }, [filtered]);

  const content = (
    <aside className="flex h-full flex-col coach-card-strong rounded-[2rem] dark:border-white/10 dark:bg-white/[0.055]">
      <div className="border-b border-coach-line p-4 dark:border-white/10">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-coach-green dark:text-coach-sky">Formula Library</p>
            <h2 className="text-lg font-black text-coach-ink dark:text-white">Daftar Rumus</h2>
          </div>
          <button onClick={onClose} className="rounded-full px-3 py-1 text-sm font-bold text-black/50 lg:hidden dark:text-white/60">Tutup</button>
        </div>

        <div className="mt-4 space-y-2">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Cari SUM, IF, lookup..."
            className="w-full rounded-2xl border border-coach-line bg-coach-beige px-4 py-3 text-sm outline-none transition focus:border-coach-aqua dark:border-white/10 dark:bg-black/20 dark:text-white"
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
          <div className="grid grid-cols-2 gap-2">
            <select value={status} onChange={(event) => setStatus(event.target.value)} className="rounded-2xl border border-coach-line bg-white px-3 py-2 text-xs font-semibold dark:border-white/10 dark:bg-black/20 dark:text-white">
              <option value="All">Semua status</option>
              <option value="Belum dicoba">Belum dicoba</option>
              <option value="Sedang belajar">Sedang belajar</option>
              <option value="Benar">Benar</option>
              <option value="Perlu ulang">Perlu ulang</option>
            </select>
            <label className="flex items-center justify-center gap-2 rounded-2xl border border-coach-line bg-white px-3 py-2 text-xs font-bold text-black/60 dark:border-white/10 dark:bg-black/20 dark:text-white/70">
              <input type="checkbox" checked={onlyExercise} onChange={(event) => setOnlyExercise(event.target.checked)} />
              Punya latihan
            </label>
          </div>
          <p className="text-xs text-black/45 dark:text-white/45">{filtered.length} rumus ditemukan</p>
        </div>
      </div>

      <div className="sidebar-scroll flex-1 overflow-y-auto p-3">
        {displayCategories.map((groupName) => {
          const group = grouped[groupName];
          if (!group?.length) return null;
          return (
            <div key={groupName} className="mb-5">
              <p className="sticky top-0 z-10 mb-2 rounded-xl bg-white/95 px-2 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-black/40 backdrop-blur dark:bg-[#202720]/95 dark:text-white/40">{groupName}</p>
              <div className="space-y-2">
                {group.map((formula) => {
                  const formulaStatus = getFormulaStatus(progress, formula.id);
                  return (
                    <button
                      key={formula.id}
                      onClick={() => onSelect(formula.id)}
                      className={`w-full rounded-2xl border p-3 text-left transition hover:border-coach-aqua hover:bg-coach-sky/20 ${selectedId === formula.id ? 'border-coach-green bg-coach-sky/35' : 'border-black/6 bg-black/[0.015] dark:border-white/8 dark:bg-white/[0.025]'}`}
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
                        <span className={`rounded-full px-2 py-1 text-[10px] font-bold ${statusClasses[formulaStatus]}`}>{formulaStatus}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );

  return (
    <>
      <div className="hidden h-[calc(100vh-145px)] lg:block">{content}</div>
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 p-3 lg:hidden" onClick={onClose}>
          <div className="ml-auto h-full max-w-[440px]" onClick={(event) => event.stopPropagation()}>{content}</div>
        </div>
      )}
    </>
  );
}
