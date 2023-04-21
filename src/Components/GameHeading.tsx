import { Heading } from "@chakra-ui/react";
import useGenre from "../Hooks/useGenre";
import usePlatform from "../Hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const genre = useGenre(genreId);
  const platform = usePlatform(platformId);
  const heading = `${platform?.name || ""}  ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
