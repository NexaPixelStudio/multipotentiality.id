import SeparatorToggle from './SeparatorToggle';
import LearningModeSelector from './LearningModeSelector';

export default function Header({
  stats,
  onReset,
  darkMode,
  onToggleDark,
  separatorMode,
  onSeparatorChange,
  learningMode,
  onLearningModeChange,
  onImportCatalog
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-coach-line/80 bg-coach-beige/90 backdrop-blur dark:border-white/10 dark:bg-coach-ink/92">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-4 py-4 lg:px-6">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-coach-green text-lg font-black text-white shadow-soft">fx</div>
              <div>
                <h1 className="text-2xl font-black tracking-tight text-coach-ink dark:text-white sm:text-3xl">Formula Coach</h1>
                <p className="max-w-2xl text-sm text-black/60 dark:text-white/62">
                  Belajar rumus Excel dari dasar sampai profesional dengan latihan langsung.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <label className="cursor-pointer rounded-full border border-coach-line bg-white px-4 py-2 text-sm font-semibold text-coach-ink transition hover:border-coach-green dark:border-white/10 dark:bg-white/5 dark:text-white">
              Import Catalog
              <input type="file" accept="application/json" className="hidden" onChange={onImportCatalog} />
            </label>
            <button
              onClick={onToggleDark}
              className="rounded-full border border-coach-line bg-white px-4 py-2 text-sm font-semibold text-coach-ink transition hover:border-coach-green dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              {darkMode ? 'Mode Terang' : 'Mode Gelap'}
            </button>
            <button
              onClick={onReset}
              className="rounded-full bg-coach-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-coach-green dark:bg-white dark:text-coach-ink"
            >
              Reset Data
            </button>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-[1fr_auto_auto] lg:items-center">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            <Stat label="Total rumus" value={stats.total} />
            <Stat label="Punya latihan" value={stats.practice} />
            <Stat label="Theory only" value={stats.theory} />
            <Stat label="Dikuasai" value={stats.mastered} />
            <Stat label="Progress" value={`${stats.percent}%`} />
          </div>
          <SeparatorToggle value={separatorMode} onChange={onSeparatorChange} />
          <LearningModeSelector value={learningMode} onChange={onLearningModeChange} />
        </div>
      </div>
    </header>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-coach-line bg-white/74 px-3 py-2 dark:border-white/10 dark:bg-white/5">
      <p className="text-[11px] uppercase tracking-[0.16em] text-black/45 dark:text-white/45">{label}</p>
      <p className="text-lg font-black text-coach-ink dark:text-white">{value}</p>
    </div>
  );
}
