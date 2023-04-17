import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../Hooks/useGame";
import imageCroppedUrl from "../Services/image-url";
import CriticScore from "./CriticScore";
import PlatFormIconsList from "./PlatFormIconsList";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card height={"100%"}>
      <Image src={imageCroppedUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatFormIconsList platforms={game.parent_platforms.map(platform => platform.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
