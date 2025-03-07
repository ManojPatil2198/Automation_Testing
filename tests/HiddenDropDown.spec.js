const{test,expect} = require('@playwright/test')

test('Hidden options dropdown',async ({page}) =>{
 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("[name='username']").fill('Admin')
    await page.locator("[name='password']").fill('admin123')
    await page.locator("[type='submit']").click()
  
    page.locator("//span[normalize-space()='PIM']").click()

    //click on drop down
    await page.locator("(//div[@class='oxd-select-text--after'])[3]").click()
   //  # Select the third element (Index starts from 0)
   //  page.locator('[class="oxd-select-text--after"]').nth(2).click() 

    //await page.locator('#app')
     // waiting for options
     await page.waitForTimeout(10000)

     const options = await page.$$("//div[@role='listbox']//span")

     for(let option of options)
     {
        const jobTitle= await option.textContent()
       // console.log(jobTitle);
        if(jobTitle.includes('QA Engineer'))
        {
           await option.click()
           break;

        }
     }
})