import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";
import { Member } from "@/types/types";

export default function RepresentationCard({ member }: { member: Member }) {

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{member.name + " " + member.lastName}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row gap-x-3">
            <img src="/example.png" alt="placeholder" className="w-full h-full" />
            <div>
              <p>{member.title}</p>
              <div className="py-2">
                <div className="flex flex-row gap-x-2">
                  <Github />
                  <a href={member.githubUrl}>{member.githubUrl}</a>
                </div>
                <div className="flex flex-row gap-x-2">
                  <Linkedin />
                  <a href={member.linkedinUrl}>{member.linkedinUrl}</a>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
