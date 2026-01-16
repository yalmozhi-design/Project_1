const {test,expect}= require('@playwright/test')



test("handle frames", async ({page}) =>
{
    // await page.setViewportSize({width:700,height:709})
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
    let iframe = await page.frameLocator("[name='packageListFrame']")
     iframe.locator("//*[text()='java.applet'] ").first().click()
    // await page.pause()
     
})