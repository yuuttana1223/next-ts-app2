import { VFC } from "react";
import { UserNameInPost } from "src/components/User/UserNameInPost";
import { CommentListInPost } from "src/components/Comment/CommentListInPost";
import { useFetchJson } from "../../hooks/useFetchJson";
import { useRouter } from "next/dist/client/router";
import { API_URL } from "src/constants/api";
import { Post } from "src/types/post";

export const PostDetail: VFC = () => {
  const router = useRouter();
  const {
    data: post,
    error,
    isLoading,
  } = useFetchJson<Post>(
    router.query.id ? `${API_URL}/posts/${router.query.id}` : null
  );

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <UserNameInPost userId={post?.userId} />
      <h1 className="my-2 text-2xl font-bold">
        [title id={post?.id}] {post?.title}
      </h1>
      <p className="text-lg text-gray-800">[body] {post?.body}</p>
      <h2 className="mt-10 mb-2 text-lg font-bold">コメント一覧</h2>
      <CommentListInPost postId={post?.id} />
    </div>
  );
};
