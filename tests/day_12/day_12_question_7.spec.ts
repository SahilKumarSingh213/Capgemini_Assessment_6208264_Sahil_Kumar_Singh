import { test } from "@playwright/test";

test("ranking", async ({ page }) => {

  await page.goto("https://www.icc-cricket.com/rankings");
  await page.locator('//a[contains(@href,"odi")]').first().click();
  await page.locator('//*[.="Virat Kohli"]/ancestor::div//span[contains(@class,"font-bold")]');
  await page.screenshot({ path: "screenshot/q7.png" });

});