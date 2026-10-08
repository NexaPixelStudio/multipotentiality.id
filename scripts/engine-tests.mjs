import assert from 'node:assert/strict';
import { createContext, evaluate, XlError } from '../src/engine/evaluator.js';
import { D } from '../src/engine/values.js';

const sales = [
  ['Produk', 'Kategori', 'Qty', 'Harga', 'Tanggal'],
  ['Kopi', 'Minuman', 10, 20000, D('2025-01-15')],
  ['Teh', 'Minuman', 5, 15000, D('2025-02-20')],
  ['Roti', 'Makanan', 8, 12000, D('2025-02-28')],
  ['Kue', 'Makanan', 3, 30000, D('2025-03-31')],
  ['Susu', 'Minuman', 12, 18000, D('2025-04-01')]
];
const harga = [['Kode', 'Nama'], ['A', 'Alpha'], ['B', 'Beta'], ['C', 'Gamma']];

let fails = 0;
let count = 0;
const T = (formula, expected, locale = 'id') => {
  count += 1;
  const ctx = createContext([{ name: 'Sheet1', rows: sales }, { name: 'Data Harga', rows: harga }], { locale, now: () => new Date(Date.UTC(2025, 5, 15)) });
  let got;
  try {
    got = evaluate(formula, ctx, 'Sheet1', { locale }).value;
  } catch (e) {
    got = `PARSE:${e.message}`;
  }
  if (got instanceof XlError) got = got.code;
  try {
    assert.deepEqual(Array.isArray(got) ? got : got, expected);
  } catch {
    fails += 1;
    console.log(`GAGAL  ${formula}\n   hasil   : ${JSON.stringify(got)}\n   harusnya: ${JSON.stringify(expected)}`);
  }
};

// dasar
T('=1+2*3', 7);
T('=(1+2)*3', 9);
T('=2^3^2', 64);
T('=-2^2', 4);
T('=10%', 0.1);
T('=50%*200', 100);
T('=5/0', '#DIV/0!');
T('="a"&"b"', 'ab');
T('=1,5+1', 2.5);
T('=1.5+1', 2.5);
T('=A1', 'Produk');
T('=SUM(C2:C6)', 38);
T('=SUM(C2:C3;10)', 25);
T('=SUM(C2:C3,10)', 25, 'en');
T('=AVERAGE(C2:C6)', 7.6);
T('=MIN(C2:C6)', 3);
T('=MAX(D2:D6)', 30000);
T('=COUNT(A1:E6)', 15);
T('=COUNTA(A1:A6)', 6);
T('=ROUND(2.345;2)', 2.35);
T('=ROUND(1.005;2)', 1.01);
T('=ROUND(-2.5;0)', -3);
T('=ROUND(1234;-2)', 1200);
T('=ROUNDUP(2.11;1)', 2.2);
T('=ROUNDDOWN(2.99;1)', 2.9);
T('=INT(-2.5)', -3);
T('=MOD(10;3)', 1);
T('=MOD(-3;2)', 1);
T('=ABS(-4)', 4);
// logika
T('=IF(C2>5;"Banyak";"Sedikit")', 'Banyak');
T('=IF(C3>5;"Banyak";"Sedikit")', 'Sedikit');
T('=IF(AND(C2>5;D2>10000);"Ya";"Tidak")', 'Ya');
T('=IF(OR(C3>50;D3>50000);"Ya";"Tidak")', 'Tidak');
T('=IFS(C2>20;"A";C2>5;"B";TRUE;"C")', 'B');
T('=IFERROR(1/0;"x")', 'x');
T('=IFERROR(VLOOKUP("Zzz";A2:E6;3;FALSE);"Tidak ada")', 'Tidak ada');
T('=SWITCH(B2;"Minuman";1;"Makanan";2;0)', 1);
T('=NOT(TRUE)', false);
// bersyarat
T('=COUNTIF(B2:B6;"Minuman")', 3);
T('=COUNTIF(C2:C6;">5")', 3);
T('=COUNTIF(A2:A6;"K*")', 2);
T('=COUNTIF(C2:C6;"<>"&C2)', 4);
T('=SUMIF(B2:B6;"Minuman";C2:C6)', 27);
T('=SUMIF(C2:C6;">=8")', 30);
T('=AVERAGEIF(B2:B6;"Makanan";D2:D6)', 21000);
T('=COUNTIFS(B2:B6;"Minuman";C2:C6;">5")', 2);
T('=SUMIFS(C2:C6;B2:B6;"Minuman";D2:D6;">15000")', 22);
T('=MAXIFS(D2:D6;B2:B6;"Minuman")', 20000);
T('=MINIFS(D2:D6;B2:B6;"Makanan")', 12000);
T('=SUMPRODUCT(C2:C6;D2:D6)', 200000 + 75000 + 96000 + 90000 + 216000);
T('=SUMPRODUCT((B2:B6="Minuman")*C2:C6)', 27);
T('=SUMPRODUCT(--(B2:B6="Minuman"))', 3);
// teks
T('=LEFT("Excel";2)', 'Ex');
T('=RIGHT("Excel";3)', 'cel');
T('=MID("Excel";2;3)', 'xce');
T('=LEN("Halo Dunia")', 10);
T('=TRIM("  a   b  ")', 'a b');
T('=UPPER("abc")&LOWER("DEF")', 'ABCdef');
T('=PROPER("budi santoso")', 'Budi Santoso');
T('=A2&" - "&B2', 'Kopi - Minuman');
T('=CONCATENATE("a";"b";1)', 'ab1');
T('=TEXTJOIN(", ";TRUE;A2:A4)', 'Kopi, Teh, Roti');
T('=FIND("c";"Excel")', 3);
T('=SEARCH("C";"Excel")', 3);
T('=SUBSTITUTE("a-b-c";"-";"")', 'abc');
T('=SUBSTITUTE("a-b-c";"-";"/";2)', 'a-b/c');
T('=REPLACE("Excel";1;2;"XX")', 'XXcel');
T('=TEXT(5;"000")', '005');
T('=TEXT(0.256;"0%")', '26%');
T('=TEXT(1234.5;"#,##0.00")', '1,234.50');
T('=TEXT(E2;"dd/mm/yyyy")', '15/01/2025');
T('=TEXT(E2;"mmmm yyyy")', 'Januari 2025');
T('=TEXT(E2;"dddd")', 'Rabu');
T('=VALUE("12")+1', 13);
T('=REPT("*";3)', '***');
T('=TEXTBEFORE("a@b.com";"@")', 'a');
T('=TEXTAFTER("a@b.com";"@")', 'b.com');
T('=LEN(A2:A3)', [[4], [3]]);
// tanggal
T('=YEAR(E2)', 2025);
T('=MONTH(E3)', 2);
T('=DAY(E4)', 28);
T('=DATE(2025;1;31)+1-E2', 17);
T('=DATE(2025;14;1)', D('2026-02-01'));
T('=WEEKDAY(E2)', 4);
T('=WEEKDAY(E2;2)', 3);
T('=EDATE(E2;1)', D('2025-02-15'));
T('=EDATE(DATE(2025;1;31);1)', D('2025-02-28'));
T('=EOMONTH(E2;0)', D('2025-01-31'));
T('=EOMONTH(E2;1)', D('2025-02-28'));
T('=DATEDIF(DATE(2000;5;20);DATE(2025;5;19);"Y")', 24);
T('=DATEDIF(DATE(2000;5;20);DATE(2025;5;20);"Y")', 25);
T('=DATEDIF(DATE(2025;1;15);DATE(2025;4;10);"M")', 2);
T('=DATEDIF(DATE(2025;1;15);DATE(2025;4;10);"D")', 85);
T('=DATEDIF(DATE(2024;1;31);DATE(2025;3;1);"YM")', 1);
T('=NETWORKDAYS(DATE(2025;6;2);DATE(2025;6;8))', 5);
T('=WORKDAY(DATE(2025;6;6);1)', D('2025-06-09'));
T('=TODAY()', D('2025-06-15'));
T('=DAYS(DATE(2025;3;1);DATE(2025;2;1))', 28);
// lookup
T('=VLOOKUP("Roti";A2:E6;4;FALSE)', 12000);
T('=VLOOKUP("R*";A2:E6;3;0)', 8);
T('=VLOOKUP("Zzz";A2:E6;4;FALSE)', '#N/A');
T('=VLOOKUP(7;C2:D6;2)', 15000);
T("=VLOOKUP(\"B\";'Data Harga'!A2:B4;2;FALSE)", 'Beta');
T('=VLOOKUP("C";\'Data Harga\'!A:B;2;0)', 'Gamma');
T('=HLOOKUP("Qty";A1:E6;3;FALSE)', 5);
T('=INDEX(A2:A6;3)', 'Roti');
T('=INDEX(A2:E6;2;4)', 15000);
T('=MATCH("Roti";A2:A6;0)', 3);
T('=MATCH(9;C2:C6;1)', 3);
T('=MATCH(30000;D2:D6;0)', 4);
T('=INDEX(D2:D6;MATCH("Susu";A2:A6;0))', 18000);
T('=XLOOKUP("Teh";A2:A6;D2:D6)', 15000);
T('=XLOOKUP("Zzz";A2:A6;D2:D6;"Tidak ada")', 'Tidak ada');
T('=XLOOKUP("Kue";A2:A6;C2:D6)', [[3, 30000]]);
T('=XLOOKUP(15;D2:D6;A2:A6;"-";-1)', '-');
T('=XLOOKUP(16000;D2:D6;A2:A6;"-";-1)', 'Teh');
T('=CHOOSE(2;"a";"b";"c")', 'b');
T('=ROW(A5)', 5);
T('=COLUMN(C1)', 3);
T('=ROWS(A2:A6)', 5);
// statistik
T('=MEDIAN(C2:C6)', 8);
T('=LARGE(C2:C6;2)', 10);
T('=SMALL(C2:C6;2)', 5);
T('=RANK(C3;C2:C6)', 4);
T('=RANK(C3;C2:C6;1)', 2);
T('=MODE(1;2;2;3)', 2);
T('=ROUND(STDEV.S(2;4;4;4;5;5;7;9);4)', 2.1381);
T('=ROUND(STDEV.P(2;4;4;4;5;5;7;9);4)', 2);
// array dinamis
T('=FILTER(A2:A6;C2:C6>7)', [['Kopi'], ['Roti'], ['Susu']]);
T('=FILTER(A2:A6;C2:C6>100;"Kosong")', 'Kosong');
T('=SORT(C2:C6;1;-1)', [[12], [10], [8], [5], [3]]);
T('=INDEX(SORT(A2:A6);1)', 'Kopi');
T('=UNIQUE(B2:B6)', [['Minuman'], ['Makanan']]);
T('=COUNTA(UNIQUE(B2:B6))', 2);
T('=SEQUENCE(3)', [[1], [2], [3]]);
T('=SEQUENCE(2;2)', [[1, 2], [3, 4]]);
T('=SORTBY(A2:A4;C2:C4;1)', [['Teh'], ['Roti'], ['Kopi']]);
T('=SUM(FILTER(C2:C6;B2:B6="Makanan"))', 11);
T('=TRANSPOSE(C2:C3)', [[10, 5]]);
T('=LET(x;5;y;x*2;x+y)', 15);
T('=IF(C2:C4>6;"ya";"tidak")', [['ya'], ['tidak'], ['ya']]);
T('=IFERROR(VALUE({1}),0)', 'PARSE:Array konstanta {...} belum didukung di latihan ini. Gunakan range sel sebagai gantinya.');
T('=SUM(C2:C6)/COUNT(C2:C6)', 7.6);
T('=SUM(A2:A3)', 0);
// keuangan
T('=ROUND(PMT(0.01;12;-1000);2)', 88.85);
T('=ROUND(FV(0.05;10;-100);2)', 1257.79);
T('=ROUND(PV(0.05;10;-100);2)', 772.17);
T('=ROUND(NPV(0.1;100;200;300);2)', 481.59);
T('=ROUND(IRR(A1:A1);2)', '#NUM!');
// error
T('=FOO(1)', '#NAME?');
T('=SQRT(-1)', '#NUM!');
T('=A2+1', '#VALUE!');
T('=VLOOKUP("Kopi";A2:B6;3;0)', '#REF!');
T('=ISNUMBER(C2)', true);
T('=ISERROR(1/0)', true);
T('=ISTEXT(A2)', true);
T('=ISBLANK(Z9)', true);
T('=SUBTOTAL(9;C2:C6)', 38);

console.log(`${count - fails}/${count} tes mesin lulus`);
if (fails) process.exit(1);
