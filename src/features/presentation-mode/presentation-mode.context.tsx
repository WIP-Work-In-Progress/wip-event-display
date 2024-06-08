import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { PresentationMode } from "./presentation-mode.enum";

interface PresentationModeContextProviderProps {
  children: ReactNode;
}

export interface PresentationModeContext {
  presentationMode: PresentationMode;
  setPresentationMode: Dispatch<SetStateAction<PresentationMode>>;
}

export const PresentationModeContext =
  createContext<PresentationModeContext | null>(null);

export default function PresentationModeContextProvider({
  children,
}: PresentationModeContextProviderProps): JSX.Element {
  const [presentationMode, setPresentationMode] = useState<PresentationMode>(
    () => {
      // Get the value from localStorage and fall back to NOT_PRESENTING
      const storedMode = localStorage.getItem("presentationMode");
      return storedMode
        ? JSON.parse(storedMode)
        : PresentationMode.NOT_PRESENTING;
    }
  );

  useEffect(() => {
    localStorage.setItem("presentationMode", JSON.stringify(presentationMode));
  }, [presentationMode]);

  return (
    <PresentationModeContext.Provider
      value={{ presentationMode, setPresentationMode }}
    >
      {children}
    </PresentationModeContext.Provider>
  );
}
