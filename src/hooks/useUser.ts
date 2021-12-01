import { useRouter } from "next/dist/client/router";
import { User } from "src/types/user";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useUser = () => {
  const router = useRouter();

  const { data: user, error } = useSWR<User, Error>(
    router.query.user
      ? `https://jsonplaceholder.typicode.com/users/${router.query.user}`
      : null,
    fetcher
  );

  return {
    user,
    error,
    isLoading: !error && !user,
  };
};
