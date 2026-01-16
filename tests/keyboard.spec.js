const {test,expect} = require('@playwright/test')

test("keyboard activities", async ({page}) => 
{

    await page.goto("https://www.google.com")
    await page.locator("[title='Search']").fill("mukesh otwani!")
    await page.keyboard.press("Meta+A")
    await page.keyboard.press("Meta+C")
    await page.keyboard.press("Backspace")
    await page.keyboard.press("Meta+V")
    // await page.keyboard.press("Enter")
    await page.locator("[title='Search']").focus()
    await page.keyboard.press("ArrowLeft")
    await page.keyboard.down("Shift")

    for(let i=0;i<'otwani!'.length;i++)

        {
            await page.keyboard.press("ArrowLeft")

        }
        await page.keyboard.up("Shift")
        await page.keyboard.press("Backspace")

})