'use client';

import { WaterCounter } from './WaterCounter';
import { AddWaterButton } from './AddWaterButton';
import { useWaterTracking } from './useWaterTracking';

export const WaterTracker: React.FC = () => {
  const {
    glassesConsumed,
    dailyGoal,
    progress,
    isGoalReached,
    remainingGlasses,
    isAdding,
    showSuccess,
    addWater,
  } = useWaterTracking();

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Water Tracker Card */}
      <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Daily Water Intake
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {isGoalReached ? (
              <span className="text-green-600 dark:text-green-400 font-semibold">
                🎉 Goal reached! Great job staying hydrated!
              </span>
            ) : (
              <span>
                {remainingGlasses} {remainingGlasses === 1 ? 'glass' : 'glasses'} to go
              </span>
            )}
          </p>
        </div>

        {/* Counter Display */}
        <WaterCounter
          glassesConsumed={glassesConsumed}
          dailyGoal={dailyGoal}
          progress={progress}
          isGoalReached={isGoalReached}
        />

        {/* Add Water Button */}
        <div className="flex flex-col items-center mt-8 gap-4">
          <AddWaterButton
            onClick={() => addWater(1)}
            isAdding={isAdding}
            disabled={isGoalReached}
          />

          {/* Success Feedback */}
          {showSuccess && (
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium animate-pulse">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Water added!
            </div>
          )}
        </div>

        {/* Daily Goal Info */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Daily goal: {dailyGoal} glasses of water</p>
          <p className="mt-1">💧 Stay hydrated for better health!</p>
        </div>
      </div>
    </div>
  );
};
