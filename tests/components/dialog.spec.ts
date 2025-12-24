import { test, expect } from "@playwright/test";

test.describe("Dialog Component", () => {
  test("renders dialog trigger and opens on click", async ({ page }) => {
    await page.goto("/?story=overlays---dialog--default");

    const triggerButton = page.getByRole("button", { name: "Open dialog" });
    await expect(triggerButton).toBeVisible();

    // Click to open dialog
    await triggerButton.click();

    // Check dialog content is visible
    await expect(
      page.getByRole("heading", { name: "Dialog Title" })
    ).toBeVisible();
    await expect(
      page.getByText("A short description provides helpful context.")
    ).toBeVisible();
    await expect(
      page.getByText("Dialog body content goes here.")
    ).toBeVisible();

    // Check action buttons
    await expect(page.getByRole("button", { name: "Cancel" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Confirm" })).toBeVisible();
  });

  test("closes dialog when cancel is clicked", async ({ page }) => {
    await page.goto("/?story=overlays---dialog--default");

    // Open dialog
    await page.getByRole("button", { name: "Open dialog" }).click();
    await expect(
      page.getByRole("heading", { name: "Dialog Title" })
    ).toBeVisible();

    // Click cancel
    await page.getByRole("button", { name: "Cancel" }).click();

    // Dialog should be closed (heading not visible)
    await expect(
      page.getByRole("heading", { name: "Dialog Title" })
    ).not.toBeVisible();
  });

  test("renders different dialog sizes", async ({ page }) => {
    await page.goto("/?story=overlays---dialog--sizes");
    await page.waitForSelector("button");

    // Verify we can see the open buttons for each size
    await expect(
      page.getByRole("button", { name: "Open" }).first()
    ).toBeVisible();
  });

  test("renders glass variant dialog", async ({ page }) => {
    await page.goto("/?story=overlays---dialog--glass");

    const triggerButton = page.getByRole("button", {
      name: "Open Glass Dialog",
    });
    await expect(triggerButton).toBeVisible();

    // Open glass dialog
    await triggerButton.click();

    // Check glass dialog content
    await expect(
      page.getByRole("heading", { name: "Glass Dialog" })
    ).toBeVisible();
    await expect(
      page.getByText("A dialog with glass morphism effect.")
    ).toBeVisible();
    await expect(
      page.getByText(/This dialog demonstrates the glass morphism effect/)
    ).toBeVisible();
  });

  test("renders glass dialog sizes", async ({ page }) => {
    await page.goto("/?story=overlays---dialog--glass-sizes");
    await page.waitForSelector("button");

    // Verify we can see the open buttons for glass sizes
    await expect(
      page.getByRole("button", { name: "Open" }).first()
    ).toBeVisible();
  });

  test("renders glass dialog with actions", async ({ page }) => {
    await page.goto("/?story=overlays---dialog--glass-with-actions");

    const triggerButton = page.getByRole("button", { name: "Delete Item" });
    await expect(triggerButton).toBeVisible();

    // Open dialog
    await triggerButton.click();

    // Check content
    await expect(
      page.getByRole("heading", { name: "Confirm Action" })
    ).toBeVisible();
    await expect(
      page.getByText(/Are you sure you want to proceed/)
    ).toBeVisible();

    // Check both action buttons
    await expect(page.getByRole("button", { name: "Cancel" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Delete" })).toBeVisible();
  });
});
