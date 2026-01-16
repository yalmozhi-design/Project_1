//playwright has method to handle alerts automatically
//javascripts alerts are alert,confirm and prompt
//before click alerts in dialog window use page.on listener to cature the events do assertion for the  type/message/ and accept or deismiss
const {test,expect} = require('@playwright/test')

test("handle alert in dialog window", async ({page}) => 
{
await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

page.on('dialog',async (dialogWindw) =>
{
    expect (dialogWindw.type()).toContain("alert")
    expect (dialogWindw.message()).toContain("I am a JS Alert")
    await dialogWindw.accept()

})

await page.locator("[onclick='jsAlert()']").click()
await page.waitForTimeout(3000)
})

test("handle confirm in dialog window", async ({page}) => 
    {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    
    page.on('dialog',async (dialogWindw) =>
    {
        expect (dialogWindw.type()).toContain("confirm")
        expect (dialogWindw.message()).toContain("I am a JS Confirm")
        await dialogWindw.dismiss()
        // await dialogWindw.accept()
    
    })
    
    await page.locator("[onclick='jsConfirm()']").click()
    await page.waitForTimeout(3000)
    })
    test("handle prompt message in dialog window", async ({page}) => 
        {
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
        
        page.on('dialog',async (dialogWindw) =>
        {
            expect (dialogWindw.type()).toContain("prompt")
            expect (dialogWindw.message()).toContain("I am a JS prompt")
            await dialogWindw.dismiss()
            // await dialogWindw.accept("promptmessage")
        
        })
        
        await page.locator("[onclick='jsPrompt()']").click()
        await page.waitForTimeout(3000)
        })