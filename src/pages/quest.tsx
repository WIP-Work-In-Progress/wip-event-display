import {
	Card,
	// CardContent,
	CardDescription,
	// CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function QuestPage() {
	return (
		<>
			<div className="flex flex-col h-9/12">
				<div>
					<div className="flex justify-center items-center text-5xl h-48">
						<div className="font-bold pr-4">WIP Quest: </div>
						<div>Podejmij się wyzwania</div>
					</div>
				</div>
				<div className="flex flex-wrap w-4/5 justify-center ml-auto mr-auto">
					<Card className="bg-neutral-800 pd-16 m-2 rounded-lg shadow-md relative">
						<CardHeader>
							<CardTitle>WIP Quest</CardTitle>
							<CardDescription className="pt-4">
								Odtwórz stronę w HTML i CSS ze zdjęcia
							</CardDescription>
						</CardHeader>
						{/* <CardContent>
							<p>Witamy!</p>
						</CardContent>
						<CardFooter>
							<p>Zapraszamy na stoisko</p>
						</CardFooter> */}
					</Card>
					<Card className="bg-neutral-800 pd-16 m-2 rounded-lg shadow-md relative">
						<CardHeader>
							<CardTitle>Javascript</CardTitle>
							<CardDescription>
								Dodaj interaktywności do statycznej strony internetowej
							</CardDescription>
						</CardHeader>
						{/* <CardContent>
							<p>Witamy!</p>
						</CardContent>
						<CardFooter>
							<p>Zapraszamy na stoisko</p>
						</CardFooter> */}
					</Card>
					<Card className="bg-neutral-800 pd-16 m-2 rounded-lg shadow-md relative">
						<CardHeader>
							<CardTitle>Gra platformowa</CardTitle>
							<CardDescription>
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
					<Card className="bg-neutral-800 pd-16 m-2 rounded-lg shadow-md relative">
						<CardHeader>
							<CardTitle>Popraw błąd</CardTitle>
							<CardDescription>
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
					<Card className="bg-neutral-800 pd-16 m-2 rounded-lg shadow-md">
						<CardHeader>
							<CardTitle>Dokończ grę, by zagrać</CardTitle>
							<CardDescription>
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
				</div>
			</div>
		</>
	);
}
