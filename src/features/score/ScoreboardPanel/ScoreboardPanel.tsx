import { ScoreTable } from "features";
import { lsGetScoreboardItems } from "./ScoreboardPanel.utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Typography,
} from "components";

export const ScoreboardPanel = () => {
  const scoreboardItems = lsGetScoreboardItems();

  return scoreboardItems.length > 0 ? (
    <Accordion className="w-full" type="single" collapsible>
      {scoreboardItems.map(({ challengeName, score }, index) => (
        <AccordionItem key={index} value={`score-item-${index}`}>
          <AccordionTrigger>{challengeName}</AccordionTrigger>
          <AccordionContent>
            <ScoreTable score={score} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ) : (
    <Typography variant="p" muted>
      The scoreboard is empty. Time to make history!
    </Typography>
  );
};
