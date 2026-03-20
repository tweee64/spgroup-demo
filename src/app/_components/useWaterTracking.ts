'use client';

import { useState, useEffect, useCallback } from 'react';

export const useWaterTracking = () => {
  const [glassesConsumed, setGlassesConsumed] = useState(0);
  const [dailyGoal, setDailyGoal] = useState(8);
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Get today's date in YYYY-MM-DD format
  const getToday = () => new Date().toISOString().split('T')[0];

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const today = getToday();
      const stored = localStorage.getItem(`water_tracker_${today}`);
      if (stored) {
        const data = JSON.parse(stored);
        setGlassesConsumed(data.glasses || 0);
        setDailyGoal(data.goal || 8);
      }
    } catch (error) {
      console.error('Failed to load water tracking data:', error);
      // Gracefully handle localStorage errors (e.g., privacy mode)
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    try {
      const today = getToday();
      const data = { 
        glasses: glassesConsumed, 
        goal: dailyGoal, 
        timestamp: Date.now() 
      };
      localStorage.setItem(`water_tracker_${today}`, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save water tracking data:', error);
    }
  }, [glassesConsumed, dailyGoal]);

  const addWater = useCallback(async (glasses = 1) => {
    setIsAdding(true);
    // Simulate brief processing time for smooth UX
    await new Promise(resolve => setTimeout(resolve, 200));
    
    setGlassesConsumed(prev => Math.min(prev + glasses, 20)); // Max 20 glasses safety limit
    setShowSuccess(true);
    setIsAdding(false);
    
    // Hide success message after 2 seconds
    setTimeout(() => setShowSuccess(false), 2000);
  }, []);

  const progress = Math.min((glassesConsumed / dailyGoal) * 100, 100);
  const isGoalReached = glassesConsumed >= dailyGoal;
  const remainingGlasses = Math.max(dailyGoal - glassesConsumed, 0);

  return {
    glassesConsumed,
    dailyGoal,
    progress,
    isGoalReached,
    remainingGlasses,
    isAdding,
    showSuccess,
    addWater,
    setDailyGoal,
  };
};
