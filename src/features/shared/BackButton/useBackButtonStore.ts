import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type BackButtonStore = {
  isConfirmationRequired: boolean;
  setIsConfirmationRequired: (
    isConfirmationRequired: boolean | ((prev: boolean) => boolean)
  ) => void;
};

export const useBackButtonStore = create<BackButtonStore>()(
  immer((set) => ({
    isConfirmationRequired: false,
    setIsConfirmationRequired: (update) =>
      set((state) => {
        state.isConfirmationRequired =
          typeof update === "function"
            ? update(state.isConfirmationRequired)
            : update;
      }),
  }))
);
