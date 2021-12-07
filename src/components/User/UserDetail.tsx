import { VFC } from "react";
import { useFetchJson } from "src/hooks/useFetchJson";
import { PostListInUser } from "src/components/Post/PostListInUser";
import { User } from "src/types/user";
import { API_URL } from "src/constants/api";
import { useRouter } from "next/dist/client/router";

export const UserDetail: VFC = () => {
  const router = useRouter();
  const {
    data: user,
    error,
    isLoading,
  } = useFetchJson<User>(
    router.query.id ? `${API_URL}/users/${router.query.id}` : null
  );

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">
        [name id={user?.id}] {user?.name}
      </h1>
      <h2 className="mt-10 text-xl font-semibold">詳細</h2>
      <ul className="mt-2 list-disc list-inside">
        <li>[email] {user?.email}</li>
        <li>[address.city] {user?.address.city}</li>
        <li>[phone] {user?.phone}</li>
        <li>[website] {user?.website}</li>
        <li>[company.name] {user?.company.name}</li>
      </ul>
      <h2 className="mt-10 mb-2 text-xl font-semibold">投稿</h2>
      <PostListInUser userId={user?.id} />
    </div>
  );
};
