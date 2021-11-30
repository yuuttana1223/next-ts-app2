import { Post } from "src/types/post";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const usePosts = () => {
  const { data, error } = useSWR<Post[], Error>(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data?.length === 0,
  };
};
