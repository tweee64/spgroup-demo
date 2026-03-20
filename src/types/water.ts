export interface WaterIntake {
  date: string;                      // ISO date string (YYYY-MM-DD)
  glasses: number;                   // Number of glasses consumed
  goal: number;                      // Daily goal for this date
  timestamp: number;                 // Last update timestamp
}

export interface WaterTrackingState {
  glassesConsumed: number;          // Current glasses consumed today
  dailyGoal: number;                // Daily goal (default: 8)
  lastUpdated: Date;                // Last time water was added
  isAdding: boolean;                // Loading state for add action
  showSuccess: boolean;             // Show success feedback
  progress: number;                 // Percentage (0-100)
  isGoalReached: boolean;           // True if goal met
  remainingGlasses: number;         // Glasses left to reach goal
}

export interface WaterStats {
  currentStreak: number;             // Consecutive days meeting goal
  totalGlasses: number;              // All-time total
  averageDaily: number;              // Average per day
}
