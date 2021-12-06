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
        <UserByPostUserId userId={post?.userId} />
        <h1 className="my-2 text-2xl font-bold">
          [title id={post?.id}] {post?.title}
        </h1>
        <p className="text-lg text-gray-800">[body] {post?.body}</p>
        <h2 className="mt-10 mb-2 text-lg font-bold">コメント一覧</h2>
        <CommentsByPostId postId={post?.id} />
      </div>
    </>
  );
};
