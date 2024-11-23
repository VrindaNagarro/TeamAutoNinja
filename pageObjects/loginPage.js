// loginPage.js
class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('//input[@id="userid"]');
    this.password = page.locator('//input[@id="password"]');
    this.myLibraryDropdown = page.locator('//select[@id="set-library-branch"]');
    this.loginButton = page.locator('//input[@id="submit-button"]');
  }

  // Validate login title
  async validateLoginTitle() {
    return await this.page.title();
  }

  // Perform login action
  async login(userNameVal, passwordVal) {
    await this.username.fill(userNameVal); // Fill username field
    await this.password.fill(passwordVal); // Fill password field
    await this.loginButton.click(); // Click the login button
  }
}

module.exports = LoginPage;
