 import {test,expect} from '@playwright/test'
 import { LoginPage } from '../pages/Loginpage'
import { HomePage } from '../pages/HomePage'
import { CartPage } from '../pages/CartPage'

 test ('test', async({page}) =>{

//login 
 const login = new LoginPage(page)
 await login.gotoLoginPage()
 await login.loginUser('Manoj','12345')
 await page.waitForTimeout(3000)

// Home
const home =new HomePage(page)
await home.addProductToCart("Nexus 6")
await page.waitForTimeout(3000)
await home.gotoCart()

//Cart
 const cart =new CartPage(page)
 await page.waitForTimeout(3000)
 const status = await cart.checkProductInCart('Nexus 6')
expect(await status).toBe(true)

 })