export default function FormulaBar({ activeCell, value, onChange, separatorMode }) {
  return (
    <div className="coach-card rounded-[1.5rem] p-3 dark:border-white/10 dark:bg-white/[0.055]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <div className="rounded-xl border border-coach-line bg-coach-beige px-3 py-2 text-sm font-black text-coach-green dark:border-white/10 dark:bg-black/20 dark:text-coach-sky">
            {activeCell || 'A1'}
          </div>
          <div className="rounded-xl bg-coach-ink px-3 py-2 text-sm font-black text-white dark:bg-white dark:text-coach-ink">fx</div>
        </div>
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={separatorMode === 'id' ? 'Tulis rumus kamu di sini, contoh pola: =SUM(A2:A10)' : 'Write your formula here, example pattern: =SUM(A2:A10)'}
          className="min-h-[46px] flex-1 rounded-xl border border-coach-line bg-coach-beige px-4 font-mono text-sm font-semibold outline-none transition focus:border-coach-aqua dark:border-white/10 dark:bg-black/20 dark:text-white"
        />
      </div>
      <p className="mt-2 text-xs text-black/45 dark:text-white/45">
        Input harus diawali =. Mode separator aktif: {separatorMode === 'id' ? 'Excel Indonesia pakai titik koma (;)' : 'Excel English pakai koma (,)' }.
      </p>
    </div>
  );
}
