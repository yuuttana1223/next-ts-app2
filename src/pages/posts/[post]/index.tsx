import type { NextPage } from "next";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Post as PostComponent } from "src/components/Post";

const Post: NextPage = () => {
  return (
    <div className={classes.container}>
      <Header />
      <PostComponent />
    </div>
  );
};

export default Post;
