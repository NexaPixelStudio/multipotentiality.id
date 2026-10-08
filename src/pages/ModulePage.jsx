import React, { useEffect } from 'react';
import { LEVELS, MODULE_BY_ID, MODULES } from '../content/index.js';
import { Blocks } from '../components/Blocks.jsx';
import { Rich } from '../lib/text.jsx';
import { href } from '../lib/router.js';
import { TONE } from '../lib/tone.js';
import { useProgress } from '../state/progress.jsx';
import Icon, { IconBadge } from '../components/Icon.jsx';

export default function ModulePage({ id }) {
  const p = useProgress();
  const m = MODULE_BY_ID[id];

  useEffect(() => {
    if (m) document.title = `${m.title} - Belajar Excel`;
    return () => { document.title = 'Belajar Excel dari Nol sampai Mahir'; };
  }, [m]);

  if (!m) return <NotFound />;

  const level = LEVELS.find((l) => l.id === m.level);
  const st = p.moduleStats(m);
  const idx = MODULES.findIndex((x) => x.id === m.id);
  const nextModule = MODULES[idx + 1];
  const prevModule = MODULES[idx - 1];
  const firstTodo = m.exercises.findIndex((e) => !p.done[e.id]);
  const startIndex = firstTodo === -1 ? 0 : firstTodo;
  const tone = TONE[level.tone];

  return (
    <article className="space-y-8">
      <nav aria-label="Jejak halaman" className="text-sm text-muted">
        <a href={href('')} className="hover:text-brand">Beranda</a> <span aria-hidden="true">/</span> <span>Level {level.id}: {level.name}</span>
      </nav>

      <header className={`card border-l-4 p-6 sm:p-8 ${tone.bar}`}>
        <div className="flex items-start gap-4">
          <IconBadge name={m.icon} tone={level.tone} size={34} className="h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]" />
          <div className="min-w-0">
            <h1 className="text-3xl font-extrabold leading-tight">{m.title}</h1>
            <p className="mt-1 text-lg text-muted">{m.tagline}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="chip gap-1.5"><Icon name="clock" size={13} />{m.minutes} menit</span>
              <span className="chip gap-1.5"><Icon name="file-text" size={13} />{m.exercises.length} soal</span>
              <span className="chip gap-1.5"><Icon name={level.icon} size={13} />Level {level.id}</span>
              {st.complete && <span className="chip gap-1.5 bg-ok-soft text-ok"><Icon name="check" size={13} strokeWidth={2.6} />Selesai</span>}
            </div>
          </div>
        </div>
        <div className="mt-5 rounded-xl bg-brand-soft p-4">
          <p className="text-sm font-bold uppercase tracking-wide text-brand">Kenapa ini penting?</p>
          <p className="mt-1"><Rich text={m.why} locale={p.locale} /></p>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="#materi" className="btn-soft" onClick={(e) => { e.preventDefault(); document.getElementById('materi')?.scrollIntoView({ behavior: 'smooth' }); }}>Baca materi<Icon name="arrow-down" size={17} /></a>
          <a href={href(`latihan/${m.id}/${startIndex + 1}`)} className="btn-primary">
            {st.solved > 0 && !st.complete ? 'Lanjutkan latihan' : st.complete ? 'Ulangi latihan' : 'Langsung ke latihan'}<Icon name="arrow-right" size={18} className="icon-slide" />
          </a>
        </div>
      </header>

      <section id="materi" className="scroll-mt-24 space-y-8" aria-label="Materi">
        {m.lessons.map((l, i) => (
          <section key={l.title} className="card rise p-6 sm:p-8" style={{ '--i': Math.min(i, 3) }} aria-labelledby={`l-${i}`}>
            <h2 id={`l-${i}`} className="mb-4 flex items-center gap-3 text-xl font-bold">
              <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-brand text-sm font-bold text-brand-ink">{i + 1}</span>
              {l.title}
            </h2>
            <Blocks blocks={l.body} locale={p.locale} />
          </section>
        ))}
      </section>

      <section className="card p-6 sm:p-8" aria-labelledby="latihan">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="latihan" className="text-xl font-bold">Latihan ({st.solved}/{st.total} selesai)</h2>
          <a
            href={href(`latihan/${m.id}/${startIndex + 1}`)}
            className="btn-primary"
            onClick={() => p.markRead(m.id)}
          >
            Aku siap, mulai latihan<Icon name="arrow-right" size={18} className="icon-slide" />
          </a>
        </div>
        <ol className="mt-5 divide-y divide-line rounded-xl border border-line">
          {m.exercises.map((e, i) => {
            const d = p.done[e.id];
            return (
              <li key={e.id}>
                <a href={href(`latihan/${m.id}/${i + 1}`)} className="group flex items-center gap-3 px-4 py-3 transition hover:bg-sunken">
                  <span className={`grid h-7 w-7 flex-none place-items-center rounded-full text-xs font-bold transition-transform group-hover:scale-110 ${d?.solved ? 'bg-ok text-surface' : d?.revealed ? 'bg-warn-soft text-warn' : 'bg-sunken text-muted'}`}>
                    {d?.solved ? <Icon name="check" size={15} strokeWidth={3} /> : d?.revealed ? <Icon name="eye" size={15} /> : i + 1}
                  </span>
                  <span className="min-w-0 flex-1 font-medium">{e.title}</span>
                  <span className="chip">{e.type === 'choice' ? 'Pilihan' : 'Rumus'}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </section>

      {st.complete && (
        <section className="card anim-pop border-ok/40 bg-ok-soft p-6 text-center">
          <span className="check-draw mx-auto grid h-14 w-14 place-items-center rounded-full bg-ok/15 text-ok"><svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9.2" /><path d="M8 12.4l3 3 5-6" /></svg></span>
          <h2 className="mt-2 text-xl font-bold">Modul selesai!</h2>
          <p className="text-muted">Kerja bagus. Siap lanjut?</p>
          {nextModule && <a href={href(`modul/${nextModule.id}`)} className="btn-primary mt-4">Modul berikutnya: {nextModule.title}<Icon name="arrow-right" size={18} className="icon-slide" /></a>}
        </section>
      )}

      <nav className="flex flex-wrap justify-between gap-3" aria-label="Modul lain">
        {prevModule ? <a href={href(`modul/${prevModule.id}`)} className="btn-soft"><Icon name="arrow-left" size={18} className="icon-slide-back" />{prevModule.title}</a> : <span />}
        {nextModule && <a href={href(`modul/${nextModule.id}`)} className="btn-soft">{nextModule.title}<Icon name="arrow-right" size={18} className="icon-slide" /></a>}
      </nav>
    </article>
  );
}

function NotFound() {
  return (
    <div className="card p-10 text-center">
      <span className="icon-badge mx-auto grid h-16 w-16 place-items-center rounded-3xl"><Icon name="help" size={32} /></span>
      <h1 className="mt-3 text-xl font-bold">Modul tidak ditemukan</h1>
      <a href={href('')} className="btn-primary mt-4">Kembali ke beranda</a>
    </div>
  );
}
