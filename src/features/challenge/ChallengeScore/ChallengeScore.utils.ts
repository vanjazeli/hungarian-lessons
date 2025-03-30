import { ChallengeScoreItems } from "features";

export const isLocaleStringMatch = (first: string, second: string) =>
  first.toLocaleLowerCase() === second.toLocaleLowerCase();

export const calculateScore = (
  challengeScoreItems: ChallengeScoreItems
): string => {
  const total = challengeScoreItems.length;
  const correct = challengeScoreItems.filter(({ userAnswer, correctAnswer }) =>
    isLocaleStringMatch(userAnswer, correctAnswer)
  ).length;

  return `${correct}/${total}`;
};
