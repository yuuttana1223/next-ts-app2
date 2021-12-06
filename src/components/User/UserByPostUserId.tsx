import { VFC } from "react";
import { useUserByPostUserId } from "src/hooks/useFetchJson";

type Props = {
  userId?: number;
};

export const UserByPostUserId: VFC<Props> = (props) => {
  const { data: user, error, isLoading } = useUserByPostUserId(props.userId);

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>{user?.name && `[userName] ${user.name}`}</div>;
};
