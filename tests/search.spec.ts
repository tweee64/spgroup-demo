import { test, expect } from '@playwright/test';

test.describe('Search Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/search');
  });

  test('should display search page with filters', async ({ page }) => {
    // Check page heading
    await expect(page.getByRole('heading', { name: /search accommodations/i })).toBeVisible();

    // Check search bar
    await expect(page.getByPlaceholder(/search by title/i)).toBeVisible();

    // Check filter sections
    await expect(page.getByText('Location')).toBeVisible();
    await expect(page.getByText('Price Range')).toBeVisible();
    await expect(page.getByText('Room Type')).toBeVisible();
    await expect(page.getByText('Facilities')).toBeVisible();

    // Check results count
    await expect(page.getByText(/showing \d+ accommodation/i)).toBeVisible();
  });

  test('should filter by search query', async ({ page }) => {
    // Type in search box
    await page.getByPlaceholder(/search by title/i).fill('Studio');

    // Wait for results to update
    await page.waitForTimeout(500);

    // Should show filtered results
    const resultsText = await page.getByText(/showing \d+ accommodation/i).textContent();
    expect(resultsText).toContain('accommodation');

    // Should show studio listings
    await expect(page.getByText(/studio/i).first()).toBeVisible();
  });

  test('should filter by location', async ({ page }) => {
    // Fill location filter
    await page.getByPlaceholder(/city or area/i).fill('London');

    // Wait for results
    await page.waitForTimeout(500);

    // Should show London listings
    await expect(page.getByText(/london/i).first()).toBeVisible();
  });

  test('should filter by price range', async ({ page }) => {
    // Set price minimum
    await page.locator('input[type="number"]').first().fill('500');
    
    // Set price maximum
    await page.locator('input[type="number"]').nth(1).fill('1000');

    // Wait for results
    await page.waitForTimeout(500);

    // Should show price range
    await expect(page.getByText(/£500.*£1,000/)).toBeVisible();
  });

  test('should filter by room type', async ({ page }) => {
    // Click "Studio" checkbox
    await page.getByText('Studio').click();

    // Wait for results
    await page.waitForTimeout(500);

    // Should show studio listings
    const listings = page.locator('[href^="/listings/"]');
    await expect(listings.first()).toBeVisible();
  });

  test('should filter by facilities', async ({ page }) => {
    // Expand facilities if needed and click Wi-Fi
    await page.getByText('Wi-Fi').click();

    // Wait for results
    await page.waitForTimeout(500);

    // Should show listings with Wi-Fi
    await expect(page.getByText(/wi-fi/i).first()).toBeVisible();
  });

  test('should clear all filters', async ({ page }) => {
    // Apply some filters
    await page.getByPlaceholder(/search by title/i).fill('Studio');
    await page.getByPlaceholder(/city or area/i).fill('London');
    await page.getByText('Studio').click();

    // Click clear filters
    await page.getByRole('button', { name: /clear all filters/i }).click();

    // Filters should be cleared
    await expect(page.getByPlaceholder(/search by title/i)).toHaveValue('');
    await expect(page.getByPlaceholder(/city or area/i)).toHaveValue('');
  });

  test('should show no results message when no matches', async ({ page }) => {
    // Search for something that doesn't exist
    await page.getByPlaceholder(/search by title/i).fill('NonexistentListing12345');

    // Wait for results
    await page.waitForTimeout(500);

    // Should show no results message
    await expect(page.getByText(/no results found/i)).toBeVisible();
    await expect(page.getByText(/try adjusting your search/i)).toBeVisible();
  });

  test('should display mobile filter button on small screens', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Mobile filter button should be visible
    await expect(page.getByRole('button', { name: /filters/i })).toBeVisible();
  });
});
