import { ReactNode, VFC } from "react";
import { Header } from "src/layouts/AppLayout/Header";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  return (
    <div className="max-w-3xl py-8 mx-auto md:max-w-5xl">
      <Header />
      {props.children}
    </div>
  );
};
