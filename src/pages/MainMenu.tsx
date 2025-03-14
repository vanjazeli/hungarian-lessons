import { Button, Typography } from "components";
import { Link } from "react-router";

export const MainMenu = () => {
  return (
    <div className="flex flex-col gap-5">
      <Typography variant="h1">Tanuljunk együtt magyarul!</Typography>
      <Typography variant="p" muted>
        Ezzel az alkalmazással gyakorolhatja az eddig tanultakat.
      </Typography>
      <Button asChild>
        <Link to="/lect-1">-ba, -be, -ban, -ben</Link>
      </Button>
    </div>
  );
};
