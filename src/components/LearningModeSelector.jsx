const modes = [
  { id: 'guided', label: 'Guided' },
  { id: 'practice', label: 'Practice' },
  { id: 'challenge', label: 'Challenge' }
];

export default function LearningModeSelector({ value, onChange }) {
  return (
    <div className="flex rounded-full border border-coach-line bg-white p-1 dark:border-white/10 dark:bg-white/5">
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => onChange(mode.id)}
          className={`rounded-full px-3 py-2 text-xs font-bold transition ${value === mode.id ? 'bg-coach-ink text-white dark:bg-white dark:text-coach-ink' : 'text-black/55 dark:text-white/60'}`}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
}
