import { test, expect } from "@playwright/test";

test("vrt test", async ({ page }) => {
  await Promise.all([
    page.waitForResponse(
      (response) =>
        response.url() === "http://server:3000/users" &&
        response.status() === 200
    ),
    page.goto("http://localhost:4173/"),
  ]);

  await expect(page).toHaveScreenshot();
});
