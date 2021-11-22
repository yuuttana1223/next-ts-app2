import React, { ReactNode } from "react";
import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import classes from "./Main.module.css";

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
};

export const Main: React.VFC<MainProps> = (props) => {
  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.tsx</code>
      </Headline>
      <Links />
    </main>
  );
};
