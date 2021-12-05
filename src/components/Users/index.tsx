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
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {data?.map((user) => (
        <li key={user.id} className="rounded shadow">
          <Link href={`users/${user.id}`}>
            <a className="block p-4 space-y-2 hover:bg-gray-100">
              <h1 className="text-xl font-bold truncate">
                [name id={user.id}] {user.name}
              </h1>
              <p className="truncate">[email] {user.email}</p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
