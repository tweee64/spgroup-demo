# Water Tracker E2E Test Plan

## Test 1: Initial Load
1. Navigate to http://localhost:3000
2. Verify page title contains "Daily Hydration Tracker"
3. Verify "Today's Water Intake" heading is visible
4. Verify counter shows "0 / 8"
5. Verify progress bar shows 0%
6. Verify "8 glasses to go" message is visible
7. Verify "Add Glass" button is visible and enabled

## Test 2: Add Water
1. Navigate to http://localhost:3000
2. Click the "Add Glass" button
3. Verify counter shows "1 / 8"
4. Verify progress bar updates (approximately 12.5%)
5. Verify "7 glasses to go" message is visible
6. Click the "Add Glass" button again
7. Verify counter shows "2 / 8"
8. Verify progress bar updates (approximately 25%)
9. Verify "6 glasses to go" message is visible

## Test 3: Reach Goal
1. Navigate to http://localhost:3000
2. Click the "Add Glass" button 8 times
3. Verify counter shows "8 / 8"
4. Verify progress bar shows 100%
5. Verify congratulations message "Congratulations! You reached your goal!" is visible
6. Verify button changes to "Goal Reached!" and is disabled

## Test 4: Data Persistence
1. Navigate to http://localhost:3000
2. Click the "Add Glass" button 3 times
3. Verify counter shows "3 / 8"
4. Refresh the page
5. Verify counter still shows "3 / 8" (data persisted)
6. Verify progress bar still reflects 37.5% completion

## Test 5: Visual Feedback
1. Navigate to http://localhost:3000
2. Verify 8 glass icons are visible
3. Verify all glasses are empty (unfilled)
4. Click "Add Glass" button once
5. Verify first glass icon is filled
6. Click "Add Glass" button again
7. Verify second glass icon is filled
8. Verify visual distinction between filled and empty glasses

## Test 6: Responsive Design
1. Navigate to http://localhost:3000
2. Verify page layout on desktop view (1280x720)
3. Verify all elements are properly aligned
4. Verify button is accessible and clickable
