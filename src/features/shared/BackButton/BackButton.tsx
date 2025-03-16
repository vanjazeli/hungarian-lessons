import { Link } from "react-router";
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
import { useTranslation } from "react-i18next";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const BackButton = (props: ButtonProps) => {
  const { t } = useTranslation("navigation");

  const { isConfirmationRequired } = useBackButtonStore();

  if (isConfirmationRequired) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" size="icon" {...props}>
            <ArrowLeft />
            <Typography className="sr-only" variant="span">
              {t("back")}
            </Typography>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle>{t("confirmationDialog.title")}</AlertDialogTitle>
            <AlertDialogDescription>
              {t("confirmationDialog.description")}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{"confirmationDialog.cancel"}</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Link to="/">{"confirmationDialog.confirm"}</Link>
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
          {t("back")}
        </Typography>
      </Link>
    </Button>
  );
};
