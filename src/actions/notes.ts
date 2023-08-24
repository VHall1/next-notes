"use server";

import { prisma } from "@/util/prisma";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { zfd } from "zod-form-data";

function getNotes() {
  return prisma.note.findMany({ take: 10 });
}

const newNoteSchema = zfd.formData({
  title: zfd.text(z.string()),
  content: zfd.text(z.string()),
});

async function createNote(data: FormData) {
  const parsedData = newNoteSchema.parse(data);
  await prisma.note.create({ data: parsedData });

  revalidateTag("getNotes");
}

export { createNote, getNotes };
