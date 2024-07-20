import type { FullConfig } from "@playwright/test";
import { execSync } from "child_process";

async function globalSetup(config: FullConfig) {
  execSync("npx ts-node --transpile-only /app/fixtures/seeds/e2e-seed.ts");
}

export default globalSetup;
