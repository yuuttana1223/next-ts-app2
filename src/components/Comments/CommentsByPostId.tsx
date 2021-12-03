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
    <ol>
      {comments?.map((comment) => (
        <li key={comment.id}>
          [commentBody]
          <Link href={`/comments/${comment.id}`}>
            <a>{comment.body}</a>
          </Link>
        </li>
      ))}
    </ol>
  );
};
