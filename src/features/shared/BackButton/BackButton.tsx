import { Link } from "@tanstack/react-router";
import {
  Button,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Typography,
} from "components";
import { ArrowLeft } from "lucide-react";
import { useBackButtonStore } from "./useBackButtonStore";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const BackButton = (props: ButtonProps) => {
  const { isConfirmationRequired } = useBackButtonStore();

  if (isConfirmationRequired) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" size="icon" {...props}>
            <ArrowLeft />
            <Typography className="sr-only" variant="span">
              Back
            </Typography>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to exit?</AlertDialogTitle>
            <AlertDialogDescription>
              Your current progress will be lost if you proceed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Link to="/">Exit</Link>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

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
