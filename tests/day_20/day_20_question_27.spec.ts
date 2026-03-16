import { test } from "@playwright/test"
import flipkart from "C:/Users/kuzur/Desktop/code here only in tests/Playwright/tests/day_20_question_27_pom.page.ts"
import fs from "fs"
import path from "path"

const data = JSON.parse(
    fs.readFileSync(path.join(__dirname,"day_20_question_27.json"))
);

test("flipkart flow", async ({ page }) => {

    const fk = new flipkart();

    await fk.openSite(page, data.url);
    await page.locator('//span[text()="✕"]').click();

    await fk.openGudiStore(page);
    await fk.openGudiCloth(page);
    const [tab1] = await Promise.all([
        page.waitForEvent("popup"),
        fk.selectProduct(page,5)
    ]);

    await fk.addToCart(tab1);
    await tab1.close();
    await page.bringToFront();
    const [tab2] = await Promise.all([
        page.waitForEvent("popup"),
        fk.selectProduct(page,3)
    ]);
    await fk.addToCart(tab2);
    await tab2.close();
    await page.bringToFront();
    await fk.openCart(page);
    await fk.updateQuantity(page,1,2);
    await fk.updateQuantity(page,2,3);

    await page.screenshot({ path:"screenshot/q27.png" });

    await fk.placeOrder(page);

});