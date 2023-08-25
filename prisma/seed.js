const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.note.create({
    data: {
      title: "Hello",
      content: "World",
    },
  });
  await prisma.note.create({
    data: {
      title: "Ola",
      content: "Mundo",
    },
  });
  await prisma.note.create({
    data: {
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
