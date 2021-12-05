import { VFC } from "react";
import Head from "next/head";
import { useComment } from "src/hooks/useFetchJson";
import { PostByCommentPostId } from "../Post/PostByCommentPostId";

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
        <h1 className="text-3xl font-bold">
          [name id={comment?.id}] {comment?.name}
        </h1>
        <p className="mt-2 text-xl">[body] {comment?.body}</p>
        <h2 className="mt-10 mb-2 text-2xl font-bold">投稿元</h2>
        <PostByCommentPostId postId={comment?.postId} />
      </div>
    </>
  );
};
