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
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export const ChallengeScore = () => {
  const { t } = useTranslation("accusative");
  const { score, setPanelState, resetScore } = useChallengePanelStore();

  const handleClick = () => {
    setPanelState(ChallengePanelState.TASK);
    resetScore();
  };

  return (
    <VerticalStack>
      <Badge variant="outline">{t("badge")}</Badge>
      <div className="flex items-center justify-between gap-4">
        <Typography variant="h1">
          {t("scoreboard.title")} {calculateScore(score)}
        </Typography>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={handleClick}>
              <RotateCcw />
            </Button>
          </TooltipTrigger>
          <TooltipContent>{t("scoreboard.repeat")}</TooltipContent>
        </Tooltip>
      </div>
      <Typography variant="p">{t("scoreboard.description")}</Typography>
      <Table>
        <TableCaption>{t("scoreboard.tableSummary")}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4">{t("scoreboard.noun")}</TableHead>
            <TableHead className="w-1/4">
              {t("scoreboard.translation")}
            </TableHead>
            <TableHead className="w-1/4">
              {t("scoreboard.userAnswer")}
            </TableHead>
            <TableHead className="w-1/4">
              {t("scoreboard.correctAnswer")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {score.map(
            ({ noun, userAnswer, correctAnswer, translation }, index) => (
              <TableRow key={index}>
                <TableCell>{noun}</TableCell>
                <TableCell>{translation}</TableCell>
                <TableCell
                  className={cn(
                    "font-bold",
                    isLocaleStringMatch(userAnswer, correctAnswer)
                      ? "text-green-500"
                      : "text-red-500"
                  )}
                >
                  {userAnswer ? userAnswer : "-"}
                </TableCell>
                <TableCell>{correctAnswer}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
      <Button className="self-start" asChild>
        <Link to="/">
          <ArrowLeft /> {t("scoreboard.link")}
        </Link>
      </Button>
    </VerticalStack>
  );
};
