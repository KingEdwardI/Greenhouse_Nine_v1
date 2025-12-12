import { test, expect } from "@playwright/test";

test.describe("Switch Component", () => {
  test("renders default switch", async ({ page }) => {
    await page.goto("/?story=forms---switch--default");
    await page.waitForSelector('button[role="switch"]');

    const switchBtn = page.getByRole("switch");
    await expect(switchBtn).toBeVisible();
  });

  test("can be toggled on and off", async ({ page }) => {
    await page.goto("/?story=forms---switch--default");
    await page.waitForSelector('button[role="switch"]');

    const switchBtn = page.getByRole("switch");

    // Initially off
    await expect(switchBtn).toHaveAttribute("aria-checked", "false");

    // Toggle on
    await switchBtn.click();
    await expect(switchBtn).toHaveAttribute("aria-checked", "true");

    // Toggle off
    await switchBtn.click();
    await expect(switchBtn).toHaveAttribute("aria-checked", "false");
  });

  test("renders size variants", async ({ page }) => {
    await page.goto("/?story=forms---switch--sizes");
    await page.waitForSelector('button[role="switch"]');

    const switches = page.getByRole("switch");
    await expect(switches).toHaveCount(3); // 3 sizes
  });
});
