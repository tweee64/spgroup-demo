# Water Tracking Dashboard - E2E Test Plan

## Test Overview

This document outlines the end-to-end testing strategy for the Water Tracking Dashboard feature.

## Test Environment

- **Framework**: Playwright
- **Browser**: Chromium (Desktop Chrome)
- **Base URL**: http://localhost:3000
- **Test Files**: `tests/water-tracking.spec.ts`

## Test Scenarios

### 1. Dashboard Display Test
**Purpose**: Verify all UI elements are visible and properly rendered

**Steps**:
1. Navigate to the home page
2. Verify hero section displays "Healthy Habits Tracker"
3. Verify subtitle "Stay hydrated, stay healthy" is visible
4. Verify "Daily Water Intake" heading is present
5. Verify counter shows "0 / 8 glasses"
6. Verify "Add Water" button is visible
7. Verify daily goal information is displayed

**Expected Result**: All dashboard elements are visible and properly arranged

---

### 2. Add Water Functionality Test
**Purpose**: Verify water can be added and counter updates correctly

**Steps**:
1. Navigate to the home page
2. Verify initial counter shows "0 / 8"
3. Click "Add Water" button
4. Wait for state update
5. Verify counter shows "1 / 8"
6. Verify progress shows "13% complete"
7. Verify remaining shows "7 glasses to go"
8. Verify success feedback "Water added!" appears

**Expected Result**: Counter increments correctly with visual feedback

---

### 3. Multiple Additions Test
**Purpose**: Verify multiple water additions work correctly

**Steps**:
1. Navigate to the home page
2. Click "Add Water" button 3 times
3. Wait for updates between clicks
4. Verify counter shows "3 / 8"
5. Verify progress shows "38% complete"
6. Verify remaining shows "5 glasses to go"

**Expected Result**: Multiple additions accumulate correctly

---

### 4. Goal Reached Test
**Purpose**: Verify celebration appears when daily goal is reached

**Steps**:
1. Navigate to the home page
2. Click "Add Water" button 8 times
3. Wait for updates between clicks
4. Verify counter shows "8 / 8"
5. Verify progress shows "100% complete"
6. Verify celebration message appears: "Goal reached! Great job staying hydrated!"

**Expected Result**: Goal completion is celebrated with special message

---

### 5. Data Persistence Test
**Purpose**: Verify water intake data persists across page reloads

**Steps**:
1. Navigate to the home page
2. Click "Add Water" button 2 times
3. Verify counter shows "2 / 8"
4. Reload the page
5. Verify counter still shows "2 / 8"
6. Verify progress shows "25% complete"

**Expected Result**: Data persists in localStorage and survives reload

---

### 6. Loading State Test
**Purpose**: Verify button shows loading state during addition

**Steps**:
1. Navigate to the home page
2. Click "Add Water" button
3. Verify button is disabled during processing
4. Wait for operation to complete
5. Verify button is enabled again

**Expected Result**: Button properly handles loading state

---

### 7. Responsive Design Test
**Purpose**: Verify dashboard works on mobile viewport

**Steps**:
1. Set viewport to mobile size (375x667)
2. Navigate to the home page
3. Verify all elements are visible
4. Click "Add Water" button
5. Verify functionality works on mobile

**Expected Result**: Dashboard is fully functional on mobile devices

---

### 8. Progress Ring Visual Test
**Purpose**: Verify circular progress ring displays correctly

**Steps**:
1. Navigate to the home page
2. Verify SVG circle elements are present
3. Add water
4. Verify progress ring remains visible after update

**Expected Result**: Progress ring visualizes progress correctly

---

### 9. Singular/Plural Text Test
**Purpose**: Verify correct grammar for remaining glasses

**Steps**:
1. Navigate to the home page
2. Verify "8 glasses to go" (plural)
3. Add water 7 times
4. Verify "1 glass to go" (singular)
5. Add final glass
6. Verify goal reached message appears

**Expected Result**: Text correctly uses singular/plural forms

---

## Test Execution

### Run All Tests
```bash
npm test
```

### Run Tests with UI
```bash
npm run test:ui
```

### Run Tests in Headed Mode
```bash
npm run test:headed
```

## Test Data

- **Default Daily Goal**: 8 glasses
- **Initial Counter**: 0 glasses
- **Test Viewport (Mobile)**: 375x667
- **Test Viewport (Desktop)**: 1280x720

## Success Criteria

- ✅ All tests pass consistently
- ✅ No console errors during test execution
- ✅ All UI elements render correctly
- ✅ Data persists correctly in localStorage
- ✅ Responsive design works on all viewport sizes
- ✅ Animations and transitions are smooth
- ✅ Accessibility features work correctly

## Known Limitations

- Tests clear localStorage before each run to ensure clean state
- Animation timings may vary slightly between runs
- Network-based font loading is disabled to avoid external dependencies

## Future Test Enhancements

- [ ] Add tests for custom daily goal setting
- [ ] Add tests for dark mode functionality
- [ ] Add tests for keyboard navigation
- [ ] Add tests for screen reader accessibility
- [ ] Add tests for daily reset functionality
- [ ] Add performance testing for animations
- [ ] Add visual regression testing
