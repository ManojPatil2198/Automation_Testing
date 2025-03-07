const { test, expect } = require('@playwright/test');

test('RadioButtons', async ({ page }) => { 

await page.goto('https://testautomationpractice.blogspot.com')

//Radio button
await page.locator("#male").check()//male
await expect(await page.locator('#male')).toBeChecked()//male

await expect(await page.locator('#female')).isChecked()//female

 await page.waitForTimeout(5000)// pausing code

})