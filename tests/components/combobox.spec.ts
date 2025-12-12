import { test, expect } from "@playwright/test";

test.describe("Combobox Component", () => {
  test("renders default combobox with placeholder", async ({ page }) => {
    await page.goto("/?story=forms---combobox--default");
    await page.waitForSelector("input");

    const input = page.getByPlaceholder("Select…");
    await expect(input).toBeVisible();
  });

  test("opens popover and displays options", async ({ page }) => {
    await page.goto("/?story=forms---combobox--default");
    await page.waitForSelector("input");

    const input = page.getByPlaceholder("Select…");
    await input.click();

    // Check that search input appears
    const searchInput = page.getByPlaceholder("Search…");
    await expect(searchInput).toBeVisible();

    // Check that options are visible
    await expect(page.getByText("Apple")).toBeVisible();
    await expect(page.getByText("Banana")).toBeVisible();
    await expect(page.getByText("Cherry")).toBeVisible();
  });

  test("allows searching and filtering options", async ({ page }) => {
    await page.goto("/?story=forms---combobox--default");
    await page.waitForSelector("input");

    const input = page.getByPlaceholder("Select…");
    await input.click();

    const searchInput = page.getByPlaceholder("Search…");
    await searchInput.fill("ban");

    // Only Banana should be visible
    await expect(page.getByText("Banana")).toBeVisible();
    await expect(page.getByText("Apple")).not.toBeVisible();
    await expect(page.getByText("Cherry")).not.toBeVisible();
  });

  test("selects option and closes popover", async ({ page }) => {
    await page.goto("/?story=forms---combobox--default");
    await page.waitForSelector("input");

    const input = page.getByPlaceholder("Select…");
    await input.click();

    // Click on Banana option
    await page.getByText("Banana").click();

    // Input should now show Banana
    const selectedInput = page.locator("input").first();
    await expect(selectedInput).toHaveValue("Banana");

    // Popover should close
    const searchInput = page.getByPlaceholder("Search…");
    await expect(searchInput).not.toBeVisible();
  });

  test("shows controlled value", async ({ page }) => {
    await page.goto("/?story=forms---combobox--controlled");
    await page.waitForSelector("input");

    // Should show pre-selected value (Banana)
    const input = page.locator("input").first();
    await expect(input).toHaveValue("Banana");
  });

  test("shows no results when search has no matches", async ({ page }) => {
    await page.goto("/?story=forms---combobox--default");
    await page.waitForSelector("input");

    const input = page.getByPlaceholder("Select…");
    await input.click();

    const searchInput = page.getByPlaceholder("Search…");
    await searchInput.fill("xyz");

    // No results message should appear
    await expect(page.getByText("No results")).toBeVisible();
  });
});
