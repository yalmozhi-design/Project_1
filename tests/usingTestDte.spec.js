const {test,expect} = require('@playwright/test')
const testData = (JSON.parse(JSON.stringify(require("../testData.json"))))

test("verify the", async function({page}) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)
    await page.getByPlaceholder("Username").fill(testData.address.Username)
    await page.getByPlaceholder("Password").fill(testData.Password)
    page.pause()

})