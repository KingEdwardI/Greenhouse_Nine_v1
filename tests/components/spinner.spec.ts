import { test, expect } from "@playwright/test";

test.describe("RingSpinner Component", () => {
  test("renders default ring spinner", async ({ page }) => {
    await page.goto("/?story=feedback---ring-spinner--default");
    await page.waitForSelector(".gn-RingSpinner, svg, circle");

    // RingSpinner is an SVG-based component, check it's visible
    const spinner = page.locator("svg").first();
    await expect(spinner).toBeVisible();
  });

  test("renders ring spinner size variants", async ({ page }) => {
    await page.goto("/?story=feedback---ring-spinner--sizes");
    await page.waitForSelector("svg");

    // Check labels for different sizes
    await expect(
      page.getByText("Small", { exact: true }).first()
    ).toBeVisible();
    await expect(
      page.getByText("Medium", { exact: true }).first()
    ).toBeVisible();
    await expect(
      page.getByText("Large", { exact: true }).first()
    ).toBeVisible();

    // Check multiple spinners are present
    const spinners = page.locator("svg");
    const count = await spinners.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test("renders ring spinner color variants", async ({ page }) => {
    await page.goto("/?story=feedback---ring-spinner--colors");
    await page.waitForSelector("svg");

    // Check color labels
    await expect(page.getByText("Primary")).toBeVisible();
    await expect(page.getByText("Secondary")).toBeVisible();
    await expect(page.getByText("Accent")).toBeVisible();
    await expect(page.getByText("Warning")).toBeVisible();
    await expect(page.getByText("Danger")).toBeVisible();

    // Check hex values are displayed
    await expect(page.getByText("#2E8B57")).toBeVisible();
    await expect(page.getByText("#007BA7")).toBeVisible();
  });

  test("renders ring spinner speed variants", async ({ page }) => {
    await page.goto("/?story=feedback---ring-spinner--speeds");
    await page.waitForSelector("svg");

    // Check speed labels
    await expect(page.getByText(/Slow.*Speed 2/)).toBeVisible();
    await expect(page.getByText(/Normal.*Speed 5/)).toBeVisible();
    await expect(page.getByText(/Fast.*Speed 8/)).toBeVisible();
  });

  test("renders ring spinner thickness variants", async ({ page }) => {
    await page.goto("/?story=feedback---ring-spinner--thickness");
    await page.waitForSelector("svg");

    // Check thickness labels
    await expect(page.getByText("2px")).toBeVisible();
    await expect(page.getByText("4px")).toBeVisible();
    await expect(page.getByText("6px")).toBeVisible();
    await expect(page.getByText("8px")).toBeVisible();
  });

  test("renders ring spinner in context", async ({ page }) => {
    await page.goto("/?story=feedback---ring-spinner--in-context");
    await page.waitForSelector("svg");

    // Check context labels
    await expect(page.getByText("Loading your data...")).toBeVisible();
    await expect(page.getByText("Processing your request...")).toBeVisible();
    await expect(page.getByText("Saving...")).toBeVisible();
  });
});

test.describe("OrbitalSpinner Component", () => {
  test("renders default orbital spinner", async ({ page }) => {
    await page.goto("/?story=feedback---orbital-spinner--default");
    await page.waitForSelector(".gn-OrbitalSpinner, svg");

    const spinner = page.locator("svg").first();
    await expect(spinner).toBeVisible();
  });

  test("renders orbital spinner size variants", async ({ page }) => {
    await page.goto("/?story=feedback---orbital-spinner--sizes");
    await page.waitForSelector("svg");

    await expect(
      page.getByText("Small", { exact: true }).first()
    ).toBeVisible();
    await expect(
      page.getByText("Medium", { exact: true }).first()
    ).toBeVisible();
    await expect(
      page.getByText("Large", { exact: true }).first()
    ).toBeVisible();

    const spinners = page.locator("svg");
    const count = await spinners.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test("renders orbital spinner color variants", async ({ page }) => {
    await page.goto("/?story=feedback---orbital-spinner--colors");
    await page.waitForSelector("svg");

    await expect(page.getByText("Primary")).toBeVisible();
    await expect(page.getByText("Secondary")).toBeVisible();
    await expect(page.getByText("Accent")).toBeVisible();
    await expect(page.getByText("Success")).toBeVisible();
  });

  test("renders orbital spinner speed variants", async ({ page }) => {
    await page.goto("/?story=feedback---orbital-spinner--speeds");
    await page.waitForSelector("svg");

    await expect(page.getByText(/Slow.*Speed 2/)).toBeVisible();
    await expect(page.getByText(/Normal.*Speed 5/)).toBeVisible();
    await expect(page.getByText(/Fast.*Speed 8/)).toBeVisible();
  });
});

test.describe("DotMatrixSpinner Component", () => {
  test("renders default dot matrix spinner", async ({ page }) => {
    await page.goto("/?story=feedback---dot-matrix-spinner--default");
    await page.waitForSelector(".gn-DotMatrixSpinner, svg");

    const spinner = page.locator("svg").first();
    await expect(spinner).toBeVisible();
  });

  test("renders dot matrix spinner size variants", async ({ page }) => {
    await page.goto("/?story=feedback---dot-matrix-spinner--sizes");
    await page.waitForSelector("svg");

    await expect(page.getByText("Small")).toBeVisible();
    await expect(page.getByText("Medium")).toBeVisible();
    await expect(page.getByText("Large")).toBeVisible();
  });

  test("renders dot matrix spinner color variants", async ({ page }) => {
    await page.goto("/?story=feedback---dot-matrix-spinner--colors");
    await page.waitForSelector("svg");

    await expect(
      page.getByText("Primary", { exact: true }).first()
    ).toBeVisible();
    await expect(
      page.getByText("Accent", { exact: true }).first()
    ).toBeVisible();
    await expect(
      page.getByText("Danger", { exact: true }).first()
    ).toBeVisible();
    await expect(page.getByText("Info", { exact: true }).first()).toBeVisible();
  });

  test("renders dot matrix spinner grid size variants", async ({ page }) => {
    await page.goto("/?story=feedback---dot-matrix-spinner--grid-size");
    await page.waitForSelector("svg");

    await expect(page.getByText("3x3 Grid")).toBeVisible();
    await expect(page.getByText("4x4 Grid")).toBeVisible();
    await expect(page.getByText("5x5 Grid")).toBeVisible();
  });

  test("renders dot matrix spinner speed variants", async ({ page }) => {
    await page.goto("/?story=feedback---dot-matrix-spinner--speeds");
    await page.waitForSelector("svg");

    await expect(page.getByText(/Slow.*Speed 2/)).toBeVisible();
    await expect(page.getByText(/Normal.*Speed 5/)).toBeVisible();
    await expect(page.getByText(/Fast.*Speed 8/)).toBeVisible();
  });
});

test.describe("WaveSpinner Component", () => {
  test("renders default wave spinner", async ({ page }) => {
    await page.goto("/?story=feedback---wave-spinner--default");
    await page.waitForSelector(".gn-WaveSpinner, div");

    // Wave spinner uses div elements for bars
    const spinner = page.locator(".gn-WaveSpinner, [class*='wave']").first();
    await expect(spinner).toBeVisible();
  });

  test("renders wave spinner size variants", async ({ page }) => {
    await page.goto("/?story=feedback---wave-spinner--sizes");
    await page.waitForTimeout(500); // Wait for animation to start

    await expect(page.getByText("Small")).toBeVisible();
    await expect(page.getByText("Medium")).toBeVisible();
    await expect(page.getByText("Large")).toBeVisible();
  });

  test("renders wave spinner color variants", async ({ page }) => {
    await page.goto("/?story=feedback---wave-spinner--colors");
    await page.waitForTimeout(500);

    await expect(page.getByText(/Primary.*Emerald/)).toBeVisible();
    await expect(page.getByText(/Secondary.*Cerulean/)).toBeVisible();
    await expect(page.getByText(/Accent.*Purple/)).toBeVisible();
    await expect(page.getByText(/Warning.*Gold/)).toBeVisible();
    await expect(page.getByText(/Danger.*Orange/)).toBeVisible();
  });

  test("renders wave spinner with different bar counts", async ({ page }) => {
    await page.goto("/?story=feedback---wave-spinner--bars");
    await page.waitForTimeout(500);

    await expect(page.getByText("3 Bars")).toBeVisible();
    await expect(page.getByText(/5 Bars.*Default/)).toBeVisible();
    await expect(page.getByText("7 Bars")).toBeVisible();
    await expect(page.getByText("10 Bars")).toBeVisible();
  });

  test("renders wave spinner speed variants", async ({ page }) => {
    await page.goto("/?story=feedback---wave-spinner--speeds");
    await page.waitForTimeout(500);

    await expect(page.getByText(/Slow.*Speed 2/)).toBeVisible();
    await expect(page.getByText(/Normal.*Speed 5/)).toBeVisible();
    await expect(page.getByText(/Fast.*Speed 8/)).toBeVisible();
  });

  test("renders wave spinner in context", async ({ page }) => {
    await page.goto("/?story=feedback---wave-spinner--in-context");
    await page.waitForTimeout(500);

    await expect(page.getByText("Loading your data...")).toBeVisible();
    await expect(page.getByText("Processing...")).toBeVisible();
    await expect(page.getByText("Analyzing Audio")).toBeVisible();
  });
});
