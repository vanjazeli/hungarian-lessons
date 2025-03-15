import { Button } from "components";
import { cn } from "lib";
import { Dispatch, SetStateAction } from "react";

const letters = ["á", "é", "í", "ó", "ö", "ő", "ú", "ü", "ű"];

type KeyboardProps = React.HTMLAttributes<HTMLDivElement> & {
  setInput: Dispatch<SetStateAction<string>>;
};

export const Keyboard = ({ className, setInput, ...props }: KeyboardProps) => {
  const handleClick = (letter: string) => {
    setInput((prev) => prev + letter);
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
