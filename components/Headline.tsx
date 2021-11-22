import React from "react";
import styles from "../styles/Home.module.css";

type HeadlineProps = {
  page: string;
};

export const Headline: React.VFC<HeadlineProps> = ({ page }) => {
  return (
    <>
      <h1 className={styles.title}>{page} page</h1>
      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/{page}.tsx</code>
      </p>
    </>
  );
};
