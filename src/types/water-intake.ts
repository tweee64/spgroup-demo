export interface WaterIntakeState {
  consumed: number;
  goal: number;
  dateKey: string; // "YYYY-MM-DD"
}

export interface UseWaterIntakeReturn {
  consumed: number;
  goal: number;
  isGoalReached: boolean;
  progressPercent: number;
  logGlass: () => void;
  resetIntake: () => void;
}
