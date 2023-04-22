import { Heading, SimpleGrid } from "@chakra-ui/react";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import Definitions from "./Definitions";

interface Props {
  game: Game;
}

const GameAttribuits = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <Definitions term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Heading key={platform.id} as="dd" fontSize="sm">
            {platform.name}
          </Heading>
        ))}
      </Definitions>

      <Definitions term="Metascore">
        <CriticScore score={game.metacritic} />
      </Definitions>

      <Definitions term="Genres">
        {game.genres.map(genre => (
          <Heading key={genre.id} as="dd" fontSize="sm">
            {genre.name}
          </Heading>
        ))}
      </Definitions>
      <Definitions term="Publishers">
        {game.publishers.map(publisher => (
          <Heading key={publisher.id} as="dd" fontSize="sm">
            {publisher.name}
          </Heading>
        ))}
      </Definitions>
    </SimpleGrid>
  );
};

export default GameAttribuits;
