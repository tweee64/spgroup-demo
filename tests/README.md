# E2E Testing Guide

This guide describes how to run end-to-end tests for the accommodation app.

## Setup

### Prerequisites
- Node.js installed
- Dependencies installed (`npm install`)
- Playwright browsers installed (`npx playwright install chromium`)

### Installation

The project comes with Playwright already configured. If you need to reinstall:

```bash
npm install -D @playwright/test
npx playwright install chromium
```

## Running Tests

### Run all E2E tests
```bash
npm run test:e2e
```

This will:
1. Build the production version of the app
2. Start the Next.js server
3. Run all Playwright tests
4. Generate an HTML report

### Run tests with UI mode (interactive)
```bash
npm run test:e2e:ui
```

This opens the Playwright UI where you can:
- See tests run in real-time
- Debug individual tests
- Step through test execution
- View browser screenshots

### Run tests in headed mode (see the browser)
```bash
npm run test:e2e:headed
```

This runs tests with a visible browser window so you can see the interactions.

## Test Files

The test suite includes three main test files:

### 1. Home Page Tests (`tests/home.spec.ts`)
Tests for the home page functionality:
- Hero section display
- Featured listings
- Navigation to search page
- Navigation to listing details

### 2. Search Tests (`tests/search.spec.ts`)
Tests for search and filtering:
- Search by query
- Filter by location
- Filter by price range
- Filter by room type
- Filter by facilities
- Clear filters
- No results handling
- Mobile filter button

### 3. Listing Detail Tests (`tests/listing-detail.spec.ts`)
Tests for individual listing pages:
- Listing details display
- Photo gallery navigation
- Lightbox functionality
- Property information sections
- Booking panel
- Booking request submission
- 404 handling for non-existent listings

## Test Documentation

A high-level test scenario is documented in `tests/user-flow.md` which describes:
- Complete user journey from home to booking
- Step-by-step test instructions
- Expected results
- Pass/fail criteria

## Manual Testing

If you prefer to test manually:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000 in your browser

3. Follow the test scenarios in `tests/user-flow.md`

## Test Coverage

The current test suite covers:
- ✅ Home page display and navigation
- ✅ Search functionality with all filters
- ✅ Listing card display
- ✅ Listing detail page
- ✅ Photo gallery with lightbox
- ✅ Booking request form
- ✅ Form validation
- ✅ 404 error pages
- ✅ Responsive design (mobile viewport)

## Debugging Failed Tests

If a test fails:

1. Check the console output for specific error messages
2. Look at the HTML report: `npx playwright show-report`
3. Run the specific failing test:
   ```bash
   npx playwright test tests/home.spec.ts
   ```
4. Use headed mode to see what's happening:
   ```bash
   npx playwright test tests/home.spec.ts --headed
   ```
5. Use debug mode to step through:
   ```bash
   npx playwright test tests/home.spec.ts --debug
   ```

## Continuous Integration

The tests are configured to run in CI environments. The configuration:
- Uses 1 worker in CI for consistency
- Retries failed tests up to 2 times
- Generates traces on first retry for debugging
- Starts the production server automatically

## Writing New Tests

To add new tests:

1. Create a new file in `/tests/` with the `.spec.ts` extension
2. Import the test utilities:
   ```typescript
   import { test, expect } from '@playwright/test';
   ```
3. Write your test cases using the Page Object pattern:
   ```typescript
   test('should do something', async ({ page }) => {
     await page.goto('/your-page');
     await expect(page.getByRole('heading')).toBeVisible();
   });
   ```

## Best Practices

- Use semantic locators (getByRole, getByLabel) over CSS selectors
- Add wait times for dynamic content (`page.waitForTimeout()`)
- Test both happy paths and error cases
- Keep tests independent (each test should work standalone)
- Use descriptive test names
- Add comments for complex interactions

## Troubleshooting

### Tests timing out
- Increase timeout in `playwright.config.ts`
- Add explicit waits for slow operations
- Check that the server starts properly

### Element not found errors
- Verify the element exists in the actual page
- Check if you need to wait for page load
- Use `--headed` mode to see what's happening

### Server not starting
- Check if port 3000 is already in use
- Try building manually: `npm run build`
- Check for build errors in the output

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Writing Tests](https://playwright.dev/docs/writing-tests)
- [Debugging Tests](https://playwright.dev/docs/debug)
