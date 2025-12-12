import { test, expect } from "@playwright/test";

test.describe("Input Component", () => {
  test("renders input and accepts typed text", async ({ page }) => {
    await page.goto("/?story=forms---input--default");
    await page.waitForSelector("input");

    const input = page.getByPlaceholder("Enter text");
    await expect(input).toBeVisible();

    // Type text and verify value
    await input.fill("Hello World");
    await expect(input).toHaveValue("Hello World");
  });

  test("shows placeholder text", async ({ page }) => {
    await page.goto("/?story=forms---input--default");
    await page.waitForSelector("input");

    const input = page.getByPlaceholder("Enter text");
    await expect(input).toBeVisible();
    await expect(input).toHaveAttribute("placeholder", "Enter text");
  });

  test("renders size variants", async ({ page }) => {
    await page.goto("/?story=forms---input--sizes");
    await page.waitForSelector("input");

    await expect(page.getByPlaceholder("Size 1")).toBeVisible();
    await expect(page.getByPlaceholder(/Size 2/)).toBeVisible();
    await expect(page.getByPlaceholder("Size 3")).toBeVisible();
  });

  test("renders disabled state", async ({ page }) => {
    await page.goto("/?story=forms---input--states");
    await page.waitForSelector("input");

    const enabledInput = page.getByPlaceholder("Enabled");
    const disabledInput = page.getByPlaceholder("Disabled");

    await expect(enabledInput).toBeEnabled();
    await expect(disabledInput).toBeDisabled();
  });

  test("password input toggles visibility", async ({ page }) => {
    await page.goto("/?story=forms---input--password");
    await page.waitForSelector("input");

    const input = page.getByPlaceholder("Enter password");
    await expect(input).toHaveAttribute("type", "password");

    // Find and click the toggle button
    const toggleButton = page.locator("button").first();
    await toggleButton.click();

    // Type should now be text
    await expect(input).toHaveAttribute("type", "text");
  });

  test("number input accepts numeric values", async ({ page }) => {
    await page.goto("/?story=forms---input--number");
    await page.waitForSelector("input");

    // NumberInput uses type="text" for custom formatting
    const input = page.locator("input").first();
    await expect(input).toBeVisible();
    await expect(input).toHaveValue("42");
  });
});
