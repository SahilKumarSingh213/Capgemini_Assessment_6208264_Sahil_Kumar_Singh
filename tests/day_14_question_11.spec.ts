import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
test.use({actionTimeout:8000});
  await page.goto('https://demoapps.qspiders.com/ui/login');

  await expect(page.getByPlaceholder('Enter your email')).toBeVisible();

  await page.getByPlaceholder('Enter your email').fill('sahil@gmail.com');
  await page.getByPlaceholder('Enter your password').fill('sahil@123');

  await expect(page.getByPlaceholder('Enter your password')).toBeVisible();
      await page.screenshot({path:'screenshot/q11.png'});
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

});