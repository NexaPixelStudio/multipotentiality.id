export default function HintBox({ hints = [], mode, hintIndex, onNextHint, onResetHints }) {
  const limit = mode === 'guided' ? hints.length : mode === 'practice' ? Math.min(2, hints.length) : 0;
  const visibleHints = hints.slice(0, Math.min(hintIndex + 1, limit));

  return (
    <section className="coach-card rounded-[1.75rem] p-4 dark:border-white/10 dark:bg-white/[0.055]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-coach-green dark:text-coach-sky">Petunjuk Bertahap</p>
          <h3 className="text-lg font-black text-coach-ink dark:text-white">Jangan hafalin dulu, pahami dulu alurnya.</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onNextHint}
            disabled={mode === 'challenge' || visibleHints.length >= limit}
            className="rounded-full bg-coach-green px-4 py-2 text-sm font-bold text-white disabled:cursor-not-allowed disabled:bg-black/15 disabled:text-black/35 dark:disabled:bg-white/10 dark:disabled:text-white/35"
          >
            Lihat Petunjuk
          </button>
          <button onClick={onResetHints} className="rounded-full border border-coach-line px-4 py-2 text-sm font-bold text-black/55 dark:border-white/10 dark:text-white/60">
            Reset Hint
          </button>
        </div>
      </div>

      {mode === 'challenge' ? (
        <p className="mt-4 rounded-2xl bg-coach-beige p-4 text-sm text-black/60 dark:bg-black/20 dark:text-white/60">
          Challenge Mode aktif. Petunjuk disembunyikan dulu. Coba jawab pakai logika kamu sendiri.
        </p>
      ) : visibleHints.length ? (
        <ol className="mt-4 space-y-2">
          {visibleHints.map((hint, index) => (
            <li key={`${hint}-${index}`} className="rounded-2xl bg-coach-beige p-3 text-sm leading-6 text-black/65 dark:bg-black/20 dark:text-white/65">
              <span className="font-black text-coach-green dark:text-coach-sky">Hint {index + 1}: </span>{hint}
            </li>
          ))}
        </ol>
      ) : (
        <p className="mt-4 rounded-2xl bg-coach-beige p-4 text-sm text-black/60 dark:bg-black/20 dark:text-white/60">
          Klik “Lihat Petunjuk” kalau kamu mentok. Hint-nya bertahap, bukan langsung jawaban.
        </p>
      )}
    </section>
  );
}
