import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LandingPage } from "../core/page-objects/landing-page";
import { DashboardPage } from "../core/page-objects/dashboard-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let landingPage: LandingPage;
let dashboardPage: DashboardPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.landing);
    landingPage = new LandingPage(driver);
    dashboardPage = new DashboardPage(driver);
}, 10000);

test('register', async () => {
    await landingPage.clickSignUpButton();
    await landingPage.enterFirstName(testData.registration_data.first_name);
    await landingPage.enterLastName(testData.registration_data.last_name);
    await landingPage.clickNextButton();
    await landingPage.enterEmail(testData.registration_data.email);
    await landingPage.enterPassword(testData.registration_data.password);
    await landingPage.clickSubmit();
    await dashboardPage.checkUserFullName();
}, 10000);

afterAll(async () => {
    await quitDriver(driver);
}, 10000);