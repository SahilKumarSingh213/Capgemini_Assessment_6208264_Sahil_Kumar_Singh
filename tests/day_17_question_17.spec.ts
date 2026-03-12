import { test, expect } from "@playwright/test";

test("multiple tabs", async ({ browser }) => {

    let context = await browser.newContext()
    let page = await context.newPage()

    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(2000)

    await page.locator('#twotabsearchtextbox').fill("Samsung Mobile")
    await page.keyboard.press("Enter")

    await page.waitForLoadState("domcontentloaded")

    let firstProduct = page.locator("//img[@class='s-image']").first()

    let [page2] = await Promise.all([
        page.waitForEvent("popup"),
        firstProduct.click()
    ])

    await page2.waitForLoadState()

    await page2.waitForTimeout(3000)

     await page.screenshot({path:'screenshot/q17.png'})

    let title = page2.locator('#productTitle').first()

    console.log(await title.textContent())

    await expect(title).toBeVisible()

    await page2.waitForTimeout(3000)

    await page2.close()

    await page.bringToFront()

})