import { Badge, Typography, VerticalStack } from "components";

export const ChallengeScore = () => {
  return (
    <VerticalStack>
      <Badge variant="outline">Challenge</Badge>
      <Typography variant="h1">Score:</Typography>
    </VerticalStack>
  );
};
