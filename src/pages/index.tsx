import type { NextPage } from "next";
import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

const Home: NextPage = () => {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightBlue();

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
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
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
