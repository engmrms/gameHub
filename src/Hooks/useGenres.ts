import { useQuery } from "react-query";
import genres from "../Data/genres";
import apiClient, { FetchResponse } from "../Services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => {
      return apiClient.get<FetchResponse<Genre>>("/genres").then(res => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });

//({ data: genres, isLoading: false, error: null });

export default useGenres;
