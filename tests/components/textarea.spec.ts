import { test, expect } from "@playwright/test";

test.describe("TextArea Component", () => {
  test("renders default textarea", async ({ page }) => {
    await page.goto("/?story=forms---textarea--default");
    await page.waitForSelector("textarea");

    const textarea = page.locator("textarea").first();
    await expect(textarea).toBeVisible();
  });

  test("accepts text input", async ({ page }) => {
    await page.goto("/?story=forms---textarea--default");
    await page.waitForSelector("textarea");

    const textarea = page.locator("textarea").first();
    await textarea.fill("Hello, this is a multiline\ntext input test.");
    await expect(textarea).toHaveValue("Hello, this is a multiline\ntext input test.");
  });

  test("renders size variants", async ({ page }) => {
    await page.goto("/?story=forms---textarea--sizes");
    await page.waitForSelector("textarea");

    const textareas = page.locator("textarea");
    await expect(textareas).toHaveCount(3); // 3 sizes
  });
});
