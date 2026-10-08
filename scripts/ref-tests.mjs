// Tes penanda sel di dalam rumus: harus tetap bekerja saat rumus belum lengkap (sedang diketik).
import { formulaRefs } from '../src/lib/formulaRefs.js';

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

if (fail) {
  console.log(`\n${fail} tes penanda sel gagal`);
  process.exit(1);
}
console.log('Tes penanda sel lulus');
