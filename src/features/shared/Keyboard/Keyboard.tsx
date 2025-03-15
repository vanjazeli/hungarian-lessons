import { Button } from "components";
import { Dispatch, SetStateAction } from "react";

const letters = ["á", "é", "í", "ó", "ö", "ő", "ú", "ü", "ű"];

type KeyboardProps = {
  setInput: Dispatch<SetStateAction<string>>;
};

export const Keyboard = ({ setInput }: KeyboardProps) => {
  const handleClick = (letter: string) => {
    setInput((prev) => prev + letter);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
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
