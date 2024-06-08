import { getMembers } from "@/lib/firebase.utils";
import { Member } from "@/types/types";
import RepresentationCard from "@/features/representation-card";
import { useState, useEffect } from "react";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-10">
      {members.map((member) => (
        <div id={member.id}>
          <RepresentationCard member={member} />
        </div>
      ))}
    </div>
  );
}
