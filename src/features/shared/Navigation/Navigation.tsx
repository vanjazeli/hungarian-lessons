import { CenterContainer } from "components";
import { BackButton, ThemeButton, SideMenu } from "features";
import { useLocation } from "react-router";

export const Navigation = () => {
  const isBackButtonShown = useLocation().pathname !== "/";

  return (
    <header className="border-b">
      <nav className="py-4">
        <CenterContainer>
          <div className="mx-auto flex justify-between">
            <div>{isBackButtonShown && <BackButton />}</div>
            <div className="flex gap-4">
              <ThemeButton />
              <SideMenu />
            </div>
          </div>
        </CenterContainer>
      </nav>
    </header>
  );
};
