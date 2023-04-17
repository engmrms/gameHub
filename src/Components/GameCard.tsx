import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../Hooks/useGame";
import PlatFormIconsList from "./PlatFormIconsList";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatFormIconsList platforms={game.parent_platforms.map(platform => platform.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
