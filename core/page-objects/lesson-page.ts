import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class LessonPage extends BasePage {
    protected lessonContentBox = By.className("ql-editor");
    protected insertButton = By.xpath("/html/body/div/div[4]/div/div[1]/div/button");
    protected userFullName = By.xpath("/html/body/div/div[1]/div[2]/span");
    protected logoutButton = By.xpath("/html/body/div/div[1]/div[2]/div/div[3]/span");
    protected courseContent = By.xpath("/html/body/div/div[4]/div/div[1]/p");
    protected option1 = By.xpath("/html/body/div/div[4]/div/div[2]/form/div[2]");

    constructor(driver: WebDriver) {
        super(driver);
    }

    async changeLessonContent() {
        const lessonContent = await this.waitForElement(this.lessonContentBox, 5000);
        await lessonContent.clear();
        await lessonContent.sendKeys(testData.lesson_content.content);
    }

    async clickInsertButton() {
        await this.waitAndClick(this.insertButton, 5000);
    }

    async clickLogoutButton() {
        await this.waitAndClick(this.userFullName, 5000);
        const logoutButton = await this.waitForElement(this.logoutButton, 5000);
        await this.scriptClick(logoutButton);
    }

    async checkCourseContent() {
        await this.waitForElement(this.courseContent, 5000);
        const courseContent = await this.driver.findElement(this.courseContent).getText();
        expect(courseContent).toMatch(testData.lesson_content.content);
    }

    async checkOption1() {
        const element = await this.findElementAndClick(this.option1);
    }

    async clickNextButton() {
        
    }
}