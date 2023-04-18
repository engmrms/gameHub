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
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatFormIconsList platforms={game.parent_platforms.map(platform => platform.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
