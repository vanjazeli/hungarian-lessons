import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Typography,
} from "components";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { i18n, t } = useTranslation("navigation");

  const { changeLanguage, language } = i18n;
  const langaugeOptions = [
    {
      label: "English",
      code: "en",
    },
    {
      label: "Magyar",
      code: "hu",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages />
          <Typography className="sr-only" variant="span">
            {t("language")}
          </Typography>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {langaugeOptions.map(({ label, code }) => (
          <DropdownMenuCheckboxItem
            key={code}
            checked={language === code}
            onClick={() => changeLanguage(code)}
          >
            {label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
