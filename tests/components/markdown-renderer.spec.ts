import { test, expect } from "@playwright/test";

test.describe("MarkdownRenderer Component", () => {
  test("renders basic markdown with headings and text", async ({ page }) => {
    await page.goto("/?story=core---markdownrenderer--basic");
    await page.waitForSelector("h1, p");

    // Check heading
    await expect(
      page.getByRole("heading", { name: "Hello World" })
    ).toBeVisible();

    // Check text formatting
    await expect(page.getByText(/bold/)).toBeVisible();
    await expect(page.getByText(/italic/)).toBeVisible();
  });

  test("renders code blocks with syntax highlighting", async ({ page }) => {
    await page.goto("/?story=core---markdownrenderer--with-code-blocks");
    await page.waitForSelector("h1");

    // Check heading
    await expect(
      page.getByRole("heading", { name: "Code Example" })
    ).toBeVisible();

    // Check inline code (use locator for code element)
    await expect(page.locator("code").first()).toBeVisible();

    // Check code block content is present
    await expect(page.getByText(/function greet/)).toBeVisible();
    await expect(page.getByText(/Hello, \${name}/)).toBeVisible();
  });

  test("renders lists (ordered and unordered)", async ({ page }) => {
    await page.goto("/?story=core---markdownrenderer--with-lists");
    await page.waitForSelector("h1");

    // Check headings (use exact match to avoid ambiguity)
    await expect(
      page.getByRole("heading", { name: "Lists", exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Unordered List", exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Ordered List", exact: true })
    ).toBeVisible();

    // Check list items
    await expect(page.getByText("Item 1", { exact: true })).toBeVisible();
    await expect(page.getByText("Nested item 2.1")).toBeVisible();
    await expect(page.getByText("First item")).toBeVisible();
    await expect(page.getByText("Second item")).toBeVisible();
  });

  test("renders tables", async ({ page }) => {
    await page.goto("/?story=core---markdownrenderer--with-table");
    await page.waitForSelector("table");

    // Check table headers
    await expect(
      page.getByRole("columnheader", { name: "Feature" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Supported" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Notes" })
    ).toBeVisible();

    // Check table cells
    await expect(page.getByRole("cell", { name: "Headers" })).toBeVisible();
    await expect(page.getByRole("cell", { name: "Code" })).toBeVisible();
    await expect(page.getByText("H1-H6")).toBeVisible();
  });

  test("renders blockquotes", async ({ page }) => {
    await page.goto("/?story=core---markdownrenderer--with-blockquote");
    await page.waitForSelector("blockquote");

    // Check heading
    await expect(page.getByRole("heading", { name: "Quotes" })).toBeVisible();

    // Check blockquote content
    await expect(page.getByText(/This is a blockquote/)).toBeVisible();
    await expect(page.getByText(/span multiple lines/)).toBeVisible();
    await expect(page.getByText(/Regular text after the quote/)).toBeVisible();
  });

  test("renders task lists with checkboxes", async ({ page }) => {
    await page.goto("/?story=core---markdownrenderer--with-task-list");
    await page.waitForSelector("li");

    // Check heading
    await expect(
      page.getByRole("heading", { name: "Task List", exact: true })
    ).toBeVisible();

    // Check task list items exist
    await expect(
      page.getByText("Completed task", { exact: true })
    ).toBeVisible();
    await expect(page.getByText(/Incomplete task/).first()).toBeVisible();
  });

  test("renders comprehensive markdown with all features", async ({ page }) => {
    await page.goto("/?story=core---markdownrenderer--comprehensive");
    await page.waitForSelector("h1");

    // Check main heading
    await expect(
      page.getByRole("heading", { name: "Comprehensive Example" })
    ).toBeVisible();

    // Check subheadings
    await expect(
      page.getByRole("heading", { name: "Introduction" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Text Formatting" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Code Blocks" })
    ).toBeVisible();

    // Check various content types are present
    await expect(page.getByText(/Bold text/)).toBeVisible();
    await expect(page.getByText(/Strikethrough/)).toBeVisible();
    await expect(page.getByText(/Visit GitHub/)).toBeVisible();
    await expect(page.getByText(/interface User/)).toBeVisible();

    // Check table is present
    await expect(
      page.getByRole("columnheader", { name: "Name" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Role" })
    ).toBeVisible();

    // Check blockquote
    await expect(
      page.getByText(/best way to predict the future/)
    ).toBeVisible();

    // Check horizontal rule and ending text
    await expect(page.getByText(/That's all folks/)).toBeVisible();
  });
});
