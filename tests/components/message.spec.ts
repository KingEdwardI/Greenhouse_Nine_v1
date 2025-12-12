import { test, expect } from "@playwright/test";

test.describe("Message Component", () => {
  test("renders default message with correct text", async ({ page }) => {
    await page.goto("/?story=messaging---message--default");
    await page.waitForSelector(".gn-Message");

    const message = page.locator(".gn-Message").first();
    await expect(message).toBeVisible();
    await expect(message).toContainText("Hello, this is a test message!");
    await expect(message).toContainText("2:34 PM");
  });

  test("renders user messages with different statuses", async ({ page }) => {
    await page.goto("/?story=messaging---message--user-messages");
    await page.waitForSelector(".gn-Message");

    const messages = page.locator(".gn-Message");
    await expect(messages).toHaveCount(4);

    // Check status indicators
    await expect(
      messages.nth(0).locator(".gn-Message__status[data-status='sending']")
    ).toBeVisible();
    await expect(
      messages.nth(1).locator(".gn-Message__status[data-status='sent']")
    ).toBeVisible();
    await expect(
      messages.nth(2).locator(".gn-Message__status[data-status='delivered']")
    ).toBeVisible();
    await expect(
      messages.nth(3).locator(".gn-Message__status[data-status='read']")
    ).toBeVisible();

    // Check message content
    await expect(messages.nth(0)).toContainText("still sending");
    await expect(messages.nth(1)).toContainText("sent but not delivered");
    await expect(messages.nth(2)).toContainText("delivered but not read");
    await expect(messages.nth(3)).toContainText("has been read");
  });

  test("renders system and assistant messages", async ({ page }) => {
    await page.goto("/?story=messaging---message--system-messages");
    await page.waitForSelector(".gn-Message");

    const messages = page.locator(".gn-Message");
    await expect(messages).toHaveCount(2);

    // Check system message
    const systemMessage = messages.nth(0);
    await expect(systemMessage).toHaveClass(/gn-Message--system/);
    await expect(systemMessage).toContainText("System notification message");

    // Check assistant message with username
    const assistantMessage = messages.nth(1);
    await expect(assistantMessage).toHaveClass(/gn-Message--assistant/);
    await expect(assistantMessage.locator(".gn-Message__username")).toHaveText(
      "Assistant"
    );
    await expect(assistantMessage).toContainText(
      "Assistant response message"
    );
  });

  test("renders conversation with user and assistant messages", async ({
    page,
  }) => {
    await page.goto("/?story=messaging---message--conversation");
    await page.waitForSelector(".gn-Message");

    const messages = page.locator(".gn-Message");
    await expect(messages).toHaveCount(4);

    // Check alternating user/assistant messages
    await expect(messages.nth(0)).toHaveClass(/gn-Message--user/);
    await expect(messages.nth(1)).toHaveClass(/gn-Message--assistant/);
    await expect(messages.nth(2)).toHaveClass(/gn-Message--user/);
    await expect(messages.nth(3)).toHaveClass(/gn-Message--assistant/);
  });

  test("renders markdown content correctly", async ({ page }) => {
    await page.goto("/?story=messaging---message--with-markdown");
    await page.waitForSelector(".gn-Message");

    // Check code blocks are rendered
    await expect(page.locator("pre code")).toBeVisible();
    await expect(page.locator("pre code")).toContainText("interface User");

    // Check tables are rendered
    await expect(page.locator("table")).toBeVisible();
    await expect(page.locator("th").first()).toContainText("Feature");

    // Check lists are rendered (use getByText for specific content)
    await expect(
      page.getByText("Arrays are ordered collections")
    ).toBeVisible();
    await expect(
      page.getByText("Define your data structure")
    ).toBeVisible();

    // Check text formatting
    await expect(page.locator("strong")).toContainText("shape");
  });

  test("renders markdown comparison - plain vs markdown", async ({ page }) => {
    await page.goto("/?story=messaging---message--markdown-comparison");
    await page.waitForSelector(".gn-Message");

    const messages = page.locator(".gn-Message");
    await expect(messages).toHaveCount(2);

    // First message says markdown won't work, but it still renders markdown
    // (both messages have markdown enabled, the story shows the difference in content)
    await expect(messages.nth(0)).toContainText("Plain Text");
    await expect(messages.nth(0)).toContainText(
      "This is a regular message without markdown"
    );

    // Markdown message should have formatted content
    const markdownMessage = messages.nth(1);
    await expect(markdownMessage.locator("strong")).toContainText(
      "with markdown"
    );
    await expect(markdownMessage.locator("code")).toContainText("Inline code");
  });

  test("renders glass variant messages with different colors", async ({
    page,
  }) => {
    await page.goto("/?story=messaging---message--glass-variants");
    await page.waitForSelector(".gn-Message");

    const messages = page.locator(".gn-Message--glass");
    await expect(messages).toHaveCount(7);

    // Check glass color variants
    await expect(messages.nth(0)).toBeVisible();
    await expect(
      page.locator(".gn-Message--glass-primary").first()
    ).toBeVisible();
    await expect(
      page.locator(".gn-Message--glass-secondary").first()
    ).toBeVisible();
    await expect(page.locator(".gn-Message--glass-accent").first()).toBeVisible();
    await expect(
      page.locator(".gn-Message--glass-success").first()
    ).toBeVisible();
    await expect(page.locator(".gn-Message--glass-info").first()).toBeVisible();
    await expect(
      page.locator(".gn-Message--glass-warning").first()
    ).toBeVisible();

    // Check glass messages contain expected text
    await expect(messages.nth(1)).toContainText("Primary glass variant");
    await expect(messages.nth(2)).toContainText("Secondary glass variant");
  });

  test("renders glass conversation with gradient background", async ({
    page,
  }) => {
    await page.goto("/?story=messaging---message--glass-conversation");
    await page.waitForSelector(".gn-Message");

    const glassMessages = page.locator(".gn-Message--glass");
    await expect(glassMessages).toHaveCount(4);

    // Check content
    await expect(glassMessages.first()).toContainText("glass effect");
    await expect(
      glassMessages.nth(1).locator(".gn-Message__username")
    ).toHaveText("Assistant");
  });

  test("renders mixed content with custom components", async ({ page }) => {
    await page.goto("/?story=messaging---message--mixed-content");
    await page.waitForSelector(".gn-Message");

    const messages = page.locator(".gn-Message");
    await expect(messages).toHaveCount(2);

    // Check assistant message has custom styled divs
    const assistantMessage = messages.nth(0);
    await expect(assistantMessage).toContainText("Custom Component Header");
    await expect(assistantMessage).toContainText("Custom Component Footer");

    // Check user message has button
    const userMessage = messages.nth(1);
    await expect(userMessage.locator("button")).toContainText("Click me!");
  });
});
