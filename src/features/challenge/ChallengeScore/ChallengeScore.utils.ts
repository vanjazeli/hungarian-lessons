import { ChallengeScoreItems } from "features";
import { isLocaleStringMatch } from "utils";

export const calculateScore = (
  challengeScoreItems: ChallengeScoreItems
): string => {
  const total = challengeScoreItems.length;
  const correct = challengeScoreItems.filter(({ userAnswer, correctAnswer }) =>
    isLocaleStringMatch(userAnswer, correctAnswer)
  ).length;

  return `${correct}/${total}`;
};
