import React, { useState } from 'react';
import { LEVELS, MODULES, modulesOfLevel } from '../content/index.js';
import { href } from '../lib/router.js';
import { TONE } from '../lib/tone.js';
import { useProgress } from '../state/progress.jsx';
import Icon, { IconBadge } from '../components/Icon.jsx';

function Bar({ pct }) {
  return (
    <div className="bar-track" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div className="bar-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}

// Ilustrasi dekoratif: potongan lembar kerja dengan rumus yang sedang dipilih.
function HeroSheet() {
  return (
    <div className="hidden lg:block" aria-hidden="true">
      <div className="mb-2 flex items-center gap-2 rounded-xl border border-line bg-surface/85 px-3 py-2 text-sm shadow-soft backdrop-blur">
        <span className="rounded bg-sunken px-2 py-0.5 text-xs font-bold text-muted">C4</span>
        <span className="font-serif italic text-brand">fx</span>
        <code className="font-mono text-ink">=SUM(C2:C3)</code>
      </div>
      <div className="mini-sheet">
        {['', 'A', 'B', 'C'].map((h, i) => <div key={i} className="mh">{h}</div>)}
        <div className="mh">1</div><div className="font-bold">Produk</div><div className="mr font-bold">Qty</div><div className="mr font-bold">Harga</div>
        <div className="mh">2</div><div>Kopi</div><div className="mr">12</div><div className="mr">18.000</div>
        <div className="mh">3</div><div>Teh</div><div className="mr">8</div><div className="mr">12.000</div>
        <div className="mh">4</div><div className="font-bold">Total</div><div className="mr">20</div><div className="mr mt">30.000</div>
      </div>
    </div>
  );
}

function Welcome({ onClose }) {
  return (
    <section className="card relative overflow-hidden p-6 sm:p-8" aria-labelledby="welcome-title">
      <h2 id="welcome-title" className="text-xl font-bold">Cara belajar di platform ini</h2>
      <ol className="mt-4 grid gap-4 sm:grid-cols-3">
        {[
          ['1', 'Pelajari materi', 'Setiap modul diawali dengan penjelasan konsep, contoh yang dihitung langsung, dan analogi dari situasi kerja sehari-hari.'],
          ['2', 'Tulis rumus Anda sendiri', 'Latihan menggunakan lembar kerja interaktif. Klik sel untuk menyisipkan alamatnya ke dalam rumus, seperti di Excel.'],
          ['3', 'Terima umpan balik yang jelas', 'Jawaban dinilai berdasarkan hasilnya, sehingga cara lain yang benar tetap diterima. Jika jawaban belum tepat, Anda akan mendapat penjelasan penyebabnya.']
        ].map(([n, t, d]) => (
          <li key={n} className="flex gap-3">
            <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-brand text-sm font-bold text-brand-ink">{n}</span>
            <span><strong className="block">{t}</strong><span className="text-sm text-muted">{d}</span></span>
          </li>
        ))}
      </ol>
      <button type="button" className="btn-soft mt-5" onClick={onClose}>Sembunyikan panduan</button>
    </section>
  );
}

export default function Home() {
  const p = useProgress();
  const next = p.nextExercise();
  const started = p.totalSolved > 0 || Object.keys(p.done).length > 0;
  const [showWelcome, setShowWelcome] = useState(!p.seenWelcome);

  const startHref = next ? href(`latihan/${next.moduleId}/${next.index + 1}`) : href('kamus');

  return (
    <div className="space-y-10">
      <section className="card hero overflow-hidden">
        <span className="blob blob-a" aria-hidden="true" />
        <span className="blob blob-b" aria-hidden="true" />
        <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div className="rise" style={{ '--i': 0 }}>
            <p className="chip mb-3 gap-2"><Icon name="sparkles" size={13} className="text-brand" />Gratis dan berjalan langsung di browser</p>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.6rem]">Belajar Excel dari dasar hingga mahir, <span className="grad-text">melalui praktik langsung.</span></h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              {MODULES.length} modul terstruktur dan {p.totalExercises} soal latihan dengan data kerja nyata. Setiap materi dijelaskan secara bertahap, sehingga dapat diikuti bahkan oleh peserta yang belum pernah menggunakan Excel.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={startHref} className="btn-primary text-base">{started ? (next ? 'Lanjutkan belajar' : 'Semua soal selesai') : 'Mulai belajar'}<Icon name="arrow-right" size={18} className="icon-slide" /></a>
              <a href={href('modul/kenalan')} className="btn-soft text-base">Lihat materi pertama</a>
            </div>
          </div>
          <div className="rise space-y-4" style={{ '--i': 2 }}>
            <HeroSheet />
            <dl className="grid grid-cols-3 gap-3 text-center">
              {[
                ['Soal selesai', `${p.totalSolved}/${p.totalExercises}`, 'check-circle', 'text-ok'],
                ['Poin XP', p.xp, 'star', 'text-amber-500'],
                ['Hari berturut-turut', p.streak.count, 'flame', 'text-orange-500']
              ].map(([k, v, i, c]) => (
                <div key={k} className="rounded-2xl border border-line bg-surface/80 p-3 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-soft sm:p-4">
                  <dt className="flex flex-col items-center gap-1 text-xs font-semibold text-muted"><Icon name={i} size={18} className={c} />{k}</dt>
                  <dd className="mt-1 text-xl font-extrabold sm:text-2xl">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {showWelcome && <Welcome onClose={() => { setShowWelcome(false); p.dismissWelcome(); }} />}

      <section aria-labelledby="path-title">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 id="path-title" className="text-2xl font-extrabold">Jalur belajar</h2>
            <p className="text-muted">Ikuti materi secara berurutan mulai dari Level 1. Jika sudah menguasai dasarnya, Anda dapat langsung memulai dari level yang sesuai; semua level terbuka.</p>
          </div>
          <nav className="flex flex-wrap gap-1.5" aria-label="Lompat ke level">
            {LEVELS.map((l) => (
              <a key={l.id} href={`#level-${l.id}`} className="chip gap-1.5 transition hover:bg-brand-soft hover:text-brand" onClick={(e) => { e.preventDefault(); document.getElementById(`level-${l.id}`)?.scrollIntoView({ behavior: 'smooth' }); }}>
                <Icon name={l.icon} size={13} />{l.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-10">
          {LEVELS.map((l) => {
            const mods = modulesOfLevel(l.id);
            const solved = mods.reduce((n, m) => n + p.moduleStats(m).solved, 0);
            const total = mods.reduce((n, m) => n + m.exercises.length, 0);
            const tone = TONE[l.tone];
            return (
              <div key={l.id} id={`level-${l.id}`} className="scroll-mt-24">
                <div className="mb-4 flex items-center gap-3">
                  <IconBadge name={l.icon} tone={l.tone} size={26} className="h-12 w-12" />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-bold">Level {l.id}: {l.name}</h3>
                    <p className="text-sm text-muted">{l.desc}</p>
                  </div>
                  <div className="hidden w-40 sm:block">
                    <p className="mb-1 text-right text-xs font-semibold text-muted">{solved}/{total} soal</p>
                    <Bar pct={Math.round((solved / total) * 100)} />
                  </div>
                </div>
                <div className="auto-grid">
                  {mods.map((m, mi) => {
                    const st = p.moduleStats(m);
                    return (
                      <a
                        key={m.id}
                        href={href(`modul/${m.id}`)}
                        className={`card lift rise group flex flex-col border-l-4 p-5 ${tone.bar}`}
                        style={{ '--i': Math.min(mi, 6) }}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <IconBadge name={m.icon} tone={l.tone} size={26} className="h-12 w-12" />
                          {st.complete ? <span className="chip bg-ok-soft text-ok"><Icon name="check" size={13} strokeWidth={2.6} />Selesai</span> : st.solved > 0 ? <span className="chip">Sedang dipelajari</span> : null}
                        </div>
                        <h4 className="mt-3 text-lg font-bold leading-snug group-hover:text-brand">{m.title}</h4>
                        <p className="mt-1 flex-1 text-sm text-muted">{m.tagline}</p>
                        <div className="mt-4">
                          <div className="mb-1.5 flex justify-between text-xs font-semibold text-muted">
                            <span>{st.solved}/{st.total} soal</span>
                            <span className="inline-flex items-center gap-1"><Icon name="clock" size={13} />{m.minutes} menit</span>
                          </div>
                          <Bar pct={st.pct} />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2" aria-label="Alat bantu">
        <a href={href('kamus')} className="card lift flex gap-4 p-6">
          <IconBadge name="book-open" size={28} className="h-14 w-14" />
          <span><strong className="block text-lg">Kamus Rumus</strong><span className="text-muted">Cari fungsi Excel beserta penjelasan, sintaks, dan contoh yang dihitung langsung.</span></span>
        </a>
        <a href={href('bebas')} className="card lift flex gap-4 p-6">
          <IconBadge name="flask" size={28} className="h-14 w-14" />
          <span><strong className="block text-lg">Ruang Coba</strong><span className="text-muted">Lembar kerja bebas untuk mencoba rumus apa pun tanpa memengaruhi progres belajar Anda.</span></span>
        </a>
      </section>

      {started && (
        <section className="text-center">
          <button
            type="button"
            className="text-sm text-muted underline decoration-dotted underline-offset-4 hover:text-bad"
            onClick={() => { if (window.confirm('Hapus semua progres belajar di browser ini? Tindakan ini tidak dapat dibatalkan.')) p.reset(); }}
          >
            Mulai ulang semua progres
          </button>
        </section>
      )}
    </div>
  );
}
