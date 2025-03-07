const { test, expect } = require('@playwright/test')
const exp = require('constants')

test("Handle dropdown", async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/')

  //select multiple options for multi select dropdown
  //await page.selectOption('#colors',['Blue','Red','Yellow'])

  // Assertions
  //1) check number of option in dropdown
  //  const options = await page.locator('#colors option')
  //  await expect(options).toHaveCount(7);

  // 2) check number of option in dropdown using JS array
  //const options = await page.$$('colors option')
  // await expect(options).toHaveCount(7) 
  //console.log("Number of options:",options.length);
  //await expect(options.length).toBe(0);

  //3) check presence of value in the dropdown
  const content = await page.locator('#colors').textContent()
  await expect(content.includes('Blue')).toBeTruthy()



  await page.waitForTimeout(5000)

})