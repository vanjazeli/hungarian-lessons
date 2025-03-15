import {
  Button,
  CenterContainer,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "components";
import { BackButton } from "features";
import { Languages } from "lucide-react";
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon">
                    <Languages />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Language</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>English</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Magyar</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Srpski</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CenterContainer>
      </nav>
    </header>
  );
};
