import { prisma } from "@/util/prisma";

function getNotes() {
  return prisma.note.findMany();
}

export default async function Home() {
  const notes = await getNotes();

  return (
    <main>
      <pre>{JSON.stringify(notes, undefined, 2)}</pre>
    </main>
  );
}
