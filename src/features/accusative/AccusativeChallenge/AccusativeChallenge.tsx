import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  VerticalStack,
  Progress,
  Typography,
  Input,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Button,
} from "components";
import { getRandomQuestions } from "./AccusativeChallenge.utils";
import { accusativeChallengeQuestions } from "./AccusativeChallenge.consts";
import { useRef, useState } from "react";
import { Keyboard } from "features";
import { useTranslation } from "react-i18next";

export const AccusativeChallenge = () => {
  const { t } = useTranslation("accusative");

  const [_, setApi] = useState<CarouselApi | null>(null);

  const numberOfQuestions = 10;
  const { current: questions } = useRef(
    getRandomQuestions(accusativeChallengeQuestions, numberOfQuestions),
  );

  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <VerticalStack>
      <Progress value={32} />
      <Carousel setApi={setApi} className="w-full" opts={{ watchDrag: false }}>
        <CarouselContent>
          {questions.map(({ noun, translation }, index) => (
            <CarouselItem
              className="flex aspect-[2] items-center justify-center"
              key={index}
            >
              <Tooltip>
                <TooltipTrigger className="outline-none" tabIndex={1}>
                  <Typography
                    className="border-foreground border-b-2 border-dashed"
                    variant="h2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {noun}
                  </Typography>
                </TooltipTrigger>
                <TooltipContent>{translation}</TooltipContent>
              </Tooltip>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <form className="flex gap-4">
        <Input
          placeholder={t("challenge.placeholder")}
          value={input}
          onChange={handleChange}
        />
        <Button className="min-w-24">
          {true ? t("challenge.next") : t("challenge.finish")}
        </Button>
      </form>
      <Keyboard className="mx-auto max-w-sm" setInput={setInput} />
    </VerticalStack>
  );
};
