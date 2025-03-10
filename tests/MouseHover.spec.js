const {test,expect} = require('@playwright/test')

test('Mouse hover',async ({page}) =>{

  await page.goto('https://demo.opencart.com/')

  const desktops = await page.locator('#narbar-menu > ul > li:nth-child(1) > a')
   const macbook = await page.locator("//*[@id='narbar-menu']/ul/li[1]/div/div/ul/li[2]/a")
  
   //mouse hover
   await desktops.hover()
   await macbook.hover()

   await page.waitForTimeout(5000)


})