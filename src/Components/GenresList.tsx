import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import imageCroppedUrl from "../Services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}
const GenresList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading marginBottom={3} fontSize={"2xl"}>
        Genres
      </Heading>
      <List>
        {data?.results.map(genre => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image src={imageCroppedUrl(genre.image_background)} objectFit={"cover"} boxSize={"32px"} borderRadius={4} />
              <Button
                textAlign={"left"}
                whiteSpace="normal"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                variant={"link"}
                onClick={() => onSelectGenre(genre)}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
