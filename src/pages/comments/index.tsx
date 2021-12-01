import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Comments as CommentComponent } from "src/components/Comments";

const Comments: NextPage = () => {
  return (
    <>
      <Head>
        <title>Comments Page</title>
      </Head>
      <div>
        <Header />
        <CommentComponent />
      </div>
    </>
  );
};

export default Comments;
