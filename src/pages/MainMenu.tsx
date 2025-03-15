import {
  Button,
  Typography,
  VerticalStack,
  CenterLayout,
  Badge,
} from "components";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export const MainMenu = () => {
  const { t } = useTranslation();

  return (
    <CenterLayout>
      <VerticalStack>
        <Badge variant="outline">Main Menu</Badge>
        <Typography variant="h1">{t("title")}</Typography>
        <Typography variant="p" muted>
          Take part in interactive practice sessions designed to help you
          improve your Hungarian skills through a variety of exercises and
          challenges.
        </Typography>
        <Button asChild>
          <Link to="/acusative">Accusative</Link>
        </Button>
      </VerticalStack>
    </CenterLayout>
  );
};
