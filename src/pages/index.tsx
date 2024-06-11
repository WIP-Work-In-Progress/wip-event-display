import { getMembers, getRoadmap } from "@/lib/firebase.utils";
import { PresentationMode } from "@/features/presentation-mode/presentation-mode.enum";
import { usePresentationModeContext } from "@/features/presentation-mode/use-presentation-mode.hook";
import { Member, RoadmapEvent } from "@/types/types";
import { useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import RepresentationCard from "@/features/representation-card";
import QRCodeDisplay from "@/components/shared/qrcode";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default function IndexPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [members, setMembers] = useState<Member[] | null>([]);
  const [roadmap, setRoadmap] = useState<RoadmapEvent[] | null>([]);
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
    getRoadmap().then((roadmap) => {
      setRoadmap(roadmap);
    });
  }, []);

  if (!members || !roadmap) {
    return <div>Loading...</div>;
  }

  console.log(roadmap);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex">
        <div className="flex flex-col justify-center w-1/5">
          {presentationMode === PresentationMode.PRESENTING && (
            <div className="mr-auto ml-auto">
              <div className="flex justify-center h-20">
                <FaFacebook className="w-12 h-12 fill-blue-500" />
              </div>
              <QRCodeDisplay
                url={"https://www.facebook.com/profile.php?id=61556930777284"}
              />
            </div>
          )}
        </div>
        <div className="flex w-3/5 place-items-center">
          <Chrono
            items={roadmap}
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
        <div className="flex flex-col justify-center w-1/5">
          {presentationMode === PresentationMode.PRESENTING && (
            <div className="mr-auto ml-auto">
              <QRCodeDisplay
                url={
                  "https://www.instagram.com/wip_ug?igsh=anY4dTlsbHNyc3R4&utm_source=qr"
                }
              />
              <div className="flex justify-center h-20">
                <BsInstagram className="w-12 h-12 fill-pink-800 self-end" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-10">
        {members.map(
          (member) =>
            member.isPresenting && (
              <RepresentationCard key={member.id} member={member} />
            )
        )}
      </div>
    </div>
  );
}
