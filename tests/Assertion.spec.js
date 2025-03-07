const { test, expect } = require('@playwright/test');

test('AssertionTest', async ({ page }) => {

  //open app url
  await page.goto('https://demo.nopcommerce.com/register')

  //1) expect(page).toHaveURL() - page has URL
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

  //2) expect(page).toHaveTitle()- page has title
  await expect(page).toHaveTitle('nopCommerce demo store. Register')

  //3) expect (locator).toBeVisible - element is visible
  const logoElement = await page.locator('.header-logo')
  await expect(logoElement).toBeVisible()

  // 4- expect(locator).toBeEnabled()-control is enbled
  const searchStoreBox = await page.locator('#small-searchterms')
  await expect(searchStoreBox).toBeEnabled()

  //5-expect(locator).toBeChecked () - radio/checkbox is checked
  //radio button 
  const maleRadioButton = await page.locator('#gender-male')
  await maleRadioButton.click()// select radio button
  await expect(maleRadioButton).toBeChecked()


  // check box 
  const newletterCheckBox = await page.locator('#Newsletter')
  await expect(newletterCheckBox).toBeChecked()

  // 6- expect(locator).toHaveAttribute () - element has attribute
  const regButton = await page.locator('#register-button')
  await expect(regButton).toHaveAttribute('type', 'submit')

  //7- expect(locator).toHaveText() - element matches text
  await expect(await page.locator('.page-title h1')).toHaveText('Register') // full text


  // 8-expect(locator).toContainText() - element contains text
  await expect(await page.locator('.page-title h1')).toContainText('Reg')// partial value text


  // 9- expect(locator).toHaveValue(value)  -input has a value
   const emailInput = await page.locator('#Email')
   await emailInput.fill('test@demo.com')
   await expect(emailInput).toHaveValue('test@demo.com')


   // 10-expect (locator).toHaveCount() - list of elements has given length


})