import { expect, browser } from "@wdio/globals";
import { LoginPage, DashboardPage } from "../src/po/pages";
import logger from "@wdio/logger";

const log = logger("test");

describe('My Login application', () => {

    let loginPage;

    before(async () => {
        log.info('Opening website');
        loginPage = new LoginPage();
        await loginPage.open();
    })

    it("UC-1 Test Login form with empty credentials", async () => {

        const expectedError = "Username is required";

        const username = "any";
        const password = "any";

        log.info(`Inputting username: ${username} password: ${password}`);
        await loginPage.loginForm.inputUsername(username);
        await loginPage.loginForm.inputPassword(password);
        log.info('Clearing username and password');
        await loginPage.loginForm.clearUsername();
        await loginPage.loginForm.clearPassword();

        await loginPage.loginForm.clickLoginButton();

        await expect(await loginPage.loginForm.fetchErrorMessage()).toContain(expectedError);
    });

    it("UC-2 Test Login form with credentials by passing Username", async () => {

        const expectedError = "Password is required";

        const username = "any";
        const password = "any";

        log.info(`Inputting username: ${username} password: ${password}`);
        await loginPage.loginForm.inputUsername(username);
        await loginPage.loginForm.inputPassword(password);
        log.info('Clearing password');
        await loginPage.loginForm.clearPassword();
        await loginPage.loginForm.clickLoginButton();

        log.info(`Asserting error message: ${expectedError}`);
        await expect(await loginPage.loginForm.fetchErrorMessage()).toContain(expectedError);
    });

    it("UC-3 Test Login form with credentials by passing Username & Password", async () => {

        const expectedTitle = "Swag Labs";

        log.info('Fetching username and password');
        const username = (await loginPage.loginCredentials.fetchUserNames())[0];
        const password = await loginPage.loginCredentials.fetchValidPassword();

        log.info(`Login in with username: ${username} and password: ${password}`);
        await loginPage.loginForm.inputUsername(username);
        await loginPage.loginForm.inputPassword(password);
        await loginPage.loginForm.clickLoginButton();

        const dashboardPage = new DashboardPage();

        // The requirements said to check the title and I wasn't 100% sure which one so I checked both.
        log.info(`Asserting title: ${expectedTitle}`);
        await expect(await dashboardPage.headerLabel.fetchLabelTitle()).toEqual(expectedTitle);
        await expect(await dashboardPage.fetchTabTitle()).toEqual(expectedTitle);
    })
})

