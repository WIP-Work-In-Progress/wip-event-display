
import { PresentationMode } from "@/features/presentation-mode/presentation-mode.enum";
import { usePresentationModeContext } from "@/features/presentation-mode/use-presentation-mode.hook";
import { useEffect, useState } from "react";
import { Chrono } from "react-chrono";

export default function IndexPage() {
  const [activeIndex, setActiveIndex] = useState(0);
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
  const items = []; //TODO: Fill in

  return (
    <div className="flex justify-center">
      <div className="grid w-3/5 place-items-center">

        <Chrono
          items={items}
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
    </div>
  );
}
