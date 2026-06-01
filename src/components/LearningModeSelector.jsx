const modes = [
  { id: 'guided', label: 'Guided', title: 'Bantuan lengkap: logic, contoh, value helper, hasil sementara, dan semua hint.' },
  { id: 'practice', label: 'Practice', title: 'Bantuan sedang: logic tetap ada, contoh disembunyikan, hint dibatasi.' },
  { id: 'challenge', label: 'Challenge', title: 'Tanpa bantuan utama: hint, value helper, dan hasil sementara disembunyikan.' }
];

export default function LearningModeSelector({ value, onChange }) {
  return (
    <div className="flex rounded-full border border-coach-line bg-white p-1 dark:border-white/10 dark:bg-white/5" role="tablist" aria-label="Mode belajar">
      {modes.map((mode) => {
        const active = value === mode.id;
        return (
          <button
            key={mode.id}
            type="button"
            title={mode.title}
            aria-pressed={active}
            onClick={() => onChange(mode.id)}
            className={`rounded-full px-3 py-2 text-xs font-bold transition ${active ? 'bg-coach-ink text-white shadow-sm dark:bg-white dark:text-coach-ink' : 'text-black/55 hover:bg-coach-greenSoft hover:text-coach-green dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white'}`}
          >
            {mode.label}
          </button>
        );
      })}
    </div>
  );
}
