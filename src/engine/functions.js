import {
  XlError, ERR, xerr, isErr, num, str, bool, compare, general, textFormat,
  serialToDate, dateToSerial, ymdToSerial
} from './values.js';

export const FUNCS = {};

// ---------- helper array ----------
const isArr = Array.isArray;
const rows = (v) => (isArr(v) ? v : [[v]]);
const flat = (v) => (isArr(v) ? v.flat() : [v]);
const dims = (v) => (isArr(v) ? [v.length, v[0].length] : [1, 1]);
const safe = (f) => {
  try {
    return f();
  } catch (e) {
    if (e instanceof XlError) return e;
    throw e;
  }
};
const pick = (a, i, j) => {
  if (!isArr(a)) return a;
  const ri = a.length === 1 ? 0 : i;
  const ci = a[0].length === 1 ? 0 : j;
  if (ri >= a.length || ci >= a[0].length) return xerr(ERR.na);
  return a[ri][ci];
};
// Menjalankan f(elemen...) per sel, dengan "broadcast" seperti Excel.
const liftN = (args, f, keepErr = false) => {
  let R = 1;
  let C = 1;
  for (const a of args) {
    if (isArr(a)) {
      R = Math.max(R, a.length);
      C = Math.max(C, a[0].length);
    }
  }
  const out = [];
  for (let i = 0; i < R; i += 1) {
    const row = [];
    for (let j = 0; j < C; j += 1) {
      const els = args.map((a) => pick(a, i, j));
      const bad = keepErr ? undefined : els.find((e) => e instanceof XlError && isArr(args[els.indexOf(e)]));
      row.push(bad || safe(() => f(els)));
    }
    out.push(row);
  }
  return out;
};
export const broadcast = (a, b, f) => {
  if (!isArr(a) && !isArr(b)) return f(a, b);
  return liftN([a, b], (e) => f(e[0], e[1]));
};

const def = (names, min, max, fn, lazy = false) => {
  for (const n of names.split(' ')) FUNCS[n] = { min, max, fn, lazy };
};
// fungsi skalar yang otomatis berlaku ke tiap elemen bila diberi range/array
const sdef = (names, min, max, fn) =>
  def(names, min, max, (args, env) => (args.some(isArr) ? liftN(args, (els) => fn(els, env)) : fn(args, env)));

const has = (v) => v !== undefined;
const optNum = (v, d) => (has(v) ? num(v) : d);

// ---------- pengumpul angka ----------
const collectNums = (args) => {
  const out = [];
  for (const a of args) {
    if (isArr(a)) {
      for (const v of a.flat()) {
        if (v instanceof XlError) throw v;
        if (typeof v === 'number') out.push(v);
      }
    } else if (a !== undefined && a !== null) out.push(num(a));
  }
  return out;
};

// ---------- kriteria (COUNTIF, SUMIF, ...) ----------
const wildcard = (pat) => {
  const esc = pat.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/~\*/g, '\u0001').replace(/~\?/g, '\u0002').replace(/\*/g, '.*').replace(/\?/g, '.').replace(/\u0001/g, '\\*').replace(/\u0002/g, '\\?');
  return new RegExp(`^${esc}$`, 'is');
};
const looksNum = (s) => /^\s*[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?\s*$/i.test(s);

const makeCrit = (c) => {
  if (c instanceof XlError) throw c;
  if (c === null || c === undefined) return (v) => v === 0;
  if (typeof c === 'number') return (v) => typeof v === 'number' && v === c;
  if (typeof c === 'boolean') return (v) => v === c;
  const s = String(c);
  const m = /^(>=|<=|<>|=|>|<)?([\s\S]*)$/.exec(s);
  const op = m[1] || '=';
  const rest = m[2];
  if (rest !== '' && looksNum(rest)) {
    const n = Number(rest);
    return (v) => {
      if (op === '<>') return !(typeof v === 'number' && v === n);
      if (typeof v !== 'number') return false;
      switch (op) {
        case '=': return v === n;
        case '>': return v > n;
        case '<': return v < n;
        case '>=': return v >= n;
        default: return v <= n;
      }
    };
  }
  if (op === '=' || op === '<>') {
    const eq = rest === '' ? (v) => v === null || v === '' : (v) => (typeof v === 'string' ? wildcard(rest).test(v) : false);
    return op === '=' ? eq : (v) => !eq(v);
  }
  const low = rest.toLowerCase();
  return (v) => {
    if (typeof v !== 'string') return false;
    const l = v.toLowerCase();
    if (op === '>') return l > low;
    if (op === '<') return l < low;
    if (op === '>=') return l >= low;
    return l <= low;
  };
};

const sameShape = (a, b) => dims(a)[0] === dims(b)[0] && dims(a)[1] === dims(b)[1];
// indeks sel yang memenuhi semua pasangan (range, kriteria)
const matchAll = (pairs) => {
  const base = rows(pairs[0][0]);
  for (const [rg] of pairs) if (!sameShape(base, rows(rg))) throw xerr(ERR.value);
  const tests = pairs.map(([rg, cr]) => [flat(rg), makeCrit(cr)]);
  const idx = [];
  const n = flat(base).length;
  for (let k = 0; k < n; k += 1) if (tests.every(([cells, t]) => t(cells[k]))) idx.push(k);
  return idx;
};
const pairsFrom = (args) => {
  const pairs = [];
  for (let i = 0; i < args.length; i += 2) pairs.push([args[i], args[i + 1]]);
  return pairs;
};

// ---------- matematika ----------
def('SUM', 1, 255, (a) => collectNums(a).reduce((x, y) => x + y, 0));
def('PRODUCT', 1, 255, (a) => collectNums(a).reduce((x, y) => x * y, 1));
def('AVERAGE', 1, 255, (a) => {
  const n = collectNums(a);
  if (!n.length) throw xerr(ERR.div0);
  return n.reduce((x, y) => x + y, 0) / n.length;
});
def('MIN', 1, 255, (a) => { const n = collectNums(a); return n.length ? Math.min(...n) : 0; });
def('MAX', 1, 255, (a) => { const n = collectNums(a); return n.length ? Math.max(...n) : 0; });
def('COUNT', 1, 255, (a) => {
  let c = 0;
  for (const x of a) {
    if (isArr(x)) c += x.flat().filter((v) => typeof v === 'number').length;
    else if (typeof x === 'number' || typeof x === 'boolean') c += 1;
    else if (typeof x === 'string' && looksNum(x)) c += 1;
  }
  return c;
});
def('COUNTA', 1, 255, (a) => a.reduce((c, x) => c + flat(x).filter((v) => v !== null && v !== undefined).length, 0));
def('COUNTBLANK', 1, 1, (a) => flat(a[0]).filter((v) => v === null || v === '').length);
def('MEDIAN', 1, 255, (a) => {
  const n = collectNums(a).sort((x, y) => x - y);
  if (!n.length) throw xerr(ERR.num);
  const m = Math.floor(n.length / 2);
  return n.length % 2 ? n[m] : (n[m - 1] + n[m]) / 2;
});
def('MODE MODE.SNGL', 1, 255, (a) => {
  const n = collectNums(a);
  const count = new Map();
  n.forEach((v) => count.set(v, (count.get(v) || 0) + 1));
  let best = null;
  let bc = 1;
  for (const v of n) if (count.get(v) > bc) { best = v; bc = count.get(v); }
  if (best === null) throw xerr(ERR.na);
  return best;
});
def('LARGE', 2, 2, (a) => {
  const n = collectNums([a[0]]).sort((x, y) => y - x);
  const k = Math.trunc(num(a[1]));
  if (k < 1 || k > n.length) throw xerr(ERR.num);
  return n[k - 1];
});
def('SMALL', 2, 2, (a) => {
  const n = collectNums([a[0]]).sort((x, y) => x - y);
  const k = Math.trunc(num(a[1]));
  if (k < 1 || k > n.length) throw xerr(ERR.num);
  return n[k - 1];
});
def('RANK RANK.EQ', 2, 3, (a) => {
  const x = num(a[0]);
  const n = collectNums([a[1]]);
  if (!n.includes(x)) throw xerr(ERR.na);
  const asc = has(a[2]) && num(a[2]) !== 0;
  return n.filter((v) => (asc ? v < x : v > x)).length + 1;
});
const variance = (n, sample) => {
  const mean = n.reduce((x, y) => x + y, 0) / n.length;
  const ss = n.reduce((s, v) => s + (v - mean) ** 2, 0);
  return ss / (sample ? n.length - 1 : n.length);
};
def('STDEV STDEV.S', 1, 255, (a) => {
  const n = collectNums(a);
  if (n.length < 2) throw xerr(ERR.div0);
  return Math.sqrt(variance(n, true));
});
def('STDEV.P', 1, 255, (a) => {
  const n = collectNums(a);
  if (!n.length) throw xerr(ERR.div0);
  return Math.sqrt(variance(n, false));
});
def('SUBTOTAL', 2, 255, (a) => {
  const code = num(a[0]) % 100;
  const rest = a.slice(1);
  const map = { 1: 'AVERAGE', 2: 'COUNT', 3: 'COUNTA', 4: 'MAX', 5: 'MIN', 6: 'PRODUCT', 9: 'SUM' };
  if (!map[code]) throw xerr(ERR.value);
  return FUNCS[map[code]].fn(rest);
});

const roundTo = (n, d, mode) => {
  const p = 10 ** Math.abs(d);
  const scaled = d >= 0 ? n * p : n / p;
  const s = Number(Math.abs(scaled).toPrecision(15));
  let r;
  if (mode === 'up') r = Math.ceil(s);
  else if (mode === 'down') r = Math.floor(s);
  else r = Math.floor(s + 0.5);
  r *= Math.sign(scaled);
  return d >= 0 ? r / p : r * p;
};
sdef('ROUND', 2, 2, ([n, d]) => roundTo(num(n), Math.trunc(num(d)), 'near'));
sdef('ROUNDUP', 2, 2, ([n, d]) => roundTo(num(n), Math.trunc(num(d)), 'up'));
sdef('ROUNDDOWN', 2, 2, ([n, d]) => roundTo(num(n), Math.trunc(num(d)), 'down'));
sdef('TRUNC', 1, 2, ([n, d]) => roundTo(num(n), Math.trunc(optNum(d, 0)), 'down'));
sdef('INT', 1, 1, ([n]) => Math.floor(num(n)));
sdef('ABS', 1, 1, ([n]) => Math.abs(num(n)));
sdef('SIGN', 1, 1, ([n]) => Math.sign(num(n)));
sdef('SQRT', 1, 1, ([n]) => {
  const v = num(n);
  if (v < 0) throw xerr(ERR.num);
  return Math.sqrt(v);
});
sdef('POWER', 2, 2, ([a, b]) => {
  const r = num(a) ** num(b);
  if (!Number.isFinite(r)) throw xerr(num(a) === 0 ? ERR.div0 : ERR.num);
  return r;
});
sdef('EXP', 1, 1, ([n]) => Math.exp(num(n)));
sdef('LN', 1, 1, ([n]) => {
  if (num(n) <= 0) throw xerr(ERR.num);
  return Math.log(num(n));
});
sdef('MOD', 2, 2, ([n, d]) => {
  const x = num(n);
  const y = num(d);
  if (y === 0) throw xerr(ERR.div0);
  return x - y * Math.floor(x / y);
});
sdef('QUOTIENT', 2, 2, ([n, d]) => {
  if (num(d) === 0) throw xerr(ERR.div0);
  return Math.trunc(num(n) / num(d));
});
sdef('CEILING', 1, 2, ([n, s]) => {
  const sig = optNum(s, 1);
  if (sig === 0) return 0;
  return Math.ceil(Number((num(n) / sig).toPrecision(15))) * sig;
});
sdef('FLOOR', 1, 2, ([n, s]) => {
  const sig = optNum(s, 1);
  if (sig === 0) throw xerr(ERR.div0);
  return Math.floor(Number((num(n) / sig).toPrecision(15))) * sig;
});
sdef('MROUND', 2, 2, ([n, m]) => {
  const mult = num(m);
  if (mult === 0) return 0;
  return Math.round(Number((num(n) / mult).toPrecision(15))) * mult;
});
def('PI', 0, 0, () => Math.PI);

def('SUMPRODUCT', 1, 255, (a) => {
  const arrs = a.map(rows);
  for (const x of arrs) if (!sameShape(arrs[0], x)) throw xerr(ERR.value);
  const lists = arrs.map(flat);
  let total = 0;
  for (let k = 0; k < lists[0].length; k += 1) {
    let prod = 1;
    for (const l of lists) {
      const v = l[k];
      if (v instanceof XlError) throw v;
      prod *= typeof v === 'number' ? v : 0;
    }
    total += prod;
  }
  return total;
});

// ---------- fungsi bersyarat ----------
def('COUNTIF', 2, 2, (a) => matchAll([[a[0], a[1]]]).length);
def('COUNTIFS', 2, 254, (a) => matchAll(pairsFrom(a)).length);
def('SUMIF', 2, 3, (a) => {
  const idx = matchAll([[a[0], a[1]]]);
  const target = flat(has(a[2]) ? a[2] : a[0]);
  return idx.reduce((s, k) => s + (typeof target[k] === 'number' ? target[k] : 0), 0);
});
def('SUMIFS', 3, 255, (a) => {
  const sumR = rows(a[0]);
  const pairs = pairsFrom(a.slice(1));
  if (!sameShape(sumR, rows(pairs[0][0]))) throw xerr(ERR.value);
  const t = flat(sumR);
  return matchAll(pairs).reduce((s, k) => s + (typeof t[k] === 'number' ? t[k] : 0), 0);
});
def('AVERAGEIF', 2, 3, (a) => {
  const idx = matchAll([[a[0], a[1]]]);
  const t = flat(has(a[2]) ? a[2] : a[0]);
  const n = idx.map((k) => t[k]).filter((v) => typeof v === 'number');
  if (!n.length) throw xerr(ERR.div0);
  return n.reduce((x, y) => x + y, 0) / n.length;
});
def('AVERAGEIFS', 3, 255, (a) => {
  const t = flat(a[0]);
  const n = matchAll(pairsFrom(a.slice(1))).map((k) => t[k]).filter((v) => typeof v === 'number');
  if (!n.length) throw xerr(ERR.div0);
  return n.reduce((x, y) => x + y, 0) / n.length;
});
def('MAXIFS', 3, 255, (a) => {
  const t = flat(a[0]);
  const n = matchAll(pairsFrom(a.slice(1))).map((k) => t[k]).filter((v) => typeof v === 'number');
  return n.length ? Math.max(...n) : 0;
});
def('MINIFS', 3, 255, (a) => {
  const t = flat(a[0]);
  const n = matchAll(pairsFrom(a.slice(1))).map((k) => t[k]).filter((v) => typeof v === 'number');
  return n.length ? Math.min(...n) : 0;
});

// ---------- logika ----------
const truthList = (a) => {
  const out = [];
  for (const x of a) {
    if (isArr(x)) {
      for (const v of x.flat()) {
        if (v instanceof XlError) throw v;
        if (typeof v === 'boolean' || typeof v === 'number') out.push(bool(v));
      }
    } else if (x !== undefined) out.push(bool(x));
  }
  if (!out.length) throw xerr(ERR.value);
  return out;
};
def('AND', 1, 255, (a) => truthList(a).every(Boolean));
def('OR', 1, 255, (a) => truthList(a).some(Boolean));
def('XOR', 1, 255, (a) => truthList(a).filter(Boolean).length % 2 === 1);
sdef('NOT', 1, 1, ([x]) => !bool(x));
def('TRUE', 0, 0, () => true);
def('FALSE', 0, 0, () => false);
def('NA', 0, 0, () => { throw xerr(ERR.na); });

def('IF', 2, 3, (nodes, env, ev) => {
  const c = ev(nodes[0], env);
  const branch = (i, dflt) => (nodes[i] && nodes[i].t !== 'empty' ? ev(nodes[i], env) : nodes[i] ? 0 : dflt);
  if (!isArr(c)) return bool(c) ? branch(1, true) : branch(2, false);
  const t = branch(1, true);
  const f = branch(2, false);
  const pair = liftN([c, t], ([cv, tv]) => [cv, tv], true);
  return liftN([pair, f], ([p, fv]) => (bool(p[0]) ? p[1] : fv), true);
}, true);
def('IFS', 2, 254, (nodes, env, ev) => {
  for (let i = 0; i + 1 < nodes.length; i += 2) if (bool(ev(nodes[i], env))) return ev(nodes[i + 1], env);
  throw xerr(ERR.na);
}, true);
def('SWITCH', 3, 255, (nodes, env, ev) => {
  const target = ev(nodes[0], env);
  let i = 1;
  for (; i + 1 < nodes.length; i += 2) if (compare(target, ev(nodes[i], env)) === 0) return ev(nodes[i + 1], env);
  if (i < nodes.length) return ev(nodes[i], env);
  throw xerr(ERR.na);
}, true);
def('CHOOSE', 2, 255, (nodes, env, ev) => {
  const i = Math.trunc(num(ev(nodes[0], env)));
  if (i < 1 || i >= nodes.length) throw xerr(ERR.value);
  return ev(nodes[i], env);
}, true);
def('IFERROR', 2, 2, (nodes, env, ev) => {
  let v;
  try {
    v = ev(nodes[0], env);
  } catch (e) {
    if (e instanceof XlError) return ev(nodes[1], env);
    throw e;
  }
  if (v instanceof XlError) return ev(nodes[1], env);
  if (isArr(v) && v.flat().some(isErr)) {
    const alt = ev(nodes[1], env);
    return liftN([v, alt], ([x, y]) => (x instanceof XlError ? y : x), true);
  }
  return v;
}, true);
def('IFNA', 2, 2, (nodes, env, ev) => {
  let v;
  try {
    v = ev(nodes[0], env);
  } catch (e) {
    v = e;
  }
  if (v instanceof XlError) {
    if (v.code === ERR.na) return ev(nodes[1], env);
    throw v;
  }
  return v;
}, true);
def('LET', 3, 255, (nodes, env, ev) => {
  let vars = { ...(env.vars || {}) };
  for (let i = 0; i + 1 < nodes.length; i += 2) {
    if (nodes[i].t !== 'name') throw xerr(ERR.name);
    vars = { ...vars, [nodes[i].v]: ev(nodes[i + 1], { ...env, vars }) };
  }
  return ev(nodes[nodes.length - 1], { ...env, vars });
}, true);

const lazyIs = (names, pred) =>
  def(names, 1, 1, (nodes, env, ev) => {
    let v;
    try {
      v = ev(nodes[0], env);
    } catch (e) {
      if (e instanceof XlError) v = e;
      else throw e;
    }
    return isArr(v) ? liftN([v], ([x]) => pred(x), true) : pred(v);
  }, true);
lazyIs('ISNUMBER', (v) => typeof v === 'number');
lazyIs('ISTEXT', (v) => typeof v === 'string');
lazyIs('ISBLANK', (v) => v === null);
lazyIs('ISLOGICAL', (v) => typeof v === 'boolean');
lazyIs('ISERROR', (v) => v instanceof XlError);
lazyIs('ISERR', (v) => v instanceof XlError && v.code !== ERR.na);
lazyIs('ISNA', (v) => v instanceof XlError && v.code === ERR.na);

// ---------- teks ----------
const L = (env) => env.ctx.locale;
const cnt = (v, d) => {
  const n = has(v) ? Math.trunc(num(v)) : d;
  if (n < 0) throw xerr(ERR.value);
  return n;
};
sdef('LEN', 1, 1, ([t], env) => str(t, L(env)).length);
sdef('LEFT', 1, 2, ([t, n], env) => str(t, L(env)).slice(0, cnt(n, 1)));
sdef('RIGHT', 1, 2, ([t, n], env) => {
  const s = str(t, L(env));
  const k = cnt(n, 1);
  return k === 0 ? '' : s.slice(-k);
});
sdef('MID', 3, 3, ([t, s, n], env) => {
  const start = Math.trunc(num(s));
  if (start < 1) throw xerr(ERR.value);
  return str(t, L(env)).substr(start - 1, cnt(n, 0));
});
sdef('TRIM', 1, 1, ([t], env) => str(t, L(env)).replace(/ +/g, ' ').trim());
sdef('CLEAN', 1, 1, ([t], env) => str(t, L(env)).replace(/[\u0000-\u001f]/g, ''));
sdef('UPPER', 1, 1, ([t], env) => str(t, L(env)).toUpperCase());
sdef('LOWER', 1, 1, ([t], env) => str(t, L(env)).toLowerCase());
sdef('PROPER', 1, 1, ([t], env) => str(t, L(env)).toLowerCase().replace(/(^|[^a-z0-9])([a-z])/g, (m, a, b) => a + b.toUpperCase()));
sdef('EXACT', 2, 2, ([a, b], env) => str(a, L(env)) === str(b, L(env)));
sdef('REPT', 2, 2, ([t, n], env) => str(t, L(env)).repeat(cnt(n, 0)));
sdef('FIND', 2, 3, ([f, w, s], env) => {
  const start = optNum(s, 1);
  const i = str(w, L(env)).indexOf(str(f, L(env)), start - 1);
  if (i < 0 || start < 1) throw xerr(ERR.value);
  return i + 1;
});
sdef('SEARCH', 2, 3, ([f, w, s], env) => {
  const start = optNum(s, 1);
  const hay = str(w, L(env));
  const pat = wildcard(str(f, L(env))).source.slice(1, -1);
  const m = new RegExp(pat, 'is').exec(hay.slice(start - 1));
  if (!m || start < 1) throw xerr(ERR.value);
  return m.index + start;
});
sdef('SUBSTITUTE', 3, 4, ([t, o, n, inst], env) => {
  const s = str(t, L(env));
  const old = str(o, L(env));
  const rep = str(n, L(env));
  if (old === '') return s;
  if (!has(inst)) return s.split(old).join(rep);
  const k = Math.trunc(num(inst));
  let pos = -1;
  for (let i = 0; i < k; i += 1) {
    pos = s.indexOf(old, pos + 1);
    if (pos < 0) return s;
  }
  return s.slice(0, pos) + rep + s.slice(pos + old.length);
});
sdef('REPLACE', 4, 4, ([t, s, n, nt], env) => {
  const text = str(t, L(env));
  const start = Math.trunc(num(s));
  if (start < 1) throw xerr(ERR.value);
  return text.slice(0, start - 1) + str(nt, L(env)) + text.slice(start - 1 + cnt(n, 0));
});
sdef('TEXT', 2, 2, ([v, f], env) => textFormat(v, str(f, L(env))));
sdef('VALUE', 1, 1, ([t]) => {
  if (typeof t === 'string') {
    const clean = t.trim().replace(/^Rp\s*/i, '');
    if (/^-?\d{1,3}(\.\d{3})+(,\d+)?$/.test(clean)) return Number(clean.replace(/\./g, '').replace(',', '.'));
  }
  return num(t);
});
def('CONCATENATE', 1, 255, (a, env) => a.map((x) => str(x, L(env))).join(''));
def('CONCAT', 1, 255, (a, env) => a.flatMap(flat).map((x) => str(x, L(env))).join(''));
def('TEXTJOIN', 3, 255, (a, env) => {
  const delim = str(a[0], L(env));
  const skip = bool(a[1]);
  const parts = a.slice(2).flatMap(flat).map((x) => (x instanceof XlError ? (() => { throw x; })() : str(x, L(env))));
  return (skip ? parts.filter((p) => p !== '') : parts).join(delim);
});
const splitAt = (text, delim, instance, before) => {
  if (delim === '') return before ? '' : text;
  const parts = [];
  let pos = -1;
  for (;;) {
    pos = text.indexOf(delim, pos + 1);
    if (pos < 0) break;
    parts.push(pos);
  }
  const k = instance < 0 ? parts.length + instance : instance - 1;
  if (!parts.length || k < 0 || k >= parts.length) throw xerr(ERR.na);
  const p = parts[k];
  return before ? text.slice(0, p) : text.slice(p + delim.length);
};
sdef('TEXTBEFORE', 2, 3, ([t, d, i], env) => splitAt(str(t, L(env)), str(d, L(env)), optNum(i, 1), true));
sdef('TEXTAFTER', 2, 3, ([t, d, i], env) => splitAt(str(t, L(env)), str(d, L(env)), optNum(i, 1), false));
def('TEXTSPLIT', 2, 2, (a, env) => [str(a[0], L(env)).split(str(a[1], L(env)))]);

// ---------- tanggal ----------
const serialOf = (v) => {
  if (typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v.trim())) {
    const [y, m, d] = v.trim().split('-').map(Number);
    return ymdToSerial(y, m, d);
  }
  const n = num(v);
  if (n < 0) throw xerr(ERR.num);
  return Math.floor(n);
};
const parts = (s) => {
  const d = serialToDate(s);
  return { y: d.getUTCFullYear(), m: d.getUTCMonth() + 1, d: d.getUTCDate(), w: d.getUTCDay() };
};
const daysInMonth = (y, m) => new Date(Date.UTC(y, m, 0)).getUTCDate();

sdef('DATE', 3, 3, ([y, m, d]) => {
  let yy = Math.trunc(num(y));
  if (yy >= 0 && yy < 1900) yy += 1900;
  return ymdToSerial(yy, Math.trunc(num(m)), Math.trunc(num(d)));
});
sdef('YEAR', 1, 1, ([v]) => parts(serialOf(v)).y);
sdef('MONTH', 1, 1, ([v]) => parts(serialOf(v)).m);
sdef('DAY', 1, 1, ([v]) => parts(serialOf(v)).d);
sdef('DATEVALUE', 1, 1, ([v]) => serialOf(v));
sdef('WEEKDAY', 1, 2, ([v, t]) => {
  const w = parts(serialOf(v)).w;
  const type = optNum(t, 1);
  if (type === 1) return w + 1;
  if (type === 2) return ((w + 6) % 7) + 1;
  if (type === 3) return (w + 6) % 7;
  throw xerr(ERR.num);
});
def('TODAY', 0, 0, (a, env) => dateToSerial(env.ctx.now()));
def('NOW', 0, 0, (a, env) => {
  const n = env.ctx.now();
  return dateToSerial(n) + (n.getUTCHours() * 3600 + n.getUTCMinutes() * 60 + n.getUTCSeconds()) / 86400;
});
sdef('DAYS', 2, 2, ([e, s]) => serialOf(e) - serialOf(s));
const addMonths = (s, months) => {
  const p = parts(s);
  const total = p.y * 12 + (p.m - 1) + months;
  const y = Math.floor(total / 12);
  const m = (total % 12) + 1;
  return { y, m, d: Math.min(p.d, daysInMonth(y, m)) };
};
sdef('EDATE', 2, 2, ([s, mo]) => {
  const r = addMonths(serialOf(s), Math.trunc(num(mo)));
  return ymdToSerial(r.y, r.m, r.d);
});
sdef('EOMONTH', 2, 2, ([s, mo]) => {
  const r = addMonths(serialOf(s), Math.trunc(num(mo)));
  return ymdToSerial(r.y, r.m, daysInMonth(r.y, r.m));
});
sdef('DATEDIF', 3, 3, ([s, e, u], env) => {
  const a = serialOf(s);
  const b = serialOf(e);
  if (a > b) throw xerr(ERR.num);
  const p1 = parts(a);
  const p2 = parts(b);
  const unit = str(u, L(env)).toUpperCase();
  const months = (p2.y - p1.y) * 12 + (p2.m - p1.m) - (p2.d < p1.d ? 1 : 0);
  switch (unit) {
    case 'Y': return Math.floor(months / 12);
    case 'M': return months;
    case 'D': return b - a;
    case 'YM': return months % 12;
    case 'MD': {
      if (p2.d >= p1.d) return p2.d - p1.d;
      const pm = p2.m === 1 ? 12 : p2.m - 1;
      const py = p2.m === 1 ? p2.y - 1 : p2.y;
      return p2.d + daysInMonth(py, pm) - p1.d;
    }
    case 'YD': {
      let ann = ymdToSerial(p2.y, p1.m, p1.d);
      if (ann > b) ann = ymdToSerial(p2.y - 1, p1.m, p1.d);
      return b - ann;
    }
    default: throw xerr(ERR.num);
  }
});
const holidaySet = (h) => new Set(has(h) ? flat(h).filter((v) => typeof v === 'number').map(Math.floor) : []);
const isWork = (s, hol) => {
  const w = serialToDate(s).getUTCDay();
  return w !== 0 && w !== 6 && !hol.has(s);
};
def('NETWORKDAYS', 2, 3, (a) => {
  const s = serialOf(a[0]);
  const e = serialOf(a[1]);
  const hol = holidaySet(a[2]);
  const [lo, hi] = s <= e ? [s, e] : [e, s];
  let c = 0;
  for (let d = lo; d <= hi; d += 1) if (isWork(d, hol)) c += 1;
  return s <= e ? c : -c;
});
def('WORKDAY', 2, 3, (a) => {
  let d = serialOf(a[0]);
  let n = Math.trunc(num(a[1]));
  const hol = holidaySet(a[2]);
  const step = n >= 0 ? 1 : -1;
  while (n !== 0) {
    d += step;
    if (isWork(d, hol)) n -= step;
  }
  return d;
});

// ---------- pencarian ----------
const eqLookup = (a, b) => {
  if (typeof a === 'string' && typeof b === 'string') return a.toLowerCase() === b.toLowerCase();
  return typeof a === typeof b && a === b;
};
// kembalikan indeks posisi, mode: 0 persis, -1 persis/lebih kecil, 1 persis/lebih besar, 2 wildcard
const findIndex = (needle, hay, mode, reverse = false) => {
  const order = hay.map((_, i) => i);
  if (reverse) order.reverse();
  if (mode === 0 || mode === 2) {
    const test = mode === 2 && typeof needle === 'string' ? (v) => typeof v === 'string' && wildcard(needle).test(v) : (v) => eqLookup(v, needle);
    return order.find((i) => test(hay[i])) ?? -1;
  }
  const exact = order.find((i) => eqLookup(hay[i], needle));
  if (exact !== undefined) return exact;
  let best = -1;
  for (const i of order) {
    const v = hay[i];
    if (v === null || v instanceof XlError || typeof v !== typeof needle) continue;
    const c = compare(v, needle);
    if (mode === -1 && c < 0 && (best < 0 || compare(v, hay[best]) > 0)) best = i;
    if (mode === 1 && c > 0 && (best < 0 || compare(v, hay[best]) < 0)) best = i;
  }
  return best;
};
const vec = (a) => {
  const r = rows(a);
  if (r.length !== 1 && r[0].length !== 1) throw xerr(ERR.value);
  return r.length === 1 ? r[0] : r.map((x) => x[0]);
};

def('VLOOKUP', 3, 4, (a) => {
  const t = rows(a[1]);
  const col = Math.trunc(num(a[2]));
  if (col < 1) throw xerr(ERR.value);
  if (col > t[0].length) throw xerr(ERR.ref);
  const approx = !has(a[3]) || bool(a[3]);
  const keys = t.map((r) => r[0]);
  const i = findIndex(a[0], keys, approx ? -1 : 2);
  if (i < 0) throw xerr(ERR.na);
  return t[i][col - 1];
});
def('HLOOKUP', 3, 4, (a) => {
  const t = rows(a[1]);
  const rw = Math.trunc(num(a[2]));
  if (rw < 1) throw xerr(ERR.value);
  if (rw > t.length) throw xerr(ERR.ref);
  const approx = !has(a[3]) || bool(a[3]);
  const i = findIndex(a[0], t[0], approx ? -1 : 2);
  if (i < 0) throw xerr(ERR.na);
  return t[rw - 1][i];
});
def('LOOKUP', 2, 3, (a) => {
  const keys = vec(a[1]);
  const i = findIndex(a[0], keys, -1);
  if (i < 0) throw xerr(ERR.na);
  const res = has(a[2]) ? vec(a[2]) : keys;
  return res[i];
});
def('MATCH', 2, 3, (a) => {
  const type = has(a[2]) ? Math.trunc(num(a[2])) : 1;
  const hay = vec(a[1]);
  const i = findIndex(a[0], hay, type === 0 ? 2 : type === 1 ? -1 : 1);
  if (i < 0) throw xerr(ERR.na);
  return i + 1;
});
def('XMATCH', 2, 4, (a) => {
  const mm = has(a[2]) ? Math.trunc(num(a[2])) : 0;
  const rev = has(a[3]) && num(a[3]) < 0;
  const i = findIndex(a[0], vec(a[1]), mm, rev);
  if (i < 0) throw xerr(ERR.na);
  return i + 1;
});
def('XLOOKUP', 3, 6, (a, env, ev) => {
  const mm = has(a[4]) ? Math.trunc(num(a[4])) : 0;
  const rev = has(a[5]) && num(a[5]) < 0;
  const keys = vec(a[1]);
  const i = findIndex(a[0], keys, mm, rev);
  if (i < 0) {
    if (has(a[3])) return a[3];
    throw xerr(ERR.na);
  }
  const ret = rows(a[2]);
  const vertical = rows(a[1]).length > 1 || rows(a[1])[0].length === 1;
  if (vertical) {
    if (ret.length !== keys.length) throw xerr(ERR.value);
    return ret[i].length === 1 ? ret[i][0] : [ret[i]];
  }
  if (ret[0].length !== keys.length) throw xerr(ERR.value);
  return ret.length === 1 ? ret[0][i] : ret.map((r) => [r[i]]);
});
def('INDEX', 2, 3, (a) => {
  const t = rows(a[0]);
  const [R, C] = [t.length, t[0].length];
  let r = Math.trunc(num(a[1]));
  let c = has(a[2]) ? Math.trunc(num(a[2])) : null;
  if (c === null && R === 1 && C > 1) {
    c = r;
    r = 1;
  } else if (c === null) c = C === 1 ? 1 : 0;
  if (r < 0 || c < 0 || r > R || c > C) throw xerr(ERR.ref);
  if (r === 0 && c === 0) return t;
  if (r === 0) return t.map((x) => [x[c - 1]]);
  if (c === 0) return [t[r - 1]];
  return t[r - 1][c - 1];
});
def('ROW', 0, 1, (nodes, env) => {
  const n = nodes[0];
  if (!n) return env.cur ? env.cur.r : 1;
  if (n.t === 'cell') return n.r;
  if (n.t === 'range') {
    const out = [];
    for (let r = Math.min(n.a.r, n.b.r); r <= Math.max(n.a.r, n.b.r); r += 1) out.push([r]);
    return out;
  }
  throw xerr(ERR.value);
}, true);
def('COLUMN', 0, 1, (nodes, env) => {
  const n = nodes[0];
  if (!n) return env.cur ? env.cur.c : 1;
  if (n.t === 'cell') return n.c;
  if (n.t === 'range') {
    const out = [];
    for (let c = Math.min(n.a.c, n.b.c); c <= Math.max(n.a.c, n.b.c); c += 1) out.push(c);
    return [out];
  }
  throw xerr(ERR.value);
}, true);
def('ROWS', 1, 1, (a) => dims(a[0])[0]);
def('COLUMNS', 1, 1, (a) => dims(a[0])[1]);

// ---------- array dinamis ----------
def('SEQUENCE', 1, 4, (a) => {
  const R = Math.trunc(num(a[0]));
  const C = has(a[1]) ? Math.trunc(num(a[1])) : 1;
  const start = optNum(a[2], 1);
  const step = optNum(a[3], 1);
  if (R < 1 || C < 1) throw xerr(ERR.calc);
  return Array.from({ length: R }, (_, i) => Array.from({ length: C }, (_, j) => start + (i * C + j) * step));
});
def('TRANSPOSE', 1, 1, (a) => {
  const t = rows(a[0]);
  return t[0].map((_, j) => t.map((r) => r[j]));
});
def('FILTER', 2, 3, (a) => {
  const t = rows(a[0]);
  const inc = rows(a[1]);
  let out;
  if (inc[0].length === 1 && inc.length === t.length) out = t.filter((_, i) => bool(inc[i][0]));
  else if (inc.length === 1 && inc[0].length === t[0].length) {
    const keep = t[0].map((_, j) => bool(inc[0][j]));
    out = t.map((r) => r.filter((_, j) => keep[j]));
  } else throw xerr(ERR.value);
  if (!out.length || !out[0].length) {
    if (has(a[2])) return a[2];
    throw xerr(ERR.calc);
  }
  return out;
});
const cmpDir = (dir) => (x, y) => dir * compare(x, y);
def('SORT', 1, 4, (a) => {
  const t = rows(a[0]);
  const idx = Math.trunc(optNum(a[1], 1));
  const dir = has(a[2]) && num(a[2]) < 0 ? -1 : 1;
  const byCol = has(a[3]) && bool(a[3]);
  if (byCol) {
    const tr = t[0].map((_, j) => t.map((r) => r[j]));
    const sorted = [...tr].sort((x, y) => cmpDir(dir)(x[idx - 1], y[idx - 1]));
    return sorted[0].map((_, j) => sorted.map((r) => r[j]));
  }
  if (idx < 1 || idx > t[0].length) throw xerr(ERR.value);
  return [...t].sort((x, y) => cmpDir(dir)(x[idx - 1], y[idx - 1]));
});
def('SORTBY', 2, 255, (a) => {
  const t = rows(a[0]);
  const keys = [];
  for (let i = 1; i < a.length; i += 2) {
    const col = flat(a[i]);
    if (col.length !== t.length) throw xerr(ERR.value);
    keys.push([col, has(a[i + 1]) && num(a[i + 1]) < 0 ? -1 : 1]);
  }
  const order = t.map((_, i) => i);
  order.sort((x, y) => {
    for (const [col, dir] of keys) {
      const c = compare(col[x], col[y]) * dir;
      if (c) return c;
    }
    return x - y;
  });
  return order.map((i) => t[i]);
});
def('UNIQUE', 1, 3, (a) => {
  const t = rows(a[0]);
  const once = has(a[2]) && bool(a[2]);
  const key = (r) => r.map((v) => (typeof v === 'string' ? `s:${v.toLowerCase()}` : `${typeof v}:${v}`)).join('|');
  const count = new Map();
  t.forEach((r) => count.set(key(r), (count.get(key(r)) || 0) + 1));
  const seen = new Set();
  const out = [];
  for (const r of t) {
    const k = key(r);
    if (seen.has(k)) continue;
    seen.add(k);
    if (!once || count.get(k) === 1) out.push(r);
  }
  if (!out.length) throw xerr(ERR.calc);
  return out;
});
def('TAKE', 2, 3, (a) => {
  const t = rows(a[0]);
  const n = Math.trunc(num(a[1]));
  let out = n >= 0 ? t.slice(0, n) : t.slice(n);
  if (has(a[2])) {
    const m = Math.trunc(num(a[2]));
    out = out.map((r) => (m >= 0 ? r.slice(0, m) : r.slice(m)));
  }
  if (!out.length) throw xerr(ERR.calc);
  return out;
});
def('CHOOSECOLS', 2, 255, (a) => {
  const t = rows(a[0]);
  const cols = a.slice(1).flatMap(flat).map((c) => Math.trunc(num(c)));
  if (cols.some((c) => c < 1 || c > t[0].length)) throw xerr(ERR.value);
  return t.map((r) => cols.map((c) => r[c - 1]));
});

// ---------- keuangan ----------
def('PMT', 3, 5, (a) => {
  const [r, n, pv] = [num(a[0]), num(a[1]), num(a[2])];
  const fv = optNum(a[3], 0);
  const type = optNum(a[4], 0) ? 1 : 0;
  if (n === 0) throw xerr(ERR.num);
  if (r === 0) return -(pv + fv) / n;
  const g = (1 + r) ** n;
  return (-(fv + pv * g) * r) / ((1 + r * type) * (g - 1));
});
def('FV', 3, 5, (a) => {
  const [r, n, pmt] = [num(a[0]), num(a[1]), num(a[2])];
  const pv = optNum(a[3], 0);
  const type = optNum(a[4], 0) ? 1 : 0;
  if (r === 0) return -(pv + pmt * n);
  const g = (1 + r) ** n;
  return -(pv * g + (pmt * (1 + r * type) * (g - 1)) / r);
});
def('PV', 3, 5, (a) => {
  const [r, n, pmt] = [num(a[0]), num(a[1]), num(a[2])];
  const fv = optNum(a[3], 0);
  const type = optNum(a[4], 0) ? 1 : 0;
  if (r === 0) return -(fv + pmt * n);
  const g = (1 + r) ** n;
  return -(fv + (pmt * (1 + r * type) * (g - 1)) / r) / g;
});
def('NPV', 2, 255, (a) => {
  const r = num(a[0]);
  return collectNums(a.slice(1)).reduce((s, v, i) => s + v / (1 + r) ** (i + 1), 0);
});
def('IRR', 1, 2, (a) => {
  const cf = collectNums([a[0]]);
  if (!cf.some((v) => v > 0) || !cf.some((v) => v < 0)) throw xerr(ERR.num);
  const f = (r) => cf.reduce((s, v, i) => s + v / (1 + r) ** i, 0);
  let lo = -0.99;
  let hi = 10;
  if (f(lo) * f(hi) > 0) throw xerr(ERR.num);
  for (let k = 0; k < 200; k += 1) {
    const mid = (lo + hi) / 2;
    if (f(lo) * f(mid) <= 0) hi = mid;
    else lo = mid;
  }
  return (lo + hi) / 2;
});

export const FUNCTION_NAMES = Object.keys(FUNCS);
export { general };
