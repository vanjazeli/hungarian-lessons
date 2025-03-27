import { Badge, Button, Typography, VerticalStack } from "components";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { useChallengePanelStore, ChallengePanelState } from "features";

export const ChallengeIntro = () => {
  const { setPanelState } = useChallengePanelStore();

  const handleClick = () => {
    setPanelState(ChallengePanelState.TASK);
  };

  return (
    <VerticalStack>
      <Badge variant="outline">Challenge</Badge>
      <Typography variant="h1">Accusative</Typography>
      <Typography variant="p">
        For each word presented, input the correct Hungarian accusative form
        into the field using the appropriate suffix: -t, -ot, -et, -öt, or -at.
      </Typography>
      <VerticalStack className="gap-2">
        <Typography variant="h2">Sources:</Typography>
        <ul className="flex flex-wrap gap-2">
          <li>
            <Badge variant="secondary" asChild>
              <Link
                to="https://betterhungarian.com/2018/04/15/hungarian-accusative-case-t-ot-at-et-ot/comment-page-1/"
                target="_blank"
              >
                Better Hungarian
                <ExternalLink />
              </Link>
            </Badge>
          </li>
          <li>
            <Badge variant="secondary" asChild>
              <Link
                to="http://www.hungarianreference.com/Nouns/-t-accusative.aspx"
                target="_blank"
              >
                Hungarian Reference
                <ExternalLink />
              </Link>
            </Badge>
          </li>
          <li>
            <Badge variant="secondary" asChild>
              <Link
                to="https://www.lingly.ai/blog/understanding-the-accusative-case-in-hungarian"
                target="_blank"
              >
                lingly.ai
                <ExternalLink />
              </Link>
            </Badge>
          </li>
        </ul>
      </VerticalStack>
      <VerticalStack className="gap-2">
        <Typography className="w-20" variant="h2">
          Examples:
        </Typography>
        <ul>
          <li className="flex items-center gap-2">
            <Typography className="w-8 font-bold" variant="span">
              -t:
            </Typography>
            <Typography className="w-20" variant="span" muted>
              Kutya
            </Typography>{" "}
            <ArrowRight size="12" className="text-muted-foreground" />{" "}
            <Typography className="w-20 pl-8" variant="span" muted>
              Kutyát
            </Typography>
          </li>
          <li className="flex items-center gap-2">
            <Typography className="w-8 font-bold" variant="span">
              -ot:
            </Typography>
            <Typography className="w-20" variant="span" muted>
              Nap
            </Typography>{" "}
            <ArrowRight size="12" className="text-muted-foreground" />{" "}
            <Typography className="w-20 pl-8" variant="span" muted>
              Napot
            </Typography>
          </li>
          <li className="flex items-center gap-2">
            <Typography className="w-8 font-bold" variant="span">
              -et:
            </Typography>
            <Typography className="w-20" variant="span" muted>
              Kép
            </Typography>{" "}
            <ArrowRight size="12" className="text-muted-foreground" />{" "}
            <Typography className="w-20 pl-8" variant="span" muted>
              Képet
            </Typography>
          </li>
          <li className="flex items-center gap-2">
            <Typography className="w-8 font-bold" variant="span">
              -öt:
            </Typography>
            <Typography className="w-20" variant="span" muted>
              Tükör
            </Typography>{" "}
            <ArrowRight size="12" className="text-muted-foreground" />{" "}
            <Typography className="w-20 pl-8" variant="span" muted>
              Tükröt
            </Typography>
          </li>
          <li className="flex items-center gap-2">
            <Typography className="w-8 font-bold" variant="span">
              -at:
            </Typography>
            <Typography className="w-20" variant="span" muted>
              Ház
            </Typography>{" "}
            <ArrowRight size="12" className="text-muted-foreground" />{" "}
            <Typography className="w-20 pl-8" variant="span" muted>
              Házat
            </Typography>
          </li>
        </ul>
      </VerticalStack>
      <Button className="self-end" onClick={handleClick}>
        Start
        <ArrowRight />
      </Button>
    </VerticalStack>
  );
};
