import type { NextPage } from "next";
import { Header } from "src/components/Header";
import { Comment as CommentComponent } from "src/components/Comment";

const Comment: NextPage = () => {
  return (
    <div>
      <Header />
      <CommentComponent />
    </div>
  );
};

export default Comment;
