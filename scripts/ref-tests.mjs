// Tes penanda sel di dalam rumus: harus tetap bekerja saat rumus belum lengkap (sedang diketik).
import { formulaRefs, MAX_ROW, MAX_COL } from '../src/lib/formulaRefs.js';
import { checkFormula } from '../src/engine/check.js';

let fail = 0;
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const cell = (sheet, r, c) => ({ sheet, r1: r, c1: c, r2: r, c2: c });
const T = (input, expected, locale = 'id') => {
  const got = formulaRefs(input, locale, 'S');
  if (!same(got, expected)) {
    fail += 1;
    console.log(`✗ ${JSON.stringify(input)}\n   hasil   : ${JSON.stringify(got)}\n   harusnya: ${JSON.stringify(expected)}`);
  }
};

T('', []);
T('B2', []); // bukan rumus
T('=', []);
T('=B2', [cell('S', 2, 2)]);
T('=B2+', [cell('S', 2, 2)]); // kasus yang dilaporkan: tanda + membuat penanda hilang
T('=B2+B3', [cell('S', 2, 2), cell('S', 3, 2)]);
T('=B2+C', [cell('S', 2, 2)]); // "C" belum menjadi alamat sel
T('=$B$2*C3', [cell('S', 2, 2), cell('S', 3, 3)]);
T('=SUM(B2:B5)', [{ sheet: 'S', r1: 2, c1: 2, r2: 5, c2: 2 }]);
T('=SUM(B2:', [cell('S', 2, 2)]); // range belum selesai
T('=SUM(B2:B5;', [{ sheet: 'S', r1: 2, c1: 2, r2: 5, c2: 2 }]);
T('=IF(B2>=70;"Lulus', [cell('S', 2, 2)]); // tanda kutip belum ditutup
T('=IF(B2="A1";B3;', [cell('S', 2, 2), cell('S', 3, 2)]); // teks "A1" bukan referensi
T('=LOG10(A1)', [cell('S', 1, 1)]); // LOG10 adalah fungsi, bukan sel
T('=Katalog!B2+', [cell('Katalog', 2, 2)]);
T("='Data Penjualan'!B2*2", [cell('Data Penjualan', 2, 2)]);
T('=SUM(B5:B2)', [{ sheet: 'S', r1: 2, c1: 2, r2: 5, c2: 2 }]); // urutan dibalik tetap dinormalkan
T('=B2+#', [cell('S', 2, 2)]); // karakter tak dikenal di akhir

// kolom dan baris penuh (klik header di tabel)
T('=SUM(B:B)', [{ sheet: 'S', r1: 1, c1: 2, r2: MAX_ROW, c2: 2 }]);
T('=SUM(B:D)', [{ sheet: 'S', r1: 1, c1: 2, r2: MAX_ROW, c2: 4 }]);
T('=SUM($B:$B)', [{ sheet: 'S', r1: 1, c1: 2, r2: MAX_ROW, c2: 2 }]);
T('=SUM(D:B)', [{ sheet: 'S', r1: 1, c1: 2, r2: MAX_ROW, c2: 4 }]);
T('=SUM(2:2)', [{ sheet: 'S', r1: 2, c1: 1, r2: 2, c2: MAX_COL }]);
T('=SUM(2:4)', [{ sheet: 'S', r1: 2, c1: 1, r2: 4, c2: MAX_COL }]);
T('=SUM($2:$4)', [{ sheet: 'S', r1: 2, c1: 1, r2: 4, c2: MAX_COL }]);
T('=SUM(Data!B:B)', [{ sheet: 'Data', r1: 1, c1: 2, r2: MAX_ROW, c2: 2 }]);
T('=SUM(Data!2:3)', [{ sheet: 'Data', r1: 2, c1: 1, r2: 3, c2: MAX_COL }]);
T('=SUM(B:', []); // belum selesai
T('=SUM(2:', []);
T('=B:B+C2', [{ sheet: 'S', r1: 1, c1: 2, r2: MAX_ROW, c2: 2 }, cell('S', 2, 3)]);
T('=SUM(2)', []); // angka biasa bukan baris

// referensi melingkar: rumus tidak boleh menyertakan selnya sendiri
const ex = {
  sheets: [{ name: 'Data', rows: [['Hari', 'Jual'], ['Senin', 10], ['Selasa', 20], ['Total', '']] }],
  target: 'B4', expect: 30, solution: '=SUM(B2:B3)'
};
const C = (formula, status, e = ex) => {
  const got = checkFormula(e, formula, 'en').status;
  if (got !== status) {
    fail += 1;
    console.log(`✗ ${formula}: status ${got}, harusnya ${status}`);
  }
};
C('=SUM(B2:B3)', 'correct');
C('=SUM(B:B)', 'circular'); // kolom penuh mencakup B4
C('=SUM(B2:B4)', 'circular');
C('=SUM(4:4)', 'circular'); // baris penuh mencakup B4
C('=B4', 'circular');
C('=SUM(A:A)', 'wrong'); // kolom lain tidak melingkar
C('=SUM(B2:B3)+B4', 'circular');
C('=SUM(Lain!B:B)', 'error'); // sheet lain tidak ada (#REF!), bukan melingkar
// dengan salin ke bawah, sel salinan juga tidak boleh menunjuk dirinya sendiri
const exFill = { sheets: [{ name: 'Data', rows: [['Qty', 'Harga', 'Total'], [2, 5, ''], [3, 5, ''], [4, 5, '']] }], target: 'C2', fillTo: 'C4', expect: [[10], [15], [20]], solution: '=A2*B2' };
C('=A2*B2', 'correct', exFill);
C('=A2*B2+SUM(C3:C4)', 'correct', exFill); // referensi relatif ikut bergeser, tidak pernah menunjuk selnya sendiri
C('=A2*B2+SUM($C$3:$C$3)', 'circular', exFill); // aman di C2, tetapi salinan di C3 menunjuk dirinya sendiri

// generator soal Tebak Hasil: tiap ronde 5 soal, jawaban unik dan benar-benar ada di pilihan
const { makeRound } = await import('../src/lib/quiz.js');
for (let n = 0; n < 200; n += 1) {
  const round = makeRound();
  if (round.length !== 5) { fail += 1; console.log('ronde tidak lengkap', round.length); break; }
  const bad = round.find((q) => q.options.length < 3 || new Set(q.options).size !== q.options.length || q.options[q.answerIndex] !== q.answer);
  if (bad) { fail += 1; console.log('soal tebak hasil tidak valid', bad.formula); break; }
}

if (fail) {
  console.log(`\n${fail} tes penanda sel gagal`);
  process.exit(1);
}
console.log('Tes penanda sel lulus');
