import { Button, Typography, VerticalStack, Badge } from "components";
import { Link } from "@tanstack/react-router";
import { Map } from "lucide-react";

export const Roadmap = () => {
  return (
    <VerticalStack>
      <Badge variant="outline">Roadmap</Badge>
      <Typography className="flex items-center gap-4" variant="h1">
        Adventure Road <Map className="text-muted-foreground h-8 w-8" />
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
