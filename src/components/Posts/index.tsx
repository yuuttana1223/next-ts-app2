import { VFC } from "react";
import { usePosts } from "src/hooks/usePosts";

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
        <li key={post.id}>{post.title}</li>
      ))}
    </ol>
  );
};
