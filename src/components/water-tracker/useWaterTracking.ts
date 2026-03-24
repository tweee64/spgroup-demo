'use client';

import { useState, useEffect, useCallback } from 'react';
import { WaterTrackerState } from '@/types/water-tracker';
import { loadFromStorage, saveToStorage, getDefaultState } from '@/lib/storage';

export function useWaterTracking() {
  const [state, setState] = useState<WaterTrackerState>(() => {
    // Initialize with default state (will hydrate from localStorage in useEffect)
    const defaultData = getDefaultState();
    return {
      ...defaultData,
      isGoalReached: false,
      progressPercentage: 0,
      remainingGlasses: defaultData.dailyGoal,
      isAnimating: false,
    };
  });

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = loadFromStorage();
    if (stored) {
      const today = new Date().toISOString().split('T')[0];
      
      // If stored data is from a different day, reset
      if (stored.date !== today) {
        const newState = getDefaultState();
        saveToStorage(newState);
        setState({
          ...newState,
          isGoalReached: false,
          progressPercentage: 0,
          remainingGlasses: newState.dailyGoal,
          isAnimating: false,
        });
      } else {
        // Use stored data
        setState({
          ...stored,
          isGoalReached: stored.currentIntake >= stored.dailyGoal,
          progressPercentage: (stored.currentIntake / stored.dailyGoal) * 100,
          remainingGlasses: Math.max(0, stored.dailyGoal - stored.currentIntake),
          isAnimating: false,
        });
      }
    }
  }, []);

  // Check for day change periodically
  useEffect(() => {
    const checkDayChange = () => {
      const today = new Date().toISOString().split('T')[0];
      if (state.date !== today) {
        resetDaily();
      }
    };
    
    const interval = setInterval(checkDayChange, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, [state.date]);

  const addGlass = useCallback(() => {
    setState(prev => {
      const newIntake = prev.currentIntake + 1;
      const today = new Date().toISOString().split('T')[0];
      const newState = {
        currentIntake: newIntake,
        dailyGoal: prev.dailyGoal,
        date: today,
        lastUpdated: new Date().toISOString(),
        progressPercentage: Math.min((newIntake / prev.dailyGoal) * 100, 100),
        isGoalReached: newIntake >= prev.dailyGoal,
        remainingGlasses: Math.max(0, prev.dailyGoal - newIntake),
        isAnimating: true,
      };
      
      saveToStorage(newState);
      return newState;
    });
    
    // Reset animation after delay
    setTimeout(() => {
      setState(prev => ({ ...prev, isAnimating: false }));
    }, 500);
  }, []);

  const resetDaily = useCallback(() => {
    const newState = getDefaultState();
    saveToStorage(newState);
    setState({
      ...newState,
      isGoalReached: false,
      progressPercentage: 0,
      remainingGlasses: newState.dailyGoal,
      isAnimating: false,
    });
  }, []);

  return {
    ...state,
    addGlass,
    resetDaily,
  };
}
