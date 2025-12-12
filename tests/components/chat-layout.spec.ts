import { test, expect } from "@playwright/test";

test.describe("ChatLayout Component", () => {
  test("renders default chat layout with messages", async ({ page }) => {
    await page.goto("/?story=messaging---chatlayout--default");
    await page.waitForSelector(".gn-ChatLayout");

    // Check title and description
    await expect(page.locator(".gn-ChatLayout__title")).toHaveText(
      "Product Support"
    );
    await expect(page.locator(".gn-ChatLayout__description")).toContainText(
      "Ask the Greenhouse assistant anything"
    );

    // Check status indicator
    await expect(page.locator(".gn-ChatLayout__status")).toContainText(
      "Online"
    );

    // Check messages are rendered
    const messages = page.locator(".gn-Message");
    await expect(messages).toHaveCount(4);

    // Check message input is present
    await expect(page.locator(".gn-MessageInput")).toBeVisible();
    await expect(
      page.locator(".gn-MessageInput__textarea textarea")
    ).toHaveAttribute("placeholder", "Type a message...");

    // Check typing indicator is shown
    await expect(page.locator(".gn-TypingIndicator")).toBeVisible();
    await expect(page.locator(".gn-TypingIndicator__text")).toContainText(
      "Greenhouse is typing"
    );

    // Check footer
    await expect(page.locator(".gn-ChatLayout__footer")).toContainText(
      "Press Enter to send"
    );
  });

  test("renders chat layout with sidebar", async ({ page }) => {
    await page.goto("/?story=messaging---chatlayout--with-sidebar");
    await page.waitForSelector(".gn-ChatLayout");

    // Check sidebar is present
    await expect(page.locator(".gn-ChatLayout__sidebar")).toBeVisible();
    await expect(
      page.locator(".gn-ChatLayout__sidebar")
    ).toContainText("Participants");

    // Check toolbar buttons
    await expect(page.getByRole("button", { name: "Share" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Archive" })).toBeVisible();

    // Check layout has sidebar class
    await expect(page.locator(".gn-ChatLayout")).toHaveClass(
      /gn-ChatLayout--with-sidebar/
    );
  });

  test("renders chat layout with left sidebar", async ({ page }) => {
    await page.goto("/?story=messaging---chatlayout--sidebar-left");
    await page.waitForSelector(".gn-ChatLayout");

    // Check sidebar is present
    await expect(page.locator(".gn-ChatLayout__sidebar")).toBeVisible();

    // Check layout has left sidebar class
    await expect(page.locator(".gn-ChatLayout")).toHaveClass(
      /gn-ChatLayout--sidebar-left/
    );

    // Check sidebar content
    await expect(
      page.locator(".gn-ChatLayout__sidebar")
    ).toContainText("Concierge Tips");
    await expect(
      page.getByRole("button", { name: "Summarize Thread" })
    ).toBeVisible();
  });

  test("renders custom message renderer with glass effect", async ({
    page,
  }) => {
    await page.goto("/?story=messaging---chatlayout--custom-renderer");
    await page.waitForSelector(".gn-ChatLayout");

    // Check title
    await expect(page.locator(".gn-ChatLayout__title")).toHaveText(
      "Glass Chat"
    );

    // Check glass messages are rendered
    const glassMessages = page.locator(".gn-Message--glass");
    await expect(glassMessages.first()).toBeVisible();

    // Check no input (showInput=false)
    await expect(page.locator(".gn-MessageInput")).not.toBeVisible();

    // Check custom timestamp rendering (multiple instances expected)
    await expect(page.getByText(/Logged at/).first()).toBeVisible();
  });
});
