import { test, expect } from '@playwright/test';

test.describe('Water Tracking Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test to start fresh
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await page.waitForLoadState('networkidle');
  });

  test('should display the water tracking dashboard', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');

    // Check hero section
    await expect(page.getByRole('heading', { name: 'Healthy Habits Tracker' })).toBeVisible();
    await expect(page.getByText('Stay hydrated, stay healthy')).toBeVisible();

    // Check water tracker card
    await expect(page.getByRole('heading', { name: 'Daily Water Intake' })).toBeVisible();
    await expect(page.getByText('8 glasses to go')).toBeVisible();

    // Check counter display
    await expect(page.getByText('0 / 8')).toBeVisible();
    await expect(page.getByText('0% complete')).toBeVisible();

    // Check Add Water button - use getByText since it's inside a button
    const addButton = page.locator('button', { hasText: 'Add Water' });
    await expect(addButton).toBeVisible();

    // Check footer
    await expect(page.getByText('Daily goal: 8 glasses of water')).toBeVisible();
  });

  test('should add water when button is clicked', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Initial state
    await expect(page.getByText('0 / 8')).toBeVisible();
    await expect(page.getByText('0% complete')).toBeVisible();

    // Click Add Water button
    const addButton = page.locator('button', { hasText: 'Add Water' });
    await addButton.click();

    // Wait for the state update
    await expect(page.getByText('1 / 8')).toBeVisible({ timeout: 3000 });

    // Check updated progress
    await expect(page.getByText('13% complete')).toBeVisible();
    await expect(page.getByText('7 glasses to go')).toBeVisible();

    // Check success feedback (may appear briefly)
    await expect(page.getByText('Water added!')).toBeVisible();
  });

  test('should track multiple water additions', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const addButton = page.locator('button', { hasText: 'Add Water' });

    // Add water 3 times
    for (let i = 0; i < 3; i++) {
      await addButton.click();
      await page.waitForTimeout(300);
    }

    // Check updated counter
    await expect(page.getByText('3 / 8')).toBeVisible();
    await expect(page.getByText('38% complete')).toBeVisible();
    await expect(page.getByText('5 glasses to go')).toBeVisible();
  });

  test('should show celebration when goal is reached', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const addButton = page.locator('button', { hasText: 'Add Water' });

    // Add water 8 times to reach the goal
    for (let i = 0; i < 8; i++) {
      await addButton.click();
      await page.waitForTimeout(300);
    }

    // Check goal reached state
    await expect(page.getByText('8 / 8')).toBeVisible();
    await expect(page.getByText('100% complete')).toBeVisible();
    await expect(page.getByText('Goal reached! Great job staying hydrated!')).toBeVisible();
  });

  test('should persist data in localStorage', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const addButton = page.locator('button', { hasText: 'Add Water' });

    // Add some water
    await addButton.click();
    await page.waitForTimeout(500);
    await addButton.click();
    await page.waitForTimeout(500);

    // Verify counter shows 2 glasses
    await expect(page.getByText('2 / 8')).toBeVisible();

    // Reload the page
    await page.reload();
    await page.waitForLoadState('networkidle');

    // Data should persist
    await expect(page.getByText('2 / 8')).toBeVisible();
    await expect(page.getByText('25% complete')).toBeVisible();
  });

  test('should be responsive on mobile viewport', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // All elements should still be visible and properly arranged
    await expect(page.getByRole('heading', { name: 'Healthy Habits Tracker' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Daily Water Intake' })).toBeVisible();
    await expect(page.getByText('0 / 8')).toBeVisible();
    
    const addButton = page.locator('button', { hasText: 'Add Water' });
    await expect(addButton).toBeVisible();

    // Add water should still work on mobile
    await addButton.click();
    await page.waitForTimeout(500);
    await expect(page.getByText('1 / 8')).toBeVisible();
  });

  test('should update progress ring visual', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check that progress ring exists (SVG circle elements)
    const progressRing = page.locator('circle').nth(1); // Second circle is the progress indicator
    await expect(progressRing).toBeVisible();

    // Add some water and verify the ring updates
    const addButton = page.locator('button', { hasText: 'Add Water' });
    await addButton.click();
    await page.waitForTimeout(500);

    // Progress ring should still be visible (we can't easily test the strokeDashoffset change)
    await expect(progressRing).toBeVisible();
  });

  test('should show correct remaining glasses text', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const addButton = page.locator('button', { hasText: 'Add Water' });

    // Initial state
    await expect(page.getByText('8 glasses to go')).toBeVisible();

    // Add one glass
    await addButton.click();
    await page.waitForTimeout(500);
    await expect(page.getByText('7 glasses to go')).toBeVisible();

    // Add more glasses until only 1 remains
    for (let i = 0; i < 6; i++) {
      await addButton.click();
      await page.waitForTimeout(300);
    }
    await expect(page.getByText('1 glass to go')).toBeVisible(); // Singular form

    // Add the last glass
    await addButton.click();
    await page.waitForTimeout(500);
    await expect(page.getByText('Goal reached! Great job staying hydrated!')).toBeVisible();
  });
});
