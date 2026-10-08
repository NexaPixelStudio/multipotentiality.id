// Data animasi konsep untuk halaman Lab Visual.
// Setiap konsep: tabel kecil (rows), rumus yang ditampilkan per langkah, dan daftar langkah.
// Kunci sel memakai alamat Excel (A1). State sel: src (sumber), on (sedang diproses), ok (lolos),
// no (tidak lolos), out (hasil).

const a = (r, c) => `${String.fromCharCode(64 + c)}${r}`;

function sumConcept() {
  const vals = [12, 8, 15, 5, 10];
  const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
  const rows = [['Hari', 'Penjualan'], ...vals.map((v, i) => [days[i], v]), ['Total', null]];
  const steps = [{ note: 'Rumus SUM menjumlahkan semua angka di dalam rentang. Kita akan melihatnya bekerja satu sel demi satu sel.', formula: '=SUM(B2:B6)', cells: {}, total: null }];
  let run = 0;
  const seen = {};
  vals.forEach((v, i) => {
    run += v;
    seen[a(i + 2, 2)] = 'ok';
    steps.push({
      note: `Sel B${i + 2} bernilai ${v}. Jumlah berjalan menjadi ${run}.`,
      formula: '=SUM(B2:B6)',
      cells: { ...seen, [a(i + 2, 2)]: 'on' },
      total: run
    });
  });
  steps.push({ note: `Semua sel sudah dihitung. Hasil akhir ditulis di B7: ${run}.`, formula: '=SUM(B2:B6)', cells: { ...seen, B7: 'out' }, total: run, out: { B7: run } });
  return { rows, header: true, labelCols: 2, steps, fx: 'B7' };
}

function copyConcept() {
  const rows = [['Harga', 'Qty', 'Total'], [20000, 2], [15000, 3], [12000, 5], [30000, 1]];
  const fm = (r) => `=A${r}*B${r}`;
  const val = { 2: 40000, 3: 45000, 4: 60000, 5: 30000 };
  const steps = [{ note: 'Rumus ditulis sekali di C2. Referensi A2 dan B2 bersifat relatif, artinya ikut bergeser saat rumus disalin.', formula: fm(2), fx: 'C2', cells: { A2: 'src', B2: 'src', C2: 'out' }, out: { C2: val[2] } }];
  const done = { C2: val[2] };
  for (let r = 3; r <= 5; r += 1) {
    done[`C${r}`] = val[r];
    const cells = { A2: 'src', B2: 'src', C2: 'ok' };
    for (let k = 3; k < r; k += 1) cells[`C${k}`] = 'ok';
    cells[`A${r}`] = 'src';
    cells[`B${r}`] = 'src';
    cells[`C${r}`] = 'out';
    delete cells.A2;
    delete cells.B2;
    steps.push({ note: `Rumus diseret ke C${r}. Angka 2 berubah menjadi ${r}, jadi rumusnya otomatis menjadi ${fm(r)}.`, formula: fm(r), fx: `C${r}`, cells, out: { ...done } });
  }
  return { rows, header: true, labelCols: 3, steps };
}

function absConcept() {
  const rows = [['Harga', 'Total', 'Tarif pajak'], [20000, null, 0.1], [15000], [12000]];
  const fm = (r) => `=A${r}*(1+$C$2)`;
  const val = { 2: 22000, 3: 16500, 4: 13200 };
  const steps = [{ note: 'Tarif pajak 10% disimpan di C2. Semua baris harus memakai sel yang sama, jadi alamatnya dikunci dengan tanda $.', formula: fm(2), fx: 'B2', cells: { A2: 'src', C2: 'lock', B2: 'out' }, out: { B2: val[2] } }];
  const done = { B2: val[2] };
  for (let r = 3; r <= 4; r += 1) {
    done[`B${r}`] = val[r];
    const cells = { [`A${r}`]: 'src', C2: 'lock', [`B${r}`]: 'out' };
    for (let k = 2; k < r; k += 1) cells[`B${k}`] = 'ok';
    steps.push({ note: `Saat disalin ke B${r}, A2 bergeser menjadi A${r}, tetapi $C$2 tetap $C$2.`, formula: fm(r), fx: `B${r}`, cells, out: { ...done } });
  }
  steps.push({ note: 'Tanpa tanda $, C2 ikut bergeser ke C3 yang kosong, sehingga pajak dianggap 0 dan hasilnya salah. Tekan F4 untuk menambah tanda $ dengan cepat.', formula: '=A3*(1+C3)', fx: 'B3', cells: { A3: 'src', C3: 'bad', B3: 'bad', B2: 'ok' }, out: { B2: val[2], B3: 15000 }, wrong: true });
  return { rows, header: true, labelCols: 3, steps };
}

function ifConcept() {
  return { interactive: 'if' };
}

function vlookupConcept() {
  const rows = [['Kode', 'Produk', 'Harga'], ['K01', 'Kopi', 20000], ['K02', 'Teh', 15000], ['K03', 'Roti', 12000], ['K04', 'Kue', 30000]];
  const look = 'K03';
  const steps = [{ note: `Kita mencari kode ${look} di kolom pertama tabel, lalu mengambil nilai dari kolom ke-3.`, formula: `=VLOOKUP("${look}";A2:C5,3,FALSE)`, cells: {} }];
  const seen = {};
  for (let r = 2; r <= 5; r += 1) {
    const code = rows[r - 1][0];
    if (code === look) {
      steps.push({ note: `Baris ${r - 1}: ${code} sama dengan ${look}. Cocok, pencarian berhenti di sini.`, formula: `=VLOOKUP("${look}";A2:C5,3,FALSE)`, cells: { ...seen, [`A${r}`]: 'ok' } });
      steps.push({ note: 'Dari sel yang cocok, geser ke kanan sampai kolom ke-3 dari tabel: itulah kolom Harga.', formula: `=VLOOKUP("${look}";A2:C5,3,FALSE)`, cells: { [`A${r}`]: 'ok', [`B${r}`]: 'on', [`C${r}`]: 'on' } });
      steps.push({ note: `Nilai di C${r} adalah ${rows[r - 1][2]}. Itulah hasil rumusnya.`, formula: `=VLOOKUP("${look}";A2:C5,3,FALSE)`, cells: { [`A${r}`]: 'ok', [`C${r}`]: 'out' }, out: { C7: rows[r - 1][2] }, extra: { label: 'Hasil di C7', value: rows[r - 1][2] } });
      break;
    }
    steps.push({ note: `Baris ${r - 1}: ${code} tidak sama dengan ${look}. Lanjut ke baris berikutnya.`, formula: `=VLOOKUP("${look}";A2:C5,3,FALSE)`, cells: { ...seen, [`A${r}`]: 'on' } });
    seen[`A${r}`] = 'no';
  }
  return { rows: [...rows, [], ['Hasil', null, null]], header: true, labelCols: 3, steps, fx: 'C7' };
}

function sumifConcept() {
  const data = [['Kopi', 'Minuman', 10], ['Roti', 'Makanan', 8], ['Teh', 'Minuman', 5], ['Kue', 'Makanan', 3], ['Susu', 'Minuman', 12]];
  const rows = [['Produk', 'Kategori', 'Qty'], ...data, ['Total Minuman', null, null]];
  const f = '=SUMIF(B2:B6,"Minuman",C2:C6)';
  const steps = [{ note: 'SUMIF hanya menjumlahkan baris yang kategorinya "Minuman". Baris lain dilewati.', formula: f, cells: {} }];
  const seen = {};
  let run = 0;
  data.forEach(([, cat, q], i) => {
    const r = i + 2;
    if (cat === 'Minuman') {
      run += q;
      seen[`B${r}`] = 'ok';
      seen[`C${r}`] = 'ok';
      steps.push({ note: `Baris ${r}: ${cat} cocok, jadi qty ${q} ikut dijumlahkan. Jumlah berjalan: ${run}.`, formula: f, cells: { ...seen, [`B${r}`]: 'on', [`C${r}`]: 'on' }, total: run });
    } else {
      seen[`B${r}`] = 'no';
      seen[`C${r}`] = 'no';
      steps.push({ note: `Baris ${r}: ${cat} tidak cocok, jadi dilewati.`, formula: f, cells: { ...seen, [`B${r}`]: 'on' }, total: run || null });
    }
  });
  steps.push({ note: `Total qty Minuman adalah ${run}.`, formula: f, cells: { ...seen, C7: 'out' }, total: run, out: { C7: run } });
  return { rows, header: true, labelCols: 3, steps, fx: 'C7' };
}

// Urutan operasi: reduksi bertahap, ditampilkan sebagai teks.
function orderConcept() {
  return {
    text: true,
    steps: [
      { note: 'Excel tidak menghitung dari kiri ke kanan begitu saja. Ada urutan prioritas: kurung, pangkat, kali dan bagi, lalu tambah dan kurang.', expr: [['2'], ['+'], ['3'], ['*'], ['4'], ['^'], ['2']], hl: [] },
      { note: 'Pangkat dikerjakan lebih dulu: 4^2 menjadi 16.', expr: [['2'], ['+'], ['3'], ['*'], ['16']], hl: [4] },
      { note: 'Berikutnya perkalian: 3*16 menjadi 48.', expr: [['2'], ['+'], ['48']], hl: [2] },
      { note: 'Terakhir penjumlahan: 2+48 menjadi 50.', expr: [['50']], hl: [0], done: true },
      { note: 'Jika Anda ingin menjumlahkan lebih dulu, bungkus dengan kurung: (2+3)*4^2 hasilnya 80.', expr: [['('], ['2'], ['+'], ['3'], [')'], ['*'], ['16']], hl: [1, 2, 3], alt: true }
    ]
  };
}

export const CONCEPTS = [
  { id: 'sum', icon: 'sigma', tone: 'brand', title: 'Menjumlahkan dengan SUM', blurb: 'Lihat rentang dijumlahkan sel demi sel.', build: sumConcept },
  { id: 'salin', icon: 'copy', tone: 'sky', title: 'Menyalin rumus', blurb: 'Referensi relatif ikut bergeser.', build: copyConcept },
  { id: 'kunci', icon: 'target', tone: 'amber', title: 'Mengunci sel dengan $', blurb: 'Kenapa $B$5 tidak ikut bergeser.', build: absConcept },
  { id: 'if', icon: 'git-branch', tone: 'emerald', title: 'Percabangan IF', blurb: 'Geser nilai dan lihat jalurnya berubah.', build: ifConcept },
  { id: 'vlookup', icon: 'search', tone: 'violet', title: 'Mencari dengan VLOOKUP', blurb: 'Pemindaian baris sampai ketemu.', build: vlookupConcept },
  { id: 'sumif', icon: 'filter', tone: 'teal', title: 'Menjumlahkan bersyarat', blurb: 'Hanya baris yang cocok yang dihitung.', build: sumifConcept },
  { id: 'urutan', icon: 'calculator', tone: 'brand', title: 'Urutan operasi hitung', blurb: 'Pangkat, kali, lalu tambah.', build: orderConcept }
];
