import { WaterCounter } from '@/components/water-tracker/WaterCounter';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--color-primary-50)] to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Daily Hydration Tracker
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Stay healthy, stay hydrated 💧
          </p>
        </div>

        {/* Water Counter Component */}
        <WaterCounter />
        
        {/* Info Section */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Track your daily water intake and build healthy hydration habits.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Your progress resets daily at midnight.
          </p>
        </div>
      </div>
    </div>
  );
}
