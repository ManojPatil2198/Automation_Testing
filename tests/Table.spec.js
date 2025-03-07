const { test, expect } = require('@playwright/test')
const { table } = require('console')

test("Handling table", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const Table = await page.locator('#productTable')

    //total number of rows & columns
    const columns = await Table.locator('thead > tr > th')//
    // #productTable > thead > tr > th:nth-child(1) -selecotr
    //*[@id="productTable"]/thead/tr/th[1] -x path

    console.log('Number of columns:', await columns.count());
    expect(await columns.count()).toBe(4)

    const rows = await Table.locator("tbody tr")
    console.log(rows)
    console.log('Number of rows:', await rows.count());
    expect(await rows.count()).toBe(5)

    //2- select checkbox for product 4

    //  const   machedRow =rows.filter({
    //     has:page.locator('td'),
    //     hasText :'Smartwatch'

    //   })
    //   await machedRow.locator("[type='checkbox']").check()

    //3-) select multiple products by re-usable function

    // 4- print all product details using loop
    /* for (let i = 0; i < await rows.count(); i++) {
         const row = rows.nth(i)
         const tds = row.locator('td')
 
         for (let j = 0; j < await tds.count() - 1; j++) {
             console.log(await tds.nth(j).textContent())
 
       
             } */
    //}
    // 5) read data from all pages in the table
    const  pages = await page.locator('.pagination li a ')
    console.log('Number of pages in the table:', await pages.count());

    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
         await pages.nth(p).click()
        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i)
            const tds = row.locator('td')
    
            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent())

                }
    }
      await page.waitForTimeout(3000)
    }
    await page.waitForTimeout(3000)
    // await page.waitForTimeout(5000)
})
// async function selectProduct(rows, page, name) {
//     const machedRow = rows.filter({
//         has: page.locator('td'),
//         hasText: 'Smartwatch'

//     })
//     await machedRow.locator("[type='checkbox']")

