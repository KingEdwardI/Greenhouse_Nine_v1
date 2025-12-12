import { test, expect } from "@playwright/test";

test.describe("Breadcrumbs Component", () => {
  test("renders basic breadcrumbs with items", async ({ page }) => {
    await page.goto("/?story=navigation---breadcrumbs--basic");
    await page.waitForSelector("nav");

    // Check for breadcrumb links
    await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Settings" })).toBeVisible();

    // Check for active item (should be text, not a link)
    await expect(page.getByText("Profile")).toBeVisible();
  });

  test("renders breadcrumbs with custom separator", async ({ page }) => {
    await page.goto("/?story=navigation---breadcrumbs--with-custom-separator");
    await page.waitForSelector("nav");

    // Verify all items are present
    await expect(page.getByRole("link", { name: "Project" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Issues" })).toBeVisible();
    await expect(page.getByText("#123")).toBeVisible();

    // Custom separator ">" should be present in the content
    const nav = page.locator("nav[aria-label='Breadcrumb']");
    await expect(nav).toContainText(">");
  });

  test("breadcrumb links are clickable", async ({ page }) => {
    await page.goto("/?story=navigation---breadcrumbs--basic");
    await page.waitForSelector("nav");

    const homeLink = page.getByRole("link", { name: "Home" });
    await expect(homeLink).toBeVisible();

    // Verify the link has an href attribute
    await expect(homeLink).toHaveAttribute("href", "/");
  });
});
