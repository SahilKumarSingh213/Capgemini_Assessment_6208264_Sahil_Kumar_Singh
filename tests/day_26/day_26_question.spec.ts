import { test, expect } from '@playwright/test';
import Bank from './home';
import BankManagerPage from './bankManager';
import CustomerPage from './bankUser';
import data from './Data.json';

test('Full Banking Flow', async ({ page }) => {
    page.on('dialog', async (d) => {
        await d.accept();
    });

    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');

    const bank = new Bank(page);
    const manager = new BankManagerPage(page);
    const customer = new CustomerPage(page);
    await bank.clickManagerLogin();
    await manager.addCustomer(data.customer);
    await manager.openAccount(
        data.customer.firstName + " " + data.customer.lastName,
        data.account.currency
    );
    await page.getByText('Home').click();
    await bank.clickCustomerLogin();
    const fullName = data.customer.firstName + " " + data.customer.lastName;
    await customer.login(fullName);
    await customer.deposit(data.money.deposit);
    await customer.withdraw(data.money.withdraw);
    const expected = data.money.deposit - data.money.withdraw;

await expect(customer.balanceText).toHaveText(String(expected));
await page.screenshot({ path: 'screenshot/q31.png' });
    await customer.logout();
});