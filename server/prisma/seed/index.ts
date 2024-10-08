/// <reference types="node" />
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// E2Eとは別の用途のSeed
async function main() {
  // Seed data for the User model

  const count = await prisma.user.count();

  if (count < 1) {
    const user1 = await prisma.user.create({
      data: {
        name: "Oliver Thompson",
        email: "oliver.t@yahoo.com",
      },
    });

    const user2 = await prisma.user.create({
      data: {
        name: "Sophia Rodriguez",
        email: "s.rodriguez@outlook.com",
      },
    });

    console.log({ user1, user2 });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
