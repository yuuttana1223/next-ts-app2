import type { NextPage } from "next";
import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { useRouter } from "next/dist/client/router";

const Post: NextPage = () => {
  const router = useRouter();
  console.log(router);

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <div>{router.query.post}</div>
    </div>
  );
};

export default Post;
