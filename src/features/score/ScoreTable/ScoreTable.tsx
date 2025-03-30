import { cn } from "lib";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Typography,
} from "components";
import { ChallengeScoreItems } from "features";
import { isLocaleStringMatch } from "utils";

type ScoreTableProps = {
  title: string;
  score: ChallengeScoreItems;
};

export const ScoreTable = ({ title, score }: ScoreTableProps) => {
  return (
    <Table>
      <TableCaption>{title}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/4">Word</TableHead>
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
  );
};
