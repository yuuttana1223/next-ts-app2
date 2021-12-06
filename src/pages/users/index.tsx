import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Users as UsersComponent } from "src/components/Users";

const Users: NextPage = () => {
  return (
    <>
      <Head>
        <title>Users Page</title>
      </Head>
      <div>
        <Header />
        <UsersComponent />
      </div>
    </>
  );
};

export default Users;
