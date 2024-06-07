import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/quest")({
	component: () => (
		<>
			<div className="flex flex-col">
				<div className="flex justify-evenly h-1/4">
					<div>Logo</div>
					<div>QR</div>
				</div>
				<div>
					<div className="flex justify-center text-5xl">
						<div className="font-bold pr-4">WIP Quest: </div>
						<div>Podejmij się wyzwania</div>
					</div>
				</div>
				<div className="flex flex-wrap w-3/5">
					<div className="bg-neutral-800 py-24 px-32 m-2 rounded-lg shadow-md">
						Zad1
					</div>
					<div className="bg-neutral-800 py-24 px-32 m-2">Zad1</div>
					<div className="bg-neutral-800 py-24 px-32 m-2">Zad1</div>
					<div className="bg-neutral-800 py-24 px-32 m-2">Zad1</div>
					<div className="bg-neutral-800 py-24 px-32 m-2">Zad1</div>
					<div className="bg-neutral-800 py-24 px-32 m-2">Zad1</div>
				</div>
			</div>
		</>
	),
});
