import { AccusativeChallengeQuestions } from "./AccusativeChallenge.types";

export const getRandomQuestions = (
  nouns: AccusativeChallengeQuestions,
  count: number
): AccusativeChallengeQuestions => {
  const shuffled = [...nouns].sort(() => Math.random() - 0.5);

  return shuffled.slice(0, count);
};

export const isLocaleStringMatch = (first: string, second: string) =>
  first.toLocaleLowerCase() === second.toLocaleLowerCase();

export const isLastQuestion = (
  currentQuestionIndex: number,
  numberOfQuestions: number
) => {
  return currentQuestionIndex === numberOfQuestions - 1;
};
