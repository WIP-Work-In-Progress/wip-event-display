import RepresentationPage from "@/pages/representation";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/representation")({
  component: () => <RepresentationPage />,
});
