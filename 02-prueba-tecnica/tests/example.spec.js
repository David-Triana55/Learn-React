// @ts-check
import { test, expect } from '@playwright/test'

test('app shows random fact url', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')
  console.log({ textContent, imageSrc })
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith('https://cataas.com/cat/says/')).toBeTruthy()
})
