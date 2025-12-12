import { test, expect } from "@playwright/test";

test.describe("Heading Component", () => {
  test("renders default heading text correctly", async ({ page }) => {
    await page.goto("/?story=typography---heading--default");
    await page.waitForSelector("h1, h2, h3, h4, h5, h6");

    await expect(
      page.getByRole("heading", { name: "Default Heading" })
    ).toBeVisible();
  });

  test("renders all size variants", async ({ page }) => {
    await page.goto("/?story=typography---heading--sizes");
    await page.waitForSelector("h1, h2, h3, h4, h5, h6");

    await expect(page.getByRole("heading", { name: "Size 3" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Size 5" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Size 7" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Size 9" })).toBeVisible();
  });

  test("renders all heading levels h1-h6", async ({ page }) => {
    await page.goto("/?story=typography---heading--levels");
    await page.waitForSelector("h1");

    // Check each heading level exists with correct text
    await expect(page.locator("h1")).toHaveText("H1");
    await expect(page.locator("h2")).toHaveText("H2");
    await expect(page.locator("h3")).toHaveText("H3");
    await expect(page.locator("h4")).toHaveText("H4");
    await expect(page.locator("h5")).toHaveText("H5");
    await expect(page.locator("h6")).toHaveText("H6");
  });
});
