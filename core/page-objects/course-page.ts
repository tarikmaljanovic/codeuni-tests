import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class CoursePage extends BasePage {
    protected lessonTitle = By.xpath("/html/body/div/div[5]/div[1]/a/div/div/span");

    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickLessonTitle() {
        await this.waitAndClick(this.lessonTitle, 5000);
    }

}