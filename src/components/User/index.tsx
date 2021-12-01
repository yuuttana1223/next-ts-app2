import { VFC } from "react";
import Head from "next/head";
import { useUser } from "src/hooks/useUser";

export const User: VFC = () => {
  const { user, error, isLoading } = useUser();

  console.log({ user, error, isLoading });

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
        <h1>{user?.name}</h1>
        <p>{user?.email}</p>
      </div>
    </>
  );
};
