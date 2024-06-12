import Github from "@/components/icons/github";
import LinkedIn from "@/components/icons/linked-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Member } from "@/types/types";
import "./representation-card.css";
import { PresentationMode } from "@/features/presentation-mode/presentation-mode.enum";
import { usePresentationModeContext } from "@/features/presentation-mode/use-presentation-mode.hook";
import QRCodeDisplay from "@/components/shared/qrcode";

export default function RepresentationCard({ member }: { member: Member }) {
	const { presentationMode } = usePresentationModeContext();
	return (
		<Card className="min-h-60 flex-1">
			<CardHeader>
				<CardTitle>
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-600">
						{member.name} {member.lastName}
					</span>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex flex-row gap-x-5">
					<img
						src={member.photo.url}
						alt={member.photo.name}
						className="h-full max-w-32 sm:max-w-40 aspect-square object-cover rounded"
					/>
					<div className="flex-1 flex flex-col justify-between">
						<p className="text-center pb-1 bottom-gradient">{member.title}</p>
						<div className="py-2 flex justify-around gap-6 icons-container">
							{/* {member.githubUrl && (
								<a
									href={member.githubUrl}
									target="_blank"
									className="flex-1 max-w-24"
								>
									<Github className="hover:fill-primary-400 active:fill-primary-600" />
								</a>
							)} */}
							{presentationMode === PresentationMode.NOT_PRESENTING &&
								member.githubUrl && (
									<a
										href={member.githubUrl}
										target="_blank"
										className="flex-1 max-w-24"
									>
										<Github className="hover:fill-primary-400 active:fill-primary-600" />
									</a>
								)}
							{presentationMode === PresentationMode.PRESENTING &&
								member.githubUrl && (
									<div className="flex justify-center gap-4">
										<QRCodeDisplay url={member.githubUrl} />
										<Github className="hover:fill-primary-400 active:fill-primary-600 w-10 h-10 self-center" />
									</div>
								)}
							{presentationMode === PresentationMode.NOT_PRESENTING &&
								member.linkedinUrl && (
									<a
										href={member.linkedinUrl}
										target="_blank"
										className="flex-1 max-w-24"
									>
										<LinkedIn className="hover:fill-primary-400 active:fill-primary-600" />
									</a>
								)}
							{presentationMode === PresentationMode.PRESENTING &&
								member.linkedinUrl && (
									<div className="flex gap-4">
										<LinkedIn className="hover:fill-primary-400 active:fill-primary-600 w-10 h-10 self-center" />
										<QRCodeDisplay url={member.linkedinUrl} />
									</div>
								)}
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
