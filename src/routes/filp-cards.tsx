import { createFileRoute } from "@tanstack/react-router";
import { FlipCards } from "pages";

export const Route = createFileRoute("/filp-cards")({
  component: () => <FlipCards />,
});
