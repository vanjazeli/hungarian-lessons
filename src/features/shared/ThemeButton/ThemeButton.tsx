import { Button, Typography } from "@/components";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ThemeButton = () => {
  const { t } = useTranslation("navigation");

  const [isDark, setIsDark] = useState(true);

  const handleClick = () => {
    document.body.classList.toggle("dark");
    setIsDark((prev) => !prev);
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleClick}>
      {isDark ? <Sun /> : <Moon />}
      <Typography className="sr-only" variant="span">
        {t("theme")}
      </Typography>
    </Button>
  );
};
