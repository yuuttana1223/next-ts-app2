import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Users as UsersComponent } from "src/components/Users";
import { API_URL } from "src/constants";
import { User } from "src/types/user";
import { SWRConfig } from "swr";

export const getServerSideProps: GetServerSideProps = async () => {
  const USERS_API_URL: string = `${API_URL}/users`;
  const res: Response = await fetch(USERS_API_URL);
  const users: User[] = await res.json();
  return {
    props: {
      fallback: {
        [USERS_API_URL]: users,
      },
    },
  };
};

type Props = {
  fallback: {
    [x: string]: User[];
  };
};

const Users: NextPage<Props> = ({ fallback }) => {
  return (
    <>
      <Head>
        <title>Users Page</title>
      </Head>
      <div>
        <SWRConfig value={{ fallback }}>
          <Header />
          <UsersComponent />
        </SWRConfig>
      </div>
    </>
  );
};

export default Users;
