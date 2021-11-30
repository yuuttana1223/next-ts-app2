import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import classes from "src/styles/Home.module.css";
import { useCounter } from "../../hooks/useCounter";
import { useInputArray } from "../../hooks/useInputArray";

type Props = ReturnType<typeof useCounter> & ReturnType<typeof useInputArray>;

const About: NextPage<Props> = (props) => {
  return (
    <div className={classes.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>
      {props.isShow && <h1>{props.doubleCount}</h1>}
      <button onClick={props.handleClick}>ボタン</button>

      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Main page="about" />
      <Footer />
    </div>
  );
};
export default About;
