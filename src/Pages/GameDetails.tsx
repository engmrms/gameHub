import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Expandable from "../Components/Expandable";
import GameAttribuits from "../Components/GameAttribuits";
import GameScreenShots from "../Components/GameScreenShots";
import Trailer from "../Components/Trailer";
import useGame from "../Hooks/useGame";
const GameDetails = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !data) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <GridItem>
        <Heading>{data.name}</Heading>
        <Expandable>{data.description_raw}</Expandable>
        <GameAttribuits game={data} />
      </GridItem>
      <GridItem>
        <Trailer gameId={data.id} />
        <GameScreenShots gameId={data.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetails;
