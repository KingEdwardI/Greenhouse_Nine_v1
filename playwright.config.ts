import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright config for OCR-based component testing via Ladle
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",

  use: {
    // Ladle dev server URL
    baseURL: "http://localhost:61000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  // Start Ladle before running tests
  webServer: {
    command: "pnpm ladle serve",
    url: "http://localhost:61000",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
