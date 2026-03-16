import {test,expect} from "@playwright/test"

test('sorting_option',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.getByTestId('product-sort-container').click();
    await page.getByTestId('product-sort-container').selectOption({value:'lohi'});
    await expect(page.getByTestId('product-sort-container')).toHaveValue('lohi');
    await page.locator('//div[@class="pricebar"]/button').first().click();
    await expect(page.locator('//div[@class="pricebar"]/button').first()).toHaveText('Remove');
    await expect(page.locator('//a[@class="shopping_cart_link"]/span')).toHaveText('1');
    await page.screenshot({path:'screenshot/q16.png'})
})
