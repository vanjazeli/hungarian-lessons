import { Typography, VerticalStack, CenterLayout, Badge } from "components";

export const Accusative = () => {
  return (
    <CenterLayout>
      <VerticalStack>
        <Badge variant="outline">Challenge</Badge>
        <Typography variant="h1">Accusative</Typography>
        <Typography variant="p" muted>
          Use -t, -ot, -et, -öt, -at suffixes to form the correct accusative
          form of a Hungarian word.
        </Typography>
      </VerticalStack>
    </CenterLayout>
  );
};
