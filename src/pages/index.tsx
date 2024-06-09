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
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
  ];

  return (
    <div className="grid w-screen place-items-center">
      <div>
        <Chrono
          items={items}
          mode={roadmapMode}
          activeItemIndex={activeIndex}
          disableToolbar
        />
      </div>
    </div>
  );
}
