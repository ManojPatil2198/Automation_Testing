import {test,expect} from '@playwright/test';

test('page screenshot',async({page}) =>{
 await page.goto('https://demo.opencart.com/')
  await page.screenshot({path:'tests/screenshots/'+'HomePage.png'})
})

test('Full page screenshot',async({page}) =>{
 await page.goto('https://demoblaze.com/index.html')
 await page.screenshot({path:'tests/screenshots/'+'FullPage.png',FullPage:true})
  

})

test.only('Element screenshot', async({page}) =>{
    await page.goto('https://demoblaze.com/index.html')
    await page.locator("//*[@id='tbodyid']/div[3]/div").screenshot({path:'tests/screenshots/'+'Nexus 6.png'})
    await page.locator("//*[@id='tbodyid']/div[1]/div").screenshot({path:'tests/screenshots/'+'Samsung galaxy s6.png'})
   await page.close()  
})