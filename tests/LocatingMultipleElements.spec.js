const { test, expect } = require('@playwright/test');

test('LocateMultipleElements', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/index.html')

  //  const links = await page.$$('a');//anchor tag

  //  for( const link of links)
  //   {
  //    const linktext = await link.textContent()
  //    console.log(linktext);

  //  }
  // products x-path
  await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")

  const products = await page.$$(".card-title > a ")

  for (const product of products) {

    const productName = await product.textContent()
    console.log(productName);

  }

})