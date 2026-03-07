import {test} from "@playwright/test"

test("tokyo",async({page})=>{
    await page.goto("https://www.olympics.com/en/olympic-games/tokyo-2020");
    await page.locator('//span/a[@href="/en/olympic-games/tokyo-2020/athletes"]').click();
    let goldmedal=await page.locator('//li[@data-row-id="all-athletes-table-row-2"]/descendant::div[@title="Gold"]/span').textContent();
    console.log("Total Goldmedals :",goldmedal);
    await page.screenshot({path:'screenshot/q6.png'});
})