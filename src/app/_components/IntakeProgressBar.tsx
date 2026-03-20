'use client';

interface IntakeProgressBarProps {
  consumed: number;
  goal: number;
}

export default function IntakeProgressBar({ consumed, goal }: IntakeProgressBarProps) {
  const percent = Math.round((consumed / goal) * 100);

  return (
    <div
      role="progressbar"
      aria-valuenow={consumed}
      aria-valuemin={0}
      aria-valuemax={goal}
      aria-label={`${consumed} of ${goal} glasses consumed`}
      className="w-full h-3 rounded-full mb-8 overflow-hidden"
      style={{ backgroundColor: 'var(--color-teal-100)' }}
    >
      <div
        className="h-full rounded-full transition-[width] duration-500 ease-out"
        style={{
          width: `${percent}%`,
          backgroundColor: 'var(--primary)',
        }}
      />
    </div>
  );
}
