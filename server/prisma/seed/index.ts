import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed data for the User model

  const count = await prisma.user.count();

  if (count < 1) {
    const user1 = await prisma.user.create({
      data: {
        name: "John Doe",
        email: "john.doe@example.com",
      },
    });

    const user2 = await prisma.user.create({
      data: {
        name: "Jane Smith",
        email: "jane.smith@example.com",
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
