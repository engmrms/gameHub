import { useQuery } from "react-query";
import platforms from "../Data/platforms";
import apiClient, { FetchResponse } from "../Services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platfroms"],
    queryFn: () => apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

//({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
