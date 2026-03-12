import { test, expect } from "@playwright/test"

test("dialogs", async ({ page }) => {
    page.on("dialog", async (d) => {

        console.log("Dialog Type:", d.type())
        console.log("Dialog Message:", d.message())
        if (d.type() == "alert") {
            await d.accept()
        }
        else if (d.type() == "confirm") {
            await d.dismiss()
        }
        else if (d.type() == "prompt") {
            await d.accept("Playwright Testing")
        }
    })
      await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
       await page.locator('//button[text()="Click for JS Alert"]').click()
     await expect(page.locator('#result')).toHaveText("You successfully clicked an alert")
        await page.waitForTimeout(2000)
    await page.locator('//button[text()="Click for JS Confirm"]').click()
       await expect(page.locator('#result')).toHaveText("You clicked: Cancel")
    await page.waitForTimeout(2000)
    await page.locator('//button[text()="Click for JS Prompt"]').click()
        await expect(page.locator('#result')).toHaveText("You entered: Playwright Testing")
    await page.waitForTimeout(2000)
     await page.screenshot({path:'screenshot/q19.png'})

})