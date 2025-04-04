import { useState, useEffect } from "react";
import { useBlocker } from "@tanstack/react-router";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Button,
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

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (status === "blocked") {
      setIsOpen(true);
    }
  }, [status]);

  const handleCancel = () => {
    setIsOpen(false);
    if (reset) reset();
  };

  const handleConfirm = () => {
    setIsOpen(false);
    if (proceed) proceed();
  };

  return (
    <>
      <AlertDialog open={isOpen}>
        <AlertDialogContent className="w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to exit?</AlertDialogTitle>
            <AlertDialogDescription>
              Your current progress will be lost if you proceed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirm}>
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {children}
    </>
  );
};
