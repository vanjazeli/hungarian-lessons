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
import { FormEvent, useEffect, useRef, useState } from "react";
import { cn } from "lib";
import {
  Keyboard,
  useChallengePanelStore,
  useBackButtonStore,
  ChallengePanelState,
  ScoreItem,
} from "features";
import { challengeTaskQuestions } from "./ChallengeTask.consts";
import { getRandomQuestions, isLastQuestion } from "./ChallengeTask.utils";

export const ChallengeTask = () => {
  const { current: questions } = useRef(
    getRandomQuestions(challengeTaskQuestions, 10)
  );

  const [api, setApi] = useState<CarouselApi | null>(null);

  const {
    inputValue,
    setInputValue,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    setPanelState,
    setScore,
    resetChallengeState,
  } = useChallengePanelStore();

  const { setIsConfirmationRequired } = useBackButtonStore();

  const inputFieldRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    inputFieldRef.current?.focus();

    if (!isLastQuestion(currentQuestionIndex, questions.length)) {
      setCurrentQuestionIndex((prev) => prev + 1);
      api?.scrollNext();
    } else {
      setPanelState(ChallengePanelState.SCORE);
    }

    setScore((prev) => [
      ...prev,
      {
        ...questions[currentQuestionIndex],
        userAnswer: inputValue,
      } as ScoreItem,
    ]);

    setInputValue("");
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  useEffect(() => {
    inputFieldRef.current?.focus();
  }, [inputValue]);

  useEffect(() => {
    setIsConfirmationRequired(true);

    return () => {
      resetChallengeState();
      setIsConfirmationRequired(false);
    };
  }, [resetChallengeState, setIsConfirmationRequired]);

  return (
    <VerticalStack>
      <Progress value={progress} />
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ watchDrag: false, duration: 10 }}
      >
        <CarouselContent>
          {questions.map(({ noun, translation }, index) => (
            <CarouselItem
              className={cn(
                "flex aspect-[2] items-center justify-center",
                index !== currentQuestionIndex ? "select-none" : ""
              )}
              key={index}
            >
              <Tooltip>
                <TooltipTrigger
                  className="outline-none"
                  tabIndex={currentQuestionIndex !== index ? -1 : 0}
                >
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
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <Input
          placeholder="Type your answer here..."
          value={inputValue}
          onChange={handleChange}
          spellCheck="false"
          ref={inputFieldRef}
          autoComplete="off"
        />
        <Button className="min-w-24" type="submit">
          {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
        </Button>
      </form>
      <Keyboard className="mx-auto max-w-sm" />
    </VerticalStack>
  );
};
