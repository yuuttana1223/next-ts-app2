import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Header } from "src/components/Header";
import { API_URL } from "src/constants";
import { SWRConfig } from "swr";
import { Comment } from "src/types/comment";
import { Comment as CommentComponent } from "src/components/Comment";

export const getStaticPaths: GetStaticPaths = async () => {
  const res: Response = await fetch(`${API_URL}/comments`);
  const json: Comment[] = await res.json();
  const paths = json.map((comment) => {
    return { params: { id: comment.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const COMMENT_API_URL: string = `${API_URL}/comments/${context.params?.id}`;
  const res: Response = await fetch(COMMENT_API_URL);
  const comment: Comment = await res.json();
  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: comment,
      },
    },
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
        <Header />
        <CommentComponent />
      </SWRConfig>
    </div>
  );
};

export default Comment;
