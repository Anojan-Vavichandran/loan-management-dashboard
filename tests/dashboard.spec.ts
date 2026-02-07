import { test, expect } from '@playwright/test';

test.describe('Loan Management Dashboard E2E', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173'); 
    
    const adminLoginBtn = page.getByRole('button', { name: /Enter as Admin/i });
    await adminLoginBtn.click();
    
    await expect(page.locator('header')).toBeVisible();
  });

  test('should update borrower details when selected from pipeline', async ({ page }) => {
    const borrowerCards = page.locator('aside >> div.cursor-pointer');
    
    const secondCard = borrowerCards.nth(1);
    const borrowerName = await secondCard.locator('h3').textContent();

    await secondCard.click();

    const detailHeader = page.locator('section >> h2');
    await expect(detailHeader).toHaveText(borrowerName || '');
  });


  test('should expand and collapse AI Insights accordion', async ({ page }) => {
    const accordionTrigger = page.getByText('AI Explainability & Insights');
    const flagText = 'Income Inconsistent';

    await accordionTrigger.click();
    await expect(page.getByText(flagText)).not.toBeVisible();


    await accordionTrigger.click();
    await expect(page.getByText(flagText).first()).toBeVisible();
  });

  test('should log "Action: Approve Loan" to console on click', async ({ page }) => {
    const logs: string[] = [];
    page.on('console', msg => logs.push(msg.text()));


    const approveBtn = page.getByRole('button', { name: 'Approve Loan' });
    await approveBtn.click();


    expect(logs.some(log => log.includes('Action: Approve Loan'))).toBeTruthy();
  });


});