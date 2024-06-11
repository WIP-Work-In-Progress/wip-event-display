import MasterPassword from "@/pages/master-password";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/q/85432")({
  component: () => <MasterPassword />,
});
