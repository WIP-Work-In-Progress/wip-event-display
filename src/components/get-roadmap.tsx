import { getRoadmapEvent } from "@/lib/firebase.utils";
import { RoadmapEvent } from "@/types/types";
import { useEffect, useState } from "react";

const GetRoadmap = () => {
  const [roadmap, setRoadmap] = useState<RoadmapEvent[] | null>([]);

  useEffect(() => {
    getRoadmapEvent("S8uFcLGE9q6IYwgK50QT").then((data) => {
      if (!data) {
        return;
      }
      setRoadmap([data]);
    });
  }, []);

  if (!roadmap) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {roadmap.map((event) => (
        <div key={event.id}>
          <h1>{event.title}</h1>
          <p>{event.date.toLocaleDateString()}</p>
          <p>{event.cardTitle}</p>
          <p>{event.cardSubtitle}</p>
          <p>{event.cardDetailedText}</p>
          <p>{event.url}</p>
          <img src={event.media.source.url} />
          {event.contributingMembers.map((member, id) => {
            return <div key={id}> {member} </div>;
          })}
        </div>
      ))}
    </div>
  );
};

export default GetRoadmap;
