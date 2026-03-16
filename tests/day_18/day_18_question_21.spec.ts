import {test,expect} from "@playwright/test"
test("Upload demoqa profile photo",async({page})=>{
    await page.goto("https://demoqa.com/upload-download")
    await page.locator('#downloadButton').click()
    await page.locator('#uploadFile').setInputFiles("C:/Users/kuzur/Desktop/code here only in tests/Playwright/tests/dwnl/sahil.txt")
    await expect(page.locator('#uploadedFilePath'))
        .toContainText("sahil.txt")
          await page.screenshot({path:'screenshot/q21.png'})

})