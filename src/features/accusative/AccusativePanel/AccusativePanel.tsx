import { AccusativeChallenge, AccusativeIntro } from "features";
import { useAccusativePanelStore } from "./useAccusativePanelStore";
import { useEffect } from "react";
import { AccusativePanelState } from "./AccusativePanel.types";

export const AccusativePanel = () => {
  const { score, panelState, resetStore } = useAccusativePanelStore();

  useEffect(() => {
    return () => {
      resetStore();
    };
  }, [resetStore]);

  return (
    <div>
      {panelState === AccusativePanelState.INTRO && <AccusativeIntro />}
      {panelState === AccusativePanelState.CHALLENGE && <AccusativeChallenge />}
      {panelState === AccusativePanelState.SCORE && <div>{score}</div>}
    </div>
  );
};
