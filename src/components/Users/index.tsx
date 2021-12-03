import { VFC } from "react";
import Link from "next/link";
import { useUsers } from "src/hooks/useFetchJsonArray";

export const Users: VFC = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {data?.map((user) => (
        <li key={user.id}>
          [name]
          <Link href={`users/${user.id}`}>
            <a>{user.name}</a>
          </Link>
        </li>
      ))}
    </ol>
  );
};
