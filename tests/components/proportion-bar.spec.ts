import { test, expect } from "@playwright/test";

test.describe("ProportionBar Component", () => {
  test("renders horizontal bar with segments", async ({ page }) => {
    await page.goto("/?story=data-display---proportionbar--horizontal");
    await page.waitForSelector(".gn-ProportionBar");

    // Check that the bar is rendered
    const bar = page.locator(".gn-ProportionBar").first();
    await expect(bar).toBeVisible();

    // Check segments exist
    const segments = page.locator(".gn-ProportionBar__segment");
    await expect(segments.first()).toBeVisible();
  });

  test("renders vertical bar orientation", async ({ page }) => {
    await page.goto("/?story=data-display---proportionbar--vertical");
    await page.waitForSelector(".gn-ProportionBar");

    // Check for vertical class
    const verticalBar = page.locator(".gn-ProportionBar--vertical").first();
    await expect(verticalBar).toBeVisible();
  });

  test("shows tooltip on hover", async ({ page }) => {
    await page.goto("/?story=data-display---proportionbar--default");
    await page.waitForSelector(".gn-ProportionBar");

    // Hover over a segment
    const segment = page.locator(".gn-ProportionBar__segment").first();
    await segment.hover();

    // Tooltip should appear
    const tooltip = page.locator(".gn-ProportionBar__tooltip");
    await expect(tooltip).toBeVisible();
  });

  test("renders different radius variants", async ({ page }) => {
    await page.goto("/?story=data-display---proportionbar--border-radius");
    await page.waitForSelector(".gn-ProportionBar");

    // Multiple bars should be present
    const bars = page.locator(".gn-ProportionBar");
    await expect(bars).toHaveCount(5); // none, small, medium, large, full
  });

  test("renders different size variants", async ({ page }) => {
    await page.goto("/?story=data-display---proportionbar--sizes");
    await page.waitForSelector(".gn-ProportionBar");

    // Multiple bars should be present with different heights
    const bars = page.locator(".gn-ProportionBar");
    await expect(bars).toHaveCount(4); // 4px, 8px, 12px, 20px
  });

  test("clickable segments respond to clicks", async ({ page }) => {
    await page.goto("/?story=data-display---proportionbar--clickable");
    await page.waitForSelector(".gn-ProportionBar");

    // Find a clickable segment
    const segment = page
      .locator(".gn-ProportionBar__segment--clickable")
      .first();
    await expect(segment).toBeVisible();

    // Set up dialog handler
    page.on("dialog", async dialog => {
      expect(dialog.message()).toContain("Clicked:");
      await dialog.accept();
    });

    // Click the segment
    await segment.click();
  });
});
