import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
      <Card className="max-w-screen-lg border-4">
        <CardHeader className="grid place-items-center">
          <CardTitle>
            <h1 className="text-6xl tracking-wider">
              {quest.name.toUpperCase()}
            </h1>
          </CardTitle>
          <CardDescription>{quest.shortDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-xl text-justify p-5 bg-primary rounded-xl text-secondary m-5">
            {quest.description}
          </p>
          <div className="grid place-items-center mx-10">
            <Carousel className=" w-full">
              <CarouselContent>
                {quest.photos.map((photo, id) => (
                  <CarouselItem
                    key={id}
                    className="pl-1 md:basis-1/1 lg:basis-1/1 grid place-items-center"
                  >
                    <img className="" src={photo.url} alt={photo.name} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious />
            </Carousel>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default QuestDetailsPage;
