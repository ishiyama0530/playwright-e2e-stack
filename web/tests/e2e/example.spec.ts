import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  page.goto("/");
  await expect(page).toHaveTitle(/playwright-e2e-stack/);
});

test("api success", async ({ page }) => {
  await Promise.all([
    page.waitForResponse(
      (response) =>
        response.url() === "http://server:3000/users" &&
        response.status() === 200
    ),
    page.goto("/"),
  ]);

  await expect(page.getByText("john.doe@example.com")).toBeVisible();
});
