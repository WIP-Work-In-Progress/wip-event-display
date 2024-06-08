// EXAMPLE

import { getGames } from "@/lib/firebase_utils";
import { Game } from "@/types/types";
import { useEffect, useState } from "react";

const GetGames = () => {
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
    <div>
      <h1>GetGames</h1>
      {games.map((game) => {
        return (
          <div key={game.id}>
            <h2>{game.name}</h2>
            <p>{game.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GetGames;
