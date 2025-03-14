import { Link } from "react-router";
import { Button } from "components";
import { ChevronLeft } from "lucide-react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const BackButton = ({ ...props }: ButtonProps) => {
  return (
    <Button asChild variant="outline" size="icon" {...props}>
      <Link to="/">
        <ChevronLeft />
      </Link>
    </Button>
  );
};
