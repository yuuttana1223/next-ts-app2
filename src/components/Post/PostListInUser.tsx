import { VFC } from "react";
import Link from "next/link";
import { API_URL } from "src/constants/api";
import { Post } from "src/types/post";
import { useFetchJsonArray } from "src/hooks/useFetchJsonArray";

type Props = {
  userId?: number;
};

export const PostListInUser: VFC<Props> = (props) => {
  const {
    data: posts,
    error,
    isLoading,
    isEmpty,
  } = useFetchJsonArray<Post>(
    props.userId ? `${API_URL}/users/${props.userId}/posts` : null
  );

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
          <Link href={`/posts/${post.id}`}>
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
