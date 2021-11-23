import React from "react";
import classes from "src/components/Main/Main.module.css";
import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";

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
