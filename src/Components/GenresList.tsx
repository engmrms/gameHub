import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";
import imageCroppedUrl from "../Services/image-url";

const GenresList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map(genre => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image src={imageCroppedUrl(genre.image_background)} boxSize={"32px"} borderRadius={4} />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
