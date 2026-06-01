import { formulaForSeparator } from '../utils/formulaValidator';

export default function FeedbackBox({ feedback, exercise, separatorMode, isCorrect, onNext, nextLabel = 'Lanjut ke rumus berikutnya' }) {
  if (!feedback) {
    return (
      <section className="rounded-[1.75rem] border border-dashed border-coach-line bg-white/65 p-4 text-sm text-black/50 dark:border-white/10 dark:bg-white/[0.035] dark:text-white/50">
        Feedback akan muncul setelah kamu klik “Cek Jawaban”.
      </section>
    );
  }

  return (
    <section className={`rounded-[1.75rem] border p-5 shadow-soft ${feedback.correct ? 'border-coach-green bg-coach-green/8 dark:border-emerald-400/40 dark:bg-emerald-400/8' : 'border-rose-200 bg-rose-50 dark:border-rose-400/25 dark:bg-rose-400/8'}`}>
      <p className={`text-xs font-black uppercase tracking-[0.18em] ${feedback.correct ? 'text-coach-green dark:text-emerald-300' : 'text-rose-700 dark:text-rose-200'}`}>
        {feedback.correct ? 'Nah, ini baru tepat' : 'Coba cek lagi'}
      </p>
      <h3 className="mt-1 text-xl font-black text-coach-ink dark:text-white">{feedback.title}</h3>
      <p className="mt-2 text-sm leading-6 text-black/65 dark:text-white/65">{feedback.message}</p>

      {feedback.details?.length > 0 && (
        <ul className="mt-4 space-y-2">
          {feedback.details.map((item, index) => (
            <li key={index} className="rounded-2xl bg-white/70 px-4 py-2 text-sm text-black/60 dark:bg-black/20 dark:text-white/60">{item}</li>
          ))}
        </ul>
      )}

      {isCorrect && exercise && (
        <div className="mt-5 space-y-4">
          <div className="rounded-2xl bg-white p-4 dark:bg-black/20">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-black/40 dark:text-white/45">Rumus Final</p>
            <code className="mt-2 block break-words rounded-xl bg-coach-beige p-3 font-mono text-sm font-black text-coach-green dark:bg-white/8 dark:text-emerald-200">
              {formulaForSeparator(exercise.expectedFormula, separatorMode)}
            </code>
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            <DetailList title="Penjelasan per bagian" items={exercise.formulaParts || []} />
            <DetailList title="Kesalahan umum" items={exercise.commonMistakes || []} />
          </div>

          <div className="rounded-2xl bg-white/70 p-4 text-sm leading-6 text-black/65 dark:bg-black/20 dark:text-white/65">
            <span className="font-black text-coach-green dark:text-emerald-300">Contoh penerapan lain: </span>
            {exercise.nextUseCase}
          </div>

          <button onClick={onNext} className="rounded-full bg-coach-ink px-5 py-3 text-sm font-black text-white transition hover:bg-coach-green dark:bg-white dark:text-coach-ink">
            {nextLabel}
          </button>
        </div>
      )}
    </section>
  );
}

function DetailList({ title, items }) {
  return (
    <div className="rounded-2xl bg-white/70 p-4 dark:bg-black/20">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-black/40 dark:text-white/45">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-sm leading-6 text-black/65 dark:text-white/65">• {item}</li>
        ))}
      </ul>
    </div>
  );
}
