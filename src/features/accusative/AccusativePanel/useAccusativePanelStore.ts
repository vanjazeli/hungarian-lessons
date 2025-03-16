import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { AccusativePanelState } from "./AccusativePanel.types";

type AccusativePanelStore = {
  panelState: AccusativePanelState;
  setPanelState: (
    panelState:
      | AccusativePanelState
      | ((prev: AccusativePanelState) => AccusativePanelState)
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

export const useAccusativePanelStore = create<AccusativePanelStore>()(
  immer((set) => ({
    panelState: AccusativePanelState.INTRO,
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
        state.panelState = AccusativePanelState.INTRO;
        state.inputValue = "";
        state.currentQuestionIndex = 0;
        state.score = 0;
      }),
  }))
);
