import {
  Badge,
  Typography,
  VerticalStack,
  Button,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "components";
import { calculateScore } from "./ChallengeScore.utils";
import { ScoreTable, useChallengePanelStore } from "features";
import { Map, RotateCcw } from "lucide-react";
import { ChallengePanelState } from "features";
import { Link } from "@tanstack/react-router";

export const ChallengeScore = () => {
  const { score, setPanelState, resetScore } = useChallengePanelStore();

  const handleClick = () => {
    setPanelState(ChallengePanelState.TASK);
    resetScore();
  };

  return (
    <VerticalStack>
      <Badge variant="outline">Score</Badge>
      <div className="flex items-center justify-between gap-4">
        <Typography variant="h1">Score: {calculateScore(score)}</Typography>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={handleClick}>
              <RotateCcw />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Try again</TooltipContent>
        </Tooltip>
      </div>
      <Typography variant="p">
        Not satisfied with your score? No worries, champions are made through
        practice. Hit that retry button and prove yourself!
      </Typography>
      <ScoreTable score={score} />
      <Button className="self-start" asChild>
        <Link to="/">
          <Map /> Roadmap
        </Link>
      </Button>
    </VerticalStack>
  );
};
