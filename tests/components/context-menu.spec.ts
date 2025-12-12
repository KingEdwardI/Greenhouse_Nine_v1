import { test, expect } from "@playwright/test";

test.describe("ContextMenu Component", () => {
  test("renders basic context menu on right-click", async ({ page }) => {
    await page.goto("/?story=overlays---contextmenu--basic");

    const trigger = page.getByText("Right-click me for basic context menu");
    await expect(trigger).toBeVisible();

    // Right-click to open context menu
    await trigger.click({ button: "right" });

    // Check menu items are visible
    await expect(page.getByRole("menuitem", { name: /Copy/ })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: /Paste/ })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: /Cut/ })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: /Duplicate/ })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: /Delete/ })).toBeVisible();
  });

  test("context menu items show shortcuts", async ({ page }) => {
    await page.goto("/?story=overlays---contextmenu--basic");

    const trigger = page.getByText("Right-click me for basic context menu");
    await trigger.click({ button: "right" });

    // Check that shortcuts are displayed in menu items
    const copyItem = page.getByRole("menuitem", { name: /Copy/ });
    await expect(copyItem).toBeVisible();
    await expect(copyItem).toContainText("⌘C");
  });

  test("renders context menu with submenus", async ({ page }) => {
    await page.goto("/?story=overlays---contextmenu--with-submenus");

    const trigger = page.getByText("Right-click me for context menu with submenus");
    await expect(trigger).toBeVisible();

    // Right-click to open context menu
    await trigger.click({ button: "right" });

    // Check main menu items
    await expect(page.getByRole("menuitem", { name: /New/ })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: /Edit/ })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: /Share/ })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: /Download/ })).toBeVisible();
  });

  test("can hover and open submenu", async ({ page }) => {
    await page.goto("/?story=overlays---contextmenu--with-submenus");

    const trigger = page.getByText("Right-click me for context menu with submenus");
    await trigger.click({ button: "right" });

    // Hover over "New" to open submenu
    const newItem = page.getByRole("menuitem", { name: /New/ });
    await newItem.hover();

    // Wait a moment for submenu to appear
    await page.waitForTimeout(300);

    // Check submenu items appear
    await expect(page.getByRole("menuitem", { name: /File/ })).toBeVisible();
    await expect(page.getByRole("menuitem", { name: /Folder/ })).toBeVisible();
  });

  test("renders file manager context menu", async ({ page }) => {
    await page.goto("/?story=overlays---contextmenu--file-manager");

    const trigger = page.getByText("Right-click for file operations");
    await expect(trigger).toBeVisible();

    // Right-click to open context menu
    await trigger.click({ button: "right" });

    // Wait for menu to appear
    await page.waitForTimeout(300);

    // Check at least one file operation is available
    await expect(page.getByRole("menuitem", { name: /Open/ }).first()).toBeVisible();
  });

  test("renders context menu with disabled items", async ({ page }) => {
    await page.goto("/?story=overlays---contextmenu--with-disabled-items");

    const trigger = page.getByText("Right-click me for context menu with disabled items");
    await trigger.click({ button: "right" });

    // Check that disabled items are present but disabled
    const pasteItem = page.getByRole("menuitem", { name: /Paste/ });
    await expect(pasteItem).toBeVisible();
    await expect(pasteItem).toHaveAttribute("data-disabled", "");

    const undoItem = page.getByRole("menuitem", { name: /Undo/ });
    await expect(undoItem).toBeVisible();
    await expect(undoItem).toHaveAttribute("data-disabled", "");

    // Check enabled items don't have disabled attribute
    const copyItem = page.getByRole("menuitem", { name: /Copy/ });
    await expect(copyItem).toBeVisible();
    await expect(copyItem).not.toHaveAttribute("data-disabled");
  });

  test("renders context menu on text", async ({ page }) => {
    await page.goto("/?story=overlays---contextmenu--on-text");

    const trigger = page.getByText("Right-click this highlighted text");
    await expect(trigger).toBeVisible();

    // Right-click to open context menu
    await trigger.click({ button: "right" });

    // Check menu appears
    await expect(page.getByRole("menuitem", { name: /Copy/ })).toBeVisible();
  });

  test("renders glass variant context menu", async ({ page }) => {
    await page.goto("/?story=overlays---contextmenu--glass");

    const trigger = page.getByText("Right-click anywhere on this glass tile");
    await expect(trigger).toBeVisible();

    // Right-click to open glass context menu
    await trigger.click({ button: "right" });

    // Wait for menu to appear
    await page.waitForTimeout(300);

    // Check at least one menu item is visible
    await expect(page.getByRole("menuitem").first()).toBeVisible();
  });
});
