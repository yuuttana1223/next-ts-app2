import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div>
        <Header />
        <h1>Next.jsで学ぶReact講座</h1>
        <p>JSONPlaceholderのAPIを色々叩いてみるよ!</p>
      </div>
    </>
  );
};
export default Home;
