import { test, expect } from '@playwright/test';

test.describe('Example Test Suite', () => {
    test('Navigation Test', async ({ page }) => {
        await page.goto('https://example.com');
        await expect(page).toHaveTitle(/Example Domain/);
    });

    test('Element Interaction Test', async ({ page }) => {
        await page.goto('https://example.com');
        const moreInfoLink = page.locator('a');
        await moreInfoLink.click();
        await expect(page).toHaveURL(/iana.org/);
    });

    test('Assertion Test', async ({ page }) => {
        await page.goto('https://example.com');
        const heading = page.locator('h1');
        await expect(heading).toHaveText('Example Domain');
    });
});