import type { NextPage } from "next";
import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useState, useCallback, useEffect } from "react";

type Props = ReturnType<typeof useCounter> & ReturnType<typeof useInputArray>;

type Post = {
  useId: number;
  id: number;
  title: string;
  body: string;
};

const Home: NextPage<Props> = (props) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = useCallback(async (): Promise<void> => {
    const res: Response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const json: Post[] = await res.json();
    setPosts(json);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {posts.length > 0 && (
        <ol>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

// export defaultに決まっている
export default Home;
