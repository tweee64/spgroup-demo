# 01 Water Tracking Dashboard - Implementation Planning

## User Story

As a user, I want to see a water tracking dashboard on the landing page with a visual counter, so that I can easily track my daily water intake and stay motivated to reach my hydration goal.

## Pre-conditions

- Next.js 16.2.0 application is set up with App Router
- Tailwind CSS v4 is configured for styling
- TypeScript is configured with strict mode
- Current page.tsx exists at src/app/page.tsx

## Design

### Visual Layout

The water tracking dashboard will be the main feature on the landing page, consisting of:

**Main Components:**
- Hero section with motivational header
- Water counter card (central feature)
- Progress visualization (circular or linear progress indicator)
- Add water button (primary call-to-action)
- Daily goal display
- Current progress text

**Layout Structure:**
- Centered vertical layout
- Mobile-first responsive design
- Card-based container for the water tracker
- Clear visual hierarchy emphasizing the counter

**Key UI Elements:**
- Large water drop icon or glass icon
- Numerical counter (e.g., "5 / 8 glasses")
- Visual progress indicator (circular ring or progress bar)
- "Add Water" button prominently displayed
- Motivational text/messages

### Color and Typography

**Background Colors:**
- Primary: bg-white dark:bg-gray-900
- Card background: bg-blue-50 dark:bg-gray-800
- Accent: bg-blue-500 hover:bg-blue-600
- Success: bg-green-100 dark:bg-green-900

**Typography:**
- Page heading: font-inter text-4xl font-bold text-gray-900 dark:text-white
- Counter display: font-inter text-6xl font-bold text-blue-600 dark:text-blue-400
- Goal text: font-inter text-xl text-gray-600 dark:text-gray-300
- Button text: text-white font-semibold

**Component-Specific:**
- Water card: bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 shadow-xl rounded-3xl
- Add button: bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 shadow-lg
- Progress ring: stroke-blue-500 (filled), stroke-gray-200 (unfilled)

### Interaction Patterns

**Add Water Button Interaction:**
- Hover: Background transition to darker blue (150ms ease), subtle scale (1.02)
- Click: Brief scale down to 0.98, haptic feedback (if mobile)
- Loading: Show spinner, disable interactions
- Success: Brief success animation (checkmark or water splash)
- Accessibility: Focus ring, keyboard navigation (Space/Enter)

**Counter Update Animation:**
- Number increment: Count-up animation (300ms ease-out)
- Progress ring: Smooth arc transition (500ms ease-in-out)
- Success state: Celebratory animation when goal reached
- Visual feedback: Pulse effect on increment

### Measurements and Spacing

**Container:**
```
max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12
```

**Component Spacing:**
```
- Vertical rhythm: space-y-8
- Card padding: p-8 md:p-12
- Button padding: px-8 py-4
- Section padding: py-16 md:py-24
```

**Counter Display:**
```
- Counter size: w-64 h-64 md:w-80 md:h-80
- Progress ring: stroke-width: 8
- Icon size: w-16 h-16
```

### Responsive Behavior

**Desktop (lg: 1024px+):**
```
- Container: max-w-2xl centered
- Counter: w-80 h-80
- Typography: text-6xl for counter
- Layout: Single column, generous spacing
```

**Tablet (md: 768px - 1023px):**
```
- Container: max-w-xl
- Counter: w-72 h-72
- Typography: text-5xl for counter
- Spacing: Reduced padding (p-8)
```

**Mobile (sm: < 768px):**
```
- Full-width card with padding
- Counter: w-64 h-64
- Typography: text-4xl for counter
- Stack layout: flex flex-col
- Reduced spacing throughout
```

## Technical Requirements

### Component Structure

```
src/app/
├── page.tsx                          # Main landing page with water tracker
└── _components/
    ├── WaterTracker.tsx              # Main water tracking component
    ├── WaterCounter.tsx              # Counter display with progress ring
    ├── AddWaterButton.tsx            # Button to add water intake
    └── useWaterTracking.ts           # Custom hook for water tracking logic
```

### Required Components

- WaterTracker (Main container) ⬜
- WaterCounter (Visual counter) ⬜
- AddWaterButton (Action button) ⬜
- useWaterTracking (Custom hook) ⬜

### State Management Requirements

```typescript
interface WaterTrackingState {
  // Current state
  glassesConsumed: number;          // Current glasses consumed today
  dailyGoal: number;                // Daily goal (default: 8)
  lastUpdated: Date;                // Last time water was added
  
  // UI States
  isAdding: boolean;                // Loading state for add action
  showSuccess: boolean;             // Show success feedback
  
  // Computed values
  progress: number;                 // Percentage (0-100)
  isGoalReached: boolean;           // True if goal met
  remainingGlasses: number;         // Glasses left to reach goal
}

// State Actions
const actions = {
  addWater: (glasses?: number) => void;     // Add water (default: 1 glass)
  setDailyGoal: (goal: number) => void;     // Update daily goal
  resetDaily: () => void;                    // Reset for new day
  loadFromStorage: () => void;               // Load persisted data
}
```

## Acceptance Criteria

### Layout & Content

1. Hero Section
   ```
   - App title: "Healthy Habits Tracker"
   - Subtitle: "Stay hydrated, stay healthy"
   - Motivational tagline
   - Centered layout
   ```

2. Water Tracker Card
   ```
   - Prominent card with gradient background
   - Rounded corners (rounded-3xl)
   - Shadow for depth (shadow-xl)
   - Centered on page
   - Responsive padding
   ```

3. Counter Display
   ```
   - Large numerical display (X / Y glasses)
   - Circular progress ring visualization
   - Water drop or glass icon
   - Color changes based on progress
   - Smooth animations on update
   ```

### Functionality

1. Water Tracking Core

   - [ ] Display current glasses consumed vs daily goal
   - [ ] Default daily goal is set to 8 glasses
   - [ ] Counter starts at 0 glasses at beginning of day
   - [ ] Progress percentage calculated correctly (consumed / goal * 100)

2. Add Water Feature

   - [ ] "Add Water" button is prominent and accessible
   - [ ] Clicking button increments counter by 1 glass
   - [ ] Counter updates immediately with smooth animation
   - [ ] Success feedback shown briefly after adding
   - [ ] Button disabled while processing to prevent double-clicks

3. Visual Progress Indicator

   - [ ] Circular progress ring shows percentage completion
   - [ ] Progress ring animates smoothly when updated
   - [ ] Color changes based on progress (e.g., blue → green when complete)
   - [ ] Visual celebration when daily goal is reached
   - [ ] Clear distinction between completed and remaining progress

### Navigation Rules

- Landing page is the main entry point (/)
- Water tracker is the primary focus of the page
- No navigation required for basic functionality
- Future: Settings link for customizing goal

### Error Handling

- Handle localStorage access failures gracefully (privacy mode)
- Default to in-memory state if persistence fails
- Show user-friendly error messages for any failures
- Prevent negative values or invalid inputs

## Modified Files

```
src/app/
├── page.tsx ⬜                       # Update to use WaterTracker component
└── _components/
    ├── WaterTracker.tsx ⬜           # Main water tracking container
    ├── WaterCounter.tsx ⬜           # Counter and progress visualization
    ├── AddWaterButton.tsx ⬜         # Add water button component
    └── useWaterTracking.ts ⬜        # State management hook
src/types/
    └── water.ts ⬜                   # TypeScript interfaces
```

## Status

⬜ NOT STARTED

1. Setup & Configuration

   - [ ] Create _components directory
   - [ ] Create types directory
   - [ ] Define TypeScript interfaces for water tracking
   - [ ] Set up component file structure

2. Layout Implementation

   - [ ] Update page.tsx with new layout
   - [ ] Create WaterTracker main container
   - [ ] Implement responsive card design
   - [ ] Add hero section with branding

3. Feature Implementation

   - [ ] Create useWaterTracking custom hook
   - [ ] Implement WaterCounter component with progress ring
   - [ ] Create AddWaterButton component
   - [ ] Add localStorage persistence
   - [ ] Implement animations and transitions
   - [ ] Add success feedback and celebrations

4. Testing
   - [ ] Manual testing: Add water functionality
   - [ ] Manual testing: Counter updates correctly
   - [ ] Manual testing: Progress visualization works
   - [ ] Manual testing: Responsive design on mobile/tablet/desktop
   - [ ] Manual testing: localStorage persistence
   - [ ] Manual testing: Goal reached celebration

## Dependencies

- Next.js 16.2.0 (already installed)
- React 19.2.4 (already installed)
- Tailwind CSS v4 (already configured)
- TypeScript (already configured)

## Related Stories

- 02-add-water-intake.md (Covered in this implementation)
- 03-customizable-daily-water-goal.md (Future enhancement)
- 04-optional-push-notifications.md (Future feature)
- 05-daily-activity-streaks-badges.md (Future feature)

## Notes

### Technical Considerations

1. **Local Storage Strategy**: Use localStorage to persist daily water intake. Key format: `water_tracker_YYYY-MM-DD`. Automatically reset counter at midnight.

2. **Date Handling**: Check current date on load and reset if day has changed. Use local timezone for accurate day boundaries.

3. **State Management**: Start with React hooks (useState, useEffect). No need for complex state management for this simple feature.

4. **Animation Performance**: Use CSS transitions and transforms for smooth animations. Consider using framer-motion if more complex animations are needed later.

5. **Progressive Enhancement**: Ensure core functionality works without JavaScript for basic display, enhance with interactivity progressively.

### Business Requirements

- Water tracking is the #1 priority feature
- Keep implementation simple and focused
- Dashboard must be visually appealing and motivating
- User experience should encourage daily use
- Default goal of 8 glasses is industry standard recommendation

### API Integration

Not required for initial implementation. Data stored locally.

#### Type Definitions

```typescript
interface WaterIntake {
  date: string;                      // ISO date string (YYYY-MM-DD)
  glasses: number;                   // Number of glasses consumed
  goal: number;                      // Daily goal for this date
  timestamp: number;                 // Last update timestamp
}

interface WaterStats {
  currentStreak: number;             // Consecutive days meeting goal
  totalGlasses: number;              // All-time total
  averageDaily: number;              // Average per day
}
```

### Custom Hook Implementation

```typescript
const useWaterTracking = () => {
  const [glassesConsumed, setGlassesConsumed] = useState(0);
  const [dailyGoal, setDailyGoal] = useState(8);
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const stored = localStorage.getItem(`water_tracker_${today}`);
    if (stored) {
      const data = JSON.parse(stored);
      setGlassesConsumed(data.glasses || 0);
      setDailyGoal(data.goal || 8);
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const data = { glasses: glassesConsumed, goal: dailyGoal, timestamp: Date.now() };
    localStorage.setItem(`water_tracker_${today}`, JSON.stringify(data));
  }, [glassesConsumed, dailyGoal]);

  const addWater = useCallback(async (glasses = 1) => {
    setIsAdding(true);
    // Simulate brief processing time for smooth UX
    await new Promise(resolve => setTimeout(resolve, 200));
    
    setGlassesConsumed(prev => prev + glasses);
    setShowSuccess(true);
    setIsAdding(false);
    
    // Hide success message after 2 seconds
    setTimeout(() => setShowSuccess(false), 2000);
  }, []);

  const progress = Math.min((glassesConsumed / dailyGoal) * 100, 100);
  const isGoalReached = glassesConsumed >= dailyGoal;
  const remainingGlasses = Math.max(dailyGoal - glassesConsumed, 0);

  return {
    glassesConsumed,
    dailyGoal,
    progress,
    isGoalReached,
    remainingGlasses,
    isAdding,
    showSuccess,
    addWater,
    setDailyGoal,
  };
};
```

## Testing Requirements

### Integration Tests (Target: 80% Coverage)

1. Core Functionality Tests

```typescript
describe('Water Tracking', () => {
  it('should initialize with 0 glasses consumed', () => {
    // Test implementation
  });

  it('should add one glass when add button is clicked', () => {
    // Test implementation
  });

  it('should calculate progress percentage correctly', () => {
    // Test implementation
  });
  
  it('should reach goal when glasses consumed equals daily goal', () => {
    // Test implementation
  });
});
```

2. Persistence Tests

```typescript
describe('Data Persistence', () => {
  it('should save water intake to localStorage', () => {
    // Test implementation
  });

  it('should load water intake from localStorage on mount', () => {
    // Test implementation
  });

  it('should reset counter for new day', () => {
    // Test implementation
  });
});
```

3. Edge Cases

```typescript
describe('Edge Cases', () => {
  it('should handle localStorage not available gracefully', () => {
    // Test implementation
  });

  it('should prevent going over reasonable maximum (e.g., 20 glasses)', () => {
    // Test implementation
  });

  it('should handle rapid button clicks (debouncing)', () => {
    // Test implementation
  });
});
```

### Manual Testing Checklist

- [ ] Counter starts at 0 on first visit
- [ ] Add button increments counter
- [ ] Progress ring fills correctly
- [ ] Goal reached shows celebration
- [ ] Data persists on page reload
- [ ] Counter resets on new day
- [ ] Responsive on mobile devices
- [ ] Responsive on tablets
- [ ] Responsive on desktop
- [ ] Dark mode works correctly
- [ ] Animations are smooth
- [ ] Success feedback is clear
