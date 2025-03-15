import { CenterContainer } from "components";
import { Navigation } from "features";

type CenterLayoutProps = {
  children: React.ReactNode;
};

export const CenterLayout = ({ children }: CenterLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex flex-1 flex-col py-8">
        <CenterContainer>{children}</CenterContainer>
      </main>
    </div>
  );
};
