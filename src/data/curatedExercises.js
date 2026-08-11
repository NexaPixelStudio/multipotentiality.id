import { batchBasicSalesTable, batch01BasicCalculationExercises } from './quality/batch01BasicCalculation.js';
import { batchConditionalOrderTable, batch02ConditionalCalculationExercises } from './quality/batch02ConditionalCalculation.js';
import { batchLogicalStudentTable, batch03LogicalCalculationExercises } from './quality/batch03LogicalCalculation.js';
import { batchLookupProductTable, batch04LookupReferenceExercises } from './quality/batch04LookupReference.js';
import { batchTextParticipantTable, batch05TextExercises } from './quality/batch05Text.js';
import { batchDateEmployeeTable, batch06DateTimeExercises } from './quality/batch06DateTime.js';

export const sharedExerciseTables = {
  batchBasicSales: batchBasicSalesTable,
  batchConditionalOrders: batchConditionalOrderTable,
  batchLogicalStudents: batchLogicalStudentTable,
  batchLookupProducts: batchLookupProductTable,
  batchTextParticipants: batchTextParticipantTable,
  batchDateEmployees: batchDateEmployeeTable
};

export const curatedExercises = {
  ...batch01BasicCalculationExercises,
  ...batch02ConditionalCalculationExercises,
  ...batch03LogicalCalculationExercises,
  ...batch04LookupReferenceExercises,
  ...batch05TextExercises,
  ...batch06DateTimeExercises
};

export function getCuratedExercise(formulaId) {
  return curatedExercises[formulaId]?.[0] || null;
}

export function getCuratedExercises(formulaId) {
  return curatedExercises[formulaId] || [];
}
