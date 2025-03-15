import { RouteProvider } from "components";
import { ReactNode } from "react";
import "@/utils/i18n";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <RouteProvider>{children}</RouteProvider>;
};
