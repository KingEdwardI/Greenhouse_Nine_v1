import { test, expect } from "@playwright/test";

test.describe("RadioGroup Component", () => {
  test("renders radio options", async ({ page }) => {
    await page.goto("/?story=forms---radiogroup--default");
    await page.waitForSelector('button[role="radio"]');

    const radios = page.getByRole("radio");
    await expect(radios.first()).toBeVisible();
  });

  test("allows selecting a single option", async ({ page }) => {
    await page.goto("/?story=forms---radiogroup--default");
    await page.waitForSelector('button[role="radio"]');

    const radios = page.getByRole("radio");
    const firstRadio = radios.nth(0);
    const secondRadio = radios.nth(1);

    // Click first option
    await firstRadio.click();
    await expect(firstRadio).toHaveAttribute("aria-checked", "true");

    // Click second option - first should unselect
    await secondRadio.click();
    await expect(secondRadio).toHaveAttribute("aria-checked", "true");
    await expect(firstRadio).toHaveAttribute("aria-checked", "false");
  });

  test("renders size variants", async ({ page }) => {
    await page.goto("/?story=forms---radiogroup--sizes");
    await page.waitForSelector('button[role="radio"]');

    const radios = page.getByRole("radio");
    // Should have multiple radio buttons across different sizes
    await expect(radios).not.toHaveCount(0);
  });
});
