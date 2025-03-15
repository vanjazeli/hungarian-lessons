import { Navigation } from "features";
import { CenterContainer, Typography, VerticalStack } from "components";

export const Acusative = () => {
  return (
    <CenterContainer>
      <Navigation />
      <VerticalStack>
        <Typography variant="h1">Tárgyeset</Typography>
        <Typography variant="p" muted>
          -t, -ot, -et, -öt, -at ragokkal alkossátok meg a helyes tárgyesetet!
        </Typography>
      </VerticalStack>
    </CenterContainer>
  );
};
