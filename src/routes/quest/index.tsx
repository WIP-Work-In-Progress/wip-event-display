import QuestPage from "@/pages/quest";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/quest/")({
  component: () => <QuestPage />,
});

