import { useRouter } from "next/dist/client/router";
import { API_URL } from "src/constants";
import { Comment } from "src/types/comment";
import { Post } from "src/types/post";
import { User } from "src/types/user";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

const useFetchJson = <T>() => {
  const router = useRouter();
  // /users/[id] => users, /comments/[id] => comments
  const parent: string = router.pathname.split("/")[1];

  const { data, error } = useSWR<T, Error>(
    router.query.id ? `${API_URL}/${parent}/${router.query.id}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
  };
};

export const useUser = () => {
  return useFetchJson<User>();
};

export const useComment = () => {
  return useFetchJson<Comment>();
};

export const usePost = () => {
  const { data: post, error: postError } = useFetchJson<Post>();
  const { data: user, error: userError } = useSWR<User, Error>(
    post?.userId ? `${API_URL}/users/${post.userId}` : null,
    fetcher
  );

  return {
    post,
    user,
    error: postError || userError,
    isLoading: !user && !userError && !post && !postError,
  };
};
