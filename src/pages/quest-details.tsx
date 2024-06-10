import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getGame } from "@/lib/firebase.utils";
import { Route } from "@/routes/quest/$id";
import { Game } from "@/types/types";
import { useEffect, useState } from "react";

const QuestDetailsPage = () => {
  const { id } = Route.useParams();
  const [quest, setQuest] = useState<Game | null>(null);
  useEffect(() => {
    getGame(id).then((data) => setQuest(data));
  }, []);
  if (!quest) return <div>Loading ...</div>;
  return (
    <div className="grid place-items-center">
      <Card className="max-w-screen-lg">
        <CardHeader className="grid place-items-center">
          <CardTitle>{quest.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{quest.description}</p>
          <div className="grid grid-cols-2 gap-5">
            {quest.photos.map((photo, id) => (
              <img
                className="max-w-48"
                key={id}
                src={photo.url}
                alt={photo.name}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuestDetailsPage;
