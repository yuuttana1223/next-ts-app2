import { useRouter } from "next/dist/client/router";
import { Post } from "src/types/post";
import { User } from "src/types/user";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const usePost = () => {
  const router = useRouter();
  const { data: post, error: postError } = useSWR<Post, Error>(
    router.query.post
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.post}`
      : null,
    fetcher
  );

  const { data: user, error: userError } = useSWR<User, Error>(
    post?.userId
      ? `https://jsonplaceholder.typicode.com/users/${post.userId}`
      : null,
    fetcher
  );

  return {
    post,
    user,
    error: postError || userError,
    isLoading: !user && !userError && !post && !postError, // 順番を意識しないといけない
  };
};
