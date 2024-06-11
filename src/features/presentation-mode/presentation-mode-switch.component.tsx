import { Switch } from "@/components/ui/switch";
import { usePresentationModeContext } from "./use-presentation-mode.hook";
import { PresentationMode } from "./presentation-mode.enum";

export default function PresentationModeSwitch() {
  const { presentationMode, setPresentationMode } =
    usePresentationModeContext();

  const togglePresentationMode = () => {
    setPresentationMode(
      presentationMode === PresentationMode.PRESENTING
        ? PresentationMode.NOT_PRESENTING
        : PresentationMode.PRESENTING,
    );
  };

  return (
    <div className="flex gap-4">
      <p>
        {/* {presentationMode === PresentationMode.PRESENTING
          ? "Turn off presentation mode?"
          : "Turn on presentation mode?"} */}
        presentation mode:
      </p>
      <div className="flex items-center gap-3">
        <Switch
          onCheckedChange={togglePresentationMode}
          checked={presentationMode === PresentationMode.PRESENTING}
        />
        {presentationMode === PresentationMode.PRESENTING ? (
          <p>🎥 ON!</p>
        ) : (
          <p>🚫 OFF</p>
        )}
      </div>
    </div>
  );
}
