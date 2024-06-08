import { getMembers } from "@/lib/firebase_utils";
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
          <h1>{member.name}</h1>
          <p>{member.last_name}</p>
          <p>{member.title}</p>
          <a href={member.github_url}>{member.github_url}</a>
          <a href={member.linkedin_url}>{member.linkedin_url}</a>
          <p>{member.is_presenting}</p>
        </div>
      ))}
    </div>
  );
};

export default GetMembers;
