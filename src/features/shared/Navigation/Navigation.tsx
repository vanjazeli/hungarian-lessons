import { Button, CenterContainer } from "components";
import { BackButton } from "features";
import { EllipsisVertical, Languages } from "lucide-react";
import { useLocation } from "react-router";

export const Navigation = () => {
  const isBackButtonShown = useLocation().pathname !== "/";

  return (
    <header>
      <nav className="bg-black py-4">
        <CenterContainer>
          <div className="mx-auto flex justify-between">
            <div>{isBackButtonShown && <BackButton />}</div>
            <div className="flex justify-between gap-4">
              <Button size="icon">
                <Languages />
              </Button>
              <Button size="icon">
                <EllipsisVertical />
              </Button>
            </div>
          </div>
        </CenterContainer>
      </nav>
    </header>
  );
};
