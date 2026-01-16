// test from node module use to write th tests
// expecte from node module use to do assertion
// require in built function in javascript to access the modules
//page is fixture it helps to automate the tests and access the modules
//in JS has promises so for handling we always needs to use asyn in function level and await whenever call the playwight function/methodes

const {test,expect} = require('@playwright/test')

test("my first tests", async function({page}) {

  expect(12).toBe(12);
})
test("my sec tests", async function({page}) {

  expect("yal").toContain("yal")
})
test("my third tests", async function({page}) {

  expect("yal".includes("yal")).toBeTruthy()
})
test("my four tests", async function({page}) {

  expect("yal").toContain("yal")
  expect(true).toBeTruthy();
})

test("my fifth tests", async function({page}) {
  expect(false).toBeFalsy();
})