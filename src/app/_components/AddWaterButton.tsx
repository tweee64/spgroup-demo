'use client';

interface AddWaterButtonProps {
  onClick: () => void;
  isAdding: boolean;
  disabled?: boolean;
}

export const AddWaterButton: React.FC<AddWaterButtonProps> = ({ 
  onClick, 
  isAdding, 
  disabled = false 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isAdding}
      className="group relative px-8 py-4 bg-blue-500 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
      aria-label="Add one glass of water"
    >
      {isAdding ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Adding...
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Water
        </span>
      )}
    </button>
  );
};
