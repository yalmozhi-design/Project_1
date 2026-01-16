const {test,expect}= require("@playwright/test")

test("verifying the google", async function({page}) {

    await page.goto("https://www.google.com/")
    const url = page.url()
    const title = page.title()
    console.log("the url" +  url)
    console.log("the title" + title)
    await expect(page).toHaveTitle("Google");
    await expect(page).toHaveURL("https://www.google.com/")
})