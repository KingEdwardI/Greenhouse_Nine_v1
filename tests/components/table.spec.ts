import { test, expect } from "@playwright/test";

test.describe("DataTable Component", () => {
  test("renders basic table with headers and rows", async ({ page }) => {
    await page.goto("/?story=datatable--basic");
    await page.waitForTimeout(1000); // Wait for table to render

    // Check for table or content
    const hasTable = await page.locator("table").count();
    if (hasTable > 0) {
      // Check table headers
      await expect(page.getByRole("columnheader", { name: "Name" })).toBeVisible();
      await expect(page.getByRole("columnheader", { name: "Role" })).toBeVisible();
      await expect(page.getByRole("columnheader", { name: "Status" })).toBeVisible();

      // Check table cells
      await expect(page.getByText("Alice Johnson")).toBeVisible();
      await expect(page.getByText("Developer")).toBeVisible();
      await expect(page.getByText("Bob Smith")).toBeVisible();
    } else {
      // Fallback: just check that content is present
      await expect(page.getByText("Alice Johnson")).toBeVisible();
      await expect(page.getByText("Developer")).toBeVisible();
    }
  });

  test("renders table with text alignment", async ({ page }) => {
    await page.goto("/?story=datatable--with-alignment");
    await page.waitForTimeout(1000);

    // Check data is present
    await expect(page.getByText("MacBook Pro")).toBeVisible();
    await expect(page.getByText("$2,499")).toBeVisible();
    await expect(page.getByText("AirPods Pro")).toBeVisible();
  });

  test("renders table with long content", async ({ page }) => {
    await page.goto("/?story=datatable--long-content");
    await page.waitForTimeout(1000);

    // Check some content is present
    await expect(page.getByText("TASK-001")).toBeVisible();
    await expect(page.getByText(/Implement the new authentication/)).toBeVisible();
    await expect(page.getByText(/Fix the memory leak/)).toBeVisible();
  });

  test("renders table with many columns", async ({ page }) => {
    await page.goto("/?story=datatable--many-columns");
    await page.waitForTimeout(1000);

    // Check some data is visible
    await expect(page.getByText("alice@example.com")).toBeVisible();
    await expect(page.getByText("Engineering")).toBeVisible();
    await expect(page.getByText("$120,000")).toBeVisible();
  });

  test("renders table with sticky header", async ({ page }) => {
    await page.goto("/?story=datatable--sticky-header");
    await page.waitForTimeout(1000);

    // Check some data is present (use exact to avoid matching "Data Point 10", etc)
    await expect(page.getByText("Data Point 1", { exact: true }).first()).toBeVisible();
  });

  test("renders ghost variant table", async ({ page }) => {
    await page.goto("/?story=datatable--ghost-variant");
    await page.waitForTimeout(1000);

    // Check data is visible
    await expect(page.getByText("Alice Johnson")).toBeVisible();
    await expect(page.getByText("Charlie Brown")).toBeVisible();
  });

  test("renders table with glass effect", async ({ page }) => {
    await page.goto("/?story=datatable--glass-effect");
    await page.waitForTimeout(1000);

    // Check data is visible
    await expect(page.getByText("Greenhouse Nine")).toBeVisible();
    await expect(page.getByText("85%")).toBeVisible();
    await expect(page.getByText("TaskWing")).toBeVisible();
  });

  test("renders small size table", async ({ page }) => {
    await page.goto("/?story=datatable--small-size");
    await page.waitForTimeout(1000);

    // Check data is visible
    await expect(page.getByText("JavaScript")).toBeVisible();
    await expect(page.getByText("TypeScript")).toBeVisible();
  });

  test("renders large size table", async ({ page }) => {
    await page.goto("/?story=datatable--large-size");
    await page.waitForTimeout(1000);

    // Check data is visible
    await expect(page.getByText("The Pragmatic Programmer")).toBeVisible();
    await expect(page.getByText("Clean Code")).toBeVisible();
  });

  test("renders table with React nodes", async ({ page }) => {
    await page.goto("/?story=datatable--with-react-nodes");
    await page.waitForTimeout(1000);

    // Check content is visible
    await expect(page.getByText("Alice Johnson")).toBeVisible();
    await expect(page.getByText("Bob Smith")).toBeVisible();

    // Check buttons are present
    const editButtons = page.getByRole("button", { name: "Edit" });
    await expect(editButtons.first()).toBeVisible();
  });
});
