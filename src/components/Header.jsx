import React from 'react';
import { href } from '../lib/router.js';
import { useProgress } from '../state/progress.jsx';
import Icon from './Icon.jsx';

export function Logo() {
  return (
    <span className="logo-mark grid h-9 w-9 place-items-center rounded-xl bg-brand text-brand-ink shadow-[0_6px_14px_-6px_rgb(var(--brand)/0.8)]" style={{ backgroundImage: 'linear-gradient(135deg, rgb(255 255 255 / 0.18), rgb(255 255 255 / 0) 55%)' }} aria-hidden="true">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
        <path d="M6 5l12 14M18 5L6 19" />
      </svg>
    </span>
  );
}

const NAV = [
  { key: '', label: 'Belajar', icon: 'book' },
  { key: 'kamus', label: 'Kamus Rumus', icon: 'book-open' },
  { key: 'bebas', label: 'Ruang Coba', icon: 'flask' }
];

const ThemeIcon = ({ theme }) => <Icon name={theme === 'dark' ? 'moon' : theme === 'light' ? 'sun' : 'contrast'} size={19} />;

export default function Header({ active }) {
  const p = useProgress();
  const nextTheme = { auto: 'light', light: 'dark', dark: 'auto' }[p.theme];
  const themeName = { auto: 'otomatis', light: 'terang', dark: 'gelap' }[p.theme];

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-line bg-bg/80 backdrop-blur-xl backdrop-saturate-150">
        <div className="gutter flex items-center gap-3 py-2.5">
          <a href={href('')} className="flex items-center gap-2.5 rounded-lg pr-2 font-bold" aria-label="Beranda Belajar Excel">
            <Logo />
            <span className="text-lg leading-tight">Belajar <span className="text-brand">Excel</span></span>
          </a>

          <nav className="ml-4 hidden items-center gap-1 md:flex" aria-label="Menu utama">
            {NAV.map((n) => (
              <a key={n.key} href={href(n.key)} aria-current={active === n.key ? 'page' : undefined} className="nav-link">
                <Icon name={n.icon} size={17} />
                {n.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <span className="chip hidden sm:inline-flex" title="Poin pengalaman"><Icon name="star" size={14} className="text-amber-500" />{p.xp} XP</span>
            {p.streak.count > 0 && <span className="chip hidden sm:inline-flex" title="Hari belajar berturut-turut"><Icon name="flame" size={14} className="text-orange-500" />{p.streak.count}</span>}

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
              className="theme-btn grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-muted transition hover:bg-sunken hover:text-ink"
              aria-label={`Tema ${themeName}. Klik untuk mengganti.`}
              title={`Tema: ${themeName}`}
            >
              <ThemeIcon theme={p.theme} />
            </button>
          </div>
        </div>
      </header>

      <nav className="tabbar fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t border-line bg-surface/85 backdrop-blur-xl backdrop-saturate-150 md:hidden" aria-label="Menu utama">
        {NAV.map((n) => (
          <a key={n.key} href={href(n.key)} aria-current={active === n.key ? 'page' : undefined} className="tab-item">
            <span className="tab-pill"><Icon name={n.icon} size={21} /></span>
            {n.label}
          </a>
        ))}
      </nav>
    </>
  );
}
