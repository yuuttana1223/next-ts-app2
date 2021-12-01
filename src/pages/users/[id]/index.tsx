import type { NextPage } from "next";
import { Header } from "src/components/Header";
import { User as UserComponent } from "src/components/User";

const User: NextPage = () => {
  return (
    <div>
      <Header />
      <UserComponent />
    </div>
  );
};

export default User;
