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

export const NewNoteDialog = () => {
  const handleSubmit = async (data: FormData) => {
    "use server";

    console.log(data);
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
                Name
              </Text>
              <TextFieldInput placeholder="Enter your full name" />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Email
              </Text>
              <TextFieldInput placeholder="Enter your email" />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <DialogClose>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose>
              <Button type="submit">Save</Button>
            </DialogClose>
          </Flex>
        </form>
      </DialogContent>
    </DialogRoot>
  );
};
