export interface ChallengeTaskQuestion {
  noun: string;
  correctAnswer: string;
  translation: string;
}

export type ChallengeTaskQuestions = Array<ChallengeTaskQuestion>;
