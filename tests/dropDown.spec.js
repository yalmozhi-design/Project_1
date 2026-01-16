 const {test,expect} = require('@playwright/test')


test("dropdown validation",async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
//get single element different selector
//value and index
let val = await page.locator("[name='state']").selectOption({value:"Tamil Nadu"})
console.log(val)
let ind = await page.locator("[name='state']").selectOption({index:5})
console.log(ind);
//get multiple elements and do assertion and get text  different selector
let mul = await page.locator("#state")
  let allVal = await mul.textContent()
  console.log("dropdownvalues"+ allVal)
  expect(allVal.includes("Andhra Pradesh")).toBeTruthy()

//select  multiple elements 
  await page.waitForTimeout(3000)
await page.locator("#hobbies").selectOption('Swimming','Singing')

//get multiple elements and do assertion, using for loop
let values = await page.$("[name='state']")
let options = await values.$$("option")
let ddstatus=false

for(let i=0;i<options.length;i++){
let elements = options[i];
let element = await elements.textContent()
console.log("elements"+ element);
if(element.includes("Delhi"))
    
{
    ddstatus=true
    break

}

}
expect(ddstatus).toBeTruthy();

})





