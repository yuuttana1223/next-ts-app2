import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  return <div className="max-w-2xl py-8 mx-auto">{props.children}</div>;
};
