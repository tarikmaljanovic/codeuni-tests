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
    protected option1 = By.xpath("/html/body/div/div[4]/div/div[2]/form/div[2]/input");
    protected nextButton = By.xpath("/html/body/div/div[4]/div/div[2]/div/button");
    protected option2 = By.xpath("/html/body/div/div[4]/div/div[2]/form/div/input");
    protected finishButton = By.xpath("/html/body/div/div[4]/div/div[2]/div/button[2]");
    protected asnwer = By.xpath("/html/body/div/div[4]/div/div[2]/p");

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
        const element = await this.waitForElement(this.option1, 5000);
        await this.scriptClick(element);
    }

    async clickNextButton() {
        await this.waitAndClick(this.nextButton, 5000);
    }

    async checkOption2() {
        const element = await this.waitForElement(this.option2, 5000);
        await this.scriptClick(element);
    }

    async clickFinishButton() {
        const element = await this.waitForElement(this.finishButton, 5000);
        await this.scriptClick(element);
    }

    async checkAnser() {
        await this.waitForElement(this.asnwer, 5000);
        const answer = await this.driver.findElement(this.asnwer).getText();
        expect(answer).toMatch(testData.lesson_content.answer);
    }
}