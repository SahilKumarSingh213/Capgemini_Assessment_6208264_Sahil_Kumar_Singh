import { test } from "@playwright/test";
import UploadPage from "./day_22_question_pom";
import fs from "fs";
import path from "path";

const uploadData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "day_22_question.json"), "utf-8")
);

test('Verify file upload using JSON data', async ({ page }) => {

    const uploadPage = new UploadPage(page);

    await uploadPage.navigateToUploadPage();

    await uploadPage.uploadFile(uploadData.filePath);

    await uploadPage.validateUploadedFile(uploadData.expectedFileName);

    await page.screenshot({ path: 'screenshot/q29.png' });

});