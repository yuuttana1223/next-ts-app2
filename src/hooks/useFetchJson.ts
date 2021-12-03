import { useRouter } from "next/dist/client/router";
import { API_URL } from "src/constants";
import { Comment } from "src/types/comment";
import { Post } from "src/types/post";
import { User } from "src/types/user";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

const useFetchJson = <T>(parent: string, id?: string | number | string[]) => {
  const { data, error } = useSWR<T, Error>(
    id ? `${API_URL}/${parent}/${id}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
  };
};

export const useUser = () => {
  return useFetchJson<User>("users", useRouter().query.id);
};

export const useComment = () => {
  return useFetchJson<Comment>("comments", useRouter().query.id);
};

export const usePost = () => {
  return useFetchJson<Post>("posts", useRouter().query.id);
};

export const useUserByPostUserId = (userId?: number) => {
  return useFetchJson<User>("users", userId);
};

export const usePostByCommentPostId = (postId?: number) => {
  return useFetchJson<Post>("posts", postId);
};
