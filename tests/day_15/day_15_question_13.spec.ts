import { test, expect } from "@playwright/test";

test.use({ storageState: "gmailAuth.json" });

test("gmail compose", async ({ page }) => {

  await page.goto("https://mail.google.com/");

  await page.keyboard.press("c");

  await page.locator('//div[@role="dialog"]').waitFor();

  await page.keyboard.type("example@gmail.com");
  await page.keyboard.press("Enter");

  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.type("Test mail");

  await page.keyboard.press("Tab");
  await page.keyboard.type("Hello from Playwright");

  await page.keyboard.press("Control+Enter");

  await page.screenshot({ path: "screenshot/q13.png" });

});
