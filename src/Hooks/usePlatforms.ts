import { useQuery } from "react-query";
import platforms from "../Data/platforms";
import APIClient from "../Services/api-client";
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
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

//({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
