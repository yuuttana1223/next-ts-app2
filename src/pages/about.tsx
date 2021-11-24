import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import classes from "src/styles/Home.module.css";

const About: NextPage = () => {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightBlue();

  return (
    <div className={classes.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      {isShow && <h1>{count}</h1>}
      <button onClick={handleClick}>ボタン</button>

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Main page="about" />
      <Footer />
    </div>
  );
};
export default About;
