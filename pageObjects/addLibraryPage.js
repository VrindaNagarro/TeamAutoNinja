// addLibraryPage.js
class AddLibraryPage {
  constructor(page) {
    this.page = page;
    // Locators using Playwright's locator method
    this.administration = page.locator(
      "//a[@class='icon_general icon_administration']"
    );
    this.library = page.locator("//*[contains(text(),'Libraries')]");
    this.newLibrary = page.locator("//*[contains(text(),' New library')]");
    this.libraryCode = page.locator("//input[@id='branchcode']");
    this.libraryName = page.locator("//input[@id='branchname']");
    this.submit = page.locator("//input[@value='Submit']");
  }

  // Click on "Koha Administration"
  async clickKohaAdministration() {
    await this.administration.waitFor({ state: "visible" });
    await this.administration.click();
  }

  // Add a new library
  async addLibrary(libraryNameString) {
    await this.clickKohaAdministration();

    // Wait for the 'Libraries' element to be clickable
    await this.library.waitFor({ state: "visible" });
    // Force click on the 'Libraries' element using JavaScript
    await this.page.evaluate((element) => {
      element.click();
    }, await this.library.elementHandle());

    // Click on the 'New Library' link
    await this.page.evaluate((element) => {
      element.click();
    }, await this.newLibrary.elementHandle());

    // Generate library code
    const code = this.generateCode(libraryNameString);

    // Fill in the library code and name
    await this.libraryCode.fill(code);
    await this.libraryName.fill(libraryNameString);

    // Submit the form
    await this.submit.click();
  }

  // Generate a unique code for the library
  generateCode(libraryName) {
    const words = libraryName.toUpperCase().split(/\s+/);
    let output = "";

    // Add the first letter of each word to the output
    for (let word of words) {
      if (word.length > 0 && /[A-Za-z]/.test(word.charAt(0))) {
        output += word.charAt(0);
      }
    }

    return `GTR_${output}`;
  }
}

module.exports = AddLibraryPage;
