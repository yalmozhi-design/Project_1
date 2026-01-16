
const {expect} = require('@playwright/test')

class Homepage {

    constructor(page)
    {

        this.page=page
        this.menu="[alt='menu']"
        this.signout="//*[text()='Sign out'] "
    }
    
    async logout()
    {
          
        await  this.page.click(this.menu)
        await  this.page.click(this.signout)

    }
}

module.exports=Homepage; 