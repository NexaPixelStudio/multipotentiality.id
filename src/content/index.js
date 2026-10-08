import level1 from './level1.js';
import level2 from './level2.js';
import level3 from './level3.js';
import level4 from './level4.js';
import level5 from './level5.js';

export const LEVELS = [
  { id: 1, name: 'Pemula', emoji: '🌱', tone: 'emerald', desc: 'Belum pernah memakai Excel? Mulai dari sini. Kita kenalan pelan-pelan.' },
  { id: 2, name: 'Dasar', emoji: '🌿', tone: 'teal', desc: 'Rumus yang dipakai hampir setiap hari di kantor: IF, COUNTIF, SUMIF, dan teks.' },
  { id: 3, name: 'Menengah', emoji: '🌳', tone: 'sky', desc: 'Naik kelas: syarat ganda, VLOOKUP, INDEX-MATCH, tanggal, dan statistik.' },
  { id: 4, name: 'Mahir', emoji: '🚀', tone: 'violet', desc: 'Rumus modern dan array dinamis: XLOOKUP, FILTER, SORT, LET, dan pembersihan data.' },
  { id: 5, name: 'Profesional', emoji: '🏆', tone: 'amber', desc: 'Rumus keuangan, lookup dua arah, dan studi kasus kerja nyata.' }
];

const all = [...level1, ...level2, ...level3, ...level4, ...level5];

export const MODULES = all.map((m, mi) => ({
  ...m,
  order: mi,
  exercises: m.exercises.map((ex, i) => ({ ...ex, id: `${m.id}-${i + 1}`, moduleId: m.id, index: i }))
}));

export const MODULE_BY_ID = Object.fromEntries(MODULES.map((m) => [m.id, m]));
export const EXERCISES = MODULES.flatMap((m) => m.exercises);
export const EXERCISE_BY_ID = Object.fromEntries(EXERCISES.map((e) => [e.id, e]));
export const modulesOfLevel = (lvl) => MODULES.filter((m) => m.level === lvl);
