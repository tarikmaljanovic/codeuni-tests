import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class LandingPage extends BasePage {
    protected signUpButton = By.xpath("/html/body/div/div[2]/span/a");
    protected nextButton = By.xpath("/html/body/div/div[1]/div[4]/button[2]");
    protected firstNameInput = By.xpath("/html/body/div/div[1]/div[2]/div[1]/div/input");
    protected lastNameInput = By.xpath("/html/body/div/div[1]/div[2]/div[2]/div/input");
    protected emailInput = By.xpath("/html/body/div/div[1]/div[3]/div[1]/div/input");
    protected passwordInput = By.xpath("/html/body/div/div[1]/div[3]/div[2]/div/input");
    protected submitButton = By.xpath("/html/body/div/div[1]/div[4]/button[2]");

    protected emailInputLogin = By.xpath("/html/body/div/div[2]/div[2]/div[1]/div/input");
    protected passwordInputLogin = By.xpath("/html/body/div/div[2]/div[2]/div[2]/div/input");
    protected loginButton = By.xpath("/html/body/div/div[2]/div[3]/button[2]");

    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickSignUpButton() {
        await this.waitAndClick(this.signUpButton, 5000);
    }

    async enterFirstName(firstName: string) {
        await this.waitAndFillInput(this.firstNameInput, firstName, 5000);
    }

    async enterLastName(lastName: string) {
        await this.waitAndFillInput(this.lastNameInput, lastName, 5000);
    }

    async clickNextButton() {
        await this.waitAndClick(this.nextButton, 5000);
    }

    async enterEmail(email: string) {
        await this.waitAndFillInput(this.emailInput, email, 5000);
    }

    async enterPassword(password: string) {
        await this.waitAndFillInput(this.passwordInput, password, 5000);
    }

    async clickSubmit() {
        await this.waitAndClick(this.submitButton, 5000);
    }

    async enterEmailLogin(email: string) {
        await this.waitAndFillInput(this.emailInputLogin, email, 5000);
    }

    async enterPasswordLogin(password: string) {
        await this.waitAndFillInput(this.passwordInputLogin, password, 5000);
    }

    async clickLoginButton() {
        await this.waitAndClick(this.loginButton, 5000);
    }
}