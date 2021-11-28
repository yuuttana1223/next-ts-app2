import React from "react";
import Link from "next/link";
import classes from "src/components/Header/Header.module.css";

type NavItem = {
  url: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { url: "/", label: "Index" },
  { url: "/about", label: "About" },
];

export const Header: React.VFC = () => {
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
