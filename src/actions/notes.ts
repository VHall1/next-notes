"use server";

import { prisma } from "@/util/prisma";
import { Note } from "@prisma/client";
import { z } from "zod";
import { zfd } from "zod-form-data";

function getNotes() {
  return prisma.note.findMany({
    take: 10,
    orderBy: { createdAt: "desc" },
  });
}

const newNoteSchema = zfd.formData({
  title: zfd.text(z.string()),
  content: zfd.text(z.string()),
});

async function createNote(data: FormData) {
  const parsedData = newNoteSchema.parse(data);
  await prisma.note.create({ data: parsedData });
}

async function deleteNote(noteId: Note["id"]) {
  await prisma.note.delete({ where: { id: noteId } });
}

export { createNote, deleteNote, getNotes };
