import { levelOrder } from '../data/formulaCategories';

export function searchFormulas(formulas, { query = '', category = 'All', level = 'All', onlyExercise = false, status = 'All', progress = {} }) {
  const normalized = query.trim().toLowerCase();

  return formulas
    .filter((formula) => {
      const haystack = [formula.name, formula.description, formula.syntax, formula.displayCategory, formula.category, ...(formula.tags || [])]
        .join(' ')
        .toLowerCase();
      const matchesQuery = !normalized || haystack.includes(normalized);
      const matchesCategory = category === 'All' || formula.displayCategory === category || formula.category === category;
      const matchesLevel = level === 'All' || formula.level === level;
      const matchesExercise = !onlyExercise || formula.hasExercise;
      const formulaStatus = progress[formula.id]?.status || 'Belum dicoba';
      const matchesStatus = status === 'All' || formulaStatus === status;
      return matchesQuery && matchesCategory && matchesLevel && matchesExercise && matchesStatus;
    })
    .sort((a, b) => {
      const levelDiff = (levelOrder[a.level] || 9) - (levelOrder[b.level] || 9);
      if (levelDiff !== 0) return levelDiff;
      return a.name.localeCompare(b.name);
    });
}

export function getFormulaStatus(progress, formulaId) {
  return progress?.[formulaId]?.status || 'Belum dicoba';
}
