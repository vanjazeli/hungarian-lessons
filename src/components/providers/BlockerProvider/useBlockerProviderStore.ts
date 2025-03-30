import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type BlockerProviderStore = {
  isRedirectionBlocked: boolean;
  setIsRedirectionBlocked: (
    isRedirectionBlocked: boolean | ((prev: boolean) => boolean)
  ) => void;
};

export const useBlockerProviderStore = create<BlockerProviderStore>()(
  immer((set) => ({
    isRedirectionBlocked: false,
    setIsRedirectionBlocked: (update) =>
      set((state) => {
        state.isRedirectionBlocked =
          typeof update === "function"
            ? update(state.isRedirectionBlocked)
            : update;
      }),
  }))
);
