import {test,expect} from '@playwright/test';

test('Home page Test', async({page}) =>{
 await page.goto('https://demoblaze.com/index.html')
 //login
 await page.locator('#login2').click()
 await page.locator('#loginusername').fill('Manoj')
 await page.locator('#loginpassword').fill('12345')
 await page.locator("//*[@id='logInModal']/div/div/div[3]/button[2]").click()
 // home page
 const products = await page.$$('.hrefch')
 expect(products).toHaveLength(9)

  //logout
  await page.locator('#logout2').click()

})
test('Add Product to cart Test', async({browserName,page}) =>{
  if(browserName!== 'firefox')test.skip()

    await page.goto('https://demoblaze.com/index.html')
     //login
    await page.locator('#login2').click()
 await page.locator('#loginusername').fill('Manoj')
 await page.locator('#loginpassword').fill('12345')
 await page.locator("//*[@id='logInModal']/div/div/div[3]/button[2]").click()

 // add product to cart
 await page.locator("//*[@id='tbodyid']/div[1]/div/div/h4/a").click()
 await page.locator('#tbodyid > div.row > div > a').click()


 page.on('dialog',async dialog =>{
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
    })
    
    //logout
    await page.locator('#logout2').click()

})