import { Page, expect } from "@playwright/test";
import HomePage from "./HomePage";
import logger from "../utils/LoggerUtil";

export default class LoginPage {
  private readonly usernameInputSelector = "#username";
  private readonly passwordInputSelector = "#password";
  private readonly loginButtonSelector = "#Login";

  constructor(private page: Page) {}


  async navigateToLoginPage() {
    await this.page.goto("/");
    logger.info("Navigated to baseURL - https://login.salesforce.com");
  }

  async fillUsername(username: string) {
    await this.page.locator(this.usernameInputSelector).fill(username);
    logger.info("Filled username as " + username);
  }


  async fillPassword(password: string) {
    await this.page.locator(this.passwordInputSelector).fill(password);  
    logger.info("Filled password as " + password);
  }
 
  async clickLoginButton() {
    await this.page
      .locator(this.loginButtonSelector)
      .click()
      .catch((error) => {
        logger.error(`Error clicking login button: ${error}`);
        throw error; 
      }).then(() => logger.info("Clicked on login button"));

     const homePage = new HomePage(this.page);
     return homePage;
  }
}