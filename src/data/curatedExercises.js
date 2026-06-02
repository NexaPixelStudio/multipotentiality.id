import { batchBasicSalesTable, batch01BasicCalculationExercises } from './quality/batch01BasicCalculation.js';

export const sharedExerciseTables = {
  batchBasicSales: batchBasicSalesTable
};

export const curatedExercises = {
  ...batch01BasicCalculationExercises
};

export function getCuratedExercise(formulaId) {
  return curatedExercises[formulaId]?.[0] || null;
}

export function getCuratedExercises(formulaId) {
  return curatedExercises[formulaId] || [];
}
