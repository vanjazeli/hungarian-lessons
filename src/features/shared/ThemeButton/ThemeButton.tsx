import { Button, Typography } from "@/components";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeButton = () => {
  const [isDark, setIsDark] = useState(
    document.body.classList.contains("dark")
  );

  const handleClick = () => {
    document.body.classList.toggle("dark");
    setIsDark((prev) => !prev);
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleClick}>
      {isDark ? <Sun /> : <Moon />}
      <Typography className="sr-only" variant="span">
        Toggle between dark and light mode.
      </Typography>
    </Button>
  );
};
