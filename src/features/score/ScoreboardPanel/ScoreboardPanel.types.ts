import { ChallengeScoreItems } from "features";

export type ScoreboardItem = {
  challengeName: string;
  score: ChallengeScoreItems;
};

export type ScoreboardItems = Array<ScoreboardItem>;
