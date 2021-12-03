import { Post } from "src/types/post";
import { User } from "src/types/user";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";
import { Comment } from "src/types/comment";
import { API_URL } from "src/constants";

const useFetchJsonArray = <T>(url: string) => {
  const { data, error } = useSWR<T[], Error>(url, fetcher);

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data?.length === 0,
  };
};

export const usePosts = () => {
  return useFetchJsonArray<Post>(`${API_URL}/posts`);
};

export const useUsers = () => {
  return useFetchJsonArray<User>(`${API_URL}/users`);
};

export const useComments = () => {
  return useFetchJsonArray<Comment>(`${API_URL}/comments`);
};

export const useCommentsByPostId = (id?: number) => {
  return useFetchJsonArray<Post>(`${API_URL}/comments?postId=${id}`);
};

export const usePostsByUserId = (id?: number) => {
  return useFetchJsonArray<Post>(`${API_URL}/posts?userId=${id}`);
};
