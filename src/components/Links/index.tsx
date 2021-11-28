import React from "react";
import classes from "src/components/Links/Links.module.css";
import { Items } from "src/components/Main";

type Props = {
  items: Items[];
};

export const Links: React.VFC<Props> = (props) => {
  return (
    <div className={classes.grid}>
      {props.items.map((item, index) => (
        <a key={index} href={item.url} className={classes.card}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </a>
      ))}
    </div>
  );
};
