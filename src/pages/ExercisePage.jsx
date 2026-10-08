import React, { useEffect, useMemo, useRef, useState } from 'react';
import { LEVELS, MODULE_BY_ID, MODULES } from '../content/index.js';
import { createContext } from '../engine/evaluator.js';
import { parse, walk } from '../engine/parser.js';
import { checkFormula, previewFormula } from '../engine/check.js';
import { parseAddr } from '../engine/refs.js';
import Sheet from '../components/Sheet.jsx';
import FormulaBar from '../components/FormulaBar.jsx';
import { useRefPicker } from '../lib/picker.js';
import { Rich, localizeFormula, localizeText, seededShuffle } from '../lib/text.jsx';
import { href } from '../lib/router.js';
import { earnXp, useProgress } from '../state/progress.jsx';

const PIECES = ['🎉', '✨', '🟢', '⭐', '🎊', '💚'];

function Celebrate() {
  const pieces = useMemo(
    () => Array.from({ length: 14 }, (_, i) => ({
      ch: PIECES[i % PIECES.length],
      dx: `${Math.round((Math.random() - 0.5) * 340)}px`,
      dy: `${Math.round(-60 - Math.random() * 160)}px`,
      rot: `${Math.round((Math.random() - 0.5) * 540)}deg`
    })),
    []
  );
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-0" aria-hidden="true">
      {pieces.map((pc, i) => (
        <span key={i} className="confetti-piece" style={{ '--dx': pc.dx, '--dy': pc.dy, '--rot': pc.rot }}>{pc.ch}</span>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------- Navigasi

function useNav(ex) {
  const m = MODULE_BY_ID[ex.moduleId];
  const nextInModule = m.exercises[ex.index + 1];
  const nextModule = MODULES[m.order + 1];
  return {
    module: m,
    next: nextInModule
      ? { href: href(`latihan/${m.id}/${ex.index + 2}`), label: 'Soal berikutnya' }
      : { href: href(`modul/${m.id}`), label: nextModule ? 'Selesai modul ini' : 'Selesai' }
  };
}

function Dots({ module, current, done }) {
  return (
    <nav aria-label="Daftar soal" className="flex flex-wrap items-center gap-1.5">
      {module.exercises.map((e, i) => {
        const d = done[e.id];
        const isCur = i === current;
        return (
          <a
            key={e.id}
            href={href(`latihan/${module.id}/${i + 1}`)}
            title={e.title}
            aria-label={`Soal ${i + 1}: ${e.title}${d?.solved ? ' (selesai)' : ''}`}
            aria-current={isCur ? 'step' : undefined}
            className={`grid h-8 min-w-8 place-items-center rounded-full px-1 text-xs font-bold transition ${
              isCur ? 'bg-brand text-brand-ink ring-2 ring-brand/40 ring-offset-2 ring-offset-bg' : d?.solved ? 'bg-ok-soft text-ok' : d?.revealed ? 'bg-warn-soft text-warn' : 'bg-sunken text-muted hover:bg-line'
            }`}
          >
            {d?.solved && !isCur ? '✓' : i + 1}
          </a>
        );
      })}
    </nav>
  );
}

// ---------------------------------------------------------------- Umpan balik

const STATUS_TITLE = {
  wrong: ['🤔', 'Belum tepat'],
  error: ['🚨', 'Rumusmu menghasilkan error'],
  syntax: ['✏️', 'Ada yang kurang pas di penulisan rumus'],
  'unknown-fn': ['🔤', 'Nama fungsi tidak dikenal'],
  argcount: ['🧮', 'Jumlah argumen belum sesuai'],
  mustuse: ['🎯', 'Coba pakai fungsi yang sedang dilatih'],
  forbid: ['🎯', 'Coba cara lain'],
  hardcode: ['🔗', 'Ambil data dari tabel'],
  noequals: ['＝', 'Awali dengan tanda ='],
  empty: ['✍️', 'Tulis rumusmu dulu']
};

function Feedback({ result, locale, ex }) {
  if (!result) return null;
  if (result.status === 'correct') return null;
  const [icon, title] = STATUS_TITLE[result.status] || ['🤔', 'Belum tepat'];
  return (
    <div role="alert" className="anim-shake rounded-2xl border border-bad/30 bg-bad-soft p-4">
      <p className="flex items-center gap-2 font-bold text-bad"><span aria-hidden="true">{icon}</span> {title}</p>
      <p className="mt-1 text-ink"><Rich text={result.message} locale={locale} /></p>
      {(result.status === 'wrong' || result.status === 'error') && result.shown !== undefined && (
        <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
          <div className="rounded-lg bg-surface/70 px-3 py-2">
            <dt className="text-xs font-semibold text-muted">Hasil rumusmu</dt>
            <dd className="font-mono font-semibold break-words">{result.shown || '(kosong)'}</dd>
          </div>
          {result.status === 'wrong' && (
            <div className="rounded-lg bg-surface/70 px-3 py-2">
              <dt className="text-xs font-semibold text-muted">Yang diminta soal</dt>
              <dd className="font-mono font-semibold break-words">{result.expectedShown}</dd>
            </div>
          )}
        </dl>
      )}
    </div>
  );
}

function Success({ ex, result, xp, locale, revealed, onNext, nav }) {
  const solutionShown = localizeFormula(ex.solution, locale);
  return (
    <div className="relative space-y-4">
      {!revealed && <Celebrate />}
      <div className="anim-pop rounded-2xl border border-ok/40 bg-ok-soft p-5">
        <p className="flex flex-wrap items-center gap-2 text-lg font-extrabold text-ok">
          <span aria-hidden="true">{revealed ? '👁️' : '🎉'}</span>
          {revealed ? 'Ini jawabannya. Pelajari dulu, lalu lanjut.' : 'Benar! Kerja bagus.'}
          {!revealed && xp > 0 && <span className="chip bg-surface text-ok">+{xp} XP</span>}
        </p>
        {result?.shown !== undefined && !revealed && <p className="mt-1 text-sm text-ink">Hasil rumusmu: <strong className="font-mono">{result.shown}</strong></p>}
        {result?.note && <p className="mt-2 rounded-lg bg-surface/70 px-3 py-2 text-sm text-ink">{result.note}</p>}
      </div>

      <section className="card p-5">
        <h3 className="mb-2 text-base font-bold">💬 Kenapa begitu?</h3>
        <p className="leading-relaxed"><Rich text={ex.explain} locale={locale} /></p>

        <div className="mt-4 overflow-x-auto rounded-xl bg-sunken px-4 py-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted">Salah satu rumus yang benar</p>
          <code className="formula-input whitespace-nowrap font-semibold text-brand">{solutionShown}</code>
        </div>

        {ex.parts?.length > 0 && (
          <div className="mt-4">
            <h4 className="mb-2 text-sm font-bold text-muted">Bedah rumus</h4>
            <dl className="divide-y divide-line rounded-xl border border-line">
              {ex.parts.map(([token, meaning], i) => (
                <div key={i} className="grid gap-1 px-4 py-2 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-4">
                  <dt className="font-mono text-sm font-semibold break-words">{localizeFormula(token, locale)}</dt>
                  <dd className="text-sm text-muted">{meaning}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {ex.alt?.length > 0 && (
          <div className="mt-4">
            <h4 className="mb-1 text-sm font-bold text-muted">Cara lain yang juga benar</h4>
            <ul className="space-y-1">
              {ex.alt.map((a) => <li key={a}><code className="formula-input break-all text-sm">{localizeFormula(a, locale)}</code></li>)}
            </ul>
          </div>
        )}
      </section>

      <div className="flex flex-wrap gap-3">
        <a href={nav.next.href} className="btn-primary" onClick={onNext}>{nav.next.label} →</a>
        <a href={href(`modul/${nav.module.id}`)} className="btn-soft">Kembali ke materi</a>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------- Soal rumus

function sheetRefs(input, locale, targetSheet) {
  if (!input.startsWith('=')) return [];
  let ast;
  try {
    ast = parse(input, locale);
  } catch {
    return [];
  }
  const out = [];
  walk(ast, (n) => {
    if (n.t === 'cell') out.push({ sheet: n.sheet || targetSheet, r1: n.r, c1: n.c, r2: n.r, c2: n.c });
    else if (n.t === 'range') out.push({ sheet: n.sheet || targetSheet, r1: Math.min(n.a.r, n.b.r), c1: Math.min(n.a.c, n.b.c), r2: Math.max(n.a.r, n.b.r), c2: Math.max(n.a.c, n.b.c) });
  });
  return out;
}

function FormulaExercise({ ex, locale, p }) {
  const nav = useNav(ex);
  const t = useMemo(() => ({ ...parseAddr(ex.target), sheet: ex.targetSheet || ex.sheets[0].name }), [ex]);
  const startText = ex.start ? localizeFormula(ex.start, locale) : '';
  const [input, setInput] = useState(startText);
  const [tries, setTries] = useState(0);
  const [hints, setHints] = useState(0);
  const [result, setResult] = useState(null);
  const [state, setState] = useState('idle'); // idle | solved | revealed
  const [xp, setXp] = useState(0);
  const [tab, setTab] = useState(t.sheet);
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const feedbackRef = useRef(null);

  const picker = useRefPicker({ inputRef, value: input, setValue: setInput, homeSheet: t.sheet });

  const ctx = useMemo(() => createContext(ex.sheets, { locale, now: () => new Date(Date.UTC(2025, 5, 15)) }), [ex, locale]);

  const preview = useMemo(() => previewFormula(ex, input, locale), [ex, input, locale]);

  const overrides = useMemo(() => {
    const m = new Map();
    if (!preview) return m;
    const val = preview.value;
    if (Array.isArray(val)) {
      val.forEach((row, i) => row.forEach((v, j) => m.set(`${t.r + i},${t.c + j}`, { value: v, fmt: ex.resultFmt, kind: i === 0 && j === 0 ? 'target' : 'ghost' })));
    } else if (preview.ok || preview.value !== undefined) m.set(`${t.r},${t.c}`, { value: val, fmt: ex.resultFmt, kind: 'target' });
    return m;
  }, [preview, t, ex.resultFmt]);

  const refs = useMemo(() => sheetRefs(input, locale, t.sheet), [input, locale, t.sheet]);

  const submit = () => {
    if (state !== 'idle') return;
    const r = checkFormula(ex, input, locale);
    const n = tries + 1;
    setResult(r);
    setTries(n);
    if (r.status === 'correct') {
      const lvl = MODULE_BY_ID[ex.moduleId].level;
      setXp(earnXp(lvl, hints, n));
      setState('solved');
      p.markSolved(ex.id, { hints, tries: n });
    }
  };

  const reveal = () => {
    setState('revealed');
    setInput(localizeFormula(ex.solution, locale));
    setResult(null);
    p.markSolved(ex.id, { hints, tries, revealed: true });
  };

  const reset = () => {
    setInput(startText);
    setResult(null);
    inputRef.current?.focus();
  };

  // setelah memeriksa jawaban, pastikan umpan balik terlihat
  useEffect(() => {
    if (tries > 0 || state !== 'idle') feedbackRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [tries, state]);

  const canReveal = state === 'idle' && (tries >= 2 || hints >= 3);
  const pickMode = editing && input.startsWith('=');
  const tabs = ex.sheets;

  return (
    <div className="space-y-5">
      <section className="card p-5 sm:p-7">
        {ex.story && <p className="mb-2 rounded-lg bg-sunken px-3 py-2 text-sm text-muted"><Rich text={ex.story} locale={locale} /></p>}
        <p className="text-lg font-semibold leading-snug"><Rich text={ex.task} locale={locale} /></p>
        {ex.fillTo && (
          <p className="mt-2 text-sm text-muted">
            📋 Rumus ini akan <strong>disalin otomatis</strong> dari {ex.target} sampai {ex.fillTo}. Pastikan hasilnya benar di semua sel.
          </p>
        )}
      </section>

      <section className="card overflow-hidden" aria-label="Lembar kerja">
        {tabs.length > 1 && (
          <div className="flex gap-1 overflow-x-auto border-b border-line bg-sunken px-2 pt-2" role="tablist" aria-label="Sheet">
            {tabs.map((s) => (
              <button
                key={s.name}
                type="button"
                role="tab"
                aria-selected={tab === s.name}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setTab(s.name)}
                className={`whitespace-nowrap rounded-t-lg px-4 py-2 text-sm font-semibold ${tab === s.name ? 'bg-surface text-brand' : 'text-muted hover:bg-line/50'}`}
              >
                {s.name}{s.name === t.sheet ? ' ✎' : ''}
              </button>
            ))}
          </div>
        )}
        {tabs.filter((s) => s.name === tab).map((s) => (
          <Sheet
            key={s.name}
            def={s}
            ctx={ctx}
            locale={locale}
            overrides={s.name === t.sheet ? overrides : undefined}
            target={{ sheet: t.sheet, r: t.r, c: t.c }}
            refs={refs}
            live={picker.live}
            pickMode={pickMode}
            minCols={4}
            onDown={picker.onDown}
            onEnter={picker.onEnter}
            onSelect={(sheetName, r, c) => {
              if (sheetName === t.sheet && r === t.r && c === t.c) inputRef.current?.focus();
            }}
          />
        ))}
        {tabs.length > 1 && tab !== t.sheet && <p className="border-t border-line bg-info-soft px-4 py-2 text-xs text-info">Kamu sedang melihat sheet lain. Klik sel di sini untuk menyisipkan alamatnya ke rumus (otomatis diberi nama sheet).</p>}
      </section>

      <section className="space-y-3" aria-label="Jawaban">
        <FormulaBar
          value={input}
          onChange={(v) => { setInput(v); picker.reset(); }}
          onSubmit={submit}
          inputRef={inputRef}
          label={ex.target}
          locale={locale}
          placeholder={`Ketik rumus untuk ${ex.target}, mulai dengan =`}
          disabled={state !== 'idle'}
          onFocusChange={setEditing}
        />

        {state === 'idle' && preview && (
          <p className={`rounded-lg px-3 py-2 text-sm ${preview.ok ? 'bg-info-soft text-info' : 'bg-warn-soft text-warn'}`} aria-live="polite">
            {preview.ok ? <>Hasil sementara: <strong className="font-mono">{preview.text}</strong>{ex.fillTo ? <span className="opacity-80"> (sel pertama)</span> : null}</> : <>⚠️ {preview.text}</>}
          </p>
        )}
        {state === 'idle' && !input && (
          <p className="text-xs text-muted">Tips: saat kursor ada di kotak rumus setelah tanda <code className="rounded bg-sunken px-1">=</code> atau <code className="rounded bg-sunken px-1">(</code>, kamu bisa <strong>mengklik atau menyeret sel</strong> di tabel untuk mengisi alamatnya. {locale === 'id' ? 'Pemisah argumen: titik koma (;).' : 'Pemisah argumen: koma (,).'}</p>
        )}

        {state === 'idle' && (
          <div className="flex flex-wrap gap-2">
            <button type="button" className="btn-primary" onClick={submit}>✔ Periksa jawaban</button>
            <button type="button" className="btn-soft" onClick={() => setHints((h) => Math.min(3, h + 1))} disabled={hints >= 3}>
              💡 Petunjuk ({hints}/3)
            </button>
            {(input !== startText) && <button type="button" className="btn-ghost" onClick={reset}>↺ Ulang</button>}
            {canReveal && <button type="button" className="btn-ghost" onClick={reveal}>👁 Lihat jawaban</button>}
          </div>
        )}
      </section>

      {hints > 0 && state === 'idle' && (
        <section className="space-y-2" aria-label="Petunjuk" aria-live="polite">
          {ex.hints.slice(0, hints).map((h, i) => (
            <div key={i} className="anim-pop flex gap-3 rounded-xl border border-warn/30 bg-warn-soft p-3.5">
              <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-warn text-xs font-bold text-surface">{i + 1}</span>
              <p className="text-[0.97rem]"><Rich text={localizeText(h, locale)} locale={locale} /></p>
            </div>
          ))}
          {hints < 3 && <p className="text-xs text-muted">Petunjuk makin spesifik. Pakai seperlunya, XP berkurang sedikit tiap petunjuk.</p>}
        </section>
      )}

      <div ref={feedbackRef} className="scroll-mt-24">
        {state === 'idle' && <Feedback result={result} locale={locale} ex={ex} />}
      </div>

      {state !== 'idle' && <Success ex={ex} result={result} xp={xp} locale={locale} revealed={state === 'revealed'} nav={nav} onNext={() => {}} />}
    </div>
  );
}

// ---------------------------------------------------------------- Pilihan ganda

function ChoiceExercise({ ex, locale, p }) {
  const nav = useNav(ex);
  const order = useMemo(() => seededShuffle(ex.options.map((_, i) => i), ex.id), [ex]);
  const [wrong, setWrong] = useState([]);
  const [picked, setPicked] = useState(null);
  const [solved, setSolved] = useState(false);
  const [xp, setXp] = useState(0);

  const choose = (idx) => {
    if (solved || wrong.includes(idx)) return;
    setPicked(idx);
    if (idx === ex.answer) {
      const n = wrong.length + 1;
      setSolved(true);
      setXp(earnXp(MODULE_BY_ID[ex.moduleId].level, 0, n));
      p.markSolved(ex.id, { hints: 0, tries: n });
    } else {
      setWrong((w) => [...w, idx]);
    }
  };

  const letters = ['A', 'B', 'C', 'D', 'E'];
  return (
    <div className="space-y-5">
      <section className="card p-5 sm:p-7">
        <p className="text-lg font-semibold leading-snug"><Rich text={ex.q} locale={locale} /></p>
      </section>

      <div className="grid gap-3" role="group" aria-label="Pilihan jawaban">
        {order.map((idx, pos) => {
          const isWrong = wrong.includes(idx);
          const isRight = solved && idx === ex.answer;
          return (
            <button
              key={idx}
              type="button"
              disabled={solved || isWrong}
              onClick={() => choose(idx)}
              aria-pressed={picked === idx}
              className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition ${
                isRight ? 'border-ok bg-ok-soft' : isWrong ? 'border-bad/50 bg-bad-soft opacity-80' : 'border-line bg-surface hover:border-brand hover:bg-brand-soft'
              }`}
            >
              <span className={`grid h-8 w-8 flex-none place-items-center rounded-full text-sm font-bold ${isRight ? 'bg-ok text-surface' : isWrong ? 'bg-bad text-surface' : 'bg-sunken text-muted'}`}>
                {isRight ? '✓' : isWrong ? '✕' : letters[pos]}
              </span>
              <span className="min-w-0 flex-1"><Rich text={ex.options[idx]} locale={locale} /></span>
            </button>
          );
        })}
      </div>

      {!solved && picked !== null && wrong.includes(picked) && (
        <div role="alert" className="anim-shake rounded-2xl border border-bad/30 bg-bad-soft p-4">
          <p className="font-bold text-bad">🤔 Belum tepat. Coba pilihan lain.</p>
          {ex.whyNot?.[picked] && <p className="mt-1"><Rich text={ex.whyNot[picked]} locale={locale} /></p>}
        </div>
      )}

      {solved && (
        <div className="relative space-y-4">
          <Celebrate />
          <div className="anim-pop rounded-2xl border border-ok/40 bg-ok-soft p-5">
            <p className="flex flex-wrap items-center gap-2 text-lg font-extrabold text-ok">🎉 Benar! {xp > 0 && <span className="chip bg-surface text-ok">+{xp} XP</span>}</p>
          </div>
          <section className="card p-5">
            <h3 className="mb-2 text-base font-bold">💬 Penjelasan</h3>
            <p className="leading-relaxed"><Rich text={ex.explain} locale={locale} /></p>
          </section>
          <div className="flex flex-wrap gap-3">
            <a href={nav.next.href} className="btn-primary">{nav.next.label} →</a>
            <a href={href(`modul/${nav.module.id}`)} className="btn-soft">Kembali ke materi</a>
          </div>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------- Halaman

export default function ExercisePage({ moduleId, n }) {
  const p = useProgress();
  const m = MODULE_BY_ID[moduleId];
  const idx = Number(n) - 1;
  const ex = m?.exercises[idx];

  useEffect(() => {
    if (ex) document.title = `${ex.title} · ${m.title} · Belajar Excel`;
    return () => { document.title = 'Belajar Excel dari Nol sampai Mahir'; };
  }, [ex, m]);

  if (!m || !ex) {
    return (
      <div className="card p-10 text-center">
        <p className="text-4xl">🤔</p>
        <h1 className="mt-2 text-xl font-bold">Soal tidak ditemukan</h1>
        <a href={href('')} className="btn-primary mt-4">Kembali ke beranda</a>
      </div>
    );
  }

  const level = LEVELS.find((l) => l.id === m.level);
  const done = p.done[ex.id];

  return (
    <div className="space-y-5">
      <nav aria-label="Jejak halaman" className="flex flex-wrap items-center gap-x-2 text-sm text-muted">
        <a href={href('')} className="hover:text-brand">Beranda</a><span aria-hidden="true">/</span>
        <a href={href(`modul/${m.id}`)} className="hover:text-brand">{m.emoji} {m.title}</a>
      </nav>

      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-muted">Level {level.id} · Soal {idx + 1} dari {m.exercises.length}</p>
          <h1 className="text-2xl font-extrabold leading-tight">{ex.title}</h1>
        </div>
        {done?.solved && <span className="chip bg-ok-soft text-ok">✓ Pernah diselesaikan</span>}
      </header>

      <Dots module={m} current={idx} done={p.done} />

      {/* key: seluruh keadaan soal direset ketika soal atau gaya penulisan berganti */}
      {ex.type === 'choice'
        ? <ChoiceExercise key={ex.id} ex={ex} locale={p.locale} p={p} />
        : <FormulaExercise key={`${ex.id}-${p.locale}`} ex={ex} locale={p.locale} p={p} />}

      <div className="flex justify-between pt-2 text-sm">
        {idx > 0 ? <a className="text-muted hover:text-brand" href={href(`latihan/${m.id}/${idx}`)}>← Soal sebelumnya</a> : <span />}
        {idx < m.exercises.length - 1 && <a className="text-muted hover:text-brand" href={href(`latihan/${m.id}/${idx + 2}`)}>Lewati ke soal berikutnya →</a>}
      </div>
    </div>
  );
}
