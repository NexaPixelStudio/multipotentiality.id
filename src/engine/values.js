// Nilai Excel: angka, teks, boolean, kosong (null), error (XlError), array 2D.
export class XlError {
  constructor(code) {
    this.code = code;
  }
  toString() {
    return this.code;
  }
}

export const ERR = {
  div0: '#DIV/0!',
  value: '#VALUE!',
  ref: '#REF!',
  name: '#NAME?',
  na: '#N/A',
  num: '#NUM!',
  circ: '#REF!',
  calc: '#CALC!'
};

export const xerr = (code) => new XlError(code);
export const isErr = (v) => v instanceof XlError;

const NUM_RE = /^\s*[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?\s*$/i;

export const general = (n, locale = 'id') => {
  if (!Number.isFinite(n)) return ERR.num;
  let s = String(Number(n.toPrecision(10)));
  if (/e/i.test(s)) s = Number(s).toLocaleString('en-US', { useGrouping: false, maximumFractionDigits: 10 });
  return locale === 'id' ? s.replace('.', ',') : s;
};

export const num = (v) => {
  if (v instanceof XlError) throw v;
  if (v === null || v === undefined) return 0;
  if (typeof v === 'number') return v;
  if (typeof v === 'boolean') return v ? 1 : 0;
  if (typeof v === 'string') {
    if (NUM_RE.test(v)) return Number(v);
    const t = v.trim();
    if (/^[-+]?\d+(\.\d+)?%$/.test(t)) return Number(t.slice(0, -1)) / 100;
    throw new XlError(ERR.value);
  }
  throw new XlError(ERR.value);
};

export const str = (v, locale = 'id') => {
  if (v instanceof XlError) throw v;
  if (v === null || v === undefined) return '';
  if (typeof v === 'boolean') return v ? 'TRUE' : 'FALSE';
  if (typeof v === 'number') return general(v, locale);
  return String(v);
};

export const bool = (v) => {
  if (v instanceof XlError) throw v;
  if (v === null || v === undefined) return false;
  if (typeof v === 'boolean') return v;
  if (typeof v === 'number') return v !== 0;
  if (typeof v === 'string') {
    const u = v.toUpperCase();
    if (u === 'TRUE') return true;
    if (u === 'FALSE') return false;
  }
  throw new XlError(ERR.value);
};

const typeRank = (v) => (typeof v === 'number' ? 0 : typeof v === 'string' ? 1 : 2);

// Urutan Excel: angka < teks < boolean. Teks dibandingkan tanpa peduli huruf besar/kecil.
export const compare = (a, b) => {
  if (a instanceof XlError) throw a;
  if (b instanceof XlError) throw b;
  let x = a;
  let y = b;
  if (x === null || x === undefined) x = typeof y === 'string' ? '' : typeof y === 'boolean' ? false : 0;
  if (y === null || y === undefined) y = typeof x === 'string' ? '' : typeof x === 'boolean' ? false : 0;
  const ra = typeRank(x);
  const rb = typeRank(y);
  if (ra !== rb) return ra < rb ? -1 : 1;
  if (ra === 1) {
    const l = x.toLowerCase();
    const r = y.toLowerCase();
    return l < r ? -1 : l > r ? 1 : 0;
  }
  if (ra === 2) return x === y ? 0 : x ? 1 : -1;
  return x < y ? -1 : x > y ? 1 : 0;
};

// ---------- tanggal ----------
const EPOCH = Date.UTC(1899, 11, 30);
export const serialToDate = (s) => new Date(EPOCH + Math.floor(s) * 86400000);
export const dateToSerial = (d) => Math.round((Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()) - EPOCH) / 86400000);
export const ymdToSerial = (y, m, d) => Math.round((Date.UTC(y, m - 1, d) - EPOCH) / 86400000);
// "2025-03-15" -> nomor seri tanggal Excel
export const D = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  return ymdToSerial(y, m, d);
};

export const MONTHS = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
export const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
export const DAYS = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
export const DAYS_SHORT = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

const pad = (n, w = 2) => String(n).padStart(w, '0');

const group = (intStr, sep) => intStr.replace(/\B(?=(\d{3})+(?!\d))/g, sep);

// ---------- TEXT() ----------
export const textFormat = (value, fmt) => {
  if (typeof value === 'string' && !NUM_RE.test(value)) return value;
  const n = num(value);
  // format tanggal
  if (/(d{1,4}|m{1,4}|y{2,4})/i.test(fmt.replace(/"[^"]*"/g, ''))) {
    const dt = serialToDate(n);
    const Y = dt.getUTCFullYear();
    const M = dt.getUTCMonth();
    const Dd = dt.getUTCDate();
    const W = dt.getUTCDay();
    return fmt.replace(/"([^"]*)"|yyyy|yy|mmmm|mmm|mm|m|dddd|ddd|dd|d/gi, (tok, lit) => {
      if (lit !== undefined) return lit;
      switch (tok.toLowerCase()) {
        case 'yyyy': return String(Y);
        case 'yy': return pad(Y % 100);
        case 'mmmm': return MONTHS[M];
        case 'mmm': return MONTHS_SHORT[M];
        case 'mm': return pad(M + 1);
        case 'm': return String(M + 1);
        case 'dddd': return DAYS[W];
        case 'ddd': return DAYS_SHORT[W];
        case 'dd': return pad(Dd);
        default: return String(Dd);
      }
    });
  }
  // format angka
  const m = /^([^#0.,%]*)([#0.,%]+)(.*)$/.exec(fmt.replace(/"/g, ''));
  if (!m) return general(n, 'en');
  const [, prefix, core, suffix] = m;
  const pct = core.includes('%');
  const body = core.replace('%', '');
  const [intPat, decPat = ''] = body.split('.');
  const decimals = (decPat.match(/[0#]/g) || []).length;
  const minInt = (intPat.match(/0/g) || []).length;
  let v = pct ? n * 100 : n;
  const neg = v < 0;
  v = Math.abs(v);
  const p = 10 ** decimals;
  v = Math.round(Number((v * p).toPrecision(15))) / p;
  let [i, d = ''] = v.toFixed(decimals).split('.');
  i = i.padStart(minInt, '0');
  if (minInt === 0 && Number(i) === 0 && !decimals) i = '';
  if (intPat.includes(',')) i = group(i, ',');
  const out = `${prefix}${i}${decimals ? `.${d}` : ''}${pct ? '%' : ''}${suffix}`;
  return neg ? `-${out}` : out;
};

// ---------- tampilan sel ----------
export const formatCell = (v, fmt, locale = 'id') => {
  if (v === null || v === undefined) return '';
  if (v instanceof XlError) return v.code;
  if (typeof v === 'boolean') return v ? 'TRUE' : 'FALSE';
  if (typeof v === 'string') return v;
  if (typeof v !== 'number') return String(v);
  const dec = locale === 'id' ? ',' : '.';
  const grp = locale === 'id' ? '.' : ',';
  const fixed = (x, d) => {
    const [i, f] = Math.abs(x).toFixed(d).split('.');
    return `${x < 0 ? '-' : ''}${group(i, grp)}${f ? dec + f : ''}`;
  };
  switch (fmt) {
    case 'rp': return `Rp ${fixed(Math.round(v), 0)}`;
    case 'int': return fixed(Math.round(v), 0);
    case 'dec1': return fixed(v, 1);
    case 'dec2': return fixed(v, 2);
    case 'pct': return `${general(Math.round(v * 10000) / 100, locale)}%`;
    case 'date': {
      const dt = serialToDate(v);
      return `${pad(dt.getUTCDate())}/${pad(dt.getUTCMonth() + 1)}/${dt.getUTCFullYear()}`;
    }
    default: return general(v, locale);
  }
};
