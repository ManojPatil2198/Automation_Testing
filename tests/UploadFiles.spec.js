const {test,expect} = require('@playwright/test')

test('Single File',async ({page}) =>{

    await page.goto('https://www.foundit.in/')

await page.waitForSelector('mqfihd-upload')
await page.locator('.mqfihd-upload').click()
 
 await page.locator('#file-upload')

})
 /*test('Multiple Files' ,async({page}) =>{



}) */