import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../Hooks/useGame";
import { Genre } from "../Hooks/useGenres";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  selectedGenre: Genre | null;
}
const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGame(selectedGenre);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={"10px"} padding={"10px"}>
        {isLoading &&
          new Array(8).fill(null).map((_, index) => (
            <GameCardContainer key={index}>
              {" "}
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map(game => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
