const {test,expect} = require('@playwright/test')
test.use({viewport:{width:1200,height:1200}})
test("verify the errormessage", async function({page}) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").type("Admin",{delay:100})
    await page.getByPlaceholder("Password").type("admi",{delay:100})
    await page.locator("//*[@type='submit']").click();
   const errorMess =  await page.locator("//p[contains(@class,'alert-content-text')]").textContent()
   console.log(errorMess);
   expect(errorMess).toBe("Invalid credentials")
   expect(errorMess).toContain("Invalid")
   expect(errorMess.includes("Invalid")).toBeTruthy()
   expect(errorMess==="Invalid credentials").toBeTruthy()
  

})