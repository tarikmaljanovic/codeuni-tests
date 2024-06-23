import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class DashboardPage extends BasePage {
    protected userFullName = By.xpath("/html/body/div/div[1]/div[2]/span");

    constructor(driver: WebDriver) {
        super(driver);
    }

    async checkUserFullName() {
        await this.waitForElement(this.userFullName, 5000);
        const userFullName = await this.driver.findElement(this.userFullName).getText();
        expect(userFullName).toMatch(testData.registration_data.full_name);
    }


}