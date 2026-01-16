
//
const {test,expect} = require('@playwright/test')

test("handling different tabs", async ({browser})=>
{

   let context = await browser.newContext()
    let   page =   await context.newPage()
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const [newpage] = await Promise.all
    
    ([
        context.waitForEvent("page"),
        page.locator("//*[@href='https://www.facebook.com/groups/256655817858291']").first().click()

    ])


   await  newpage.locator("//*[@role='button'] //*[text()='Create new account']").click()

   await newpage.waitForTimeout(3000)
})