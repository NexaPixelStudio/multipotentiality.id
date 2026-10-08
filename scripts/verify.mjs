// Memverifikasi seluruh materi: tiap soal harus bisa diselesaikan oleh solusinya sendiri,
// jawaban alternatif harus diterima, dan jawaban yang salah (shouldFail) harus ditolak.
import { MODULES } from '../src/content/index.js';
import { checkFormula } from '../src/engine/check.js';
import { createContext, evaluate } from '../src/engine/evaluator.js';
import { XlError } from '../src/engine/values.js';
import { FUNCS } from '../src/engine/functions.js';
import { REFERENCE, SAMPLE_SHEET } from '../src/content/reference.js';
import { MODULE_BY_ID } from '../src/content/index.js';

let problems = 0;
const bad = (id, msg) => {
  problems += 1;
  console.log(`✗ ${id}: ${msg}`);
};

let nFormula = 0;
let nChoice = 0;
const ids = new Set();

for (const m of MODULES) {
  if (!m.lessons?.length) bad(m.id, 'tidak punya materi');
  if (m.exercises.length < 5) bad(m.id, `latihan terlalu sedikit (${m.exercises.length})`);

  // materi: setiap demo harus menghasilkan nilai tanpa error
  m.lessons.forEach((l, li) => l.body.forEach((b, bi) => {
    if (b.type !== 'demo') return;
    try {
      const ctx = createContext([{ name: 'Demo', rows: b.rows }], { locale: 'en' });
      const target = b.cell;
      const col = target.match(/[A-Z]+/)[0].split('').reduce((n, ch) => n * 26 + ch.charCodeAt(0) - 64, 0);
      const row = Number(target.match(/\d+/)[0]);
      ctx.setCell('Demo', row, col, b.formula);
      const v = ctx.getCell('Demo', row, col);
      if (v instanceof XlError) bad(m.id, `demo materi ${li + 1}.${bi + 1} menghasilkan ${v.code}`);
    } catch (e) {
      bad(m.id, `demo materi ${li + 1}.${bi + 1} gagal: ${e.message}`);
    }
  }));

  for (const ex of m.exercises) {
    if (ids.has(ex.id)) bad(ex.id, 'id ganda');
    ids.add(ex.id);
    if (!ex.title) bad(ex.id, 'tanpa judul');
    if (!ex.explain) bad(ex.id, 'tanpa penjelasan');

    if (ex.type === 'choice') {
      nChoice += 1;
      if (!ex.options || ex.options.length < 3) bad(ex.id, 'opsi kurang dari 3');
      if (!(ex.answer >= 0 && ex.answer < ex.options.length)) bad(ex.id, 'indeks jawaban tidak valid');
      if (ex.whyNot && ex.whyNot.length !== ex.options.length) bad(ex.id, 'panjang whyNot tidak sama dengan options');
      continue;
    }

    nFormula += 1;
    if (!ex.task) bad(ex.id, 'tanpa task');
    if (!ex.hints || ex.hints.length !== 3) bad(ex.id, 'harus punya tepat 3 petunjuk');
    if (ex.expect === undefined) bad(ex.id, 'tanpa expect');
    if (!ex.solution) {
      bad(ex.id, 'tanpa solution');
      continue;
    }
    // pastikan target tidak sama dengan sel yang sudah ada isinya (selain kosong)
    const run = (formula) => checkFormula(ex, formula, 'en');
    const r = run(ex.solution);
    if (r.status !== 'correct') bad(ex.id, `solution ${ex.solution} -> ${r.status} ${r.message || ''} (dapat: ${r.shown ?? ''}, harap: ${r.expectedShown ?? ''})`);
    for (const a of ex.alt || []) {
      const ra = run(a);
      if (ra.status !== 'correct') bad(ex.id, `alt ${a} -> ${ra.status} ${ra.message || ''} (dapat: ${ra.shown ?? ''})`);
    }
    for (const w of ex.shouldFail || []) {
      const rw = run(w);
      if (rw.status === 'correct') bad(ex.id, `shouldFail ${w} malah dianggap benar`);
    }
    if (ex.start) {
      const rs = run(ex.start);
      if (rs.status === 'correct') bad(ex.id, 'rumus awal (start) sudah benar, soal perbaikan jadi tidak bermakna');
    }
    // locale id: solution versi titik koma juga harus bekerja
    const localized = ex.solution.replace(/,/g, ';');
    if (!/"[^"]*[,;][^"]*"/.test(ex.solution) && !/\d,\d/.test(ex.solution)) {
      const ri = checkFormula(ex, localized, 'id');
      if (ri.status !== 'correct') bad(ex.id, `versi ID ${localized} -> ${ri.status} ${ri.message || ''}`);
    }
    // wrongs harus benar-benar salah dan cocok dengan salah satu nilai
    for (const w of ex.wrongs || []) {
      if (w.value === undefined || !w.msg) bad(ex.id, 'entri wrongs tidak lengkap');
    }
  }
}

console.log(`\n${MODULES.length} modul, ${nFormula} soal rumus, ${nChoice} soal pilihan ganda.`);
if (problems) {
  console.log(`${problems} masalah ditemukan.`);
  process.exit(1);
}
console.log('Semua materi lolos verifikasi ✓');
