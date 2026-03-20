import { WaterTracker } from './_components/WaterTracker';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <header className="text-center py-12 md:py-16 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Healthy Habits Tracker
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
          Stay hydrated, stay healthy 💧
        </p>
        <p className="text-base md:text-lg text-gray-500 dark:text-gray-400">
          Track your daily water intake and build a healthier routine
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <WaterTracker />
      </main>

      {/* Footer */}
      <footer className="text-center py-8 px-4 text-sm text-gray-500 dark:text-gray-400">
        <p>💡 Tip: Drinking 8 glasses of water daily helps maintain optimal health</p>
      </footer>
    </div>
  );
}
