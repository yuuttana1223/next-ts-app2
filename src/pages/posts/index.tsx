import type { NextPage } from "next";
import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Posts } from "src/components/Posts";

const PostsPage: NextPage = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <Posts />
    </div>
  );
};

export default PostsPage;
