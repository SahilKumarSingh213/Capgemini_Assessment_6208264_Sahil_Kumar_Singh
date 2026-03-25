import { Page, Locator } from "@playwright/test";

class Bank {

    page: Page;
    customerLogin: Locator;
    managerLogin: Locator;

    constructor(page: Page) {
        this.page = page;
        this.customerLogin = page.getByText("Customer Login");
        this.managerLogin = page.getByText("Bank Manager Login");
    }

    async clickCustomerLogin() {
        await this.customerLogin.click();
    }

    async clickManagerLogin() {
        await this.managerLogin.click();
    }
}

export default Bank;