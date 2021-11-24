import type { NextPage } from "next";
import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import { MouseEvent, useEffect, useState } from "react";

const Home: NextPage = () => {
  const [count, setCount] = useState<number>(1);
  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <h1>{count}</h1>
      <Header />
      <button onClick={handleClick}>ボタン</button>
      <Main
        page="index"
        number={1111}
        array={[1, 2, 3]}
        obj={{ foo: "foo", bar: "bar" }}
        // boolean={true} // trueがデフォルト
        boolean
        // code={<code className={classes.code}>pages/index.tsx</code>}
        onClick={() => alert("クリック")}
      />
      <Footer />
    </div>
  );
};

// export defaultに決まっている
export default Home;
