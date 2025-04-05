import { Badge, Typography, VerticalStack } from "components";
import { Brain } from "lucide-react";

export const FlipCards = () => {
  return (
    <VerticalStack>
      <Badge variant="outline">Flip Cards</Badge>
      <Typography className="flex items-center gap-4" variant="h1">
        Memory Gym <Brain className="text-muted-foreground h-8 w-8" />
      </Typography>
      <Typography variant="p" muted>
        Flip, learn, repeat! Stack up those words and let your brain flex. One
        card at a time, you're getting sharper!
      </Typography>
    </VerticalStack>
  );
};
