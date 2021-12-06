import type { NextPage, GetServerSideProps } from "next";
import { Header } from "src/components/Header";
import { User as UserComponent } from "src/components/User";
import { API_URL } from "src/constants";
import { User } from "src/types/user";
import { SWRConfig } from "swr";

// サーバ側で動いている
export const getServerSideProps: GetServerSideProps = async (context) => {
  const API_USER_URL: string = `${API_URL}/users/${context.query.id}`;
  const res: Response = await fetch(API_USER_URL);
  const user: User = await res.json();
  return {
    props: {
      fallback: {
        [API_USER_URL]: user,
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
