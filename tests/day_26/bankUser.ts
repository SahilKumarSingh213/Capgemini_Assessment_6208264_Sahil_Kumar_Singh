import { Page } from "@playwright/test";

class CustomerPage {
    page;

    userDropdown;
    loginBtn;
    logoutBtn;

    depositTab;
    withdrawTab;

    depositForm;
    withdrawForm;

    depositInput;
    withdrawInput;

    depositBtn;
    withdrawBtn;

    balanceText;

    constructor(page: Page) {
        this.page = page;

        this.userDropdown = page.locator('#userSelect');
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.logoutBtn = page.getByRole('button', { name: 'Logout' });

        this.depositTab = page.getByRole('button', { name: 'Deposit' });
        this.withdrawTab = page.getByRole('button', { name: 'Withdraw' });

        this.depositForm = page.locator('form').filter({ hasText: 'Amount to be Deposited' });
        this.withdrawForm = page.locator('form').filter({ hasText: 'Amount to be Withdrawn' });

        this.depositInput = this.depositForm.locator('input');
        this.withdrawInput = this.withdrawForm.locator('input');

        this.depositBtn = this.depositForm.getByRole('button', { name: 'Deposit' });
        this.withdrawBtn = this.withdrawForm.getByRole('button', { name: 'Withdraw' });
               this.balanceText = page.locator('div.center strong').nth(1);
    }

    async login(customerName) {
        await this.userDropdown.selectOption({ label: customerName });
        await this.loginBtn.click();
    }

    async deposit(amount) {
        await this.depositTab.click();

        await this.depositInput.fill(amount.toString());
        await this.depositBtn.click();

        await this.page.getByText("Deposit Successful").waitFor();
    }

    async withdraw(amount) {
        await this.withdrawTab.click();

        await this.withdrawInput.fill(amount.toString());
        await this.withdrawBtn.click();

        await this.page.getByText("Transaction successful").waitFor();
    }

    async getBalance() {
    const text = await this.balanceText.textContent();

    console.log("Raw balance text:", text); 

    return Number(text?.trim() || 0);
}

    async logout() {
        await this.logoutBtn.click();
    }
}

export default CustomerPage;