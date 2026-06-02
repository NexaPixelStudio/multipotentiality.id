import { normalizeFormulaRecord } from './formulaAuditRules.js';

export const formulaCatalogFull = [];

export function importFormulaCatalog(records = []) {
  const source = Array.isArray(records) ? records : [];
  return source.map((record) => normalizeFormulaRecord(record)).filter(Boolean);
}
