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
        <h1>[name] {user?.name}</h1>
        <p>[email] {user?.email}</p>
        <PostsByUserId userId={user?.id} />
      </div>
    </>
  );
};
