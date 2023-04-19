import { useQuery } from "react-query";
import platforms from "../Data/platforms";
import APIClient from "../Services/api-client";

import ms from "ms";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platfroms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

//({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
