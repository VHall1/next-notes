"use client";

import { createNote } from "@/actions/notes";
import {
  Button,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Flex,
  Text,
  TextFieldInput,
  TextArea,
} from "@radix-ui/themes";
import { useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const NewNoteDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="soft">Create note</Button>
      </DialogTrigger>

      <DialogContent style={{ maxWidth: 450 }}>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription size="2" mb="4">
          Make changes to your profile.
        </DialogDescription>

        <form
          action={async (data) => {
            try {
              await createNote(data);
            } catch (error) {
              console.error(error);
            }

            setOpen(false);
          }}
        >
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Title
              </Text>
              <TextFieldInput name="title" required />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Content
              </Text>
              <TextArea name="content" required />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <DialogClose>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </DialogClose>

            <SubmitButton />
          </Flex>
        </form>
      </DialogContent>
    </DialogRoot>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      Save
    </Button>
  );
};
