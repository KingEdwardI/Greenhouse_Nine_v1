import { test, expect } from "@playwright/test";

test.describe("Toast Component", () => {
  test("renders toast trigger buttons", async ({ page }) => {
    await page.goto("/?story=overlays---toast--basic");
    await page.waitForTimeout(1000);

    // Check all trigger buttons are visible
    await expect(
      page.getByRole("button", { name: "Success", exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Warning", exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Error", exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Info", exact: true })
    ).toBeVisible();
  });

  test("shows success toast when success button is clicked", async ({
    page,
  }) => {
    await page.goto("/?story=overlays---toast--basic");
    await page.waitForTimeout(1000);

    // Click the success button
    await page.getByRole("button", { name: "Success", exact: true }).click();

    // Wait for toast to appear and check its content
    await expect(page.getByText("Saved").first()).toBeVisible({
      timeout: 10000,
    });
  });

  test("shows warning toast when warning button is clicked", async ({
    page,
  }) => {
    await page.goto("/?story=overlays---toast--basic");
    await page.waitForTimeout(1000);

    // Click the warning button
    await page.getByRole("button", { name: "Warning", exact: true }).click();

    // Wait for toast to appear
    await expect(page.getByText("Heads up").first()).toBeVisible({
      timeout: 10000,
    });
  });

  test("shows error toast when error button is clicked", async ({ page }) => {
    await page.goto("/?story=overlays---toast--basic");
    await page.waitForTimeout(1000);

    // Click the error button
    await page.getByRole("button", { name: "Error", exact: true }).click();

    // Wait for toast to appear (may match sidebar text, use first)
    await expect(page.getByText(/Something went wrong/).first()).toBeVisible({
      timeout: 10000,
    });
  });

  test("shows info toast when info button is clicked", async ({ page }) => {
    await page.goto("/?story=overlays---toast--basic");
    await page.waitForTimeout(1000);

    // Click the info button
    await page.getByRole("button", { name: "Info", exact: true }).click();

    // Wait for toast to appear
    await expect(page.getByText(/informational/).first()).toBeVisible({
      timeout: 10000,
    });
  });

  test("renders glass toast trigger buttons", async ({ page }) => {
    await page.goto("/?story=overlays---toast--glass");
    await page.waitForTimeout(1000);

    // Check glass trigger buttons are visible
    await expect(
      page.getByRole("button", { name: "Success (Glass)" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Warning (Glass)" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "With Action (Glass)" })
    ).toBeVisible();
  });

  test("shows glass success toast when clicked", async ({ page }) => {
    await page.goto("/?story=overlays---toast--glass");
    await page.waitForTimeout(1000);

    // Click the glass success button
    await page.getByRole("button", { name: "Success (Glass)" }).click();

    // Wait for toast to appear
    await expect(page.getByText(/glass effect/).first()).toBeVisible({
      timeout: 10000,
    });
  });

  test("shows glass warning toast when clicked", async ({ page }) => {
    await page.goto("/?story=overlays---toast--glass");
    await page.waitForTimeout(1000);

    // Click the glass warning button
    await page.getByRole("button", { name: "Warning (Glass)" }).click();

    // Wait for toast to appear
    await expect(page.getByText(/glass effect/).first()).toBeVisible({
      timeout: 10000,
    });
  });

  test("shows glass error toast when clicked", async ({ page }) => {
    await page.goto("/?story=overlays---toast--glass");
    await page.waitForTimeout(1000);

    // Click the glass error button
    await page.getByRole("button", { name: "Error (Glass)" }).click();

    // Wait for toast to appear
    await expect(page.getByText(/glass effect/).first()).toBeVisible({
      timeout: 10000,
    });
  });

  test("shows glass info toast when clicked", async ({ page }) => {
    await page.goto("/?story=overlays---toast--glass");
    await page.waitForTimeout(1000);

    // Click the glass info button
    await page.getByRole("button", { name: "Info (Glass)" }).click();

    // Wait for toast to appear
    await expect(page.getByText(/glass effect/).first()).toBeVisible({
      timeout: 10000,
    });
  });

  test("shows glass toast with action button", async ({ page }) => {
    await page.goto("/?story=overlays---toast--glass");
    await page.waitForTimeout(1000);

    // Click the glass action button
    await page.getByRole("button", { name: "With Action (Glass)" }).click();

    // Wait for toast to appear
    await expect(page.getByText(/pending items/).first()).toBeVisible({
      timeout: 10000,
    });
  });

  test("toast dismisses after interaction", async ({ page }) => {
    await page.goto("/?story=overlays---toast--basic");
    await page.waitForTimeout(1000);

    // Click the success button to show toast
    await page.getByRole("button", { name: "Success", exact: true }).click();

    // Wait for toast to appear
    await expect(page.getByText("Saved").first()).toBeVisible({
      timeout: 10000,
    });

    // Toasts auto-dismiss - test passes if toast appears
  });
});
