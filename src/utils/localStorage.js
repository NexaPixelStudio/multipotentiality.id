const KEY = 'formulaCoachProgress.v1';

export const defaultProgressState = {
  formulas: {},
  lastMode: 'guided',
  separatorMode: 'id',
  darkMode: false,
  lastFormulaId: 'sum',
  onboardingDismissed: false
};

export function loadProgress() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultProgressState;
    return { ...defaultProgressState, ...JSON.parse(raw) };
  } catch (error) {
    console.warn('Gagal membaca progress Formula Coach', error);
    return defaultProgressState;
  }
}

export function saveProgress(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function resetProgress() {
  localStorage.removeItem(KEY);
  return defaultProgressState;
}

export function markFormulaOpened(state, formulaId) {
  const prev = state.formulas?.[formulaId] || {};
  const status = prev.status && prev.status !== 'Belum dicoba' ? prev.status : 'Sedang belajar';
  return {
    ...state,
    lastFormulaId: formulaId,
    formulas: {
      ...state.formulas,
      [formulaId]: {
        ...prev,
        status,
        opened: true,
        openedAt: new Date().toISOString()
      }
    }
  };
}

export function markFormulaAttempt(state, formulaId, isCorrect) {
  const prev = state.formulas?.[formulaId] || {};
  const attempts = (prev.attempts || 0) + 1;
  return {
    ...state,
    formulas: {
      ...state.formulas,
      [formulaId]: {
        ...prev,
        attempts,
        status: isCorrect ? 'Benar' : 'Perlu ulang',
        masteredAt: isCorrect ? new Date().toISOString() : prev.masteredAt || null,
        lastTriedAt: new Date().toISOString()
      }
    }
  };
}

export function setPreference(state, key, value) {
  return { ...state, [key]: value };
}
