import { test } from "@playwright/test";

test("save gmail login session", async ({ page, context }) => {

  test.setTimeout(120000);

  await page.goto("https://mail.google.com/");

  // login manually then Gmail inbox appears
  await page.waitForSelector('//div[text()="Compose"]', { timeout: 120000 });

  await context.storageState({ path: "gmailAuth.json" });

});
