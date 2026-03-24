import { test, expect } from '@playwright/test';

test.describe('Water Tracker E2E Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('Test 1: Initial Load', async ({ page }) => {
    await page.goto('/');

    // Verify page title
    await expect(page).toHaveTitle(/Daily Hydration Tracker/);

    // Verify heading
    await expect(page.getByRole('heading', { name: /Today's Water Intake/i })).toBeVisible();

    // Verify counter shows 0 / 8
    await expect(page.locator('text=0')).toBeVisible();
    await expect(page.locator('text=/ 8')).toBeVisible();

    // Verify progress text
    await expect(page.locator('text=/8 glasses to go/i')).toBeVisible();

    // Verify Add Glass button
    const addButton = page.getByRole('button', { name: /Add Glass/i });
    await expect(addButton).toBeVisible();
    await expect(addButton).toBeEnabled();
  });

  test('Test 2: Add Water', async ({ page }) => {
    await page.goto('/');

    const addButton = page.getByRole('button', { name: /Add Glass/i });

    // Click once
    await addButton.click();
    await expect(page.locator('text=1')).toBeVisible();
    await expect(page.locator('text=/ 8')).toBeVisible();
    await expect(page.locator('text=/7 glasses to go/i')).toBeVisible();

    // Click again
    await addButton.click();
    await expect(page.locator('text=2')).toBeVisible();
    await expect(page.locator('text=/6 glasses to go/i')).toBeVisible();
  });

  test('Test 3: Reach Goal', async ({ page }) => {
    await page.goto('/');

    const addButton = page.getByRole('button', { name: /Add Glass/i });

    // Click 8 times to reach goal
    for (let i = 0; i < 8; i++) {
      await addButton.click();
      await page.waitForTimeout(100); // Small delay for animation
    }

    // Verify counter shows 8 / 8
    await expect(page.locator('text=8')).toBeVisible();

    // Verify congratulations message
    await expect(page.locator('text=/Congratulations! You reached your goal!/i')).toBeVisible();

    // Verify button is disabled and shows "Goal Reached!"
    const goalButton = page.getByRole('button', { name: /Goal Reached/i });
    await expect(goalButton).toBeVisible();
    await expect(goalButton).toBeDisabled();
  });

  test('Test 4: Data Persistence', async ({ page }) => {
    await page.goto('/');

    const addButton = page.getByRole('button', { name: /Add Glass/i });

    // Add 3 glasses
    for (let i = 0; i < 3; i++) {
      await addButton.click();
      await page.waitForTimeout(100);
    }

    // Verify count
    await expect(page.locator('text=3')).toBeVisible();

    // Reload page
    await page.reload();

    // Verify data persisted
    await expect(page.locator('text=3')).toBeVisible();
    await expect(page.locator('text=/ 8')).toBeVisible();
    await expect(page.locator('text=/5 glasses to go/i')).toBeVisible();
  });

  test('Test 5: Visual Feedback - Glass Icons', async ({ page }) => {
    await page.goto('/');

    // Count glass icons (should be 8)
    const glassIcons = page.locator('[aria-label*="Glass"]');
    await expect(glassIcons).toHaveCount(8);

    // Add one glass
    const addButton = page.getByRole('button', { name: /Add Glass/i });
    await addButton.click();
    await page.waitForTimeout(200);

    // Verify first glass is filled
    await expect(page.locator('[aria-label="Glass 1 filled"]')).toBeVisible();

    // Add another glass
    await addButton.click();
    await page.waitForTimeout(200);

    // Verify second glass is filled
    await expect(page.locator('[aria-label="Glass 2 filled"]')).toBeVisible();
  });

  test('Test 6: Progress Bar Updates', async ({ page }) => {
    await page.goto('/');

    // Get progress bar
    const progressBar = page.locator('[role="progressbar"]');
    await expect(progressBar).toBeVisible();

    // Initially should be 0%
    await expect(progressBar).toHaveAttribute('aria-valuenow', '0');

    // Add one glass (12.5%)
    const addButton = page.getByRole('button', { name: /Add Glass/i });
    await addButton.click();
    await page.waitForTimeout(200);

    // Progress should update
    const progress1 = await progressBar.getAttribute('aria-valuenow');
    expect(Number(progress1)).toBeGreaterThan(0);

    // Add 7 more glasses to reach 100%
    for (let i = 0; i < 7; i++) {
      await addButton.click();
      await page.waitForTimeout(100);
    }

    // Should be 100%
    await expect(progressBar).toHaveAttribute('aria-valuenow', '100');
  });

});
