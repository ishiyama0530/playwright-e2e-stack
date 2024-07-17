import { test, expect } from "@playwright/test";

test("vrt test", async ({ page }) => {
  await Promise.all([
    page.waitForResponse(
      (response) =>
        response.url() === "http://localhost:3000/users" &&
        response.status() === 200
    ),
    page.goto("/"),
  ]);

  await expect(page).toHaveScreenshot();
});
