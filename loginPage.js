

//page object modal - it is designpattern used for easy maintanance and re usability
//create page object modal page (with the constructor to initialize the perticular page and methods to perom operations )and export that module
//import  that module into other pages by using the object instance with the new kew word we can call those mothods in different pages

const {expect} = require('@playwright/test')

class Loginpage {

constructor (page) 
{

    this.page=page
    this.username="[placeholder='Enter Email']"
    this.password="[placeholder='Enter Password']"
    this.submit = "[type='submit']"
    this.manage="//*[text()='Manage']"
    this.signin="//*[text()='Sign In'] "
}

async loginApplication (user,pass) 

{
    await this.page.fill(this.username,user)
    await this.page.fill(this.password,pass)
    await this.page.click(this.submit)
}

async verifyThePage() 

{
    await expect(this.page.locator(this.manage)).toBeVisible()
}

async verifyThePagLogine() 

{
    await expect(this.page.locator(this.signin)).toBeVisible()
}

}


module.exports=Loginpage;