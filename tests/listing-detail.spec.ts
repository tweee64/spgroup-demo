import { test, expect } from '@playwright/test';

test.describe('Listing Detail Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to first listing
    await page.goto('/listings/1');
  });

  test('should display listing details', async ({ page }) => {
    // Check breadcrumb
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Search' })).toBeVisible();

    // Check main image
    await expect(page.locator('img[alt*="Image 1"]').first()).toBeVisible();

    // Check title
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Check price
    await expect(page.getByText(/£.*\/\s*month/i)).toBeVisible();

    // Check location
    await expect(page.locator('svg').filter({ hasText: /./}).first()).toBeVisible();
  });

  test('should display photo gallery', async ({ page }) => {
    // Main image should be visible
    await expect(page.locator('img[alt*="Image 1"]').first()).toBeVisible();

    // Image counter should be visible
    await expect(page.getByText(/\d+\s*\/\s*\d+/).first()).toBeVisible();

    // Thumbnail strip should have multiple images
    const thumbnails = page.locator('button img[alt*="Thumbnail"]');
    const count = await thumbnails.count();
    expect(count).toBeGreaterThan(1);
  });

  test('should navigate through gallery using thumbnails', async ({ page }) => {
    // Wait for gallery to load
    await page.waitForTimeout(500);

    // Get all thumbnail buttons
    const thumbnails = page.locator('button img[alt*="Thumbnail"]').locator('..');
    
    // Click second thumbnail
    if (await thumbnails.nth(1).isVisible()) {
      await thumbnails.nth(1).click();

      // Wait for image to change
      await page.waitForTimeout(300);

      // Image counter should show 2
      await expect(page.getByText('2 /', { exact: false })).toBeVisible();
    }
  });

  test('should open lightbox when clicking main image', async ({ page }) => {
    // Click on main image
    await page.locator('img[alt*="Image 1"]').first().click();

    // Wait for lightbox
    await page.waitForTimeout(300);

    // Lightbox should be visible (check for close button or navigation arrows)
    const closeButton = page.locator('button svg[viewBox="0 0 24 24"]').filter({ hasText: /^$/ });
    await expect(closeButton.first()).toBeVisible();
  });

  test('should display property details section', async ({ page }) => {
    // Description section
    await expect(page.getByRole('heading', { name: /description/i })).toBeVisible();

    // Amenities section
    await expect(page.getByRole('heading', { name: /amenities/i })).toBeVisible();

    // Lease terms
    await expect(page.getByRole('heading', { name: /lease terms/i })).toBeVisible();

    // Landlord info
    await expect(page.getByRole('heading', { name: /about the landlord/i })).toBeVisible();
  });

  test('should display booking panel', async ({ page }) => {
    // Booking panel heading
    await expect(page.getByRole('heading', { name: /request booking/i })).toBeVisible();

    // Move-in date field
    await expect(page.getByLabel(/move-in date/i)).toBeVisible();

    // Lease duration dropdown
    await expect(page.locator('select')).toBeVisible();

    // Message field
    await expect(page.getByPlaceholder(/introduce yourself/i)).toBeVisible();

    // Request booking button
    await expect(page.getByRole('button', { name: /request booking/i })).toBeVisible();

    // Message landlord button
    await expect(page.getByRole('button', { name: /message landlord/i })).toBeVisible();
  });

  test('should submit booking request', async ({ page }) => {
    // Fill in move-in date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    
    await page.getByLabel(/move-in date/i).fill(dateStr);

    // Select lease duration
    await page.locator('select').selectOption('6');

    // Fill message
    await page.getByPlaceholder(/introduce yourself/i).fill('I am interested in this property.');

    // Submit form
    await page.getByRole('button', { name: /request booking/i }).click();

    // Wait for success message
    await page.waitForTimeout(500);

    // Success message should appear
    await expect(page.getByText(/booking request sent/i)).toBeVisible();
  });

  test('should show 404 for non-existent listing', async ({ page }) => {
    // Navigate to non-existent listing
    await page.goto('/listings/999');

    // Should show 404 page
    await expect(page.getByRole('heading', { name: /404/i })).toBeVisible();
    await expect(page.getByText(/listing not found/i)).toBeVisible();

    // Should have links to go back
    await expect(page.getByRole('link', { name: /browse listings/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /go home/i })).toBeVisible();
  });

  test('should navigate back to search from breadcrumb', async ({ page }) => {
    // Click search breadcrumb
    await page.getByRole('link', { name: 'Search' }).click();

    // Should navigate to search page
    await expect(page).toHaveURL('/search');
  });
});
