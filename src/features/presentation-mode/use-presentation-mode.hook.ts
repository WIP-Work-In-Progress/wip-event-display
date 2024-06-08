import { useContext } from "react";
import { PresentationModeContext } from "./presentation-mode.context";

export function usePresentationModeContext(): PresentationModeContext {
  const context = useContext(PresentationModeContext);
  if (!context)
    throw new Error(
      "usePresentationModeContext must be used within a PresentationModeContextProvider"
    );
  return context;
}
