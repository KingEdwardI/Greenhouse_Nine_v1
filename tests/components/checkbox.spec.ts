import { test, expect } from "@playwright/test";
import { extractTextFromPage, containsText } from "../utils/ocr";

test.describe("Checkbox Component", () => {
  test("renders default checkbox with label", async ({ page }) => {
    await page.goto("/?story=forms---checkbox--default");
    await page.waitForTimeout(500);

    const ocrResult = await extractTextFromPage(page);

    expect(containsText(ocrResult, "Check")).toBe(true);
  });

  test("renders size variants", async ({ page }) => {
    await page.goto("/?story=forms---checkbox--sizes");
    await page.waitForTimeout(500);

    const ocrResult = await extractTextFromPage(page);

    // Should show Size labels for different sizes
    expect(containsText(ocrResult, "Size")).toBe(true);
  });

  test("checkbox can be toggled and state changes visually", async ({
    page,
  }) => {
    await page.goto("/?story=forms---checkbox--default");
    await page.waitForSelector('button[role="checkbox"]');

    // Get initial visual state
    const checkbox = page.locator('button[role="checkbox"]');

    // Click to toggle
    await checkbox.click();

    // Verify the checkbox is now checked via aria attribute
    await expect(checkbox).toHaveAttribute("aria-checked", "true");

    // Click again to uncheck
    await checkbox.click();
    await expect(checkbox).toHaveAttribute("aria-checked", "false");
  });
});
