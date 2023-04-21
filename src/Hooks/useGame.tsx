import { useQuery } from "react-query";
import ApiClient from "../Services/api-client";
import { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");
const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
