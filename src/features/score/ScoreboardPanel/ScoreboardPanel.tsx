import { ScoreboardDelete, ScoreTable } from "features";
import { lsGetScoreboardItems } from "./ScoreboardPanel.utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Typography,
} from "components";
import { useState } from "react";

export const ScoreboardPanel = () => {
  const [scoreboardItems, setScoreboardItems] = useState(
    lsGetScoreboardItems()
  );

  return scoreboardItems.length > 0 ? (
    <div>
      <div className="flex flex-col items-end">
        <ScoreboardDelete setScoreboardItems={setScoreboardItems} />
      </div>
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
    </div>
  ) : (
    <Typography variant="p" muted>
      The scoreboard is empty. Time to make history!
    </Typography>
  );
};
