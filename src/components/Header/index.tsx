import React from "react";
import Link from "next/link";
import classes from "src/components/Header/Header.module.css";

export const Header: React.VFC = () => {
  return (
    <header className={classes.header}>
      <Link href={"/"}>
        <a>Index</a>
      </Link>
      <Link href={"/about"}>
        <a>About</a>
      </Link>
    </header>
  );
};
