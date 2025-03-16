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
  useAccusativePanelStore,
  useBackButtonStore,
} from "features";
import { useTranslation } from "react-i18next";
import { accusativeChallengeQuestions } from "./AccusativeChallenge.consts";
import {
  getRandomQuestions,
  isLocaleStringMatch,
  isLastQuestion,
} from "./AccusativeChallenge.utils";
import { AccusativePanelState } from "../AccusativePanel/AccusativePanel.types";

export const AccusativeChallenge = () => {
  const { t } = useTranslation("accusative");

  const { current: questions } = useRef(
    getRandomQuestions(accusativeChallengeQuestions, 10)
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
  } = useAccusativePanelStore();

  const { setIsConfirmationRequired } = useBackButtonStore();

  const inputFieldRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      isLocaleStringMatch(
        inputValue,
        questions[currentQuestionIndex].correctAnswer
      )
    ) {
      setScore((prev) => prev + 1);
    }

    if (!isLastQuestion(currentQuestionIndex, questions.length)) {
      setCurrentQuestionIndex((prev) => prev + 1);
      api?.scrollNext();
    } else {
      setPanelState(AccusativePanelState.SCORE);
    }

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
                currentQuestionIndex !== index ? "hidden" : ""
              )}
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
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <Input
          placeholder={t("challenge.placeholder")}
          value={inputValue}
          onChange={handleChange}
          spellCheck="false"
          ref={inputFieldRef}
        />
        <Button className="min-w-24" type="submit">
          {currentQuestionIndex === questions.length - 1
            ? t("challenge.finish")
            : t("challenge.next")}
        </Button>
      </form>
      <Keyboard className="mx-auto max-w-sm" />
    </VerticalStack>
  );
};
