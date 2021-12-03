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
        <h1>[name]{comment?.name}</h1>
        <p>[body]{comment?.body}</p>
        <PostByCommentPostId postId={comment?.postId} />
      </div>
    </>
  );
};
