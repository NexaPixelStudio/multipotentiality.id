// Utilitas alamat sel: "E2" <-> {r:2, c:5}
export const colToNum = (col) => String(col).toUpperCase().split('').reduce((n, ch) => n * 26 + ch.charCodeAt(0) - 64, 0);

export const numToCol = (n) => {
  let out = '';
  let v = n;
  while (v > 0) {
    out = String.fromCharCode(65 + ((v - 1) % 26)) + out;
    v = Math.floor((v - 1) / 26);
  }
  return out || 'A';
};

export const parseAddr = (a) => {
  const m = /^\$?([A-Za-z]{1,3})\$?(\d+)$/.exec(String(a).trim());
  if (!m) return null;
  return { c: colToNum(m[1]), r: Number(m[2]) };
};

export const addr = (r, c) => `${numToCol(c)}${r}`;

export const parseRange = (text) => {
  const [a, b] = String(text).split(':');
  const p1 = parseAddr(a);
  const p2 = parseAddr(b || a);
  if (!p1 || !p2) return null;
  return { r1: Math.min(p1.r, p2.r), c1: Math.min(p1.c, p2.c), r2: Math.max(p1.r, p2.r), c2: Math.max(p1.c, p2.c) };
};
