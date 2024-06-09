import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function IndexPage() {
  return (
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
  );
}
