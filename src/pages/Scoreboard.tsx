import { ScoreboardPanel } from "features";
import { Badge, Typography, VerticalStack } from "components";
import { Trophy } from "lucide-react";

export const Scoreboard = () => {
  return (
    <VerticalStack>
      <Badge variant="outline">Scoreboard</Badge>
      <Typography className="flex items-center gap-4" variant="h1">
        Score Hall <Trophy className="text-muted-foreground h-8 w-8" />
      </Typography>
      <Typography variant="p" muted>
        Ready to see how high you can go? Rack up those scores and let the
        scoreboard do the bragging for you!
      </Typography>
      <ScoreboardPanel />
    </VerticalStack>
  );
};
