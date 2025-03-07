const { test, expect } = require('@playwright/test')

test.skip('Alert with ok', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/')

  //Enabling dialog window handler  
  page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alert box!')
    await dialog.accept()

  })
  await page.click("[onclick='myFunctionAlert()']")
  await page.waitForTimeout(5000)

})

test.skip('Confirmation Dialog with ok and cancel', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/')

  //Enabling dialog window handler  
  page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('Confirm')
    expect(dialog.message()).toContain('You pressed OK!')
    //expect(dialog.defaultValue()).toContain('Harry Potter')
    await dialog.accept() // close by using ok button
    // await dialog.dismiss()// close by using cancel

  })
  // await page.click("[onclick='myFunctionAlert()']")
  await page.click("[onclick='myFunctionConfirm()']")

  await expect(page.locator('#demo')).toHaveText('You pressed OK!')



  await page.waitForTimeout(5000)

})


test('Prompt Dialog', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/')

  //Enabling dialog window handler  
  page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('prompt')
    expect(dialog.message()).toContain('Please enter your name:')
    expect(dialog.defaultValue()).toContain('Harry Potter')

    await dialog.accept() // close by using ok button
    // await dialog.dismiss()// close by using cancel

  })
  // await page.click("[onclick='myFunctionAlert()']")
  await page.click("[onclick='myFunctionPrompt()']")

  await expect(page.locator("[id='demo']")).toHaveText('User cancelled the prompt.')





  await page.waitForTimeout(5000)

})