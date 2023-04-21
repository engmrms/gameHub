import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../Hooks/useGame";
const GameDetails = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !data) throw error;

  return (
    <>
      <Heading>{data.name}</Heading>
      <Text>{data.description_raw}</Text>
    </>
  );
};

export default GameDetails;
