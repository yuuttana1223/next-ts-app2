import React, { ReactNode } from "react";
import styles from "../styles/Home.module.css";
import { MainProps } from "./Main";

export const Headline: React.VFC<Pick<MainProps, "page" | "children">> = (
  props
) => {
  return (
    <>
      <h1 className={styles.title}>{props.page} page</h1>
      <p className={styles.description}>
        Get started by editing {props.children}
      </p>
    </>
  );
};
