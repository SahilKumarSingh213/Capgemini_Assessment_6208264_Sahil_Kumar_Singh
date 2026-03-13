import {test,expect} from "@playwright/test"

test("Upload profile photo",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator('//input[@id="file-upload"]').setInputFiles("C:/Users/kuzur/Desktop/code here only in tests/Playwright/tests/dwnl/sahil.txt")
    await page.locator('//input[@id="file-submit"]').click()
    await expect(page.locator('#uploaded-files')).toHaveText("sahil.txt")
     await page.screenshot({path:'screenshot/q22.png'})
})