import { VFC } from "react";
import Link from "next/link";
import classes from "src/components/Header/Header.module.css";
import { NAV_ITEMS } from "src/constants";

export const Header: VFC = () => {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item, index) => (
        <Link key={index} href={item.url}>
          <a>{item.label}</a>
        </Link>
      ))}
    </header>
  );
};
