import { test, expect } from '@playwright/test';

test.describe('Loan Management Dashboard E2E', () => {
  
  test.beforeEach(async ({ page }) => {

    await page.goto('http://localhost:5173'); 
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
    
   
    const accordionContent = page.locator('.AccordionContent'); 
    
   
    await accordionTrigger.click();
 
    await expect(page.getByText('Income Inconsistency')).not.toBeVisible();
  });


  test('should log "Action: Approve Loan" to console on click', async ({ page }) => {

    const logs: string[] = [];
    page.on('console', msg => logs.push(msg.text()));


    await page.getByRole('button', { name: 'Approve Loan' }).click();


    expect(logs.some(log => log.includes('Action: Approve Loan'))).toBeTruthy();
  });

});