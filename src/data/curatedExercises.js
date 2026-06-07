import { batchBasicSalesTable, batch01BasicCalculationExercises } from './quality/batch01BasicCalculation.js';
import { batchConditionalOrderTable, batch02ConditionalCalculationExercises } from './quality/batch02ConditionalCalculation.js';
import { batchLogicalStudentTable, batch03LogicalCalculationExercises } from './quality/batch03LogicalCalculation.js';
import { batchLookupProductTable, batch04LookupReferenceExercises } from './quality/batch04LookupReference.js';

export const sharedExerciseTables = {
  batchBasicSales: batchBasicSalesTable,
  batchConditionalOrders: batchConditionalOrderTable,
  batchLogicalStudents: batchLogicalStudentTable,
  batchLookupProducts: batchLookupProductTable
};

export const curatedExercises = {
  ...batch01BasicCalculationExercises,
  ...batch02ConditionalCalculationExercises,
  ...batch03LogicalCalculationExercises,
  ...batch04LookupReferenceExercises
};

export function getCuratedExercise(formulaId) {
  return curatedExercises[formulaId]?.[0] || null;
}

export function getCuratedExercises(formulaId) {
  return curatedExercises[formulaId] || [];
}
