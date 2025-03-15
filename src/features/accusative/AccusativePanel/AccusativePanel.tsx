import { AccusativeChallenge, AccusativeIntro } from "features";
import { useState } from "react";

export const AccusativePanel = () => {
  const [isChallengeActive, setIsChallengeActive] = useState(false);

  return (
    <div>
      {!isChallengeActive ? (
        <AccusativeIntro setIsChallengeActive={setIsChallengeActive} />
      ) : (
        <AccusativeChallenge />
      )}
    </div>
  );
};
