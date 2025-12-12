import { test, expect } from "@playwright/test";

test.describe("Tooltip Component", () => {
  test("renders tooltip on hover", async ({ page }) => {
    await page.goto("/?story=overlays---tooltip--default");

    const triggerButton = page.getByRole("button", { name: "Hover me" });
    await expect(triggerButton).toBeVisible();

    // Hover over the button
    await triggerButton.hover();

    // Wait for tooltip to appear (Radix has a delay)
    await page.waitForTimeout(700);

    // Check tooltip content is visible (use first() to handle multiple tooltips)
    await expect(page.getByText("Hello from tooltip").first()).toBeVisible();
  });

  test("renders tooltips with different widths", async ({ page }) => {
    await page.goto("/?story=overlays---tooltip--widths");
    await page.waitForSelector("button");

    // All width variant buttons should be visible
    await expect(page.getByRole("button", { name: "Narrow" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Default" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Wide" })).toBeVisible();
  });

  test("narrow width tooltip shows content on hover", async ({ page }) => {
    await page.goto("/?story=overlays---tooltip--widths");

    const narrowButton = page.getByRole("button", { name: "Narrow" });
    await narrowButton.hover();
    await page.waitForTimeout(700);

    await expect(page.getByText("Narrow tooltip").first()).toBeVisible();
  });

  test("wide width tooltip shows content on hover", async ({ page }) => {
    await page.goto("/?story=overlays---tooltip--widths");

    const wideButton = page.getByRole("button", { name: "Wide" });
    await wideButton.hover();
    await page.waitForTimeout(700);

    await expect(page.getByText("Wider tooltip").first()).toBeVisible();
  });

  test("default width tooltip shows content on hover", async ({ page }) => {
    await page.goto("/?story=overlays---tooltip--widths");

    const defaultButton = page.getByRole("button", { name: "Default" });
    await defaultButton.hover();
    await page.waitForTimeout(700);

    await expect(page.getByText("Default width tooltip").first()).toBeVisible();
  });
});
