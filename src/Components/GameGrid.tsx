import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGame from "../Hooks/useGame";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGame(gameQuery);
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding={"10px"}>
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
  );
};

export default GameGrid;
