import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Work In Progress</CardTitle>
          <CardDescription>Pełna strona już wkrótce!</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Witamy!</p>
        </CardContent>
        <CardFooter>
          <p>Zapraszamy na stoisko</p>
        </CardFooter>
      </Card>
    </>
  ),
});
