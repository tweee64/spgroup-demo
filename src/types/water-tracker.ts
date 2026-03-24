export interface WaterTrackingData {
  currentIntake: number;
  dailyGoal: number;
  date: string;              // ISO date string (YYYY-MM-DD)
  lastUpdated: string;       // ISO timestamp
}

export interface WaterTrackerState extends WaterTrackingData {
  isGoalReached: boolean;
  progressPercentage: number;
  remainingGlasses: number;
  isAnimating: boolean;
}
