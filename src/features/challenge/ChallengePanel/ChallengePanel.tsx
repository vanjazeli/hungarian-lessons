import { ChallengeTask, ChallengeIntro, ChallengeScore } from "features";
import { useChallengePanelStore } from "./useChallengePanelStore";
import { useEffect } from "react";
import { ChallengePanelState } from "./ChallengePanel.types";

export const ChallengePanel = () => {
  const { panelState, resetStore } = useChallengePanelStore();

  useEffect(() => {
    return () => {
      resetStore();
    };
  }, [resetStore]);

  return (
    <div>
      {panelState === ChallengePanelState.INTRO && <ChallengeIntro />}
      {panelState === ChallengePanelState.TASK && <ChallengeTask />}
      {panelState === ChallengePanelState.SCORE && <ChallengeScore />}
    </div>
  );
};
