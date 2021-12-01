import type { NextPage } from "next";
import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Posts as PostsComponent } from "src/components/Posts";

const Posts: NextPage = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <PostsComponent />
    </div>
  );
};

export default Posts;
