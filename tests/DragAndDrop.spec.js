const { test, expect } = require('@playwright/test')

test(' Drag And Drop', async ({ page }) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const Rome = await page.locator('#box6')

    const Italy = await page.locator('#box106')

    //Approach 1
    /*await Rome.hover()
    await page.mouse.down()

    await Italy.hover()
    await page.mouse.up()

    await page.waitForTimeout(4000)*/

    // Approach 2
     await Rome.dragTo(Italy)

     // Washington to usa
     const Washington = await page.locator('#box3')
     const usa = await page.locator('#box103')

     await Washington.dragTo(usa)

     await page.waitForTimeout(4000)

})

