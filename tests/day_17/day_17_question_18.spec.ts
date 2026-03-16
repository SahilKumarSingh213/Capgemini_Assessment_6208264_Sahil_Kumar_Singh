import { test, expect } from "@playwright/test";

test('notification', async ({ browser }) => {
    let context = await browser.newContext({ permissions: ['notifications'] })
    let page = await context.newPage()
    await page.goto('https://www.justdial.com')
     await page.waitForLoadState('domcontentloaded')
    let result = await page.evaluate(() => {
        return Notification.requestPermission()
    })
    console.log("Notification Permission:", result)
    await page.waitForTimeout(2000)
     let searchBox = page.locator('#main-auto')
    await searchBox.fill('Restaurants')
      await page.keyboard.press('Enter')
    await page.waitForLoadState('domcontentloaded')
    await expect(page).toHaveURL(/Restaurants/i)
      await page.screenshot({path:'screenshot/q18.png'})
})