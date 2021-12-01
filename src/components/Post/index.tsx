import { VFC } from "react";
import Head from "next/head";
import { usePost } from "src/hooks/useFetchJson";

export const Post: VFC = () => {
  const { post, user, error, isLoading } = usePost();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      {user?.name && (
        <div>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
          <div>Created by {user.name}</div>
        </div>
      )}
    </>
  );
};
