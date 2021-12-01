import { useRouter } from "next/dist/client/router";
import { Comment } from "src/types/comment";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useComment = () => {
  const router = useRouter();

  const { data: comment, error } = useSWR<Comment, Error>(
    router.query.comment
      ? `https://jsonplaceholder.typicode.com/comments/${router.query.comment}`
      : null,
    fetcher
  );

  return {
    comment,
    error,
    isLoading: !error && !comment,
  };
};
