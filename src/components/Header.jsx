import React from 'react';
import { href } from '../lib/router.js';
import { useProgress } from '../state/progress.jsx';

export function Logo() {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-brand-ink" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
        <path d="M6 5l12 14M18 5L6 19" />
      </svg>
    </span>
  );
}

const NAV = [
  { key: '', label: 'Belajar', icon: '📚' },
  { key: 'kamus', label: 'Kamus Rumus', icon: '📖' },
  { key: 'bebas', label: 'Ruang Coba', icon: '🧪' }
];

const ThemeIcon = ({ theme }) => (theme === 'dark' ? '🌙' : theme === 'light' ? '☀️' : '🌓');

export default function Header({ active }) {
  const p = useProgress();
  const nextTheme = { auto: 'light', light: 'dark', dark: 'auto' }[p.theme];
  const themeName = { auto: 'otomatis', light: 'terang', dark: 'gelap' }[p.theme];

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5">
          <a href={href('')} className="flex items-center gap-2.5 rounded-lg pr-2 font-bold" aria-label="Beranda Belajar Excel">
            <Logo />
            <span className="text-lg leading-tight">Belajar <span className="text-brand">Excel</span></span>
          </a>

          <nav className="ml-4 hidden items-center gap-1 md:flex" aria-label="Menu utama">
            {NAV.map((n) => (
              <a
                key={n.key}
                href={href(n.key)}
                aria-current={active === n.key ? 'page' : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-sunken ${active === n.key ? 'bg-brand-soft text-brand' : 'text-muted'}`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <span className="chip hidden sm:inline-flex" title="Poin pengalaman">⭐ {p.xp} XP</span>
            {p.streak.count > 0 && <span className="chip hidden sm:inline-flex" title="Hari belajar beruntun">🔥 {p.streak.count}</span>}

            <div className="flex overflow-hidden rounded-lg border border-line text-xs font-semibold" role="group" aria-label="Gaya penulisan rumus">
              {[['id', 'ID  ;'], ['en', 'EN  ,']].map(([val, label]) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => p.setLocale(val)}
                  aria-pressed={p.locale === val}
                  title={val === 'id' ? 'Excel versi Indonesia: pemisah titik koma (;)' : 'Excel versi Inggris: pemisah koma (,)'}
                  className={`px-2.5 py-2 transition ${p.locale === val ? 'bg-brand text-brand-ink' : 'bg-surface text-muted hover:bg-sunken'}`}
                >
                  {label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => p.setTheme(nextTheme)}
              className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-base hover:bg-sunken"
              aria-label={`Tema ${themeName}. Klik untuk mengganti.`}
              title={`Tema: ${themeName}`}
            >
              <ThemeIcon theme={p.theme} />
            </button>
          </div>
        </div>
      </header>

      <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t border-line bg-surface/95 backdrop-blur md:hidden" aria-label="Menu utama">
        {NAV.map((n) => (
          <a
            key={n.key}
            href={href(n.key)}
            aria-current={active === n.key ? 'page' : undefined}
            className={`flex flex-col items-center gap-0.5 py-2 text-xs font-semibold ${active === n.key ? 'text-brand' : 'text-muted'}`}
          >
            <span className="text-lg" aria-hidden="true">{n.icon}</span>
            {n.label}
          </a>
        ))}
      </nav>
    </>
  );
}
