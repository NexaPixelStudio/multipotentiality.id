import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createContext, evaluate, XlError } from '../engine/evaluator.js';
import { ParseError } from '../engine/parser.js';
import { ERROR_HELP } from '../engine/check.js';
import { addr } from '../engine/refs.js';
import { D } from '../engine/values.js';
import Sheet from '../components/Sheet.jsx';
import FormulaBar from '../components/FormulaBar.jsx';
import { useRefPicker } from '../lib/picker.js';
import { localizeFormula } from '../lib/text.jsx';
import { href } from '../lib/router.js';
import { useProgress } from '../state/progress.jsx';
import Icon, { IconBadge } from '../components/Icon.jsx';

const SHEET = 'Bebas';
const ROWS = 16;
const COLS = 8;

const PRESETS = {
  penjualan: {
    label: 'Data penjualan',
    rows: [
      ['Produk', 'Kategori', 'Qty', 'Harga', 'Total'],
      ['Kopi', 'Minuman', 10, 20000],
      ['Teh', 'Minuman', 5, 15000],
      ['Roti', 'Makanan', 8, 12000],
      ['Kue', 'Makanan', 3, 30000],
      ['Susu', 'Minuman', 12, 18000]
    ],
    ideas: [
      ['Total tiap baris', '=C2*D2'],
      ['Jumlah qty', '=SUM(C2:C6)'],
      ['Qty minuman', '=SUMIF(B2:B6,"Minuman",C2:C6)'],
      ['Cari harga Roti', '=VLOOKUP("Roti",A2:D6,4,FALSE)'],
      ['Status banyak atau sedikit', '=IF(C2>=8,"Banyak","Sedikit")'],
      ['Urutkan qty', '=SORT(C2:C6,1,-1)'],
      ['Hanya minuman', '=FILTER(A2:A6,B2:B6="Minuman")']
    ]
  },
  nilai: {
    label: 'Nilai siswa',
    rows: [
      ['Siswa', 'Tugas', 'UTS', 'UAS', 'Akhir'],
      ['Ayu', 80, 70, 90],
      ['Budi', 65, 75, 60],
      ['Citra', 90, 85, 95],
      ['Dedi', 55, 60, 70],
      ['Eka', 78, 82, 88]
    ],
    ideas: [
      ['Nilai akhir tertimbang', '=B2*0.2+C2*0.3+D2*0.5'],
      ['Rata-rata UAS', '=AVERAGE(D2:D6)'],
      ['Nilai UAS tertinggi', '=MAX(D2:D6)'],
      ['Lulus atau remedial', '=IF(AVERAGE(B2:D2)>=70,"Lulus","Remedial")'],
      ['Peringkat UAS', '=RANK(D2,$D$2:$D$6)'],
      ['Siswa UAS > 80', '=COUNTIF(D2:D6,">80")']
    ]
  },
  tanggal: {
    label: 'Tanggal dan jadwal',
    rows: [
      ['Tugas', 'Mulai', 'Selesai', 'Durasi'],
      ['Desain', D('2025-06-02'), D('2025-06-13')],
      ['Coding', D('2025-06-16'), D('2025-07-25')],
      ['Uji coba', D('2025-07-28'), D('2025-08-08')],
      ['Rilis', D('2025-08-11'), D('2025-08-15')]
    ],
    ideas: [
      ['Selisih hari', '=C2-B2'],
      ['Hari kerja', '=NETWORKDAYS(B2,C2)'],
      ['Nama hari mulai', '=TEXT(B2,"dddd")'],
      ['Akhir bulan', '=EOMONTH(B2,0)'],
      ['3 bulan setelahnya', '=EDATE(B2,3)']
    ]
  },
  kosong: { label: 'Kosong', rows: [], ideas: [['Hitung sederhana', '=2+3*4'], ['Deret angka', '=SEQUENCE(5)'], ['Teks', '="Halo "&"Excel"']] }
};

const FMT = { B: undefined };

const toKeyed = (rows) => {
  const o = {};
  rows.forEach((row, ri) => row.forEach((v, ci) => { if (v !== null && v !== undefined && v !== '') o[`${ri + 1},${ci + 1}`] = v; }));
  return o;
};

// Menyimpan rumus dalam gaya internal (koma pemisah, titik desimal) agar mesin dapat membacanya.
function canonicalize(text, locale) {
  if (locale !== 'id') return text;
  let out = '';
  let inStr = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (ch === '"') inStr = !inStr;
    if (!inStr) {
      if (ch === ';') { out += ','; continue; }
      if (ch === ',' && /\d/.test(text[i - 1] || '') && /\d/.test(text[i + 1] || '')) { out += '.'; continue; }
    }
    out += ch;
  }
  return out;
}

function parseEntry(text, locale) {
  const t = text.trim();
  if (t === '') return null;
  if (t.startsWith('=')) return canonicalize(t, locale);
  if (/^-?\d+([.,]\d+)?$/.test(t)) return Number(t.replace(',', '.'));
  if (/^-?\d{1,3}(\.\d{3})+(,\d+)?$/.test(t)) return Number(t.replace(/\./g, '').replace(',', '.'));
  if (/^(true|false)$/i.test(t)) return t.toLowerCase() === 'true';
  return t;
}

const entryText = (raw, locale) => {
  if (raw === null || raw === undefined) return '';
  if (typeof raw === 'string' && raw.startsWith('=')) return localizeFormula(raw, locale);
  if (typeof raw === 'number') return locale === 'id' ? String(raw).replace('.', ',') : String(raw);
  if (typeof raw === 'boolean') return raw ? 'TRUE' : 'FALSE';
  return String(raw);
};

export default function SandboxPage() {
  const p = useProgress();
  const [preset, setPreset] = useState('penjualan');
  const [cells, setCells] = useState(() => toKeyed(PRESETS.penjualan.rows));
  const [sel, setSel] = useState({ r: 2, c: 5 });
  const [draft, setDraft] = useState('');
  const [dirty, setDirty] = useState(false);
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const gridRef = useRef(null);
  const live = useRef({ draft: '', dirty: false, sel });

  live.current = { draft, dirty, sel };

  useEffect(() => {
    document.title = 'Ruang Coba - Belajar Excel';
    return () => { document.title = 'Belajar Excel dari Dasar hingga Mahir'; };
  }, []);

  // sinkronkan draf dengan sel terpilih
  useEffect(() => {
    setDraft(entryText(cells[`${sel.r},${sel.c}`], p.locale));
    setDirty(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sel.r, sel.c, p.locale]);

  const rowsArr = useMemo(() => {
    const rows = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
    Object.entries(cells).forEach(([k, v]) => {
      const [r, c] = k.split(',').map(Number);
      if (r <= ROWS && c <= COLS) rows[r - 1][c - 1] = v;
    });
    return rows;
  }, [cells]);

  const def = useMemo(() => ({ name: SHEET, rows: rowsArr, fmt: FMT }), [rowsArr]);
  const ctx = useMemo(() => createContext([def], { locale: p.locale }), [def, p.locale]);

  // hasil array (spill) ditampilkan di sel kosong sekitarnya
  const overrides = useMemo(() => {
    const m = new Map();
    Object.entries(cells).forEach(([k, raw]) => {
      if (typeof raw !== 'string' || !raw.startsWith('=')) return;
      const [r, c] = k.split(',').map(Number);
      let v;
      try {
        v = evaluate(raw, ctx, SHEET, { locale: 'en', cur: { r, c } }).value;
      } catch {
        return;
      }
      if (!Array.isArray(v) || (v.length === 1 && v[0].length === 1)) return;
      const blocked = v.some((row, i) => row.some((_, j) => (i || j) && (cells[`${r + i},${c + j}`] !== undefined || r + i > ROWS || c + j > COLS)));
      if (blocked) {
        m.set(k, { value: new XlError('#SPILL!'), kind: 'target' });
        return;
      }
      v.forEach((row, i) => row.forEach((x, j) => m.set(`${r + i},${c + j}`, { value: x, kind: i || j ? 'ghost' : 'target' })));
    });
    return m;
  }, [cells, ctx]);

  const commit = () => {
    const { draft: d, dirty: dt, sel: s } = live.current;
    if (!dt) return;
    const val = parseEntry(d, p.locale);
    setCells((cs) => {
      const next = { ...cs };
      if (val === null) delete next[`${s.r},${s.c}`];
      else next[`${s.r},${s.c}`] = val;
      return next;
    });
    live.current.dirty = false;
    setDirty(false);
  };

  const picker = useRefPicker({
    inputRef,
    value: draft,
    setValue: (v) => { setDraft(v); setDirty(true); },
    homeSheet: SHEET
  });

  const select = (r, c) => {
    commit();
    setSel({ r: Math.max(1, Math.min(ROWS, r)), c: Math.max(1, Math.min(COLS, c)) });
  };

  const onGridKey = (e) => {
    if (e.target !== gridRef.current) return;
    const { r, c } = sel;
    const move = { ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1] }[e.key];
    if (move) {
      e.preventDefault();
      select(r + move[0], c + move[1]);
    } else if (e.key === 'Enter' || e.key === 'F2') {
      e.preventDefault();
      inputRef.current?.focus();
    } else if (e.key === 'Delete' || e.key === 'Backspace') {
      e.preventDefault();
      setCells((cs) => { const n = { ...cs }; delete n[`${r},${c}`]; return n; });
      setDraft('');
    } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      setDraft(e.key);
      setDirty(true);
      inputRef.current?.focus();
    }
  };

  const onBarSubmit = () => {
    commit();
    gridRef.current?.focus();
    setSel((s) => ({ ...s, r: Math.min(ROWS, s.r + 1) }));
  };

  const loadPreset = (key) => {
    setPreset(key);
    setCells(toKeyed(PRESETS[key].rows));
    setSel({ r: 2, c: key === 'tanggal' ? 4 : 5 });
  };

  const useIdea = (formula) => {
    const val = parseEntry(localizeFormula(formula, p.locale), p.locale);
    setCells((cs) => ({ ...cs, [`${sel.r},${sel.c}`]: val }));
    setDraft(entryText(val, p.locale));
    setDirty(false);
  };

  // hasil sel terpilih
  const raw = cells[`${sel.r},${sel.c}`];
  let current = null;
  if (typeof raw === 'string' && raw.startsWith('=')) {
    try {
      const v = evaluate(raw, ctx, SHEET, { locale: 'en', cur: { r: sel.r, c: sel.c } }).value;
      current = { ok: !(v instanceof XlError), value: v };
    } catch (e) {
      current = { ok: false, message: e instanceof ParseError ? e.message : 'Rumus belum dapat dibaca.' };
    }
  }
  const draftIsFormula = draft.startsWith('=');
  let draftNote = null;
  if (draftIsFormula && dirty) {
    try {
      evaluate(canonicalize(draft, p.locale), ctx, SHEET, { locale: 'en' });
    } catch (e) {
      draftNote = e instanceof ParseError ? e.message : null;
    }
  }

  return (
    <div className="space-y-6">
      <header className="flex items-start gap-4">
        <IconBadge name="flask" size={28} className="h-14 w-14" />
        <div>
          <h1 className="text-3xl font-extrabold">Ruang Coba</h1>
          <p className="mt-1 text-lg text-muted">Lembar kerja bebas tanpa penilaian. Tulis rumus apa pun dan lihat hasilnya secara langsung.</p>
        </div>
      </header>

      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Pilih data contoh">
        <span className="text-sm font-semibold text-muted">Data contoh:</span>
        {Object.entries(PRESETS).map(([k, v]) => (
          <button key={k} type="button" aria-pressed={preset === k} onClick={() => loadPreset(k)} className={`rounded-full px-3 py-1.5 text-sm font-semibold transition duration-200 active:scale-95 ${preset === k ? 'bg-brand text-brand-ink shadow-[0_4px_12px_-4px_rgb(var(--brand)/0.7)]' : 'bg-sunken text-muted hover:bg-line'}`}>
            {v.label}
          </button>
        ))}
      </div>

      <FormulaBar
        value={draft}
        onChange={(v) => { setDraft(v); setDirty(true); picker.reset(); }}
        onSubmit={onBarSubmit}
        inputRef={inputRef}
        label={addr(sel.r, sel.c)}
        locale={p.locale}
        placeholder="Pilih sel, lalu tulis isi atau rumusnya. Tekan Enter untuk menyimpan."
        onFocusChange={(f) => { setEditing(f); if (!f && live.current.dirty) setTimeout(() => commit(), 0); }}
      />

      {draftNote && <p className="anim-pop flex items-center gap-2 rounded-lg bg-warn-soft px-3 py-2 text-sm text-warn"><Icon name="alert" size={16} />{draftNote}</p>}

      <section
        ref={gridRef}
        tabIndex={0}
        onKeyDown={onGridKey}
        aria-label="Lembar kerja bebas. Gunakan tombol panah untuk berpindah sel dan ketik untuk mengisi."
        className="card overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        <Sheet
          def={def}
          ctx={ctx}
          locale={p.locale}
          overrides={overrides}
          selected={{ sheet: SHEET, r: sel.r, c: sel.c }}
          live={picker.live}
          pickMode={editing && draftIsFormula}
          headerStyle={preset === 'kosong' ? 'no' : 'yes'}
          minRows={ROWS}
          minCols={COLS}
          onDown={picker.onDown}
          onEnter={picker.onEnter}
          onSelect={(s, r, c) => {
            select(r, c);
            // di layar sentuh, langsung fokus ke kotak rumus agar papan ketik muncul
            if (window.matchMedia?.('(pointer: coarse)').matches) setTimeout(() => inputRef.current?.focus(), 0);
            else gridRef.current?.focus();
          }}
        />
      </section>

      {current && (
        <section className={`rounded-2xl border p-4 ${current.ok ? 'border-ok/30 bg-ok-soft' : 'border-bad/30 bg-bad-soft'}`} aria-live="polite">
          {current.message ? (
            <p className="flex items-center gap-2"><Icon name="alert" size={18} className="text-bad" />{current.message}</p>
          ) : current.value instanceof XlError ? (
            <>
              <p className="font-bold text-bad">Hasil: {current.value.code}</p>
              <p className="text-sm">{ERROR_HELP[current.value.code]}</p>
            </>
          ) : (
            <p className="font-semibold">Rumus di {addr(sel.r, sel.c)} berhasil dihitung. Hasilnya ditampilkan pada tabel.</p>
          )}
        </section>
      )}

      <section className="card p-5" aria-labelledby="ideas">
        <h2 id="ideas" className="text-lg font-bold">Contoh rumus untuk dicoba</h2>
        <p className="text-sm text-muted">Klik sebuah contoh untuk memasukkannya ke sel terpilih ({addr(sel.r, sel.c)}), lalu ubah sesuai kebutuhan Anda.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {PRESETS[preset].ideas.map(([label, f]) => (
            <button key={label} type="button" onClick={() => useIdea(f)} className="rounded-xl border border-line bg-surface px-3 py-2 text-left text-sm hover:bg-brand-soft">
              <span className="block font-semibold">{label}</span>
              <code className="formula-input text-xs text-brand">{localizeFormula(f, p.locale)}</code>
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">Perlu penjelasan sebuah fungsi? Buka <a className="font-semibold text-brand underline" href={href('kamus')}>Kamus Rumus</a>.</p>
      </section>
    </div>
  );
}
