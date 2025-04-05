import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
  Button,
  Typography,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "components";
import { Menu, Swords, Map, Trophy, Brain } from "lucide-react";
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
        <SheetHeader className="sr-only">
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            Menu with links to different sections of the app.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 px-4 py-12">
          <SheetClose asChild>
            <Button className="w-full" asChild variant="ghost">
              <Link to="/">
                <Map />
                Roadmap
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
          <SheetClose asChild>
            <Button className="w-full" asChild variant="ghost">
              <Link to="/filp-cards">
                <Brain />
                Flip Cards
              </Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button className="w-full" asChild variant="ghost">
              <Link to="/scoreboard">
                <Trophy />
                Scoreboard
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
