'use client';

import { useWaterTracking } from './useWaterTracking';
import { AddWaterButton } from './AddWaterButton';
import { ProgressBar } from './ProgressBar';
import { GlassIcons } from './GlassIcons';

export function WaterCounter() {
  const {
    currentIntake,
    dailyGoal,
    progressPercentage,
    isGoalReached,
    remainingGlasses,
    isAnimating,
    addGlass,
  } = useWaterTracking();

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
        {/* Counter Display */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Today's Water Intake</h2>
          
          <div 
            className={`text-6xl font-bold text-[var(--color-primary-600)] transition-transform duration-300 ${
              isAnimating ? 'scale-110' : 'scale-100'
            }`}
            aria-live="polite"
            aria-atomic="true"
          >
            {currentIntake} <span className="text-4xl text-gray-400">/ {dailyGoal}</span>
          </div>
          
          <p className="text-lg text-gray-600 mt-2">
            {isGoalReached 
              ? '🎉 Congratulations! You reached your goal!' 
              : `${remainingGlasses} glass${remainingGlasses !== 1 ? 'es' : ''} to go`
            }
          </p>
        </div>

        {/* Progress Bar */}
        <ProgressBar percentage={progressPercentage} />

        {/* Glass Icons Visualization */}
        <GlassIcons totalGlasses={dailyGoal} filledGlasses={currentIntake} />

        {/* Add Water Button */}
        <AddWaterButton 
          onAdd={addGlass} 
          disabled={isGoalReached}
          isAnimating={isAnimating}
        />
      </div>
    </div>
  );
}
