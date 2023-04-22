import { useQuery } from "react-query";
import APIClient from "../Services/api-client";
import Trailers from "../entities/Trailers";

const useTrailor = (gameId: number) => {
  const apiClient = new APIClient<Trailers>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailer", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailor;
