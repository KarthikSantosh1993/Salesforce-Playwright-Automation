import { expect, test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

test("salesforce login test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.fillUsername("krthiksantosh@gmail.dev");
  await loginPage.fillPassword("Salesforce2025");

  const homePage = await loginPage.clickLoginButton();
  await homePage.expectServiceTitleToBeVisible();
  console.log("Test for login is completed");
  
});


