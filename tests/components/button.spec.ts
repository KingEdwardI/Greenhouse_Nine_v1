import { test, expect } from "@playwright/test";
import {
  extractTextFromPage,
  containsText,
  containsAllTexts,
} from "../utils/ocr";

test.describe("Button Component", () => {
  test("renders default button with correct text", async ({ page }) => {
    await page.goto("/?story=forms---button--default");
    await page.waitForSelector("button");

    const ocrResult = await extractTextFromPage(page);

    expect(containsText(ocrResult, "Default")).toBe(true);
    expect(containsText(ocrResult, "Button")).toBe(true);
  });

  test("renders all variant buttons", async ({ page }) => {
    await page.goto("/?story=forms---button--variants");
    await page.waitForSelector("button");

    const ocrResult = await extractTextFromPage(page);

    expect(
      containsAllTexts(ocrResult, ["Solid", "Soft", "Outline", "Ghost"])
    ).toBe(true);
  });

  test("renders all size variants", async ({ page }) => {
    await page.goto("/?story=forms---button--sizes");
    await page.waitForSelector("button");

    const ocrResult = await extractTextFromPage(page);

    // Check for size labels
    expect(containsText(ocrResult, "Size")).toBe(true);
  });

  test("renders color variants", async ({ page }) => {
    await page.goto("/?story=forms---button--colors");
    await page.waitForSelector("button");

    const ocrResult = await extractTextFromPage(page);

    expect(
      containsAllTexts(ocrResult, ["Accent", "Orange", "Red", "Blue", "Purple"])
    ).toBe(true);
  });

  test("renders state variants including disabled and loading", async ({
    page,
  }) => {
    await page.goto("/?story=forms---button--states");
    await page.waitForSelector("button");

    const ocrResult = await extractTextFromPage(page);

    // Should show Normal, Disabled, Loading states
    expect(containsText(ocrResult, "Normal")).toBe(true);
    expect(containsText(ocrResult, "Disabled")).toBe(true);
    expect(containsText(ocrResult, "Loading")).toBe(true);
  });

  test("renders glass variant buttons", async ({ page }) => {
    await page.goto("/?story=forms---button--glass");
    await page.waitForSelector("button");

    const ocrResult = await extractTextFromPage(page);

    expect(containsText(ocrResult, "Glass")).toBe(true);
  });
});
