import { Badge, Button, Typography, VerticalStack } from "components";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export const AccusativeIntro = () => {
  const { t } = useTranslation("accusative");

  return (
    <VerticalStack>
      <Badge variant="outline">{t("badge")}</Badge>
      <Typography variant="h1">{t("title")}</Typography>
      <Typography variant="p">{t("description")}</Typography>
      <div className="flex flex-col gap-2">
        <Typography variant="span" muted>
          {t("listTitle")}
        </Typography>
        <ul>
          <li className="flex items-center gap-2">
            <Typography className="font-bold" variant="span">
              -t:
            </Typography>
            <Typography variant="span" muted>
              Kutya
            </Typography>{" "}
            <ArrowRight size="12" className="text-muted-foreground" />{" "}
            <Typography variant="span" muted>
              Kutyát
            </Typography>
          </li>
          <li className="flex items-center gap-2">
            <Typography className="font-bold" variant="span">
              -ot:
            </Typography>
            <Typography variant="span" muted>
              Nap
            </Typography>{" "}
            <ArrowRight size="12" className="text-muted-foreground" />{" "}
            <Typography variant="span" muted>
              Napot
            </Typography>
          </li>
          <li className="flex items-center gap-2">
            <Typography className="font-bold" variant="span">
              -et:
            </Typography>
            <Typography variant="span" muted>
              Kép
            </Typography>{" "}
            <ArrowRight size="12" className="text-muted-foreground" />{" "}
            <Typography variant="span" muted>
              Képet
            </Typography>
          </li>
          <li className="flex items-center gap-2">
            <Typography className="font-bold" variant="span">
              -öt:
            </Typography>
            <Typography variant="span" muted>
              Tükör
            </Typography>{" "}
            <ArrowRight size="12" className="text-muted-foreground" />{" "}
            <Typography variant="span" muted>
              Tükröt
            </Typography>
          </li>
          <li className="flex items-center gap-2">
            <Typography className="font-bold" variant="span">
              -at:
            </Typography>
            <Typography variant="span" muted>
              Ház
            </Typography>{" "}
            <ArrowRight size="12" className="text-muted-foreground" />{" "}
            <Typography variant="span" muted>
              Házat
            </Typography>
          </li>
        </ul>
      </div>
      <Button className="mt-20">
        {t("button")}
        <ArrowRight />
      </Button>
    </VerticalStack>
  );
};
