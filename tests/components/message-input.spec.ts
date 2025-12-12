import { test, expect } from "@playwright/test";

test.describe("MessageInput Component", () => {
  test("renders default message input with placeholder", async ({ page }) => {
    await page.goto("/?story=messaging---messageinput--default");
    await page.waitForSelector(".gn-MessageInput");

    const textarea = page.locator(".gn-MessageInput__textarea textarea");
    await expect(textarea).toBeVisible();
    await expect(textarea).toHaveAttribute(
      "placeholder",
      "Type a message..."
    );

    const sendButton = page.getByRole("button", { name: "Send" });
    await expect(sendButton).toBeVisible();
    await expect(sendButton).toBeDisabled();
  });

  test("send button enables when text is entered", async ({ page }) => {
    await page.goto("/?story=messaging---messageinput--default");
    await page.waitForSelector(".gn-MessageInput");

    const textarea = page.locator(".gn-MessageInput__textarea textarea");
    const sendButton = page.getByRole("button", { name: "Send" });

    // Initially disabled
    await expect(sendButton).toBeDisabled();

    // Type text
    await textarea.fill("Hello world");
    await expect(sendButton).toBeEnabled();

    // Clear text
    await textarea.fill("");
    await expect(sendButton).toBeDisabled();
  });

  test("renders loading state", async ({ page }) => {
    await page.goto("/?story=messaging---messageinput--loading");
    await page.waitForSelector(".gn-MessageInput");

    const textarea = page.locator(".gn-MessageInput__textarea textarea");
    await expect(textarea).toBeDisabled();
    await expect(textarea).toHaveAttribute("placeholder", "Sending...");

    const sendButton = page.getByRole("button", { name: /Send|\.\.\./ });
    await expect(sendButton).toBeDisabled();
  });

  test("renders disabled state", async ({ page }) => {
    await page.goto("/?story=messaging---messageinput--disabled");
    await page.waitForSelector(".gn-MessageInput");

    const textarea = page.locator(".gn-MessageInput__textarea textarea");
    await expect(textarea).toBeDisabled();
    await expect(textarea).toHaveAttribute("placeholder", "Chat is disabled");

    const sendButton = page.getByRole("button", { name: "Send" });
    await expect(sendButton).toBeDisabled();
  });

  test("renders with custom placeholder", async ({ page }) => {
    await page.goto("/?story=messaging---messageinput--custom-placeholder");
    await page.waitForSelector(".gn-MessageInput");

    const textarea = page.locator(".gn-MessageInput__textarea textarea");
    await expect(textarea).toHaveAttribute(
      "placeholder",
      "Ask me anything..."
    );
  });

  test("interactive input shows help text and accepts input", async ({
    page,
  }) => {
    await page.goto("/?story=messaging---messageinput--interactive");
    await page.waitForSelector(".gn-MessageInput");

    // Check help text
    await expect(
      page.getByText(/Try typing a message and press Enter/)
    ).toBeVisible();
    await expect(page.getByText(/Use Shift\+Enter for new lines/)).toBeVisible();

    const textarea = page.locator(".gn-MessageInput__textarea textarea");
    const sendButton = page.getByRole("button", { name: "Send" });

    // Type message
    await textarea.fill("Test message");
    await expect(sendButton).toBeEnabled();
  });

  test("textarea auto-resizes with content", async ({ page }) => {
    await page.goto("/?story=messaging---messageinput--interactive");
    await page.waitForSelector(".gn-MessageInput");

    const textarea = page.locator(".gn-MessageInput__textarea textarea");

    // Get initial height
    const initialBox = await textarea.boundingBox();
    const initialHeight = initialBox?.height || 0;

    // Type multiple lines
    await textarea.fill(
      "Line 1\nLine 2\nLine 3\nLine 4\nLine 5"
    );

    // Wait for resize
    await page.waitForTimeout(100);

    // Check height increased
    const newBox = await textarea.boundingBox();
    const newHeight = newBox?.height || 0;

    expect(newHeight).toBeGreaterThan(initialHeight);
  });

  test("send button clears input when clicked", async ({ page }) => {
    await page.goto("/?story=messaging---messageinput--interactive");
    await page.waitForSelector(".gn-MessageInput");

    const textarea = page.locator(".gn-MessageInput__textarea textarea");
    const sendButton = page.getByRole("button", { name: "Send" });

    // Type message
    await textarea.fill("Test message");
    await expect(sendButton).toBeEnabled();

    // Click send
    await sendButton.click();

    // Wait for alert dialog (from the story's alert)
    page.once("dialog", async dialog => {
      expect(dialog.message()).toContain('Message sent: "Test message"');
      await dialog.accept();
    });

    // Input should be cleared
    await expect(textarea).toHaveValue("");
    await expect(sendButton).toBeDisabled();
  });
});
