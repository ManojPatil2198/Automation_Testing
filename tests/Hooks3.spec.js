import {test,expect} from '@playwright/test';
  
let page;   

test.beforeAll(async({browser}) =>{
page=await browser.newPage()
  await page.goto('https://demoblaze.com/index.html')

 //login
 await page.locator('#login2').click()
 await page.locator('#loginusername').fill('Manoj')
 await page.locator('#loginpassword').fill('12345')
 await page.locator("//*[@id='logInModal']/div/div/div[3]/button[2]").click()

})
   test.afterAll(async() =>{
     //logout
  await page.locator('#logout2').click()

   })
test('Home page Test', async() =>{
 // home page
 const products = await page.$$('.hrefch')
 expect(products).toHaveLength(9)

})
test('Add Product to cart Test', async() =>{
 // add product to cart
 await page.locator("//*[@id='tbodyid']/div[1]/div/div/h4/a").click()
 await page.locator('#tbodyid > div.row > div > a').click()


 page.on('dialog',async dialog =>{
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
    })
    
})