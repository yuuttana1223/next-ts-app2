import { VFC } from "react";
import Link from "next/link";
import { useFetchJsonArray } from "src/hooks/useFetchJsonArray";
import { Post } from "src/types/post";
import { API_URL } from "src/constants/api";

export const PostList: VFC = () => {
  const { data, error, isLoading, isEmpty } = useFetchJsonArray<Post>(
    `${API_URL}/posts`
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
      {data?.map((post) => (
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
