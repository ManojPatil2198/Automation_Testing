// Include playwright module

// write a test 
const { test, expect } = require('@playwright/test');
test(' Validate Flipkart title', async ({ page }) => {
    // go to youtube /URL
    await page.goto('https://www.flipkart.com/')

    // search with keywords/name
    await page.getByPlaceholder('Search for Products, Brands').click();
    await page.getByPlaceholder('Search for Products, Brands').fill('mobiles');

    await expect(page.getByRole('button', { name: 'Search for Products, Brands' })).toBeEnabled();
    await page.getByRole('button', { name: 'Search for Products, Brands' }).click();
    
    await page.waitForTimeout(5000);
    //click on playlist
    
    
    
    // validate title
    
    await page.getByRole('link', { name: 'Flipkart', exact: true }).click();

    

})
