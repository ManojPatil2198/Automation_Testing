const {test,expect} = require('@playwright/test')

test('Mouse Right Click', async ({page}) =>{
  
 await page.goto ('https://swisnl.github.io/jQuery-contextMenu/demo.html')
  
 const button = await page.locator("body > div > section > div > div > div > p > span")

   // right click action
   await button.click({button :'right'})
   
    await page.waitForTimeout(4000)

})