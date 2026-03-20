'use client';

import { GlassWater } from 'lucide-react';

interface GlassGridProps {
  consumed: number;
  goal: number;
}

export default function GlassGrid({ consumed, goal }: GlassGridProps) {
  return (
    <div className="grid grid-cols-4 gap-3 mb-6">
      {Array.from({ length: goal }).map((_, i) => {
        const isFilled = i < consumed;
        return (
          <div
            key={i}
            className="flex items-center justify-center transition-all duration-300 ease-out"
            aria-label={`glass ${i + 1} of ${goal} — ${isFilled ? 'consumed' : 'remaining'}`}
          >
            <GlassWater
              className="w-12 h-12 transition-all duration-300 ease-out"
              style={{
                color: isFilled ? 'var(--primary)' : 'var(--color-gray-300)',
                transform: isFilled ? 'scale(1)' : 'scale(0.95)',
              }}
              strokeWidth={isFilled ? 2 : 1.5}
            />
          </div>
        );
      })}
    </div>
  );
}
