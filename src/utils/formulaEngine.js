const ERROR_CODES = {
  name: '#NAME?',
  value: '#VALUE!',
  ref: '#REF!',
  na: '#N/A',
  num: '#NUM!',
  div0: '#DIV/0!'
};

const errorResult = (code, message) => ({ ok: false, error: code, value: code, displayValue: code, message });
const isBlank = (value) => value === '' || value === null || typeof value === 'undefined';
const isRangeObject = (value) => value && value.__range === true;
const flatten = (value) => {
  if (isRangeObject(value)) return value.values.flat(Infinity);
  if (Array.isArray(value)) return value.flatMap(flatten);
  return [value];
};

const colToNumber = (col = '') => String(col).toUpperCase().split('').reduce((sum, char) => sum * 26 + char.charCodeAt(0) - 64, 0);
const numberToCol = (num = 1) => {
  let value = Number(num);
  let col = '';
  while (value > 0) {
    const next = (value - 1) % 26;
    col = String.fromCharCode(65 + next) + col;
    value = Math.floor((value - 1) / 26);
  }
  return col || 'A';
};

const stripOuterQuotes = (value = '') => {
  const text = String(value ?? '').trim();
  if ((text.startsWith('"') && text.endsWith('"')) || (text.startsWith("'") && text.endsWith("'"))) return text.slice(1, -1);
  return text;
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

export function normalizeForEvaluation(formula = '') {
  let output = '';
  let inQuote = false;
  for (const char of String(formula || '').trim()) {
    if (char === '"') inQuote = !inQuote;
    output += !inQuote && char === ';' ? ',' : char;
  }
  return autoCloseFormula(output);
}

export function formatExcelValue(value) {
  if (isRangeObject(value)) return value.values.map((row) => row.map(formatExcelValue).join(' | ')).join('\n');
  if (Array.isArray(value)) return value.map(formatExcelValue).join(', ');
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) return ERROR_CODES.num;
    return new Intl.NumberFormat('id-ID', { maximumFractionDigits: 6 }).format(Math.round(value * 1000000) / 1000000);
  }
  if (typeof value === 'boolean') return value ? 'TRUE' : 'FALSE';
  if (isBlank(value)) return '';
  return String(value);
}

export function compareExcelResults(a, b) {
  const normalize = (value) => {
    if (isRangeObject(value)) return value.values.map((row) => row.map(normalize));
    if (Array.isArray(value)) return value.map(normalize);
    if (typeof value === 'number') return Math.round(value * 1000000) / 1000000;
    if (typeof value === 'boolean') return value;
    return String(value ?? '').trim().toUpperCase();
  };
  return JSON.stringify(normalize(a)) === JSON.stringify(normalize(b));
}

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

const parseFunctionCall = (formula = '') => {
  const clean = normalizeForEvaluation(formula);
  const match = clean.match(/^=\s*([A-Z][A-Z0-9._]*)\s*\((.*)\)$/i);
  if (!match) return null;
  return { name: match[1].toUpperCase(), args: splitArgs(match[2]) };
};

const splitSheetRef = (ref = '') => {
  const clean = String(ref || '').trim().replace(/\$/g, '');
  const bangIndex = clean.lastIndexOf('!');
  if (bangIndex === -1) return { sheetName: '', ref: clean };
  return {
    sheetName: clean.slice(0, bangIndex).replace(/^'|'$/g, '').trim(),
    ref: clean.slice(bangIndex + 1)
  };
};

const makeKey = (sheetName = '', ref = '') => {
  const sheet = String(sheetName || '').trim().toUpperCase();
  const cell = String(ref || '').trim().replace(/\$/g, '').toUpperCase();
  return sheet ? `${sheet}!${cell}` : cell;
};

const getWorkbook = (table = {}) => {
  const sheets = Array.isArray(table.sheets) && table.sheets.length
    ? table.sheets.map((sheet, index) => ({
      name: sheet.name || sheet.sheetName || `Sheet${index + 1}`,
      columns: sheet.columns || sheet.table?.columns || [],
      rows: sheet.rows || sheet.table?.rows || []
    }))
    : [{ name: table.sheetName || 'Sheet1', columns: table.columns || [], rows: table.rows || [] }];

  const defaultSheetName = table.formulaSheetName || table.defaultSheetName || table.activeSheetName || sheets[0]?.name || 'Sheet1';
  const values = new Map();
  const bounds = new Map();

  const setValue = (sheetName, ref, value) => {
    values.set(makeKey(sheetName, ref), value);
    if (String(sheetName).toUpperCase() === String(defaultSheetName).toUpperCase()) values.set(makeKey('', ref), value);
  };

  sheets.forEach((sheet) => {
    const sheetName = sheet.name;
    const columns = sheet.columns || [];
    const rows = sheet.rows || [];
    bounds.set(String(sheetName).toUpperCase(), { maxCol: Math.max(columns.length, 1), maxRow: Math.max(rows.length + 1, 1) });
    columns.forEach((column, index) => setValue(sheetName, `${numberToCol(index + 1)}1`, column));
    rows.forEach((row, rowIndex) => {
      columns.forEach((_, colIndex) => setValue(sheetName, `${numberToCol(colIndex + 1)}${rowIndex + 2}`, row[colIndex] ?? ''));
    });
  });

  return { values, bounds, defaultSheetName };
};

const parseCellRef = (ref = '', defaultSheetName = '') => {
  const { sheetName, ref: localRef } = splitSheetRef(ref);
  const match = localRef.toUpperCase().match(/^([A-Z]+)(\d+)$/);
  if (!match) return null;
  const normalizedRef = `${match[1]}${Number(match[2])}`;
  const finalSheet = sheetName || defaultSheetName || '';
  return { sheetName: finalSheet, col: colToNumber(match[1]), row: Number(match[2]), ref: normalizedRef, key: makeKey(finalSheet, normalizedRef) };
};

const parseRangeRef = (ref = '', workbook) => {
  const raw = String(ref || '').trim().replace(/\$/g, '');
  const firstSplit = splitSheetRef(raw.split(':')[0]);
  const sheetName = firstSplit.sheetName || workbook.defaultSheetName || '';
  const bound = workbook.bounds.get(String(sheetName).toUpperCase()) || { maxCol: 26, maxRow: 100 };

  const expandFullColumn = (part) => {
    const split = splitSheetRef(part);
    const prefix = split.sheetName ? `${split.sheetName}!` : '';
    if (/^[A-Z]+$/i.test(split.ref)) return `${prefix}${split.ref}1:${split.ref}${bound.maxRow}`;
    return part;
  };

  const expanded = raw.includes(':')
    ? raw.split(':').map(expandFullColumn).join(':')
    : expandFullColumn(raw);

  const [startText, endText = startText] = expanded.split(':');
  const start = parseCellRef(startText, sheetName);
  const end = parseCellRef(endText, start?.sheetName || sheetName);
  if (!start || !end) return null;
  return {
    sheetName: start.sheetName || end.sheetName || sheetName,
    startCol: Math.min(start.col, end.col),
    endCol: Math.max(start.col, end.col),
    startRow: Math.min(start.row, end.row),
    endRow: Math.max(start.row, end.row)
  };
};

const getCell = (workbook, ref) => {
  const cell = parseCellRef(ref, workbook.defaultSheetName);
  if (!cell) throw new Error(ERROR_CODES.ref);
  return workbook.values.has(cell.key) ? workbook.values.get(cell.key) : '';
};

const getRange = (workbook, ref) => {
  const range = parseRangeRef(ref, workbook);
  if (!range) throw new Error(ERROR_CODES.ref);
  const rows = [];
  for (let row = range.startRow; row <= range.endRow; row += 1) {
    const nextRow = [];
    for (let col = range.startCol; col <= range.endCol; col += 1) {
      nextRow.push(workbook.values.get(makeKey(range.sheetName, `${numberToCol(col)}${row}`)) ?? '');
    }
    rows.push(nextRow);
  }
  const prefix = range.sheetName ? `${range.sheetName}!` : '';
  return { __range: true, ref: `${prefix}${numberToCol(range.startCol)}${range.startRow}:${numberToCol(range.endCol)}${range.endRow}`, values: rows, rowCount: rows.length, colCount: rows[0]?.length || 0 };
};

const isCellLike = (text = '') => /^(?:'[^']+'|[A-Z0-9_ ]+)?!?\$?[A-Z]+\$?\d+$/i.test(String(text).trim());
const isRangeLike = (text = '') => /^(?:'[^']+'|[A-Z0-9_ ]+)?!?\$?[A-Z]+(?:\$?\d+)?:(?:(?:'[^']+'|[A-Z0-9_ ]+)!?)?\$?[A-Z]+(?:\$?\d+)?$/i.test(String(text).trim());

const compareValues = (value, operator, target) => {
  const aNum = Number(value);
  const bNum = Number(target);
  const bothNumber = Number.isFinite(aNum) && Number.isFinite(bNum);
  const a = bothNumber ? aNum : String(value ?? '').toUpperCase();
  const b = bothNumber ? bNum : String(target ?? '').toUpperCase();
  if (operator === '=') return a === b;
  if (operator === '<>') return a !== b;
  if (operator === '>') return a > b;
  if (operator === '<') return a < b;
  if (operator === '>=') return a >= b;
  if (operator === '<=') return a <= b;
  return false;
};

const findComparisonOperator = (text = '') => {
  let inQuote = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (char === '"' && text[i - 1] !== '\\') inQuote = !inQuote;
    if (inQuote) continue;
    const two = text.slice(i, i + 2);
    if (['>=', '<=', '<>'].includes(two)) return { operator: two, index: i };
    if (['=', '>', '<'].includes(char)) return { operator: char, index: i };
  }
  return null;
};

const toBool = (value) => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'number') return value !== 0;
  const text = String(value ?? '').trim().toUpperCase();
  if (text === 'TRUE') return true;
  if (text === 'FALSE') return false;
  if (text === '') return false;
  return Boolean(value);
};

const evaluateArg = (arg = '', workbook) => {
  const text = String(arg || '').trim();
  if (!text) return '';
  if ((text.startsWith('"') && text.endsWith('"')) || (text.startsWith("'") && text.endsWith("'"))) return stripOuterQuotes(text);
  if (/^TRUE$/i.test(text)) return true;
  if (/^FALSE$/i.test(text)) return false;
  if (/^-?\d+(\.\d+)?$/.test(text)) return Number(text);

  const nested = parseFunctionCall(`=${text}`);
  if (nested) return evaluateCall(nested.name, nested.args, workbook);

  const comparison = findComparisonOperator(text);
  if (comparison) {
    const left = text.slice(0, comparison.index).trim();
    const right = text.slice(comparison.index + comparison.operator.length).trim();
    return compareValues(evaluateArg(left, workbook), comparison.operator, evaluateArg(right, workbook));
  }

  if (isRangeLike(text)) return getRange(workbook, text);
  if (isCellLike(text)) return getCell(workbook, text);
  return text;
};

const numericValues = (value) => flatten(value).map((item) => Number(item)).filter((item) => Number.isFinite(item));
const countNumbers = (value) => numericValues(value).length;
const countNonBlank = (value) => flatten(value).filter((item) => !isBlank(item)).length;
const countBlank = (value) => flatten(value).filter((item) => isBlank(item)).length;

const resolveCriteria = (criteria, workbook) => {
  if (typeof criteria !== 'string') return criteria;
  const text = criteria.trim();
  if (isCellLike(text)) return getCell(workbook, text);
  return stripOuterQuotes(text);
};

const matchesCriteria = (value, criteria) => {
  const resolved = isRangeObject(criteria) ? flatten(criteria)[0] : criteria;
  const text = stripOuterQuotes(String(resolved ?? '').trim());
  const operatorMatch = text.match(/^(>=|<=|<>|>|<|=)(.*)$/);
  if (operatorMatch) return compareValues(value, operatorMatch[1], operatorMatch[2].trim());
  return String(value ?? '').trim().toUpperCase() === text.toUpperCase();
};

const conditionalPairsPass = (rowIndex, pairs, workbook) => pairs.every(([rangeArg, criteriaArg]) => {
  const range = evaluateArg(rangeArg, workbook);
  const criteria = resolveCriteria(criteriaArg, workbook);
  const value = isRangeObject(range) ? flatten(range)[rowIndex] : range;
  return matchesCriteria(value, criteria);
});

const exactText = (a, b) => String(a ?? '').trim().toUpperCase() === String(b ?? '').trim().toUpperCase();
const getRangeMatrix = (value) => isRangeObject(value) ? value.values : [[value]];

const evaluateCall = (name, args, workbook) => {
  const upper = name.toUpperCase();
  const values = args.map((arg) => evaluateArg(arg, workbook));

  if (upper === 'SUM') return numericValues(values).reduce((sum, item) => sum + item, 0);
  if (upper === 'AVERAGE') {
    const nums = numericValues(values);
    return nums.length ? nums.reduce((sum, item) => sum + item, 0) / nums.length : 0;
  }
  if (upper === 'MIN') return Math.min(...numericValues(values));
  if (upper === 'MAX') return Math.max(...numericValues(values));
  if (upper === 'COUNT') return countNumbers(values);
  if (upper === 'COUNTA') return countNonBlank(values);
  if (upper === 'COUNTBLANK') return countBlank(values);
  if (upper === 'LARGE' || upper === 'SMALL') {
    const nums = numericValues(values[0]).sort((a, b) => upper === 'LARGE' ? b - a : a - b);
    const order = Number(values[1]);
    if (!Number.isFinite(order) || order < 1 || order > nums.length) throw new Error(ERROR_CODES.num);
    return nums[Math.floor(order) - 1];
  }

  if (upper === 'SUMIF' || upper === 'COUNTIF' || upper === 'AVERAGEIF') {
    const criteriaRange = evaluateArg(args[0], workbook);
    const criteria = resolveCriteria(args[1], workbook);
    const valueRange = upper === 'COUNTIF' ? criteriaRange : evaluateArg(args[2], workbook);
    const criteriaValues = flatten(criteriaRange);
    const outputValues = flatten(valueRange);
    const matched = criteriaValues.map((value, index) => matchesCriteria(value, criteria) ? outputValues[index] : null).filter((value) => value !== null);
    if (upper === 'COUNTIF') return matched.length;
    const nums = numericValues(matched);
    if (upper === 'SUMIF') return nums.reduce((sum, item) => sum + item, 0);
    return nums.length ? nums.reduce((sum, item) => sum + item, 0) / nums.length : 0;
  }

  if (upper === 'SUMIFS' || upper === 'COUNTIFS' || upper === 'AVERAGEIFS') {
    const hasValueRange = upper !== 'COUNTIFS';
    const valueRange = hasValueRange ? evaluateArg(args[0], workbook) : null;
    const pairs = [];
    for (let index = hasValueRange ? 1 : 0; index < args.length; index += 2) pairs.push([args[index], args[index + 1]]);
    const baseLength = hasValueRange ? flatten(valueRange).length : flatten(evaluateArg(pairs[0]?.[0], workbook)).length;
    const matched = [];
    for (let index = 0; index < baseLength; index += 1) {
      if (conditionalPairsPass(index, pairs, workbook)) matched.push(hasValueRange ? flatten(valueRange)[index] : 1);
    }
    if (upper === 'COUNTIFS') return matched.length;
    const nums = numericValues(matched);
    if (upper === 'SUMIFS') return nums.reduce((sum, item) => sum + item, 0);
    return nums.length ? nums.reduce((sum, item) => sum + item, 0) / nums.length : 0;
  }

  if (upper === 'AND') return values.every(toBool);
  if (upper === 'OR') return values.some(toBool);
  if (upper === 'NOT') return !toBool(values[0]);
  if (upper === 'IF') return toBool(values[0]) ? values[1] : values[2];
  if (upper === 'IFS') {
    for (let index = 0; index < values.length; index += 2) {
      if (toBool(values[index])) return values[index + 1];
    }
    throw new Error(ERROR_CODES.na);
  }

  if (upper === 'MATCH') {
    const lookupValue = values[0];
    const lookupArray = flatten(values[1]);
    const position = lookupArray.findIndex((item) => exactText(item, lookupValue));
    if (position === -1) throw new Error(ERROR_CODES.na);
    return position + 1;
  }

  if (upper === 'INDEX') {
    const matrix = getRangeMatrix(values[0]);
    const rowIndex = Number(values[1]) - 1;
    const colIndex = values.length > 2 ? Number(values[2]) - 1 : 0;
    if (!matrix[rowIndex] || typeof matrix[rowIndex][colIndex] === 'undefined') throw new Error(ERROR_CODES.ref);
    return matrix[rowIndex][colIndex];
  }

  if (upper === 'VLOOKUP') {
    const lookupValue = values[0];
    const matrix = getRangeMatrix(values[1]);
    const colIndex = Number(values[2]) - 1;
    const row = matrix.find((item) => exactText(item[0], lookupValue));
    if (!row) throw new Error(ERROR_CODES.na);
    if (typeof row[colIndex] === 'undefined') throw new Error(ERROR_CODES.ref);
    return row[colIndex];
  }

  if (upper === 'HLOOKUP') {
    const lookupValue = values[0];
    const matrix = getRangeMatrix(values[1]);
    const rowIndex = Number(values[2]) - 1;
    const colIndex = matrix[0]?.findIndex((item) => exactText(item, lookupValue));
    if (colIndex < 0) throw new Error(ERROR_CODES.na);
    if (!matrix[rowIndex] || typeof matrix[rowIndex][colIndex] === 'undefined') throw new Error(ERROR_CODES.ref);
    return matrix[rowIndex][colIndex];
  }

  if (upper === 'XLOOKUP') {
    const lookupValue = values[0];
    const lookupArray = flatten(values[1]);
    const returnArray = flatten(values[2]);
    const index = lookupArray.findIndex((item) => exactText(item, lookupValue));
    if (index === -1) {
      if (typeof values[3] !== 'undefined') return values[3];
      throw new Error(ERROR_CODES.na);
    }
    return returnArray[index];
  }

  throw new Error(ERROR_CODES.name);
};

export function evaluateFormula(formula = '', table = {}, separatorMode = 'id') {
  try {
    const normalizedFormula = normalizeForEvaluation(formula, separatorMode);
    if (!normalizedFormula.startsWith('=')) return errorResult(ERROR_CODES.name, 'Formula harus diawali tanda =.');
    const call = parseFunctionCall(normalizedFormula);
    if (!call) return errorResult(ERROR_CODES.name, 'Nama rumus belum terbaca.');
    const workbook = getWorkbook(table);
    const value = evaluateCall(call.name, call.args, workbook);
    return { ok: true, value, displayValue: formatExcelValue(value), normalizedFormula };
  } catch (error) {
    const code = Object.values(ERROR_CODES).includes(error.message) ? error.message : ERROR_CODES.value;
    const message = code === ERROR_CODES.ref
      ? 'Referensi cell/range tidak valid.'
      : code === ERROR_CODES.name
        ? 'Nama rumus belum didukung atau belum terbaca.'
        : code === ERROR_CODES.na
          ? 'Data yang dicari tidak ditemukan.'
          : 'Formula belum bisa dihitung. Cek argumen, range, atau tipe datanya.';
    return errorResult(code, message);
  }
}
