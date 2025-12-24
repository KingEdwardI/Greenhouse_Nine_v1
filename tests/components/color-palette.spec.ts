import { test, expect } from "@playwright/test";

test.describe("ColorPalette Component", () => {
  test("renders default color palette", async ({ page }) => {
    await page.goto("/?story=core---colorpalette--default");
    await page.waitForSelector("div");

    // Check that color groups are visible
    await expect(page.getByText("Core Neutrals")).toBeVisible();
    await expect(page.getByText("Cool Neutrals")).toBeVisible();
    await expect(page.getByText("Warm Neutrals")).toBeVisible();
  });

  test("renders core neutral shades", async ({ page }) => {
    await page.goto("/?story=core---colorpalette--core-neutrals");
    await page.waitForSelector("div");

    // Check for core neutral shade labels
    await expect(page.getByText("black")).toBeVisible();
    await expect(page.getByText("charcoal")).toBeVisible();
    await expect(page.getByText("darkGray")).toBeVisible();
    await expect(page.getByText("mediumGray")).toBeVisible();

    // Check for cool neutral shade labels
    await expect(page.getByText("lightGray")).toBeVisible();
    await expect(page.getByText("silver")).toBeVisible();
    await expect(page.getByText("ash")).toBeVisible();
    await expect(page.getByText("slate")).toBeVisible();

    // Check hex values are displayed
    await expect(page.getByText("#000000")).toBeVisible();
    await expect(page.getByText("#151515")).toBeVisible();
  });

  test("renders color matrix with all color families", async ({ page }) => {
    await page.goto("/?story=core---colorpalette--color-matrix");
    await page.waitForSelector("div");

    // Check section title
    await expect(page.getByText("Complete Color Matrix")).toBeVisible();

    // Check matrix organization info
    await expect(page.getByText("Matrix Organization")).toBeVisible();
    await expect(page.getByText(/Core neutrals.*blacks/)).toBeVisible();

    // Check color families are present
    await expect(page.getByText("mint")).toBeVisible();
    await expect(page.getByText("sage")).toBeVisible();
    await expect(page.getByText("coral")).toBeVisible();
    await expect(page.getByText("lavender")).toBeVisible();
    await expect(page.getByText("amethyst")).toBeVisible();
  });

  test("renders brand and semantic colors", async ({ page }) => {
    await page.goto("/?story=core---colorpalette--brand-colors");
    await page.waitForSelector("div");

    // Check title
    await expect(page.getByText("Brand & Semantic Colors")).toBeVisible();

    // Check brand color labels (use exact match)
    await expect(
      page.getByText("Primary", { exact: true }).first()
    ).toBeVisible();
    await expect(
      page.getByText("Secondary", { exact: true }).first()
    ).toBeVisible();
    await expect(
      page.getByText("Accent", { exact: true }).first()
    ).toBeVisible();
    await expect(
      page.getByText("Warning", { exact: true }).first()
    ).toBeVisible();
    await expect(
      page.getByText("Danger", { exact: true }).first()
    ).toBeVisible();
    await expect(page.getByText("Info", { exact: true }).first()).toBeVisible();
    await expect(
      page.getByText("Success", { exact: true }).first()
    ).toBeVisible();

    // Check hex values for brand colors
    await expect(page.getByText("#2E8B57")).toBeVisible(); // primary
    await expect(page.getByText("#007BA7")).toBeVisible(); // secondary
    await expect(page.getByText("#541466")).toBeVisible(); // accent
  });
});
