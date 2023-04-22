import { Spinner } from "@chakra-ui/react";
import useTrailor from "../Hooks/useTrailer";

interface Props {
  gameId: number;
}

const Trailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailor(gameId);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  const firstItem = data?.results[0];

  return firstItem ? <video src={firstItem.data[480]} controls poster={firstItem.preview} /> : null;
};

export default Trailer;
