import React from 'react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import ModulePage from './pages/ModulePage.jsx';
import ExercisePage from './pages/ExercisePage.jsx';
import ReferencePage from './pages/ReferencePage.jsx';
import SandboxPage from './pages/SandboxPage.jsx';
import { useRoute, href } from './lib/router.js';

function NotFound() {
  return (
    <div className="card p-10 text-center">
      <p className="text-4xl">🧭</p>
      <h1 className="mt-2 text-xl font-bold">Halaman tidak ditemukan</h1>
      <a href={href('')} className="btn-primary mt-4">Kembali ke beranda</a>
    </div>
  );
}

export default function App() {
  const { parts, query } = useRoute();
  const [section, a, b] = parts;

  let page;
  let active = '';
  if (!section) page = <Home />;
  else if (section === 'modul' && a) { page = <ModulePage id={a} />; }
  else if (section === 'latihan' && a && b) { page = <ExercisePage moduleId={a} n={b} />; }
  else if (section === 'kamus') { page = <ReferencePage query={query} />; active = 'kamus'; }
  else if (section === 'bebas') { page = <SandboxPage />; active = 'bebas'; }
  else page = <NotFound />;

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#utama" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-brand-ink" onClick={(e) => { e.preventDefault(); document.getElementById('utama')?.focus(); }}>
        Langsung ke konten
      </a>
      <Header active={active} />
      <main id="utama" tabIndex={-1} className="mx-auto w-full max-w-6xl flex-1 px-4 pb-28 pt-6 outline-none md:pb-14 md:pt-8">
        <div className="mx-auto max-w-4xl lg:max-w-none">{page}</div>
      </main>
      <footer className="border-t border-line px-4 py-6 pb-24 text-center text-sm text-muted md:pb-6">
        Progres belajarmu tersimpan di browser ini saja. Tidak ada akun, tidak ada data yang dikirim ke mana pun.
      </footer>
    </div>
  );
}
