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
import { Keyboard } from "features";

export const AccusativeChallenge = () => {
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
      <Input value={input} onChange={handleChange} />
      <Keyboard setInput={setInput} />
    </VerticalStack>
  );
};
