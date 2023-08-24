import {
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
} from "@radix-ui/themes";
import { NewNoteDialog } from "./new-note-dialog";
import { getNotes } from "@/actions/notes";

export default async function Home() {
  const notes = await getNotes();

  return (
    <main>
      <Container pt="8">
        <Flex justify="between">
          <Heading size="6" as="h3">
            Notes
          </Heading>

          <NewNoteDialog />
        </Flex>

        <Grid columns="3" gap="3" width="auto" mt="4">
          {notes.map((note) => (
            <Card key={`note-card-${note.id}`}>
              <Flex gap="3" align="center">
                <Box>
                  <Text as="div" size="2" weight="bold">
                    {note.title}
                  </Text>
                  <Text as="div" size="2" color="gray">
                    {note.content}
                  </Text>
                </Box>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
