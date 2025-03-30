import { Link } from "@tanstack/react-router";
import { Button, Typography } from "components";
import { ArrowLeft } from "lucide-react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const BackButton = (props: ButtonProps) => {
  return (
    <Button asChild variant="ghost" size="icon" {...props}>
      <Link to="/">
        <ArrowLeft />
        <Typography className="sr-only" variant="span">
          Back
        </Typography>
      </Link>
    </Button>
  );
};
