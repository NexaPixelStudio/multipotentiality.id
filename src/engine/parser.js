import { colToNum } from './refs.js';

export class ParseError extends Error {
  constructor(kind, message) {
    super(message);
    this.kind = kind;
  }
}

const CELL_RE = /^(\$?)([A-Za-z]{1,3})(\$?)(\d{1,7})$/;
const COL_RE = /^(\$?)([A-Za-z]{1,3})$/;
const isDigit = (c) => c >= '0' && c <= '9';
const isWordStart = (c) => /[A-Za-z_$]/.test(c);
const isWordChar = (c) => /[A-Za-z0-9_.$]/.test(c);

// locale 'id': ";" pemisah argumen dan "," desimal. locale 'en': "," pemisah dan "." desimal.
export function tokenize(src, locale = 'id') {
  const toks = [];
  let i = 0;
  while (i < src.length) {
    const ch = src[i];
    if (/\s/.test(ch)) {
      i += 1;
      continue;
    }
    if (ch === '"') {
      let j = i + 1;
      let out = '';
      let closed = false;
      while (j < src.length) {
        if (src[j] === '"') {
          if (src[j + 1] === '"') {
            out += '"';
            j += 2;
            continue;
          }
          closed = true;
          j += 1;
          break;
        }
        out += src[j];
        j += 1;
      }
      if (!closed) throw new ParseError('quote', 'Tanda kutip " belum ditutup. Teks di dalam rumus harus diapit dua tanda kutip, misalnya "Lunas".');
      toks.push({ t: 'str', v: out });
      i = j;
      continue;
    }
    if (isDigit(ch) || (ch === '.' && isDigit(src[i + 1] || ''))) {
      let j = i;
      while (isDigit(src[j] || '')) j += 1;
      if (src[j] === '.' && isDigit(src[j + 1] || '')) {
        j += 1;
        while (isDigit(src[j] || '')) j += 1;
      } else if (locale === 'id' && src[j] === ',' && isDigit(src[j + 1] || '')) {
        j += 1;
        while (isDigit(src[j] || '')) j += 1;
      }
      const ex = /^[eE][+-]?\d+/.exec(src.slice(j));
      if (ex) j += ex[0].length;
      toks.push({ t: 'num', v: Number(src.slice(i, j).replace(',', '.')) });
      i = j;
      continue;
    }
    if (ch === "'") {
      let j = i + 1;
      let name = '';
      while (j < src.length && !(src[j] === "'" && src[j + 1] !== "'")) {
        if (src[j] === "'" && src[j + 1] === "'") {
          name += "'";
          j += 2;
        } else {
          name += src[j];
          j += 1;
        }
      }
      if (src[j] !== "'" || src[j + 1] !== '!') throw new ParseError('sheet', 'Nama sheet yang mengandung spasi harus ditulis seperti \'Data Penjualan\'!A1.');
      i = j + 2;
      const word = readWord(src, i);
      toks.push({ t: 'word', v: word, sheet: name });
      i += word.length;
      continue;
    }
    if (isWordStart(ch)) {
      const word = readWord(src, i);
      i += word.length;
      if (src[i] === '!') {
        i += 1;
        const ref = readWord(src, i);
        toks.push({ t: 'word', v: ref, sheet: word });
        i += ref.length;
      } else {
        toks.push({ t: 'word', v: word });
      }
      continue;
    }
    const two = src.slice(i, i + 2);
    if (two === '<>' || two === '<=' || two === '>=') {
      toks.push({ t: 'op', v: two });
      i += 2;
      continue;
    }
    if ('+-*/^&=<>%(),;:'.includes(ch)) {
      toks.push({ t: 'op', v: ch === ';' ? ',' : ch });
      i += 1;
      continue;
    }
    if (ch === '{' || ch === '}') throw new ParseError('array', 'Array konstanta {...} belum didukung di latihan ini. Gunakan range sel sebagai gantinya.');
    throw new ParseError('char', `Karakter "${ch}" tidak dikenali di dalam rumus.`);
  }
  return toks;
}

function readWord(src, i) {
  let j = i;
  while (j < src.length && isWordChar(src[j])) j += 1;
  return src.slice(i, j);
}

const PREC = { '=': 1, '<>': 1, '<': 1, '>': 1, '<=': 1, '>=': 1, '&': 2, '+': 3, '-': 3, '*': 4, '/': 4, '^': 5 };

const cellNode = (word, sheet) => {
  const m = CELL_RE.exec(word);
  if (!m) return null;
  return { t: 'cell', sheet, ac: m[1] === '$', c: colToNum(m[2]), ar: m[3] === '$', r: Number(m[4]) };
};

export function parse(src, locale = 'id') {
  const text = String(src).trim();
  const body = text.startsWith('=') ? text.slice(1) : text;
  const toks = tokenize(body, locale);
  if (!toks.length) throw new ParseError('empty', 'Belum ada isi rumus setelah tanda =.');
  let p = 0;
  const peek = () => toks[p];
  const isOp = (v) => toks[p] && toks[p].t === 'op' && toks[p].v === v;

  function parseExpr(minPrec) {
    let left = parseUnary();
    for (;;) {
      const tk = peek();
      if (!tk || tk.t !== 'op' || !(tk.v in PREC) || PREC[tk.v] < minPrec) break;
      p += 1;
      const right = parseExpr(PREC[tk.v] + 1);
      left = { t: 'bin', op: tk.v, l: left, r: right };
    }
    return left;
  }

  function parseUnary() {
    if (isOp('-') || isOp('+')) {
      const op = toks[p].v;
      p += 1;
      return { t: 'un', op, x: parseUnary() };
    }
    let node = parsePrimary();
    while (isOp('%')) {
      p += 1;
      node = { t: 'pct', x: node };
    }
    return node;
  }

  function parseArgs() {
    const args = [];
    if (isOp(')')) {
      p += 1;
      return args;
    }
    for (;;) {
      if (isOp(',') || isOp(')')) args.push({ t: 'empty' });
      else args.push(parseExpr(1));
      if (isOp(',')) {
        p += 1;
        continue;
      }
      if (isOp(')')) {
        p += 1;
        return args;
      }
      if (!peek()) throw new ParseError('paren', 'Kurung buka "(" belum ditutup. Setiap "(" harus punya pasangan ")".');
      throw new ParseError('missing-sep', 'Ada dua bagian rumus yang berdempetan. Pisahkan argumen dengan tanda ; (atau ,) dan hubungkan perhitungan dengan operator seperti + - * /.');
    }
  }

  function parsePrimary() {
    const tk = peek();
    if (!tk) throw new ParseError('incomplete', 'Rumus belum lengkap: setelah operator atau pemisah masih diperlukan sebuah nilai.');
    if (tk.t === 'num') {
      p += 1;
      return { t: 'num', v: tk.v };
    }
    if (tk.t === 'str') {
      p += 1;
      return { t: 'str', v: tk.v };
    }
    if (tk.t === 'op') {
      if (tk.v === '(') {
        p += 1;
        const inner = parseExpr(1);
        if (!isOp(')')) throw new ParseError('paren', 'Kurung buka "(" belum ditutup. Setiap "(" harus punya pasangan ")".');
        p += 1;
        return inner;
      }
      if (tk.v === ')') throw new ParseError('paren-extra', 'Ada kurung tutup ")" yang tidak punya pasangan kurung buka.');
      if (tk.v === ',') throw new ParseError('incomplete', 'Ada pemisah argumen di tempat yang salah.');
      throw new ParseError('operator', `Operator "${tk.v}" tidak dapat digunakan di sini. Setelah operator harus ada angka, sel, atau fungsi.`);
    }
    // word
    p += 1;
    const w = tk.v;
    if (isOp('(')) {
      p += 1;
      return { t: 'call', name: w.toUpperCase(), args: parseArgs() };
    }
    const cell = cellNode(w, tk.sheet);
    if (cell) {
      if (isOp(':')) {
        p += 1;
        const nx = peek();
        const other = nx && nx.t === 'word' ? cellNode(nx.v, tk.sheet) : null;
        if (!other) throw new ParseError('range', 'Setelah ":" harus ada alamat sel, misalnya A1:B5.');
        p += 1;
        return { t: 'range', sheet: tk.sheet, a: cell, b: other };
      }
      return cell;
    }
    const col = COL_RE.exec(w);
    if (col && isOp(':')) {
      p += 1;
      const nx = peek();
      const col2 = nx && nx.t === 'word' ? COL_RE.exec(nx.v) : null;
      if (!col2) throw new ParseError('range', 'Setelah ":" harus ada nama kolom, misalnya A:A.');
      p += 1;
      return { t: 'colrange', sheet: tk.sheet, c1: colToNum(col[2]), c2: colToNum(col2[2]), ac1: col[1] === '$', ac2: col2[1] === '$' };
    }
    const u = w.toUpperCase();
    if (u === 'TRUE') return { t: 'bool', v: true };
    if (u === 'FALSE') return { t: 'bool', v: false };
    return { t: 'name', v: u, raw: w };
  }

  const ast = parseExpr(1);
  if (p < toks.length) {
    const tk = toks[p];
    if (tk.t === 'op' && tk.v === ')') throw new ParseError('paren-extra', 'Ada kurung tutup ")" yang berlebih.');
    throw new ParseError('missing-sep', 'Ada bagian rumus yang berdempetan tanpa pemisah. Hubungkan dengan operator (+ - * /) atau pisahkan argumen dengan tanda ; atau ,.');
  }
  return ast;
}

export function walk(node, fn) {
  if (!node) return;
  fn(node);
  if (node.t === 'call') node.args.forEach((a) => walk(a, fn));
  else if (node.t === 'bin') {
    walk(node.l, fn);
    walk(node.r, fn);
  } else if (node.t === 'un' || node.t === 'pct') walk(node.x, fn);
}

// Menggeser referensi relatif (simulasi menyalin rumus ke bawah/samping). $ tetap terkunci.
export function shiftAst(node, dr, dc) {
  const moveCell = (n) => {
    const r = n.ar ? n.r : n.r + dr;
    const c = n.ac ? n.c : n.c + dc;
    return { ...n, r, c };
  };
  switch (node.t) {
    case 'cell': return moveCell(node);
    case 'range': return { ...node, a: moveCell(node.a), b: moveCell(node.b) };
    case 'colrange': return {
      ...node,
      c1: node.ac1 ? node.c1 : node.c1 + dc,
      c2: node.ac2 ? node.c2 : node.c2 + dc
    };
    case 'call': return { ...node, args: node.args.map((a) => shiftAst(a, dr, dc)) };
    case 'bin': return { ...node, l: shiftAst(node.l, dr, dc), r: shiftAst(node.r, dr, dc) };
    case 'un':
    case 'pct': return { ...node, x: shiftAst(node.x, dr, dc) };
    default: return node;
  }
}
