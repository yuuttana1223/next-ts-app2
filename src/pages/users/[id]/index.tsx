import type { NextPage, GetServerSideProps } from "next";
import { UserDetail } from "src/components/User/UserDetail";
import { API_URL } from "src/constants/api";
import { Post } from "src/types/post";
import { User } from "src/types/user";
import { SWRConfig } from "swr";

// サーバ側で動いている
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  // ユーザー情報の取得
  const USER_API_URL: string = `${API_URL}/users/${id}`;
  const userRes: Response = await fetch(USER_API_URL);
  const user: User = await userRes.json();
  // ユーザの投稿の取得
  const POSTS_API_URL: string = `${API_URL}/users/${id}/posts`;
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
      <UserDetail />
    </SWRConfig>
  );
};

export default User;
