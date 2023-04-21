import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import imageCroppedUrl from "../Services/image-url";
import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
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
        <Heading fontSize={"2xl"}>
          <Link to={`game/${game.slug}`}>{game.name}</Link>
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
