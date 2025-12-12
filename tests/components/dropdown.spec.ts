import { test, expect } from "@playwright/test";

test.describe("Dropdown Component", () => {
  test("renders default dropdown trigger", async ({ page }) => {
    await page.goto("/?story=forms---dropdown--default");

    const triggerButton = page.getByRole("button", { name: "Pick item" });
    await expect(triggerButton).toBeVisible();

    // Click to open dropdown
    await triggerButton.click();

    // Check dropdown items are visible
    await expect(page.getByText("Fruits")).toBeVisible();
    await expect(page.getByText("Vegetables")).toBeVisible();

    // Check specific items
    const appleItem = page.getByRole("menuitem", { name: "Apple" });
    const bananaItem = page.getByRole("menuitem", { name: "Banana" });
    const cherryItem = page.getByRole("menuitem", { name: "Cherry" });

    await expect(appleItem).toBeVisible();
    await expect(bananaItem).toBeVisible();
    await expect(cherryItem).toBeVisible();
  });

  test("can select dropdown item", async ({ page }) => {
    await page.goto("/?story=forms---dropdown--default");

    // Open dropdown
    await page.getByRole("button", { name: "Pick item" }).click();

    // Click an item
    const appleItem = page.getByRole("menuitem", { name: "Apple" });
    await appleItem.click();

    // Dropdown should close after selection
    await expect(appleItem).not.toBeVisible();
  });

  test("renders different dropdown sizes", async ({ page }) => {
    await page.goto("/?story=forms---dropdown--sizes");
    await page.waitForSelector("button");

    // All size trigger buttons should be visible
    await expect(page.getByRole("button", { name: "Size 1" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Size 2 (default)" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Size 3" })).toBeVisible();
  });

  test("renders dropdown with different alignments", async ({ page }) => {
    await page.goto("/?story=forms---dropdown--alignment");
    await page.waitForSelector("button");

    // All alignment trigger buttons should be visible
    await expect(page.getByRole("button", { name: "Start Align" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Center Align" })).toBeVisible();
    await expect(page.getByRole("button", { name: "End Align" })).toBeVisible();
  });

  test("renders dropdown with different positions", async ({ page }) => {
    await page.goto("/?story=forms---dropdown--position");
    await page.waitForSelector("button");

    // Verify at least one position button is visible
    await expect(page.getByRole("button").first()).toBeVisible();
  });

  test("renders glass variant dropdown", async ({ page }) => {
    await page.goto("/?story=forms---dropdown--glass");
    await page.waitForSelector("button");

    const glassButton = page.getByRole("button", { name: "Glass dropdown" });
    await expect(glassButton).toBeVisible();

    // Open glass dropdown
    await glassButton.click();

    // Check dropdown items are visible
    await expect(page.getByText("Fruits")).toBeVisible();
    await expect(page.getByRole("menuitem", { name: "Apple" })).toBeVisible();
  });

  test("renders all glass dropdown variants", async ({ page }) => {
    await page.goto("/?story=forms---dropdown--glass");
    await page.waitForSelector("button");

    await expect(page.getByRole("button", { name: "Glass dropdown" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Aligned glass" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Side glass" })).toBeVisible();
  });
});
