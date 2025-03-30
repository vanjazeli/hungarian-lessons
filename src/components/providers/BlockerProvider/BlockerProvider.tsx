import { useBlocker } from "@tanstack/react-router";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "components";
import { useBlockerProviderStore } from "./useBlockerProviderStore";

type BlockerProviderProps = {
  children: React.ReactNode;
};

export const BlockerProvider = ({ children }: BlockerProviderProps) => {
  const { isRedirectionBlocked } = useBlockerProviderStore();

  const { proceed, reset, status } = useBlocker({
    condition: isRedirectionBlocked,
  });

  return (
    <>
      <AlertDialog open={status === "blocked"}>
        <AlertDialogContent className="w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to exit?</AlertDialogTitle>
            <AlertDialogDescription>
              Your current progress will be lost if you proceed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={reset}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={proceed}>Exit</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {children}
    </>
  );
};
