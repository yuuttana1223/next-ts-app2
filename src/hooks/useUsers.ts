import { User } from "src/types/user";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useUsers = () => {
  const { data, error } = useSWR<User[], Error>(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data?.length === 0,
  };
};
