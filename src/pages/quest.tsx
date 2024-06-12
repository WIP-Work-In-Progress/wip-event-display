import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Game } from "@/types/types";
import { getGames } from "@/lib/firebase.utils";
import DynamicIcon from "@/features/dynamic-icon/dynamic-icon";
import { Link } from "@tanstack/react-router";

export default function QuestPage() {
  const [games, setGames] = useState<Game[] | null>([]);

  useEffect(() => {
    getGames().then((games) => {
      setGames(games);
    });
  }, []);

  if (games === null) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="flex flex-col h-9/12">
        <div>
          <div className="flex justify-center flex-col mr-auto ml-auto w-5/6 items-center text-lg sm:text-5xl h-48">
            <div className="font-bold pr-4">WIP Quest: </div>
            <div>Podejmij się wyzwania</div>
          </div>
        </div>
        <div className="flex flex-wrap md:w-4/5 justify-center ml-auto mr-auto">
          {games.map((game, id) => {
            return (
              <Link key={id} to="/quest/$id" params={{ id: game.id }}>
                <Card className="bg-neutral-800 w-full md:w-fit md:h-48 m-2 rounded-lg rounded-br-2xl shadow-md relative hover:bg-zinc-700 hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-600">
                      {game.name}
                    </CardTitle>
                    <CardDescription className="pt-4">
                      {game.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-end md:absolute md:right-0 md:bottom-0">
                    {game.icons.map((icon, id) => {
                      return <DynamicIcon key={id} icon={icon} />;
                    })}
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
