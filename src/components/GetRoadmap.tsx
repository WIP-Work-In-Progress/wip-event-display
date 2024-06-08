import { getRoadmapEvent } from "@/lib/firebase_utils";
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
          <h1>{event.name}</h1>
          <p>{event.start_date.toLocaleDateString()}</p>
          <p>{event.end_date.toDateString()}</p>
          <p>{event.description}</p>
          <p>{event.short_description}</p>
          {event.urls?.map((url, id) => (
            <a href={url} key={id}>
              {url}{" "}
            </a>
          ))}
          {event.photos?.map((photo, id) => (
            <img width="300" src={photo.url} key={id} />
          ))}
          {event.contributing_members.map((member, id) => {
            return <div key={id}> {member} </div>;
          })}
        </div>
      ))}
    </div>
  );
};

export default GetRoadmap;
