import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import imageCroppedUrl from "../Services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map(genre => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image src={imageCroppedUrl(genre.image_background)} boxSize={"32px"} borderRadius={4} />
            <Button fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} variant={"link"} onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
