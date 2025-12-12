import { test, expect } from "@playwright/test";

test.describe("Label Component", () => {
  test("renders default label", async ({ page }) => {
    await page.goto("/?story=forms---label--default");
    await page.waitForSelector("label[for='field']");

    const label = page.locator("label[for='field']");
    await expect(label).toBeVisible();
    await expect(label).toContainText("Label");
    await expect(label).toHaveAttribute("for", "field");
  });

  test("renders required label with asterisk", async ({ page }) => {
    await page.goto("/?story=forms---label--required");
    await page.waitForSelector("label[for='field']");

    // Label element should be visible
    const label = page.locator("label[for='field']");
    await expect(label).toBeVisible();
    await expect(label).toContainText("Required Label");

    // Required asterisk should be present
    await expect(label).toContainText("*");
    await expect(label).toHaveAttribute("for", "field");
  });

  test("label has correct htmlFor attribute", async ({ page }) => {
    await page.goto("/?story=forms---label--default");
    await page.waitForSelector("label[for='field']");

    const label = page.locator("label[for='field']");
    await expect(label).toHaveAttribute("for", "field");
  });

  test("required label shows asterisk indicator", async ({ page }) => {
    await page.goto("/?story=forms---label--required");
    await page.waitForSelector("label[for='field']");

    const label = page.locator("label[for='field']");
    // The asterisk is in a separate span within the label
    const asterisk = label.locator("span").filter({ hasText: "*" });
    await expect(asterisk).toBeVisible();
  });
});
