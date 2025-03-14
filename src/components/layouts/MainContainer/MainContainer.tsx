import { ReactNode } from "react";

type MainContainerProps = {
  children: ReactNode;
};

export const MainContainer = ({ children }: MainContainerProps) => {
  return <div className="mx-auto max-w-sm px-5 py-10">{children}</div>;
};
