import { VFC } from "react";
import Head from "next/head";
import { useComment } from "src/hooks/useComment";

export const Comment: VFC = () => {
  const { comment, error, isLoading } = useComment();

  console.log({ comment, error, isLoading });

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Head>
        <title>{comment?.name}</title>
      </Head>
      <div>
        <h1>{comment?.name}</h1>
        <p>{comment?.body}</p>
      </div>
    </>
  );
};
