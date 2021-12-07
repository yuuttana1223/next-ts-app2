import type { NextPage, GetServerSideProps } from "next";
import { UserList } from "src/components/User/UserList";
import { API_URL } from "src/constants/api";
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
    <div>
      <SWRConfig value={{ fallback }}>
        <UserList />
      </SWRConfig>
    </div>
  );
};

export default Users;
