class flipkart {

    async openSite(page, url:string) {
        await page.goto(url);
    }

    async openGudiStore(page) {
        await page.locator('//div[text()="Home"]').first().click();
        await page.locator('//a[contains(@href,"gudipadwa2026")]').click();
    }

    async openGudiCloth(page) {
        await page.locator('//a[contains(@href,"collection-tab-name=Gudi")]').click();
    }

    async selectProduct(page, position:number) {
        await page.locator('(//a[@class="pIpigb"])').nth(position-1).click();
    }

    async addToCart(page) {
        await page.locator('//div[text()="Add to cart"]').click();
    }

    async openCart(page) {
        await page.locator('//span[text()="Cart"]').click();
    }

    async updateQuantity(page, item:number, count:number) {
        for (let i = 1; i < count; i++) {
            await page.locator('(//button[text()="+"])').nth(item-1).click();
        }
    }

    async placeOrder(page) {
        await page.locator('//span[text()="Place Order"]').click();
    }
}

export default flipkart;