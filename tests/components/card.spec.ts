import { test, expect } from "@playwright/test";

test.describe("Card Component", () => {
  test("renders default card", async ({ page }) => {
    await page.goto("/?story=core---card--default");
    await page.waitForSelector(".rt-Card");

    const card = page.locator(".rt-Card").first();
    await expect(card).toBeVisible();
  });

  test("renders glass variant", async ({ page }) => {
    await page.goto("/?story=core---card--glass");
    await page.waitForSelector(".rt-Card");

    const card = page.locator(".gn-Card--glass").first();
    await expect(card).toBeVisible();
  });

  test("renders size variants", async ({ page }) => {
    await page.goto("/?story=core---card--sizes");
    await page.waitForSelector(".rt-Card");

    const cards = page.locator(".rt-Card");
    await expect(cards).toHaveCount(3); // 3 sizes (1, 2, 3)
  });
});
