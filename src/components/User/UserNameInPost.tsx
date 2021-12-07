import { VFC } from "react";
import { API_URL } from "src/constants/api";
import { useFetchJson } from "src/hooks/useFetchJson";
import { User } from "src/types/user";

type Props = {
  userId?: number;
};

export const UserNameInPost: VFC<Props> = (props) => {
  const {
    data: user,
    error,
    isLoading,
  } = useFetchJson<User>(
    props.userId ? `${API_URL}/users/${props.userId}` : null
  );

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>{user?.name && `[userName] ${user.name}`}</div>;
};
