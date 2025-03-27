import { Button, Typography, VerticalStack, Badge } from "components";
import { Link } from "react-router";

export const MainMenu = () => {
  return (
    <VerticalStack>
      <Badge variant="outline">Main Menu</Badge>
      <Typography variant="h1">
        Let's improve your Hungarian skills together!
      </Typography>
      <Typography variant="p" muted>
        Take part in interactive practice sessions designed to help you improve
        your Hungarian skills through a variety of exercises and challenges.
      </Typography>
      <Button asChild>
        <Link to="/accusative">Accusative</Link>
      </Button>
    </VerticalStack>
  );
};
