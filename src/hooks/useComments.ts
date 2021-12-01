import { Comment } from "src/types/comment";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useComments = () => {
  const { data, error } = useSWR<Comment[], Error>(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data?.length === 0,
  };
};
