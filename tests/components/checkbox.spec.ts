import { test, expect } from "@playwright/test";

test.describe("Checkbox Component", () => {
  test("renders default checkbox with label", async ({ page }) => {
    await page.goto("/?story=forms---checkbox--default");
    await page.waitForSelector('button[role="checkbox"]');

    await expect(page.getByText("Check me")).toBeVisible();
    await expect(page.getByRole("checkbox")).toBeVisible();
  });

  test("renders size variants", async ({ page }) => {
    await page.goto("/?story=forms---checkbox--sizes");
    await page.waitForSelector('button[role="checkbox"]');

    await expect(page.getByText("Size 1")).toBeVisible();
    await expect(page.getByText(/Size 2/)).toBeVisible();
    await expect(page.getByText("Size 3")).toBeVisible();
    // Should have 3 checkboxes
    await expect(page.getByRole("checkbox")).toHaveCount(3);
  });

  test("checkbox can be toggled and state changes visually", async ({ page }) => {
    await page.goto("/?story=forms---checkbox--default");
    await page.waitForSelector('button[role="checkbox"]');

    const checkbox = page.getByRole("checkbox");

    // Initially unchecked
    await expect(checkbox).toHaveAttribute("aria-checked", "false");

    // Click to toggle
    await checkbox.click();
    await expect(checkbox).toHaveAttribute("aria-checked", "true");

    // Click again to uncheck
    await checkbox.click();
    await expect(checkbox).toHaveAttribute("aria-checked", "false");
  });
});
