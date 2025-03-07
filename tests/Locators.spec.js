const { test, expect } = require("@playwright/test");

test('Locators', async ({ page }) => {

  await page.goto("https://www.demoblaze.com/index.html")

  //click on logic button -property
  await page.locator("#login2").click()
  // await page.click("#login2")

  //provide username -css
  // there are three types of check the loacator
  await page.locator('#loginusername').fill("Manoj")
  // await page.fill('#loginusername')
  //await page.type('#loginusername', "Manoj")

  //provide password -css
  await page.locator('#loginpassword').fill("12345")

  //click on  login button -x path
  await page.locator("[onclick='logIn()']").click()

  //click on logout button -xpath
  const logoutlink = await page.locator("[onclick='logOut()']")

  await expect(logoutlink).toBeVisible()

  //await page.waitForTimeout(2000)
  await page.close()


})