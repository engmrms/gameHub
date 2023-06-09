import axios, { AxiosRequestConfig, CanceledError } from "axios";

export { CanceledError };
export type { AxiosRequestConfig };

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
  };
  get = (id: string | number) => {
    return axiosInstance.get<T>(this.endpoint + "/" + id).then(res => res.data);
  };
}

export default APIClient;
