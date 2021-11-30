import React, { useCallback, useState } from "react";
import classes from "src/components/Main/Main.module.css";
import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";
import { ITEMS } from "src/constants";

export type Props = {
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

export const Main: React.VFC<Props> = (props) => {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback((): void => {
    setItems((prevItems) => prevItems.slice(0, prevItems.length - 1));
  }, []);

  return (
    <main className={classes.main}>
      <Headline page={props.page} handleReduce={handleReduce}>
        <code className={classes.code}>{items.length}</code>
      </Headline>
      <Links items={items} />
    </main>
  );
};
