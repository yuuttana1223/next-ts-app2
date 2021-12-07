import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { API_URL } from "src/constants/api";
import { SWRConfig } from "swr";
import { Comment } from "src/types/comment";
import { CommentDetail } from "src/components/Comment/CommentDetail";

export const getStaticPaths: GetStaticPaths = async () => {
  const res: Response = await fetch(`${API_URL}/comments?_limit=10`);
  const json: Comment[] = await res.json();
  const paths = json.map((comment) => {
    return { params: { id: comment.id.toString() } };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const COMMENT_API_URL: string = `${API_URL}/comments/${context.params?.id}`;
  const res: Response = await fetch(COMMENT_API_URL);
  if (!res.ok) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }
  const comment: Comment = await res.json();
  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: comment,
      },
    },
    revalidate: 10, // 秒数
  };
};

type Props = {
  fallback: {
    [x: string]: Comment;
  };
};

const Comment: NextPage<Props> = ({ fallback }) => {
  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <CommentDetail />
      </SWRConfig>
    </div>
  );
};

export default Comment;
