import { useQuery } from "react-query";
import APIClient from "../Services/api-client";
import ScreenShots from "../entities/ScreenShot";

const useScreenShot = (gameId: number) => {
  const apiClient = new APIClient<ScreenShots>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshot", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShot;
