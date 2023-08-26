const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const { id } = await prisma.user.create();

  await prisma.note.create({
    data: {
      userId: id,
      title: "Hello",
      content: "World",
    },
  });
  await prisma.note.create({
    data: {
      userId: id,
      title: "Ola",
      content: "Mundo",
    },
  });
  await prisma.note.create({
    data: {
      userId: id,
      title: "Hallo",
      content: "Welt",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
