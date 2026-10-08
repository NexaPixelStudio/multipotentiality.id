import React, { useEffect, useMemo, useState } from 'react';
import { REFERENCE, REF_CATEGORIES, SAMPLE_SHEET } from '../content/reference.js';
import { MODULE_BY_ID } from '../content/index.js';
import { createContext, evaluate } from '../engine/evaluator.js';
import { XlError, formatCell } from '../engine/values.js';
import Sheet from '../components/Sheet.jsx';
import { localizeFormula } from '../lib/text.jsx';
import { href } from '../lib/router.js';
import { useProgress } from '../state/progress.jsx';
import Icon, { IconBadge } from '../components/Icon.jsx';

const POPULER = ['SUM', 'IF', 'VLOOKUP', 'XLOOKUP', 'COUNTIF', 'SUMIF', 'INDEX', 'IFERROR'];

const showValue = (v, locale) => {
  if (Array.isArray(v)) return v.map((r) => r.map((x) => formatCell(x, undefined, locale)).join(' | ')).join('  /  ');
  return formatCell(v, undefined, locale);
};

export default function ReferencePage({ query }) {
  const p = useProgress();
  const [q, setQ] = useState(query.get('q') || '');
  const [cat, setCat] = useState('Semua');
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    document.title = 'Kamus Rumus - Belajar Excel';
    return () => { document.title = 'Belajar Excel dari Dasar hingga Mahir'; };
  }, []);

  const ctx = useMemo(() => createContext([SAMPLE_SHEET], { locale: p.locale, now: () => new Date(Date.UTC(2025, 5, 15)) }), [p.locale]);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return REFERENCE.filter((r) => {
      if (cat !== 'Semua' && r.cat !== cat) return false;
      if (!needle) return true;
      return r.name.toLowerCase().includes(needle) || r.desc.toLowerCase().includes(needle) || r.cat.toLowerCase().includes(needle);
    }).sort((a, b) => {
      if (!needle) return 0;
      const ap = a.name.toLowerCase().startsWith(needle) ? 0 : 1;
      const bp = b.name.toLowerCase().startsWith(needle) ? 0 : 1;
      return ap - bp;
    });
  }, [q, cat]);

  const run = (ex) => {
    try {
      const v = evaluate(ex, ctx, 'Contoh', { locale: 'en' }).value;
      return v instanceof XlError ? v.code : showValue(v, p.locale);
    } catch {
      return '-';
    }
  };

  return (
    <div className="space-y-6">
      <header className="flex items-start gap-4">
        <IconBadge name="book-open" size={28} className="h-14 w-14" />
        <div>
        <h1 className="text-3xl font-extrabold">Kamus Rumus</h1>
        <p className="mt-1 text-lg text-muted">{REFERENCE.length} fungsi Excel dilengkapi penjelasan dan contoh. Setiap hasil dihitung langsung dari tabel contoh di bawah.</p>
        </div>
      </header>

      <div className="card space-y-4 p-4 sm:p-5">
        <label className="relative block">
          <span className="sr-only">Cari fungsi</span>
          <Icon name="search" size={19} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari fungsi atau kata kunci, misalnya: jumlah, rata-rata, atau tanggal"
            className="w-full rounded-xl border border-line bg-bg py-3 pl-11 pr-4 text-base outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/20"
          />
        </label>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-muted">Populer:</span>
          {POPULER.map((n) => (
            <button key={n} type="button" className="chip transition hover:bg-brand-soft hover:text-brand" onClick={() => { setQ(n); setCat('Semua'); }}>{n}</button>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter kategori">
          {['Semua', ...REF_CATEGORIES].map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold transition duration-200 active:scale-95 ${cat === c ? 'bg-brand text-brand-ink shadow-[0_4px_12px_-4px_rgb(var(--brand)/0.7)]' : 'bg-sunken text-muted hover:bg-line'}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div>
        <button type="button" className="btn-soft" onClick={() => setShowData((s) => !s)} aria-expanded={showData}>
          <Icon name="table" size={18} />{showData ? 'Sembunyikan' : 'Tampilkan'} tabel contoh
        </button>
        {showData && (
          <div className="card mt-3 overflow-hidden">
            <Sheet def={SAMPLE_SHEET} ctx={ctx} locale={p.locale} minCols={7} />
          </div>
        )}
      </div>

      <p className="text-sm text-muted" aria-live="polite">{results.length} fungsi ditemukan</p>

      <div className="auto-grid auto-grid-wide">
        {results.map((r, ri) => {
          const mod = r.module ? MODULE_BY_ID[r.module] : null;
          return (
            <article key={r.name} className="card rise flex flex-col p-5 transition duration-200 hover:border-brand/40 hover:shadow-md" style={{ '--i': Math.min(ri, 8) }} id={`fn-${r.name}`}>
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-mono text-xl font-extrabold text-brand">{r.name}</h2>
                <span className="chip">{r.cat}</span>
              </div>
              <p className="mt-2 text-[1.02rem]">{r.desc}</p>
              <div className="mt-3 overflow-x-auto rounded-lg bg-sunken px-3 py-2">
                <code className="formula-input whitespace-nowrap text-sm font-semibold">{localizeFormula(`=${r.syntax}`, p.locale)}</code>
              </div>
              <div className="mt-3 rounded-lg border border-line px-3 py-2 text-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">Contoh</p>
                <code className="formula-input break-all font-semibold">{localizeFormula(r.ex, p.locale)}</code>
                <p className="mt-1 text-muted">Hasil: <strong className="font-mono text-ink">{run(r.ex)}</strong></p>
              </div>
              {mod && (
                <a href={href(`modul/${mod.id}`)} className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
                  Pelajari di modul “{mod.title}”<Icon name="arrow-right" size={15} className="icon-slide" />
                </a>
              )}
            </article>
          );
        })}
      </div>

      {results.length === 0 && (
        <div className="card p-10 text-center">
          <span className="icon-badge mx-auto grid h-16 w-16 place-items-center rounded-3xl"><Icon name="search" size={30} /></span>
          <p className="mt-3 font-semibold">Tidak ditemukan hasil untuk “{q}”.</p>
          <p className="text-muted">Coba kata kunci lain, misalnya “jumlah” atau “tanggal”.</p>
        </div>
      )}
    </div>
  );
}
