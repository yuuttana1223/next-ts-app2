import React, { ReactNode } from "react";
import classes from "src/components/Headline/Headline.module.css";

type HeadlineProps = {
  page: string;
  children: ReactNode;
};

export const Headline: React.VFC<HeadlineProps> = (props) => {
  return (
    <>
      <h1 className={classes.title}>{props.page} page</h1>
      <p className={classes.description}>
        Get started by editing {props.children}
      </p>
    </>
  );
};
