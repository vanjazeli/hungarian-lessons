import { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router";

type RouteProviderProps = {
  children: ReactNode;
};

export const RouteProvider = ({ children }: RouteProviderProps) => {
  return <Router>{children}</Router>;
};
