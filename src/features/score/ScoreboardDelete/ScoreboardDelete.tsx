import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Button,
} from "components";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import {
  lsDeleteAllScoreboardItems,
  lsGetScoreboardItems,
  ScoreboardItems,
} from "features";

type ScoreboardDeleteProps = {
  setScoreboardItems: React.Dispatch<React.SetStateAction<ScoreboardItems>>;
};

export const ScoreboardDelete = ({
  setScoreboardItems,
}: ScoreboardDeleteProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsOpen(true);
  };

  const handleCancelClick = () => {
    setIsOpen(false);
  };

  const handleConfirmClick = () => {
    lsDeleteAllScoreboardItems();
    setScoreboardItems(lsGetScoreboardItems());
    setIsOpen(false);
  };

  return (
    <>
      <Button variant="ghost" size="icon" onClick={handleDeleteClick}>
        <Trash2 />
      </Button>
      <AlertDialog open={isOpen}>
        <AlertDialogContent className="w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Erase All Scores?</AlertDialogTitle>
            <AlertDialogDescription>
              This will erase all your scores and achievements from the
              scoreboard. Are you sure you want to start fresh?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button variant="outline" onClick={handleCancelClick}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmClick}>
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
