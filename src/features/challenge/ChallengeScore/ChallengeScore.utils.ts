import { ScoreItems } from "features";

export const isLocaleStringMatch = (first: string, second: string) =>
  first.toLocaleLowerCase() === second.toLocaleLowerCase();

export function calculateScore(scoreItems: ScoreItems): string {
  const total = scoreItems.length;
  const correct = scoreItems.filter(({ userAnswer, correctAnswer }) =>
    isLocaleStringMatch(userAnswer, correctAnswer)
  ).length;

  return `${correct}/${total}`;
}
