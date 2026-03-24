import { WaterTrackingData } from '@/types/water-tracker';

const STORAGE_KEY = 'water-tracker-data';

export function saveToStorage(data: WaterTrackingData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
  }
}

export function loadFromStorage(): WaterTrackingData | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    
    const data = JSON.parse(stored) as WaterTrackingData;
    
    // Validate the data structure
    if (
      typeof data.currentIntake !== 'number' ||
      typeof data.dailyGoal !== 'number' ||
      typeof data.date !== 'string' ||
      typeof data.lastUpdated !== 'string'
    ) {
      console.warn('Invalid data structure in localStorage, resetting...');
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Failed to load from localStorage:', error);
    return null;
  }
}

export function clearStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear localStorage:', error);
  }
}

export function getDefaultState(): WaterTrackingData {
  const today = new Date().toISOString().split('T')[0];
  return {
    currentIntake: 0,
    dailyGoal: 8,
    date: today,
    lastUpdated: new Date().toISOString(),
  };
}
