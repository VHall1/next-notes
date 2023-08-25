"use client";

import { deleteNote } from "@/actions/notes";
import { Note } from "@prisma/client";
import { TrashIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";

export const DeleteNoteButton: React.FC<DeleteNoteButtonProps> = ({
  noteId,
}) => {
  return (
    <IconButton
      variant="ghost"
      color="gray"
      style={{ position: "absolute", right: 16, top: 16 }}
      onClick={() => deleteNote(noteId)}
    >
      <TrashIcon />
    </IconButton>
  );
};

interface DeleteNoteButtonProps {
  noteId: Note["id"];
}
