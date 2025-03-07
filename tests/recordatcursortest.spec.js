import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/BakkappaN');
  await page.locator('ol').click();
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('dfjlkhh');
  await page.getByRole('textbox', { name: 'Username or email address' }).press('Enter');
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('dfjlkhhl');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('xjlbjd;');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');

  await page.getByRole('button', { name: '34665', exact: true }).click();
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();await page.getByRole('main').click();
  await page.locator('#js-flash-container div').first().click();
  await page.getByText('Incorrect username or').click();
  await page.locator('#js-flash-container div').first().click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});