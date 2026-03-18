import { expect, Page, Locator } from "@playwright/test";

class UploadPage {

    page: Page;
    fileInputField: Locator;
    uploadButton: Locator;
    uploadedFileLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fileInputField = page.locator('#file-upload');
        this.uploadButton = page.locator('#file-submit');
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