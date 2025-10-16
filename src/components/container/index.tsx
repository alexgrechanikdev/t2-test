import type { FC } from "react";
import type { IWithChildren } from "../../types";
import "./style.css";

export const Container: FC<IWithChildren> = ({ children }) => {
  return <div className="container">{children}</div>;
};
