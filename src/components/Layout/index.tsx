import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  return (
    <div className="max-w-3xl py-8 mx-auto md:max-w-5xl">{props.children}</div>
  );
};
