import React, { useState } from 'react';
import { LEVELS, MODULES, modulesOfLevel } from '../content/index.js';
import { href } from '../lib/router.js';
import { TONE } from '../lib/tone.js';
import { useProgress } from '../state/progress.jsx';

function Bar({ pct }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-sunken" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full bg-brand transition-all" style={{ width: `${pct}%` }} />
    </div>
  );
}

function Welcome({ onClose }) {
  return (
    <section className="card relative overflow-hidden p-6 sm:p-8" aria-labelledby="welcome-title">
      <h2 id="welcome-title" className="text-xl font-bold">Cara belajar di sini</h2>
      <ol className="mt-4 grid gap-4 sm:grid-cols-3">
        {[
          ['1', 'Baca penjelasan singkat', 'Setiap modul dimulai dengan penjelasan sederhana, lengkap dengan contoh dan perumpamaan sehari-hari.'],
          ['2', 'Ketik rumusnya sendiri', 'Latihan memakai lembar kerja sungguhan. Kamu bisa mengklik sel untuk menyisipkan alamatnya, persis seperti di Excel.'],
          ['3', 'Dapat umpan balik jelas', 'Jawaban dinilai dari hasilnya, jadi cara lain yang benar tetap diterima. Kalau salah, kamu diberi tahu kenapa.']
        ].map(([n, t, d]) => (
          <li key={n} className="flex gap-3">
            <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-brand text-sm font-bold text-brand-ink">{n}</span>
            <span><strong className="block">{t}</strong><span className="text-sm text-muted">{d}</span></span>
          </li>
        ))}
      </ol>
      <button type="button" className="btn-soft mt-5" onClick={onClose}>Mengerti, sembunyikan</button>
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
      <section className="card overflow-hidden">
        <div className="grid gap-6 p-6 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="chip mb-3">Gratis • Langsung di browser • Bahasa Indonesia</p>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">Belajar Excel dari nol sampai mahir, <span className="text-brand">dengan cara yang menyenangkan.</span></h1>
            <p className="mt-4 max-w-xl text-lg text-muted">
              {MODULES.length} modul bertahap, {p.totalExercises} soal latihan dengan data nyata, dan penjelasan yang dibuat supaya mudah dipahami, bahkan kalau kamu belum pernah membuka Excel.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={startHref} className="btn-primary text-base">{started ? (next ? 'Lanjutkan belajar' : 'Semua soal selesai 🎉') : 'Mulai dari awal'} →</a>
              <a href={href('modul/kenalan')} className="btn-soft text-base">Lihat materi pertama</a>
            </div>
          </div>
          <dl className="grid grid-cols-3 gap-3 text-center lg:grid-cols-1">
            {[
              ['Soal selesai', `${p.totalSolved}/${p.totalExercises}`, '✅'],
              ['Poin XP', p.xp, '⭐'],
              ['Hari beruntun', p.streak.count, '🔥']
            ].map(([k, v, i]) => (
              <div key={k} className="rounded-2xl bg-sunken p-4">
                <dt className="text-xs font-semibold text-muted">{i} {k}</dt>
                <dd className="mt-1 text-2xl font-extrabold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {showWelcome && <Welcome onClose={() => { setShowWelcome(false); p.dismissWelcome(); }} />}

      <section aria-labelledby="path-title">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 id="path-title" className="text-2xl font-extrabold">Jalur belajar</h2>
            <p className="text-muted">Ikuti urut dari Level 1. Sudah punya dasar? Lompat ke level yang sesuai, semuanya terbuka.</p>
          </div>
          <nav className="flex flex-wrap gap-1.5" aria-label="Lompat ke level">
            {LEVELS.map((l) => (
              <a key={l.id} href={`#level-${l.id}`} className="chip hover:bg-brand-soft" onClick={(e) => { e.preventDefault(); document.getElementById(`level-${l.id}`)?.scrollIntoView({ behavior: 'smooth' }); }}>
                {l.emoji} {l.name}
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
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sunken text-2xl" aria-hidden="true">{l.emoji}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-bold">Level {l.id}: {l.name}</h3>
                    <p className="text-sm text-muted">{l.desc}</p>
                  </div>
                  <div className="hidden w-40 sm:block">
                    <p className="mb-1 text-right text-xs font-semibold text-muted">{solved}/{total} soal</p>
                    <Bar pct={Math.round((solved / total) * 100)} />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {mods.map((m) => {
                    const st = p.moduleStats(m);
                    return (
                      <a
                        key={m.id}
                        href={href(`modul/${m.id}`)}
                        className={`card group flex flex-col border-l-4 p-5 transition hover:-translate-y-0.5 hover:shadow-lg ${tone.bar}`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-3xl" aria-hidden="true">{m.emoji}</span>
                          {st.complete ? <span className="chip bg-ok-soft text-ok">✓ Selesai</span> : st.solved > 0 ? <span className="chip">Berjalan</span> : null}
                        </div>
                        <h4 className="mt-3 text-lg font-bold leading-snug group-hover:text-brand">{m.title}</h4>
                        <p className="mt-1 flex-1 text-sm text-muted">{m.tagline}</p>
                        <div className="mt-4">
                          <div className="mb-1.5 flex justify-between text-xs font-semibold text-muted">
                            <span>{st.solved}/{st.total} soal</span>
                            <span>± {m.minutes} menit</span>
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
        <a href={href('kamus')} className="card flex gap-4 p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
          <span className="text-4xl" aria-hidden="true">📖</span>
          <span><strong className="block text-lg">Kamus Rumus</strong><span className="text-muted">Cari rumus dan baca penjelasannya dengan bahasa sederhana. Lengkap dengan contoh dan hasil langsung.</span></span>
        </a>
        <a href={href('bebas')} className="card flex gap-4 p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
          <span className="text-4xl" aria-hidden="true">🧪</span>
          <span><strong className="block text-lg">Ruang Coba</strong><span className="text-muted">Lembar kerja bebas untuk bereksperimen dengan rumus apa pun tanpa takut salah.</span></span>
        </a>
      </section>

      {started && (
        <section className="text-center">
          <button
            type="button"
            className="text-sm text-muted underline decoration-dotted underline-offset-4 hover:text-bad"
            onClick={() => { if (window.confirm('Hapus semua progres belajar di browser ini? Tindakan ini tidak bisa dibatalkan.')) p.reset(); }}
          >
            Mulai ulang semua progres
          </button>
        </section>
      )}
    </div>
  );
}
