'use client';

interface GlassIconsProps {
  totalGlasses: number;
  filledGlasses: number;
}

export function GlassIcons({ totalGlasses, filledGlasses }: GlassIconsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-6">
      {Array.from({ length: totalGlasses }).map((_, index) => (
        <div
          key={index}
          className={`w-10 h-14 rounded-lg border-2 transition-all duration-300 ${
            index < filledGlasses
              ? 'bg-[var(--color-primary-500)] border-[var(--color-primary-600)]'
              : 'bg-transparent border-gray-300'
          }`}
          aria-label={`Glass ${index + 1}${index < filledGlasses ? ' filled' : ' empty'}`}
        >
          {/* Water fill animation */}
          {index < filledGlasses && (
            <div className="h-full w-full bg-gradient-to-t from-[var(--color-primary-600)] to-[var(--color-primary-500)] rounded-md" />
          )}
        </div>
      ))}
    </div>
  );
}
