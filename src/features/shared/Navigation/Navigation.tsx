import { Button } from "components";
import { BackButton } from "features";
import { EllipsisVertical, Languages } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="bg-black py-4">
      <div className="mx-auto flex justify-between px-4">
        <BackButton />
        <div className="flex justify-between gap-4">
          <Button size="icon">
            <Languages />
          </Button>
          <Button size="icon">
            <EllipsisVertical />
          </Button>
        </div>
      </div>
    </nav>
  );
};
