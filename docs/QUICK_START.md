# Quick Start Guide - Daily Hydration Tracker

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

### 3. Build for Production
```bash
npm run build
npm start
```

## Running Tests

### E2E Tests with Playwright

```bash
# Run all tests
npm run test:e2e

# Run tests in UI mode (interactive)
npm run test:e2e:ui

# Run specific test file
npx playwright test water-tracker.spec.ts
```

**Note**: The dev server must be running on port 3000 for tests to work.

## Using the App

### Track Your Water Intake

1. **View Your Progress**
   - See current intake count (e.g., "3 / 8")
   - Visual progress bar shows percentage toward goal
   - 8 glass icons show filled vs empty

2. **Add Water**
   - Click the "+ Add Glass" button
   - Counter increments immediately
   - Progress bar updates smoothly
   - Glass icons fill up one by one

3. **Reach Your Goal**
   - When you reach 8 glasses (or your custom goal)
   - Congratulations message appears
   - Button changes to "Goal Reached!" and becomes disabled

4. **Data Persistence**
   - Your progress is automatically saved
   - Refreshing the page maintains your count
   - Counter resets at midnight (local time)

## Key Features

- ✅ Default 8 glasses per day goal
- ✅ Visual progress tracking
- ✅ Smooth animations and feedback
- ✅ Automatic daily reset
- ✅ Works offline (localStorage)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Keyboard accessible

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## Troubleshooting

### Tests Not Running
- Ensure dev server is running: `npm run dev`
- Check that port 3000 is available
- Install Playwright browsers: `npx playwright install`

### Data Not Persisting
- Check browser localStorage is enabled
- Ensure you're not in private/incognito mode
- Try clearing browser cache and restarting

### Build Errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Ensure Node.js version is 20+ (`node --version`)

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Main dashboard page
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles + design tokens
├── components/
│   └── water-tracker/           # Water tracking components
│       ├── WaterCounter.tsx     # Main counter component
│       ├── AddWaterButton.tsx   # Add water button
│       ├── ProgressBar.tsx      # Progress visualization
│       ├── GlassIcons.tsx       # Glass icons display
│       └── useWaterTracking.ts  # State management hook
├── lib/
│   └── storage.ts               # localStorage utilities
└── types/
    └── water-tracker.ts         # TypeScript interfaces
```

## Next Steps

### Planned Features (Not Yet Implemented)
1. **Customize Goal**: Set your own daily water goal
2. **Reminders**: Optional push notifications
3. **Streaks**: Track consecutive days of success
4. **Badges**: Earn achievements for milestones

### Contributing
See the implementation plan in `docs/implementation-plans/01-water-intake-dashboard.md` for detailed technical specs.

## Support

For issues or questions, refer to:
- Implementation Summary: `docs/IMPLEMENTATION_SUMMARY.md`
- User Stories: `docs/stories/`
- Test Plans: `tests/e2e/water-tracker.test.md`
