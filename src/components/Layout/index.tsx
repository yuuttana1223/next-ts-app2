import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  return <div className="py-8 max-w-xl mx-auto">{props.children}</div>;
};
