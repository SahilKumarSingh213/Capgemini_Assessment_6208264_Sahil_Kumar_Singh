import { Page } from "@playwright/test";

class BankManagerPage {
    page;
    addCustomerBtn;
    openAccountBtn;
    firstName;
    lastName;
    postCode;
    submitBtn;
    customerDropdown;
    currencyDropdown;
    processBtn;

    constructor(page: Page) {
        this.page = page;
        this.addCustomerBtn = page.getByText('Add Customer');
        this.openAccountBtn = page.getByText('Open Account');
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.postCode = page.getByPlaceholder('Post Code');
        this.submitBtn = page.getByRole("button",{name:"Add Customer"}).last();
        this.customerDropdown = page.locator('#userSelect');
        this.currencyDropdown = page.locator('#currency');
        this.processBtn = page.getByText('Process');
    }

    async addCustomer(customer) {
        await this.addCustomerBtn.click();
        await this.firstName.fill(customer.firstName);
        await this.lastName.fill(customer.lastName);
        await this.postCode.fill(customer.postCode);
        await this.submitBtn.click();
    }

    async openAccount(customerName, currency) {
        await this.openAccountBtn.click();
        await this.customerDropdown.selectOption(customerName);
        await this.currencyDropdown.selectOption(currency);
        await this.processBtn.click();
    }
}

export default BankManagerPage;