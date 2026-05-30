export default function ProgressPanel({ formula, formulaProgress, stats }) {
  const attempts = formulaProgress?.attempts || 0;
  const status = formulaProgress?.status || 'Belum dicoba';

  return (
    <section className="rounded-[1.75rem] border border-coach-line bg-white p-4 shadow-soft dark:border-white/10 dark:bg-white/[0.055]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-coach-green dark:text-emerald-300">Progress Rumus Ini</p>
          <h3 className="mt-1 text-xl font-black text-coach-ink dark:text-white">{formula.name}</h3>
          <p className="mt-1 text-sm text-black/55 dark:text-white/55">Status: {status} · Percobaan: {attempts}</p>
        </div>
        <div className="min-w-[220px]">
          <div className="flex justify-between text-xs font-bold text-black/45 dark:text-white/45">
            <span>Progress total</span>
            <span>{stats.percent}%</span>
          </div>
          <div className="mt-2 h-3 overflow-hidden rounded-full bg-black/8 dark:bg-white/10">
            <div className="h-full rounded-full bg-coach-green" style={{ width: `${stats.percent}%` }} />
          </div>
        </div>
      </div>
    </section>
  );
}
