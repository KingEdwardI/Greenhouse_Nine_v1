import { test, expect } from "@playwright/test";
import {
  extractTextFromPage,
  containsText,
  containsAllTexts,
} from "../utils/ocr";

test.describe("Text Component", () => {
  test("renders default text", async ({ page }) => {
    await page.goto("/?story=typography---text--default");
    // Wait for component to render
    await page.waitForTimeout(500);

    const ocrResult = await extractTextFromPage(page);

    expect(containsText(ocrResult, "Default")).toBe(true);
    expect(containsText(ocrResult, "text")).toBe(true);
  });

  test("renders all size variants", async ({ page }) => {
    await page.goto("/?story=typography---text--sizes");
    await page.waitForTimeout(500);

    const ocrResult = await extractTextFromPage(page);

    // All size labels should be visible
    expect(containsText(ocrResult, "Size")).toBe(true);
  });

  test("renders all weight variants", async ({ page }) => {
    await page.goto("/?story=typography---text--weights");
    await page.waitForTimeout(500);

    const ocrResult = await extractTextFromPage(page);

    expect(
      containsAllTexts(ocrResult, ["Light", "Regular", "Medium", "Bold"])
    ).toBe(true);
  });
});
