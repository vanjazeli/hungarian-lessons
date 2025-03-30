import {
  Badge,
  Typography,
  VerticalStack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Button,
  TableCaption,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "components";
import { calculateScore, isLocaleStringMatch } from "./ChallengeScore.utils";
import { useChallengePanelStore } from "features";
import { cn } from "lib";
import { ArrowLeft, RotateCcw } from "lucide-react";
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
          <TooltipContent>Repeat</TooltipContent>
        </Tooltip>
      </div>
      <Typography variant="p">
        Not satisfied with your score? No worries, champions are made through
        practice. Hit that retry button and prove yourself!
      </Typography>
      <Table>
        <TableCaption>Challenge score summary</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4">Noun</TableHead>
            <TableHead className="w-1/4">Translation</TableHead>
            <TableHead className="w-1/4">Your answer</TableHead>
            <TableHead className="w-1/4">Correct answer</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {score.map(
            ({ noun, userAnswer, correctAnswer, translation }, index) => {
              const isCorrect = isLocaleStringMatch(userAnswer, correctAnswer);

              return (
                <TableRow key={index}>
                  <TableCell>{noun}</TableCell>
                  <TableCell>{translation}</TableCell>
                  <TableCell
                    className={cn(
                      "font-bold",
                      isCorrect ? "text-green-500" : "text-red-500"
                    )}
                  >
                    <Typography className="sr-only" variant="span">
                      {isCorrect ? "Correct" : "Wrong"}
                    </Typography>
                    {userAnswer ? userAnswer : "-"}
                  </TableCell>
                  <TableCell>{correctAnswer}</TableCell>
                </TableRow>
              );
            }
          )}
        </TableBody>
      </Table>
      <Button className="self-start" asChild>
        <Link to="/">
          <ArrowLeft /> Main menu
        </Link>
      </Button>
    </VerticalStack>
  );
};
