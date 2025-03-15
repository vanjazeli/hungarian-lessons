import { ReactNode } from "react";
import { HashRouter as Router } from "react-router";

type RouteProviderProps = {
  children: ReactNode;
};

export const RouteProvider = ({ children }: RouteProviderProps) => {
  return <Router>{children}</Router>;
};
