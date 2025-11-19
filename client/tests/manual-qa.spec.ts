import { test, expect, devices } from '@playwright/test';

const ACCENT_RGB = 'rgb(191, 183, 176)';
const WHATSAPP_HEADER_RGB = 'rgb(85, 9, 9)';

test.describe('Desktop experience', () => {
  test.use({
    viewport: { width: 1440, height: 900 },
    userAgent: devices['Desktop Chrome'].userAgent,
  });

  test('Our Team page renders new member and themed dropdown', async ({ page }) => {
    await page.goto('/our-team');
    await expect(page.getByRole('heading', { name: /Leadership committed/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Barrister M. Faridoon Kamran' })).toBeVisible();

    // Validate that navigating to About highlights the dropdown entry using the theme color
    await page.goto('/about');
    await page.locator('button:has-text("About")').click();
    const dropdown = page.locator('.about-dropdown-menu.show');
    await expect(dropdown).toBeVisible();

    const activeItem = dropdown.locator('.dropdown-item.active-dropdown').first();
    await expect(activeItem).toBeVisible();
    const textColor = await activeItem.evaluate((el) => getComputedStyle(el).color);
    expect(textColor).toBe(ACCENT_RGB);
  });
});

test.describe('Mobile navigation & WhatsApp widget', () => {
  test.use({
    viewport: { width: 414, height: 896 },
    userAgent: devices['Pixel 5'].userAgent,
  });

  test('Navbar collapses smoothly and WhatsApp header shows maroon logo', async ({ page }) => {
    await page.goto('/');
    const toggler = page.locator('.navbar-toggler');
    await expect(toggler).toBeVisible();

    await toggler.click();
    const expandedNav = page.locator('.navbar-collapse.show');
    await expect(expandedNav).toBeVisible();
    await expect(expandedNav.locator('.nav-item').first()).toBeVisible();

    await toggler.click();
    await expect(expandedNav).toHaveCount(0);

    // WhatsApp widget should expose the maroon header & logo when opened
    const widgetButton = page.locator('.whatsapp_widget_icon');
    await expect(widgetButton).toBeVisible();
    await widgetButton.click();

    const widget = page.locator('.whatsapp_widget_pop.open');
    await expect(widget).toBeVisible();
    const headerIcon = widget.locator('img[src="/assets/logo-dejure-maroon.svg"]');
    await expect(headerIcon).toBeVisible();
    const headerBg = await widget.locator('.whatsapp_widget_header').evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(headerBg).toBe(WHATSAPP_HEADER_RGB);
  });
});
