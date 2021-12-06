import { Post } from "src/types/post";
import { User } from "src/types/user";
import useSWRImmutable from "swr/immutable";
import { Comment } from "src/types/comment";
import { API_URL } from "src/constants";

const useFetchJsonArray = <T>(url: string) => {
  const { data, error } = useSWRImmutable<T[], Error>(url);

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data?.length === 0,
  };
};

// posts
export const usePosts = () => {
  return useFetchJsonArray<Post>(`${API_URL}/posts`);
};

export const usePostsByUserId = (id?: number) => {
  return useFetchJsonArray<Post>(`${API_URL}/posts?userId=${id}`);
};

// users
export const useUsers = () => {
  return useFetchJsonArray<User>(`${API_URL}/users`);
};

// comments
export const useComments = () => {
  return useFetchJsonArray<Comment>(`${API_URL}/comments`);
};

export const useCommentsByPostId = (id?: number) => {
  return useFetchJsonArray<Post>(`${API_URL}/comments?postId=${id}`);
};
