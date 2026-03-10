import { test } from "@playwright/test";

test("test", async ({ page }) => {

  await page.goto("https://www.lenskart.com/");
  await page.locator('//a[@id="lrd9"]').hover();
  await Promise.all([
    page.waitForNavigation(),
    page.locator('//img[@src="https://static5.lenskart.com/media/uploads/bengalore-210126.png"]').click()
  ]);
  await page.screenshot({ path: "screenshot/q14.png" });

});