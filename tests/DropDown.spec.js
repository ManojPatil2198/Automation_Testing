const { test, expect } = require('@playwright/test')

test("Handle dropdowns", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com')

    //Multiple ways to select option from the dropdown
    //await page.locator('#country').selectOption({label:'India'})//label visible text
    // await page.locator('#country').selectOption('India') //visible text
    //await page.locator('#country').selectOption({value:'uk'}) //by using value
    //await page.locator('#country').selectOption({ index: 1 }) // by using index
    //await page.selectOption('#country', 'India')// by using  text

    //Assertions
    //1) - check number of options in dropdown - Approach1
    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10)

    //2)- check number of options in dropdown- Approach2
    //const options = await page.$$('#country option')
    //console.log("Number of options :", options.length)    
    //await expect(options.length).toBe(10)

    //03) - check presence of value in the dropdown -Approach1
    //  const content = await page.locator('#country').textContent()
    //   await expect(content.includes('India')).toBeTruthy()

    //04)-check presence of value in the dropdown - Approach 2-using looping
    const options = await page.$$('#country option')
    let status = false

    for (const option of options) {
    // console.log(await option.textContent());
    let value = await option.textContent()
     if(value.includes('France'))
     {
        status=true;
        break;
     }
    }
     expect(status).toBeTruthy()


    await page.waitForTimeout(5000)

})