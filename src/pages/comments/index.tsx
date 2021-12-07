import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Comments as CommentsComponent } from "src/components/Comments";
import { Comment } from "src/types/comment";
import { API_URL } from "src/constants";
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
    revalidate: 10,
  };
};

type Props = {
  fallback: {
    [x: string]: Comment[];
  };
};

const Comments: NextPage<Props> = ({ fallback }) => {
  return (
    <>
      <Head>
        <title>Comments Page</title>
      </Head>
      <div>
        <SWRConfig value={{ fallback }}>
          <Header />
          <CommentsComponent />
        </SWRConfig>
      </div>
    </>
  );
};

export default Comments;
