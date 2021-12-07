import { VFC } from "react";
import Link from "next/link";
import { useFetchJsonArray } from "src/hooks/useFetchJsonArray";
import { Comment } from "src/types/comment";
import { API_URL } from "src/constants/api";

export const CommentList: VFC = () => {
  const {
    data: comments,
    error,
    isLoading,
    isEmpty,
  } = useFetchJsonArray<Comment>(`${API_URL}/comments`);

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <ul className="space-y-2">
      {comments?.map((comment) => (
        <li key={comment.id} className="pb-2 border-b">
          <Link href={`/comments/${comment.id}`} prefetch={false}>
            <a className="block text-lg hover:text-blue-500">
              [body id={comment.id}] {comment.body}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
