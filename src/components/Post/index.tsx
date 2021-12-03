import { VFC } from "react";
import Head from "next/head";
import { usePost } from "src/hooks/useFetchJson";
import { UserByPostUserId } from "src/components/User/UserByPostUserId";
import { CommentsByPostId } from "src/components/Comments/CommentsByPostId";

export const Post: VFC = () => {
  const { data: post, error, isLoading } = usePost();

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
      <div>
        <h1>[title]{post?.title}</h1>
        <p>[body] {post?.body}</p>
        <UserByPostUserId userId={post?.userId} />
        <CommentsByPostId postId={post?.id} />
      </div>
    </>
  );
};
