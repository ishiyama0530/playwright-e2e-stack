import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  page.goto("/");
  await expect(page).toHaveTitle(/playwright-e2e-stack/);
});

test("api check", async ({ page }) => {
  await Promise.all([
    page.waitForResponse(
      (response) =>
        response.url() === `${process.env.PLAYWRIGHT_API_URL}/users` &&
        response.status() === 200
    ),
    page.goto("/"),
  ]);

  await expect(page.getByText("xxxjohn.doe@example.com")).toBeVisible();
});
