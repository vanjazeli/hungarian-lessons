import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { ChallengePanelState } from "./ChallengePanel.types";
import { ScoreItems } from "features";

type ChallengePanelStore = {
  panelState: ChallengePanelState;
  setPanelState: (
    panelState:
      | ChallengePanelState
      | ((prev: ChallengePanelState) => ChallengePanelState)
  ) => void;
  inputValue: string;
  setInputValue: (inputValue: string | ((prev: string) => string)) => void;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (
    currentQuestionIndex: number | ((prev: number) => number)
  ) => void;
  score: ScoreItems;
  setScore: (score: ScoreItems | ((prev: ScoreItems) => ScoreItems)) => void;
  resetChallengeState(): void;
  resetScore(): void;
  resetStore(): void;
};

export const useChallengePanelStore = create<ChallengePanelStore>()(
  immer((set) => ({
    panelState: ChallengePanelState.INTRO,
    setPanelState: (update) =>
      set((state) => {
        state.panelState =
          typeof update === "function" ? update(state.panelState) : update;
      }),
    inputValue: "",
    setInputValue: (update) =>
      set((state) => {
        state.inputValue =
          typeof update === "function" ? update(state.inputValue) : update;
      }),
    currentQuestionIndex: 0,
    setCurrentQuestionIndex: (update) =>
      set((state) => {
        state.currentQuestionIndex =
          typeof update === "function"
            ? update(state.currentQuestionIndex)
            : update;
      }),
    score: [],
    setScore: (update) =>
      set((state) => {
        state.score =
          typeof update === "function" ? update(state.score) : update;
      }),
    resetChallengeState: () =>
      set((state) => {
        state.inputValue = "";
        state.currentQuestionIndex = 0;
      }),
    resetScore: () => {
      set((state) => {
        state.score = [];
      });
    },
    resetStore: () =>
      set((state) => {
        state.panelState = ChallengePanelState.INTRO;
        state.inputValue = "";
        state.currentQuestionIndex = 0;
        state.score = [];
      }),
  }))
);
