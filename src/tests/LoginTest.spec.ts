import { expect, test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import { decrypt } from "../utils/CryptojsUtil";

test("salesforce login test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.fillUsername(process.env.userid!);
  await loginPage.fillPassword(process.env.password!);

  const homePage = await loginPage.clickLoginButton();
  await homePage.expectServiceTitleToBeVisible();
  console.log("Test for login is completed");
  
});


