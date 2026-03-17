import { Page } from "@playwright/test";

class Amazon {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openPage(url: string) {
    await this.page.goto(url);
  }

  async openCareerPage() {
    await this.page.locator('//a[@href="https://amazon.jobs"]').first().click();
  }

  async openStudentOpportunities() {
    await this.page.goto("https://amazon.jobs/content/en/career-programs/university#search");
    await this.page.waitForLoadState("domcontentloaded");
  }

  async applyFilters(filters: any) {
    await this.page.waitForSelector('//label[contains(., "Germany")]');

    await this.page.locator(`//label[contains(., "${filters.country}")]`).click();
    await this.page.locator(`//label[contains(., "${filters.state}")]`).click();
    await this.page.locator(`//label[contains(., "${filters.city}")]`).click();
    await this.page.locator(`//label[contains(., "${filters.jobType}")]`).click();
    await this.page.locator(`//label[contains(., "${filters.categories}")]`).click();
    await this.page.locator(`//label[contains(., "${filters.roleType}")]`).click();
  }
  async applyOnJobPage(jobPage: Page) {
    await jobPage.waitForLoadState();
    await jobPage.locator('//a[contains(., "Apply now")]').click();
  }
}

export default Amazon;