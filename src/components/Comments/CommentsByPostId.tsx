import { VFC } from "react";
import { useCommentsByPostId } from "src/hooks/useFetchJsonArray";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

type Props = {
  postId?: number;
};

export const CommentsByPostId: VFC<Props> = (props) => {
  const {
    data: comments,
    error,
    isLoading,
    isEmpty,
  } = useCommentsByPostId(props.postId);

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
