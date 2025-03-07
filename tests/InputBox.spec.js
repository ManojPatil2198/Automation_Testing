const { test, expect } = require('@playwright/test');

test('AssertionTest', async ({ page }) => { 

await page.goto('https://testautomationpractice.blogspot.com')

//inputbox - firstname
await expect( await page.locator("//input[@id='name']")).toBeVisible()
await expect( await page.locator("//input[@id='name']")).toBeEmpty()
await expect( await page.locator("//input[@id='name']")).toBeEditable()
await expect( await page.locator("//input[@id='name']")).toBeEnabled()



 await page.locator("//input[@id='name']").fill("Jhon")
 //page.fill("input[@id='name']","jhon")

 await page.waitForTimeout(5000)// pausing code

})