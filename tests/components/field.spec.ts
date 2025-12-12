import { test, expect } from "@playwright/test";

test.describe("Field Component", () => {
  test("renders field with label and hint", async ({ page }) => {
    await page.goto("/?story=forms---field--default");
    await page.waitForSelector("input");

    // Label should be visible (it's a label element, not just text)
    const label = page.locator("label:has-text('Email')");
    await expect(label).toBeVisible();

    // Hint text should be visible
    const hint = page.getByText("We will never share your email.");
    await expect(hint).toBeVisible();

    // Input should be visible
    const input = page.getByPlaceholder("you@example.com");
    await expect(input).toBeVisible();
  });

  test("renders field with error message", async ({ page }) => {
    await page.goto("/?story=forms---field--with-error");
    await page.waitForSelector("input");

    // Label should be visible
    const label = page.locator("label:has-text('Username')");
    await expect(label).toBeVisible();

    // Error message should be visible
    const error = page.getByText("Username already taken");
    await expect(error).toBeVisible();

    // Input should be visible
    const input = page.getByPlaceholder("johndoe");
    await expect(input).toBeVisible();
  });

  test("renders required field indicator", async ({ page }) => {
    await page.goto("/?story=forms---field--with-password");
    await page.waitForSelector("input");

    // Label should be visible with required indicator
    const label = page.locator("label:has-text('Password')");
    await expect(label).toBeVisible();
    await expect(label).toContainText("Password");

    // Required asterisk should be present in the label
    await expect(label).toContainText("*");
  });

  test("works with password input", async ({ page }) => {
    await page.goto("/?story=forms---field--with-password");
    await page.waitForSelector("input");

    const label = page.locator("label:has-text('Password')");
    await expect(label).toBeVisible();

    const input = page.getByPlaceholder("••••••••");
    await expect(input).toBeVisible();
    await expect(input).toHaveAttribute("type", "password");
  });

  test("works with number input", async ({ page }) => {
    await page.goto("/?story=forms---field--with-number");
    await page.waitForSelector("input");

    const label = page.locator("label:has-text('Quantity')");
    await expect(label).toBeVisible();

    // NumberInput should have default value of 2
    const input = page.locator("input").first();
    await expect(input).toBeVisible();
    await expect(input).toHaveValue("2");
  });

  test("input is interactive", async ({ page }) => {
    await page.goto("/?story=forms---field--default");
    await page.waitForSelector("input");

    const input = page.getByPlaceholder("you@example.com");
    await input.fill("test@example.com");
    await expect(input).toHaveValue("test@example.com");
  });
});
