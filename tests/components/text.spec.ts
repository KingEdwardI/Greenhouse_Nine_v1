import { test, expect } from "@playwright/test";

test.describe("Text Component", () => {
  test("renders default text", async ({ page }) => {
    await page.goto("/?story=typography---text--default");
    await page.waitForSelector("span, p");

    await expect(page.getByText("Default text")).toBeVisible();
  });

  test("renders all size variants", async ({ page }) => {
    await page.goto("/?story=typography---text--sizes");
    await page.waitForSelector("span, p");

    await expect(page.getByText("Size 1")).toBeVisible();
    await expect(page.getByText(/Size 2/)).toBeVisible();
    await expect(page.getByText("Size 3")).toBeVisible();
    await expect(page.getByText("Size 4")).toBeVisible();
    await expect(page.getByText("Size 5")).toBeVisible();
  });

  test("renders all weight variants", async ({ page }) => {
    await page.goto("/?story=typography---text--weights");
    await page.waitForSelector("span, p");

    // Use exact match to avoid matching sidebar "Switch to light theme"
    await expect(page.getByText("Light", { exact: true })).toBeVisible();
    await expect(page.getByText("Regular", { exact: true })).toBeVisible();
    await expect(page.getByText("Medium", { exact: true })).toBeVisible();
    await expect(page.getByText("Bold", { exact: true })).toBeVisible();
  });
});
