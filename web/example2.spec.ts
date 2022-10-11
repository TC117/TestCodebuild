import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.google.com/');

  await page.getByRole('combobox', { name: 'Tìm kiếm' }).click();

  await page.getByRole('combobox', { name: 'Tìm kiếm' }).fill('banana');

  await page.getByRole('combobox', { name: 'Tìm kiếm' }).press('Enter');

  await expect(page).toHaveTitle('banana*')

});