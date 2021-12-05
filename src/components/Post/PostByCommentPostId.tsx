import { VFC } from "react";
import { usePostByCommentPostId } from "src/hooks/useFetchJson";
import Link from "next/link";

type Props = {
  postId?: number;
};

export const PostByCommentPostId: VFC<Props> = (props) => {
  const { data: post, error, isLoading } = usePostByCommentPostId(props.postId);

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Link href={`posts/${post?.id}`}>
      <a>
        <p className="text-lg hover:text-blue-500">
          [title id={post?.id}] {post?.title}
        </p>
      </a>
    </Link>
  );
};
