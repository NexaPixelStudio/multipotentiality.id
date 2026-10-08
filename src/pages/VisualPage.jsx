import React, { useEffect, useMemo, useRef, useState } from 'react';
import Icon, { IconBadge } from '../components/Icon.jsx';
import { CONCEPTS } from '../lib/visualConcepts.js';
import { makeRound } from '../lib/quiz.js';
import { localizeFormula } from '../lib/text.jsx';
import { numToCol } from '../engine/refs.js';
import { useProgress } from '../state/progress.jsx';
import { href } from '../lib/router.js';

const fmtNum = (v) => (typeof v === 'number' ? v.toLocaleString('id-ID', { maximumFractionDigits: 4 }) : v);
const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

// ------------------------------------------------------------ Tabel mini

function MiniSheet({ rows, header = true, cols, states = {}, outs = {}, label }) {
  const nCols = Math.max(cols || 0, ...rows.map((r) => r.length), 1);
  return (
    <div className="sheet-wrap rounded-xl border border-line bg-surface" role="img" aria-label={label}>
      <table className="sheet vz-sheet">
        <thead>
          <tr>
            <th className="w-10" />
            {Array.from({ length: nCols }, (_, c) => <th key={c}>{numToCol(c + 1)}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              <th>{ri + 1}</th>
              {Array.from({ length: nCols }, (_, ci) => {
                const key = `${numToCol(ci + 1)}${ri + 1}`;
                const st = states[key];
                const hasOut = Object.prototype.hasOwnProperty.call(outs, key);
                const raw = hasOut ? outs[key] : row[ci];
                const isNum = typeof raw === 'number';
                return (
                  <td key={ci} className={`${isNum ? 'num' : ''} ${header && ri === 0 ? 'head' : ''} ${st ? `v-${st}` : ''}`}>
                    {raw === null || raw === undefined ? '' : <span key={String(raw) + (st || '')} className={hasOut ? 'vz-pop' : ''}>{fmtNum(raw)}</span>}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FormulaStrip({ cell, formula, locale }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-line bg-sunken px-3 py-2 text-sm">
      <span className="rounded bg-surface px-2 py-0.5 font-semibold text-muted">{cell || '...'}</span>
      <span className="font-serif italic text-brand" aria-hidden="true">fx</span>
      <code key={formula} className="formula-input min-w-0 flex-1 overflow-x-auto whitespace-nowrap text-ink vz-pop">{formula ? localizeFormula(formula, locale) : ''}</code>
    </div>
  );
}

// ------------------------------------------------------------ Pemutar langkah

function useStepper(count, deps) {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(() => !reducedMotion());
  useEffect(() => {
    setI(0);
    setPlaying(!reducedMotion());
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!playing) return undefined;
    if (i >= count - 1) {
      setPlaying(false);
      return undefined;
    }
    const t = setTimeout(() => setI((n) => n + 1), 1700);
    return () => clearTimeout(t);
  }, [playing, i, count]);
  return {
    i,
    playing,
    go: (n) => { setPlaying(false); setI(Math.max(0, Math.min(count - 1, n))); },
    toggle: () => {
      if (!playing && i >= count - 1) setI(0);
      setPlaying((p) => !p);
    },
    restart: () => { setI(0); setPlaying(true); }
  };
}

function Controls({ st, count }) {
  const last = st.i >= count - 1;
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-1.5">
        <button type="button" className="btn-soft !min-h-[40px] !px-3" onClick={() => st.go(st.i - 1)} disabled={st.i === 0} aria-label="Langkah sebelumnya"><Icon name="arrow-left" size={18} /></button>
        <button type="button" className="btn-primary !min-h-[40px] !px-4" onClick={st.toggle} aria-label={st.playing ? 'Jeda' : last ? 'Putar ulang' : 'Putar'}>
          <Icon name={st.playing ? 'pause' : last ? 'rotate' : 'play'} size={18} />
          {st.playing ? 'Jeda' : last ? 'Ulangi' : 'Putar'}
        </button>
        <button type="button" className="btn-soft !min-h-[40px] !px-3" onClick={() => st.go(st.i + 1)} disabled={last} aria-label="Langkah berikutnya"><Icon name="arrow-right" size={18} /></button>
      </div>
      <div className="flex items-center gap-1.5" role="group" aria-label="Pilih langkah">
        {Array.from({ length: count }, (_, n) => (
          <button key={n} type="button" onClick={() => st.go(n)} aria-label={`Langkah ${n + 1}`} aria-current={n === st.i ? 'step' : undefined} className={`vz-dot ${n === st.i ? 'is-now' : n < st.i ? 'is-past' : ''}`} />
        ))}
      </div>
      <span className="ml-auto text-sm font-semibold text-muted">Langkah {st.i + 1} dari {count}</span>
    </div>
  );
}

function GridPlayer({ concept, spec, locale }) {
  const steps = spec.steps;
  const st = useStepper(steps.length, [concept.id]);
  const step = steps[st.i];
  return (
    <div className="space-y-4">
      <FormulaStrip cell={step.fx || spec.fx} formula={step.formula} locale={locale} />
      <MiniSheet rows={spec.rows} cols={spec.labelCols} states={step.cells} outs={step.out || {}} label={`Tabel contoh: ${concept.title}`} />
      <div className="flex flex-wrap items-stretch gap-3">
        <p key={st.i} className={`vz-note flex-1 basis-72 ${step.wrong ? 'is-wrong' : ''}`} aria-live="polite">
          <Icon name={step.wrong ? 'alert' : 'bulb'} size={20} className="mt-0.5 flex-none" />
          <span>{step.note}</span>
        </p>
        {step.total !== null && step.total !== undefined && (
          <div className="vz-total" aria-hidden="true">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">Jumlah berjalan</span>
            <span key={step.total} className="vz-pop text-3xl font-bold text-brand">{fmtNum(step.total)}</span>
          </div>
        )}
      </div>
      <Controls st={st} count={steps.length} />
    </div>
  );
}

// ------------------------------------------------------------ Urutan operasi

function OrderPlayer({ concept, spec }) {
  const st = useStepper(spec.steps.length, [concept.id]);
  const step = spec.steps[st.i];
  return (
    <div className="space-y-4">
      <div className="flex min-h-[7rem] flex-wrap items-center justify-center gap-2 rounded-2xl border border-line bg-sunken px-4 py-6 font-mono text-3xl font-bold sm:text-4xl" role="img" aria-label={`Ekspresi: ${step.expr.map((t) => t[0]).join(' ')}`}>
        <span className="mr-2 font-serif text-xl italic text-brand">=</span>
        {step.expr.map((t, k) => (
          <span key={`${st.i}-${k}`} className={`vz-token vz-pop ${step.hl.includes(k) ? 'is-hl' : ''} ${step.done ? 'is-done' : ''}`} style={{ '--i': k }}>{t[0]}</span>
        ))}
      </div>
      <p key={st.i} className="vz-note" aria-live="polite"><Icon name="bulb" size={20} className="mt-0.5 flex-none" /><span>{step.note}</span></p>
      <div className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-4" aria-label="Urutan prioritas">
        {[['1', 'Kurung ( )'], ['2', 'Pangkat ^'], ['3', 'Kali * dan bagi /'], ['4', 'Tambah + dan kurang -']].map(([n, t]) => (
          <div key={n} className="flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2"><span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-brand text-xs font-bold text-brand-ink">{n}</span>{t}</div>
        ))}
      </div>
      <Controls st={st} count={spec.steps.length} />
    </div>
  );
}

// ------------------------------------------------------------ IF interaktif

function IfPlayer({ locale }) {
  const [score, setScore] = useState(55);
  const pass = score >= 70;
  const formula = '=IF(B2>=70,"Lulus","Remedial")';
  return (
    <div className="space-y-4">
      <FormulaStrip cell="C2" formula={formula} locale={locale} />
      <div className="rounded-2xl border border-line bg-surface p-4 sm:p-5">
        <label htmlFor="if-score" className="flex items-center justify-between text-sm font-semibold">
          <span>Geser nilai di B2</span>
          <span className="rounded-lg bg-brand-soft px-3 py-1 text-lg font-bold text-brand tabular-nums">{score}</span>
        </label>
        <input id="if-score" type="range" min="0" max="100" value={score} onChange={(e) => setScore(Number(e.target.value))} className="vz-range mt-3 w-full" />
        <div className="vz-flow mt-5">
          <div className="vz-node"><span className="text-xs font-semibold text-muted">Nilai B2</span><strong key={score} className="text-2xl tabular-nums">{score}</strong></div>
          <Icon name="arrow-right" size={22} className="vz-arrow flex-none text-muted" />
          <div className={`vz-node vz-test ${pass ? 'is-yes' : 'is-no'}`}>
            <span className="text-xs font-semibold text-muted">Uji</span>
            <strong>B2 &gt;= 70 ?</strong>
            <span key={String(pass)} className="vz-pop text-sm font-bold">{pass ? 'Benar' : 'Salah'}</span>
          </div>
          <Icon name="arrow-right" size={22} className="vz-arrow flex-none text-muted" />
          <div className="grid gap-2">
            <div className={`vz-node vz-branch ${pass ? 'is-on' : ''}`}><span className="text-xs font-semibold text-muted">Jika benar</span><strong>Lulus</strong></div>
            <div className={`vz-node vz-branch ${!pass ? 'is-on is-bad' : ''}`}><span className="text-xs font-semibold text-muted">Jika salah</span><strong>Remedial</strong></div>
          </div>
        </div>
      </div>
      <p className="vz-note" aria-live="polite">
        <Icon name="bulb" size={20} className="mt-0.5 flex-none" />
        <span>Nilai {score} {pass ? 'memenuhi' : 'belum memenuhi'} syarat B2&gt;=70, jadi sel C2 menampilkan <strong key={String(pass)} className="vz-pop inline-block">{pass ? 'Lulus' : 'Remedial'}</strong>. Coba geser tepat ke 69 lalu 70 untuk melihat batasnya.</span>
      </p>
    </div>
  );
}

// ------------------------------------------------------------ Animasi konsep

function ConceptsTab({ locale }) {
  const [id, setId] = useState(CONCEPTS[0].id);
  const concept = CONCEPTS.find((c) => c.id === id);
  const spec = useMemo(() => concept.build(), [concept]);
  return (
    <div className="space-y-5">
      <div className="auto-grid" role="tablist" aria-label="Pilih konsep">
        {CONCEPTS.map((c, i) => (
          <button key={c.id} type="button" role="tab" aria-selected={c.id === id} onClick={() => setId(c.id)} className={`vz-pick rise ${c.id === id ? 'is-on' : ''}`} style={{ '--i': i }}>
            <IconBadge name={c.icon} tone={c.tone} size={22} className="h-11 w-11" />
            <span className="min-w-0 text-left"><strong className="block leading-tight">{c.title}</strong><span className="text-sm text-muted">{c.blurb}</span></span>
          </button>
        ))}
      </div>
      <section className="card p-4 sm:p-6" aria-label={concept.title}>
        <h2 className="mb-4 flex items-center gap-2 text-lg font-bold"><Icon name={concept.icon} size={20} className="text-brand" />{concept.title}</h2>
        {spec.interactive === 'if' ? <IfPlayer locale={locale} /> : spec.text ? <OrderPlayer concept={concept} spec={spec} /> : <GridPlayer concept={concept} spec={spec} locale={locale} />}
      </section>
    </div>
  );
}

// ------------------------------------------------------------ Tebak Hasil

const XP_PER = 3;
const XP_PERFECT = 5;

function Ring({ pct }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 128 128" width="132" height="132" aria-hidden="true">
      <circle cx="64" cy="64" r={r} fill="none" stroke="rgb(var(--line))" strokeWidth="10" />
      <circle cx="64" cy="64" r={r} fill="none" stroke="rgb(var(--brand))" strokeWidth="10" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c} transform="rotate(-90 64 64)" className="vz-ring" style={{ '--to': c * (1 - pct) }} />
    </svg>
  );
}

function GuessTab({ locale }) {
  const progress = useProgress();
  const [round, setRound] = useState(() => makeRound());
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [rewarded, setRewarded] = useState(false);
  const nextRef = useRef(null);

  const q = round[idx];
  const answered = picked !== null;
  const correct = answered && picked === q.answerIndex;

  useEffect(() => {
    if (answered) nextRef.current?.focus();
  }, [answered]);

  const choose = (n) => {
    if (answered) return;
    setPicked(n);
    if (n === q.answerIndex) setScore((s) => s + 1);
  };
  const next = () => {
    if (idx + 1 >= round.length) {
      if (!rewarded) {
        progress.addXp(score * XP_PER + (score === round.length ? XP_PERFECT : 0));
        setRewarded(true);
      }
      setDone(true);
    } else {
      setIdx(idx + 1);
      setPicked(null);
    }
  };
  const again = () => {
    setRound(makeRound());
    setIdx(0);
    setPicked(null);
    setScore(0);
    setDone(false);
    setRewarded(false);
  };

  if (done) {
    const total = round.length;
    const perfect = score === total;
    const earned = score * XP_PER + (perfect ? XP_PERFECT : 0);
    const msg = perfect ? 'Sempurna. Anda membaca semua rumus dengan tepat.' : score >= 3 ? 'Bagus. Beberapa rumus masih layak dipelajari ulang.' : 'Tidak apa-apa. Buka animasi konsep lalu coba lagi.';
    return (
      <div className="card mx-auto max-w-xl p-6 text-center sm:p-8">
        <div className="relative mx-auto grid h-[132px] w-[132px] place-items-center">
          <Ring pct={score / total} />
          <div className="absolute inset-0 grid place-items-center"><span className="text-3xl font-bold tabular-nums">{score}<span className="text-lg text-muted">/{total}</span></span></div>
        </div>
        <h2 className="mt-3 text-xl font-bold">{perfect ? 'Skor sempurna' : 'Ronde selesai'}</h2>
        <p className="mt-1 text-muted">{msg}</p>
        <p className="mt-3"><span className="chip"><Icon name="star" size={14} className="text-amber-500" />+{earned} XP</span></p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <button type="button" className="btn-primary" onClick={again}><Icon name="rotate" size={18} />Main lagi</button>
          <a href={href('')} className="btn-soft">Kembali belajar</a>
        </div>
      </div>
    );
  }

  const lvLabel = ['', 'Mudah', 'Sedang', 'Menantang'][q.level];
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <div className="flex items-center gap-3">
        <div className="bar-track h-2.5 flex-1" role="progressbar" aria-valuemin={0} aria-valuemax={round.length} aria-valuenow={idx + (answered ? 1 : 0)} aria-label="Kemajuan ronde">
          <div className="bar-fill h-full" style={{ width: `${((idx + (answered ? 1 : 0)) / round.length) * 100}%` }} />
        </div>
        <span className="text-sm font-semibold text-muted">Soal {idx + 1} dari {round.length}</span>
        <span className="chip">{lvLabel}</span>
      </div>

      <section key={idx} className="card page-enter space-y-4 p-4 sm:p-6" aria-label={`Soal ${idx + 1}`}>
        <h2 className="text-lg font-bold">Berapa hasil rumus ini?</h2>
        <FormulaStrip cell="Hasil" formula={q.formula} locale={locale} />
        {q.rows.length > 1 && <MiniSheet rows={q.rows} header={typeof q.rows[0][0] === 'string' && q.rows[0][0] !== ''} label="Data soal" />}
        <div className="grid gap-2.5 sm:grid-cols-2" role="group" aria-label="Pilihan jawaban">
          {q.options.map((o, n) => {
            const state = !answered ? '' : n === q.answerIndex ? 'is-right' : n === picked ? 'is-wrong' : 'is-dim';
            return (
              <button key={n} type="button" disabled={answered} onClick={() => choose(n)} className={`vz-opt ${state}`} aria-label={`Pilihan ${'ABCD'[n]}: ${o}`}>
                <span className="vz-opt-key">{'ABCD'[n]}</span>
                <span className="min-w-0 flex-1 break-words text-left font-semibold">{o}</span>
                {answered && n === q.answerIndex && <Icon name="check-circle" size={22} className="flex-none" />}
                {answered && n === picked && n !== q.answerIndex && <Icon name="x" size={22} className="flex-none" />}
              </button>
            );
          })}
        </div>
        {answered && (
          <div className={`vz-note ${correct ? '' : 'is-wrong'} page-enter`} aria-live="polite">
            <Icon name={correct ? 'sparkles' : 'bulb'} size={20} className="mt-0.5 flex-none" />
            <span><strong>{correct ? 'Tepat. ' : `Jawaban yang benar: ${q.answer}. `}</strong>{q.note}</span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted">Skor sementara: <strong className="text-ink">{score}</strong></span>
          <button ref={nextRef} type="button" className="btn-primary" onClick={next} disabled={!answered}>
            {idx + 1 >= round.length ? 'Lihat hasil' : 'Soal berikutnya'}<Icon name="arrow-right" size={18} className="icon-slide" />
          </button>
        </div>
      </section>
    </div>
  );
}

// ------------------------------------------------------------ Halaman

export default function VisualPage() {
  const { locale } = useProgress();
  const [tab, setTab] = useState('animasi');
  const tabs = [['animasi', 'Animasi konsep', 'play'], ['tebak', 'Tebak hasil', 'zap']];
  return (
    <div className="space-y-6">
      <div className="hero card relative overflow-hidden p-6 sm:p-8">
        <div className="blob blob-a" aria-hidden="true" />
        <div className="relative">
          <span className="chip mb-2"><Icon name="sparkles" size={14} />Cara belajar baru</span>
          <h1 className="text-2xl font-bold sm:text-3xl">Lab Visual</h1>
          <p className="mt-1 max-w-2xl text-muted">Lihat rumus bekerja langkah demi langkah lewat animasi, lalu uji pemahaman Anda dengan menebak hasilnya.</p>
        </div>
      </div>

      <div className="vz-tabs" role="tablist" aria-label="Metode belajar">
        {tabs.map(([k, label, icon]) => (
          <button key={k} type="button" role="tab" aria-selected={tab === k} onClick={() => setTab(k)} className={`vz-tab ${tab === k ? 'is-on' : ''}`}>
            <Icon name={icon} size={18} />{label}
          </button>
        ))}
      </div>

      {tab === 'animasi' ? <ConceptsTab locale={locale} /> : <GuessTab locale={locale} />}
    </div>
  );
}
