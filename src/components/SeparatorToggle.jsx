export default function SeparatorToggle({ value, onChange }) {
  return (
    <div className="flex rounded-full border border-coach-line bg-white p-1 dark:border-white/10 dark:bg-white/5">
      <button
        onClick={() => onChange('id')}
        className={`rounded-full px-3 py-2 text-xs font-bold transition ${value === 'id' ? 'bg-coach-green text-white' : 'text-black/55 dark:text-white/60'}`}
      >
        Excel Indonesia (;)
      </button>
      <button
        onClick={() => onChange('en')}
        className={`rounded-full px-3 py-2 text-xs font-bold transition ${value === 'en' ? 'bg-coach-green text-white' : 'text-black/55 dark:text-white/60'}`}
      >
        Excel English (,)
      </button>
    </div>
  );
}
