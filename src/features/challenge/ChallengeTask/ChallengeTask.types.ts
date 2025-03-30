export type ChallengeTaskQuestion = {
  noun: string;
  correctAnswer: string;
  translation: string;
};

export type ChallengeTaskQuestions = Array<ChallengeTaskQuestion>;

export type ChallengeScoreItem = ChallengeTaskQuestion & {
  userAnswer: string;
};

export type ChallengeScoreItems = Array<ChallengeScoreItem>;
