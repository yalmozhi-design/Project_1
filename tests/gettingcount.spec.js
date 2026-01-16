const {test,expect} = require ('@playwright/test')

test("getting count", async({page})  => 
{

    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.locator("[class='subLink']").click()
    await page.waitForTimeout(3000)
    //  page.waitForLoadState("networkidle") 
    let count = await page.locator("[class='form-check-input'] ").count()
    console.log(count)
    expect(count).toBe(19)
    let box = await page.$$("//label")
    for (let i=0;i<box.length;i++)

    {
           //select all the checkbox
        let text = await box[i].textContent()
        console.log(text)
        await  box[i].click()


        //select one checkbox

        // if (text.includes("TestNG"))
        // {
        //    await  box[i].click()

        // }

}



})