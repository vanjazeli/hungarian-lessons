import { Button, CenterContainer, Typography } from "components";
import { Link } from "react-router";

export const MainMenu = () => {
  return (
    <CenterContainer>
      <div className="flex flex-col gap-5">
        <Typography variant="h1">Tanuljunk együtt magyarul!</Typography>
        <Typography variant="p" muted>
          Ezzel az alkalmazással gyakorolhatja az eddig tanultakat.
        </Typography>
        <Button asChild>
          <Link to="/lect-1">-t -ot -et -öt -at</Link>
        </Button>
      </div>
    </CenterContainer>
  );
};
