import QuestDetailsPage from "@/pages/quest-details";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/quest/$id")({
  component: () => <QuestDetailsPage />,
});
