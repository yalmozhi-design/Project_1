
const {expect} = require('@playwright/test')

class authPage {

constructor(page)
{

this.page=page
this.username = "[placeholder='Enter Email']"
this.password="[placeholder='Enter Password']"
this.submit = "[type='submit']"
this.url = "https://freelance-learn-automation.vercel.app/login"

}

async LoginApp()

{

await this.page.fill(this.username)
await this.page.fill(this.password)

}
async clickApp()

{

await this.page.fill(this.submit).click()

}
async loginUrl() 

{
    await this.page.goto(this.url)
}

}

module.exports=authPage;

