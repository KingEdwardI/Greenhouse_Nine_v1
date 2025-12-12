import { test, expect } from "@playwright/test";

test.describe("Drawer Component", () => {
  test("renders drawer trigger and opens on click", async ({ page }) => {
    await page.goto("/?story=overlays---drawer--basic");

    const triggerButton = page.getByRole("button", { name: "Open Drawer" });
    await expect(triggerButton).toBeVisible();

    // Click to open drawer
    await triggerButton.click();

    // Check drawer content is visible
    await expect(page.getByRole("heading", { name: "Edit Profile" })).toBeVisible();
    await expect(page.getByText(/Make changes to your profile here/)).toBeVisible();

    // Check form fields
    await expect(page.getByPlaceholder("Enter your full name")).toBeVisible();
    await expect(page.getByPlaceholder("Enter username")).toBeVisible();

    // Check action buttons
    await expect(page.getByRole("button", { name: "Cancel" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Save changes" })).toBeVisible();
  });

  test("closes drawer when cancel is clicked", async ({ page }) => {
    await page.goto("/?story=overlays---drawer--basic");

    // Open drawer
    await page.getByRole("button", { name: "Open Drawer" }).click();
    await expect(page.getByRole("heading", { name: "Edit Profile" })).toBeVisible();

    // Click cancel
    await page.getByRole("button", { name: "Cancel" }).click();

    // Drawer should be closed
    await expect(page.getByRole("heading", { name: "Edit Profile" })).not.toBeVisible();
  });

  test("renders left side drawer", async ({ page }) => {
    await page.goto("/?story=overlays---drawer--left-side");

    const triggerButton = page.getByRole("button", { name: "Open Left Drawer" });
    await expect(triggerButton).toBeVisible();

    // Open drawer
    await triggerButton.click();

    // Check drawer content
    await expect(page.getByRole("heading", { name: "Navigation" })).toBeVisible();
    await expect(page.getByText("Quick navigation menu")).toBeVisible();

    // Check menu items
    await expect(page.getByRole("button", { name: /Home/ })).toBeVisible();
    await expect(page.getByRole("button", { name: /Settings/ })).toBeVisible();
    await expect(page.getByRole("button", { name: /Logout/ })).toBeVisible();
  });

  test("renders different drawer sizes", async ({ page }) => {
    await page.goto("/?story=overlays---drawer--sizes");
    await page.waitForSelector("button");

    // All size trigger buttons should be visible
    await expect(page.getByRole("button", { name: "Size: sm" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Size: md" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Size: lg" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Size: xl" })).toBeVisible();
  });

  test("renders glass variant drawer", async ({ page }) => {
    await page.goto("/?story=overlays---drawer--glass");

    const triggerButton = page.getByRole("button", { name: "Open Glass Drawer" });
    await expect(triggerButton).toBeVisible();

    // Open glass drawer
    await triggerButton.click();

    // Check glass drawer content
    await expect(page.getByRole("heading", { name: "Glass Effect" })).toBeVisible();
    await expect(page.getByText(/This drawer features the glassmorphism effect/)).toBeVisible();
  });

  test("renders glass left drawer", async ({ page }) => {
    await page.goto("/?story=overlays---drawer--glass-left");

    const triggerButton = page.getByRole("button", { name: "Open Glass Left Drawer" });
    await expect(triggerButton).toBeVisible();

    // Open drawer
    await triggerButton.click();

    // Check content
    await expect(page.getByRole("heading", { name: "Navigation" })).toBeVisible();
    await expect(page.getByText("Glass navigation with modern styling")).toBeVisible();
  });

  test("renders glass drawer sizes", async ({ page }) => {
    await page.goto("/?story=overlays---drawer--glass-sizes");
    await page.waitForSelector("button");

    // All glass size trigger buttons should be visible
    await expect(page.getByRole("button", { name: "Glass sm" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Glass md" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Glass lg" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Glass xl" })).toBeVisible();
  });
});
