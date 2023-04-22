import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenShot from "../Hooks/useScreenShot";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShot(gameId);
  if (error) throw error;
  if (isLoading) return <Spinner />;

  return (
    <SimpleGrid spacing={3} columns={{ base: 1, md: 2 }}>
      {data?.results.map(img => (
        <Image src={img.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
