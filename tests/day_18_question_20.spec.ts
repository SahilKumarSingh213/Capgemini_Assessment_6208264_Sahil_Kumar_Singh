import { test, expect } from "@playwright/test";
import * as excel from "exceljs";

test("Fill registration form using Excel data", async ({ page }) => {

  const book = new excel.Workbook();
  await book.xlsx.readFile("./test data/data.xlsx");

  const sheet = book.getWorksheet("Sheet1");

  for (let i = 2; i <= sheet!.actualRowCount; i++) {

    const firstName = sheet!.getRow(i).getCell(1).value?.toString();
    const lastName = sheet!.getRow(i).getCell(2).value?.toString();
    const email = sheet!.getRow(i).getCell(3).value?.toString();
    const gender = sheet!.getRow(i).getCell(4).value?.toString();
    const mobile = sheet!.getRow(i).getCell(5).value?.toString();
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.locator("#firstName").fill(firstName!);
    await page.locator("#lastName").fill(lastName!);
    await page.locator("#userEmail").fill(email!);
    await page.locator(`//label[text()="${gender}"]`).click();
    await page.locator("#userNumber").fill(mobile!);
    await page.locator("#submit").click();
    await expect(page.locator("#example-modal-sizes-title-lg"))
      .toHaveText("Thanks for submitting the form");

      await page.screenshot({path:'screenshot/q20.png'})

  }

});