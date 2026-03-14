import { test } from "@playwright/test";
import excel from "exceljs";
import path from "path";

// test("Write_excel_data", async ({page}) => {

//   const book = new ExcelJS.Workbook();
//   // const filePath = path.join(__dirname, "DATA.xlsx");
//   await book.xlsx.readFile(path.join(__dirname, "name.xlsx"));
//   let sheet = book.getWorksheet("Sheet1");
//   if (!sheet) {
//     sheet = book.addWorksheet("Sheet1");
//   }

//   sheet.getRow(1).getCell(1).value = "Sahil";
//    sheet.getRow(1).getCell(2).value = "Sahil2";

//   await book.xlsx.writeFile(path.join(__dirname, "name.xlsx"));

// });



test('Write_multiple_data', async ({ page }) => {
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname, "name.xlsx"));
    let sheet = book.getWorksheet('Sheet2');
    if (!sheet) {
        sheet = book.addWorksheet('Sheet2');
    }
    await page.goto('https://www.amazon.com/');
    let search = ['shoes', 'sahil', 'nimish'];
    for (let c = 1; c <= search.length; c++) {
        await page.locator('#twotabsearchtextbox').fill(search[c - 1]);
        let r = 1;
        sheet.getRow(r++).getCell(c).value = search[c-1];
        await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').first().waitFor({ state: 'visible' });
        let items = await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').allTextContents();
        for (let item of items) {
            sheet.getRow(r++).getCell(c).value = item;
        }
        await page.keyboard.press('Escape');
        await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').first().waitFor({ state: 'hidden' });
    }
    await book.xlsx.writeFile(path.join(__dirname, "name.xlsx"));
})