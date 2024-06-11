import { getMembers } from "@/lib/firebase.utils";
import { PresentationMode } from "@/features/presentation-mode/presentation-mode.enum";
import { usePresentationModeContext } from "@/features/presentation-mode/use-presentation-mode.hook";
import { Member } from "@/types/types";
import { useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import RepresentationCard from "@/features/representation-card";
// import RepresentationCard from

export default function IndexPage() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [members, setMembers] = useState<Member[] | null>([]);
	const { presentationMode } = usePresentationModeContext();
	const roadmapMode = window.matchMedia("(max-width: 768px)").matches
		? "VERTICAL"
		: "HORIZONTAL";
	useEffect(() => {
		const interval = () =>
			presentationMode === PresentationMode.PRESENTING &&
			setActiveIndex((activeIndex + 1) % 4);
		const id = setInterval(interval, 5000);
		return () => clearInterval(id);
	}, [activeIndex, presentationMode]);
	// const items = []; //TODO: Fill in

	useEffect(() => {
		getMembers().then((members) => {
			setMembers(members);
		});
	}, []);

	if (!members) {
		return <div>Loading...</div>;
	}

	const items = [
		{
			title: "30 listopada 2023",
			cardTitle: "Pierwsze spotkanie koła",
			cardSubtitle:
				"Kick-off meeting Work In Progress - spotkanie które zaczęło wszystko!",
			cardDetailedText: "Details",
			media: {
				type: "IMAGE",
				source: {
					url: "http://someurl/image.jpg",
				},
			},
		},
		{
			title: "6 grudnia 2023",
			cardTitle: "Mikołajki UG",
			cardSubtitle: "Pierwsza publiczna prezentacja koła",
			cardDetailedText:
				"Details - pierwszy WIP Quest, ciastka korzenne w nagrodę (: Nasze pierwsze wystąpienie jako koła podczas obchodów Mikołajek. Pierwszy projekt strony do prezentowania na róznych dniach otwartych oraz nasza pierwsza łamigłówka, która miała zmotywować do interakcji z nami. Niesamowite ile czasu minęło i ile się wydarzyło od tego momentu :D",
			media: {
				type: "IMAGE",
				source: {
					url: "http://someurl/image.jpg",
				},
			},
		},
		{
			title: "10-11 stycznia 2024",
			cardTitle: "BEST Coding Marathon (kliknij, żeby przeczytać artykuł)",
			url: "https://mfi.ug.edu.pl/news/111910/sukces-studentow-wydzialu-mfi",
			cardSubtitle: "Pierwszy event poza uniwersytetem",
			cardDetailedText: "Details - gościnnie Dominik Krakowski z koła NaN++",
			media: {
				type: "IMAGE",
				source: {
					url: "http://someurl/image.jpg",
				},
			},
		},
		{
			title: "6 lutego 2024",
			cardTitle: "Utworzenie i złoszenie statutu koła",
			cardSubtitle: "Pierwszy ważny krok do zoficjalizowania Work In Progress",
			cardDetailedText:
				"Details - do tej pory nasze koło działało bez oficjalnej pozycji. Było cięzko, bez mozliwości korzystania z benefitów uczelni. Od tamtego momentu pręznie się rozwijamy i dzięki pomocy jaką oferuje uczelnia kołom naukowym, mocno rozwinęliśmy skrzydła.",
			media: {
				type: "IMAGE",
				source: {
					url: "http://someurl/tutaj można wrzucić screen naszego statutu.jpg",
				},
			},
		},
		{
			title: "26 lutego 2024",
			cardTitle: "Pierwszy wykład WIP",
			cardSubtitle: "ToDo",
			cardDetailedText:
				"Details - jednym z celów naszego koła było wsparcie młodszego rocznika naszych studiów... Był to świetny sposób na integrację między rocznikami oraz pomoc w trudniejszych przedmiotach na naszej uczelni, a do tego doskonała okazja by rekrutować nowych entuzjastów webówki. Nam pomogło to rozwinąć umiejętności miękkie oraz to co potrzebne do dobrego prezentowania wiedzy.",
			media: {
				type: "IMAGE",
				source: {
					url: "http://someurl/image.jpg",
				},
			},
		},
		{
			title: "4 marca 2024",
			cardTitle:
				"Stworzenie aplikacji PathFinder (kliknij, żeby zobaczyć apkę)",
			url: "https://pathfinder.ug.edu.pl/",
			cardSubtitle:
				"Podjęliśmy się stworzenia aplikacji na targi Edu Offshore promującej kierunki naszego uniwersytetu",
			cardDetailedText:
				"Details - było to wielkie wyzwanie dla naszego zespołu, mieliśmy niespełna tydzień, żeby stworzyć funkcjonalną aplikację dla setek odwiedzających, którzy mogli za jej pomocą sprawdzić na jaki kierunek w UG powinni się wybrać. Wyzwanie nauczyło nas wielu cennych rzeczy, których na codzień nie mieliśmy okazji zrobić na studiach. Umiejętność pracy w grupie, git flow oraz odpowiednia metodyka pracy (oczywiście przyspieszona z racji na krytyczny deadline) okazały się kluczowe i pomogły nam zrozumieć dlaczego jest to tak wazne w projekcie",
			media: {
				type: "IMAGE",
				source: {
					url: "http://someurl/image.jpg",
				},
			},
		},
		{
			title: "12-13 marca 2024",
			cardTitle: "Dni otwarte UG (kliknij)",
			url: "https://dniotwarte.ug.edu.pl/",
			cardSubtitle: "",
			cardDetailedText:
				"Details - było to ważne wydarzenie dla nas jako koła, ale przede wszystkim dla uniwersytetu. Mieliśmy okazję poznać inne koła działające nie tylko na naszym wydziale, ale równiez na całym kampusie. Znów działaliśmy i zachęcaliśmy do interakcji z nami poprzez zadania do rozwiązania za nagrody. Była to dla nas porządna lekcja jak podchodzić do licealistów, czyli ludzi bez doświadczenia i szerokiej wiedzy o informatyce. Zachęcaliśmy równiez do aplikowania w przyszłości na kierunki informatyczne na naszym wydziale.",
			media: {
				type: "IMAGE",
				source: {
					url: "http://someurl/image.jpg",
				},
			},
		},
	];

	return (
		<div className="flex flex-col justify-center">
			<div className="flex w-3/5 place-items-center">
				<Chrono
					items={items}
					mode={roadmapMode}
					activeItemIndex={activeIndex}
					disableToolbar
					theme={{
						primary: "#343779",
						secondary: "#F85E3F",

						cardBgColor: "#343779",
						cardTitleColor: "#FFF",
						cardSubtitleColor: "#FFF",
						cardDetailsColor: "#FFF",

						titleColor: "#972062",
						titleColorActive: "#FFF",
					}}
				/>
			</div>
			<div className="flex">
				{members.map((member) => (
					<RepresentationCard key={member.id} member={member} />
				))}
			</div>
		</div>
	);
}
