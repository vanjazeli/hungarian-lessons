import { Button } from "@/components";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeButton = () => {
  const [isDark, setIsDark] = useState(true);

  const handleClick = () => {
    document.body.classList.toggle("dark");
    setIsDark((prev) => !prev);
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleClick}>
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
};
