import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
  Button,
  Typography,
  SheetFooter,
} from "components";
import { Menu, Home, Swords } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const SideMenu = () => {
  const year = new Date().getFullYear();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-2 px-4 py-12">
          <SheetClose asChild>
            <Button className="w-full" asChild variant="ghost">
              <Link to="/">
                <Home />
                Homepage
              </Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button className="w-full" asChild variant="ghost">
              <Link to="/accusative">
                <Swords />
                Accusative
              </Link>
            </Button>
          </SheetClose>
        </div>
        <SheetFooter>
          <Typography
            className="mx-auto max-w-3xs text-center"
            variant="small"
            muted
          >
            Copyright &copy; {year} Vanja Želi All Rights Reserved.
          </Typography>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
