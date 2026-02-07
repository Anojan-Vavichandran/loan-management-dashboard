import { test, expect } from '@playwright/test';

test.describe('Loan Management Dashboard E2E', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173'); 
   //login
    const loginBtn = page.getByRole('button', { name: /Enter as Admin/i });
    if (await loginBtn.isVisible()) {
      await loginBtn.click();
    }
  });

  // Borrower Selection
  test('should update borrower details in center pane when selected', async ({ page }) => {
    const secondCard = page.locator('aside >> div.cursor-pointer').nth(1);
    const borrowerName = await secondCard.locator('h3').textContent();

    await secondCard.click();
    const detailHeader = page.locator('section >> h2');
    await expect(detailHeader).toHaveText(borrowerName || '');
  });

  // Accordion Expand/Collapse
  test('should expand and collapse AI Insights accordion', async ({ page }) => {
    const accordionTrigger = page.getByText('AI Explainability & Insights');
    const flagText = 'Income Inconsistent'; 

   
    await accordionTrigger.click();
    await expect(page.getByText(flagText)).not.toBeVisible();

  
    await accordionTrigger.click();
    await expect(page.getByText(flagText).first()).toBeVisible();
  });

  //Button clicks log appropriate console outputs
  test('should log correct action to console on button click', async ({ page }) => {
    const logs: string[] = [];
    page.on('console', msg => logs.push(msg.text()));

    await page.getByRole('button', { name: 'Approve Loan' }).click();
    expect(logs.some(log => log.includes('Action: Approve Loan'))).toBeTruthy();
  });
});