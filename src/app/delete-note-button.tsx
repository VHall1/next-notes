"use client";

import { deleteNote } from "@/actions/notes";
import { Note } from "@prisma/client";
import { TrashIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export const DeleteNoteButton: React.FC<DeleteNoteButtonProps> = ({
  noteId,
}) => {
  const router = useRouter();

  return (
    <IconButton
      variant="ghost"
      color="gray"
      style={{ position: "absolute", right: 16, top: 16 }}
      onClick={async () => {
        await deleteNote(noteId);
        router.refresh();
      }}
    >
      <TrashIcon />
    </IconButton>
  );
};

interface DeleteNoteButtonProps {
  noteId: Note["id"];
}
