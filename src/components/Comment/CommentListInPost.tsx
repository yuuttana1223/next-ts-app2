import { VFC } from "react";
import { useFetchJsonArray } from "src/hooks/useFetchJsonArray";
import Link from "next/link";
import { API_URL } from "src/constants/api";
import { Comment } from "src/types/comment";

type Props = {
  postId?: number;
};

export const CommentListInPost: VFC<Props> = (props) => {
  const {
    data: comments,
    error,
    isLoading,
    isEmpty,
  } = useFetchJsonArray<Comment>(`${API_URL}/posts/${props.postId}/comments`);

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
          <Link href={`/comments/${comment.id}`}>
            <a className="block hover:text-blue-500">
              [body id={comment.id}] {comment.body}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
