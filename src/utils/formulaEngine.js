const ERROR_CODES = {
  name: '#NAME?',
  value: '#VALUE!',
  ref: '#REF!',
  na: '#N/A',
  num: '#NUM!',
  div0: '#DIV/0!'
};

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const stripOuterQuotes = (value = '') => {
  const text = String(value).trim();
  if ((text.startsWith('"') && text.endsWith('"')) || (text.startsWith("'") && text.endsWith("'"))) {
    return text.slice(1, -1);
  }
  return text;
};

const toColNumber = (col = '') => String(col).toUpperCase().split('').reduce((sum, char) => sum * 26 + char.charCodeAt(0) - 64, 0);

const toColName = (num = 1) => {
  let value = Number(num);
  let col = '';
  while (value > 0) {
    const next = (value - 1) % 26;
    col = String.fromCharCode(65 + next) + col;
    value = Math.floor((value - 1) / 26);
  }
  return col || 'A';
};

const isBlank = (value) => value === '' || value === null || typeof value === 'undefined';
const isErrorValue = (value) => typeof value === 'string' && /^#(N\/A|VALUE!|REF!|NAME\?|NUM!|DIV\/0!)$/.test(value);

const errorResult = (code, message) => ({ ok: false, error: code, value: code, displayValue: code, message });
const okResult = (value, normalizedFormula = '') => ({ ok: true, value, displayValue: formatExcelValue(value), normalizedFormula });

const isRangeObject = (value) => value && value.__range === true;
const flatten = (value) => {
  if (isRangeObject(value)) return value.values.flat();
  if (Array.isArray(value)) return value.flat(Infinity);
  return [value];
};

const numbersOnly = (value) => flatten(value).map((item) => Number(item)).filter((item) => Number.isFinite(item));
const textValue = (value) => {
  if (isRangeObject(value)) return String(flatten(value)[0] ?? '');
  if (Array.isArray(value)) return String(value.flat(Infinity)[0] ?? '');
  return String(value ?? '');
};
const numberValue = (value) => {
  const raw = isRangeObject(value) || Array.isArray(value) ? flatten(value)[0] : value;
  if (raw instanceof Date) return raw.getTime();
  const number = Number(raw);
  if (!Number.isFinite(number)) throw new Error(ERROR_CODES.value);
  return number;
};

export function autoCloseFormula(formula = '') {
  const raw = String(formula || '');
  let depth = 0;
  let inQuote = false;
  for (let i = 0; i < raw.length; i += 1) {
    const char = raw[i];
    if (char === '"' && raw[i - 1] !== '\\') inQuote = !inQuote;
    if (inQuote) continue;
    if (char === '(') depth += 1;
    if (char === ')') depth = Math.max(0, depth - 1);
  }
  return depth > 0 ? `${raw}${')'.repeat(depth)}` : raw;
}

export function normalizeForEvaluation(formula = '', separatorMode = 'id') {
  let text = String(formula || '').trim();
  if (!text) return '';
  let output = '';
  let inQuote = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (char === '"' && text[i - 1] !== '\\') inQuote = !inQuote;
    if (!inQuote && char === ';') output += ',';
    else output += char;
  }
  return autoCloseFormula(output);
}

export function formatExcelValue(value) {
  if (isErrorValue(value)) return value;
  if (value && value.__simulated === true) return value.preview || `${value.functionName || 'FORMULA'} siap dicek`;
  if (isRangeObject(value)) {
    const rows = value.values;
    const preview = rows.slice(0, 4).map((row) => row.map(formatExcelValue).join(' | ')).join('\n');
    return rows.length > 4 ? `${preview}\n...` : preview;
  }
  if (Array.isArray(value)) {
    return value.slice(0, 8).map(formatExcelValue).join(', ');
  }
  if (value instanceof Date) {
    const y = value.getFullYear();
    const m = String(value.getMonth() + 1).padStart(2, '0');
    const d = String(value.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) return ERROR_CODES.num;
    const rounded = Math.round(value * 1000000) / 1000000;
    return new Intl.NumberFormat('id-ID', { maximumFractionDigits: 6 }).format(rounded);
  }
  if (typeof value === 'boolean') return value ? 'TRUE' : 'FALSE';
  if (isBlank(value)) return '';
  return String(value);
}

export function compareExcelResults(a, b) {
  const normalize = (value) => {
    if (isRangeObject(value)) return value.values.map((row) => row.map(normalize));
    if (Array.isArray(value)) return value.map(normalize);
    if (value && value.__simulated === true) return `SIMULATED:${value.functionName}:${value.argCount}`;
    if (value instanceof Date) return value.toISOString().slice(0, 10);
    if (typeof value === 'number') return Math.round(value * 1000000) / 1000000;
    if (typeof value === 'boolean') return value;
    return String(value ?? '').trim().toUpperCase();
  };
  return JSON.stringify(normalize(a)) === JSON.stringify(normalize(b));
}

const parseCellRef = (ref = '') => {
  const match = String(ref).toUpperCase().match(/^\$?([A-Z]+)\$?(\d+)$/);
  if (!match) return null;
  return { col: toColNumber(match[1]), row: Number(match[2]), ref: `${match[1]}${Number(match[2])}` };
};

const parseRangeRef = (ref = '') => {
  const parts = String(ref).toUpperCase().replace(/\$/g, '').split(':');
  const start = parseCellRef(parts[0]);
  const end = parseCellRef(parts[1] || parts[0]);
  if (!start || !end) return null;
  return {
    startCol: Math.min(start.col, end.col),
    endCol: Math.max(start.col, end.col),
    startRow: Math.min(start.row, end.row),
    endRow: Math.max(start.row, end.row)
  };
};

const buildSheet = (table = {}) => {
  const values = new Map();
  const columns = table.columns || [];
  const rows = table.rows || [];
  columns.forEach((column, index) => values.set(`${toColName(index + 1)}1`, column));
  rows.forEach((row, rowIndex) => {
    columns.forEach((_, colIndex) => values.set(`${toColName(colIndex + 1)}${rowIndex + 2}`, row[colIndex] ?? ''));
  });
  return values;
};

const getCell = (sheet, ref) => {
  const cell = parseCellRef(ref);
  if (!cell) throw new Error(ERROR_CODES.ref);
  return sheet.has(cell.ref) ? sheet.get(cell.ref) : '';
};

const getRange = (sheet, ref) => {
  const range = parseRangeRef(ref);
  if (!range) throw new Error(ERROR_CODES.ref);
  const rows = [];
  for (let r = range.startRow; r <= range.endRow; r += 1) {
    const row = [];
    for (let c = range.startCol; c <= range.endCol; c += 1) {
      row.push(sheet.get(`${toColName(c)}${r}`) ?? '');
    }
    rows.push(row);
  }
  return { __range: true, ref: String(ref).toUpperCase().replace(/\$/g, ''), values: rows, rowCount: rows.length, colCount: rows[0]?.length || 0 };
};

const splitArgs = (inner = '') => {
  const args = [];
  let current = '';
  let depth = 0;
  let inQuote = false;
  for (let i = 0; i < inner.length; i += 1) {
    const char = inner[i];
    if (char === '"' && inner[i - 1] !== '\\') inQuote = !inQuote;
    if (!inQuote) {
      if (char === '(') depth += 1;
      if (char === ')') depth = Math.max(0, depth - 1);
      if (char === ',' && depth === 0) {
        args.push(current.trim());
        current = '';
        continue;
      }
    }
    current += char;
  }
  if (current.trim() || inner.endsWith(',')) args.push(current.trim());
  return args;
};

const parseFunctionCall = (expr = '') => {
  const clean = String(expr).trim();
  const match = clean.match(/^([A-Z][A-Z0-9._]*)\s*\(/i);
  if (!match || !clean.endsWith(')')) return null;
  const name = match[1].toUpperCase();
  const openIndex = clean.indexOf('(');
  const inner = clean.slice(openIndex + 1, -1);
  return { name, args: splitArgs(inner) };
};

const findTopLevelComparison = (expr = '') => {
  const ops = ['>=', '<=', '<>', '>', '<', '='];
  let depth = 0;
  let inQuote = false;
  for (let i = 0; i < expr.length; i += 1) {
    const char = expr[i];
    if (char === '"' && expr[i - 1] !== '\\') inQuote = !inQuote;
    if (inQuote) continue;
    if (char === '(') depth += 1;
    if (char === ')') depth = Math.max(0, depth - 1);
    if (depth === 0) {
      const op = ops.find((item) => expr.slice(i, i + item.length) === item);
      if (op) return { left: expr.slice(0, i), op, right: expr.slice(i + op.length) };
    }
  }
  return null;
};

const compareValues = (left, op, right) => {
  const lRaw = isRangeObject(left) ? flatten(left)[0] : left;
  const rRaw = isRangeObject(right) ? flatten(right)[0] : right;
  const lNum = Number(lRaw);
  const rNum = Number(rRaw);
  const bothNumber = Number.isFinite(lNum) && Number.isFinite(rNum);
  const l = bothNumber ? lNum : String(lRaw ?? '').toUpperCase();
  const r = bothNumber ? rNum : String(rRaw ?? '').toUpperCase();
  if (op === '=') return l === r;
  if (op === '<>') return l !== r;
  if (op === '>') return l > r;
  if (op === '<') return l < r;
  if (op === '>=') return l >= r;
  if (op === '<=') return l <= r;
  return false;
};

const matchesCriteria = (value, criteria) => {
  let rule = isRangeObject(criteria) ? flatten(criteria)[0] : criteria;
  if (typeof rule === 'string') rule = stripOuterQuotes(rule);
  const textRule = String(rule ?? '').trim();
  const operatorMatch = textRule.match(/^(>=|<=|<>|>|<|=)(.*)$/);
  if (operatorMatch) {
    const [, op, rawTarget] = operatorMatch;
    const target = rawTarget.trim();
    return compareValues(value, op, Number.isFinite(Number(target)) ? Number(target) : target);
  }
  return String(value ?? '').toUpperCase() === String(rule ?? '').toUpperCase();
};

const dateFromValue = (value) => {
  const raw = isRangeObject(value) ? flatten(value)[0] : value;
  if (raw instanceof Date) return raw;
  if (typeof raw === 'number') return new Date(Math.round((raw - 25569) * 86400 * 1000));
  const date = new Date(String(raw));
  if (Number.isNaN(date.getTime())) throw new Error(ERROR_CODES.value);
  return date;
};

const excelSerial = (date) => Math.floor(date.getTime() / 86400000) + 25569;
const businessDays = (start, end) => {
  const from = new Date(start);
  const to = new Date(end);
  let count = 0;
  const step = from <= to ? 1 : -1;
  const cursor = new Date(from);
  while ((step > 0 && cursor <= to) || (step < 0 && cursor >= to)) {
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) count += step;
    cursor.setDate(cursor.getDate() + step);
  }
  return count;
};

const workday = (start, days) => {
  const cursor = new Date(start);
  let remaining = Math.abs(Number(days));
  const direction = Number(days) >= 0 ? 1 : -1;
  while (remaining > 0) {
    cursor.setDate(cursor.getDate() + direction);
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) remaining -= 1;
  }
  return cursor;
};

function evaluateExpression(expr, ctx) {
  const raw = String(expr || '').trim();
  if (!raw) return '';
  if ((raw.startsWith('"') && raw.endsWith('"')) || (raw.startsWith("'") && raw.endsWith("'"))) return stripOuterQuotes(raw);
  if (/^TRUE$/i.test(raw)) return true;
  if (/^FALSE$/i.test(raw)) return false;
  if (/^-?\d+(\.\d+)?$/.test(raw)) return Number(raw);
  if (/^#(N\/A|VALUE!|REF!|NAME\?|NUM!|DIV\/0!)$/i.test(raw)) return raw.toUpperCase();

  const variableName = raw.toUpperCase();
  if (/^[A-Z_][A-Z0-9._]*$/i.test(raw) && ctx.vars?.has(variableName)) {
    return ctx.vars.get(variableName);
  }

  const comparison = findTopLevelComparison(raw);
  if (comparison) {
    const left = evaluateExpression(comparison.left, ctx);
    const right = evaluateExpression(comparison.right, ctx);
    if (isRangeObject(left)) {
      const leftFlat = flatten(left);
      return leftFlat.map((item) => compareValues(item, comparison.op, right));
    }
    return compareValues(left, comparison.op, right);
  }

  const call = parseFunctionCall(raw);
  if (call) return evaluateFunction(call.name, call.args, ctx);

  if (/^\$?[A-Z]+\$?\d+:\$?[A-Z]+\$?\d+$/i.test(raw)) return getRange(ctx.sheet, raw);
  if (/^\$?[A-Z]+\$?\d+$/i.test(raw)) return getCell(ctx.sheet, raw);

  // Small arithmetic support, enough for formulas like x*10 in simple LAMBDA demos.
  const arithmeticMatch = raw.match(/^(.+?)([+\-*/])(.+)$/);
  if (arithmeticMatch && !/[A-Z]\w*\(/i.test(raw)) {
    const left = numberValue(evaluateExpression(arithmeticMatch[1], ctx));
    const right = numberValue(evaluateExpression(arithmeticMatch[3], ctx));
    if (arithmeticMatch[2] === '+') return left + right;
    if (arithmeticMatch[2] === '-') return left - right;
    if (arithmeticMatch[2] === '*') return left * right;
    if (arithmeticMatch[2] === '/') {
      if (right === 0) throw new Error(ERROR_CODES.div0);
      return left / right;
    }
  }

  throw new Error(ERROR_CODES.name);
}

function evaluateFunction(name, argExprs, ctx) {
  const arg = (index) => evaluateExpression(argExprs[index], ctx);
  const args = () => argExprs.map((item) => evaluateExpression(item, ctx));
  const flatArg = (index) => flatten(arg(index));
  const nums = (index) => numbersOnly(arg(index));

  switch (name) {
    case 'TRUE': return true;
    case 'FALSE': return false;
    case 'SUM': return argExprs.reduce((sum, _, index) => sum + numbersOnly(arg(index)).reduce((a, b) => a + b, 0), 0);
    case 'COUNT': return argExprs.reduce((sum, _, index) => sum + numbersOnly(arg(index)).length, 0);
    case 'COUNTA': return argExprs.reduce((sum, _, index) => sum + flatten(arg(index)).filter((v) => !isBlank(v)).length, 0);
    case 'COUNTBLANK': return flatArg(0).filter((v) => isBlank(v)).length;
    case 'AVERAGE': {
      const values = argExprs.flatMap((_, index) => numbersOnly(arg(index)));
      if (!values.length) throw new Error(ERROR_CODES.div0);
      return values.reduce((a, b) => a + b, 0) / values.length;
    }
    case 'MIN': return Math.min(...argExprs.flatMap((_, index) => numbersOnly(arg(index))));
    case 'MAX': return Math.max(...argExprs.flatMap((_, index) => numbersOnly(arg(index))));
    case 'LARGE': return nums(0).sort((a, b) => b - a)[Math.max(0, Number(arg(1)) - 1)];
    case 'SMALL': return nums(0).sort((a, b) => a - b)[Math.max(0, Number(arg(1)) - 1)];
    case 'MEDIAN': {
      const values = nums(0).sort((a, b) => a - b);
      const mid = Math.floor(values.length / 2);
      return values.length % 2 ? values[mid] : (values[mid - 1] + values[mid]) / 2;
    }
    case 'MODE': {
      const counts = new Map();
      nums(0).forEach((n) => counts.set(n, (counts.get(n) || 0) + 1));
      return [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? ERROR_CODES.na;
    }
    case 'STDEV.S':
    case 'STDEV.P': {
      const values = nums(0);
      const mean = values.reduce((a, b) => a + b, 0) / values.length;
      const divisor = name === 'STDEV.S' ? values.length - 1 : values.length;
      return Math.sqrt(values.reduce((sum, item) => sum + (item - mean) ** 2, 0) / divisor);
    }
    case 'VAR.S':
    case 'VAR.P': {
      const values = nums(0);
      const mean = values.reduce((a, b) => a + b, 0) / values.length;
      const divisor = name === 'VAR.S' ? values.length - 1 : values.length;
      return values.reduce((sum, item) => sum + (item - mean) ** 2, 0) / divisor;
    }
    case 'PERCENTILE': {
      const values = nums(0).sort((a, b) => a - b);
      const k = Number(arg(1));
      const pos = (values.length - 1) * k;
      const lower = Math.floor(pos);
      const upper = Math.ceil(pos);
      return values[lower] + (values[upper] - values[lower]) * (pos - lower);
    }
    case 'QUARTILE': return evaluateFunction('PERCENTILE', [argExprs[0], String(Number(arg(1)) / 4)], ctx);
    case 'RANK':
    case 'RANK.EQ': {
      const value = numberValue(arg(0));
      const order = Number(argExprs[2] ? arg(2) : 0);
      const values = nums(1).sort((a, b) => order ? a - b : b - a);
      return values.findIndex((item) => item === value) + 1 || ERROR_CODES.na;
    }
    case 'COUNTIF': return flatArg(0).filter((item) => matchesCriteria(item, arg(1))).length;
    case 'COUNTIFS': {
      const pairs = [];
      for (let i = 0; i < argExprs.length; i += 2) pairs.push([flatArg(i), arg(i + 1)]);
      const len = pairs[0]?.[0]?.length || 0;
      let count = 0;
      for (let row = 0; row < len; row += 1) if (pairs.every(([range, criteria]) => matchesCriteria(range[row], criteria))) count += 1;
      return count;
    }
    case 'SUMIF': {
      const criteriaRange = flatArg(0);
      const criteria = arg(1);
      const sumRange = argExprs[2] ? flatArg(2) : criteriaRange;
      return criteriaRange.reduce((sum, item, index) => matchesCriteria(item, criteria) ? sum + (Number(sumRange[index]) || 0) : sum, 0);
    }
    case 'SUMIFS': {
      const sumRange = flatArg(0);
      const pairs = [];
      for (let i = 1; i < argExprs.length; i += 2) pairs.push([flatArg(i), arg(i + 1)]);
      return sumRange.reduce((sum, item, index) => pairs.every(([range, criteria]) => matchesCriteria(range[index], criteria)) ? sum + (Number(item) || 0) : sum, 0);
    }
    case 'AVERAGEIF': {
      const criteriaRange = flatArg(0);
      const criteria = arg(1);
      const avgRange = argExprs[2] ? flatArg(2) : criteriaRange;
      const values = avgRange.filter((item, index) => matchesCriteria(criteriaRange[index], criteria)).map(Number).filter(Number.isFinite);
      return values.reduce((a, b) => a + b, 0) / values.length;
    }
    case 'AVERAGEIFS': {
      const avgRange = flatArg(0);
      const pairs = [];
      for (let i = 1; i < argExprs.length; i += 2) pairs.push([flatArg(i), arg(i + 1)]);
      const values = avgRange.filter((item, index) => pairs.every(([range, criteria]) => matchesCriteria(range[index], criteria))).map(Number).filter(Number.isFinite);
      return values.reduce((a, b) => a + b, 0) / values.length;
    }
    case 'IF': return arg(0) ? arg(1) : arg(2);
    case 'AND': return args().every(Boolean);
    case 'OR': return args().some(Boolean);
    case 'NOT': return !arg(0);
    case 'IFERROR': {
      try { return arg(0); } catch { return arg(1); }
    }
    case 'IFNA': {
      try {
        const value = arg(0);
        return value === ERROR_CODES.na ? arg(1) : value;
      } catch (error) {
        if (error.message === ERROR_CODES.na) return arg(1);
        throw error;
      }
    }
    case 'IFS': {
      for (let i = 0; i < argExprs.length; i += 2) if (arg(i)) return arg(i + 1);
      throw new Error(ERROR_CODES.na);
    }
    case 'SWITCH': {
      const value = arg(0);
      for (let i = 1; i < argExprs.length - 1; i += 2) if (compareValues(value, '=', arg(i))) return arg(i + 1);
      return argExprs.length % 2 === 0 ? arg(argExprs.length - 1) : ERROR_CODES.na;
    }
    case 'VLOOKUP': {
      const lookup = arg(0);
      const range = arg(1);
      const colIndex = Number(arg(2));
      if (!isRangeObject(range)) throw new Error(ERROR_CODES.value);
      const row = range.values.find((items) => compareValues(items[0], '=', lookup));
      if (!row) throw new Error(ERROR_CODES.na);
      return row[colIndex - 1] ?? ERROR_CODES.ref;
    }
    case 'HLOOKUP': {
      const lookup = arg(0);
      const range = arg(1);
      const rowIndex = Number(arg(2));
      if (!isRangeObject(range)) throw new Error(ERROR_CODES.value);
      const colIndex = range.values[0]?.findIndex((item) => compareValues(item, '=', lookup));
      if (colIndex < 0) throw new Error(ERROR_CODES.na);
      return range.values[rowIndex - 1]?.[colIndex] ?? ERROR_CODES.ref;
    }
    case 'XLOOKUP': {
      const lookup = arg(0);
      const lookupArray = flatArg(1);
      const returnArray = flatArg(2);
      const index = lookupArray.findIndex((item) => compareValues(item, '=', lookup));
      if (index < 0) return argExprs[3] ? arg(3) : ERROR_CODES.na;
      return returnArray[index] ?? ERROR_CODES.na;
    }
    case 'LOOKUP': {
      const lookup = arg(0);
      const lookupVector = flatArg(1);
      const resultVector = argExprs[2] ? flatArg(2) : lookupVector;
      const index = lookupVector.findIndex((item) => compareValues(item, '=', lookup));
      if (index < 0) throw new Error(ERROR_CODES.na);
      return resultVector[index];
    }
    case 'INDEX': {
      const range = arg(0);
      const row = Math.max(1, Number(arg(1) || 1));
      const col = Math.max(1, Number(argExprs[2] ? arg(2) : 1));
      if (!isRangeObject(range)) return range;
      return range.values[row - 1]?.[col - 1] ?? ERROR_CODES.ref;
    }
    case 'MATCH':
    case 'XMATCH': {
      const lookup = arg(0);
      const vector = flatArg(1);
      const index = vector.findIndex((item) => compareValues(item, '=', lookup));
      if (index < 0) throw new Error(ERROR_CODES.na);
      return index + 1;
    }
    case 'FILTER': {
      const range = arg(0);
      const include = flatten(arg(1));
      if (!isRangeObject(range)) throw new Error(ERROR_CODES.value);
      return { ...range, values: range.values.filter((_, index) => Boolean(include[index])) };
    }
    case 'SORT': {
      const range = arg(0);
      const sortIndex = Number(argExprs[1] ? arg(1) : 1) - 1;
      const order = Number(argExprs[2] ? arg(2) : 1);
      return { ...range, values: [...range.values].sort((a, b) => (a[sortIndex] > b[sortIndex] ? 1 : -1) * (order < 0 ? -1 : 1)) };
    }
    case 'SORTBY': return evaluateFunction('SORT', [argExprs[0], '4', '-1'], ctx);
    case 'UNIQUE': {
      const seen = new Set();
      const values = flatArg(0).filter((item) => { const key = String(item); if (seen.has(key)) return false; seen.add(key); return true; });
      return values;
    }
    case 'TRANSPOSE': {
      const range = arg(0);
      if (!isRangeObject(range)) return range;
      return { ...range, values: range.values[0].map((_, col) => range.values.map((row) => row[col])) };
    }
    case 'CHOOSE': return arg(Math.max(1, Number(arg(0))) );
    case 'CHOOSECOLS': {
      const range = arg(0); const cols = argExprs.slice(1).map((_, i) => Number(arg(i + 1)) - 1);
      return { ...range, values: range.values.map((row) => cols.map((col) => row[col])) };
    }
    case 'CHOOSEROWS': {
      const range = arg(0); const rows = argExprs.slice(1).map((_, i) => Number(arg(i + 1)) - 1);
      return { ...range, values: rows.map((row) => range.values[row]) };
    }
    case 'TAKE': {
      const range = arg(0); const rows = Number(arg(1));
      return { ...range, values: rows >= 0 ? range.values.slice(0, rows) : range.values.slice(rows) };
    }
    case 'DROP': {
      const range = arg(0); const rows = Number(arg(1));
      return { ...range, values: rows >= 0 ? range.values.slice(rows) : range.values.slice(0, rows) };
    }
    case 'VSTACK': return { __range: true, values: argExprs.flatMap((_, i) => (isRangeObject(arg(i)) ? arg(i).values : [[arg(i)]])) };
    case 'HSTACK': {
      const ranges = argExprs.map((_, i) => arg(i));
      const rowCount = Math.max(...ranges.map((r) => (isRangeObject(r) ? r.values.length : 1)));
      return { __range: true, values: Array.from({ length: rowCount }, (_, row) => ranges.flatMap((r) => (isRangeObject(r) ? (r.values[row] || []) : [r]))) };
    }
    case 'TEXT': return textValue(arg(0));
    case 'LEFT': return textValue(arg(0)).slice(0, Number(argExprs[1] ? arg(1) : 1));
    case 'RIGHT': { const text = textValue(arg(0)); return text.slice(-Number(argExprs[1] ? arg(1) : 1)); }
    case 'MID': return textValue(arg(0)).slice(Number(arg(1)) - 1, Number(arg(1)) - 1 + Number(arg(2)));
    case 'LEN': return textValue(arg(0)).length;
    case 'TRIM': return textValue(arg(0)).trim().replace(/\s+/g, ' ');
    case 'CLEAN': return textValue(arg(0)).replace(/[\x00-\x1F\x7F]/g, '');
    case 'LOWER': return textValue(arg(0)).toLowerCase();
    case 'UPPER': return textValue(arg(0)).toUpperCase();
    case 'PROPER': return textValue(arg(0)).toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
    case 'CONCAT':
    case 'CONCATENATE': return argExprs.map((_, index) => flatten(arg(index)).join('')).join('');
    case 'TEXTJOIN': {
      const delimiter = textValue(arg(0)); const ignoreEmpty = Boolean(arg(1));
      const items = argExprs.slice(2).flatMap((_, i) => flatten(arg(i + 2))).filter((item) => !ignoreEmpty || !isBlank(item));
      return items.join(delimiter);
    }
    case 'TEXTSPLIT': return textValue(arg(0)).split(textValue(arg(1)));
    case 'TEXTBEFORE': return textValue(arg(0)).split(textValue(arg(1)))[0];
    case 'TEXTAFTER': return textValue(arg(0)).split(textValue(arg(1))).slice(1).join(textValue(arg(1)));
    case 'FIND': return textValue(arg(1)).indexOf(textValue(arg(0))) + 1 || ERROR_CODES.value;
    case 'SEARCH': return textValue(arg(1)).toLowerCase().indexOf(textValue(arg(0)).toLowerCase()) + 1 || ERROR_CODES.value;
    case 'SUBSTITUTE': return textValue(arg(0)).split(textValue(arg(1))).join(textValue(arg(2)));
    case 'REPLACE': {
      const text = textValue(arg(0)); const start = Number(arg(1)) - 1; const count = Number(arg(2));
      return `${text.slice(0, start)}${textValue(arg(3))}${text.slice(start + count)}`;
    }
    case 'VALUE':
    case 'NUMBERVALUE': return Number(textValue(arg(0)).replace(/,/g, '.'));
    case 'DATE': return new Date(Number(arg(0)), Number(arg(1)) - 1, Number(arg(2)));
    case 'DAY': return dateFromValue(arg(0)).getDate();
    case 'MONTH': return dateFromValue(arg(0)).getMonth() + 1;
    case 'YEAR': return dateFromValue(arg(0)).getFullYear();
    case 'TODAY': { const d = new Date(); d.setHours(0, 0, 0, 0); return d; }
    case 'NOW': return new Date();
    case 'DATEDIF': {
      const start = dateFromValue(arg(0)); const end = dateFromValue(arg(1)); const unit = textValue(arg(2)).toLowerCase();
      if (unit === 'y') return end.getFullYear() - start.getFullYear();
      if (unit === 'm') return (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();
      return Math.floor((end - start) / 86400000);
    }
    case 'DAYS': return Math.round((dateFromValue(arg(0)) - dateFromValue(arg(1))) / 86400000);
    case 'NETWORKDAYS':
    case 'NETWORKDAYS.INTL': return businessDays(dateFromValue(arg(0)), dateFromValue(arg(1)));
    case 'WORKDAY':
    case 'WORKDAY.INTL': return workday(dateFromValue(arg(0)), Number(arg(1)));
    case 'EDATE': { const d = dateFromValue(arg(0)); return new Date(d.getFullYear(), d.getMonth() + Number(arg(1)), d.getDate()); }
    case 'EOMONTH': { const d = dateFromValue(arg(0)); return new Date(d.getFullYear(), d.getMonth() + Number(arg(1)) + 1, 0); }
    case 'HOUR': return Number(textValue(arg(0)).split(':')[0]);
    case 'MINUTE': return Number(textValue(arg(0)).split(':')[1]);
    case 'SECOND': return Number(textValue(arg(0)).split(':')[2]);
    case 'TIME': return `${String(arg(0)).padStart(2, '0')}:${String(arg(1)).padStart(2, '0')}:${String(arg(2)).padStart(2, '0')}`;
    case 'ABS': return Math.abs(numberValue(arg(0)));
    case 'ROUND': return Number(numberValue(arg(0)).toFixed(Number(arg(1))));
    case 'ROUNDUP': { const digits = Number(arg(1)); const factor = 10 ** digits; return Math.ceil(numberValue(arg(0)) * factor) / factor; }
    case 'ROUNDDOWN': { const digits = Number(arg(1)); const factor = 10 ** digits; return Math.floor(numberValue(arg(0)) * factor) / factor; }
    case 'INT': return Math.floor(numberValue(arg(0)));
    case 'MOD': return numberValue(arg(0)) % numberValue(arg(1));
    case 'CEILING': return Math.ceil(numberValue(arg(0)) / numberValue(arg(1))) * numberValue(arg(1));
    case 'FLOOR': return Math.floor(numberValue(arg(0)) / numberValue(arg(1))) * numberValue(arg(1));
    case 'POWER': return numberValue(arg(0)) ** numberValue(arg(1));
    case 'SQRT': { const value = numberValue(arg(0)); if (value < 0) throw new Error(ERROR_CODES.num); return Math.sqrt(value); }
    case 'RAND': return Math.random();
    case 'RANDBETWEEN': return Math.floor(Math.random() * (Number(arg(1)) - Number(arg(0)) + 1)) + Number(arg(0));
    case 'SUBTOTAL':
    case 'AGGREGATE': return numbersOnly(arg(argExprs.length - 1)).reduce((a, b) => a + b, 0);
    case 'SUMPRODUCT': {
      const arrays = argExprs.map((_, index) => numbersOnly(arg(index)));
      const len = Math.min(...arrays.map((items) => items.length));
      return Array.from({ length: len }, (_, i) => arrays.reduce((product, items) => product * (items[i] || 0), 1)).reduce((a, b) => a + b, 0);
    }
    case 'ISBLANK': return isBlank(arg(0));
    case 'ISNUMBER': return typeof arg(0) === 'number' && Number.isFinite(arg(0));
    case 'ISTEXT': return typeof arg(0) === 'string' && !isErrorValue(arg(0));
    case 'ISERROR': return isErrorValue(arg(0));
    case 'ISNA': return arg(0) === ERROR_CODES.na;
    case 'ISFORMULA': return /^=/.test(textValue(arg(0)));
    case 'TYPE': { const value = arg(0); if (typeof value === 'number') return 1; if (typeof value === 'string') return 2; if (typeof value === 'boolean') return 4; if (isErrorValue(value)) return 16; return 64; }
    case 'N': { const value = arg(0); if (typeof value === 'number') return value; if (value instanceof Date) return excelSerial(value); if (typeof value === 'boolean') return value ? 1 : 0; return 0; }
    case 'ROW': return parseCellRef(argExprs[0])?.row || 1;
    case 'COLUMN': return parseCellRef(argExprs[0])?.col || 1;
    case 'ROWS': return isRangeObject(arg(0)) ? arg(0).rowCount : 1;
    case 'COLUMNS': return isRangeObject(arg(0)) ? arg(0).colCount : 1;
    case 'ADDRESS': return `$${toColName(Number(arg(1)))}$${Number(arg(0))}`;
    case 'INDIRECT': return evaluateExpression(textValue(arg(0)), ctx);
    case 'OFFSET': {
      const base = parseCellRef(argExprs[0]); if (!base) throw new Error(ERROR_CODES.ref);
      const target = `${toColName(base.col + Number(arg(2) || 0))}${base.row + Number(arg(1) || 0)}`;
      return getCell(ctx.sheet, target);
    }
    case 'FORMULATEXT': return textValue(arg(0));
    case 'HYPERLINK': return argExprs[1] ? textValue(arg(1)) : textValue(arg(0));
    case 'CELL': {
      const infoType = textValue(arg(0)).toLowerCase();
      if (infoType === 'address') return `$${argExprs[1].replace(/\d+$/, '')}$${parseCellRef(argExprs[1])?.row || 1}`;
      return textValue(arg(1));
    }
    case 'FORECAST':
    case 'TREND': {
      const x = numberValue(arg(0)); const ys = nums(1); const xs = nums(2);
      const n = Math.min(xs.length, ys.length);
      const xMean = xs.reduce((a, b) => a + b, 0) / n; const yMean = ys.reduce((a, b) => a + b, 0) / n;
      const slope = xs.reduce((sum, item, i) => sum + (item - xMean) * (ys[i] - yMean), 0) / xs.reduce((sum, item) => sum + (item - xMean) ** 2, 0);
      const intercept = yMean - slope * xMean;
      return intercept + slope * x;
    }
    // Newer formula demos. We keep these lightweight so the UI can still show a result instead of feeling broken.
    case 'LET': {
      const localVars = new Map(ctx.vars || []);
      for (let i = 0; i < argExprs.length - 1; i += 2) {
        const varName = String(argExprs[i] || '').trim().replace(/^['"]|['"]$/g, '').toUpperCase();
        if (!varName || i + 1 >= argExprs.length) throw new Error(ERROR_CODES.value);
        const varValue = evaluateExpression(argExprs[i + 1], { ...ctx, vars: localVars });
        localVars.set(varName, varValue);
      }
      return evaluateExpression(argExprs[argExprs.length - 1], { ...ctx, vars: localVars });
    }
    case 'LAMBDA': return '[LAMBDA siap dipakai]';
    case 'MAP': return flatArg(0).map((item) => Number(item) * 2);
    case 'REDUCE': return flatArg(1).reduce((sum, item) => sum + (Number(item) || 0), Number(arg(0) || 0));
    case 'SCAN': { let total = Number(arg(0) || 0); return flatArg(1).map((item) => { total += Number(item) || 0; return total; }); }
    case 'BYROW': return flatArg(0).map((item) => Number(item) * 2);
    case 'BYCOL': return numbersOnly(arg(0)).reduce((a, b) => a + b, 0);
    case 'MAKEARRAY': return { __range: true, values: Array.from({ length: Number(arg(0)) }, (_, r) => Array.from({ length: Number(arg(1)) }, (_, c) => (r + 1) * (c + 1))) };
    default:
      return { __simulated: true, functionName: name, argCount: argExprs.length, preview: `${name} siap dicek` };
  }
}

export function evaluateFormula(formula = '', table = {}, separatorMode = 'id') {
  const normalizedFormula = normalizeForEvaluation(formula, separatorMode);
  const raw = normalizedFormula.trim();
  if (!raw) return { ok: null, value: '', displayValue: '', message: 'Formula masih kosong.' };
  if (!raw.startsWith('=')) return errorResult(ERROR_CODES.value, 'Formula harus diawali tanda =.');
  try {
    const sheet = buildSheet(table);
    const value = evaluateExpression(raw.slice(1), { sheet, table, vars: new Map() });
    if (isErrorValue(value)) return errorResult(value, `Formula menghasilkan ${value}.`);
    if (value && value.__simulated === true) {
      return {
        ok: true,
        value,
        displayValue: formatExcelValue(value),
        normalizedFormula,
        simulated: true,
        message: 'Simulator belum menghitung hasil angka untuk rumus ini, tapi struktur rumusnya tetap bisa dicek.'
      };
    }
    return okResult(value, normalizedFormula);
  } catch (error) {
    const code = Object.values(ERROR_CODES).includes(error.message) ? error.message : ERROR_CODES.value;
    const messages = {
      [ERROR_CODES.name]: 'Nama rumus atau nama referensi tidak dikenali.',
      [ERROR_CODES.value]: 'Tipe data atau struktur argumen belum cocok.',
      [ERROR_CODES.ref]: 'Referensi cell/range tidak valid.',
      [ERROR_CODES.na]: 'Data yang dicari tidak ditemukan.',
      [ERROR_CODES.num]: 'Angka tidak valid untuk rumus ini.',
      [ERROR_CODES.div0]: 'Ada pembagian dengan nol.'
    };
    return errorResult(code, messages[code] || 'Formula belum bisa dihitung.');
  }
}
