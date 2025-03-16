import { useAccusativePanelStore } from "features";
import { Button } from "components";
import { cn } from "lib";

const letters = ["á", "é", "í", "ó", "ö", "ő", "ú", "ü", "ű"];

type KeyboardProps = React.HTMLAttributes<HTMLDivElement>;

export const Keyboard = ({ className, ...props }: KeyboardProps) => {
  const { inputValue, setInputValue } = useAccusativePanelStore();

  const handleClick = (letter: string) => {
    setInputValue(inputValue + letter);
  };

  return (
    <div
      className={cn("flex flex-wrap justify-center gap-4", className)}
      {...props}
    >
      {letters.map((letter, index) => (
        <Button
          variant="outline"
          size="icon"
          key={index}
          onClick={() => handleClick(letter)}
        >
          {letter}
        </Button>
      ))}
    </div>
  );
};
