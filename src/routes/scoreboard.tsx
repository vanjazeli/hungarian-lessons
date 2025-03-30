import { Scoreboard } from "pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/scoreboard")({
  component: () => <Scoreboard />,
});
