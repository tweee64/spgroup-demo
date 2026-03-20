# Running E2E Tests

## Quick Start

```bash
# Install dependencies (if not already installed)
npm install

# Run all Playwright tests
npm test
```

## Test Commands

```bash
# Run all tests in headless mode
npm test

# Run tests with interactive UI
npm run test:ui

# Run tests in headed mode (see browser)
npm run test:headed

# Run specific test file
npx playwright test water-tracking

# Run tests in debug mode
npx playwright test --debug

# Generate HTML report
npx playwright show-report
```

## Test Results

Current status: **✅ All 8 tests passing**

```
Running 8 tests using 1 worker

✓ should display the water tracking dashboard (1.8s)
✓ should add water when button is clicked (2.0s)
✓ should track multiple water additions (2.7s)
✓ should show celebration when goal is reached (4.3s)
✓ should persist data in localStorage (3.3s)
✓ should be responsive on mobile viewport (2.1s)
✓ should update progress ring visual (2.2s)
✓ should show correct remaining glasses text (4.6s)

8 passed (24.5s)
```

## Test Coverage

The test suite validates:

1. **UI Rendering** - All elements display correctly
2. **User Interactions** - Button clicks work as expected
3. **State Management** - Counter updates properly
4. **Data Persistence** - localStorage works correctly
5. **Goal Tracking** - Progress and celebration features
6. **Responsive Design** - Mobile viewport functionality
7. **Visual Elements** - SVG progress ring rendering
8. **Text Handling** - Proper singular/plural grammar

## Prerequisites

- Node.js 20.x or later
- npm 9.x or later
- Chromium browser (installed automatically with Playwright)

## Troubleshooting

### Port Already in Use

If you see "port already in use" error:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or configure different port in playwright.config.ts
```

### Tests Failing

```bash
# Clear test cache and retry
rm -rf test-results playwright-report
npm test

# Run single test for debugging
npx playwright test -g "should add water"
```

### Browser Not Found

```bash
# Reinstall Playwright browsers
npx playwright install chromium
```

## Test Configuration

Configuration file: `playwright.config.ts`

- Base URL: `http://localhost:3000`
- Browser: Chromium
- Timeout: 30 seconds per test
- Retries: 2 (in CI), 0 (locally)
- Screenshots: On failure
- Trace: On first retry

## Documentation

- **Test Plan**: See `docs/test-plans/water-tracking-e2e-tests.md`
- **Implementation**: See `docs/IMPLEMENTATION_SUMMARY.md`
- **User Stories**: See `docs/stories/`

## CI/CD Integration

To run tests in CI:

```yaml
# GitHub Actions example
- name: Install dependencies
  run: npm ci

- name: Install Playwright
  run: npx playwright install --with-deps chromium

- name: Run tests
  run: npm test
```

## Need Help?

- [Playwright Documentation](https://playwright.dev)
- [Next.js Testing Guide](https://nextjs.org/docs/testing)
- Check test-results folder for failure screenshots and traces
