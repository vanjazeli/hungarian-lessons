import { Accusative } from "pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/accusative")({
  component: () => <Accusative />,
});
