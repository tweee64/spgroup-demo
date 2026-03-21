import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display hero section and featured listings', async ({ page }) => {
    await page.goto('/');

    // Check hero section
    await expect(page.getByRole('heading', { name: /find your perfect long-term home/i })).toBeVisible();
    await expect(page.getByText(/flexible accommodation for students and professionals/i)).toBeVisible();

    // Check CTA buttons
    await expect(page.getByRole('link', { name: /start searching/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /browse listings/i })).toBeVisible();

    // Check features section
    await expect(page.getByText(/smart search/i)).toBeVisible();
    await expect(page.getByText(/verified listings/i)).toBeVisible();
    await expect(page.getByText(/easy contact/i)).toBeVisible();

    // Check featured listings
    await expect(page.getByRole('heading', { name: /featured listings/i })).toBeVisible();
    
    // Should have at least 3 listing cards
    const listingCards = page.locator('[href^="/listings/"]');
    await expect(listingCards).toHaveCount(3);
  });

  test('should navigate to search page when clicking CTA', async ({ page }) => {
    await page.goto('/');

    // Click "Start Searching" button
    await page.getByRole('link', { name: /start searching/i }).click();

    // Should navigate to search page
    await expect(page).toHaveURL('/search');
    await expect(page.getByRole('heading', { name: /search accommodations/i })).toBeVisible();
  });

  test('should navigate to listing detail when clicking a card', async ({ page }) => {
    await page.goto('/');

    // Click first listing card
    const firstListing = page.locator('[href^="/listings/"]').first();
    await firstListing.click();

    // Should navigate to listing detail page
    await expect(page).toHaveURL(/\/listings\/\d+/);
  });
});
