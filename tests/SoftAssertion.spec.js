const {test,expect} = require('@playwright/test')

test('soft assertion',async ({page}) => {

 await page.goto('https://www.demoblaze.com/index.html')

//     // hard assertion
//     await expect(page).toHaveTitle('STORE1213')
//    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
//    await expect(page.locator('.navbar-brand')).toBeVisible()

       // soft assertion
       await expect.soft(page).toHaveTitle('STORE1213')
       await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')
       await expect.soft(page.locator('.navbar-brand')).toBeVisible()
    


})