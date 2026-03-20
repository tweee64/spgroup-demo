'use client';

import { useWaterIntake } from './useWaterIntake';
import GlassGrid from './GlassGrid';
import IntakeProgressBar from './IntakeProgressBar';

export default function WaterIntakeDashboard() {
  const { consumed, goal, isGoalReached, logGlass, resetIntake } = useWaterIntake();

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ backgroundColor: 'var(--surface-secondary)' }}
    >
      <div
        className="w-full max-w-md rounded-2xl shadow-lg p-8"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        {/* Header */}
        <h1
          className="text-2xl font-semibold text-center mb-8"
          style={{ color: 'var(--text-primary)' }}
        >
          Daily Hydration
        </h1>

        {/* Glass icon grid */}
        <GlassGrid consumed={consumed} goal={goal} />

        {/* Counter */}
        <p
          className="text-5xl sm:text-5xl text-4xl font-bold text-center mb-1 tabular-nums"
          style={{ color: 'var(--text-primary)' }}
        >
          {consumed} / {goal}
        </p>
        <p
          className="text-base font-medium text-center mb-6"
          style={{ color: 'var(--text-secondary)' }}
        >
          glasses
        </p>

        {/* Progress bar */}
        <IntakeProgressBar consumed={consumed} goal={goal} />

        {/* CTA Button */}
        <button
          onClick={logGlass}
          disabled={isGoalReached}
          aria-label="Log a glass of water"
          className="w-full h-14 rounded-xl text-lg font-semibold mb-3 transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          style={
            isGoalReached
              ? {
                  backgroundColor: 'var(--color-gray-200)',
                  color: 'var(--color-gray-400)',
                  cursor: 'not-allowed',
                }
              : {
                  backgroundColor: 'var(--primary)',
                  color: 'var(--text-inverse)',
                }
          }
          onMouseEnter={e => {
            if (!isGoalReached) {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                'var(--primary-hover)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.02)';
            }
          }}
          onMouseLeave={e => {
            if (!isGoalReached) {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--primary)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
            }
          }}
          onMouseDown={e => {
            if (!isGoalReached) {
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(0.98)';
            }
          }}
          onMouseUp={e => {
            if (!isGoalReached) {
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.02)';
            }
          }}
        >
          {isGoalReached ? '🎉 Goal reached!' : '+ Log a Glass'}
        </button>

        {/* Reset button — only visible when consumed > 0 */}
        {consumed > 0 && (
          <div className="flex justify-center mt-2">
            <button
              onClick={resetIntake}
              className="text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={e =>
                ((e.currentTarget as HTMLButtonElement).style.color = 'var(--primary)')
              }
              onMouseLeave={e =>
                ((e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)')
              }
            >
              ↺ Reset
            </button>
          </div>
        )}

        {/* Goal reached message */}
        {isGoalReached && (
          <p
            className="text-center text-sm font-medium mt-4"
            style={{ color: 'var(--primary)' }}
          >
            You&apos;ve hit your daily goal! Stay hydrated.
          </p>
        )}
      </div>
    </div>
  );
}
