import { test } from "@playwright/test";
import { decrypt } from "../utils/CryptojsUtil";
import logger from "../utils/LoggerUtil";
import LoginPage from "../pages/LoginPage";
import contactsData from "../testdata/contacts.json";

for (const contact of contactsData) {
  test(`Sample Data Driven Testing ${contact.lastName}`, async ({ page }) => {
    logger.info("Test for Contact Creation is started...");

    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername(process.env.userid!);
    await loginPage.fillPassword(process.env.password!);

    const homePage = await loginPage.clickLoginButton();
    //await homePage.expectServiceTitleToBeVisible();
    //console.log("Login Successful!!!");

    const contactsPage = await homePage.navigateToContactTab();
    await contactsPage.createNewContact(contact.firstName, contact.lastName);
    await contactsPage.expectContactLabelContainsFirstNameAndLastName(
        contact.firstName,
        contact.lastName
    );
    logger.info("Test for Contact Creation is completed");
  });
}


