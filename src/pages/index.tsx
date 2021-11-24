import type { NextPage } from "next";
import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import {
  MouseEvent,
  useEffect,
  useState,
  useCallback,
  ChangeEvent,
} from "react";

const Home: NextPage = () => {
  const [count, setCount] = useState<number>(1);
  const [text, setText] = useState<string>("");
  const [isShow, setIsShow] = useState<boolean>(true);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>): void => {
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      }
    },
    [count]
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください。");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

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
      <Header />
      {isShow && <h1>{count}</h1>}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
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
