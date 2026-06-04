// Compatibility bridge for older App.jsx imports.
// The real progress storage implementation lives in localStorage.js.
export {
  defaultProgressState,
  loadProgress,
  saveProgress,
  resetProgress,
  markFormulaOpened,
  markFormulaAttempt,
  setPreference
} from './localStorage.js';
