import { ReactNode, VFC } from "react";
import classes from "src/components/Layout/Layout.module.css";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};
