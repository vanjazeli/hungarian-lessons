import { RouteProvider } from "components";
import { ReactNode } from "react";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <RouteProvider>{children}</RouteProvider>;
};
