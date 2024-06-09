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
        : PresentationMode.PRESENTING
    );
  };

  return (
    <div>
      <p>
        {presentationMode === PresentationMode.PRESENTING
          ? "Turn off presentation mode?"
          : "Turn on presentation mode?"}
      </p>
      <div className="flex gap-2">
        <Switch
          onCheckedChange={togglePresentationMode}
          checked={presentationMode === PresentationMode.PRESENTING}
        />
        {presentationMode === PresentationMode.PRESENTING ? (
          <p>🎥 Presentation mode is on!</p>
        ) : (
          <p>🚫 Presentation mode is off.</p>
        )}
      </div>
    </div>
  );
}
