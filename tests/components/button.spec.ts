import { test, expect } from "@playwright/test";

test.describe("Button Component", () => {
  test("renders default button with correct text", async ({ page }) => {
    await page.goto("/?story=forms---button--default");
    await page.waitForSelector("button");

    // Use Playwright's built-in text assertion
    await expect(page.getByRole("button", { name: "Default Button" })).toBeVisible();
  });

  test("renders all variant buttons", async ({ page }) => {
    await page.goto("/?story=forms---button--variants");
    await page.waitForSelector("button");

    // Verify each variant button is present
    await expect(page.getByRole("button", { name: "Solid" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Soft" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Outline" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Ghost" })).toBeVisible();
  });

  test("renders all size variants", async ({ page }) => {
    await page.goto("/?story=forms---button--sizes");
    await page.waitForSelector("button");

    await expect(page.getByRole("button", { name: "Size 1" })).toBeVisible();
    await expect(page.getByRole("button", { name: /Size 2/ })).toBeVisible();
    await expect(page.getByRole("button", { name: "Size 3" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Size 4" })).toBeVisible();
  });

  test("renders color variants", async ({ page }) => {
    await page.goto("/?story=forms---button--colors");
    await page.waitForSelector("button");

    await expect(page.getByRole("button", { name: /Accent/ })).toBeVisible();
    await expect(page.getByRole("button", { name: "Orange" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Red" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Blue" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Purple" })).toBeVisible();
  });

  test("renders state variants including disabled and loading", async ({ page }) => {
    await page.goto("/?story=forms---button--states");
    await page.waitForSelector("button");

    await expect(page.getByRole("button", { name: "Normal" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Disabled" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Disabled" })).toBeDisabled();
    // Loading button shows "..." when loading, and is also disabled
    await expect(page.getByRole("button", { name: "..." })).toBeVisible();
    await expect(page.getByRole("button", { name: "..." })).toBeDisabled();
  });

  test("renders glass variant buttons", async ({ page }) => {
    await page.goto("/?story=forms---button--glass");
    await page.waitForSelector("button");

    await expect(page.getByRole("button", { name: "Glass Button" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Glass Soft" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Glass Outline" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Glass Disabled" })).toBeVisible();
  });
});
