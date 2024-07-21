/// <reference types="node"/>

import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/visual",
  snapshotDir: "./tests/visual/snapshots",
  testMatch: "*.spec.ts",

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI
    ? [["html", { open: "never" }]]
    : [["html", { host: "0.0.0.0", port: "9323", open: "always" }]],

  use: {
    baseURL: "http://localhost",
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

  webServer: [
    {
      command: "npm start",
      url: 'http://localhost',
      reuseExistingServer: !process.env.CI,
    },
    {
      command: "npm run mock",
      url: 'http://localhost:3000',
      reuseExistingServer: !process.env.CI,
    },
  ],
});
