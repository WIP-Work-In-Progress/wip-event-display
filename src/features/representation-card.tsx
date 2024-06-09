import Github from "@/components/icons/github";
import LinkedIn from "@/components/icons/linked-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Member } from "@/types/types";
import "./representation-card.css";

export default function RepresentationCard({ member }: { member: Member }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {member.name} {member.lastName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-x-5">
          <img
            src={member.photo.url}
            alt={member.photo.name}
            className="w-full h-full aspect-square"
          />
          <div className="contact">
            <p>{member.title}</p>
            <div className="py-2">
              <div className="flex flex-row gap-x-2">
                <Github className="max-w-6" />
                <a href={member.githubUrl}>{member.githubUrl}</a>
              </div>
              <div className="flex flex-row gap-x-2">
                <LinkedIn className="max-w-6" />
                <a href={member.linkedinUrl}>{member.linkedinUrl}</a>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
