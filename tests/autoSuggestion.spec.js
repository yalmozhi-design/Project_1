const {test,expect} = require('@playwright/test')


test("handling auto suggestion values using keyboard actions",async ({page}) =>
    
    {
             await page.goto("https://www.google.com")
             await page.locator("[title='Search']").fill("playwright")
             await page.waitForSelector("//*[@role='listbox'] //li")
             await page.keyboard.press("ArrowDown")
             await page.keyboard.press("ArrowDown")
             await page.keyboard.press("ArrowDown")
             await page.keyboard.press("ArrowDown")
             await page.keyboard.press("Enter")
    } )

    test.only("auto suggestion values using for loop",async ({page}) =>
    
        {
                 await page.goto("https://www.google.com")
                 await page.locator("[title='Search']").fill("mukesh otwani")
                //  await page.waitForSelector("//li[@role='presentation']")
                 let element = await page.$$("//li[@role='presentation'] //*[@role='option']  ")

                 for(let i =0;i<element.length;i++)
                 {
                       let text =  await element[i].textContent()

                 if(text.includes('playwright'))
               
                {
                    await element[i].click()
                    break
               
                }
                 }
        } )