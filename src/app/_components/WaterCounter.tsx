'use client';

interface WaterCounterProps {
  glassesConsumed: number;
  dailyGoal: number;
  progress: number;
  isGoalReached: boolean;
}

export const WaterCounter: React.FC<WaterCounterProps> = ({
  glassesConsumed,
  dailyGoal,
  progress,
  isGoalReached,
}) => {
  const size = 280;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Circular Progress Ring */}
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <svg
          className="transform -rotate-90"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-gray-200 dark:text-gray-700"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className={`transition-all duration-500 ease-in-out ${
              isGoalReached
                ? 'text-green-500 dark:text-green-400'
                : 'text-blue-500 dark:text-blue-400'
            }`}
          />
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Water drop icon */}
          <svg
            className={`w-16 h-16 mb-2 ${
              isGoalReached
                ? 'text-green-500 dark:text-green-400'
                : 'text-blue-500 dark:text-blue-400'
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          </svg>

          {/* Counter display */}
          <div className="text-center">
            <p className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white transition-all duration-300">
              {glassesConsumed}
              <span className="text-2xl md:text-3xl text-gray-400 dark:text-gray-500">
                {' '}/ {dailyGoal}
              </span>
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2">
              glasses
            </p>
          </div>

          {/* Percentage */}
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-2">
            {Math.round(progress)}% complete
          </p>
        </div>

        {/* Goal reached celebration */}
        {isGoalReached && (
          <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-3 shadow-lg animate-bounce">
            <svg
              className="w-6 h-6"
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
          </div>
        )}
      </div>
    </div>
  );
};
