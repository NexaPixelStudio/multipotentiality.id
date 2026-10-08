import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { EXERCISES, EXERCISE_BY_ID, MODULES } from '../content/index.js';

const KEY = 'belajar-excel:v2';

const fresh = () => ({ done: {}, read: {}, xp: 0, streak: { count: 0, last: null }, locale: 'id', theme: 'auto', seenWelcome: false });

const load = () => {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return fresh();
    return { ...fresh(), ...JSON.parse(raw) };
  } catch {
    return fresh();
  }
};

const dayStamp = (d = new Date()) => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
const yesterdayStamp = () => dayStamp(new Date(Date.now() - 86400000));

// XP per soal: lebih tinggi di level lebih sulit, berkurang bila memakai petunjuk atau banyak percobaan.
export const baseXp = (level) => 10 + (level - 1) * 3;
export const earnXp = (level, hints, tries) => {
  const base = baseXp(level);
  return Math.max(Math.ceil(base * 0.4), base - hints * 2 - Math.max(0, tries - 1));
};

const Ctx = createContext(null);

export function ProgressProvider({ children }) {
  const [state, setState] = useState(load);

  useEffect(() => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* penyimpanan tidak tersedia, abaikan */
    }
  }, [state]);

  useEffect(() => {
    const root = document.documentElement;
    if (state.theme === 'auto') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  const markSolved = useCallback((id, { hints = 0, tries = 1, revealed = false } = {}) => {
    setState((s) => {
      const ex = EXERCISE_BY_ID[id];
      if (!ex) return s;
      const prev = s.done[id];
      if (prev?.solved) return s;
      const mod = MODULES.find((m) => m.id === ex.moduleId);
      const xp = revealed ? 0 : earnXp(mod.level, hints, tries);
      const today = dayStamp();
      let streak = s.streak;
      if (!revealed && streak.last !== today) {
        streak = { count: streak.last === yesterdayStamp() ? streak.count + 1 : 1, last: today };
      }
      return { ...s, xp: s.xp + xp, streak, done: { ...s.done, [id]: { solved: !revealed, revealed, hints, tries, xp, at: Date.now() } } };
    });
  }, []);

  const addXp = useCallback((xp) => {
    if (!(xp > 0)) return;
    setState((s) => {
      const today = dayStamp();
      const streak = s.streak.last === today ? s.streak : { count: s.streak.last === yesterdayStamp() ? s.streak.count + 1 : 1, last: today };
      return { ...s, xp: s.xp + xp, streak };
    });
  }, []);

  const markRead = useCallback((moduleId) => setState((s) => (s.read[moduleId] ? s : { ...s, read: { ...s.read, [moduleId]: true } })), []);
  const setLocale = useCallback((locale) => setState((s) => ({ ...s, locale })), []);
  const setTheme = useCallback((theme) => setState((s) => ({ ...s, theme })), []);
  const dismissWelcome = useCallback(() => setState((s) => ({ ...s, seenWelcome: true })), []);
  const reset = useCallback(() => setState((s) => ({ ...fresh(), locale: s.locale, theme: s.theme, seenWelcome: true })), []);

  const value = useMemo(() => {
    const solvedIds = new Set(Object.entries(state.done).filter(([, v]) => v.solved).map(([k]) => k));
    const moduleStats = (m) => {
      const solved = m.exercises.filter((e) => solvedIds.has(e.id)).length;
      return { solved, total: m.exercises.length, complete: solved === m.exercises.length, pct: Math.round((solved / m.exercises.length) * 100) };
    };
    const nextExercise = () => EXERCISES.find((e) => !state.done[e.id]) || null;
    return {
      ...state,
      solvedIds,
      totalSolved: solvedIds.size,
      totalExercises: EXERCISES.length,
      moduleStats,
      nextExercise,
      markSolved,
      markRead,
      addXp,
      setLocale,
      setTheme,
      dismissWelcome,
      reset
    };
  }, [state, markSolved, markRead, addXp, setLocale, setTheme, dismissWelcome, reset]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useProgress = () => useContext(Ctx);
