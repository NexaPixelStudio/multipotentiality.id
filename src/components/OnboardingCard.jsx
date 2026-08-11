export default function OnboardingCard({ onDismiss }) {
  return (
    <section className="rounded-[2rem] border border-coach-green/25 bg-coach-greenSoft p-5 dark:border-emerald-400/20 dark:bg-emerald-400/10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-coach-green dark:text-emerald-200">Baru pertama kali pakai Excel?</p>
          <h3 className="mt-1 text-lg font-black text-coach-ink dark:text-white">Kenalan dulu sama 3 istilah ini</h3>
        </div>
        <button
          type="button"
          onClick={onDismiss}
          className="rounded-full border border-coach-green/30 bg-white px-3 py-1.5 text-xs font-black text-coach-green transition hover:bg-coach-green hover:text-white dark:border-emerald-400/20 dark:bg-black/20 dark:text-emerald-200"
        >
          Mengerti, sembunyikan
        </button>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-4 dark:bg-black/20">
          <p className="text-sm font-black text-coach-green dark:text-emerald-200">Cell</p>
          <p className="mt-1 text-xs leading-5 text-black/60 dark:text-white/60">Satu kotak di tabel, misalnya C2. Tiap kotak punya alamat sendiri: huruf untuk kolom, angka untuk baris.</p>
        </div>
        <div className="rounded-2xl bg-white p-4 dark:bg-black/20">
          <p className="text-sm font-black text-coach-green dark:text-emerald-200">Range</p>
          <p className="mt-1 text-xs leading-5 text-black/60 dark:text-white/60">Sekumpulan cell yang dipilih sekaligus, misalnya C2:H2. Klik satu cell lalu drag untuk memilih range.</p>
        </div>
        <div className="rounded-2xl bg-white p-4 dark:bg-black/20">
          <p className="text-sm font-black text-coach-green dark:text-emerald-200">Formula bar</p>
          <p className="mt-1 text-xs leading-5 text-black/60 dark:text-white/60">Kotak tempat mengetik rumus, ada di bawah tabel. Semua rumus di Excel diawali tanda sama dengan (=).</p>
        </div>
      </div>
      <p className="mt-3 text-xs font-semibold text-black/50 dark:text-white/50">Sudah paham? Langsung coba latihan di bawah — klik cell target di tabel, lalu ketik rumusnya di formula bar.</p>
    </section>
  );
}
