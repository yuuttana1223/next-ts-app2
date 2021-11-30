import React, { ReactNode } from "react";
import classes from "src/components/Headline/Headline.module.css";

type Props = {
  page: string;
  children: ReactNode;
  handleReduce: () => void;
};

export const Headline: React.VFC<Props> = (props) => {
  return (
    <>
      <h1 className={classes.title}>{props.page} page</h1>
      <p className={classes.description}>
        アイテムの数は {props.children} 個です
      </p>

      <button onClick={props.handleReduce}>減らす</button>
    </>
  );
};
