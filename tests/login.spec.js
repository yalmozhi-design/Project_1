
// accessing the web elements 
const {test,expect} = require('@playwright/test')

test("accessing the login page", async function({page})
{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").type("Admin",{delay:100})
    await page.getByPlaceholder("Password").type("admin123",{delay:100})
    await page.locator("//*[@type='submit']").click();

    await expect(page).toHaveURL(/dashboard/)
    await page.waitForTimeout(3000)
    await page.getByAltText("profile picture").first().click();
    await page.getByText("Logout").click();
    await expect(page).toHaveURL(/auth/)

})