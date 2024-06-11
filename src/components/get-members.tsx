import { getMembers } from "@/lib/firebase.utils";
import { Member } from "@/types/types";
import { useEffect, useState } from "react";

const GetMembers = () => {
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
    <div>
      {members.map((member) => (
        <div key={member.id}>
          <p>{member.order}</p>
          <h1>{member.name}</h1>
          <p>{member.lastName}</p>
          <p>{member.title}</p>
          <a href={member.githubUrl}>{member.githubUrl}</a>
          <a href={member.linkedinUrl}>{member.linkedinUrl}</a>
          <img width={100} src={member.photo.url} alt={member.photo.name} />
          <p>{member.isPresenting}</p>
        </div>
      ))}
    </div>
  );
};

export default GetMembers;
