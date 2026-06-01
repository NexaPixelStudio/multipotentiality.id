import { getFormulaLearningContent } from '../data/formulaLearningContent.js';
import { getExcelSpecialEnvironment } from '../data/excelSpecialEnvironment.js';

function displayFormat(value = '') {
  const text = String(value || '').trim();
  const withEquals = text.startsWith('=') ? text : `=${text}`;
  let output = '';
  let inQuote = false;
  for (let i = 0; i < withEquals.length; i += 1) {
    const char = withEquals[i];
    if (char === '"' && withEquals[i - 1] !== '\\') inQuote = !inQuote;
    output += !inQuote && char === ',' ? ';' : char;
  }
  return output;
}

export default function FormulaTheory({ formula, isGeneric }) {
  const learning = getFormulaLearningContent(formula);
  const description = learning.description || formula.description;
  const simpleLogic = learning.simpleLogic || formula.simpleLogic;
  const useCase = learning.useCase || formula.useCase;
  const analogy = learning.analogy || `Anggap ${formula.name} seperti alat kecil di Excel. Tugas kamu cuma kasih bahan yang benar, lalu alatnya mengerjakan sisanya.`;
  const exampleFormula = learning.exampleFormula;
  const exampleMeaning = learning.exampleMeaning || learning.simpleExample;
  const beginnerTip = learning.beginnerTip;
  const specialEnvironment = getExcelSpecialEnvironment(formula);

  return (
    <section className="rounded-[2rem] border border-coach-line bg-white p-5 shadow-soft dark:border-white/10 dark:bg-white/[0.055]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-coach-green px-3 py-1 text-xs font-black text-white">{formula.level}</span>
            <span className="rounded-full bg-coach-beige px-3 py-1 text-xs font-bold text-black/55 dark:bg-black/25 dark:text-white/60">{formula.displayCategory}</span>
            <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-bold text-black/45 dark:bg-white/10 dark:text-white/45">{formula.category}</span>
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-coach-ink dark:text-white">{formula.name}</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-black/65 dark:text-white/65">{description}</p>
        </div>
        <div className="rounded-2xl border border-coach-line bg-coach-beige p-4 dark:border-white/10 dark:bg-black/20 lg:w-[360px]">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-black/40 dark:text-white/45">Format</p>
          <code className="mt-2 block break-words rounded-xl bg-white px-3 py-3 text-sm font-bold text-coach-green dark:bg-white/8 dark:text-emerald-200">
            {displayFormat(formula.syntax)}
          </code>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <InfoCard title="Kapan dipakai?" text={useCase} />
        <InfoCard title="Logika sederhananya" text={simpleLogic} />
        <InfoCard title="Analogi Rumus" text={analogy} />
      </div>

      {(exampleFormula || exampleMeaning || beginnerTip) && (
        <div className="mt-4 grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          {exampleFormula && (
            <div className="rounded-2xl border border-coach-green/20 bg-coach-greenSoft/70 p-4 dark:border-emerald-400/15 dark:bg-emerald-400/10">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-coach-green dark:text-emerald-200">Contoh Rumus</p>
              <code className="mt-2 block break-words rounded-xl bg-white px-3 py-3 font-mono text-sm font-black text-coach-green dark:bg-black/20 dark:text-emerald-200">
                {exampleFormula}
              </code>
              <p className="mt-2 text-[11px] font-bold text-coach-green/70 dark:text-emerald-200/70">Ini contoh penggunaan, bukan jawaban latihan.</p>
            </div>
          )}

          <div className="rounded-2xl border border-coach-line bg-coach-beige/70 p-4 dark:border-white/10 dark:bg-black/18">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-black/40 dark:text-white/45">Maksud contohnya</p>
            {exampleMeaning && <p className="mt-2 text-sm leading-6 text-black/65 dark:text-white/65">{exampleMeaning}</p>}
            {beginnerTip && <p className="mt-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold leading-5 text-black/55 dark:bg-white/8 dark:text-white/60">{beginnerTip}</p>}
          </div>
        </div>
      )}

      {specialEnvironment && (
        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-100">
          <p className="text-xs font-black uppercase tracking-[0.16em]">Environment Excel Khusus</p>
          <p className="mt-2 font-bold">{specialEnvironment.label}</p>
          <p className="mt-1">{specialEnvironment.description}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {specialEnvironment.requirements.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      )}

      {isGeneric && (
        <div className="mt-5 rounded-2xl border border-dashed border-coach-green/40 bg-coach-green/8 p-4 text-sm text-coach-green dark:text-emerald-200">
          Latihan untuk rumus ini sudah tersedia. Fokus dulu ke arah mengisi dan struktur rumusnya.
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
