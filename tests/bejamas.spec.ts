import { test, expect } from '@playwright/test';

// Helper Functions
async function navigateToCompareCentre(page) {
  await page.goto('/');
  await page.getByRole('button', { name: 'Learn' }).click();
  await page.getByRole('link', { name: 'Compare Centre' }).click();
}

async function clickCMSOptions(page, cmsOptions: string[]) {
  for (const cms of cmsOptions) {
    await page.getByRole('button', { name: cms }).click();
  }
}

async function verifyHeadersContainText(page, headers: string[]) {
  for (const header of headers) {
    await expect(page.locator('h1')).toContainText(header);
  }
}

async function selectCategory(page, category: string) {
  await page.getByLabel('Category').click();
  await page.getByLabel(category).click();
}

// Tests
test('CMS comparison flow', async ({ page }) => {
  const cmsOptions = ['Contentful', 'Strapi', 'Cosmic'];
  const frameworks = ['Next.js', 'Nuxt.js'];

  await navigateToCompareCentre(page);
  await clickCMSOptions(page, cmsOptions);
  await page.locator('div').filter({ hasText: /^Compare$/ }).getByRole('button').click();
  await verifyHeadersContainText(page, cmsOptions);

  // Interact with Cosmic and DecapCMS
  await page.locator('h1').getByText('Cosmic').click();
  await expect(page.locator('h1')).toContainText('Cosmic');
  await page.locator('button').filter({ hasText: 'Cosmic' }).click();
  await page.getByRole('link', { name: 'DecapCMS icon' }).click();
  await page.getByRole('complementary').click();
  await expect(page.locator('h1')).toContainText('DecapCMS');

  // Select category and verify frameworks
  await selectCategory(page, 'Web Frameworks');
  await page.getByRole('link', { name: 'Compare', exact: true }).click();
  await verifyHeadersContainText(page, frameworks);
});

test('Footer content validation', async ({ page }) => {
  const footerTexts = [
    'Learn',
    'Knowledge',
    'Compare Center',
    'For manager',
    'Headless CMS',
    'For developer',
    'Web Frameworks',
    'Static Site Generators',
    'Serverless Databases',
    'Hosting',
    'Adopt modern stack',
    'Guides',
    'Tutorials',
    'Case studies',
  ];

  // Navigate to homepage and validate footer
  await page.goto('/');
  for (const text of footerTexts) {
    await expect(page.getByRole('contentinfo')).toContainText(text);
  }
});
