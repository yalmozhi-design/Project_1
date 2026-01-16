const {test,expect} = require('@playwright/test')
const loginpage = require('../loginPage')
const homepage =  require("../homepage")


test ("access login using the pom", async ({page}) => 
{
await page.goto("https://freelance-learn-automation.vercel.app/login")
const loggin = new loginpage(page)
const homepa = new homepage(page)
await loggin.loginApplication("admin@email.com","admin@123")
await loggin.verifyThePage()
await  homepa.logout()
await  loggin.verifyThePagLogine()


})