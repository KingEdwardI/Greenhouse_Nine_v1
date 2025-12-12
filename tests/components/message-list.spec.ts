import { test, expect } from "@playwright/test";

test.describe("MessageList Component", () => {
  test("renders default message list with messages", async ({ page }) => {
    await page.goto("/?story=messaging---messagelist--default");
    await page.waitForSelector(".gn-MessageList");

    const messageList = page.locator(".gn-MessageList");
    await expect(messageList).toBeVisible();

    // Check messages are present
    const messages = page.locator(".gn-Message");
    await expect(messages).toHaveCount(3);

    // Check message variants
    await expect(messages.nth(0)).toHaveClass(/gn-Message--system/);
    await expect(messages.nth(1)).toHaveClass(/gn-Message--user/);
    await expect(messages.nth(2)).toHaveClass(/gn-Message--assistant/);

    // Check content
    await expect(messages.nth(0)).toContainText("Welcome to the chat!");
    await expect(messages.nth(1)).toContainText("Hello everyone!");
    await expect(messages.nth(2)).toContainText("How can I help you today?");
  });

  test("renders long conversation with scroll", async ({ page }) => {
    await page.goto("/?story=messaging---messagelist--long-conversation");
    await page.waitForSelector(".gn-MessageList");

    const messages = page.locator(".gn-Message");
    await expect(messages).toHaveCount(9);

    // Check various message statuses
    await expect(
      messages.last().locator(".gn-Message__status[data-status='sending']")
    ).toBeVisible();
    await expect(
      messages.nth(7).locator(".gn-Message__status[data-status='delivered']")
    ).toBeVisible();

    // Check scrollable container
    const messageList = page.locator(".gn-MessageList");
    const isScrollable = await messageList.evaluate(el => {
      return el.scrollHeight > el.clientHeight;
    });
    expect(isScrollable).toBe(true);
  });

  test("renders typing indicator when users are typing", async ({ page }) => {
    await page.goto("/?story=messaging---messagelist--with-typing");
    await page.waitForSelector(".gn-MessageList");

    // Check typing indicator is visible
    const typingIndicator = page.locator(".gn-TypingIndicator");
    await expect(typingIndicator).toBeVisible();

    // Check typing text shows multiple users
    await expect(typingIndicator).toContainText("Alice and Bob are typing");

    // Check messages are still visible
    const messages = page.locator(".gn-Message");
    await expect(messages).toHaveCount(3);
  });

  test("renders loading state", async ({ page }) => {
    await page.goto("/?story=messaging---messagelist--loading");
    await page.waitForSelector(".gn-MessageList");

    // Check loading indicator
    const loadingIndicator = page.locator(".gn-MessageList__loading");
    await expect(loadingIndicator).toBeVisible();
    await expect(loadingIndicator).toContainText("Loading messages...");

    // Check spinner is present
    const spinner = page.locator(".gn-MessageList__spinner");
    await expect(spinner).toBeVisible();
  });

  test("renders default empty state when no messages", async ({ page }) => {
    await page.goto("/?story=messaging---messagelist--empty-state");
    await page.waitForSelector(".gn-MessageList");

    // Check empty state is visible
    const emptyState = page.locator(".gn-MessageList__empty");
    await expect(emptyState).toBeVisible();
    await expect(emptyState).toContainText("No messages yet");
    await expect(emptyState).toContainText("Start a conversation!");

    // Check icon is present
    const icon = page.locator(".gn-MessageList__empty-icon");
    await expect(icon).toBeVisible();

    // No messages should be present
    const messages = page.locator(".gn-Message");
    await expect(messages).toHaveCount(0);
  });

  test("renders custom empty state", async ({ page }) => {
    await page.goto("/?story=messaging---messagelist--custom-empty-state");
    await page.waitForSelector(".gn-MessageList");

    // Check custom empty state content
    await expect(page.getByText("Welcome to the chat!")).toBeVisible();
    await expect(
      page.getByText("Send your first message to get started.")
    ).toBeVisible();

    // Default empty state should not be visible
    const defaultEmptyState = page.locator(".gn-MessageList__empty");
    await expect(defaultEmptyState).not.toBeVisible();
  });

  test("renders full chat interface with header and typing", async ({
    page,
  }) => {
    await page.goto("/?story=messaging---messagelist--chat-interface");
    await page.waitForSelector(".gn-MessageList");

    // Check header
    await expect(page.getByText("Chat Room", { exact: true })).toBeVisible();

    // Check messages
    const messages = page.locator(".gn-Message");
    await expect(messages).toHaveCount(4);

    // Check system message
    await expect(messages.nth(0)).toHaveClass(/gn-Message--system/);
    await expect(messages.nth(0)).toContainText("Welcome to the chat room!");

    // Check typing indicator
    const typingIndicator = page.locator(".gn-TypingIndicator");
    await expect(typingIndicator).toBeVisible();
    await expect(typingIndicator).toContainText("Assistant is typing");

    // Check assistant message content includes component descriptions
    await expect(messages.nth(2)).toContainText("Message:");
    await expect(messages.nth(2)).toContainText("MessageList:");
    await expect(messages.nth(2)).toContainText("MessageInput:");
  });

  test("scrolls to bottom automatically", async ({ page }) => {
    await page.goto("/?story=messaging---messagelist--long-conversation");
    await page.waitForSelector(".gn-MessageList");

    const messageList = page.locator(".gn-MessageList");

    // Wait a moment for auto-scroll to complete
    await page.waitForTimeout(500);

    // Check that the list is scrolled to bottom (with larger tolerance for rendering differences)
    const isAtBottom = await messageList.evaluate(el => {
      return Math.abs(el.scrollHeight - el.clientHeight - el.scrollTop) < 50;
    });

    expect(isAtBottom).toBe(true);
  });
});
