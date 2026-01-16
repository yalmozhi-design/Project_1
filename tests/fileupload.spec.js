const {test,expect} = require('@playwright/test')

test("file upload", async function({page})
{
await page.goto("https://the-internet.herokuapp.com/upload")
await page.locator("#file-upload").setInputFiles("/Users/user/Desktop/Compensation.jpeg")
await page.locator("#file-submit").click();
let text = await page.getByText("File Uploaded!").textContent()
expect(await page.locator("//h3")).toHaveText("File Uploaded!")
// expect(text).toBe("File Uploaded!")

})

