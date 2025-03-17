import { ChallengeTaskQuestions } from "./ChallengeTask.types";

export const getRandomQuestions = (
  nouns: ChallengeTaskQuestions,
  count: number
): ChallengeTaskQuestions => {
  const shuffled = [...nouns].sort(() => Math.random() - 0.5);

  return shuffled.slice(0, count);
};

export const isLastQuestion = (
  currentQuestionIndex: number,
  numberOfQuestions: number
) => {
  return currentQuestionIndex === numberOfQuestions - 1;
};
