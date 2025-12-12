import { test, expect } from "@playwright/test";

test.describe("Select Component", () => {
  test("renders default select", async ({ page }) => {
    await page.goto("/?story=forms---select--default");
    await page.waitForSelector('button[role="combobox"]');

    const select = page.getByRole("combobox");
    await expect(select).toBeVisible();
  });

  test("opens dropdown and allows selection", async ({ page }) => {
    await page.goto("/?story=forms---select--default");
    await page.waitForSelector('button[role="combobox"]');

    const select = page.getByRole("combobox");
    await select.click();

    // Options should be visible
    const options = page.getByRole("option");
    await expect(options.first()).toBeVisible();

    // Select an option
    await options.first().click();

    // Dropdown should close
    await expect(options.first()).not.toBeVisible();
  });

  test("renders size variants", async ({ page }) => {
    await page.goto("/?story=forms---select--sizes");
    await page.waitForSelector('button[role="combobox"]');

    const selects = page.getByRole("combobox");
    await expect(selects).toHaveCount(3); // 3 sizes
  });
});
