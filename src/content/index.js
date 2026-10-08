import level1 from './level1.js';
import level2 from './level2.js';
import level3 from './level3.js';
import level4 from './level4.js';
import level5 from './level5.js';
import extra from './extra.js';

export const LEVELS = [
  { id: 1, name: 'Dasar Excel', icon: 'sprout', tone: 'emerald', desc: 'Bangun fondasi Excel dengan memahami struktur lembar kerja, perhitungan dasar, fungsi utama, dan cara bekerja secara efisien.' },
  { id: 2, name: 'Rumus Esensial', icon: 'leaf', tone: 'teal', desc: 'Kuasai rumus yang paling sering digunakan di pekerjaan: pembulatan, IF, COUNTIF, SUMIF, fungsi teks, dan penanganan error.' },
  { id: 3, name: 'Analisis Data', icon: 'tree', tone: 'sky', desc: 'Gunakan syarat ganda, VLOOKUP, INDEX-MATCH, fungsi tanggal, dan statistik untuk menganalisis data dengan lebih akurat.' },
  { id: 4, name: 'Rumus Lanjutan', icon: 'rocket', tone: 'violet', desc: 'Terapkan XLOOKUP, array dinamis, FILTER, SORT, dan LET, serta bersihkan data agar siap dianalisis.' },
  { id: 5, name: 'Penerapan Profesional', icon: 'trophy', tone: 'amber', desc: 'Selesaikan kasus kerja nyata dengan fungsi keuangan, lookup dua arah, studi kasus, dan fitur lanjutan Excel.' }
];

// soal tambahan ditaruh di akhir modul supaya nomor soal lama tidak bergeser
const all = [...level1, ...level2, ...level3, ...level4, ...level5].map((m) => (extra[m.id] ? { ...m, exercises: [...m.exercises, ...extra[m.id]] } : m));

export const MODULES = all.map((m, mi) => ({
  ...m,
  order: mi,
  exercises: m.exercises.map((ex, i) => ({ ...ex, id: `${m.id}-${i + 1}`, moduleId: m.id, index: i }))
}));

export const MODULE_BY_ID = Object.fromEntries(MODULES.map((m) => [m.id, m]));
export const EXERCISES = MODULES.flatMap((m) => m.exercises);
export const EXERCISE_BY_ID = Object.fromEntries(EXERCISES.map((e) => [e.id, e]));
export const modulesOfLevel = (lvl) => MODULES.filter((m) => m.level === lvl);
