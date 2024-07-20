import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  globalSetup: "./tests/functional/utils/globalSetup.ts",

  testDir: "./tests/functional",
  testMatch: "*.spec.ts",

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI
    ? [["html", { open: "never" }]]
    : [["html", { host: "0.0.0.0", port: "9323", open: "always" }]],

  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL,
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
  ],
});
