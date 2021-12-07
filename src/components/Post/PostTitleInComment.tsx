import { VFC } from "react";
import Link from "next/link";
import { useFetchJson } from "src/hooks/useFetchJson";
import { API_URL } from "src/constants/api";
import { Post } from "src/types/post";

type Props = {
  postId?: number;
};

export const PostTitleInComment: VFC<Props> = (props) => {
  const {
    data: post,
    error,
    isLoading,
  } = useFetchJson<Post>(
    props.postId ? `${API_URL}/posts/${props.postId}` : null
  );

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Link href={`/posts/${post?.id}`}>
      <a>
        <p className="text-lg hover:text-blue-500">
          [title id={post?.id}] {post?.title}
        </p>
      </a>
    </Link>
  );
};
