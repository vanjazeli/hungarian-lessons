import { RouteProvider, TooltipProvider } from "components";

export const AppProvider = () => {
  return (
    <TooltipProvider>
      <RouteProvider />
    </TooltipProvider>
  );
};
