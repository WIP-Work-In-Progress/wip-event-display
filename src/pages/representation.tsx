import { getMembers } from "@/lib/firebase.utils";
import { Member } from "@/types/types";
import RepresentationCard from "@/features/representation-card";
import { useState, useEffect } from "react";
import "./representation.css";

export default function RepresentationPage() {
  const [members, setMembers] = useState<Member[] | null>([]);

  useEffect(() => {
    getMembers().then((members) => {
      setMembers(members);
    });
  }, []);

  if (!members) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 2xl:mx-40 gap-3 hexagons">
      {members.map((member) => (
        <RepresentationCard key={member.id} member={member} />
      ))}
    </div>
  );
}
