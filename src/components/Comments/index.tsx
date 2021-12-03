import { VFC } from "react";
import Link from "next/link";
import { useComments } from "src/hooks/useFetchJsonArray";

export const Comments: VFC = () => {
  const { data, error, isLoading, isEmpty } = useComments();

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
      {data?.map((comment) => (
        <li key={comment.id}>
          [body]
          <Link href={`comments/${comment.id}`}>
            <a>{comment.body}</a>
          </Link>
        </li>
      ))}
    </ol>
  );
};
