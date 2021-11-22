import React, { ReactNode } from "react";
import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import styles from "../styles/Home.module.css";

export type MainProps = {
  page: string;
  number?: number;
  array?: number[];
  obj?: {
    foo: string;
    bar: string;
  };
  boolean?: boolean;
  code?: JSX.Element;
  onClick?: () => void;
  children: ReactNode;
};

export const Main: React.VFC<MainProps> = (props) => {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>{props.children}</Headline>
      <Links />
    </main>
  );
};
