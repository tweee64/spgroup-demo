'use client';

import { useState, useEffect, useCallback } from 'react';
import type { WaterIntakeState, UseWaterIntakeReturn } from '@/types/water-intake';

const STORAGE_KEY = 'water-intake';
const DEFAULT_GOAL = 8;

function getTodayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function loadState(): WaterIntakeState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) throw new Error('empty');
    const parsed = JSON.parse(raw) as WaterIntakeState;
    if (typeof parsed.consumed !== 'number' || typeof parsed.goal !== 'number') {
      throw new Error('invalid');
    }
    return parsed;
  } catch {
    return { consumed: 0, goal: DEFAULT_GOAL, dateKey: getTodayKey() };
  }
}

export function useWaterIntake(): UseWaterIntakeReturn {
  const [state, setState] = useState<WaterIntakeState>(() => {
    if (typeof window === 'undefined') {
      return { consumed: 0, goal: DEFAULT_GOAL, dateKey: getTodayKey() };
    }
    const loaded = loadState();
    const today = getTodayKey();
    return loaded.dateKey === today ? loaded : { ...loaded, consumed: 0, dateKey: today };
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // localStorage unavailable — continue with in-memory state
    }
  }, [state]);

  const logGlass = useCallback(() => {
    setState(prev =>
      prev.consumed < prev.goal
        ? { ...prev, consumed: prev.consumed + 1 }
        : prev
    );
  }, []);

  const resetIntake = useCallback(() => {
    setState(prev => ({ ...prev, consumed: 0 }));
  }, []);

  return {
    consumed: state.consumed,
    goal: state.goal,
    isGoalReached: state.consumed >= state.goal,
    progressPercent: Math.round((state.consumed / state.goal) * 100),
    logGlass,
    resetIntake,
  };
}
