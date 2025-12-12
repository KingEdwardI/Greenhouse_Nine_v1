import { test, expect } from "@playwright/test";

test.describe("DatePicker Component", () => {
  test("renders default datepicker with placeholder and calendar icon", async ({ page }) => {
    await page.goto("/?story=forms---datepicker--default");
    await page.waitForSelector("input");

    const input = page.getByPlaceholder("Pick a date");
    await expect(input).toBeVisible();

    // Input should be read-only
    await expect(input).toHaveAttribute("readonly", "");

    // Calendar button should be visible
    const calendarButton = page.getByRole("button", { name: "📅" });
    await expect(calendarButton).toBeVisible();
  });

  test("shows controlled value in ISO date format", async ({ page }) => {
    await page.goto("/?story=forms---datepicker--controlled");
    await page.waitForSelector("input");

    // Should show pre-selected date (today's date)
    const input = page.getByPlaceholder("Pick a date");
    const value = await input.inputValue();

    // Value should be in ISO date format YYYY-MM-DD
    await expect(value).toMatch(/\d{4}-\d{2}-\d{2}/);
  });
});
