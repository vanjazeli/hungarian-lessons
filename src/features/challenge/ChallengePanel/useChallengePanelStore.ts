import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { ChallengePanelState } from "./ChallengePanel.types";

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
  score: number;
  setScore: (score: number | ((prev: number) => number)) => void;
  resetChallengeState(): void;
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
    score: 0,
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
    resetStore: () =>
      set((state) => {
        state.panelState = ChallengePanelState.INTRO;
        state.inputValue = "";
        state.currentQuestionIndex = 0;
        state.score = 0;
      }),
  }))
);
