import { VFC } from "react";
import Head from "next/head";
import { useComment } from "src/hooks/useFetchJson";

export const Comment: VFC = () => {
  const { data: comment, error, isLoading } = useComment();

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
