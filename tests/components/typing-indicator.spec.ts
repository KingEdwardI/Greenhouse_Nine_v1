import { test, expect } from "@playwright/test";

test.describe("TypingIndicator Component", () => {
  test("renders default typing indicator with single user", async ({
    page,
  }) => {
    await page.goto("/?story=messaging---typingindicator--default");
    await page.waitForSelector(".gn-TypingIndicator");

    const indicator = page.locator(".gn-TypingIndicator");
    await expect(indicator).toBeVisible();

    // Check text shows single user
    const text = indicator.locator(".gn-TypingIndicator__text");
    await expect(text).toHaveText("Alice is typing...");

    // Check animated dots are present
    const dots = indicator.locator(".gn-TypingIndicator__dot");
    await expect(dots).toHaveCount(3);
  });

  test("renders single user typing", async ({ page }) => {
    await page.goto("/?story=messaging---typingindicator--single-user");
    await page.waitForSelector(".gn-TypingIndicator");

    const text = page.locator(".gn-TypingIndicator__text");
    await expect(text).toHaveText("John is typing...");
  });

  test("renders two users typing", async ({ page }) => {
    await page.goto("/?story=messaging---typingindicator--two-users");
    await page.waitForSelector(".gn-TypingIndicator");

    const text = page.locator(".gn-TypingIndicator__text");
    await expect(text).toHaveText("Alice and Bob are typing...");
  });

  test("renders multiple users typing with count", async ({ page }) => {
    await page.goto("/?story=messaging---typingindicator--multiple-users");
    await page.waitForSelector(".gn-TypingIndicator");

    const text = page.locator(".gn-TypingIndicator__text");
    // Should show: "Alice, Bob and 2 others are typing..."
    await expect(text).toContainText("Alice, Bob and 2 others are typing...");
  });

  test("does not render when no users are typing", async ({ page }) => {
    await page.goto("/?story=messaging---typingindicator--no-users");
    await page.waitForTimeout(500); // Wait to ensure component would render if it was going to

    // Check that typing indicator is not present
    const indicator = page.locator(".gn-TypingIndicator");
    await expect(indicator).not.toBeVisible();

    // Check the surrounding text is still visible
    await expect(
      page.getByText("No typing indicator should appear below:")
    ).toBeVisible();
    await expect(
      page.getByText("Nothing rendered above this text.")
    ).toBeVisible();
  });

  test("renders in chat context with proper styling", async ({ page }) => {
    await page.goto("/?story=messaging---typingindicator--in-chat-context");
    await page.waitForSelector(".gn-TypingIndicator");

    const indicator = page.locator(".gn-TypingIndicator");
    await expect(indicator).toBeVisible();

    // Check it's positioned with message bubbles
    const text = indicator.locator(".gn-TypingIndicator__text");
    await expect(text).toHaveText("Alice is typing...");

    // Check chat messages are visible above
    await expect(page.getByText("Hey, are you there?")).toBeVisible();
    await expect(
      page.getByText("Yes, just working on something")
    ).toBeVisible();
  });

  test("animated dots are present and styled", async ({ page }) => {
    await page.goto("/?story=messaging---typingindicator--single-user");
    await page.waitForSelector(".gn-TypingIndicator");

    const dotsContainer = page.locator(".gn-TypingIndicator__dots");
    await expect(dotsContainer).toBeVisible();

    const dots = page.locator(".gn-TypingIndicator__dot");
    await expect(dots).toHaveCount(3);

    // Each dot should be visible
    for (let i = 0; i < 3; i++) {
      await expect(dots.nth(i)).toBeVisible();
    }
  });
});
