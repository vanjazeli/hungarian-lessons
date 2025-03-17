export type ChallengeTaskQuestion = {
  noun: string;
  correctAnswer: string;
  translation: string;
};

export type ChallengeTaskQuestions = Array<ChallengeTaskQuestion>;

export type ScoreItem = ChallengeTaskQuestion & {
  userAnswer: string;
};

export type ScoreItems = Array<ScoreItem>;
