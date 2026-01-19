const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber')
const { expect, firefox} = require ('@playwright/test')

 const url = "https://freelance-learn-automation.vercel.app/login"
 const username = "[placeholder='Enter Email']"
 const password="[placeholder='Enter Password']"
 const submit = "[type='submit']"
 const manage="//*[text()='Manage']"

setDefaultTimeout (60*1000)

let browser, context,page;


Given(`User should be on login page`, async () => {
    browser = await firefox.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto(url)

});

When(`User should Enter the username {string} and password {string}`,  async  (user,pass) => {

    // await page.locator(username).fill(user);
    await page.fill(username,user)
    await page.locator(password).fill(pass);

});

When(`User should click on the submit button`, async () => {
    await page.locator(submit).click()

});

Then(`user should successfully logged in`, () => {

    expect(page.locator(manage)).toBeVisible()
   
});


