export default function FormulaTheory({ formula, isGeneric }) {
  return (
    <section className="coach-card-strong rounded-[2rem] p-5 dark:border-white/10 dark:bg-white/[0.055]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-coach-green px-3 py-1 text-xs font-black text-white">{formula.level}</span>
            <span className="rounded-full bg-coach-beige px-3 py-1 text-xs font-bold text-black/55 dark:bg-black/25 dark:text-white/60">{formula.displayCategory}</span>
            <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-bold text-black/45 dark:bg-white/10 dark:text-white/45">{formula.category}</span>
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-coach-ink dark:text-white">{formula.name}</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-black/65 dark:text-white/65">{formula.description}</p>
        </div>
        <div className="rounded-2xl border border-coach-line bg-coach-beige p-4 dark:border-white/10 dark:bg-black/20 lg:w-[360px]">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-black/40 dark:text-white/45">Syntax</p>
          <code className="mt-2 block break-words rounded-xl bg-white px-3 py-3 text-sm font-bold text-coach-green dark:bg-white/8 dark:text-coach-sky">
            {formula.syntax}
          </code>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <InfoCard title="Kapan dipakai?" text={formula.useCase} />
        <InfoCard title="Logika sederhananya" text={formula.simpleLogic} />
        <InfoCard title="Analogi ringan" text={`Anggap ${formula.name} seperti alat kecil di Excel. Tugas kamu cuma kasih bahan yang benar, lalu alatnya mengerjakan sisanya.`} />
      </div>

      {isGeneric && (
        <div className="mt-5 rounded-2xl border border-dashed border-coach-aqua/55 bg-coach-sky/25 p-4 text-sm text-coach-green dark:text-coach-sky">
          Latihan detail belum tersedia, akan ditambahkan bertahap. Tapi kamu tetap bisa latihan struktur rumus dasarnya di bawah.
        </div>
      )}
    </section>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-coach-line bg-coach-beige/70 p-4 dark:border-white/10 dark:bg-black/18">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-black/40 dark:text-white/45">{title}</p>
      <p className="mt-2 text-sm leading-6 text-black/65 dark:text-white/65">{text}</p>
    </div>
  );
}
