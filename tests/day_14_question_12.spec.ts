import { test, expect } from '@playwright/test';

test('question_2', async ({ page }) => {

  await page.goto('https://www.flipkart.com');

  const closeBtn = page.locator('//button[contains(text(),"✕")]');
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }
  const searchBox = page.locator('//input[@name="q"]').first();
  await searchBox.fill('shoes');
  await searchBox.press('Enter');
  const womenShoes = page.locator('//a[contains(text(),"Women") or contains(text(),"WOMEN") or contains(text(),"women")]');
  await expect(womenShoes.first()).toBeVisible();
  const count = await womenShoes.count();
  await expect(count).toBeGreaterThan(0);
  const firstText = await womenShoes.first().textContent();
  await expect(firstText?.toLowerCase()).toContain('women');
  await expect(page).toHaveScreenshot('flipkart-women-shoes.png');
  await page.screenshot({path:'screenshot/q12.png'})

});