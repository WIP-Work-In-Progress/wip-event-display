import Css from "@/components/icons/css";
import Go from "@/components/icons/go";
import Html from "@/components/icons/html";
import Javascript from "@/components/icons/js";
import { FaJava } from "react-icons/fa";
import {
	Card,
	// CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
// import GetGames from "@/components/get-games";
// import { useState } from "react";

export default function QuestPage() {
	// const [games, setGames] = useState([]);

	return (
		<>
			{/* <div>
				<GetGames />
			</div> */}
			<div className="flex flex-col h-9/12">
				<div>
					<div className="flex justify-center flex-col mr-auto ml-auto w-5/6 items-center text-lg sm:text-5xl h-48">
						<div className="font-bold pr-4">WIP Quest: </div>
						<div>Podejmij się wyzwania</div>
					</div>
				</div>
				<div className="flex flex-wrap md:w-4/5 justify-center ml-auto mr-auto">
					<Card className="bg-neutral-800 w-full md:w-fit md:h-48 m-2 rounded-lg rounded-br-2xl shadow-md relative hover:bg-zinc-700 hover:shadow-md">
						<CardHeader>
							<CardTitle className="bg-clip-text text-transparent bg-gradient-to-b from-pink-900 to-blue-900">
								WIP Quest
							</CardTitle>
							<CardDescription className="pt-4">
								Odtwórz stronę w HTML i CSS ze zdjęcia
							</CardDescription>
						</CardHeader>
						{/* <CardContent>
							<p>Witamy!</p>
						</CardContent> */}
						<CardFooter className="absolute bottom-0 right-0">
							<Css className="w-5 h-5 fill-blue-500" />
							<Html className="w-5 h-5 fill-red-500" />
						</CardFooter>
					</Card>
					<Card className="bg-neutral-800 w-full md:w-fit md:h-48 m-2 rounded-lg shadow-md relative">
						<CardHeader>
							<CardTitle className="bg-clip-text text-transparent bg-gradient-to-b from-pink-900 to-blue-900">
								Javascript
							</CardTitle>
							<CardDescription className="pt-4">
								Dodaj interaktywności do statycznej strony internetowej
							</CardDescription>
						</CardHeader>
						{/* <CardContent>
							<p>Witamy!</p>
						</CardContent> */}
						<CardFooter className="absolute bottom-0 right-0">
							<Javascript className="w-5 h-5 fill-yellow-500" />
						</CardFooter>
					</Card>
					<Card className="bg-neutral-800 w-full md:w-fit md:h-48 m-2 rounded-lg shadow-md relative">
						<CardHeader>
							<CardTitle className="bg-clip-text text-transparent bg-gradient-to-b from-pink-900 to-blue-900">
								Gra platformowa
							</CardTitle>
							<CardDescription className="pt-4">
								Zaimplementuj mechaniki, aby ukończyć grę
							</CardDescription>
						</CardHeader>
						{/* <CardContent>
							<p>Witamy!</p>
						</CardContent>
						<CardFooter>
							<p>Zapraszamy na stoisko</p>
						</CardFooter> */}
					</Card>
					<Card className="bg-neutral-800 w-full md:w-fit md:h-48 m-2 rounded-lg shadow-md relative">
						<CardHeader>
							<CardTitle className="bg-clip-text text-transparent bg-gradient-to-b from-pink-900 to-blue-900">
								Popraw błąd
							</CardTitle>
							<CardDescription className="pt-4">
								Spróbuj swoich sił w pisaniu i naprawianiu kodu
							</CardDescription>
						</CardHeader>
						{/* <CardContent>
							<p>Witamy!</p>
						</CardContent>
						<CardFooter>
							<p>Zapraszamy na stoisko</p>
						</CardFooter> */}
					</Card>
					<Card className="bg-neutral-800 w-full md:w-fit md:h-48 m-2 rounded-lg shadow-md relative">
						<CardHeader>
							<CardTitle className="bg-clip-text text-transparent bg-gradient-to-b from-pink-900 to-blue-900">
								Dokończ grę, by zagrać
							</CardTitle>
							<CardDescription className="pt-4">
								Spróbuj swoich sił w pisaniu i naprawianiu kodu
							</CardDescription>
						</CardHeader>
						{/* <CardContent>
							<p>Witamy!</p>
						</CardContent> */}
						<CardFooter className="absolute bottom-0 right-0">
							<Go className="w-5 h-5 fill-green-500" />
							<FaJava className="w-5 h-5" />
						</CardFooter>
					</Card>
				</div>
			</div>
		</>
	);
}
