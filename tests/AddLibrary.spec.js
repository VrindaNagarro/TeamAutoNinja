// @ts-check
const { test, expect } = require("@playwright/test");
const loginPage = require("../pageObjects/loginPage");
const addLibraryPage = require("../pageObjects/addLibraryPage");
const testdata = require("../testData/testdata.json");

test("Add library", async ({ page }) => {
  await page.goto("http://34.148.101.249:8081/");
  const loginpage = new loginPage(page);
  const addlibrarypage = new addLibraryPage(page);
  await loginpage.login(
    testdata.LoginCredentials.username,
    testdata.LoginCredentials.password
  );
  await addlibrarypage.addLibrary("The Father's Library");
});
