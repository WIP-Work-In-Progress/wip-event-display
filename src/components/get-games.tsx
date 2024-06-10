// EXAMPLE

import { getGames } from "@/lib/firebase.utils";
import { Game } from "@/types/types";
import { useEffect, useState } from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from "@/components/ui/card";

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
					<Card
						key={game.id}
						className="bg-neutral-800 w-full sm:w-fit sm:h-48 m-2 rounded-lg rounded-br-2xl shadow-md relative"
					>
						<CardHeader>
							<CardTitle className="bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-neutral-500">
								{game.name}
							</CardTitle>
							<CardDescription className="pt-4">
								{game.shortDescription}
							</CardDescription>
						</CardHeader>
						<img src={game.previewPhoto.url} alt={game.previewPhoto.name} />
						<CardFooter>
							{game.urls?.map((url, id) => {
								return (
									<a key={id} href={url}>
										{url}
									</a>
								);
							})}
						</CardFooter>
					</Card>
				);
			})}
		</div>
	);
};

export default GetGames;
