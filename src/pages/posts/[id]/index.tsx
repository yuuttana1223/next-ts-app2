import type { NextPage } from "next";
import { Header } from "src/components/Header";
import { Post as PostComponent } from "src/components/Post";

const Post: NextPage = () => {
  return (
    <div>
      <Header />
      <PostComponent />
    </div>
  );
};

export default Post;
