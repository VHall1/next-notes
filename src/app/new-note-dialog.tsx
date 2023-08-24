import { prisma } from "@/util/prisma";
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
} from "@radix-ui/themes";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { zfd } from "zod-form-data";

export const NewNoteDialog = () => {
  const handleSubmit = async (data: FormData) => {
    "use server";

    const parsedData = newNoteSchema.parse(data);
    await prisma.note.create({ data: parsedData });

    revalidateTag("getNotes");
  };

  return (
    <DialogRoot>
      <DialogTrigger>
        <Button variant="soft">Create note</Button>
      </DialogTrigger>

      <DialogContent style={{ maxWidth: 450 }}>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription size="2" mb="4">
          Make changes to your profile.
        </DialogDescription>

        <form action={handleSubmit}>
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
              <TextFieldInput name="content" required />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <DialogClose>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit">Save</Button>
          </Flex>
        </form>
      </DialogContent>
    </DialogRoot>
  );
};

const newNoteSchema = zfd.formData({
  title: zfd.text(z.string()),
  content: zfd.text(z.string()),
});
