import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LandingPage } from "../core/page-objects/landing-page";
import { DashboardPage } from "../core/page-objects/dashboard-page";
import { CoursePage } from "../core/page-objects/course-page";
import { LessonPage } from "../core/page-objects/lesson-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let landingPage: LandingPage;
let dashboardPage: DashboardPage;
let coursePage: CoursePage;
let lessonPage: LessonPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.landing);
    landingPage = new LandingPage(driver);
    dashboardPage = new DashboardPage(driver);
    coursePage = new CoursePage(driver);
    lessonPage = new LessonPage(driver);
}, 10000);

test('takeQuiz', async () => {
    await landingPage.enterEmailLogin(testData.registration_data.email);
    await landingPage.enterPasswordLogin(testData.registration_data.password);
    await landingPage.clickLoginButton();
    await dashboardPage.clickOnCourseButton();
    await coursePage.clickLessonTitle();
    await lessonPage.checkOption1();
    await lessonPage.clickNextButton();
    await lessonPage.checkOption2();
    await lessonPage.clickFinishButton();


}, 10000);

afterAll(async () => {
    // await quitDriver(driver);
}, 10000);