import { useQuery } from "react-query";
import genres from "../Data/genres";
import APIClient from "../Services/api-client";

import ms from "ms";
import Genre from "../entities/Genre";
const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24h
    initialData: genres,
  });

//({ data: genres, isLoading: false, error: null });

export default useGenres;
