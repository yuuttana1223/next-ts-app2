import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import classes from "src/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JSONPlaceholderのAPIを色々叩いてみるよ!</p>
    </div>
  );
};
export default Home;
