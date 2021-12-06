import { VFC } from "react";
import Head from "next/head";
import { useUser } from "src/hooks/useFetchJson";
import { PostsByUserId } from "src/components/Posts/PostsByUserId";

export const User: VFC = () => {
  const { data: user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Head>
        <title>{user?.name}</title>
      </Head>
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
        <PostsByUserId userId={user?.id} />
      </div>
    </>
  );
};
