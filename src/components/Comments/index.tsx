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
    <ul className="space-y-2">
      {data?.map((comment) => (
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
