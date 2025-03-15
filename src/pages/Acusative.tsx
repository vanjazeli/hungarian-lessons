import { Typography, VerticalStack, CenterLayout } from "components";

export const Acusative = () => {
  return (
    <CenterLayout>
      <VerticalStack>
        <Typography variant="h1">Accusative</Typography>
        <Typography variant="p" muted>
          Use -t, -ot, -et, -öt, -at suffixes to form the correct accusative
          form of a Hungarian word.
        </Typography>
      </VerticalStack>
    </CenterLayout>
  );
};
