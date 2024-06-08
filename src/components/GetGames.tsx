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
      <h1>Games</h1>
      {games.map((game) => {
        return (
          <div key={game.id}>
            <h2>{game.name}</h2>
            <p>{game.short_description}</p>
            <p>{game.description}</p>
            <img src={game.preview_photo.url} alt={game.preview_photo.name} />
            {game.photos.map((photo, id) => {
              return <img key={id} src={photo.url} alt={photo.name} />;
            })}
            {game.urls?.map((url, id) => {
              return (
                <a key={id} href={url}>
                  {url}
                </a>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GetGames;
