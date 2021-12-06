import type { NextPage, GetServerSideProps } from "next";
import { Header } from "src/components/Header";
import { User as UserComponent } from "src/components/User";
import { API_URL } from "src/constants";
import { Post } from "src/types/post";
import { User } from "src/types/user";
import { SWRConfig } from "swr";

// サーバ側で動いている
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id: userId } = context.query;
  // ユーザー情報の取得
  const USER_API_URL: string = `${API_URL}/users/${userId}`;
  const userRes: Response = await fetch(USER_API_URL);
  const user: User = await userRes.json();
  // ユーザの投稿の取得
  const POSTS_API_URL: string = `${API_URL}/posts?userId=${userId}`;
  const postsRes: Response = await fetch(POSTS_API_URL);
  const posts: Post[] = await postsRes.json();
  return {
    props: {
      fallback: {
        [USER_API_URL]: user,
        [POSTS_API_URL]: posts,
      },
    },
  };
};

type Props = {
  fallback: {
    [x: string]: User;
  };
};

const User: NextPage<Props> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Header />
      <UserComponent />
    </SWRConfig>
  );
};

export default User;
