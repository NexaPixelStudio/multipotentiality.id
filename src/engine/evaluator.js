import { parse, ParseError, walk, shiftAst } from './parser.js';
import { FUNCS, broadcast } from './functions.js';
import { XlError, ERR, xerr, num, str, compare } from './values.js';
import { numToCol } from './refs.js';

export { ParseError, XlError };

// Konteks = kumpulan sheet + pengaturan. Isi sel bisa angka, teks, boolean, null, atau "=rumus".
export function createContext(sheetDefs, { locale = 'id', now = () => new Date() } = {}) {
  const sheets = new Map();
  const cache = new Map();
  const stack = new Set();
  const ctx = {
    locale,
    now,
    sheets,
    order: [],
    cache,
    addSheet(def) {
      const s = { name: def.name, cells: new Map(), maxR: 0, maxC: 0, fmt: def.fmt || {} };
      (def.rows || []).forEach((row, ri) => row.forEach((v, ci) => {
        if (v !== null && v !== undefined && v !== '') {
          s.cells.set(`${ri + 1},${ci + 1}`, v);
          s.maxR = Math.max(s.maxR, ri + 1);
          s.maxC = Math.max(s.maxC, ci + 1);
        }
      }));
      s.maxR = Math.max(s.maxR, (def.rows || []).length);
      s.maxC = Math.max(s.maxC, ...(def.rows || []).map((r) => r.length), 0);
      sheets.set(def.name.toLowerCase(), s);
      ctx.order.push(s);
      return s;
    },
    sheet(name) {
      return sheets.get(String(name).toLowerCase());
    },
    setCell(sheetName, r, c, value) {
      const s = ctx.sheet(sheetName);
      if (value === null || value === undefined || value === '') s.cells.delete(`${r},${c}`);
      else {
        s.cells.set(`${r},${c}`, value);
        s.maxR = Math.max(s.maxR, r);
        s.maxC = Math.max(s.maxC, c);
      }
      cache.clear();
    },
    raw(sheetName, r, c) {
      const s = ctx.sheet(sheetName);
      return s ? s.cells.get(`${r},${c}`) : undefined;
    },
    // nilai akhir sebuah sel (rumus dihitung)
    getCell(sheetName, r, c) {
      const s = ctx.sheet(sheetName);
      if (!s) throw xerr(ERR.ref);
      if (r < 1 || c < 1) throw xerr(ERR.ref);
      const key = `${s.name}!${r},${c}`;
      const raw = s.cells.get(`${r},${c}`);
      if (raw === undefined) return null;
      if (typeof raw !== 'string' || !raw.startsWith('=')) return raw;
      if (cache.has(key)) return cache.get(key);
      if (stack.has(key)) return xerr(ERR.circ);
      stack.add(key);
      let result;
      try {
        result = evalFormulaIn(ctx, raw, s.name, { r, c });
        if (Array.isArray(result)) result = result[0][0];
      } catch (e) {
        result = e instanceof XlError ? e : xerr(ERR.value);
      }
      stack.delete(key);
      cache.set(key, result);
      return result;
    }
  };
  sheetDefs.forEach((d) => ctx.addSheet(d));
  return ctx;
}

const rangeValues = (env, sheetName, r1, c1, r2, c2) => {
  const s = env.ctx.sheet(sheetName);
  if (!s) throw xerr(ERR.ref);
  const [ra, rb] = r1 <= r2 ? [r1, r2] : [r2, r1];
  const [ca, cb] = c1 <= c2 ? [c1, c2] : [c2, c1];
  if (ra < 1 || ca < 1) throw xerr(ERR.ref);
  const out = [];
  for (let r = ra; r <= rb; r += 1) {
    const row = [];
    for (let c = ca; c <= cb; c += 1) row.push(env.ctx.getCell(s.name, r, c));
    out.push(row);
  }
  return out;
};

const arith = (op, a, b, locale) => {
  switch (op) {
    case '+': return num(a) + num(b);
    case '-': return num(a) - num(b);
    case '*': return num(a) * num(b);
    case '/': {
      const d = num(b);
      if (d === 0) throw xerr(ERR.div0);
      return num(a) / d;
    }
    case '^': {
      const r = num(a) ** num(b);
      if (!Number.isFinite(r)) throw xerr(ERR.num);
      return r;
    }
    case '&': return str(a, locale) + str(b, locale);
    default: {
      const c = compare(a, b);
      switch (op) {
        case '=': return c === 0;
        case '<>': return c !== 0;
        case '<': return c < 0;
        case '>': return c > 0;
        case '<=': return c <= 0;
        default: return c >= 0;
      }
    }
  }
};

export function evalNode(node, env) {
  switch (node.t) {
    case 'num':
    case 'str':
    case 'bool':
      return node.v;
    case 'empty':
      return undefined;
    case 'cell': {
      const v = env.ctx.getCell(node.sheet || env.sheet, node.r, node.c);
      if (v instanceof XlError) throw v;
      return v;
    }
    case 'range':
      return rangeValues(env, node.sheet || env.sheet, node.a.r, node.a.c, node.b.r, node.b.c);
    case 'colrange': {
      const s = env.ctx.sheet(node.sheet || env.sheet);
      if (!s) throw xerr(ERR.ref);
      return rangeValues(env, s.name, 1, node.c1, Math.max(s.maxR, 1), node.c2);
    }
    case 'rowrange': {
      const s = env.ctx.sheet(node.sheet || env.sheet);
      if (!s) throw xerr(ERR.ref);
      return rangeValues(env, s.name, Math.min(node.r1, node.r2), 1, Math.max(node.r1, node.r2), Math.max(s.maxC, 1));
    }
    case 'name': {
      if (env.vars && node.v in env.vars) return env.vars[node.v];
      throw xerr(ERR.name);
    }
    case 'un': {
      const v = evalNode(node.x, env);
      if (node.op === '+') return v;
      return Array.isArray(v) ? broadcast(v, 0, (x) => -num(x)) : -num(v);
    }
    case 'pct': {
      const v = evalNode(node.x, env);
      return Array.isArray(v) ? broadcast(v, 0, (x) => num(x) / 100) : num(v) / 100;
    }
    case 'bin': {
      const l = evalNode(node.l, env);
      const r = evalNode(node.r, env);
      return broadcast(l, r, (a, b) => arith(node.op, a, b, env.ctx.locale));
    }
    case 'call': {
      const f = FUNCS[node.name];
      if (!f) throw xerr(ERR.name);
      if (f.lazy) return f.fn(node.args, env, evalNode);
      const args = node.args.map((n) => evalNode(n, env));
      return f.fn(args, env, evalNode);
    }
    default:
      throw xerr(ERR.value);
  }
}

export function evalAst(ast, ctx, sheetName, cur) {
  const env = { ctx, sheet: sheetName, cur, vars: {} };
  try {
    const v = evalNode(ast, env);
    return v === undefined ? 0 : v;
  } catch (e) {
    if (e instanceof XlError) return e;
    throw e;
  }
}

function evalFormulaIn(ctx, text, sheetName, cur) {
  const ast = parse(text, 'en');
  const v = evalAst(ast, ctx, sheetName, cur);
  if (v instanceof XlError) throw v;
  return v;
}

export function evaluate(text, ctx, sheetName, { locale, cur } = {}) {
  const ast = parse(text, locale || ctx.locale);
  return { ast, value: evalAst(ast, ctx, sheetName, cur) };
}

// ---------- analisis rumus ----------
export function analyze(ast) {
  const fns = new Set();
  let refs = 0;
  const issues = [];
  walk(ast, (n) => {
    if (n.t === 'call') {
      fns.add(n.name);
      const f = FUNCS[n.name];
      if (!f) issues.push({ kind: 'unknown-fn', name: n.name });
      else if (n.args.length < f.min || n.args.length > f.max) issues.push({ kind: 'argcount', name: n.name, min: f.min, max: f.max, got: n.args.length });
    }
    if (n.t === 'cell' || n.t === 'range' || n.t === 'colrange' || n.t === 'rowrange') refs += 1;
  });
  return { fns, refs, issues };
}

export { shiftAst, numToCol };
