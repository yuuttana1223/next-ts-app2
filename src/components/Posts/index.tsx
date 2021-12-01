import { VFC } from "react";
import Link from "next/link";
import { usePosts } from "src/hooks/useFetchJsonArray";

export const Posts: VFC = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

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
      {data?.map((post) => (
        <li key={post.id}>
          <Link href={`posts/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ol>
  );
};
