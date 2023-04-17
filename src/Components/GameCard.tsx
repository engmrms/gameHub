import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../Hooks/useGame";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
