import React, { useCallback, useState } from "react";
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

export type Items = {
  url: string;
  title: string;
  description: string;
};

const ITEMS: Items[] = [
  {
    url: "https://nextjs.org/docs",
    // →はutf-8なら問題ないが、\u2192で書いてもできる。
    title: "Documentation \u2192",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    url: "https://nextjs.org/learn",
    title: "Learn →",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    url: "https://github.com/vercel/next.js/tree/master/examples",
    title: "Examples →",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    url: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy →",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export const Main: React.VFC<MainProps> = (props) => {
  const [items, setItems] = useState<Items[]>(ITEMS);
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
