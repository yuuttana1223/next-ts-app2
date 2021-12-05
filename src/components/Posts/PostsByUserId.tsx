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
    <ul className="space-y-4">
      {posts?.map((post) => (
        <li key={post.id}>
          <Link href={`posts/${post.id}`}>
            <a>
              <h2 className="text-xl font-bold hover:text-blue-500">
                [title id={post.id}] {post.title}
              </h2>
            </a>
          </Link>
          <p className="text-gray-500 text">[body] {post.body}</p>
        </li>
      ))}
    </ul>
  );
};
