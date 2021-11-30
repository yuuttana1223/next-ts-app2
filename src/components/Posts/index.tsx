import { VFC } from "react";
import { usePosts } from "src/hooks/usePosts";
import Link from "next/link";

export const Posts: VFC = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error instanceof Error) {
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
