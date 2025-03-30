import { Badge, Typography, VerticalStack } from "components";

export const Scoreboard = () => {
  return (
    <VerticalStack>
      <Badge variant="outline">Scoreboard</Badge>
      <Typography variant="h1">Scoreboard</Typography>
      <Typography variant="p" muted>
        Looks like the board is still empty! Dive into some lessons and start
        racking up those scores.
      </Typography>
    </VerticalStack>
  );
};
