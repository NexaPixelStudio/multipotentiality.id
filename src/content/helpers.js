// Pembantu penulisan materi. Semua rumus di materi ditulis dengan gaya "en" (koma sebagai pemisah, titik desimal).
// Tampilan ke pengguna otomatis diubah sesuai pilihan (Indonesia: titik koma).
export { D } from '../engine/values.js';

export const sheet = (name, rows, fmt = {}) => ({ name, rows, fmt });

// Soal rumus: pengguna menulis rumus di sel target.
export const f = (o) => ({ type: 'formula', ...o });

// Soal pilihan ganda. answer = indeks jawaban benar di options.
export const q = (o) => ({ type: 'choice', ...o });

// Blok materi
export const p = (text) => ({ type: 'p', text });
export const analogy = (text) => ({ type: 'analogy', text });
export const tip = (text) => ({ type: 'tip', text });
export const warn = (text) => ({ type: 'warn', text });
export const steps = (...items) => ({ type: 'steps', items });
export const syntax = (formula, parts) => ({ type: 'syntax', formula, parts });
export const demo = (o) => ({ type: 'demo', ...o });
