export default function HintBox({ hints = [], mode, hintIndex, onNextHint, onResetHints }) {
  const normalizedMode = ['guided', 'practice', 'challenge'].includes(mode) ? mode : 'guided';
  const rawLimit = normalizedMode === 'guided' ? hints.length : normalizedMode === 'practice' ? Math.min(2, hints.length) : 0;
  const limit = Math.max(0, rawLimit);
  const visibleHints = hints.slice(0, Math.min(hintIndex + 1, limit));

  const modeCopy = {
    guided: {
      label: 'Guided Mode',
      title: 'Petunjuk tersedia penuh.',
      empty: 'Klik “Lihat Petunjuk” kalau kamu mentok. Hint-nya bertahap, bukan langsung jawaban.',
      note: 'Semua hint boleh dibuka satu per satu.'
    },
    practice: {
      label: 'Practice Mode',
      title: 'Petunjuk dibatasi.',
      empty: 'Di mode ini kamu cuma dapat maksimal 2 hint. Coba pecahkan dulu dari soal dan tabel.',
      note: 'Maksimal 2 hint agar latihan tetap terasa mandiri.'
    },
    challenge: {
      label: 'Challenge Mode',
      title: 'Petunjuk disembunyikan.',
      empty: 'Tidak ada hint di mode ini. Jawab dari soal, tabel, dan logika rumus yang sudah kamu pahami.',
      note: 'Mode ini cocok untuk menguji apakah kamu sudah benar-benar paham.'
    }
  }[normalizedMode];

  return (
    <section className="rounded-[1.75rem] border border-coach-line bg-white p-4 shadow-soft dark:border-white/10 dark:bg-white/[0.055]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-coach-green dark:text-emerald-300">Petunjuk Bertahap</p>
          <p className="mt-1 text-sm font-black text-coach-ink dark:text-white">{modeCopy.label}: {modeCopy.title}</p>
          <p className="mt-1 text-xs font-semibold text-black/45 dark:text-white/45">{modeCopy.note}</p>
        </div>

        {normalizedMode !== 'challenge' && (
          <div className="flex gap-2">
            <button
              onClick={onNextHint}
              disabled={visibleHints.length >= limit}
              className="rounded-full bg-coach-green px-4 py-2 text-sm font-bold text-white disabled:cursor-not-allowed disabled:bg-black/15 disabled:text-black/35 dark:disabled:bg-white/10 dark:disabled:text-white/35"
            >
              Lihat Petunjuk
            </button>
            <button onClick={onResetHints} className="rounded-full border border-coach-line px-4 py-2 text-sm font-bold text-black/55 dark:border-white/10 dark:text-white/60">
              Reset Hint
            </button>
          </div>
        )}
      </div>

      {visibleHints.length ? (
        <ol className="mt-4 space-y-2">
          {visibleHints.map((hint, index) => (
            <li key={`${hint}-${index}`} className="rounded-2xl bg-coach-beige p-3 text-sm leading-6 text-black/65 dark:bg-black/20 dark:text-white/65">
              <span className="font-black text-coach-green dark:text-emerald-300">Hint {index + 1}: </span>{hint}
            </li>
          ))}
        </ol>
      ) : (
        <p className="mt-4 rounded-2xl bg-coach-beige p-4 text-sm text-black/60 dark:bg-black/20 dark:text-white/60">
          {modeCopy.empty}
        </p>
      )}
    </section>
  );
}
