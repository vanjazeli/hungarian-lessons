import { Button, CenterContainer, Typography, VerticalStack } from "components";
import { Link } from "react-router";

export const MainMenu = () => {
  return (
    <CenterContainer>
      <VerticalStack>
        <Typography variant="h1">Tanuljunk együtt magyarul!</Typography>
        <Typography variant="p" muted>
          Ezzel az alkalmazással gyakorolhatja az eddig tanultakat.
        </Typography>
        <Button asChild>
          <Link to="/acusative">Tárgyeset</Link>
        </Button>
      </VerticalStack>
    </CenterContainer>
  );
};
