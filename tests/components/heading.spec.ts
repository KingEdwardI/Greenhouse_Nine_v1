import { test, expect } from "@playwright/test";
import {
  extractTextFromPage,
  containsText,
  containsAllTexts,
} from "../utils/ocr";

test.describe("Heading Component", () => {
  test("renders default heading text correctly", async ({ page }) => {
    await page.goto("/?story=typography---heading--default");
    await page.waitForTimeout(500);

    const ocrResult = await extractTextFromPage(page);

    expect(containsText(ocrResult, "Default")).toBe(true);
    expect(containsText(ocrResult, "Heading")).toBe(true);
  });

  test("renders all size variants", async ({ page }) => {
    await page.goto("/?story=typography---heading--sizes");
    await page.waitForTimeout(500);

    const ocrResult = await extractTextFromPage(page);

    expect(containsText(ocrResult, "Size")).toBe(true);
  });

  test("renders all heading levels h1-h6", async ({ page }) => {
    await page.goto("/?story=typography---heading--levels");
    await page.waitForTimeout(500);

    const ocrResult = await extractTextFromPage(page);

    // Should show H1 through H6
    expect(
      containsAllTexts(ocrResult, ["H1", "H2", "H3", "H4", "H5", "H6"])
    ).toBe(true);
  });
});
