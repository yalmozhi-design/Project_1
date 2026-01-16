
// if we want to use multiple data's in that case we can use dada driven playwright
//create data with the array
// use .desribe function
//use for loop to iterate the data's 
// use .desribe function to call that variable to access the data's for test


const {test,expect} = require('@playwright/test')
const testData = (JSON.parse(JSON.stringify(require("../testDataData.json"))))

test.describe("data driven tests", () => {
    
for ( const data of testData) 
{

test.describe(`driven tests ${data.id}`, () =>  {

test("verify the", async function({page}) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)
    await page.getByPlaceholder("Username").fill(data.Username)
    await page.getByPlaceholder("Password").fill(data.Password)
    page.pause()


})
    
})

}

})