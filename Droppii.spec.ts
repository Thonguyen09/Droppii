import { test, expect } from '@playwright/test';

test('homepage-goto', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await expect(page).toHaveURL('https://magento.softwaretestingboard.com/')
  await expect(page).toHaveScreenshot("magento.png")
});

test('signup-submit-without-input', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Create an Account' }).click();
  await page.getByRole('button', { name: 'Create an Account' }).click();
});

test('signup-wrong-input', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Create an Account' }).click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('0');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('0');
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('phucthonguyen');
  await page.getByRole('textbox', { name: 'Password*', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('1');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('1');
  await page.getByRole('button', { name: 'Create an Account' }).click();
});

test('signup-success', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Create an Account' }).click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Tho');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Nguyen');
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('phucthonguyen09@gmail.com');
  await page.getByRole('textbox', { name: 'Password*', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('Testpassword@123');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('Testpassword@123');
  await page.getByRole('button', { name: 'Create an Account' }).click();
});

test('signin-without-input', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
});

test('signin-wrong-email', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('phucthonguyen08@gmail.com');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Testpassword@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
});

test('signin-wrong-password', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('phucthonguyen09@gmail.com');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Testpassword@1234');
  await page.getByRole('button', { name: 'Sign In' }).click();
});

test('signin-success', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('phucthonguyen09@gmail.com');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Testpassword@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
});