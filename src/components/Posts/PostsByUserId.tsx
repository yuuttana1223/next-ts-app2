import { VFC } from "react";
import { usePostsByUserId } from "src/hooks/useFetchJsonArray";
import Link from "next/link";

type Props = {
  userId?: number;
};

export const PostsByUserId: VFC<Props> = (props) => {
  const {
    data: posts,
    error,
    isLoading,
    isEmpty,
  } = usePostsByUserId(props.userId);

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
      {posts?.map((post) => (
        <li key={post.id}>
          [postBody]
          <Link href={`/posts/${post.id}`}>
            <a>{post.body}</a>
          </Link>
        </li>
      ))}
    </ol>
  );
};
