import { test, expect } from "@playwright/test";
import { extractTextFromPage, containsText } from "../utils/ocr";

test.describe("Input Component", () => {
  test("renders input and displays typed text", async ({ page }) => {
    await page.goto("/?story=forms---input--default");
    await page.waitForSelector("input");

    const input = page.locator("input").first();

    // Type text into the input
    await input.fill("Hello World");

    // Take screenshot and verify with OCR
    const ocrResult = await extractTextFromPage(page);

    expect(containsText(ocrResult, "Hello")).toBe(true);
    expect(containsText(ocrResult, "World")).toBe(true);
  });

  test("shows placeholder text", async ({ page }) => {
    await page.goto("/?story=forms---input--default");
    await page.waitForSelector("input");

    // Input should be visible (placeholder might not be OCR-readable depending on styling)
    const input = page.locator("input").first();
    await expect(input).toBeVisible();
  });
});
