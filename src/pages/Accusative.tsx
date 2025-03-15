import {
  Typography,
  VerticalStack,
  CenterLayout,
  Badge,
  Button,
} from "components";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export const Accusative = () => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <CenterLayout>
      {!isStarted && (
        <VerticalStack className="items-start">
          <Badge variant="outline">Challenge</Badge>
          <Typography variant="h1">Accusative</Typography>
          <Typography variant="p" muted>
            Use -t, -ot, -et, -öt, -at suffixes to form the correct accusative
            form of a Hungarian word.
          </Typography>
          <Button>
            Start
            <ArrowRight />
          </Button>
        </VerticalStack>
      )}
    </CenterLayout>
  );
};
