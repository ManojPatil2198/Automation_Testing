  const {test,expect} = require('@playwright/test');
const { log } = require('console');
//only
/*   test.only('test1',async({page}) =>{
   console.log('this is test1');
   })*/

//skip
/*test.skip('test2',async({page}) =>{
    console.log('this is test2');
    
})

test('test3',async({page,browserName}) =>{
    console.log('this is test3');
    if(browserName==='firefox')test.skip()
})*/

//Fixme
 /*test('test4',async({page}) =>{
 test.fixme()
 console.log('this is test4..');
 
 })*/

 // Fail
 /*test('test5',async({page}) =>{
    test.fail()
    console.log('this is test5..');
  expect(1).toBe(2);// if both exp & Actual is failed then test pass
}) */

  // slow
  test('test6',async({page}) =>{
    test.slow();
    await page.goto('https://demoblaze.com/index.html')
    console.log('this is test6..');

  })