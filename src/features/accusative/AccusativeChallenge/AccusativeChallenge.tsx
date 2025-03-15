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
} from "components";
import { getRandomQuestions } from "./AccusativeChallenge.utils";
import { accusativeChallengeQuestions } from "./AccusativeChallenge.consts";
import { useRef, useState } from "react";

export const AccusativeChallenge = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const numberOfQuestions = 10;

  const { current: questions } = useRef(
    getRandomQuestions(accusativeChallengeQuestions, numberOfQuestions),
  );

  return (
    <VerticalStack>
      <Progress value={32} />
      <Carousel
        setApi={setApi}
        className="aspect-square w-full"
        opts={{ watchDrag: false }}
      >
        <CarouselContent>
          {questions.map(({ noun, answer, translation }, index) => (
            <CarouselItem
              className="flex aspect-square items-center justify-center"
              key={index}
            >
              <Tooltip>
                <TooltipTrigger>
                  <Typography
                    className="border-foreground border-b-2 border-dashed"
                    variant="h2"
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
      <Input />
    </VerticalStack>
  );
};
