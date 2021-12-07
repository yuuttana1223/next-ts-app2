import type { NextPage } from "next";
import { PostList } from "src/components/Post/PostList";

const Posts: NextPage = () => {
  return (
    <div>
      <PostList />
    </div>
  );
};

export default Posts;
