// using 
// screenshot:'on' config file

import {test,expect} from '@playwright/test'

test('test ',async({page}) =>{
 await page.goto('https://www.demoblaze.com/index.html')

 await page.locator('#login2').click()
 await page.locator('#loginusername').fill('Manoj')
 await page.locator('#loginpassword').fill('12345')
 await page.locator("//*[@id='logInModal']/div/div/div[3]/button[2]").click()

})