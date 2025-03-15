import {
  Button,
  Typography,
  VerticalStack,
  MainLayout,
  Badge,
} from "components";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export const MainMenu = () => {
  const { t } = useTranslation("mainMenu");

  return (
    <MainLayout>
      <VerticalStack>
        <Badge variant="outline">{t("badge")}</Badge>
        <Typography variant="h1">{t("title")}</Typography>
        <Typography variant="p" muted>
          {t("description")}
        </Typography>
        <Button asChild>
          <Link to="/accusative">{t("accusative")}</Link>
        </Button>
      </VerticalStack>
    </MainLayout>
  );
};
