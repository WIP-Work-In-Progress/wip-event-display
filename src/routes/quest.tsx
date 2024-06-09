import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/quest")({
  component: () => <div>Hello /quest!</div>,
});
