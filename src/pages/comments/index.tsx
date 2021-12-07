import type { GetStaticProps, NextPage } from "next";
import { CommentList } from "src/components/Comment/CommentList";
import { Comment } from "src/types/comment";
import { API_URL } from "src/constants/api";
import { SWRConfig } from "swr";

export const getStaticProps: GetStaticProps = async () => {
  const COMMENTS_API_URL: string = `${API_URL}/comments`;
  const res: Response = await fetch(COMMENTS_API_URL);
  const comments: Comment[] = await res.json();
  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: comments,
      },
    },
  };
};

type Props = {
  fallback: {
    [x: string]: Comment[];
  };
};

const Comments: NextPage<Props> = ({ fallback }) => {
  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <CommentList />
      </SWRConfig>
    </div>
  );
};

export default Comments;
