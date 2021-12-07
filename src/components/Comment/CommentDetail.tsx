import { VFC } from "react";
import { useFetchJson } from "src/hooks/useFetchJson";
import { PostTitleInComment } from "src/components/Post/PostTitleInComment";
import { Comment } from "src/types/comment";
import { useRouter } from "next/dist/client/router";
import { API_URL } from "src/constants/api";

export const CommentDetail: VFC = () => {
  const router = useRouter();
  const {
    data: comment,
    error,
    isLoading,
  } = useFetchJson<Comment>(
    router.query.id ? `${API_URL}/comments/${router.query.id}` : null
  );

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">
        [name id={comment?.id}] {comment?.name}
      </h1>
      <p className="mt-2 text-xl">[body] {comment?.body}</p>
      <h2 className="mt-10 mb-2 text-2xl font-bold">投稿元</h2>
      <PostTitleInComment postId={comment?.postId} />
    </div>
  );
};
