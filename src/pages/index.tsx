import type { NextPage } from "next";
import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import { MouseEvent, useCallback, useEffect } from "react";

const Home: NextPage = () => {
  const foo = 1;
  const handleClick = useCallback((e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect(() => {
    console.log("マウント時");

    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />
      <a href="about" onClick={handleClick}>
        ボタン
      </a>
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
