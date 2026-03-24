'use client';

interface AddWaterButtonProps {
  onAdd: () => void;
  disabled?: boolean;
  isAnimating?: boolean;
}

export function AddWaterButton({ onAdd, disabled = false, isAnimating = false }: AddWaterButtonProps) {
  return (
    <button
      onClick={onAdd}
      disabled={disabled}
      className={`
        w-full mt-8 px-8 py-4 rounded-xl font-semibold text-white text-lg
        transition-all duration-150
        ${disabled 
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] active:scale-95'
        }
        ${isAnimating ? 'scale-95' : 'scale-100'}
        focus:outline-none focus:ring-4 focus:ring-[var(--color-primary-100)]
      `}
      aria-label="Add one glass of water"
    >
      {disabled ? '🎉 Goal Reached!' : '+ Add Glass'}
    </button>
  );
}
