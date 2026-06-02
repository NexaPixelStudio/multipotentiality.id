import { batchBasicSalesTable, batch01BasicCalculationExercises } from './quality/batch01BasicCalculation.js';
import { batchConditionalOrderTable, batch02ConditionalCalculationExercises } from './quality/batch02ConditionalCalculation.js';

export const sharedExerciseTables = {
  batchBasicSales: batchBasicSalesTable,
  batchConditionalOrders: batchConditionalOrderTable
};

export const curatedExercises = {
  ...batch01BasicCalculationExercises,
  ...batch02ConditionalCalculationExercises
};

export function getCuratedExercise(formulaId) {
  return curatedExercises[formulaId]?.[0] || null;
}

export function getCuratedExercises(formulaId) {
  return curatedExercises[formulaId] || [];
}
