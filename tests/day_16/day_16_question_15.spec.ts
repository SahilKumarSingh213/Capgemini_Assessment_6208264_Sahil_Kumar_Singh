import {test,expect} from "@playwright/test"

test('Car_brand',async({page})=>{
    await page.goto('https://www.automationtesting.co.uk/dropdown.html');
    await page.locator('#cars').click();
    const options=await page.locator('//select[@id="cars"]/option').all();
    let actualcars=[];
    let expectedcars=['Audi','BMW','Ford','Honda','Jeep','Mercedes','Suzuki','Volkswagen'];
    for(const option of options){
        const car=await option.textContent();
        actualcars.push(car);
    }
    for(const car of expectedcars){
        await expect(actualcars).toContain(car);
        console.log(car," is present");
    }
    await page.screenshot({path:'screenshot/q15.png'})
})