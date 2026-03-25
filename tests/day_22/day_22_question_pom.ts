import { expect, Page, Locator } from "@playwright/test";

class bank {

    page
    customerLogin
    managerLogin
    uploadedFileLabel

    constructor(page: Page) {
        this.page = page;
        this.customerLogin = page.getByText("Customer Login")
        this.managerLogin = page.getByText("Bank Manager Login")
        this.uploadedFileLabel = page.locator('#uploaded-files');
    }

    async navigateToUploadPage() {
        await this.page.goto('https://the-internet.herokuapp.com/upload');
    }

    async uploadFile(filePath: string) {
        await this.fileInputField.setInputFiles(filePath);
        await this.uploadButton.click();
    }

    async validateUploadedFile(expectedFileName: string) {
        const actualFileName = await this.uploadedFileLabel.textContent();
        await expect(actualFileName?.trim()).toBe(expectedFileName);
    }
}

export default UploadPage;