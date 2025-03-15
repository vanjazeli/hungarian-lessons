import { Link } from "react-router";
import { Button } from "components";
import { ArrowLeft } from "lucide-react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const BackButton = ({ ...props }: ButtonProps) => {
  return (
    <Button asChild variant="ghost" size="icon" {...props}>
      <Link to="/">
        <ArrowLeft />
      </Link>
    </Button>
  );
};
