import { TooltipProvider, BlockerProvider } from "components";

type AppProivderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProivderProps) => {
  return (
    <BlockerProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </BlockerProvider>
  );
};
